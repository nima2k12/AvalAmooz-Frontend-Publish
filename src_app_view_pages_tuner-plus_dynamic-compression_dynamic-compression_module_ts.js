"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_dynamic-compression_dynamic-compression_module_ts"],{

/***/ 6770:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dynamic-compression/dynamic-compression-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicCompressionRoutingModule": () => (/* binding */ DynamicCompressionRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dynamic_compression_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-compression.component */ 61163);




const routes = [
    {
        path: '',
        component: _dynamic_compression_component__WEBPACK_IMPORTED_MODULE_0__.DynamicCompressionComponent,
    },
];
let DynamicCompressionRoutingModule = class DynamicCompressionRoutingModule {
};
DynamicCompressionRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynamicCompressionRoutingModule);



/***/ }),

/***/ 61163:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dynamic-compression/dynamic-compression.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicCompressionComponent": () => (/* binding */ DynamicCompressionComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dynamic_compression_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-compression.component.html?ngResource */ 55305);
/* harmony import */ var _dynamic_compression_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-compression.component.scss?ngResource */ 3790);
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















let DynamicCompressionComponent = class DynamicCompressionComponent {
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'dynamic-compression');
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

      _this.siteService.GetTunerPlusById(37).subscribe(res => {
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
      boreMm: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      strokeMm: [82, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      rodLengthMm: [137, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      staticCompressionRatio: [10.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1.01)]],
      intakeValveClosingAbdc: [49.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(180)]]
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
      this.result = null;
      return;
    }

    const value = this.form.getRawValue();
    const boreMm = Number(value.boreMm);
    const strokeMm = Number(value.strokeMm);
    const rodLengthMm = Number(value.rodLengthMm);
    const staticCompressionRatio = Number(value.staticCompressionRatio);
    const intakeValveClosingAbdc = Number(value.intakeValveClosingAbdc);
    const crankRadiusMm = strokeMm / 2;

    if (rodLengthMm <= crankRadiusMm) {
      this.result = null;
      return;
    } // Crank angle is measured from TDC. IVC supplied as degrees ABDC is
    // therefore 180 + IVC. The result is piston travel from TDC, which is
    // the effective compression stroke remaining after the intake closes.


    const crankAngleRad = (180 + intakeValveClosingAbdc) * Math.PI / 180;
    const pistonPositionAtIvcMm = crankRadiusMm * (1 - Math.cos(crankAngleRad)) + rodLengthMm - Math.sqrt(Math.pow(rodLengthMm, 2) - Math.pow(crankRadiusMm * Math.sin(crankAngleRad), 2));
    const cylinderVolumeCc = Math.PI / 4 * Math.pow(boreMm / 10, 2) * (strokeMm / 10);
    const clearanceVolumeCc = cylinderVolumeCc / (staticCompressionRatio - 1);
    const effectiveStrokeMm = Math.max(0, Math.min(strokeMm, pistonPositionAtIvcMm));
    const effectiveDisplacementCc = cylinderVolumeCc * (effectiveStrokeMm / strokeMm);
    const dynamicCompressionRatio = (effectiveDisplacementCc + clearanceVolumeCc) / clearanceVolumeCc;
    this.result = {
      cylinderVolumeCc: this.round(cylinderVolumeCc, 2),
      clearanceVolumeCc: this.round(clearanceVolumeCc, 2),
      pistonPositionAtIvcMm: this.round(pistonPositionAtIvcMm, 2),
      effectiveStrokeMm: this.round(effectiveStrokeMm, 2),
      effectiveDisplacementCc: this.round(effectiveDisplacementCc, 2),
      dynamicCompressionRatio: this.round(dynamicCompressionRatio, 2)
    };
  }

  reset() {
    this.form.reset({
      boreMm: 78.5,
      strokeMm: 82,
      rodLengthMm: 137,
      staticCompressionRatio: 10.5,
      intakeValveClosingAbdc: 49.5
    });
  }

  get recommendation() {
    const dcr = this.result?.dynamicCompressionRatio;

    if (!dcr) {
      return 'برای نمایش نتیجه، تمام ورودی‌ها را با مقادیر معتبر وارد کنید.';
    }

    if (dcr < 7) {
      return 'تراکم دینامیک پایین است؛ پاسخ دور پایین و راندمان ممکن است ضعیف باشد.';
    }

    if (dcr <= 8.5) {
      return 'محدوده‌ی محافظه‌کارانه برای بسیاری از موتورهای خیابانی بنزینی تنفس طبیعی.';
    }

    if (dcr <= 9) {
      return 'محدوده‌ی پرفورمنس؛ کیفیت سوخت، دمای هوا و تنظیم جرقه را دقیق بررسی کنید.';
    }

    return 'تراکم دینامیک بالاست؛ فقط با سوخت و کالیبراسیون مناسب استفاده شود.';
  }

  get recommendationColor() {
    const dcr = this.result?.dynamicCompressionRatio;

    if (!dcr || dcr < 7) {
      return 'warning';
    }

    if (dcr <= 8.5) {
      return 'success';
    }

    return dcr <= 9 ? 'warning' : 'danger';
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        bore: 'قطر داخلی نهایی هر سیلندر پس از تراش یا هونینگ، برحسب میلی‌متر.',
        stroke: 'کورس میل‌لنگ؛ فاصله حرکت پیستون از نقطه مرگ بالا تا پایین، برحسب میلی‌متر.',
        rod: 'طول شاتون از مرکز پین پیستون تا مرکز ژورنال میل‌لنگ. این مقدار روی کورس مؤثر اثر دارد.',
        compression: 'نسبت تراکم استاتیک واقعی موتور. برای دقت، آن را ابتدا با ابزار Compression و Quench محاسبه کنید.',
        ivc: 'زاویه بسته شدن سوپاپ هوا پس از BDC. مقدار واقعی میل‌سوپاپ و مبنای اندازه‌گیری آن را وارد کنید؛ IVC دیرتر، تراکم دینامیک را کاهش می‌دهد.'
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

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

DynamicCompressionComponent.ctorParameters = () => [{
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

DynamicCompressionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-dynamic-compression',
  template: _dynamic_compression_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dynamic_compression_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DynamicCompressionComponent);


/***/ }),

