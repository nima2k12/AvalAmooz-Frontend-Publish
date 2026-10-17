"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_view_components_auth_auth_module_ts"],{

/***/ 49611:
/*!**********************************************************!*\
  !*** ./src/app/data/model/account/AdminRegisterModel.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRegisterModel": () => (/* binding */ AdminRegisterModel)
/* harmony export */ });
class AdminRegisterModel {
    constructor(PhoneNumber, Password, Email, Name, Family, FullAddress, nationalCode, identificationCode, birthDay) {
        this.phoneNumber = PhoneNumber;
        this.password = Password;
        this.email = Email;
        this.name = Name;
        this.family = Family;
        this.fullAddress = FullAddress;
        this.nationalCode = nationalCode;
        this.identificationCode = identificationCode;
        this.birthDay = birthDay;
    }
}


/***/ }),

/***/ 72507:
/*!***********************************************************!*\
  !*** ./src/app/data/model/account/ForgetPasswordModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordModel": () => (/* binding */ ForgetPasswordModel)
/* harmony export */ });
class ForgetPasswordModel {
    constructor(Email, token) {
        this.email = Email;
        this.token = token;
    }
}


/***/ }),

/***/ 64599:
/*!**************************************************!*\
  !*** ./src/app/data/model/account/LoginModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModel": () => (/* binding */ LoginModel)
/* harmony export */ });
class LoginModel {
    constructor(Email, Password, token, token2, twoFactorChannel) {
        this.email = Email;
        this.password = Password;
        this.token = token;
        this.token2 = token2;
        this.twoFactorChannel = twoFactorChannel;
    }
}


/***/ }),

/***/ 73927:
/*!*****************************************************!*\
  !*** ./src/app/data/model/account/RegisterModel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModel": () => (/* binding */ RegisterModel)
/* harmony export */ });
class RegisterModel {
    constructor(PhoneNumber, Password, Email, Name, Family, token, inviteId) {
        this.phoneNumber = PhoneNumber;
        this.password = Password;
        this.email = Email;
        this.name = Name;
        this.family = Family;
        this.token = token;
        this.inviteId = inviteId;
    }
}


/***/ }),

/***/ 46978:
/*!**********************************************************!*\
  !*** ./src/app/data/model/account/ResetPasswordModel.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmEmailModel": () => (/* binding */ ConfirmEmailModel),
/* harmony export */   "ConfirmPhoneModel": () => (/* binding */ ConfirmPhoneModel),
/* harmony export */   "ResetPasswordModel": () => (/* binding */ ResetPasswordModel)
/* harmony export */ });
class ResetPasswordModel {
    constructor(id, email, password, token) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}
class ConfirmEmailModel {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}
class ConfirmPhoneModel {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
}


/***/ }),

/***/ 18650:
/*!***********************************************************!*\
  !*** ./src/app/data/model/account/SellerRegisterModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerRegisterModel": () => (/* binding */ SellerRegisterModel)
/* harmony export */ });
class SellerRegisterModel {
    constructor(FullAddress, nationalCode, identificationCode, birthDay, token) {
        this.fullAddress = FullAddress;
        this.nationalCode = nationalCode;
        this.identificationCode = identificationCode;
        this.birthDay = birthDay;
        this.token = token;
    }
}


/***/ }),

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

/***/ 46050:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/admin-register/admin-register.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRegisterComponent": () => (/* binding */ AdminRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-register.component.html?ngResource */ 25829);
/* harmony import */ var _admin_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-register.component.scss?ngResource */ 33247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_account_AdminRegisterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/account/AdminRegisterModel */ 49611);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);



/* eslint-disable @typescript-eslint/naming-convention */








let AdminRegisterComponent = class AdminRegisterComponent {
    constructor(accountService, router, fb, toastController, loadingController) {
        this.accountService = accountService;
        this.router = router;
        this.fb = fb;
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(15)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
            family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(1000)]],
            nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(13)]],
            identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(13)]],
            birthDay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
        // this.accountService.membershipSubject.subscribe((data: IMembershipSubjectModel) => {
        //   switch (data.RequestType) {
        //     case GAccount.AdminRegisterType: {
        //       this.RegisterStatus(data.Code, data.Message);
        //       SharedIonic.dismissLoading(this.loadingController);
        //       break;
        //     }
        //   }
        // });
    }
    Register() {
        if (this.registerForm.valid) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__.SharedIonic.loading(this.loadingController);
            this.accountService.AdminRegister(new _data_model_account_AdminRegisterModel__WEBPACK_IMPORTED_MODULE_3__.AdminRegisterModel(this.registerForm.value.phoneNumber, this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.family, this.registerForm.value.address, this.registerForm.value.nationalCode, this.registerForm.value.identificationCode, this.registerForm.value.birthDay)).subscribe(res => {
                _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.TokenRolesInit(res, this.registerForm.value.email);
                _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.MyCourseIds = [];
                _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(0);
                // GResponse.CartCoursesCount = 0;
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__.SharedIonic.dismissLoading(this.loadingController);
                this.RegisterStatus(200);
            }, err => {
                this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.ErrorState);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__.SharedIonic.dismissLoading(this.loadingController);
            });
        }
    }
    RegisterStatus(code, responsMsg = '') {
        let msg = 'خطایی رخ داده';
        if (code === 200) {
            msg = 'عضویت با موفقیت انجام شد';
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__.SharedIonic.toast(this.toastController, msg);
            this.router.navigateByUrl('/');
            return;
        }
        else if (code === 423) {
            msg = 'با پشتیبانی تماس بگیرید';
        }
        else if (code === 404) {
            msg = 'انجام نشد';
        }
        else if (code === 400) {
            msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
        else if (code === 406) {
            msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
        else if (code === 0) {
            return;
        }
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_2__.SharedIonic.toast(this.toastController, msg);
    }
};
AdminRegisterComponent.ctorParameters = () => [
    { type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
AdminRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-admin-register',
        template: _admin_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminRegisterComponent);



/***/ }),

/***/ 2683:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/buyer-register/buyer-register.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyerRegisterComponent": () => (/* binding */ BuyerRegisterComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buyer_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyer-register.component.html?ngResource */ 10555);
/* harmony import */ var _buyer_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buyer-register.component.scss?ngResource */ 3449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/account/RegisterModel */ 73927);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable @typescript-eslint/naming-convention */










let BuyerRegisterComponent = class BuyerRegisterComponent {
  constructor(accountService, router, fb, toastController, // private reCaptchaV3Service: ReCaptchaV3Service,
  loadingController) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.inputType = 'password';
    this.isShow = true;
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SiteKey;
    this.registerForm = this.fb.group({
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      inviteId: ['', []] // address: ['', [Validators.required, Validators.maxLength(1000)]]

    });
  }

  togglePasswordText() {
    this.isShow = false;
    this.inputType = 'text';
  }

  toggleTextPassword() {
    this.isShow = true;
    this.inputType = 'password';
  }

  Register() {
    if (this.registerForm.valid) {
      let id = 0;

      if (this.registerForm.value.inviteId !== '') {
        id = +this.registerForm.value.inviteId;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        this.accountService.Register(new _data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_3__.RegisterModel(this.registerForm.value.phoneNumber.toString(), this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.family, 'failed', id)).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.TokenRolesInit(res, this.registerForm.value.email);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        });
      } else {
        this.accountService.Register(new _data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_3__.RegisterModel(this.registerForm.value.phoneNumber.toString(), this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.family, // token,
        'failed', id)).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.TokenRolesInit(res, this.registerForm.value.email);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.Register(
      //       new RegisterModel(
      //         this.registerForm.value.phoneNumber.toString(),
      //         this.registerForm.value.password,
      //         this.registerForm.value.email,
      //         this.registerForm.value.name,
      //         this.registerForm.value.family,
      //         'failed'
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.registerForm.value.email);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         // GResponse.CartCoursesCount = 0;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   } else {
      //     this.accountService.Register(
      //       new RegisterModel(
      //         this.registerForm.value.phoneNumber.toString(),
      //         this.registerForm.value.password,
      //         this.registerForm.value.email,
      //         this.registerForm.value.name,
      //         this.registerForm.value.family,
      //         token
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.registerForm.value.email);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         // GResponse.CartCoursesCount = 0;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  RegisterStatus(code, responsMsg = '') {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = 'خطایی رخ داده';

      if (code === 200) {
        let returnUrl = '/';

        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) === 'returnUrl') {
            returnUrl = localStorage.getItem('returnUrl');
            localStorage.removeItem('returnUrl');
          }
        }

        msg = 'عضویت با موفقیت انجام شد';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, msg);

        _this.router.navigateByUrl(returnUrl);

        return;
      } else if (code === 423) {
        msg = 'با پشتیبانی تماس بگیرید';
      } else if (code === 404) {
        msg = 'کاربر یافت نشد';
      } else if (code === 400) {
        if (responsMsg === 'User LockedOut') {
          msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
        } else if (responsMsg === 'User Dose not Exist') {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        } else if (responsMsg === 'User Exist') {
          msg = 'کاربر با این ایمیل وجود دارد';
        } else if (responsMsg === 'Bot Detected!') {
          msg = 'شما ربات شناخته شدید';
        } else if (responsMsg === 'Not Created') {
          msg = 'اکانت شما ساخته نشد';
        } else {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
      } else if (code === 406) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 0) {
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, msg);
    })();
  }

};

BuyerRegisterComponent.ctorParameters = () => [{
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}];

BuyerRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-buyer-register',
  template: _buyer_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_buyer_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BuyerRegisterComponent);


/***/ }),

/***/ 80466:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/forget-password/forget-password.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forget_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.component.html?ngResource */ 34076);
/* harmony import */ var _forget_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password.component.scss?ngResource */ 90438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/account/ForgetPasswordModel */ 72507);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable @typescript-eslint/naming-convention */







 // import { ReCaptchaV3Service } from 'ngx-captcha';


