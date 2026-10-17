"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_fuel-pump-lph_fuel-pump-lph_module_ts"],{

/***/ 83496:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/fuel-pump-lph/fuel-pump-lph-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuelPumpLphRoutingModule": () => (/* binding */ FuelPumpLphRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fuel_pump_lph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fuel-pump-lph.component */ 9791);




const routes = [{ path: '', component: _fuel_pump_lph_component__WEBPACK_IMPORTED_MODULE_0__.FuelPumpLphComponent }];
let FuelPumpLphRoutingModule = class FuelPumpLphRoutingModule {
};
FuelPumpLphRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FuelPumpLphRoutingModule);



/***/ }),

/***/ 9791:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/fuel-pump-lph/fuel-pump-lph.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuelPumpLphComponent": () => (/* binding */ FuelPumpLphComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fuel_pump_lph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuel-pump-lph.component.html?ngResource */ 38278);
/* harmony import */ var _fuel_pump_lph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-pump-lph.component.scss?ngResource */ 63603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */













/** Backend: register tool in Super Admin Tuner Plus with this id. */

const TUNER_PLUS_TOOL_ID = 4;
let FuelPumpLphComponent = class FuelPumpLphComponent {
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
    this.tunerPlusVideo = 'sqe0a45';
    this.bsfcPreset = '0.5';
    this.lbPerHr = 0;
    this.lphMin = 0;
    this.lphRecommended = 0;
    this.gphRecommended = 0;
    this.injectorLph = 0;
    this.injectorHeadroomOk = true;
    this.isShow = false;

    if (!_core_common_GAccount__WEBPACK_IMPORTED_MODULE_7__.GAccount.IsLoggedIn()) {
      this.router.navigateByUrl('/Account');
    }

    this.check();
  }

  check() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(_this.loadingController);

      _this.siteService.GetTunerPlusById(TUNER_PLUS_TOOL_ID).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                          _this.isCheck = false;
                        } else {
                          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                        }
                      }, errs => {
                        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                  }
                } else {
                  _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
                }
              }, errs => {
                _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
              _this.isCheck = false;
            }
          } else {
            _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
          }
        } else {
          _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
        }
      }, err => {
        _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this.loadingController);
      });
    })();
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Discord;
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.TunerPlusFuelPumpVideo;
    this.form = this.fb.group({
      peakHp: [300, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(5000)]],
      bsfc: [0.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0.35), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(0.9)]],
      dutyCycle: [85, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(50), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(95)]],
      safetyMargin: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      numInjectors: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(16)]],
      injectorFlow: [440, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(3000)]]
    });
  }

  onBsfcPresetChange() {
    this.form.patchValue({
      bsfc: +this.bsfcPreset
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        const peakHp = +this.form.value.peakHp;
        const bsfc = +this.form.value.bsfc;
        const duty = +this.form.value.dutyCycle / 100;
        const margin = +this.form.value.safetyMargin / 100;
        const numInjectors = +this.form.value.numInjectors;
        const injectorFlow = +this.form.value.injectorFlow;
        this.lbPerHr = peakHp * bsfc; // Gasoline LPH at max injector duty (common tuner formula, BSFC in lb/hp·hr)

        this.lphMin = this.lbPerHr / (1.585 * duty);
        this.lphRecommended = this.lphMin * (1 + margin);
        this.gphRecommended = this.lphRecommended / 3.785;
        this.injectorLph = injectorFlow * numInjectors * 60 * duty / 1000;
        this.injectorHeadroomOk = this.injectorLph >= this.lphMin;
        this.lbPerHr = Math.round(this.lbPerHr * 10) / 10;
        this.lphMin = Math.round(this.lphMin * 10) / 10;
        this.lphRecommended = Math.round(this.lphRecommended * 10) / 10;
        this.gphRecommended = Math.round(this.gphRecommended * 100) / 100;
        this.injectorLph = Math.round(this.injectorLph * 10) / 10;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onReset() {
    this.bsfcPreset = '0.5';
    this.lbPerHr = 0;
    this.lphMin = 0;
    this.lphRecommended = 0;
    this.gphRecommended = 0;
    this.injectorLph = 0;
    this.injectorHeadroomOk = true;
    this.form.setValue({
      peakHp: 300,
      bsfc: 0.5,
      dutyCycle: 85,
      safetyMargin: 10,
      numInjectors: 4,
      injectorFlow: 440
    });
  }

  onInfo(type) {
    switch (type) {
      case 'peakHp':
        this.presentActiveAlertConfirm('حداکثر توان موتور (Hp) در نقطهٔ هدف — معمولاً توان flywheel/crank.');
        break;

      case 'bsfc':
        this.presentActiveAlertConfirm('BSFC برحسب lb/hp·hr؛ بنزین NA حدود ۰.۵، توربو ۰.۵۵–۰.۶۵، اتانول بالاتر.');
        break;

      case 'dutyCycle':
        this.presentActiveAlertConfirm('حداکثر duty cycle انژکتور (مثلاً ۸۵٪) — پمپ باید در این duty سوخت کافی بدهد.');
        break;

      case 'safetyMargin':
        this.presentActiveAlertConfirm('حاشیهٔ اطمینان روی ظرفیت پمپ (مثلاً ۱۰٪) برای افت ولتاژ یا خط.');
        break;

      case 'numInjectors':
        this.presentActiveAlertConfirm('تعداد انژکتور فعال برای بررسی ظرفیت سیستم تزریق.');
        break;

      case 'injectorFlow':
        this.presentActiveAlertConfirm('دبی هر انژکتور برحسب cc/min در فشار کاری (مثلاً ۳ bar).');
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

FuelPumpLphComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__.SliderService
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}];

FuelPumpLphComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
FuelPumpLphComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-fuel-pump-lph',
  template: _fuel_pump_lph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_fuel_pump_lph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FuelPumpLphComponent);


/***/ }),

