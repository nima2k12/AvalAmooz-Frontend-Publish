"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_setting_setting_module_ts"],{

/***/ 14856:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLoginCodeComponent": () => (/* binding */ AdminLoginCodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_login_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login-code.component.html?ngResource */ 83799);
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_view_pages_panel_super_admin_panel_setting_admin_login_code_component_ts_css_ngResource_G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Omhvc3QgeyBkaXJlY3Rpb246IHJ0bDsgfSBpb24tY2FyZCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMjRweCBhdXRvOyB9IC5jb2RlIHsgZm9udC1zaXplOiAyLjZyZW07IGxldHRlci1zcGFjaW5nOiAuMzVlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB1c2VyLXNlbGVjdDogdGV4dDsgfQ_3D_3D_G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_view_pages_panel_super_admin_panel_setting_admin_login_code_component_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXJlY3Rpb246IHJ0bDsgfSBpb24tY2FyZCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMjRweCBhdXRvOyB9IC5jb2RlIHsgZm9udC1zaXplOiAyLjZyZW07IGxldHRlci1zcGFjaW5nOiAuMzVlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB1c2VyLXNlbGVjdDogdGV4dDsgfQ%3D%3D!./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.ts */ 67138);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19019);







let AdminLoginCodeComponent = class AdminLoginCodeComponent {
    constructor(http, navController) {
        this.http = http;
        this.navController = navController;
        this.code = '';
        this.seconds = 0;
        this.busy = false;
        this.accountEmail = '';
        this.selectedEmail = '';
        this.accounts = [];
        this.message = 'حساب مقصد را انتخاب کنید؛ می‌توانید برای خودتان یا ادمین دیگر کد ورود بسازید.';
        this.active = false;
        this.watching = false;
        this.expiresAt = 0;
        this.visibilityChanged = () => {
            if (document.hidden) {
                this.suspend();
            }
            else if (this.active && this.watching) {
                this.refresh();
            }
        };
        document.addEventListener('visibilitychange', this.visibilityChanged);
    }
    backToSettings() {
        void this.navController.navigateRoot('/SuperAdminPanel/Setting', { replaceUrl: true });
    }
    accountChanged(event) {
        const email = event.detail?.value;
        if (typeof email === 'string') {
            this.selectAccount(email);
        }
    }
    selectAccount(email) {
        if (!this.accounts.includes(email) || email === this.selectedEmail) {
            return;
        }
        this.clear();
        this.selectedEmail = email;
        this.message = 'در حال بررسی کد حساب انتخاب‌شده…';
        this.refresh();
    }
    refresh() {
        if (!this.active || document.hidden) {
            return;
        }
        this.startWatching();
        this.fetchCode();
    }
    startWatching() {
        this.watching = true;
        if (!this.pollTimer) {
            this.pollTimer = setInterval(() => this.fetchCode(), 5000);
        }
    }
    generate() {
        if (!this.active || document.hidden || this.busy) {
            return;
        }
        this.startWatching();
        this.busy = true;
        this.hideCode();
        this.request = this.http.post('/api/Account/AdminLoginRecoveryCode', null, {
            params: this.selectedEmail ? { accountEmail: this.selectedEmail } : {},
            headers: { 'ngsw-bypass': 'true', 'Cache-Control': 'no-cache' }
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(15000)).subscribe({
            next: result => this.showPending(result), error: error => this.showError(error)
        });
    }
    fetchCode() {
        if (this.busy || !this.active || !this.watching || document.hidden) {
            return;
        }
        this.busy = true;
        this.request = this.http.get('/api/Account/AdminLoginRecoveryCode', {
            params: { _: Date.now().toString(), ...(this.selectedEmail ? { accountEmail: this.selectedEmail } : {}) },
            headers: { 'ngsw-bypass': 'true', 'Cache-Control': 'no-cache' }
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(15000)).subscribe({
            next: result => this.showPending(result), error: error => this.showError(error)
        });
    }
    showPending(result) {
        this.busy = false;
        this.hideCode();
        if (this.selectedEmail && result.accountEmail?.toLowerCase() !== this.selectedEmail.toLowerCase()) {
            this.clear();
            this.message = 'پاسخ سرور با حساب انتخاب‌شده مطابقت ندارد؛ نسخهٔ جدید بک‌اند را نصب کنید.';
            return;
        }
        this.accountEmail = result.accountEmail || '';
        this.selectedEmail = this.accountEmail;
        this.accounts = result.accounts || (this.accountEmail ? [this.accountEmail] : []);
        this.expiresAt = typeof result.remainingSeconds === 'number'
            ? Date.now() + Math.min(300, Math.max(0, result.remainingSeconds)) * 1000
            : Math.min(Date.now() + 300000, Date.parse(result.expiresAt || ''));
        if (result.status === 'ready' && /^\d{6}$/.test(result.code || '') && this.expiresAt > Date.now()) {
            this.code = result.code;
            this.message = 'این کد را برای ورود حساب انتخاب‌شده استفاده کنید. ایجاد یا ارسال کد جدید برای این حساب، قبلی را باطل می‌کند.';
            this.tick();
            this.timer = setInterval(() => this.tick(), 1000);
        }
        else {
            this.message = 'کد ورود فعالی وجود ندارد؛ از دکمهٔ ایجاد کد بدون ارسال استفاده کنید یا در دستگاه دیگر درخواست پیامک/ایمیل بدهید.';
        }
    }
    showError(error) {
        this.busy = false;
        this.hideCode();
        if (error.status === 401 || error.status === 403 || error.status === 404) {
            this.clear();
        }
        this.message = error.status === 401 || error.status === 403
            ? 'دسترسی به این بخش نیازمند نشست فعال یکی از دو ادمین مجاز و فعال بودن حساب مقصد است.'
            : error.status === 404 ? 'نسخهٔ بک‌اند از این بخش پشتیبانی نمی‌کند؛ بستهٔ جدید بک‌اند را نصب و سرویس را راه‌اندازی مجدد کنید.'
                : 'دریافت پاسخ انجام نشد؛ دوباره بررسی می‌شود.';
    }
    tick() {
        this.seconds = Math.max(0, Math.ceil((this.expiresAt - Date.now()) / 1000));
        if (!this.seconds) {
            this.hideCode();
            this.message = 'اعتبار کد پایان یافت؛ در دستگاه دیگر کد جدید درخواست کنید.';
        }
    }
    hideCode() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
        this.code = '';
        this.seconds = 0;
        this.expiresAt = 0;
    }
    suspend() {
        this.request?.unsubscribe();
        this.request = undefined;
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = undefined;
        }
        this.hideCode();
        this.busy = false;
    }
    clear() { this.watching = false; this.suspend(); this.accountEmail = ''; }
    ionViewWillEnter() { this.active = true; this.selectedEmail = ''; this.accounts = []; this.refresh(); }
    ionViewWillLeave() { this.active = false; this.clear(); }
    ngOnDestroy() { this.clear(); document.removeEventListener('visibilitychange', this.visibilityChanged); }
};
AdminLoginCodeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
AdminLoginCodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-login-code',
        template: _admin_login_code_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_view_pages_panel_super_admin_panel_setting_admin_login_code_component_ts_css_ngResource_G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Omhvc3QgeyBkaXJlY3Rpb246IHJ0bDsgfSBpb24tY2FyZCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMjRweCBhdXRvOyB9IC5jb2RlIHsgZm9udC1zaXplOiAyLjZyZW07IGxldHRlci1zcGFjaW5nOiAuMzVlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB1c2VyLXNlbGVjdDogdGV4dDsgfQ_3D_3D_G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_view_pages_panel_super_admin_panel_setting_admin_login_code_component_ts__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminLoginCodeComponent);