let ForgetPasswordComponent = class ForgetPasswordComponent {
  constructor(accountService, router, fb, toastController, // private reCaptchaV3Service: ReCaptchaV3Service,
  alertController, loadingController) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.SiteKey;
    this.forgetPasswordForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]]
    });
  }

  presentConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه!',
        message: 'درخواست شما ارسال شد و ایمیلی برایتان ارسال شد',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            _this.router.navigateByUrl('/');
          }
        }]
      });
      yield alert.present();
    })();
  }

  ForgetPassword() {
    if (this.forgetPasswordForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.IsAndroid) {
        this.accountService.ForgetPassword(new _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_5__.ForgetPasswordModel(this.forgetPasswordForm.value.email, 'failed')).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          const msg = 'انجام شد';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, msg);
          this.presentConfirm();
        }, err => {
          this.ForgetPasswordStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        });
      } else {
        this.accountService.ForgetPassword(new _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_5__.ForgetPasswordModel(this.forgetPasswordForm.value.email, // token
        'failed')).subscribe(res => {
          this.ForgetPasswordStatus(200);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        }, err => {
          this.ForgetPasswordStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.ForgetPassword(
      //       new ForgetPasswordModel(
      //         this.forgetPasswordForm.value.email,
      //         'failed'
      //       )
      //     ).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         const msg = 'انجام شد';
      //         SharedIonic.toast(this.toastController, msg);
      //         this.presentConfirm();
      //       },
      //       err => {
      //         this.ForgetPasswordStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   } else {
      //     this.accountService.ForgetPassword(
      //       new ForgetPasswordModel(
      //         this.forgetPasswordForm.value.email,
      //         token
      //       )
      //     ).subscribe(
      //       res => {
      //         this.ForgetPasswordStatus(200);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       },
      //       err => {
      //         this.ForgetPasswordStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  ForgetPasswordStatus(code, responsMsg = '') {
    let msg = 'خطایی رخ داده';

    if (code === 200) {
      msg = 'ایمیل برایتان ارسال شد';
      this.router.navigateByUrl('/');
    } else if (code === 423) {
      msg = 'اکانت شما مسدود شده است';
    } else if (code === 404) {
      msg = 'ایمیل برایتان ارسال شد';
    } else if (code === 400) {
      if (responsMsg === 'User LockedOut') {
        msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
      } else if (responsMsg === 'User Exist') {
        msg = 'ایمیل برایتان ارسال شد';
      } else if (responsMsg === 'Bot Detected!') {
        msg = 'شما ربات شناخته شدید';
      } else if (responsMsg === 'User dose not Exist') {
        msg = 'ایمیل برایتان ارسال شد';
      } else {
        msg = 'ایمیل برایتان ارسال شد';
      }
    } else if (code === 406) {
      msg = 'ایمیل برایتان ارسال شد';
    } else if (code === 0) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, msg);
  }

};

ForgetPasswordComponent.ctorParameters = () => [{
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}];

ForgetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-forget-password',
  template: _forget_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forget_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgetPasswordComponent);


/***/ }),

/***/ 47567:
/*!*************************************************************************!*\
  !*** ./src/app/view/components/auth/account/invite/invite.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InviteComponent": () => (/* binding */ InviteComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _invite_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invite.component.html?ngResource */ 88916);
/* harmony import */ var _invite_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite.component.scss?ngResource */ 54926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/account/RegisterModel */ 73927);
/* harmony import */ var src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/auth/account.service */ 57577);




/* eslint-disable @typescript-eslint/naming-convention */










let InviteComponent = class InviteComponent {
  constructor(accountService, router, fb, toastController, // private reCaptchaV3Service: ReCaptchaV3Service,
  loadingController) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.inviteId = '';
    this.inputType = 'password';
    this.isShow = true;
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
  }

  ngOnInit() {
    this.siteKey = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.SiteKey;
    this.registerForm = this.fb.group({
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(50)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]] // address: ['', [Validators.required, Validators.maxLength(1000)]]

    });
  }

  togglePasswordText() {
    this.isShow = false;
    this.inputType = 'text';
  }

  toggleTextPassword() {
    this.isShow = true;
    this.inputType = 'password';
  }

  Register() {
    if (this.registerForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid) {
        this.accountService.Register(new src_app_data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_6__.RegisterModel(this.registerForm.value.phoneNumber.toString(), this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.family, 'failed', +this.inviteId)).subscribe(res => {
          src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.TokenRolesInit(res, this.registerForm.value.email);
          src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyCourseIds = [];
          src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorMessage);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        });
      } else {
        this.accountService.Register(new src_app_data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_6__.RegisterModel(this.registerForm.value.phoneNumber.toString(), this.registerForm.value.password, this.registerForm.value.email, this.registerForm.value.name, this.registerForm.value.family, // token,
        'failed', +this.inviteId)).subscribe(res => {
          src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.TokenRolesInit(res, this.registerForm.value.email);
          src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyCourseIds = [];
          src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorMessage);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.Register(
      //       new RegisterModel(
      //         this.registerForm.value.phoneNumber.toString(),
      //         this.registerForm.value.password,
      //         this.registerForm.value.email,
      //         this.registerForm.value.name,
      //         this.registerForm.value.family,
      //         'failed'
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.registerForm.value.email);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         // GResponse.CartCoursesCount = 0;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   } else {
      //     this.accountService.Register(
      //       new RegisterModel(
      //         this.registerForm.value.phoneNumber.toString(),
      //         this.registerForm.value.password,
      //         this.registerForm.value.email,
      //         this.registerForm.value.name,
      //         this.registerForm.value.family,
      //         token
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.registerForm.value.email);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         // GResponse.CartCoursesCount = 0;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  RegisterStatus(code, responsMsg = '') {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = 'خطایی رخ داده';

      if (code === 200) {
        let returnUrl = '/';

        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) === 'returnUrl') {
            returnUrl = localStorage.getItem('returnUrl');
            localStorage.removeItem('returnUrl');
          }
        }

        msg = 'عضویت با موفقیت انجام شد';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, msg);

        _this.router.navigateByUrl(returnUrl);

        return;
      } else if (code === 423) {
        msg = 'با پشتیبانی تماس بگیرید';
      } else if (code === 404) {
        msg = 'کاربر یافت نشد';
      } else if (code === 400) {
        if (responsMsg === 'User LockedOut') {
          msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
        } else if (responsMsg === 'User Dose not Exist') {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        } else if (responsMsg === 'User Exist') {
          msg = 'کاربر با این ایمیل وجود دارد';
        } else if (responsMsg === 'Bot Detected!') {
          msg = 'شما ربات شناخته شدید';
        } else if (responsMsg === 'Not Created') {
          msg = 'اکانت شما ساخته نشد';
        } else {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
      } else if (code === 406) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 0) {
        return;
      }

      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, msg);
    })();
  }

};

InviteComponent.ctorParameters = () => [{
  type: src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}];

InviteComponent.propDecorators = {
  inviteId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }]
};
InviteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-invite',
  template: _invite_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_invite_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InviteComponent);


/***/ }),

/***/ 55597:
/*!***********************************************************************!*\
  !*** ./src/app/view/components/auth/account/login/login.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 66124);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 27476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _data_model_account_LoginModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/account/LoginModel */ 64599);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable @typescript-eslint/naming-convention */












let LoginComponent = class LoginComponent {
  constructor(accountService, router, fb, toastController, loadingController, courseService, // private reCaptchaV3Service: ReCaptchaV3Service,
  orderService) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.orderService = orderService;
    this.inputType = 'password';
    this.isShow = true;
    this.siteKey = '';
    this.twoFactor = false;
    this.chooseDelivery = false;
    this.sending = false;
    this.deliveryDisabled = false;
    this.recoveryAvailable = false;
    this.deliveryNotice = '';
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_9__.G.SiteKey;
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]],
      token2: ['']
    });
  }

  ionViewWillEnter() {
    this.twoFactor = false;
    this.chooseDelivery = false;
    this.twoFactorChannel = undefined;
    this.deliveryDisabled = false;
    this.recoveryAvailable = false;
    this.deliveryNotice = '';
  }

  togglePasswordText() {
    this.isShow = false;
    this.inputType = 'text';
  }

  toggleTextPassword() {
    this.isShow = true;
    this.inputType = 'password';
  }

  Login() {
    if (!this.loginForm.valid || this.sending) {
      return;
    }

    this.twoFactorChannel = undefined;
    this.loginForm.patchValue({
      token2: ''
    });
    this.chooseDelivery = false;
    this.twoFactor = false;
    this.recoveryAvailable = false;
    this.deliveryNotice = '';
    this.submitLogin();
  }

  sendCode(channel) {
    if (this.sending) {
      return;
    }

    this.twoFactorChannel = channel;
    this.recoveryAvailable = false;
    this.deliveryNotice = '';
    this.loginForm.patchValue({
      token2: ''
    });
    this.submitLogin();
  }

  Login2() {
    const code = String(this.loginForm.value.token2 || '').trim();

    if (!code) {
      return;
    }

    this.submitLogin(code);
  }

  submitLogin(code) {
    if (!this.loginForm.valid || this.sending) {
      return;
    }

    this.sending = true;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.Login(new _data_model_account_LoginModel__WEBPACK_IMPORTED_MODULE_4__.LoginModel(this.loginForm.value.email.trim(), this.loginForm.value.password, 'failed', code, this.twoFactorChannel)).subscribe(res => {
      this.sending = false;
      _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.TokenRolesInit(res, this.loginForm.value.email.trim());
      this.afterLogin();
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      this.LoginStatus(200);
    }, () => {
      this.sending = false;
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      this.LoginStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
    });
  }

  afterLogin() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.orderService.GetUserCart().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          if (res.data.courses == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(res.data.courses.length); // GResponse.CartCoursesCount = res.data.courses.length;
          }
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
        }
      });

      _this.courseService.GetUserCoursesId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = res.data;
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
        }
      });
    })();
  }

  LoginStatus(code, responsMsg = '') {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = 'خطایی رخ داده';

      if (code === 200) {
        let returnUrl = '/';

        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) === 'returnUrl') {
            returnUrl = localStorage.getItem('returnUrl');
            localStorage.removeItem('returnUrl');
          }
        }

        msg = 'ورود با موفقیت انجام شد';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this2.toastController, msg);

        _this2.router.navigateByUrl(returnUrl);

        return;
      } else if (code === 423) {
        msg = 'اکانت شما غیر فعال شده است';
      } else if (code === 665) {
        _this2.chooseDelivery = true;
        _this2.twoFactor = false;
        _this2.twoFactorChannel = undefined;
        return;
      } else if (code === 666) {
        _this2.chooseDelivery = false;
        _this2.twoFactor = true;
        _this2.recoveryAvailable = responsMsg?.deliveryStatus === 'disabled';
        _this2.deliveryDisabled = responsMsg?.deliveryStatus === 'disabled';
        msg = responsMsg?.deliveryStatus === 'device' ? 'در پنل یکی از دو ادمین واردشده، ایمیل این حساب را به‌عنوان مقصد انتخاب کنید و کد آن را وارد کنید.' : _this2.deliveryDisabled ? 'کد ساخته شد، اما ارسال ایمیل فعلاً غیرفعال است.' : _this2.twoFactorChannel === 'sms' ? 'درخواست پیامک در سرویس ثبت شد؛ تحویل به گوشی هنوز تأیید نشده است.' : 'کد ورود ارسال شد؛ لطفاً آن را وارد کنید.';
        const destination = typeof responsMsg?.destination === 'string' && /^09\*{7}[0-9]{2}$/.test(responsMsg.destination) ? ` مقصد ثبت‌شدهٔ حساب: ${responsMsg.destination}.` : '';
        _this2.deliveryNotice = msg + destination;
      } else if (code === 502 || code === 503) {
        _this2.recoveryAvailable = responsMsg?.recoveryAvailable === true;
        _this2.deliveryNotice = '';

        if (_this2.recoveryAvailable) {
          _this2.chooseDelivery = false;
          _this2.twoFactor = true;
          _this2.deliveryDisabled = false;
        }

        if (responsMsg?.code === 'two_factor_sms_not_configured') {
          msg = 'سرویس پیامک روی سرور تنظیم نشده است؛ روش ایمیل را انتخاب کنید.';
        } else if (responsMsg?.code === 'two_factor_phone_missing') {
          msg = 'شماره موبایل حساب ثبت نشده است؛ ایمیل یا دستگاه واردشده را انتخاب کنید.';
        } else if (responsMsg?.code === 'two_factor_phone_invalid') {
          msg = 'شماره موبایل ثبت‌شدهٔ حساب معتبر نیست؛ آن را در پروفایل اصلاح کنید یا روش دیگر را انتخاب کنید.';
        } else if (responsMsg?.code === 'two_factor_delivery_failed') {
          msg = 'ارسال کد انجام نشد؛ دوباره تلاش کنید یا روش دیگر را انتخاب کنید.';
        } else {
          msg = 'سرویس ورود موقتاً در دسترس نیست؛ کمی بعد دوباره تلاش کنید.';
        }
      } else if (code === 777) {
        msg = 'کد ورود نامعتبر یا منقضی شده است؛ آخرین کد را وارد کنید یا کد جدید بگیرید.';
      } else if (code === 404) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 400) {
        if (responsMsg === 'User LockedOut') {
          msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
        } else if (responsMsg === 'User Dose not Exist') {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        } else if (responsMsg === 'Bot Detected!') {
          msg = 'شما ربات شناخته شدید';
        } else {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
      } else if (code === 406) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 0) {
        return;
      }

      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this2.toastController, msg);
    })();
  }

};

