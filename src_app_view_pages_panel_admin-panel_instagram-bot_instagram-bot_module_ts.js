"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_instagram-bot_instagram-bot_module_ts"],{

/***/ 27859:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/instagram-bot/instagram-bot-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramBotRoutingModule": () => (/* binding */ InstagramBotRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _instagram_bot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram-bot.component */ 7527);




const routes = [{ path: '', component: _instagram_bot_component__WEBPACK_IMPORTED_MODULE_0__.InstagramBotComponent }];
let InstagramBotRoutingModule = class InstagramBotRoutingModule {
};
InstagramBotRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], InstagramBotRoutingModule);



/***/ }),

/***/ 7527:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/instagram-bot/instagram-bot.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramBotComponent": () => (/* binding */ InstagramBotComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _instagram_bot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram-bot.component.html?ngResource */ 23485);
/* harmony import */ var _instagram_bot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instagram-bot.component.scss?ngResource */ 65357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);











let InstagramBotComponent = class InstagramBotComponent {
  constructor(sliderService, fb, toastController, loadingController, alertController) {
    this.sliderService = sliderService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.segmentSelected = 'Direct';
    this.sendProfile = false;
  }

  ngOnInit() {
    this.directForm = this.fb.group({
      userName: ['avalamooz.ir', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      password: ['Nima@1375', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      targetUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      profileUserName: ['avalamooz.ir', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      msg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000000)]],
      link: ['', []],
      linkMsg: ['', []]
    });
    this.followersForm = this.fb.group({
      userName: ['avalamooz.ir', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      password: ['Nima@1375', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      profileUserName: ['avalamooz.ir', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000)]],
      msg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10000000)]],
      link: ['', []],
      linkMsg: ['', []]
    });
  }

  presentAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this.onSendToDirect();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSendToDirect() {
    if (!this.directForm.valid) {
      return;
    }

    if (this.directForm.value.link === '' && this.directForm.value.linkMsg !== '') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'لینک خالی است! اما متن لینک وجود دارد!');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.InstagramBotUserDirectMsg(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.InstagramUserDirectMsgModel(this.directForm.value.userName, this.directForm.value.password, this.directForm.value.targetUserName, this.directForm.value.msg, this.directForm.value.link, this.directForm.value.linkMsg, this.directForm.value.profileUserName, this.sendProfile)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.directForm.setValue({
          userName: this.directForm.value.userName,
          password: this.directForm.value.password,
          targetUserName: '',
          msg: '',
          link: '',
          profileUserName: '',
          linkMsg: ''
        });
        this.sendProfile = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertConfirm2() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this2.onSendToFollowers();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSendToFollowers() {
    if (!this.followersForm.valid) {
      return;
    }

    if (this.followersForm.value.link === '' && this.followersForm.value.linkMsg !== '') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'لینک خالی است! اما متن لینک وجود دارد!');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.InstagramBotFollowersDirectMsg(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.InstagramFollowersDirectMsgModel(this.followersForm.value.userName, this.followersForm.value.password, this.followersForm.value.msg, this.followersForm.value.link, this.followersForm.value.linkMsg, this.followersForm.value.profileUserName, this.sendProfile)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.followersForm.setValue({
          userName: this.followersForm.value.userName,
          password: this.followersForm.value.password,
          msg: '',
          link: '',
          profileUserName: '',
          linkMsg: ''
        });
        this.sendProfile = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertConfirm3() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this3.onRemoveSession();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemoveSession() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.RemoveInstagramSession().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

};

InstagramBotComponent.ctorParameters = () => [{
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

InstagramBotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-instagram-bot',
  template: _instagram_bot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_instagram_bot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InstagramBotComponent);


/***/ }),

/***/ 7882:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/instagram-bot/instagram-bot.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramBotModule": () => (/* binding */ InstagramBotModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _instagram_bot_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram-bot-routing.module */ 27859);
/* harmony import */ var _instagram_bot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instagram-bot.component */ 7527);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/account.interceptor */ 8363);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/app/footer/footer.module */ 60412);













let InstagramBotModule = class InstagramBotModule {
};
InstagramBotModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_instagram_bot_component__WEBPACK_IMPORTED_MODULE_2__.InstagramBotComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _instagram_bot_routing_module__WEBPACK_IMPORTED_MODULE_1__.InstagramBotRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule
        ],
        providers: [
            src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_5__.SliderService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__.AccountInterceptor,
                multi: true
            }
        ]
    })
], InstagramBotModule);



/***/ }),

/***/ 65357:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/instagram-bot/instagram-bot.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YWdyYW0tYm90LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 23485:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/instagram-bot/instagram-bot.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ربات اینستاگرام</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding ion-margin-top\" class=\"bg\">\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\">\r\n        <ion-segment-button value=\"Direct\">\r\n          <ion-label>دایرکت</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Followers\">\r\n          <ion-label>فالوئر ها</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button\r\n          (click)=\"presentAlertConfirm3()\"\r\n          color=\"danger\"\r\n          expand=\"block\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n        >\r\n          حذف سشن\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <br />\r\n        <ion-item>\r\n          <ion-label>پروفایل هم ارسال شود؟</ion-label>\r\n          <ion-checkbox [(ngModel)]=\"sendProfile\" slot=\"start\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Direct'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"directForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>دایرکت به یوزر</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngIf=\"sendProfile\">\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >یوزرنیم پروفایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"یوزرنیم پروفایل\"\r\n                  formControlName=\"profileUserName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">یوزرنیم </ion-label>\r\n                <ion-input\r\n                  placeholder=\"یوزرنیم\"\r\n                  formControlName=\"userName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پسورد </ion-label>\r\n                <ion-input\r\n                  placeholder=\"پسورد\"\r\n                  formControlName=\"password\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >یوزر مقصد\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"یوزر مقصد\"\r\n                  formControlName=\"targetUserName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پیام </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"پیام\"\r\n                  formControlName=\"msg\"\r\n                  type=\"text\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">لینک </ion-label>\r\n                <ion-input\r\n                  placeholder=\"لینک\"\r\n                  formControlName=\"link\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >متن لینک\r\n                </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"متن لینک\"\r\n                  formControlName=\"linkMsg\"\r\n                  type=\"text\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"directForm.invalid\"\r\n          >\r\n            ارسال\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Followers'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"followersForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>دایرکت به فالوئر ها</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngIf=\"sendProfile\">\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >یوزرنیم پروفایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"یوزرنیم پروفایل\"\r\n                  formControlName=\"profileUserName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">یوزرنیم </ion-label>\r\n                <ion-input\r\n                  placeholder=\"یوزرنیم\"\r\n                  formControlName=\"userName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پسورد </ion-label>\r\n                <ion-input\r\n                  placeholder=\"پسورد\"\r\n                  formControlName=\"password\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پیام </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"پیام\"\r\n                  formControlName=\"msg\"\r\n                  type=\"text\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">لینک </ion-label>\r\n                <ion-input\r\n                  placeholder=\"لینک\"\r\n                  formControlName=\"link\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >متن لینک\r\n                </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"متن لینک\"\r\n                  formControlName=\"linkMsg\"\r\n                  type=\"text\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"followersForm.invalid\"\r\n          >\r\n            ارسال\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_instagram-bot_instagram-bot_module_ts.js.map