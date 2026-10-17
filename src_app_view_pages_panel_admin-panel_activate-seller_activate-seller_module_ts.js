"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_activate-seller_activate-seller_module_ts"],{

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

/***/ 94880:
/*!**************************************************!*\
  !*** ./src/app/data/model/person/SellerModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerModel": () => (/* binding */ SellerModel),
/* harmony export */   "SellerUserDetailModel": () => (/* binding */ SellerUserDetailModel),
/* harmony export */   "SellerUserFilterModel": () => (/* binding */ SellerUserFilterModel)
/* harmony export */ });
class SellerModel {
    constructor(id, name, family, resume, userAvatarAddress, isRested, countryId, provinceId, cityId, countryName, provinceName, cityName) {
        this.id = id;
        this.name = name;
        this.family = family;
        this.resume = resume;
        this.userAvatarAddress = userAvatarAddress;
        this.isRested = isRested;
        this.countryId = countryId;
        this.provinceId = provinceId;
        this.cityId = cityId;
        this.countryName = countryName;
        this.provinceName = provinceName;
        this.cityName = cityName;
    }
}
class SellerUserDetailModel {
    constructor(id, email, phone, name, family, address, identificationCode, nationalCode, birthDay, isActive, resume, userAvatarAddress, isShow, mainResume, site, telegram, instagram, whatsApp, linkedIn, isProductDisabled, hasFreeSendPrediction, freeSendPredictionPrice, minBikeDeliveryPrice, bikeDeliveryPriceEachKg, minTipaxPrice, tipaxPriceEachKg, minPostPrice, postPriceEachKg, minSpecialPostPrice, specialPostPriceEachKg, minBurberryPrice, burberryPriceEachKg, isEdited, countryId, provinceId, cityId) {
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
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.family = family;
        this.address = address;
        this.identificationCode = identificationCode;
        this.nationalCode = nationalCode;
        this.birthDay = birthDay;
        this.isActive = isActive;
        this.resume = resume;
        this.userAvatarAddress = userAvatarAddress;
        this.isShow = isShow;
        this.mainResume = mainResume;
        this.site = site;
        this.telegram = telegram;
        this.instagram = instagram;
        this.whatsApp = whatsApp;
        this.linkedIn = linkedIn;
    }
}
class SellerUserFilterModel {
    constructor(pageId, takeEntity, title, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 12;
        }
        this.pageId = pageId ? +pageId : 1;
        this.title = title ? title : null;
        this.searchId = searchId ? +searchId : 0;
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

/***/ 99115:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/activate-seller/activate-seller-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateSellerRoutingModule": () => (/* binding */ ActivateSellerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _activate_seller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-seller.component */ 43759);




const routes = [{ path: '', component: _activate_seller_component__WEBPACK_IMPORTED_MODULE_0__.ActivateSellerComponent }];
let ActivateSellerRoutingModule = class ActivateSellerRoutingModule {
};
ActivateSellerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ActivateSellerRoutingModule);



/***/ }),

/***/ 43759:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/activate-seller/activate-seller.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateSellerComponent": () => (/* binding */ ActivateSellerComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activate_seller_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-seller.component.html?ngResource */ 98697);
/* harmony import */ var _activate_seller_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate-seller.component.scss?ngResource */ 3070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/admin/admin.service */ 94733);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/order/CartModel */ 47968);
/* harmony import */ var src_app_data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/model/person/SellerModel */ 94880);