/***/ }),

/***/ 5659:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/setting-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingRoutingModule": () => (/* binding */ SettingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _admin_login_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login-code.component */ 14856);
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.component */ 72008);





const routes = [{ path: 'AdminLoginCode', component: _admin_login_code_component__WEBPACK_IMPORTED_MODULE_0__.AdminLoginCodeComponent }, { path: '', component: _setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent }];
let SettingRoutingModule = class SettingRoutingModule {
};
SettingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SettingRoutingModule);



/***/ }),

/***/ 72008:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/setting.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _setting_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.component.html?ngResource */ 99416);
/* harmony import */ var _setting_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.component.scss?ngResource */ 26790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../data/model/common/BaseModel */ 55937);




/* eslint-disable @typescript-eslint/naming-convention */




 // eslint-disable-next-line max-len








let SettingComponent = class SettingComponent {
  constructor(sliderService, fb, courseService, orderService, adminService, toastController, loadingController, alertController) {
    this.sliderService = sliderService;
    this.fb = fb;
    this.courseService = courseService;
    this.orderService = orderService;
    this.adminService = adminService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.currentCourseVideosDirectoryName = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.CurrentCourseVideoDirectoryNameViewModel(1, '', '');
    this.isLoadingCurrentCourseVideosDirectoryName = true;
    this.currentProductVideosDirectoryName = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.CurrentCourseVideoDirectoryNameViewModel(1, '', '');
    this.isLoadingCurrentProductVideosDirectoryName = true;
    this.publicMessage = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.PublicMessageModel(1, '', '', false);
    this.isLoadingPublicMessage = true;
    this.ip = '';
    this.ipAddress = '0.0.0.0';
    this.latitude = '0';
    this.longitude = '0';
  }

  ngOnInit() {
    this.form = this.fb.group({
      androidApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      androidAppZip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      aparat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      backGround: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      discord: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      faceBook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      iosApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      iosAppZip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      linkedIn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      pinterest: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      twitch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      twitter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      teacherRegisterLink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      gearRatioVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      teacherRegisterVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      teacherPanelVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusStoichVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      siteVersion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusDwellVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusInjVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusThrottleVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusTurboVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusRunnerVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusHpVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      tunerPlusTu5Video: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      placementExamVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      courseExamVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      whpToHpVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      sellerRegisterVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      sellerRegisterLink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      sellerPanelVideo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      isCourseDisabled: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      isProductDisabled: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      limitTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000)]],
      isOff: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      offDate: [this.getLocalDateTimeValue(), []]
    });
    const isOffControl = this.form.get('isOff');
    const offDateControl = this.form.get('offDate');

    if (isOffControl && offDateControl) {
      const updateOffDateValidation = isOff => {
        offDateControl.setValidators(isOff ? _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required : null);

        if (!isOff) {
          offDateControl.setValue(this.getLocalDateTimeValue(), {
            emitEvent: false
          });
        }

        offDateControl.updateValueAndValidity({
          emitEvent: false
        });
      };

      updateOffDateValidation(isOffControl.value);
      isOffControl.valueChanges.subscribe(updateOffDateValidation);
    }

    this.form2 = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(1)]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(500)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(1000000)]],
      isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]]
    });
  }

  ionViewWillEnter() {
    this.onGetData();
  }

  presentAlertConfirm2() {
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
            _this.onCommentsCheck();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCommentsCheck() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.SendAdminUnSeenCourseCommentsList().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'ایمیل ارسال شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'نظر جدیدی نیست');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirm3() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
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
            _this2.onQuestionsCheck();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onQuestionsCheck() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.SendAdminUnSeenCourseQuestionsList().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'ایمیل ارسال شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'سوال جدیدی نیست');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirm4() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.onVerifyPay();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onVerifyPay() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.CheckUnVerifyPayments().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirm5() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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
            _this4.onVerifyWallet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm6() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
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
            _this5.onForceChangeCourseVideosDirectoryName();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm7() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.onForceChangeProductVideosDirectoryName();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmAddNoOneTestsIfNotExist() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
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
            _this7.onAddNoOneTestsIfNotExist();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmActiveDegreeShared() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
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
            _this8.ActiveDegreeShared();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmDeActiveDegreeShared() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
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
            _this9.DeActiveDegreeShared();
          }
        }]
      });
      yield alert.present();
    })();
  }

  ActiveDegreeShared() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.adminService.ActiveDegreeShared().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirmCourseCalc() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
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
            _this10.CalcCourses();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmGetBlockIps() {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
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
            _this11.GetBlockIps();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm8() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به آپدیت هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this12.onUpdate2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onUpdate2() {
    if (this.form2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.sliderService.AddOrUpdatePublicMessage(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.PublicMessageModel(this.form2.value.id, this.form2.value.title, this.form2.value.description, this.form2.value.isActive)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  GetBlockIps() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.GetBlockIps().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      const url = window.URL.createObjectURL(res);
      window.open(url);
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirmSetUnBlockIp() {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
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
            _this13.SetUnBlockIp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  SetUnBlockIp() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.SetUnBlockIp(new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_10__.StringViewModel(0, this.ip)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirmSetBlockIp() {
    var _this14 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this14.alertController.create({
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
            _this14.SetBlockIp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  SetBlockIp() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.SetBlockIp(new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_10__.StringViewModel(0, this.ip)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  CalcCourses() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.CalcCourses().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  DeActiveDegreeShared() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.adminService.DeActiveDegreeShared().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onAddNoOneTestsIfNotExist() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.AddNoOneTestsIfNotExist().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onVerifyWallet() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.CheckUnVerifyWalletCharges().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onForceChangeCourseVideosDirectoryName() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.adminService.ForceChangeCourseVideosDirectoryName().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
        this.isLoadingCurrentCourseVideosDirectoryName = true;
        this.adminService.GetCurrentCourseVideosDirectoryName().subscribe(res2 => {
          if (res2.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            this.currentCourseVideosDirectoryName = res2.data;
            this.isLoadingCurrentCourseVideosDirectoryName = false;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onForceChangeProductVideosDirectoryName() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.adminService.ForceChangeProductVideosDirectoryName().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام شد');
        this.isLoadingCurrentProductVideosDirectoryName = true;
        this.adminService.GetCurrentProductVideosDirectoryName().subscribe(res2 => {
          if (res2.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            this.currentProductVideosDirectoryName = res2.data;
            this.isLoadingCurrentProductVideosDirectoryName = false;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'انجام نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onGetData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.GetSettingNoCache().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.setting = res.data;
        this.form.setValue({
          androidApp: res.data.androidApp,
          androidAppZip: res.data.androidAppZip,
          aparat: res.data.aparat,
          backGround: res.data.backGround,
          discord: res.data.discord,
          faceBook: res.data.faceBook,
          instagram: res.data.instagram,
          iosApp: res.data.iosApp,
          iosAppZip: res.data.iosAppZip,
          linkedIn: res.data.linkedIn,
          pinterest: res.data.pinterest,
          telegram: res.data.telegram,
          twitch: res.data.twitch,
          twitter: res.data.twitter,
          teacherRegisterLink: res.data.teacherRegisterLink,
          tunerPlusVideo: res.data.tunerPlusVideo,
          gearRatioVideo: res.data.gearRatioVideo,
          teacherRegisterVideo: res.data.teacherRegisterVideo,
          teacherPanelVideo: res.data.teacherPanelVideo,
          tunerPlusStoichVideo: res.data.tunerPlusStoichVideo,
          siteVersion: res.data.siteVersion,
          tunerPlusDwellVideo: res.data.tunerPlusDwellVideo,
          tunerPlusInjVideo: res.data.tunerPlusInjVideo,
          tunerPlusThrottleVideo: res.data.tunerPlusThrottleVideo,
          tunerPlusTurboVideo: res.data.tunerPlusTurboVideo,
          tunerPlusRunnerVideo: res.data.tunerPlusRunnerVideo,
          tunerPlusHpVideo: res.data.tunerPlusHpVideo,
          tunerPlusTu5Video: res.data.tunerPlusTu5Video,
          placementExamVideo: res.data.placementExamVideo,
          courseExamVideo: res.data.courseExamVideo,
          whpToHpVideo: res.data.whpToHpVideo,
          sellerRegisterVideo: res.data.sellerRegisterVideo,
          sellerRegisterLink: res.data.sellerRegisterLink,
          sellerPanelVideo: res.data.sellerPanelVideo,
          isCourseDisabled: res.data.isCourseDisabled,
          isProductDisabled: res.data.isProductDisabled,
          limitTitle: res.data.limitTitle,
          isOff: res.data.isOff,
          offDate: res.data.isOff && res.data.offDate ? res.data.offDate : this.getLocalDateTimeValue()
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.isLoadingCurrentCourseVideosDirectoryName = true;
    this.adminService.GetCurrentCourseVideosDirectoryName().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.currentCourseVideosDirectoryName = res.data;
        this.isLoadingCurrentCourseVideosDirectoryName = false;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.isLoadingPublicMessage = true;
    this.sliderService.AdminGetPublicMessage().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.publicMessage = res.data;
        this.isLoadingPublicMessage = false;
        this.form2.setValue({
          id: this.publicMessage.id,
          title: this.publicMessage.title,
          description: this.publicMessage.description,
          isActive: this.publicMessage.isActive
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.isLoadingCurrentProductVideosDirectoryName = true;
    this.adminService.GetCurrentProductVideosDirectoryName().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.currentProductVideosDirectoryName = res.data;
        this.isLoadingCurrentProductVideosDirectoryName = false;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.adminService.getIPAddress().subscribe(res => {
      console.log(res);
      this.ipAddress = res.ip_address;
      this.latitude = res.latitude;
      this.longitude = res.longitude;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'IP Failed!');
    });
  }

  presentAlertConfirm() {
    var _this15 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this15.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به آپدیت هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this15.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onUpdate() {
    if (this.form.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.sliderService.UpdateSetting(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.SettingModel(this.form.value.androidApp, this.form.value.androidAppZip, this.form.value.iosApp, this.form.value.iosAppZip, this.form.value.backGround, this.form.value.faceBook, this.form.value.telegram, this.form.value.twitter, this.form.value.instagram, this.form.value.aparat, this.form.value.linkedIn, this.form.value.twitch, this.form.value.pinterest, this.form.value.discord, this.form.value.teacherRegisterLink, this.form.value.tunerPlusVideo, this.form.value.gearRatioVideo, this.form.value.teacherRegisterVideo, this.form.value.teacherPanelVideo, this.form.value.tunerPlusStoichVideo, this.form.value.siteVersion, this.form.value.tunerPlusDwellVideo, this.form.value.tunerPlusInjVideo, this.form.value.tunerPlusThrottleVideo, this.form.value.tunerPlusTurboVideo, this.form.value.tunerPlusRunnerVideo, this.form.value.tunerPlusHpVideo, this.form.value.tunerPlusTu5Video, this.form.value.placementExamVideo, this.form.value.courseExamVideo, this.form.value.whpToHpVideo, this.form.value.sellerRegisterVideo, this.form.value.sellerRegisterLink, this.form.value.sellerPanelVideo, this.form.value.isCourseDisabled, this.form.value.isProductDisabled, this.form.value.limitTitle, this.form.value.isOff, this.form.value.offDate)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  getLocalDateTimeValue() {
    const now = new Date();

    const pad = value => value < 10 ? `0${value}` : `${value}`;

    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}` + `T${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

};

SettingComponent.ctorParameters = () => [{
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}];

SettingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-setting',
  template: _setting_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_setting_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SettingComponent);


/***/ }),

/***/ 84711:
/*!******************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/setting.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingModule": () => (/* binding */ SettingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-routing.module */ 5659);
/* harmony import */ var _admin_login_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-login-code.component */ 14856);
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ 72008);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/service/site/Slider.service */ 79519);
/* harmony import */ var src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility/account.interceptor */ 8363);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../data/service/user/user.service */ 55007);
















let SettingModule = class SettingModule {
};
SettingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_3__.SettingComponent, _admin_login_code_component__WEBPACK_IMPORTED_MODULE_2__.AdminLoginCodeComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule
        ],
        providers: [
            _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_4__.SliderService,
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService,
            _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService,
            _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
                useClass: src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_5__.AccountInterceptor,
                multi: true
            }
        ]
    })
], SettingModule);



/***/ }),

/***/ 67138:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Omhvc3QgeyBkaXJlY3Rpb246IHJ0bDsgfSBpb24tY2FyZCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMjRweCBhdXRvOyB9IC5jb2RlIHsgZm9udC1zaXplOiAyLjZyZW07IGxldHRlci1zcGFjaW5nOiAuMzVlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB1c2VyLXNlbGVjdDogdGV4dDsgfQ%3D%3D!./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host { direction: rtl; } ion-card { max-width: 620px; margin: 24px auto; } .code { font-size: 2.6rem; letter-spacing: .35em; text-align: center; -webkit-user-select: text; user-select: text; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLWNvZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsY0FBYyxFQUFFLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxFQUFFLFFBQVEsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUseUJBQWlCLEVBQWpCLGlCQUFpQixFQUFFIiwiZmlsZSI6ImFkbWluLWxvZ2luLWNvZGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXJlY3Rpb246IHJ0bDsgfSBpb24tY2FyZCB7IG1heC13aWR0aDogNjIwcHg7IG1hcmdpbjogMjRweCBhdXRvOyB9IC5jb2RlIHsgZm9udC1zaXplOiAyLjZyZW07IGxldHRlci1zcGFjaW5nOiAuMzVlbTsgdGV4dC1hbGlnbjogY2VudGVyOyB1c2VyLXNlbGVjdDogdGV4dDsgfSJdfQ== */";

/***/ }),

/***/ 26790:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/setting.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 83799:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/admin-login-code.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <app-page-header titleKey=\"\" fallback=\"/SuperAdminPanel/Setting\" [defaultBack]=\"false\">\r\n    <ion-buttons page-back><ion-button (click)=\"backToSettings()\" aria-label=\"بازگشت به تنظیمات\"><ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon></ion-button></ion-buttons>\r\n    <span page-title>کد ورود ادمین</span>\r\n  </app-page-header>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card dir=\"rtl\">\r\n    <ion-card-header><ion-card-title>بازیابی کد ورود از دستگاه واردشده</ion-card-title></ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">ساخت یا دریافت کد برای حساب</ion-label>\r\n        <ion-select aria-label=\"حساب مقصد کد ورود\" [value]=\"selectedEmail\" (ionChange)=\"accountChanged($event)\" interface=\"popover\" [disabled]=\"!accounts.length\">\r\n          <ion-select-option *ngFor=\"let email of accounts\" [value]=\"email\">{{ email }}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <p aria-live=\"polite\">{{ message }}</p>\r\n      <p *ngIf=\"accountEmail\">این کد فقط برای حساب <b dir=\"ltr\">{{ accountEmail }}</b> معتبر است.</p>\r\n      <ng-container *ngIf=\"code\">\r\n        <p class=\"code\" dir=\"ltr\" aria-label=\"کد ورود\">{{ code }}</p>\r\n        <p>اعتبار باقی‌مانده: {{ seconds }} ثانیه</p>\r\n      </ng-container>\r\n      <ion-button expand=\"block\" (click)=\"generate()\" [disabled]=\"busy\">ایجاد کد بدون ارسال پیامک و ایمیل</ion-button>\r\n      <ion-button expand=\"block\" fill=\"outline\" (click)=\"refresh()\" [disabled]=\"busy\">{{ busy ? 'لطفاً صبر کنید…' : 'بررسی کد فعلی' }}</ion-button>\r\n      <ion-button *ngIf=\"code\" fill=\"clear\" expand=\"block\" (click)=\"clear()\">پنهان کردن کد</ion-button>\r\n      <p>کد یک‌بارمصرف است و حداکثر ۵ دقیقه اعتبار دارد. پس از ورود موفق، دوباره قابل دریافت نیست.</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ }),

/***/ 99416:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/setting/setting.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\r\n  <app-loading></app-loading>\r\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\r\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\r\n<span page-title>تنظیمات سایت</span>\r\n  </app-page-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card dir=\"rtl\"><ion-card-header><ion-card-title>رمز دوم ورود ادمین</ion-card-title></ion-card-header><ion-card-content><p>با نشست فعال حساب خودتان، کد ورود دستگاه دیگر را دریافت کنید.</p><ion-button expand=\"block\" routerLink=\"/SuperAdminPanel/Setting/AdminLoginCode\">دریافت رمز دوم ورود</ion-button></ion-card-content></ion-card>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row *ngIf=\"setting\">\r\n      <ion-col\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle class=\"text-center\">{{ 'Your IP: ' + ipAddress + ' - lat: ' + latitude + ' - long: ' + longitude }}</ion-card-subtitle>\r\n            <ion-card-title class=\"text-center\">زمانبندی وظایف</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-button\r\n                color=\"warning\"\r\n                (click)=\"presentAlertConfirm2()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                ایمیل بررسی نظرات\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"warning\"\r\n                (click)=\"presentAlertConfirm3()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                ایمیل بررسی پرسش ها\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"presentAlertConfirm4()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                تایید تراکنش های خرید\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"presentAlertConfirm5()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                تایید تراکنش های کیف پول\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"instagram\"\r\n                (click)=\"presentAlertConfirm6()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                تغییر آدرس ویدیو های دوره\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"instagram\"\r\n                (click)=\"presentAlertConfirm7()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                تغییر آدرس ویدیو های فروشگاه\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"telegram\"\r\n                (click)=\"presentAlertConfirmAddNoOneTestsIfNotExist()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                Add No One Tests If Not Exist\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"presentAlertConfirmActiveDegreeShared()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                فعال سازی نمایش مدارک کاربران\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"presentAlertConfirmDeActiveDegreeShared()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                غیرفعال سازی نمایش مدارک کاربران\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"warning\"\r\n                (click)=\"presentAlertConfirmCourseCalc()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                محاسبه دوره های تخفیف دار و تاپ ویو\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"warning\"\r\n                (click)=\"presentAlertConfirmGetBlockIps()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                لیست آی پی های بلوک شده\r\n              </ion-button>\r\n            </ion-list>\r\n            <ion-card>\r\n              <ion-item>\r\n                <ion-label>آدرس آی پی: </ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"192.168.1.1\"\r\n                  [(ngModel)]=\"ip\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-button\r\n                color=\"danger\"\r\n                (click)=\"presentAlertConfirmSetBlockIp()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                بلوک کردن آی پی\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"presentAlertConfirmSetUnBlockIp()\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n              >\r\n                آزاد کردن آی پی\r\n              </ion-button>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >محل ذخیره ویدیو های دوره</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-list *ngIf=\"!isLoadingCurrentCourseVideosDirectoryName\">\r\n            <ion-item>\r\n              <ion-label>نام پوشه:</ion-label>\r\n              <ion-text>\r\n                {{ currentCourseVideosDirectoryName.folderName }}\r\n              </ion-text>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>آدرس پوشه:</ion-label>\r\n              <ion-text>\r\n                {{ currentCourseVideosDirectoryName.folderAddress }}\r\n              </ion-text>\r\n            </ion-item>\r\n          </ion-list>\r\n          <div\r\n            *ngIf=\"isLoadingCurrentCourseVideosDirectoryName\"\r\n            class=\"text-center\"\r\n          >\r\n            <ion-spinner name=\"dots\"></ion-spinner>\r\n          </div>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >محل ذخیره ویدیو های فروشگاه</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-list *ngIf=\"!isLoadingCurrentProductVideosDirectoryName\">\r\n            <ion-item>\r\n              <ion-label>نام پوشه:</ion-label>\r\n              <ion-text>\r\n                {{ currentProductVideosDirectoryName.folderName }}\r\n              </ion-text>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>آدرس پوشه:</ion-label>\r\n              <ion-text>\r\n                {{ currentProductVideosDirectoryName.folderAddress }}\r\n              </ion-text>\r\n            </ion-item>\r\n          </ion-list>\r\n          <div\r\n            *ngIf=\"isLoadingCurrentProductVideosDirectoryName\"\r\n            class=\"text-center\"\r\n          >\r\n            <ion-spinner name=\"dots\"></ion-spinner>\r\n          </div>\r\n        </ion-card>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">تنظیمات سایت</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس اپلیکیشن اندروید\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس اپلیکیشن اندروید\"\r\n                    formControlName=\"androidApp\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس اپلیکیشن فشرده اندروید\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس اپلیکیشن فشرده اندروید\"\r\n                    formControlName=\"androidAppZip\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس اپلیکیشن ای او اس\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس اپلیکیشن ای او اس\"\r\n                    formControlName=\"iosApp\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس اپلیکیشن فشرده ای او اس\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس اپلیکیشن فشرده ای او اس\"\r\n                    formControlName=\"iosAppZip\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس فایل مدرس\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس فایل مدرس\"\r\n                    formControlName=\"teacherRegisterLink\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس عکس زمینه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس زمینه\"\r\n                    formControlName=\"backGround\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"image-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آپارات\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آپارات\"\r\n                    formControlName=\"aparat\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    src=\"/assets/icon/logo-aparat.svg\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >دیسکورد\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"دیسکورد\"\r\n                    formControlName=\"discord\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"discord\"\r\n                    slot=\"start\"\r\n                    name=\"logo-discord\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >فیسبوک\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"فیسبوک\"\r\n                    formControlName=\"faceBook\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"facebook\"\r\n                    slot=\"start\"\r\n                    name=\"logo-facebook\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >اینستاگرام\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"اینستاگرام\"\r\n                    formControlName=\"instagram\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"logo-instagram\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >لینکداین\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"لینکداین\"\r\n                    formControlName=\"linkedIn\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"logo-linkedin\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >پینترست\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"پینترست\"\r\n                    formControlName=\"pinterest\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"logo-pinterest\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تلگرام\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تلگرام\"\r\n                    formControlName=\"telegram\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"telegram\"\r\n                    slot=\"start\"\r\n                    name=\"paper-plane-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">توئیچ </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توئیچ\"\r\n                    formControlName=\"twitch\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"logo-twitch\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توئیتر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توئیتر\"\r\n                    formControlName=\"twitter\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"logo-twitter\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو بازوی اول آموز\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد ویدیو آپارات\"\r\n                    formControlName=\"tunerPlusVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو نسبت دنده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد ویدیو آپارات\"\r\n                    formControlName=\"gearRatioVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو عضویت مدرس\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو عضویت مدرس\"\r\n                    formControlName=\"teacherRegisterVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو عضویت فروشنده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو عضویت فروشنده\"\r\n                    formControlName=\"sellerRegisterVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو پنل فروشنده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو پنل فروشنده\"\r\n                    formControlName=\"sellerPanelVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس فایل فروشنده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس فایل فروشنده\"\r\n                    formControlName=\"sellerRegisterLink\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو پنل مدرس\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو پنل مدرس\"\r\n                    formControlName=\"teacherPanelVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو نسبت استوکیومتری\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو نسبت استوکیومتری\"\r\n                    formControlName=\"tunerPlusStoichVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو دویل\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو دویل\"\r\n                    formControlName=\"tunerPlusDwellVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو انژکتور\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو انژکتور\"\r\n                    formControlName=\"tunerPlusInjVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو دریچه گاز\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو دریچه گاز\"\r\n                    formControlName=\"tunerPlusThrottleVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو سایز توربو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو سایز توربو\"\r\n                    formControlName=\"tunerPlusTurboVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو طول رانر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو طول رانر\"\r\n                    formControlName=\"tunerPlusRunnerVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو تبدیل توان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو تبدیل توان\"\r\n                    formControlName=\"tunerPlusHpVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو محاسبات تیو5\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو محاسبات تیو5\"\r\n                    formControlName=\"tunerPlusTu5Video\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو Whp to Hp\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو Whp to Hp\"\r\n                    formControlName=\"whpToHpVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو آزمون تعیین سطح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو آزمون تعیین سطح\"\r\n                    formControlName=\"placementExamVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس ویدیو آزمون دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس ویدیو آزمون دوره\"\r\n                    formControlName=\"courseExamVideo\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آموزشگاه متوقف شود؟</ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isCourseDisabled\"\r\n                    slot=\"start\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>فروشگاه متوقف شود؟</ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isProductDisabled\"\r\n                    slot=\"start\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ورژن سایت\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"ورژن سایت\"\r\n                    formControlName=\"siteVersion\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"share-social-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تخفیف زمان دار؟</ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isOff\"\r\n                    slot=\"start\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >عنوان تایمر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان تایمر\"\r\n                    formControlName=\"limitTitle\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">زمان پایان تخفیف</ion-label>\r\n                  <ion-datetime\r\n                    formControlName=\"offDate\"\r\n                    presentation=\"date-time\"\r\n                    hour-cycle=\"h23\"\r\n                  ></ion-datetime>\r\n                </ion-item>\r\n                <ion-note color=\"medium\" *ngIf=\"form.get('offDate')?.value\">\r\n                  {{ form.get('isOff')?.value ? 'زمان پایان تخفیف:' : 'زمان انتخابی برای زمان‌بندی:' }}\r\n                  {{ form.get('offDate')?.value | date:'yyyy/MM/dd HH:mm' }}\r\n                </ion-note>\r\n                <ion-note color=\"danger\" *ngIf=\"form.get('isOff')?.value && form.get('offDate')?.invalid\">\r\n                  برای فعال کردن مهلت تخفیف، تاریخ و ساعت پایان را انتخاب کنید.\r\n                </ion-note>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"form.invalid\"\r\n          >\r\n            ویرایش تنظیمات\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row *ngIf=\"!isLoadingPublicMessage\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"form2\" (ngSubmit)=\"presentAlertConfirm8()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>پیام عمومی</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >عنوان\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"title\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >متن پیام\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"پیام\"\r\n                  formControlName=\"description\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>فعال؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isActive\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"form2.invalid\"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_setting_setting_module_ts.js.map