/***/ 96624:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dynamic-compression/dynamic-compression.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicCompressionModule": () => (/* binding */ DynamicCompressionModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _dynamic_compression_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-compression-routing.module */ 6770);
/* harmony import */ var _dynamic_compression_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-compression.component */ 61163);









let DynamicCompressionModule = class DynamicCompressionModule {
};
DynamicCompressionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_dynamic_compression_component__WEBPACK_IMPORTED_MODULE_3__.DynamicCompressionComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _dynamic_compression_routing_module__WEBPACK_IMPORTED_MODULE_2__.DynamicCompressionRoutingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        ],
    })
], DynamicCompressionModule);



/***/ }),

/***/ 3790:
/*!*********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dynamic-compression/dynamic-compression.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n.dcr-page {\n  --background: var(--ion-background-color);\n}\n\n.dcr-shell {\n  max-width: 1240px;\n  margin: auto;\n  padding: clamp(14px, 3vw, 34px);\n  color: var(--ion-text-color);\n}\n\n.dcr-hero {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 220px;\n  align-items: center;\n  gap: 22px;\n  min-height: 260px;\n  padding: clamp(24px, 4vw, 42px);\n  overflow: hidden;\n  border-radius: 26px;\n  color: #fff;\n  background: radial-gradient(circle at 84% 14%, rgba(225, 55, 55, 0.28), transparent 32%), linear-gradient(135deg, #202126, #111318);\n  box-shadow: 0 22px 50px rgba(15, 17, 20, 0.2);\n}\n\n.dcr-hero::after {\n  content: \"\";\n  position: absolute;\n  inset: auto -8% -62% 36%;\n  height: 220px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n  transform: rotate(-15deg);\n  pointer-events: none;\n}\n\n.dcr-hero__copy, .dcr-hero__gauge {\n  position: relative;\n  z-index: 1;\n}\n\n.dcr-eyebrow, .dcr-overline {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #f19a9a;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.09em;\n}\n\n.dcr-eyebrow ion-icon {\n  font-size: 1rem;\n}\n\n.dcr-hero h1 {\n  max-width: 640px;\n  margin: 13px 0 10px;\n  font-size: clamp(1.45rem, 3vw, 2.3rem);\n  line-height: 1.45;\n}\n\n.dcr-hero p {\n  max-width: 620px;\n  margin: 0;\n  color: #c7c9cf;\n  line-height: 1.9;\n  font-size: 0.9rem;\n}\n\n.dcr-hero__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 22px;\n}\n\n.dcr-hero__tags span {\n  padding: 6px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  color: #e4e4e7;\n  font-size: 0.73rem;\n}\n\n.dcr-hero__gauge {\n  display: flex;\n  justify-content: center;\n}\n\n.dcr-gauge__ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 194px;\n  height: 194px;\n  border: 2px solid rgba(245, 93, 93, 0.68);\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(214, 48, 48, 0.18), rgba(255, 255, 255, 0.02) 65%);\n  box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.04), inset 0 0 36px rgba(229, 61, 61, 0.08);\n}\n\n.dcr-gauge__ring strong {\n  font-size: 3.2rem;\n  line-height: 1;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.dcr-gauge__ring small {\n  margin-top: 8px;\n  color: #f4abab;\n  letter-spacing: 0.15em;\n}\n\n.dcr-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.07fr) minmax(0, 0.93fr);\n  align-items: start;\n  gap: 18px;\n  margin-top: 22px;\n}\n\n.dcr-panel {\n  min-width: 0;\n  padding: clamp(20px, 2.8vw, 30px);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 22px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  box-shadow: 0 10px 28px rgba(16, 18, 22, 0.06);\n}\n\n.dcr-panel__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.dcr-panel__heading h2 {\n  margin: 5px 0 0;\n  color: var(--ion-text-color);\n  font-size: 1.28rem;\n}\n\n.dcr-panel__heading > ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.6rem;\n}\n\n.dcr-overline {\n  color: var(--ion-color-danger);\n}\n\n.dcr-help, .dcr-disclaimer {\n  margin: 17px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.84rem;\n  line-height: 1.9;\n}\n\n.dcr-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 22px;\n}\n\n.dcr-field {\n  display: block;\n  min-width: 0;\n  padding: 13px 14px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 14px;\n  background: var(--ion-background-color);\n}\n\n.dcr-field--wide {\n  grid-column: 1/-1;\n}\n\n.dcr-field > span {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 6px;\n  color: var(--ion-text-color);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.dcr-field small {\n  color: var(--ion-color-medium);\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n\n.dcr-field__control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.dcr-field input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--ion-text-color);\n  background: transparent;\n  font: inherit;\n  font-size: 1.14rem;\n  font-weight: 800;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n\n.dcr-field:focus-within {\n  border-color: var(--ion-color-danger);\n  box-shadow: 0 0 0 3px rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.dcr-field__control button {\n  display: grid;\n  place-items: center;\n  flex: none;\n  padding: 4px;\n  border: 0;\n  color: var(--ion-color-medium);\n  background: transparent;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n.dcr-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n\n.dcr-actions button {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 12px;\n  border: 0;\n  color: var(--ion-color-danger);\n  background: rgba(var(--ion-color-danger-rgb), 0.09);\n  border-radius: 10px;\n  font: inherit;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.dcr-validation {\n  margin: 14px 0 0;\n  color: var(--ion-color-danger);\n  font-size: 0.82rem;\n}\n\n.dcr-primary {\n  margin-top: 22px;\n  padding: 22px;\n  border-radius: 17px;\n  color: #fff;\n  background: linear-gradient(135deg, #9f2428, #c83336 65%, #e05248);\n}\n\n.dcr-primary span {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n\n.dcr-primary strong {\n  display: block;\n  margin-top: 9px;\n  font-size: clamp(2.3rem, 5vw, 3.7rem);\n  line-height: 1.1;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.dcr-primary strong small {\n  font-size: 1.15rem;\n}\n\n.dcr-primary p {\n  margin: 9px 0 0;\n  font-size: 0.74rem;\n  opacity: 0.86;\n}\n\n.dcr-stat-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px;\n  margin-top: 12px;\n}\n\n.dcr-stat-grid > div, .dcr-volume {\n  padding: 14px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.18);\n  border-radius: 13px;\n  background: var(--ion-background-color);\n}\n\n.dcr-stat-grid span, .dcr-volume span {\n  display: block;\n  color: var(--ion-color-medium);\n  font-size: 0.73rem;\n}\n\n.dcr-stat-grid strong, .dcr-volume strong {\n  display: block;\n  margin-top: 7px;\n  color: var(--ion-text-color);\n  font-size: 0.98rem;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.dcr-volume {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 9px;\n}\n\n.dcr-volume strong {\n  margin: 0;\n}\n\n.dcr-insight {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n  padding: 13px 14px;\n  border-radius: 12px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-warning-rgb), 0.12);\n}\n\n.dcr-insight[data-tone=success] {\n  background: rgba(var(--ion-color-success-rgb), 0.12);\n}\n\n.dcr-insight[data-tone=danger] {\n  background: rgba(var(--ion-color-danger-rgb), 0.12);\n}\n\n.dcr-insight ion-icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--ion-color-danger);\n  font-size: 1.2rem;\n}\n\n.dcr-insight p {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.75;\n}\n\n.dcr-empty {\n  display: grid;\n  justify-items: center;\n  gap: 8px;\n  margin: 24px 0;\n  padding: 34px;\n  border: 1px dashed rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: 15px;\n  color: var(--ion-color-medium);\n  text-align: center;\n}\n\n.dcr-empty ion-icon {\n  font-size: 1.8rem;\n}\n\n.dcr-empty p {\n  margin: 0;\n}\n\n@media (max-width: 780px) {\n  .dcr-hero {\n    grid-template-columns: 1fr;\n  }\n\n  .dcr-hero__gauge {\n    display: none;\n  }\n\n  .dcr-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 490px) {\n  .dcr-shell {\n    padding: 12px;\n  }\n\n  .dcr-hero {\n    border-radius: 19px;\n  }\n\n  .dcr-panel {\n    padding: 17px;\n  }\n\n  .dcr-form, .dcr-stat-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .dcr-volume {\n    display: block;\n  }\n\n  .dcr-volume strong {\n    margin-top: 7px;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .dcr-hero, .dcr-panel {\n    animation: dcr-enter 0.55s ease both;\n  }\n\n  .dcr-panel:nth-child(2) {\n    animation-delay: 0.08s;\n  }\n\n  @keyframes dcr-enter {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImR5bmFtaWMtY29tcHJlc3Npb24uY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHVEQUFBO0VBQXlELG1CQUFBO0VBQXFCLDRDQUFBO0VBQThDLHFDQUFBO0FDV3BQOztBRFZBO0VBQTZCLHVDQUFBO0VBQXlDLGtCQUFBO0FDZXRFOztBRGRBO0VBQXdCLGFBQUE7RUFBZSxRQUFBO0VBQVUsZ0JBQUE7QUNvQmpEOztBRG5CQTtFQUF5QixrQkFBQTtBQ3VCekI7O0FEdEJBO0VBQXdCLHVDQUFBO0VBQXlDLGtCQUFBO0FDMkJqRTs7QUQxQkE7RUFBeUIsT0FBQTtFQUFTLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHVEQUFBO0VBQXlELGtCQUFBO0VBQW9CLDZDQUFBO0VBQStDLHFDQUFBO0VBQXVDLGFBQUE7RUFBZSxrQkFBQTtBQ3VDM1E7O0FEdENBO0VBQW9CLHVDQUFBO0VBQXlDLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLHFCQUFBO0FDNkNsRzs7QUQ1Q0E7RUFBa0MsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsdUNBQUE7RUFBeUMsaUJBQUE7RUFBa0IsZ0JBQUE7QUNvRGpJOztBRG5EQTtFQUE0QjtJQUF5QixnQkFBQTtJQUFrQixlQUFBO0VDeURyRTs7RUR6RHVGO0lBQW9CLGtCQUFBO0VDNkQzRztBQUNGOztBQW5FQTtFQUFZLHlDQUFBO0FBc0VaOztBQXJFQTtFQUFhLGlCQUFBO0VBQW1CLFlBQUE7RUFBYywrQkFBQTtFQUFpQyw0QkFBQTtBQTRFL0U7O0FBM0VBO0VBQVksa0JBQUE7RUFBb0IsYUFBQTtFQUFlLDJDQUFBO0VBQTZDLG1CQUFBO0VBQXFCLFNBQUE7RUFBVyxpQkFBQTtF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QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUQ0Zko7O0FDemZJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEMmZOOztBQ3hmSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRDBmTjs7QUN2Zkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QUR5Zk47O0FDdmZJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUQyZm5EOztBQzFmSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRDRmTjs7QUMxZkk7RUFBVyxnQ0FBQTtBRDZmZjs7QUM1Zkk7RUFBb0Msd0JBQUE7QUQrZnhDOztBQzlmSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEZ2dCTjs7QUM5Zkk7RUFBa0QsbUNBQUE7QURpZ0J0RCIsImZpbGUiOiJkeW5hbWljLWNvbXByZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtc2VsZWN0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi10b3A6IDE3cHg7IHBhZGRpbmc6IDEzcHggMTdweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogMTVweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IH1cbi5wcm9maWxlLXNlbGVjdCA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IDEuNDVyZW07IH1cbi5wcm9maWxlLXNlbGVjdCA+IGRpdiB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMnB4OyBtaW4td2lkdGg6IDE0MHB4OyB9XG4ucHJvZmlsZS1zZWxlY3Qgc3Ryb25nIHsgZm9udC1zaXplOiAuODFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzbWFsbCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuNzFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDE4MHB4OyBtYXgtd2lkdGg6IDM0MHB4OyBwYWRkaW5nOiA5cHggMTFweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogOXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtc2l6ZTogLjc5cmVtOyB9XG4ucHJvZmlsZS1zZWxlY3QgYSB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZDEyMzMyKTsgZm9udC1zaXplOiAuNzZyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuLnByb2ZpbGUtc2VsZWN0IC5wcm9maWxlLW5vdGljZSB7IGZsZXgtYmFzaXM6IDEwMCU7IHBhZGRpbmctdG9wOiA1cHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuN3JlbTsgbGluZS1oZWlnaHQ6IDEuNzsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7IC5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4LWJhc2lzOiAxMDAlOyBtYXgtd2lkdGg6IG5vbmU7IH0ucHJvZmlsZS1zZWxlY3QgYSB7IG1hcmdpbi1yaWdodDogYXV0bzsgfSB9XG4iLCJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG5AaW1wb3J0ICcuLi9wcm9maWxlLXNlbGVjdCc7XHJcbi5kY3ItcGFnZSB7IC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpOyB9XHJcbi5kY3Itc2hlbGwgeyBtYXgtd2lkdGg6IDEyNDBweDsgbWFyZ2luOiBhdXRvOyBwYWRkaW5nOiBjbGFtcCgxNHB4LCAzdncsIDM0cHgpOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyB9XHJcbi5kY3ItaGVybyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAyMjBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAyMnB4OyBtaW4taGVpZ2h0OiAyNjBweDsgcGFkZGluZzogY2xhbXAoMjRweCwgNHZ3LCA0MnB4KTsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyLXJhZGl1czogMjZweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgODQlIDE0JSwgcmdiYSgyMjUsIDU1LCA1NSwgLjI4KSwgdHJhbnNwYXJlbnQgMzIlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIwMjEyNiwgIzExMTMxOCk7IGJveC1zaGFkb3c6IDAgMjJweCA1MHB4IHJnYmEoMTUsIDE3LCAyMCwgLjIpOyB9XHJcbi5kY3ItaGVybzo6YWZ0ZXIgeyBjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogYXV0byAtOCUgLTYyJSAzNiU7IGhlaWdodDogMjIwcHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpOyBib3JkZXItcmFkaXVzOiA1MCU7IHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XHJcbi5kY3ItaGVyb19fY29weSwgLmRjci1oZXJvX19nYXVnZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgfVxyXG4uZGNyLWV5ZWJyb3csIC5kY3Itb3ZlcmxpbmUgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IGNvbG9yOiAjZjE5YTlhOyBmb250LXNpemU6IC43MnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgbGV0dGVyLXNwYWNpbmc6IC4wOWVtOyB9XHJcbi5kY3ItZXllYnJvdyBpb24taWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgfVxyXG4uZGNyLWhlcm8gaDEgeyBtYXgtd2lkdGg6IDY0MHB4OyBtYXJnaW46IDEzcHggMCAxMHB4OyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sIDN2dywgMi4zcmVtKTsgbGluZS1oZWlnaHQ6IDEuNDU7IH1cclxuLmRjci1oZXJvIHAgeyBtYXgtd2lkdGg6IDYyMHB4OyBtYXJnaW46IDA7IGNvbG9yOiAjYzdjOWNmOyBsaW5lLWhlaWdodDogMS45OyBmb250LXNpemU6IC45cmVtOyB9XHJcbi5kY3ItaGVyb19fdGFncyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiA4cHg7IG1hcmdpbi10b3A6IDIycHg7IH1cclxuLmRjci1oZXJvX190YWdzIHNwYW4geyBwYWRkaW5nOiA2cHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTgpOyBib3JkZXItcmFkaXVzOiA5OTlweDsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDYpOyBjb2xvcjogI2U0ZTRlNzsgZm9udC1zaXplOiAuNzNyZW07IH1cclxuLmRjci1oZXJvX19nYXVnZSB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5kY3ItZ2F1Z2VfX3JpbmcgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgd2lkdGg6IDE5NHB4OyBoZWlnaHQ6IDE5NHB4OyBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI0NSwgOTMsIDkzLCAuNjgpOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjE0LCA0OCwgNDgsIC4xOCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjAyKSA2NSUpOyBib3gtc2hhZG93OiAwIDAgMCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA0KSwgaW5zZXQgMCAwIDM2cHggcmdiYSgyMjksIDYxLCA2MSwgLjA4KTsgfVxyXG4uZGNyLWdhdWdlX19yaW5nIHN0cm9uZyB7IGZvbnQtc2l6ZTogMy4ycmVtOyBsaW5lLWhlaWdodDogMTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG4uZGNyLWdhdWdlX19yaW5nIHNtYWxsIHsgbWFyZ2luLXRvcDogOHB4OyBjb2xvcjogI2Y0YWJhYjsgbGV0dGVyLXNwYWNpbmc6IC4xNWVtOyB9XHJcbi5kY3ItbGF5b3V0IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS4wN2ZyKSBtaW5tYXgoMCwgLjkzZnIpOyBhbGlnbi1pdGVtczogc3RhcnQ7IGdhcDogMThweDsgbWFyZ2luLXRvcDogMjJweDsgfVxyXG4uZGNyLXBhbmVsIHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiBjbGFtcCgyMHB4LCAyLjh2dywgMzBweCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMTgpOyBib3JkZXItcmFkaXVzOiAyMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpOyBib3gtc2hhZG93OiAwIDEwcHggMjhweCByZ2JhKDE2LCAxOCwgMjIsIC4wNik7IH1cclxuLmRjci1wYW5lbF9faGVhZGluZyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4OyB9XHJcbi5kY3ItcGFuZWxfX2hlYWRpbmcgaDIgeyBtYXJnaW46IDVweCAwIDA7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IGZvbnQtc2l6ZTogMS4yOHJlbTsgfVxyXG4uZGNyLXBhbmVsX19oZWFkaW5nID4gaW9uLWljb24geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGZvbnQtc2l6ZTogMS42cmVtOyB9XHJcbi5kY3Itb3ZlcmxpbmUgeyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IH1cclxuLmRjci1oZWxwLCAuZGNyLWRpc2NsYWltZXIgeyBtYXJnaW46IDE3cHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGZvbnQtc2l6ZTogLjg0cmVtOyBsaW5lLWhlaWdodDogMS45OyB9XHJcbi5kY3ItZm9ybSB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAyMnB4OyB9XHJcbi5kY3ItZmllbGQgeyBkaXNwbGF5OiBibG9jazsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAxM3B4IDE0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAuMik7IGJvcmRlci1yYWRpdXM6IDE0cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxyXG4uZGNyLWZpZWxkLS13aWRlIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxyXG4uZGNyLWZpZWxkID4gc3BhbiB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDZweDsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAuODJyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLmRjci1maWVsZCBzbWFsbCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsgZm9udC1zaXplOiAuN3JlbTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4uZGNyLWZpZWxkX19jb250cm9sIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbi10b3A6IDhweDsgfVxyXG4uZGNyLWZpZWxkIGlucHV0IHsgd2lkdGg6IDEwMCU7IG1pbi13aWR0aDogMDsgYm9yZGVyOiAwOyBvdXRsaW5lOiAwOyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udDogaW5oZXJpdDsgZm9udC1zaXplOiAxLjE0cmVtOyBmb250LXdlaWdodDogODAwOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4uZGNyLWZpZWxkOmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgLjEyKTsgfVxyXG4uZGNyLWZpZWxkX19jb250cm9sIGJ1dHRvbiB7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGZsZXg6IG5vbmU7IHBhZGRpbmc6IDRweDsgYm9yZGVyOiAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBmb250LXNpemU6IDEuMjVyZW07IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4uZGNyLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBtYXJnaW4tdG9wOiAxNnB4OyB9XHJcbi5kY3ItYWN0aW9ucyBidXR0b24geyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDhweCAxMnB4OyBib3JkZXI6IDA7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4wOSk7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtd2VpZ2h0OiA3MDA7IGN1cnNvcjogcG9pbnRlcjsgfVxyXG4uZGNyLXZhbGlkYXRpb24geyBtYXJnaW46IDE0cHggMCAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGZvbnQtc2l6ZTogLjgycmVtOyB9XHJcbi5kY3ItcHJpbWFyeSB7IG1hcmdpbi10b3A6IDIycHg7IHBhZGRpbmc6IDIycHg7IGJvcmRlci1yYWRpdXM6IDE3cHg7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWYyNDI4LCAjYzgzMzM2IDY1JSwgI2UwNTI0OCk7IH1cclxuLmRjci1wcmltYXJ5IHNwYW4geyBmb250LXNpemU6IC44NXJlbTsgb3BhY2l0eTogLjk7IH1cclxuLmRjci1wcmltYXJ5IHN0cm9uZyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA5cHg7IGZvbnQtc2l6ZTogY2xhbXAoMi4zcmVtLCA1dncsIDMuN3JlbSk7IGxpbmUtaGVpZ2h0OiAxLjE7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cclxuLmRjci1wcmltYXJ5IHN0cm9uZyBzbWFsbCB7IGZvbnQtc2l6ZTogMS4xNXJlbTsgfVxyXG4uZGNyLXByaW1hcnkgcCB7IG1hcmdpbjogOXB4IDAgMDsgZm9udC1zaXplOiAuNzRyZW07IG9wYWNpdHk6IC44NjsgfVxyXG4uZGNyLXN0YXQtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiA5cHg7IG1hcmdpbi10b3A6IDEycHg7IH1cclxuLmRjci1zdGF0LWdyaWQgPiBkaXYsIC5kY3Itdm9sdW1lIHsgcGFkZGluZzogMTRweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4xOCk7IGJvcmRlci1yYWRpdXM6IDEzcHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxyXG4uZGNyLXN0YXQtZ3JpZCBzcGFuLCAuZGNyLXZvbHVtZSBzcGFuIHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsgZm9udC1zaXplOiAuNzNyZW07IH1cclxuLmRjci1zdGF0LWdyaWQgc3Ryb25nLCAuZGNyLXZvbHVtZSBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogN3B4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBmb250LXNpemU6IC45OHJlbTsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG4uZGNyLXZvbHVtZSB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiA5cHg7IH1cclxuLmRjci12b2x1bWUgc3Ryb25nIHsgbWFyZ2luOiAwOyB9XHJcbi5kY3ItaW5zaWdodCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogMTVweDsgcGFkZGluZzogMTNweCAxNHB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpOyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiksIC4xMik7IH1cclxuLmRjci1pbnNpZ2h0W2RhdGEtdG9uZT0nc3VjY2VzcyddIHsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IpLCAuMTIpOyB9XHJcbi5kY3ItaW5zaWdodFtkYXRhLXRvbmU9J2RhbmdlciddIHsgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIC4xMik7IH1cclxuLmRjci1pbnNpZ2h0IGlvbi1pY29uIHsgZmxleDogbm9uZTsgbWFyZ2luLXRvcDogMnB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7IGZvbnQtc2l6ZTogMS4ycmVtOyB9XHJcbi5kY3ItaW5zaWdodCBwIHsgbWFyZ2luOiAwOyBmb250LXNpemU6IC44MnJlbTsgbGluZS1oZWlnaHQ6IDEuNzU7IH1cclxuLmRjci1lbXB0eSB7IGRpc3BsYXk6IGdyaWQ7IGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbjogMjRweCAwOyBwYWRkaW5nOiAzNHB4OyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIC4zKTsgYm9yZGVyLXJhZGl1czogMTVweDsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmRjci1lbXB0eSBpb24taWNvbiB7IGZvbnQtc2l6ZTogMS44cmVtOyB9XHJcbi5kY3ItZW1wdHkgcCB7IG1hcmdpbjogMDsgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHsgLmRjci1oZXJvIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH0gLmRjci1oZXJvX19nYXVnZSB7IGRpc3BsYXk6IG5vbmU7IH0gLmRjci1sYXlvdXQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSB9XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTBweCkgeyAuZGNyLXNoZWxsIHsgcGFkZGluZzogMTJweDsgfSAuZGNyLWhlcm8geyBib3JkZXItcmFkaXVzOiAxOXB4OyB9IC5kY3ItcGFuZWwgeyBwYWRkaW5nOiAxN3B4OyB9IC5kY3ItZm9ybSwgLmRjci1zdGF0LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSAuZGNyLXZvbHVtZSB7IGRpc3BsYXk6IGJsb2NrOyB9IC5kY3Itdm9sdW1lIHN0cm9uZyB7IG1hcmdpbi10b3A6IDdweDsgfSB9XHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkgeyAuZGNyLWhlcm8sIC5kY3ItcGFuZWwgeyBhbmltYXRpb246IGRjci1lbnRlciAuNTVzIGVhc2UgYm90aDsgfSAuZGNyLXBhbmVsOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLjA4czsgfSBAa2V5ZnJhbWVzIGRjci1lbnRlciB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfSB9XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 55305:
/*!*********************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dynamic-compression/dynamic-compression.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\">نسبت تراکم داینامیک</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"dcr-page\">\r\n  <main *ngIf=\"isShow\" class=\"dcr-shell\" dir=\"rtl\">\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n    <section class=\"dcr-hero\">\r\n      <div class=\"dcr-hero__copy\">\r\n        <span class=\"dcr-eyebrow\"><ion-icon name=\"pulse-outline\"></ion-icon> ENGINE GEOMETRY / DCR</span>\r\n        <h1>تراکم واقعی، بعد از بسته‌شدن سوپاپ هوا</h1>\r\n        <p>با قطر سیلندر، کورس، طول شاتون و زاویهٔ IVC ببینید چه بخشی از کورس واقعاً هوا را فشرده می‌کند.</p>\r\n        <div class=\"dcr-hero__tags\"><span>محاسبه زنده</span><span>مدل هندسی شاتون و میل‌لنگ</span></div>\r\n      </div>\r\n      <div class=\"dcr-hero__gauge\" aria-hidden=\"true\">\r\n        <div class=\"dcr-gauge__ring\"><strong>{{ result?.dynamicCompressionRatio || '—' }}</strong><small>DCR : 1</small></div>\r\n      </div>\r\n    </section>\r\n\r\n    <div class=\"dcr-layout\">\r\n      <section class=\"dcr-panel dcr-inputs\">\r\n        <div class=\"dcr-panel__heading\">\r\n          <div><span class=\"dcr-overline\">01 / ورودی‌ها</span><h2>مشخصات موتور</h2></div>\r\n          <ion-icon name=\"options-outline\"></ion-icon>\r\n        </div>\r\n        <p class=\"dcr-help\">زاویهٔ IVC را از مشخصات همان میل‌سوپاپ وارد کنید. مقادیر advertised و اندازه‌گیری در 0.050 اینچ قابل جایگزینی با یکدیگر نیستند.</p>\r\n        <form [formGroup]=\"form\" class=\"dcr-form\">\r\n          <label class=\"dcr-field\">\r\n            <span>قطر سیلندر <small>Bore · mm</small></span>\r\n            <div class=\"dcr-field__control\"><input type=\"number\" inputmode=\"decimal\" formControlName=\"boreMm\" min=\"1\" step=\"0.1\"><button type=\"button\" (click)=\"onInfo('bore')\" aria-label=\"توضیح قطر سیلندر\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n          </label>\r\n          <label class=\"dcr-field\">\r\n            <span>کورس میل‌لنگ <small>Stroke · mm</small></span>\r\n            <div class=\"dcr-field__control\"><input type=\"number\" inputmode=\"decimal\" formControlName=\"strokeMm\" min=\"1\" step=\"0.1\"><button type=\"button\" (click)=\"onInfo('stroke')\" aria-label=\"توضیح کورس میل‌لنگ\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n          </label>\r\n          <label class=\"dcr-field\">\r\n            <span>طول شاتون <small>Centre to centre · mm</small></span>\r\n            <div class=\"dcr-field__control\"><input type=\"number\" inputmode=\"decimal\" formControlName=\"rodLengthMm\" min=\"1\" step=\"0.1\"><button type=\"button\" (click)=\"onInfo('rod')\" aria-label=\"توضیح طول شاتون\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n          </label>\r\n          <label class=\"dcr-field\">\r\n            <span>تراکم استاتیک <small>SCR · :1</small></span>\r\n            <div class=\"dcr-field__control\"><input type=\"number\" inputmode=\"decimal\" formControlName=\"staticCompressionRatio\" min=\"1.01\" step=\"0.1\"><button type=\"button\" (click)=\"onInfo('compression')\" aria-label=\"توضیح تراکم استاتیک\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n          </label>\r\n          <label class=\"dcr-field dcr-field--wide\">\r\n            <span>بسته‌شدن سوپاپ هوا <small>IVC · درجه پس از BDC</small></span>\r\n            <div class=\"dcr-field__control\"><input type=\"number\" inputmode=\"decimal\" formControlName=\"intakeValveClosingAbdc\" min=\"0\" max=\"180\" step=\"0.5\"><button type=\"button\" (click)=\"onInfo('ivc')\" aria-label=\"توضیح زاویه بسته‌شدن سوپاپ\"><ion-icon name=\"information-circle-outline\"></ion-icon></button></div>\r\n          </label>\r\n        </form>\r\n        <div class=\"dcr-actions\"><button type=\"button\" (click)=\"reset()\"><ion-icon name=\"refresh-outline\"></ion-icon> بازنشانی مقادیر</button></div>\r\n        <p *ngIf=\"!result\" class=\"dcr-validation\" role=\"status\">ورودی‌ها را بررسی کنید؛ طول شاتون باید از نصف کورس بیشتر باشد.</p>\r\n      </section>\r\n\r\n      <section class=\"dcr-panel dcr-output\" aria-live=\"polite\">\r\n        <div class=\"dcr-panel__heading\">\r\n          <div><span class=\"dcr-overline\">02 / نتیجه</span><h2>کورس مؤثر و DCR</h2></div>\r\n          <ion-icon name=\"analytics-outline\"></ion-icon>\r\n        </div>\r\n        <ng-container *ngIf=\"result; else dcrEmpty\">\r\n          <div class=\"dcr-primary\">\r\n            <span>نسبت تراکم داینامیک</span>\r\n            <strong dir=\"ltr\">{{ result.dynamicCompressionRatio }} <small>: 1</small></strong>\r\n            <p>از حجم باقی‌مانده در لحظهٔ IVC تا حجم کلیرانس</p>\r\n          </div>\r\n          <div class=\"dcr-stat-grid\">\r\n            <div><span>کورس مؤثر</span><strong dir=\"ltr\">{{ result.effectiveStrokeMm }} mm</strong></div>\r\n            <div><span>حجم مؤثر هر سیلندر</span><strong dir=\"ltr\">{{ result.effectiveDisplacementCc }} cc</strong></div>\r\n            <div><span>موقعیت پیستون هنگام IVC</span><strong dir=\"ltr\">{{ result.pistonPositionAtIvcMm }} mm</strong></div>\r\n            <div><span>حجم کلیرانس</span><strong dir=\"ltr\">{{ result.clearanceVolumeCc }} cc</strong></div>\r\n          </div>\r\n          <div class=\"dcr-volume\"><span>حجم جابجایی کامل هر سیلندر</span><strong dir=\"ltr\">{{ result.cylinderVolumeCc }} cc</strong></div>\r\n          <div class=\"dcr-insight\" [attr.data-tone]=\"recommendationColor\"><ion-icon name=\"bulb-outline\"></ion-icon><p>{{ recommendation }}</p></div>\r\n        </ng-container>\r\n        <ng-template #dcrEmpty><div class=\"dcr-empty\"><ion-icon name=\"calculator-outline\"></ion-icon><p>پس از واردکردن مقادیر معتبر، نتیجه اینجا به‌روز می‌شود.</p></div></ng-template>\r\n        <p class=\"dcr-disclaimer\">این مدل هندسی، مقاومت در برابر ناک را به‌تنهایی تعیین نمی‌کند. بوست، سوخت، دمای هوا، quench و جرقه نیز مؤثرند.</p>\r\n      </section>\r\n    </div>\r\n  </main>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_dynamic-compression_dynamic-compression_module_ts.js.map