LoginComponent.ctorParameters = () => [{
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_7__.OrderService
}];

LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginComponent);


/***/ }),

/***/ 42991:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/reset-password/reset-password.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component.html?ngResource */ 29616);
/* harmony import */ var _reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component.scss?ngResource */ 15377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/service/auth/account.service */ 57577);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_account_ResetPasswordModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/account/ResetPasswordModel */ 46978);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recaptcha-v3 */ 3540);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */








// import { ReCaptchaV3Service } from 'ngx-captcha';


let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(accountService, router, fb, toastController, 
    // private reCaptchaV3Service: ReCaptchaV3Service,
    loadingController) {
        this.accountService = accountService;
        this.router = router;
        this.fb = fb;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email = '';
        this.id = '';
        this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
        this.inputType1 = 'password';
        this.isShow1 = true;
        this.inputType2 = 'password';
        this.isShow2 = true;
    }
    ngOnInit() {
        this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.SiteKey;
        this.resetPasswordForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            rePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
    }
    togglePasswordText1() {
        this.isShow1 = false;
        this.inputType1 = 'text';
    }
    toggleTextPassword1() {
        this.isShow1 = true;
        this.inputType1 = 'password';
    }
    togglePasswordText2() {
        this.isShow2 = false;
        this.inputType2 = 'text';
    }
    toggleTextPassword2() {
        this.isShow2 = true;
        this.inputType2 = 'password';
    }
    Status(code, responsMsg = '') {
        let msg = 'خطایی رخ داده';
        if (code === 423) {
            msg = 'اکانت شما مسدود شده است';
        }
        else if (code === 404) {
            msg = 'کاربر یافت نشد';
        }
        else if (code === 400) {
            if (responsMsg === 'User LockedOut') {
                msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
            }
            else if (responsMsg === 'User Exist') {
                msg = 'کاربر با این ایمیل وجود دارد';
            }
            else if (responsMsg === 'Bot Detected!') {
                msg = 'شما ربات شناخته شدید';
            }
            else if (responsMsg === 'User dose not Exist') {
                msg = 'ایمیل شما در سیستم وجود ندارد';
            }
            else {
                msg = 'انجام نشد';
            }
        }
        else if (code === 406) {
            msg = 'ایمیل نامعتبر است';
        }
        else if (code === 0) {
            return;
        }
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
    }
    ResetPassword() {
        if (this.resetPasswordForm.valid && this.resetPasswordForm.value.password === this.resetPasswordForm.value.rePassword) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
            (0,recaptcha_v3__WEBPACK_IMPORTED_MODULE_7__.load)(this.siteKey).then((recaptcha) => {
                recaptcha.execute('homepage').then((token) => {
                    this.id = this.id.replace(' ', '+');
                    // console.log(new ResetPasswordModel(this.id, this.email, this.resetPasswordForm.value.password));
                    if (_core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.IsAndroid) {
                        this.accountService.ResetPassword(new _data_model_account_ResetPasswordModel__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordModel(this.id, this.email, this.resetPasswordForm.value.password, 'failed')).subscribe(res => {
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'با موفقیت انجام شد');
                            this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccountUrl);
                            return;
                        }, err => {
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
                            this.Status(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService.ErrorMessage);
                            // SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                        });
                    }
                    else {
                        this.accountService.ResetPassword(new _data_model_account_ResetPasswordModel__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordModel(this.id, this.email, this.resetPasswordForm.value.password, token)).subscribe(res => {
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'با موفقیت انجام شد');
                            this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccountUrl);
                            return;
                        }, err => {
                            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
                            this.Status(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService.ErrorMessage);
                            // SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                        });
                    }
                });
            });
            // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
            //   this.id = this.id.replace(' ', '+');
            //   // console.log(new ResetPasswordModel(this.id, this.email, this.resetPasswordForm.value.password));
            //   if (G.IsAndroid) {
            //     this.accountService.ResetPassword(
            //       new ResetPasswordModel(
            //         this.id,
            //         this.email,
            //         this.resetPasswordForm.value.password,
            //         'failed'
            //       )
            //     ).subscribe(
            //       res => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         SharedIonic.toast(this.toastController, 'با موفقیت انجام شد');
            //         this.router.navigateByUrl(Urls.AccountUrl);
            //         return;
            //       },
            //       err => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.Status(AccountService.ErrorState, AccountService.ErrorMessage);
            //         // SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            //       }
            //     );
            //   } else {
            //     this.accountService.ResetPassword(
            //       new ResetPasswordModel(
            //         this.id,
            //         this.email,
            //         this.resetPasswordForm.value.password,
            //         token
            //       )
            //     ).subscribe(
            //       res => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         SharedIonic.toast(this.toastController, 'با موفقیت انجام شد');
            //         this.router.navigateByUrl(Urls.AccountUrl);
            //         return;
            //       },
            //       err => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.Status(AccountService.ErrorState, AccountService.ErrorMessage);
            //         // SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            //       }
            //     );
            //   }
            // }, {
            //   useGlobalDomain: false
            // });
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController }
];
ResetPasswordComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
ResetPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-reset-password',
        template: _reset_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordComponent);



/***/ }),

/***/ 96210:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/seller-register/seller-register.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerRegisterComponent": () => (/* binding */ SellerRegisterComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seller_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-register.component.html?ngResource */ 8591);
/* harmony import */ var _seller_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-register.component.scss?ngResource */ 9148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_account_SellerRegisterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/account/SellerRegisterModel */ 18650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable @typescript-eslint/naming-convention */









 // import { ReCaptchaV3Service } from 'ngx-captcha';


let SellerRegisterComponent = class SellerRegisterComponent {
  constructor(accountService, router, fb, toastController, // private reCaptchaV3Service: ReCaptchaV3Service,
  sanitizer, alertController, loadingController) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.sanitizer = sanitizer;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.isInfoShow = false;
    this.link = '';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.video = '8EoFL';
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SiteKey;
    this.link = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SellerRegisterLink;
    this.video = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SellerRegisterVideo;
    this.registerForm = this.fb.group({
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(13)]],
      birthDay: ['1370-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  presentConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'درخواست شما ثبت شد و ایمیلی برایتان ارسال شد',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            _this.router.navigateByUrl('/');
          }
        }]
      });
      yield alert.present();
    })();
  }

  Register() {
    if (this.registerForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        this.accountService.SellerRegister(new _data_model_account_SellerRegisterModel__WEBPACK_IMPORTED_MODULE_4__.SellerRegisterModel(this.registerForm.value.address, this.registerForm.value.nationalCode, this.registerForm.value.identificationCode, this.registerForm.value.birthDay, 'failed')).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.TokenRolesInit(res, null);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
          const msg = 'انجام شد';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
          this.presentConfirm();
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        });
      } else {
        this.accountService.SellerRegister(new _data_model_account_SellerRegisterModel__WEBPACK_IMPORTED_MODULE_4__.SellerRegisterModel(this.registerForm.value.address, this.registerForm.value.nationalCode, this.registerForm.value.identificationCode, this.registerForm.value.birthDay, // token
        'failed')).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.TokenRolesInit(res, null);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.SellerRegister(
      //       new SellerRegisterModel(
      //         this.registerForm.value.address,
      //         this.registerForm.value.nationalCode,
      //         this.registerForm.value.identificationCode,
      //         this.registerForm.value.birthDay,
      //         'failed'
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, null);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         SharedIonic.dismissLoading(this.loadingController);
      //         const msg = 'انجام شد';
      //         SharedIonic.toast(this.toastController, msg);
      //         this.presentConfirm();
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   } else {
      //     this.accountService.SellerRegister(
      //       new SellerRegisterModel(
      //         this.registerForm.value.address,
      //         this.registerForm.value.nationalCode,
      //         this.registerForm.value.identificationCode,
      //         this.registerForm.value.birthDay,
      //         token
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, null);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  RegisterStatus(code, responsMsg = '') {
    let msg = 'خطایی رخ داده';

    if (code === 200) {
      msg = 'عضویت با موفقیت انجام شد';
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
      this.router.navigateByUrl('/');
      return;
    } else if (code === 423) {
      msg = 'اکانت شما مسدود شده است';
    } else if (code === 404) {
      msg = 'انجام نشد';
    } else if (code === 400) {
      if (responsMsg === 'User LockedOut') {
        msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
      } else if (responsMsg === 'User Exist') {
        msg = 'کاربر با این ایمیل وجود دارد';
      } else if (responsMsg === 'User Dose not Exist') {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (responsMsg === 'Bot Detected!') {
        msg = 'شما ربات شناخته شدید';
      } else if (responsMsg === 'User dose not Exist') {
        msg = 'لطفا ابتدا به عنوان کاربر عضو شوید';
      } else {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      }
    } else if (code === 406) {
      msg = 'ایمیل یا رمز عبور نامعتبر است';
    } else if (code === 0) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.video + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.video;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

SellerRegisterComponent.ctorParameters = () => [{
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}];

SellerRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-seller-register',
  template: _seller_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_seller_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SellerRegisterComponent);


/***/ }),