let ActivateSellerComponent = class ActivateSellerComponent {
  constructor(adminService, toastController, fb, router, userService, activatedRoute, loadingController, alertController) {
    this.adminService = adminService;
    this.toastController = toastController;
    this.fb = fb;
    this.router = router;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.selectedIndex = 0;
    this.selectedId = 0;
    this.isSelected = false;
    this.usersCount = 0;
    this.searchTitle = '';
    this.searchIdValue = '0';
    this.isEdited = false;
    this.loading3 = true;
    this.wallet = 0;
  }

  ngOnInit() {
    this.walletForm = this.fb.group({
      cash: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(999999999)]]
    });
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      resume: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(2000)]],
      mainResume: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20000)]],
      avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200000)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      site: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      linkedIn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      whatsApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(13)]],
      birthDay: ['1370-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isProductDisabled: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasFreeSendPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      freeSendPredictionPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      minBikeDeliveryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      bikeDeliveryPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      minTipaxPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      tipaxPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      minPostPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      postPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      minSpecialPostPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      specialPostPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      minBurberryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]],
      burberryPriceEachKg: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000000000)]]
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 10;
      const title = params.title ? params.title : '';
      const searchId = params.searchId ? params.searchId : +this.searchIdValue;

      if (searchId !== 0) {
        this.searchIdValue = searchId.toString();
      }

      if (title !== '') {
        this.searchTitle = title;
      }

      filter = new src_app_data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_8__.SellerUserFilterModel(page, take, title, searchId);
      this.filteredUsers = filter;
      this.getData();
    });
  }

  ionViewWillEnter() {
    this.adminService.GetAdminSellersCount().subscribe(res => {
      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.usersCount = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAddWalletAlertConfirm() {
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
            _this.onAddWallet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onAddWallet() {
    if (this.walletForm.valid) {
      if (this.wallet + this.walletForm.value.cash > 999999999) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'بیشتر از سقف مجاز میباشد');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.userService.AdminAddSellerWallet(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_7__.WalletChangeModel(this.selectedId, +this.walletForm.value.cash)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
          this.wallet += +this.walletForm.value.cash;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentReduceWalletAlertConfirm() {
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
            _this2.onReduceWallet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReduceWallet() {
    if (this.walletForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.userService.AdminReduceSellerWallet(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_7__.WalletChangeModel(this.selectedId, +this.walletForm.value.cash)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);

          if (this.wallet - this.walletForm.value.cash < 0) {
            this.wallet = 0;
          } else {
            this.wallet -= +this.walletForm.value.cash;
          }
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onSelect(index) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.selectedIndex = +index;
    this.selectedId = this.filteredUsers.sellers[+index].id;
    this.selectedSeller = this.filteredUsers.sellers[+index];
    this.userService.GetSellerProfileEditById(this.selectedSeller.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.selectedSellerEdit = new src_app_data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_8__.SellerUserDetailModel(this.selectedSeller.id, this.selectedSeller.email, this.selectedSeller.phone, res.data.name, res.data.family, res.data.address, res.data.identificationCode, res.data.nationalCode, res.data.birthDay, this.selectedSeller.isActive, res.data.resume, res.data.userAvatarAddress, this.selectedSeller.isShow, res.data.mainResume, res.data.site, res.data.telegram, res.data.instagram, res.data.whatsApp, res.data.linkedIn, res.data.isProductDisabled, res.data.hasFreeSendPrediction, res.data.freeSendPredictionPrice, res.data.minBikeDeliveryPrice, res.data.bikeDeliveryPriceEachKg, res.data.minTipaxPrice, res.data.tipaxPriceEachKg, res.data.minPostPrice, res.data.postPriceEachKg, res.data.minSpecialPostPrice, res.data.specialPostPriceEachKg, res.data.minBurberryPrice, res.data.burberryPriceEachKg, res.data.isEdited);
        this.form.setValue({
          name: res.data.name,
          family: res.data.family,
          address: res.data.address,
          resume: res.data.resume,
          avatar: res.data.userAvatarAddress,
          nationalCode: res.data.nationalCode,
          identificationCode: res.data.identificationCode,
          birthDay: res.data.birthDay,
          mainResume: res.data.mainResume,
          telegram: res.data.telegram,
          instagram: res.data.instagram,
          whatsApp: res.data.whatsApp,
          linkedIn: res.data.linkedIn,
          site: res.data.site,
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
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
    this.userService.GetAdminSellerWallet(this.selectedId).subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.wallet = res.data;
      } else {
        this.wallet = -1;
      }

      this.loading3 = false;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.wallet = -1;
      this.loading3 = false;
    });
    this.isSelected = true;
  }

  onCancel() {
    this.isSelected = false;
  }

  getData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.GetSellersByFilter(this.filteredUsers).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.filteredUsers = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
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
    this.router.navigate(['AdminPanel', 'ActivateSeller'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredUsers.takeEntity ? this.filteredUsers.takeEntity : null,
        title: this.filteredUsers.title ? this.filteredUsers.title : null,
        searchId: this.filteredUsers.searchId ? this.filteredUsers.searchId : null
      }
    });
  }

  presentAlertConfirm2() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.editSeller();
          }
        }]
      });
      yield alert.present();
    })();
  }

  editSeller() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.EditSellerProfileByAdmin(new src_app_data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_8__.SellerUserDetailModel(this.selectedId, this.selectedSeller.email, this.selectedSeller.phone, this.form.value.name, this.form.value.family, this.form.value.address, this.form.value.identificationCode, this.form.value.nationalCode, this.form.value.birthDay, this.selectedSeller.isActive, this.form.value.resume, this.form.value.avatar, this.selectedSeller.isShow, this.form.value.mainResume, this.form.value.site, this.form.value.telegram, this.form.value.instagram, this.form.value.whatsApp, this.form.value.linkedIn, this.form.value.isProductDisabled, this.form.value.hasFreeSendPrediction, this.form.value.freeSendPredictionPrice, this.form.value.minBikeDeliveryPrice, this.form.value.bikeDeliveryPriceEachKg, this.form.value.minTipaxPrice, this.form.value.tipaxPriceEachKg, this.form.value.minPostPrice, this.form.value.postPriceEachKg, this.form.value.minSpecialPostPrice, this.form.value.specialPostPriceEachKg, this.form.value.minBurberryPrice, this.form.value.burberryPriceEachKg)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isEdited = false;
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onBackClick() {
    this.isEdited = false;
  }

  presentAlertConfirm() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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
            _this4.activateUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertActiveConfirm() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
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
            _this5.activate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertDeActiveConfirm() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.deActivate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertActiveRestConfirm() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
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
            _this7.activateRest();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertDeActiveRestConfirm() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
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
            _this8.deActivateRest();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertActiveShowConfirm() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
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
            _this9.activateShow();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertDeActiveShowConfirm() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
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
            _this10.deActivateShow();
          }
        }]
      });
      yield alert.present();
    })();
  }

  activateUpdate() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.ActivateSellerEditById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  activate() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.ActivateSellerById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  deActivate() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.DeActivateSellerById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  activateRest() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.ActivateSellerRestById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  deActivateRest() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.DeActivateSellerRestById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  activateShow() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.ActivateSellerShowById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  deActivateShow() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.adminService.DeActivateSellerShowById(this.selectedId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.isSelected = false;
        this.getData();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

};

