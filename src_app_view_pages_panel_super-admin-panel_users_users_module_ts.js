"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_users_users_module_ts"],{

/***/ 29420:
/*!******************************************************!*\
  !*** ./src/app/core/pipe/off-price/OffPrice.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffPricePipe": () => (/* binding */ OffPricePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let OffPricePipe = class OffPricePipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        if (value != null) {
            return this.currencyPipe.transform(value, 'BIF', '', digitsInfo, locale);
        }
        return this.currencyPipe.transform(0, currencyCode, display, locale).split('0.00')[0];
    }
};
OffPricePipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe }
];
OffPricePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'OffPrice'
    })
], OffPricePipe);



/***/ }),

/***/ 20530:
/*!***************************************************************!*\
  !*** ./src/app/core/pipe/persian-date/persian-date.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianDateModule": () => (/* binding */ PersianDateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/service/persian-calendar-service */ 83723);
/* harmony import */ var _persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persian-date.pipe */ 59027);




let PersianDateModule = class PersianDateModule {
};
PersianDateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__.PersianDate],
        exports: [_persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__.PersianDate],
        providers: [_data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__.PersianCalendarService]
    })
], PersianDateModule);



/***/ }),

/***/ 59027:
/*!*************************************************************!*\
  !*** ./src/app/core/pipe/persian-date/persian-date.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianDate": () => (/* binding */ PersianDate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/service/persian-calendar-service */ 83723);



/*
  Generated class for the PersianDate pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
// tslint:disable-next-line: use-pipe-transform-interface
let PersianDate = class PersianDate {
    /**
     *
     */
    constructor(persianCalendarService) {
        this.persianCalendarService = persianCalendarService;
    }
    /*
      Takes a value and convert it to
     */
    transform(value) {
        const d = new Date(value);
        return this.persianCalendarService.PersianCalendar(d);
    }
};
PersianDate.ctorParameters = () => [
    { type: _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__.PersianCalendarService }
];
PersianDate = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'persianDate'
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], PersianDate);



/***/ }),

/***/ 21448:
/*!*******************************************!*\
  !*** ./src/app/core/pipe/price.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceModule": () => (/* binding */ PriceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price/Rial.pipe */ 28606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./off-price/OffPrice.pipe */ 29420);






let PriceModule = class PriceModule {
};
PriceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__.RialPipe,
            _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__.OffPricePipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [_price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__.RialPipe, _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__.OffPricePipe],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe]
    })
], PriceModule);



/***/ }),

/***/ 28606:
/*!**********************************************!*\
  !*** ./src/app/core/pipe/price/Rial.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RialPipe": () => (/* binding */ RialPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);



let RialPipe = class RialPipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        if (value != null) {
            return this.currencyPipe.transform(value, 'BIF', '', digitsInfo, locale) + ' تومان';
        }
        return this.currencyPipe.transform(0, currencyCode, display, locale).split('0.00')[0] + ' تومان';
    }
};
RialPipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe }
];
RialPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'rial'
    })
], RialPipe);



/***/ }),

/***/ 65129:
/*!*********************************************************!*\
  !*** ./src/app/data/model/account/BaseRegisterModel.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRemoveRoleModel": () => (/* binding */ AddRemoveRoleModel),
/* harmony export */   "BaseRegisterModel": () => (/* binding */ BaseRegisterModel)
/* harmony export */ });
class BaseRegisterModel {
    constructor(PhoneNumber, Password, Email, Name, Family, FullAddress) {
        this.phoneNumber = PhoneNumber;
        this.password = Password;
        this.email = Email;
        this.name = Name;
        this.family = Family;
        this.fullAddress = FullAddress;
    }
}
class AddRemoveRoleModel {
    constructor(role, buyerId) {
        this.buyerId = buyerId;
        this.role = role;
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

/***/ 15730:
/*!***********************************************************!*\
  !*** ./src/app/data/model/course/AddCourseToUserModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseToUserModel": () => (/* binding */ AddCourseToUserModel),
/* harmony export */   "AddProductToUserModel": () => (/* binding */ AddProductToUserModel)
/* harmony export */ });
class AddCourseToUserModel {
    constructor(courseId, userId) {
        this.courseId = courseId;
        this.userId = userId;
    }
}
class AddProductToUserModel {
    constructor(productId, userId) {
        this.productId = productId;
        this.userId = userId;
    }
}


/***/ }),

/***/ 83723:
/*!**********************************************************!*\
  !*** ./src/app/data/service/persian-calendar-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianCalendarService": () => (/* binding */ PersianCalendarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let PersianCalendarService = class PersianCalendarService {
    constructor() {
        this.weekDayNames = ["شنبه", "یکشنبه", "دوشنبه",
            "سه شنبه", "چهارشنبه",
            "پنج شنبه", "جمعه"];
        this.monthNames = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ];
        this.strWeekDay = null;
        this.strMonth = null;
        this.day = null;
        this.month = null;
        this.year = null;
        this.ld = null;
        this.farsiDate = null;
        this.today = new Date();
        this.gregorianYear = null;
        this.gregorianMonth = null;
        this.gregorianDate = null;
        this.WeekDay = null;
        this.buf1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        this.buf2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    }
    PersianCalendar(gregorianDate) {
        this.today = gregorianDate;
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        // return this.strWeekDay + " " + this.day + " " + this.strMonth + " " + this.year;
        return this.year + "/" + this.strMonth + "/" + this.day;
    }
    toPersian(gregorianDate) {
        if ((this.gregorianYear % 4) != 0)
            this.farsiDate = this.func1();
        else
            this.farsiDate = this.func2();
        // this.strMonth = this.monthNames[Math.floor(this.month - 1)];
        this.strMonth = [Math.floor(this.month)].toString();
        //this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        if (this.WeekDay == 6) {
            this.strWeekDay = this.weekDayNames[0];
        }
        else {
            this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        }
    }
    func1() {
        this.day = this.buf1[this.gregorianMonth - 1] + this.gregorianDate;
        if (this.day > 79) {
            this.day = this.day - 79;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 == 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 == 0) {
                    this.month = (day2 / 30) + 6;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
        }
        else {
            this.ld = this.gregorianYear > 1996 && this.gregorianYear % 4 == 1 ? 11 : 10;
            var day2 = this.day + this.ld;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 == 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
        var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
        return fullDate;
    }
    func2() {
        this.day = this.buf2[this.gregorianMonth - 1] + this.gregorianDate;
        this.ld = this.gregorianYear >= 1996 ? 79 : 80;
        if (this.day > this.ld) {
            this.day = this.day - this.ld;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 == 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 == 0) {
                    this.month--;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
            var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
            return fullDate;
        }
        else {
            var day2 = this.day + 10;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 == 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
    }
};
PersianCalendarService.ctorParameters = () => [];
PersianCalendarService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], PersianCalendarService);



/***/ }),

/***/ 90531:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/users/users-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 44369);




const routes = [{ path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent }];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UsersRoutingModule);



/***/ }),

/***/ 44369:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/users/users.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.html?ngResource */ 13369);
/* harmony import */ var _users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss?ngResource */ 79518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/admin/admin.service */ 94733);
/* harmony import */ var _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/person/BuyerUserModel */ 9841);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_AddCourseToUserModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../data/model/course/AddCourseToUserModel */ 15730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../data/model/account/ForgetPasswordModel */ 72507);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../data/model/order/CartModel */ 47968);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/common/GAccount */ 6958);
/* harmony import */ var _data_model_account_BaseRegisterModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../data/model/account/BaseRegisterModel */ 65129);
/* harmony import */ var src_app_data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/data/service/persian-calendar-service */ 83723);
/* harmony import */ var src_app_data_model_person_AdminModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/data/model/person/AdminModel */ 94250);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);




/* eslint-disable max-len */

/* eslint-disable prefer-const */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */






