/***/ 36366:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/teacher-register/teacher-register.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherRegisterComponent": () => (/* binding */ TeacherRegisterComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _teacher_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-register.component.html?ngResource */ 48925);
/* harmony import */ var _teacher_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-register.component.scss?ngResource */ 1544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_account_TeacherRegisterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/account/TeacherRegisterModel */ 92337);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);




/* eslint-disable @typescript-eslint/naming-convention */








 // import { ReCaptchaV3Service } from 'ngx-captcha';



let TeacherRegisterComponent = class TeacherRegisterComponent {
  constructor(accountService, router, fb, toastController, // private reCaptchaV3Service: ReCaptchaV3Service,
  sanitizer, alertController, loadingController) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.sanitizer = sanitizer;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.isInfoShow = false;
    this.link = '';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.video = '8EoFL';
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SiteKey;
    this.link = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.TeacherRegisterLink;
    this.video = _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.TeacherRegisterVideo;
    this.registerForm = this.fb.group({
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(13)]],
      birthDay: ['1990-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  presentConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'درخواست شما ثبت شد و ایمیلی برایتان ارسال شد',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {
            _this.router.navigateByUrl('/');
          }
        }]
      });
      yield alert.present();
    })();
  }

  Register() {
    if (this.registerForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        this.accountService.TeacherRegister(new _data_model_account_TeacherRegisterModel__WEBPACK_IMPORTED_MODULE_4__.TeacherRegisterModel(this.registerForm.value.address, this.registerForm.value.nationalCode, this.registerForm.value.identificationCode, this.registerForm.value.birthDay, 'failed')).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.TokenRolesInit(res, null);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
          const msg = 'انجام شد';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
          this.presentConfirm();
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        });
      } else {
        this.accountService.TeacherRegister(new _data_model_account_TeacherRegisterModel__WEBPACK_IMPORTED_MODULE_4__.TeacherRegisterModel(this.registerForm.value.address, this.registerForm.value.nationalCode, this.registerForm.value.identificationCode, this.registerForm.value.birthDay, // token
        'failed')).subscribe(res => {
          _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.TokenRolesInit(res, null);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
          this.RegisterStatus(200);
        }, err => {
          this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService.ErrorMessage);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.TeacherRegister(
      //       new TeacherRegisterModel(
      //         this.registerForm.value.address,
      //         this.registerForm.value.nationalCode,
      //         this.registerForm.value.identificationCode,
      //         this.registerForm.value.birthDay,
      //         'failed'
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, null);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         SharedIonic.dismissLoading(this.loadingController);
      //         const msg = 'انجام شد';
      //         SharedIonic.toast(this.toastController, msg);
      //         this.presentConfirm();
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   } else {
      //     this.accountService.TeacherRegister(
      //       new TeacherRegisterModel(
      //         this.registerForm.value.address,
      //         this.registerForm.value.nationalCode,
      //         this.registerForm.value.identificationCode,
      //         this.registerForm.value.birthDay,
      //         token
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, null);
      //         GResponse.MyCourseIds = [];
      //         GResponse.setCartCoursesCount(0);
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.RegisterStatus(200);
      //       },
      //       err => {
      //         this.RegisterStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //         SharedIonic.dismissLoading(this.loadingController);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  RegisterStatus(code, responsMsg = '') {
    let msg = 'خطایی رخ داده';

    if (code === 200) {
      msg = 'عضویت با موفقیت انجام شد';
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
      this.router.navigateByUrl('/');
      return;
    } else if (code === 423) {
      msg = 'اکانت شما مسدود شده است';
    } else if (code === 404) {
      msg = 'انجام نشد';
    } else if (code === 400) {
      if (responsMsg === 'User LockedOut') {
        msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
      } else if (responsMsg === 'User Exist') {
        msg = 'کاربر با این ایمیل وجود دارد';
      } else if (responsMsg === 'User Dose not Exist') {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (responsMsg === 'Bot Detected!') {
        msg = 'شما ربات شناخته شدید';
      } else if (responsMsg === 'User dose not Exist') {
        msg = 'لطفا ابتدا به عنوان کاربر عضو شوید';
      } else {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      }
    } else if (code === 406) {
      msg = 'ایمیل یا رمز عبور نامعتبر است';
    } else if (code === 0) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, msg);
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.video + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.video;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

TeacherRegisterComponent.ctorParameters = () => [{
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}];

TeacherRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-teacher-register',
  template: _teacher_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_teacher_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TeacherRegisterComponent);


/***/ }),

/***/ 93835:
/*!*********************************************************************************!*\
  !*** ./src/app/view/components/auth/account/two-factor/two-factor.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoFactorComponent": () => (/* binding */ TwoFactorComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _two_factor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-factor.component.html?ngResource */ 32944);
/* harmony import */ var _two_factor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two-factor.component.scss?ngResource */ 35838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/auth/account.service */ 57577);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var src_app_data_model_account_LoginModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/account/LoginModel */ 64599);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/service/order/order.service */ 22773);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/member-ordering */




 // import { ReCaptchaV3Service } from 'ngx-captcha';








let TwoFactorComponent = class TwoFactorComponent {
  constructor(accountService, router, fb, toastController, loadingController, courseService, // private reCaptchaV3Service: ReCaptchaV3Service,
  orderService) {
    this.accountService = accountService;
    this.router = router;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.orderService = orderService;
    this.email = '';
    this.id = '';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.inputType = 'password';
    this.isShow = true;
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteKey;
    this.passwordForm = this.fb.group({
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    });
  }

  togglePasswordText() {
    this.isShow = false;
    this.inputType = 'text';
  }

  toggleTextPassword() {
    this.isShow = true;
    this.inputType = 'password';
  }

  Login2() {
    if (this.passwordForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      // recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsAndroid) {
        this.accountService.Login(new src_app_data_model_account_LoginModel__WEBPACK_IMPORTED_MODULE_7__.LoginModel(this.email, this.passwordForm.value.password, 'failed', this.id)).subscribe(res => {
          src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.TokenRolesInit(res, this.email);
          this.afterLogin();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          console.log(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage); // this.LoginStatus(200);
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.LoginStatus(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
        });
      } else {
        this.accountService.Login(new src_app_data_model_account_LoginModel__WEBPACK_IMPORTED_MODULE_7__.LoginModel(this.email, this.passwordForm.value.password, // token,
        'failed', this.id)).subscribe(res => {
          src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.TokenRolesInit(res, this.email);
          this.afterLogin();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.LoginStatus(200);
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.LoginStatus(src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
        });
      } // });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     this.accountService.Login(
      //       new LoginModel(
      //         this.email,
      //         this.passwordForm.value.password,
      //         'failed',
      //         this.id
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.email);
      //         this.afterLogin();
      //         SharedIonic.dismissLoading(this.loadingController);
      //         console.log(AccountService.ErrorState, AccountService.ErrorMessage);
      //         // this.LoginStatus(200);
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.LoginStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //       }
      //     );
      //   } else {
      //     this.accountService.Login(
      //       new LoginModel(
      //         this.email,
      //         this.passwordForm.value.password,
      //         token,
      //         this.id
      //       )
      //     ).subscribe(
      //       res => {
      //         AccountService.TokenRolesInit(res, this.email);
      //         this.afterLogin();
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.LoginStatus(200);
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         this.LoginStatus(AccountService.ErrorState, AccountService.ErrorMessage);
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  afterLogin() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.orderService.GetUserCart().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          if (res.data.courses == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(res.data.courses.length); // GResponse.CartCoursesCount = res.data.courses.length;
          }
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
        }
      });

      _this.courseService.GetUserCoursesId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = res.data;
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
        }
      });
    })();
  }

  LoginStatus(code, responsMsg = '') {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = 'خطایی رخ داده';

      if (code === 200) {
        let returnUrl = '/';

        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) === 'returnUrl') {
            returnUrl = localStorage.getItem('returnUrl');
            localStorage.removeItem('returnUrl');
          }
        }

        msg = 'ورود با موفقیت انجام شد';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this2.toastController, msg);

        _this2.router.navigateByUrl(returnUrl);

        return;
      } else if (code === 423) {
        msg = 'اکانت شما غیر فعال شده است';
      } else if (code === 666) {
        msg = 'لطفا رمز عبور را وارد کنید';
      } else if (code === 777) {
        msg = 'خطا! آی پی شما جهت بررسی ثبت شد';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this2.toastController, msg);

        _this2.router.navigateByUrl('/');

        return;
      } else if (code === 404) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 400) {
        if (responsMsg === 'User LockedOut') {
          msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
        } else if (responsMsg === 'User Dose not Exist') {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        } else if (responsMsg === 'Bot Detected!') {
          msg = 'شما ربات شناخته شدید';
        } else {
          msg = 'ایمیل یا رمز عبور نامعتبر است';
        }
      } else if (code === 406) {
        msg = 'ایمیل یا رمز عبور نامعتبر است';
      } else if (code === 0) {
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this2.toastController, msg);
    })();
  }

};

TwoFactorComponent.ctorParameters = () => [{
  type: src_app_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: src_app_data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService
}];

TwoFactorComponent.propDecorators = {
  email: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
  }]
};
TwoFactorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-two-factor',
  template: _two_factor_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_two_factor_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TwoFactorComponent);


/***/ }),

/***/ 56722:
/*!*****************************************************!*\
  !*** ./src/app/view/components/auth/auth.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/utility/account.interceptor */ 8363);
/* harmony import */ var _account_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/login/login.component */ 55597);
/* harmony import */ var _account_buyer_register_buyer_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/buyer-register/buyer-register.component */ 2683);
/* harmony import */ var _account_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/seller-register/seller-register.component */ 96210);
/* harmony import */ var _account_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/admin-register/admin-register.component */ 46050);
/* harmony import */ var _account_teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/teacher-register/teacher-register.component */ 36366);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/forget-password/forget-password.component */ 80466);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/service/order/order.service */ 22773);
/* harmony import */ var _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account/reset-password/reset-password.component */ 42991);
/* harmony import */ var _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/two-factor/two-factor.component */ 93835);
/* harmony import */ var _account_invite_invite_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account/invite/invite.component */ 47567);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/i18n/site-i18n.module */ 58586);

















// import { NgxCaptchaModule } from 'ngx-captcha';



let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _account_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
            _account_buyer_register_buyer_register_component__WEBPACK_IMPORTED_MODULE_3__.BuyerRegisterComponent,
            _account_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_4__.SellerRegisterComponent,
            _account_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_5__.AdminRegisterComponent,
            _account_teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_6__.TeacherRegisterComponent,
            _account_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__.ForgetPasswordComponent,
            _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordComponent,
            _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_11__.TwoFactorComponent,
            _account_invite_invite_component__WEBPACK_IMPORTED_MODULE_12__.InviteComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule,
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_13__.SiteI18nModule,
            // NgxCaptchaModule
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
                useClass: _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_1__.AccountInterceptor,
                multi: true
            },
            _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService,
            _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService,
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService
        ],
        exports: [
            _account_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
            _account_buyer_register_buyer_register_component__WEBPACK_IMPORTED_MODULE_3__.BuyerRegisterComponent,
            _account_seller_register_seller_register_component__WEBPACK_IMPORTED_MODULE_4__.SellerRegisterComponent,
            _account_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_5__.AdminRegisterComponent,
            _account_teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_6__.TeacherRegisterComponent,
            _account_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__.ForgetPasswordComponent,
            _account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordComponent,
            _account_two_factor_two_factor_component__WEBPACK_IMPORTED_MODULE_11__.TwoFactorComponent,
            _account_invite_invite_component__WEBPACK_IMPORTED_MODULE_12__.InviteComponent
        ]
    })
], AuthModule);



