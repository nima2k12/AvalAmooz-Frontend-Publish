"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_auth_external_external_module_ts"],{

/***/ 96131:
/*!**************************************************************!*\
  !*** ./src/app/data/model/account/IAccountResponseResult.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountResponseResult": () => (/* binding */ AccountResponseResult)
/* harmony export */ });
class AccountResponseResult {
    constructor(token, roles) {
        this.token = token;
        this.roles = roles;
    }
}


/***/ }),

/***/ 5092:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/auth/external/external-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalRoutingModule": () => (/* binding */ ExternalRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _external_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external.component */ 45029);




const routes = [{ path: '', component: _external_component__WEBPACK_IMPORTED_MODULE_0__.ExternalComponent }];
let ExternalRoutingModule = class ExternalRoutingModule {
};
ExternalRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ExternalRoutingModule);



/***/ }),

/***/ 45029:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/auth/external/external.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalComponent": () => (/* binding */ ExternalComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _external_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external.component.html?ngResource */ 13137);
/* harmony import */ var _external_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external.component.scss?ngResource */ 23995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_model_account_IAccountResponseResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/model/account/IAccountResponseResult */ 96131);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../data/model/account/RegisterModel */ 73927);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);




/* eslint-disable @typescript-eslint/naming-convention */












 // import { ReCaptchaV3Service } from 'ngx-captcha';


let ExternalComponent = class ExternalComponent {
  constructor(activatedRoute, router, accountService, toastController, loadingController, courseService, // private reCaptchaV3Service: ReCaptchaV3Service,
  fb, orderService) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.accountService = accountService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.courseService = courseService;
    this.fb = fb;
    this.orderService = orderService;
    this.isRegister = false;
    this.inputType = 'password';
    this.isShow = true;
    this.submitting = false;
    this.googleSessionExpired = false;
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(15)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(100)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(50)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(100)]],
      inviteId: ['', []] // address: ['', [Validators.required, Validators.maxLength(1000)]]

    });
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    _core_common_GAccount__WEBPACK_IMPORTED_MODULE_11__.GAccount.SignOut();
    this.activatedRoute.queryParams.subscribe(query => {
      const Admin = query.Admin;
      const Buyer = query.Buyer;
      const Seller = query.Seller;
      const SuperAdmin = query.SuperAdmin;
      const Teacher = query.Teacher;
      const token = query.token;
      const Email = query.email;
      const firstName = query.firstName;
      const lastname = query.lastname;

      if (token !== undefined) {
        const roles = new Map();

        if (Admin !== undefined) {
          roles.set('Admin', Admin === 'True' ? true : false);
        }

        if (Buyer !== undefined) {
          roles.set('Buyer', Buyer === 'True' ? true : false);
        }

        if (Seller !== undefined) {
          roles.set('Seller', Seller === 'True' ? true : false);
        }

        if (SuperAdmin !== undefined) {
          roles.set('SuperAdmin', SuperAdmin === 'True' ? true : false);
        }

        if (Teacher !== undefined) {
          roles.set('Teacher', Teacher === 'True' ? true : false);
        }

        const res = new _data_model_account_IAccountResponseResult__WEBPACK_IMPORTED_MODULE_7__.AccountResponseResult(token, roles);
        _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.TokenRolesInit2(res);
        this.afterLogin();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'با موفقیت وارد شدید');
        this.loginReturnUrl();
      } else {
        if (Email === undefined) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.HomeUrl);
        } else {
          let ignoreFirstName = false;
          let ignoreLastName = false;

          if (firstName === undefined) {
            ignoreFirstName = true;
          }

          if (lastname === undefined) {
            ignoreLastName = true;
          }

          this.registerForm.setValue({
            phoneNumber: '',
            email: Email,
            password: '',
            name: ignoreFirstName ? '' : firstName,
            family: ignoreLastName ? '' : lastname,
            inviteId: ''
          });
          this.isRegister = true;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        }
      }
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
    if (!this.registerForm.valid || this.submitting || this.googleSessionExpired) {
      return;
    }

    const value = this.registerForm.getRawValue();
    const invitation = Number(value.inviteId);
    const inviteId = Number.isInteger(invitation) && invitation > 0 ? invitation : 0;
    this.submitting = true;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.ExternalRegister(new _data_model_account_RegisterModel__WEBPACK_IMPORTED_MODULE_10__.RegisterModel(String(value.phoneNumber), value.password, value.email.trim(), value.name, value.family, '', inviteId)).subscribe({
      next: result => {
        this.submitting = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.TokenRolesInit(result, value.email.trim());
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.MyCourseIds = [];
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.setCartCoursesCount(0);
        this.RegisterStatus(200);
      },
      error: () => {
        this.submitting = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        this.RegisterStatus(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService.ErrorMessage);
      }
    });
  }

  RegisterStatus(code, responsMsg = '') {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (responsMsg?.code === 'external_registration_required' || responsMsg?.code === 'external_identity_mismatch') {
        _this.googleSessionExpired = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, 'اعتبار ورود گوگل پایان یافته یا با این ایمیل مطابقت ندارد؛ دوباره با گوگل وارد شوید.');
        return;
      }

      if (responsMsg?.code === 'admin_password_required') {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(_this.toastController, 'برای حساب ادمین، رمز عبور و سپس رمز دوم را وارد کنید.');
        void _this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.AccountUrl);
        return;
      }

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

  afterLogin() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.orderService.GetUserCart().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
          if (res.data.courses == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.setCartCoursesCount(0);
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.setCartCoursesCount(res.data.courses.length);
          }
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.setCartCoursesCount(0);
        }
      });

      _this2.courseService.GetUserCoursesId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.MyCourseIds = res.data;
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.MyCourseIds = [];
        }
      });
    })();
  }

  loginReturnUrl() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let returnUrl = '/';

      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'returnUrl') {
          returnUrl = localStorage.getItem('returnUrl');
          localStorage.removeItem('returnUrl');
        }
      }

      _this3.router.navigateByUrl(returnUrl);
    })();
  }

};

ExternalComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__.OrderService
}];

ExternalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-external',
  template: _external_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_external_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExternalComponent);


/***/ }),

/***/ 90945:
/*!*************************************************************!*\
  !*** ./src/app/view/pages/auth/external/external.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalModule": () => (/* binding */ ExternalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _external_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-routing.module */ 5092);
/* harmony import */ var _external_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external.component */ 45029);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/auth/auth.module */ 56722);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);












// import { NgxCaptchaModule } from 'ngx-captcha';
let ExternalModule = class ExternalModule {
};
ExternalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_external_component__WEBPACK_IMPORTED_MODULE_2__.ExternalComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _external_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExternalRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            // NgxCaptchaModule,
            src_app_view_components_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], ExternalModule);



/***/ }),

/***/ 23995:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/auth/external/external.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --registration-canvas: #faf9fd;\n  --registration-card: #fff;\n  --registration-ink: #28203e;\n  --registration-muted: #6d667d;\n  --registration-border: #e7e2ef;\n  --registration-soft: #f2edf9;\n  --registration-purple: #7040a8;\n  --registration-action: #7441ad;\n  --registration-panel: #f5effb;\n  --registration-input: #fff;\n  --registration-success: #316c56;\n  --registration-error: #b13342;\n  display: block;\n}\n\n:host-context(.dark-theme) {\n  --registration-canvas: #15131e;\n  --registration-card: #211d2d;\n  --registration-ink: #f5f0ff;\n  --registration-muted: #bcb3cc;\n  --registration-border: #42384f;\n  --registration-soft: #342940;\n  --registration-purple: #d2b0ff;\n  --registration-panel: #2a2138;\n  --registration-input: #282231;\n  --registration-success: #9dd9bc;\n  --registration-error: #ffacb6;\n}\n\n.registration-content {\n  --background: var(--registration-canvas);\n}\n\n.registration-page {\n  min-height: 100%;\n  padding: 36px 24px;\n  display: grid;\n  place-items: center;\n  background-image: radial-gradient(circle, rgba(150, 124, 181, 0.14) 1px, transparent 1px);\n  background-size: 24px 24px;\n  color: var(--registration-ink);\n}\n\n.registration-shell {\n  width: 100%;\n  max-width: 1100px;\n  display: grid;\n  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);\n  background: var(--registration-card);\n  border: 1px solid var(--registration-border);\n  border-radius: 28px;\n  overflow: hidden;\n  box-shadow: 0 16px 64px rgba(62, 39, 87, 0.08);\n}\n\n.learning-panel {\n  padding: 36px 30px 24px;\n  background: var(--registration-panel);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border-inline-end: 1px solid var(--registration-border);\n  position: relative;\n}\n\n.brand-link {\n  display: inline-flex;\n  text-decoration: none;\n}\n\n.learning-copy {\n  margin-top: 36px;\n}\n\n.learning-eyebrow, .form-eyebrow {\n  color: var(--registration-purple);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.learning-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.learning-eyebrow ion-icon {\n  font-size: 19px;\n}\n\n.learning-copy h1 {\n  font-size: clamp(28px, 3vw, 37px);\n  font-weight: 900;\n  line-height: 1.7;\n  margin: 12px 0;\n}\n\n.learning-copy h1 span {\n  color: var(--registration-purple);\n}\n\n.learning-copy p {\n  font-size: 13px;\n  line-height: 2.15;\n  color: var(--registration-muted);\n  margin: 0;\n}\n\n.learning-art {\n  width: 100%;\n  position: relative;\n  margin: auto 0;\n}\n\n.learning-art img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.art-spark {\n  position: absolute;\n  font-size: 27px;\n  color: #b38a3f;\n}\n\n.art-spark--one {\n  top: 16%;\n  inset-inline-start: 3%;\n}\n\n.art-spark--two {\n  bottom: 15%;\n  inset-inline-end: 6%;\n  color: var(--registration-purple);\n}\n\n.subject-tags {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n}\n\n.subject-tags span {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid var(--registration-border);\n  border-radius: 10px;\n  background: var(--registration-card);\n  padding: 8px 10px;\n  font-size: 11px;\n  color: var(--registration-purple);\n}\n\n.subject-tags ion-icon {\n  font-size: 16px;\n}\n\n.learning-note {\n  margin: 17px 0 0;\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n  line-height: 1.9;\n  color: var(--registration-muted);\n}\n\n.form-panel {\n  min-width: 0;\n  padding: 32px 40px 24px;\n}\n\n.registration-steps {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 0 0 20px;\n  margin: 0 0 24px;\n  border-bottom: 1px solid var(--registration-border);\n}\n\n.registration-steps li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--registration-purple);\n  font-weight: 700;\n}\n\n.step-number {\n  width: 27px;\n  height: 27px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: var(--registration-soft);\n}\n\n.step-complete {\n  color: var(--registration-success) !important;\n}\n\n.step-complete .step-number {\n  background: var(--registration-soft);\n  color: var(--registration-success);\n  font-size: 16px;\n}\n\n.form-heading {\n  margin-bottom: 24px;\n}\n\n.form-heading h2 {\n  font-size: 23px;\n  font-weight: 800;\n  line-height: 1.7;\n  margin: 7px 0;\n}\n\n.form-heading p {\n  color: var(--registration-muted);\n  font-size: 12px;\n  line-height: 1.9;\n  margin: 0;\n}\n\n.fields-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 12px;\n}\n\n.form-field {\n  min-width: 0;\n}\n\n.field-full {\n  grid-column: 1/-1;\n}\n\n.input-item {\n  --background: var(--registration-input);\n  --color: var(--registration-ink);\n  --border-width: 0;\n  --min-height: 70px;\n  --padding-start: 14px;\n  --inner-padding-end: 14px;\n  --highlight-height: 0;\n  border: 1px solid var(--registration-border);\n  border-radius: 13px;\n  font-size: 13px;\n  margin: 0;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.input-item:focus-within {\n  border-color: var(--registration-purple);\n  box-shadow: 0 0 0 3px var(--registration-soft);\n}\n\n.input-item ion-label {\n  color: var(--registration-ink) !important;\n  font-size: 13px !important;\n  font-weight: 600;\n  transform: none;\n  margin: 12px 0 3px;\n}\n\n.registration-content .input-item ion-input {\n  --padding-top: 5px;\n  --padding-bottom: 11px;\n  --background: transparent;\n  --color: var(--registration-ink);\n  --placeholder-color: var(--registration-muted);\n  --placeholder-opacity: .85;\n  background: transparent;\n  border: 0;\n  border-radius: 0 !important;\n  padding: 0 !important;\n  box-shadow: none !important;\n  font-size: 13px;\n}\n\n.input-item ion-icon[slot=start] {\n  color: var(--registration-purple);\n  font-size: 20px;\n  margin-inline-end: 12px;\n}\n\n.input-item .ltr-input {\n  direction: ltr;\n  text-align: left;\n}\n\n.email-item {\n  --background: var(--registration-soft);\n}\n\n.google-icon {\n  margin-inline-start: 10px;\n}\n\n.optional-label {\n  color: var(--registration-muted);\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.field-hint, .field-error {\n  font-size: 10px;\n  line-height: 1.9;\n  margin: 6px 4px 0;\n  color: var(--registration-muted);\n}\n\n.field-error {\n  color: var(--registration-error);\n}\n\n.field-invalid {\n  border-color: var(--registration-error);\n}\n\n.password-toggle {\n  --color: var(--registration-muted);\n  --padding-start: 8px;\n  --padding-end: 8px;\n  margin-inline-end: -6px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.password-toggle ion-icon {\n  font-size: 21px;\n}\n\n.submit-button {\n  --background: var(--registration-action);\n  --background-hover: #60338f;\n  --background-activated: #60338f;\n  --color: #fff;\n  --border-radius: 13px;\n  --box-shadow: none;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n  min-height: 52px;\n  margin: 24px 0 0;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0;\n}\n\n.submit-button ion-icon {\n  font-size: 19px;\n}\n\n.submit-button ion-spinner {\n  width: 20px;\n  height: 20px;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  font-size: 10px;\n  color: var(--registration-muted);\n  margin: 14px 0 0;\n}\n\n.form-footer ion-icon {\n  color: var(--registration-purple);\n  font-size: 15px;\n}\n\n.session-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-top: 18px;\n  padding: 14px;\n  background: var(--registration-soft);\n  border: 1px solid var(--registration-border);\n  border-radius: 13px;\n  color: var(--registration-ink);\n}\n\n.session-notice > ion-icon {\n  flex-shrink: 0;\n  font-size: 22px;\n  color: var(--registration-error);\n}\n\n.session-notice p {\n  margin: 0 0 8px;\n  font-size: 12px;\n  line-height: 1.9;\n}\n\n.session-notice ion-button {\n  --color: var(--registration-purple);\n  --border-color: var(--registration-purple);\n  font-size: 11px;\n  margin: 0;\n  letter-spacing: 0;\n}\n\n.brand-link:focus-visible {\n  outline: 2px solid var(--registration-purple);\n  outline-offset: 5px;\n}\n\n@media (max-width: 900px) {\n  .registration-page {\n    padding: 24px 16px;\n  }\n\n  .learning-panel {\n    padding: 30px 22px 22px;\n  }\n\n  .form-panel {\n    padding: 30px 24px 24px;\n  }\n\n  .form-heading h2 {\n    font-size: 20px;\n  }\n\n  .registration-steps {\n    gap: 14px;\n  }\n}\n\n@media (max-width: 700px) {\n  .registration-page {\n    padding: 16px 12px 24px;\n  }\n\n  .registration-shell {\n    grid-template-columns: minmax(0, 1fr);\n    max-width: 520px;\n    border-radius: 22px;\n  }\n\n  .learning-panel {\n    display: block;\n    padding: 22px;\n    border-inline-end: 0;\n    border-bottom: 1px solid var(--registration-border);\n    overflow: hidden;\n  }\n\n  .brand-link {\n    position: relative;\n    z-index: 1;\n  }\n\n  .learning-copy {\n    margin-top: 16px;\n    position: relative;\n    z-index: 1;\n    max-width: 72%;\n  }\n\n  .learning-copy h1 {\n    font-size: 24px;\n    margin: 6px 0 0;\n    line-height: 1.6;\n  }\n\n  .learning-copy p, .learning-note, .subject-tags, .art-spark {\n    display: none;\n  }\n\n  .learning-eyebrow {\n    font-size: 10px;\n  }\n\n  .learning-art {\n    width: 170px;\n    position: absolute;\n    inset-inline-end: -16px;\n    bottom: -7px;\n    margin: 0;\n  }\n\n  .form-panel {\n    padding: 22px;\n  }\n\n  .registration-steps {\n    margin-bottom: 20px;\n    padding-bottom: 17px;\n    justify-content: space-between;\n    gap: 8px;\n  }\n\n  .form-heading {\n    margin-bottom: 20px;\n  }\n\n  .form-heading h2 {\n    font-size: 20px;\n  }\n\n  .fields-grid {\n    gap: 14px 10px;\n  }\n}\n\n@media (max-width: 380px) {\n  .form-panel {\n    padding: 20px 16px;\n  }\n\n  .form-heading h2 {\n    font-size: 18px;\n  }\n\n  .fields-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .learning-copy h1 {\n    font-size: 22px;\n  }\n\n  .learning-art {\n    width: 145px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQXdCLHdDQUFBO0FBRXhCOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlGQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBEQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQWMsb0JBQUE7RUFBc0IscUJBQUE7QUFTcEM7O0FBUkE7RUFBaUIsZ0JBQUE7QUFZakI7O0FBWEE7RUFBbUMsaUNBQUE7RUFBbUMsZUFBQTtFQUFpQixnQkFBQTtBQWlCdkY7O0FBaEJBO0VBQW9CLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLFFBQUE7QUFzQi9EOztBQXJCQTtFQUE2QixlQUFBO0FBeUI3Qjs7QUF4QkE7RUFBb0IsaUNBQUE7RUFBbUMsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsY0FBQTtB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XG4gIC0tcmVnaXN0cmF0aW9uLWNhbnZhczogI2ZhZjlmZDtcclxuICAtLXJlZ2lzdHJhdGlvbi1jYXJkOiAjZmZmO1xyXG4gIC0tcmVnaXN0cmF0aW9uLWluazogIzI4MjAzZTtcclxuICAtLXJlZ2lzdHJhdGlvbi1tdXRlZDogIzZkNjY3ZDtcclxuICAtLXJlZ2lzdHJhdGlvbi1ib3JkZXI6ICNlN2UyZWY7XHJcbiAgLS1yZWdpc3RyYXRpb24tc29mdDogI2YyZWRmOTtcclxuICAtLXJlZ2lzdHJhdGlvbi1wdXJwbGU6ICM3MDQwYTg7XHJcbiAgLS1yZWdpc3RyYXRpb24tYWN0aW9uOiAjNzQ0MWFkO1xyXG4gIC0tcmVnaXN0cmF0aW9uLXBhbmVsOiAjZjVlZmZiO1xyXG4gIC0tcmVnaXN0cmF0aW9uLWlucHV0OiAjZmZmO1xyXG4gIC0tcmVnaXN0cmF0aW9uLXN1Y2Nlc3M6ICMzMTZjNTY7XHJcbiAgLS1yZWdpc3RyYXRpb24tZXJyb3I6ICNiMTMzNDI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcclxuICAtLXJlZ2lzdHJhdGlvbi1jYW52YXM6ICMxNTEzMWU7XHJcbiAgLS1yZWdpc3RyYXRpb24tY2FyZDogIzIxMWQyZDtcclxuICAtLXJlZ2lzdHJhdGlvbi1pbms6ICNmNWYwZmY7XHJcbiAgLS1yZWdpc3RyYXRpb24tbXV0ZWQ6ICNiY2IzY2M7XHJcbiAgLS1yZWdpc3RyYXRpb24tYm9yZGVyOiAjNDIzODRmO1xyXG4gIC0tcmVnaXN0cmF0aW9uLXNvZnQ6ICMzNDI5NDA7XHJcbiAgLS1yZWdpc3RyYXRpb24tcHVycGxlOiAjZDJiMGZmO1xyXG4gIC0tcmVnaXN0cmF0aW9uLXBhbmVsOiAjMmEyMTM4O1xyXG4gIC0tcmVnaXN0cmF0aW9uLWlucHV0OiAjMjgyMjMxO1xyXG4gIC0tcmVnaXN0cmF0aW9uLXN1Y2Nlc3M6ICM5ZGQ5YmM7XHJcbiAgLS1yZWdpc3RyYXRpb24tZXJyb3I6ICNmZmFjYjY7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLWNhbnZhcyk7IH1cclxuLnJlZ2lzdHJhdGlvbi1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDM2cHggMjRweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNTAsIDEyNCwgMTgxLCAuMTQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweDtcclxuICBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLWluayk7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1zaGVsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAuODVmcikgbWlubWF4KDAsIDEuMTVmcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLWNhcmQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDE2cHggNjRweCByZ2JhKDYyLCAzOSwgODcsIC4wOCk7XHJcbn1cclxuLmxlYXJuaW5nLXBhbmVsIHtcclxuICBwYWRkaW5nOiAzNnB4IDMwcHggMjRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWdpc3RyYXRpb24tcGFuZWwpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBib3JkZXItaW5saW5lLWVuZDogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYnJhbmQtbGluayB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuLmxlYXJuaW5nLWNvcHkgeyBtYXJnaW4tdG9wOiAzNnB4OyB9XHJcbi5sZWFybmluZy1leWVicm93LCAuZm9ybS1leWVicm93IHsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1wdXJwbGUpOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLmxlYXJuaW5nLWV5ZWJyb3cgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IH1cclxuLmxlYXJuaW5nLWV5ZWJyb3cgaW9uLWljb24geyBmb250LXNpemU6IDE5cHg7IH1cclxuLmxlYXJuaW5nLWNvcHkgaDEgeyBmb250LXNpemU6IGNsYW1wKDI4cHgsIDN2dywgMzdweCk7IGZvbnQtd2VpZ2h0OiA5MDA7IGxpbmUtaGVpZ2h0OiAxLjc7IG1hcmdpbjogMTJweCAwOyB9XHJcbi5sZWFybmluZy1jb3B5IGgxIHNwYW4geyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXB1cnBsZSk7IH1cclxuLmxlYXJuaW5nLWNvcHkgcCB7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDIuMTU7IGNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24tbXV0ZWQpOyBtYXJnaW46IDA7IH1cclxuLmxlYXJuaW5nLWFydCB7IHdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbjogYXV0byAwOyB9XHJcbi5sZWFybmluZy1hcnQgaW1nIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IH1cclxuLmFydC1zcGFyayB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgZm9udC1zaXplOiAyN3B4OyBjb2xvcjogI2IzOGEzZjsgfVxyXG4uYXJ0LXNwYXJrLS1vbmUgeyB0b3A6IDE2JTsgaW5zZXQtaW5saW5lLXN0YXJ0OiAzJTsgfVxyXG4uYXJ0LXNwYXJrLS10d28geyBib3R0b206IDE1JTsgaW5zZXQtaW5saW5lLWVuZDogNiU7IGNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24tcHVycGxlKTsgfVxyXG4uc3ViamVjdC10YWdzIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHg7IHdpZHRoOiAxMDAlOyB9XHJcbi5zdWJqZWN0LXRhZ3Mgc3BhbiB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVnaXN0cmF0aW9uLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJhY2tncm91bmQ6IHZhcigtLXJlZ2lzdHJhdGlvbi1jYXJkKTsgcGFkZGluZzogOHB4IDEwcHg7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1wdXJwbGUpOyB9XHJcbi5zdWJqZWN0LXRhZ3MgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IH1cclxuLmxlYXJuaW5nLW5vdGUgeyBtYXJnaW46IDE3cHggMCAwOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiAxLjk7IGNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24tbXV0ZWQpOyB9XHJcbi5mb3JtLXBhbmVsIHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAzMnB4IDQwcHggMjRweDsgfVxyXG4ucmVnaXN0cmF0aW9uLXN0ZXBzIHsgbGlzdC1zdHlsZTogbm9uZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAyNHB4OyBwYWRkaW5nOiAwIDAgMjBweDsgbWFyZ2luOiAwIDAgMjRweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpOyB9XHJcbi5yZWdpc3RyYXRpb24tc3RlcHMgbGkgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXB1cnBsZSk7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLnN0ZXAtbnVtYmVyIHsgd2lkdGg6IDI3cHg7IGhlaWdodDogMjdweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWdpc3RyYXRpb24tc29mdCk7IH1cclxuLnN0ZXAtY29tcGxldGUgeyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7IH1cclxuLnN0ZXAtY29tcGxldGUgLnN0ZXAtbnVtYmVyIHsgYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLXNvZnQpOyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXN1Y2Nlc3MpOyBmb250LXNpemU6IDE2cHg7IH1cclxuLmZvcm0taGVhZGluZyB7IG1hcmdpbi1ib3R0b206IDI0cHg7IH1cclxuLmZvcm0taGVhZGluZyBoMiB7IGZvbnQtc2l6ZTogMjNweDsgZm9udC13ZWlnaHQ6IDgwMDsgbGluZS1oZWlnaHQ6IDEuNzsgbWFyZ2luOiA3cHggMDsgfVxyXG4uZm9ybS1oZWFkaW5nIHAgeyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLW11dGVkKTsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMS45OyBtYXJnaW46IDA7IH1cclxuLmZpZWxkcy1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyBnYXA6IDE2cHggMTJweDsgfVxyXG4uZm9ybS1maWVsZCB7IG1pbi13aWR0aDogMDsgfVxyXG4uZmllbGQtZnVsbCB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cclxuLmlucHV0LWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLWlucHV0KTtcclxuICAtLWNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24taW5rKTtcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxuICAtLW1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE0cHg7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLCBib3gtc2hhZG93IC4xNXMgZWFzZTtcclxufVxyXG4uaW5wdXQtaXRlbTpmb2N1cy13aXRoaW4geyBib3JkZXItY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1wdXJwbGUpOyBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tcmVnaXN0cmF0aW9uLXNvZnQpOyB9XHJcbi5pbnB1dC1pdGVtIGlvbi1sYWJlbCB7IGNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24taW5rKSAhaW1wb3J0YW50OyBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNmb3JtOiBub25lOyBtYXJnaW46IDEycHggMCAzcHg7IH1cclxuLnJlZ2lzdHJhdGlvbi1jb250ZW50IC5pbnB1dC1pdGVtIGlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24taW5rKTtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24tbXV0ZWQpO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLjg1O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmlucHV0LWl0ZW0gaW9uLWljb25bc2xvdD1cInN0YXJ0XCJdIHsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1wdXJwbGUpOyBmb250LXNpemU6IDIwcHg7IG1hcmdpbi1pbmxpbmUtZW5kOiAxMnB4OyB9XHJcbi5pbnB1dC1pdGVtIC5sdHItaW5wdXQgeyBkaXJlY3Rpb246IGx0cjsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4uZW1haWwtaXRlbSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLXNvZnQpOyB9XHJcbi5nb29nbGUtaWNvbiB7IG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwcHg7IH1cclxuLm9wdGlvbmFsLWxhYmVsIHsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDQwMDsgfVxyXG4uZmllbGQtaGludCwgLmZpZWxkLWVycm9yIHsgZm9udC1zaXplOiAxMHB4OyBsaW5lLWhlaWdodDogMS45OyBtYXJnaW46IDZweCA0cHggMDsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1tdXRlZCk7IH1cclxuLmZpZWxkLWVycm9yIHsgY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1lcnJvcik7IH1cclxuLmZpZWxkLWludmFsaWQgeyBib3JkZXItY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1lcnJvcik7IH1cclxuLnBhc3N3b3JkLXRvZ2dsZSB7IC0tY29sb3I6IHZhcigtLXJlZ2lzdHJhdGlvbi1tdXRlZCk7IC0tcGFkZGluZy1zdGFydDogOHB4OyAtLXBhZGRpbmctZW5kOiA4cHg7IG1hcmdpbi1pbmxpbmUtZW5kOiAtNnB4OyBtaW4td2lkdGg6IDQ0cHg7IG1pbi1oZWlnaHQ6IDQ0cHg7IH1cclxuLnBhc3N3b3JkLXRvZ2dsZSBpb24taWNvbiB7IGZvbnQtc2l6ZTogMjFweDsgfVxyXG4uc3VibWl0LWJ1dHRvbiB7IC0tYmFja2dyb3VuZDogdmFyKC0tcmVnaXN0cmF0aW9uLWFjdGlvbik7IC0tYmFja2dyb3VuZC1ob3ZlcjogIzYwMzM4ZjsgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzYwMzM4ZjsgLS1jb2xvcjogI2ZmZjsgLS1ib3JkZXItcmFkaXVzOiAxM3B4OyAtLWJveC1zaGFkb3c6IG5vbmU7IC0tcGFkZGluZy10b3A6IDE1cHg7IC0tcGFkZGluZy1ib3R0b206IDE1cHg7IG1pbi1oZWlnaHQ6IDUycHg7IG1hcmdpbjogMjRweCAwIDA7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDA7IH1cclxuLnN1Ym1pdC1idXR0b24gaW9uLWljb24geyBmb250LXNpemU6IDE5cHg7IH1cclxuLnN1Ym1pdC1idXR0b24gaW9uLXNwaW5uZXIgeyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyB9XHJcbi5mb3JtLWZvb3RlciB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLW11dGVkKTsgbWFyZ2luOiAxNHB4IDAgMDsgfVxyXG4uZm9ybS1mb290ZXIgaW9uLWljb24geyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXB1cnBsZSk7IGZvbnQtc2l6ZTogMTVweDsgfVxyXG4uc2Vzc2lvbi1ub3RpY2UgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxMHB4OyBtYXJnaW4tdG9wOiAxOHB4OyBwYWRkaW5nOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWdpc3RyYXRpb24tc29mdCk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxM3B4OyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLWluayk7IH1cclxuLnNlc3Npb24tbm90aWNlID4gaW9uLWljb24geyBmbGV4LXNocmluazogMDsgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLWVycm9yKTsgfVxyXG4uc2Vzc2lvbi1ub3RpY2UgcCB7IG1hcmdpbjogMCAwIDhweDsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMS45OyB9XHJcbi5zZXNzaW9uLW5vdGljZSBpb24tYnV0dG9uIHsgLS1jb2xvcjogdmFyKC0tcmVnaXN0cmF0aW9uLXB1cnBsZSk7IC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWdpc3RyYXRpb24tcHVycGxlKTsgZm9udC1zaXplOiAxMXB4OyBtYXJnaW46IDA7IGxldHRlci1zcGFjaW5nOiAwOyB9XHJcbi5icmFuZC1saW5rOmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcmVnaXN0cmF0aW9uLXB1cnBsZSk7IG91dGxpbmUtb2Zmc2V0OiA1cHg7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5yZWdpc3RyYXRpb24tcGFnZSB7IHBhZGRpbmc6IDI0cHggMTZweDsgfVxyXG4gIC5sZWFybmluZy1wYW5lbCB7IHBhZGRpbmc6IDMwcHggMjJweCAyMnB4OyB9XHJcbiAgLmZvcm0tcGFuZWwgeyBwYWRkaW5nOiAzMHB4IDI0cHggMjRweDsgfVxyXG4gIC5mb3JtLWhlYWRpbmcgaDIgeyBmb250LXNpemU6IDIwcHg7IH1cclxuICAucmVnaXN0cmF0aW9uLXN0ZXBzIHsgZ2FwOiAxNHB4OyB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnJlZ2lzdHJhdGlvbi1wYWdlIHsgcGFkZGluZzogMTZweCAxMnB4IDI0cHg7IH1cclxuICAucmVnaXN0cmF0aW9uLXNoZWxsIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTsgbWF4LXdpZHRoOiA1MjBweDsgYm9yZGVyLXJhZGl1czogMjJweDsgfVxyXG4gIC5sZWFybmluZy1wYW5lbCB7IGRpc3BsYXk6IGJsb2NrOyBwYWRkaW5nOiAyMnB4OyBib3JkZXItaW5saW5lLWVuZDogMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXJlZ2lzdHJhdGlvbi1ib3JkZXIpOyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgLmJyYW5kLWxpbmsgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDE7IH1cclxuICAubGVhcm5pbmctY29weSB7IG1hcmdpbi10b3A6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgbWF4LXdpZHRoOiA3MiU7IH1cclxuICAubGVhcm5pbmctY29weSBoMSB7IGZvbnQtc2l6ZTogMjRweDsgbWFyZ2luOiA2cHggMCAwOyBsaW5lLWhlaWdodDogMS42OyB9XHJcbiAgLmxlYXJuaW5nLWNvcHkgcCwgLmxlYXJuaW5nLW5vdGUsIC5zdWJqZWN0LXRhZ3MsIC5hcnQtc3BhcmsgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLmxlYXJuaW5nLWV5ZWJyb3cgeyBmb250LXNpemU6IDEwcHg7IH1cclxuICAubGVhcm5pbmctYXJ0IHsgd2lkdGg6IDE3MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0LWlubGluZS1lbmQ6IC0xNnB4OyBib3R0b206IC03cHg7IG1hcmdpbjogMDsgfVxyXG4gIC5mb3JtLXBhbmVsIHsgcGFkZGluZzogMjJweDsgfVxyXG4gIC5yZWdpc3RyYXRpb24tc3RlcHMgeyBtYXJnaW4tYm90dG9tOiAyMHB4OyBwYWRkaW5nLWJvdHRvbTogMTdweDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDhweDsgfVxyXG4gIC5mb3JtLWhlYWRpbmcgeyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbiAgLmZvcm0taGVhZGluZyBoMiB7IGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gIC5maWVsZHMtZ3JpZCB7IGdhcDogMTRweCAxMHB4OyB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmZvcm0tcGFuZWwgeyBwYWRkaW5nOiAyMHB4IDE2cHg7IH1cclxuICAuZm9ybS1oZWFkaW5nIGgyIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcbiAgLmZpZWxkcy1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTsgfVxyXG4gIC5sZWFybmluZy1jb3B5IGgxIHsgZm9udC1zaXplOiAyMnB4OyB9XHJcbiAgLmxlYXJuaW5nLWFydCB7IHdpZHRoOiAxNDVweDsgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 13137:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/auth/external/external.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n    <ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/\"></ion-back-button></ion-buttons>\n    <span page-title dir=\"rtl\" class=\"title-size no-padding\">تکمیل اطلاعات</span>\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"registration-content\">\n  <main *ngIf=\"isRegister\" class=\"registration-page\" dir=\"rtl\">\n    <section class=\"registration-shell\" aria-label=\"عضویت در اول‌آموز\">\n      <aside class=\"learning-panel\" aria-labelledby=\"learning-title\">\n        <a class=\"brand-link avalamooz-logo-frame\" routerLink=\"/\" aria-label=\"صفحه اصلی اول‌آموز\">\n          <img class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" width=\"144\" height=\"44\" alt=\"اول‌آموز\" />\n        </a>\n        <div class=\"learning-copy\">\n          <span class=\"learning-eyebrow\"><ion-icon name=\"sparkles-outline\" aria-hidden=\"true\"></ion-icon> دنیای آموزش ابتدایی</span>\n          <h1 id=\"learning-title\">یک قدم تا<br /><span>یادگیری شیرین‌تر</span></h1>\n          <p>برای روزهای پُر از کشف و خلاقیت؛ همراه شما با دوره‌های آموزشی، کاربرگ‌ها و ایده‌های تازه برای کلاس درس.</p>\n        </div>\n        <div class=\"learning-art\" aria-hidden=\"true\">\n          <span class=\"art-spark art-spark--one\">✦</span>\n          <img src=\"assets/learning/learning-kit.svg\" width=\"640\" height=\"500\" alt=\"\" />\n          <span class=\"art-spark art-spark--two\">✧</span>\n        </div>\n        <div class=\"subject-tags\" aria-label=\"موضوع‌های آموزشی\">\n          <span><ion-icon name=\"book-outline\" aria-hidden=\"true\"></ion-icon> فارسی</span>\n          <span><ion-icon name=\"shapes-outline\" aria-hidden=\"true\"></ion-icon> ریاضی</span>\n          <span><ion-icon name=\"bulb-outline\" aria-hidden=\"true\"></ion-icon> علوم و خلاقیت</span>\n        </div>\n        <p class=\"learning-note\">همراه معلمان و خانواده‌ها در مسیر آموزش ابتدایی</p>\n      </aside>\n\n      <section class=\"form-panel\" aria-labelledby=\"registration-title\">\n        <ol class=\"registration-steps\" aria-label=\"مراحل عضویت\">\n          <li class=\"step-complete\"><span class=\"step-number\"><ion-icon name=\"checkmark-outline\" aria-hidden=\"true\"></ion-icon></span> ورود با گوگل</li>\n          <li aria-current=\"step\"><span class=\"step-number\">۲</span> تکمیل اطلاعات</li>\n        </ol>\n        <div class=\"form-heading\">\n          <span class=\"form-eyebrow\">به اول‌آموز خوش آمدید!</span>\n          <h2 id=\"registration-title\">حساب کاربری‌تان را تکمیل کنید</h2>\n          <p>با تکمیل اطلاعات زیر، مسیر یادگیری‌تان را آغاز کنید.</p>\n        </div>\n\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"Register()\">\n          <div class=\"fields-grid\">\n            <div class=\"form-field field-full\">\n              <ion-item lines=\"none\" class=\"input-item email-item\">\n                <ion-icon slot=\"start\" name=\"mail-outline\" aria-hidden=\"true\"></ion-icon>\n                <ion-label position=\"stacked\">ایمیل حساب گوگل</ion-label>\n                <ion-input [readonly]=\"true\" formControlName=\"email\" type=\"email\" autocomplete=\"email\" class=\"ltr-input\"></ion-input>\n                <img slot=\"end\" class=\"google-icon\" src=\"assets/images/google-icon.svg\" width=\"20\" height=\"20\" alt=\"Google\" />\n              </ion-item>\n              <p class=\"field-hint\">این ایمیل از حساب گوگل شما دریافت شده و قابل ویرایش نیست.</p>\n            </div>\n            <div class=\"form-field\">\n              <ion-item lines=\"none\" class=\"input-item\" [class.field-invalid]=\"registerForm.controls.name.touched && registerForm.controls.name.invalid\">\n                <ion-label position=\"stacked\">نام</ion-label>\n                <ion-input placeholder=\"نام شما\" formControlName=\"name\" type=\"text\" autocomplete=\"given-name\" maxlength=\"50\"></ion-input>\n              </ion-item>\n              <p class=\"field-error\" *ngIf=\"registerForm.controls.name.touched && registerForm.controls.name.invalid\">نام خود را وارد کنید (حداکثر ۵۰ نویسه).</p>\n            </div>\n            <div class=\"form-field\">\n              <ion-item lines=\"none\" class=\"input-item\" [class.field-invalid]=\"registerForm.controls.family.touched && registerForm.controls.family.invalid\">\n                <ion-label position=\"stacked\">نام خانوادگی</ion-label>\n                <ion-input placeholder=\"نام خانوادگی شما\" formControlName=\"family\" type=\"text\" autocomplete=\"family-name\" maxlength=\"100\"></ion-input>\n              </ion-item>\n              <p class=\"field-error\" *ngIf=\"registerForm.controls.family.touched && registerForm.controls.family.invalid\">نام خانوادگی خود را وارد کنید (حداکثر ۱۰۰ نویسه).</p>\n            </div>\n            <div class=\"form-field field-full\">\n              <ion-item lines=\"none\" class=\"input-item\" [class.field-invalid]=\"registerForm.controls.phoneNumber.touched && registerForm.controls.phoneNumber.invalid\">\n                <ion-icon slot=\"start\" name=\"call-outline\" aria-hidden=\"true\"></ion-icon>\n                <ion-label position=\"stacked\">شماره موبایل</ion-label>\n                <ion-input placeholder=\"۰۹۱۲۳۴۵۶۷۸۹\" formControlName=\"phoneNumber\" type=\"tel\" inputmode=\"numeric\" autocomplete=\"tel\" class=\"ltr-input\"></ion-input>\n              </ion-item>\n              <p class=\"field-error\" *ngIf=\"registerForm.controls.phoneNumber.touched && registerForm.controls.phoneNumber.invalid\">شماره موبایل معتبر وارد کنید.</p>\n            </div>\n            <div class=\"form-field field-full\">\n              <ion-item lines=\"none\" class=\"input-item\" [class.field-invalid]=\"registerForm.controls.password.touched && registerForm.controls.password.invalid\">\n                <ion-icon slot=\"start\" name=\"lock-closed-outline\" aria-hidden=\"true\"></ion-icon>\n                <ion-label position=\"stacked\">رمز عبور</ion-label>\n                <ion-input placeholder=\"یک رمز عبور انتخاب کنید\" formControlName=\"password\" [type]=\"inputType\" autocomplete=\"new-password\" maxlength=\"100\"></ion-input>\n                <ion-button slot=\"end\" type=\"button\" fill=\"clear\" class=\"password-toggle\" [attr.aria-label]=\"isShow ? 'نمایش رمز عبور' : 'پنهان کردن رمز عبور'\" [attr.aria-pressed]=\"!isShow\" (click)=\"isShow ? togglePasswordText() : toggleTextPassword()\">\n                  <ion-icon slot=\"icon-only\" [name]=\"isShow ? 'eye-outline' : 'eye-off-outline'\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n              </ion-item>\n              <p class=\"field-hint\" *ngIf=\"!registerForm.controls.password.touched || registerForm.controls.password.valid\">حداقل ۳ نویسه؛ برای ورود با ایمیل و رمز عبور هم می‌توانید از آن استفاده کنید.</p>\n              <p class=\"field-error\" *ngIf=\"registerForm.controls.password.touched && registerForm.controls.password.invalid\">رمز عبور باید بین ۳ تا ۱۰۰ نویسه باشد.</p>\n            </div>\n            <div class=\"form-field field-full\">\n              <ion-item lines=\"none\" class=\"input-item\">\n                <ion-icon slot=\"start\" name=\"gift-outline\" aria-hidden=\"true\"></ion-icon>\n                <ion-label position=\"stacked\">کد معرف <span class=\"optional-label\">(اختیاری)</span></ion-label>\n                <ion-input placeholder=\"اگر کد معرف دارید، اینجا بنویسید\" formControlName=\"inviteId\" type=\"number\" inputmode=\"numeric\"></ion-input>\n              </ion-item>\n            </div>\n          </div>\n\n          <div *ngIf=\"googleSessionExpired\" role=\"status\" class=\"session-notice\">\n            <ion-icon name=\"alert-circle-outline\" aria-hidden=\"true\"></ion-icon>\n            <div>\n              <p>اعتبار ورود گوگل پایان یافته است؛ برای تکمیل عضویت دوباره با گوگل وارد شوید.</p>\n              <ion-button fill=\"outline\" routerLink=\"/Account\">بازگشت به ورود گوگل</ion-button>\n            </div>\n          </div>\n          <ion-button class=\"submit-button\" type=\"submit\" expand=\"block\" [disabled]=\"!registerForm.valid || submitting || googleSessionExpired\">\n            <ion-spinner *ngIf=\"submitting\" name=\"crescent\" slot=\"start\" aria-hidden=\"true\"></ion-spinner>\n            {{ submitting ? 'در حال تکمیل عضویت…' : 'تکمیل عضویت و شروع یادگیری' }}\n            <ion-icon *ngIf=\"!submitting\" name=\"arrow-back-outline\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n          </ion-button>\n          <p class=\"form-footer\"><ion-icon name=\"heart-outline\" aria-hidden=\"true\"></ion-icon> شروعی کوچک برای یادگیری‌های بزرگ</p>\n        </form>\n      </section>\n    </section>\n  </main>\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_auth_external_external_module_ts.js.map