"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_compression-quench_compression-quench_module_ts"],{

/***/ 20080:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/compression-quench/compression-quench-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompressionQuenchRoutingModule": () => (/* binding */ CompressionQuenchRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _compression_quench_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compression-quench.component */ 89979);




const routes = [{ path: '', component: _compression_quench_component__WEBPACK_IMPORTED_MODULE_0__.CompressionQuenchComponent }];
let CompressionQuenchRoutingModule = class CompressionQuenchRoutingModule {
};
CompressionQuenchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompressionQuenchRoutingModule);



/***/ }),

/***/ 89979:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/compression-quench/compression-quench.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompressionQuenchComponent": () => (/* binding */ CompressionQuenchComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _compression_quench_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compression-quench.component.html?ngResource */ 97102);
/* harmony import */ var _compression_quench_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compression-quench.component.scss?ngResource */ 73672);
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















let CompressionQuenchComponent = class CompressionQuenchComponent {
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
    this.blockFields = [{
      key: 'bore',
      control: 'boreMm',
      label: 'قطر سیلندر (Bore)',
      unit: 'mm'
    }, {
      key: 'stroke',
      control: 'strokeMm',
      label: 'کورس پیستون (Stroke)',
      unit: 'mm'
    }, {
      key: 'cylinders',
      control: 'cylinders',
      label: 'تعداد سیلندر',
      unit: ''
    }, {
      key: 'chamber',
      control: 'chamberVolumeCc',
      label: 'حجم اتاق احتراق سرسیلندر',
      unit: 'cc'
    }, {
      key: 'piston',
      control: 'pistonVolumeCc',
      label: 'حجم گودی یا برجستگی پیستون',
      unit: 'cc'
    }];
    this.gasketFields = [{
      key: 'gasketBore',
      control: 'gasketBoreMm',
      label: 'قطر داخلی واشر',
      unit: 'mm'
    }, {
      key: 'gasketThickness',
      control: 'gasketThicknessMm',
      label: 'ضخامت فشرده‌شده واشر',
      unit: 'mm'
    }, {
      key: 'deck',
      control: 'deckClearanceMm',
      label: 'فاصله پیستون تا سطح بلوک (Deck)',
      unit: 'mm'
    }];
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

    const values = _vehicle_profile_vehicle_profile_store__WEBPACK_IMPORTED_MODULE_8__.VehicleProfileStore.toolValues(profile, 'compression-quench');
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

      _this.siteService.GetTunerPlusById(36).subscribe(res => {
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
      cylinders: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(16)]],
      chamberVolumeCc: [35, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      pistonVolumeCc: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      gasketBoreMm: [80, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      gasketThicknessMm: [1.2, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(5)]],
      deckClearanceMm: [0.2, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-2), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(5)]]
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
    const cylinders = Number(value.cylinders);
    const chamberVolumeCc = Number(value.chamberVolumeCc);
    const pistonVolumeCc = Number(value.pistonVolumeCc);
    const gasketBoreMm = Number(value.gasketBoreMm);
    const gasketThicknessMm = Number(value.gasketThicknessMm);
    const deckClearanceMm = Number(value.deckClearanceMm);
    const sweptVolumePerCylinderCc = this.cylinderVolumeCc(boreMm, strokeMm);
    const gasketVolumeCc = this.cylinderVolumeCc(gasketBoreMm, gasketThicknessMm);
    const deckVolumeCc = this.cylinderVolumeCc(boreMm, deckClearanceMm);
    const clearanceVolumeCc = chamberVolumeCc + pistonVolumeCc + gasketVolumeCc + deckVolumeCc;

    if (clearanceVolumeCc <= 0) {
      this.result = null;
      return;
    }

    const quenchMm = gasketThicknessMm + deckClearanceMm;
    this.result = {
      sweptVolumePerCylinderCc: this.round(sweptVolumePerCylinderCc, 2),
      totalDisplacementCc: this.round(sweptVolumePerCylinderCc * cylinders, 2),
      gasketVolumeCc: this.round(gasketVolumeCc, 2),
      deckVolumeCc: this.round(deckVolumeCc, 2),
      clearanceVolumeCc: this.round(clearanceVolumeCc, 2),
      staticCompressionRatio: this.round((sweptVolumePerCylinderCc + clearanceVolumeCc) / clearanceVolumeCc, 2),
      quenchMm: this.round(quenchMm, 2),
      quenchInches: this.round(quenchMm / 25.4, 3)
    };
  }

  reset() {
    this.form.reset({
      boreMm: 78.5,
      strokeMm: 82,
      cylinders: 4,
      chamberVolumeCc: 35,
      pistonVolumeCc: 0,
      gasketBoreMm: 80,
      gasketThicknessMm: 1.2,
      deckClearanceMm: 0.2
    });
  }

  get quenchMessage() {
    const quenchMm = this.result?.quenchMm;

    if (quenchMm === undefined) {
      return 'تمام مقادیر را وارد کنید تا نتیجه نمایش داده شود.';
    }

    if (quenchMm < 0.65) {
      return 'فاصله کوئنچ بسیار کم است؛ لقی واقعی قطعات، کشش شاتون و انبساط حرارتی را با دقت بررسی کنید.';
    }

    if (quenchMm <= 1.15) {
      return 'فاصله کوئنچ در محدوده رایج موتورهای پرفورمنس خیابانی قرار دارد.';
    }

    if (quenchMm <= 1.5) {
      return 'فاصله کوئنچ نسبتاً باز است؛ فاصله پیستون تا سطح بلوک و ضخامت فشرده‌شده واشر را دوباره اندازه بگیرید.';
    }

    return 'فاصله کوئنچ زیاد است و ممکن است اثر فشردن مخلوط سوخت و هوا و مقاومت در برابر ناک را کاهش دهد.';
  }

  get quenchColor() {
    const quenchMm = this.result?.quenchMm;

    if (quenchMm === undefined || quenchMm < 0.65 || quenchMm > 1.5) {
      return 'danger';
    }

    return quenchMm <= 1.15 ? 'success' : 'warning';
  }

  get quenchStatusLabel() {
    const quenchMm = this.result?.quenchMm;

    if (quenchMm === undefined) {
      return 'بدون نتیجه';
    }

    if (quenchMm < 0.65) {
      return 'کمتر از بازه مرجع';
    }

    if (quenchMm <= 1.15) {
      return 'در بازه مرجع';
    }

    if (quenchMm <= 1.5) {
      return 'بازتر از بازه مرجع';
    }

    return 'بیشتر از بازه مرجع';
  }

  get resultItems() {
    if (!this.result) {
      return [];
    }

    return [{
      label: 'حجم جابجایی یک سیلندر',
      value: this.result.sweptVolumePerCylinderCc,
      unit: 'cc'
    }, {
      label: 'حجم موتور',
      value: this.result.totalDisplacementCc,
      unit: 'cc'
    }, {
      label: 'حجم واشر',
      value: this.result.gasketVolumeCc,
      unit: 'cc'
    }, {
      label: 'حجم فاصله پیستون تا بلوک',
      value: this.result.deckVolumeCc,
      unit: 'cc'
    }, {
      label: 'حجم محفظه در نقطه مرگ بالا',
      value: this.result.clearanceVolumeCc,
      unit: 'cc'
    }, {
      label: 'فاصله کوئنچ به اینچ',
      value: this.result.quenchInches,
      unit: 'in'
    }];
  }

  get quenchMarkerPercent() {
    if (!this.result) {
      return 0;
    }

    return Math.max(0, Math.min(100, this.result.quenchMm / 1.5 * 100));
  }

  onInfo(type) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = {
        bore: 'قطر نهایی داخلی سیلندر پس از ماشین‌کاری، برحسب میلی‌متر.',
        stroke: 'کورس میل‌لنگ، برحسب میلی‌متر.',
        cylinders: 'تعداد سیلندرهای موتور؛ فقط در حجم کل موتور اثر دارد.',
        chamber: 'حجم واقعی اتاق احتراق سرسیلندر برای هر سیلندر، با burette اندازه‌گیری شود.',
        piston: 'حجم گودی یا برجستگی پیستون. گودی را مثبت و برجستگی را منفی وارد کنید.',
        gasketBore: 'قطر داخلی دهانه واشر سرسیلندر پس از نصب.',
        gasketThickness: 'ضخامت فشرده‌شده واشر، نه ضخامت واشر نو پیش از بستن.',
        deck: 'فاصله تاج پیستون تا سطح بلوک در نقطه مرگ بالا. برای پیستون بالاتر از بلوک، عدد منفی وارد کنید.'
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

  cylinderVolumeCc(diameterMm, heightMm) {
    return Math.PI / 4 * Math.pow(diameterMm / 10, 2) * (heightMm / 10);
  }

  round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

};