/***/ }),

/***/ 33247:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/admin-register/admin-register.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3449:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/buyer-register/buyer-register.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXllci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 90438:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/forget-password/forget-password.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.rules-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  border: 1px solid #d1fae5;\n  color: #065f46;\n}\n\n.rules-callout ion-icon {\n  font-size: 20px;\n  color: #10b981;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n.rules-callout strong {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 800;\n}\n\n.rules-callout small {\n  display: block;\n  font-size: 10px;\n  color: #047857;\n  margin-top: 2px;\n  line-height: 1.5;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsK0NBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFWRTtFQUFXLGVBQUE7QUFhYjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFlSjs7QUFaQTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBZ0JGOztBQWZFO0VBQ0UsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWlCRjs7QUFoQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWhCRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBa0JKOztBQWhCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFmQTtFQUNFLGVBQUE7QUFrQkYiLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYXV0aC1pbnN0cnVjdGlvbi1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLXNvZnQsICNmNWYzZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hdXRoLXB1cnBsZS1ib3JkZXIsICNlZGU5ZmUpO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmluc3RydWN0aW9uLWljb24ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1ib3JkZXIsICNlZGU5ZmUpO1xuICBjb2xvcjogIzZkMjhkOTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5pbnN0cnVjdGlvbi10ZXh0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5pbnN0cnVjdGlvbi10ZXh0IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tYXV0aC1pbmssICMxZTFiNGIpO1xufVxuLmluc3RydWN0aW9uLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtbXV0ZWQsICM2NDc0OGIpO1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4udGVhY2hlci1ydWxlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG4ucnVsZXMtaGVhZGVyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtc29mdCwgI2Y1ZjNmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG59XG4ucnVsZXMtYmFkZ2Uge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1ib3JkZXIsICNlZGU5ZmUpO1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0tYXV0aC1pbmssICMxZTFiNGIpO1xuICBtYXJnaW46IDA7XG59XG4ucnVsZXMtaGVhZGVyLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1tdXRlZCwgIzY0NzQ4Yik7XG4gIG1hcmdpbjogM3B4IDAgMDtcbn1cbi5ydWxlcy1jb250ZW50LWNhcmQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLWJnLWNhbnZhcywgI2Y4ZmFmYyk7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYXV0aC1ib3JkZXIsICNlMmU4ZjApO1xufVxuLnJ1bGVzLXNlY3Rpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzZkMjhkOTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cbn1cbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cbi5ydWxlcy1sZWFkIHtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluay1zZWNvbmRhcnksICMzMzQxNTUpO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnJ1bGVzLWNoZWNrbGlzdCB7XG4gIG1hcmdpbjogMCAwIDE0cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxOHB4O1xuICBsaSB7XG4gICAgZm9udC1zaXplOiAxMS41cHg7XG4gICAgY29sb3I6IHZhcigtLWF1dGgtaW5rLXNlY29uZGFyeSwgIzQ3NTU2OSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgfVxufVxuLnJ1bGVzLWNhbGxvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWZhZTU7XG4gIGNvbG9yOiAjMDY1ZjQ2O1xuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMTBiOTgxO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbiAgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzA0Nzg1NztcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuLmNvbnRpbnVlLXJ1bGVzLWJ0biB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 54926:
/*!**************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/invite/invite.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsK0NBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFWRTtFQUFXLGVBQUE7QUFhYjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFlSjs7QUFaQTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBZ0JGOztBQWZFO0VBQ0UsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0UsZUFBQTtBQWlCRiIsImZpbGUiOiJpbnZpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdXRoLWluc3RydWN0aW9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtc29mdCwgI2Y1ZjNmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uaW5zdHJ1Y3Rpb24taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmluc3RydWN0aW9uLXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmluc3RydWN0aW9uLXRleHQgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1tdXRlZCwgIzY0NzQ4Yik7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi50ZWFjaGVyLXJ1bGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbn1cbi5ydWxlcy1iYWRnZSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG4gIG1hcmdpbjogMDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luOiAzcHggMCAwO1xufVxuLnJ1bGVzLWNvbnRlbnQtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtYmctY2FudmFzLCAjZjhmYWZjKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hdXRoLWJvcmRlciwgI2UyZThmMCk7XG59XG4ucnVsZXMtc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMThweDsgfVxufVxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuLnJ1bGVzLWxlYWQge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLXNlY29uZGFyeSwgIzMzNDE1NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucnVsZXMtY2hlY2tsaXN0IHtcbiAgbWFyZ2luOiAwIDAgMTRweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDExLjVweDtcbiAgICBjb2xvcjogdmFyKC0tYXV0aC1pbmstc2Vjb25kYXJ5LCAjNDc1NTY5KTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG59XG4uY29udGludWUtcnVsZXMtYnRuIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 27476:
/*!************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/login/login.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 15377:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/reset-password/reset-password.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.rules-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  border: 1px solid #d1fae5;\n  color: #065f46;\n}\n\n.rules-callout ion-icon {\n  font-size: 20px;\n  color: #10b981;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n.rules-callout strong {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 800;\n}\n\n.rules-callout small {\n  display: block;\n  font-size: 10px;\n  color: #047857;\n  margin-top: 2px;\n  line-height: 1.5;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSwrQ0FBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVdGOztBQVZFO0VBQVcsZUFBQTtBQWFiOztBQVhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWNGOztBQWJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQWVKOztBQVpBO0VBQ0UsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUFnQkY7O0FBZkU7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFpQko7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBaUJGOztBQWhCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFrQko7O0FBaEJFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBa0JKOztBQWZBO0VBQ0UsZUFBQTtBQWtCRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmF1dGgtaW5zdHJ1Y3Rpb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5pbnN0cnVjdGlvbi1pY29uIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbiAgY29sb3I6ICM2ZDI4ZDk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCBzdHJvbmcge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLCAjMWUxYjRiKTtcbn1cbi5pbnN0cnVjdGlvbi10ZXh0IHAge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luOiAzcHggMCAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLnRlYWNoZXItcnVsZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLXNvZnQsICNmNWYzZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hdXRoLXB1cnBsZS1ib3JkZXIsICNlZGU5ZmUpO1xufVxuLnJ1bGVzLWJhZGdlIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbiAgY29sb3I6ICNmNTllMGI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ucnVsZXMtaGVhZGVyLWNhcmQgaDMge1xuICBmb250LXNpemU6IDEzLjVweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLCAjMWUxYjRiKTtcbiAgbWFyZ2luOiAwO1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIHAge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtbXV0ZWQsICM2NDc0OGIpO1xuICBtYXJnaW46IDNweCAwIDA7XG59XG4ucnVsZXMtY29udGVudC1jYXJkIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1iZy1jYW52YXMsICNmOGZhZmMpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWF1dGgtYm9yZGVyLCAjZTJlOGYwKTtcbn1cbi5ydWxlcy1zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM2ZDI4ZDk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB9XG59XG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBpZnJhbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG4ucnVsZXMtbGVhZCB7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1pbmstc2Vjb25kYXJ5LCAjMzM0MTU1KTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5ydWxlcy1jaGVja2xpc3Qge1xuICBtYXJnaW46IDAgMCAxNHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMThweDtcbiAgbGkge1xuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1hdXRoLWluay1zZWNvbmRhcnksICM0NzU1NjkpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIH1cbn1cbi5ydWxlcy1jYWxsb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFmYWU1O1xuICBjb2xvcjogIzA2NWY0NjtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzEwYjk4MTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDExLjVweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG4gIHNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMwNDc4NTc7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cbi5jb250aW51ZS1ydWxlcy1idG4ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4iXX0= */";

/***/ }),

