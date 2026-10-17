"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_user-panel_user-panel_module_ts"],{

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

/***/ 42759:
/*!***********************************************************!*\
  !*** ./src/app/data/model/account/ChangePasswordModel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModel": () => (/* binding */ ChangePasswordModel)
/* harmony export */ });
class ChangePasswordModel {
    constructor(OldPassword, NewPassword, RePassword, token) {
        this.oldPassword = OldPassword;
        this.newPassword = NewPassword;
        this.rePassword = RePassword;
        this.token = token;
    }
}


/***/ }),

/***/ 47425:
/*!****************************************************!*\
  !*** ./src/app/data/model/product/ProductModel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrUpdateProductTagModel": () => (/* binding */ AddOrUpdateProductTagModel),
/* harmony export */   "ProductLikeModel": () => (/* binding */ ProductLikeModel),
/* harmony export */   "ProductListModel": () => (/* binding */ ProductListModel),
/* harmony export */   "ProductModel": () => (/* binding */ ProductModel),
/* harmony export */   "UserProductRateViewModel": () => (/* binding */ UserProductRateViewModel)
/* harmony export */ });
class ProductModel {
    constructor(id, name, Price, OffPrice, ViewCount, ShortDescription, Description, imageName, IsExists, IsSpecial, CreateDate, LastUpdateDate, IsUsed, CategoryIds) {
        this.id = id;
        this.name = name;
        this.price = Price;
        this.offPrice = OffPrice;
        this.viewCount = ViewCount;
        this.shortDescription = ShortDescription;
        this.description = Description;
        this.imageName = imageName;
        this.isExists = IsExists;
        this.isSpecial = IsSpecial;
        this.createDate = CreateDate;
        this.lastUpdateDate = LastUpdateDate;
        this.isUsed = IsUsed;
        this.categoryIds = CategoryIds;
    }
}
class UserProductRateViewModel {
    constructor(id, buyerUserId, productId, q1Rate, q2Rate, q3Rate, q4Rate, description, createDate, lastUpdateDate) {
        this.id = id;
        this.buyerUserId = buyerUserId;
        this.productId = productId;
        this.q1Rate = q1Rate;
        this.q2Rate = q2Rate;
        this.q3Rate = q3Rate;
        this.q4Rate = q4Rate;
        this.description = description;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class ProductLikeModel {
    constructor(like, dissLike) {
        this.like = like;
        this.dissLike = dissLike;
    }
}
class AddOrUpdateProductTagModel {
    constructor(productId, productTags) {
        this.productId = productId;
        this.productTags = productTags;
    }
}
class ProductListModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ 69753:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/panel/user-panel/user-panel-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelRoutingModule": () => (/* binding */ UserPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-panel.component */ 28438);




const routes = [{ path: '', component: _user_panel_component__WEBPACK_IMPORTED_MODULE_0__.UserPanelComponent }];
let UserPanelRoutingModule = class UserPanelRoutingModule {
};
UserPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UserPanelRoutingModule);



/***/ }),

/***/ 28438:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/panel/user-panel/user-panel.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelComponent": () => (/* binding */ UserPanelComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-panel.component.html?ngResource */ 47473);
/* harmony import */ var _user_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-panel.component.scss?ngResource */ 97011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/model/person/BuyerUserModel */ 9841);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/service/auth/account.service */ 57577);
/* harmony import */ var _data_model_account_ChangePasswordModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/model/account/ChangePasswordModel */ 42759);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var recaptcha_v3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recaptcha-v3 */ 3540);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../data/model/order/CartModel */ 47968);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/service/article/article.service */ 56847);
/* harmony import */ var _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../data/model/course/ExamModel */ 7503);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _data_model_product_ProductModel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../data/model/product/ProductModel */ 47425);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../data/service/persian-calendar-service */ 83723);




/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-unused-expressions */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable no-fallthrough */

/* eslint-disable max-len */



