let UsersComponent = class UsersComponent {
  constructor(toastController, loadingController, persianCalendarService, fb, adminService, courseService, productService, accountService, orderService, userService, activatedRoute, router, datepipe, alertController) {
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.persianCalendarService = persianCalendarService;
    this.fb = fb;
    this.adminService = adminService;
    this.courseService = courseService;
    this.productService = productService;
    this.accountService = accountService;
    this.orderService = orderService;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.datepipe = datepipe;
    this.alertController = alertController;
    this.payHistoryDetail = [];
    this.walletChargeHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.AdminFilterWalletChargeHistory(1, '', 1, 6, 0, 1);
    this.examPayHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.AdminFilterExamPayHistory(1, '', 1, 6, 0, 1);
    this.mainRoles = ['SuperAdmin', 'Admin', 'Seller', 'Teacher'];
    this.payHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.AdminFilterPayHistory(1, '', 1, 6, 0, 1);
    this.offCodeHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.FilterPointHistory(1, 4, []);
    this.passwordHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.FilterPasswordHistory(1, 4, []);
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isPayHistoriesDetailShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.selected = false;
    this.selectedActive = false;
    this.changeEmailMode = false;
    this.selectedUserSocial = null;
    this.selectedUserTunerPlus = null;
    this.selectedUserDetail = null;
    this.userCourseList = [];
    this.userProductList = [];
    this.showCourseList = false;
    this.showProductList = false;
    this.isUserDetailEditMode = false;
    this.loading1 = false;
    this.loading2 = false;
    this.loading3 = true;
    this.loading4 = true;
    this.loading5 = true;
    this.selectedUserPoint = 0;
    this.courseId = 0;
    this.productId = 0;
    this.selectedEmail = '';
    this.selectedPhone = '';
    this.selectedId = 0;
    this.selectedInviteId = 0;
    this.searchTitle = '';
    this.usersCount = 0;
    this.wallet = 0;
    this.searchIdValue = '1';
    this.sortIdValue = '1';
    this.roles = [];
    this.rolesActive = [];
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'متن...',
      translate: 'no',
      sanitize: true
    };
  }

  ngOnInit() {
    this.emailForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(1000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(1000000)]]
    });
    this.emailChangeForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(10000)]]
    });
    this.walletForm = this.fb.group({
      cash: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.max(999999999)]]
    });
    this.pointForm = this.fb.group({
      point: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.max(999999999)]]
    });
    this.UserDetailUpdateForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(100)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(200)]],
      fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(200)]],
      placeOfIssue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(200)]],
      placeOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(200)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(13)]],
      identificationImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]],
      nationalImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]],
      postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(11)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]],
      birthDate: ['1370-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(15)]]
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 10;
      const title = params.title ? params.title : null;
      const searchId = params.searchId ? params.searchId : 1;
      this.searchIdValue = searchId.toString();
      filter = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_4__.FilterUser(page, take, title, +searchId);
      this.filteredUsers = filter;
      this.getDate();
    });
  }

  presentAlertConfirmOnEmailSend() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this.onEmailSend();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onEmailSend() {
    if (this.emailForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.adminService.AdminSendEmailToUser(new src_app_data_model_person_AdminModel__WEBPACK_IMPORTED_MODULE_17__.AdminEmailModel(this.emailForm.value.title, this.emailForm.value.description, false, this.selectedId)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.emailForm.setValue({
            title: '',
            description: ''
          });
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

  presentAlertConfirmOnEmailChange() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this2.onEmailChange();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onEmailChange() {
    if (this.emailChangeForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.adminService.AdminChangeEmailUser(new src_app_data_model_person_AdminModel__WEBPACK_IMPORTED_MODULE_17__.AdminEmailChangeModel(this.selectedId, this.emailChangeForm.value.email)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.selectedEmail = this.emailChangeForm.value.email;
          this.emailChangeForm.setValue({
            email: ''
          });
          this.changeEmailMode = false;
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

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  ShowPayHistories(pageId = 1) {
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.payHistories.pageId = pageId;
    this.payHistories.userId = this.selectedUser.id;
    this.payHistories.sortId = +this.sortIdValue;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminCartHistoryByFilter(this.payHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.payHistories = res.data;
        this.isPayHistoriesShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'تراکنشی ثبت نشده است');
        this.payHistories.payHistories = [];
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentShowPointBySmsAlertConfirm() {
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
            _this3.ShowPointBySms();
          }
        }]
      });
      yield alert.present();
    })();
  }

  ShowPointBySms() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.ShowPointBySms(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'اس ام اس ارسال شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentShowPointByEmailAlertConfirm() {
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
            _this4.ShowPointByEmail();
          }
        }]
      });
      yield alert.present();
    })();
  }

  ShowPointByEmail() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.ShowPointByEmail(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'ایمیل ارسال شد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowExamPayHistories(pageId = 1) {
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.examPayHistories.pageId = pageId;
    this.examPayHistories.userId = this.selectedUser.id;
    this.examPayHistories.sortId = +this.sortIdValue;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminExamPayHistoryByFilter(this.examPayHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.examPayHistories = res.data;
        this.isExamPayHistoriesShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'تراکنشی ثبت نشده است');
        this.payHistories.payHistories = [];
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowOffCodeHistories(pageId = 1) {
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.offCodeHistories.pageId = pageId;
    this.offCodeHistories.userId = this.selectedUser.id;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminUserPointHistoryByFilter(this.offCodeHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.offCodeHistories = res.data;
        this.isOffCodeHistoriesShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کدی ثبت نشده است');
        this.offCodeHistories.pointHistories = [];
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowPasswordHistories(pageId = 1) {
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.passwordHistories.pageId = pageId;
    this.passwordHistories.userId = this.selectedUser.id;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminUserPassHistoryByFilter(this.passwordHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.passwordHistories = res.data;
        this.isPasswordHistoriesShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'رمزی ثبت نشده است');
        this.passwordHistories.passHistories = [];
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onPayDetail(id) {
    this.isPayHistoriesDetailShow = false;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminCartHistoryDetailById(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.payHistoryDetail = res.data;
        this.isPayHistoriesDetailShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد!');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  goPage2(pageId) {
    this.ShowWalletChargeHistories(+pageId);
  }

  goPage3(pageId) {
    this.ShowPayHistories(+pageId);
  }

  goPage4(pageId) {
    this.ShowExamPayHistories(+pageId);
  }

  goPage5(pageId) {
    this.ShowOffCodeHistories(+pageId);
  }

  goPage6(pageId) {
    this.ShowPasswordHistories(+pageId);
  }

  onRefresh() {
    if (this.isPayHistoriesShow) {
      this.ShowPayHistories(this.payHistories.pageId);
    } else if (this.isExamPayHistoriesShow) {
      this.ShowExamPayHistories(this.examPayHistories.pageId);
    } else if (this.isOffCodeHistoriesShow) {
      this.ShowOffCodeHistories(this.offCodeHistories.pageId);
    } else if (this.isPasswordHistoriesShow) {
      this.ShowPasswordHistories(this.passwordHistories.pageId);
    } else {
      this.ShowWalletChargeHistories(this.walletChargeHistories.pageId);
    }
  }

  ShowWalletChargeHistories(pageId = 1) {
    this.isPayHistoriesShow = false;
    this.isExamPayHistoriesShow = false;
    this.isOffCodeHistoriesShow = false;
    this.isPasswordHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    this.walletChargeHistories.pageId = pageId;
    this.walletChargeHistories.userId = this.selectedUser.id;
    this.walletChargeHistories.sortId = +this.sortIdValue;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.orderService.GetAdminWalletChargeHistoryByFilter(this.walletChargeHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.walletChargeHistories = res.data;
        this.isWalletChargeHistoriesShow = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'تراکنشی ثبت نشده است');
        this.walletChargeHistories.walletChargeHistories = [];
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onAdd() {
    if (this.courseId < 1) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.AddCourseToUser(new _data_model_course_AddCourseToUserModel__WEBPACK_IMPORTED_MODULE_9__.AddCourseToUserModel(this.courseId, this.selectedId)).subscribe(res => {
      this.courseId = 0;

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.courseService.AdminGetUserCoursesName(this.selectedId).subscribe(res2 => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res2.status) {
            this.userCourseList = res2.data;
          } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res2.status) {
            this.userCourseList = [];
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onRemove() {
    if (this.courseId < 1) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.RemoveCourseToUser(new _data_model_course_AddCourseToUserModel__WEBPACK_IMPORTED_MODULE_9__.AddCourseToUserModel(this.courseId, this.selectedId)).subscribe(res => {
      this.courseId = 0;

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.courseService.AdminGetUserCoursesName(this.selectedId).subscribe(res2 => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res2.status) {
            this.userCourseList = res2.data;
          } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res2.status) {
            this.userCourseList = [];
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onAdd2() {
    if (this.productId < 1) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.productService.AddProductToUser(new _data_model_course_AddCourseToUserModel__WEBPACK_IMPORTED_MODULE_9__.AddProductToUserModel(this.productId, this.selectedId)).subscribe(res => {
      this.productId = 0;

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.productService.AdminGetUserProductsName(this.selectedId).subscribe(res2 => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res2.status) {
            this.userProductList = res2.data;
          } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res2.status) {
            this.userProductList = [];
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onRemove2() {
    if (this.productId < 1) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.productService.RemoveProductToUser(new _data_model_course_AddCourseToUserModel__WEBPACK_IMPORTED_MODULE_9__.AddProductToUserModel(this.productId, this.selectedId)).subscribe(res => {
      this.productId = 0;

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.productService.AdminGetUserProductsName(this.selectedId).subscribe(res2 => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res2.status) {
            this.userProductList = res2.data;
          } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res2.status) {
            this.userProductList = [];
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  getDate() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.adminService.GetUserListByFilter(this.filteredUsers).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.filteredUsers = res.data;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
        this.filteredUsers.userList = [];
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        this.filteredUsers.userList = [];
      }
    }, err => {
      this.filteredUsers.userList = [];
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.adminService.GetUserListCount().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.usersCount = res.data;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
        this.usersCount = 0;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        this.usersCount = 0;
      }
    }, err => {
      this.usersCount = 0;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.filteredUsers.startPage == null) {
      return;
    }

    if (this.filteredUsers.pageId > this.filteredUsers.startPage && +this.filteredUsers.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredUsers.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredUsers.endPage == null) {
      return;
    }

    if (this.filteredUsers.pageId < this.filteredUsers.endPage) {
      this.setQueryParams(+this.filteredUsers.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  setQueryParams(pageId) {
    this.filteredUsers.title = this.searchTitle;
    this.filteredUsers.searchId = +this.searchIdValue;
    this.router.navigate(['SuperAdminPanel', 'Users'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredUsers.takeEntity ? this.filteredUsers.takeEntity : null,
        title: this.filteredUsers.title ? this.filteredUsers.title : null,
        searchId: this.filteredUsers.searchId ? this.filteredUsers.searchId : null
      }
    });
  }

  presentActiveLockAlertConfirm() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this5.onActiveLockout();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveLockAlertConfirm() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this6.onDeActiveLockout();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveLockout() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let model = new _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_10__.ForgetPasswordModel(this.selectedEmail, 'failed');
    this.accountService.DeActiveLockout(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveLockout() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let model = new _data_model_account_ForgetPasswordModel__WEBPACK_IMPORTED_MODULE_10__.ForgetPasswordModel(this.selectedEmail, 'failed');
    this.accountService.ActiveLockout(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActive() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.ActiveAdminUserByEmail(this.selectedEmail).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActive() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.BlockAdminUserByEmail(this.selectedEmail).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onVerify() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.VerifyAdminUserById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeVerify() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.DeVerifyAdminUserById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAddWalletAlertConfirm() {
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
            _this7.onAddWallet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onAddWallet() {
    if (this.walletForm.valid) {
      if (this.wallet + this.walletForm.value.cash > 999999999) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'بیشتر از سقف مجاز میباشد');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.userService.AdminAddWallet(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.WalletChangeModel(this.selectedId, +this.walletForm.value.cash)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
          this.wallet += +this.walletForm.value.cash;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAddWalletAlertConfirm2() {
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
            _this8.onAddPoint();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onAddPoint() {
    if (this.pointForm.valid) {
      if (this.selectedUserPoint + this.pointForm.value.point > 999999999) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'بیشتر از سقف مجاز میباشد');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.userService.AdminAddPoint(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.WalletChangeModel(this.selectedId, +this.pointForm.value.point)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
          this.selectedUserPoint += +this.pointForm.value.point;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentReduceWalletAlertConfirm() {
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
            _this9.onReduceWallet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReduceWallet() {
    if (this.walletForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.userService.AdminReduceWallet(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.WalletChangeModel(this.selectedId, +this.walletForm.value.cash)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);

          if (this.wallet - this.walletForm.value.cash < 0) {
            this.wallet = 0;
          } else {
            this.wallet -= +this.walletForm.value.cash;
          }
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentReduceWalletAlertConfirm2() {
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
            _this10.onReducePoint();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReducePoint() {
    if (this.pointForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.userService.AdminReducePoint(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_12__.WalletChangeModel(this.selectedId, +this.pointForm.value.point)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);

          if (this.selectedUserPoint - this.pointForm.value.point < 0) {
            this.selectedUserPoint = 0;
          } else {
            this.selectedUserPoint -= +this.pointForm.value.point;
          }
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentActiveAlertConfirm() {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this11.onActive();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveAlertConfirm() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this12.onDeActive();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentActiveAlertConfirm2() {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به تایید کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this13.onVerify();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveAlertConfirm2() {
    var _this14 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this14.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر تایید کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this14.onDeVerify();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCheckRole(role) {
    let find = this.roles.find(e => e == role);

    if (find == null) {
      return true;
    } else {
      let find2 = this.roles.findIndex(e => e == role);

      if (this.rolesActive[find2]) {
        return false;
      } else {
        return true;
      }
    }
  }

  onAddRole(role) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.AdminForceActive(new _data_model_account_BaseRegisterModel__WEBPACK_IMPORTED_MODULE_15__.AddRemoveRoleModel(role, this.selectedId)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        let index = this.roles.findIndex(e => e == role);

        if (index != -1) {
          this.rolesActive[index] = true;
        } else {
          this.roles.push(role);
          this.rolesActive.push(true);
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'با خطا مواجه شد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onRemoveRole(role) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.accountService.AdminForceDeActive(new _data_model_account_BaseRegisterModel__WEBPACK_IMPORTED_MODULE_15__.AddRemoveRoleModel(role, this.selectedId)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        let index = this.roles.findIndex(e => e == role);

        if (index != -1) {
          this.rolesActive[index] = false;
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'با خطا مواجه شد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onRemoveTunerPlusAccessJTI() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.RemoveUserTunerPlusAccess(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.selectedUserTunerPlus.jti = '';
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'با خطا مواجه شد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onCheckedTunerPlusAccess() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.CheckedTunerPlusAccess(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.selectedUserTunerPlus.isCheckedByAdmin = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'با خطا مواجه شد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  GetUserFile() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.userService.GetUserDetailFile(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      let url = window.URL.createObjectURL(res);
      window.open(url);
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertUserDetailUpdateConfirm() {
    var _this15 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this15.alertController.create({
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
            _this15.onUserDetailUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onEditUserDetail() {
    // let d = new Date(this.selectedUserDetail.birthDate);
    // let date = this.persianCalendarService.PersianCalendar(d);
    this.UserDetailUpdateForm.setValue({
      name: this.selectedUserDetail.name,
      family: this.selectedUserDetail.family,
      fatherName: this.selectedUserDetail.fatherName,
      placeOfIssue: this.selectedUserDetail.placeOfIssue,
      placeOfBirth: this.selectedUserDetail.placeOfBirth,
      nationalCode: this.selectedUserDetail.nationalCode,
      identificationCode: this.selectedUserDetail.identificationCode,
      identificationImage: this.selectedUserDetail.identificationImage,
      nationalImage: this.selectedUserDetail.nationalImage,
      postCode: this.selectedUserDetail.postCode,
      address: this.selectedUserDetail.address,
      birthDate: this.selectedUserDetail.birthDate,
      phoneNumber: this.selectedUserDetail.phoneNumber
    });
    this.isUserDetailEditMode = true;
  }

  onUserDetailUpdate() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_4__.BuyerUserDetailModel(this.selectedUserDetail.id, this.selectedId, this.UserDetailUpdateForm.value.name, this.UserDetailUpdateForm.value.family, this.UserDetailUpdateForm.value.fatherName, this.UserDetailUpdateForm.value.placeOfIssue, this.UserDetailUpdateForm.value.placeOfBirth, this.UserDetailUpdateForm.value.nationalCode, this.UserDetailUpdateForm.value.identificationCode, this.UserDetailUpdateForm.value.identificationImage, this.UserDetailUpdateForm.value.nationalImage, this.UserDetailUpdateForm.value.postCode, this.UserDetailUpdateForm.value.address, this.UserDetailUpdateForm.value.phoneNumber, this.UserDetailUpdateForm.value.birthDate);
    this.userService.AdminAddOrUpdateUserDetail(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.selectedUserDetail.name = model.name;
        this.selectedUserDetail.family = model.family;
        this.selectedUserDetail.fatherName = model.fatherName;
        this.selectedUserDetail.placeOfIssue = model.placeOfIssue;
        this.selectedUserDetail.placeOfBirth = model.placeOfBirth;
        this.selectedUserDetail.nationalCode = model.nationalCode;
        this.selectedUserDetail.identificationCode = model.identificationCode;
        this.selectedUserDetail.identificationImage = model.identificationImage;
        this.selectedUserDetail.nationalImage = model.nationalImage;
        this.selectedUserDetail.postCode = model.postCode;
        this.selectedUserDetail.address = model.address;
        this.selectedUserDetail.phoneNumber = model.phoneNumber;
        this.selectedUserDetail.birthDate = model.birthDate;
        this.UserDetailUpdateForm.setValue({
          name: '',
          family: '',
          fatherName: '',
          placeOfIssue: '',
          placeOfBirth: '',
          nationalCode: '',
          identificationCode: '',
          identificationImage: '',
          nationalImage: '',
          postCode: '',
          address: '',
          birthDate: '1370-01-01',
          phoneNumber: ''
        });
        this.isUserDetailEditMode = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onSelectItem(model) {
    this.loading4 = true;
    this.selectedEmail = model.email;
    this.selectedPhone = model.phoneNumber;
    this.selectedInviteId = model.inviteId;
    this.selectedId = +model.buyerUserId;
    this.selectedActive = model.isActive;
    this.selectedUserPoint = model.point;
    this.userCourseList = [];
    this.userProductList = [];
    this.roles = [];
    this.rolesActive = [];
    this.loading1 = true;
    this.loading2 = true;
    this.loading3 = true;
    this.loading4 = false;
    this.showCourseList = false;
    this.showProductList = false;
    this.selectedUserDetail = null;
    this.selectedUserSocial = null;
    this.selectedUserTunerPlus = null;
    this.changeEmailMode = false;
    this.isPayHistoriesShow = false;
    this.isWalletChargeHistoriesShow = false;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminGetUserCoursesName(+model.buyerUserId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.userCourseList = res.data;
      } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res.status) {
        this.userCourseList = []; // SharedIonic.toast(this.toastController, 'دوره ای خرید نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    this.productService.AdminGetUserProductsName(+model.buyerUserId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.userProductList = res.data;
      } else if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus === res.status) {
        this.userProductList = []; // SharedIonic.toast(this.toastController, 'محصولی خرید نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
    const targetUser = this.filteredUsers.userList.find(e => e.buyerUserId === +model.buyerUserId);

    if (targetUser != null) {
      this.selectedUser = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_4__.BuyerUserListViewModel(+model.buyerUserId, targetUser.name, targetUser.family, targetUser.isActive, targetUser.createDate, targetUser.lastUpdateDate);
      this.selected = true;
    } else {
      this.selected = false;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    }

    this.userService.GetAdminUserSocial(+model.buyerUserId).subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.selectedUserSocial = res.data;
      }

      this.loading1 = false;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.loading1 = false;
    });
    this.userService.GetAdminUserTunerPlusAccess(+model.buyerUserId).subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.selectedUserTunerPlus = res.data;
      }

      this.loading5 = false;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.loading5 = false;
    });
    this.userService.GetAdminUserDetail(+model.buyerUserId).subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        this.selectedUserDetail = res.data;
      } else {
        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.BuyerType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SellerType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.TeacherType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.AdminType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }

        if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType] != null) {
          this.roles.push(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType);

          if (res.data.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_14__.GAccount.SuperAdminType] === true) {
            this.rolesActive.push(true);
          } else {
            this.rolesActive.push(false);
          }
        }
      }

      this.loading2 = false;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.loading2 = false;
    });
    this.userService.GetAdminUserWallet(+model.buyerUserId).subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.wallet = res.data;
      } else {
        this.wallet = -1;
      }

      this.loading3 = false;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.wallet = -1;
      this.loading3 = false;
    }); // this.adminService.GetUserById(+model.buyerUserId).subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (GResponse.SuccessStatus === res.status) {
    //       this.selectedUser = res.data;
    //       this.selected = true;
    //     } else {
    //       SharedIonic.unSuccessToast(this.toastController);
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.unSuccessToast(this.toastController);
    //   }
    // );
  }

};

UsersComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController
}, {
  type: src_app_data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_16__.PersianCalendarService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder
}, {
  type: _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_18__.ProductService
}, {
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_13__.OrderService
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
}];

UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: 'app-users',
  template: _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UsersComponent);


/***/ }),

/***/ 88659:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/users/users.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-routing.module */ 90531);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ 44369);
/* harmony import */ var _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/admin/admin.service */ 94733);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/account.interceptor */ 8363);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/pipe/price.module */ 21448);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);



















let UsersModule = class UsersModule {
};
UsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_1__.UsersRoutingModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__.AngularEditorModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_11__.PriceModule,
            _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_6__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ],
        providers: [
            _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe,
            _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService,
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_10__.OrderService,
            _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
                useClass: src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__.AccountInterceptor,
                multi: true
            }
        ]
    })
], UsersModule);



/***/ }),

/***/ 79518:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/users/users.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  transform: scale(1.01);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSw0RUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 13369:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/users/users.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>تغییر وضعیت کاربر</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card dir=\"rtl\">\r\n    <ion-item dir=\"rtl\">\r\n      <ion-label>جستجو بر حسب</ion-label>\r\n      <ion-select [(ngModel)]=\"searchIdValue\" okText=\"انتخاب\" cancelText=\"لغو\">\r\n        <ion-select-option value=\"1\">ایمیل</ion-select-option>\r\n        <ion-select-option value=\"2\">شماره موبایل</ion-select-option>\r\n        <ion-select-option value=\"3\">نام</ion-select-option>\r\n        <ion-select-option value=\"4\">نام خانوادگی</ion-select-option>\r\n        <ion-select-option value=\"5\">کد پرسنلی</ion-select-option>\r\n        <ion-select-option value=\"6\">هویت های تایید نشده</ion-select-option>\r\n        <ion-select-option value=\"9\"\r\n          >هویت های تایید و دیده نشده</ion-select-option\r\n        >\r\n        <ion-select-option value=\"10\"\r\n          >هویت های تایید دیده شده</ion-select-option\r\n        >\r\n        <ion-select-option value=\"7\">هویت های تایید شده</ion-select-option>\r\n        <ion-select-option value=\"8\">همه اطلاعات هویتی</ion-select-option>\r\n        <ion-select-option value=\"11\">بیشترین امتیازات</ion-select-option>\r\n        <ion-select-option value=\"12\">کمترین امتیازات</ion-select-option>\r\n        <ion-select-option value=\"13\">امتیازات</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"searchIdValue == '2'\">\r\n      <ion-label>شماره موبایل بدون صفر اول وارد شود</ion-label>\r\n    </ion-item>\r\n    <ion-button\r\n      *ngIf=\"\r\n        searchIdValue == '6' ||\r\n        searchIdValue == '7' ||\r\n        searchIdValue == '8' ||\r\n        searchIdValue == '9' ||\r\n        searchIdValue == '10' ||\r\n        searchIdValue == '11' ||\r\n        searchIdValue == '12'\r\n      \"\r\n      color=\"success\"\r\n      (click)=\"setQueryParams(1)\"\r\n      expand=\"block\"\r\n      fill=\"solid\"\r\n      shape=\"round\"\r\n    >\r\n      جستجو\r\n    </ion-button>\r\n    <ion-item\r\n      *ngIf=\"\r\n        searchIdValue != '6' &&\r\n        searchIdValue != '7' &&\r\n        searchIdValue != '8' &&\r\n        searchIdValue != '9' &&\r\n        searchIdValue != '10' &&\r\n        searchIdValue != '11' &&\r\n        searchIdValue != '12'\r\n      \"\r\n    >\r\n      <ion-button\r\n        color=\"success\"\r\n        class=\"ion-margin\"\r\n        fill=\"clear\"\r\n        (click)=\"setQueryParams(1)\"\r\n      >\r\n        <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-input\r\n        (keyup.enter)=\"setQueryParams(1)\"\r\n        placeholder=\"جستجو کنید\"\r\n        type=\"text\"\r\n        [(ngModel)]=\"searchTitle\"\r\n      >\r\n      </ion-input>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-grid *ngIf=\"!selected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\">\r\n              <h1>کاربران ها</h1>\r\n            </ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredUsers\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-label>تعداد کل کاربران: {{ usersCount }}</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(filteredUsers.pageCount);\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredUsers.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId <= i + 3 &&\r\n                          filteredUsers.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredUsers.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredUsers.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredUsers.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredUsers.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredUsers.userList\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let user of filteredUsers.userList\"\r\n                    size=\"12\"\r\n                    size-md=\"6\"\r\n                  >\r\n                    <ion-card button class=\"point\" (click)=\"onSelectItem(user)\">\r\n                      <ion-list>\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            searchIdValue == '6' ||\r\n                            searchIdValue == '7' ||\r\n                            searchIdValue == '8' ||\r\n                            searchIdValue == '9' ||\r\n                            searchIdValue == '10'\r\n                          \"\r\n                        >\r\n                          <ion-text\r\n                            color=\"{{ user.isSeen ? 'success' : 'warning' }}\"\r\n                          >\r\n                            {{ user.isSeen ? \"دیده شده\" : \"دیده نشده\" }}\r\n                          </ion-text>\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"{{ user.isSeen ? 'success' : 'warning' }}\"\r\n                            name=\"{{\r\n                              user.isSeen\r\n                                ? 'checkmark-circle-outline'\r\n                                : 'close-circle-outline'\r\n                            }}\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            searchIdValue == '6' ||\r\n                            searchIdValue == '7' ||\r\n                            searchIdValue == '8' ||\r\n                            searchIdValue == '9' ||\r\n                            searchIdValue == '10'\r\n                          \"\r\n                        >\r\n                          <ion-text\r\n                            color=\"{{ user.isVerify ? 'success' : 'danger' }}\"\r\n                          >\r\n                            {{ user.isVerify ? \"تایید شده\" : \"تایید نشده\" }}\r\n                          </ion-text>\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"{{ user.isVerify ? 'success' : 'danger' }}\"\r\n                            name=\"{{\r\n                              user.isVerify\r\n                                ? 'checkmark-circle-outline'\r\n                                : 'close-circle-outline'\r\n                            }}\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>Email: </ion-label>\r\n                          <ion-text color=\"warning\">\r\n                            {{ user.email }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>موبایل: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ user.phoneNumber }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>نام: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ user.name }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>نام خانوادگی: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ user.family }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>تاریخ عضویت: </ion-label>\r\n                          <ion-text color=\"medium\">\r\n                            {{ user.createDate | persianDate }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>ساعت عضویت</ion-label>\r\n                          <ion-text color=\"medium\">{{\r\n                            getTime(user.createDate)\r\n                          }}</ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>تایید موبایل: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{\r\n                              user.phoneNumberConfirm ? 'success' : 'danger'\r\n                            }}\"\r\n                          >\r\n                            {{ user.phoneNumberConfirm }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>تایید ایمیل: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{\r\n                              user.emailConfirm ? 'success' : 'danger'\r\n                            }}\"\r\n                          >\r\n                            {{ user.emailConfirm }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>وضعیت: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{ user.isActive ? 'success' : 'danger' }}\"\r\n                          >\r\n                            {{ user.isActive }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>امتیاز: </ion-label>\r\n                          <ion-text color=\"instagram\">\r\n                            {{ user.point }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>کد عضویت: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ user.buyerUserId }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(filteredUsers.pageCount);\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredUsers.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId <= i + 3 &&\r\n                          filteredUsers.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredUsers.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredUsers.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredUsers.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredUsers.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"selected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"danger\"\r\n          shape=\"round\"\r\n          (click)=\"selected = false\"\r\n        >\r\n          برگشت\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"selectedUser\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>اضافه کردن دوره</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label\r\n                  >کد دوره <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"courseId\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button\r\n              (click)=\"onAdd()\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>حذف کردن دوره</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label\r\n                  >کد دوره <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"courseId\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button\r\n              (click)=\"onRemove()\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>اضافه کردن کالا</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label\r\n                  >کد کالا <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"productId\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button\r\n              (click)=\"onAdd2()\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>حذف کردن کالا</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label\r\n                  >کد کالا <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"productId\"\r\n                  required\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-button\r\n              (click)=\"onRemove2()\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"remove\"></ion-icon>\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"roles.length > 0\" dir=\"rtl\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">رول های کاربر</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item *ngFor=\"let role of roles; let i = index\">\r\n                <ion-label>{{ i + 1 + \"- \" + role }} </ion-label>\r\n                <ion-text color=\"{{ rolesActive[i] ? 'success' : 'danger' }}\">\r\n                  <h5>{{ rolesActive[i] }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"roles.length > 0\" dir=\"rtl\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">مدیریت رول ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item *ngFor=\"let role of mainRoles; let i = index\">\r\n                <ion-label>{{ i + 1 + \"- \" + role }} </ion-label>\r\n                <ion-button\r\n                  color=\"success\"\r\n                  *ngIf=\"onCheckRole(role)\"\r\n                  (click)=\"onAddRole(role)\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                >\r\n                  اضافه کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  color=\"danger\"\r\n                  *ngIf=\"!onCheckRole(role)\"\r\n                  (click)=\"onRemoveRole(role)\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                >\r\n                  حذف کردن\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>کد کاربر </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedId }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد معرف </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedInviteId }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ایمیل </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedEmail }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شماره موبایل: </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedPhone }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام: </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedUser.name }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام خانوادگی: </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedUser.family }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"selectedUser.createDate\">\r\n                <ion-label>تاریخ عضویت: </ion-label>\r\n                <ion-text color=\"medium\">\r\n                  <h5>{{ selectedUser.createDate | persianDate }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ساعت عضویت</ion-label>\r\n                <ion-text color=\"medium\">{{\r\n                  getTime(selectedUser.createDate)\r\n                }}</ion-text>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"selectedUser.lastUpdateDate\">\r\n                <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                <ion-text color=\"medium\">\r\n                  <h5>{{ selectedUser.lastUpdateDate | persianDate }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ساعت بروزرسانی</ion-label>\r\n                <ion-text color=\"medium\">{{\r\n                  getTime(selectedUser.lastUpdateDate)\r\n                }}</ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n            <div>\r\n              <ion-button\r\n                *ngIf=\"selectedActive\"\r\n                expand=\"block\"\r\n                color=\"danger\"\r\n                shape=\"round\"\r\n                (click)=\"presentDeActiveAlertConfirm()\"\r\n              >\r\n                غیر فعال کردن کاربر\r\n              </ion-button>\r\n              <ion-button\r\n                *ngIf=\"!selectedActive\"\r\n                expand=\"block\"\r\n                color=\"success\"\r\n                shape=\"round\"\r\n                fill=\"solid\"\r\n                (click)=\"presentActiveAlertConfirm()\"\r\n              >\r\n                فعال کردن کاربر\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n              <ion-buttons slot=\"start\" class=\"ion-margin\">\r\n                <ion-button\r\n                  style=\"width: 50%\"\r\n                  expand=\"block\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"presentDeActiveLockAlertConfirm()\"\r\n                >\r\n                  باز کردن قفل کاربر\r\n                </ion-button>\r\n                <ion-button\r\n                  style=\"width: 50%\"\r\n                  expand=\"block\"\r\n                  color=\"warning\"\r\n                  shape=\"round\"\r\n                  fill=\"solid\"\r\n                  (click)=\"presentActiveLockAlertConfirm()\"\r\n                >\r\n                  قفل کردن (12 ساعت)\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </div>\r\n            <div>\r\n              <ion-button\r\n                *ngIf=\"userCourseList.length > 0 && !showCourseList\"\r\n                (click)=\"showCourseList = true\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n              >\r\n                دوره های کاربر\r\n              </ion-button>\r\n              <ion-button\r\n                *ngIf=\"showCourseList\"\r\n                (click)=\"showCourseList = false\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n              >\r\n                بستن\r\n              </ion-button>\r\n              <section *ngIf=\"userCourseList.length > 0 && showCourseList\">\r\n                <ion-list>\r\n                  <ion-item\r\n                    href=\"{{ 'http://localhost:4300/c/' + course.id }}\"\r\n                    *ngFor=\"let course of userCourseList\"\r\n                  >\r\n                    <ion-label>{{ course.name }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </section>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-button\r\n                *ngIf=\"userProductList.length > 0 && !showProductList\"\r\n                (click)=\"showProductList = true\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n              >\r\n                کالا های کاربر\r\n              </ion-button>\r\n              <ion-button\r\n                *ngIf=\"showProductList\"\r\n                (click)=\"showProductList = false\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n              >\r\n                بستن\r\n              </ion-button>\r\n              <section *ngIf=\"userProductList.length > 0 && showProductList\">\r\n                <ion-list>\r\n                  <ion-item\r\n                    href=\"{{ 'http://localhost:4300/p/' + p.id }}\"\r\n                    *ngFor=\"let p of userProductList\"\r\n                  >\r\n                    <ion-label>{{ p.name }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </section>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"!loading5\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >دسترسی بازوی اول آموز</ion-card-title\r\n            >\r\n            <ion-button\r\n              color=\"danger\"\r\n              *ngIf=\"\r\n                selectedUserTunerPlus != null && selectedUserTunerPlus.jti != ''\r\n              \"\r\n              (click)=\"onRemoveTunerPlusAccessJTI()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n            >\r\n              حذف توکن\r\n            </ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              *ngIf=\"\r\n                selectedUserTunerPlus != null && !selectedUserTunerPlus.isCheckedByAdmin\r\n              \"\r\n              (click)=\"onCheckedTunerPlusAccess()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n            >\r\n              تثبیت توکن\r\n            </ion-button>\r\n          </ion-card-header>\r\n          <section *ngIf=\"selectedUserTunerPlus == null\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>هنوز موردی ثبت نشده است </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </section>\r\n          <section *ngIf=\"selectedUserTunerPlus != null\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>شناسه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserTunerPlus.id }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>توکن: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserTunerPlus.jti }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>بار اول: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserTunerPlus.isFirstTime }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تثبیت شده: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserTunerPlus.isCheckedByAdmin }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تعداد رفرش: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserTunerPlus.changeCount }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ ثبت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>\r\n                      {{ selectedUserTunerPlus.createDate | persianDate }}\r\n                    </h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت ثبت</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserTunerPlus.createDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>\r\n                      {{ selectedUserTunerPlus.lastUpdateDate | persianDate }}\r\n                    </h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت بروزرسانی</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserTunerPlus.lastUpdateDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </section>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"loading5\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >دسترسی بازوی اول آموز</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"!loading1\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >شبکه های اجتماعی</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <section *ngIf=\"selectedUserSocial == null\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>هنوز موردی ثبت نشده است </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </section>\r\n          <section *ngIf=\"selectedUserSocial != null\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>شناسه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.id }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>اینستاگرام: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.instagram }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تلگرام: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.telegram }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>واتساپ: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.whatsApp }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>لینکداین: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.linkedIn }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>سایت: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.site }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>بیوگرافی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserSocial.resume }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ ثبت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>{{ selectedUserSocial.createDate | persianDate }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت ثبت</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserSocial.createDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>\r\n                      {{ selectedUserSocial.lastUpdateDate | persianDate }}\r\n                    </h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت بروزرسانی</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserSocial.lastUpdateDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </section>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"loading1\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >شبکه های اجتماعی</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"!loading2\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >اطلاعات هویت کاربر</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <section *ngIf=\"selectedUserDetail == null\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>هنوز موردی ثبت نشده است </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </section>\r\n          <section *ngIf=\"selectedUserDetail != null\">\r\n            <ion-card-content dir=\"rtl\" *ngIf=\"isUserDetailEditMode\">\r\n              <form\r\n                [formGroup]=\"UserDetailUpdateForm\"\r\n                (ngSubmit)=\"presentAlertUserDetailUpdateConfirm()\"\r\n              >\r\n                <ion-list>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"twitter\"\r\n                      slot=\"start\"\r\n                      name=\"person-circle-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\">نام</ion-label>\r\n                    <ion-input\r\n                      placeholder=\"نام را وارد کنید\"\r\n                      formControlName=\"name\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"twitter\"\r\n                      slot=\"start\"\r\n                      name=\"people-circle-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >نام خانوادگی</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"family\"\r\n                      type=\"text\"\r\n                      placeholder=\"نام خانوادگی را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"telegram\"\r\n                      slot=\"start\"\r\n                      name=\"person-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >نام پدر</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"fatherName\"\r\n                      type=\"text\"\r\n                      placeholder=\"نام پدر را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"discord\"\r\n                      slot=\"start\"\r\n                      name=\"journal-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >شماره ملی</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"nationalCode\"\r\n                      type=\"text\"\r\n                      placeholder=\"شماره ملی را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"discord\"\r\n                      slot=\"start\"\r\n                      name=\"journal-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >شماره شناسنامه</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"identificationCode\"\r\n                      type=\"text\"\r\n                      placeholder=\"شماره شناسنامه را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"secondary\"\r\n                      slot=\"start\"\r\n                      name=\"location-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >محل صدور</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"placeOfIssue\"\r\n                      type=\"text\"\r\n                      placeholder=\"محل صدور را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"secondary\"\r\n                      slot=\"start\"\r\n                      name=\"location-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >محل تولد</ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"placeOfBirth\"\r\n                      type=\"text\"\r\n                      placeholder=\"محل تولد را وارد کنید\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"calendar-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >تاریخ تولد میلادی</ion-label\r\n                    >\r\n                    <ion-datetime\r\n                      min=\"1900-01-01\"\r\n                      max=\"2420-01-01\"\r\n                      formControlName=\"birthDate\"\r\n                      display-format=\"YYYY.MM.DD\"\r\n                    ></ion-datetime>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"call-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >شماره موبایل</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"موبایل را وارد کنید\"\r\n                      formControlName=\"phoneNumber\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"barcode-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >کدپستی</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"کدپستی را وارد کنید\"\r\n                      formControlName=\"postCode\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"danger\"\r\n                      slot=\"start\"\r\n                      name=\"location-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\">آدرس</ion-label>\r\n                    <ion-textarea\r\n                      autoGrow=\"true\"\r\n                      placeholder=\"آدرس را وارد کنید\"\r\n                      formControlName=\"address\"\r\n                    ></ion-textarea>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"light\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تصویر کارت ملی</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"آدرس تصویر کارت ملی را وارد کنید\"\r\n                      formControlName=\"identificationImage\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"light\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تصویر شناسنامه</ion-label\r\n                    >\r\n                    <ion-input\r\n                      placeholder=\"آدرس تصویر شناسنامه را وارد کنید\"\r\n                      formControlName=\"nationalImage\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"UserDetailUpdateForm.invalid\"\r\n                >\r\n                  ویرایش\r\n                </ion-button>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                  type=\"submit\"\r\n                  (click)=\"isUserDetailEditMode = false\"\r\n                >\r\n                  لغو\r\n                </ion-button>\r\n              </form>\r\n            </ion-card-content>\r\n            <ion-card-content dir=\"rtl\" *ngIf=\"!isUserDetailEditMode\">\r\n              <ion-button\r\n                color=\"instagram\"\r\n                (click)=\"GetUserFile()\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n              >\r\n                بکاپ گیری از اطلاعات\r\n              </ion-button>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-button (click)=\"onEditUserDetail()\" color=\"warning\"\r\n                    >ویرایش</ion-button\r\n                  >\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label>شناسه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.id }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>نام </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.name }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>نام خانوادگی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.family }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>نام پدر: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.fatherName }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>کد ملی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.identificationCode }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>شماره شناسنامه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.nationalCode }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>عکس کد ملی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.identificationImage }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>عکس شماره شناسنامه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.nationalImage }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>محل صدور: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.placeOfIssue }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>محل تولد: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.placeOfBirth }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آدرس: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.address }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>کدپستی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.postCode }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تایید شده؟: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.isVerify ? \"بله\" : \"خیر\" }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ تولد شمسی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.birthDate | persianDate }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ تولد میلادی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.birthDate }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>شماره موبایل: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ selectedUserDetail.phoneNumber }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ ثبت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>{{ selectedUserDetail.createDate | persianDate }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت ثبت</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserDetail.createDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    <h5>\r\n                      {{ selectedUserDetail.lastUpdateDate | persianDate }}\r\n                    </h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت بروزرسانی</ion-label>\r\n                  <ion-text color=\"medium\">{{\r\n                    getTime(selectedUserDetail.lastUpdateDate)\r\n                  }}</ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n              <div>\r\n                <ion-button\r\n                  *ngIf=\"selectedUserDetail.isVerify\"\r\n                  expand=\"block\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"presentDeActiveAlertConfirm2()\"\r\n                >\r\n                  عدم تایید کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"!selectedUserDetail.isVerify\"\r\n                  expand=\"block\"\r\n                  color=\"success\"\r\n                  shape=\"round\"\r\n                  fill=\"solid\"\r\n                  (click)=\"presentActiveAlertConfirm2()\"\r\n                >\r\n                  تایید کردن\r\n                </ion-button>\r\n              </div>\r\n            </ion-card-content>\r\n          </section>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"loading2\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >اطلاعات هویت کاربر</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"!loading4\">\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>امتیاز: </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ selectedUserPoint }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <form [formGroup]=\"pointForm\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">امتیاز </ion-label>\r\n                <ion-input formControlName=\"point\" type=\"number\"></ion-input>\r\n                <ion-icon slot=\"start\" name=\"medal-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-button\r\n                (click)=\"presentAddWalletAlertConfirm2()\"\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                [disabled]=\"pointForm.invalid\"\r\n              >\r\n                اضافه کردن\r\n              </ion-button>\r\n              <ion-button\r\n                (click)=\"presentReduceWalletAlertConfirm2()\"\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                [disabled]=\"pointForm.invalid\"\r\n              >\r\n                کسر کردن\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"!loading3\">\r\n          <ion-card-content dir=\"rtl\">\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>کیف پول: </ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h5>{{ wallet | rial }}</h5>\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <form [formGroup]=\"walletForm\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">مبلغ </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مبلغ به تومان\"\r\n                  formControlName=\"cash\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-button\r\n                (click)=\"presentAddWalletAlertConfirm()\"\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                [disabled]=\"walletForm.invalid\"\r\n              >\r\n                اضافه کردن\r\n              </ion-button>\r\n              <ion-button\r\n                (click)=\"presentReduceWalletAlertConfirm()\"\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                [disabled]=\"walletForm.invalid\"\r\n              >\r\n                کسر کردن\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\">\r\n          <ion-card-content>\r\n            <form\r\n              [formGroup]=\"emailForm\"\r\n              (ngSubmit)=\"presentAlertConfirmOnEmailSend()\"\r\n            >\r\n              <ion-card>\r\n                <ion-list>\r\n                  <ion-list-header>\r\n                    <ion-label>ارسال ایمیل</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >عنوان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"عنوان\"\r\n                      formControlName=\"title\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\">متن </ion-label>\r\n                    <br />\r\n                    <angular-editor\r\n                      id=\"editor12\"\r\n                      formControlName=\"description\"\r\n                      [config]=\"editorConfig\"\r\n                    ></angular-editor>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"emailForm.invalid\"\r\n                >\r\n                  ارسال\r\n                </ion-button>\r\n              </ion-card>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"loading3\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">کیف پول</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item dir=\"rtl\">\r\n            <ion-label>مرتب سازی بر حسب</ion-label>\r\n            <ion-select\r\n              [(ngModel)]=\"sortIdValue\"\r\n              okText=\"انتخاب\"\r\n              cancelText=\"لغو\"\r\n            >\r\n              <ion-select-option value=\"0\">بدون ترتیب</ion-select-option>\r\n              <ion-select-option value=\"1\">جدید</ion-select-option>\r\n              <ion-select-option value=\"2\">قدیمی</ion-select-option>\r\n              <ion-select-option value=\"3\">گرون</ion-select-option>\r\n              <ion-select-option value=\"4\">ارزون</ion-select-option>\r\n              <ion-select-option value=\"5\">موفق</ion-select-option>\r\n              <ion-select-option value=\"6\">ناموفق</ion-select-option>\r\n              <ion-select-option value=\"7\">جدید موفق</ion-select-option>\r\n              <ion-select-option value=\"8\">جدید ناموفق</ion-select-option>\r\n              <ion-select-option value=\"9\">قدیمی موفق</ion-select-option>\r\n              <ion-select-option value=\"10\">قدیمی ناموفق</ion-select-option>\r\n              <ion-select-option value=\"11\">جدید گرون</ion-select-option>\r\n              <ion-select-option value=\"12\">جدید ارزون</ion-select-option>\r\n              <ion-select-option value=\"13\">قدیمی گرون</ion-select-option>\r\n              <ion-select-option value=\"14\">قدیمی ارزون</ion-select-option>\r\n              <ion-select-option value=\"15\">جدید گرون موفق</ion-select-option>\r\n              <ion-select-option value=\"16\">جدید گرون ناموفق</ion-select-option>\r\n              <ion-select-option value=\"17\">جدید ارزون موفق</ion-select-option>\r\n              <ion-select-option value=\"18\"\r\n                >جدید ارزون ناموفق</ion-select-option\r\n              >\r\n              <ion-select-option value=\"19\">قدیمی گرون موفق</ion-select-option>\r\n              <ion-select-option value=\"20\"\r\n                >قدیمی گرون ناموفق</ion-select-option\r\n              >\r\n              <ion-select-option value=\"21\">قدیمی ارزون موفق</ion-select-option>\r\n              <ion-select-option value=\"22\"\r\n                >قدیمی ارزون ناموفق</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-button\r\n            dir=\"rtl\"\r\n            expand=\"block\"\r\n            color=\"light\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"presentShowPointBySmsAlertConfirm()\"\r\n          >\r\n            اطلاعیه امتیاز و درصد تخفیف با SMS\r\n          </ion-button>\r\n          <ion-button\r\n            dir=\"rtl\"\r\n            expand=\"block\"\r\n            color=\"light\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"presentShowPointByEmailAlertConfirm()\"\r\n          >\r\n            اطلاعیه امتیاز و درصد تخفیف با Email\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!isPayHistoriesShow\"\r\n            expand=\"block\"\r\n            color=\"success\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"ShowPayHistories()\"\r\n          >\r\n            تاریخچه پرداخت\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!isWalletChargeHistoriesShow\"\r\n            expand=\"block\"\r\n            color=\"telegram\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"ShowWalletChargeHistories()\"\r\n          >\r\n            تاریخچه شارژ کیف\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!isExamPayHistoriesShow\"\r\n            expand=\"block\"\r\n            color=\"instagram\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"ShowExamPayHistories()\"\r\n          >\r\n            تاریخچه مجوز آزمون\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!isOffCodeHistoriesShow\"\r\n            expand=\"block\"\r\n            color=\"warning\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"ShowOffCodeHistories()\"\r\n          >\r\n            تاریخچه کد های تخفیف کاربر\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!isPasswordHistoriesShow\"\r\n            expand=\"block\"\r\n            color=\"danger\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"ShowPasswordHistories()\"\r\n          >\r\n            تاریخچه رمز های عبور\r\n          </ion-button>\r\n          <ion-button\r\n            *ngIf=\"!changeEmailMode\"\r\n            expand=\"block\"\r\n            color=\"danger\"\r\n            shape=\"round\"\r\n            fill=\"solid\"\r\n            (click)=\"changeEmailMode = true\"\r\n          >\r\n            تغییر ایمیل کاربر\r\n          </ion-button>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"changeEmailMode\">\r\n          <form\r\n            [formGroup]=\"emailChangeForm\"\r\n            (ngSubmit)=\"presentAlertConfirmOnEmailChange()\"\r\n          >\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>تغییر ایمیل</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >ایمیل جدید\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"ایمیل جدید\"\r\n                    formControlName=\"email\"\r\n                    type=\"email\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"emailChangeForm.invalid\"\r\n              >\r\n                تغییر\r\n              </ion-button>\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                (click)=\"changeEmailMode = false\"\r\n              >\r\n                بستن\r\n              </ion-button>\r\n            </ion-card>\r\n          </form>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"isWalletChargeHistoriesShow\">\r\n          <ion-card-content>\r\n            <ion-list\r\n              *ngIf=\"walletChargeHistories.walletChargeHistories.length > 0\"\r\n            >\r\n              <ion-card-header>\r\n                <ion-card-title>تاریخچه شارژ کیف</ion-card-title>\r\n                <ion-button (click)=\"onRefresh()\">رفرش</ion-button>\r\n              </ion-card-header>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId > 3 &&\r\n                        walletChargeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId > 3 &&\r\n                        walletChargeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          walletChargeHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"walletChargeHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          walletChargeHistories.pageId <= i + 3 &&\r\n                          walletChargeHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          walletChargeHistories.pageId == page\r\n                            ? 'clear'\r\n                            : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == walletChargeHistories.pageId\r\n                            ? 'danger'\r\n                            : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId + 2 <\r\n                        walletChargeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId + 2 <\r\n                        walletChargeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(walletChargeHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ walletChargeHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-list-header>\r\n                <ion-label>تاریخچه پرداخت</ion-label>\r\n              </ion-list-header>\r\n              <ion-card\r\n                *ngFor=\"\r\n                  let history of walletChargeHistories.walletChargeHistories\r\n                \"\r\n              >\r\n                <ion-item>\r\n                  <ion-label>کد تراکنش: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>کد authority: </ion-label>\r\n                  <ion-text>{{ history.authority }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>کد پیگیری: </ion-label>\r\n                  <ion-text>{{ history.refId }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>وضعیت: </ion-label>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      history.isDelete\r\n                        ? 'danger'\r\n                        : history.isSuccess\r\n                        ? 'success'\r\n                        : 'warning'\r\n                    }}\"\r\n                  >\r\n                    {{\r\n                      history.isDelete\r\n                        ? \"منقضی شده\"\r\n                        : history.isSuccess\r\n                        ? \"انجام شده\"\r\n                        : \"درحال بررسی\"\r\n                    }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.createDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.createDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>مبلغ: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.price | rial }}\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId > 3 &&\r\n                        walletChargeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId > 3 &&\r\n                        walletChargeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          walletChargeHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"walletChargeHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          walletChargeHistories.pageId <= i + 3 &&\r\n                          walletChargeHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          walletChargeHistories.pageId == page\r\n                            ? 'clear'\r\n                            : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == walletChargeHistories.pageId\r\n                            ? 'danger'\r\n                            : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId + 2 <\r\n                        walletChargeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        walletChargeHistories.pageId + 2 <\r\n                        walletChargeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(walletChargeHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ walletChargeHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <ion-list\r\n              *ngIf=\"walletChargeHistories.walletChargeHistories.length == 0\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>موردی ثبت نشده است</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"isExamPayHistoriesShow\">\r\n          <ion-card-content>\r\n            <ion-list *ngIf=\"examPayHistories.examPayHistories.length > 0\">\r\n              <ion-card-header>\r\n                <ion-card-title>تاریخچه مجوز آزمون</ion-card-title>\r\n                <ion-button (click)=\"onRefresh()\">رفرش</ion-button>\r\n              </ion-card-header>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId > 3 &&\r\n                        examPayHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage4(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId > 3 &&\r\n                        examPayHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          examPayHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"examPayHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          examPayHistories.pageId <= i + 3 &&\r\n                          examPayHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          examPayHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == examPayHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage4(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId + 2 < examPayHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId + 2 < examPayHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage4(examPayHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ examPayHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-list-header>\r\n                <ion-label>تاریخچه پرداخت</ion-label>\r\n              </ion-list-header>\r\n              <ion-card\r\n                *ngFor=\"let history of examPayHistories.examPayHistories\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label>کد تراکنش: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>وضعیت: </ion-label>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      history.isDelete\r\n                        ? 'danger'\r\n                        : history.isSuccess\r\n                        ? 'success'\r\n                        : 'warning'\r\n                    }}\"\r\n                  >\r\n                    {{\r\n                      history.isDelete\r\n                        ? \"منقضی شده\"\r\n                        : history.isSuccess\r\n                        ? \"انجام شده\"\r\n                        : \"درحال بررسی\"\r\n                    }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.createDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.createDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>مبلغ: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.price | rial }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-card>\r\n                  <div *ngFor=\"let ref of history.refIds\">\r\n                    <ion-item>\r\n                      <ion-label>کد: </ion-label>\r\n                      <ion-text>{{ ref.id }}</ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>کد authority: </ion-label>\r\n                      <ion-text>{{ ref.authority }}</ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>کد پیگیری: </ion-label>\r\n                      <ion-text>{{ ref.refId }}</ion-text>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-card>\r\n              </ion-card>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId > 3 &&\r\n                        examPayHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage4(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId > 3 &&\r\n                        examPayHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          examPayHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"examPayHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          examPayHistories.pageId <= i + 3 &&\r\n                          examPayHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          examPayHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == examPayHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage4(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId + 2 < examPayHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        examPayHistories.pageId + 2 < examPayHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage4(examPayHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ examPayHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <ion-list *ngIf=\"examPayHistories.examPayHistories.length == 0\">\r\n              <ion-item>\r\n                <ion-label>موردی ثبت نشده است</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"isOffCodeHistoriesShow\">\r\n          <ion-card-content>\r\n            <ion-list *ngIf=\"offCodeHistories.pointHistories.length > 0\">\r\n              <ion-card-header>\r\n                <ion-card-title>تاریخچه کد های تخفیف</ion-card-title>\r\n                <ion-button (click)=\"onRefresh()\">رفرش</ion-button>\r\n              </ion-card-header>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId > 3 &&\r\n                        offCodeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage5(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId > 3 &&\r\n                        offCodeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          offCodeHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"offCodeHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          offCodeHistories.pageId <= i + 3 &&\r\n                          offCodeHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          offCodeHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == offCodeHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage5(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId + 2 < offCodeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId + 2 < offCodeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage5(offCodeHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ offCodeHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-list-header>\r\n                <ion-label>تاریخچه کد تخفیف</ion-label>\r\n              </ion-list-header>\r\n              <ion-card *ngFor=\"let history of offCodeHistories.pointHistories\">\r\n                <ion-item>\r\n                  <ion-label>شناسه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>وضعیت: </ion-label>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      history.isDelete || !history.isActive\r\n                        ? 'danger'\r\n                        : 'success'\r\n                    }}\"\r\n                  >\r\n                    {{\r\n                      history.isDelete || !history.isActive\r\n                        ? \"منقضی شده\"\r\n                        : \"فعال\"\r\n                    }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ ایجاد: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.createDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت ایجاد: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.createDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>کد تخفیف: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.offCode }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>درصد تخفیف: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.offPercent + \"%\" }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تخفیف نقدی: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.offPrice | rial }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ اعتبار: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.limitDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت اعتبار: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.limitDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>هزینه امتیاز: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.point }}\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId > 3 &&\r\n                        offCodeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage5(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId > 3 &&\r\n                        offCodeHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          offCodeHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"offCodeHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          offCodeHistories.pageId <= i + 3 &&\r\n                          offCodeHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          offCodeHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == offCodeHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage5(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId + 2 < offCodeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        offCodeHistories.pageId + 2 < offCodeHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage5(offCodeHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ offCodeHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <ion-list *ngIf=\"offCodeHistories.pointHistories.length == 0\">\r\n              <ion-item>\r\n                <ion-label>موردی ثبت نشده است</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"isPasswordHistoriesShow\">\r\n          <ion-card-content>\r\n            <ion-list *ngIf=\"passwordHistories.passHistories.length > 0\">\r\n              <ion-card-header>\r\n                <ion-card-title>تاریخچه کد های تخفیف</ion-card-title>\r\n                <ion-button (click)=\"onRefresh()\">رفرش</ion-button>\r\n              </ion-card-header>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId > 3 &&\r\n                        passwordHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage6(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId > 3 &&\r\n                        passwordHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          passwordHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"passwordHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          passwordHistories.pageId <= i + 3 &&\r\n                          passwordHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          passwordHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == passwordHistories.pageId\r\n                            ? 'danger'\r\n                            : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage6(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId + 2 <\r\n                        passwordHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId + 2 <\r\n                        passwordHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage6(passwordHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ passwordHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-list-header>\r\n                <ion-label>تاریخچه رمز</ion-label>\r\n              </ion-list-header>\r\n              <ion-card *ngFor=\"let history of passwordHistories.passHistories\">\r\n                <ion-item>\r\n                  <ion-label>شناسه: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>وضعیت: </ion-label>\r\n                  <ion-text\r\n                    color=\"{{ history.isDelete ? 'danger' : 'success' }}\"\r\n                  >\r\n                    {{ history.isDelete ? \"منقضی شده\" : \"فعال\" }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ ایجاد: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.createDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت ایجاد: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.createDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>رمز: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.password }}\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId > 3 &&\r\n                        passwordHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage6(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId > 3 &&\r\n                        passwordHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          passwordHistories.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"passwordHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          passwordHistories.pageId <= i + 3 &&\r\n                          passwordHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          passwordHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == passwordHistories.pageId\r\n                            ? 'danger'\r\n                            : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage6(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId + 2 <\r\n                        passwordHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        passwordHistories.pageId + 2 <\r\n                        passwordHistories.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage6(passwordHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ passwordHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <ion-list *ngIf=\"passwordHistories.passHistories.length == 0\">\r\n              <ion-item>\r\n                <ion-label>موردی ثبت نشده است</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card dir=\"rtl\" *ngIf=\"isPayHistoriesShow\">\r\n          <ion-card-content>\r\n            <ion-list *ngIf=\"isPayHistoriesDetailShow\">\r\n              <ion-list-header>\r\n                <ion-label>فاکتور دوره ها</ion-label>\r\n                <ion-button\r\n                  color=\"warning\"\r\n                  (click)=\"isPayHistoriesDetailShow = !isPayHistoriesDetailShow\"\r\n                  >برگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n              <section *ngFor=\"let course of payHistoryDetail\">\r\n                <ion-item>\r\n                  <ion-label>کد دوره: </ion-label>\r\n                  <ion-text>\r\n                    {{ course.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>عنوان: </ion-label>\r\n                  <ion-text>\r\n                    {{ course.name }}\r\n                  </ion-text>\r\n                </ion-item>\r\n              </section>\r\n            </ion-list>\r\n            <ion-list\r\n              *ngIf=\"\r\n                payHistories.payHistories.length > 0 &&\r\n                !isPayHistoriesDetailShow\r\n              \"\r\n            >\r\n              <ion-card-header>\r\n                <ion-card-title>تاریخچه پرداخت</ion-card-title>\r\n                <ion-button (click)=\"onRefresh()\">رفرش</ion-button>\r\n              </ion-card-header>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        payHistories.pageId > 3 && payHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage3(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        payHistories.pageId > 3 && payHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(payHistories.pageCount);\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"payHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          payHistories.pageId <= i + 3 &&\r\n                          payHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          payHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == payHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage3(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"payHistories.pageId + 2 < payHistories.pageCount\"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"payHistories.pageId + 2 < payHistories.pageCount\"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage3(payHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ payHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-card *ngFor=\"let history of payHistories.payHistories\">\r\n                <ion-button\r\n                  color=\"warning\"\r\n                  (click)=\"onPayDetail(history.id)\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  جزئیات\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label>کد تراکنش: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.id }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>وضعیت: </ion-label>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      history.isDelete\r\n                        ? 'danger'\r\n                        : history.isSuccess\r\n                        ? 'success'\r\n                        : 'warning'\r\n                    }}\"\r\n                  >\r\n                    {{\r\n                      history.isDelete\r\n                        ? \"منقضی شده\"\r\n                        : history.isSuccess\r\n                        ? \"انجام شده\"\r\n                        : \"درحال بررسی\"\r\n                    }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>تاریخ: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ history.createDate | persianDate }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ساعت: </ion-label>\r\n                  <ion-text color=\"medium\">\r\n                    {{ getTime(history.createDate) }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>مبلغ: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    {{ history.price | rial }}\r\n                  </ion-text>\r\n                </ion-item>\r\n                <ion-card>\r\n                  <div *ngFor=\"let ref of history.refIds\">\r\n                    <ion-item>\r\n                      <ion-label>کد: </ion-label>\r\n                      <ion-text>{{ ref.id }}</ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>کد authority: </ion-label>\r\n                      <ion-text>{{ ref.authority }}</ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>کد پیگیری: </ion-label>\r\n                      <ion-text>{{ ref.refId }}</ion-text>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-card>\r\n              </ion-card>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        payHistories.pageId > 3 && payHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage3(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        payHistories.pageId > 3 && payHistories.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(payHistories.pageCount);\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"payHistories.pageId == page\"\r\n                        *ngIf=\"\r\n                          payHistories.pageId <= i + 3 &&\r\n                          payHistories.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          payHistories.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == payHistories.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage3(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"payHistories.pageId + 2 < payHistories.pageCount\"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"payHistories.pageId + 2 < payHistories.pageCount\"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage3(payHistories.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ payHistories.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-list>\r\n            <ion-list *ngIf=\"payHistories.payHistories.length == 0\">\r\n              <ion-item>\r\n                <ion-label>موردی ثبت نشده است</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_users_users_module_ts.js.map