/***/ 9148:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/seller-register/seller-register.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsK0NBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFWRTtFQUFXLGVBQUE7QUFhYjs7QUFYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFlSjs7QUFaQTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBZ0JGOztBQWZFO0VBQ0UsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0UsZUFBQTtBQWlCRiIsImZpbGUiOiJzZWxsZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdXRoLWluc3RydWN0aW9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtc29mdCwgI2Y1ZjNmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uaW5zdHJ1Y3Rpb24taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmluc3RydWN0aW9uLXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmluc3RydWN0aW9uLXRleHQgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1tdXRlZCwgIzY0NzQ4Yik7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi50ZWFjaGVyLXJ1bGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbn1cbi5ydWxlcy1iYWRnZSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG4gIG1hcmdpbjogMDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luOiAzcHggMCAwO1xufVxuLnJ1bGVzLWNvbnRlbnQtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtYmctY2FudmFzLCAjZjhmYWZjKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hdXRoLWJvcmRlciwgI2UyZThmMCk7XG59XG4ucnVsZXMtc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMThweDsgfVxufVxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuLnJ1bGVzLWxlYWQge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLXNlY29uZGFyeSwgIzMzNDE1NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucnVsZXMtY2hlY2tsaXN0IHtcbiAgbWFyZ2luOiAwIDAgMTRweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDExLjVweDtcbiAgICBjb2xvcjogdmFyKC0tYXV0aC1pbmstc2Vjb25kYXJ5LCAjNDc1NTY5KTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG59XG4uY29udGludWUtcnVsZXMtYnRuIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 1544:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/teacher-register/teacher-register.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.rules-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  border: 1px solid #d1fae5;\n  color: #065f46;\n}\n\n.rules-callout ion-icon {\n  font-size: 20px;\n  color: #10b981;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n.rules-callout strong {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 800;\n}\n\n.rules-callout small {\n  display: block;\n  font-size: 10px;\n  color: #047857;\n  margin-top: 2px;\n  line-height: 1.5;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLCtDQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVkU7RUFBVyxlQUFBO0FBYWI7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBYkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBZUo7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWVGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQWdCRjs7QUFmRTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQWlCSjs7QUFkQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBaEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFoQkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBZkE7RUFDRSxlQUFBO0FBa0JGIiwiZmlsZSI6InRlYWNoZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdXRoLWluc3RydWN0aW9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtc29mdCwgI2Y1ZjNmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uaW5zdHJ1Y3Rpb24taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmluc3RydWN0aW9uLXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmluc3RydWN0aW9uLXRleHQgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1tdXRlZCwgIzY0NzQ4Yik7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi50ZWFjaGVyLXJ1bGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbn1cbi5ydWxlcy1iYWRnZSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG4gIG1hcmdpbjogMDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luOiAzcHggMCAwO1xufVxuLnJ1bGVzLWNvbnRlbnQtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtYmctY2FudmFzLCAjZjhmYWZjKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hdXRoLWJvcmRlciwgI2UyZThmMCk7XG59XG4ucnVsZXMtc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMThweDsgfVxufVxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuLnJ1bGVzLWxlYWQge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLXNlY29uZGFyeSwgIzMzNDE1NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucnVsZXMtY2hlY2tsaXN0IHtcbiAgbWFyZ2luOiAwIDAgMTRweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDExLjVweDtcbiAgICBjb2xvcjogdmFyKC0tYXV0aC1pbmstc2Vjb25kYXJ5LCAjNDc1NTY5KTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG59XG4ucnVsZXMtY2FsbG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2VjZmRmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZmFlNTtcbiAgY29sb3I6ICMwNjVmNDY7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxMGI5ODE7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMS41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMDQ3ODU3O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG4uY29udGludWUtcnVsZXMtYnRuIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 35838:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/two-factor/two-factor.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".auth-instruction-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n  margin-bottom: 18px;\n}\n\n.instruction-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #6d28d9;\n  display: grid;\n  place-items: center;\n  font-size: 19px;\n  flex-shrink: 0;\n}\n\n.instruction-text {\n  display: grid;\n}\n\n.instruction-text strong {\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--auth-ink, #1e1b4b);\n}\n\n.instruction-text p {\n  font-size: 11px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n  line-height: 1.6;\n}\n\n.teacher-rules-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.rules-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--auth-purple-soft, #f5f3ff);\n  border: 1px solid var(--auth-purple-border, #ede9fe);\n}\n\n.rules-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--auth-purple-border, #ede9fe);\n  color: #f59e0b;\n  display: grid;\n  place-items: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.rules-header-card h3 {\n  font-size: 13.5px;\n  font-weight: 900;\n  color: var(--auth-ink, #1e1b4b);\n  margin: 0;\n}\n\n.rules-header-card p {\n  font-size: 10.5px;\n  color: var(--auth-muted, #64748b);\n  margin: 3px 0 0;\n}\n\n.rules-content-card {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--auth-bg-canvas, #f8fafc);\n  border: 1.5px solid var(--auth-border, #e2e8f0);\n}\n\n.rules-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 800;\n  color: #6d28d9;\n  margin-bottom: 12px;\n}\n\n.rules-section-title ion-icon {\n  font-size: 18px;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  padding-top: 56.25%;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.rules-lead {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #334155);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.rules-checklist {\n  margin: 0 0 14px;\n  padding-inline-start: 18px;\n}\n\n.rules-checklist li {\n  font-size: 11.5px;\n  color: var(--auth-ink-secondary, #475569);\n  line-height: 1.8;\n}\n\n.rules-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  border: 1px solid #d1fae5;\n  color: #065f46;\n}\n\n.rules-callout ion-icon {\n  font-size: 20px;\n  color: #10b981;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n.rules-callout strong {\n  display: block;\n  font-size: 11.5px;\n  font-weight: 800;\n}\n\n.rules-callout small {\n  display: block;\n  font-size: 10px;\n  color: #047857;\n  margin-top: 2px;\n  line-height: 1.5;\n}\n\n.continue-rules-btn {\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by1mYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLCtDQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVkU7RUFBVyxlQUFBO0FBYWI7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBYkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBZUo7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWVGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQWdCRjs7QUFmRTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQWlCSjs7QUFkQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFpQkY7O0FBaEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFoQkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBZkE7RUFDRSxlQUFBO0FBa0JGIiwiZmlsZSI6InR3by1mYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hdXRoLWluc3RydWN0aW9uLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXV0aC1wdXJwbGUtc29mdCwgI2Y1ZjNmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uaW5zdHJ1Y3Rpb24taWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmluc3RydWN0aW9uLXRleHQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmluc3RydWN0aW9uLXRleHQgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG59XG4uaW5zdHJ1Y3Rpb24tdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tYXV0aC1tdXRlZCwgIzY0NzQ4Yik7XG4gIG1hcmdpbjogM3B4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi50ZWFjaGVyLXJ1bGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hdXRoLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXV0aC1wdXJwbGUtYm9yZGVyLCAjZWRlOWZlKTtcbn1cbi5ydWxlcy1iYWRnZSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtcHVycGxlLWJvcmRlciwgI2VkZTlmZSk7XG4gIGNvbG9yOiAjZjU5ZTBiO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnJ1bGVzLWhlYWRlci1jYXJkIGgzIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLWluaywgIzFlMWI0Yik7XG4gIG1hcmdpbjogMDtcbn1cbi5ydWxlcy1oZWFkZXItY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1hdXRoLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luOiAzcHggMCAwO1xufVxuLnJ1bGVzLWNvbnRlbnQtY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWF1dGgtYmctY2FudmFzLCAjZjhmYWZjKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hdXRoLWJvcmRlciwgI2UyZThmMCk7XG59XG4ucnVsZXMtc2VjdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMThweDsgfVxufVxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuLnJ1bGVzLWxlYWQge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLWF1dGgtaW5rLXNlY29uZGFyeSwgIzMzNDE1NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucnVsZXMtY2hlY2tsaXN0IHtcbiAgbWFyZ2luOiAwIDAgMTRweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XG4gIGxpIHtcbiAgICBmb250LXNpemU6IDExLjVweDtcbiAgICBjb2xvcjogdmFyKC0tYXV0aC1pbmstc2Vjb25kYXJ5LCAjNDc1NTY5KTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG59XG4ucnVsZXMtY2FsbG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2VjZmRmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZmFlNTtcbiAgY29sb3I6ICMwNjVmNDY7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICMxMGI5ODE7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG4gIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMS41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMDQ3ODU3O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG4uY29udGludWUtcnVsZXMtYnRuIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuIl19 */";

/***/ }),

/***/ 25829:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/admin-register/admin-register.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"Register()\" dir=\"rtl\">\r\n  <ion-list>\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">ایمیل</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"email\"> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">رمز عبور</ion-label>\r\n      <ion-input formControlName=\"password\" type=\"password\"> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">شماره موبایل</ion-label>\r\n      <ion-input formControlName=\"phoneNumber\" type=\"text\"> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">نام</ion-label>\r\n      <ion-input formControlName=\"name\" type=\"text\"> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">نام خانوادگی</ion-label>\r\n      <ion-input formControlName=\"family\" type=\"text\"> </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">آدرس</ion-label>\r\n      <ion-textarea formControlName=\"address\" type=\"text\"> </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">کد ملی</ion-label>\r\n      <ion-textarea formControlName=\"nationalCode\" type=\"text\"> </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">شماره شناسنامه</ion-label>\r\n      <ion-textarea formControlName=\"identificationCode\" type=\"text\"> </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\r\n      <ion-label position=\"floating\" color=\"primary\">تاریخ تولد</ion-label>\r\n      <ion-textarea formControlName=\"birthDay\" type=\"date\"> </ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row class=\"ion-margin-top\">\r\n    <ion-col size=\"12\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        type=\"submit\"\r\n        expand=\"block\"\r\n        [disabled]=\"!registerForm.valid\"\r\n        >عضویت</ion-button\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n";

/***/ }),

/***/ 10555:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/buyer-register/buyer-register.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"registerForm\"\n  (ngSubmit)=\"Register()\"\n  (keyup.enter)=\"Register()\"\n>\n  <ion-list>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label position=\"floating\">{{ 'auth.firstName' | translate }}</ion-label>\n          <ion-input\n            [placeholder]=\"'auth.firstNamePlaceholder' | translate\"\n            formControlName=\"name\"\n            type=\"text\"\n            autocomplete=\"given-name\"\n            enterkeyhint=\"next\"\n          >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label position=\"floating\">{{ 'auth.lastName' | translate }}</ion-label>\n          <ion-input\n            [placeholder]=\"'auth.lastNamePlaceholder' | translate\"\n            formControlName=\"family\"\n            type=\"text\"\n            autocomplete=\"family-name\"\n            enterkeyhint=\"next\"\n          >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n      <ion-label position=\"floating\">{{ 'auth.mobile' | translate }}</ion-label>\n      <ion-input\n        [placeholder]=\"'auth.mobilePlaceholder' | translate\"\n        formControlName=\"phoneNumber\"\n        type=\"tel\"\n        inputmode=\"tel\"\n        autocomplete=\"tel\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n      <ion-label position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\n      <ion-input\n        [placeholder]=\"'auth.emailPlaceholder' | translate\"\n        formControlName=\"email\"\n        type=\"email\"\n        inputmode=\"email\"\n        autocomplete=\"username\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n      <ion-label position=\"floating\">{{ 'auth.password' | translate }}</ion-label>\n      <ion-input\n        [placeholder]=\"'auth.passwordPlaceholder' | translate\"\n        formControlName=\"password\"\n        [type]=\"inputType\"\n        autocomplete=\"new-password\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n\n      <ion-buttons slot=\"end\">\n        <ion-button\n          type=\"button\"\n          *ngIf=\"isShow\"\n          (click)=\"togglePasswordText()\"\n          aria-label=\"نمایش رمز\">\n          <ion-icon slot=\"icon-only\" color=\"medium\" name=\"eye-outline\"></ion-icon>\n        </ion-button>\n        <ion-button\n          type=\"button\"\n          *ngIf=\"!isShow\"\n          (click)=\"toggleTextPassword()\"\n          aria-label=\"مخفی کردن رمز\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"eye-off-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"gift-outline\"></ion-icon>\n      <ion-label position=\"floating\">{{ 'auth.referralCode' | translate }}</ion-label>\n      <ion-input\n        [placeholder]=\"'auth.referralPlaceholder' | translate\"\n        formControlName=\"inviteId\"\n        type=\"number\"\n        inputmode=\"numeric\"\n        enterkeyhint=\"done\"\n      >\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!registerForm.valid\"\n      >{{ 'account.freeSignup' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n";

/***/ }),

/***/ 34076:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/forget-password/forget-password.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"forgetPasswordForm\"\n  (ngSubmit)=\"ForgetPassword()\"\n  (keyup.enter)=\"ForgetPassword()\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"mail-unread-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>بازیابی سریع رمز عبور</strong>\n      <p>ایمیل حساب کاربری خود را وارد کنید تا پیوند تغییر رمز عبور فوراً برای شما ارسال شود.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n      <ion-label position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\n      <ion-input\n        [placeholder]=\"'auth.emailPlaceholder' | translate\"\n        formControlName=\"email\"\n        type=\"email\"\n        autocomplete=\"email\"\n        inputmode=\"email\"\n        enterkeyhint=\"done\"\n      >\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!forgetPasswordForm.valid\"\n      >{{ 'auth.sendRequest' | translate }}</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n";

/***/ }),