ActivateSellerComponent.ctorParameters = () => [{
  type: _data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__.AdminService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}];

ActivateSellerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-activate-seller',
  template: _activate_seller_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_activate_seller_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ActivateSellerComponent);


/***/ }),

/***/ 63962:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/activate-seller/activate-seller.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateSellerModule": () => (/* binding */ ActivateSellerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _activate_seller_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-seller-routing.module */ 99115);
/* harmony import */ var _activate_seller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate-seller.component */ 43759);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);













let ActivateSellerModule = class ActivateSellerModule {
};
ActivateSellerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_activate_seller_component__WEBPACK_IMPORTED_MODULE_2__.ActivateSellerComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _activate_seller_routing_module__WEBPACK_IMPORTED_MODULE_1__.ActivateSellerRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule
        ]
    })
], ActivateSellerModule);



/***/ }),

/***/ 3070:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/activate-seller/activate-seller.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmF0ZS1zZWxsZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 98697:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/activate-seller/activate-seller.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>دسترسی فروشنده</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-card dir=\"rtl\" *ngIf=\"!isSelected\">\r\n      <ion-item dir=\"rtl\">\r\n        <ion-label>جستجو بر حسب</ion-label>\r\n        <ion-select [(ngModel)]=\"searchIdValue\" okText=\"انتخاب\" cancelText=\"لغو\">\r\n          <ion-select-option value=\"0\">کد ملی</ion-select-option>\r\n          <ion-select-option value=\"1\">شماره شناسنامه</ion-select-option>\r\n          <ion-select-option value=\"2\">نام</ion-select-option>\r\n          <ion-select-option value=\"3\">نام خانوائگی</ion-select-option>\r\n          <ion-select-option value=\"4\">کد مدرس</ion-select-option>\r\n          <ion-select-option value=\"5\">ایمیل</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-button\r\n          color=\"success\"\r\n          class=\"ion-margin\"\r\n          fill=\"clear\"\r\n          (click)=\"setQueryParams(1)\"\r\n        >\r\n          <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-input\r\n          (keyup.enter)=\"setQueryParams(1)\"\r\n          placeholder=\"جستجو کنید\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"searchTitle\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n  \r\n    <ion-grid *ngIf=\"!isSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>فروشنده ها</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"filteredUsers\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-label>تعداد کل فروشنده ها: {{ usersCount }}</ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(filteredUsers.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredUsers.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredUsers.pageId <= i + 3 &&\r\n                            filteredUsers.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredUsers.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredUsers.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredUsers.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredUsers.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredUsers.sellers\" dir=\"rtl\">\r\n                    <ion-col size=\"12\">\r\n                      <ion-list>\r\n                        <ion-item\r\n                          button\r\n                          *ngFor=\"\r\n                            let teacher of filteredUsers.sellers;\r\n                            let i = index\r\n                          \"\r\n                          (click)=\"onSelect(i)\"\r\n                        >\r\n                          <ion-label>{{\r\n                            teacher.name + \" \" + teacher.family\r\n                          }}</ion-label>\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"{{ teacher.isActive ? 'success' : 'danger' }}\"\r\n                            name=\"{{\r\n                              teacher.isActive\r\n                                ? 'checkmark-outline'\r\n                                : 'close-outline'\r\n                            }}\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredUsers.pageId > 3 && filteredUsers.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(filteredUsers.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredUsers.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredUsers.pageId <= i + 3 &&\r\n                            filteredUsers.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredUsers.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredUsers.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"filteredUsers.pageId + 2 < filteredUsers.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredUsers.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredUsers.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid *ngIf=\"isSelected\" class=\"bg\">\r\n      <ion-row *ngIf=\"!isEdited\">\r\n        <ion-col size=\"12\">\r\n          <ion-button\r\n            (click)=\"isEdited = true\"\r\n            expand=\"block\"\r\n            color=\"warning\"\r\n            fill=\"clear\"\r\n            shape=\"round\"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"isEdited\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n          *ngIf=\"selectedSeller\"\r\n        >\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title class=\"text-center\">پروفایل فروشنده</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس تصویر پروفایل</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"https://\"\r\n                    formControlName=\"avatar\"\r\n                    type=\"url\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">رزومه</ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"رزومه خود را وارد کنید\"\r\n                    formControlName=\"resume\"\r\n                    autoGrow=\"true\"\r\n                  >\r\n                  </ion-textarea>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >رزومه اصلی</ion-label\r\n                  >\r\n                  <ion-textarea\r\n                    placeholder=\"رزومه اصلی خود را وارد کنید\"\r\n                    formControlName=\"mainResume\"\r\n                    autoGrow=\"true\"\r\n                  >\r\n                  </ion-textarea>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >شرط ارسال رایگان برای خرید بالا وجود دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"hasFreeSendPrediction\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >مبلغ شرط ارسال رایگان برای خرید بالا به تومان \r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"مبلغ شرط ارسال رایگان برای خرید بالا به تومان\"\r\n                    formControlName=\"freeSendPredictionPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >حداقل هزینه ارسال یک مرسوله با پیک موتوری به ازای 2 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"حداقل هزینه ارسال یک مرسوله با پیک موتوری به ازای 2 کیلوگرم\"\r\n                    formControlName=\"minBikeDeliveryPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال با پیک موتوری به ازای هر کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال با پیک موتوری به ازای هر کیلوگرم\"\r\n                    formControlName=\"bikeDeliveryPriceEachKg\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >حداقل هزینه ارسال یک مرسوله با تیپاکس به ازای 2 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"حداقل هزینه ارسال یک مرسوله با تیپاکس به ازای 2 کیلوگرم\"\r\n                    formControlName=\"minTipaxPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال با تیپاکس به ازای 1 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال با تیپاکس به ازای 1 کیلوگرم\"\r\n                    formControlName=\"tipaxPriceEachKg\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >حداقل هزینه ارسال یک مرسوله با پست به ازای 2 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"حداقل هزینه ارسال یک مرسوله با پست به ازای 2 کیلوگرم\"\r\n                    formControlName=\"minPostPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال با پست به ازای 1 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال با پست به ازای 1 کیلوگرم\"\r\n                    formControlName=\"postPriceEachKg\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >حداقل هزینه ارسال یک مرسوله با پست پیشتاز به ازای 2 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"حداقل هزینه ارسال یک مرسوله با پست پیشتاز به ازای 2 کیلوگرم\"\r\n                    formControlName=\"minSpecialPostPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال با پست پیشتاز به ازای 1 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال با پست پیشتاز به ازای 1 کیلوگرم\"\r\n                    formControlName=\"specialPostPriceEachKg\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >حداقل هزینه ارسال یک مرسوله با باربری به ازای 2 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"حداقل هزینه ارسال یک مرسوله با باربری به ازای 2 کیلوگرم\"\r\n                    formControlName=\"minBurberryPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال با باربری به ازای 1 کیلوگرم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال با باربری به ازای 1 کیلوگرم\"\r\n                    formControlName=\"burberryPriceEachKg\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >فروش محصولات متوقف شود؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isProductDisabled\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">تلگرام</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تلگرام خود را وارد کنید\"\r\n                    formControlName=\"telegram\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >اینستاگرام</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"اینستاگرام خود را وارد کنید\"\r\n                    formControlName=\"instagram\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">واتساپ</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"واتساپ خود را وارد کنید\"\r\n                    formControlName=\"whatsApp\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">لینکداین</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"لینکداین خود را وارد کنید\"\r\n                    formControlName=\"linkedIn\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">سایت</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سایت خود را وارد کنید\"\r\n                    formControlName=\"site\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">نام</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"نام خود را وارد کنید\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >نام خانوادگی</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"نام خانوادگی خود را وارد کنید\"\r\n                    formControlName=\"family\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">کد ملی</ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد ملی خود را وارد کنید\"\r\n                    formControlName=\"nationalCode\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"journal-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >شماره شناسنامه</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"شماره شناسنامه خود را وارد کنید\"\r\n                    formControlName=\"identificationCode\"\r\n                    type=\"text\"\r\n                  >\r\n                  </ion-input>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تاریخ تولد</ion-label\r\n                  >\r\n                  <ion-datetime\r\n                    min=\"1330-01-01\"\r\n                    max=\"1400-01-01\"\r\n                    formControlName=\"birthDay\"\r\n                    display-format=\"YYYY.MM.DD\"\r\n                  ></ion-datetime>\r\n                </ion-item>\r\n  \r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon slot=\"start\" name=\"location-outline\"></ion-icon>\r\n                  <ion-label position=\"stacked\" color=\"light\">آدرس</ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"آدرس محل سکونت\"\r\n                    formControlName=\"address\"\r\n                    autoGrow=\"true\"\r\n                  >\r\n                  </ion-textarea>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              ویرایش مشخصات\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n              (click)=\"onBackClick()\"\r\n            >\r\n              برگششت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngIf=\"!isEdited\">\r\n        <ion-col size=\"10\" offset=\"1\" dir=\"rtl\">\r\n          <ion-card>\r\n            <ion-list *ngIf=\"selectedSellerEdit\">\r\n              <ion-item>\r\n                <ion-label>کد فروشنده</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.id }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ایمیل</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.email }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>موبایل</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.phone }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.name }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام خانوادگی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.family }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.address }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تاریخ تولد</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.birthDay }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد ملی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.nationalCode }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شماره شناسنامه</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.identificationCode }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس تصویر آواتار</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.userAvatarAddress }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>رزومه</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.resume }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>رزومه اصلی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.mainResume }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تلگرام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.telegram }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اینستاگرام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.instagram }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>واتساپ</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.whatsApp }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>لینکداین</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.linkedIn }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>سایت</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.site }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n  \r\n              <ion-item *ngIf=\"selectedSellerEdit.isEdited\">\r\n                <ion-badge color=\"warning2\" slot=\"start\">توجه</ion-badge>\r\n                <ion-label>نیاز به تایید</ion-label>\r\n              </ion-item>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                (click)=\"presentAlertConfirm()\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n              >\r\n                تایید ویرایش\r\n              </ion-button>\r\n            </ion-list>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngIf=\"!isEdited\">\r\n        <ion-col size=\"10\" offset=\"1\" dir=\"rtl\">\r\n          <ion-card>\r\n            <ion-list *ngIf=\"selectedSeller && selectedSellerEdit\">\r\n              <ion-item>\r\n                <ion-label>کد فروشنده</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.id }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ایمیل</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.email }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>موبایل</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.phone }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.name }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام خانوادگی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.family }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.address }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تاریخ تولد</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.birthDay }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد ملی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.nationalCode }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شماره شناسنامه</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.identificationCode }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس تصویر آواتار</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.userAvatarAddress }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>رزومه</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.resume }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>رزومه اصلی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.mainResume }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>توقف فروش؟</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.isProductDisabled }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شرط ارسال رایگان؟</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.hasFreeSendPrediction }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>مبلغ شرط ارسال رایگان</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.freeSendPredictionPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پیک (2kg)</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.minBikeDeliveryPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پیک هر 1kg</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.bikeDeliveryPriceEachKg | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با تیپاکس (2kg)</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.minTipaxPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با تیپاکس هر 1kg</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.tipaxPriceEachKg | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پست (2kg)</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.minPostPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پست هر 1kg</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.postPriceEachKg | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پست پیشتاز (2kg)</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.minSpecialPostPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با پست پیشتاز هر 1kg</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.specialPostPriceEachKg | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با باربری (2kg)</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.minBurberryPrice | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ارسال با باربری هر 1kg</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSellerEdit.burberryPriceEachKg | rial }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تلگرام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.telegram }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اینستاگرام</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.instagram }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>واتساپ</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.whatsApp }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>لینکداین</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.linkedIn }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>سایت</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.site }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نمایش فروشنده</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.isShow ? \"بله\" : \"خیر\" }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item\r\n                (click)=\"presentAlertActiveShowConfirm()\"\r\n                color=\"warning\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                class=\"ion-margin\"\r\n                button\r\n                *ngIf=\"!selectedSeller.isShow\"\r\n              >\r\n                <ion-label>ثبت نمایش</ion-label>\r\n              </ion-item>\r\n              <ion-item\r\n                (click)=\"presentAlertDeActiveShowConfirm()\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                class=\"ion-margin\"\r\n                button\r\n                *ngIf=\"selectedSeller.isShow\"\r\n              >\r\n                <ion-label>لغو نمایش</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>مرخصی</ion-label>\r\n                <ion-text color=\"light\">\r\n                  <h4>{{ selectedSeller.isRested ? \"بله\" : \"خیر\" }}</h4>\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item\r\n                (click)=\"presentAlertActiveRestConfirm()\"\r\n                color=\"warning\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                class=\"ion-margin\"\r\n                button\r\n                *ngIf=\"!selectedSeller.isRested\"\r\n              >\r\n                <ion-label>ثبت مرخصی</ion-label>\r\n              </ion-item>\r\n              <ion-item\r\n                (click)=\"presentAlertDeActiveRestConfirm()\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                class=\"ion-margin\"\r\n                button\r\n                *ngIf=\"selectedSeller.isRested\"\r\n              >\r\n                <ion-label>لغو مرخصی</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              *ngIf=\"!selectedSeller.isActive\"\r\n              (click)=\"presentAlertActiveConfirm()\"\r\n              color=\"success\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n            >\r\n              فعال سازی\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              *ngIf=\"selectedSeller.isActive\"\r\n              (click)=\"presentAlertDeActiveConfirm()\"\r\n              color=\"danger\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n            >\r\n              غیر فعال سازی\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              color=\"danger\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </ion-card>\r\n  \r\n          <ion-card *ngIf=\"!loading3\">\r\n            <ion-card-content dir=\"rtl\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label>کیف پول: </ion-label>\r\n                  <ion-text color=\"light\">\r\n                    <h5>{{ wallet | rial }}</h5>\r\n                  </ion-text>\r\n                </ion-item>\r\n              </ion-list>\r\n  \r\n              <form [formGroup]=\"walletForm\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\">مبلغ </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"مبلغ به تومان\"\r\n                    formControlName=\"cash\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-button\r\n                  (click)=\"presentAddWalletAlertConfirm()\"\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  [disabled]=\"walletForm.invalid\"\r\n                >\r\n                  اضافه کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  (click)=\"presentReduceWalletAlertConfirm()\"\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                  [disabled]=\"walletForm.invalid\"\r\n                >\r\n                  کسر کردن\r\n                </ion-button>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n  \r\n          <ion-card *ngIf=\"loading3\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">کیف پول</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div class=\"text-center\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_activate-seller_activate-seller_module_ts.js.map