"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_cart_cart_module_ts"],{

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

/***/ 68544:
/*!********************************************************!*\
  !*** ./src/app/view/pages/cart/cart-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartRoutingModule": () => (/* binding */ CartRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component */ 24887);

/* eslint-disable max-len */



const routes = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_0__.CartComponent
    },
    {
        path: 'Onlinepayment/:id',
        redirectTo: '/Cart/OnlinePayment/:id',
        // loadChildren: () => import('../../../view/pages/cart/online-payment/online-payment.module').then(m => m.OnlinePaymentModule)
    },
    {
        path: 'onlinepayment/:id',
        redirectTo: '/Cart/OnlinePayment/:id',
        // loadChildren: () => import('../../../view/pages/cart/online-payment/online-payment.module').then(m => m.OnlinePaymentModule)
    },
    {
        path: 'onlinePayment/:id',
        redirectTo: '/Cart/OnlinePayment/:id',
        // loadChildren: () => import('../../../view/pages/cart/online-payment/online-payment.module').then(m => m.OnlinePaymentModule)
    },
    {
        path: 'OnlinePayment/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_online-payment_online-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/online-payment/online-payment.module */ 22756)).then(m => m.OnlinePaymentModule)
    },
    {
        path: 'onlinePaymentwallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'OnlinepaymentWallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'OnlinePaymentwallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'Onlinepaymentwallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'onlinepaymentwallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'onlinepaymentWallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'onlinePaymentWallet/:id',
        redirectTo: '/Cart/OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module').then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'OnlinePaymentWallet/:id',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_online-payment-wallet_online-payment-wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/online-payment-wallet/online-payment-wallet.module */ 78621)).then(m => m.OnlinePaymentWalletModule)
    },
    {
        path: 'PhonePayment/:id',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_online-payment-phone_online-payment-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/online-payment-phone/online-payment-phone.module */ 34435)).then(m => m.OnlinePaymentPhoneModule)
    },
    {
        path: 'Phonepayment/:id',
        redirectTo: '/Cart/PhonePayment/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-phone/online-payment-phone.module').then(m => m.OnlinePaymentPhoneModule)
    },
    {
        path: 'phonePayment/:id',
        redirectTo: '/Cart/PhonePayment/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-phone/online-payment-phone.module').then(m => m.OnlinePaymentPhoneModule)
    },
    {
        path: 'phonePayment/:id',
        redirectTo: '/Cart/PhonePayment/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-phone/online-payment-phone.module').then(m => m.OnlinePaymentPhoneModule)
    },
    {
        path: 'phoneWallet/:id',
        redirectTo: '/Cart/PhoneWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet-phone/online-payment-wallet-phone.module').then(m => m.OnlinePaymentWalletPhoneModule)
    },
    {
        path: 'Phonewallet/:id',
        redirectTo: '/Cart/PhoneWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet-phone/online-payment-wallet-phone.module').then(m => m.OnlinePaymentWalletPhoneModule)
    },
    {
        path: 'phonewallet/:id',
        redirectTo: '/Cart/PhoneWallet/:id',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/cart/online-payment-wallet-phone/online-payment-wallet-phone.module').then(m => m.OnlinePaymentWalletPhoneModule)
    },
    {
        path: 'PhoneWallet/:id',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_online-payment-wallet-phone_online-payment-wallet-phone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/online-payment-wallet-phone/online-payment-wallet-phone.module */ 4453)).then(m => m.OnlinePaymentWalletPhoneModule)
    },
    {
        path: 'Phoneonlinepaymentpayagain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'phoneonlinepaymentpayagain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'phoneonlinepaymentpayAgain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'phoneonlinepaymentPayAgain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'phoneonlinePaymentPayAgain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'phoneOnlinePaymentPayAgain/:id',
        redirectTo: '/Cart/PhoneOnlinePaymentPayAgain/:id'
    },
    {
        path: 'PhoneOnlinePaymentPayAgain/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_phone-online-payment-pay-again_phone-online-payment-pay-again_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/phone-online-payment-pay-again/phone-online-payment-pay-again.module */ 49593)).then(m => m.PhoneOnlinePaymentPayAgainModule)
    },
    {
        path: 'Onlinepaymentpayagain/:id',
        redirectTo: '/Cart/OnlinePaymentPayAgain/:id'
    },
    {
        path: 'onlinepaymentpayagain/:id',
        redirectTo: '/Cart/OnlinePaymentPayAgain/:id'
    },
    {
        path: 'onlinepaymentpayAgain/:id',
        redirectTo: '/Cart/OnlinePaymentPayAgain/:id'
    },
    {
        path: 'onlinepaymentPayAgain/:id',
        redirectTo: '/Cart/OnlinePaymentPayAgain/:id'
    },
    {
        path: 'onlinePaymentPayAgain/:id',
        redirectTo: '/Cart/OnlinePaymentPayAgain/:id'
    },
    {
        path: 'OnlinePaymentPayAgain/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_cart_online-payment-pay-again_online-payment-pay-again_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/cart/online-payment-pay-again/online-payment-pay-again.module */ 1599)).then(m => m.OnlinePaymentPayAgainModule)
    },
];
let CartRoutingModule = class CartRoutingModule {
};
CartRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CartRoutingModule);



/***/ }),

/***/ 24887:
/*!***************************************************!*\
  !*** ./src/app/view/pages/cart/cart.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.component.html?ngResource */ 57511);
/* harmony import */ var _cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.scss?ngResource */ 14057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/model/order/CartModel */ 47968);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/service/order/order.service */ 22773);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/common/GResponse */ 54021);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/common/G */ 67122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/model/person/BuyerUserModel */ 9841);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/service/user/user.service */ 55007);




/* eslint-disable prefer-const */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */













let CartComponent = class CartComponent {
  constructor(router, orderService, toastController, loadingController, fb, userService, alertController, menuCtrl) {
    this.router = router;
    this.orderService = orderService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.fb = fb;
    this.userService = userService;
    this.alertController = alertController;
    this.menuCtrl = menuCtrl;
    this.found = false;
    this.leave = false;
    this.isLoading2 = true;
    this.isCourseDisabled = false;
    this.isProductDisabled = true;
    this.queryText = '';
    this.selectedPay = 'bank';
    this.showSearchbar = false;
    this.canSend = false;
    this.offPriceCode = '';
    this.selectedItemIndex = -1;
    this.addSelected = false;
    this.cityId = 1;
    this.provinceId = 1;
    this.userAddress = null;
    this.isLoading = true;
    this.isChecked = false;
    this.selectedAddress = -1;
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
    this.coursesPrice = 0;
    this.productsPrice = 0;
    this.productsSendPrice = 0;
    this.offSendPrice = 0;
    this.totalOffPrice = 0;
    this.totalPayPrice = 0;
  }

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  alert() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'فروشگاه موقت تعطیل شده\nبرای تهیه دوره، کالا ها را از سبد خرید حذف کنید',
        backdropDismiss: false,
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

  alert2() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'آموزشگاه موقت تعطیل شده\nبرای تهیه کالا، دوره ها را از سبد خرید حذف کنید',
        backdropDismiss: false,
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

  ionViewWillLeave() {
    this.leave = true;
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.Discord;
    this.addressForm = this.fb.group({
      id: [0],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]],
      title: ['آدرس من', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]],
      postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(11)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(2000)]],
      companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(300)]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(15)]],
      homePhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(25)]]
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  onProductDetailClick(index) {
    if (this.selectedItemIndex == index) {
      this.selectedItemIndex = -1;
    } else {
      this.selectedItemIndex = index;
    }
  }

  onGetSendType(sendTypeId) {
    switch (sendTypeId) {
      case 1:
        return 'دریافت حضوری';

      case 2:
        return 'پیک موتوری';

      case 3:
        return 'تیپاکس';

      case 4:
        return 'پست';

      case 5:
        return 'پست پیشتاز';

      case 6:
        return 'باربری';

      case 7:
        return 'تیپاکس (پس کرایه)';

      default:
        return 'انتخاب نشده';
    }
  }

  onGetSendPrice(index) {
    const product = this.cart.products[index];

    if (product.hasFreeSend) {
      return 0;
    }

    let kg = Math.floor(product.weight * product.count / 1000);

    if (kg < 1) {
      kg = 1;
    }

    if (kg <= 2) {
      return product.defaultSendPrice;
    } else {
      return Math.floor(kg - 2) * product.defaultPriceEachKg + product.defaultSendPrice;
    }
  }

  getCityList() {
    return this.userAddress.cities.filter(e => e.provinceId == this.provinceId);
  }

  presentAlertRemoveAddressConfirm(model) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'آیا مطمئن به حذف هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this4.onRemoveAddress(model);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCheckBuy() {
    if (!this.isChecked) {
      return true;
    }

    if (this.totalPayPrice == 0 || this.found) {
      return true;
    }

    return false;
  }

  onRemoveAddress(model) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.userService.RemoveUserProductAddress(model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.userAddress.buyerUserProductAddresses.splice(this.userAddress.buyerUserProductAddresses.findIndex(e => e.id == model.id), 1);
        this.addSelected = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  addressSelected() {
    let model = this.userAddress.buyerUserProductAddresses.find(e => e.id == this.selectedAddress);
    this.addressForm.setValue({
      id: model.id,
      title: model.title,
      name: model.name,
      family: model.family,
      postCode: model.postCode,
      address: model.address,
      companyName: model.companyName,
      phoneNumber: model.phoneNumber,
      homePhoneNumber: model.homePhoneNumber
    });
    this.provinceId = model.provinceId;
    this.cityId = model.cityId;
    this.addSelected = true;
  }

  onChangeAddress() {
    if (!this.addressForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    let city = this.userAddress.cities.find(e => e.id == this.cityId);

    if (city == null || city == undefined) {
      this.provinceId = 1;
      this.cityId = 1;
    } else if (this.provinceId != city.provinceId) {
      this.provinceId = 1;
      this.cityId = 1;
    }

    let model;
    model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_9__.BuyerUserProductAddressViewModel(this.addressForm.value.id == null ? 0 : this.addressForm.value.id, 0, this.addressForm.value.family, this.addressForm.value.name, this.addressForm.value.phoneNumber.toString(), this.addressForm.value.address, this.provinceId, this.addressForm.value.homePhoneNumber == null ? '' : this.addressForm.value.homePhoneNumber.toString(), this.addressForm.value.companyName == null ? '' : this.addressForm.value.companyName, 1, this.cityId, this.addressForm.value.postCode == null ? '' : this.addressForm.value.postCode.toString(), this.addressForm.value.title);
    this.userService.AddOrUpdateUserProductAddress(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        if (model.id == 0) {
          model.id = res.data;

          if (this.userAddress.buyerUserProductAddresses == null) {
            this.userAddress.buyerUserProductAddresses = [];
          }

          this.userAddress.buyerUserProductAddresses.push(model);
          this.selectedAddress = model.id;
        } else {
          let index = this.userAddress.buyerUserProductAddresses.findIndex(e => e.id == model.id);
          model.id = this.selectedAddress;
          this.userAddress.buyerUserProductAddresses[index] = model;
        }

        this.onCheckSendAddress();
        this.addSelected = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  getSendPriceById(id) {
    const product = this.cart.products.find(e => e.id == id);
    let kg = Math.floor(product.weight * product.count / 1000);

    if (kg < 1) {
      kg = 1;
    }

    if (kg <= 2) {
      return product.defaultSendPrice;
    } else {
      return Math.floor(kg - 2) * product.defaultPriceEachKg + product.defaultSendPrice;
    }
  }

  getSendPrices(products) {
    if (products == null || products.length == 0) {
      return 0;
    }

    let kg = 0;
    let extraDeliveryPrice = 0;
    products.forEach(product => {
      kg += product.weight / 1000 * product.count;

      if (product.extraDeliveryPrice != 0) {
        extraDeliveryPrice += product.extraDeliveryPrice;
      }
    });
    kg = Math.floor(kg);

    if (kg < 1) {
      kg = 1;
    }

    if (kg <= 2) {
      return products[0].defaultSendPrice + extraDeliveryPrice;
    } else {
      return Math.floor(kg - 2) * products[0].defaultPriceEachKg + products[0].defaultSendPrice + extraDeliveryPrice;
    }
  }

  onAnswerSelected(event) {
    this.selectedAddress = +event.detail.value;
    this.onCheckSendAddress();
  }

  ionViewWillEnter() {
    this.leave = false;
    this.found = false;
    this.isLoading2 = true;
    this.selectedAddress = -1;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.userService.GetUserProductAddress().subscribe(res => {
      this.isLoading = false;

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.userAddress = res.data;
      } else {
        this.userAddress = res.data;
      }
    }, err => {
      this.isLoading = false;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
    this.orderService.GetUserCartDetail2().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.cart = res.data;

        if (res.data.courses == null) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(0);
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(res.data.courses.length);
        }

        if (res.data.products == null) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartProductsCount(0);
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartProductsCount(res.data.products.length);
        }

        _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getIsLoading().subscribe(res2 => {
          this.isLoading2 = res2;
          this.isCourseDisabled = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsCourseDisabled;
          this.isProductDisabled = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsProductDisabled;

          if (!this.isLoading2 && this.isProductDisabled && !this.leave && this.cart.products != null && this.cart.products.length > 0) {
            this.found = true;
            this.alert();
          }

          if (!this.isLoading2 && this.isCourseDisabled && !this.leave && this.cart.courses != null && this.cart.courses.length > 0) {
            this.found = true;
            this.alert2();
          }
        });

        if (res.data.changeAbleProducts != null && res.data.changeAbleProducts.length > 0) {
          let list = '';
          let c = 1;
          res.data.changeAbleProducts.forEach(e => {
            if (e.designId == 0) {
              if (c == 1) {
                list += c + '-' + e.name;
              } else {
                list += '\n' + c + '-' + e.name;
              }
            } else {
              if (c == 1) {
                list += c + '-' + e.name + '(' + e.designTitle + ')';
              } else {
                list += '\n' + c + '-' + e.name + '(' + e.designTitle + ')';
              }
            }

            c++;
          });
          this.presentLimitProductCart2(list);
        }

        this.coursesPrice = this.getCoursesPrice();
        this.productsPrice = this.getProductsPrice();
        this.productsSendPrice = this.getProductsSendPrice();
        this.totalOffPrice += this.getTotalOffPrice();
        this.totalPayPrice = this.getTotalPayPrice();

        if (this.cart.isOffCodeUsed && !this.cart.isProductOffCode) {
          if (res.data.oneCourseOnly) {
            this.presentOffCodeConfirm3();
          } else {
            this.presentOffCodeConfirm();
          }
        }

        if (this.cart.isOffCodeUsed && this.cart.isProductOffCode && this.cart.courses.length > 0) {
          if (this.cart.courses.findIndex(e => e.offPrice > 0) == -1) {
            this.presentOffCodeConfirm2();
          }
        }
      } else if (res.status == _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {} else {
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(0);
      }
    }, err => {
      _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(0);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentOffCodeConfirm() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه!',
        message: 'کد تخفیف فقط به دوره هایی که تخفیف ندارند اعمال میشود',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presentOffCodeConfirm3() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const course = _this6.cart.courses.find(e => e.courseId == _this6.cart.courseId);

      if (course == null) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this6.toastController, 'تخفیف فقط به دوره با کد ' + _this6.cart.courseId + ' قابل اعمال است');
        return;
      }

      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه!',
        message: 'کد تخفیف فقط به دوره ' + course.courseName + ' در صورتی که تخفیف نداشته باشد، اعمال میشود',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presentOffCodeConfirm2() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه!',
        message: 'کد تخفیف فقط به کالا هایی که تخفیف ندارند اعمال میشود',
        backdropDismiss: false,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'success',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm(id) {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this8.onDelete(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2(id) {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this9.onDelete2(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentRemoveOffPrice() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this10.onRemoveOffPrice();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentLimitProductCart(model) {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'موجودی کالا های زیر تغییر یافته: \n' + model,
        backdropDismiss: false,
        keyboardClose: true,
        buttons: [{
          text: 'بروزرسانی سبد',
          handler: () => {
            location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentLimitProductCart2(model) {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'موجودی کالا های زیر تغییر یافته: \n' + model,
        backdropDismiss: false,
        keyboardClose: true,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          handler: () => {// location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.orderService.RemoveCourseById2(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.cart.courses.splice(this.cart.courses.findIndex(c => c.id === +id), 1);
        this.coursesPrice = this.getCoursesPrice();
        this.totalOffPrice = this.getTotalOffPrice();
        this.totalPayPrice = this.getTotalPayPrice();
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(--_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.BetaCartCoursesCount); // GResponse.CartCoursesCount--;

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDelete2(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.orderService.RemoveProductById(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.selectedItemIndex = -1;
        this.cart.products.splice(this.cart.products.findIndex(c => c.id === +id), 1);
        this.productsPrice = this.getProductsPrice();
        this.productsSendPrice = this.getProductsSendPrice(); // this.totalOffPrice = this.getTotalOffPrice();

        this.totalPayPrice = this.getTotalPayPrice();
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartProductsCount(--_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.BetaCartProductsCount); // GResponse.CartCoursesCount--;

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onRemove(id) {
    this.presentAlertConfirm(id);
  }

  onRemove2(id) {
    this.presentAlertConfirm2(id);
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

  onAddOffPrice() {
    if (this.offPriceCode == null || this.offPriceCode === '') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف نامعتبر است');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.orderService.AddOffCodeToCart(this.offPriceCode).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.cart.isOffCodeUsed = true;
        this.cart.usedOffCodePercent = res.data.offPercent;
        this.cart.usedOffCodePrice = res.data.offPrice;
        this.cart.isProductOffCode = res.data.isProduct;
        this.cart.oneCourseOnly = res.data.oneCourseOnly;
        this.cart.courseId = res.data.courseId;

        if (res.data.isProduct) {
          this.productsPrice = this.getProductsPrice();
        } else {
          this.totalOffPrice = this.getTotalOffPrice();
        }

        this.totalPayPrice = this.getTotalPayPrice();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف اعمال شد');

        if (this.cart.isOffCodeUsed && !this.cart.isProductOffCode) {
          if (res.data.oneCourseOnly) {
            this.presentOffCodeConfirm3();
          } else {
            this.presentOffCodeConfirm();
          }
        }

        if (this.cart.isOffCodeUsed && this.cart.isProductOffCode && this.cart.courses.length > 0) {
          if (this.cart.courses.findIndex(e => e.offPrice > 0) == -1) {
            this.presentOffCodeConfirm2();
          }
        }
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف استفاده شده است');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف نامعتبر است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onRemoveOffPrice() {
    if (!this.cart.isOffCodeUsed) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیفی درج نشده است');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.orderService.RemoveOffPrice().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.cart.isOffCodeUsed = false;
        this.cart.usedOffCodePercent = 0;
        this.cart.usedOffCodePrice = 0;

        if (this.cart.isProductOffCode) {
          this.productsPrice = this.getProductsPrice();
        } else {
          this.totalOffPrice = this.getTotalOffPrice();
        }

        this.totalPayPrice = this.getTotalPayPrice();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف حذف شد');
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف حذف نشد');
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کد تخفیف حذف نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlert(msg = 'امکان ارسال با پیک موتوری برای آدرس شما وجود ندارد') {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: msg,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ویرایش آدرس',
          handler: () => {
            _this13.addressSelected();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCheckSendAddress() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    let address = this.userAddress.buyerUserProductAddresses.find(e => e.id == this.selectedAddress);
    let i = this.cart.products.findIndex(p => p.orderSendTypeId == 2 && (p.seller.provinceId != address.provinceId || p.seller.cityId != address.cityId));

    if (i != -1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'امکان ارسال با پیک موتوری برای آدرس شما وجود ندارد');
      this.canSend = false;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController); // tslint:disable-next-line: max-line-length

      this.presentAlert('ارسال با پیک موتوری برای محصول\n' + this.cart.products[i].name + '\nفقط در استان ' + this.userAddress.provinces.find(e => e.id == this.cart.products[i].seller.provinceId).name + ' شهر ' + this.userAddress.cities.find(e => e.id == this.cart.products[i].seller.cityId).name + ' مقدور است' + '\n\nلطفا آدرس خود را ویرایش کنید و یا محصول را مجدد با شیوه ی ارسال دیگری انتخاب کنید');
    } else {
      // SharedIonic.toast(this.toastController, 'آدرس مورد تایید است');
      this.canSend = true;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
    } // this.cart.products.forEach(p => {
    //   if (p.orderSendTypeId == 2) {
    //     if (p.seller.provinceId != address.provinceId || p.seller.cityId != address.cityId) {
    //       this.canSend = false;
    //     }
    //   }
    // });
    // return false;

  }

  onPay() {
    var _this14 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this14.found) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'فعلا تعطیل است');
        return;
      }

      if (_this14.selectedAddress == -1 && _this14.cart.products.length > 0) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'آدرس انتخاب نشده');
        return;
      }

      if (_this14.cart.products.length > 0 && !_this14.canSend) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'امکان ارسال با پیک موتوری برای آدرس شما وجود ندارد');
        return;
      }

      if (_this14.selectedPay === 'wallet') {
        if (_this14.cart.walletStock < _this14.getTotalPayPrice()) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'موجوی کیف پول کم است');

          _this14.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.UserPanelUrl + '/' + 1);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this14.loadingController);

          _this14.orderService.PayCartByWallet(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_3__.CartPayViewModel(_this14.selectedAddress, _this14.cart.id)).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(_this14.toastController);
              _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartCoursesCount(0);
              _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.setCartProductsCount(0); // GResponse.CartCoursesCount = 0;

              if (_this14.cart.products != null && _this14.cart.products.length > 0) {
                _this14.cart.products.forEach(product => {
                  _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.MyProductIds.push(product.productId);
                });
              }

              if (_this14.cart.courses != null && _this14.cart.courses.length > 0) {
                _this14.cart.courses.forEach(course => {
                  _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.MyCourseIds.push(course.courseId);
                });

                _this14.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.UserPanelUrl + '/' + 4);
              } else {
                _this14.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.UserPanelUrl + '/' + 14);
              }
            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {
              let list = '';
              let c = 1;
              res.data.productCartViewModels.forEach(e => {
                if (e.designId == 0) {
                  if (c == 1) {
                    list += c + '-' + e.name;
                  } else {
                    list += '\n' + c + '-' + e.name;
                  }
                } else {
                  if (c == 1) {
                    list += c + '-' + e.name + '(' + e.designTitle + ')';
                  } else {
                    list += '\n' + c + '-' + e.name + '(' + e.designTitle + ')';
                  }
                }

                c++;
              });

              _this14.presentLimitProductCart(list); // SharedIonic.toast(this.toastController, 'موجودی کالا کم است');

            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.ErrorStatus) {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'اعتبار کد تخفیف منقضی شده است');

              _this14.onRemoveOffPrice();
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
          });
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this14.loadingController);

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsAndroid) {
          _this14.orderService.PhonePayCartByBank(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_3__.CartPayViewModel(_this14.selectedAddress, _this14.cart.id)).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
              _this14.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data.url);
            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {
              let list = '';
              let c = 1;
              res.data.productCartViewModels.forEach(e => {
                if (e.designId == 0) {
                  if (c == 1) {
                    list += c + '-' + e.name;
                  } else {
                    list += '\n' + c + '-' + e.name;
                  }
                } else {
                  if (c == 1) {
                    list += c + '-' + e.name + '(' + e.designTitle + ')';
                  } else {
                    list += '\n' + c + '-' + e.name + '(' + e.designTitle + ')';
                  }
                }

                c++;
              });

              _this14.presentLimitProductCart(list); // SharedIonic.toast(this.toastController, 'موجودی کالا کم است');

            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.ErrorStatus) {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'اعتبار کد تخفیف منقضی شده است');

              _this14.onRemoveOffPrice();
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
          });
        } else {
          _this14.orderService.PayCartByBank(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_3__.CartPayViewModel(_this14.selectedAddress, _this14.cart.id)).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
              _this14.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data.url);
            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.AccessDeniedStatus) {
              let list = '';
              let c = 1;
              res.data.productCartViewModels.forEach(e => {
                if (e.designId == 0) {
                  if (c == 1) {
                    list += c + '-' + e.name;
                  } else {
                    list += '\n' + c + '-' + e.name;
                  }
                } else {
                  if (c == 1) {
                    list += c + '-' + e.name + '(' + e.designTitle + ')';
                  } else {
                    list += '\n' + c + '-' + e.name + '(' + e.designTitle + ')';
                  }
                }

                c++;
              });

              _this14.presentLimitProductCart(list); // SharedIonic.toast(this.toastController, 'موجودی کالا کم است');

            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.ErrorStatus) {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this14.toastController, 'اعتبار کد تخفیف منقضی شده است');

              _this14.onRemoveOffPrice();
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this14.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(_this14.toastController);
          });
        }
      }
    })();
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  getCoursesPrice() {
    if (this.cart.courses == null || this.cart.courses.length == 0) {
      return 0;
    }

    let price = 0;
    this.cart.courses.forEach(course => {
      if (course.offPrice > 0) {
        price += course.offPrice;
      } else {
        price += course.price;
      }
    });
    return price;
  }

  getProductsPrice() {
    if (this.cart.products == null || this.cart.products.length == 0) {
      return 0;
    }

    let price = 0;
    this.totalOffPrice = 0;
    this.cart.products.forEach(product => {
      if (product.hasDiscountLargeOrder) {
        if (product.hasDiscountForEachOrder) {
          if (product.discountOrderCount <= product.count) {
            let count = Math.floor(product.count / product.discountOrderCount);

            if (product.discountPercent != 0) {
              let percent = product.discountPercent * count;

              if (product.maxDiscountPercent < product.discountPercent * count) {
                percent = product.maxDiscountPercent;
              }

              if (product.offPrice > 0) {
                price += product.offPrice * product.count * (100 - percent) / 100;
              } else {
                price += product.price * product.count * (100 - percent) / 100;
              }
            } else {
              let price2 = product.discountPrice * count;

              if (product.maxDiscountPrice < product.discountPrice * count) {
                price2 = product.maxDiscountPrice;
              }

              if (product.offPrice > 0) {
                price += product.offPrice * product.count - price2;
              } else {
                price += product.price * product.count - price2;
              }
            }
          } else {
            if (product.offPrice > 0) {
              price += product.offPrice * product.count;
            } else {
              if (this.cart.isOffCodeUsed) {
                if (this.cart.usedOffCodePercent != 0 && this.cart.isProductOffCode) {
                  price += product.price * product.count - product.price * product.count * this.cart.usedOffCodePercent / 100;
                  this.totalOffPrice += product.price * product.count * this.cart.usedOffCodePercent / 100;
                } else if (this.cart.usedOffCodePrice != 0 && this.cart.isProductOffCode) {
                  price += product.price * product.count - this.cart.usedOffCodePrice;
                  this.totalOffPrice += this.cart.usedOffCodePrice;
                } else {
                  price += product.price * product.count;
                }
              } else {
                price += product.price * product.count;
              }
            }
          }
        } else {
          if (product.discountOrderCount <= product.count) {
            if (product.discountPercent != 0) {
              if (product.offPrice > 0) {
                price += product.offPrice * product.count * (100 - product.discountPercent) / 100;
              } else {
                price += product.price * product.count * (100 - product.discountPercent) / 100;
              }
            } else {
              if (product.offPrice > 0) {
                price += product.offPrice * product.count - product.discountPrice;
              } else {
                price += product.price * product.count - product.discountPrice;
              }
            }
          } else {
            if (product.offPrice > 0) {
              price += product.offPrice * product.count;
            } else {
              if (this.cart.isOffCodeUsed) {
                if (this.cart.usedOffCodePercent != 0 && this.cart.isProductOffCode) {
                  price += product.price * product.count - product.price * product.count * this.cart.usedOffCodePercent / 100;
                  this.totalOffPrice += product.price * product.count * this.cart.usedOffCodePercent / 100;
                } else if (this.cart.usedOffCodePrice != 0 && this.cart.isProductOffCode) {
                  price += product.price * product.count - this.cart.usedOffCodePrice;
                  this.totalOffPrice += this.cart.usedOffCodePrice;
                } else {
                  price += product.price * product.count;
                }
              } else {
                price += product.price * product.count;
              }
            }
          }
        }
      } else {
        if (product.offPrice > 0) {
          price += product.offPrice * product.count;
        } else {
          if (this.cart.isOffCodeUsed) {
            if (this.cart.usedOffCodePercent != 0 && this.cart.isProductOffCode) {
              price += product.price * product.count - product.price * product.count * this.cart.usedOffCodePercent / 100;
              this.totalOffPrice += product.price * product.count * this.cart.usedOffCodePercent / 100;
            } else if (this.cart.usedOffCodePrice != 0 && this.cart.isProductOffCode) {
              price += product.price * product.count - this.cart.usedOffCodePrice;
              this.totalOffPrice += this.cart.usedOffCodePrice;
            } else {
              price += product.price * product.count;
            }
          } else {
            price += product.price * product.count;
          }
        }
      }
    });
    return price;
  }

  getProductsSendPrice() {
    if (this.cart.products == null || this.cart.products.length == 0) {
      return 0;
    }

    let price = 0;
    this.offSendPrice = 0;
    let index = 0;
    let sellerIds = [];
    let sellerIds2 = [];
    this.cart.products.forEach(product => {
      if (sellerIds.findIndex(e => e == product.seller.id) == -1 && sellerIds2.findIndex(e => e == product.seller.id) == -1) {
        if (product.seller.hasFreeSendPrediction) {
          sellerIds.push(product.seller.id);
        } else {
          sellerIds2.push(product.seller.id); // price = this.onGetSendPrice(index);
        }
      }

      index++;
    });
    sellerIds.forEach(sellerId => {
      let products = this.cart.products.filter(e => e.seller.id == sellerId);

      for (let n = 2; n <= 6; n++) {
        let filterProducts = products.filter(e => e.orderSendTypeId == n && !e.hasFreeSend);
        let productPrice = 0;
        let sendPrice = 0;
        filterProducts.forEach(product => {
          if (product.offPrice > 0) {
            productPrice += product.offPrice * product.count;
          } else {
            productPrice += product.price * product.count;
          } // sendPrice += this.getSendPriceById(product.id);

        });
        sendPrice += this.getSendPrices(filterProducts);

        if (products[0].seller.freeSendPredictionPrice > productPrice) {
          price += sendPrice;
        } else {
          this.offSendPrice += sendPrice;
        }
      }
    });
    sellerIds2.forEach(sellerId => {
      let products = this.cart.products.filter(e => e.seller.id == sellerId);

      for (let n = 2; n <= 6; n++) {
        let filterProducts = products.filter(e => e.orderSendTypeId == n && !e.hasFreeSend);
        price += this.getSendPrices(filterProducts);
      }
    });
    return price;
  }

  getTotalOffPrice() {
    if (this.cart.isOffCodeUsed) {
      // if (this.cart.isProductOffCode) {
      //   if (this.cart.products == null || this.cart.products.length == 0) {
      //     return 0;
      //   }
      //   let price = 0;
      //   this.cart.products.forEach(product => {
      //     if (!(product.offPrice > 0)) {
      //       price += product.price * product.count;
      //     }
      //   });
      //   if (this.cart.usedOffCodePrice == 0) {
      //     const offPricePercent = this.cart.usedOffCodePercent;
      //     return ((price * offPricePercent) / 100);
      //   } else {
      //     const offPrice = this.cart.usedOffCodePrice;
      //     return (price - offPrice);
      //   }
      // } else
      if (!this.cart.isProductOffCode) {
        if (this.cart.courses == null || this.cart.courses.length == 0) {
          return 0;
        }

        if (this.cart.usedOffCodePercent == 0 && this.cart.usedOffCodePrice != 0) {
          return this.cart.usedOffCodePrice;
        }

        let price = 0;

        if (this.cart.oneCourseOnly) {
          let course = this.cart.courses.find(e => e.courseId == this.cart.courseId);

          if (course != undefined) {
            price = course.price;
          }
        } else {
          this.cart.courses.forEach(course => {
            if (!(course.offPrice > 0)) {
              price += course.price;
            }
          });
        }

        if (this.cart.usedOffCodePrice == 0) {
          const offPricePercent = this.cart.usedOffCodePercent;
          return price * offPricePercent / 100;
        } else {
          const offPrice = this.cart.usedOffCodePrice;
          return price - offPrice;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  getTotalPayPrice() {
    const mainPrice = this.getCoursesPrice();
    const mainPrice2 = this.getProductsPrice();
    const mainPrice3 = this.getProductsSendPrice();
    let offPrice = 0;

    if (this.cart.isOffCodeUsed && !this.cart.isProductOffCode) {
      offPrice = this.getTotalOffPrice();
    } else {// offPrice = this.totalOffPrice;
    }

    if (this.cart.isOffCodeUsed) {
      return mainPrice + mainPrice2 + mainPrice3 - offPrice;
    } else {
      return mainPrice + mainPrice2 + mainPrice3;
    }
  }

};

CartComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController
}];

CartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-cart',
  template: _cart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CartComponent);


/***/ }),

/***/ 71637:
/*!************************************************!*\
  !*** ./src/app/view/pages/cart/cart.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModule": () => (/* binding */ CartModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-routing.module */ 68544);
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ 24887);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/utility/account.interceptor */ 8363);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/service/order/order.service */ 22773);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/loading/loading.module */ 90876);















let CartModule = class CartModule {
};
CartModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__.CartComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__.CartRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_5__.PriceModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__.PersianDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__.LoadingModule
        ],
        providers: [
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_7__.OrderService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
                useClass: _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_6__.AccountInterceptor,
                multi: true
            }
        ]
    })
], CartModule);



/***/ }),