/***/ 88916:
/*!**************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/invite/invite.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"registerForm\"\n  (ngSubmit)=\"Register()\"\n  dir=\"rtl\"\n  (keyup.enter)=\"Register()\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"gift-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>عضویت با دعوت‌نامه همکار</strong>\n      <p>کد دعوت شما معتبر است. مشخصات خود را تکمیل نمایید تا به جمع همکاران اول آموز بپیوندید.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label position=\"floating\">نام</ion-label>\n          <ion-input\n            placeholder=\"نام خود را وارد کنید\"\n            formControlName=\"name\"\n            type=\"text\"\n            autocomplete=\"given-name\"\n            enterkeyhint=\"next\"\n          >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\" size-md=\"6\">\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label position=\"floating\">نام خانوادگی</ion-label>\n          <ion-input\n            placeholder=\"نام خانوادگی خود را وارد کنید\"\n            formControlName=\"family\"\n            type=\"text\"\n            autocomplete=\"family-name\"\n            enterkeyhint=\"next\"\n          >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n      <ion-label position=\"floating\">شماره موبایل</ion-label>\n      <ion-input\n        placeholder=\"شماره موبایل خود را وارد کنید\"\n        formControlName=\"phoneNumber\"\n        type=\"tel\"\n        inputmode=\"tel\"\n        autocomplete=\"tel\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n      <ion-label position=\"floating\">ایمیل</ion-label>\n      <ion-input\n        placeholder=\"ایمیل خود را وارد کنید\"\n        formControlName=\"email\"\n        type=\"email\"\n        inputmode=\"email\"\n        autocomplete=\"email\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n      <ion-label position=\"floating\">رمز عبور</ion-label>\n      <ion-input\n        placeholder=\"رمز عبور دلخواه را وارد کنید\"\n        formControlName=\"password\"\n        [type]=\"inputType\"\n        autocomplete=\"new-password\"\n        enterkeyhint=\"done\"\n      >\n      </ion-input>\n\n      <ion-buttons slot=\"end\">\n        <ion-button\n          type=\"button\"\n          *ngIf=\"isShow\"\n          (click)=\"togglePasswordText()\"\n          aria-label=\"نمایش رمز\">\n          <ion-icon slot=\"icon-only\" color=\"medium\" name=\"eye-outline\"></ion-icon>\n        </ion-button>\n        <ion-button\n          type=\"button\"\n          *ngIf=\"!isShow\"\n          (click)=\"toggleTextPassword()\"\n          aria-label=\"مخفی کردن رمز\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"eye-off-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!registerForm.valid\"\n      >عضویت و ورود به سامانه</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n";

/***/ }),

/***/ 66124:
/*!************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/login/login.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<form\r\n  [formGroup]=\"loginForm\"\r\n  (ngSubmit)=\"Login()\"\r\n  *ngIf=\"!twoFactor && !chooseDelivery\"\r\n>\r\n  <ion-list>\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\r\n      <ion-label color=\"light\" position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\r\n      <ion-input\r\n        formControlName=\"email\"\r\n        type=\"email\"\r\n        [placeholder]=\"'auth.emailPlaceholder' | translate\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n      <ion-label color=\"light\" position=\"floating\">{{ 'auth.password' | translate }}</ion-label>\r\n      <ion-input\r\n        [placeholder]=\"'auth.passwordPlaceholder' | translate\"\r\n        formControlName=\"password\"\r\n        [type]=\"inputType\"\r\n      >\r\n      </ion-input>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button *ngIf=\"isShow\" (click)=\"togglePasswordText()\">\r\n          <ion-icon slot=\"end\" color=\"medium\" name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!isShow\" (click)=\"toggleTextPassword()\">\r\n          <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row class=\"ion-margin-top\">\r\n    <ion-col size=\"12\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        type=\"submit\"\r\n        expand=\"block\"\r\n        [disabled]=\"!loginForm.valid || sending\"\r\n        >{{ 'account.signIn' | translate }}</ion-button\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n\r\n<section *ngIf=\"chooseDelivery\" class=\"delivery-choice\" aria-labelledby=\"delivery-title\">\r\n  <h3 id=\"delivery-title\">{{ 'auth.deliveryTitle' | translate }}</h3>\r\n  <p>{{ 'auth.deliveryPrompt' | translate }}</p>\r\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"sendCode('email')\" [disabled]=\"sending\">\r\n    <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\r\n    {{ 'auth.deliveryEmail' | translate }} · <span dir=\"ltr\">{{ loginForm.value.email }}</span>\r\n  </ion-button>\r\n  <ion-button expand=\"block\" (click)=\"sendCode('sms')\" [disabled]=\"sending\">\r\n    <ion-icon slot=\"start\" name=\"chatbubble-outline\"></ion-icon>\r\n    {{ 'auth.deliverySms' | translate }} · شماره ثبت‌شده حساب\r\n  </ion-button>\r\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"sendCode('device')\" [disabled]=\"sending\">\r\n    <ion-icon slot=\"start\" name=\"laptop-outline\"></ion-icon>\r\n    {{ 'auth.deliveryDevice' | translate }}\r\n  </ion-button>\r\n  <p>در پنل یکی از دو ادمین واردشده، ایمیل این حساب را به‌عنوان مقصد کد انتخاب کنید؛ کد باید برای حسابی ساخته شود که قصد ورود به آن را دارید.</p>\r\n  <ion-button fill=\"clear\" (click)=\"chooseDelivery = false; twoFactorChannel = undefined\" [disabled]=\"sending\">{{ 'auth.deliveryBack' | translate }}</ion-button>\r\n</section>\r\n\r\n<form\r\n  [formGroup]=\"loginForm\"\r\n  (ngSubmit)=\"Login2()\"\r\n  *ngIf=\"twoFactor\"\r\n>\r\n  <p class=\"delivery-note\" aria-live=\"polite\">{{ deliveryNotice }}</p>\r\n  <ion-list>\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\r\n      <ion-label color=\"light\" position=\"floating\">{{ 'auth.email' | translate }}</ion-label>\r\n      <ion-input\r\n        formControlName=\"email\"\r\n        type=\"email\"\r\n        [readonly]=\"true\"\r\n        [placeholder]=\"'auth.emailPlaceholder' | translate\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n      <ion-label color=\"light\" position=\"floating\">{{ 'auth.password' | translate }}</ion-label>\r\n      <ion-input\r\n        [placeholder]=\"'auth.passwordPlaceholder' | translate\"\r\n        formControlName=\"password\"\r\n        [type]=\"inputType\"\r\n        [readonly]=\"true\"\r\n      >\r\n      </ion-input>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button *ngIf=\"isShow\" (click)=\"togglePasswordText()\">\r\n          <ion-icon slot=\"end\" color=\"medium\" name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!isShow\" (click)=\"toggleTextPassword()\">\r\n          <ion-icon slot=\"end\" color=\"medium\" name=\"eye-off\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"ion-margin\">\r\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n      <ion-label color=\"light\" position=\"floating\">{{ 'auth.secondPassword' | translate }}</ion-label>\r\n      <ion-input\r\n        formControlName=\"token2\"\r\n        type=\"text\"\r\n        inputmode=\"numeric\"\r\n        autocomplete=\"one-time-code\"\r\n        [placeholder]=\"'auth.secondPasswordPlaceholder' | translate\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-row class=\"ion-margin-top\">\r\n    <ion-col size=\"12\">\r\n      <ion-button\r\n        shape=\"round\"\r\n        type=\"submit\"\r\n        expand=\"block\"\r\n        [disabled]=\"!loginForm.valid || !loginForm.value.token2?.trim() || sending\"\r\n        >{{ 'account.signIn' | translate }}</ion-button\r\n      >\r\n    </ion-col>\r\n  </ion-row>\r\n  <p class=\"delivery-note\" *ngIf=\"deliveryDisabled\">{{ 'auth.deliveryEmailDisabled' | translate }}</p>\r\n  <ion-button *ngIf=\"twoFactorChannel !== 'device'\" fill=\"outline\" expand=\"block\" (click)=\"sendCode(twoFactorChannel)\" [disabled]=\"sending\">ارسال دوباره کد</ion-button>\r\n  <ion-button fill=\"clear\" expand=\"block\" (click)=\"twoFactor = false; chooseDelivery = true\" [disabled]=\"sending\">{{ 'auth.deliveryChange' | translate }}</ion-button>\r\n</form>\r\n";

/***/ }),

/***/ 29616:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/reset-password/reset-password.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"resetPasswordForm\"\n  (ngSubmit)=\"ResetPassword()\"\n  dir=\"rtl\"\n  (keyup.enter)=\"ResetPassword()\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"key-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>انتخاب رمز عبور جدید</strong>\n      <p>لطفاً یک رمز عبور مطمئن (حداقل ۶ کاراکتر) وارد نمایید و آن را در فیلد دوم تکرار کنید.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n      <ion-label position=\"floating\">رمز عبور جدید</ion-label>\n      <ion-input\n        formControlName=\"password\"\n        [type]=\"inputType1\"\n        autocomplete=\"new-password\"\n        placeholder=\"رمز عبور جدید را وارد کنید\"\n        enterkeyhint=\"next\"\n      >\n      </ion-input>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          type=\"button\"\n          *ngIf=\"isShow1\"\n          (click)=\"togglePasswordText1()\"\n          aria-label=\"نمایش رمز\">\n          <ion-icon slot=\"icon-only\" color=\"medium\" name=\"eye-outline\"></ion-icon>\n        </ion-button>\n        <ion-button\n          type=\"button\"\n          *ngIf=\"!isShow1\"\n          (click)=\"toggleTextPassword1()\"\n          aria-label=\"مخفی کردن رمز\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"eye-off-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"checkmark-done-circle-outline\"></ion-icon>\n      <ion-label position=\"floating\">تکرار رمز عبور جدید</ion-label>\n      <ion-input\n        placeholder=\"رمز عبور را مجدداً وارد کنید\"\n        formControlName=\"rePassword\"\n        [type]=\"inputType2\"\n        autocomplete=\"new-password\"\n        enterkeyhint=\"done\"\n      >\n      </ion-input>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          type=\"button\"\n          *ngIf=\"isShow2\"\n          (click)=\"togglePasswordText2()\"\n          aria-label=\"نمایش رمز\">\n          <ion-icon slot=\"icon-only\" color=\"medium\" name=\"eye-outline\"></ion-icon>\n        </ion-button>\n        <ion-button\n          type=\"button\"\n          *ngIf=\"!isShow2\"\n          (click)=\"toggleTextPassword2()\"\n          aria-label=\"مخفی کردن رمز\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"eye-off-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!resetPasswordForm.valid\"\n      >بازنشانی و ذخیره رمز جدید</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n";

/***/ }),

