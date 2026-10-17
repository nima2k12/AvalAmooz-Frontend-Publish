"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_profile-edit_profile-edit_module_ts"],{

/***/ 92337:
/*!************************************************************!*\
  !*** ./src/app/data/model/account/TeacherRegisterModel.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherRegisterModel": () => (/* binding */ TeacherRegisterModel),
/* harmony export */   "UpdateSellerProfileModel": () => (/* binding */ UpdateSellerProfileModel),
/* harmony export */   "UpdateTeacherProfileModel": () => (/* binding */ UpdateTeacherProfileModel)
/* harmony export */ });
class TeacherRegisterModel {
    constructor(
    // PhoneNumber: string,
    // Password: string,
    // Email: string,
    // Name: string,
    // Family: string,
    FullAddress, nationalCode, identificationCode, birthDay, token) {
        // this.phoneNumber = PhoneNumber;
        // this.password = Password;
        // this.email = Email;
        // this.name = Name;
        // this.family = Family;
        this.fullAddress = FullAddress;
        this.nationalCode = nationalCode;
        this.identificationCode = identificationCode;
        this.birthDay = birthDay;
        this.token = token;
    }
}
class UpdateTeacherProfileModel {
    constructor(id, address, resume, nationalCode, identificationCode, birthDay, userAvatarAddress, name, family, mainResume, site, telegram, instagram, whatsApp, linkedIn) {
        this.id = id;
        this.address = address;
        this.resume = resume;
        this.nationalCode = nationalCode;
        this.identificationCode = identificationCode;
        this.birthDay = birthDay;
        this.userAvatarAddress = userAvatarAddress;
        this.name = name;
        this.family = family;
        this.mainResume = mainResume;
        this.site = site;
        this.telegram = telegram;
        this.instagram = instagram;
        this.whatsApp = whatsApp;
        this.linkedIn = linkedIn;
    }
}
class UpdateSellerProfileModel {
    constructor(id, address, resume, nationalCode, identificationCode, birthDay, userAvatarAddress, name, family, mainResume, site, telegram, instagram, whatsApp, linkedIn, isProductDisabled, hasFreeSendPrediction, freeSendPredictionPrice, minBikeDeliveryPrice, bikeDeliveryPriceEachKg, minTipaxPrice, tipaxPriceEachKg, minPostPrice, postPriceEachKg, minSpecialPostPrice, specialPostPriceEachKg, minBurberryPrice, burberryPriceEachKg, countryId, provinceId, cityId, isEdited) {
        this.cityId = cityId;
        this.provinceId = provinceId;
        this.countryId = countryId;
        this.isEdited = isEdited;
        this.burberryPriceEachKg = burberryPriceEachKg;
        this.minBurberryPrice = minBurberryPrice;
        this.specialPostPriceEachKg = specialPostPriceEachKg;
        this.minSpecialPostPrice = minSpecialPostPrice;
        this.postPriceEachKg = postPriceEachKg;
        this.minPostPrice = minPostPrice;
        this.tipaxPriceEachKg = tipaxPriceEachKg;
        this.minTipaxPrice = minTipaxPrice;
        this.bikeDeliveryPriceEachKg = bikeDeliveryPriceEachKg;
        this.minBikeDeliveryPrice = minBikeDeliveryPrice;
        this.freeSendPredictionPrice = freeSendPredictionPrice;
        this.hasFreeSendPrediction = hasFreeSendPrediction;
        this.isProductDisabled = isProductDisabled;
        this.id = id;
        this.address = address;
        this.resume = resume;
        this.nationalCode = nationalCode;
        this.identificationCode = identificationCode;
        this.birthDay = birthDay;
        this.userAvatarAddress = userAvatarAddress;
        this.name = name;
        this.family = family;
        this.mainResume = mainResume;
        this.site = site;
        this.telegram = telegram;
        this.instagram = instagram;
        this.whatsApp = whatsApp;
        this.linkedIn = linkedIn;
    }
}


/***/ }),

/***/ 45989:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/profile-edit/profile-edit-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditRoutingModule": () => (/* binding */ ProfileEditRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.component */ 7606);




const routes = [{ path: '', component: _profile_edit_component__WEBPACK_IMPORTED_MODULE_0__.ProfileEditComponent }];
let ProfileEditRoutingModule = class ProfileEditRoutingModule {
};
ProfileEditRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfileEditRoutingModule);