/***/ 14057:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/cart/cart.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  display: block;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\ninput, select, textarea {\n  font-family: inherit;\n}\n\nion-icon {\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.page-shell {\n  width: min(1200px, 100% - 48px);\n  margin-inline: auto;\n}\n\n.cart-page {\n  --background: var(--bg-canvas);\n}\n\n/* ==========================================================================\n   Header & Navbar (Educational AvalAmooz Style)\n   ========================================================================== */\n\n.cart-header {\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(109, 40, 217, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n\n.cart-header::after {\n  display: none;\n}\n\n.cart-nav-shell {\n  direction: ltr !important;\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 72px;\n}\n\n.cart-nav-start {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.cart-back-btn {\n  --color: var(--purple);\n  margin: 0;\n}\n\n.cart-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.cart-brand__logo {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-brand__logo img {\n  object-fit: contain;\n}\n\n.cart-brand__sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 13px;\n  animation: pulse-sparkle 2.5s infinite;\n}\n\n.cart-brand__text {\n  direction: rtl;\n  text-align: right;\n}\n\n.cart-brand__text b {\n  display: block;\n  color: var(--purple);\n  font-size: 21px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.cart-brand__text small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 2px;\n}\n\n.cart-nav-links {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  color: var(--ink);\n  background: transparent;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.nav-chip ion-icon {\n  font-size: 16px;\n  color: var(--purple);\n}\n\n.nav-chip:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.cart-nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.action-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #f6f1fd;\n  color: var(--purple);\n  border: 1px solid #e9d5ff;\n  font-size: 20px;\n  transition: all 0.2s ease;\n}\n\n.action-btn:hover {\n  background: var(--purple-light);\n  transform: translateY(-1px);\n}\n\n.cart-indicator {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #dcd0f7;\n  font-size: 20px;\n}\n\n.cart-count-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  font-size: 10px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #3b2802;\n  border: 2px solid #fff;\n  padding: 1px 6px;\n  border-radius: 12px;\n  line-height: 1.4;\n}\n\n.menu-btn {\n  --color: var(--purple);\n  display: inline-flex;\n  margin: 0;\n}\n\n.cart-nav-actions .icon-button.menu-toggle {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #ddd6fe;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n\n.cart-nav-actions .icon-button.menu-toggle ion-icon {\n  font-size: 22px;\n  color: var(--purple);\n}\n\n.cart-nav-actions .icon-button.menu-toggle:hover {\n  background: var(--purple);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n.cart-nav-actions .icon-button.menu-toggle:hover ion-icon {\n  color: #ffffff;\n}\n\n.cart-search-bar {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 4px 24px 16px;\n  animation: slide-down 0.2s ease-out;\n}\n\n.search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #ffffff;\n  border: 2px solid #ddd1f5;\n  border-radius: 14px;\n  padding: 6px 14px;\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);\n}\n\n.search-input-wrap input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 13.5px;\n}\n\n.search-icon {\n  color: var(--purple);\n  font-size: 20px;\n}\n\n.search-submit-btn {\n  background: var(--purple);\n  color: #fff;\n  padding: 6px 14px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.search-close-btn {\n  color: var(--muted);\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n\n/* ==========================================================================\n   Hero Section\n   ========================================================================== */\n\n.cart-hero {\n  position: relative;\n  background: linear-gradient(180deg, #f7f2ff 0%, #faf8fe 65%, #ffffff 100%);\n  overflow: hidden;\n  padding-block: 36px 44px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.cart-hero__glow {\n  position: absolute;\n  top: -120px;\n  inset-inline-start: 12%;\n  width: 440px;\n  height: 440px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.22) 0%, rgba(255, 255, 255, 0) 70%);\n  pointer-events: none;\n}\n\n.cart-hero__content {\n  display: grid;\n  grid-template-columns: 1.15fr 0.85fr;\n  align-items: flex-end;\n  gap: 40px;\n  position: relative;\n  z-index: 2;\n}\n\n.hero-quick-links {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.hero-back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--purple);\n  transition: all 0.2s;\n}\n\n.hero-back-link:hover {\n  color: var(--purple-dark);\n  text-decoration: underline;\n}\n\n.link-sep {\n  color: #cbd5e1;\n  font-size: 12px;\n}\n\n.hero-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #5b21b6;\n  background: #ede6fc;\n  padding: 6px 14px;\n  border-radius: 30px;\n  font-size: 11.5px;\n  font-weight: 800;\n  border: 1px solid #ddd2f7;\n  margin-bottom: 14px;\n}\n\n.eyebrow-star {\n  color: var(--amber);\n  font-size: 15px;\n}\n\n.cart-hero h1 {\n  font-size: clamp(28px, 3.4vw, 42px);\n  font-weight: 900;\n  line-height: 1.45;\n  letter-spacing: -0.8px;\n  margin: 0 0 14px;\n  color: var(--ink);\n}\n\n.hero-highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n  z-index: 1;\n}\n\n.hero-highlight svg {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -4px;\n  height: 14px;\n  fill: none;\n  stroke: var(--amber);\n  stroke-width: 4.5;\n  stroke-linecap: round;\n  z-index: -1;\n}\n\n.hero-desc {\n  color: var(--ink-secondary);\n  font-size: 14px;\n  line-height: 1.9;\n  max-width: 560px;\n  margin: 0;\n}\n\n/* Stepper Indicator */\n\n.checkout-steps-panel {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid #e5dcfa;\n  border-radius: 20px;\n  padding: 18px 22px;\n  box-shadow: 0 8px 30px rgba(109, 40, 217, 0.05);\n}\n\n.checkout-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  opacity: 0.45;\n  transition: all 0.25s ease;\n}\n\n.checkout-step.is-active {\n  opacity: 1;\n}\n\n.step-num {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 900;\n  background: #f1edfb;\n  color: var(--purple);\n  border: 2px solid #ddd2f7;\n  transition: all 0.25s ease;\n}\n\n.checkout-step.is-active .step-num {\n  background: var(--purple);\n  color: #fff;\n  border-color: var(--purple);\n  box-shadow: 0 0 0 5px var(--purple-glow);\n}\n\n.step-meta {\n  display: flex;\n  flex-direction: column;\n}\n\n.step-meta strong {\n  font-size: 12.5px;\n  color: var(--ink);\n  font-weight: 800;\n}\n\n.step-meta small {\n  font-size: 10.5px;\n  color: var(--muted);\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\n.step-line {\n  height: 2px;\n  flex: 1;\n  min-width: 20px;\n  margin-inline: 12px;\n  background: #e2d9f7;\n  border-radius: 2px;\n  transition: background 0.25s ease;\n}\n\n.step-line.is-done {\n  background: var(--purple);\n}\n\n/* ==========================================================================\n   Main Workspace Layout\n   ========================================================================== */\n\n.cart-workspace {\n  padding-block: 40px 60px;\n}\n\n.checkout-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(320px, 0.85fr);\n  gap: 28px;\n  align-items: start;\n}\n\n.checkout-main, .checkout-sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  min-width: 0;\n}\n\n.checkout-sidebar {\n  position: sticky;\n  top: 96px;\n}\n\n.surface {\n  background: var(--paper);\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  box-shadow: 0 8px 30px rgba(109, 40, 217, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s;\n}\n\n/* Card Heading Header */\n\n.card-heading {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 24px 28px;\n  border-bottom: 1px solid var(--border-soft);\n  background: linear-gradient(180deg, #fbfaff 0%, #ffffff 100%);\n}\n\n.card-heading--compact {\n  padding-block: 20px;\n}\n\n.card-heading__icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  border: 1px solid #dcd0f7;\n}\n\n.card-kicker {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--purple);\n  letter-spacing: 0.02em;\n  margin-bottom: 3px;\n}\n\n.card-heading h2 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0;\n}\n\n.card-heading p {\n  font-size: 12px;\n  color: var(--muted);\n  margin: 3px 0 0;\n}\n\n/* ==========================================================================\n   Order Items Styling\n   ========================================================================== */\n\n.order-card {\n  padding: 0;\n}\n\n.item-group {\n  padding: 24px 28px;\n}\n\n.item-group + .item-group {\n  border-top: 1px dashed var(--border-soft);\n}\n\n.group-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.group-heading-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.group-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.product-icon-wrap {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.group-heading-title strong {\n  font-size: 14.5px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.digital-tag, .physical-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 10.5px;\n  font-weight: 800;\n  padding: 3px 8px;\n  border-radius: 12px;\n}\n\n.digital-tag {\n  background: #ecfdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n\n.physical-tag {\n  background: #eff6ff;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n\n.group-count {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--muted);\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.items-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 56px minmax(0, 1fr) auto auto;\n  gap: 16px;\n  align-items: center;\n  background: #fbfbfe;\n  border: 1px solid #ece8f6;\n  border-radius: 16px;\n  padding: 16px;\n  transition: all 0.2s ease;\n}\n\n.cart-item:hover {\n  background: #ffffff;\n  border-color: #d8cefa;\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.06);\n}\n\n.product-item {\n  grid-template-columns: 56px minmax(0, 1fr) auto auto auto;\n}\n\n.item-visual {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n\n.course-visual {\n  background: #f3ebff;\n  color: var(--purple);\n  border: 1px solid #e5d7fa;\n}\n\n.product-visual {\n  background: #fef7e7;\n  color: var(--amber-dark);\n  border: 1px solid #fde7b6;\n}\n\n.item-info {\n  min-width: 0;\n}\n\n.item-badge-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 5px;\n  flex-wrap: wrap;\n}\n\n.item-kind {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--purple);\n}\n\n.product-kind {\n  color: var(--amber-dark);\n}\n\n.item-instant-badge {\n  font-size: 10px;\n  color: #059669;\n  background: #d1fae5;\n  padding: 2px 7px;\n  border-radius: 8px;\n  font-weight: 700;\n}\n\n.item-variant-chip {\n  font-size: 10px;\n  color: var(--ink);\n  background: #e2e8f0;\n  padding: 2px 7px;\n  border-radius: 8px;\n  font-weight: 700;\n}\n\n.item-title {\n  display: block;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: color 0.2s;\n}\n\n.item-title:hover {\n  color: var(--purple);\n}\n\n.item-features {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 6px;\n  font-size: 11.5px;\n  color: var(--muted);\n  flex-wrap: wrap;\n}\n\n.item-features span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.item-features ion-icon {\n  font-size: 14px;\n  color: var(--purple);\n}\n\n.item-price {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  white-space: nowrap;\n}\n\n.old-price {\n  font-size: 11.5px;\n  color: #94a3b8;\n  text-decoration: line-through;\n  margin-bottom: 2px;\n}\n\n.current-price {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--purple);\n}\n\n.price-note {\n  font-size: 10px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.detail-toggle-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--purple);\n  background: var(--purple-light);\n  padding: 6px 10px;\n  border-radius: 10px;\n  transition: all 0.2s;\n}\n\n.detail-toggle-btn:hover {\n  background: #ddd2f7;\n}\n\n.remove-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n  font-size: 18px;\n  transition: all 0.2s;\n}\n\n.remove-btn:hover {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.product-details-panel {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  background: #f8f6fc;\n  border: 1px solid #e7dff7;\n  border-top: none;\n  border-radius: 0 0 16px 16px;\n  padding: 16px 20px;\n  margin-top: -6px;\n  animation: slide-down 0.2s ease-out;\n}\n\n.detail-pill {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  border-left: 1px solid #ded5f2;\n  padding-left: 10px;\n}\n\n.detail-pill:last-child {\n  border-left: none;\n}\n\n.detail-pill span {\n  font-size: 11px;\n  color: var(--muted);\n}\n\n.detail-pill strong {\n  font-size: 12.5px;\n  color: var(--ink);\n}\n\n.detail-pill strong.free-text {\n  color: var(--emerald);\n  font-weight: 800;\n}\n\n.detail-pill.subtotal strong {\n  color: var(--purple);\n  font-weight: 900;\n}\n\n/* Digital Only Note */\n\n.digital-note-card {\n  background: linear-gradient(135deg, #f5f3ff 0%, #faf8fe 100%);\n  border: 1px solid #ddd2f7;\n  padding: 22px 26px;\n}\n\n.digital-note-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n\n.digital-note-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #ecfdf5;\n  color: var(--emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  border: 1px solid #a7f3d0;\n  flex-shrink: 0;\n}\n\n.digital-note-text h3 {\n  font-size: 14.5px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.digital-note-text p {\n  font-size: 13px;\n  color: var(--ink-secondary);\n  line-height: 1.85;\n  margin: 0;\n}\n\n/* ==========================================================================\n   Delivery Address Section\n   ========================================================================== */\n\n.address-card {\n  padding: 0;\n}\n\n.address-top-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 20px 28px 10px;\n}\n\n.address-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  padding: 10px 28px 26px;\n}\n\n.address-option {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: 12px;\n  align-items: center;\n  background: #ffffff;\n  border: 1.5px solid #e8e4f5;\n  border-radius: 16px;\n  padding: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.address-option:hover {\n  border-color: #c4b5fd;\n  background: #faf8ff;\n}\n\n.address-option.is-selected {\n  border-color: var(--purple);\n  background: #f8f5ff;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.08);\n}\n\n.address-radio-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n\n.address-idx {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 700;\n}\n\n.address-content-col {\n  min-width: 0;\n}\n\n.address-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n\n.address-title-row strong {\n  font-size: 13.5px;\n  color: var(--ink);\n  font-weight: 800;\n}\n\n.receiver-name {\n  font-size: 11px;\n  color: var(--muted);\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 6px;\n}\n\n.address-street {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  line-height: 1.6;\n  margin: 0 0 6px;\n}\n\n.address-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 11px;\n  color: var(--muted);\n}\n\n.address-meta-row span {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.check-icon {\n  font-size: 22px;\n  color: #cbd5e1;\n  transition: color 0.2s;\n}\n\n.address-option.is-selected .check-icon {\n  color: var(--purple);\n}\n\n.address-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 36px 20px;\n}\n\n.address-empty-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  margin-bottom: 14px;\n}\n\n.address-empty-state h4 {\n  font-size: 15px;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n\n.address-empty-state p {\n  font-size: 12.5px;\n  color: var(--muted);\n  margin: 0 0 16px;\n}\n\n/* Inline Address Form */\n\n.address-form-box {\n  background: #faf8ff;\n  border: 1px solid #e7dff7;\n  border-radius: 18px;\n  padding: 24px;\n  margin: 16px 28px 24px;\n}\n\n.form-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.form-header strong {\n  font-size: 15px;\n  color: var(--ink);\n  display: block;\n  font-weight: 800;\n}\n\n.form-header small {\n  font-size: 11.5px;\n  color: var(--muted);\n  margin-top: 2px;\n  display: block;\n}\n\n.form-close-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #ece8f6;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.form-row-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.location-grid {\n  margin-bottom: 14px;\n}\n\n.full-width-field {\n  grid-column: 1/-1;\n}\n\n.custom-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.field-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink-secondary);\n}\n\n.custom-field input, .custom-field textarea, .custom-field select {\n  width: 100%;\n  background: #ffffff;\n  border: 1.5px solid #ded5f2;\n  border-radius: 12px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: var(--ink);\n  outline: none;\n  transition: all 0.2s ease;\n}\n\n.custom-field input:focus, .custom-field textarea:focus, .custom-field select:focus {\n  border-color: var(--purple);\n  box-shadow: 0 0 0 4px var(--purple-glow);\n}\n\n.select-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.select-wrapper select {\n  -webkit-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  padding-left: 36px;\n}\n\n.select-caret {\n  position: absolute;\n  left: 12px;\n  color: var(--purple);\n  font-size: 16px;\n  pointer-events: none;\n}\n\n.form-actions-row {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n/* ==========================================================================\n   Sidebar: Discount, Payment Method & Summary\n   ========================================================================== */\n\n.checkout-sidebar .surface {\n  padding: 22px;\n}\n\n.aside-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.aside-heading__icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.aside-heading__text strong {\n  display: block;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.aside-heading__text small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n/* Coupon Box */\n\n.coupon-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8f6fc;\n  border: 1.5px solid #ded5f2;\n  border-radius: 12px;\n  padding: 4px 6px 4px 12px;\n  transition: border-color 0.2s;\n}\n\n.coupon-box:focus-within {\n  border-color: var(--purple);\n  box-shadow: 0 0 0 4px var(--purple-glow);\n}\n\n.coupon-icon {\n  color: var(--purple);\n  font-size: 18px;\n}\n\n.coupon-input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 12.5px;\n  color: var(--ink);\n}\n\n.coupon-btn {\n  background: var(--purple);\n  color: #fff;\n  border-radius: 9px;\n  padding: 8px 14px;\n  font-size: 12px;\n  font-weight: 800;\n  transition: all 0.2s;\n}\n\n.coupon-btn:hover {\n  background: var(--purple-dark);\n}\n\n.coupon-applied-badge {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #ecfdf5;\n  border: 1.5px solid #a7f3d0;\n  border-radius: 12px;\n  padding: 12px 14px;\n}\n\n.applied-icon {\n  font-size: 22px;\n  color: var(--emerald);\n}\n\n.applied-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.applied-details strong {\n  font-size: 12.5px;\n  color: #065f46;\n  font-weight: 800;\n}\n\n.applied-details span {\n  font-size: 11px;\n  color: #047857;\n  margin-top: 2px;\n}\n\n.remove-coupon-btn {\n  color: #047857;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n}\n\n/* Payment Options */\n\n.payment-options-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.payment-option-item {\n  display: grid;\n  grid-template-columns: 40px minmax(0, 1fr) auto;\n  gap: 12px;\n  align-items: center;\n  background: #fbfbfe;\n  border: 1.5px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.payment-option-item:hover {\n  background: #faf8ff;\n  border-color: #d1c4f5;\n}\n\n.payment-option-item.is-selected {\n  background: #f8f5ff;\n  border-color: var(--purple);\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.08);\n}\n\n.payment-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.wallet-wrap {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.payment-option-meta strong {\n  display: block;\n  font-size: 13px;\n  color: var(--ink);\n  font-weight: 800;\n}\n\n.payment-option-meta small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n/* Invoice Summary Card */\n\n.invoice-card {\n  background: linear-gradient(180deg, #ffffff 0%, #fbf9ff 100%);\n  border: 1.5px solid #ded5f2;\n  box-shadow: 0 10px 35px rgba(109, 40, 217, 0.08);\n}\n\n.invoice-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.invoice-kicker {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--purple);\n  display: block;\n  margin-bottom: 2px;\n}\n\n.invoice-heading h2 {\n  font-size: 17px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0;\n}\n\n.invoice-badge-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.invoice-rows {\n  padding-block: 14px;\n  border-bottom: 1px dashed var(--border-soft);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.invoice-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--ink-secondary);\n}\n\n.invoice-row strong {\n  font-size: 13px;\n  color: var(--ink);\n  font-weight: 800;\n}\n\n.saving-row {\n  color: var(--emerald);\n}\n\n.saving-text {\n  color: var(--emerald) !important;\n}\n\n.invoice-total-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 18px 14px;\n}\n\n.total-label-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.total-label-wrap span {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.total-label-wrap small {\n  font-size: 10.5px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.total-amount {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--purple);\n}\n\n.rules-checkbox-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #f7f4fc;\n  border: 1px solid #e7dff7;\n  border-radius: 12px;\n  padding: 11px 13px;\n  font-size: 11.5px;\n  color: var(--ink-secondary);\n  line-height: 1.7;\n  cursor: pointer;\n  margin-bottom: 16px;\n  transition: all 0.2s;\n}\n\n.rules-checkbox-row.is-checked {\n  border-color: var(--purple);\n  background: #f4effd;\n}\n\n.rules-checkbox-row ion-checkbox {\n  --size: 18px;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n.rules-checkbox-row a {\n  color: var(--purple);\n  font-weight: 800;\n  text-decoration: underline;\n}\n\n/* Pay Button */\n\n.btn-pay-action {\n  width: 100%;\n  min-height: 54px;\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  border-radius: 14px;\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14.5px;\n  font-weight: 900;\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.28);\n  transition: all 0.25s ease;\n}\n\n.pay-btn-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.pay-btn-label ion-icon {\n  font-size: 20px;\n}\n\n.pay-btn-arrow {\n  font-size: 20px;\n  transition: transform 0.2s ease;\n}\n\n.btn-pay-action:hover:not(:disabled) {\n  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.38);\n  transform: translateY(-2px);\n}\n\n.btn-pay-action:hover:not(:disabled) .pay-btn-arrow {\n  transform: translateX(-4px);\n}\n\n.btn-pay-action:disabled {\n  background: #cbd5e1;\n  color: #64748b;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.secure-trust-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 14px;\n  text-align: center;\n}\n\n.secure-trust-row ion-icon {\n  color: var(--emerald);\n  font-size: 15px;\n}\n\n/* ==========================================================================\n   Buttons System\n   ========================================================================== */\n\n.btn-primary, .btn-secondary, .btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 12px;\n  min-height: 44px;\n  padding: 0 18px;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.22);\n}\n\n.btn-primary:hover:not(:disabled) {\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.32);\n  transform: translateY(-1px);\n}\n\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-primary.glow {\n  box-shadow: 0 8px 28px rgba(109, 40, 217, 0.35);\n}\n\n.btn-secondary {\n  background: #ffffff;\n  border: 1.5px solid #ded5f2;\n  color: var(--purple);\n}\n\n.btn-secondary:hover {\n  background: var(--purple-light);\n  border-color: var(--purple);\n  transform: translateY(-1px);\n}\n\n.btn-ghost {\n  background: transparent;\n  color: var(--muted);\n}\n\n.btn-ghost:hover {\n  color: var(--ink);\n}\n\n/* ==========================================================================\n   Loading & Empty Cart States\n   ========================================================================== */\n\n.cart-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 480px;\n  text-align: center;\n  padding-block: 60px;\n}\n\n.loading-mark {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1.5px solid #e7dff7;\n  margin-bottom: 20px;\n}\n\n.cart-loading h2 {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0 0 8px;\n}\n\n.cart-loading p {\n  font-size: 13.5px;\n  color: var(--muted);\n  margin: 0;\n}\n\n.empty-cart-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 520px;\n  text-align: center;\n  padding-block: 60px 80px;\n}\n\n.empty-cart-orb {\n  width: 104px;\n  height: 104px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ede9fe 0%, #fdfcff 100%);\n  border: 2px dashed #c4b5fd;\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 44px;\n  position: relative;\n  box-shadow: 0 16px 36px rgba(109, 40, 217, 0.12);\n  margin-bottom: 24px;\n}\n\n.orb-sparkle {\n  position: absolute;\n  color: var(--amber);\n  animation: pulse-sparkle 2s infinite alternate;\n}\n\n.orb-sparkle-1 {\n  top: -4px;\n  right: -4px;\n  font-size: 20px;\n}\n\n.orb-sparkle-2 {\n  bottom: 4px;\n  left: -6px;\n  font-size: 16px;\n  animation-delay: 0.7s;\n}\n\n.empty-cart-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--purple-light);\n  color: var(--purple);\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  font-weight: 800;\n  margin-bottom: 16px;\n}\n\n.sparkle-dot {\n  color: var(--amber);\n}\n\n.empty-cart-state h2 {\n  font-size: clamp(24px, 3.2vw, 36px);\n  font-weight: 900;\n  line-height: 1.45;\n  color: var(--ink);\n  margin: 0 0 14px;\n}\n\n.empty-highlight {\n  color: var(--purple);\n}\n\n.empty-copy {\n  font-size: 14.5px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  max-width: 540px;\n  margin: 0 auto 28px;\n}\n\n.empty-actions-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.empty-actions-row a {\n  min-height: 48px;\n  padding: 0 22px;\n  font-size: 13.5px;\n}\n\n/* ==========================================================================\n   Educational Trust Strip\n   ========================================================================== */\n\n.learning-trust-strip {\n  background: #ffffff;\n  border-top: 1px solid var(--border-soft);\n  padding-block: 28px;\n}\n\n.trust-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.trust-cell {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px 14px;\n  border-left: 1px solid var(--border-soft);\n}\n\n.trust-cell:last-child {\n  border-left: none;\n}\n\n.trust-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  border: 1px solid #dcd0f7;\n  flex-shrink: 0;\n}\n\n.trust-copy strong {\n  display: block;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.trust-copy small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n/* ==========================================================================\n   Keyframes & Animations\n   ========================================================================== */\n\n@keyframes slide-down {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f2eefb;\n  --ink-secondary: #d5cfe5;\n  --muted: #aaa1bd;\n  --purple: #c4b5fd;\n  --purple-dark: #ddd6fe;\n  --purple-light: #302448;\n  --amber-dark: #fbbf24;\n  --amber-light: #3b2d20;\n  --emerald: #34d399;\n  --emerald-dark: #6ee7b7;\n  --emerald-light: #173b32;\n  --rose: #fda4af;\n  --rose-light: #422432;\n  --sky: #7dd3fc;\n  --sky-light: #19394b;\n  --paper: #211c32;\n  --bg-canvas: #141223;\n  --border-soft: #39314f;\n  --card-bg: #211c32;\n  --surface-raised: #2a243d;\n  --action-purple: #6d28d9;\n  --action-purple-dark: #581c87;\n  --ion-background-color: var(--bg-canvas);\n  --ion-background-color-rgb: 20, 18, 35;\n  --ion-text-color: var(--ink);\n  --ion-text-color-rgb: 242, 238, 251;\n  --ion-item-background: var(--card-bg);\n  --ion-card-background: var(--card-bg);\n  --ion-toolbar-background: var(--card-bg);\n  --ion-toolbar-color: var(--ink);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .learning-header {\n  background: rgba(33, 28, 50, 0.96);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .header-search-bar,\n:host-context(.dark-theme) .elementary-tabs {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) .search-input-wrap,\n:host-context(.dark-theme) .content-page-card,\n:host-context(.dark-theme) .floating-icon,\n:host-context(.dark-theme) .suggestion-box,\n:host-context(.dark-theme) .suggestion-chips .chip-link,\n:host-context(.dark-theme) .status-actions .btn.outline {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) input,\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) input::placeholder,\n:host-context(.dark-theme) textarea::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n:host-context(.dark-theme) .action-btn.ghost:hover,\n:host-context(.dark-theme) .status-actions .btn.secondary:hover,\n:host-context(.dark-theme) .suggestion-chips .chip-link:hover,\n:host-context(.dark-theme) .elementary-tabs .tab-btn.active,\n:host-context(.dark-theme) .elementary-tabs .tab-btn:hover:not(.active) {\n  background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) .action-btn.primary,\n:host-context(.dark-theme) .status-actions .btn.primary {\n  background: linear-gradient(135deg, var(--action-purple), var(--action-purple-dark));\n}\n\n:host-context(.dark-theme) .status-actions .btn.amber {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #23170b;\n}\n\n:host-context(.dark-theme) ion-list {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-card {\n  --background: var(--card-bg);\n  --color: var(--ink-secondary);\n  background: var(--card-bg) !important;\n  color: var(--ink-secondary);\n  border-color: var(--border-soft) !important;\n}\n\n:host-context(.dark-theme) ion-card-content ion-item {\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=primary],\n:host-context(.dark-theme) ion-text[color=instagram] {\n  --ion-color-base: var(--purple) !important;\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-text[color=success] {\n  --ion-color-base: var(--emerald) !important;\n  color: var(--emerald);\n}\n\n:host-context(.dark-theme) ion-text[color=warning] {\n  --ion-color-base: var(--amber-dark) !important;\n  color: var(--amber-dark);\n}\n\n:host-context(.dark-theme) ion-text[color=danger] {\n  --ion-color-base: var(--rose) !important;\n  color: var(--rose);\n}\n\n:host-context(.dark-theme) ion-text[color=light] {\n  --ion-color-base: var(--ink-secondary) !important;\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) .cart-header {\n  background: rgba(33, 28, 50, 0.96);\n}\n\n:host-context(.dark-theme) .cart-hero {\n  background: linear-gradient(180deg, #241c38, var(--bg-canvas));\n}\n\n:host-context(.dark-theme) .hero-eyebrow,\n:host-context(.dark-theme) .action-btn,\n:host-context(.dark-theme) .cart-nav-actions .icon-button.menu-toggle,\n:host-context(.dark-theme) .course-visual,\n:host-context(.dark-theme) .step-num {\n  background: var(--purple-light);\n  color: var(--purple);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .action-btn:hover {\n  background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) .cart-nav-actions .icon-button.menu-toggle:hover {\n  background: var(--action-purple);\n  color: #fff;\n}\n\n:host-context(.dark-theme) .search-input-wrap,\n:host-context(.dark-theme) .checkout-steps-panel,\n:host-context(.dark-theme) .card-heading,\n:host-context(.dark-theme) .invoice-card,\n:host-context(.dark-theme) .address-option,\n:host-context(.dark-theme) .custom-field input,\n:host-context(.dark-theme) .custom-field textarea,\n:host-context(.dark-theme) .custom-field select,\n:host-context(.dark-theme) .btn-secondary,\n:host-context(.dark-theme) .loading-mark,\n:host-context(.dark-theme) .learning-trust-strip {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .cart-item,\n:host-context(.dark-theme) .product-details-panel,\n:host-context(.dark-theme) .address-form-box,\n:host-context(.dark-theme) .coupon-box,\n:host-context(.dark-theme) .payment-option-item,\n:host-context(.dark-theme) .rules-checkbox-row,\n:host-context(.dark-theme) .group-count,\n:host-context(.dark-theme) .receiver-name,\n:host-context(.dark-theme) .item-variant-chip,\n:host-context(.dark-theme) .form-close-btn {\n  background: var(--surface-raised);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .cart-item:hover,\n:host-context(.dark-theme) .address-option:hover,\n:host-context(.dark-theme) .payment-option-item:hover {\n  background: #342c49;\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .address-option.is-selected,\n:host-context(.dark-theme) .payment-option-item.is-selected,\n:host-context(.dark-theme) .rules-checkbox-row.is-checked {\n  background: var(--purple-light);\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .digital-note-card,\n:host-context(.dark-theme) .empty-cart-orb {\n  background: linear-gradient(135deg, var(--purple-light), var(--card-bg));\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .digital-tag,\n:host-context(.dark-theme) .item-instant-badge,\n:host-context(.dark-theme) .digital-note-icon,\n:host-context(.dark-theme) .coupon-applied-badge {\n  background: var(--emerald-light);\n  color: var(--emerald);\n  border-color: #2b6350;\n}\n\n:host-context(.dark-theme) .applied-details strong,\n:host-context(.dark-theme) .applied-details span,\n:host-context(.dark-theme) .remove-coupon-btn {\n  color: var(--emerald);\n}\n\n:host-context(.dark-theme) .physical-tag {\n  background: var(--sky-light);\n  color: var(--sky);\n  border-color: #30536a;\n}\n\n:host-context(.dark-theme) .product-visual {\n  background: var(--amber-light);\n  border-color: #69512d;\n}\n\n:host-context(.dark-theme) .cart-indicator,\n:host-context(.dark-theme) .card-heading__icon,\n:host-context(.dark-theme) .trust-icon-wrap,\n:host-context(.dark-theme) .detail-pill {\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .step-line {\n  background: var(--border-soft);\n}\n\n:host-context(.dark-theme) .step-line.is-done {\n  background: var(--purple);\n}\n\n:host-context(.dark-theme) .checkout-step.is-active .step-num,\n:host-context(.dark-theme) .search-submit-btn,\n:host-context(.dark-theme) .coupon-btn {\n  background: var(--action-purple);\n  border-color: var(--action-purple);\n}\n\n:host-context(.dark-theme) .coupon-btn:hover {\n  background: var(--action-purple-dark);\n}\n\n:host-context(.dark-theme) .detail-toggle-btn:hover {\n  background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) .btn-secondary:hover {\n  background: var(--purple-light);\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .btn-pay-action:disabled {\n  background: var(--border-soft);\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) .custom-field input::placeholder,\n:host-context(.dark-theme) .custom-field textarea::placeholder,\n:host-context(.dark-theme) .coupon-input::placeholder,\n:host-context(.dark-theme) .search-input-wrap input::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n@keyframes pulse-sparkle {\n  0% {\n    transform: scale(0.9);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n\n/* ==========================================================================\n   Responsive Adaptations\n   ========================================================================== */\n\n@media (max-width: 1040px) {\n  .cart-hero__content {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n\n  .checkout-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .checkout-sidebar {\n    position: static;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .invoice-card {\n    grid-column: 1/-1;\n  }\n\n  .trust-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .trust-cell:nth-child(2) {\n    border-left: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .page-shell {\n    width: calc(100% - 32px);\n  }\n\n  .cart-nav-links {\n    display: none;\n  }\n\n  .cart-nav-shell {\n    padding: 10px 16px;\n    min-height: 64px;\n  }\n\n  .cart-brand__text small {\n    display: none;\n  }\n\n  .cart-hero {\n    padding-block: 28px 34px;\n  }\n\n  .cart-hero h1 {\n    font-size: 27px;\n  }\n\n  .checkout-steps-panel {\n    padding: 14px 16px;\n  }\n\n  .step-meta small {\n    display: none;\n  }\n\n  .step-line {\n    margin-inline: 8px;\n    min-width: 14px;\n  }\n\n  .cart-item, .product-item {\n    grid-template-columns: 46px minmax(0, 1fr) auto;\n    gap: 12px;\n    padding: 13px;\n  }\n\n  .item-visual {\n    width: 46px;\n    height: 46px;\n    font-size: 22px;\n  }\n\n  .item-price {\n    grid-column: 2;\n    text-align: right;\n  }\n\n  .remove-btn {\n    grid-column: 3;\n    grid-row: 1;\n  }\n\n  .detail-toggle-btn {\n    grid-column: 2/-1;\n    justify-content: center;\n  }\n\n  .product-details-panel {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n\n  .detail-pill:nth-child(2) {\n    border-left: none;\n  }\n\n  .address-grid, .form-row-grid, .checkout-sidebar {\n    grid-template-columns: 1fr;\n  }\n\n  .address-top-actions {\n    flex-direction: column-reverse;\n  }\n\n  .form-actions-row {\n    flex-direction: column-reverse;\n  }\n\n  .btn-primary, .btn-secondary, .btn-ghost {\n    width: 100%;\n  }\n\n  .trust-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .trust-cell {\n    border-left: none;\n    border-bottom: 1px solid var(--border-soft);\n  }\n\n  .trust-cell:last-child {\n    border-bottom: none;\n  }\n\n  .empty-actions-row {\n    flex-direction: column;\n    width: 100%;\n  }\n\n  .empty-actions-row a {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LnNjc3MiLCIuLlxccGFuZWxcXHVzZXItcGFuZWxcXF9wYWdlLWRhcmstdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtBQUZGOztBQUtBO0VBQUksc0JBQUE7QUFESjs7QUFFQTtFQUFJLHFCQUFBO0VBQXVCLGNBQUE7QUFHM0I7O0FBRkE7RUFBUyxvQkFBQTtFQUFzQixlQUFBO0VBQWlCLFNBQUE7RUFBVyx1QkFBQTtBQVMzRDs7QUFSQTtFQUEwQixvQkFBQTtBQVkxQjs7QUFYQTtFQUFXLGNBQUE7RUFBZ0Isb0JBQUE7QUFnQjNCOztBQWRBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQWlCRjs7QUFkQTtFQUNFLDhCQUFBO0FBaUJGOztBQWRBOzsrRUFBQTs7QUFHQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBaUJGOztBQWZBO0VBQXNCLGFBQUE7QUFtQnRCOztBQWpCQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBb0JGOztBQWpCQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtB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QUE7SUFDQSxhQUFBO0lBQ0EsZ0RBQUE7RUFnWUY7O0VBOVhBO0lBQ0UsaUJBQUE7RUFpWUY7O0VBL1hBO0lBQ0UscUNBQUE7RUFrWUY7O0VBaFlBO0lBQ0UsaUJBQUE7RUFtWUY7QUFDRjs7QUFoWUE7RUFDRTtJQUNFLHdCQUFBO0VBa1lGOztFQWhZQTtJQUNFLGFBQUE7RUFtWUY7O0VBallBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQW9ZRjs7RUFsWUE7SUFDRSxhQUFBO0VBcVlGOztFQWxZQTtJQUNFLHdCQUFBO0VBcVlGOztFQW5ZQTtJQUNFLGVBQUE7RUFzWUY7O0VBcFlBO0lBQ0Usa0JBQUE7RUF1WUY7O0VBcllBO0lBQ0UsYUFBQTtFQXdZRjs7RUF0WUE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUF5WUY7O0VBdFlBO0lBQ0UsK0NBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQXlZRjs7RUF2WUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEwWUY7O0VBeFlBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VBMllGOztFQXpZQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBNFlGOztFQTFZQTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7RUE2WUY7O0VBM1lBO0lBQ0UscUNBQUE7SUFDQSxTQUFBO0VBOFlGOztFQTVZQTtJQUNFLGlCQUFBO0VBK1lGOztFQTVZQTtJQUNFLDBCQUFBO0VBK1lGOztFQTdZQTtJQUNFLDhCQUFBO0VBZ1pGOztFQTlZQTtJQUNFLDhCQUFBO0VBaVpGOztFQS9ZQTtJQUNFLFdBQUE7RUFrWkY7O0VBL1lBO0lBQ0UsMEJBQUE7RUFrWkY7O0VBaFpBO0lBQ0UsaUJBQUE7SUFDQSwyQ0FBQTtFQW1aRjs7RUFqWkE7SUFDRSxtQkFBQTtFQW9aRjs7RUFqWkE7SUFDRSxzQkFBQTtJQUNBLFdBQUE7RUFvWkY7O0VBbFpBO0lBQ0UsV0FBQTtFQXFaRjtBQUNGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vcGFuZWwvdXNlci1wYW5lbC9wYWdlLWRhcmstdGhlbWVcIjtcblxuOmhvc3Qge1xuICAtLWluazogIzFlMWI0YjtcbiAgLS1pbmstc2Vjb25kYXJ5OiAjNDc1NTY5O1xuICAtLW11dGVkOiAjNjQ3NDhiO1xuICAtLXB1cnBsZTogIzZkMjhkOTtcbiAgLS1wdXJwbGUtZGFyazogIzU4MWM4NztcbiAgLS1wdXJwbGUtbGlnaHQ6ICNlZGU5ZmU7XG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIyKTtcbiAgLS1hbWJlcjogI2Y1OWUwYjtcbiAgLS1hbWJlci1kYXJrOiAjZDk3NzA2O1xuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xuICAtLWVtZXJhbGQ6ICMxMGI5ODE7XG4gIC0tZW1lcmFsZC1saWdodDogI2QxZmFlNTtcbiAgLS1yb3NlOiAjZjQzZjVlO1xuICAtLXJvc2UtbGlnaHQ6ICNmZmU0ZTY7XG4gIC0tcGFwZXI6ICNmZmZmZmY7XG4gIC0tYmctY2FudmFzOiAjZmNmYmZlO1xuICAtLWJvcmRlci1zb2Z0OiAjZWRlOWY2O1xuICAtLWNhcmQtYmc6ICNmZmZmZmY7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBcIlNoYWJuYW0tTWVkaXVtXCIsIHNhbnMtc2VyaWYpO1xufVxuXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cbmlvbi1pY29uIHsgZmxleC1zaHJpbms6IDA7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5wYWdlLXNoZWxsIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwJSAtIDQ4cHgpKTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmNhcnQtcGFnZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlYWRlciAmIE5hdmJhciAoRWR1Y2F0aW9uYWwgQXZhbEFtb296IFN0eWxlKVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jYXJ0LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xufVxuLmNhcnQtaGVhZGVyOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLmNhcnQtbmF2LXNoZWxsIHtcbiAgZGlyZWN0aW9uOiBsdHIgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWluLWhlaWdodDogNzJweDtcbn1cblxuLmNhcnQtbmF2LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY2FydC1iYWNrLWJ0biB7XG4gIC0tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcnQtYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY2FydC1icmFuZF9fbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FydC1icmFuZF9fbG9nbyBpbWcgeyBvYmplY3QtZml0OiBjb250YWluOyB9XG5cbi5jYXJ0LWJyYW5kX19zcGFya2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XG4gIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYW5pbWF0aW9uOiBwdWxzZS1zcGFya2xlIDIuNXMgaW5maW5pdGU7XG59XG5cbi5jYXJ0LWJyYW5kX190ZXh0IHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcnQtYnJhbmRfX3RleHQgYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5jYXJ0LWJyYW5kX190ZXh0IHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY2FydC1uYXYtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5uYXYtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubmF2LWNoaXAgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4ubmF2LWNoaXA6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cblxuLmNhcnQtbmF2LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNmYxZmQ7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTlkNWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uY2FydC1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2QwZjc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXJ0LWNvdW50LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC00cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpO1xuICBjb2xvcjogIzNiMjgwMjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLm1lbnUtYnRuIHtcbiAgLS1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcnQtbmF2LWFjdGlvbnMgLmljb24tYnV0dG9uLm1lbnUtdG9nZ2xlIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDZmZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHBhZGRpbmc6IDA7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICB9XG59XG5cbi5jYXJ0LXNlYXJjaC1iYXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNHB4IDI0cHggMTZweDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1kb3duIC4ycyBlYXNlLW91dDtcbn1cbi5zZWFyY2gtaW5wdXQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDFmNTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpO1xufVxuLnNlYXJjaC1pbnB1dC13cmFwIGlucHV0IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1zaXplOiAxMy41cHg7XG59XG4uc2VhcmNoLWljb24geyBjb2xvcjogdmFyKC0tcHVycGxlKTsgZm9udC1zaXplOiAyMHB4OyB9XG4uc2VhcmNoLXN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnNlYXJjaC1jbG9zZS1idG4ge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBIZXJvIFNlY3Rpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY2FydC1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjdmMmZmIDAlLCAjZmFmOGZlIDY1JSwgI2ZmZmZmZiAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ibG9jazogMzZweCA0NHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuXG4uY2FydC1oZXJvX19nbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMjBweDtcbiAgaW5zZXQtaW5saW5lLXN0YXJ0OiAxMiU7XG4gIHdpZHRoOiA0NDBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMjIpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2FydC1oZXJvX19jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjE1ZnIgMC44NWZyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uaGVyby1xdWljay1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmhlcm8tYmFjay1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4uaGVyby1iYWNrLWxpbms6aG92ZXIgeyBjb2xvcjogdmFyKC0tcHVycGxlLWRhcmspOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuLmxpbmstc2VwIHsgY29sb3I6ICNjYmQ1ZTE7IGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uaGVyby1leWVicm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBjb2xvcjogIzViMjFiNjtcbiAgYmFja2dyb3VuZDogI2VkZTZmYztcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkMmY3O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmV5ZWJyb3ctc3RhciB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IGZvbnQtc2l6ZTogMTVweDsgfVxuXG4uY2FydC1oZXJvIGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyOHB4LCAzLjR2dywgNDJweCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xuICBtYXJnaW46IDAgMCAxNHB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cblxuLmhlcm8taGlnaGxpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB6LWluZGV4OiAxO1xufVxuLmhlcm8taGlnaGxpZ2h0IHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHZhcigtLWFtYmVyKTtcbiAgc3Ryb2tlLXdpZHRoOiA0LjU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5oZXJvLWRlc2Mge1xuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuOTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTdGVwcGVyIEluZGljYXRvciAqL1xuLmNoZWNrb3V0LXN0ZXBzLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWRjZmE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDE4cHggMjJweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNSk7XG59XG5cbi5jaGVja291dC1zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBvcGFjaXR5OiAwLjQ1O1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xufVxuLmNoZWNrb3V0LXN0ZXAuaXMtYWN0aXZlIHsgb3BhY2l0eTogMTsgfVxuXG4uc3RlcC1udW0ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJhY2tncm91bmQ6ICNmMWVkZmI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkMmY3O1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xufVxuLmNoZWNrb3V0LXN0ZXAuaXMtYWN0aXZlIC5zdGVwLW51bSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XG59XG5cbi5zdGVwLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXAtbWV0YSBzdHJvbmcge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uc3RlcC1tZXRhIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0ZXAtbGluZSB7XG4gIGhlaWdodDogMnB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNlMmQ5Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzIGVhc2U7XG59XG4uc3RlcC1saW5lLmlzLWRvbmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTWFpbiBXb3Jrc3BhY2UgTGF5b3V0XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmNhcnQtd29ya3NwYWNlIHtcbiAgcGFkZGluZy1ibG9jazogNDBweCA2MHB4O1xufVxuXG4uY2hlY2tvdXQtbGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS42NWZyKSBtaW5tYXgoMzIwcHgsIDAuODVmcik7XG4gIGdhcDogMjhweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY2hlY2tvdXQtbWFpbiwgLmNoZWNrb3V0LXNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNoZWNrb3V0LXNpZGViYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDk2cHg7XG59XG5cbi5zdXJmYWNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4ycztcbn1cblxuLyogQ2FyZCBIZWFkaW5nIEhlYWRlciAqL1xuLmNhcmQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMjRweCAyOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJmYWZmIDAlLCAjZmZmZmZmIDEwMCUpO1xufVxuLmNhcmQtaGVhZGluZy0tY29tcGFjdCB7IHBhZGRpbmctYmxvY2s6IDIwcHg7IH1cblxuLmNhcmQtaGVhZGluZ19faWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkMGY3O1xufVxuXG4uY2FyZC1raWNrZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY2FyZC1oZWFkaW5nIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtaGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW46IDNweCAwIDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBPcmRlciBJdGVtcyBTdHlsaW5nXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm9yZGVyLWNhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1ncm91cCB7XG4gIHBhZGRpbmc6IDI0cHggMjhweDtcbn1cbi5pdGVtLWdyb3VwICsgLml0ZW0tZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlci1zb2Z0KTtcbn1cblxuLmdyb3VwLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uZ3JvdXAtaGVhZGluZy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JvdXAtaWNvbiB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZHVjdC1pY29uLXdyYXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcbn1cbi5ncm91cC1oZWFkaW5nLXRpdGxlIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cblxuLmRpZ2l0YWwtdGFnLCAucGh5c2ljYWwtdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5kaWdpdGFsLXRhZyB7XG4gIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gIGNvbG9yOiAjMDY1ZjQ2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTdmM2QwO1xufVxuLnBoeXNpY2FsLXRhZyB7XG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XG4gIGNvbG9yOiAjMWU0MGFmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZkYmZlO1xufVxuXG4uZ3JvdXAtY291bnQge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pdGVtcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY2FydC1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NnB4IG1pbm1heCgwLCAxZnIpIGF1dG8gYXV0bztcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlOGY2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG59XG4uY2FydC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDhjZWZhO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA2KTtcbn1cblxuLnByb2R1Y3QtaXRlbSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTZweCBtaW5tYXgoMCwgMWZyKSBhdXRvIGF1dG8gYXV0bztcbn1cblxuLml0ZW0tdmlzdWFsIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jb3Vyc2UtdmlzdWFsIHtcbiAgYmFja2dyb3VuZDogI2YzZWJmZjtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWQ3ZmE7XG59XG4ucHJvZHVjdC12aXN1YWwge1xuICBiYWNrZ3JvdW5kOiAjZmVmN2U3O1xuICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGU3YjY7XG59XG5cbi5pdGVtLWluZm8ge1xuICBtaW4td2lkdGg6IDA7XG59XG4uaXRlbS1iYWRnZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaXRlbS1raW5kIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cbi5wcm9kdWN0LWtpbmQgeyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IH1cbi5pdGVtLWluc3RhbnQtYmFkZ2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMDU5NjY5O1xuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaXRlbS12YXJpYW50LWNoaXAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pdGVtLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XG59XG4uaXRlbS10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4uaXRlbS1mZWF0dXJlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLml0ZW0tZmVhdHVyZXMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cbi5pdGVtLWZlYXR1cmVzIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4uaXRlbS1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ub2xkLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLmN1cnJlbnQtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuLnByaWNlLW5vdGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmRldGFpbC10b2dnbGUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xufVxuLmRldGFpbC10b2dnbGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDJmNztcbn1cblxuLnJlbW92ZS1idG4ge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4ucmVtb3ZlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcm9zZSk7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtcGFuZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmOGY2ZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2RmZjc7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1kb3duIC4ycyBlYXNlLW91dDtcbn1cbi5kZXRhaWwtcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWQ1ZjI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5kZXRhaWwtcGlsbDpsYXN0LWNoaWxkIHsgYm9yZGVyLWxlZnQ6IG5vbmU7IH1cbi5kZXRhaWwtcGlsbCBzcGFuIHsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4uZGV0YWlsLXBpbGwgc3Ryb25nIHsgZm9udC1zaXplOiAxMi41cHg7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4uZGV0YWlsLXBpbGwgc3Ryb25nLmZyZWUtdGV4dCB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuLmRldGFpbC1waWxsLnN1YnRvdGFsIHN0cm9uZyB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyBmb250LXdlaWdodDogOTAwOyB9XG5cbi8qIERpZ2l0YWwgT25seSBOb3RlICovXG4uZGlnaXRhbC1ub3RlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVmM2ZmIDAlLCAjZmFmOGZlIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkMmY3O1xuICBwYWRkaW5nOiAyMnB4IDI2cHg7XG59XG4uZGlnaXRhbC1ub3RlLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbn1cbi5kaWdpdGFsLW5vdGUtaWNvbiB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3ZjNkMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZGlnaXRhbC1ub3RlLXRleHQgaDMge1xuICBmb250LXNpemU6IDE0LjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5kaWdpdGFsLW5vdGUtdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICBtYXJnaW46IDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBEZWxpdmVyeSBBZGRyZXNzIFNlY3Rpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYWRkcmVzcy1jYXJkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFkZHJlc3MtdG9wLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjhweCAxMHB4O1xufVxuXG4uYWRkcmVzcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMjhweCAyNnB4O1xufVxuXG4uYWRkcmVzcy1vcHRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWlubWF4KDAsIDFmcikgYXV0bztcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlOGU0ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLmFkZHJlc3Mtb3B0aW9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzRiNWZkO1xuICBiYWNrZ3JvdW5kOiAjZmFmOGZmO1xufVxuLmFkZHJlc3Mtb3B0aW9uLmlzLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiAjZjhmNWZmO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA4KTtcbn1cblxuLmFkZHJlc3MtcmFkaW8tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG59XG4uYWRkcmVzcy1pZHgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hZGRyZXNzLWNvbnRlbnQtY29sIHsgbWluLXdpZHRoOiAwOyB9XG4uYWRkcmVzcy10aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmFkZHJlc3MtdGl0bGUtcm93IHN0cm9uZyB7IGZvbnQtc2l6ZTogMTMuNXB4OyBjb2xvcjogdmFyKC0taW5rKTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuLnJlY2VpdmVyLW5hbWUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmFkZHJlc3Mtc3RyZWV0IHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwIDAgNnB4O1xufVxuXG4uYWRkcmVzcy1tZXRhLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuLmFkZHJlc3MtbWV0YS1yb3cgc3BhbiB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgfVxuXG4uY2hlY2staWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNjYmQ1ZTE7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycztcbn1cbi5hZGRyZXNzLW9wdGlvbi5pcy1zZWxlY3RlZCAuY2hlY2staWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4uYWRkcmVzcy1lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzZweCAyMHB4O1xufVxuLmFkZHJlc3MtZW1wdHktaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4uYWRkcmVzcy1lbXB0eS1zdGF0ZSBoNCB7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDgwMDsgbWFyZ2luOiAwIDAgNnB4OyB9XG4uYWRkcmVzcy1lbXB0eS1zdGF0ZSBwIHsgZm9udC1zaXplOiAxMi41cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IG1hcmdpbjogMCAwIDE2cHg7IH1cblxuLyogSW5saW5lIEFkZHJlc3MgRm9ybSAqL1xuLmFkZHJlc3MtZm9ybS1ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmFmOGZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdkZmY3O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW46IDE2cHggMjhweCAyNHB4O1xufVxuLmZvcm0taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZvcm0taGVhZGVyIHN0cm9uZyB7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6IHZhcigtLWluayk7IGRpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogODAwOyB9XG4uZm9ybS1oZWFkZXIgc21hbGwgeyBmb250LXNpemU6IDExLjVweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWFyZ2luLXRvcDogMnB4OyBkaXNwbGF5OiBibG9jazsgfVxuLmZvcm0tY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZWNlOGY2O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvcm0tcm93LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTRweDtcbn1cbi5sb2NhdGlvbi1ncmlkIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuLmZ1bGwtd2lkdGgtZmllbGQgeyBncmlkLWNvbHVtbjogMSAvIC0xOyB9XG5cbi5jdXN0b20tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cbi5maWVsZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xufVxuLmN1c3RvbS1maWVsZCBpbnB1dCwgLmN1c3RvbS1maWVsZCB0ZXh0YXJlYSwgLmN1c3RvbS1maWVsZCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZGVkNWYyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5jdXN0b20tZmllbGQgaW5wdXQ6Zm9jdXMsIC5jdXN0b20tZmllbGQgdGV4dGFyZWE6Zm9jdXMsIC5jdXN0b20tZmllbGQgc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xufVxuLnNlbGVjdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdC13cmFwcGVyIHNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xufVxuLnNlbGVjdC1jYXJldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTJweDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb3JtLWFjdGlvbnMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU2lkZWJhcjogRGlzY291bnQsIFBheW1lbnQgTWV0aG9kICYgU3VtbWFyeVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jaGVja291dC1zaWRlYmFyIC5zdXJmYWNlIHtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLmFzaWRlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuLmFzaWRlLWhlYWRpbmdfX2ljb24ge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hc2lkZS1oZWFkaW5nX190ZXh0IHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuLmFzaWRlLWhlYWRpbmdfX3RleHQgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8qIENvdXBvbiBCb3ggKi9cbi5jb3Vwb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY2ZmM7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2RlZDVmMjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNHB4IDZweCA0cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycztcbn1cbi5jb3Vwb24tYm94OmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcbn1cbi5jb3Vwb24taWNvbiB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyBmb250LXNpemU6IDE4cHg7IH1cbi5jb3Vwb24taW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cbi5jb3Vwb24tYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cbi5jb3Vwb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWRhcmspO1xufVxuXG4uY291cG9uLWFwcGxpZWQtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2E3ZjNkMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xufVxuLmFwcGxpZWQtaWNvbiB7IGZvbnQtc2l6ZTogMjJweDsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4uYXBwbGllZC1kZXRhaWxzIHsgZmxleDogMTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmFwcGxpZWQtZGV0YWlscyBzdHJvbmcgeyBmb250LXNpemU6IDEyLjVweDsgY29sb3I6ICMwNjVmNDY7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbi5hcHBsaWVkLWRldGFpbHMgc3BhbiB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICMwNDc4NTc7IG1hcmdpbi10b3A6IDJweDsgfVxuLnJlbW92ZS1jb3Vwb24tYnRuIHsgY29sb3I6ICMwNDc4NTc7IGZvbnQtc2l6ZTogMThweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4vKiBQYXltZW50IE9wdGlvbnMgKi9cbi5wYXltZW50LW9wdGlvbnMtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4ucGF5bWVudC1vcHRpb24taXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmU7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cbi5wYXltZW50LW9wdGlvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhZjhmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDFjNGY1O1xufVxuLnBheW1lbnQtb3B0aW9uLWl0ZW0uaXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhmNWZmO1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpO1xufVxuLnBheW1lbnQtaWNvbi13cmFwIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ud2FsbGV0LXdyYXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcbn1cbi5wYXltZW50LW9wdGlvbi1tZXRhIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLnBheW1lbnQtb3B0aW9uLW1ldGEgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8qIEludm9pY2UgU3VtbWFyeSBDYXJkICovXG4uaW52b2ljZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZiZjlmZiAxMDAlKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZGVkNWYyO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzVweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XG59XG5cbi5pbnZvaWNlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuLmludm9pY2Uta2lja2VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5pbnZvaWNlLWhlYWRpbmcgaDIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBtYXJnaW46IDA7XG59XG4uaW52b2ljZS1iYWRnZS1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbnZvaWNlLXJvd3Mge1xuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLmludm9pY2Utcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbn1cbi5pbnZvaWNlLXJvdyBzdHJvbmcge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLnNhdmluZy1yb3cge1xuICBjb2xvcjogdmFyKC0tZW1lcmFsZCk7XG59XG4uc2F2aW5nLXRleHQge1xuICBjb2xvcjogdmFyKC0tZW1lcmFsZCkgIWltcG9ydGFudDtcbn1cblxuLmludm9pY2UtdG90YWwtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJsb2NrOiAxOHB4IDE0cHg7XG59XG4udG90YWwtbGFiZWwtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udG90YWwtbGFiZWwtd3JhcCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cbi50b3RhbC1sYWJlbC13cmFwIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi50b3RhbC1hbW91bnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4ucnVsZXMtY2hlY2tib3gtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y3ZjRmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZGZmNztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTFweCAxM3B4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4ucnVsZXMtY2hlY2tib3gtcm93LmlzLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6ICNmNGVmZmQ7XG59XG4ucnVsZXMtY2hlY2tib3gtcm93IGlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5ydWxlcy1jaGVja2JveC1yb3cgYSB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogUGF5IEJ1dHRvbiAqL1xuLmJ0bi1wYXktYWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICM2ZDI4ZDkgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMjgpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xufVxuLnBheS1idG4tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4ucGF5LWJ0bi1sYWJlbCBpb24taWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgfVxuLnBheS1idG4tYXJyb3cgeyBmb250LXNpemU6IDIwcHg7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZTsgfVxuXG4uYnRuLXBheS1hY3Rpb246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4zOCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5idG4tcGF5LWFjdGlvbjpob3Zlcjpub3QoOmRpc2FibGVkKSAucGF5LWJ0bi1hcnJvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcbn1cbi5idG4tcGF5LWFjdGlvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNjYmQ1ZTE7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5zZWN1cmUtdHJ1c3Qtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWN1cmUtdHJ1c3Qtcm93IGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyBmb250LXNpemU6IDE1cHg7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJ1dHRvbnMgU3lzdGVtXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmJ0bi1wcmltYXJ5LCAuYnRuLXNlY29uZGFyeSwgLmJ0bi1naG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMCAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICM2ZDI4ZDkgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIyKTtcbn1cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMzIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuLmJ0bi1wcmltYXJ5Lmdsb3cge1xuICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjM1KTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNkZWQ1ZjI7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuLmJ0bi1naG9zdDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgTG9hZGluZyAmIEVtcHR5IENhcnQgU3RhdGVzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmNhcnQtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJsb2NrOiA2MHB4O1xufVxuLmxvYWRpbmctbWFyayB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlN2RmZjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FydC1sb2FkaW5nIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuLmNhcnQtbG9hZGluZyBwIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVtcHR5LWNhcnQtc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogNjBweCA4MHB4O1xufVxuXG4uZW1wdHktY2FydC1vcmIge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VkZTlmZSAwJSwgI2ZkZmNmZiAxMDAlKTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjNGI1ZmQ7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjEyKTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5vcmItc3BhcmtsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcbiAgYW5pbWF0aW9uOiBwdWxzZS1zcGFya2xlIDJzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5vcmItc3BhcmtsZS0xIHsgdG9wOiAtNHB4OyByaWdodDogLTRweDsgZm9udC1zaXplOiAyMHB4OyB9XG4ub3JiLXNwYXJrbGUtMiB7IGJvdHRvbTogNHB4OyBsZWZ0OiAtNnB4OyBmb250LXNpemU6IDE2cHg7IGFuaW1hdGlvbi1kZWxheTogLjdzOyB9XG5cbi5lbXB0eS1jYXJ0LWV5ZWJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uc3BhcmtsZS1kb3QgeyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG5cbi5lbXB0eS1jYXJ0LXN0YXRlIGgyIHtcbiAgZm9udC1zaXplOiBjbGFtcCgyNHB4LCAzLjJ2dywgMzZweCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbWFyZ2luOiAwIDAgMTRweDtcbn1cbi5lbXB0eS1oaWdobGlnaHQge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbn1cblxuLmVtcHR5LWNvcHkge1xuICBmb250LXNpemU6IDE0LjVweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWF4LXdpZHRoOiA1NDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjhweDtcbn1cblxuLmVtcHR5LWFjdGlvbnMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmVtcHR5LWFjdGlvbnMtcm93IGEge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDIycHg7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRWR1Y2F0aW9uYWwgVHJ1c3QgU3RyaXBcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubGVhcm5pbmctdHJ1c3Qtc3RyaXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBwYWRkaW5nLWJsb2NrOiAyOHB4O1xufVxuXG4udHJ1c3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTZweDtcbn1cblxuLnRydXN0LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG59XG4udHJ1c3QtY2VsbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi50cnVzdC1pY29uLXdyYXAge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZDBmNztcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi50cnVzdC1jb3B5IHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuLnRydXN0LWNvcHkgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBLZXlmcmFtZXMgJiBBbmltYXRpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5AaW5jbHVkZSBwYWdlLWRhcmstY29tbW9uO1xuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIC5jYXJ0LWhlYWRlciB7IGJhY2tncm91bmQ6IHJnYmEoMzMsIDI4LCA1MCwgLjk2KTsgfVxuXG4gIC5jYXJ0LWhlcm8ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNDFjMzgsIHZhcigtLWJnLWNhbnZhcykpO1xuICB9XG5cbiAgLmhlcm8tZXllYnJvdyxcbiAgLmFjdGlvbi1idG4sXG4gIC5jYXJ0LW5hdi1hY3Rpb25zIC5pY29uLWJ1dHRvbi5tZW51LXRvZ2dsZSxcbiAgLmNvdXJzZS12aXN1YWwsXG4gIC5zdGVwLW51bSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgfVxuXG4gIC5hY3Rpb24tYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1yYWlzZWQpOyB9XG5cbiAgLmNhcnQtbmF2LWFjdGlvbnMgLmljb24tYnV0dG9uLm1lbnUtdG9nZ2xlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3Rpb24tcHVycGxlKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5zZWFyY2gtaW5wdXQtd3JhcCxcbiAgLmNoZWNrb3V0LXN0ZXBzLXBhbmVsLFxuICAuY2FyZC1oZWFkaW5nLFxuICAuaW52b2ljZS1jYXJkLFxuICAuYWRkcmVzcy1vcHRpb24sXG4gIC5jdXN0b20tZmllbGQgaW5wdXQsXG4gIC5jdXN0b20tZmllbGQgdGV4dGFyZWEsXG4gIC5jdXN0b20tZmllbGQgc2VsZWN0LFxuICAuYnRuLXNlY29uZGFyeSxcbiAgLmxvYWRpbmctbWFyayxcbiAgLmxlYXJuaW5nLXRydXN0LXN0cmlwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgfVxuXG4gIC5jYXJ0LWl0ZW0sXG4gIC5wcm9kdWN0LWRldGFpbHMtcGFuZWwsXG4gIC5hZGRyZXNzLWZvcm0tYm94LFxuICAuY291cG9uLWJveCxcbiAgLnBheW1lbnQtb3B0aW9uLWl0ZW0sXG4gIC5ydWxlcy1jaGVja2JveC1yb3csXG4gIC5ncm91cC1jb3VudCxcbiAgLnJlY2VpdmVyLW5hbWUsXG4gIC5pdGVtLXZhcmlhbnQtY2hpcCxcbiAgLmZvcm0tY2xvc2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXJhaXNlZCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gIH1cblxuICAuY2FydC1pdGVtOmhvdmVyLFxuICAuYWRkcmVzcy1vcHRpb246aG92ZXIsXG4gIC5wYXltZW50LW9wdGlvbi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzQyYzQ5O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgfVxuXG4gIC5hZGRyZXNzLW9wdGlvbi5pcy1zZWxlY3RlZCxcbiAgLnBheW1lbnQtb3B0aW9uLWl0ZW0uaXMtc2VsZWN0ZWQsXG4gIC5ydWxlcy1jaGVja2JveC1yb3cuaXMtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIH1cblxuICAuZGlnaXRhbC1ub3RlLWNhcmQsXG4gIC5lbXB0eS1jYXJ0LW9yYiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlLWxpZ2h0KSwgdmFyKC0tY2FyZC1iZykpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICB9XG5cbiAgLmRpZ2l0YWwtdGFnLFxuICAuaXRlbS1pbnN0YW50LWJhZGdlLFxuICAuZGlnaXRhbC1ub3RlLWljb24sXG4gIC5jb3Vwb24tYXBwbGllZC1iYWRnZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZC1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWVtZXJhbGQpO1xuICAgIGJvcmRlci1jb2xvcjogIzJiNjM1MDtcbiAgfVxuXG4gIC5hcHBsaWVkLWRldGFpbHMgc3Ryb25nLFxuICAuYXBwbGllZC1kZXRhaWxzIHNwYW4sXG4gIC5yZW1vdmUtY291cG9uLWJ0biB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuXG4gIC5waHlzaWNhbC10YWcge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNreS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXNreSk7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzA1MzZhO1xuICB9XG5cbiAgLnByb2R1Y3QtdmlzdWFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjk1MTJkO1xuICB9XG5cbiAgLmNhcnQtaW5kaWNhdG9yLFxuICAuY2FyZC1oZWFkaW5nX19pY29uLFxuICAudHJ1c3QtaWNvbi13cmFwLFxuICAuZGV0YWlsLXBpbGwgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTsgfVxuXG4gIC5zdGVwLWxpbmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItc29mdCk7IH1cbiAgLnN0ZXAtbGluZS5pcy1kb25lIHsgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTsgfVxuXG4gIC5jaGVja291dC1zdGVwLmlzLWFjdGl2ZSAuc3RlcC1udW0sXG4gIC5zZWFyY2gtc3VibWl0LWJ0bixcbiAgLmNvdXBvbi1idG4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGlvbi1wdXJwbGUpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWN0aW9uLXB1cnBsZSk7XG4gIH1cblxuICAuY291cG9uLWJ0bjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWFjdGlvbi1wdXJwbGUtZGFyayk7IH1cbiAgLmRldGFpbC10b2dnbGUtYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1yYWlzZWQpOyB9XG5cbiAgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB9XG5cbiAgLmJ0bi1wYXktYWN0aW9uOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgfVxuXG4gIC5jdXN0b20tZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuICAuY3VzdG9tLWZpZWxkIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbiAgLmNvdXBvbi1pbnB1dDo6cGxhY2Vob2xkZXIsXG4gIC5zZWFyY2gtaW5wdXQtd3JhcCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlLXNwYXJrbGUge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45KTsgb3BhY2l0eTogMC44OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFJlc3BvbnNpdmUgQWRhcHRhdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AbWVkaWEgKG1heC13aWR0aDogMTA0MHB4KSB7XG4gIC5jYXJ0LWhlcm9fX2NvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjhweDtcbiAgfVxuICAuY2hlY2tvdXQtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuY2hlY2tvdXQtc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxuICAuaW52b2ljZS1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICB9XG4gIC50cnVzdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIC50cnVzdC1jZWxsOm50aC1jaGlsZCgyKSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLXNoZWxsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIH1cbiAgLmNhcnQtbmF2LWxpbmtzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jYXJ0LW5hdi1zaGVsbCB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIH1cbiAgLmNhcnQtYnJhbmRfX3RleHQgc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FydC1oZXJvIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAyOHB4IDM0cHg7XG4gIH1cbiAgLmNhcnQtaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICB9XG4gIC5jaGVja291dC1zdGVwcy1wYW5lbCB7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICB9XG4gIC5zdGVwLW1ldGEgc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnN0ZXAtbGluZSB7XG4gICAgbWFyZ2luLWlubGluZTogOHB4O1xuICAgIG1pbi13aWR0aDogMTRweDtcbiAgfVxuXG4gIC5jYXJ0LWl0ZW0sIC5wcm9kdWN0LWl0ZW0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDZweCBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICB9XG4gIC5pdGVtLXZpc3VhbCB7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAuaXRlbS1wcmljZSB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLnJlbW92ZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG4gIC5kZXRhaWwtdG9nZ2xlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAucHJvZHVjdC1kZXRhaWxzLXBhbmVsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAuZGV0YWlsLXBpbGw6bnRoLWNoaWxkKDIpIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgfVxuXG4gIC5hZGRyZXNzLWdyaWQsIC5mb3JtLXJvdy1ncmlkLCAuY2hlY2tvdXQtc2lkZWJhciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmFkZHJlc3MtdG9wLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAuZm9ybS1hY3Rpb25zLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5idG4tcHJpbWFyeSwgLmJ0bi1zZWNvbmRhcnksIC5idG4tZ2hvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnRydXN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC50cnVzdC1jZWxsIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICB9XG4gIC50cnVzdC1jZWxsOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAuZW1wdHktYWN0aW9ucy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmVtcHR5LWFjdGlvbnMtcm93IGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCIvLyBJbmNsdWRlZCBieSBvd25lZCBwYWdlcyBvbmx5OyBBbmd1bGFyIG11c3QgbWF0Y2ggdGhlIHRoZW1lIG9uIGFuIGFuY2VzdG9yLlxuQG1peGluIHBhZ2UtZGFyay1wYWxldHRlIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWluazogI2YyZWVmYjtcbiAgLS1pbmstc2Vjb25kYXJ5OiAjZDVjZmU1O1xuICAtLW11dGVkOiAjYWFhMWJkO1xuICAtLXB1cnBsZTogI2M0YjVmZDtcbiAgLS1wdXJwbGUtZGFyazogI2RkZDZmZTtcbiAgLS1wdXJwbGUtbGlnaHQ6ICMzMDI0NDg7XG4gIC0tYW1iZXItZGFyazogI2ZiYmYyNDtcbiAgLS1hbWJlci1saWdodDogIzNiMmQyMDtcbiAgLS1lbWVyYWxkOiAjMzRkMzk5O1xuICAtLWVtZXJhbGQtZGFyazogIzZlZTdiNztcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjMTczYjMyO1xuICAtLXJvc2U6ICNmZGE0YWY7XG4gIC0tcm9zZS1saWdodDogIzQyMjQzMjtcbiAgLS1za3k6ICM3ZGQzZmM7XG4gIC0tc2t5LWxpZ2h0OiAjMTkzOTRiO1xuICAtLXBhcGVyOiAjMjExYzMyO1xuICAtLWJnLWNhbnZhczogIzE0MTIyMztcbiAgLS1ib3JkZXItc29mdDogIzM5MzE0ZjtcbiAgLS1jYXJkLWJnOiAjMjExYzMyO1xuICAtLXN1cmZhY2UtcmFpc2VkOiAjMmEyNDNkO1xuICAtLWFjdGlvbi1wdXJwbGU6ICM2ZDI4ZDk7XG4gIC0tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjAsIDE4LCAzNTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI0MiwgMjM4LCAyNTE7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLXRvb2xiYXItY29sb3I6IHZhcigtLWluayk7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cblxuLy8gUmVwYWlycyBjb21tb24tcGFnZSBzdHlsZXMgbG9jYWxseSB3aXRob3V0IG1vZGlmeWluZyB0aGUgc2hhcmVkIHNvdXJjZS5cbkBtaXhpbiBwYWdlLWRhcmstY29tbW9uIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIEBpbmNsdWRlIHBhZ2UtZGFyay1wYWxldHRlO1xuXG4gICAgLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAyOCwgNTAsIC45Nik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXNlYXJjaC1iYXIsXG4gICAgLmVsZW1lbnRhcnktdGFicyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtaW5wdXQtd3JhcCxcbiAgICAuY29udGVudC1wYWdlLWNhcmQsXG4gICAgLmZsb2F0aW5nLWljb24sXG4gICAgLnN1Z2dlc3Rpb24tYm94LFxuICAgIC5zdWdnZXN0aW9uLWNoaXBzIC5jaGlwLWxpbmssXG4gICAgLnN0YXR1cy1hY3Rpb25zIC5idG4ub3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0LFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRuLmdob3N0OmhvdmVyLFxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLnNlY29uZGFyeTpob3ZlcixcbiAgICAuc3VnZ2VzdGlvbi1jaGlwcyAuY2hpcC1saW5rOmhvdmVyLFxuICAgIC5lbGVtZW50YXJ5LXRhYnMgLnRhYi1idG4uYWN0aXZlLFxuICAgIC5lbGVtZW50YXJ5LXRhYnMgLnRhYi1idG46aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0bi5wcmltYXJ5LFxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLnByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWN0aW9uLXB1cnBsZSksIHZhcigtLWFjdGlvbi1wdXJwbGUtZGFyaykpO1xuICAgIH1cblxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLmFtYmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICAgICAgY29sb3I6ICMyMzE3MGI7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZykgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cInByaW1hcnlcIl0sXG4gICAgaW9uLXRleHRbY29sb3I9XCJpbnN0YWdyYW1cIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJzdWNjZXNzXCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWVtZXJhbGQpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tZW1lcmFsZCk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJ3YXJuaW5nXCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWFtYmVyLWRhcmspICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJkYW5nZXJcIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcm9zZSkgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1yb3NlKTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cImxpZ2h0XCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 57511:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/cart/cart.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.cart/cart\" fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/\" class=\"cart-back-btn\"></ion-back-button></ion-buttons>\n\n<div page-actions><button type=\"button\" class=\"action-btn search-btn\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو\">\r\n        <ion-icon [name]=\"showSearchbar ? 'close-outline' : 'search-outline'\" aria-hidden=\"true\"></ion-icon>\r\n      </button>\n</div>\n\n<div class=\"cart-search-bar\" *ngIf=\"showSearchbar\" dir=\"rtl\">\r\n    <div class=\"search-input-wrap\">\r\n      <ion-icon name=\"search-outline\" class=\"search-icon\" aria-hidden=\"true\"></ion-icon>\r\n      <input\r\n        type=\"search\"\r\n        [(ngModel)]=\"queryText\"\r\n        placeholder=\"جستجوی دوره، کاربرگ یا موضوع آموزشی...\"\r\n        (keyup.enter)=\"search()\"\r\n        autofocus\r\n      />\r\n      <button type=\"button\" class=\"search-submit-btn\" (click)=\"search()\">جستجو</button>\r\n      <button type=\"button\" class=\"search-close-btn\" (click)=\"onCancel()\" aria-label=\"بستن\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </button>\r\n    </div>\r\n  </div>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"cart-page\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"arrow-down-outline\" refreshingSpinner=\"crescent\"></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <main dir=\"rtl\" class=\"cart-main-content\">\r\n    <!-- Hero Banner with Educational Theme & Stepper -->\r\n    <section class=\"cart-hero\">\r\n      <div class=\"cart-hero__glow\" aria-hidden=\"true\"></div>\r\n      <div class=\"page-shell cart-hero__content\">\r\n        <div class=\"cart-hero__copy\">\r\n          <div class=\"hero-quick-links\">\r\n            <a class=\"hero-back-link\" routerLink=\"/\">\r\n              <ion-icon name=\"arrow-forward-outline\" aria-hidden=\"true\"></ion-icon>\r\n              <span>بازگشت به دوره‌ها</span>\r\n            </a>\r\n            <span class=\"link-sep\">•</span>\r\n            <a class=\"hero-back-link\" routerLink=\"/Product\">\r\n              <ion-icon name=\"bag-outline\" aria-hidden=\"true\"></ion-icon>\r\n              <span>مشاهده فروشگاه و کاربرگ‌ها</span>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"hero-eyebrow\">\r\n            <span class=\"eyebrow-star\">✦</span>\r\n            <span>آموزش مجازی اول آموز • تسویه‌حساب و فعال‌سازی</span>\r\n          </div>\r\n\r\n          <h1>\r\n            تکمیل و ثبت نهایی <br />\r\n            <span class=\"hero-highlight\">\r\n              سفارش آموزشی\r\n              <svg viewBox=\"0 0 320 16\" aria-hidden=\"true\">\r\n                <path d=\"M4 11Q150 -3 316 9M25 15Q170 3 295 13\" />\r\n              </svg>\r\n            </span>\r\n          </h1>\r\n\r\n          <p class=\"hero-desc\">\r\n            اقلام انتخابی خود را بررسی نمایید، نشانی یا شیوه دریافت را مشخص کرده و با پرداخت امن، بلافاصله به آموزش‌ها دسترسی پیدا کنید.\r\n          </p>\r\n        </div>\r\n\r\n        <!-- Checkout Steps Indicator -->\r\n        <div class=\"checkout-steps-panel\" aria-label=\"مراحل تکمیل خرید\">\r\n          <div class=\"checkout-step is-active\">\r\n            <span class=\"step-num\">۱</span>\r\n            <div class=\"step-meta\">\r\n              <strong>سبد خرید</strong>\r\n              <small>بررسی دوره‌ها و ملزومات</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"step-line\" [class.is-done]=\"selectedAddress !== -1 || (cart && cart.products.length === 0)\"></div>\r\n\r\n          <div class=\"checkout-step\" [class.is-active]=\"selectedAddress !== -1 || (cart && cart.products.length === 0)\">\r\n            <span class=\"step-num\">۲</span>\r\n            <div class=\"step-meta\">\r\n              <strong>شیوه دریافت</strong>\r\n              <small>{{ (cart && cart.products.length === 0) ? 'دسترسی آنلاین آنی' : 'نشانی پستی' }}</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"step-line\" [class.is-done]=\"isChecked\"></div>\r\n\r\n          <div class=\"checkout-step\" [class.is-active]=\"isChecked\">\r\n            <span class=\"step-num\">۳</span>\r\n            <div class=\"step-meta\">\r\n              <strong>پرداخت نهایی</strong>\r\n              <small>تأیید و صدور دسترسی</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Loading State -->\r\n    <section class=\"cart-loading page-shell\" *ngIf=\"!cart || isLoading2\">\r\n      <div class=\"loading-mark\">\r\n        <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\r\n      </div>\r\n      <h2>در حال آماده‌سازی سبد خرید شما</h2>\r\n      <p>بررسی تخفیف‌ها، موجودی دوره‌ها و اطلاعات سفارش...</p>\r\n    </section>\r\n\r\n    <!-- Main Workspace with Items, Address and Invoice -->\r\n    <section class=\"cart-workspace\" *ngIf=\"cart && !isLoading2 && (cart.courses.length > 0 || cart.products.length > 0)\">\r\n      <div class=\"page-shell checkout-layout\">\r\n        <!-- Main Column: Order Items & Delivery Address -->\r\n        <div class=\"checkout-main\">\r\n          <!-- Items Card -->\r\n          <section class=\"surface order-card\">\r\n            <div class=\"card-heading\">\r\n              <div class=\"card-heading__icon\">\r\n                <ion-icon name=\"bag-check-outline\" aria-hidden=\"true\"></ion-icon>\r\n              </div>\r\n              <div class=\"card-heading__text\">\r\n                <span class=\"card-kicker\">اقلام آموزشی انتخابی</span>\r\n                <h2>محتویات سبد خرید شما</h2>\r\n                <p>{{ cart.courses.length + cart.products.length }} عنوان آموزشی در سبد شما قرار دارد.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Online Courses Group -->\r\n            <div class=\"item-group\" *ngIf=\"cart.courses.length > 0\">\r\n              <div class=\"group-heading courses-heading\">\r\n                <div class=\"group-heading-title\">\r\n                  <span class=\"group-icon\"><ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon></span>\r\n                  <strong>دوره‌های آموزشی روش تدریس</strong>\r\n                  <span class=\"digital-tag\"><ion-icon name=\"flash-outline\"></ion-icon> دسترسی آنلاین آنی</span>\r\n                </div>\r\n                <span class=\"group-count\">{{ cart.courses.length }} دوره</span>\r\n              </div>\r\n\r\n              <div class=\"items-list\">\r\n                <article class=\"cart-item course-item\" *ngFor=\"let course of cart.courses\">\r\n                  <div class=\"item-visual course-visual\">\r\n                    <ion-icon name=\"play-circle-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  </div>\r\n\r\n                  <div class=\"item-info\">\r\n                    <div class=\"item-badge-row\">\r\n                      <span class=\"item-kind course-kind\">دوره توانمندسازی معلمان</span>\r\n                      <span class=\"item-instant-badge\">دسترسی نامحدود و مادام‌العمر</span>\r\n                    </div>\r\n                    <a [routerLink]=\"['/c', course.courseId]\" class=\"item-title\">{{ course.name }}</a>\r\n                    <div class=\"item-features\">\r\n                      <span><ion-icon name=\"videocam-outline\"></ion-icon> مشاهده ویدئوها در پنل کاربری</span>\r\n                      <span><ion-icon name=\"ribbon-outline\"></ion-icon> منطبق بر کتاب درسی</span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"item-price\">\r\n                    <span *ngIf=\"course.offPrice > 0\" class=\"old-price\">{{ course.price | rial }}</span>\r\n                    <strong class=\"current-price\">{{ (course.offPrice > 0 ? course.offPrice : course.price) | rial }}</strong>\r\n                    <small class=\"price-note\">تومان / ریال</small>\r\n                  </div>\r\n\r\n                  <button type=\"button\" class=\"remove-btn\" (click)=\"onRemove(course.id)\" title=\"حذف این دوره از سبد\" aria-label=\"حذف دوره\">\r\n                    <ion-icon name=\"trash-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  </button>\r\n                </article>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Classroom Products / Worksheets Group -->\r\n            <div class=\"item-group\" *ngIf=\"cart.products.length > 0\">\r\n              <div class=\"group-heading products-heading\">\r\n                <div class=\"group-heading-title\">\r\n                  <span class=\"group-icon product-icon-wrap\"><ion-icon name=\"cube-outline\" aria-hidden=\"true\"></ion-icon></span>\r\n                  <strong>کاربرگ‌ها، جزوات و ملزومات کلاسی</strong>\r\n                  <span class=\"physical-tag\"><ion-icon name=\"mail-outline\"></ion-icon> ارسال پستی</span>\r\n                </div>\r\n                <span class=\"group-count\">{{ cart.products.length }} کالا</span>\r\n              </div>\r\n\r\n              <div class=\"items-list\">\r\n                <article class=\"product-item-wrapper\" *ngFor=\"let product of cart.products; let i = index\">\r\n                  <div class=\"cart-item product-item\" [class.is-expanded]=\"selectedItemIndex === i\">\r\n                    <div class=\"item-visual product-visual\">\r\n                      <ion-icon name=\"document-text-outline\" aria-hidden=\"true\"></ion-icon>\r\n                    </div>\r\n\r\n                    <div class=\"item-info\">\r\n                      <div class=\"item-badge-row\">\r\n                        <span class=\"item-kind product-kind\">ملزومات آموزشی کلاسی</span>\r\n                        <span class=\"item-variant-chip\" *ngIf=\"product.designId !== 0\">{{ product.designTitle }}</span>\r\n                      </div>\r\n                      <a [routerLink]=\"['/p', product.productId]\" class=\"item-title\">{{ product.name }}</a>\r\n                      <div class=\"item-features\">\r\n                        <span><ion-icon name=\"layers-outline\"></ion-icon> تعداد سفارش: <b>{{ product.count }}</b> عدد</span>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"item-price\">\r\n                      <span *ngIf=\"product.offPrice > 0\" class=\"old-price\">{{ product.price | rial }}</span>\r\n                      <strong class=\"current-price\">{{ (product.offPrice > 0 ? product.offPrice : product.price) | rial }}</strong>\r\n                      <small class=\"price-note\">قیمت هر واحد</small>\r\n                    </div>\r\n\r\n                    <button type=\"button\" class=\"detail-toggle-btn\" (click)=\"onProductDetailClick(i)\">\r\n                      <span>{{ selectedItemIndex === i ? 'بستن مشخصات' : 'جزئیات ارسال' }}</span>\r\n                      <ion-icon [name]=\"selectedItemIndex === i ? 'chevron-up-outline' : 'chevron-down-outline'\" aria-hidden=\"true\"></ion-icon>\r\n                    </button>\r\n\r\n                    <button type=\"button\" class=\"remove-btn\" (click)=\"onRemove2(product.id)\" title=\"حذف این کالا از سبد\" aria-label=\"حذف کالا\">\r\n                      <ion-icon name=\"trash-outline\" aria-hidden=\"true\"></ion-icon>\r\n                    </button>\r\n                  </div>\r\n\r\n                  <!-- Expandable Shipping Details Panel -->\r\n                  <div class=\"product-details-panel\" *ngIf=\"selectedItemIndex === i\">\r\n                    <div class=\"detail-pill\">\r\n                      <span>روش ارسال</span>\r\n                      <strong>{{ onGetSendType(product.orderSendTypeId) }}</strong>\r\n                    </div>\r\n                    <div class=\"detail-pill\" *ngIf=\"product.weight > 0\">\r\n                      <span>وزن مرسوله</span>\r\n                      <strong>{{ product.weight * product.count }} گرم</strong>\r\n                    </div>\r\n                    <div class=\"detail-pill\" *ngIf=\"product.weight > 0\">\r\n                      <span>هزینه ارسال</span>\r\n                      <strong *ngIf=\"product.hasFreeSend\" class=\"free-text\">رایگان</strong>\r\n                      <strong *ngIf=\"!product.hasFreeSend\">{{ onGetSendPrice(i) + product.extraDeliveryPrice | rial }}</strong>\r\n                    </div>\r\n                    <div class=\"detail-pill subtotal\">\r\n                      <span>جمع هزینه این قلم</span>\r\n                      <strong>{{ (product.count * (product.offPrice > 0 ? product.offPrice : product.price)) + onGetSendPrice(i) + product.extraDeliveryPrice | rial }}</strong>\r\n                    </div>\r\n                  </div>\r\n                </article>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Digital Items Note (When cart has only courses, no address needed) -->\r\n          <section class=\"surface digital-note-card\" *ngIf=\"cart.courses.length > 0 && cart.products.length === 0\">\r\n            <div class=\"digital-note-inner\">\r\n              <div class=\"digital-note-icon\">\r\n                <ion-icon name=\"checkmark-done-circle-outline\"></ion-icon>\r\n              </div>\r\n              <div class=\"digital-note-text\">\r\n                <h3>دسترسی آنی به دوره‌های آموزش مجازی</h3>\r\n                <p>\r\n                  کلیه دوره‌های موجود در سبد خرید شما به صورت ویدئویی و فایل‌های همراه هستند و نیازی به آدرس پستی یا هزینه ارسال ندارند. بلافاصله پس از تکمیل پرداخت، محتوای دوره در بخش <b>«دوره‌های من»</b> در پنل کاربری شما فعال خواهد شد.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Delivery Address Section (Only needed when physical products exist) -->\r\n          <section class=\"surface address-card\" *ngIf=\"cart.products.length > 0 && !isLoading\">\r\n            <div class=\"card-heading card-heading--compact\">\r\n              <div class=\"card-heading__icon\">\r\n                <ion-icon name=\"location-outline\" aria-hidden=\"true\"></ion-icon>\r\n              </div>\r\n              <div class=\"card-heading__text\">\r\n                <span class=\"card-kicker\">نشانی ارسال ملزومات کلاسی</span>\r\n                <h2>آدرس تحویل سفارش</h2>\r\n                <p>بسته‌های فیزیکی، کاربرگ‌های چاپی و ابزارهای کلاسی به این آدرس ارسال خواهند شد.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Address Selection List -->\r\n            <ng-container *ngIf=\"!addSelected\">\r\n              <div class=\"address-top-actions\">\r\n                <button type=\"button\" class=\"btn-secondary\" *ngIf=\"selectedAddress !== -1\" (click)=\"addressSelected()\">\r\n                  <ion-icon name=\"create-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  <span>ویرایش آدرس انتخابی</span>\r\n                </button>\r\n                <button type=\"button\" class=\"btn-primary\" (click)=\"addSelected = true; addressForm.reset(); provinceId = 1; cityId = 1\">\r\n                  <ion-icon name=\"add-circle-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  <span>افزودن آدرس جدید</span>\r\n                </button>\r\n              </div>\r\n\r\n              <ion-radio-group class=\"address-grid\" *ngIf=\"userAddress\" [value]=\"selectedAddress\" (ionChange)=\"onAnswerSelected($event)\">\r\n                <label class=\"address-option\" *ngFor=\"let a of userAddress.buyerUserProductAddresses; let i = index\" [class.is-selected]=\"selectedAddress === a.id\">\r\n                  <div class=\"address-radio-col\">\r\n                    <ion-radio color=\"primary\" [value]=\"a.id\"></ion-radio>\r\n                    <span class=\"address-idx\">{{ i + 1 }}</span>\r\n                  </div>\r\n                  <div class=\"address-content-col\">\r\n                    <div class=\"address-title-row\">\r\n                      <strong>{{ a.title }}</strong>\r\n                      <span class=\"receiver-name\">{{ a.name }} {{ a.family }}</span>\r\n                    </div>\r\n                    <p class=\"address-street\">{{ a.address }}</p>\r\n                    <div class=\"address-meta-row\">\r\n                      <span *ngIf=\"a.phoneNumber\"><ion-icon name=\"call-outline\"></ion-icon> {{ a.phoneNumber }}</span>\r\n                      <span *ngIf=\"a.postCode\"><ion-icon name=\"mail-outline\"></ion-icon> کدپستی: {{ a.postCode }}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"address-check-col\">\r\n                    <ion-icon name=\"checkmark-circle\" class=\"check-icon\" aria-hidden=\"true\"></ion-icon>\r\n                  </div>\r\n                </label>\r\n              </ion-radio-group>\r\n\r\n              <div class=\"address-empty-state\" *ngIf=\"userAddress && (!userAddress.buyerUserProductAddresses || userAddress.buyerUserProductAddresses.length === 0)\">\r\n                <div class=\"address-empty-icon\"><ion-icon name=\"map-outline\"></ion-icon></div>\r\n                <h4>هنوز آدرسی برای ارسال ثبت نکرده‌اید</h4>\r\n                <p>برای دریافت بسته‌های آموزشی، لطفاً یک آدرس تحویل به حساب خود اضافه کنید.</p>\r\n                <button type=\"button\" class=\"btn-primary\" (click)=\"addSelected = true; addressForm.reset(); provinceId = 1; cityId = 1\">\r\n                  <ion-icon name=\"add-outline\"></ion-icon>\r\n                  <span>ثبت اولین آدرس</span>\r\n                </button>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <!-- Add / Edit Address Form -->\r\n            <form class=\"address-form-box\" [formGroup]=\"addressForm\" (ngSubmit)=\"onChangeAddress()\" *ngIf=\"addSelected\">\r\n              <div class=\"form-header\">\r\n                <div>\r\n                  <strong>{{ addressForm.value.id ? 'ویرایش اطلاعات آدرس' : 'افزودن آدرس پستی جدید' }}</strong>\r\n                  <small>لطفاً اطلاعات را به دقت وارد فرمایید تا بسته به موقع به دست شما برسد.</small>\r\n                </div>\r\n                <button type=\"button\" class=\"form-close-btn\" (click)=\"addSelected = false\" aria-label=\"بستن فرم\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n                </button>\r\n              </div>\r\n\r\n              <!-- Province & City Selection -->\r\n              <div class=\"form-row-grid location-grid\">\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">استان *</span>\r\n                  <div class=\"select-wrapper\">\r\n                    <select [(ngModel)]=\"provinceId\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"cityId = 1\">\r\n                      <option *ngFor=\"let p of userAddress.provinces\" [ngValue]=\"p.id\">{{ p.name }}</option>\r\n                    </select>\r\n                    <ion-icon name=\"chevron-down-outline\" class=\"select-caret\" aria-hidden=\"true\"></ion-icon>\r\n                  </div>\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">شهر *</span>\r\n                  <div class=\"select-wrapper\">\r\n                    <select [(ngModel)]=\"cityId\" [ngModelOptions]=\"{standalone: true}\">\r\n                      <option *ngFor=\"let c of getCityList()\" [ngValue]=\"c.id\">{{ c.name }}</option>\r\n                    </select>\r\n                    <ion-icon name=\"chevron-down-outline\" class=\"select-caret\" aria-hidden=\"true\"></ion-icon>\r\n                  </div>\r\n                </label>\r\n              </div>\r\n\r\n              <!-- Form Inputs -->\r\n              <div class=\"form-row-grid\">\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">عنوان آدرس (مثلاً خانه یا مدرسه) *</span>\r\n                  <input type=\"text\" formControlName=\"title\" placeholder=\"عنوان آدرس\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">نام مدرسه یا مرکز آموزشی (اختیاری)</span>\r\n                  <input type=\"text\" formControlName=\"companyName\" placeholder=\"نام دبستان یا آموزشگاه\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">نام تحویل‌گیرنده *</span>\r\n                  <input type=\"text\" formControlName=\"name\" placeholder=\"نام\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">نام خانوادگی تحویل‌گیرنده *</span>\r\n                  <input type=\"text\" formControlName=\"family\" placeholder=\"نام خانوادگی\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">شماره تلفن همراه گیرنده *</span>\r\n                  <input type=\"tel\" formControlName=\"phoneNumber\" placeholder=\"۰۹xxxxxxxxx\" dir=\"ltr\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">تلفن ثابت (اختیاری)</span>\r\n                  <input type=\"tel\" formControlName=\"homePhoneNumber\" placeholder=\"پیش‌شماره + تلفن\" dir=\"ltr\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field\">\r\n                  <span class=\"field-label\">کدپستی ده رقمی *</span>\r\n                  <input type=\"text\" formControlName=\"postCode\" placeholder=\"کدپستی معتبر\" dir=\"ltr\" />\r\n                </label>\r\n\r\n                <label class=\"custom-field full-width-field\">\r\n                  <span class=\"field-label\">نشانی پستی دقیق (خیابان، کوچه، پلاک، واحد) *</span>\r\n                  <textarea rows=\"3\" formControlName=\"address\" placeholder=\"آدرس کامل را وارد فرمایید...\"></textarea>\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-actions-row\">\r\n                <button type=\"button\" class=\"btn-ghost\" (click)=\"addSelected = false\">انصراف</button>\r\n                <button type=\"submit\" class=\"btn-primary\" [disabled]=\"!addressForm.valid\">\r\n                  <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                  <span>{{ addressForm.value.id ? 'ذخیره تغییرات آدرس' : 'ثبت نشانی' }}</span>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </section>\r\n        </div>\r\n\r\n        <!-- Sidebar Column: Coupon, Payment Method & Payment Summary -->\r\n        <aside class=\"checkout-sidebar\">\r\n          <!-- Discount Code Card -->\r\n          <section class=\"surface discount-card\">\r\n            <div class=\"aside-heading\">\r\n              <div class=\"aside-heading__icon\">\r\n                <ion-icon name=\"pricetag-outline\" aria-hidden=\"true\"></ion-icon>\r\n              </div>\r\n              <div class=\"aside-heading__text\">\r\n                <strong>کد تخفیف یا هدیه</strong>\r\n                <small>اگر کد تخفیف دارید، وارد فرمایید</small>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Coupon Input -->\r\n            <div class=\"coupon-box\" *ngIf=\"!cart.isOffCodeUsed\">\r\n              <ion-icon name=\"key-outline\" class=\"coupon-icon\" aria-hidden=\"true\"></ion-icon>\r\n              <input\r\n                type=\"text\"\r\n                [(ngModel)]=\"offPriceCode\"\r\n                placeholder=\"کد تخفیف (مثلاً AVALAMOOZ)\"\r\n                class=\"coupon-input\"\r\n              />\r\n              <button type=\"button\" class=\"coupon-btn\" (click)=\"onAddOffPrice()\">اعمال کد</button>\r\n            </div>\r\n\r\n            <!-- Coupon Applied Badge -->\r\n            <div class=\"coupon-applied-badge\" *ngIf=\"cart.isOffCodeUsed\">\r\n              <ion-icon name=\"checkmark-circle\" class=\"applied-icon\"></ion-icon>\r\n              <div class=\"applied-details\">\r\n                <strong>کد تخفیف با موفقیت اعمال شد</strong>\r\n                <span *ngIf=\"cart.usedOffCodePercent !== 0\">میزان تخفیف: {{ cart.usedOffCodePercent }}%</span>\r\n                <span *ngIf=\"cart.usedOffCodePercent === 0\">مبلغ تخفیف: {{ cart.usedOffCodePrice | rial }}</span>\r\n              </div>\r\n              <button type=\"button\" class=\"remove-coupon-btn\" (click)=\"presentRemoveOffPrice()\" title=\"حذف تخفیف\" aria-label=\"حذف تخفیف\">\r\n                <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n              </button>\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Payment Method Card -->\r\n          <section class=\"surface payment-card\">\r\n            <div class=\"aside-heading\">\r\n              <div class=\"aside-heading__icon\">\r\n                <ion-icon name=\"wallet-outline\" aria-hidden=\"true\"></ion-icon>\r\n              </div>\r\n              <div class=\"aside-heading__text\">\r\n                <strong>روش پرداخت</strong>\r\n                <small>انتخاب شیوه تسویه حساب</small>\r\n              </div>\r\n            </div>\r\n\r\n            <ion-radio-group [(ngModel)]=\"selectedPay\" class=\"payment-options-group\">\r\n              <label class=\"payment-option-item\" [class.is-selected]=\"selectedPay === 'bank'\" (click)=\"selectedPay = 'bank'\">\r\n                <div class=\"payment-icon-wrap\">\r\n                  <ion-icon name=\"card-outline\" aria-hidden=\"true\"></ion-icon>\r\n                </div>\r\n                <div class=\"payment-option-meta\">\r\n                  <strong>درگاه بانکی شتاب (شاپرک)</strong>\r\n                  <small>پرداخت امن آنلاین با کلیه کارت‌های بانکی</small>\r\n                </div>\r\n                <ion-radio color=\"primary\" value=\"bank\"></ion-radio>\r\n              </label>\r\n\r\n              <label class=\"payment-option-item\" [class.is-selected]=\"selectedPay === 'wallet'\" (click)=\"selectedPay = 'wallet'\">\r\n                <div class=\"payment-icon-wrap wallet-wrap\">\r\n                  <ion-icon name=\"wallet-outline\" aria-hidden=\"true\"></ion-icon>\r\n                </div>\r\n                <div class=\"payment-option-meta\">\r\n                  <strong>کیف پول اعتباری اول آموز</strong>\r\n                  <small>موجودی حساب: <b>{{ cart.walletStock | rial }}</b></small>\r\n                </div>\r\n                <ion-radio color=\"primary\" value=\"wallet\"></ion-radio>\r\n              </label>\r\n            </ion-radio-group>\r\n          </section>\r\n\r\n          <!-- Invoice / Payment Summary Card -->\r\n          <section class=\"surface invoice-card\">\r\n            <div class=\"invoice-heading\">\r\n              <div class=\"invoice-heading-copy\">\r\n                <span class=\"invoice-kicker\">صورت‌حساب نهایی</span>\r\n                <h2>خلاصه پرداخت</h2>\r\n              </div>\r\n              <div class=\"invoice-badge-icon\">\r\n                <ion-icon name=\"receipt-outline\" aria-hidden=\"true\"></ion-icon>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"invoice-rows\">\r\n              <div class=\"invoice-row\">\r\n                <span>مبلغ دوره‌ها و ملزومات</span>\r\n                <strong>{{ coursesPrice + productsPrice | rial }}</strong>\r\n              </div>\r\n\r\n              <div class=\"invoice-row\" *ngIf=\"productsSendPrice !== 0\">\r\n                <span>هزینه بسته‌بندی و ارسال</span>\r\n                <strong>{{ productsSendPrice | rial }}</strong>\r\n              </div>\r\n\r\n              <div class=\"invoice-row saving-row\" *ngIf=\"offSendPrice !== 0\">\r\n                <span>تخفیف ارسال مرسوله</span>\r\n                <strong class=\"saving-text\">− {{ offSendPrice | rial }}</strong>\r\n              </div>\r\n\r\n              <div class=\"invoice-row saving-row\" *ngIf=\"totalOffPrice !== 0\">\r\n                <span>مجموع تخفیف‌های سفارش</span>\r\n                <strong class=\"saving-text\">− {{ totalOffPrice | rial }}</strong>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"invoice-total-row\">\r\n              <div class=\"total-label-wrap\">\r\n                <span>مبلغ نهایی قابل پرداخت</span>\r\n                <small *ngIf=\"cart.products.length > 0\">با احتساب هزینه تحویل</small>\r\n                <small *ngIf=\"cart.products.length === 0\">دسترسی آنلاین بدون هزینه ارسال</small>\r\n              </div>\r\n              <strong class=\"total-amount\">{{ totalPayPrice | rial }}</strong>\r\n            </div>\r\n\r\n            <!-- Service Rules Agreement Checkbox -->\r\n            <label class=\"rules-checkbox-row\" [class.is-checked]=\"isChecked\">\r\n              <ion-checkbox color=\"primary\" [(ngModel)]=\"isChecked\"></ion-checkbox>\r\n              <span>\r\n                با <a routerLink=\"/PayRules\" target=\"_blank\">قوانین خدمات، حریم خصوصی و شرایط خرید</a> اول آموز موافقم.\r\n              </span>\r\n            </label>\r\n\r\n            <!-- Submit & Pay Button -->\r\n            <button type=\"button\" class=\"btn-pay-action\" (click)=\"onPay()\" [disabled]=\"onCheckBuy()\">\r\n              <span class=\"pay-btn-label\">\r\n                <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n                <span>تأیید و پرداخت نهایی</span>\r\n              </span>\r\n              <ion-icon name=\"arrow-back-outline\" class=\"pay-btn-arrow\"></ion-icon>\r\n            </button>\r\n\r\n            <!-- Secure Payment Trust Indicator -->\r\n            <div class=\"secure-trust-row\">\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n              <span>پرداخت تحت نظارت شبکه شاپرک با پروتکل رمزنگاری امن SSL</span>\r\n            </div>\r\n          </section>\r\n        </aside>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Empty Cart State -->\r\n    <section class=\"empty-cart-state page-shell\" *ngIf=\"cart && !isLoading2 && cart.courses.length === 0 && cart.products.length === 0\">\r\n      <div class=\"empty-cart-orb\">\r\n        <ion-icon name=\"cart-outline\" aria-hidden=\"true\"></ion-icon>\r\n        <span class=\"orb-sparkle orb-sparkle-1\">✦</span>\r\n        <span class=\"orb-sparkle orb-sparkle-2\">✧</span>\r\n      </div>\r\n\r\n      <div class=\"empty-cart-eyebrow\">\r\n        <span class=\"sparkle-dot\">✦</span>\r\n        <span>سبد خرید شما خالی است</span>\r\n      </div>\r\n\r\n      <h2>\r\n        هنوز هیچ دوره‌ای به سبد خریدتان <br />\r\n        <span class=\"empty-highlight\">اضافه نکرده‌اید!</span>\r\n      </h2>\r\n\r\n      <p class=\"empty-copy\">\r\n        از میان دوره‌های ویدئویی روش تدریس، کاربرگ‌های هفتگی آماده چاپ و طرح‌درس‌های استاندارد، آنچه را برای کلاستان نیاز دارید انتخاب کنید.\r\n      </p>\r\n\r\n      <div class=\"empty-actions-row\">\r\n        <a routerLink=\"/\" class=\"btn-primary glow\">\r\n          <ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>مشاهده دوره‌های روش تدریس</span>\r\n          <ion-icon name=\"arrow-back-outline\" aria-hidden=\"true\"></ion-icon>\r\n        </a>\r\n\r\n        <a routerLink=\"/Product\" class=\"btn-secondary\">\r\n          <ion-icon name=\"cube-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>کاربرگ‌ها و ملزومات کلاسی</span>\r\n        </a>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Educational Trust Strip -->\r\n    <section class=\"learning-trust-strip\" *ngIf=\"cart && !isLoading2\">\r\n      <div class=\"page-shell trust-grid\">\r\n        <div class=\"trust-cell\">\r\n          <div class=\"trust-icon-wrap\"><ion-icon name=\"shield-checkmark-outline\"></ion-icon></div>\r\n          <div class=\"trust-copy\">\r\n            <strong>پرداخت امن شاپرک</strong>\r\n            <small>اتصال به درگاه‌های رسمی بانک مرکزی</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"trust-cell\">\r\n          <div class=\"trust-icon-wrap\"><ion-icon name=\"flash-outline\"></ion-icon></div>\r\n          <div class=\"trust-copy\">\r\n            <strong>دسترسی فوری به دوره‌ها</strong>\r\n            <small>فعال‌سازی لحظه‌ای در پنل کاربری</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"trust-cell\">\r\n          <div class=\"trust-icon-wrap\"><ion-icon name=\"ribbon-outline\"></ion-icon></div>\r\n          <div class=\"trust-copy\">\r\n            <strong>محتوای استاندارد ابتدایی</strong>\r\n            <small>تایید شده توسط سرگروه‌های آموزشی</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"trust-cell\">\r\n          <div class=\"trust-icon-wrap\"><ion-icon name=\"chatbubbles-outline\"></ion-icon></div>\r\n          <div class=\"trust-copy\">\r\n            <strong>پشتیبانی آموزگاران</strong>\r\n            <small>پاسخگویی سریع در ایتا، تلگرام و تیکت</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_cart_cart_module_ts.js.map