CompressionQuenchComponent.ctorParameters = () => [{
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

CompressionQuenchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-compression-quench',
  template: _compression_quench_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_compression_quench_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CompressionQuenchComponent);


/***/ }),

/***/ 33179:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/compression-quench/compression-quench.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompressionQuenchModule": () => (/* binding */ CompressionQuenchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _compression_quench_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compression-quench-routing.module */ 20080);
/* harmony import */ var _compression_quench_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compression-quench.component */ 89979);









let CompressionQuenchModule = class CompressionQuenchModule {
};
CompressionQuenchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_compression_quench_component__WEBPACK_IMPORTED_MODULE_3__.CompressionQuenchComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _compression_quench_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompressionQuenchRoutingModule, src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ],
    })
], CompressionQuenchModule);



/***/ }),

/***/ 73672:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/compression-quench/compression-quench.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = ".profile-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 17px;\n  padding: 13px 17px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 15px;\n  background: var(--ion-item-background, #fff);\n  color: var(--ion-text-color, #1c2430);\n}\n\n.profile-select > ion-icon {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 1.45rem;\n}\n\n.profile-select > div {\n  display: grid;\n  gap: 2px;\n  min-width: 140px;\n}\n\n.profile-select strong {\n  font-size: 0.81rem;\n}\n\n.profile-select small {\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.71rem;\n}\n\n.profile-select select {\n  flex: 1;\n  min-width: 180px;\n  max-width: 340px;\n  padding: 9px 11px;\n  border: 1px solid var(--ion-color-medium-tint, #d0d5dd);\n  border-radius: 9px;\n  background: var(--ion-background-color, #fff);\n  color: var(--ion-text-color, #1c2430);\n  font: inherit;\n  font-size: 0.79rem;\n}\n\n.profile-select a {\n  color: var(--ion-color-danger, #d12332);\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.profile-select .profile-notice {\n  flex-basis: 100%;\n  padding-top: 5px;\n  color: var(--ion-color-medium, #667085);\n  font-size: 0.7rem;\n  line-height: 1.7;\n}\n\n@media (max-width: 560px) {\n  .profile-select select {\n    flex-basis: 100%;\n    max-width: none;\n  }\n\n  .profile-select a {\n    margin-right: auto;\n  }\n}\n\n:host {\n  display: block;\n}\n\n.cq-page {\n  --cq-surface: var(--ion-item-background, #fff);\n  --cq-text: var(--ion-text-color, #202127);\n  --cq-muted: var(--ion-color-step-600, #595d66);\n  --cq-border: rgba(var(--ion-color-medium-rgb, 146, 148, 156), .26);\n  --cq-soft: rgba(var(--ion-color-medium-rgb, 146, 148, 156), .09);\n  --cq-red: #b7212a;\n}\n\n.cq-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  overflow: hidden;\n  padding: 34px max(24px, (100vw - 1140px) / 2) 36px;\n  background: linear-gradient(115deg, #171a20 0%, #26232a 67%, #45252a 100%);\n  color: #fff;\n  border-bottom: 3px solid var(--cq-red);\n}\n\n.cq-hero::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: repeating-linear-gradient(110deg, transparent 0 66px, rgba(255, 255, 255, 0.025) 67px 68px);\n}\n\n.cq-hero__content {\n  position: relative;\n  z-index: 1;\n  max-width: 700px;\n}\n\n.cq-hero__eyebrow {\n  display: block;\n  margin-bottom: 9px;\n  color: #ff9297;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  direction: ltr;\n  text-align: right;\n}\n\n.cq-hero__title {\n  margin: 0 0 8px;\n  font-size: clamp(1.45rem, 2.5vw, 2rem);\n  font-weight: 800;\n  line-height: 1.4;\n}\n\n.cq-hero__subtitle {\n  margin: 0;\n  color: #e0dde0;\n  font-size: 0.94rem;\n  line-height: 1.9;\n}\n\n.cq-hero__icon {\n  position: relative;\n  z-index: 1;\n  flex: none;\n  font-size: clamp(54px, 6vw, 86px);\n  color: #f06d73;\n  opacity: 0.8;\n}\n\n.cq-layout {\n  padding-top: 22px;\n  padding-bottom: 28px;\n}\n\n.cq-col {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.cq-card {\n  min-height: 100%;\n  padding: 25px;\n  border: 1px solid var(--cq-border);\n  border-radius: 20px;\n  background: var(--cq-surface);\n  color: var(--cq-text);\n  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.07);\n}\n\n.cq-card--result {\n  border-top: 3px solid var(--cq-red);\n}\n\n.cq-card--empty {\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  min-height: 320px;\n  gap: 12px;\n  text-align: center;\n}\n\n.cq-card--empty p {\n  margin: 0;\n  color: var(--cq-muted);\n}\n\n.cq-empty-icon {\n  font-size: 54px;\n  color: var(--cq-muted);\n}\n\n.cq-card__header {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-bottom: 23px;\n}\n\n.cq-card__icon {\n  flex: none;\n  box-sizing: content-box;\n  padding: 10px;\n  border-radius: 12px;\n  background: rgba(183, 33, 42, 0.1);\n  color: var(--cq-red);\n  font-size: 22px;\n}\n\n.cq-card__title {\n  margin: 1px 0 4px;\n  color: var(--cq-text);\n  font-size: 1.13rem;\n  font-weight: 800;\n}\n\n.cq-card__subtitle {\n  margin: 0;\n  color: var(--cq-muted);\n  font-size: 0.8rem;\n  line-height: 1.85;\n}\n\n.cq-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 14px;\n}\n\n.cq-divider {\n  grid-column: 1/-1;\n  margin-top: 7px;\n  border-bottom: 1px solid var(--cq-border);\n}\n\n.cq-divider__label {\n  display: inline-block;\n  padding: 0 0 8px;\n  color: var(--cq-red);\n  font-size: 0.8rem;\n  font-weight: 800;\n}\n\n.cq-field {\n  min-width: 0;\n}\n\n.cq-field__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 5px;\n  min-height: 33px;\n  margin-bottom: 6px;\n}\n\n.cq-field__label {\n  color: var(--cq-text);\n  font-size: 0.84rem;\n  font-weight: 700;\n  line-height: 1.45;\n}\n\n.cq-info-btn {\n  display: grid;\n  flex: none;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border: 1px solid var(--cq-border);\n  border-radius: 9px;\n  background: var(--cq-soft);\n  color: var(--cq-text);\n  cursor: pointer;\n}\n\n.cq-info-btn ion-icon {\n  font-size: 17px;\n}\n\n.cq-info-btn:hover, .cq-info-btn:focus-visible {\n  border-color: var(--cq-red);\n  color: var(--cq-red);\n  outline: none;\n}\n\n.cq-input-wrap {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  border: 1px solid var(--cq-border);\n  border-radius: 11px;\n  background: var(--cq-soft);\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.cq-input-wrap:focus-within {\n  border-color: var(--cq-red);\n  box-shadow: 0 0 0 3px rgba(183, 33, 42, 0.13);\n}\n\n.cq-input {\n  min-width: 0;\n  --background: transparent;\n  --color: var(--cq-text);\n  --padding-start: 12px;\n  --padding-end: 8px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  color: var(--cq-text);\n  font-size: 1rem !important;\n  font-weight: 750;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cq-input-unit {\n  flex: none;\n  padding-inline: 9px 12px;\n  color: var(--cq-muted);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.cq-hint {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0;\n  padding: 10px 12px;\n  border: 1px solid rgba(184, 128, 38, 0.3);\n  border-radius: 10px;\n  background: rgba(184, 128, 38, 0.09);\n  color: var(--cq-text);\n  font-size: 0.78rem;\n  line-height: 1.8;\n}\n\n.cq-hint__icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--tuner-warning-text, #a5680c);\n  font-size: 18px;\n}\n\n.cq-reset-btn {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  padding: 11px;\n  border: 1px solid var(--cq-border);\n  border-radius: 10px;\n  background: var(--cq-soft);\n  color: var(--cq-text);\n  font-size: 0.86rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.cq-reset-btn:hover, .cq-reset-btn:focus-visible {\n  border-color: var(--cq-red);\n  color: var(--cq-red);\n  outline: none;\n}\n\n.cq-reset-btn ion-icon {\n  font-size: 18px;\n}\n\n.cq-metric {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n  padding: 22px;\n  border-radius: 16px;\n  background: linear-gradient(120deg, #1b1d22, #343037);\n  color: #fff;\n  border-inline-start: 4px solid var(--tuner-danger-border, #df414b);\n}\n\n.cq-metric__info {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 0;\n}\n\n.cq-metric__eyebrow {\n  color: #ff9da3;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.03em;\n}\n\n.cq-metric__label {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 800;\n}\n\n.cq-metric__description {\n  color: #e2dfe1;\n  font-size: 0.76rem;\n  line-height: 1.7;\n}\n\n.cq-metric__number {\n  flex: none;\n  display: flex;\n  align-items: baseline;\n  gap: 5px;\n  color: #fff;\n  white-space: nowrap;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cq-metric__number strong {\n  font-size: clamp(2rem, 3vw, 2.65rem);\n  font-weight: 850;\n  line-height: 1;\n}\n\n.cq-metric__number span {\n  color: #ffadb1;\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n\n.cq-quench {\n  --cq-status: 183, 33, 42;\n  margin-bottom: 16px;\n  padding: 18px;\n  border: 1px solid rgba(var(--cq-status), 0.4);\n  border-radius: 15px;\n  background: rgba(var(--cq-status), 0.07);\n}\n\n.cq-quench--success {\n  --cq-status: 25, 132, 92;\n}\n\n.cq-quench--warning {\n  --cq-status: 174, 105, 15;\n}\n\n.cq-quench__heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 19px;\n}\n\n.cq-quench__label {\n  display: block;\n  margin-bottom: 3px;\n  color: var(--cq-text);\n  font-size: 0.83rem;\n  font-weight: 800;\n}\n\n.cq-quench__info {\n  display: flex;\n  align-items: baseline;\n  gap: 9px;\n}\n\n.cq-quench__value {\n  color: var(--cq-text);\n  font-size: 1.45rem;\n  font-weight: 850;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.cq-quench__value small {\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n\n.cq-quench__inch {\n  color: var(--cq-muted);\n  font-size: 0.79rem;\n}\n\n.cq-quench__status {\n  max-width: 52%;\n  padding: 6px 9px;\n  border-radius: 8px;\n  background: rgba(var(--cq-status), 0.17);\n  color: var(--cq-text);\n  font-size: 0.74rem;\n  font-weight: 750;\n  text-align: center;\n  line-height: 1.5;\n}\n\n.cq-quench__bar {\n  padding-inline: 5px;\n}\n\n.cq-quench__track {\n  position: relative;\n  display: flex;\n  direction: ltr;\n  height: 11px;\n  border-radius: 99px;\n  background: var(--cq-soft);\n}\n\n.cq-quench__zone--tight {\n  width: 43.333%;\n  border-radius: 99px 0 0 99px;\n  background: #c8444a;\n}\n\n.cq-quench__zone--good {\n  width: 33.334%;\n  background: #29946b;\n}\n\n.cq-quench__zone--wide {\n  width: 23.333%;\n  border-radius: 0 99px 99px 0;\n  background: linear-gradient(90deg, #d18a29, #c8444a);\n}\n\n.cq-quench__marker {\n  position: absolute;\n  top: -6px;\n  width: 4px;\n  height: 23px;\n  border-radius: 4px;\n  background: var(--cq-text);\n  box-shadow: 0 0 0 2px var(--cq-surface);\n  transform: translateX(-50%);\n  transition: left 0.2s ease;\n}\n\n.cq-quench__labels {\n  position: relative;\n  height: 26px;\n  color: var(--cq-muted);\n  font-size: 0.68rem;\n  font-weight: 700;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  direction: ltr;\n}\n\n.cq-quench__labels span {\n  position: absolute;\n  top: 7px;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.cq-quench__labels span:nth-child(1) {\n  left: 0;\n  transform: none;\n}\n\n.cq-quench__labels span:nth-child(2) {\n  left: 43.333%;\n}\n\n.cq-quench__labels span:nth-child(3) {\n  left: 76.667%;\n}\n\n.cq-quench__labels span:nth-child(4) {\n  right: 0;\n  transform: none;\n}\n\n.cq-quench__message {\n  margin: 4px 0 0;\n  color: var(--cq-text);\n  font-size: 0.82rem;\n  font-weight: 650;\n  line-height: 1.8;\n}\n\n.cq-quench__caption {\n  margin: 5px 0 0;\n  color: var(--cq-muted);\n  font-size: 0.74rem;\n  line-height: 1.75;\n}\n\n.cq-results-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.cq-result-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n  padding: 13px;\n  border: 1px solid var(--cq-border);\n  border-radius: 11px;\n  background: var(--cq-soft);\n}\n\n.cq-result-item__label {\n  color: var(--cq-muted);\n  font-size: 0.77rem;\n  font-weight: 700;\n  line-height: 1.55;\n}\n\n.cq-result-item__value {\n  color: var(--cq-text);\n  font-size: 1.13rem;\n  font-weight: 800;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  direction: ltr;\n  text-align: right;\n}\n\n.cq-result-item__value small {\n  margin-left: 3px;\n  color: var(--cq-muted);\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n\n.cq-disclaimer {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 12px;\n  border: 1px solid var(--cq-border);\n  border-radius: 11px;\n  background: var(--cq-soft);\n}\n\n.cq-disclaimer ion-icon {\n  flex: none;\n  margin-top: 2px;\n  color: var(--cq-red);\n  font-size: 18px;\n}\n\n.cq-disclaimer p {\n  margin: 0;\n  color: var(--cq-text);\n  font-size: 0.78rem;\n  line-height: 1.8;\n}\n\n:host-context(.dark-theme) .cq-page {\n  --cq-muted: #c0c1c6;\n  --cq-border: rgba(255,255,255,.2);\n  --cq-soft: rgba(255,255,255,.07);\n  --cq-red: #f06b72;\n}\n\n:host-context(.dark-theme) .cq-card {\n  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.26);\n}\n\n:host-context(.dark-theme) .cq-card__icon {\n  background: rgba(240, 107, 114, 0.17);\n}\n\n:host-context(.dark-theme) .cq-hint {\n  background: rgba(184, 128, 38, 0.14);\n}\n\n:host-context(.dark-theme) .cq-hint__icon {\n  color: #eab45c;\n}\n\n@media (max-width: 620px) {\n  .cq-hero {\n    padding: 27px 18px;\n  }\n\n  .cq-hero__icon {\n    font-size: 45px;\n  }\n\n  .cq-layout {\n    padding-inline: 8px;\n  }\n\n  .cq-card {\n    padding: 18px 15px;\n    border-radius: 16px;\n  }\n\n  .cq-form {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .cq-metric {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .cq-metric__number strong {\n    font-size: 2.3rem;\n  }\n\n  .cq-results-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 380px) {\n  .cq-hero__icon {\n    display: none;\n  }\n\n  .cq-results-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .cq-quench__heading {\n    flex-direction: column;\n  }\n\n  .cq-quench__status {\n    max-width: none;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cq-input-wrap, .cq-quench__marker {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcHJvZmlsZS1zZWxlY3Quc2NzcyIsImNvbXByZXNzaW9uLXF1ZW5jaC5jb21wb25lbnQuc2NzcyIsIi4uXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsdURBQUE7RUFBeUQsbUJBQUE7RUFBcUIsNENBQUE7RUFBOEMscUNBQUE7QUNXcFA7O0FEVkE7RUFBNkIsdUNBQUE7RUFBeUMsa0JBQUE7QUNldEU7O0FEZEE7RUFBd0IsYUFBQTtFQUFlLFFBQUE7RUFBVSxnQkFBQTtBQ29CakQ7O0FEbkJBO0VBQXlCLGtCQUFBO0FDdUJ6Qjs7QUR0QkE7RUFBd0IsdUNBQUE7RUFBeUMsa0JBQUE7QUMyQmpFOztBRDFCQTtFQUF5QixPQUFBO0VBQVMsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsdURBQUE7RUFBeUQsa0JBQUE7RUFBb0IsNkNBQUE7RUFBK0MscUNBQUE7RUFBdUMsYUFBQTtFQUFlLGtCQUFBO0FDdUMzUTs7QUR0Q0E7RUFBb0IsdUNBQUE7RUFBeUMsa0JBQUE7RUFBbUIsZ0JBQUE7RUFBa0IscUJBQUE7QUM2Q2xHOztBRDVDQTtFQUFrQyxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQix1Q0FBQTtFQUF5QyxpQkFBQTtFQUFrQixnQkFBQTtBQ29Eakk7O0FEbkRBO0VBQTRCO0lBQXlCLGdCQUFBO0lBQWtCLGVBQUE7RUN5RHJFOztFRHpEdUY7SUFBb0Isa0JBQUE7RUM2RDNHO0FBQ0Y7O0FBbkVBO0VBQVEsY0FBQTtBQXNFUjs7QUFwRUE7RUFDRSw4Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0VBQ0EsaUJBQUE7QUF1RUY7O0FBcEVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNB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QWplQTtFQUNFO0lBQXFDLGdCQUFBO0VBb2VyQztBQUNGOztBQ3h0QkU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRDB0Qko7O0FDdnRCSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRHl0Qk47O0FDdHRCSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRHd0Qk47O0FDcnRCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRHV0Qk47O0FDcnRCSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEeXRCbkQ7O0FDeHRCSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRDB0Qk47O0FDeHRCSTtFQUFXLGdDQUFBO0FEMnRCZjs7QUMxdEJJO0VBQW9DLHdCQUFBO0FENnRCeEM7O0FDNXRCSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEOHRCTjs7QUM1dEJJO0VBQWtELG1DQUFBO0FEK3RCdEQiLCJmaWxlIjoiY29tcHJlc3Npb24tcXVlbmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtc2VsZWN0IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbi10b3A6IDE3cHg7IHBhZGRpbmc6IDEzcHggMTdweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogMTVweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IH1cbi5wcm9maWxlLXNlbGVjdCA+IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNkMTIzMzIpOyBmb250LXNpemU6IDEuNDVyZW07IH1cbi5wcm9maWxlLXNlbGVjdCA+IGRpdiB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMnB4OyBtaW4td2lkdGg6IDE0MHB4OyB9XG4ucHJvZmlsZS1zZWxlY3Qgc3Ryb25nIHsgZm9udC1zaXplOiAuODFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzbWFsbCB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuNzFyZW07IH1cbi5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDE4MHB4OyBtYXgtd2lkdGg6IDM0MHB4OyBwYWRkaW5nOiA5cHggMTFweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjZDBkNWRkKTsgYm9yZGVyLXJhZGl1czogOXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7IGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzFjMjQzMCk7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtc2l6ZTogLjc5cmVtOyB9XG4ucHJvZmlsZS1zZWxlY3QgYSB7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZDEyMzMyKTsgZm9udC1zaXplOiAuNzZyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuLnByb2ZpbGUtc2VsZWN0IC5wcm9maWxlLW5vdGljZSB7IGZsZXgtYmFzaXM6IDEwMCU7IHBhZGRpbmctdG9wOiA1cHg7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjNjY3MDg1KTsgZm9udC1zaXplOiAuN3JlbTsgbGluZS1oZWlnaHQ6IDEuNzsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7IC5wcm9maWxlLXNlbGVjdCBzZWxlY3QgeyBmbGV4LWJhc2lzOiAxMDAlOyBtYXgtd2lkdGg6IG5vbmU7IH0ucHJvZmlsZS1zZWxlY3QgYSB7IG1hcmdpbi1yaWdodDogYXV0bzsgfSB9XG4iLCJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG5AaW1wb3J0ICcuLi9wcm9maWxlLXNlbGVjdCc7XHJcbjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cclxuXHJcbi5jcS1wYWdlIHtcclxuICAtLWNxLXN1cmZhY2U6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpO1xyXG4gIC0tY3EtdGV4dDogdmFyKC0taW9uLXRleHQtY29sb3IsICMyMDIxMjcpO1xyXG4gIC0tY3EtbXV0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzU5NWQ2Nik7XHJcbiAgLS1jcS1ib3JkZXI6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE0NiwgMTQ4LCAxNTYpLCAuMjYpO1xyXG4gIC0tY3Etc29mdDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTQ2LCAxNDgsIDE1NiksIC4wOSk7XHJcbiAgLS1jcS1yZWQ6ICNiNzIxMmE7XHJcbn1cclxuXHJcbi5jcS1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDI0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAzNHB4IG1heCgyNHB4LCBjYWxjKCgxMDB2dyAtIDExNDBweCkgLyAyKSkgMzZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjMTcxYTIwIDAlLCAjMjYyMzJhIDY3JSwgIzQ1MjUyYSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY3EtcmVkKTtcclxufVxyXG5cclxuLmNxLWhlcm86OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHRyYW5zcGFyZW50IDAgNjZweCwgcmdiYSgyNTUsMjU1LDI1NSwuMDI1KSA2N3B4IDY4cHgpO1xyXG59XHJcblxyXG4uY3EtaGVyb19fY29udGVudCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgbWF4LXdpZHRoOiA3MDBweDsgfVxyXG4uY3EtaGVyb19fZXllYnJvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gIGNvbG9yOiAjZmY5Mjk3O1xyXG4gIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLjEyZW07XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNxLWhlcm9fX3RpdGxlIHsgbWFyZ2luOiAwIDAgOHB4OyBmb250LXNpemU6IGNsYW1wKDEuNDVyZW0sIDIuNXZ3LCAycmVtKTsgZm9udC13ZWlnaHQ6IDgwMDsgbGluZS1oZWlnaHQ6IDEuNDsgfVxyXG4uY3EtaGVyb19fc3VidGl0bGUgeyBtYXJnaW46IDA7IGNvbG9yOiAjZTBkZGUwOyBmb250LXNpemU6IC45NHJlbTsgbGluZS1oZWlnaHQ6IDEuOTsgfVxyXG4uY3EtaGVyb19faWNvbiB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgZmxleDogbm9uZTsgZm9udC1zaXplOiBjbGFtcCg1NHB4LCA2dncsIDg2cHgpOyBjb2xvcjogI2YwNmQ3Mzsgb3BhY2l0eTogLjg7IH1cclxuXHJcbi5jcS1sYXlvdXQgeyBwYWRkaW5nLXRvcDogMjJweDsgcGFkZGluZy1ib3R0b206IDI4cHg7IH1cclxuLmNxLWNvbCB7IHBhZGRpbmctdG9wOiA4cHg7IHBhZGRpbmctYm90dG9tOiA4cHg7IH1cclxuXHJcbi5jcS1jYXJkIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3EtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNxLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1jcS10ZXh0KTtcclxuICBib3gtc2hhZG93OiAwIDEycHggMzRweCByZ2JhKDAsMCwwLC4wNyk7XHJcbn1cclxuLmNxLWNhcmQtLXJlc3VsdCB7IGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1jcS1yZWQpOyB9XHJcbi5jcS1jYXJkLS1lbXB0eSB7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsganVzdGlmeS1pdGVtczogY2VudGVyOyBtaW4taGVpZ2h0OiAzMjBweDsgZ2FwOiAxMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmNxLWNhcmQtLWVtcHR5IHAgeyBtYXJnaW46IDA7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IH1cclxuLmNxLWVtcHR5LWljb24geyBmb250LXNpemU6IDU0cHg7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IH1cclxuXHJcbi5jcS1jYXJkX19oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxM3B4OyBtYXJnaW4tYm90dG9tOiAyM3B4OyB9XHJcbi5jcS1jYXJkX19pY29uIHtcclxuICBmbGV4OiBub25lO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMzMsIDQyLCAuMSk7XHJcbiAgY29sb3I6IHZhcigtLWNxLXJlZCk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5jcS1jYXJkX190aXRsZSB7IG1hcmdpbjogMXB4IDAgNHB4OyBjb2xvcjogdmFyKC0tY3EtdGV4dCk7IGZvbnQtc2l6ZTogMS4xM3JlbTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxyXG4uY3EtY2FyZF9fc3VidGl0bGUgeyBtYXJnaW46IDA7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IGZvbnQtc2l6ZTogLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjg1OyB9XHJcblxyXG4uY3EtZm9ybSB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiAxNnB4IDE0cHg7IH1cclxuLmNxLWRpdmlkZXIgeyBncmlkLWNvbHVtbjogMSAvIC0xOyBtYXJnaW4tdG9wOiA3cHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jcS1ib3JkZXIpOyB9XHJcbi5jcS1kaXZpZGVyX19sYWJlbCB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMCAwIDhweDsgY29sb3I6IHZhcigtLWNxLXJlZCk7IGZvbnQtc2l6ZTogLjhyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IH1cclxuLmNxLWZpZWxkIHsgbWluLXdpZHRoOiAwOyB9XHJcbi5jcS1maWVsZF9fcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDVweDsgbWluLWhlaWdodDogMzNweDsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XHJcbi5jcS1maWVsZF9fbGFiZWwgeyBjb2xvcjogdmFyKC0tY3EtdGV4dCk7IGZvbnQtc2l6ZTogLjg0cmVtOyBmb250LXdlaWdodDogNzAwOyBsaW5lLWhlaWdodDogMS40NTsgfVxyXG4uY3EtaW5mby1idG4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZmxleDogbm9uZTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jcS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jcS1zb2Z0KTtcclxuICBjb2xvcjogdmFyKC0tY3EtdGV4dCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jcS1pbmZvLWJ0biBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTdweDsgfVxyXG4uY3EtaW5mby1idG46aG92ZXIsIC5jcS1pbmZvLWJ0bjpmb2N1cy12aXNpYmxlIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1jcS1yZWQpOyBjb2xvcjogdmFyKC0tY3EtcmVkKTsgb3V0bGluZTogbm9uZTsgfVxyXG5cclxuLmNxLWlucHV0LXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3EtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNxLXNvZnQpO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UsIGJveC1zaGFkb3cgLjE1cyBlYXNlO1xyXG59XHJcbi5jcS1pbnB1dC13cmFwOmZvY3VzLXdpdGhpbiB7IGJvcmRlci1jb2xvcjogdmFyKC0tY3EtcmVkKTsgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTgzLDMzLDQyLC4xMyk7IH1cclxuLmNxLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS1jcS10ZXh0KTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogdmFyKC0tY3EtdGV4dCk7XHJcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDc1MDtcclxuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xyXG59XHJcbi5jcS1pbnB1dC11bml0IHsgZmxleDogbm9uZTsgcGFkZGluZy1pbmxpbmU6IDlweCAxMnB4OyBjb2xvcjogdmFyKC0tY3EtbXV0ZWQpOyBmb250LXNpemU6IC43OHJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG4uY3EtaGludCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODQsIDEyOCwgMzgsIC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg0LCAxMjgsIDM4LCAuMDkpO1xyXG4gIGNvbG9yOiB2YXIoLS1jcS10ZXh0KTtcclxuICBmb250LXNpemU6IC43OHJlbTtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG59XHJcbi5jcS1oaW50X19pY29uIHsgZmxleDogbm9uZTsgbWFyZ2luLXRvcDogMnB4OyBjb2xvcjogdHVuZXItY29sb3Iod2FybmluZy10ZXh0LCAjYTU2ODBjKTsgZm9udC1zaXplOiAxOHB4OyB9XHJcbi5jcS1yZXNldC1idG4ge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3EtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNxLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1jcS10ZXh0KTtcclxuICBmb250LXNpemU6IC44NnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3EtcmVzZXQtYnRuOmhvdmVyLCAuY3EtcmVzZXQtYnRuOmZvY3VzLXZpc2libGUgeyBib3JkZXItY29sb3I6IHZhcigtLWNxLXJlZCk7IGNvbG9yOiB2YXIoLS1jcS1yZWQpOyBvdXRsaW5lOiBub25lOyB9XHJcbi5jcS1yZXNldC1idG4gaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cclxuXHJcbi5jcS1tZXRyaWMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMxYjFkMjIsICMzNDMwMzcpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1pbmxpbmUtc3RhcnQ6IDRweCBzb2xpZCB0dW5lci1jb2xvcihkYW5nZXItYm9yZGVyLCAjZGY0MTRiKTtcclxufVxyXG4uY3EtbWV0cmljX19pbmZvIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA1cHg7IG1pbi13aWR0aDogMDsgfVxyXG4uY3EtbWV0cmljX19leWVicm93IHsgY29sb3I6ICNmZjlkYTM7IGZvbnQtc2l6ZTogLjY4cmVtOyBmb250LXdlaWdodDogODAwOyBsZXR0ZXItc3BhY2luZzogLjAzZW07IH1cclxuLmNxLW1ldHJpY19fbGFiZWwgeyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogODAwOyB9XHJcbi5jcS1tZXRyaWNfX2Rlc2NyaXB0aW9uIHsgY29sb3I6ICNlMmRmZTE7IGZvbnQtc2l6ZTogLjc2cmVtOyBsaW5lLWhlaWdodDogMS43OyB9XHJcbi5jcS1tZXRyaWNfX251bWJlciB7IGZsZXg6IG5vbmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgZ2FwOiA1cHg7IGNvbG9yOiAjZmZmOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XHJcbi5jcS1tZXRyaWNfX251bWJlciBzdHJvbmcgeyBmb250LXNpemU6IGNsYW1wKDJyZW0sIDN2dywgMi42NXJlbSk7IGZvbnQtd2VpZ2h0OiA4NTA7IGxpbmUtaGVpZ2h0OiAxOyB9XHJcbi5jcS1tZXRyaWNfX251bWJlciBzcGFuIHsgY29sb3I6ICNmZmFkYjE7IGZvbnQtc2l6ZTogMS4xcmVtOyBmb250LXdlaWdodDogODAwOyB9XHJcblxyXG4uY3EtcXVlbmNoIHtcclxuICAtLWNxLXN0YXR1czogMTgzLCAzMywgNDI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY3Etc3RhdHVzKSwgLjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jcS1zdGF0dXMpLCAuMDcpO1xyXG59XHJcbi5jcS1xdWVuY2gtLXN1Y2Nlc3MgeyAtLWNxLXN0YXR1czogMjUsIDEzMiwgOTI7IH1cclxuLmNxLXF1ZW5jaC0td2FybmluZyB7IC0tY3Etc3RhdHVzOiAxNzQsIDEwNSwgMTU7IH1cclxuLmNxLXF1ZW5jaF9faGVhZGluZyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTJweDsgbWFyZ2luLWJvdHRvbTogMTlweDsgfVxyXG4uY3EtcXVlbmNoX19sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAzcHg7IGNvbG9yOiB2YXIoLS1jcS10ZXh0KTsgZm9udC1zaXplOiAuODNyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IH1cclxuLmNxLXF1ZW5jaF9faW5mbyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgZ2FwOiA5cHg7IH1cclxuLmNxLXF1ZW5jaF9fdmFsdWUgeyBjb2xvcjogdmFyKC0tY3EtdGV4dCk7IGZvbnQtc2l6ZTogMS40NXJlbTsgZm9udC13ZWlnaHQ6IDg1MDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfVxyXG4uY3EtcXVlbmNoX192YWx1ZSBzbWFsbCB7IGZvbnQtc2l6ZTogLjdyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLmNxLXF1ZW5jaF9faW5jaCB7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IGZvbnQtc2l6ZTogLjc5cmVtOyB9XHJcbi5jcS1xdWVuY2hfX3N0YXR1cyB7IG1heC13aWR0aDogNTIlOyBwYWRkaW5nOiA2cHggOXB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY3Etc3RhdHVzKSwgLjE3KTsgY29sb3I6IHZhcigtLWNxLXRleHQpOyBmb250LXNpemU6IC43NHJlbTsgZm9udC13ZWlnaHQ6IDc1MDsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogMS41OyB9XHJcbi5jcS1xdWVuY2hfX2JhciB7IHBhZGRpbmctaW5saW5lOiA1cHg7IH1cclxuLmNxLXF1ZW5jaF9fdHJhY2sgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGRpcmVjdGlvbjogbHRyOyBoZWlnaHQ6IDExcHg7IGJvcmRlci1yYWRpdXM6IDk5cHg7IGJhY2tncm91bmQ6IHZhcigtLWNxLXNvZnQpOyB9XHJcbi5jcS1xdWVuY2hfX3pvbmUtLXRpZ2h0IHsgd2lkdGg6IDQzLjMzMyU7IGJvcmRlci1yYWRpdXM6IDk5cHggMCAwIDk5cHg7IGJhY2tncm91bmQ6ICNjODQ0NGE7IH1cclxuLmNxLXF1ZW5jaF9fem9uZS0tZ29vZCB7IHdpZHRoOiAzMy4zMzQlOyBiYWNrZ3JvdW5kOiAjMjk5NDZiOyB9XHJcbi5jcS1xdWVuY2hfX3pvbmUtLXdpZGUgeyB3aWR0aDogMjMuMzMzJTsgYm9yZGVyLXJhZGl1czogMCA5OXB4IDk5cHggMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDE4YTI5LCAjYzg0NDRhKTsgfVxyXG4uY3EtcXVlbmNoX19tYXJrZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTZweDsgd2lkdGg6IDRweDsgaGVpZ2h0OiAyM3B4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJhY2tncm91bmQ6IHZhcigtLWNxLXRleHQpOyBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY3Etc3VyZmFjZSk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgdHJhbnNpdGlvbjogbGVmdCAuMnMgZWFzZTsgfVxyXG4uY3EtcXVlbmNoX19sYWJlbHMgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMjZweDsgY29sb3I6IHZhcigtLWNxLW11dGVkKTsgZm9udC1zaXplOiAuNjhyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IGRpcmVjdGlvbjogbHRyOyB9XHJcbi5jcS1xdWVuY2hfX2xhYmVscyBzcGFuIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDdweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5jcS1xdWVuY2hfX2xhYmVscyBzcGFuOm50aC1jaGlsZCgxKSB7IGxlZnQ6IDA7IHRyYW5zZm9ybTogbm9uZTsgfVxyXG4uY3EtcXVlbmNoX19sYWJlbHMgc3BhbjpudGgtY2hpbGQoMikgeyBsZWZ0OiA0My4zMzMlOyB9XHJcbi5jcS1xdWVuY2hfX2xhYmVscyBzcGFuOm50aC1jaGlsZCgzKSB7IGxlZnQ6IDc2LjY2NyU7IH1cclxuLmNxLXF1ZW5jaF9fbGFiZWxzIHNwYW46bnRoLWNoaWxkKDQpIHsgcmlnaHQ6IDA7IHRyYW5zZm9ybTogbm9uZTsgfVxyXG4uY3EtcXVlbmNoX19tZXNzYWdlIHsgbWFyZ2luOiA0cHggMCAwOyBjb2xvcjogdmFyKC0tY3EtdGV4dCk7IGZvbnQtc2l6ZTogLjgycmVtOyBmb250LXdlaWdodDogNjUwOyBsaW5lLWhlaWdodDogMS44OyB9XHJcbi5jcS1xdWVuY2hfX2NhcHRpb24geyBtYXJnaW46IDVweCAwIDA7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IGZvbnQtc2l6ZTogLjc0cmVtOyBsaW5lLWhlaWdodDogMS43NTsgfVxyXG5cclxuLmNxLXJlc3VsdHMtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOiAxMHB4OyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XHJcbi5jcS1yZXN1bHQtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNnB4OyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDEzcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNxLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDExcHg7IGJhY2tncm91bmQ6IHZhcigtLWNxLXNvZnQpOyB9XHJcbi5jcS1yZXN1bHQtaXRlbV9fbGFiZWwgeyBjb2xvcjogdmFyKC0tY3EtbXV0ZWQpOyBmb250LXNpemU6IC43N3JlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbGluZS1oZWlnaHQ6IDEuNTU7IH1cclxuLmNxLXJlc3VsdC1pdGVtX192YWx1ZSB7IGNvbG9yOiB2YXIoLS1jcS10ZXh0KTsgZm9udC1zaXplOiAxLjEzcmVtOyBmb250LXdlaWdodDogODAwOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyBkaXJlY3Rpb246IGx0cjsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cclxuLmNxLXJlc3VsdC1pdGVtX192YWx1ZSBzbWFsbCB7IG1hcmdpbi1sZWZ0OiAzcHg7IGNvbG9yOiB2YXIoLS1jcS1tdXRlZCk7IGZvbnQtc2l6ZTogLjY4cmVtOyBmb250LXdlaWdodDogNzAwOyB9XHJcblxyXG4uY3EtZGlzY2xhaW1lciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDlweDsgcGFkZGluZzogMTJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3EtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMTFweDsgYmFja2dyb3VuZDogdmFyKC0tY3Etc29mdCk7IH1cclxuLmNxLWRpc2NsYWltZXIgaW9uLWljb24geyBmbGV4OiBub25lOyBtYXJnaW4tdG9wOiAycHg7IGNvbG9yOiB2YXIoLS1jcS1yZWQpOyBmb250LXNpemU6IDE4cHg7IH1cclxuLmNxLWRpc2NsYWltZXIgcCB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLWNxLXRleHQpOyBmb250LXNpemU6IC43OHJlbTsgbGluZS1oZWlnaHQ6IDEuODsgfVxyXG5cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmNxLXBhZ2Uge1xyXG4gIC0tY3EtbXV0ZWQ6ICNjMGMxYzY7XHJcbiAgLS1jcS1ib3JkZXI6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xyXG4gIC0tY3Etc29mdDogcmdiYSgyNTUsMjU1LDI1NSwuMDcpO1xyXG4gIC0tY3EtcmVkOiAjZjA2YjcyO1xyXG59XHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5jcS1jYXJkIHsgYm94LXNoYWRvdzogMCAxMnB4IDM0cHggcmdiYSgwLDAsMCwuMjYpOyB9XHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5jcS1jYXJkX19pY29uIHsgYmFja2dyb3VuZDogcmdiYSgyNDAsMTA3LDExNCwuMTcpOyB9XHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5jcS1oaW50IHsgYmFja2dyb3VuZDogcmdiYSgxODQsMTI4LDM4LC4xNCk7IH1cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLmNxLWhpbnRfX2ljb24geyBjb2xvcjogI2VhYjQ1YzsgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmNxLWhlcm8geyBwYWRkaW5nOiAyN3B4IDE4cHg7IH1cclxuICAuY3EtaGVyb19faWNvbiB7IGZvbnQtc2l6ZTogNDVweDsgfVxyXG4gIC5jcS1sYXlvdXQgeyBwYWRkaW5nLWlubGluZTogOHB4OyB9XHJcbiAgLmNxLWNhcmQgeyBwYWRkaW5nOiAxOHB4IDE1cHg7IGJvcmRlci1yYWRpdXM6IDE2cHg7IH1cclxuICAuY3EtZm9ybSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBnYXA6IDEycHg7IH1cclxuICAuY3EtbWV0cmljIHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAuY3EtbWV0cmljX19udW1iZXIgc3Ryb25nIHsgZm9udC1zaXplOiAyLjNyZW07IH1cclxuICAuY3EtcmVzdWx0cy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmNxLWhlcm9fX2ljb24geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLmNxLXJlc3VsdHMtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLmNxLXF1ZW5jaF9faGVhZGluZyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAuY3EtcXVlbmNoX19zdGF0dXMgeyBtYXgtd2lkdGg6IG5vbmU7IH1cclxufVxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5jcS1pbnB1dC13cmFwLCAuY3EtcXVlbmNoX19tYXJrZXIgeyB0cmFuc2l0aW9uOiBub25lOyB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XHJcbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 97102:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/compression-quench/compression-quench.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" class=\"title-size no-padding\">نسبت تراکم و فاصله کوئنچ</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"cq-page\">\r\n\r\n  <div class=\"cq-hero\">\r\n    <div class=\"cq-hero__content\">\r\n      <span class=\"cq-hero__eyebrow\">TUNER PLUS / ENGINE GEOMETRY</span>\r\n      <h1 class=\"cq-hero__title\">نسبت تراکم و فاصله کوئنچ</h1>\r\n      <p class=\"cq-hero__subtitle\">اندازه‌های موتور را وارد کنید تا نسبت تراکم استاتیک و فاصله پیستون تا سرسیلندر در نقطه مرگ بالا محاسبه شود.</p>\r\n    </div>\r\n    <ion-icon name=\"speedometer-outline\" class=\"cq-hero__icon\" aria-hidden=\"true\"></ion-icon>\r\n  </div>\r\n\r\n  <ion-grid class=\"cq-layout\" fixed dir=\"rtl\" *ngIf=\"isShow\">\r\n    <section class=\"profile-select\" aria-label=\"انتخاب پروفایل خودرو\">\r\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n      <div><strong>پروفایل خودرو</strong><small>مقادیر ثبت‌شده را در این ابزار اعمال کن</small></div>\r\n      <select [value]=\"selectedProfileId\" (change)=\"applyProfile($any($event.target).value)\" aria-label=\"پروفایل خودرو\">\r\n        <option value=\"\">انتخاب پروفایل</option>\r\n        <option *ngFor=\"let profile of profiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n      </select>\r\n      <a routerLink=\"/TunerPlus/vehicle-profile\">ساخت یا ویرایش پروفایل</a>\r\n      <small class=\"profile-notice\" *ngIf=\"profileNotice\">{{ profileNotice }}</small>\r\n    </section>\r\n    <ion-row>\r\n      <!-- ────── Input Panel ────── -->\r\n      <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"5\" offset-lg=\"1\" class=\"cq-col cq-col--inputs\">\r\n        <div class=\"cq-card cq-card--input\">\r\n          <div class=\"cq-card__header\">\r\n            <ion-icon name=\"settings-outline\" class=\"cq-card__icon\"></ion-icon>\r\n            <div>\r\n              <h2 class=\"cq-card__title\">اندازه‌گیری‌های موتور</h2>\r\n              <p class=\"cq-card__subtitle\">حجم‌ها برای یک سیلندر بر حسب cc و فاصله‌ها بر حسب mm هستند. نتیجه با تغییر هر ورودی به‌روز می‌شود.</p>\r\n            </div>\r\n          </div>\r\n\r\n          <form [formGroup]=\"form\" class=\"cq-form\">\r\n            <div class=\"cq-divider\"><span class=\"cq-divider__label\">سیلندر و پیستون</span></div>\r\n\r\n            <div class=\"cq-field\" *ngFor=\"let f of blockFields\">\r\n              <div class=\"cq-field__row\">\r\n                <label class=\"cq-field__label\" [attr.for]=\"'cq-' + f.control\">{{ f.label }}</label>\r\n                <button type=\"button\" class=\"cq-info-btn\" [attr.aria-label]=\"'توضیح ' + f.label\" (click)=\"onInfo(f.key)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"cq-input-wrap\">\r\n                <ion-input [id]=\"'cq-' + f.control\" [attr.aria-label]=\"f.label + (f.unit ? '، ' + f.unit : '')\" [formControlName]=\"f.control\" type=\"number\" inputmode=\"decimal\" class=\"cq-input\"></ion-input>\r\n                <span class=\"cq-input-unit\">{{ f.unit }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <p class=\"cq-hint\">\r\n              <ion-icon name=\"bulb-outline\" class=\"cq-hint__icon\"></ion-icon>\r\n              حجم گودی پیستون را مثبت و حجم برجستگی آن را منفی وارد کنید.\r\n            </p>\r\n\r\n            <div class=\"cq-divider\"><span class=\"cq-divider__label\">واشر و Deck</span></div>\r\n\r\n            <div class=\"cq-field\" *ngFor=\"let f of gasketFields\">\r\n              <div class=\"cq-field__row\">\r\n                <label class=\"cq-field__label\" [attr.for]=\"'cq-' + f.control\">{{ f.label }}</label>\r\n                <button type=\"button\" class=\"cq-info-btn\" [attr.aria-label]=\"'توضیح ' + f.label\" (click)=\"onInfo(f.key)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"cq-input-wrap\">\r\n                <ion-input [id]=\"'cq-' + f.control\" [attr.aria-label]=\"f.label + (f.unit ? '، ' + f.unit : '')\" [formControlName]=\"f.control\" type=\"number\" inputmode=\"decimal\" class=\"cq-input\"></ion-input>\r\n                <span class=\"cq-input-unit\">{{ f.unit }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <p class=\"cq-hint\">\r\n              <ion-icon name=\"bulb-outline\" class=\"cq-hint__icon\"></ion-icon>\r\n              اگر تاج پیستون بالاتر از سطح بلوک قرار می‌گیرد، فاصله پیستون تا سطح بلوک را منفی وارد کنید.\r\n            </p>\r\n\r\n            <button type=\"button\" class=\"cq-reset-btn\" (click)=\"reset()\">\r\n              <ion-icon name=\"refresh-outline\"></ion-icon>\r\n              ریست\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <!-- ────── Results Panel ────── -->\r\n      <ion-col size=\"12\" size-md=\"10\" offset-md=\"1\" size-lg=\"5\" offset-lg=\"0\" class=\"cq-col cq-col--results\">\r\n        <div class=\"cq-card cq-card--result\" *ngIf=\"result\">\r\n          <div class=\"cq-card__header\">\r\n            <ion-icon name=\"analytics-outline\" class=\"cq-card__icon\"></ion-icon>\r\n            <div>\r\n              <h2 class=\"cq-card__title\">نتیجه محاسبه</h2>\r\n              <p class=\"cq-card__subtitle\">بر اساس اندازه‌های واردشده برای هر سیلندر</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cq-metric cq-metric--primary\">\r\n            <div class=\"cq-metric__info\">\r\n              <span class=\"cq-metric__eyebrow\">نتیجه اصلی / CR</span>\r\n              <span class=\"cq-metric__label\">نسبت تراکم استاتیک</span>\r\n              <span class=\"cq-metric__description\">نسبت حجم سیلندر در پایین‌ترین و بالاترین موقعیت پیستون</span>\r\n            </div>\r\n            <div class=\"cq-metric__number\" dir=\"ltr\"><strong>{{ result.staticCompressionRatio }}</strong><span>: 1</span></div>\r\n          </div>\r\n\r\n          <div class=\"cq-quench\" [ngClass]=\"'cq-quench--' + quenchColor\">\r\n            <div class=\"cq-quench__heading\">\r\n              <div>\r\n                <span class=\"cq-quench__label\">فاصله کوئنچ</span>\r\n                <div class=\"cq-quench__info\" dir=\"ltr\">\r\n                  <strong class=\"cq-quench__value\">{{ result.quenchMm }} <small>mm</small></strong>\r\n                  <span class=\"cq-quench__inch\">{{ result.quenchInches }} in</span>\r\n                </div>\r\n              </div>\r\n              <span class=\"cq-quench__status\">{{ quenchStatusLabel }}</span>\r\n            </div>\r\n            <div class=\"cq-quench__bar\">\r\n              <div class=\"cq-quench__track\">\r\n                <div class=\"cq-quench__zone cq-quench__zone--tight\"></div>\r\n                <div class=\"cq-quench__zone cq-quench__zone--good\"></div>\r\n                <div class=\"cq-quench__zone cq-quench__zone--wide\"></div>\r\n                <div class=\"cq-quench__marker\" [style.left.%]=\"quenchMarkerPercent\"></div>\r\n              </div>\r\n              <div class=\"cq-quench__labels\">\r\n                <span>0</span>\r\n                <span>0.65</span>\r\n                <span>1.15</span>\r\n                <span>1.50+ mm</span>\r\n              </div>\r\n            </div>\r\n            <p class=\"cq-quench__message\">{{ quenchMessage }}</p>\r\n            <p class=\"cq-quench__caption\">این بازه‌ها فقط راهنمای هندسی هستند؛ لقی نهایی باید برای موتور و قطعات واقعی بررسی شود.</p>\r\n          </div>\r\n\r\n          <!-- Secondary Results -->\r\n          <div class=\"cq-results-grid\">\r\n            <div class=\"cq-result-item\" *ngFor=\"let item of resultItems\">\r\n              <span class=\"cq-result-item__label\">{{ item.label }}</span>\r\n              <span class=\"cq-result-item__value\">{{ item.value }} <small>{{ item.unit }}</small></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cq-disclaimer\">\r\n            <ion-icon name=\"warning-outline\"></ion-icon>\r\n            <p>این محاسبه فقط هندسه موتور را نشان می‌دهد. برای انتخاب نسبت تراکم نهایی، سوخت، بوست، زمان بسته‌شدن سوپاپ ورودی، دمای هوا و تنظیم جرقه را هم بررسی کنید.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Empty State -->\r\n        <div class=\"cq-card cq-card--empty\" *ngIf=\"!result\">\r\n          <ion-icon name=\"calculator-outline\" class=\"cq-empty-icon\"></ion-icon>\r\n          <p>مقادیر را وارد کنید تا نتیجه نمایش داده شود.</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_compression-quench_compression-quench_module_ts.js.map