/***/ }),

/***/ 7606:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/profile-edit/profile-edit.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditComponent": () => (/* binding */ ProfileEditComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.component.html?ngResource */ 8133);
/* harmony import */ var _profile_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-edit.component.scss?ngResource */ 9842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_account_TeacherRegisterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/account/TeacherRegisterModel */ 92337);
/* harmony import */ var src_app_data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/user/user.service */ 55007);












let ProfileEditComponent = class ProfileEditComponent {
  constructor(userService, fb, router, toastController, loadingController, alertController) {
    this.userService = userService;
    this.fb = fb;
    this.router = router;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.cityId = 1;
    this.provinceId = 1;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      resume: ['فروشنده منتخب اول آموز هستم', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2000)]],
      mainResume: ['فروشنده منتخب اول آموز هستم', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20000)]],
      site: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      linkedIn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      whatsApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      avatar: ['http://localhost:4300/assets/images/avatar.jpg', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200000)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(13)]],
      birthDay: ['1370-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      isProductDisabled: [false],
      hasFreeSendPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      freeSendPredictionPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      minBikeDeliveryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      bikeDeliveryPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      minTipaxPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      tipaxPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      minPostPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      postPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      minSpecialPostPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      specialPostPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      minBurberryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]],
      burberryPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(10000000000)]]
    });
  }

  ionViewWillEnter() {
    this.onGetData();
  }

  onBackClick() {
    this.router.navigateByUrl('/SellerPanel');
  }

  presentAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  getCityList() {
    return this.user.cities.filter(e => e.provinceId == this.provinceId);
  }

  onGetData() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.userService.GetSellerProfileEdit().subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.provinceId = res.data.provinceId;
        this.cityId = res.data.cityId;
        this.user = res.data;
        this.form.setValue({
          name: this.user.name,
          family: this.user.family,
          address: this.user.address,
          resume: this.user.resume,
          avatar: this.user.userAvatarAddress,
          nationalCode: this.user.nationalCode,
          identificationCode: this.user.identificationCode,
          birthDay: this.user.birthDay,
          mainResume: this.user.mainResume,
          telegram: this.user.telegram,
          instagram: this.user.instagram,
          whatsApp: this.user.whatsApp,
          linkedIn: this.user.linkedIn,
          site: this.user.site,
          isProductDisabled: res.data.isProductDisabled,
          hasFreeSendPrediction: res.data.hasFreeSendPrediction,
          freeSendPredictionPrice: res.data.freeSendPredictionPrice,
          minBikeDeliveryPrice: res.data.minBikeDeliveryPrice,
          bikeDeliveryPriceEachKg: res.data.bikeDeliveryPriceEachKg,
          minTipaxPrice: res.data.minTipaxPrice,
          tipaxPriceEachKg: res.data.tipaxPriceEachKg,
          minPostPrice: res.data.minPostPrice,
          postPriceEachKg: res.data.postPriceEachKg,
          minSpecialPostPrice: res.data.minSpecialPostPrice,
          specialPostPriceEachKg: res.data.specialPostPriceEachKg,
          minBurberryPrice: res.data.minBurberryPrice,
          burberryPriceEachKg: res.data.burberryPriceEachKg
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onUpdate() {
    if (!this.form.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    let city = this.user.cities.find(e => e.id == this.cityId);

    if (city == null || city == undefined) {
      this.provinceId = 1;
      this.cityId = 1;
    } else if (this.provinceId != city.provinceId) {
      this.provinceId = 1;
      this.cityId = 1;
    }

    this.userService.UpdateSellerProfileEdit(new src_app_data_model_account_TeacherRegisterModel__WEBPACK_IMPORTED_MODULE_5__.UpdateSellerProfileModel(this.user.id, this.form.value.address, this.form.value.resume, this.form.value.nationalCode, this.form.value.identificationCode, this.form.value.birthDay, this.form.value.avatar, this.form.value.name, this.form.value.family, this.form.value.mainResume, this.form.value.site, this.form.value.telegram, this.form.value.instagram, this.form.value.whatsApp, this.form.value.linkedIn, this.form.value.isProductDisabled, this.form.value.hasFreeSendPrediction, this.form.value.freeSendPredictionPrice, this.form.value.minBikeDeliveryPrice, this.form.value.bikeDeliveryPriceEachKg, this.form.value.minTipaxPrice, this.form.value.tipaxPriceEachKg, this.form.value.minPostPrice, this.form.value.postPriceEachKg, this.form.value.minSpecialPostPrice, this.form.value.specialPostPriceEachKg, this.form.value.minBurberryPrice, this.form.value.burberryPriceEachKg, 1, this.provinceId, this.cityId, false)).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'انجام نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

};

ProfileEditComponent.ctorParameters = () => [{
  type: src_app_data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}];

ProfileEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-profile-edit',
  template: _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_profile_edit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProfileEditComponent);


/***/ }),