/***/ 8591:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/seller-register/seller-register.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"registerForm\"\n  (ngSubmit)=\"Register()\"\n  dir=\"rtl\"\n  *ngIf=\"isInfoShow\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"storefront-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>درخواست همکاری تأمین‌کننده و فروشگاه آموزشی</strong>\n      <p>مشخصات خود را وارد نمایید تا درخواست عرضه محصولات کلاسی و کمک‌آموزشی شما بررسی شود.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"card-outline\"></ion-icon>\n      <ion-label position=\"floating\">کد ملی</ion-label>\n      <ion-input\n        placeholder=\"کد ملی ۱۰ رقمی خود را وارد کنید\"\n        formControlName=\"nationalCode\"\n        type=\"text\"\n        inputmode=\"numeric\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\n      <ion-label position=\"floating\">شماره شناسنامه</ion-label>\n      <ion-input\n        placeholder=\"شماره شناسنامه خود را وارد کنید\"\n        formControlName=\"identificationCode\"\n        type=\"text\"\n        inputmode=\"numeric\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item dir=\"ltr\">\n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n      <ion-datetime\n        min=\"1330-01-01\"\n        max=\"1400-01-01\"\n        formControlName=\"birthDay\"\n        display-format=\"YYYY.MM.DD\"\n      >\n        <span slot=\"title\">تاریخ تولد</span>\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\n      <ion-label position=\"floating\">آدرس و محل فعالیت</ion-label>\n      <ion-textarea\n        placeholder=\"نشانی پستی محل فعالیت یا تولید محصولات آموزشی\"\n        formControlName=\"address\"\n        rows=\"2\"\n      >\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!registerForm.valid\"\n      >ثبت درخواست همکاری فروشگاهی</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        color=\"medium\"\n        shape=\"round\"\n        (click)=\"isInfoShow = !isInfoShow\"\n        fill=\"clear\"\n        expand=\"block\"\n      >\n        <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n        مشاهده قوانین و شرایط تأمین‌کنندگان\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n\n<div *ngIf=\"!isInfoShow\" dir=\"rtl\" class=\"teacher-rules-container\">\n  <div class=\"rules-header-card\">\n    <div class=\"rules-badge\">\n      <ion-icon name=\"cube-outline\"></ion-icon>\n    </div>\n    <div>\n      <h3>عرضه محصولات و ملزومات کلاسی در اول آموز</h3>\n      <p>فروشگاه اختصاصی ابزارها، کاربرگ‌ها و کیت‌های کمک‌آموزشی معلمان ابتدایی</p>\n    </div>\n  </div>\n\n  <div class=\"rules-content-card\">\n    <div class=\"rules-section-title\">\n      <ion-icon name=\"videocam-outline\"></ion-icon>\n      <span>ویدیو راهنمای همکاری فروشندگان</span>\n    </div>\n\n    <div class=\"h_iframe-aparat_embed_frame\">\n      <iframe\n        [src]=\"checkURL()\"\n        title=\"ویدیو آموزش عضویت فروشنده اول آموز\"\n        allowfullscreen=\"true\"\n        webkitallowfullscreen=\"true\"\n        mozallowfullscreen=\"true\"\n      ></iframe>\n    </div>\n\n    <div class=\"rules-text-body\">\n      <p class=\"rules-lead\">\n        تولیدکنندگان، ناشران و عرضه‌کنندگان ملزومات کلاسی، کیت‌های دست‌ورزی ریاضی، فلش‌کارت‌های نشانه‌ها و کاربرگ‌های استاندارد می‌توانند محصولات فیزیکی و دانلودی خود را در فروشگاه تخصصی اول آموز به هزاران آموزگار در سراسر کشور عرضه نمایند.\n      </p>\n\n      <h4>مدارک لازم جهت تأیید حساب فروشگاهی:</h4>\n      <ul class=\"rules-checklist\">\n        <li>تصویر کارت ملی و اطلاعات هویتی معتبر</li>\n        <li>معرفی محصولات، تصاویر باکیفیت و نمونه کارها</li>\n        <li>تعهد کیفیت و پشتیبانی کالاهای ارسالی برای معلمان</li>\n      </ul>\n    </div>\n  </div>\n\n  <ion-button\n    class=\"continue-rules-btn\"\n    (click)=\"isInfoShow = !isInfoShow\"\n    expand=\"block\"\n    shape=\"round\"\n  >\n    پذیرفتن شرایط و تکمیل فرم درخواست\n    <ion-icon slot=\"end\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-button>\n</div>\n";

/***/ }),

/***/ 48925:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/teacher-register/teacher-register.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"registerForm\"\n  (ngSubmit)=\"Register()\"\n  dir=\"rtl\"\n  *ngIf=\"isInfoShow\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"school-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>همکاری آموزشی با اول آموز</strong>\n      <p>مشخصات هویتی و ارتباطی خود را وارد نمایید تا درخواست همکاری شما بررسی شود.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"card-outline\"></ion-icon>\n      <ion-label position=\"floating\">کد ملی</ion-label>\n      <ion-input\n        placeholder=\"کد ملی ۱۰ رقمی خود را وارد کنید\"\n        formControlName=\"nationalCode\"\n        type=\"text\"\n        inputmode=\"numeric\"\n        maxlength=\"10\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\n      <ion-label position=\"floating\">شماره شناسنامه</ion-label>\n      <ion-input\n        placeholder=\"شماره شناسنامه خود را وارد کنید\"\n        formControlName=\"identificationCode\"\n        type=\"text\"\n        inputmode=\"numeric\"\n      >\n      </ion-input>\n    </ion-item>\n\n    <ion-item dir=\"ltr\">\n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n      <ion-datetime\n        formControlName=\"birthDay\"\n        display-format=\"YYYY-MM-DD\"\n      >\n        <span slot=\"title\">تاریخ تولد</span>\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\n      <ion-label position=\"floating\">آدرس و محل سکونت</ion-label>\n      <ion-textarea\n        placeholder=\"استان، شهر و آدرس پستی خود را وارد کنید\"\n        formControlName=\"address\"\n        rows=\"2\"\n      >\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!registerForm.valid\"\n      >ثبت درخواست همکاری آموزشی</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        color=\"medium\"\n        shape=\"round\"\n        (click)=\"isInfoShow = !isInfoShow\"\n        fill=\"clear\"\n        expand=\"block\"\n      >\n        <ion-icon slot=\"start\" name=\"information-circle-outline\"></ion-icon>\n        مشاهده شرایط و قوانین همکاری آموزگاران\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n\n<div *ngIf=\"!isInfoShow\" dir=\"rtl\" class=\"teacher-rules-container\">\n  <div class=\"rules-header-card\">\n    <div class=\"rules-badge\">\n      <ion-icon name=\"sparkles\"></ion-icon>\n    </div>\n    <div>\n      <h3>همکاری با اول آموز به عنوان آموزگار و مؤلف</h3>\n      <p>مرجع تخصصی توانمندسازی معلمان و تولید محتوای استاندارد مقطع ابتدایی</p>\n    </div>\n  </div>\n\n  <div class=\"rules-content-card\">\n    <div class=\"rules-section-title\">\n      <ion-icon name=\"videocam-outline\"></ion-icon>\n      <span>راهنمای ویدیویی ثبت‌نام و عضویت مدرسان</span>\n    </div>\n\n    <div class=\"h_iframe-aparat_embed_frame\">\n      <iframe\n        [src]=\"checkURL()\"\n        title=\"ویدیو آموزش عضویت مدرس اول آموز\"\n        allowfullscreen=\"true\"\n        webkitallowfullscreen=\"true\"\n        mozallowfullscreen=\"true\"\n      ></iframe>\n    </div>\n\n    <div class=\"rules-text-body\">\n      <p class=\"rules-lead\">\n        <strong>اول آموز</strong> یک پلتفرم تخصصی آموزشی در حوزه توانمندسازی آموزگاران و معلمان مقطع ابتدایی، روش‌های نوین تدریس، تولید محتوای کمک‌آموزشی، طرح‌درس‌ها و کاربرگ‌های استاندارد می‌باشد که از آموزگاران، مؤلفان و سرگروه‌های آموزشی باسابقه جهت ارائه دوره‌ها و ملزومات آموزشی دعوت به همکاری می‌نماید.\n      </p>\n\n      <h4>موارد لازم جهت شروع همکاری:</h4>\n      <ul class=\"rules-checklist\">\n        <li>تصویر کارت ملی یا شناسنامه معتبر</li>\n        <li>شماره تلفن همراه و راه‌های ارتباطی فعال</li>\n        <li>عنوان و سرفصل دوره آموزشی یا پکیج کاربرگ‌ها</li>\n        <li>ویدیوی نمونه معرفی دوره و شیوه تدریس (با کیفیت صدا و تصویر استاندارد)</li>\n        <li>رزومه تدریس در مقطع ابتدایی یا سوابق تألیف</li>\n      </ul>\n\n      <div class=\"rules-callout\">\n        <ion-icon name=\"shield-checkmark\"></ion-icon>\n        <div>\n          <strong>تضمین حقوق مؤلفان و مدرسان</strong>\n          <small>کلیه حقوق مادی و معنوی محتواهای ارائه‌شده بر اساس قرارداد رسمی همکاری فی‌مابین حفظ و تضمین می‌گردد.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ion-button\n    class=\"continue-rules-btn\"\n    (click)=\"isInfoShow = !isInfoShow\"\n    expand=\"block\"\n    shape=\"round\"\n  >\n    پذیرفتن شرایط و تکمیل فرم درخواست\n    <ion-icon slot=\"end\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-button>\n</div>\n";

/***/ }),

/***/ 32944:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/components/auth/account/two-factor/two-factor.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<form\n  [formGroup]=\"passwordForm\"\n  (ngSubmit)=\"Login2()\"\n  dir=\"rtl\"\n  (keyup.enter)=\"Login2()\"\n>\n  <div class=\"auth-instruction-box\">\n    <div class=\"instruction-icon\">\n      <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n    </div>\n    <div class=\"instruction-text\">\n      <strong>تأیید امنیتی ورود</strong>\n      <p>جهت حفاظت بیشتر از حساب کاربری، لطفاً رمز عبور مرحله دوم یا کد تأیید خود را وارد نمایید.</p>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n      <ion-label position=\"floating\">رمز عبور / کد تأیید</ion-label>\n      <ion-input\n        formControlName=\"password\"\n        [type]=\"inputType\"\n        placeholder=\"رمز عبور را وارد کنید\"\n        enterkeyhint=\"done\"\n      >\n      </ion-input>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          type=\"button\"\n          *ngIf=\"isShow\"\n          (click)=\"togglePasswordText()\"\n          aria-label=\"نمایش رمز\">\n          <ion-icon slot=\"icon-only\" color=\"medium\" name=\"eye-outline\"></ion-icon>\n        </ion-button>\n        <ion-button\n          type=\"button\"\n          *ngIf=\"!isShow\"\n          (click)=\"toggleTextPassword()\"\n          aria-label=\"مخفی کردن رمز\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"eye-off-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button\n        shape=\"round\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"!passwordForm.valid\"\n      >ورود به پنل کاربری</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_view_components_auth_auth_module_ts.js.map