let UserPanelComponent = class UserPanelComponent {
  constructor(router, courseService, productService, articleService, userService, accountService, activatedRoute, fb, toastController, loadingController, sanitizer, datepipe, persianCalendarService, alertController, orderService, menuCtrl) {
    this.router = router;
    this.courseService = courseService;
    this.productService = productService;
    this.articleService = articleService;
    this.userService = userService;
    this.accountService = accountService;
    this.activatedRoute = activatedRoute;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.sanitizer = sanitizer;
    this.datepipe = datepipe;
    this.persianCalendarService = persianCalendarService;
    this.alertController = alertController;
    this.orderService = orderService;
    this.menuCtrl = menuCtrl;
    this.walletChargeHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterWalletChargeHistory(1, 4, []);
    this.examPayHistoryFilter = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.ExamPayHistoryFilter(1, 4, []);
    this.pointHistoryFilter = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterPointHistory(1, 4, []);
    this.cityId = 1;
    this.provinceId = 1;
    this.selected = 0;
    this.mobileCategorySelectOptions = {
      cssClass: 'user-panel-category-sheet',
      header: 'انتخاب بخش حساب کاربری'
    };
    this.selectedCartId = 0;
    this.userInvites = [];
    this.courseList = [];
    this.productList = [];
    this.courseLiked = [];
    this.productLiked = [];
    this.articleLiked = [];
    this.filteredQuestions = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_15__.CourseQuestionFilterModel(0, 1, 12, '', 0);
    this.filteredProductQuestions = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_15__.ProductQuestionFilterModel(0, 1, 12, '', 0);
    this.editMode = false;
    this.emailConfirmed = false;
    this.phoneConfirmed = false;
    this.addSelected = false;
    this.exams = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.ExamFilter(0, 1, 10);
    this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
    this.userAddress = null;
    this.placementExamDetail = false;
    this.selectedPlacementExamDetailId = 0;
    this.selectedAddres = 0;
    this.isBase64Degree = false;
    this.isIfram = false;
    this.base64DegreeExamId = 0;
    this.ipAddress = '0.0.0.0';
    this.inputType1 = 'password';
    this.inputType2 = 'password';
    this.inputType3 = 'password';
    this.isShow1 = true;
    this.isShow2 = true;
    this.isShow3 = true;
    this.degreeShared = true;
    this.isEmailSend = true;
    this.isDegreeSharedLoading = true;
    this.isDailyPointLoading = false;
    this.isDailyPointDone = false;
    this.pointShowHistories = false;
    this.payShowHistories = false;
    this.payShowHistories2 = false;
    this.addMode = false;
    this.isEmailVerifyShow = true;
    this.isSMSVerifyShow = true;
    this.isSMSVerifyShow2 = false;
    this.counter = 60;
    this.counter2 = 60;
    this.windowWidth = 1000;
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.courseExamVideo = 'Bnw8g';
    this.isDailyPointLoading = false;
    this.isDailyPointDone = false;
    _core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.SiteKey;
    this.courseExamVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.CourseExamVideo;
    this.addressForm = this.fb.group({
      id: [0],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      title: ['آدرس من', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(11)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(2000)]],
      companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(300)]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(15)]],
      homePhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(25)]]
    });
    this.detailForm = this.fb.group({
      id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      fatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      placeOfIssue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      placeOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(200)]],
      nationalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(13)]],
      identificationCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(13)]],
      identificationImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(2000)]],
      nationalImage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(2000)]],
      postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(11)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(2000)]],
      birthDate: ['1370-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(15)]]
    });
    this.socialForm = this.fb.group({
      id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      resume: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(20000)]],
      telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(1000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(1000)]],
      whatsApp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(1000)]],
      linkedIn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(1000)]],
      site: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(1000)]]
    });
    this.changePasswordForm = this.fb.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      rePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]]
    });
    this.profileForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(15)]],
      isDegreeShared: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      isEmailSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]]
    });
    this.payForm = this.fb.group({
      price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(2000), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.max(999999999)]]
    });
    this.payForm2 = this.fb.group({
      timeId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      dateId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(20000)]]
    });
    this.phoneConfirmForm = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(100)]]
    });
  }

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  getPersianDate(date) {
    const d = new Date(date);
    return this.persianCalendarService.PersianCalendar(d);
  }

  onGetDayPoint2() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'زمان دریافت امتیاز بعدی: ' + _this2.getPersianDate(_this2.lastDailyPointDate) + ' - ' + _this2.getTime(_this2.lastDailyPointDate) + '\r\n + 24 ساعت',
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

  onGetDayPoint() {
    this.isDailyPointLoading = true;
    this.userService.GetDailyPoint().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.lastDailyPointDate = res.data;
        this.user.point++;
        this.isDailyPointLoading = false;
        this.isDailyPointDone = true;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'امتیاز امروز دریافت شده!');
        this.lastDailyPointDate = res.data;
        this.isDailyPointLoading = false;
        this.isDailyPointDone = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
        this.isDailyPointLoading = false;
        this.isDailyPointDone = true;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  copyText(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کپی شد');
  }

  doRefresh(event) {
    setTimeout(() => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.placementExamDetail = false;
      this.userAddress = null;
      this.base64Degree = '';
      this.isBase64Degree = false;
      this.isIfram = false;
      this.editMode = false;
      this.addSelected = false;
      this.base64DegreeExamId = 0;
      this.selectedCartId = 0;
      this.selectedPlacementExamDetailId = 0;

      switch (this.selected) {
        case 0:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetEmailConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.emailConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetPhoneConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.phoneConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 1:
          this.userService.GetBuyerUserWallet().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userWallet = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.orderService.GetWalletChargeHistoryByFilter(this.walletChargeHistories).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.walletChargeHistories = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 18:
          this.orderService.GetExamPayHistoryByFilter(this.examPayHistoryFilter).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.examPayHistoryFilter = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 19:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 20:
          this.userService.GetUserInvites().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userInvites = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 2:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 3: // this.userService.GetUserProfile().subscribe(
        //   res => {
        //     SharedIonic.dismissLoading(this.loadingController);
        //     if (res.status === GResponse.SuccessStatus) {
        //       this.user = res.data;
        // if (this.user.point == null) {
        //   this.user.point = 0;
        // }
        //       this.profileForm.setValue({ name: this.user.name, family: this.user.family, phoneNumber: this.user.phoneNumber });
        //     } else {
        //       SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
        //     }
        //   },
        //   err => {
        //     SharedIonic.dismissLoading(this.loadingController);
        //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        //   }
        // );
        // break;

        case 4:
          this.courseService.GetUserCoursesName().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.courseList = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.courseList = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 5:
          this.courseService.GetUserLikedCourse().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.courseLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.courseLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 16:
          this.productService.GetUserLikedProduct().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.productLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.productLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 6:
          this.articleService.GetUserLikedArticle().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.articleLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.articleLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 7:
          this.courseService.GetUserQuestionsByFilter(this.filteredQuestions).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.filteredQuestions = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 17:
          this.productService.GetUserProductQuestionsByFilter(this.filteredProductQuestions).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.filteredProductQuestions = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 8:
          this.addMode = false;
          this.userService.GetUserSocial().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userSocial = res.data;
              this.socialForm.setValue({
                id: res.data.id,
                resume: res.data.resume,
                telegram: res.data.telegram,
                instagram: res.data.instagram,
                whatsApp: res.data.whatsApp,
                linkedIn: res.data.linkedIn,
                site: res.data.site
              });
            } else {
              this.addMode = true;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 9:
          this.addMode = false;
          this.userService.GetUserDetail().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userDetail = res.data;
              this.detailForm.setValue({
                id: res.data.id,
                name: res.data.name,
                family: res.data.family,
                fatherName: res.data.fatherName,
                placeOfIssue: res.data.placeOfIssue,
                placeOfBirth: res.data.placeOfBirth,
                nationalCode: res.data.nationalCode,
                identificationCode: res.data.identificationCode,
                identificationImage: res.data.identificationImage,
                nationalImage: res.data.nationalImage,
                postCode: res.data.postCode,
                address: res.data.address,
                birthDate: res.data.birthDate,
                phoneNumber: res.data.phoneNumber
              });
            } else {
              this.addMode = true;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 10:
          this.exams = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.ExamFilter(0, 1, 10);
          this.courseService.GetUserExamsByFilter(this.exams).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.exams = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 11:
          this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
          this.courseService.GetUserDegreesByFilter(this.degrees).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.degrees = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز مدرکی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 12:
          this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
          this.courseService.GetUserPlacementExamsByFilter(this.exams).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.exams = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 13:
          this.productService.GetUserProductsName().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.productList = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              res.data.forEach(e => {
                let i = this.productList.findIndex(x => x.id == e.id);

                if (i == -1) {
                  this.productList.push(new _data_model_product_ProductModel__WEBPACK_IMPORTED_MODULE_20__.ProductListModel(e.id, e.name));
                }
              });
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 14:
          this.cartHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterCartHistory(1, 4, []);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
          this.orderService.GetCartHistoryByFilter(this.cartHistories).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.cartHistories = res.data;
              this.payShowHistories = true;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 15:
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
          this.userService.GetUserProductAddress().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userAddress = res.data;
            } else {
              this.userAddress = res.data;
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        default:
          this.selected = 0;
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetEmailConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.emailConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetPhoneConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.phoneConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;
      }

      event.target.complete();
    }, 2000);
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

  togglePasswordText3() {
    this.isShow3 = false;
    this.inputType3 = 'text';
  }

  toggleTextPassword3() {
    this.isShow3 = true;
    this.inputType3 = 'password';
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    clearInterval(this.interval2);
    clearTimeout(this.timeout2);
  }

  ionViewWillEnter() {
    this.userService.GetUserIp().subscribe(res => {
      this.ipAddress = res.ip;
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'IP Failed!');
    }); // this.userService.getIPAddress3().subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (res.status === GResponse.SuccessStatus) {
    //       console.log(1);
    //       console.log(res.data);
    //     } else {
    //       SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //   }
    // );
    // this.userService.getIPAddress4().subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (res.status === GResponse.SuccessStatus) {
    //       console.log(2);
    //       console.log(res.data);
    //     } else {
    //       SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //   }
    // );

    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line: radix
      const id = parseInt(params.id, 10);
      this.placementExamDetail = false;
      this.base64Degree = '';
      this.isBase64Degree = false;
      this.isIfram = false;
      this.editMode = false;
      this.addSelected = false;
      this.base64DegreeExamId = 0;
      this.selectedCartId = 0;
      this.userAddress = null;
      this.selectedPlacementExamDetailId = 0;

      if (id === undefined) {
        this.selected = 0;
        return;
      }

      switch (id) {
        case 0:
          this.selected = 0;
          break;

        case 1:
          this.selected = 1;
          break;

        case 2:
          this.selected = 2;
          break;

        case 3:
          this.selected = 3;
          break;

        case 4:
          this.selected = 4;
          break;

        case 5:
          this.selected = 5;
          break;

        case 6:
          this.selected = 6;
          break;

        case 7:
          this.selected = 7;
          break;

        case 8:
          this.selected = 8;
          break;

        case 9:
          this.selected = 9;
          break;

        case 10:
          this.selected = 10;
          break;

        case 11:
          this.selected = 11;
          break;

        case 12:
          this.selected = 12;
          break;

        case 13:
          this.selected = 13;
          break;

        case 14:
          this.selected = 14;
          break;

        case 15:
          this.selected = 15;
          break;

        case 16:
          this.selected = 16;
          break;

        case 17:
          this.selected = 17;
          break;

        case 18:
          this.selected = 18;
          break;

        case 19:
          this.selected = 19;
          break;

        case 20:
          this.selected = 20;
          break;

        default:
          this.selected = 0;
          break;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);

      switch (this.selected) {
        case 0:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetEmailConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.emailConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetPhoneConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.phoneConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 1:
          this.userService.GetBuyerUserWallet().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userWallet = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.orderService.GetWalletChargeHistoryByFilter(this.walletChargeHistories).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.walletChargeHistories = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 18:
          this.orderService.GetExamPayHistoryByFilter(this.examPayHistoryFilter).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.examPayHistoryFilter = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 19:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 20:
          this.userService.GetUserInvites().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userInvites = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 2:
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 3: // this.userService.GetUserProfile().subscribe(
        //   res => {
        //     SharedIonic.dismissLoading(this.loadingController);
        //     if (res.status === GResponse.SuccessStatus) {
        //       this.user = res.data;
        // if (this.user.point == null) {
        //   this.user.point = 0;
        // }
        //       this.profileForm.setValue({ name: this.user.name, family: this.user.family, phoneNumber: this.user.phoneNumber });
        //     } else {
        //       SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
        //     }
        //   },
        //   err => {
        //     SharedIonic.dismissLoading(this.loadingController);
        //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        //   }
        // );
        // break;

        case 4:
          this.courseService.GetUserCoursesName().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.courseList = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.courseList = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 5:
          this.courseService.GetUserLikedCourse().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.courseLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.courseLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 16:
          this.productService.GetUserLikedProduct().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.productLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.productLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 6:
          this.articleService.GetUserLikedArticle().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.articleLiked = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.articleLiked = res.data;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 7:
          this.courseService.GetUserQuestionsByFilter(this.filteredQuestions).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.filteredQuestions = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 17:
          this.productService.GetUserProductQuestionsByFilter(this.filteredProductQuestions).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.filteredProductQuestions = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 8:
          this.addMode = false;
          this.userService.GetUserSocial().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userSocial = res.data;
              this.socialForm.setValue({
                id: res.data.id,
                resume: res.data.resume,
                telegram: res.data.telegram,
                instagram: res.data.instagram,
                whatsApp: res.data.whatsApp,
                linkedIn: res.data.linkedIn,
                site: res.data.site
              });
            } else {
              this.addMode = true;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 9:
          this.addMode = false;
          this.userService.GetUserDetail().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userDetail = res.data;
              this.detailForm.setValue({
                id: res.data.id,
                name: res.data.name,
                family: res.data.family,
                fatherName: res.data.fatherName,
                placeOfIssue: res.data.placeOfIssue,
                placeOfBirth: res.data.placeOfBirth,
                nationalCode: res.data.nationalCode,
                identificationCode: res.data.identificationCode,
                identificationImage: res.data.identificationImage,
                nationalImage: res.data.nationalImage,
                postCode: res.data.postCode,
                address: res.data.address,
                birthDate: res.data.birthDate,
                phoneNumber: res.data.phoneNumber
              });
            } else {
              this.addMode = true;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 10:
          this.exams = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.ExamFilter(0, 1, 10);
          this.courseService.GetUserExamsByFilter(this.exams).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.exams = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 11:
          this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
          this.courseService.GetUserDegreesByFilter(this.degrees).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.degrees = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز مدرکی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 12:
          this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
          this.courseService.GetUserPlacementExamsByFilter(this.exams).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.exams = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 13:
          this.productService.GetUserProductsName().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.productList = [];

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              res.data.forEach(e => {
                let i = this.productList.findIndex(x => x.id == e.id);

                if (i == -1) {
                  this.productList.push(new _data_model_product_ProductModel__WEBPACK_IMPORTED_MODULE_20__.ProductListModel(e.id, e.name));
                }
              });
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 14:
          this.cartHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterCartHistory(1, 4, []);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
          this.orderService.GetCartHistoryByFilter(this.cartHistories).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.cartHistories = res.data;
              this.payShowHistories = true;
            } else {}
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        case 15:
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
          this.userService.GetUserProductAddress().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.userAddress = res.data;
            } else {
              this.userAddress = res.data;
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;

        default:
          this.selected = 0;
          this.userService.GetUserProfile().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.user = res.data;

              if (this.user.point == null) {
                this.user.point = 0;
              }

              this.degreeShared = this.user.isDegreeShared;
              this.isEmailSend = this.user.isEmailSend;
              this.isDegreeSharedLoading = false;
              this.profileForm.setValue({
                name: this.user.name,
                family: this.user.family,
                phoneNumber: this.user.phoneNumber,
                isDegreeShared: this.user.isDegreeShared,
                isEmailSend: this.user.isEmailSend
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetEmailConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.emailConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          this.userService.GetPhoneConfirm().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.phoneConfirmed = res.data;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
          break;
      } // if (this.windowWidth > 992) {
      //   this.content.scrollToTop(0);
      //   this.content.scrollByPoint(0, 900, 1500);
      // } else {
      //   this.content.scrollToTop(0);
      //   this.content.scrollByPoint(0, 900, 1500);
      // }

    });
  }

  setQueryParams3(pageId) {
    this.filteredQuestions.pageId = pageId;
    this.courseService.GetUserQuestionsByFilter(this.filteredQuestions).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.filteredQuestions = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams17(pageId) {
    this.filteredProductQuestions.pageId = pageId;
    this.productService.GetUserProductQuestionsByFilter(this.filteredProductQuestions).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.filteredProductQuestions = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  MakePageCountArray3(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage3() {
    if (this.filteredQuestions.startPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId > this.filteredQuestions.startPage && +this.filteredQuestions.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredQuestions.pageId - 1);
    }
  }

  goPreviousPage17() {
    if (this.filteredProductQuestions.startPage == null) {
      return;
    }

    if (this.filteredProductQuestions.pageId > this.filteredProductQuestions.startPage && +this.filteredProductQuestions.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredProductQuestions.pageId - 1);
    }
  }

  goNextPage3() {
    if (this.filteredQuestions.endPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId < this.filteredQuestions.endPage) {
      this.setQueryParams(+this.filteredQuestions.pageId + 1);
    }
  }

  goNextPage17() {
    if (this.filteredProductQuestions.endPage == null) {
      return;
    }

    if (this.filteredProductQuestions.pageId < this.filteredProductQuestions.endPage) {
      this.setQueryParams17(+this.filteredProductQuestions.pageId + 1);
    }
  }

  goPage3(pageId) {
    this.setQueryParams(+pageId);
  }

  goPage17(pageId) {
    this.setQueryParams17(+pageId);
  }

  goPage4(pageId) {
    this.setQueryParams4(+pageId);
  }

  goPage5(pageId) {
    this.setQueryParams5(+pageId);
  }

  goPage6(pageId) {
    this.setQueryParams6(+pageId);
  }

  goPage8(pageId) {
    this.setQueryParams8(+pageId);
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.walletChargeHistories.startPage == null) {
      return;
    }

    if (this.walletChargeHistories.pageId > this.walletChargeHistories.startPage && +this.walletChargeHistories.pageId - 1 > 0) {
      this.setQueryParams(+this.walletChargeHistories.pageId - 1);
    }
  }

  goNextPage() {
    if (this.walletChargeHistories.endPage == null) {
      return;
    }

    if (this.walletChargeHistories.pageId < this.walletChargeHistories.endPage) {
      this.setQueryParams(+this.walletChargeHistories.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  goPage0(pageId) {
    this.setQueryParams0(+pageId);
  }

  setQueryParams(pageId) {
    this.walletChargeHistories.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetWalletChargeHistoryByFilter(this.walletChargeHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.walletChargeHistories = res.data;
      } else {}
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams0(pageId) {
    this.examPayHistoryFilter.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetExamPayHistoryByFilter(this.examPayHistoryFilter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.examPayHistoryFilter = res.data;
      } else {}
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams4(pageId) {
    this.exams.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserExamsByFilter(this.exams).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.exams = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  getCityList() {
    return this.userAddress.cities.filter(e => e.provinceId == this.provinceId);
  }

  setQueryParams6(pageId) {
    this.exams.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserPlacementExamsByFilter(this.exams).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.exams = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams8(pageId) {
    this.exams.pageId = pageId;
    this.pointHistoryFilter.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetPointHistoryByFilter(this.pointHistoryFilter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.pointHistoryFilter = res.data;
        this.pointShowHistories = true;
      } else {
        this.pointShowHistories = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز موردی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams5(pageId) {
    this.degrees.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserDegreesByFilter(this.degrees).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.degrees = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز مدرکی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  goPreviousPage2() {
    if (this.payHistories.startPage == null) {
      return;
    }

    if (this.payHistories.pageId > this.payHistories.startPage && +this.payHistories.pageId - 1 > 0) {
      this.setQueryParams2(+this.payHistories.pageId - 1);
    }
  }

  goNextPage2() {
    if (this.payHistories.endPage == null) {
      return;
    }

    if (this.payHistories.pageId < this.payHistories.endPage) {
      this.setQueryParams2(+this.payHistories.pageId + 1);
    }
  }

  goPage2(pageId) {
    this.setQueryParams2(+pageId);
  }

  goPage7(pageId) {
    this.setQueryParams7(+pageId);
  }

  setQueryParams7(pageId) {
    this.cartHistories.pageId = pageId;
    this.cartHistories.cartHistories = [];
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetCartHistoryByFilter(this.cartHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.cartHistories = res.data;
      } else {}
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  GetPayPrice(p) {
    if (p.payAgain.length == 0) {
      return 0;
    } else {
      return p.payAgain.find(pa => !pa.isDelete && !pa.isPay).price;
    }
  }

  presentAlertPayAgainConfirm(p) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this3.onPayAgain(p);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPayAgain(p) {
    if (p.payAgain.length == 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      return;
    }

    let id = p.payAgain.find(pa => !pa.isDelete && !pa.isPay).id;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);

    if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
      this.orderService.PayAgainByBankPhone(id).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      });
    } else {
      this.orderService.PayAgainByBank(id).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertPayAgainConfirm2(p) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this4.onPayAgain2(p);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPayAgain2(p) {
    if (p.payAgain.length == 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      return;
    }

    let id = p.payAgain.find(pa => !pa.isDelete && !pa.isPay).id;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.PayAgainByWallet(id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
        window.location.reload();
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.ErrorStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'موجوی کیف پول کم است');
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_21__.Urls.UserPanelUrl + '/' + 1);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  setQueryParams2(pageId) {
    this.payHistories.pageId = pageId;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetPayHistoryByFilter(this.payHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.payHistories = res.data;
      } else {}
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowPointHistories() {
    this.pointHistoryFilter = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterPointHistory(1, 4, []);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetPointHistoryByFilter(this.pointHistoryFilter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.pointHistoryFilter = res.data;
        this.pointShowHistories = true;
      } else {
        this.pointShowHistories = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز موردی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowPayHistories() {
    this.payHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterPayHistory(1, 4, []);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetPayHistoryByFilter(this.payHistories).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.payHistories = res.data;
        this.payShowHistories = true;
      } else {}
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  ShowPayHistories2() {// this.payHistories = new FilterPayHistory(1, 4, []);
    // SharedIonic.loading(this.loadingController);
    // this.orderService.GetPayHistoryByFilter2(this.payHistories).subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (res.status === GResponse.SuccessStatus) {
    //       this.payHistories2 = res.data;
    //       this.payShowHistories2 = true;
    //     } else {
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //   }
    // );
  }

  onChangeSocial() {
    if (!this.socialForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    let model;

    if (this.addMode) {
      model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserSocialModel(0, 0, this.socialForm.value.resume, this.socialForm.value.site, this.socialForm.value.telegram, this.socialForm.value.instagram, this.socialForm.value.whatsApp, this.socialForm.value.linkedIn);
    } else {
      model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserSocialModel(this.userSocial.id, 0, this.socialForm.value.resume, this.socialForm.value.site, this.socialForm.value.telegram, this.socialForm.value.instagram, this.socialForm.value.whatsApp, this.socialForm.value.linkedIn);
    }

    this.userService.AddOrUpdateUserSocial(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.addMode = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentAlertConfirm() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = _this5.addMode ? 'آیا مطمئن به درج کردن هستید؟' : 'در صورت ویرایش، نیاز به تایید مجدد میباشد';
      let msg2 = _this5.addMode ? 'درج' : 'ویرایش';
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: msg,
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: msg2,
          handler: () => {
            _this5.onChangeDetail();
          }
        }]
      });
      yield alert.present();
    })();
  }

  addressSelected(model) {
    this.addressForm.setValue({
      id: model.id,
      name: model.name,
      title: model.title,
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

  onChangeDetail() {
    if (!this.detailForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    let model;

    if (this.addMode) {
      model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserDetailModel(0, 0, this.detailForm.value.name, this.detailForm.value.family, this.detailForm.value.fatherName, this.detailForm.value.placeOfIssue, this.detailForm.value.placeOfBirth, this.detailForm.value.nationalCode, this.detailForm.value.identificationCode, this.detailForm.value.identificationImage, this.detailForm.value.nationalImage, this.detailForm.value.postCode, this.detailForm.value.address, this.detailForm.value.phoneNumber, this.detailForm.value.birthDate);
    } else {
      model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserDetailModel(this.userDetail.id, 0, this.detailForm.value.name, this.detailForm.value.family, this.detailForm.value.fatherName, this.detailForm.value.placeOfIssue, this.detailForm.value.placeOfBirth, this.detailForm.value.nationalCode, this.detailForm.value.identificationCode, this.detailForm.value.identificationImage, this.detailForm.value.nationalImage, this.detailForm.value.postCode, this.detailForm.value.address, this.detailForm.value.phoneNumber, this.detailForm.value.birthDate);
    }

    this.userService.AddOrUpdateUserDetail(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.addMode = false;
        this.userDetail = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserDetailModel(res.data, 0, this.detailForm.value.name, this.detailForm.value.family, this.detailForm.value.fatherName, this.detailForm.value.placeOfIssue, this.detailForm.value.placeOfBirth, this.detailForm.value.nationalCode, this.detailForm.value.identificationCode, this.detailForm.value.identificationImage, this.detailForm.value.nationalImage, this.detailForm.value.postCode, this.detailForm.value.address, this.detailForm.value.phoneNumber, this.detailForm.value.birthDate);
        this.userDetail.isVerify = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onPhoneConfirm() {
    if (!this.phoneConfirmForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.PhoneConfirm(this.phoneConfirmForm.value.code).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.phoneConfirmForm.setValue({
          code: ''
        });
        this.phoneConfirmed = true;
        this.isSMSVerifyShow = true;
        this.isSMSVerifyShow2 = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'انجام نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onEmailVerify() {
    if (!this.isEmailVerifyShow) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.SendEmailVerify().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'ایمیل برایتان ارسال شد');
        this.counter = 60;
        this.isEmailVerifyShow = false;
        this.interval = setInterval(() => {
          this.counter--;
        }, 1000);
        this.timeout = setTimeout(() => {
          clearInterval(this.interval);
          this.isEmailVerifyShow = true;
        }, 60000);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  IsSeller() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_18__.GAccount.IsSeller();
  }

  IsTeacher() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_18__.GAccount.IsTeacher();
  }

  presentAlertRemoveAddressConfirm(model) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.onRemoveAddress(model);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemoveAddress(model) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.RemoveUserProductAddress(model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.userAddress.buyerUserProductAddresses.splice(this.userAddress.buyerUserProductAddresses.findIndex(e => e.id == model.id), 1);
        this.addSelected = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onChangeAddress() {
    if (!this.addressForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    let city = this.userAddress.cities.find(e => e.id == this.cityId);

    if (city == null || city == undefined) {
      this.provinceId = 1;
      this.cityId = 1;
    } else if (this.provinceId != city.provinceId) {
      this.provinceId = 1;
      this.cityId = 1;
    }

    let model;
    model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserProductAddressViewModel(this.addressForm.value.id == null ? 0 : this.addressForm.value.id, 0, this.addressForm.value.family, this.addressForm.value.name, this.addressForm.value.phoneNumber.toString(), this.addressForm.value.address, this.provinceId, this.addressForm.value.homePhoneNumber == null ? '' : this.addressForm.value.homePhoneNumber.toString(), this.addressForm.value.companyName == null ? '' : this.addressForm.value.companyName, 1, this.cityId, this.addressForm.value.postCode == null ? '' : this.addressForm.value.postCode.toString(), this.addressForm.value.title);
    this.userService.AddOrUpdateUserProductAddress(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (model.id == 0) {
          model.id = res.data;

          if (this.userAddress.buyerUserProductAddresses == null) {
            this.userAddress.buyerUserProductAddresses = [];
          }

          this.userAddress.buyerUserProductAddresses.push(model);
        } else {
          const index = this.userAddress.buyerUserProductAddresses.findIndex(e => e.id == model.id);
          this.userAddress.buyerUserProductAddresses[index] = model;
        }

        this.addSelected = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onPhoneVerify() {
    if (!this.isSMSVerifyShow) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.SendSMSVerify().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اس ام اس برایتان ارسال شد');
        this.counter2 = 60;
        this.isSMSVerifyShow = false;
        this.isSMSVerifyShow2 = true;
        this.interval2 = setInterval(() => {
          this.counter2--;
        }, 1000);
        this.timeout2 = setTimeout(() => {
          clearInterval(this.interval2);
          this.isSMSVerifyShow = true;
        }, 60000);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, res.data.toString());
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  positionSelect(n) {
    this.selected = +n;
    this.placementExamDetail = false;
    this.base64Degree = '';
    this.isBase64Degree = false;
    this.isIfram = false;
    this.base64DegreeExamId = 0;
    this.selectedCartId = 0;
    this.editMode = false;
    this.addSelected = false;
    this.userAddress = null;
    this.selectedPlacementExamDetailId = 0;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);

    switch (this.selected) {
      case 0:
        this.userService.GetUserProfile().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.user = res.data;

            if (this.user.point == null) {
              this.user.point = 0;
            }

            this.degreeShared = this.user.isDegreeShared;
            this.isEmailSend = this.user.isEmailSend;
            this.isDegreeSharedLoading = false;
            this.profileForm.setValue({
              name: this.user.name,
              family: this.user.family,
              phoneNumber: this.user.phoneNumber,
              isDegreeShared: this.user.isDegreeShared,
              isEmailSend: this.user.isEmailSend
            });
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.userService.GetEmailConfirm().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.emailConfirmed = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.userService.GetPhoneConfirm().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.phoneConfirmed = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 1:
        this.userService.GetBuyerUserWallet().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.userWallet = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.orderService.GetWalletChargeHistoryByFilter(this.walletChargeHistories).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.walletChargeHistories = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 18:
        this.orderService.GetExamPayHistoryByFilter(this.examPayHistoryFilter).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.examPayHistoryFilter = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 19:
        this.userService.GetUserProfile().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.user = res.data;

            if (this.user.point == null) {
              this.user.point = 0;
            }
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 20:
        this.userService.GetUserInvites().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.userInvites = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 2:
        this.userService.GetUserProfile().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.user = res.data;

            if (this.user.point == null) {
              this.user.point = 0;
            }

            this.degreeShared = this.user.isDegreeShared;
            this.isEmailSend = this.user.isEmailSend;
            this.isDegreeSharedLoading = false;
            this.profileForm.setValue({
              name: this.user.name,
              family: this.user.family,
              phoneNumber: this.user.phoneNumber,
              isDegreeShared: this.user.isDegreeShared,
              isEmailSend: this.user.isEmailSend
            });
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 3: // this.userService.GetUserProfile().subscribe(
      //   res => {
      //     SharedIonic.dismissLoading(this.loadingController);
      //     if (res.status === GResponse.SuccessStatus) {
      //       this.user = res.data;
      // if (this.user.point == null) {
      //   this.user.point = 0;
      // }
      //       this.profileForm.setValue({ name: this.user.name, family: this.user.family, phoneNumber: this.user.phoneNumber });
      //     } else {
      //       SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //     }
      //   },
      //   err => {
      //     SharedIonic.dismissLoading(this.loadingController);
      //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //   }
      // );
      // break;

      case 4:
        this.courseService.GetUserCoursesName().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.courseList = [];

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.courseList = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 5:
        this.courseService.GetUserLikedCourse().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.courseLiked = [];

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.courseLiked = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 16:
        this.productService.GetUserLikedProduct().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.productLiked = [];

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.productLiked = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 6:
        this.articleService.GetUserLikedArticle().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.articleLiked = [];

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.articleLiked = res.data;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 7:
        this.courseService.GetUserQuestionsByFilter(this.filteredQuestions).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.filteredQuestions = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 17:
        this.productService.GetUserProductQuestionsByFilter(this.filteredProductQuestions).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.filteredProductQuestions = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'سوالی نپرسیده اید');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 8:
        this.addMode = false;
        this.userService.GetUserSocial().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.userSocial = res.data;
            this.socialForm.setValue({
              id: res.data.id,
              resume: res.data.resume,
              telegram: res.data.telegram,
              instagram: res.data.instagram,
              whatsApp: res.data.whatsApp,
              linkedIn: res.data.linkedIn,
              site: res.data.site
            });
          } else {
            this.addMode = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 9:
        this.addMode = false;
        this.userService.GetUserDetail().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.userDetail = res.data;
            this.detailForm.setValue({
              id: res.data.id,
              name: res.data.name,
              family: res.data.family,
              fatherName: res.data.fatherName,
              placeOfIssue: res.data.placeOfIssue,
              placeOfBirth: res.data.placeOfBirth,
              nationalCode: res.data.nationalCode,
              identificationCode: res.data.identificationCode,
              identificationImage: res.data.identificationImage,
              nationalImage: res.data.nationalImage,
              postCode: res.data.postCode,
              address: res.data.address,
              birthDate: res.data.birthDate,
              phoneNumber: res.data.phoneNumber
            });
          } else {
            this.addMode = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مشخصات کاربر ثبت نشده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 10:
        this.exams = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.ExamFilter(0, 1, 10);
        this.courseService.GetUserExamsByFilter(this.exams).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.exams = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 11:
        this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
        this.courseService.GetUserDegreesByFilter(this.degrees).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.degrees = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز مدرکی ثبت نشده');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 12:
        this.degrees = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_16__.DegreeFilter(0, 1, 10);
        this.courseService.GetUserPlacementExamsByFilter(this.exams).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.exams = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 13:
        this.productService.GetUserProductsName().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.productList = [];

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.forEach(e => {
              const i = this.productList.findIndex(x => x.id == e.id);

              if (i == -1) {
                this.productList.push(new _data_model_product_ProductModel__WEBPACK_IMPORTED_MODULE_20__.ProductListModel(e.id, e.name));
              }
            });
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 14:
        this.cartHistories = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.FilterCartHistory(1, 4, []);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
        this.orderService.GetCartHistoryByFilter(this.cartHistories).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.cartHistories = res.data;
            this.payShowHistories = true;
          } else {}
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      case 15:
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
        this.userService.GetUserProductAddress().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.userAddress = res.data;
          } else {
            this.userAddress = res.data;
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;

      default:
        this.selected = 0;
        this.userService.GetUserProfile().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.user = res.data;

            if (this.user.point == null) {
              this.user.point = 0;
            }

            this.degreeShared = this.user.isDegreeShared;
            this.isEmailSend = this.user.isEmailSend;
            this.isDegreeSharedLoading = false;
            this.profileForm.setValue({
              name: this.user.name,
              family: this.user.family,
              phoneNumber: this.user.phoneNumber,
              isDegreeShared: this.user.isDegreeShared,
              isEmailSend: this.user.isEmailSend
            });
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.userService.GetEmailConfirm().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.emailConfirmed = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.userService.GetPhoneConfirm().subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.phoneConfirmed = res.data;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        break;
    } // if (this.windowWidth > 992) {
    //   this.content.scrollToTop(0);
    //   this.content.scrollByPoint(0, 900, 1500);
    // } else {
    //   this.content.scrollToTop(0);
    //   this.content.scrollByPoint(0, 900, 1500);
    // }

  }

  onPointChanger(point, percent) {
    if (this.user.point == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'امتیاز کافی ندارید');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.AddLimitedOffCodeByUserPoint(new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateOffCodeModel(null, '', percent, true, false, true, false, false, 0, true, new Date(), true, 0, false, 0, point)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.user.point -= point;
        let msg = 'کد تخفیف شما:\n\r ' + res.data.offCode + ' \n\rاعتبار تا 7 روز';
        this.presentAlertConfirm2(msg);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onPointChanger2(point, price) {
    if (this.user.point == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'امتیاز کافی ندارید');
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.userService.AddLimitedOffCodeByUserPoint2(new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateOffCodeModel(null, '', 0, true, false, true, false, true, price, true, new Date(), true, 0, false, 0, point)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.user.point -= point;
        let msg = 'کد تخفیف شما: ' + res.data.offCode + '\n\rاعتبار تا 7 روز';
        this.presentAlertConfirm2(msg);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertConfirm3(point, percent) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this7.onPointChanger(point, percent);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm33(point, price) {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this8.onPointChanger2(point, price);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm4(point, percent) {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'کد تخفیف های بیش از 50 درصد احتیاج به تاییدیه دارند\n\rلطفا جهت فعال سازی به پشتیبانی پیام بدهید',
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

  presentAlertConfirm44(point, price) {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'کد تخفیف های بیش از 100,000 تومان احتیاج به تاییدیه دارند\n\rلطفا جهت فعال سازی به پشتیبانی پیام بدهید',
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

  presentAlertConfirm2(msg) {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert2',
        header: 'کد تخفیف ایجاد شد',
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

  forwardUrl(url) {
    window.location.href = url;
  }

  onCartMoreDetailClick(cartId) {
    this.selectedCartId = cartId;
  }

  GetProductStatusByCode(statusCode) {
    switch (statusCode) {
      case 0:
        return 'هنوز ثبت و پرداخت نشده';

      case 97:
        return 'ثبت شده در انتظار تایید';

      case 98:
        return 'ثبت شده در انتظار پرداخت مجدد';

      case 99:
        return 'ثبت و تایید شده';

      case 100:
        return 'تحویل مشتری';

      case 101:
        return 'درحال آماده سازی';

      case 102:
        return 'ارسال شده';

      case 103:
        return 'مرچوع شده';

      case 104:
        return 'لغو شده به درخواست مشتری';

      case 105:
        return 'لغو شده توسط شرکت';

      case 106:
        return 'لغو شده توسط فروشنده';

      default:
        return 'نامشخص';
    }
  }

  onGetCartPayPrice(cart) {
    return cart.payHistory.find(e => e.isSuccess).price;
  }

  onPay() {
    if (this.payForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
        this.orderService.ChargeWalletPhone(+this.payForm.value.price).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            // SharedIonic.successToast(this.toastController);
            this.payForm.setValue({
              price: ''
            });
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        this.orderService.ChargeWallet(+this.payForm.value.price).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            // SharedIonic.successToast(this.toastController);
            this.payForm.setValue({
              price: ''
            });
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        });
      }
    }
  }

  onPay2() {
    if (this.payForm2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
        this.orderService.CallPayPhone(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.CallPayModel(0, +this.payForm2.value.timeId, +this.payForm2.value.dateId, this.payForm2.value.title, this.payForm2.value.description)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            // SharedIonic.successToast(this.toastController);
            this.payForm2.setValue({
              price: ''
            });
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        this.orderService.CallPay(new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_13__.CallPayModel(0, +this.payForm2.value.timeId, +this.payForm2.value.dateId, this.payForm2.value.title, this.payForm2.value.description)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            // SharedIonic.successToast(this.toastController);
            this.payForm2.setValue({
              price: ''
            });
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        });
      }
    }
  }

  onChangePassword() {
    if (!this.changePasswordForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    (0,recaptcha_v3__WEBPACK_IMPORTED_MODULE_11__.load)(this.siteKey).then(recaptcha => {
      recaptcha.execute('homepage').then(token => {
        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          this.accountService.ChangePassword(new _data_model_account_ChangePasswordModel__WEBPACK_IMPORTED_MODULE_8__.ChangePasswordModel(this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.rePassword, 'failed')).subscribe(res => {
            _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.TokenRolesInit(res, this.user.email);
            this.changePasswordForm.setValue({
              password: '',
              newPassword: '',
              rePassword: ''
            });
            this.afterChangePassword();
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.Status(200);
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.Status(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorMessage);
          });
        } else {
          this.accountService.ChangePassword(new _data_model_account_ChangePasswordModel__WEBPACK_IMPORTED_MODULE_8__.ChangePasswordModel(this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.rePassword, token)).subscribe(res => {
            _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.TokenRolesInit(res, this.user.email);
            this.changePasswordForm.setValue({
              password: '',
              newPassword: '',
              rePassword: ''
            });
            this.afterChangePassword();
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.Status(200);
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.Status(_data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorState, _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService.ErrorMessage);
          });
        }
      });
    }); //   this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
    //     if (G.IsAndroid) {
    //       this.accountService.ChangePassword(
    //         new ChangePasswordModel(
    //           this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.rePassword, 'failed')
    //       ).subscribe(
    //         res => {
    //           AccountService.TokenRolesInit(res, this.user.email);
    //           this.changePasswordForm.setValue({
    //             password: '',
    //             newPassword: '',
    //             rePassword: ''
    //           });
    //           this.afterChangePassword();
    //           SharedIonic.dismissLoading(this.loadingController);
    //           this.Status(200);
    //         },
    //         err => {
    //           SharedIonic.dismissLoading(this.loadingController);
    //           this.Status(AccountService.ErrorState, AccountService.ErrorMessage);
    //         }
    //       );
    //     } else {
    //       this.accountService.ChangePassword(
    //         new ChangePasswordModel(
    //           this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.rePassword, token
    //         )
    //       ).subscribe(
    //         res => {
    //           AccountService.TokenRolesInit(res, this.user.email);
    //           this.changePasswordForm.setValue({
    //             password: '',
    //             newPassword: '',
    //             rePassword: ''
    //           });
    //           this.afterChangePassword();
    //           SharedIonic.dismissLoading(this.loadingController);
    //           this.Status(200);
    //         },
    //         err => {
    //           SharedIonic.dismissLoading(this.loadingController);
    //           this.Status(AccountService.ErrorState, AccountService.ErrorMessage);
    //         }
    //       );
    //     }
    //   }, {
    //     useGlobalDomain: false
    //   });
  }

  afterChangePassword() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.orderService.GetUserCart().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.courses == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(res.data.courses.length); // GResponse.CartCoursesCount = res.data.courses.length;
          }
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
        }
      });

      _this12.courseService.GetUserCoursesId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyCourseIds = res.data;
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyCourseIds = [];
        }
      });
    })();
  }

  getPercent(courseId) {
    let trueCount = 0;
    let falseCount = 0;
    this.examDetail.userTestQuestionAnswers.forEach(answer => {
      const question = this.mainQuestion.find(e => e.question.id == answer.examQuestionId);

      if (question != null) {
        if (question.question.courseId == courseId) {
          question.tests.find(e => e.isActive && e.isTrue).id == answer.examTestQuestionAnswerId ? trueCount++ : falseCount++;
        }
      }
    });
    return trueCount * 100 / (trueCount + falseCount);
  }

  onPlacementExamDetailClick(examId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.courseService.GetExamDetailById(examId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.examDetail = res.data;
        this.mainQuestion = [...this.examDetail.questions];
        this.placementExamDetail = true;
        this.selectedPlacementExamDetailId = examId;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'هنوز آزمونی ثبت نشده');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onGetDegree(examId) {
    const find = this.exams.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegree(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  } //   saveDegreeImage() {
  //     window.open(canvas.toDataURL('image/png'));
  //     var gh = canvas.toDataURL('png');
  //     var a  = document.createElement('a');
  //     a.href = gh;
  //     a.download = 'image.png';
  //     a.click()
  // }


  onGetDegreeAsPng(examId) {
    const find = this.exams.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegreeAsPng(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          // const reader = new FileReader();
          // reader.readAsDataURL(res);
          // reader.onloadend = () => {
          //   const base64data = reader.result;
          //   const url = window.URL.createObjectURL(res);
          //   this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
          //   this.base64Degree = base64data;
          //   this.isBase64Degree = true;
          //   this.base64DegreeExamId = examId;
          // };
          const url = window.URL.createObjectURL(res);
          this.base64DegreeExamId = examId;
          this.base64Degree = url;
          this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.isIfram = true;
        } else {
          const reader = new FileReader();
          reader.readAsDataURL(res);

          reader.onloadend = () => {
            const base64data = reader.result;
            const url = window.URL.createObjectURL(res);
            this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            this.base64Degree = base64data;
            this.isBase64Degree = true;
            this.base64DegreeExamId = examId;
          };

          const url = window.URL.createObjectURL(res);
          window.open(url);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  onSave(examId) {
    file_saver__WEBPACK_IMPORTED_MODULE_17__.saveAs(this.currentBlob, examId + this.makeid(4));
  }

  blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result);

      reader.readAsDataURL(blob);
    });
  }

  onGetOrderDegreeAsJpeg(orderId) {
    // const find = this.exams.exams.find(e => e.examId == examId);
    const find = true;

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'فاکتور معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.orderService.CreateOrderAsJpeg(orderId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'فاکتور شما ایجاد شد');

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          const url = window.URL.createObjectURL(res);
          this.base64DegreeExamId = orderId;
          this.base64Degree = url;
          this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.isIfram = true;
        } else {
          this.currentBlob = res;
          const reader = new FileReader();
          reader.readAsDataURL(res);

          reader.onloadend = () => {
            const base64data = reader.result;
            const url = window.URL.createObjectURL(res);
            this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            this.base64Degree = base64data;
            this.isBase64Degree = true;
            this.base64DegreeExamId = orderId;
          };

          const url = window.URL.createObjectURL(res);
          window.open(url);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'فاکتور شما ایجاد شد');
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  onGetDegreeAsJpeg(examId) {
    const find = this.exams.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegreeAsJpeg(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          // console.log(1);
          // const reader = new FileReader();
          // console.log(2);
          // console.log(reader);
          // reader.readAsDataURL(res);
          // console.log(3);
          // console.log(reader);
          // reader.onload = () => {
          //   console.log(3.5);
          //   const base64data = reader.result;
          //   console.log(4);
          //   console.log(base64data);
          //   const url = window.URL.createObjectURL(res);
          //   console.log(5);
          //   console.log(url);
          //   this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
          //   this.base64Degree = base64data;
          //   this.isBase64Degree = true;
          //   this.base64DegreeExamId = examId;
          // };
          // FileSaver.saveAs(res, examId + this.makeid(4));
          // var iframe = '<iframe width="100%" height="100%" src=="' + this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + res.data); + '"></iframe>';
          // var x = window.open();
          // x.document.open();
          // x.document.write(iframe);
          // x.document.close();
          const url = window.URL.createObjectURL(res);
          this.base64DegreeExamId = examId;
          this.base64Degree = url;
          this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.isIfram = true;
        } else {
          this.currentBlob = res;
          const reader = new FileReader();
          reader.readAsDataURL(res);

          reader.onloadend = () => {
            const base64data = reader.result;
            const url = window.URL.createObjectURL(res);
            this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            this.base64Degree = base64data;
            this.isBase64Degree = true;
            this.base64DegreeExamId = examId;
          };

          const url = window.URL.createObjectURL(res);
          window.open(url); // this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + res.data);
          // this.base64Degree = 'data:image/jpeg;base64,' + res.data;
          // this.isBase64Degree = true;
          // this.base64DegreeExamId = examId;
          // let url = window.URL.createObjectURL(res.data);
          // window.open(url);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  presentAlertConfirmVerify() {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه!',
        message: 'اطلاعات هویتی شما هنوز تایید نشده',
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'صفحه اطلاعات هویت',
          handler: () => {
            _this13.router.navigateByUrl('/UserPanel/9');
          }
        }]
      });
      yield alert.present();
    })();
  }

  onGetDegree2AsPng(examId) {
    const find = this.degrees.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegreeAsPng(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          // const reader = new FileReader();
          // reader.readAsDataURL(res);
          // reader.onloadend = () => {
          //   const base64data = reader.result;
          //   const url = window.URL.createObjectURL(res);
          //   this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
          //   this.base64Degree = base64data;
          //   this.isBase64Degree = true;
          //   this.base64DegreeExamId = examId;
          // };
          const url = window.URL.createObjectURL(res);
          this.base64DegreeExamId = examId;
          this.base64Degree = url;
          this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.isIfram = true;
        } else {
          const reader = new FileReader();
          reader.readAsDataURL(res);

          reader.onloadend = () => {
            const base64data = reader.result;
            const url = window.URL.createObjectURL(res);
            this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            this.base64Degree = base64data;
            this.isBase64Degree = true;
            this.base64DegreeExamId = examId;
          };

          const url = window.URL.createObjectURL(res);
          window.open(url);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  onGetDegree2AsJpeg(examId) {
    const find = this.degrees.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegreeAsJpeg(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');

        if (_core_common_G__WEBPACK_IMPORTED_MODULE_12__.G.IsAndroid) {
          // const reader = new FileReader();
          // reader.readAsDataURL(res);
          // reader.onloadend = () => {
          //   const base64data = reader.result;
          //   const url = window.URL.createObjectURL(res);
          //   this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
          //   this.base64Degree = base64data;
          //   this.isBase64Degree = true;
          //   this.base64DegreeExamId = examId;
          // };
          const url = window.URL.createObjectURL(res);
          this.base64DegreeExamId = examId;
          this.base64Degree = url;
          this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          this.isIfram = true;
        } else {
          const reader = new FileReader();
          reader.readAsDataURL(res);

          reader.onloadend = () => {
            const base64data = reader.result;
            const url = window.URL.createObjectURL(res);
            this.base64DegreeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            this.base64Degree = base64data;
            this.isBase64Degree = true;
            this.base64DegreeExamId = examId;
          };

          const url = window.URL.createObjectURL(res);
          window.open(url);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  checkURL2() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.courseExamVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl2() {
    const url = 'https://www.aparat.com/v/' + this.courseExamVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onGetDegree2(examId) {
    const find = this.degrees.exams.find(e => e.examId == examId);

    if (find == null) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'آزمون معتبر نمیباشد');
      return;
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
      this.courseService.CreateExamDegree(examId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (err.statusText == 'Unknown Error') {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
        } else if (err.status == 562) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
          this.presentAlertConfirmVerify();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, err.error);
        }
      });
    }
  }

  Status(code, responsMsg = '') {
    let msg = 'خطایی رخ داده';

    if (code === 200) {
      msg = 'با موفقیت انجام شد';
    } else if (code === 423) {
      msg = 'اکانت شما مسدود شده است';
    } else if (code === 404) {
      msg = 'رمز عبور اشتباه است';
    } else if (code === 400) {
      if (responsMsg === 'User LockedOut') {
        msg = 'اکانت شما به مدت 1 ساعت مسدود شده است';
      } else if (responsMsg === 'User Exist') {
        msg = 'کاربر با این ایمیل وجود دارد';
      } else if (responsMsg === 'Wrong Pass') {
        msg = 'رمز عبور اشتباه است';
      } else if (responsMsg === 'Bot Detected!') {
        msg = 'شما ربات شناخته شدید';
      } else if (responsMsg === 'Not Changed') {
        msg = 'رمز عبور شما تغییر نکرد';
      } else if (responsMsg === 'signin failed') {
        msg = 'لطفا مجدد لاگین کنید';
      } else if (responsMsg === 'User dose not Exist') {
        msg = 'کاربر یافت نشد';
      } else {
        msg = 'کاربر یافت نشد';
      }
    } else if (code === 406) {
      msg = 'رمز عبور اشتباه است';
    } else if (code === 0) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, msg);
  }

  onChangeProfile() {
    if (!this.profileForm.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    const model = new _data_model_person_BuyerUserModel__WEBPACK_IMPORTED_MODULE_5__.BuyerUserModel(this.profileForm.value.name, this.profileForm.value.family, this.profileForm.value.phoneNumber.toString(), '');
    model.isDegreeShared = this.profileForm.value.isDegreeShared;
    model.isEmailSend = this.profileForm.value.isEmailSend;
    this.userService.ChangeUserProfile(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.user.name = res.data.name;
        this.user.family = res.data.family;
        this.user.phoneNumber = res.data.phoneNumber;
        this.user.isDegreeShared = res.data.isDegreeShared;
        this.user.isEmailSend = res.data.isEmailSend;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

};

UserPanelComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_19__.ProductService
}, {
  type: _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_14__.ArticleService
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.LoadingController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.DomSanitizer
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe
}, {
  type: _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_22__.PersianCalendarService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.AlertController
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_10__.OrderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.MenuController
}];

UserPanelComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_28__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_25__.IonContent]
  }]
};
UserPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
  selector: 'app-user-panel',
  template: _user_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_user_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserPanelComponent);