/***/ 81785:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/profile-edit/profile-edit.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditModule": () => (/* binding */ ProfileEditModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit-routing.module */ 45989);
/* harmony import */ var _profile_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-edit.component */ 7606);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let ProfileEditModule = class ProfileEditModule {
};
ProfileEditModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_profile_edit_component__WEBPACK_IMPORTED_MODULE_2__.ProfileEditComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileEditRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], ProfileEditModule);



/***/ }),

/***/ 9842:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/profile-edit/profile-edit.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8133:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/profile-edit/profile-edit.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SellerPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>پروفایل فروشنده</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n        *ngIf=\"user\"\r\n      >\r\n      <ion-card>\r\n          <!-- <ion-item>\r\n          <ion-label>کشور</ion-label>\r\n          <ion-select value=\"2\" multiple=\"false\">\r\n            <ion-select-option value=\"1\"\r\n              >انتخاب نشده</ion-select-option\r\n            >\r\n            <ion-select-option value=\"2\">ایران</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> -->\r\n          <ion-item>\r\n            <ion-label>استان</ion-label>\r\n            <ion-select [(ngModel)]=\"provinceId\" multiple=\"false\">\r\n              <ion-select-option\r\n                (ionChange)=\"provinceId = p.id\"\r\n                [value]=\"p.id\"\r\n                *ngFor=\"let p of user.provinces\"\r\n                >{{ p.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>شهر</ion-label>\r\n            <ion-select [(ngModel)]=\"cityId\" multiple=\"false\">\r\n              <ion-select-option\r\n                [value]=\"c.id\"\r\n                *ngFor=\"let c of getCityList()\"\r\n                >{{ c.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-card>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\"\r\n                >پروفایل فروشنده</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-list>\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"text-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام<ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"نام خود را وارد کنید\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"text-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام خانوادگی<ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"نام خانوادگی خود را وارد کنید\"\r\n                  formControlName=\"family\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"journal-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >کد ملی<ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"کد ملی خود را وارد کنید\"\r\n                  formControlName=\"nationalCode\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"journal-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شماره شناسنامه</ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"شماره شناسنامه خود را وارد کنید\"\r\n                  formControlName=\"identificationCode\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"calendar-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >تاریخ تولد شمسی<ion-text color=\"danger\"\r\n                    >*</ion-text\r\n                  ></ion-label\r\n                >\r\n                <ion-datetime\r\n                  min=\"1300-01-01\"\r\n                  max=\"1410-01-01\"\r\n                  formControlName=\"birthDay\"\r\n                  display-format=\"YYYY.MM.DD\"\r\n                ></ion-datetime>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"location-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس<ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-textarea\r\n                  placeholder=\"آدرس محل سکونت\"\r\n                  formControlName=\"address\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-textarea>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-text position=\"stacked\" color=\"light\"\r\n                  >آدرس تصویر پیش فرض:\r\n                  http://localhost:4300/assets/images/avatar.jpg</ion-text\r\n                >\r\n              </ion-item>\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"light\"\r\n                  slot=\"start\"\r\n                  name=\"link-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس تصویر پروفایل\r\n                  <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"https://\"\r\n                  formControlName=\"avatar\"\r\n                  type=\"url\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"document-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >رزومه خلاصه<ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-textarea\r\n                  autoGrow=\"true\"\r\n                  placeholder=\"رزومه خود را وارد کنید\"\r\n                  formControlName=\"resume\"\r\n                >\r\n                </ion-textarea>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"document-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >رزومه کامل <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-textarea\r\n                  autoGrow=\"true\"\r\n                  placeholder=\"رزومه اصلی خود را وارد کنید\"\r\n                  formControlName=\"mainResume\"\r\n                >\r\n                </ion-textarea>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >شرط ارسال رایگان برای خرید بالا وجود دارد؟\r\n                </ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasFreeSendPrediction\"\r\n                ></ion-checkbox>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"gift-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >مبلغ شرط ارسال رایگان برای خرید بالا به تومان\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مبلغ شرط ارسال رایگان برای خرید بالا به تومان\"\r\n                  formControlName=\"freeSendPredictionPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >حداقل هزینه ارسال یک مرسوله با پیک موتوری به ازای 2 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"حداقل هزینه ارسال یک مرسوله با پیک موتوری به ازای 2 کیلوگرم\"\r\n                  formControlName=\"minBikeDeliveryPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >هزینه ارسال با پیک موتوری به ازای هر کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"هزینه ارسال با پیک موتوری به ازای هر کیلوگرم\"\r\n                  formControlName=\"bikeDeliveryPriceEachKg\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >حداقل هزینه ارسال یک مرسوله با تیپاکس به ازای 2 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"حداقل هزینه ارسال یک مرسوله با تیپاکس به ازای 2 کیلوگرم\"\r\n                  formControlName=\"minTipaxPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >هزینه ارسال با تیپاکس به ازای 1 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"هزینه ارسال با تیپاکس به ازای 1 کیلوگرم\"\r\n                  formControlName=\"tipaxPriceEachKg\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >حداقل هزینه ارسال یک مرسوله با پست به ازای 2 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"حداقل هزینه ارسال یک مرسوله با پست به ازای 2 کیلوگرم\"\r\n                  formControlName=\"minPostPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >هزینه ارسال با پست به ازای 1 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"هزینه ارسال با پست به ازای 1 کیلوگرم\"\r\n                  formControlName=\"postPriceEachKg\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >حداقل هزینه ارسال یک مرسوله با پست پیشتاز به ازای 2 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"حداقل هزینه ارسال یک مرسوله با پست پیشتاز به ازای 2 کیلوگرم\"\r\n                  formControlName=\"minSpecialPostPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >هزینه ارسال با پست پیشتاز به ازای 1 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"هزینه ارسال با پست پیشتاز به ازای 1 کیلوگرم\"\r\n                  formControlName=\"specialPostPriceEachKg\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >حداقل هزینه ارسال یک مرسوله با باربری به ازای 2 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"حداقل هزینه ارسال یک مرسوله با باربری به ازای 2 کیلوگرم\"\r\n                  formControlName=\"minBurberryPrice\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >هزینه ارسال با باربری به ازای 1 کیلوگرم\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"هزینه ارسال با باربری به ازای 1 کیلوگرم\"\r\n                  formControlName=\"burberryPriceEachKg\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >فروش محصولات متوقف شود؟\r\n                </ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isProductDisabled\"\r\n                ></ion-checkbox>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"gift-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"telegram\"\r\n                  slot=\"start\"\r\n                  name=\"paper-plane-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\">تلگرام</ion-label>\r\n                <ion-input\r\n                  placeholder=\"تلگرام خود را وارد کنید\"\r\n                  formControlName=\"telegram\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"instagram\"\r\n                  slot=\"start\"\r\n                  name=\"logo-instagram\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >اینستاگرام</ion-label\r\n                >\r\n                <ion-input\r\n                  placeholder=\"اینستاگرام خود را وارد کنید\"\r\n                  formControlName=\"instagram\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"call-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\">واتساپ</ion-label>\r\n                <ion-input\r\n                  placeholder=\"واتساپ خود را وارد کنید\"\r\n                  formControlName=\"whatsApp\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"twitter\"\r\n                  slot=\"start\"\r\n                  name=\"logo-linkedin\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\">لینکداین</ion-label>\r\n                <ion-input\r\n                  placeholder=\"لینکداین خود را وارد کنید\"\r\n                  formControlName=\"linkedIn\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-margin\">\r\n                <ion-icon\r\n                  color=\"discord\"\r\n                  slot=\"start\"\r\n                  name=\"browsers-outline\"\r\n                ></ion-icon>\r\n                <ion-label position=\"stacked\" color=\"light\">سایت</ion-label>\r\n                <ion-input\r\n                  placeholder=\"سایت خود را وارد کنید\"\r\n                  formControlName=\"site\"\r\n                  type=\"text\"\r\n                >\r\n                </ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n            <ion-buttons slot=\"start\" class=\"full-width\">\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                ویرایش مشخصات\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                (click)=\"onBackClick()\"\r\n              >\r\n                برگشت\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_profile-edit_profile-edit_module_ts.js.map