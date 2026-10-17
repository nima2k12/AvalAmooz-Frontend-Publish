"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_valve-spring-rate_valve-spring-rate_module_ts"],{

/***/ 23175:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/valve-spring-rate/valve-spring-rate-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValveSpringRatePageRoutingModule": () => (/* binding */ ValveSpringRatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _valve_spring_rate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valve-spring-rate.component */ 56108);




const routes = [
    {
        path: '',
        component: _valve_spring_rate_component__WEBPACK_IMPORTED_MODULE_0__.ValveSpringRatePage
    }
];
let ValveSpringRatePageRoutingModule = class ValveSpringRatePageRoutingModule {
};
ValveSpringRatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ValveSpringRatePageRoutingModule);



/***/ }),

/***/ 56108:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/valve-spring-rate/valve-spring-rate.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValveSpringRatePage": () => (/* binding */ ValveSpringRatePage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _valve_spring_rate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valve-spring-rate.component.html?ngResource */ 10430);
/* harmony import */ var _valve_spring_rate_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valve-spring-rate.component.scss?ngResource */ 11819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);




/* eslint-disable eqeqeq */











let ValveSpringRatePage = class ValveSpringRatePage {
  constructor(fb, router, alertController, loadingController, toastController, siteService, courseService) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
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
    this.rate = 2.091;
    this.rate2 = 117.089;
    this.isShow = false;
    this.check();
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
    this.form = this.fb.group({
      close: [22, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      open: [45, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]],
      lift: [11, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(1000000)]]
    });
  }

  onInfo(type) {
    switch (type) {
      case 'lift':
        this.presentActiveAlertConfirm('اندازه ی باز شدن سوپاپ برحسب میلیمتر');
        break;

      case 'close':
        this.presentActiveAlertConfirm('نیروی فنر در نشیمنگاه برحسب کیلوگرم');
        break;

      case 'open':
        this.presentActiveAlertConfirm('نیروی فنر در لیفت معین شده ی سوپاپ برحسب کیلوگرم');
        break;

      default:
        break;
    }
  }

  onReset() {
    this.rate = 2.091;
    this.rate2 = 117.089;
    this.form.setValue({
      close: 22,
      open: 45,
      lift: 11
    });
  }

  onCalc() {
    if (!this.form.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.rate = +((this.form.value.open - this.form.value.close) / this.form.value.lift).toFixed(3);
        this.rate2 = +(this.rate * 55.997).toFixed(3);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  presentActiveAlertConfirm(msg = '') {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(29).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this2.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this2.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
                          _this2.isCheck = false;
                        } else {
                          _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
                        }
                      }, errs => {
                        _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
                  }
                } else {
                  _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
                }
              }, errs => {
                _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
              _this2.isCheck = false;
            }
          } else {
            _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
          }
        } else {
          _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
        }
      }, err => {
        _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(_this2.loadingController);
      });
    })();
  }

};

ValveSpringRatePage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_8__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}];

ValveSpringRatePage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent]
  }]
};
ValveSpringRatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-valve-spring-rate',
  template: _valve_spring_rate_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_valve_spring_rate_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ValveSpringRatePage);


/***/ }),

/***/ 73581:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/valve-spring-rate/valve-spring-rate.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValveSpringRatePageModule": () => (/* binding */ ValveSpringRatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _valve_spring_rate_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valve-spring-rate-routing.module */ 23175);
/* harmony import */ var _valve_spring_rate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valve-spring-rate.component */ 56108);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let ValveSpringRatePageModule = class ValveSpringRatePageModule {
};
ValveSpringRatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _valve_spring_rate_routing_module__WEBPACK_IMPORTED_MODULE_1__.ValveSpringRatePageRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_valve_spring_rate_component__WEBPACK_IMPORTED_MODULE_2__.ValveSpringRatePage]
    })
], ValveSpringRatePageModule);



/***/ }),

/***/ 11819:
/*!*****************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/valve-spring-rate/valve-spring-rate.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ":host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfdGhlbWUuc2NzcyIsInZhbHZlLXNwcmluZy1yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNMSjtBRFFJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FDTk47QURTSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1BOO0FEVUk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QUNSTjtBRFVJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUNObkQ7QURPSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQ0xOO0FET0k7RUFBVyxnQ0FBQTtBQ0pmO0FES0k7RUFBb0Msd0JBQUE7QUNGeEM7QURHSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FDRE47QURHSTtFQUFrRCxtQ0FBQTtBQ0F0RCIsImZpbGUiOiJ2YWx2ZS1zcHJpbmctcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3Yztcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlucHV0Om5vdChbdHlwZT1yYW5nZV0pOm5vdChbdHlwZT1jaGVja2JveF0pOm5vdChbdHlwZT1yYWRpb10pOm5vdChbdHlwZT1idXR0b25dKTpub3QoW3R5cGU9c3VibWl0XSk6bm90KFt0eXBlPWZpbGVdKSxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHRleHRhcmVhLFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlucHV0OjpwbGFjZWhvbGRlciwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgb3BhY2l0eTogMC43NTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpO1xuICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWxpc3QsIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQtdGl0bGUsIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmRbY29sb3I9bGlnaHRlc3RdLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24taXRlbVtjb2xvcj1saWdodGVzdF0sIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1mYWItYnV0dG9uW2NvbG9yPWxpZ2h0ZXN0XSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tdGV4dFtjb2xvcj1kYXJrXSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWxhYmVsW2NvbG9yPWRhcmtdIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7XG59Il19 */";

/***/ }),

/***/ 10430:
/*!*****************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/valve-spring-rate/valve-spring-rate.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >نرخ فنر سوپاپ (Valve Spring Rate)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه نرخ فنر سوپاپ</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"telegram\"\r\n                    slot=\"start\"\r\n                    name=\"cloud-download-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >لیفت</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"11\"\r\n                    formControlName=\"lift\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('lift')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"cloud-upload-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار نشیمنگاه</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"22\"\r\n                    formControlName=\"close\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('close')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"cloud-offline-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >فشار در لیفت</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"45\"\r\n                    formControlName=\"open\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('open')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"onReset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">نتیجه</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ 'VSR: ' }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ rate }}\r\n                  </ion-text>\r\n                  &nbsp;Kg/mm\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <h2 dir=\"ltr\">\r\n                  <ion-text color=\"light\" style=\"font-size: large\">\r\n                    {{ 'VSR: ' }}\r\n                  </ion-text>\r\n                  <ion-text color=\"success\" style=\"font-size: large\">\r\n                    {{ rate2 }}\r\n                  </ion-text>\r\n                  &nbsp;lbs/in\r\n                </h2>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_valve-spring-rate_valve-spring-rate_module_ts.js.map