/***/ }),

/***/ 21905:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/panel/user-panel/user-panel.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelModule": () => (/* binding */ UserPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _user_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-panel-routing.module */ 69753);
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-panel.component */ 28438);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/user/user.service */ 55007);
/* harmony import */ var _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/utility/account.interceptor */ 8363);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);














// import { NgxCaptchaModule } from 'ngx-captcha';

let UserPanelModule = class UserPanelModule {
};
UserPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_user_panel_component__WEBPACK_IMPORTED_MODULE_2__.UserPanelComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _user_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserPanelRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            // NgxCaptchaModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__.LoadingModule
        ],
        providers: [
            _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
                useClass: _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_7__.AccountInterceptor,
                multi: true
            },
        ]
    })
], UserPanelModule);



/***/ }),

/***/ 97011:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/user-panel/user-panel.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n:host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-item-background: #ffffff;\n  --ion-toolbar-background: #ffffff;\n  --ion-text-color: var(--ink);\n  --ion-color-primary: var(--purple);\n  --ion-color-primary-rgb: 109, 40, 217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-shade: #5b21b6;\n  --ion-color-primary-tint: #7c3aed;\n  display: block;\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazir\", sans-serif);\n}\n* {\n  box-sizing: border-box;\n}\n/* ==========================================================================\n   Header - Matches Landing Page Navbar\n   ========================================================================== */\n.user-panel-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid var(--border-soft);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n}\n.user-panel-header::after {\n  display: none;\n}\n.user-panel-nav-shell {\n  direction: ltr !important;\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 12px clamp(14px, 2.5vw, 28px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 72px;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.08), rgba(245, 158, 11, 0.12));\n  border: 1px solid rgba(109, 40, 217, 0.15);\n}\n.brand-logo-wrap img {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n.brand-sparkle {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  color: var(--amber);\n  font-size: 13px;\n  line-height: 1;\n}\n.brand-titles {\n  direction: rtl;\n  text-align: right;\n}\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 21px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 1px;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  color: var(--ink);\n  background: rgba(109, 40, 217, 0.04);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.nav-link-btn ion-icon {\n  font-size: 18px;\n  color: var(--purple);\n}\n.nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n  border-color: rgba(109, 40, 217, 0.25);\n  transform: translateY(-1px);\n}\n.nav-club-quick-btn {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  border-color: rgba(245, 158, 11, 0.35);\n  font-weight: 800;\n}\n.nav-club-quick-btn ion-icon {\n  color: var(--amber-dark);\n}\n.nav-club-quick-btn.is-active, .nav-club-quick-btn:hover {\n  background: #fde68a;\n  color: #92400e;\n  border-color: var(--amber);\n}\n.pill-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: inline-block;\n  animation: pulse-dot 2s infinite ease-in-out;\n}\n@keyframes pulse-dot {\n  0%, 100% {\n    transform: scale(0.9);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 1;\n  }\n}\n.icon-button.menu-toggle {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-soft);\n  background: #ffffff;\n  color: var(--purple);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 22px;\n  padding: 0;\n}\n.icon-button.menu-toggle ion-icon {\n  font-size: 22px;\n  color: var(--purple);\n}\n.icon-button.menu-toggle:hover {\n  background: var(--purple-light);\n  border-color: rgba(109, 40, 217, 0.3);\n  color: var(--purple-dark);\n  transform: translateY(-1px);\n}\n/* ==========================================================================\n   Page Canvas & Shell\n   ========================================================================== */\n.user-panel-page {\n  --background: var(--bg-canvas);\n  background-color: var(--bg-canvas);\n}\n.user-panel-shell {\n  width: min(1360px, 100%);\n  margin: 0 auto;\n  padding: 20px clamp(12px, 2.5vw, 32px) 64px;\n}\n/* ==========================================================================\n   Hero Section - Luxury AvalAmooz Purple\n   ========================================================================== */\n.account-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  margin-bottom: 24px;\n  border-radius: 28px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  background: linear-gradient(135deg, #2e1065 0%, #4c1d95 35%, #6d28d9 75%, #7c3aed 100%);\n  box-shadow: 0 20px 50px rgba(91, 33, 182, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n}\n.account-hero__glow {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(60px);\n  pointer-events: none;\n}\n.account-hero__glow--one {\n  width: 320px;\n  height: 320px;\n  top: -120px;\n  inset-inline-start: -80px;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%);\n}\n.account-hero__glow--two {\n  width: 280px;\n  height: 280px;\n  bottom: -100px;\n  inset-inline-end: 25%;\n  background: radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent 70%);\n}\n.account-hero__glow--three {\n  width: 240px;\n  height: 240px;\n  top: 10px;\n  inset-inline-end: -60px;\n  background: radial-gradient(circle, rgba(244, 63, 94, 0.22), transparent 70%);\n}\n.account-hero__content {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  min-height: 164px;\n  padding: 30px clamp(18px, 3vw, 36px);\n}\n.account-avatar-wrap {\n  position: relative;\n  flex: 0 0 84px;\n  width: 84px;\n  height: 84px;\n}\n.account-avatar {\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 26px;\n  background: rgba(255, 255, 255, 0.16);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n}\n.account-avatar ion-icon {\n  font-size: 42px;\n  color: #ffffff;\n}\n.account-avatar__sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--amber);\n  color: #78350f;\n  font-size: 13px;\n  font-weight: 900;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border: 2px solid #ffffff;\n}\n.account-hero__copy {\n  min-width: 0;\n  flex: 1;\n}\n.account-hero__copy h1 {\n  margin: 0 0 6px;\n  font-size: clamp(20px, 2.4vw, 30px);\n  font-weight: 900;\n  letter-spacing: -0.5px;\n  color: #ffffff;\n  line-height: 1.3;\n}\n.account-hero__copy p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 13px;\n  line-height: 1.8;\n}\n.account-hero__eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 6px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.14);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #fef08a;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n}\n.account-hero__eyebrow .eyebrow-star {\n  color: var(--amber);\n  font-size: 12px;\n}\n.account-hero__meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-inline-start: auto;\n  flex-shrink: 0;\n}\n.hero-stat {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  transition: all 0.25s ease;\n}\n.hero-stat ion-icon {\n  font-size: 24px;\n  color: #fde047;\n  flex-shrink: 0;\n}\n.hero-stat span {\n  display: block;\n  color: rgba(255, 255, 255, 0.76);\n  font-size: 11px;\n  font-weight: 600;\n}\n.hero-stat strong {\n  display: block;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 900;\n  margin-top: 1px;\n}\n.hero-stat--club {\n  cursor: pointer;\n  background: rgba(245, 158, 11, 0.18);\n  border-color: rgba(253, 224, 71, 0.45);\n}\n.hero-stat--club:hover {\n  background: rgba(245, 158, 11, 0.28);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.25);\n}\n.hero-stat__badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 12px;\n  background: #f59e0b;\n  color: #78350f;\n  font-size: 10px;\n  font-weight: 900;\n  margin-inline-start: 4px;\n}\n.hero-stat--subtle ion-icon {\n  color: rgba(255, 255, 255, 0.85);\n}\n/* Hero Quick Shortcuts Strip */\n.account-hero__shortcuts {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px clamp(14px, 3vw, 32px);\n  background: rgba(0, 0, 0, 0.15);\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.account-hero__shortcuts::-webkit-scrollbar {\n  display: none;\n}\n.hero-shortcut-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.hero-shortcut-btn ion-icon {\n  font-size: 16px;\n}\n.hero-shortcut-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.hero-shortcut-btn.is-active {\n  background: #ffffff;\n  color: var(--purple-dark);\n  border-color: #ffffff;\n  font-weight: 900;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n}\n.hero-shortcut-btn.is-active ion-icon {\n  color: var(--purple);\n}\n.hero-shortcut-btn--club {\n  background: rgba(245, 158, 11, 0.22);\n  border-color: rgba(245, 158, 11, 0.45);\n  color: #fef08a;\n}\n.hero-shortcut-btn--club.is-active {\n  background: #fde047;\n  color: #78350f;\n  border-color: #fde047;\n}\n.hero-shortcut-btn--club.is-active ion-icon {\n  color: #78350f;\n}\n.shortcut-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--amber);\n  display: inline-block;\n}\n/* ==========================================================================\n   Layout & Cards\n   ========================================================================== */\n.panel-layout,\n.panel-layout__inner {\n  width: 100%;\n}\n.panel-layout > ion-col,\n.panel-layout__inner > ion-col {\n  padding: 0;\n}\n.panel-layout__inner > ion-col:first-child {\n  padding-inline-end: 12px;\n}\n.panel-layout__inner > ion-col:last-child {\n  padding-inline-start: 12px;\n}\n.panel-nav-card,\n.panel-content-card {\n  margin: 0;\n  border-radius: 24px;\n  border: 1px solid var(--border-soft);\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.05);\n}\n.panel-navigation {\n  align-self: flex-start;\n}\n.panel-nav-card {\n  display: block;\n  padding: 16px;\n}\n/* ==========================================================================\n   Mobile Nav: Swipeable Scroll Strip + Select\n   ========================================================================== */\n.panel-nav-mobile {\n  display: none;\n}\n.mobile-tabs-scroll {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 4px 2px 14px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.mobile-tabs-scroll::-webkit-scrollbar {\n  display: none;\n}\n.mobile-tab-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  min-height: 44px;\n  padding: 9px 16px;\n  border-radius: 14px;\n  border: 1px solid var(--border-soft);\n  background: #ffffff;\n  color: var(--ink);\n  font-size: 12px;\n  font-weight: 700;\n  font-family: inherit;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n}\n.mobile-tab-pill ion-icon {\n  font-size: 17px;\n  color: var(--purple);\n}\n.mobile-tab-pill:active {\n  transform: scale(0.96);\n}\n.mobile-tab-pill.is-active {\n  background: var(--purple);\n  color: #ffffff;\n  border-color: var(--purple);\n  box-shadow: 0 6px 18px var(--purple-glow);\n}\n.mobile-tab-pill.is-active ion-icon {\n  color: #ffffff;\n}\n.mobile-tab-pill--club {\n  border-color: rgba(245, 158, 11, 0.35);\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n.mobile-tab-pill--club ion-icon {\n  color: var(--amber-dark);\n}\n.mobile-tab-pill--club.is-active {\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n  color: #ffffff;\n  border-color: #d97706;\n  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);\n}\n.mobile-tab-pill--club.is-active ion-icon {\n  color: #ffffff;\n}\n.panel-nav-mobile__intro {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 4px 10px;\n}\n.panel-nav-mobile__intro span {\n  color: var(--ink);\n  font-size: 13px;\n  font-weight: 800;\n}\n.panel-nav-mobile__intro small {\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 600;\n}\n.panel-nav-mobile__select {\n  --background: rgba(109, 40, 217, 0.04);\n  --border-radius: 16px;\n  --color: var(--ink);\n  --inner-padding-end: 14px;\n  --min-height: 56px;\n  --padding-start: 14px;\n  width: 100%;\n  border: 1px solid rgba(109, 40, 217, 0.2);\n  border-radius: 16px;\n  margin-bottom: 4px;\n}\n.panel-nav-mobile__select > ion-icon {\n  margin-inline: 0 12px;\n  padding: 8px;\n  border-radius: 10px;\n  color: var(--purple);\n  background: var(--purple-light);\n  font-size: 20px;\n}\n.panel-nav-mobile__select ion-select {\n  width: 100%;\n  max-width: none;\n  font-size: 13px;\n  font-weight: 800;\n}\n/* ==========================================================================\n   Desktop Nav: Sidebar Items\n   ========================================================================== */\n.panel-nav-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 6px 14px;\n  color: var(--ink);\n  border-bottom: 1px solid var(--border-soft);\n  margin-bottom: 12px;\n}\n.panel-nav-heading span {\n  display: block;\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 600;\n  margin-bottom: 2px;\n}\n.panel-nav-heading strong {\n  display: block;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--ink);\n}\n.panel-nav-heading ion-icon {\n  width: 36px;\n  height: 36px;\n  padding: 8px;\n  border-radius: 12px;\n  color: var(--purple);\n  background: var(--purple-light);\n  font-size: 20px;\n}\n.panel-nav-items {\n  width: 100%;\n}\n.col-dash {\n  flex: 0 0 100% !important;\n  width: 100%;\n  max-width: 100% !important;\n  padding: 0;\n  margin-bottom: 6px;\n}\n.item-dash {\n  --background: transparent;\n  --background-hover: var(--purple-light);\n  --border-radius: 14px;\n  --color: var(--ink);\n  --inner-padding-end: 12px;\n  --padding-start: 12px;\n  min-height: 52px;\n  width: 100%;\n  border-radius: 14px;\n  border: 1px solid transparent;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.item-dash:hover {\n  background: var(--purple-light);\n  border-color: rgba(109, 40, 217, 0.18);\n  transform: translateX(-3px);\n}\n.item-dash .text-dash {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n  width: 100%;\n  margin: 0;\n  text-align: right !important;\n  white-space: nowrap;\n}\n.item-dash .text-dash br {\n  display: none;\n}\n.item-dash .icon-dash {\n  flex: 0 0 32px;\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n  margin: 0;\n  border-radius: 10px;\n  color: var(--purple);\n  background: var(--purple-light);\n  font-size: 18px;\n  box-sizing: border-box;\n  transition: all 0.2s;\n}\n.item-dash.item-disabled,\n.item-dash[disabled=true] {\n  --background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%);\n  --color: #ffffff;\n  opacity: 1;\n  border-color: transparent;\n  box-shadow: 0 8px 22px var(--purple-glow);\n}\n.item-dash.item-disabled .text-dash,\n.item-dash.item-disabled .icon-dash,\n.item-dash[disabled=true] .text-dash,\n.item-dash[disabled=true] .icon-dash {\n  color: #ffffff !important;\n}\n.item-dash.item-disabled .icon-dash,\n.item-dash[disabled=true] .icon-dash {\n  background: rgba(255, 255, 255, 0.2) !important;\n}\n/* ==========================================================================\n   Content Card Header & Body\n   ========================================================================== */\n.panel-content-card {\n  overflow: hidden;\n}\n.panel-content-header {\n  position: relative;\n  overflow: hidden;\n  min-height: 84px;\n  padding: 22px 28px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.08) 0%, rgba(237, 233, 254, 0.45) 100%);\n  border-bottom: 1px solid var(--border-soft);\n}\n.panel-content-header::after {\n  position: absolute;\n  inset: -60px auto auto -20px;\n  width: 140px;\n  height: 140px;\n  border: 20px solid rgba(109, 40, 217, 0.05);\n  border-radius: 50%;\n  content: \"\";\n}\n.panel-content-header ion-card-title,\n.panel-content-header ion-card-subtitle {\n  position: relative;\n  z-index: 1;\n  text-align: right !important;\n}\n.panel-content-header h1 {\n  margin: 0;\n  color: var(--ink);\n  font-size: clamp(18px, 2.2vw, 24px);\n  font-weight: 900;\n}\n.panel-content-header ion-card-subtitle {\n  color: var(--muted);\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.panel-content-card > ion-card-content {\n  padding: clamp(16px, 2.8vw, 32px);\n  color: var(--ink);\n}\n/* ==========================================================================\n   Ion List, Items, Inputs & Buttons\n   ========================================================================== */\n.panel-content-card ion-list {\n  background: transparent;\n  padding: 0;\n}\n.panel-content-card ion-item {\n  --background: #ffffff;\n  --border-color: var(--border-soft);\n  --border-radius: 14px;\n  --inner-padding-end: 14px;\n  --padding-start: 14px;\n  --min-height: 52px;\n  border: 1px solid var(--border-soft);\n  border-radius: 14px;\n  margin-bottom: 10px;\n  transition: all 0.2s ease;\n}\n.panel-content-card ion-item:hover {\n  border-color: rgba(109, 40, 217, 0.3);\n}\n.panel-content-card ion-item ion-label {\n  color: var(--ink-secondary);\n  font-size: 13px !important;\n  font-weight: 600;\n}\n.panel-content-card ion-item ion-text h5 {\n  color: var(--ink);\n  font-size: 14px;\n  font-weight: 800;\n  margin: 0;\n}\n.panel-content-card ion-item ion-icon[slot=start] {\n  margin-inline-end: 12px;\n  font-size: 20px;\n}\n.panel-content-card ion-input,\n.panel-content-card ion-textarea {\n  font-size: 13px !important;\n  font-family: inherit;\n  border-radius: 10px;\n}\n.panel-content-card ion-button {\n  --border-radius: 14px;\n  border-radius: 14px;\n  font-weight: 800;\n  font-family: inherit;\n  margin-top: 14px;\n  margin-bottom: 14px;\n  min-height: 48px;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.12);\n  transition: all 0.2s ease;\n}\n.panel-content-card ion-button:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.22);\n}\n.panel-content-card ion-button[color=primary] {\n  --background: var(--purple);\n  --color: #ffffff;\n}\n.panel-content-card ion-button[color=success] {\n  --background: var(--emerald);\n  --color: #ffffff;\n  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.2);\n}\n.panel-content-card ion-button[color=warning] {\n  --background: var(--amber);\n  --color: #ffffff;\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.2);\n}\n.panel-content-card ion-button[color=telegram] {\n  --background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  --color: #ffffff;\n  box-shadow: 0 6px 20px var(--purple-glow);\n}\n.panel-content-card ion-button[color=instagram] {\n  --background: linear-gradient(135deg, #6d28d9, #8b5cf6);\n  --color: #ffffff;\n  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.2);\n}\n.panel-content-card ion-button[color=facebook] {\n  --background: linear-gradient(135deg, #059669, #10b981);\n  --color: #ffffff;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);\n}\n/* ==========================================================================\n   Tab 19 - AvalAmooz Club (اول آموز کلاب) Styling\n   ========================================================================== */\n.panel-content-card ion-list-header ion-label {\n  font-size: 15px !important;\n  font-weight: 900;\n  color: var(--purple-dark);\n}\n/* Video & Iframe Containers */\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 16px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n/* ==========================================================================\n   Media Queries & Responsive Rules\n   ========================================================================== */\n@media (min-width: 992px) {\n  .panel-navigation {\n    position: sticky;\n    top: 96px;\n  }\n\n  .panel-nav-card {\n    max-height: calc(100vh - 120px);\n    overflow-x: hidden;\n    overflow-y: auto;\n    scrollbar-color: rgba(109, 40, 217, 0.2) transparent;\n    scrollbar-width: thin;\n  }\n\n  .panel-nav-items {\n    display: block;\n    width: 100%;\n  }\n\n  .panel-nav-items > ion-row {\n    display: block !important;\n    width: 100%;\n  }\n\n  .panel-nav-items .col-dash {\n    display: block;\n    flex: 0 0 100% !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-bottom: 6px;\n  }\n\n  .panel-nav-heading {\n    position: sticky;\n    z-index: 3;\n    top: -16px;\n    margin: -16px -16px 12px;\n    padding: 16px;\n    background: #ffffff;\n  }\n}\n@media (max-width: 991px) {\n  .panel-layout__inner > ion-col:first-child,\n.panel-layout__inner > ion-col:last-child {\n    padding-inline: 0;\n  }\n\n  .panel-navigation {\n    margin-bottom: 20px;\n  }\n\n  .panel-nav-items {\n    display: none;\n  }\n\n  .panel-nav-mobile {\n    display: block;\n  }\n\n  .panel-nav-heading {\n    display: none;\n  }\n\n  .panel-nav-card {\n    padding: 12px;\n    background: transparent;\n    border: none;\n    box-shadow: none;\n  }\n}\n@media (max-width: 768px) {\n  .user-panel-shell {\n    padding-top: 10px;\n    padding-bottom: 48px;\n  }\n\n  .account-hero {\n    border-radius: 22px;\n    margin-bottom: 16px;\n  }\n\n  .account-hero__content {\n    flex-wrap: wrap;\n    min-height: 0;\n    gap: 16px;\n    padding: 20px 18px 16px;\n  }\n\n  .account-avatar-wrap {\n    flex: 0 0 68px;\n    width: 68px;\n    height: 68px;\n  }\n\n  .account-avatar {\n    border-radius: 20px;\n  }\n  .account-avatar ion-icon {\n    font-size: 34px;\n  }\n\n  .account-hero__copy {\n    flex: 1;\n  }\n  .account-hero__copy h1 {\n    font-size: 21px;\n  }\n  .account-hero__copy p {\n    display: none;\n  }\n\n  .account-hero__meta {\n    width: 100%;\n    margin-top: 6px;\n    gap: 8px;\n  }\n\n  .hero-stat {\n    flex: 1;\n    min-width: 0;\n    padding: 10px 14px;\n  }\n  .hero-stat ion-icon {\n    font-size: 20px;\n  }\n  .hero-stat span {\n    font-size: 10px;\n  }\n  .hero-stat strong {\n    font-size: 13px;\n  }\n\n  .hero-stat__badge {\n    display: none;\n  }\n\n  .account-hero__shortcuts {\n    padding: 10px 14px;\n    gap: 6px;\n  }\n\n  .hero-shortcut-btn {\n    padding: 6px 12px;\n    font-size: 11px;\n  }\n\n  .panel-content-card {\n    border-radius: 20px;\n  }\n\n  .panel-content-header {\n    min-height: 70px;\n    padding: 16px 18px;\n  }\n  .panel-content-header h1 {\n    font-size: 18px;\n  }\n\n  .panel-content-card > ion-card-content {\n    padding: 16px 12px;\n  }\n\n  .nav-btn-text {\n    display: none;\n  }\n\n  .nav-link-btn {\n    padding: 8px 10px;\n  }\n}\n@media (max-width: 480px) {\n  .brand-titles small {\n    display: none;\n  }\n\n  .brand-titles b {\n    font-size: 19px;\n  }\n\n  .account-hero__meta {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .hero-stat {\n    width: 100%;\n  }\n\n  .panel-content-card ion-item {\n    --inner-padding-end: 10px;\n    --padding-start: 10px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n*::before,\n*::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f2eefb;\n  --ink-secondary: #d5cfe5;\n  --muted: #aaa1bd;\n  --purple: #c4b5fd;\n  --purple-dark: #ddd6fe;\n  --purple-light: #302448;\n  --amber-dark: #fbbf24;\n  --amber-light: #3b2d20;\n  --emerald: #34d399;\n  --emerald-dark: #6ee7b7;\n  --emerald-light: #173b32;\n  --rose: #fda4af;\n  --rose-light: #422432;\n  --sky: #7dd3fc;\n  --sky-light: #19394b;\n  --paper: #211c32;\n  --bg-canvas: #141223;\n  --border-soft: #39314f;\n  --card-bg: #211c32;\n  --surface-raised: #2a243d;\n  --action-purple: #6d28d9;\n  --action-purple-dark: #581c87;\n  --ion-background-color: var(--bg-canvas);\n  --ion-background-color-rgb: 20, 18, 35;\n  --ion-text-color: var(--ink);\n  --ion-text-color-rgb: 242, 238, 251;\n  --ion-item-background: var(--card-bg);\n  --ion-card-background: var(--card-bg);\n  --ion-toolbar-background: var(--card-bg);\n  --ion-toolbar-color: var(--ink);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n  --ion-color-primary: #6d28d9;\n  --ion-color-primary-shade: #5b21b6;\n  --ion-color-primary-tint: #7c3aed;\n}\n:host-context(.dark-theme) .user-panel-header {\n  background: rgba(33, 28, 50, 0.96);\n}\n:host-context(.dark-theme) .icon-button.menu-toggle,\n:host-context(.dark-theme) .panel-content-card,\n:host-context(.dark-theme) .mobile-tab-pill,\n:host-context(.dark-theme) .panel-nav-heading {\n  background: var(--card-bg);\n}\n:host-context(.dark-theme) .icon-button.menu-toggle:hover {\n  background: var(--purple-light);\n  border-color: var(--purple);\n}\n@media (min-width: 992px) {\n  :host-context(.dark-theme) .panel-nav-card {\n    background: var(--card-bg);\n  }\n}\n:host-context(.dark-theme) .nav-club-quick-btn:hover {\n  background: #513a20;\n  color: var(--amber-dark);\n}\n:host-context(.dark-theme) .hero-shortcut-btn:hover {\n  background: var(--card-bg);\n  color: var(--purple);\n  border-color: var(--border-soft);\n}\n:host-context(.dark-theme) .hero-shortcut-btn--club:hover {\n  background: #fde047;\n  color: #78350f;\n}\n:host-context(.dark-theme) .mobile-tab-pill.is-active {\n  background: var(--action-purple);\n  border-color: var(--action-purple);\n}\n:host-context(.dark-theme) .mobile-tab-pill--club.is-active {\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n  border-color: #d97706;\n}\n:host-context(.dark-theme) .panel-content-header {\n  background: linear-gradient(135deg, #302448, #211c32);\n}\n:host-context(.dark-theme) .panel-content-card ion-item {\n  --background: var(--card-bg);\n  --color: var(--ink);\n}\n:host-context(.dark-theme) .panel-content-card ion-item[color=warning] {\n  --ion-color-base: var(--amber-light) !important;\n  --ion-color-contrast: var(--amber-dark) !important;\n}\n:host-context(.dark-theme) .panel-content-card ion-item[color=warning] ion-label {\n  color: var(--amber-dark);\n}\n:host-context(.dark-theme) .panel-content-card ion-input,\n:host-context(.dark-theme) .panel-content-card ion-textarea {\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n:host-context(.dark-theme) .panel-content-card ion-button[color=primary] {\n  --background: var(--action-purple);\n}\n:host-context(.dark-theme) .panel-content-card ion-button[color=success] {\n  --background: #059669;\n}\n:host-context(.dark-theme) .panel-content-card ion-button[color=warning] {\n  --color: #23170b;\n}\n:host-context(.dark-theme) .item-dash.item-disabled,\n:host-context(.dark-theme) .item-dash[disabled=true] {\n  --background: linear-gradient(135deg, var(--action-purple-dark), var(--action-purple));\n}\n:host-context(.dark-theme) ion-text[color=success] {\n  --ion-color-base: var(--emerald) !important;\n  color: var(--emerald);\n}\n:host-context(.dark-theme) ion-text[color=warning] {\n  --ion-color-base: var(--amber-dark) !important;\n  color: var(--amber-dark);\n}\n:host-context(.dark-theme) ion-text[color=danger] {\n  --ion-color-base: var(--rose) !important;\n  color: var(--rose);\n}\n:host-context(.dark-theme) ion-text[color=light] {\n  --ion-color-base: var(--ink-secondary) !important;\n  color: var(--ink-secondary);\n}\n:host-context(.dark-theme) ion-text[color=primary],\n:host-context(.dark-theme) ion-text[color=instagram] {\n  --ion-color-base: var(--purple) !important;\n  color: var(--purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJfcGFnZS1kYXJrLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSwwRUFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7OytFQUFBO0FBR0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVGQUFBO0VBQ0EsMENBQUE7QUFIRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhKO0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFKRjtBQU9BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUpGO0FBT0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUpKO0FBT0U7RUFDRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtBQUxKO0FBU0E7RUFDRSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSx3QkFBQTtBQU5KO0FBU0U7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVJKO0FBWUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBVEY7QUFZQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VBVEY7RUFXQTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQVRGO0FBQ0Y7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVZGO0FBWUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFWSjtBQWFFO0VBQ0UsK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFYSjtBQWVBOzsrRUFBQTtBQUdBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtBQVpGO0FBZUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtBQVpGO0FBZUE7OytFQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsdUZBQUE7RUFDQSx5RkFBQTtBQVpGO0FBZUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFaRjtBQWVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw4RUFBQTtBQVpGO0FBZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZFQUFBO0FBWkY7QUFlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkVBQUE7QUFaRjtBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFaRjtBQWVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaRjtBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxtRkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUFaRjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFaSjtBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUFiRjtBQWdCQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0FBYkY7QUFlRTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWdCRTtFQUNFLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRKO0FBa0JBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWZGO0FBaUJFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBZko7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBaEJGO0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7QUFoQkY7QUFrQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFoQko7QUFtQkU7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFvQkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsQko7QUFzQkE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQW5CRjtBQXFCRTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtBQW5CSjtBQXVCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBcEJGO0FBd0JFO0VBQ0UsZ0NBQUE7QUFyQko7QUF5QkEsK0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUF0QkY7QUF3QkU7RUFDRSxhQUFBO0FBdEJKO0FBMEJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdkJGO0FBeUJFO0VBQ0UsZUFBQTtBQXZCSjtBQTBCRTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7QUF4Qko7QUEyQkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FBekJKO0FBMkJJO0VBQ0Usb0JBQUE7QUF6Qk47QUE4QkE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQTNCRjtBQTZCRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBM0JKO0FBNkJJO0VBQ0UsY0FBQTtBQTNCTjtBQWdDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBN0JGO0FBZ0NBOzsrRUFBQTtBQUdBOztFQUVFLFdBQUE7QUE3QkY7QUFnQ0E7O0VBRUUsVUFBQTtBQTdCRjtBQWdDQTtFQUNFLHdCQUFBO0FBN0JGO0FBZ0NBO0VBQ0UsMEJBQUE7QUE3QkY7QUFnQ0E7O0VBRUUsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBN0JGO0FBZ0NBO0VBQ0Usc0JBQUE7QUE3QkY7QUFnQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQTdCRjtBQWdDQTs7K0VBQUE7QUFHQTtFQUNFLGFBQUE7QUE3QkY7QUFnQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUE3QkY7QUErQkU7RUFDRSxhQUFBO0FBN0JKO0FBaUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7QUE5QkY7QUFnQ0U7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUE5Qko7QUFpQ0U7RUFDRSxzQkFBQTtBQS9CSjtBQWtDRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7QUFoQ0o7QUFrQ0k7RUFDRSxjQUFBO0FBaENOO0FBcUNBO0VBQ0Usc0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBbENGO0FBb0NFO0VBQ0Usd0JBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxxREFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0FBbkNKO0FBcUNJO0VBQ0UsY0FBQTtBQW5DTjtBQXdDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBckNGO0FBdUNFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFyQ0o7QUF3Q0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXRDSjtBQTBDQTtFQUNFLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF2Q0Y7QUF5Q0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBdkNKO0FBMENFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF4Q0o7QUE0Q0E7OytFQUFBO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBekNGO0FBMkNFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUExQ0o7QUE2Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBM0NKO0FBK0NBO0VBQ0UsV0FBQTtBQTVDRjtBQStDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBNUNGO0FBK0NBO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0FBNUNGO0FBOENFO0VBQ0UsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0FBNUNKO0FBK0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBN0NKO0FBK0NJO0VBQ0UsYUFBQTtBQTdDTjtBQWlERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUEvQ0o7QUFtREE7O0VBRUUsZ0ZBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FBaERGO0FBa0RFOzs7O0VBRUUseUJBQUE7QUE5Q0o7QUFpREU7O0VBQ0UsK0NBQUE7QUE5Q0o7QUFrREE7OytFQUFBO0FBR0E7RUFDRSxnQkFBQTtBQS9DRjtBQWtEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0dBQUE7RUFDQSwyQ0FBQTtBQS9DRjtBQWlERTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBL0NKO0FBa0RFOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBaERKO0FBbURFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQWpESjtBQW9ERTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsREo7QUFzREE7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0FBbkRGO0FBc0RBOzsrRUFBQTtBQUdBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBbkRGO0FBc0RBO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFuREY7QUFxREU7RUFDRSxxQ0FBQTtBQW5ESjtBQXNERTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQXBESjtBQXVERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQXJESjtBQXdERTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQXRESjtBQTBEQTs7RUFFRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUF2REY7QUEwREE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7QUF2REY7QUF5REU7RUFDRSwyQkFBQTtFQUNBLCtDQUFBO0FBdkRKO0FBMERFO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQXhESjtBQTJERTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQXpESjtBQTRERTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQTFESjtBQTZERTtFQUNFLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQTNESjtBQThERTtFQUNFLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQTVESjtBQStERTtFQUNFLHVEQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQTdESjtBQWlFQTs7K0VBQUE7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTlERjtBQWlFQSw4QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7QUE5REY7QUFnRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE5REo7QUFpRUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUEvREo7QUFtRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFoRUY7QUFtRUE7OytFQUFBO0FBR0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsU0FBQTtFQWhFRjs7RUFtRUE7SUFDRSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvREFBQTtJQUNBLHFCQUFBO0VBaEVGOztFQW1FQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBaEVGOztFQW1FQTtJQUNFLHlCQUFBO0lBQ0EsV0FBQTtFQWhFRjs7RUFtRUE7SUFDRSxjQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLDBCQUFBO0lBQ0Esa0JBQUE7RUFoRUY7O0VBbUVBO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLHdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBaEVGO0FBQ0Y7QUFtRUE7RUFDRTs7SUFFRSxpQkFBQTtFQWpFRjs7RUFvRUE7SUFDRSxtQkFBQTtFQWpFRjs7RUFvRUE7SUFDRSxhQUFBO0VBakVGOztFQW9FQTtJQUNFLGNBQUE7RUFqRUY7O0VBb0VBO0lBQ0UsYUFBQTtFQWpFRjs7RUFvRUE7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFqRUY7QUFDRjtBQW9FQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtFQWxFRjs7RUFxRUE7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0VBbEVGOztFQXFFQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLHVCQUFBO0VBbEVGOztFQXFFQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQWxFRjs7RUFxRUE7SUFDRSxtQkFBQTtFQWxFRjtFQW9FRTtJQUNFLGVBQUE7RUFsRUo7O0VBc0VBO0lBQ0UsT0FBQTtFQW5FRjtFQXFFRTtJQUNFLGVBQUE7RUFuRUo7RUFzRUU7SUFDRSxhQUFBO0VBcEVKOztFQXdFQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtFQXJFRjs7RUF3RUE7SUFDRSxPQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBckVGO0VBdUVFO0lBQ0UsZUFBQTtFQXJFSjtFQXdFRTtJQUNFLGVBQUE7RUF0RUo7RUF5RUU7SUFDRSxlQUFBO0VBdkVKOztFQTJFQTtJQUNFLGFBQUE7RUF4RUY7O0VBMkVBO0lBQ0Usa0JBQUE7SUFDQSxRQUFBO0VBeEVGOztFQTJFQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQXhFRjs7RUEyRUE7SUFDRSxtQkFBQTtFQXhFRjs7RUEyRUE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBeEVGO0VBMEVFO0lBQ0UsZUFBQTtFQXhFSjs7RUE0RUE7SUFDRSxrQkFBQTtFQXpFRjs7RUE0RUE7SUFDRSxhQUFBO0VBekVGOztFQTRFQTtJQUNFLGlCQUFBO0VBekVGO0FBQ0Y7QUE0RUE7RUFDRTtJQUNFLGFBQUE7RUExRUY7O0VBNkVBO0lBQ0UsZUFBQTtFQTFFRjs7RUE2RUE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBMUVGOztFQTZFQTtJQUNFLFdBQUE7RUExRUY7O0VBNkVBO0lBQ0UseUJBQUE7SUFDQSxxQkFBQTtFQTFFRjtBQUNGO0FBNkVBO0VBQ0U7OztJQUdFLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQ0FBQTtFQTNFRjtBQUNGO0FBOEVBO0VDMXNDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUQ0cUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtBQTVDRjtBQThDRTtFQUNFLGtDQUFBO0FBNUNKO0FBK0NFOzs7O0VBSUUsMEJBQUE7QUE3Q0o7QUFnREU7RUFDRSwrQkFBQTtFQUNBLDJCQUFBO0FBOUNKO0FBa0RFO0VBQ0U7SUFDRSwwQkFBQTtFQWhESjtBQUNGO0FBbURFO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtBQWpESjtBQW9ERTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQWxESjtBQXFERTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQW5ESjtBQXNERTtFQUNFLGdDQUFBO0VBQ0Esa0NBQUE7QUFwREo7QUF1REU7RUFDRSxxREFBQTtFQUNBLHFCQUFBO0FBckRKO0FBd0RFO0VBQ0UscURBQUE7QUF0REo7QUF5REU7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBdkRKO0FBMERFO0VBQ0UsK0NBQUE7RUFDQSxrREFBQTtBQXhESjtBQXlESTtFQUFZLHdCQUFBO0FBdERoQjtBQXlERTs7RUFFRSxtQkFBQTtFQUNBLGlDQUFBO0FBdkRKO0FBMERFO0VBQ0Usa0NBQUE7QUF4REo7QUEyREU7RUFDRSxxQkFBQTtBQXpESjtBQTRERTtFQUNFLGdCQUFBO0FBMURKO0FBNkRFOztFQUVFLHNGQUFBO0FBM0RKO0FBOERFO0VBQ0UsMkNBQUE7RUFDQSxxQkFBQTtBQTVESjtBQThERTtFQUNFLDhDQUFBO0VBQ0Esd0JBQUE7QUE1REo7QUE4REU7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0FBNURKO0FBOERFO0VBQ0UsaURBQUE7RUFDQSwyQkFBQTtBQTVESjtBQThERTs7RUFFRSwwQ0FBQTtFQUNBLG9CQUFBO0FBNURKIiwiZmlsZSI6InVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9wYWdlLWRhcmstdGhlbWVcIjtcclxuXHJcbjpob3N0IHtcclxuICAtLWluazogIzFlMWI0YjtcclxuICAtLWluay1zZWNvbmRhcnk6ICM0NzU1Njk7XHJcbiAgLS1tdXRlZDogIzY0NzQ4YjtcclxuICAtLXB1cnBsZTogIzZkMjhkOTtcclxuICAtLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xyXG4gIC0tcHVycGxlLWxpZ2h0OiAjZWRlOWZlO1xyXG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIyKTtcclxuICAtLWFtYmVyOiAjZjU5ZTBiO1xyXG4gIC0tYW1iZXItZGFyazogI2Q5NzcwNjtcclxuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xyXG4gIC0tZW1lcmFsZDogIzEwYjk4MTtcclxuICAtLWVtZXJhbGQtbGlnaHQ6ICNkMWZhZTU7XHJcbiAgLS1yb3NlOiAjZjQzZjVlO1xyXG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcclxuICAtLXBhcGVyOiAjZmZmZmZmO1xyXG4gIC0tYmctY2FudmFzOiAjZmNmYmZlO1xyXG4gIC0tYm9yZGVyLXNvZnQ6ICNlZGU5ZjY7XHJcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xyXG5cclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiB2YXIoLS1wdXJwbGUpO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMDksIDQwLCAyMTc7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNWIyMWI2O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzdjM2FlZDtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgXCJTaGFibmFtLU1lZGl1bVwiLCBcIlZhemlyXCIsIHNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBIZWFkZXIgLSBNYXRjaGVzIExhbmRpbmcgUGFnZSBOYXZiYXJcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnVzZXItcGFuZWwtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA1MDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSk7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1wYW5lbC1uYXYtc2hlbGwge1xyXG4gIGRpcmVjdGlvbjogbHRyICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMzYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTJweCBjbGFtcCgxNHB4LCAyLjV2dywgMjhweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNzJweDtcclxufVxyXG5cclxuLmJyYW5kIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5icmFuZC1sb2dvLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4xMikpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjE1KTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZC1zcGFya2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IC00cHg7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5icmFuZC10aXRsZXMge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnJhbmQtdGl0bGVzIGIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG59XHJcblxyXG4uYnJhbmQtdGl0bGVzIHNtYWxsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLm5hdi1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmstYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjI1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtY2x1Yi1xdWljay1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4zNSk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspO1xyXG4gIH1cclxuXHJcbiAgJi5pcy1hY3RpdmUsXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRlNjhhO1xyXG4gICAgY29sb3I6ICM5MjQwMGU7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFtYmVyKTtcclxuICB9XHJcbn1cclxuXHJcbi5waWxsLWRvdCB7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UtZG90IDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlLWRvdCB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbi5tZW51LXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMpO1xyXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFBhZ2UgQ2FudmFzICYgU2hlbGxcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnVzZXItcGFuZWwtcGFnZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsLXNoZWxsIHtcclxuICB3aWR0aDogbWluKDEzNjBweCwgMTAwJSk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjBweCBjbGFtcCgxMnB4LCAyLjV2dywgMzJweCkgNjRweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSGVybyBTZWN0aW9uIC0gTHV4dXJ5IEF2YWxBbW9veiBQdXJwbGVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmFjY291bnQtaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJlMTA2NSAwJSwgIzRjMWQ5NSAzNSUsICM2ZDI4ZDkgNzUlLCAjN2MzYWVkIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoOTEsIDMzLCAxODIsIDAuMjgpLCAwIDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xyXG59XHJcblxyXG4uYWNjb3VudC1oZXJvX19nbG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogYmx1cig2MHB4KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmFjY291bnQtaGVyb19fZ2xvdy0tb25lIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICB0b3A6IC0xMjBweDtcclxuICBpbnNldC1pbmxpbmUtc3RhcnQ6IC04MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTY3LCAxMzksIDI1MCwgMC40KSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLmFjY291bnQtaGVyb19fZ2xvdy0tdHdvIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBib3R0b206IC0xMDBweDtcclxuICBpbnNldC1pbmxpbmUtZW5kOiAyNSU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMyksIHRyYW5zcGFyZW50IDcwJSk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWhlcm9fX2dsb3ctLXRocmVlIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTYwcHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyNDQsIDYzLCA5NCwgMC4yMiksIHRyYW5zcGFyZW50IDcwJSk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWhlcm9fX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWluLWhlaWdodDogMTY0cHg7XHJcbiAgcGFkZGluZzogMzBweCBjbGFtcCgxOHB4LCAzdncsIDM2cHgpO1xyXG59XHJcblxyXG4uYWNjb3VudC1hdmF0YXItd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDAgMCA4NHB4O1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIGhlaWdodDogODRweDtcclxufVxyXG5cclxuLmFjY291bnQtYXZhdGFyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE4KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5hY2NvdW50LWF2YXRhcl9fc3BhcmtsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTZweDtcclxuICBpbnNldC1pbmxpbmUtZW5kOiAtNnB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpO1xyXG4gIGNvbG9yOiAjNzgzNTBmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG4uYWNjb3VudC1oZXJvX19jb3B5IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAyLjR2dywgMzBweCk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gIH1cclxufVxyXG5cclxuLmFjY291bnQtaGVyb19fZXllYnJvdyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XHJcbiAgY29sb3I6ICNmZWYwOGE7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cclxuICAuZXllYnJvdy1zdGFyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hbWJlcik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWNjb3VudC1oZXJvX19tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5oZXJvLXN0YXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmRlMDQ3O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Nik7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tc3RhdC0tY2x1YiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjE4KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjUzLCAyMjQsIDcxLCAwLjQ1KTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4yOCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLXN0YXRfX2JhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNTllMGI7XHJcbiAgY29sb3I6ICM3ODM1MGY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNHB4O1xyXG59XHJcblxyXG4uaGVyby1zdGF0LS1zdWJ0bGUge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogSGVybyBRdWljayBTaG9ydGN1dHMgU3RyaXAgKi9cclxuLmFjY291bnQtaGVyb19fc2hvcnRjdXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCBjbGFtcCgxNHB4LCAzdncsIDMycHgpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tc2hvcnRjdXQtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuXHJcbiAgJi5pcy1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVyby1zaG9ydGN1dC1idG4tLWNsdWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjIyKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjQ1KTtcclxuICBjb2xvcjogI2ZlZjA4YTtcclxuXHJcbiAgJi5pcy1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZTA0NztcclxuICAgIGNvbG9yOiAjNzgzNTBmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmRlMDQ3O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICM3ODM1MGY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2hvcnRjdXQtZG90IHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBMYXlvdXQgJiBDYXJkc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucGFuZWwtbGF5b3V0LFxyXG4ucGFuZWwtbGF5b3V0X19pbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYW5lbC1sYXlvdXQgPiBpb24tY29sLFxyXG4ucGFuZWwtbGF5b3V0X19pbm5lciA+IGlvbi1jb2wge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wYW5lbC1sYXlvdXRfX2lubmVyID4gaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMnB4O1xyXG59XHJcblxyXG4ucGFuZWwtbGF5b3V0X19pbm5lciA+IGlvbi1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEycHg7XHJcbn1cclxuXHJcbi5wYW5lbC1uYXYtY2FyZCxcclxuLnBhbmVsLWNvbnRlbnQtY2FyZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpO1xyXG59XHJcblxyXG4ucGFuZWwtbmF2aWdhdGlvbiB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnBhbmVsLW5hdi1jYXJkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBNb2JpbGUgTmF2OiBTd2lwZWFibGUgU2Nyb2xsIFN0cmlwICsgU2VsZWN0XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYW5lbC1uYXYtbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9iaWxlLXRhYnMtc2Nyb2xsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBwYWRkaW5nOiA0cHggMnB4IDE0cHg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2JpbGUtdGFiLXBpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgbWluLWhlaWdodDogNDRweDtcclxuICBwYWRkaW5nOiA5cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcclxuICB9XHJcblxyXG4gICYuaXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlLXRhYi1waWxsLS1jbHViIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjM1KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XHJcbiAgfVxyXG5cclxuICAmLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk3NzA2LCAjZjU5ZTBiKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDk3NzA2O1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4zNSk7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbC1uYXYtbW9iaWxlX19pbnRybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogNnB4IDRweCAxMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBhbmVsLW5hdi1tb2JpbGVfX3NlbGVjdCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNCk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIC0tY29sb3I6IHZhcigtLWluayk7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTRweDtcclxuICAtLW1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICA+IGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDAgMTJweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIERlc2t0b3AgTmF2OiBTaWRlYmFyIEl0ZW1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYW5lbC1uYXYtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA0cHggNnB4IDE0cHg7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFuZWwtbmF2LWl0ZW1zIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC1kYXNoIHtcclxuICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uaXRlbS1kYXNoIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgLS1jb2xvcjogdmFyKC0taW5rKTtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICBtaW4taGVpZ2h0OiA1MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDksIDQwLCAyMTcsIDAuMTgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZGFzaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgYnIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmljb24tZGFzaCB7XHJcbiAgICBmbGV4OiAwIDAgMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWRhc2guaXRlbS1kaXNhYmxlZCxcclxuLml0ZW0tZGFzaFtkaXNhYmxlZD1cInRydWVcIl0ge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlLWRhcmspIDAlLCB2YXIoLS1wdXJwbGUpIDEwMCUpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIycHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG5cclxuICAudGV4dC1kYXNoLFxyXG4gIC5pY29uLWRhc2gge1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pY29uLWRhc2gge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDb250ZW50IENhcmQgSGVhZGVyICYgQm9keVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucGFuZWwtY29udGVudC1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFuZWwtY29udGVudC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDg0cHg7XHJcbiAgcGFkZGluZzogMjJweCAyOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA4KSAwJSwgcmdiYSgyMzcsIDIzMywgMjU0LCAwLjQ1KSAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogLTYwcHggYXV0byBhdXRvIC0yMHB4O1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIGJvcmRlcjogMjBweCBzb2xpZCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtdGl0bGUsXHJcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMThweCwgMi4ydncsIDI0cHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhbmVsLWNvbnRlbnQtY2FyZCA+IGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IGNsYW1wKDE2cHgsIDIuOHZ3LCAzMnB4KTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSW9uIExpc3QsIEl0ZW1zLCBJbnB1dHMgJiBCdXR0b25zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYW5lbC1jb250ZW50LWNhcmQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wYW5lbC1jb250ZW50LWNhcmQgaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxMDksIDQwLCAyMTcsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRleHQgaDUge1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb25bc2xvdD1cInN0YXJ0XCJdIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhbmVsLWNvbnRlbnQtY2FyZCBpb24taW5wdXQsXHJcbi5wYW5lbC1jb250ZW50LWNhcmQgaW9uLXRleHRhcmVhIHtcclxuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtY29udGVudC1jYXJkIGlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIyKTtcclxuICB9XHJcblxyXG4gICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAmW2NvbG9yPVwic3VjY2Vzc1wiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XHJcbiAgfVxyXG5cclxuICAmW2NvbG9yPVwid2FybmluZ1wiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgJltjb2xvcj1cInRlbGVncmFtXCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzZkMjhkOSk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XHJcbiAgfVxyXG5cclxuICAmW2NvbG9yPVwiaW5zdGFncmFtXCJdIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZkMjhkOSwgIzhiNWNmNik7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4yKTtcclxuICB9XHJcblxyXG4gICZbY29sb3I9XCJmYWNlYm9va1wiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTk2NjksICMxMGI5ODEpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUYWIgMTkgLSBBdmFsQW1vb3ogQ2x1YiAo2KfZiNmEINii2YXZiNiyINqp2YTYp9ioKSBTdHlsaW5nXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wYW5lbC1jb250ZW50LWNhcmQgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlLWRhcmspO1xyXG59XHJcblxyXG4vKiBWaWRlbyAmIElmcmFtZSBDb250YWluZXJzICovXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAucmF0aW8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIGlmcmFtZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnZpZGVvLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA1NyU7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIE1lZGlhIFF1ZXJpZXMgJiBSZXNwb25zaXZlIFJ1bGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5wYW5lbC1uYXZpZ2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDk2cHg7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtbmF2LWNhcmQge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIpIHRyYW5zcGFyZW50O1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdi1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdi1pdGVtcyA+IGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdi1pdGVtcyAuY29sLWRhc2gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdi1oZWFkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdG9wOiAtMTZweDtcclxuICAgIG1hcmdpbjogLTE2cHggLTE2cHggMTJweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnBhbmVsLWxheW91dF9faW5uZXIgPiBpb24tY29sOmZpcnN0LWNoaWxkLFxyXG4gIC5wYW5lbC1sYXlvdXRfX2lubmVyID4gaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdmlnYXRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1uYXYtaXRlbXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1uYXYtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLW5hdi1oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtbmF2LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC51c2VyLXBhbmVsLXNoZWxsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudC1oZXJvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnQtaGVyb19fY29udGVudCB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxOHB4IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudC1hdmF0YXItd3JhcCB7XHJcbiAgICBmbGV4OiAwIDAgNjhweDtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA2OHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnQtYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudC1oZXJvX19jb3B5IHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWNjb3VudC1oZXJvX19tZXRhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdGF0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdGF0X19iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnQtaGVyb19fc2hvcnRjdXRzIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgIGdhcDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc2hvcnRjdXQtYnRuIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWNvbnRlbnQtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFuZWwtY29udGVudC1jYXJkID4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWJ0bi10ZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmstYnRuIHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmJyYW5kLXRpdGxlcyBzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLXRpdGxlcyBiIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcblxyXG4gIC5hY2NvdW50LWhlcm9fX21ldGEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc3RhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1jb250ZW50LWNhcmQgaW9uLWl0ZW0ge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgKixcclxuICAqOjpiZWZvcmUsXHJcbiAgKjo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gIEBpbmNsdWRlIHBhZ2UtZGFyay1wYWxldHRlO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM2ZDI4ZDk7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzViMjFiNjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM3YzNhZWQ7XHJcblxyXG4gIC51c2VyLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAyOCwgNTAsIC45Nik7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1idXR0b24ubWVudS10b2dnbGUsXHJcbiAgLnBhbmVsLWNvbnRlbnQtY2FyZCxcclxuICAubW9iaWxlLXRhYi1waWxsLFxyXG4gIC5wYW5lbC1uYXYtaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcclxuICB9XHJcblxyXG4gIC5pY29uLWJ1dHRvbi5tZW51LXRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJlc2VydmUgdGhlIHRyYW5zcGFyZW50IG1vYmlsZSBuYXZpZ2F0aW9uIGNvbnRhaW5lci5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wYW5lbC1uYXYtY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdi1jbHViLXF1aWNrLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTEzYTIwO1xyXG4gICAgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc2hvcnRjdXQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xyXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXNob3J0Y3V0LWJ0bi0tY2x1Yjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRlMDQ3O1xyXG4gICAgY29sb3I6ICM3ODM1MGY7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLXRhYi1waWxsLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3Rpb24tcHVycGxlKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWN0aW9uLXB1cnBsZSk7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLXRhYi1waWxsLS1jbHViLmlzLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk3NzA2LCAjZjU5ZTBiKTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5NzcwNjtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1jb250ZW50LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzAyNDQ4LCAjMjExYzMyKTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1jb250ZW50LWNhcmQgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcclxuICAgIC0tY29sb3I6IHZhcigtLWluayk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtY29udGVudC1jYXJkIGlvbi1pdGVtW2NvbG9yPVwid2FybmluZ1wiXSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1hbWJlci1saWdodCkgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1hbWJlci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWxhYmVsIHsgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspOyB9XHJcbiAgfVxyXG5cclxuICAucGFuZWwtY29udGVudC1jYXJkIGlvbi1pbnB1dCxcclxuICAucGFuZWwtY29udGVudC1jYXJkIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWNvbnRlbnQtY2FyZCBpb24tYnV0dG9uW2NvbG9yPVwicHJpbWFyeVwiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFjdGlvbi1wdXJwbGUpO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWNvbnRlbnQtY2FyZCBpb24tYnV0dG9uW2NvbG9yPVwic3VjY2Vzc1wiXSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNTk2Njk7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtY29udGVudC1jYXJkIGlvbi1idXR0b25bY29sb3I9XCJ3YXJuaW5nXCJdIHtcclxuICAgIC0tY29sb3I6ICMyMzE3MGI7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1kYXNoLml0ZW0tZGlzYWJsZWQsXHJcbiAgLml0ZW0tZGFzaFtkaXNhYmxlZD1cInRydWVcIl0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1hY3Rpb24tcHVycGxlLWRhcmspLCB2YXIoLS1hY3Rpb24tcHVycGxlKSk7XHJcbiAgfVxyXG5cclxuICBpb24tdGV4dFtjb2xvcj1cInN1Y2Nlc3NcIl0ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tZW1lcmFsZCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcclxuICB9XHJcbiAgaW9uLXRleHRbY29sb3I9XCJ3YXJuaW5nXCJdIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWFtYmVyLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XHJcbiAgfVxyXG4gIGlvbi10ZXh0W2NvbG9yPVwiZGFuZ2VyXCJdIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXJvc2UpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tcm9zZSk7XHJcbiAgfVxyXG4gIGlvbi10ZXh0W2NvbG9yPVwibGlnaHRcIl0ge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgaW9uLXRleHRbY29sb3I9XCJwcmltYXJ5XCJdLFxyXG4gIGlvbi10ZXh0W2NvbG9yPVwiaW5zdGFncmFtXCJdIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBJbmNsdWRlZCBieSBvd25lZCBwYWdlcyBvbmx5OyBBbmd1bGFyIG11c3QgbWF0Y2ggdGhlIHRoZW1lIG9uIGFuIGFuY2VzdG9yLlxuQG1peGluIHBhZ2UtZGFyay1wYWxldHRlIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWluazogI2YyZWVmYjtcbiAgLS1pbmstc2Vjb25kYXJ5OiAjZDVjZmU1O1xuICAtLW11dGVkOiAjYWFhMWJkO1xuICAtLXB1cnBsZTogI2M0YjVmZDtcbiAgLS1wdXJwbGUtZGFyazogI2RkZDZmZTtcbiAgLS1wdXJwbGUtbGlnaHQ6ICMzMDI0NDg7XG4gIC0tYW1iZXItZGFyazogI2ZiYmYyNDtcbiAgLS1hbWJlci1saWdodDogIzNiMmQyMDtcbiAgLS1lbWVyYWxkOiAjMzRkMzk5O1xuICAtLWVtZXJhbGQtZGFyazogIzZlZTdiNztcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjMTczYjMyO1xuICAtLXJvc2U6ICNmZGE0YWY7XG4gIC0tcm9zZS1saWdodDogIzQyMjQzMjtcbiAgLS1za3k6ICM3ZGQzZmM7XG4gIC0tc2t5LWxpZ2h0OiAjMTkzOTRiO1xuICAtLXBhcGVyOiAjMjExYzMyO1xuICAtLWJnLWNhbnZhczogIzE0MTIyMztcbiAgLS1ib3JkZXItc29mdDogIzM5MzE0ZjtcbiAgLS1jYXJkLWJnOiAjMjExYzMyO1xuICAtLXN1cmZhY2UtcmFpc2VkOiAjMmEyNDNkO1xuICAtLWFjdGlvbi1wdXJwbGU6ICM2ZDI4ZDk7XG4gIC0tYWN0aW9uLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMjAsIDE4LCAzNTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI0MiwgMjM4LCAyNTE7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gIC0taW9uLXRvb2xiYXItY29sb3I6IHZhcigtLWluayk7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cblxuLy8gUmVwYWlycyBjb21tb24tcGFnZSBzdHlsZXMgbG9jYWxseSB3aXRob3V0IG1vZGlmeWluZyB0aGUgc2hhcmVkIHNvdXJjZS5cbkBtaXhpbiBwYWdlLWRhcmstY29tbW9uIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIEBpbmNsdWRlIHBhZ2UtZGFyay1wYWxldHRlO1xuXG4gICAgLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMzLCAyOCwgNTAsIC45Nik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG5cbiAgICAuaGVhZGVyLXNlYXJjaC1iYXIsXG4gICAgLmVsZW1lbnRhcnktdGFicyB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtaW5wdXQtd3JhcCxcbiAgICAuY29udGVudC1wYWdlLWNhcmQsXG4gICAgLmZsb2F0aW5nLWljb24sXG4gICAgLnN1Z2dlc3Rpb24tYm94LFxuICAgIC5zdWdnZXN0aW9uLWNoaXBzIC5jaGlwLWxpbmssXG4gICAgLnN0YXR1cy1hY3Rpb25zIC5idG4ub3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0LFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsXG4gICAgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRuLmdob3N0OmhvdmVyLFxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLnNlY29uZGFyeTpob3ZlcixcbiAgICAuc3VnZ2VzdGlvbi1jaGlwcyAuY2hpcC1saW5rOmhvdmVyLFxuICAgIC5lbGVtZW50YXJ5LXRhYnMgLnRhYi1idG4uYWN0aXZlLFxuICAgIC5lbGVtZW50YXJ5LXRhYnMgLnRhYi1idG46aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgICB9XG5cbiAgICAuYWN0aW9uLWJ0bi5wcmltYXJ5LFxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLnByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYWN0aW9uLXB1cnBsZSksIHZhcigtLWFjdGlvbi1wdXJwbGUtZGFyaykpO1xuICAgIH1cblxuICAgIC5zdGF0dXMtYWN0aW9ucyAuYnRuLmFtYmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICAgICAgY29sb3I6ICMyMzE3MGI7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZykgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cInByaW1hcnlcIl0sXG4gICAgaW9uLXRleHRbY29sb3I9XCJpbnN0YWdyYW1cIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJzdWNjZXNzXCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWVtZXJhbGQpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tZW1lcmFsZCk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJ3YXJuaW5nXCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWFtYmVyLWRhcmspICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XG4gICAgfVxuXG4gICAgaW9uLXRleHRbY29sb3I9XCJkYW5nZXJcIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcm9zZSkgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1yb3NlKTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cImxpZ2h0XCJdIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 47473:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/user-panel/user-panel.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [translucent]=\"true\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.panel/user-panel/user-panel\" fallback=\"/\">\n<div page-actions><button\r\n        type=\"button\"\r\n        class=\"nav-link-btn nav-club-quick-btn\"\r\n        (click)=\"positionSelect(19)\"\r\n        [class.is-active]=\"selected === 19\"\r\n        title=\"اول آموز کلاب\"\r\n      >\r\n        <ion-icon name=\"ribbon-outline\" aria-hidden=\"true\"></ion-icon>\r\n        <span class=\"nav-btn-text\">اول آموز کلاب</span>\r\n        <span class=\"pill-dot\" aria-hidden=\"true\"></span>\r\n      </button></div>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"user-panel-page\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid class=\"bg user-panel-shell\">\r\n    <section class=\"account-hero\" dir=\"rtl\">\r\n      <div class=\"account-hero__glow account-hero__glow--one\"></div>\r\n      <div class=\"account-hero__glow account-hero__glow--two\"></div>\r\n      <div class=\"account-hero__glow account-hero__glow--three\"></div>\r\n      <div class=\"account-hero__content\">\r\n        <div class=\"account-avatar-wrap\">\r\n          <div class=\"account-avatar\" aria-hidden=\"true\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n          </div>\r\n          <span class=\"account-avatar__sparkle\">✦</span>\r\n        </div>\r\n        <div class=\"account-hero__copy\">\r\n          <span class=\"account-hero__eyebrow\">\r\n            <span class=\"eyebrow-star\">✦</span> پنل کاربری اول آموز\r\n          </span>\r\n          <h1 *ngIf=\"user\">{{ user.name }} {{ user.family }}</h1>\r\n          <h1 *ngIf=\"!user\">حساب کاربری اول آموز</h1>\r\n          <p>سامانه مدیریت دوره‌ها، خریدها، مدارک و امتیازات باشگاه یادگیری شما</p>\r\n        </div>\r\n        <div class=\"account-hero__meta\" *ngIf=\"user\">\r\n          <div\r\n            class=\"hero-stat hero-stat--club\"\r\n            (click)=\"positionSelect(19)\"\r\n            role=\"button\"\r\n            tabindex=\"0\"\r\n            title=\"مشاهده و دریافت امتیاز اول آموز کلاب\"\r\n          >\r\n            <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n            <div class=\"hero-stat__body\">\r\n              <span>اول آموز کلاب</span>\r\n              <strong>{{ user.point }} امتیاز</strong>\r\n            </div>\r\n            <span class=\"hero-stat__badge\">دریافت هدیه</span>\r\n          </div>\r\n          <div class=\"hero-stat hero-stat--subtle\">\r\n            <ion-icon name=\"finger-print-outline\"></ion-icon>\r\n            <div class=\"hero-stat__body\">\r\n              <span>شناسه کاربری</span>\r\n              <strong>{{ user.id }}</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Quick Shortcuts on Mobile / Responsive Hero -->\r\n      <div class=\"account-hero__shortcuts\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn\"\r\n          [class.is-active]=\"selected === 0\"\r\n          (click)=\"positionSelect(0)\"\r\n        >\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <span>داشبورد</span>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn\"\r\n          [class.is-active]=\"selected === 1\"\r\n          (click)=\"positionSelect(1)\"\r\n        >\r\n          <ion-icon name=\"card-outline\"></ion-icon>\r\n          <span>کیف پول</span>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn\"\r\n          [class.is-active]=\"selected === 4\"\r\n          (click)=\"positionSelect(4)\"\r\n        >\r\n          <ion-icon name=\"school-outline\"></ion-icon>\r\n          <span>دوره‌های من</span>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn\"\r\n          [class.is-active]=\"selected === 14\"\r\n          (click)=\"positionSelect(14)\"\r\n        >\r\n          <ion-icon name=\"cart-outline\"></ion-icon>\r\n          <span>سفارشات</span>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn hero-shortcut-btn--club\"\r\n          [class.is-active]=\"selected === 19\"\r\n          (click)=\"positionSelect(19)\"\r\n        >\r\n          <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n          <span>اول آموز کلاب</span>\r\n          <span class=\"shortcut-dot\"></span>\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"hero-shortcut-btn\"\r\n          [class.is-active]=\"selected === 2\"\r\n          (click)=\"positionSelect(2)\"\r\n        >\r\n          <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n          <span>ویرایش</span>\r\n        </button>\r\n      </div>\r\n    </section>\r\n    <ion-row class=\"panel-layout\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-row dir=\"rtl\" class=\"panel-layout__inner\">\r\n          <ion-col size=\"12\" offset=\"0\" size-lg=\"3\" class=\"panel-navigation\">\r\n            <!-- <ion-row>\r\n              <ion-card>\r\n                <ion-img\r\n                  *ngIf=\"windowWidth > 600\"\r\n                  class=\"ion-margin ion-padding my-logo\"\r\n                  src=\"./assets/images/logo250.png\"\r\n                  alt=\"Avatar\"\r\n                ></ion-img>\r\n                <ion-card-title dir=\"rtl\" class=\"text-center\">\r\n                  <span *ngIf=\"user\">{{ user.name + \" \" + user.family }}</span>\r\n                </ion-card-title>\r\n              </ion-card>\r\n            </ion-row> -->\r\n            <ion-card class=\"panel-nav-card\">\r\n              <div class=\"panel-nav-heading\">\r\n                <div>\r\n                  <span>دسترسی سریع</span>\r\n                  <strong>منوی حساب کاربری</strong>\r\n                </div>\r\n                <ion-icon name=\"apps-outline\"></ion-icon>\r\n              </div>\r\n              <div class=\"panel-nav-mobile\" dir=\"rtl\">\r\n                <!-- Mobile Horizontal Quick Scroll Strip -->\r\n                <div class=\"mobile-tabs-scroll\">\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 0\" (click)=\"positionSelect(0)\">\r\n                    <ion-icon name=\"home-outline\"></ion-icon>\r\n                    <span>داشبورد</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 1\" (click)=\"positionSelect(1)\">\r\n                    <ion-icon name=\"card-outline\"></ion-icon>\r\n                    <span>کیف پول</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 4\" (click)=\"positionSelect(4)\">\r\n                    <ion-icon name=\"school-outline\"></ion-icon>\r\n                    <span>دوره‌های من</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 14\" (click)=\"positionSelect(14)\">\r\n                    <ion-icon name=\"cart-outline\"></ion-icon>\r\n                    <span>سفارشات</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill mobile-tab-pill--club\" [class.is-active]=\"selected === 19\" (click)=\"positionSelect(19)\">\r\n                    <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n                    <span>اول آموز کلاب</span>\r\n                    <span class=\"pill-dot\"></span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 13\" (click)=\"positionSelect(13)\">\r\n                    <ion-icon name=\"cube-outline\"></ion-icon>\r\n                    <span>کالاهای من</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 10\" (click)=\"positionSelect(10)\">\r\n                    <ion-icon name=\"flask-outline\"></ion-icon>\r\n                    <span>آزمون‌ها</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 11\" (click)=\"positionSelect(11)\">\r\n                    <ion-icon name=\"id-card-outline\"></ion-icon>\r\n                    <span>مدارک</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 15\" (click)=\"positionSelect(15)\">\r\n                    <ion-icon name=\"location-outline\"></ion-icon>\r\n                    <span>آدرس‌ها</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 2\" (click)=\"positionSelect(2)\">\r\n                    <ion-icon name=\"people-outline\"></ion-icon>\r\n                    <span>ویرایش حساب</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 3\" (click)=\"positionSelect(3)\">\r\n                    <ion-icon name=\"key-outline\"></ion-icon>\r\n                    <span>رمز عبور</span>\r\n                  </button>\r\n                  <button type=\"button\" class=\"mobile-tab-pill\" [class.is-active]=\"selected === 20\" (click)=\"positionSelect(20)\">\r\n                    <ion-icon name=\"share-social-outline\"></ion-icon>\r\n                    <span>زیرمجموعه</span>\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"panel-nav-mobile__intro\">\r\n                  <span>انتخاب سایر بخش‌های حساب</span>\r\n                  <small>فهرست کامل ۲۱ بخش</small>\r\n                </div>\r\n                <ion-item class=\"panel-nav-mobile__select\" lines=\"none\">\r\n                  <ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\r\n                  <ion-select\r\n                    aria-label=\"انتخاب بخش حساب کاربری\"\r\n                    interface=\"action-sheet\"\r\n                    [interfaceOptions]=\"mobileCategorySelectOptions\"\r\n                    cancelText=\"بستن\"\r\n                    [value]=\"selected\"\r\n                    (ionChange)=\"positionSelect($any($event).detail.value)\"\r\n                  >\r\n                    <ion-select-option [value]=\"0\">داشبورد</ion-select-option>\r\n                    <ion-select-option [value]=\"1\">کیف پول</ion-select-option>\r\n                    <ion-select-option [value]=\"14\">سفارش‌ها</ion-select-option>\r\n                    <ion-select-option [value]=\"2\">ویرایش حساب</ion-select-option>\r\n                    <ion-select-option [value]=\"15\">آدرس‌های من</ion-select-option>\r\n                    <ion-select-option [value]=\"8\">شبکه‌های اجتماعی</ion-select-option>\r\n                    <ion-select-option [value]=\"9\">اطلاعات هویتی</ion-select-option>\r\n                    <ion-select-option [value]=\"12\">آزمون سطح</ion-select-option>\r\n                    <ion-select-option [value]=\"10\">آزمون‌های من</ion-select-option>\r\n                    <ion-select-option [value]=\"18\">پرداخت آزمون</ion-select-option>\r\n                    <ion-select-option [value]=\"11\">مدرک‌های من</ion-select-option>\r\n                    <ion-select-option [value]=\"3\">تغییر رمز عبور</ion-select-option>\r\n                    <ion-select-option [value]=\"4\">دوره‌های من</ion-select-option>\r\n                    <ion-select-option [value]=\"13\">کالاهای من</ion-select-option>\r\n                    <ion-select-option [value]=\"5\">دوره‌های پسندیده</ion-select-option>\r\n                    <ion-select-option [value]=\"16\">کالاهای پسندیده</ion-select-option>\r\n                    <ion-select-option [value]=\"6\">مقاله‌های پسندیده</ion-select-option>\r\n                    <ion-select-option [value]=\"7\">سؤالات دوره</ion-select-option>\r\n                    <ion-select-option [value]=\"17\">سؤالات کالا</ion-select-option>\r\n                    <ion-select-option [value]=\"19\">اول آموز کلاب</ion-select-option>\r\n                    <ion-select-option [value]=\"20\">زیرمجموعه‌های من</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"panel-nav-items\">\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 0 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(0)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 0 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"home-outline\"\r\n                      ></ion-icon\r\n                      ><br />داشبرد</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 1 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(1)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 1 ? 'medium' : '' }}\"\r\n                    >\r\n                      <ion-icon class=\"icon-dash\" name=\"card-outline\"></ion-icon\r\n                      ><br />کیف پول</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 14 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(14)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 14 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"cart-outline\"\r\n                      ></ion-icon\r\n                      ><br />سفارشات</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 2 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(2)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 2 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"people-outline\"\r\n                      ></ion-icon\r\n                      ><br />ویرایش حساب</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 15 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(15)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 15 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"location-outline\"\r\n                      ></ion-icon\r\n                      ><br />آدرس های من</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 8 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(8)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 8 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"share-social-outline\"\r\n                      ></ion-icon\r\n                      ><br />شبکه اجتماعی</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 9 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(9)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 9 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"person-outline\"\r\n                      ></ion-icon\r\n                      ><br />اطلاعات هویتی</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 12 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(12)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 12 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"flask-outline\"\r\n                      ></ion-icon\r\n                      ><br />آزمون سطح</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 10 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(10)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 10 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"flask-outline\"\r\n                      ></ion-icon\r\n                      ><br />آزمون های من</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 18 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(18)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 18 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon\r\n                      ><br />پرداخت آزمون</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 11 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(11)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 11 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"id-card-outline\"\r\n                      ></ion-icon\r\n                      ><br />مدرک های من</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 3 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(3)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 3 ? 'medium' : '' }}\"\r\n                      ><ion-icon class=\"icon-dash\" name=\"key-outline\"></ion-icon\r\n                      ><br />تغییر رمز عبور</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 4 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(4)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 4 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"school-outline\"\r\n                      ></ion-icon\r\n                      ><br />دوره های من</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 13 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(13)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 13 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"cube-outline\"\r\n                      ></ion-icon\r\n                      ><br />کالا های من</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 5 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(5)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 5 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"heart-outline\"\r\n                      ></ion-icon\r\n                      ><br />دوره ی پسندیده</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 16 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(16)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 16 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"heart-outline\"\r\n                      ></ion-icon\r\n                      ><br />کالا ی پسندیده</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 6 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(6)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 6 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"heart-outline\"\r\n                      ></ion-icon\r\n                      ><br />مقاله ی پسندیده</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 7 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(7)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 7 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"help-outline\"\r\n                      ></ion-icon\r\n                      ><br />سوالات از دوره</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\"\r\n                  ><ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 17 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(17)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 17 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"help-outline\"\r\n                      ></ion-icon\r\n                      ><br />سوالات از کالا</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 19 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(19)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 19 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"ribbon-outline\"\r\n                      ></ion-icon\r\n                      ><br />اول آموز کلاب</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 20 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(20)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 20 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"share-social-outline\"\r\n                      ></ion-icon\r\n                      ><br />زیر مجموعه</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"12\" offset=\"0\" class=\"col-dash\">\r\n                  <ion-item\r\n                    class=\"item-dash\"\r\n                    color=\"success\"\r\n                    lines=\"none\"\r\n                    disabled=\"{{ selected == 21 ? 'true' : 'false' }}\"\r\n                    button\r\n                    (click)=\"positionSelect(21)\"\r\n                  >\r\n                    <ion-text\r\n                      class=\"full-width text-center text-dash\"\r\n                      color=\"{{ selected == 21 ? 'medium' : '' }}\"\r\n                      ><ion-icon\r\n                        class=\"icon-dash\"\r\n                        name=\"call-outline\"\r\n                      ></ion-icon\r\n                      ><br />درخواست مشاوره</ion-text\r\n                    >\r\n                  </ion-item>\r\n                </ion-col> -->\r\n              </ion-row>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\" offset=\"0\" size-lg=\"9\" class=\"panel-content\">\r\n            <ion-card class=\"panel-content-card\">\r\n              <ion-card-header color=\"primary\" class=\"panel-content-header\">\r\n                <ion-card-subtitle class=\"text-center\" *ngIf=\"selected == 9\"\r\n                  >برای دریافت مدرک، صحت اطلاعات الزامی است</ion-card-subtitle\r\n                >\r\n                <ion-card-title class=\"text-center\">\r\n                  <h1 *ngIf=\"selected == 0\">حساب کاربری</h1>\r\n                  <h1 *ngIf=\"selected == 1\">کیف پول</h1>\r\n                  <h1 *ngIf=\"selected == 2\">ویرایش حساب کاربری</h1>\r\n                  <h1 *ngIf=\"selected == 3\">تغییر رمز عبور</h1>\r\n                  <h1 *ngIf=\"selected == 4\">دوره های من</h1>\r\n                  <h1 *ngIf=\"selected == 5\">دوره های مورد علاقه</h1>\r\n                  <h1 *ngIf=\"selected == 16\">کالا های مورد علاقه</h1>\r\n                  <h1 *ngIf=\"selected == 6\">مقاله های مورد علاقه</h1>\r\n                  <h1 *ngIf=\"selected == 7\">سوالات من از دوره</h1>\r\n                  <h1 *ngIf=\"selected == 17\">سوالات من از کالا</h1>\r\n                  <h1 *ngIf=\"selected == 18\">تاریخچه پرداخت آزمون</h1>\r\n                  <h1 *ngIf=\"selected == 8\">شبکه های اجتماعی</h1>\r\n                  <h1 *ngIf=\"selected == 9\">اطلاعات هویت کاربر</h1>\r\n                  <h1 *ngIf=\"selected == 10\">تاریخچه آزمون</h1>\r\n                  <h1 *ngIf=\"selected == 11\">مدارک آزمون</h1>\r\n                  <h1 *ngIf=\"selected == 12\">تاریخچه آزمون</h1>\r\n                  <h1 *ngIf=\"selected == 13\">کالا های من</h1>\r\n                  <h1 *ngIf=\"selected == 14\">سفارشات</h1>\r\n                  <h1 *ngIf=\"selected == 19\">اول آموز کلاب</h1>\r\n                  <h1 *ngIf=\"selected == 20\">زیر مجموعه های من</h1>\r\n                  <h1 *ngIf=\"selected == 15\">آدرس های من</h1>\r\n                  <h1 *ngIf=\"selected == 21\">درخواست مشاوره</h1>\r\n                </ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content dir=\"rtl\">\r\n                <ion-list *ngIf=\"selected == 21\">\r\n                  <form\r\n                    [formGroup]=\"payForm2\"\r\n                    (ngSubmit)=\"onPay2()\"\r\n                    (keyup.enter)=\"onPay2()\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"cash-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >موضوع مشاوره</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"title\"\r\n                          placeholder=\"\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-button\r\n                        [disabled]=\"!payForm.valid\"\r\n                        type=\"submit\"\r\n                        class=\"ion-margin\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"success\"\r\n                      >\r\n                        ثبت درخواست و پرداخت هزینه\r\n                      </ion-button>\r\n                    </ion-list>\r\n                  </form>\r\n                  <ion-list\r\n                    *ngIf=\"\r\n                      walletChargeHistories.walletChargeHistories.length > 0\r\n                    \"\r\n                  >\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                walletChargeHistories.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"walletChargeHistories.pageId == page\"\r\n                              *ngIf=\"\r\n                                walletChargeHistories.pageId <= i + 3 &&\r\n                                walletChargeHistories.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                walletChargeHistories.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == walletChargeHistories.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(walletChargeHistories.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ walletChargeHistories.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                    <ion-list-header>\r\n                      <ion-label>تاریخچه پرداخت</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-card\r\n                      *ngFor=\"\r\n                        let history of walletChargeHistories.walletChargeHistories\r\n                      \"\r\n                    >\r\n                      <ion-item>\r\n                        <ion-label>کد تراکنش: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.id }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>وضعیت: </ion-label>\r\n                        <ion-text\r\n                          color=\"{{\r\n                            history.isDelete\r\n                              ? 'danger'\r\n                              : history.isSuccess\r\n                              ? 'success'\r\n                              : 'warning'\r\n                          }}\"\r\n                        >\r\n                          {{\r\n                            history.isDelete\r\n                              ? \"منقضی شده\"\r\n                              : history.isSuccess\r\n                              ? \"انجام شده\"\r\n                              : \"درحال بررسی\"\r\n                          }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>تاریخ: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ history.createDate | persianDate }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>ساعت: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ getTime(history.createDate) }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>مبلغ: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.price | rial }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                    </ion-card>\r\n\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                walletChargeHistories.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"walletChargeHistories.pageId == page\"\r\n                              *ngIf=\"\r\n                                walletChargeHistories.pageId <= i + 3 &&\r\n                                walletChargeHistories.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                walletChargeHistories.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == walletChargeHistories.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(walletChargeHistories.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ walletChargeHistories.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </ion-list>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 20\">\r\n                  <ion-text class=\"font-xsmall ion-margin\">\r\n                    دوستاتو دعوت کن و امتیاز بگیر!\r\n                  </ion-text>\r\n                  <ion-item\r\n                    button\r\n                    (click)=\"\r\n                      copyText(\r\n                        'avalamooz.ir' + '/Account/Invite?id=' + user.id\r\n                      )\r\n                    \"\r\n                  >\r\n                    <ion-label class=\"text-center\">لینک دعوت از دوست</ion-label>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"userInvites.length == 0\">\r\n                    <ion-label>هنوز زیر مجموع ندارید</ion-label>\r\n                  </ion-item>\r\n                  <div *ngIf=\"userInvites.length > 0\">\r\n                    <ion-list-header>\r\n                      <ion-label>{{\r\n                        \"تعداد: \" + userInvites.length\r\n                      }}</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item *ngFor=\"let user of userInvites; let i = index\">\r\n                      <ion-label>{{\r\n                        user.id + \"- \" + user.name + \" \" + user.family\r\n                      }}</ion-label>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 19 && user\">\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"instagram\"\r\n                      slot=\"start\"\r\n                      name=\"ribbon-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>امتیاز: {{ user.point }}</ion-label>\r\n                    <!-- <ion-text color=\"light\">\r\n                      <h5>{{ user.point }}</h5>\r\n                    </ion-text> -->\r\n                  </ion-item>\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    *ngIf=\"!isDailyPointLoading && !isDailyPointDone\"\r\n                    color=\"telegram\"\r\n                    (click)=\"onGetDayPoint()\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                  >\r\n                    دریافت امتیاز روزانه\r\n                  </ion-button>\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    *ngIf=\"!isDailyPointLoading && isDailyPointDone\"\r\n                    (click)=\"onGetDayPoint2()\"\r\n                    color=\"success\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                  >\r\n                    <ion-icon name=\"checkmark-circle-outline\"></ion-icon> 1\r\n                    امتیاز دریافت شد\r\n                  </ion-button>\r\n                  <ion-item\r\n                    lines=\"none\"\r\n                    class=\"ion-margin text-center\"\r\n                    *ngIf=\"\r\n                      !isDailyPointLoading &&\r\n                      isDailyPointDone &&\r\n                      lastDailyPointDate != null\r\n                    \"\r\n                  >\r\n                    <ion-text>دریافت امتیاز بعدی:</ion-text>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    class=\"ion-margin text-center\"\r\n                    *ngIf=\"\r\n                      !isDailyPointLoading &&\r\n                      isDailyPointDone &&\r\n                      lastDailyPointDate != null\r\n                    \"\r\n                  >\r\n                    <ion-text>{{\r\n                      (lastDailyPointDate | persianDate) +\r\n                        \" - \" +\r\n                        getTime(lastDailyPointDate) +\r\n                        \" + 24 ساعت\"\r\n                    }}</ion-text>\r\n                  </ion-item>\r\n                  <div *ngIf=\"isDailyPointLoading\">\r\n                    <ion-grid dir=\"ltr\" class=\"ion-margin\">\r\n                      <ion-row>\r\n                        <ion-col class=\"text-center full-width\">\r\n                          <ion-spinner\r\n                            class=\"full-width\"\r\n                            name=\"dots\"\r\n                          ></ion-spinner>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </div>\r\n                  <br />\r\n                  <ion-item lines=\"none\">\r\n                    <h5>1. هر روز به سایت سر بزن و 1 امتیاز رایگان بگیر!</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>2. هر نظر و سوال در سایت 1 امتیاز</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>3. هر قبولی در آزمون تعیین سطح 1 امتیاز</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>4. هر قبولی در آزمون دوره 10 امتیاز برای کاربر</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>5. هر قبولی در آزمون دوره 5 امتیاز برای معرف</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>6. تایید کردن ایمیل 10 امتیاز برای کاربر و معرف</h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>\r\n                      7. هر 1000 تومان پرداخت (خرید دوره یا محصول) 1 امتیاز برای\r\n                      کاربر\r\n                    </h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>\r\n                      8. هر 2000 تومان پرداخت (خرید دوره یا محصول) 1 امتیاز برای\r\n                      معرف\r\n                    </h5>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\">\r\n                    <h5>\r\n                      9. کد های تخفیف فقط بر روی دوره هایی که تخفیف ندارند اعمال\r\n                      میشود\r\n                    </h5>\r\n                  </ion-item>\r\n                  <br />\r\n                  <ion-list-header>\r\n                    <ion-label color=\"warning\"\r\n                      >کد های تخفیف زمان دار ویژه خرید دوره</ion-label\r\n                    >\r\n                  </ion-list-header>\r\n                  <h5 style=\"margin-bottom: 16px; margin-right: 30px\">\r\n                    ( اعتبار 1 هفته )\r\n                  </h5>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 5 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 500\"\r\n                      (click)=\"presentAlertConfirm3(500, 5)\"\r\n                    >\r\n                      500 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 10 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 1000\"\r\n                      (click)=\"presentAlertConfirm3(1000, 10)\"\r\n                    >\r\n                      1000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 15 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 2000\"\r\n                      (click)=\"presentAlertConfirm3(2000, 15)\"\r\n                    >\r\n                      2000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 20 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 3500\"\r\n                      (click)=\"presentAlertConfirm3(3500, 20)\"\r\n                    >\r\n                      3500 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 30 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 5000\"\r\n                      (click)=\"presentAlertConfirm3(5000, 30)\"\r\n                    >\r\n                      5000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 40 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 7500\"\r\n                      (click)=\"presentAlertConfirm3(7500, 40)\"\r\n                    >\r\n                      7500 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 50 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 10000\"\r\n                      (click)=\"presentAlertConfirm3(10000, 50)\"\r\n                    >\r\n                      10000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 60 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 15000\"\r\n                      (click)=\"presentAlertConfirm4(15000, 60)\"\r\n                    >\r\n                      15000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 70 درصدی: </ion-label>\r\n                    <ion-button\r\n                      color=\"instagram\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 20000\"\r\n                      (click)=\"presentAlertConfirm4(20000, 70)\"\r\n                    >\r\n                      20000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 20,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 500\"\r\n                      (click)=\"presentAlertConfirm33(500, 20000)\"\r\n                    >\r\n                      500 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 30,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 1000\"\r\n                      (click)=\"presentAlertConfirm33(1000, 30000)\"\r\n                    >\r\n                      1000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 50,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 2000\"\r\n                      (click)=\"presentAlertConfirm33(2000, 50000)\"\r\n                    >\r\n                      2000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 75,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 5000\"\r\n                      (click)=\"presentAlertConfirm33(5000, 75000)\"\r\n                    >\r\n                      5000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 100,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 10000\"\r\n                      (click)=\"presentAlertConfirm33(10000, 100000)\"\r\n                    >\r\n                      10000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 150,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 15000\"\r\n                      (click)=\"presentAlertConfirm44(15000, 150000)\"\r\n                    >\r\n                      15000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>کد تخفیف 200,000 تومان: </ion-label>\r\n                    <ion-button\r\n                      color=\"facebook\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      [disabled]=\"user.point < 20000\"\r\n                      (click)=\"presentAlertConfirm44(20000, 200000)\"\r\n                    >\r\n                      20000 امتیاز\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-button\r\n                    *ngIf=\"!pointShowHistories\"\r\n                    class=\"ion-margin\"\r\n                    (click)=\"ShowPointHistories()\"\r\n                    color=\"success\"\r\n                    >مشاهده تاریخچه</ion-button\r\n                  >\r\n                  <ion-button\r\n                    *ngIf=\"pointShowHistories\"\r\n                    class=\"ion-margin\"\r\n                    (click)=\"ShowPointHistories()\"\r\n                    color=\"success\"\r\n                    >رفرش تاریخچه</ion-button\r\n                  >\r\n                  <ion-item\r\n                    *ngIf=\"\r\n                      pointShowHistories &&\r\n                      pointHistoryFilter.pointHistories.length === 0\r\n                    \"\r\n                  >\r\n                    <ion-label>هنوز موردی ثبت نشده است</ion-label>\r\n                  </ion-item>\r\n                  <ion-card\r\n                    *ngFor=\"let history of pointHistoryFilter.pointHistories\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>شناسه: </ion-label>\r\n                      <ion-text color=\"light\">\r\n                        {{ history.id }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>وضعیت: </ion-label>\r\n                      <ion-text\r\n                        color=\"{{\r\n                          history.isDelete || !history.isActive\r\n                            ? 'danger'\r\n                            : 'success'\r\n                        }}\"\r\n                      >\r\n                        {{\r\n                          history.isDelete || !history.isActive\r\n                            ? \"منقضی شده\"\r\n                            : \"فعال\"\r\n                        }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>تاریخ ایجاد: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ history.createDate | persianDate }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>ساعت ایجاد: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ getTime(history.createDate) }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>کد تخفیف: </ion-label>\r\n                      <ion-text color=\"light\">\r\n                        {{ history.offCode }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>درصد تخفیف: </ion-label>\r\n                      <ion-text color=\"light\">\r\n                        {{ history.offPercent + \"%\" }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>تخفیف نقدی: </ion-label>\r\n                      <ion-text color=\"light\">\r\n                        {{ history.offPrice | rial }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>تاریخ اعتبار: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ history.limitDate | persianDate }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>ساعت اعتبار: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ getTime(history.limitDate) }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>هزینه امتیاز: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ history.point }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-card>\r\n\r\n                  <ion-grid dir=\"rtl\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                        <span\r\n                          *ngIf=\"\r\n                            pointHistoryFilter.pageId > 3 &&\r\n                            pointHistoryFilter.pageCount > 3\r\n                          \"\r\n                        >\r\n                          <ion-button\r\n                            (click)=\"goPage8(1)\"\r\n                            size=\"small\"\r\n                            fill=\"solid\"\r\n                            color=\"primary\"\r\n                          >\r\n                            1\r\n                          </ion-button>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            pointHistoryFilter.pageId > 3 &&\r\n                            pointHistoryFilter.pageCount > 3\r\n                          \"\r\n                        >\r\n                          <ion-text color=\"primary\"> ... </ion-text>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngFor=\"\r\n                            let page of MakePageCountArray(\r\n                              pointHistoryFilter.pageCount\r\n                            );\r\n                            let i = index\r\n                          \"\r\n                        >\r\n                          <ion-button\r\n                            size=\"small\"\r\n                            [disabled]=\"pointHistoryFilter.pageId == page\"\r\n                            *ngIf=\"\r\n                              pointHistoryFilter.pageId <= i + 3 &&\r\n                              pointHistoryFilter.pageId >= i - 1\r\n                            \"\r\n                            fill=\"{{\r\n                              pointHistoryFilter.pageId == page\r\n                                ? 'clear'\r\n                                : 'solid'\r\n                            }}\"\r\n                            color=\"{{\r\n                              page == pointHistoryFilter.pageId\r\n                                ? 'danger'\r\n                                : 'primary'\r\n                            }}\"\r\n                            (click)=\"goPage8(page)\"\r\n                            >{{ page }}</ion-button\r\n                          >\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            pointHistoryFilter.pageId + 2 <\r\n                            pointHistoryFilter.pageCount\r\n                          \"\r\n                        >\r\n                          <ion-text color=\"primary\"> ... </ion-text>\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"\r\n                            pointHistoryFilter.pageId + 2 <\r\n                            pointHistoryFilter.pageCount\r\n                          \"\r\n                        >\r\n                          <ion-button\r\n                            (click)=\"goPage8(pointHistoryFilter.pageCount)\"\r\n                            size=\"small\"\r\n                            fill=\"solid\"\r\n                            color=\"primary\"\r\n                          >\r\n                            {{ pointHistoryFilter.pageCount }}\r\n                          </ion-button>\r\n                        </span>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 0 && user\">\r\n                  <ion-list-header>\r\n                    <ion-button color=\"warning\" (click)=\"positionSelect(2)\"\r\n                      >ویرایش حساب کاربری</ion-button\r\n                    >\r\n                  </ion-list-header>\r\n                  <ion-item *ngIf=\"ipAddress !== '0.0.0.0'\">\r\n                    <ion-icon slot=\"start\" name=\"id-card-outline\"></ion-icon>\r\n                    <ion-label>IP: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ ipAddress }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      slot=\"start\"\r\n                      name=\"finger-print-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>کد پرسنلی: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ user.id }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"user.inviteId !== 0\">\r\n                    <ion-icon\r\n                      slot=\"start\"\r\n                      name=\"finger-print-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>کد معرف: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ user.inviteId }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"instagram\"\r\n                      slot=\"start\"\r\n                      name=\"ribbon-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>امتیاز: </ion-label>\r\n                    <ion-button\r\n                      style=\"margin-left: 20px\"\r\n                      (click)=\"positionSelect(19)\"\r\n                      color=\"instagram\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                    >\r\n                      اول آموز کلاب\r\n                    </ion-button>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ user.point }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"secondary\"\r\n                      slot=\"start\"\r\n                      name=\"text-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>نام و نام خانوادگی: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ user.name + \" \" + user.family }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"call-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>شماره موبایل: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ 0 + user.phoneNumber }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n\r\n                  <div *ngIf=\"IsTeacher() || IsSeller()\">\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"call-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label>وضعیت شماره موبایل: </ion-label>\r\n                      <ion-text\r\n                        color=\"{{ phoneConfirmed ? 'success' : 'danger' }}\"\r\n                      >\r\n                        <h5>\r\n                          {{ phoneConfirmed ? \"تایید شده\" : \"تایید نشده\" }}\r\n                        </h5>\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"!phoneConfirmed && isSMSVerifyShow\">\r\n                      <ion-button\r\n                        class=\"full-width\"\r\n                        (click)=\"onPhoneVerify()\"\r\n                        color=\"success\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        ارسال پیامک تایید\r\n                      </ion-button>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"!phoneConfirmed && !isSMSVerifyShow\">\r\n                      <ion-text\r\n                        class=\"text-center full-width\"\r\n                        color=\"success\"\r\n                        position=\"floating\"\r\n                      >\r\n                        {{ counter2 + \" ثانیه \" }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-card *ngIf=\"isSMSVerifyShow2\">\r\n                      <form\r\n                        [formGroup]=\"phoneConfirmForm\"\r\n                        (ngSubmit)=\"onPhoneConfirm()\"\r\n                        (keyup.enter)=\"onPhoneConfirm()\"\r\n                        dir=\"rtl\"\r\n                      >\r\n                        <ion-item>\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            name=\"phone-portrait-outline\"\r\n                          ></ion-icon>\r\n                          <ion-label color=\"light\" position=\"floating\"\r\n                            >کد تایید</ion-label\r\n                          >\r\n                          <ion-input\r\n                            formControlName=\"code\"\r\n                            placeholder=\"کد تایید\"\r\n                            type=\"text\"\r\n                          ></ion-input>\r\n                        </ion-item>\r\n                        <ion-button\r\n                          [disabled]=\"!phoneConfirmForm.valid\"\r\n                          type=\"submit\"\r\n                          class=\"ion-margin\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                          color=\"success\"\r\n                        >\r\n                          تایید\r\n                        </ion-button>\r\n                      </form>\r\n                    </ion-card>\r\n                  </div>\r\n\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"mail-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>ایمیل: </ion-label>\r\n                    <ion-text color=\"light\">\r\n                      <h5>{{ user.email }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"mail-outline\"\r\n                    ></ion-icon>\r\n                    <ion-label>وضعیت ایمیل: </ion-label>\r\n                    <ion-text\r\n                      color=\"{{ emailConfirmed ? 'success' : 'danger' }}\"\r\n                    >\r\n                      <h5>{{ emailConfirmed ? \"تایید شده\" : \"تایید نشده\" }}</h5>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!emailConfirmed && isEmailVerifyShow\">\r\n                    <ion-button\r\n                      class=\"full-width\"\r\n                      (click)=\"onEmailVerify()\"\r\n                      color=\"success\"\r\n                      expand=\"block\"\r\n                      fill=\"clear\"\r\n                      shape=\"round\"\r\n                    >\r\n                      ارسال ایمیل تایید\r\n                    </ion-button>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!emailConfirmed && !isEmailVerifyShow\">\r\n                    <ion-text\r\n                      class=\"text-center full-width\"\r\n                      color=\"success\"\r\n                      position=\"floating\"\r\n                    >\r\n                      {{ counter + \" ثانیه \" }}\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <div *ngIf=\"!isDegreeSharedLoading\">\r\n                    <ion-item *ngIf=\"degreeShared\">\r\n                      <ion-label>مدارک دوره برای عموم قابل نمایش است</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"!degreeShared\">\r\n                      <ion-label\r\n                        >مدارک دوره برای عموم قابل نمایش نیست</ion-label\r\n                      >\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        slot=\"start\"\r\n                        name=\"close-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"isEmailSend\">\r\n                      <ion-label>ایمیل خبر رسانی فعال است</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"mail-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"!isEmailSend\">\r\n                      <ion-label>ایمیل خبر رسانی غیر فعال شده است</ion-label>\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        slot=\"start\"\r\n                        name=\"mail-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item\r\n                      button\r\n                      (click)=\"\r\n                        copyText(\r\n                          'avalamooz.ir' + '/Account/Invite?id=' + user.id\r\n                        )\r\n                      \"\r\n                    >\r\n                      <ion-label class=\"text-center\"\r\n                        >لینک دعوت از دوست</ion-label\r\n                      >\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"link-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-list>\r\n                <section *ngIf=\"selected == 1\">\r\n                  <form\r\n                    [formGroup]=\"payForm\"\r\n                    (ngSubmit)=\"onPay()\"\r\n                    (keyup.enter)=\"onPay()\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-label>موجودی: </ion-label>\r\n                        <ion-text color=\"light\" *ngIf=\"userWallet\">\r\n                          <h5>{{ userWallet.cash | rial }}</h5>\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item class=\"ion-margin\" color=\"warning\">\r\n                        <ion-text class=\"info\">\r\n                          لطفا دقت کنید مبلغ پرداختی به هیچ عنوان امکان استرداد\r\n                          ندارد.\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"cash-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >مبلغ</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"price\"\r\n                          placeholder=\"مبلغ به تومان\"\r\n                          type=\"number\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-button\r\n                        [disabled]=\"!payForm.valid\"\r\n                        type=\"submit\"\r\n                        class=\"ion-margin\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"success\"\r\n                      >\r\n                        شارژ حساب\r\n                      </ion-button>\r\n                    </ion-list>\r\n                  </form>\r\n                  <ion-list\r\n                    *ngIf=\"\r\n                      walletChargeHistories.walletChargeHistories.length > 0\r\n                    \"\r\n                  >\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                walletChargeHistories.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"walletChargeHistories.pageId == page\"\r\n                              *ngIf=\"\r\n                                walletChargeHistories.pageId <= i + 3 &&\r\n                                walletChargeHistories.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                walletChargeHistories.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == walletChargeHistories.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(walletChargeHistories.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ walletChargeHistories.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                    <ion-list-header>\r\n                      <ion-label>تاریخچه پرداخت</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-card\r\n                      *ngFor=\"\r\n                        let history of walletChargeHistories.walletChargeHistories\r\n                      \"\r\n                    >\r\n                      <ion-item>\r\n                        <ion-label>کد تراکنش: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.id }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>وضعیت: </ion-label>\r\n                        <ion-text\r\n                          color=\"{{\r\n                            history.isDelete\r\n                              ? 'danger'\r\n                              : history.isSuccess\r\n                              ? 'success'\r\n                              : 'warning'\r\n                          }}\"\r\n                        >\r\n                          {{\r\n                            history.isDelete\r\n                              ? \"منقضی شده\"\r\n                              : history.isSuccess\r\n                              ? \"انجام شده\"\r\n                              : \"درحال بررسی\"\r\n                          }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>تاریخ: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ history.createDate | persianDate }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>ساعت: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ getTime(history.createDate) }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>مبلغ: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.price | rial }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                    </ion-card>\r\n\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId > 3 &&\r\n                              walletChargeHistories.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                walletChargeHistories.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"walletChargeHistories.pageId == page\"\r\n                              *ngIf=\"\r\n                                walletChargeHistories.pageId <= i + 3 &&\r\n                                walletChargeHistories.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                walletChargeHistories.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == walletChargeHistories.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              walletChargeHistories.pageId + 2 <\r\n                              walletChargeHistories.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage(walletChargeHistories.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ walletChargeHistories.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </ion-list>\r\n                </section>\r\n                <section *ngIf=\"selected === 18\">\r\n                  <ion-list\r\n                    *ngIf=\"examPayHistoryFilter.examPayHistories.length > 0\"\r\n                  >\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId > 3 &&\r\n                              examPayHistoryFilter.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage0(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId > 3 &&\r\n                              examPayHistoryFilter.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                examPayHistoryFilter.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"examPayHistoryFilter.pageId == page\"\r\n                              *ngIf=\"\r\n                                examPayHistoryFilter.pageId <= i + 3 &&\r\n                                examPayHistoryFilter.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                examPayHistoryFilter.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == examPayHistoryFilter.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage0(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId + 2 <\r\n                              examPayHistoryFilter.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId + 2 <\r\n                              examPayHistoryFilter.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage0(examPayHistoryFilter.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ examPayHistoryFilter.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                    <ion-list-header>\r\n                      <ion-label>تاریخچه پرداخت</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-card\r\n                      *ngFor=\"\r\n                        let history of examPayHistoryFilter.examPayHistories\r\n                      \"\r\n                    >\r\n                      <ion-item>\r\n                        <ion-label>کد تراکنش: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.id }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>کد آزمون: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.examId }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item routerLink=\"{{ '/c/' + history.courseId }}\">\r\n                        <ion-label>دوره: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.courseName }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>وضعیت: </ion-label>\r\n                        <ion-text\r\n                          color=\"{{\r\n                            history.isDelete\r\n                              ? 'danger'\r\n                              : history.isSuccess\r\n                              ? 'success'\r\n                              : 'warning'\r\n                          }}\"\r\n                        >\r\n                          {{\r\n                            history.isDelete\r\n                              ? \"منقضی شده\"\r\n                              : history.isSuccess\r\n                              ? \"انجام شده\"\r\n                              : \"درحال بررسی\"\r\n                          }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>تاریخ: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ history.createDate | persianDate }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>ساعت: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          {{ getTime(history.createDate) }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>مبلغ: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.price | rial }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"history.refId != null && history.refId != ''\"\r\n                      >\r\n                        <ion-label>کد رهگیری: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.refId }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"\r\n                          history.authority != null && history.authority != ''\r\n                        \"\r\n                      >\r\n                        <ion-label>کد درگاه: </ion-label>\r\n                        <ion-text color=\"light\">\r\n                          {{ history.authority }}\r\n                        </ion-text>\r\n                      </ion-item>\r\n                    </ion-card>\r\n\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId > 3 &&\r\n                              examPayHistoryFilter.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage0(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId > 3 &&\r\n                              examPayHistoryFilter.pageCount > 3\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray(\r\n                                examPayHistoryFilter.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"examPayHistoryFilter.pageId == page\"\r\n                              *ngIf=\"\r\n                                examPayHistoryFilter.pageId <= i + 3 &&\r\n                                examPayHistoryFilter.pageId >= i - 1\r\n                              \"\r\n                              fill=\"{{\r\n                                examPayHistoryFilter.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == examPayHistoryFilter.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage0(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId + 2 <\r\n                              examPayHistoryFilter.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              examPayHistoryFilter.pageId + 2 <\r\n                              examPayHistoryFilter.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage0(examPayHistoryFilter.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ examPayHistoryFilter.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </ion-list>\r\n                </section>\r\n                <section *ngIf=\"selected == 15 && userAddress\">\r\n                  <section\r\n                    *ngIf=\"\r\n                      userAddress.buyerUserProductAddresses && !addSelected\r\n                    \"\r\n                  >\r\n                    <ion-list\r\n                      *ngIf=\"userAddress.buyerUserProductAddresses.length > 0\"\r\n                    >\r\n                      <ion-list-header>\r\n                        <ion-label>برای ویرایش آدرس را انتخاب کنید</ion-label>\r\n                      </ion-list-header>\r\n\r\n                      <section\r\n                        *ngFor=\"\r\n                          let a of userAddress.buyerUserProductAddresses;\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-item button (click)=\"addressSelected(a)\">\r\n                          <ion-badge color=\"warning2\" mode=\"md\">{{\r\n                            i + 1\r\n                          }}</ion-badge\r\n                          ><ion-label>{{ \" - \" + a.title }}</ion-label>\r\n                          <ion-button\r\n                            (click)=\"presentAlertRemoveAddressConfirm(a)\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"trash-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                        </ion-item>\r\n                      </section>\r\n                    </ion-list>\r\n                  </section>\r\n                  <ion-button\r\n                    *ngIf=\"!addSelected\"\r\n                    color=\"success\"\r\n                    (click)=\"\r\n                      addSelected = true;\r\n                      addressForm.reset();\r\n                      provinceId = 1;\r\n                      cityId = 1\r\n                    \"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                  >\r\n                    درج آدرس جدید\r\n                  </ion-button>\r\n                  <!-- <ion-button\r\n                    *ngIf=\"addSelected && addressForm.value.id != null\"\r\n                    color=\"danger\"\r\n                    (click)=\"presentAlertRemoveAddressConfirm(a)\"\r\n                    expand=\"block\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                  >\r\n                    حذف آدرس\r\n                  </ion-button> -->\r\n                  <section *ngIf=\"addSelected\">\r\n                    <!-- <ion-item>\r\n                      <ion-label>کشور</ion-label>\r\n                      <ion-select value=\"2\" multiple=\"false\">\r\n                        <ion-select-option value=\"1\"\r\n                          >انتخاب نشده</ion-select-option\r\n                        >\r\n                        <ion-select-option value=\"2\">ایران</ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item> -->\r\n                    <ion-item>\r\n                      <ion-label>استان</ion-label>\r\n                      <ion-select [(ngModel)]=\"provinceId\" multiple=\"false\">\r\n                        <ion-select-option\r\n                          (ionChange)=\"provinceId = p.id\"\r\n                          [value]=\"p.id\"\r\n                          *ngFor=\"let p of userAddress.provinces\"\r\n                          >{{ p.name }}</ion-select-option\r\n                        >\r\n                      </ion-select>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>شهر</ion-label>\r\n                      <ion-select [(ngModel)]=\"cityId\" multiple=\"false\">\r\n                        <ion-select-option\r\n                          [value]=\"c.id\"\r\n                          *ngFor=\"let c of getCityList()\"\r\n                          >{{ c.name }}</ion-select-option\r\n                        >\r\n                      </ion-select>\r\n                    </ion-item>\r\n                  </section>\r\n                  <form\r\n                    [formGroup]=\"addressForm\"\r\n                    (ngSubmit)=\"onChangeAddress()\"\r\n                    dir=\"rtl\"\r\n                    *ngIf=\"addSelected\"\r\n                  >\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"text-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >عنوان آدرس</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"عنوان را وارد کنید\"\r\n                          formControlName=\"title\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"text-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"نام را وارد کنید\"\r\n                          formControlName=\"name\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"text-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام خانوادگی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"family\"\r\n                          type=\"text\"\r\n                          placeholder=\"نام خانوادگی را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"text-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام شرکت</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"companyName\"\r\n                          type=\"text\"\r\n                          placeholder=\"نام اختیاری\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"call-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >موبایل گیرنده</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"موبایل را وارد کنید\"\r\n                          formControlName=\"phoneNumber\"\r\n                          type=\"number\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"call-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >تلفن ثابت</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"تلفن ثابت اختیاری\"\r\n                          formControlName=\"homePhoneNumber\"\r\n                          type=\"number\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"warning\"\r\n                          slot=\"start\"\r\n                          name=\"barcode-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >کدپستی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"کدپستی را وارد کنید\"\r\n                          formControlName=\"postCode\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"danger\"\r\n                          slot=\"start\"\r\n                          name=\"location-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >آدرس</ion-label\r\n                        >\r\n                        <ion-textarea\r\n                          autoGrow=\"true\"\r\n                          placeholder=\"آدرس را وارد کنید\"\r\n                          formControlName=\"address\"\r\n                        ></ion-textarea>\r\n                      </ion-item>\r\n                      <ion-button\r\n                        [disabled]=\"!addressForm.valid\"\r\n                        class=\"ion-margin\"\r\n                        type=\"submit\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"success\"\r\n                      >\r\n                        {{\r\n                          addressForm.value.id == null\r\n                            ? \"درج آدرس\"\r\n                            : \"ویرایش کردن\"\r\n                        }}\r\n                      </ion-button>\r\n                      <ion-button\r\n                        (click)=\"addSelected = false\"\r\n                        class=\"ion-margin\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"danger\"\r\n                      >\r\n                        لغو\r\n                      </ion-button>\r\n                    </ion-list>\r\n                  </form>\r\n                </section>\r\n                <form\r\n                  [formGroup]=\"profileForm\"\r\n                  (ngSubmit)=\"onChangeProfile()\"\r\n                  (keyup.enter)=\"onChangeProfile()\"\r\n                  dir=\"rtl\"\r\n                  *ngIf=\"selected == 2\"\r\n                >\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"secondary\"\r\n                        slot=\"start\"\r\n                        name=\"text-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >نام</ion-label\r\n                      >\r\n                      <ion-input\r\n                        placeholder=\"نام را وارد کنید\"\r\n                        formControlName=\"name\"\r\n                        type=\"text\"\r\n                      ></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"secondary\"\r\n                        slot=\"start\"\r\n                        name=\"text-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >نام خانوادگی</ion-label\r\n                      >\r\n                      <ion-input\r\n                        formControlName=\"family\"\r\n                        type=\"text\"\r\n                        placeholder=\"نام خانوادگی را وارد کنید\"\r\n                      ></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"call-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >شماره موبایل</ion-label\r\n                      >\r\n                      <ion-input\r\n                        placeholder=\"موبایل را وارد کنید\"\r\n                        formControlName=\"phoneNumber\"\r\n                        type=\"number\"\r\n                      ></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>مدارک دوره قابل نمایش باشد؟</ion-label>\r\n                      <ion-toggle\r\n                        color=\"success\"\r\n                        formControlName=\"isDegreeShared\"\r\n                      ></ion-toggle>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>ارسال ایمیل خبر رسانی</ion-label>\r\n                      <ion-toggle\r\n                        color=\"success\"\r\n                        formControlName=\"isEmailSend\"\r\n                      ></ion-toggle>\r\n                    </ion-item>\r\n                    <ion-button\r\n                      [disabled]=\"!profileForm.valid\"\r\n                      class=\"ion-margin\"\r\n                      type=\"submit\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"success\"\r\n                    >\r\n                      ویرایش کردن\r\n                    </ion-button>\r\n                  </ion-list>\r\n                </form>\r\n                <form\r\n                  [formGroup]=\"changePasswordForm\"\r\n                  (ngSubmit)=\"onChangePassword()\"\r\n                  (keyup.enter)=\"onChangePassword()\"\r\n                  dir=\"rtl\"\r\n                  *ngIf=\"selected == 3\"\r\n                >\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        slot=\"start\"\r\n                        name=\"key-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >رمز فعلی</ion-label\r\n                      >\r\n                      <ion-input\r\n                        placeholder=\"رمز فعلی را وارد کنید\"\r\n                        formControlName=\"password\"\r\n                        [type]=\"inputType1\"\r\n                      ></ion-input>\r\n\r\n                      <ion-buttons slot=\"end\">\r\n                        <ion-button\r\n                          *ngIf=\"isShow1\"\r\n                          (click)=\"togglePasswordText1()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          *ngIf=\"!isShow1\"\r\n                          (click)=\"toggleTextPassword1()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye-off\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        slot=\"start\"\r\n                        name=\"key-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >رمز جدید</ion-label\r\n                      >\r\n                      <ion-input\r\n                        placeholder=\"رمز جدید را وارد کنید\"\r\n                        formControlName=\"newPassword\"\r\n                        [type]=\"inputType2\"\r\n                      ></ion-input>\r\n\r\n                      <ion-buttons slot=\"end\">\r\n                        <ion-button\r\n                          *ngIf=\"isShow2\"\r\n                          (click)=\"togglePasswordText2()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          *ngIf=\"!isShow2\"\r\n                          (click)=\"toggleTextPassword2()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye-off\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        slot=\"start\"\r\n                        name=\"key-outline\"\r\n                      ></ion-icon>\r\n                      <ion-label color=\"light\" position=\"floating\"\r\n                        >تکرار رمز جدید</ion-label\r\n                      >\r\n                      <ion-input\r\n                        placeholder=\"رمز جدید را وارد مجدد کنید\"\r\n                        formControlName=\"rePassword\"\r\n                        [type]=\"inputType3\"\r\n                      ></ion-input>\r\n\r\n                      <ion-buttons slot=\"end\">\r\n                        <ion-button\r\n                          *ngIf=\"isShow3\"\r\n                          (click)=\"togglePasswordText3()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          *ngIf=\"!isShow3\"\r\n                          (click)=\"toggleTextPassword3()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            color=\"medium\"\r\n                            name=\"eye-off\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-item>\r\n                    <ion-button\r\n                      [disabled]=\"!changePasswordForm.valid\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      type=\"submit\"\r\n                      shape=\"round\"\r\n                      color=\"success\"\r\n                    >\r\n                      تغییر رمز عبور\r\n                    </ion-button>\r\n                  </ion-list>\r\n                </form>\r\n                <ion-list\r\n                  *ngIf=\"selected == 4 && payShowHistories && payHistories\"\r\n                >\r\n                  <ion-list-header>\r\n                    <ion-label>تاریخچه پرداخت</ion-label>\r\n                    <ion-button\r\n                      (click)=\"payShowHistories = false\"\r\n                      color=\"danger\"\r\n                      >بستن</ion-button\r\n                    >\r\n                  </ion-list-header>\r\n                  <div *ngIf=\"payHistories.payHistories\">\r\n                    <section *ngIf=\"payHistories.payHistories.length > 0\">\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId > 3 &&\r\n                                payHistories.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage2(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId > 3 &&\r\n                                payHistories.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(\r\n                                  payHistories.pageCount\r\n                                );\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"payHistories.pageId == page\"\r\n                                *ngIf=\"\r\n                                  payHistories.pageId <= i + 3 &&\r\n                                  payHistories.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  payHistories.pageId == page\r\n                                    ? 'clear'\r\n                                    : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == payHistories.pageId\r\n                                    ? 'danger'\r\n                                    : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage2(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId + 2 < payHistories.pageCount\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId + 2 < payHistories.pageCount\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage2(payHistories.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ payHistories.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n\r\n                      <ion-card\r\n                        *ngFor=\"let history of payHistories.payHistories\"\r\n                      >\r\n                        <ion-item>\r\n                          <ion-label>کد تراکنش: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ history.id }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>وضعیت: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{\r\n                              history.isDelete\r\n                                ? 'danger'\r\n                                : history.isSuccess\r\n                                ? 'success'\r\n                                : 'warning'\r\n                            }}\"\r\n                          >\r\n                            {{\r\n                              history.isDelete\r\n                                ? \"منقضی شده\"\r\n                                : history.isSuccess\r\n                                ? \"انجام شده\"\r\n                                : \"درحال بررسی\"\r\n                            }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>تاریخ: </ion-label>\r\n                          <ion-text color=\"medium\">\r\n                            {{ history.createDate | persianDate }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>ساعت: </ion-label>\r\n                          <ion-text color=\"medium\">\r\n                            {{ getTime(history.createDate) }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>مبلغ: </ion-label>\r\n                          <ion-text color=\"light\">\r\n                            {{ history.price | rial }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n                      </ion-card>\r\n\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId > 3 &&\r\n                                payHistories.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage2(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId > 3 &&\r\n                                payHistories.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(\r\n                                  payHistories.pageCount\r\n                                );\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"payHistories.pageId == page\"\r\n                                *ngIf=\"\r\n                                  payHistories.pageId <= i + 3 &&\r\n                                  payHistories.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  payHistories.pageId == page\r\n                                    ? 'clear'\r\n                                    : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == payHistories.pageId\r\n                                    ? 'danger'\r\n                                    : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage2(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId + 2 < payHistories.pageCount\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                payHistories.pageId + 2 < payHistories.pageCount\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage2(payHistories.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ payHistories.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </section>\r\n                  </div>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 4 && courseList\">\r\n                  <!-- <ion-list-header *ngIf=\"!payShowHistories\">\r\n                    <ion-button (click)=\"ShowPayHistories()\" color=\"warning\"\r\n                      >مشاهده تاریخچه پرداخت</ion-button\r\n                    >\r\n                  </ion-list-header> -->\r\n                  <ion-item\r\n                    *ngFor=\"let course of courseList; let i = index\"\r\n                    button\r\n                    [routerLink]=\"['/c', course.id]\"\r\n                  >\r\n                    <ion-label style=\"font-size: 12px\">{{\r\n                      i + 1 + \"- \" + course.name\r\n                    }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 13 && productList\">\r\n                  <!-- <ion-list-header *ngIf=\"!payShowHistories2\">\r\n                    <ion-button (click)=\"ShowPayHistories2()\" color=\"warning\"\r\n                      >مشاهده تاریخچه پرداخت</ion-button\r\n                    >\r\n                  </ion-list-header> -->\r\n                  <ion-item\r\n                    *ngFor=\"let product of productList; let i = index\"\r\n                    button\r\n                    [routerLink]=\"['/p', product.id]\"\r\n                  >\r\n                    <ion-label style=\"font-size: 12px\">{{\r\n                      i + 1 + \"- \" + product.name\r\n                    }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 5 && courseLiked\">\r\n                  <ion-item\r\n                    *ngFor=\"let course of courseLiked; let i = index\"\r\n                    button\r\n                    [routerLink]=\"['/c', course.id]\"\r\n                  >\r\n                    <ion-label style=\"font-size: 12px\">{{\r\n                      i + 1 + \"- \" + course.name\r\n                    }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 16 && productLiked\">\r\n                  <ion-item\r\n                    *ngFor=\"let course of productLiked; let i = index\"\r\n                    button\r\n                    [routerLink]=\"['/p', course.id]\"\r\n                  >\r\n                    <ion-label style=\"font-size: 12px\">{{\r\n                      i + 1 + \"- \" + course.name\r\n                    }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 6 && articleLiked\">\r\n                  <ion-item\r\n                    *ngFor=\"let article of articleLiked; let i = index\"\r\n                    button\r\n                    [routerLink]=\"['/a', article.id]\"\r\n                  >\r\n                    <ion-label style=\"font-size: 12px\">{{\r\n                      i + 1 + \"- \" + article.name\r\n                    }}</ion-label>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-list *ngIf=\"selected == 7 && filteredQuestions\">\r\n                  <section *ngIf=\"filteredQuestions.questions\">\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId > 2 &&\r\n                              filteredQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage3(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId > 2 &&\r\n                              filteredQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray3(\r\n                                filteredQuestions.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"filteredQuestions.pageId == page\"\r\n                              *ngIf=\"\r\n                                filteredQuestions.pageId <= i + 2 &&\r\n                                filteredQuestions.pageId >= i\r\n                              \"\r\n                              fill=\"{{\r\n                                filteredQuestions.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == filteredQuestions.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage3(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId + 1 <\r\n                              filteredQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId + 1 <\r\n                              filteredQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage3(filteredQuestions.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ filteredQuestions.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                    <ion-item\r\n                      *ngFor=\"\r\n                        let question of filteredQuestions.questions;\r\n                        let i = index\r\n                      \"\r\n                      button\r\n                      routerLink=\"{{ '/Questions/' + question.courseId }}\"\r\n                      [queryParams]=\"{\r\n                        questionid: question.id,\r\n                        h: question.isPrivate\r\n                      }\"\r\n                    >\r\n                      <ion-label style=\"font-size: 12px\">{{\r\n                        i + 1 + \"- \" + question.title\r\n                      }}</ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ question.createDate | persianDate }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId > 2 &&\r\n                              filteredQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage3(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId > 2 &&\r\n                              filteredQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray3(\r\n                                filteredQuestions.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"filteredQuestions.pageId == page\"\r\n                              *ngIf=\"\r\n                                filteredQuestions.pageId <= i + 2 &&\r\n                                filteredQuestions.pageId >= i\r\n                              \"\r\n                              fill=\"{{\r\n                                filteredQuestions.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == filteredQuestions.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage3(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId + 1 <\r\n                              filteredQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredQuestions.pageId + 1 <\r\n                              filteredQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage3(filteredQuestions.pageCount)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ filteredQuestions.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </section>\r\n                </ion-list>\r\n\r\n                <ion-list *ngIf=\"selected == 17 && filteredProductQuestions\">\r\n                  <section *ngIf=\"filteredProductQuestions.questions\">\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId > 2 &&\r\n                              filteredProductQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage17(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId > 2 &&\r\n                              filteredProductQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray3(\r\n                                filteredProductQuestions.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"\r\n                                filteredProductQuestions.pageId == page\r\n                              \"\r\n                              *ngIf=\"\r\n                                filteredProductQuestions.pageId <= i + 2 &&\r\n                                filteredProductQuestions.pageId >= i\r\n                              \"\r\n                              fill=\"{{\r\n                                filteredProductQuestions.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == filteredProductQuestions.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage17(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId + 1 <\r\n                              filteredProductQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId + 1 <\r\n                              filteredProductQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"\r\n                                goPage17(filteredProductQuestions.pageCount)\r\n                              \"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ filteredProductQuestions.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                    <ion-item\r\n                      *ngFor=\"\r\n                        let question of filteredProductQuestions.questions;\r\n                        let i = index\r\n                      \"\r\n                      button\r\n                      routerLink=\"{{\r\n                        '/ProductQuestions/' + question.productId\r\n                      }}\"\r\n                      [queryParams]=\"{\r\n                        questionid: question.id,\r\n                        h: question.isPrivate\r\n                      }\"\r\n                    >\r\n                      <ion-label style=\"font-size: 12px\">{{\r\n                        i + 1 + \"- \" + question.title\r\n                      }}</ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ question.createDate | persianDate }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n\r\n                    <ion-grid dir=\"rtl\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId > 2 &&\r\n                              filteredProductQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"goPage17(1)\"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              1\r\n                            </ion-button>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId > 2 &&\r\n                              filteredProductQuestions.pageCount > 2\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngFor=\"\r\n                              let page of MakePageCountArray3(\r\n                                filteredProductQuestions.pageCount\r\n                              );\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              size=\"small\"\r\n                              [disabled]=\"\r\n                                filteredProductQuestions.pageId == page\r\n                              \"\r\n                              *ngIf=\"\r\n                                filteredProductQuestions.pageId <= i + 2 &&\r\n                                filteredProductQuestions.pageId >= i\r\n                              \"\r\n                              fill=\"{{\r\n                                filteredProductQuestions.pageId == page\r\n                                  ? 'clear'\r\n                                  : 'solid'\r\n                              }}\"\r\n                              color=\"{{\r\n                                page == filteredProductQuestions.pageId\r\n                                  ? 'danger'\r\n                                  : 'primary'\r\n                              }}\"\r\n                              (click)=\"goPage17(page)\"\r\n                              >{{ page }}</ion-button\r\n                            >\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId + 1 <\r\n                              filteredProductQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-text color=\"primary\"> ... </ion-text>\r\n                          </span>\r\n\r\n                          <span\r\n                            *ngIf=\"\r\n                              filteredProductQuestions.pageId + 1 <\r\n                              filteredProductQuestions.pageCount\r\n                            \"\r\n                          >\r\n                            <ion-button\r\n                              (click)=\"\r\n                                goPage17(filteredProductQuestions.pageCount)\r\n                              \"\r\n                              size=\"small\"\r\n                              fill=\"solid\"\r\n                              color=\"primary\"\r\n                            >\r\n                              {{ filteredProductQuestions.pageCount }}\r\n                            </ion-button>\r\n                          </span>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                  </section>\r\n                </ion-list>\r\n\r\n                <section *ngIf=\"selected == 8\">\r\n                  <form\r\n                    [formGroup]=\"socialForm\"\r\n                    (ngSubmit)=\"onChangeSocial()\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"instagram\"\r\n                          slot=\"start\"\r\n                          name=\"logo-instagram\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"instagram\" position=\"floating\"\r\n                          >اینستاگرام</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آی دی اینستاگرام\"\r\n                          formControlName=\"instagram\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"call-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"success\" position=\"floating\"\r\n                          >واتساپ</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"whatsApp\"\r\n                          type=\"text\"\r\n                          placeholder=\"شماره واتساپ\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"telegram\"\r\n                          slot=\"start\"\r\n                          name=\"paper-plane-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"telegram\" position=\"floating\"\r\n                          >تلگرام</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آی دی تلگرام\"\r\n                          formControlName=\"telegram\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"twitter\"\r\n                          slot=\"start\"\r\n                          name=\"logo-linkedin\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"twitter\" position=\"floating\"\r\n                          >لینکدیان</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آی دی لینکدیان\"\r\n                          formControlName=\"linkedIn\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"discord\"\r\n                          slot=\"start\"\r\n                          name=\"browsers-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"discord\" position=\"floating\"\r\n                          >سایت</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آدرس سایت\"\r\n                          formControlName=\"site\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"warning\"\r\n                          slot=\"start\"\r\n                          name=\"newspaper-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"warning\" position=\"floating\"\r\n                          >بیوگرافی</ion-label\r\n                        >\r\n                        <ion-textarea\r\n                          placeholder=\"رزومه و بیوگرافی\"\r\n                          formControlName=\"resume\"\r\n                          autoGrow=\"true\"\r\n                        ></ion-textarea>\r\n                      </ion-item>\r\n                      <ion-button\r\n                        [disabled]=\"!socialForm.valid\"\r\n                        class=\"ion-margin\"\r\n                        type=\"submit\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"success\"\r\n                      >\r\n                        {{ addMode ? \"درج کردن\" : \"ویرایش کردن\" }}\r\n                      </ion-button>\r\n                    </ion-list>\r\n                  </form>\r\n                </section>\r\n                <section *ngIf=\"selected == 9\">\r\n                  <section *ngIf=\"userDetail\">\r\n                    <ion-item *ngIf=\"userDetail.isVerify\">\r\n                      <ion-label class=\"text-center\"\r\n                        >اطلاعات شما تایید شده</ion-label\r\n                      >\r\n                      <ion-icon\r\n                        slot=\"start\"\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"!userDetail.isVerify\">\r\n                      <ion-label class=\"text-center\"\r\n                        >اطلاعات شما هنوز تایید نشده</ion-label\r\n                      >\r\n                      <ion-icon\r\n                        slot=\"start\"\r\n                        color=\"danger\"\r\n                        name=\"close-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </section>\r\n                  <form\r\n                    [formGroup]=\"detailForm\"\r\n                    (ngSubmit)=\"presentAlertConfirm()\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"twitter\"\r\n                          slot=\"start\"\r\n                          name=\"person-circle-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"نام را وارد کنید\"\r\n                          formControlName=\"name\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"twitter\"\r\n                          slot=\"start\"\r\n                          name=\"people-circle-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام خانوادگی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"family\"\r\n                          type=\"text\"\r\n                          placeholder=\"نام خانوادگی را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"telegram\"\r\n                          slot=\"start\"\r\n                          name=\"person-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >نام پدر</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"fatherName\"\r\n                          type=\"text\"\r\n                          placeholder=\"نام پدر را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item> -->\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"discord\"\r\n                          slot=\"start\"\r\n                          name=\"journal-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >کد ملی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"nationalCode\"\r\n                          type=\"text\"\r\n                          placeholder=\"کد ملی را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"discord\"\r\n                          slot=\"start\"\r\n                          name=\"journal-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >شماره شناسنامه</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"identificationCode\"\r\n                          type=\"text\"\r\n                          placeholder=\"شماره شناسنامه را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"location-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >محل صدور</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"placeOfIssue\"\r\n                          type=\"text\"\r\n                          placeholder=\"محل صدور را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"secondary\"\r\n                          slot=\"start\"\r\n                          name=\"location-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >محل تولد</ion-label\r\n                        >\r\n                        <ion-input\r\n                          formControlName=\"placeOfBirth\"\r\n                          type=\"text\"\r\n                          placeholder=\"محل تولد را وارد کنید\"\r\n                        ></ion-input>\r\n                      </ion-item> -->\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"calendar-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label position=\"floating\" color=\"light\"\r\n                          >تاریخ تولد شمسی</ion-label\r\n                        >\r\n                        <ion-datetime\r\n                          min=\"1300-01-01\"\r\n                          max=\"1420-01-01\"\r\n                          formControlName=\"birthDate\"\r\n                          display-format=\"YYYY.MM.DD\"\r\n                        ></ion-datetime>\r\n                      </ion-item> -->\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"call-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >شماره موبایل</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"موبایل را وارد کنید\"\r\n                          formControlName=\"phoneNumber\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"warning\"\r\n                          slot=\"start\"\r\n                          name=\"barcode-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >کدپستی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"کدپستی را وارد کنید\"\r\n                          formControlName=\"postCode\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item> -->\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"danger\"\r\n                          slot=\"start\"\r\n                          name=\"location-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >آدرس</ion-label\r\n                        >\r\n                        <ion-textarea\r\n                          autoGrow=\"true\"\r\n                          placeholder=\"آدرس را وارد کنید\"\r\n                          formControlName=\"address\"\r\n                        ></ion-textarea>\r\n                      </ion-item> -->\r\n                      <ion-item>\r\n                        <ion-icon\r\n                          color=\"light\"\r\n                          slot=\"start\"\r\n                          name=\"link-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >تصویر کارت ملی</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آدرس تصویر کارت ملی را وارد کنید\"\r\n                          formControlName=\"nationalImage\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item>\r\n                      <!-- <ion-item>\r\n                        <ion-icon\r\n                          color=\"light\"\r\n                          slot=\"start\"\r\n                          name=\"link-outline\"\r\n                        ></ion-icon>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >تصویر شناسنامه</ion-label\r\n                        >\r\n                        <ion-input\r\n                          placeholder=\"آدرس تصویر شناسنامه را وارد کنید\"\r\n                          formControlName=\"identificationImage\"\r\n                          type=\"text\"\r\n                        ></ion-input>\r\n                      </ion-item> -->\r\n                      <ion-button\r\n                        [disabled]=\"!detailForm.valid\"\r\n                        class=\"ion-margin\"\r\n                        type=\"submit\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"success\"\r\n                      >\r\n                        {{ addMode ? \"درج کردن\" : \"ویرایش کردن\" }}\r\n                      </ion-button>\r\n                    </ion-list>\r\n                  </form>\r\n                  <ion-item>\r\n                    <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"arrow-down-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <div class=\"h_iframe-aparat_embed_frame\">\r\n                    <span class=\"video-span\"></span\r\n                    ><iframe\r\n                      [src]=\"checkURL2()\"\r\n                      title=\"ویدیو آموزش آزمون دوره\"\r\n                      allowfullscreen=\"true\"\r\n                      webkitallowfullscreen=\"true\"\r\n                      mozallowfullscreen=\"true\"\r\n                    ></iframe>\r\n                  </div>\r\n\r\n                  <ion-item>\r\n                    <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                    <a\r\n                      class=\"decoration-none\"\r\n                      [href]=\"checkVideoUrl2()\"\r\n                      target=\"_blank\"\r\n                      title=\"ویدیو آموزش آزمون دوره\"\r\n                      ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"icon-only\"\r\n                          name=\"download-outline\"\r\n                        ></ion-icon> </ion-button\r\n                    ></a>\r\n                  </ion-item>\r\n\r\n                  <ion-textarea>\r\n                    <h4>راهنمای تایید هویت:</h4>\r\n                    برای صدور مدرک و اعتبار سنجی آن الزامی است که اطلاعات هویتی\r\n                    خود را بطور دقیق وارد نمایید تا در زمان تایید و صدور مدرک\r\n                    دچار مشکل نشوید. برای اپلود تصویر کارت ملی و صفحه اول\r\n                    شناسنامه میباید از سرور های آپلود استفاده نمایید و بعد از\r\n                    بارگزاری و آپلود عکس در سایت مربوطه، آدرس اینترنتی عکس را\r\n                    کپی کرده و در سایت اول آموز، در قسمت آدرس تصویر کارت ملی\r\n                    هویت کاربر وارد نمایید. جهت اطلاعات بیشتر لطفا ویدیو آموزشی\r\n                    را تماشا کنید.\r\n                    <h4>لیست برخی سایت های آپلود:</h4>\r\n                    <ul>\r\n                      <li>uupload.ir</li>\r\n                      <li>picofile.com</li>\r\n                      <li>uplooder.net</li>\r\n                    </ul>\r\n                  </ion-textarea>\r\n                </section>\r\n                <section *ngIf=\"selected == 10\" dir=\"rtl\">\r\n                  <div *ngIf=\"exams != null && exams.exams != null\">\r\n                    <div *ngIf=\"exams.exams.length > 0\">\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage4(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(exams.pageCount);\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"exams.pageId == page\"\r\n                                *ngIf=\"\r\n                                  exams.pageId <= i + 3 && exams.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  exams.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == exams.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage4(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-button\r\n                                (click)=\"goPage4(exams.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ exams.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n\r\n                      <ion-card *ngFor=\"let exam of exams.exams\">\r\n                        <ion-card-header>\r\n                          <ion-card-subtitle\r\n                            >تاریخ آزمون:\r\n                            {{ exam.startTime | persianDate }}\r\n                            {{\r\n                              \" - \" + getTime(exam.startTime)\r\n                            }}</ion-card-subtitle\r\n                          >\r\n                          <ion-card-title\r\n                            class=\"text-center link-pointer\"\r\n                            routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                            >{{ exam.courseName }}</ion-card-title\r\n                          >\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-item>\r\n                            <ion-label>کد آزمون:</ion-label>\r\n                            <ion-text> {{ exam.examId }} </ion-text>\r\n                            <ion-icon\r\n                              slot=\"start\"\r\n                              name=\"key-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>سطح آزمون:</ion-label>\r\n                            <ion-text> {{ exam.level }} </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"cellular-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد سوالات:</ion-label>\r\n                            <ion-text> 16 </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"grid-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                            <ion-text>\r\n                              {{ exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"success\"\r\n                              slot=\"start\"\r\n                              name=\"checkbox-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                            <ion-text>\r\n                              {{ 16 - exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"danger\"\r\n                              slot=\"start\"\r\n                              name=\"close-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-text *ngIf=\"exam.isPass\"\r\n                              >شما در این آزمون قبول شدید</ion-text\r\n                            >\r\n                            <ion-text *ngIf=\"!exam.isPass\"\r\n                              >شما در این آزمون قبول نشدید</ion-text\r\n                            >\r\n                            <ion-icon\r\n                              *ngIf=\"exam.isPass\"\r\n                              color=\"success\"\r\n                              slot=\"start\"\r\n                              name=\"checkmark-circle-outline\"\r\n                            ></ion-icon>\r\n                            <ion-icon\r\n                              *ngIf=\"!exam.isPass\"\r\n                              color=\"danger\"\r\n                              slot=\"start\"\r\n                              name=\"close-circle-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <!-- <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegree(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (PDF)\r\n                          </ion-button> -->\r\n                          <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegreeAsPng(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (PNG)\r\n                          </ion-button>\r\n                          <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegreeAsJpeg(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (Jpeg)\r\n                          </ion-button>\r\n                          <br />\r\n                          <div\r\n                            *ngIf=\"\r\n                              isBase64Degree &&\r\n                              base64DegreeExamId == exam.examId\r\n                            \"\r\n                            class=\"text-center\"\r\n                          >\r\n                            <ion-text color=\"warning\">\r\n                              <h3>برای دانلود روی عکس کلیک کنید</h3>\r\n                            </ion-text>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                            class=\"text-center\"\r\n                          >\r\n                            <!-- <ion-button\r\n                              color=\"warning\"\r\n                              (click)=\"onSave(exam.examId)\"\r\n                              expand=\"block\"\r\n                              fill=\"solid\"\r\n                              shape=\"round\"\r\n                            >\r\n                              دانلود مدرک\r\n                            </ion-button> -->\r\n                            <ion-text color=\"warning\">\r\n                              <h3>\r\n                                اپلیکیشن قابلیت دانلود ندارد. وارد سایت شوید\r\n                              </h3>\r\n                            </ion-text>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"\r\n                              isBase64Degree &&\r\n                              base64DegreeExamId == exam.examId\r\n                            \"\r\n                          >\r\n                            <a\r\n                              (click)=\"onSave(exam.examId)\"\r\n                              class=\"link-pointer\"\r\n                              ><ion-img\r\n                                class=\"link-pointer\"\r\n                                [src]=\"base64Degree\"\r\n                              ></ion-img\r\n                            ></a>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                          >\r\n                            <!-- <a [href]=\"base64DegreeUrl\" target=\"_blank\">لینک</a> -->\r\n                            <ion-img [src]=\"base64Degree\"></ion-img>\r\n                          </div>\r\n                          <!-- <iframe\r\n                            height=\"200\"\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                            [src]=\"base64DegreeUrl\"\r\n                            title=\"مدرک آزمون\"\r\n                          ></iframe> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage4(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(exams.pageCount);\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"exams.pageId == page\"\r\n                                *ngIf=\"\r\n                                  exams.pageId <= i + 3 && exams.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  exams.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == exams.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage4(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-button\r\n                                (click)=\"goPage4(exams.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ exams.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </div>\r\n                  </div>\r\n                </section>\r\n                <section *ngIf=\"selected == 12\" dir=\"rtl\">\r\n                  <div *ngIf=\"exams != null && exams.exams != null\">\r\n                    <div *ngIf=\"exams.exams.length > 0\">\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage6(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(exams.pageCount);\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"exams.pageId == page\"\r\n                                *ngIf=\"\r\n                                  exams.pageId <= i + 3 && exams.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  exams.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == exams.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage6(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-button\r\n                                (click)=\"goPage6(exams.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ exams.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n\r\n                      <ion-card *ngFor=\"let exam of exams.exams\">\r\n                        <ion-card-header>\r\n                          <ion-card-subtitle\r\n                            >تاریخ آزمون:\r\n                            {{ exam.startTime | persianDate }}\r\n                            {{\r\n                              \" - \" + getTime(exam.startTime)\r\n                            }}</ion-card-subtitle\r\n                          >\r\n                          <ion-card-title\r\n                            class=\"text-center link-pointer\"\r\n                            routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                            >{{ exam.courseName }}</ion-card-title\r\n                          >\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-item>\r\n                            <ion-label>کد آزمون:</ion-label>\r\n                            <ion-text> {{ exam.examId }} </ion-text>\r\n                            <ion-icon\r\n                              slot=\"start\"\r\n                              name=\"key-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>سطح آزمون:</ion-label>\r\n                            <ion-text> {{ exam.level }} </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"cellular-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد سوالات:</ion-label>\r\n                            <ion-text> 20 </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"grid-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                            <ion-text>\r\n                              {{ exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"success\"\r\n                              slot=\"start\"\r\n                              name=\"checkmark-circle-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                            <ion-text>\r\n                              {{ 20 - exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"danger\"\r\n                              slot=\"start\"\r\n                              name=\"close-circle-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n\r\n                          <ion-button\r\n                            color=\"warning\"\r\n                            *ngIf=\"selectedPlacementExamDetailId != exam.examId\"\r\n                            (click)=\"onPlacementExamDetailClick(exam.examId)\"\r\n                            expand=\"block\"\r\n                            fill=\"clear\"\r\n                            shape=\"round\"\r\n                          >\r\n                            جزئیات بیشتر\r\n                          </ion-button>\r\n\r\n                          <div\r\n                            *ngIf=\"\r\n                              placementExamDetail &&\r\n                              selectedPlacementExamDetailId == exam.examId\r\n                            \"\r\n                          >\r\n                            <ion-item>\r\n                              <ion-label class=\"link-pointer\" routerLink=\"/c/13\"\r\n                                >طرز کار موتور:\r\n                              </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  getPercent(13) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{ getPercent(13) + \"%\" }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                color=\"{{\r\n                                  getPercent(13) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                                slot=\"start\"\r\n                                name=\"{{\r\n                                  getPercent(13) < 50\r\n                                    ? 'close-outline'\r\n                                    : 'checkmark-outline'\r\n                                }}\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label class=\"link-pointer\" routerLink=\"/c/12\"\r\n                                >سنسور ها:\r\n                              </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  getPercent(12) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{ getPercent(12) + \"%\" }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                color=\"{{\r\n                                  getPercent(12) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                                slot=\"start\"\r\n                                name=\"{{\r\n                                  getPercent(12) < 50\r\n                                    ? 'close-outline'\r\n                                    : 'checkmark-outline'\r\n                                }}\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label class=\"link-pointer\" routerLink=\"/c/14\"\r\n                                >تعمیر موتور:\r\n                              </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  getPercent(14) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{ getPercent(14) + \"%\" }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                color=\"{{\r\n                                  getPercent(14) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                                slot=\"start\"\r\n                                name=\"{{\r\n                                  getPercent(14) < 50\r\n                                    ? 'close-outline'\r\n                                    : 'checkmark-outline'\r\n                                }}\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label class=\"link-pointer\" routerLink=\"/c/10\"\r\n                                >تقویت و تیونینگ:\r\n                              </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  getPercent(10) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{ getPercent(10) + \"%\" }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                color=\"{{\r\n                                  getPercent(10) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                                slot=\"start\"\r\n                                name=\"{{\r\n                                  getPercent(10) < 50\r\n                                    ? 'close-outline'\r\n                                    : 'checkmark-outline'\r\n                                }}\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label class=\"link-pointer\" routerLink=\"/c/1\"\r\n                                >ریمپ و ایسیو:\r\n                              </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  getPercent(1) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{ getPercent(1) + \"%\" }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                color=\"{{\r\n                                  getPercent(1) < 50 ? 'danger' : 'success'\r\n                                }}\"\r\n                                slot=\"start\"\r\n                                name=\"{{\r\n                                  getPercent(1) < 50\r\n                                    ? 'close-outline'\r\n                                    : 'checkmark-outline'\r\n                                }}\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage6(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"exams.pageId > 3 && exams.pageCount > 3\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(exams.pageCount);\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"exams.pageId == page\"\r\n                                *ngIf=\"\r\n                                  exams.pageId <= i + 3 && exams.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  exams.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == exams.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage6(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span *ngIf=\"exams.pageId + 2 < exams.pageCount\">\r\n                              <ion-button\r\n                                (click)=\"goPage6(exams.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ exams.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </div>\r\n                  </div>\r\n                </section>\r\n                <section *ngIf=\"selected == 14\" dir=\"rtl\">\r\n                  <ion-list *ngIf=\"selected == 14 && cartHistories\">\r\n                    <div *ngIf=\"cartHistories.cartHistories\">\r\n                      <section *ngIf=\"cartHistories.cartHistories.length > 0\">\r\n                        <ion-grid dir=\"rtl\">\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId > 3 &&\r\n                                  cartHistories.pageCount > 3\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  (click)=\"goPage7(1)\"\r\n                                  size=\"small\"\r\n                                  fill=\"solid\"\r\n                                  color=\"primary\"\r\n                                >\r\n                                  1\r\n                                </ion-button>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId > 3 &&\r\n                                  cartHistories.pageCount > 3\r\n                                \"\r\n                              >\r\n                                <ion-text color=\"primary\"> ... </ion-text>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngFor=\"\r\n                                  let page of MakePageCountArray(\r\n                                    cartHistories.pageCount\r\n                                  );\r\n                                  let i = index\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  size=\"small\"\r\n                                  [disabled]=\"cartHistories.pageId == page\"\r\n                                  *ngIf=\"\r\n                                    cartHistories.pageId <= i + 3 &&\r\n                                    cartHistories.pageId >= i - 1\r\n                                  \"\r\n                                  fill=\"{{\r\n                                    cartHistories.pageId == page\r\n                                      ? 'clear'\r\n                                      : 'solid'\r\n                                  }}\"\r\n                                  color=\"{{\r\n                                    page == cartHistories.pageId\r\n                                      ? 'danger'\r\n                                      : 'primary'\r\n                                  }}\"\r\n                                  (click)=\"goPage7(page)\"\r\n                                  >{{ page }}</ion-button\r\n                                >\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId + 2 <\r\n                                  cartHistories.pageCount\r\n                                \"\r\n                              >\r\n                                <ion-text color=\"primary\"> ... </ion-text>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId + 2 <\r\n                                  cartHistories.pageCount\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  (click)=\"goPage7(cartHistories.pageCount)\"\r\n                                  size=\"small\"\r\n                                  fill=\"solid\"\r\n                                  color=\"primary\"\r\n                                >\r\n                                  {{ cartHistories.pageCount }}\r\n                                </ion-button>\r\n                              </span>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n\r\n                        <section\r\n                          *ngFor=\"let cart of cartHistories.cartHistories\"\r\n                        >\r\n                          <ion-card>\r\n                            <ion-card-header *ngIf=\"!cart.isPay\">\r\n                              <ion-card-title class=\"text-center\"\r\n                                >سبد خرید جاری</ion-card-title\r\n                              >\r\n                            </ion-card-header>\r\n                            <ion-item>\r\n                              <ion-label>کد سبد خرید: </ion-label>\r\n                              <ion-text color=\"light\">\r\n                                {{ cart.id }}\r\n                              </ion-text>\r\n                            </ion-item>\r\n                            <ion-item *ngIf=\"cart.isPay\">\r\n                              <ion-label>مبلغ: </ion-label>\r\n                              <ion-text>\r\n                                {{ onGetCartPayPrice(cart) | rial }}\r\n                              </ion-text>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label>تاریخ: </ion-label>\r\n                              <ion-text color=\"medium\">\r\n                                {{ cart.createDate | persianDate }}\r\n                              </ion-text>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                              <ion-label>ساعت: </ion-label>\r\n                              <ion-text color=\"medium\">\r\n                                {{ getTime(cart.createDate) }}\r\n                              </ion-text>\r\n                            </ion-item>\r\n\r\n                            <ion-button\r\n                              class=\"full-width\"\r\n                              (click)=\"onGetOrderDegreeAsJpeg(cart.id)\"\r\n                              color=\"success\"\r\n                              expand=\"block\"\r\n                              fill=\"clear\"\r\n                              shape=\"round\"\r\n                            >\r\n                              درخواست فاکتور (Jpeg)\r\n                            </ion-button>\r\n                            <ion-button\r\n                              *ngIf=\"selectedCartId != cart.id\"\r\n                              color=\"warning\"\r\n                              (click)=\"onCartMoreDetailClick(cart.id)\"\r\n                              expand=\"block\"\r\n                              fill=\"clear\"\r\n                              shape=\"round\"\r\n                            >\r\n                              جزئیات بیشتر\r\n                            </ion-button>\r\n                            <ion-list *ngIf=\"selectedCartId == cart.id\">\r\n                              <ion-button\r\n                                color=\"danger\"\r\n                                (click)=\"selectedCartId = 0\"\r\n                                expand=\"block\"\r\n                                fill=\"clear\"\r\n                                shape=\"round\"\r\n                              >\r\n                                بستن جزئیات\r\n                              </ion-button>\r\n                              <ion-card\r\n                                *ngIf=\"\r\n                                  cart.courseCart && cart.courseCart.length > 0\r\n                                \"\r\n                              >\r\n                                <ion-card-header>\r\n                                  <ion-card-title class=\"text-center\"\r\n                                    >لیست دوره ها</ion-card-title\r\n                                  >\r\n                                </ion-card-header>\r\n                                <section\r\n                                  *ngFor=\"\r\n                                    let c of cart.courseCart;\r\n                                    let i = index\r\n                                  \"\r\n                                >\r\n                                  <ion-badge\r\n                                    class=\"ion-margin\"\r\n                                    color=\"telegram\"\r\n                                    mode=\"md\"\r\n                                    >{{ i + 1 }}</ion-badge\r\n                                  >\r\n                                  <ion-item>\r\n                                    <ion-label>کد دوره: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ c.courseId }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>نام دوره: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ c.courseName }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                </section>\r\n                              </ion-card>\r\n                              <ion-card\r\n                                *ngIf=\"\r\n                                  cart.productCart &&\r\n                                  cart.productCart.length > 0\r\n                                \"\r\n                              >\r\n                                <ion-card-header>\r\n                                  <ion-card-title class=\"text-center\"\r\n                                    >لیست محصولات</ion-card-title\r\n                                  >\r\n                                </ion-card-header>\r\n                                <section\r\n                                  *ngFor=\"\r\n                                    let p of cart.productCart;\r\n                                    let i = index\r\n                                  \"\r\n                                >\r\n                                  <ion-badge\r\n                                    class=\"ion-margin\"\r\n                                    color=\"telegram\"\r\n                                    mode=\"md\"\r\n                                    >{{ i + 1 }}</ion-badge\r\n                                  >\r\n                                  <ion-item>\r\n                                    <ion-label>وضعیت: </ion-label>\r\n                                    <ion-text color=\"success\">\r\n                                      {{ GetProductStatusByCode(p.statusCode) }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <div *ngIf=\"p.statusCode == 98\">\r\n                                    <ion-item>\r\n                                      <ion-text>{{\r\n                                        \"مبلغ: \" + (GetPayPrice(p) | rial)\r\n                                      }}</ion-text>\r\n                                    </ion-item>\r\n                                    <ion-button\r\n                                      class=\"full-width ion-margin\"\r\n                                      color=\"success\"\r\n                                      (click)=\"presentAlertPayAgainConfirm(p)\"\r\n                                      expand=\"block\"\r\n                                      fill=\"solid\"\r\n                                      shape=\"round\"\r\n                                    >\r\n                                      {{ \"پرداخت با درگاه آنلاین\" }}\r\n                                    </ion-button>\r\n                                    <ion-button\r\n                                      class=\"full-width ion-margin\"\r\n                                      color=\"success\"\r\n                                      (click)=\"presentAlertPayAgainConfirm2(p)\"\r\n                                      expand=\"block\"\r\n                                      fill=\"solid\"\r\n                                      shape=\"round\"\r\n                                    >\r\n                                      {{ \"پرداخت با کیف پول\" }}\r\n                                    </ion-button>\r\n                                  </div>\r\n                                  <ion-item *ngIf=\"p.description != ''\">\r\n                                    <ion-label>توضیحات: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ p.description }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>کد محصول: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ p.productId }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>نام محصول: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ p.productName }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item *ngIf=\"p.designTitle != ''\">\r\n                                    <ion-label>نام طرح: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ p.designTitle }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>تعداد: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ p.count }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n\r\n                                  <section\r\n                                    *ngIf=\"p.payAgain && p.payAgain.length > 0\"\r\n                                  >\r\n                                    <ion-list *ngFor=\"let pa of p.payAgain\">\r\n                                      <ion-card-header>\r\n                                        <ion-card-title class=\"text-center\"\r\n                                          >تاریخچه پرداخت مجدد</ion-card-title\r\n                                        >\r\n                                      </ion-card-header>\r\n                                      <ion-item>\r\n                                        <ion-text\r\n                                          color=\"{{\r\n                                            pa.isPay ? 'success' : 'danger'\r\n                                          }}\"\r\n                                        >\r\n                                          {{\r\n                                            pa.isPay\r\n                                              ? \"پرداخت شده\"\r\n                                              : \"پرداخت نشده\"\r\n                                          }}\r\n                                        </ion-text>\r\n                                      </ion-item>\r\n                                      <ion-item>\r\n                                        <ion-label color=\"success\">{{\r\n                                          pa.price | rial\r\n                                        }}</ion-label>\r\n                                      </ion-item>\r\n                                      <ion-card\r\n                                        *ngFor=\"let history of pa.payHistory\"\r\n                                      >\r\n                                        <ion-item>\r\n                                          <ion-label>کد تراکنش: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.id }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                          <ion-label>وضعیت: </ion-label>\r\n                                          <ion-text\r\n                                            color=\"{{\r\n                                              history.isDelete\r\n                                                ? 'danger'\r\n                                                : history.isSuccess\r\n                                                ? 'success'\r\n                                                : 'warning'\r\n                                            }}\"\r\n                                          >\r\n                                            {{\r\n                                              history.isDelete\r\n                                                ? \"منقضی شده\"\r\n                                                : history.isSuccess\r\n                                                ? \"انجام شده\"\r\n                                                : \"درحال بررسی\"\r\n                                            }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                          <ion-label>تاریخ: </ion-label>\r\n                                          <ion-text color=\"medium\">\r\n                                            {{\r\n                                              history.createDate | persianDate\r\n                                            }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                          <ion-label>ساعت: </ion-label>\r\n                                          <ion-text color=\"medium\">\r\n                                            {{ getTime(history.createDate) }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                          <ion-label>مبلغ: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.price | rial }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item>\r\n                                          <ion-label>نوع پرداخت: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.payType }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item\r\n                                          *ngIf=\"\r\n                                            history.refId != null &&\r\n                                            history.refId != ''\r\n                                          \"\r\n                                        >\r\n                                          <ion-label>کد رهگیری: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.refId }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item\r\n                                          *ngIf=\"\r\n                                            history.authority != null &&\r\n                                            history.authority != ''\r\n                                          \"\r\n                                        >\r\n                                          <ion-label>کد درگاه: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.authority }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item\r\n                                          *ngIf=\"history.statusCode != null\"\r\n                                        >\r\n                                          <ion-label>کد وضعیت: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.statusCode }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                        <ion-item\r\n                                          *ngIf=\"\r\n                                            history.description != null &&\r\n                                            history.description != ''\r\n                                          \"\r\n                                        >\r\n                                          <ion-label>توضیحات: </ion-label>\r\n                                          <ion-text color=\"light\">\r\n                                            {{ history.description }}\r\n                                          </ion-text>\r\n                                        </ion-item>\r\n                                      </ion-card>\r\n                                    </ion-list>\r\n                                  </section>\r\n                                </section>\r\n                              </ion-card>\r\n                              <ion-card-header\r\n                                *ngIf=\"\r\n                                  cart.payHistory && cart.payHistory.length > 0\r\n                                \"\r\n                              >\r\n                                <ion-card-title class=\"text-center\"\r\n                                  >تاریخچه پرداخت</ion-card-title\r\n                                >\r\n                              </ion-card-header>\r\n                              <ion-card *ngFor=\"let history of cart.payHistory\">\r\n                                <ion-item>\r\n                                  <ion-label>کد تراکنش: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.id }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                  <ion-label>وضعیت: </ion-label>\r\n                                  <ion-text\r\n                                    color=\"{{\r\n                                      history.isDelete\r\n                                        ? 'danger'\r\n                                        : history.isSuccess\r\n                                        ? 'success'\r\n                                        : 'warning'\r\n                                    }}\"\r\n                                  >\r\n                                    {{\r\n                                      history.isDelete\r\n                                        ? \"منقضی شده\"\r\n                                        : history.isSuccess\r\n                                        ? \"انجام شده\"\r\n                                        : \"درحال بررسی\"\r\n                                    }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                  <ion-label>تاریخ: </ion-label>\r\n                                  <ion-text color=\"medium\">\r\n                                    {{ history.createDate | persianDate }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                  <ion-label>ساعت: </ion-label>\r\n                                  <ion-text color=\"medium\">\r\n                                    {{ getTime(history.createDate) }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                  <ion-label>مبلغ: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.price | rial }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                  <ion-label>نوع پرداخت: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.payType }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item\r\n                                  *ngIf=\"\r\n                                    history.refId != null && history.refId != ''\r\n                                  \"\r\n                                >\r\n                                  <ion-label>کد رهگیری: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.refId }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item\r\n                                  *ngIf=\"\r\n                                    history.authority != null &&\r\n                                    history.authority != ''\r\n                                  \"\r\n                                >\r\n                                  <ion-label>کد درگاه: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.authority }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item *ngIf=\"history.statusCode != null\">\r\n                                  <ion-label>کد وضعیت: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.statusCode }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                                <ion-item\r\n                                  *ngIf=\"\r\n                                    history.description != null &&\r\n                                    history.description != ''\r\n                                  \"\r\n                                >\r\n                                  <ion-label>توضیحات: </ion-label>\r\n                                  <ion-text color=\"light\">\r\n                                    {{ history.description }}\r\n                                  </ion-text>\r\n                                </ion-item>\r\n                              </ion-card>\r\n                              <ion-card *ngIf=\"cart.address\">\r\n                                <ion-card-header>\r\n                                  <ion-card-title class=\"text-center\"\r\n                                    >آدرس ارسال</ion-card-title\r\n                                  >\r\n                                </ion-card-header>\r\n                                <section>\r\n                                  <ion-item>\r\n                                    <ion-label>نام: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.name }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>نام خانوادگی: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.family }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>موبایل: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.phoneNumber }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>تلفن ثابت: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.homePhoneNumber }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>شرکت: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.companyName }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>آدرس: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.address }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                  <ion-item>\r\n                                    <ion-label>کدپستی: </ion-label>\r\n                                    <ion-text color=\"light\">\r\n                                      {{ cart.address.postCode }}\r\n                                    </ion-text>\r\n                                  </ion-item>\r\n                                </section>\r\n                              </ion-card>\r\n                            </ion-list>\r\n                          </ion-card>\r\n                        </section>\r\n                        <ion-grid dir=\"rtl\">\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId > 3 &&\r\n                                  cartHistories.pageCount > 3\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  (click)=\"goPage7(1)\"\r\n                                  size=\"small\"\r\n                                  fill=\"solid\"\r\n                                  color=\"primary\"\r\n                                >\r\n                                  1\r\n                                </ion-button>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId > 3 &&\r\n                                  cartHistories.pageCount > 3\r\n                                \"\r\n                              >\r\n                                <ion-text color=\"primary\"> ... </ion-text>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngFor=\"\r\n                                  let page of MakePageCountArray(\r\n                                    cartHistories.pageCount\r\n                                  );\r\n                                  let i = index\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  size=\"small\"\r\n                                  [disabled]=\"cartHistories.pageId == page\"\r\n                                  *ngIf=\"\r\n                                    cartHistories.pageId <= i + 3 &&\r\n                                    cartHistories.pageId >= i - 1\r\n                                  \"\r\n                                  fill=\"{{\r\n                                    cartHistories.pageId == page\r\n                                      ? 'clear'\r\n                                      : 'solid'\r\n                                  }}\"\r\n                                  color=\"{{\r\n                                    page == cartHistories.pageId\r\n                                      ? 'danger'\r\n                                      : 'primary'\r\n                                  }}\"\r\n                                  (click)=\"goPage7(page)\"\r\n                                  >{{ page }}</ion-button\r\n                                >\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId + 2 <\r\n                                  cartHistories.pageCount\r\n                                \"\r\n                              >\r\n                                <ion-text color=\"primary\"> ... </ion-text>\r\n                              </span>\r\n\r\n                              <span\r\n                                *ngIf=\"\r\n                                  cartHistories.pageId + 2 <\r\n                                  cartHistories.pageCount\r\n                                \"\r\n                              >\r\n                                <ion-button\r\n                                  (click)=\"goPage7(cartHistories.pageCount)\"\r\n                                  size=\"small\"\r\n                                  fill=\"solid\"\r\n                                  color=\"primary\"\r\n                                >\r\n                                  {{ cartHistories.pageCount }}\r\n                                </ion-button>\r\n                              </span>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </section>\r\n                    </div>\r\n                  </ion-list>\r\n                </section>\r\n                <section *ngIf=\"selected == 11\" dir=\"rtl\">\r\n                  <div *ngIf=\"degrees != null && degrees.exams != null\">\r\n                    <div *ngIf=\"degrees.exams.length > 0\">\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"\r\n                                degrees.pageId > 3 && degrees.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage5(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                degrees.pageId > 3 && degrees.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(\r\n                                  degrees.pageCount\r\n                                );\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"degrees.pageId == page\"\r\n                                *ngIf=\"\r\n                                  degrees.pageId <= i + 3 &&\r\n                                  degrees.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  degrees.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == degrees.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage5(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"degrees.pageId + 2 < degrees.pageCount\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"degrees.pageId + 2 < degrees.pageCount\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage5(degrees.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ degrees.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n\r\n                      <ion-card *ngFor=\"let exam of degrees.exams\">\r\n                        <ion-card-header>\r\n                          <ion-card-subtitle\r\n                            >تاریخ آزمون:\r\n                            {{ exam.startTime | persianDate }}\r\n                            {{\r\n                              \" - \" + getTime(exam.startTime)\r\n                            }}</ion-card-subtitle\r\n                          >\r\n                          <ion-card-title\r\n                            class=\"text-center link-pointer\"\r\n                            routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                            >{{ exam.courseName }}</ion-card-title\r\n                          >\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-item>\r\n                            <ion-label>کد آزمون:</ion-label>\r\n                            <ion-text> {{ exam.examId }} </ion-text>\r\n                            <ion-icon\r\n                              slot=\"start\"\r\n                              name=\"key-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>سطح آزمون:</ion-label>\r\n                            <ion-text> {{ exam.level }} </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"cellular-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد سوالات:</ion-label>\r\n                            <ion-text> 16 </ion-text>\r\n                            <ion-icon\r\n                              color=\"warning\"\r\n                              slot=\"start\"\r\n                              name=\"grid-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                            <ion-text>\r\n                              {{ exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"success\"\r\n                              slot=\"start\"\r\n                              name=\"checkbox-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                            <ion-text>\r\n                              {{ 16 - exam.point }}\r\n                            </ion-text>\r\n                            <ion-icon\r\n                              color=\"danger\"\r\n                              slot=\"start\"\r\n                              name=\"close-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-text *ngIf=\"exam.isPass\"\r\n                              >شما در این آزمون قبول شدید</ion-text\r\n                            >\r\n                            <ion-text *ngIf=\"!exam.isPass\"\r\n                              >شما در این آزمون قبول نشدید</ion-text\r\n                            >\r\n                            <ion-icon\r\n                              *ngIf=\"exam.isPass\"\r\n                              color=\"success\"\r\n                              slot=\"start\"\r\n                              name=\"checkmark-circle-outline\"\r\n                            ></ion-icon>\r\n                            <ion-icon\r\n                              *ngIf=\"!exam.isPass\"\r\n                              color=\"danger\"\r\n                              slot=\"start\"\r\n                              name=\"close-circle-outline\"\r\n                            ></ion-icon>\r\n                          </ion-item>\r\n                          <!-- <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegree2(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (PDF)\r\n                          </ion-button> -->\r\n                          <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegree2AsPng(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (PNG)\r\n                          </ion-button>\r\n                          <ion-button\r\n                            class=\"full-width\"\r\n                            *ngIf=\"exam.isPass\"\r\n                            (click)=\"onGetDegree2AsJpeg(exam.examId)\"\r\n                            color=\"success\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            درخواست مدرک (Jpeg)\r\n                          </ion-button>\r\n                          <br />\r\n                          <div\r\n                            *ngIf=\"\r\n                              isBase64Degree &&\r\n                              base64DegreeExamId == exam.examId\r\n                            \"\r\n                            class=\"text-center\"\r\n                          >\r\n                            <ion-text color=\"warning\">\r\n                              <h3>برای دانلود روی عکس کلیک کنید</h3>\r\n                            </ion-text>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                            class=\"text-center\"\r\n                          >\r\n                            <ion-text color=\"warning\">\r\n                              <h3>\r\n                                اپلیکیشن قابلیت دانلود را ندارد. با مرورگر وارد\r\n                                سایت شوید\r\n                              </h3>\r\n                            </ion-text>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"\r\n                              isBase64Degree &&\r\n                              base64DegreeExamId == exam.examId\r\n                            \"\r\n                          >\r\n                            <a [href]=\"base64DegreeUrl\" target=\"_blank\"\r\n                              ><ion-img [src]=\"base64Degree\"></ion-img\r\n                            ></a>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                          >\r\n                            <!-- <a [href]=\"base64DegreeUrl\" target=\"_blank\">لینک</a> -->\r\n                            <ion-img [src]=\"base64Degree\"></ion-img>\r\n                          </div>\r\n                          <!-- <iframe\r\n                            height=\"200\"\r\n                            *ngIf=\"isIfram && base64DegreeExamId == exam.examId\"\r\n                            [src]=\"base64DegreeUrl\"\r\n                            title=\"مدرک آزمون\"\r\n                          ></iframe> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n\r\n                      <ion-grid dir=\"rtl\">\r\n                        <ion-row>\r\n                          <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                            <span\r\n                              *ngIf=\"\r\n                                degrees.pageId > 3 && degrees.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage5(1)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                1\r\n                              </ion-button>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                degrees.pageId > 3 && degrees.pageCount > 3\r\n                              \"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngFor=\"\r\n                                let page of MakePageCountArray(\r\n                                  degrees.pageCount\r\n                                );\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-button\r\n                                size=\"small\"\r\n                                [disabled]=\"degrees.pageId == page\"\r\n                                *ngIf=\"\r\n                                  degrees.pageId <= i + 3 &&\r\n                                  degrees.pageId >= i - 1\r\n                                \"\r\n                                fill=\"{{\r\n                                  degrees.pageId == page ? 'clear' : 'solid'\r\n                                }}\"\r\n                                color=\"{{\r\n                                  page == degrees.pageId ? 'danger' : 'primary'\r\n                                }}\"\r\n                                (click)=\"goPage4(page)\"\r\n                                >{{ page }}</ion-button\r\n                              >\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"degrees.pageId + 2 < degrees.pageCount\"\r\n                            >\r\n                              <ion-text color=\"primary\"> ... </ion-text>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"degrees.pageId + 2 < degrees.pageCount\"\r\n                            >\r\n                              <ion-button\r\n                                (click)=\"goPage5(degrees.pageCount)\"\r\n                                size=\"small\"\r\n                                fill=\"solid\"\r\n                                color=\"primary\"\r\n                              >\r\n                                {{ degrees.pageCount }}\r\n                              </ion-button>\r\n                            </span>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </div>\r\n                  </div>\r\n                </section>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_user-panel_user-panel_module_ts.js.map