/***/ 8754:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/fuel-pump-lph/fuel-pump-lph.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuelPumpLphModule": () => (/* binding */ FuelPumpLphModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fuel_pump_lph_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuel-pump-lph-routing.module */ 83496);
/* harmony import */ var _fuel_pump_lph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-pump-lph.component */ 9791);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let FuelPumpLphModule = class FuelPumpLphModule {
};
FuelPumpLphModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_fuel_pump_lph_component__WEBPACK_IMPORTED_MODULE_2__.FuelPumpLphComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _fuel_pump_lph_routing_module__WEBPACK_IMPORTED_MODULE_1__.FuelPumpLphRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], FuelPumpLphModule);



/***/ }),

/***/ 63603:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/fuel-pump-lph/fuel-pump-lph.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".fuel-pump-page {\n  --background: var(--ion-background-color);\n}\n\n.fuel-shell {\n  max-width: 1240px;\n  margin: auto;\n  padding: clamp(14px, 3vw, 34px);\n  color: var(--ion-text-color);\n}\n\n.fuel-hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 220px;\n  align-items: center;\n  gap: 24px;\n  min-height: 244px;\n  padding: clamp(24px, 4vw, 42px);\n  overflow: hidden;\n  border-radius: 26px;\n  color: #fff;\n  background: radial-gradient(circle at 85% 15%, rgba(229, 58, 58, 0.26), transparent 32%), linear-gradient(135deg, #24252a, #111317);\n  box-shadow: 0 22px 50px rgba(14, 16, 20, 0.2);\n}\n\n.fuel-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #f3a5a5;\n  font-size: 0.73rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n}\n\n.fuel-hero h1 {\n  max-width: 620px;\n  margin: 13px 0 10px;\n  font-size: clamp(1.45rem, 3vw, 2.3rem);\n  line-height: 1.45;\n}\n\n.fuel-hero p {\n  max-width: 620px;\n  margin: 0;\n  color: #c9cbd0;\n  font-size: 0.9rem;\n  line-height: 1.9;\n}\n\n.fuel-hero__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 21px;\n}\n\n.fuel-hero__tags span {\n  padding: 6px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e5e6e8;\n  font-size: 0.73rem;\n}\n\n.fuel-hero__metric {\n  display: grid;\n  justify-items: center;\n  gap: 3px;\n  padding: 23px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.06);\n  text-align: center;\n}\n\n.fuel-hero__metric ion-icon {\n  margin-bottom: 6px;\n  color: #f3a5a5;\n  font-size: 1.8rem;\n}\n\n.fuel-hero__metric strong {\n  font-size: 2.6rem;\n  line-height: 1.1;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.fuel-hero__metric span {\n  color: #cbd0d5;\n  font-size: 0.75rem;\n}\n\n.fuel-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);\n  align-items: start;\n  gap: 18px;\n  margin-top: 22px;\n}\n\n.fuel-panel {\n  min-width: 0;\n  padding: clamp(20px, 2.8vw, 30px);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 22px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  box-shadow: 0 10px 28px rgba(16, 18, 22, 0.06);\n}\n\n.fuel-panel__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.fuel-panel__heading span {\n  color: var(--ion-color-danger);\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n\n.fuel-panel__heading h2 {\n  margin: 5px 0 0;\n  color: var(--ion-text-color);\n  font-size: 1.28rem;\n}\n\n.fuel-panel__heading > ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.6rem;\n}\n\n.fuel-preset {\n  display: grid;\n  gap: 7px;\n  margin-top: 23px;\n}\n\n.fuel-preset label {\n  color: var(--ion-text-color);\n  font-size: 0.83rem;\n  font-weight: 700;\n}\n\n.fuel-preset select {\n  width: 100%;\n  padding: 12px 13px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.23);\n  border-radius: 12px;\n  color: var(--ion-text-color);\n  background: var(--ion-background-color);\n  font: inherit;\n}\n\n.fuel-preset select:focus-visible {\n  outline: 2px solid var(--ion-color-danger);\n  outline-offset: 2px;\n}\n\n.fuel-fields {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 11px;\n  margin-top: 15px;\n}\n\n.fuel-field {\n  display: block;\n  min-width: 0;\n  padding: 13px 14px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.19);\n  border-radius: 14px;\n  background: var(--ion-background-color);\n}\n\n.fuel-field > span {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 6px;\n  color: var(--ion-text-color);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.fuel-field small {\n  color: var(--ion-color-medium);\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n\n.fuel-field > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.fuel-field input {\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  color: var(--ion-text-color);\n  background: transparent;\n  font: inherit;\n  font-size: 1.12rem;\n  font-weight: 800;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n\n.fuel-field:focus-within {\n  border-color: var(--ion-color-danger);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.fuel-field button {\n  flex: none;\n  padding: 4px;\n  border: 0;\n  color: var(--ion-color-medium);\n  background: transparent;\n  font-size: 1.22rem;\n  cursor: pointer;\n}\n\n.fuel-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-top: 20px;\n}\n\n.fuel-actions button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 18px;\n  border: 0;\n  border-radius: 11px;\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n.fuel-submit {\n  flex: 1;\n  color: #fff;\n  background: var(--ion-color-danger);\n  box-shadow: 0 8px 16px rgba(var(--ion-color-danger-rgb), 0.2);\n}\n\n.fuel-submit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.fuel-reset {\n  color: var(--ion-color-danger);\n  background: rgba(var(--ion-color-danger-rgb), 0.1);\n}\n\n.fuel-validation {\n  margin: 12px 0 0;\n  color: var(--ion-color-danger);\n  font-size: 0.8rem;\n}\n\n.fuel-feature {\n  margin-top: 22px;\n  padding: 22px;\n  border-radius: 17px;\n  color: #fff;\n  background: linear-gradient(135deg, #a32a2c, #cb3638 70%, #e25951);\n}\n\n.fuel-feature span {\n  font-size: 0.84rem;\n  opacity: 0.9;\n}\n\n.fuel-feature strong {\n  display: block;\n  margin: 7px 0;\n  font-size: clamp(2.3rem, 5vw, 3.7rem);\n  line-height: 1.1;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.fuel-feature strong small {\n  font-size: 1.2rem;\n}\n\n.fuel-feature p {\n  margin: 0;\n  font-size: 0.74rem;\n  opacity: 0.86;\n}\n\n.fuel-stats {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px;\n  margin-top: 12px;\n}\n\n.fuel-stats > div {\n  padding: 14px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 13px;\n  background: var(--ion-background-color);\n}\n\n.fuel-stats span {\n  display: block;\n  color: var(--ion-color-medium);\n  font-size: 0.73rem;\n}\n\n.fuel-stats strong {\n  display: block;\n  margin-top: 7px;\n  color: var(--ion-text-color);\n  font-size: 0.98rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.fuel-status {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n  padding: 13px 14px;\n  border-radius: 12px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-success-rgb), 0.12);\n}\n\n.fuel-status--danger {\n  background: rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.fuel-status ion-icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--ion-color-success);\n  font-size: 1.2rem;\n}\n\n.fuel-status--danger ion-icon {\n  color: var(--ion-color-danger);\n}\n\n.fuel-status p {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.75;\n}\n\n.fuel-empty {\n  display: grid;\n  justify-items: center;\n  gap: 8px;\n  margin: 24px 0;\n  padding: 34px;\n  border: 1px dashed rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: 15px;\n  color: var(--ion-color-medium);\n  text-align: center;\n}\n\n.fuel-empty ion-icon {\n  font-size: 1.8rem;\n}\n\n.fuel-empty p {\n  margin: 0;\n}\n\n.fuel-note {\n  margin: 17px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.83rem;\n  line-height: 1.85;\n}\n\n@media (max-width: 780px) {\n  .fuel-hero {\n    grid-template-columns: 1fr;\n  }\n\n  .fuel-hero__metric {\n    display: none;\n  }\n\n  .fuel-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 490px) {\n  .fuel-shell {\n    padding: 12px;\n  }\n\n  .fuel-hero {\n    border-radius: 19px;\n  }\n\n  .fuel-panel {\n    padding: 17px;\n  }\n\n  .fuel-fields, .fuel-stats {\n    grid-template-columns: 1fr;\n  }\n\n  .fuel-actions button {\n    width: 100%;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .fuel-hero, .fuel-panel {\n    animation: fuel-enter 0.55s ease both;\n  }\n\n  .fuel-panel:nth-child(2) {\n    animation-delay: 0.08s;\n  }\n\n  @keyframes fuel-enter {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1ZWwtcHVtcC1scGguY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBa0IseUNBQUE7QUFBbEI7O0FBQ0E7RUFBYyxpQkFBQTtFQUFtQixZQUFBO0VBQWMsK0JBQUE7RUFBaUMsNEJBQUE7QUFNaEY7O0FBTEE7RUFBYSxhQUFBO0VBQWUsMkNBQUE7RUFBNkMsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGlCQUFBO0VBQW1CLCtCQUFBO0VBQWlDLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLFdBQUE7RUFBYSxtSUFBQTtFQUFvSSw2Q0FBQTtBQW1CclY7O0FBbEJBO0VBQWUsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsUUFBQTtFQUFVLGNBQUE7RUFBZ0Isa0JBQUE7RUFBbUIsZ0JBQUE7RUFBa0IscUJBQUE7QUE0QnpIOztBQTNCQTtFQUFnQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixzQ0FBQTtFQUF3QyxpQkFBQTtBQWtDL0Y7O0FBakNBO0VBQWUsZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLGNBQUE7RUFBZ0IsaUJBQUE7RUFBa0IsZ0JBQUE7QUF5QzlFOztBQXhDQTtFQUFtQixhQUFBO0VBQWUsZUFBQTtFQUFpQixRQUFBO0VBQVUsZ0JBQUE7QUErQzdEOztBQTlDQTtFQUF3QixpQkFBQTtFQUFtQiwyQ0FBQTtFQUF5QyxvQkFBQTtFQUFzQixxQ0FBQTtFQUFtQyxjQUFBO0VBQWdCLGtCQUFBO0FBdUQ3Sjs7QUF0REE7RUFBcUIsYUFBQTtFQUFlLHFCQUFBO0VBQXVCLFFBQUE7RUFBVSxrQkFBQTtFQUFvQiwyQ0FBQTtFQUF5QyxtQkFBQTtFQUFxQixxQ0FBQTtFQUFtQyxrQkFBQTtBQWlFMUw7O0FBaEVBO0VBQThCLGtCQUFBO0VBQW9CLGNBQUE7RUFBZ0IsaUJBQUE7QUFzRWxFOztBQXJFQTtFQUE0QixpQkFBQTtFQUFtQixnQkFBQTtFQUFrQiw2QkFBQTtFQUFBLGtDQUFBO0FBMkVqRTs7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QWtELG1DQUFBO0FENmJ0RCIsImZpbGUiOiJmdWVsLXB1bXAtbHBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUnO1xuXG4uZnVlbC1wdW1wLXBhZ2UgeyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxuLmZ1ZWwtc2hlbGwgeyBtYXgtd2lkdGg6IDEyNDBweDsgbWFyZ2luOiBhdXRvOyBwYWRkaW5nOiBjbGFtcCgxNHB4LCAzdncsIDM0cHgpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyB9XG4uZnVlbC1oZXJvIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAyMjBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAyNHB4OyBtaW4taGVpZ2h0OiAyNDRweDsgcGFkZGluZzogY2xhbXAoMjRweCwgNHZ3LCA0MnB4KTsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyLXJhZGl1czogMjZweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODUlIDE1JSwgcmdiYSgyMjksIDU4LCA1OCwgLjI2KSwgdHJhbnNwYXJlbnQgMzIlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0MjUyYSwgIzExMTMxNyk7IGJveC1zaGFkb3c6IDAgMjJweCA1MHB4IHJnYmEoMTQsIDE2LCAyMCwgLjIpOyB9XG4uZnVlbC1raWNrZXIgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IGNvbG9yOiAjZjNhNWE1OyBmb250LXNpemU6IC43M3JlbTsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC4xZW07IH1cbi5mdWVsLWhlcm8gaDEgeyBtYXgtd2lkdGg6IDYyMHB4OyBtYXJnaW46IDEzcHggMCAxMHB4OyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sIDN2dywgMi4zcmVtKTsgbGluZS1oZWlnaHQ6IDEuNDU7IH1cbi5mdWVsLWhlcm8gcCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMDsgY29sb3I6ICNjOWNiZDA7IGZvbnQtc2l6ZTogLjlyZW07IGxpbmUtaGVpZ2h0OiAxLjk7IH1cbi5mdWVsLWhlcm9fX3RhZ3MgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogOHB4OyBtYXJnaW4tdG9wOiAyMXB4OyB9XG4uZnVlbC1oZXJvX190YWdzIHNwYW4geyBwYWRkaW5nOiA2cHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTgpOyBib3JkZXItcmFkaXVzOiA5OTlweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMDYpOyBjb2xvcjogI2U1ZTZlODsgZm9udC1zaXplOiAuNzNyZW07IH1cbi5mdWVsLWhlcm9fX21ldHJpYyB7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgZ2FwOiAzcHg7IHBhZGRpbmc6IDIzcHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMTgpOyBib3JkZXItcmFkaXVzOiAyMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4wNik7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmZ1ZWwtaGVyb19fbWV0cmljIGlvbi1pY29uIHsgbWFyZ2luLWJvdHRvbTogNnB4OyBjb2xvcjogI2YzYTVhNTsgZm9udC1zaXplOiAxLjhyZW07IH1cbi5mdWVsLWhlcm9fX21ldHJpYyBzdHJvbmcgeyBmb250LXNpemU6IDIuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxuLmZ1ZWwtaGVyb19fbWV0cmljIHNwYW4geyBjb2xvcjogI2NiZDBkNTsgZm9udC1zaXplOiAuNzVyZW07IH1cbi5mdWVsLWxheW91dCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuMDhmcikgbWlubWF4KDAsIC45MmZyKTsgYWxpZ24taXRlbXM6IHN0YXJ0OyBnYXA6IDE4cHg7IG1hcmdpbi10b3A6IDIycHg7IH1cbi5mdWVsLXBhbmVsIHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiBjbGFtcCgyMHB4LCAyLjh2dywgMzBweCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTgpOyBib3JkZXItcmFkaXVzOiAyMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpOyBib3gtc2hhZG93OiAwIDEwcHggMjhweCByZ2JhKDE2LCAxOCwgMjIsIC4wNik7IH1cbi5mdWVsLXBhbmVsX19oZWFkaW5nIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEycHg7IH1cbi5mdWVsLXBhbmVsX19oZWFkaW5nIHNwYW4geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGZvbnQtc2l6ZTogLjcycmVtOyBmb250LXdlaWdodDogODAwOyB9XG4uZnVlbC1wYW5lbF9faGVhZGluZyBoMiB7IG1hcmdpbjogNXB4IDAgMDsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAxLjI4cmVtOyB9XG4uZnVlbC1wYW5lbF9faGVhZGluZyA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBmb250LXNpemU6IDEuNnJlbTsgfVxuLmZ1ZWwtcHJlc2V0IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiA3cHg7IG1hcmdpbi10b3A6IDIzcHg7IH1cbi5mdWVsLXByZXNldCBsYWJlbCB7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGZvbnQtc2l6ZTogLjgzcmVtOyBmb250LXdlaWdodDogNzAwOyB9XG4uZnVlbC1wcmVzZXQgc2VsZWN0IHsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDEycHggMTNweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4yMyk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgZm9udDogaW5oZXJpdDsgfVxuLmZ1ZWwtcHJlc2V0IHNlbGVjdDpmb2N1cy12aXNpYmxlIHsgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyBvdXRsaW5lLW9mZnNldDogMnB4OyB9XG4uZnVlbC1maWVsZHMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IGdhcDogMTFweDsgbWFyZ2luLXRvcDogMTVweDsgfVxuLmZ1ZWwtZmllbGQgeyBkaXNwbGF5OiBibG9jazsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAxM3B4IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTkpOyBib3JkZXItcmFkaXVzOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7IH1cbi5mdWVsLWZpZWxkID4gc3BhbiB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDZweDsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbi5mdWVsLWZpZWxkIHNtYWxsIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyBmb250LXNpemU6IC43cmVtOyBmb250LXdlaWdodDogNTAwOyB9XG4uZnVlbC1maWVsZCA+IGRpdiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbi5mdWVsLWZpZWxkIGlucHV0IHsgd2lkdGg6IDEwMCU7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBvdXRsaW5lOiAwOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAxLjEycmVtOyBmb250LXdlaWdodDogODAwOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB0ZXh0LWFsaWduOiByaWdodDsgfVxuLmZ1ZWwtZmllbGQ6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAuMTIpOyB9XG4uZnVlbC1maWVsZCBidXR0b24geyBmbGV4OiBub25lOyBwYWRkaW5nOiA0cHg7IGJvcmRlcjogMDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udC1zaXplOiAxLjIycmVtOyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5mdWVsLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogOXB4OyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4uZnVlbC1hY3Rpb25zIGJ1dHRvbiB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IHBhZGRpbmc6IDExcHggMThweDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAxMXB4OyBmb250OiBpbmhlcml0OyBmb250LXdlaWdodDogODAwOyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5mdWVsLXN1Ym1pdCB7IGZsZXg6IDE7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgLjIpOyB9XG4uZnVlbC1zdWJtaXQ6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLmZ1ZWwtcmVzZXQgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAuMSk7IH1cbi5mdWVsLXZhbGlkYXRpb24geyBtYXJnaW46IDEycHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGZvbnQtc2l6ZTogLjhyZW07IH1cbi5mdWVsLWZlYXR1cmUgeyBtYXJnaW4tdG9wOiAyMnB4OyBwYWRkaW5nOiAyMnB4OyBib3JkZXItcmFkaXVzOiAxN3B4OyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2EzMmEyYywgI2NiMzYzOCA3MCUsICNlMjU5NTEpOyB9XG4uZnVlbC1mZWF0dXJlIHNwYW4geyBmb250LXNpemU6IC44NHJlbTsgb3BhY2l0eTogLjk7IH1cbi5mdWVsLWZlYXR1cmUgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbjogN3B4IDA7IGZvbnQtc2l6ZTogY2xhbXAoMi4zcmVtLCA1dncsIDMuN3JlbSk7IGxpbmUtaGVpZ2h0OiAxLjE7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cbi5mdWVsLWZlYXR1cmUgc3Ryb25nIHNtYWxsIHsgZm9udC1zaXplOiAxLjJyZW07IH1cbi5mdWVsLWZlYXR1cmUgcCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAuNzRyZW07IG9wYWNpdHk6IC44NjsgfVxuLmZ1ZWwtc3RhdHMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IGdhcDogOXB4OyBtYXJnaW4tdG9wOiAxMnB4OyB9XG4uZnVlbC1zdGF0cyA+IGRpdiB7IHBhZGRpbmc6IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTgpOyBib3JkZXItcmFkaXVzOiAxM3B4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7IH1cbi5mdWVsLXN0YXRzIHNwYW4geyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyBmb250LXNpemU6IC43M3JlbTsgfVxuLmZ1ZWwtc3RhdHMgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDdweDsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAuOThyZW07IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cbi5mdWVsLXN0YXR1cyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogMTVweDsgcGFkZGluZzogMTNweCAxNHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiksIC4xMik7IH1cbi5mdWVsLXN0YXR1cy0tZGFuZ2VyIHsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4xMik7IH1cbi5mdWVsLXN0YXR1cyBpb24taWNvbiB7IGZsZXg6IG5vbmU7IG1hcmdpbi10b3A6IDJweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTsgZm9udC1zaXplOiAxLjJyZW07IH1cbi5mdWVsLXN0YXR1cy0tZGFuZ2VyIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpOyB9XG4uZnVlbC1zdGF0dXMgcCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAuODJyZW07IGxpbmUtaGVpZ2h0OiAxLjc1OyB9XG4uZnVlbC1lbXB0eSB7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbjogMjRweCAwOyBwYWRkaW5nOiAzNHB4OyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4zKTsgYm9yZGVyLXJhZGl1czogMTVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi5mdWVsLWVtcHR5IGlvbi1pY29uIHsgZm9udC1zaXplOiAxLjhyZW07IH1cbi5mdWVsLWVtcHR5IHAgeyBtYXJnaW46IDA7IH1cbi5mdWVsLW5vdGUgeyBtYXJnaW46IDE3cHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjgzcmVtOyBsaW5lLWhlaWdodDogMS44NTsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7IC5mdWVsLWhlcm8geyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSAuZnVlbC1oZXJvX19tZXRyaWMgeyBkaXNwbGF5OiBub25lOyB9IC5mdWVsLWxheW91dCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkgeyAuZnVlbC1zaGVsbCB7IHBhZGRpbmc6IDEycHg7IH0gLmZ1ZWwtaGVybyB7IGJvcmRlci1yYWRpdXM6IDE5cHg7IH0gLmZ1ZWwtcGFuZWwgeyBwYWRkaW5nOiAxN3B4OyB9IC5mdWVsLWZpZWxkcywgLmZ1ZWwtc3RhdHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSAuZnVlbC1hY3Rpb25zIGJ1dHRvbiB7IHdpZHRoOiAxMDAlOyB9IH1cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkgeyAuZnVlbC1oZXJvLCAuZnVlbC1wYW5lbCB7IGFuaW1hdGlvbjogZnVlbC1lbnRlciAuNTVzIGVhc2UgYm90aDsgfSAuZnVlbC1wYW5lbDpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC4wOHM7IH0gQGtleWZyYW1lcyBmdWVsLWVudGVyIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9IH1cblxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 38278:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/fuel-pump-lph/fuel-pump-lph.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back *ngIf=\"!showSearchbar\"><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">سایز پمپ بنزین (LPH)</span>\n<ion-buttons page-actions slot=\"end\">\r\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\"><ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon></ion-button>\r\n      \r\n    </ion-buttons>\n<ion-searchbar dir=\"rtl\" *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\" (ionCancel)=\"onCancel()\" (keyup.enter)=\"search()\"></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"fuel-pump-page\">\r\n  <main *ngIf=\"!isCheck\" class=\"fuel-shell\" dir=\"rtl\">\r\n    <section class=\"fuel-hero\">\r\n      <div class=\"fuel-hero__copy\">\r\n        <span class=\"fuel-kicker\"><ion-icon name=\"water-outline\"></ion-icon> FUEL SYSTEM / PUMP SIZING</span>\r\n        <h1>سوخت کافی، در لحظه‌ای که موتور بیشترین نیاز را دارد</h1>\r\n        <p>دبی پمپ و ظرفیت انژکتورها را با توان هدف، BSFC و حاشیهٔ اطمینان کنار هم ببینید.</p>\r\n        <div class=\"fuel-hero__tags\"><span>LPH / GPH</span><span>بررسی ظرفیت انژکتور</span></div>\r\n      </div>\r\n      <div class=\"fuel-hero__metric\" aria-hidden=\"true\"><ion-icon name=\"speedometer-outline\"></ion-icon><strong>{{ lphRecommended > 0 ? lphRecommended : '—' }}</strong><span>LPH پیشنهادی</span></div>\r\n    </section>\r\n\r\n    <div class=\"fuel-layout\">\r\n      <section class=\"fuel-panel\">\r\n        <div class=\"fuel-panel__heading\"><div><span>01 / تنظیمات</span><h2>نیاز سوخت موتور</h2></div><ion-icon name=\"options-outline\"></ion-icon></div>\r\n        <div class=\"fuel-preset\">\r\n          <label for=\"fuel-bsfc-preset\">پیش‌فرض BSFC</label>\r\n          <select id=\"fuel-bsfc-preset\" [(ngModel)]=\"bsfcPreset\" (change)=\"onBsfcPresetChange()\">\r\n            <option value=\"0.45\">بنزین تنفس طبیعی · 0.45</option>\r\n            <option value=\"0.5\">بنزین · 0.50</option>\r\n            <option value=\"0.55\">توربو · 0.55</option>\r\n            <option value=\"0.6\">توربو / E85 سبک · 0.60</option>\r\n            <option value=\"0.65\">اتانول / E85 · 0.65</option>\r\n          </select>\r\n        </div>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n          <div class=\"fuel-fields\">\r\n            <label class=\"fuel-field\"><span>توان هدف <small>HP</small></span><div><input type=\"number\" formControlName=\"peakHp\" min=\"30\" max=\"5000\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('peakHp')\" aria-label=\"توضیح توان هدف\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n            <label class=\"fuel-field\"><span>مصرف ویژه سوخت <small>lb/hp·hr</small></span><div><input type=\"number\" formControlName=\"bsfc\" min=\"0.35\" max=\"0.9\" step=\"0.01\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('bsfc')\" aria-label=\"توضیح BSFC\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n            <label class=\"fuel-field\"><span>Duty انژکتور <small>%</small></span><div><input type=\"number\" formControlName=\"dutyCycle\" min=\"50\" max=\"95\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('dutyCycle')\" aria-label=\"توضیح Duty انژکتور\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n            <label class=\"fuel-field\"><span>حاشیهٔ اطمینان <small>%</small></span><div><input type=\"number\" formControlName=\"safetyMargin\" min=\"0\" max=\"50\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('safetyMargin')\" aria-label=\"توضیح حاشیه اطمینان\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n            <label class=\"fuel-field\"><span>تعداد انژکتور <small>عدد</small></span><div><input type=\"number\" formControlName=\"numInjectors\" min=\"1\" max=\"16\" inputmode=\"numeric\"><button type=\"button\" (click)=\"onInfo('numInjectors')\" aria-label=\"توضیح تعداد انژکتور\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n            <label class=\"fuel-field\"><span>دبی هر انژکتور <small>cc/min</small></span><div><input type=\"number\" formControlName=\"injectorFlow\" min=\"1\" max=\"3000\" inputmode=\"decimal\"><button type=\"button\" (click)=\"onInfo('injectorFlow')\" aria-label=\"توضیح دبی انژکتور\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div></label>\r\n          </div>\r\n          <div class=\"fuel-actions\">\r\n            <button class=\"fuel-submit\" type=\"submit\" [disabled]=\"form.invalid\"><ion-icon name=\"calculator-outline\"></ion-icon> محاسبه دبی</button>\r\n            <button class=\"fuel-reset\" type=\"button\" (click)=\"onReset()\"><ion-icon name=\"refresh-outline\"></ion-icon> بازنشانی</button>\r\n          </div>\r\n          <p *ngIf=\"form.invalid\" class=\"fuel-validation\" role=\"status\">ورودی‌ها را در بازهٔ مجاز وارد کنید.</p>\r\n        </form>\r\n      </section>\r\n\r\n      <section class=\"fuel-panel fuel-results\" aria-live=\"polite\">\r\n        <div class=\"fuel-panel__heading\"><div><span>02 / خروجی</span><h2>ظرفیت سیستم سوخت</h2></div><ion-icon name=\"analytics-outline\"></ion-icon></div>\r\n        <ng-container *ngIf=\"lphRecommended > 0; else fuelEmpty\">\r\n          <div class=\"fuel-feature\"><span>دبی پیشنهادی پمپ</span><strong dir=\"ltr\">{{ lphRecommended }} <small>LPH</small></strong><p>با حاشیهٔ اطمینان انتخابی شما</p></div>\r\n          <div class=\"fuel-stats\">\r\n            <div><span>مصرف سوخت</span><strong dir=\"ltr\">{{ lbPerHr }} lb/hr</strong></div>\r\n            <div><span>حداقل دبی محاسباتی</span><strong dir=\"ltr\">{{ lphMin }} LPH</strong></div>\r\n            <div><span>معادل حجمی</span><strong dir=\"ltr\">{{ gphRecommended }} GPH</strong></div>\r\n            <div><span>جریان کل انژکتورها</span><strong dir=\"ltr\">{{ injectorLph }} LPH</strong></div>\r\n          </div>\r\n          <div class=\"fuel-status\" [class.fuel-status--danger]=\"!injectorHeadroomOk\">\r\n            <ion-icon [name]=\"injectorHeadroomOk ? 'checkmark-circle-outline' : 'alert-circle-outline'\"></ion-icon>\r\n            <p>{{ injectorHeadroomOk ? 'ظرفیت انژکتورها در Duty واردشده از حداقل نیاز محاسباتی بیشتر است.' : 'ظرفیت انژکتورها کمتر از حداقل نیاز محاسباتی است؛ دبی یا تعداد را بازبینی کنید.' }}</p>\r\n          </div>\r\n        </ng-container>\r\n        <ng-template #fuelEmpty><div class=\"fuel-empty\"><ion-icon name=\"water-outline\"></ion-icon><p>مشخصات موتور را وارد کنید و «محاسبه دبی» را بزنید.</p></div></ng-template>\r\n        <p class=\"fuel-note\">دبی واقعی پمپ را از منحنی سازنده در فشار ریل و ولتاژ کاری بخوانید. افت مسیر و فشار بوست بر ظرفیت واقعی اثر می‌گذارند.</p>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_fuel-pump-lph_fuel-pump-lph_module_ts.js.map