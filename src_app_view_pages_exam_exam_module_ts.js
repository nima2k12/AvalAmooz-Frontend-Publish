"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_exam_exam_module_ts"],{

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

/***/ 51474:
/*!**************************************************!*\
  !*** ./src/app/data/model/course/CourseModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrUpdateCourseTagModel": () => (/* binding */ AddOrUpdateCourseTagModel),
/* harmony export */   "CourseLikeModel": () => (/* binding */ CourseLikeModel),
/* harmony export */   "CourseModel": () => (/* binding */ CourseModel),
/* harmony export */   "CourseTagModel": () => (/* binding */ CourseTagModel),
/* harmony export */   "CourseUserVoiceViewModel": () => (/* binding */ CourseUserVoiceViewModel),
/* harmony export */   "LikedCourseModel": () => (/* binding */ LikedCourseModel),
/* harmony export */   "UserCourseRateViewModel": () => (/* binding */ UserCourseRateViewModel)
/* harmony export */ });
class CourseModel {
    constructor(id, name, Price, OffPrice, ViewCount, ShortDescription, Description, ImageUrl, VideoUrl, CreateDate, LastUpdateDate, categoryIds, isActive) {
        this.id = id;
        this.name = name;
        this.price = Price;
        this.offPrice = OffPrice;
        this.viewCount = ViewCount;
        this.shortDescription = ShortDescription;
        this.description = Description;
        this.imageUrl = ImageUrl;
        this.videoUrl = VideoUrl;
        this.createDate = CreateDate;
        this.lastUpdateDate = LastUpdateDate;
        this.categoryIds = categoryIds;
        this.isActive = isActive;
    }
}
class UserCourseRateViewModel {
    constructor(id, buyerUserId, courseId, q1Rate, q2Rate, q3Rate, q4Rate, description, createDate, lastUpdateDate) {
        this.id = id;
        this.buyerUserId = buyerUserId;
        this.courseId = courseId;
        this.q1Rate = q1Rate;
        this.q2Rate = q2Rate;
        this.q3Rate = q3Rate;
        this.q4Rate = q4Rate;
        this.description = description;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class LikedCourseModel {
    constructor(id, name, Price, OffPrice, ViewCount, ShortDescription, Description, ImageUrl, VideoUrl, CreateDate, LastUpdateDate, categoryIds, isActive, liked, dissLiked) {
        this.id = id;
        this.name = name;
        this.price = Price;
        this.offPrice = OffPrice;
        this.viewCount = ViewCount;
        this.shortDescription = ShortDescription;
        this.description = Description;
        this.imageUrl = ImageUrl;
        this.videoUrl = VideoUrl;
        this.createDate = CreateDate;
        this.lastUpdateDate = LastUpdateDate;
        this.categoryIds = categoryIds;
        this.isActive = isActive;
        this.liked = liked;
        this.dissLiked = dissLiked;
    }
}
class CourseTagModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class CourseUserVoiceViewModel {
    constructor(id, buyerUserId, courseId, parentId, comment, userName, logoName, voiceAddress, videoAddress, imageAddress, userPhoto, isActive, isTop, isShow, isTeacherAnswer) {
        this.id = id;
        this.buyerUserId = buyerUserId;
        this.courseId = courseId;
        this.parentId = parentId;
        this.comment = comment;
        this.userName = userName;
        this.logoName = logoName;
        this.voiceAddress = voiceAddress;
        this.videoAddress = videoAddress;
        this.imageAddress = imageAddress;
        this.userPhoto = userPhoto;
        this.isActive = isActive;
        this.isTop = isTop;
        this.isShow = isShow;
        this.isTeacherAnswer = isTeacherAnswer;
    }
}
class CourseLikeModel {
    constructor(like, dissLike) {
        this.like = like;
        this.dissLike = dissLike;
    }
}
class AddOrUpdateCourseTagModel {
    constructor(courseId, courseTags) {
        this.courseId = courseId;
        this.courseTags = courseTags;
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

/***/ 45921:
/*!********************************************************!*\
  !*** ./src/app/view/pages/exam/exam-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamRoutingModule": () => (/* binding */ ExamRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam.component */ 65112);
/* harmony import */ var _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/guard/auth/auth.guard */ 91823);

/* eslint-disable max-len */




const routes = [
    { path: '', component: _exam_component__WEBPACK_IMPORTED_MODULE_0__.ExamComponent },
    {
        path: 'onlineExam',
        redirectTo: 'Exam',
        pathMatch: 'full'
    },
    {
        path: 'onlineExam/:id',
        redirectTo: 'OnlineExam/:id'
    },
    {
        path: 'onlineexam/:id',
        redirectTo: 'OnlineExam/:id'
    },
    {
        path: 'Onlineexam/:id',
        redirectTo: 'OnlineExam/:id'
    },
    {
        path: 'OnlineExam/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_exam_online-exam_online-exam_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/exam/online-exam/online-exam.module */ 37995)).then(m => m.OnlineExamModule),
        canActivate: [_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز | شرکت در آزمون آنلاین دوره‌های ابتدایی',
            description: 'آزمون آنلاین اول آموز؛ پاسخ به سوالات چهارگزینه‌ای سنجش تسلط بر روش‌های تدریس و دریافت گواهینامه معتبر.',
            ogUrl: 'http://localhost:4300/OnlineExam'
        }
    },
    {
        path: 'onlinePaymentExam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'onlinePaymentexam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'OnlinePaymentexam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'Onlinepaymentexam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'onlinepaymentexam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'onlinepaymentExam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'onlinePaymentExam/:id',
        redirectTo: 'OnlinePaymentExam/:id'
    },
    {
        path: 'OnlinePaymentExam/:id',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("src_app_view_pages_exam_online-payment-exam_online-payment-exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/exam/online-payment-exam/online-payment-exam.module */ 23603)).then(m => m.OnlinePaymentExamModule)
    },
    {
        path: 'OnlinepaymentExamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'OnlinepaymentexamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'OnlinePaymentexamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinePaymentexamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinePaymentExamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinepaymentExamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinepaymentExamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinePaymentExamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'OnlinePaymentExamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'OnlinePaymentexamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'Onlinepaymentexamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinepaymentexamphone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinepaymentexamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinepaymentExamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'onlinePaymentExamPhone/:id',
        redirectTo: 'OnlinePaymentExamPhone/:id'
    },
    {
        path: 'OnlinePaymentExamPhone/:id',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("src_app_view_pages_exam_online-payment-exam-phone_online-payment-exam-phone_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/exam/online-payment-exam-phone/online-payment-exam-phone.module */ 97263)).then(m => m.OnlinePaymentExamPhoneModule)
    }
];
let ExamRoutingModule = class ExamRoutingModule {
};
ExamRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ExamRoutingModule);



/***/ }),

/***/ 65112:
/*!***************************************************!*\
  !*** ./src/app/view/pages/exam/exam.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamComponent": () => (/* binding */ ExamComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _exam_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam.component.html?ngResource */ 3839);
/* harmony import */ var _exam_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component.scss?ngResource */ 4654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/G */ 67122);
/* harmony import */ var _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/model/course/CourseModel */ 51474);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/common/GAccount */ 6958);
/* harmony import */ var src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/data/model/course/ExamModel */ 7503);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/no-unused-expressions */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */














let ExamComponent = class ExamComponent {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, // private reCaptchaV3Service: ReCaptchaV3Service,
  sanitizer, fb, title, meta) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.fb = fb;
    this.title = title;
    this.meta = meta;
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
    this.windowWidth = 1000;
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.wallet = 0;
    this.selectedPay = '1';
    this.filteredCourses = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, 1, 20, '');
    this.courseSearch = '';
    this.selectedExamLevel = '1';
    this.notfound = false;
    this.selectedCourseId = 0;
    this.requestExamCount = 0;
    this.examPrice = 0;
    this.isCourseSelected = false;
    this.isPlacement = false;
    this.login = false;
    this.isCourseLoading = true;
    this.placementExamVideo = 'shwy833';
    this.courseExamVideo = 'shwy833';
    this.readMore = 'readMore';
    this.levelSelectInterfaceOptions = {
      header: 'انتخاب سطح آزمون',
      subHeader: 'سطح مورد نظر خود را برای شروع آزمون انتخاب کنید',
      cssClass: 'custom-exam-level-alert',
      okText: 'تایید و انتخاب',
      cancelText: 'انصراف'
    };
    _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  updateTitle(title = 'اول آموز - سامانه آزمون و سنجش ابتدایی') {
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'og:title',
      content: title
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: title
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: title
    });
  }

  updateOgUrl(url = 'http://localhost:4300/Exam') {
    this.meta.updateTag({
      name: 'og:url',
      content: url
    });
    this.meta.updateTag({
      name: 'twitter:url',
      content: url
    });
    this.meta.updateTag({
      name: 'og:image',
      content: 'http://localhost:4300/assets/icon/avalamooz.svg'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'http://localhost:4300/assets/icon/avalamooz.svg'
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'http://localhost:4300/assets/icon/avalamooz.svg'
    });
    this.meta.updateTag({
      name: 'og:image:alt',
      content: 'لوگو تست و آزمون اول آموز'
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'لوگو تست و آزمون اول آموز'
    });
  }

  updateDescription(desc = 'سامانه آزمون و سنجش اول آموز | ارزیابی مهارت‌های تدریس، آزمون‌های دانش‌آموزی و دریافت گواهی دوره‌های آموزشی ابتدایی') {
    this.meta.updateTag({
      name: 'description',
      content: desc
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: desc
    });
    this.meta.updateTag({
      name: 'og:description',
      content: desc
    });
    this.meta.updateTag({
      property: 'og:description',
      content: desc
    });
    this.meta.updateTag({
      itemprop: 'description',
      content: desc
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Discord;
    this.placementExamVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.PlacementExamVideo;
    this.courseExamVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.CourseExamVideo;
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.placementExamVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.placementExamVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkURL2() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.courseExamVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl2() {
    const url = 'https://www.aparat.com/v/' + this.courseExamVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ionViewWillEnter() {
    this.windowWidth = +window.innerWidth;
    this.isCourseSelected = false;
    this.login = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_9__.GAccount.IsLoggedIn();
    let filter;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id < 0) {
        this.updateTitle();
        this.updateOgUrl();
        this.updateDescription();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, 1, 20, this.courseSearch);
        this.courseService.GetExamCoursesByFilter(filter).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
            this.notfound = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else if (+id == 5 || +id == 0) {
        this.selectedCourseId = 5;
        this.isCourseLoading = true;
        this.isPlacement = true;
        this.isCourseSelected = false;

        if (this.login) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
          this.courseService.GetPlacementExamById().subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
              this.wallet = res.data.buyerUserWallet;
              this.course = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_4__.CourseModel(res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, 0, '', '', res.data.imageUrl, '', new Date(), new Date(), [], true);
              this.exam = new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(res.data.examId, res.data.isPass, res.data.isDone, res.data.isStart, res.data.isPay, res.data.level, res.data.title, res.data.description, res.data.point, res.data.startTime, res.data.endTime, res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, res.data.imageUrl, res.data.freeExamCount, res.data.requestExamCount, res.data.examPrice, res.data.examLevelCount);
              this.isCourseLoading = false;
            } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
              this.wallet = res.data.buyerUserWallet;
              this.course = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_4__.CourseModel(res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, 0, '', '', res.data.imageUrl, '', new Date(), new Date(), [], true);
              this.exam = new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(res.data.examId, res.data.isPass, res.data.isDone, res.data.isStart, res.data.isPay, res.data.level, res.data.title, res.data.description, res.data.point, res.data.startTime, res.data.endTime, res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, res.data.imageUrl, res.data.freeExamCount, res.data.requestExamCount, res.data.examPrice, res.data.examLevelCount);

              if (res.data.requestExamCount.length > 0) {
                const find = res.data.requestExamCount.find(e => e.level == +this.selectedExamLevel);

                if (find != null) {
                  this.requestExamCount = find.requestExamCount;
                } else {
                  this.requestExamCount = 0;
                }
              } else {
                this.requestExamCount = 0;
              }

              this.isCourseLoading = false;
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          });
        }
      } else {
        this.isCourseSelected = true;
        this.selectedCourseId = +id;

        if (this.login) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
          this.activatedRoute.queryParams.subscribe(queryParams => {
            if (this.login) {
              this.isCourseLoading = true;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
              const level = queryParams.level ? queryParams.level : 0;
              this.courseService.GetCourseExamById(this.selectedCourseId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
                  this.wallet = res.data.buyerUserWallet;
                  this.course = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_4__.CourseModel(res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, 0, '', '', res.data.imageUrl, '', new Date(), new Date(), [], true);
                  this.exam = new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(res.data.examId, res.data.isPass, res.data.isDone, res.data.isStart, res.data.isPay, res.data.level, res.data.title, res.data.description, res.data.point, res.data.startTime, res.data.endTime, res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, res.data.imageUrl, res.data.freeExamCount, res.data.requestExamCount, res.data.examPrice, res.data.examLevelCount);
                  this.isCourseLoading = false;
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
                  this.wallet = res.data.buyerUserWallet;
                  this.course = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_4__.CourseModel(res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, 0, '', '', res.data.imageUrl, '', new Date(), new Date(), [], true);
                  this.exam = new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(res.data.examId, res.data.isPass, res.data.isDone, res.data.isStart, res.data.isPay, res.data.level, res.data.title, res.data.description, res.data.point, res.data.startTime, res.data.endTime, res.data.courseId, res.data.courseName, res.data.coursePrice, res.data.courseOffPrice, res.data.imageUrl, res.data.freeExamCount, res.data.requestExamCount, res.data.examPrice, res.data.examLevelCount);

                  if (res.data.requestExamCount.length > 0) {
                    const find = res.data.requestExamCount.find(e => e.level == +this.selectedExamLevel);

                    if (find != null) {
                      this.requestExamCount = find.requestExamCount;
                    } else {
                      this.requestExamCount = 0;
                    }
                  } else {
                    this.requestExamCount = 0;
                  }

                  if (this.requestExamCount >= this.exam.freeExamCount) {
                    this.examPrice = this.exam.examPrice;
                  } else {
                    this.examPrice = 0;
                  }

                  this.isCourseLoading = false;
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }
          });
        }
      }
    });
  }

  onLevelChanged() {
    if (this.exam.requestExamCount.length > 0) {
      const find = this.exam.requestExamCount.find(e => e.level == +this.selectedExamLevel);

      if (find != null) {
        this.requestExamCount = find.requestExamCount;
      } else {
        this.requestExamCount = 0;
      }
    } else {
      this.requestExamCount = 0;
    }

    if (this.requestExamCount >= this.exam.freeExamCount) {
      this.examPrice = this.exam.examPrice;
    } else {
      this.examPrice = 0;
    }
  }

  selectLevel(level) {
    this.selectedExamLevel = level.toString();
    this.onLevelChanged();
  }

  presentAlertonStartExam() {
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
            _this.onStartExam();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReadMoreOrLess() {
    this.readMore == 'readMore' ? this.readMore = 'readLess' : this.readMore = 'readMore';
  }

  onStartExam() {
    this.router.navigateByUrl('/Exam/OnlineExam/' + this.exam.examId);
  }

  presentAlertonBeginExam() {
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
            _this2.onBeginExam();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertWallet() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'موجودی کیف پول کافی نیست',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'شارژ کیف پول',
          handler: () => {
            _this3.router.navigateByUrl('/UserPanel/1');
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertMakeFreeExam() {
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
            _this4.onMakePlacementExam();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPlacementClick() {// if (this.login) {
    //   SharedIonic.loading(this.loadingController);
    //   this.isCourseLoading = true;
    //   this.isPlacement = true;
    //   this.isCourseSelected = false;
    //   this.courseService.GetPlacementExamById().subscribe(
    //     res => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       if (res.status === GResponse.SuccessStatus) {
    //         this.wallet = res.data.buyerUserWallet;
    //         this.exam = new CourseExamViewModel(
    //           res.data.examId,
    //           res.data.isPass,
    //           res.data.isDone,
    //           res.data.isStart,
    //           res.data.isPay,
    //           res.data.level,
    //           res.data.title,
    //           res.data.description,
    //           res.data.point,
    //           res.data.startTime,
    //           res.data.endTime,
    //           res.data.courseId,
    //           res.data.courseName,
    //           res.data.coursePrice,
    //           res.data.courseOffPrice,
    //           res.data.imageUrl,
    //           res.data.freeExamCount,
    //           res.data.requestExamCount,
    //           res.data.examPrice,
    //           res.data.examLevelCount
    //         );
    //         this.isCourseLoading = false;
    //       } else if (res.status === GResponse.NotFoundStatus) {
    //         this.wallet = res.data.buyerUserWallet;
    //         this.course = new CourseModel(
    //           res.data.courseId,
    //           res.data.courseName,
    //           res.data.coursePrice,
    //           res.data.courseOffPrice,
    //           0,
    //           '',
    //           '',
    //           res.data.imageUrl,
    //           '',
    //           new Date(),
    //           new Date(),
    //           [],
    //           true);
    //         this.exam = new CourseExamViewModel(
    //           res.data.examId,
    //           res.data.isPass,
    //           res.data.isDone,
    //           res.data.isStart,
    //           res.data.isPay,
    //           res.data.level,
    //           res.data.title,
    //           res.data.description,
    //           res.data.point,
    //           res.data.startTime,
    //           res.data.endTime,
    //           res.data.courseId,
    //           res.data.courseName,
    //           res.data.coursePrice,
    //           res.data.courseOffPrice,
    //           res.data.imageUrl,
    //           res.data.freeExamCount,
    //           res.data.requestExamCount,
    //           res.data.examPrice,
    //           res.data.examLevelCount
    //         );
    //         if (res.data.requestExamCount.length > 0) {
    //           let find = res.data.requestExamCount.find(e => e.level == +this.selectedExamLevel);
    //           if (find != null) {
    //             this.requestExamCount = find.requestExamCount;
    //           } else {
    //             this.requestExamCount = 0;
    //           }
    //         } else {
    //           this.requestExamCount = 0;
    //         }
    //         this.isCourseLoading = false;
    //       }
    //     },
    //     err => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //     }
    //   );
    // }
  }

  onBeginExam() {
    if (this.exam.requestExamCount.length > 0) {
      const find = this.exam.requestExamCount.find(e => e.level == +this.selectedExamLevel);

      if (find != null) {
        this.requestExamCount = find.requestExamCount;
      } else {
        this.requestExamCount = 0;
      }
    } else {
      this.requestExamCount = 0;
    }

    if (this.requestExamCount >= this.exam.freeExamCount) {
      this.onPayExam();
    } else {
      this.onMakeFreeExam();
    }
  }

  onPayExam() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);

    if (this.selectedPay == '1') {
      if (_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid) {
        this.courseService.PhoneMakeExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(0, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.courseService.MakeExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(0, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }
    } else {
      if (this.wallet < this.exam.examPrice) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        this.presentAlertWallet();
        return;
      }

      this.courseService.MakeExamByWallet(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(this.exam.examId, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
          this.router.navigateByUrl('/Exam/OnlineExam/' + res.data.examId);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پرداخت با خطا مواجه شد');
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      });
    }
  }

  presentAlertonPayExam2() {
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
            _this5.onPayExam2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPayExam2() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);

    if (this.selectedPay == '1') {
      if (_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid) {
        this.courseService.PhonePayExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(this.exam.examId, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.courseService.PayExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(this.exam.examId, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.forwardUrl('https://zarinpal.com/pg/StartPay/' + res.data);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }
    } else {
      if (this.wallet < this.exam.examPrice) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        this.presentAlertWallet();
        return;
      }

      this.courseService.PayExamByWallet(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(this.exam.examId, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
          this.router.navigateByUrl('/Exam/OnlineExam/' + res.data.examId);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پرداخت با خطا مواجه شد');
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      });
    }
  }

  onMakeFreeExam() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.MakeFreeExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(0, false, false, false, false, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), this.exam.courseId, this.exam.courseName, this.exam.coursePrice, this.exam.courseOffPrice, '', this.exam.freeExamCount, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.router.navigateByUrl('/Exam/OnlineExam/' + res.data);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'امکان آزمون وجود ندارد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onMakePlacementExam() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.MakeFreePlacementExam(new src_app_data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_10__.CourseExamViewModel(0, false, false, false, true, +this.selectedExamLevel, '', '', 0, new Date(), new Date(), 5, '', 0, 0, '', 0, [], this.exam.examPrice, this.exam.examLevelCount)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.router.navigateByUrl('/Exam/OnlineExam/' + res.data);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'امکان آزمون وجود ندارد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  CheckBuy() {
    return _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.MyCourseIds.find(n => n == this.selectedCourseId) || this.course.price == 0 ? true : false;
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

  onClick(id) {
    this.router.navigate(['/Home', 'Search'], {
      queryParams: {
        categoryIds: [id],
        page: 1
      }
    });
  }

  goNextPage() {
    if (this.filteredCourses.endPage == null) {
      return;
    }

    if (this.filteredCourses.pageId < this.filteredCourses.endPage) {
      this.setQueryParams(+this.filteredCourses.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  setQueryParams(pageId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.content.scrollToTop(1500);
    this.courseService.GetCoursesByFilter(filter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
        this.notfound = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model;
  }

};

ExamComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Meta
}];

ExamComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
ExamComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-exam',
  template: _exam_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exam_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExamComponent);


/***/ }),

/***/ 80182:
/*!************************************************!*\
  !*** ./src/app/view/pages/exam/exam.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamModule": () => (/* binding */ ExamModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-routing.module */ 45921);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component */ 65112);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/course/shared-course.module */ 44704);
/* harmony import */ var _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/pipe/price.module */ 21448);










// import { NgxCaptchaModule } from 'ngx-captcha';




let ExamModule = class ExamModule {
};
ExamModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_exam_component__WEBPACK_IMPORTED_MODULE_2__.ExamComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExamRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__.PersianDateModule,
            _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_7__.PriceModule,
            _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__.SharedCourseModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            // NgxCaptchaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule
        ]
    })
], ExamModule);



/***/ }),

/***/ 4654:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/exam/exam.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.16);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --amber-glow: rgba(245, 158, 11, 0.18);\n  --emerald: #10b981;\n  --emerald-dark: #059669;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --sky: #0284c7;\n  --sky-light: #e0f2fe;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --surface-soft: #fbfaff;\n  --surface-muted: #f8fafc;\n  --surface-media: #f1f5f9;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", system-ui, sans-serif);\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f1eefb;\n  --ink-secondary: #cbd5e1;\n  --muted: #a6b2c6;\n  --purple: #c4b5fd;\n  --purple-dark: #a78bfa;\n  --purple-light: #302447;\n  --purple-hover: #40305d;\n  --purple-fill: #7c3aed;\n  --purple-fill-end: #6d28d9;\n  --purple-glow: rgba(167, 139, 250, 0.18);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: #3b2d19;\n  --amber-ink: #fde68a;\n  --on-amber: #291b05;\n  --emerald: #34d399;\n  --emerald-dark: #6ee7b7;\n  --emerald-light: #173a32;\n  --rose: #fda4af;\n  --rose-light: #422435;\n  --on-rose: #351322;\n  --sky: #7dd3fc;\n  --sky-light: #17354a;\n  --paper: #211d30;\n  --card-bg: #211d30;\n  --bg-canvas: #14111f;\n  --border-soft: #40364f;\n  --accent-border: #58466e;\n  --placeholder-ink: var(--muted);\n  --surface-soft: #292337;\n  --surface-muted: #241f31;\n  --surface-media: #302a3e;\n  --header-bg: rgba(28, 24, 41, 0.94);\n  --status-bg: rgba(33, 29, 48, 0.96);\n  --content-bg: rgba(33, 29, 48, 0.98);\n  --tab-hover-bg: rgba(196, 181, 253, 0.08);\n  --visual-purple-edge: rgba(48, 36, 71, 0.4);\n  --visual-amber-edge: rgba(59, 45, 25, 0.4);\n  --visual-rose-edge: rgba(66, 36, 53, 0.4);\n  --visual-emerald-edge: rgba(23, 58, 50, 0.4);\n  --collaboration-start: #302447;\n  --collaboration-end: #3b2d19;\n  --ion-background-color-rgb: 20, 17, 31;\n  --ion-text-color-rgb: 241, 238, 251;\n  --ion-item-background: var(--paper);\n  --ion-card-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n:host-context(.dark-theme) .header-search-bar input {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card, :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item {\n  background: var(--paper);\n  --background: var(--paper);\n  color: var(--ink);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-label[color=light] {\n  --ion-color-base: var(--ink);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea {\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --placeholder-opacity: 1;\n}\n\n:host-context(.dark-theme) ion-datetime {\n  --background: var(--paper);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .status-actions .btn.amber {\n  color: var(--on-amber);\n}\n\n:host-context(.dark-theme) .teacher-courses-panel .teacher-course-card .course-thumb-wrap .off-chip {\n  color: var(--on-rose);\n}\n\n:host-context(.dark-theme) .status-visual .code-display {\n  background-image: linear-gradient(135deg, var(--purple), var(--purple-dark));\n}\n\n:host-context(.dark-theme) .status-visual.amber .code-display {\n  background-image: linear-gradient(135deg, var(--amber), var(--amber-dark));\n}\n\n:host-context(.dark-theme) .status-visual.rose .code-display {\n  background-image: linear-gradient(135deg, var(--rose), #fb7185);\n}\n\n:host-context(.dark-theme) .status-visual.emerald .code-display {\n  background-image: linear-gradient(135deg, var(--emerald), var(--emerald-dark));\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input, textarea {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 10px;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.learning-header {\n  background: var(--header-bg, rgba(255, 255, 255, 0.94));\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1240px;\n  margin: auto;\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 72px;\n}\n\n.icon-button.menu-toggle {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid var(--accent-border, #ddd6fe);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.icon-button.menu-toggle ion-menu-button {\n  --color: var(--purple);\n}\n\n.icon-button.menu-toggle:hover {\n  background: var(--purple-fill, var(--purple));\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n  border-radius: 12px;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n  animation: sparkleRotate 6s ease-in-out infinite;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 20px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10.5px;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n}\n\n@media (max-width: 900px) {\n  .main-nav {\n    display: none;\n  }\n}\n\n.main-nav .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav .pill-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: inline-block;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.action-btn.primary {\n  background: linear-gradient(135deg, var(--purple-fill, var(--purple)), var(--purple-fill-end, var(--purple-dark)));\n  color: #fff;\n  box-shadow: 0 4px 12px var(--purple-glow);\n}\n\n.action-btn.primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px var(--purple-glow);\n}\n\n.action-btn.ghost {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.action-btn.ghost:hover {\n  background: var(--purple-hover, #e4ddfc);\n}\n\n.header-search-bar {\n  background: var(--surface-muted);\n  border-top: 1px solid var(--border-soft);\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: 1240px;\n  margin: 0 auto;\n}\n\n.header-search-bar .search-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  background: var(--paper);\n  border: 1px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 6px 14px;\n}\n\n.header-search-bar .search-input-wrap input {\n  border: 0;\n  outline: none;\n  width: 100%;\n  background: transparent;\n  font-size: 14px;\n}\n\n.common-page-content {\n  --background: var(--bg-canvas);\n  background: var(--bg-canvas);\n  display: flex;\n  flex-direction: column;\n}\n\n.common-page-wrapper {\n  position: relative;\n  min-height: calc(100vh - 180px);\n  padding: 36px 16px 64px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.backdrop-glows {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.backdrop-glows .glow-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.65;\n}\n\n.backdrop-glows .glow-purple {\n  width: 440px;\n  height: 440px;\n  background: rgba(167, 139, 250, 0.22);\n  top: -100px;\n  right: -100px;\n}\n\n.backdrop-glows .glow-amber {\n  width: 380px;\n  height: 380px;\n  background: rgba(251, 191, 36, 0.2);\n  bottom: -80px;\n  left: -80px;\n}\n\n.backdrop-glows .glow-emerald {\n  width: 320px;\n  height: 320px;\n  background: rgba(52, 211, 153, 0.16);\n  top: 40%;\n  left: 20%;\n}\n\n.floating-decor {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  font-size: 26px;\n  opacity: 0.85;\n  animation: floatSlow 4s ease-in-out infinite alternate;\n}\n\n.floating-decor.pencil {\n  top: 40px;\n  left: 8%;\n  animation-delay: 0s;\n  font-size: 32px;\n}\n\n.floating-decor.star {\n  top: 90px;\n  right: 10%;\n  animation-delay: 1.2s;\n  color: var(--amber);\n}\n\n.floating-decor.book {\n  bottom: 100px;\n  right: 8%;\n  animation-delay: 2.1s;\n  font-size: 30px;\n}\n\n.floating-decor.sparkle {\n  bottom: 80px;\n  left: 12%;\n  animation-delay: 0.8s;\n  color: var(--purple);\n}\n\n@media (max-width: 768px) {\n  .floating-decor {\n    display: none;\n  }\n}\n\n.status-card {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n  background: var(--status-bg, rgba(255, 255, 255, 0.96));\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  padding: 44px 36px 36px;\n  box-shadow: 0 4px 6px -1px rgba(99, 63, 163, 0.04), 0 20px 45px -10px rgba(99, 63, 163, 0.1);\n  text-align: center;\n  direction: rtl;\n}\n\n@media (max-width: 600px) {\n  .status-card {\n    padding: 32px 20px 28px;\n    border-radius: 24px;\n  }\n}\n\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 16px;\n  border-radius: 9999px;\n  font-size: 12.5px;\n  font-weight: 800;\n  margin-bottom: 24px;\n}\n\n.status-badge.rose {\n  background: var(--rose-light);\n  color: var(--rose);\n  border: 1px solid rgba(244, 63, 94, 0.2);\n}\n\n.status-badge.amber {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n}\n\n.status-badge.purple {\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid rgba(109, 40, 217, 0.2);\n}\n\n.status-badge.emerald {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n\n.status-badge .badge-icon {\n  font-size: 15px;\n}\n\n.status-visual {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  margin: 0 auto 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.status-visual .visual-blob {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: radial-gradient(circle, var(--purple-light) 0%, var(--visual-purple-edge, rgba(245, 243, 255, 0.4)) 70%);\n  animation: pulseGlow 3s ease-in-out infinite alternate;\n}\n\n.status-visual.amber .visual-blob {\n  background: radial-gradient(circle, var(--amber-light) 0%, var(--visual-amber-edge, rgba(254, 243, 199, 0.4)) 70%);\n}\n\n.status-visual.rose .visual-blob {\n  background: radial-gradient(circle, var(--rose-light) 0%, var(--visual-rose-edge, rgba(255, 228, 230, 0.4)) 70%);\n}\n\n.status-visual.emerald .visual-blob {\n  background: radial-gradient(circle, var(--emerald-light) 0%, var(--visual-emerald-edge, rgba(209, 250, 229, 0.4)) 70%);\n}\n\n.status-visual .code-display {\n  position: relative;\n  z-index: 2;\n  font-size: 68px;\n  font-weight: 900;\n  line-height: 1;\n  letter-spacing: -2px;\n  background: linear-gradient(135deg, var(--purple-fill, var(--purple)), var(--purple-fill-end, var(--purple-dark)));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.status-visual.amber .code-display {\n  background: linear-gradient(135deg, var(--amber-dark), #b45309);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.status-visual.rose .code-display {\n  background: linear-gradient(135deg, var(--rose), #be123c);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.status-visual.emerald .code-display {\n  background: linear-gradient(135deg, var(--emerald), #047857);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.status-visual .floating-icon {\n  position: absolute;\n  z-index: 3;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--paper);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n}\n\n.status-visual .icon-top-right {\n  top: 2px;\n  right: 2px;\n  color: var(--amber);\n  animation: floatSlow 3.2s ease-in-out infinite alternate;\n}\n\n.status-visual .icon-bottom-left {\n  bottom: 2px;\n  left: 2px;\n  color: var(--purple);\n  animation: floatSlow 2.8s ease-in-out infinite alternate-reverse;\n}\n\n.status-title {\n  font-size: 26px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 12px;\n  line-height: 1.35;\n}\n\n@media (max-width: 600px) {\n  .status-title {\n    font-size: 22px;\n  }\n}\n\n.status-desc {\n  font-size: 15px;\n  color: var(--ink-secondary);\n  line-height: 1.8;\n  max-width: 520px;\n  margin: 0 auto 28px;\n}\n\n@media (max-width: 600px) {\n  .status-desc {\n    font-size: 14px;\n  }\n}\n\n.status-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 32px;\n}\n\n.status-actions .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: 800;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  border: none;\n  font-family: inherit;\n}\n\n.status-actions .btn ion-icon {\n  font-size: 18px;\n}\n\n.status-actions .btn.primary {\n  background: linear-gradient(135deg, var(--purple-fill, var(--purple)), var(--purple-fill-end, var(--purple-dark)));\n  color: #fff;\n  box-shadow: 0 6px 20px var(--purple-glow);\n}\n\n.status-actions .btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px var(--purple-glow);\n}\n\n.status-actions .btn.secondary {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.status-actions .btn.secondary:hover {\n  background: var(--purple-hover, #ded7fa);\n  transform: translateY(-2px);\n}\n\n.status-actions .btn.amber {\n  background: linear-gradient(135deg, var(--amber), var(--amber-dark));\n  color: #fff;\n  box-shadow: 0 6px 18px var(--amber-glow);\n}\n\n.status-actions .btn.amber:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 22px var(--amber-glow);\n}\n\n.status-actions .btn.outline {\n  background: var(--paper);\n  color: var(--ink-secondary);\n  border: 1px solid var(--border-soft);\n}\n\n.status-actions .btn.outline:hover {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n@media (max-width: 600px) {\n  .status-actions .btn {\n    width: 100%;\n    padding: 14px 20px;\n  }\n}\n\n.suggestion-box {\n  background: var(--surface-soft);\n  border: 1px dashed var(--border-soft);\n  border-radius: 20px;\n  padding: 20px;\n  text-align: center;\n}\n\n.suggestion-box .suggestion-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--purple);\n  margin-bottom: 14px;\n}\n\n.suggestion-box .suggestion-title .sparkle-icon {\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.suggestion-box .suggestion-chips {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.suggestion-box .suggestion-chips .chip-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 9999px;\n  font-size: 12.5px;\n  font-weight: 700;\n  color: var(--ink);\n  background: var(--paper);\n  border: 1px solid var(--border-soft);\n  box-shadow: 0 2px 6px rgba(99, 63, 163, 0.04);\n  transition: all 0.2s ease;\n}\n\n.suggestion-box .suggestion-chips .chip-link ion-icon {\n  font-size: 14px;\n  color: var(--purple);\n}\n\n.suggestion-box .suggestion-chips .chip-link:hover {\n  color: var(--purple);\n  border-color: var(--purple);\n  background: var(--purple-light);\n  transform: translateY(-1px);\n}\n\n.content-page-card {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n  background: var(--content-bg, rgba(255, 255, 255, 0.98));\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  box-shadow: 0 20px 45px -10px rgba(99, 63, 163, 0.08);\n  padding: 40px;\n  direction: rtl;\n}\n\n@media (max-width: 768px) {\n  .content-page-card {\n    padding: 24px 16px;\n    border-radius: 20px;\n  }\n}\n\n.content-page-header {\n  text-align: center;\n  margin-bottom: 36px;\n}\n\n.content-page-header .header-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 9999px;\n  background: var(--purple-light);\n  color: var(--purple);\n  font-size: 12.5px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n\n.content-page-header h1 {\n  font-size: 28px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 10px;\n}\n\n@media (max-width: 600px) {\n  .content-page-header h1 {\n    font-size: 23px;\n  }\n}\n\n.content-page-header p {\n  font-size: 15px;\n  color: var(--ink-secondary);\n  max-width: 650px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n\n.elementary-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 32px;\n  padding: 6px;\n  background: var(--surface-muted);\n  border-radius: 18px;\n  border: 1px solid var(--border-soft);\n}\n\n.elementary-tabs .tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink-secondary);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.elementary-tabs .tab-btn ion-icon {\n  font-size: 17px;\n}\n\n.elementary-tabs .tab-btn.active {\n  background: var(--paper);\n  color: var(--purple);\n  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.08);\n  border: 1px solid var(--border-soft);\n}\n\n.elementary-tabs .tab-btn:hover:not(.active) {\n  color: var(--ink);\n  background: var(--tab-hover-bg, rgba(255, 255, 255, 0.5));\n}\n\n@keyframes floatSlow {\n  0% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-10px) rotate(3deg);\n  }\n}\n\n@keyframes pulseGlow {\n  0% {\n    transform: scale(0.96);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n}\n\n@keyframes sparkleRotate {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.15);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n\n:host {\n  display: block;\n  min-height: 100%;\n}\n\n.exam-content {\n  --background: var(--bg-canvas);\n  background: var(--bg-canvas);\n}\n\n.exam-page-shell {\n  position: relative;\n  min-height: calc(100vh - 180px);\n  padding: 32px 16px 64px;\n  overflow: hidden;\n  direction: rtl;\n}\n\nion-card {\n  margin: 0 auto 28px !important;\n  background: rgba(255, 255, 255, 0.98) !important;\n  border: 1px solid var(--border-soft) !important;\n  border-radius: 26px !important;\n  box-shadow: 0 16px 40px -10px rgba(99, 63, 163, 0.08) !important;\n  overflow: hidden;\n  direction: rtl;\n  max-width: 960px;\n}\n\nion-card ion-card-header {\n  background: transparent !important;\n  padding: 28px 28px 16px !important;\n  text-align: center;\n  border-bottom: 1px solid #f1f0f7;\n}\n\nion-card ion-card-header[color=primary] {\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.04), rgba(245, 158, 11, 0.04)) !important;\n  color: var(--ink) !important;\n}\n\nion-card ion-card-header ion-card-title {\n  font-size: 24px !important;\n  font-weight: 900 !important;\n  color: var(--ink) !important;\n  margin-bottom: 6px;\n}\n\nion-card ion-card-header ion-card-subtitle {\n  font-size: 13.5px !important;\n  font-weight: 700 !important;\n  color: var(--purple) !important;\n  letter-spacing: normal !important;\n}\n\nion-card ion-card-content {\n  padding: 28px 24px !important;\n}\n\n@media (max-width: 600px) {\n  ion-card ion-card-content {\n    padding: 20px 14px !important;\n  }\n}\n\n.placement-banner-col {\n  margin-bottom: 24px;\n}\n\n.placement-banner-col ion-button[color=instagram] {\n  --background: linear-gradient(135deg, #7c3aed, #d97706);\n  --border-radius: 20px;\n  --box-shadow: 0 10px 25px rgba(124, 58, 237, 0.25);\n  font-size: 16px;\n  font-weight: 900;\n  height: 56px;\n  transition: all 0.25s ease;\n}\n\n.placement-banner-col ion-button[color=instagram]:hover {\n  transform: translateY(-2px);\n  --box-shadow: 0 14px 30px rgba(124, 58, 237, 0.35);\n}\n\n.placement-banner-col ion-button[color=instagram] ion-icon {\n  font-size: 24px;\n  margin-inline-end: 8px;\n}\n\nion-row[dir=rtl] ion-col {\n  padding: 10px;\n}\n\nion-row[dir=rtl] ion-col ion-item {\n  --background: #fbfaff;\n  --border-radius: 18px;\n  --border-color: var(--border-soft);\n  --border-width: 1px;\n  --border-style: solid;\n  --padding-start: 14px;\n  --padding-end: 14px;\n  --inner-padding-end: 0;\n  margin: 0;\n  border-radius: 18px;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(99, 63, 163, 0.03);\n}\n\nion-row[dir=rtl] ion-col ion-item:hover {\n  --background: #ffffff;\n  --border-color: var(--purple);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.09);\n}\n\nion-row[dir=rtl] ion-col ion-item:hover ion-label {\n  color: var(--purple);\n}\n\nion-row[dir=rtl] ion-col ion-item ion-avatar {\n  width: 52px;\n  height: 52px;\n  margin-inline-end: 14px;\n  border-radius: 14px;\n  overflow: hidden;\n  border: 2px solid #ede9fe;\n}\n\nion-row[dir=rtl] ion-col ion-item ion-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-row[dir=rtl] ion-col ion-item ion-label {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n  white-space: normal;\n  line-height: 1.5;\n}\n\nion-list-header.no-padding {\n  padding: 0 0 12px 0;\n  display: flex;\n  justify-content: flex-start;\n}\n\nion-list-header.no-padding ion-button[color=danger] {\n  --background: #fee2e2;\n  --color: #b91c1c;\n  --border-radius: 12px;\n  font-size: 13px;\n  font-weight: 800;\n  height: 38px;\n  margin: 0;\n}\n\nion-list-header.no-padding ion-button[color=danger]:hover {\n  --background: #fecaca;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(99, 63, 163, 0.08);\n  border: 2px solid #ede9fe;\n  background: #000;\n  margin: 16px 0 20px;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 18px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.video-span {\n  display: block;\n  padding-top: 56.25%;\n}\n\nion-textarea {\n  --background: #f8fafc;\n  --color: var(--ink);\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  margin: 18px 0;\n  display: block;\n  line-height: 1.85;\n}\n\nion-textarea h4 {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--purple);\n  margin-bottom: 10px;\n}\n\nion-textarea .readMore {\n  max-height: 95px !important;\n  white-space: pre-wrap;\n  overflow: hidden;\n  color: var(--ink-secondary);\n  font-size: 13.5px;\n  transition: max-height 0.4s ease-in-out;\n}\n\nion-textarea .readLess {\n  max-height: 3000px;\n  white-space: pre-wrap;\n  color: var(--ink-secondary);\n  font-size: 13.5px;\n  transition: max-height 0.4s ease-in-out;\n}\n\nion-textarea ion-button[color=telegram] {\n  --color: var(--purple);\n  font-size: 13px;\n  font-weight: 800;\n  margin-top: 8px;\n}\n\nion-card-content ion-item {\n  --background: transparent;\n  --border-color: #f1f0f7;\n  --padding-start: 6px;\n  --padding-end: 6px;\n  font-size: 14px;\n  font-weight: 700;\n  min-height: 48px;\n}\n\nion-card-content ion-item ion-label {\n  color: var(--ink-secondary);\n  font-weight: 700;\n}\n\nion-card-content ion-item ion-text {\n  font-weight: 800;\n}\n\nion-card-content ion-item ion-icon {\n  font-size: 20px;\n}\n\nion-card-content ion-item[color=instagram] ion-label,\nion-card-content ion-label[color=instagram] {\n  color: #7c3aed !important;\n  font-weight: 900 !important;\n}\n\nion-button[color=success] {\n  --background: linear-gradient(135deg, #10b981, #059669);\n  --border-radius: 16px;\n  --box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);\n  font-size: 15px;\n  font-weight: 800;\n  height: 50px;\n  margin-top: 18px;\n}\n\nion-button[color=success]:hover {\n  --box-shadow: 0 12px 24px rgba(16, 185, 129, 0.35);\n  transform: translateY(-1px);\n}\n\n.text-center span ion-button {\n  --border-radius: 10px;\n  margin: 2px 4px;\n  font-weight: 800;\n  font-size: 13px;\n}\n\n.text-center span ion-button[color=primary] {\n  --background: var(--purple-light);\n  --color: var(--purple);\n}\n\n.text-center span ion-button[color=primary]:hover {\n  --background: var(--purple);\n  --color: #fff;\n}\n\n.text-center span ion-button[color=danger] {\n  --color: var(--purple);\n  font-weight: 900;\n  border-bottom: 2px solid var(--purple);\n}\n\nion-radio-group ion-list-header ion-label {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--purple);\n  margin-bottom: 8px;\n}\n\nion-radio-group ion-item {\n  --background: #fbfaff;\n  --border-radius: 12px;\n  border: 1px solid var(--border-soft);\n  margin-bottom: 8px;\n  border-radius: 12px;\n}\n\nion-radio-group ion-item ion-radio {\n  --color-checked: var(--purple);\n}\n\nion-fab[horizontal=end] ion-fab-button {\n  --background: var(--purple);\n  --color: #fff;\n  --box-shadow: 0 8px 24px rgba(109, 40, 217, 0.3);\n}\n\nion-fab[horizontal=start] ion-fab-button {\n  --background: var(--amber);\n  --color: #fff;\n  --box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);\n}\n\n.no-found {\n  max-width: 220px;\n  margin: 0 auto;\n}\n\n.mmargin {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.exam-level-picker-card {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 246, 255, 0.96));\n  border: 1.5px solid #e9d5ff;\n  border-radius: 22px;\n  padding: 18px 20px;\n  margin: 22px 0;\n  box-shadow: 0 8px 24px -6px rgba(109, 40, 217, 0.08);\n  direction: rtl;\n  position: relative;\n  transition: all 0.25s ease;\n}\n\n.exam-level-picker-card:hover {\n  border-color: #d8b4fe;\n  box-shadow: 0 12px 28px -6px rgba(109, 40, 217, 0.12);\n}\n\n@media (max-width: 600px) {\n  .exam-level-picker-card {\n    padding: 16px 14px;\n    margin: 18px 0;\n    border-radius: 18px;\n  }\n}\n\n.picker-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px dashed #ede9f6;\n}\n\n@media (max-width: 480px) {\n  .picker-header {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n\n.picker-title-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.picker-icon-badge {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.28);\n  flex-shrink: 0;\n}\n\n@media (max-width: 480px) {\n  .picker-icon-badge {\n    width: 38px;\n    height: 38px;\n    font-size: 20px;\n  }\n}\n\n.picker-text-wrap {\n  display: flex;\n  flex-direction: column;\n}\n\n.picker-main-title {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--ink, #1e1b4b);\n  margin: 0;\n  line-height: 1.35;\n}\n\n.picker-subtitle {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--muted, #64748b);\n  margin-top: 2px;\n  line-height: 1.4;\n}\n\n.picker-active-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 14px;\n  background: #ede9fe;\n  color: #6d28d9;\n  border: 1px solid #ddd6fe;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 900;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n\n.picker-active-badge .badge-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #7c3aed;\n  display: inline-block;\n  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.25);\n}\n\n.picker-trigger-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: #ffffff;\n  border: 1.5px solid #e2d9f3;\n  border-radius: 16px;\n  padding: 10px 14px;\n  min-height: 60px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  box-shadow: 0 2px 8px rgba(99, 63, 163, 0.04);\n}\n\n.picker-trigger-box:hover {\n  border-color: #7c3aed;\n  background: #fdfcff;\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.12);\n  transform: translateY(-1px);\n}\n\n.picker-trigger-box:hover .trigger-trailing-arrow {\n  background: #ede9fe;\n  color: #6d28d9;\n  transform: translateY(2px);\n}\n\n.picker-trigger-box:focus-within {\n  border-color: #6d28d9;\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.2);\n}\n\n.trigger-leading-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #f5f3ff;\n  color: #7c3aed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.trigger-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  pointer-events: none;\n  min-width: 0;\n}\n\n.trigger-caption {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--muted, #64748b);\n  line-height: 1.2;\n}\n\n.trigger-value {\n  font-size: 15.5px;\n  font-weight: 900;\n  color: var(--purple-dark, #581c87);\n  margin-top: 2px;\n}\n\n.trigger-trailing-arrow {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: #f8fafc;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  pointer-events: none;\n}\n\n.custom-exam-level-select {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 5;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n}\n\n.quick-levels-container {\n  margin-top: 14px;\n  padding-top: 12px;\n  border-top: 1px dashed #ede9f6;\n}\n\n.quick-levels-header {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--purple, #6d28d9);\n  margin-bottom: 10px;\n}\n\n.quick-levels-header ion-icon {\n  font-size: 16px;\n  color: var(--amber, #f59e0b);\n}\n\n.quick-pills-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.quick-pill-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 16px;\n  border-radius: 12px;\n  border: 1px solid #e2d9f3;\n  background: #ffffff;\n  color: var(--ink-secondary, #475569);\n  font-size: 13px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n\n.quick-pill-btn ion-icon {\n  font-size: 16px;\n  color: #94a3b8;\n  transition: color 0.2s ease;\n}\n\n.quick-pill-btn:hover {\n  background: #fbfaff;\n  border-color: #c4b5fd;\n  color: var(--purple, #6d28d9);\n  transform: translateY(-1px);\n}\n\n.quick-pill-btn:hover ion-icon {\n  color: var(--purple, #6d28d9);\n}\n\n.quick-pill-btn.active {\n  background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  border-color: #6d28d9;\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.28);\n}\n\n.quick-pill-btn.active ion-icon {\n  color: #fef08a;\n}\n\n.pay-type-list {\n  background: transparent;\n  padding: 0;\n  margin: 16px 0 8px;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f2eefb;\n  --ink-secondary: #d5cfe5;\n  --muted: #aaa1bd;\n  --purple: #c4b5fd;\n  --purple-dark: #ddd6fe;\n  --purple-light: #302448;\n  --amber-dark: #fbbf24;\n  --amber-light: #3b2d20;\n  --emerald: #34d399;\n  --emerald-dark: #6ee7b7;\n  --emerald-light: #173b32;\n  --rose: #fda4af;\n  --rose-light: #422432;\n  --sky: #7dd3fc;\n  --sky-light: #19394b;\n  --paper: #211c32;\n  --bg-canvas: #141223;\n  --border-soft: #39314f;\n  --card-bg: #211c32;\n  --surface-raised: #2a243d;\n  --action-purple: #6d28d9;\n  --action-purple-dark: #581c87;\n  --ion-background-color: var(--bg-canvas);\n  --ion-background-color-rgb: 20, 18, 35;\n  --ion-text-color: var(--ink);\n  --ion-text-color-rgb: 242, 238, 251;\n  --ion-item-background: var(--card-bg);\n  --ion-card-background: var(--card-bg);\n  --ion-toolbar-background: var(--card-bg);\n  --ion-toolbar-color: var(--ink);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .learning-header {\n  background: rgba(33, 28, 50, 0.96);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .header-search-bar,\n:host-context(.dark-theme) .elementary-tabs {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) .search-input-wrap,\n:host-context(.dark-theme) .content-page-card,\n:host-context(.dark-theme) .floating-icon,\n:host-context(.dark-theme) .suggestion-box,\n:host-context(.dark-theme) .suggestion-chips .chip-link,\n:host-context(.dark-theme) .status-actions .btn.outline {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) input,\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) input::placeholder,\n:host-context(.dark-theme) textarea::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n:host-context(.dark-theme) .action-btn.ghost:hover,\n:host-context(.dark-theme) .status-actions .btn.secondary:hover,\n:host-context(.dark-theme) .suggestion-chips .chip-link:hover,\n:host-context(.dark-theme) .elementary-tabs .tab-btn.active,\n:host-context(.dark-theme) .elementary-tabs .tab-btn:hover:not(.active) {\n  background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) .action-btn.primary,\n:host-context(.dark-theme) .status-actions .btn.primary {\n  background: linear-gradient(135deg, var(--action-purple), var(--action-purple-dark));\n}\n\n:host-context(.dark-theme) .status-actions .btn.amber {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: #23170b;\n}\n\n:host-context(.dark-theme) ion-list {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-card {\n  --background: var(--card-bg);\n  --color: var(--ink-secondary);\n  background: var(--card-bg) !important;\n  color: var(--ink-secondary);\n  border-color: var(--border-soft) !important;\n}\n\n:host-context(.dark-theme) ion-card-content ion-item {\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=primary],\n:host-context(.dark-theme) ion-text[color=instagram] {\n  --ion-color-base: var(--purple) !important;\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-text[color=success] {\n  --ion-color-base: var(--emerald) !important;\n  color: var(--emerald);\n}\n\n:host-context(.dark-theme) ion-text[color=warning] {\n  --ion-color-base: var(--amber-dark) !important;\n  color: var(--amber-dark);\n}\n\n:host-context(.dark-theme) ion-text[color=danger] {\n  --ion-color-base: var(--rose) !important;\n  color: var(--rose);\n}\n\n:host-context(.dark-theme) ion-text[color=light] {\n  --ion-color-base: var(--ink-secondary) !important;\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card ion-card-header {\n  border-bottom-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-row[dir=rtl] ion-col ion-item {\n  --background: var(--surface-raised);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-row[dir=rtl] ion-col ion-item:hover {\n  --background: var(--card-bg);\n}\n\n:host-context(.dark-theme) ion-row[dir=rtl] ion-col ion-item ion-avatar {\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-card-content ion-item[color=instagram] ion-label,\n:host-context(.dark-theme) ion-label[color=instagram] {\n  color: var(--purple) !important;\n}\n\n:host-context(.dark-theme) ion-list-header.no-padding ion-button[color=danger] {\n  --background: var(--rose-light);\n  --color: var(--rose);\n}\n\n:host-context(.dark-theme) ion-list-header.no-padding ion-button[color=danger]:hover {\n  --background: #542839;\n}\n\n:host-context(.dark-theme) ion-textarea {\n  --background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) ion-radio-group ion-item {\n  --background: var(--surface-raised);\n}\n\n:host-context(.dark-theme) .exam-level-picker-card {\n  background: linear-gradient(135deg, var(--card-bg), var(--surface-raised));\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .exam-level-picker-card:hover {\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .picker-header,\n:host-context(.dark-theme) .quick-levels-container,\n:host-context(.dark-theme) .h_iframe-aparat_embed_frame {\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .picker-active-badge,\n:host-context(.dark-theme) .trigger-leading-icon {\n  background: var(--purple-light);\n  color: var(--purple);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .picker-trigger-box,\n:host-context(.dark-theme) .quick-pill-btn {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .picker-trigger-box:hover,\n:host-context(.dark-theme) .quick-pill-btn:hover {\n  background: var(--surface-raised);\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .trigger-trailing-arrow {\n  background: var(--surface-raised);\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) .picker-trigger-box:hover .trigger-trailing-arrow {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) .quick-pill-btn.active {\n  background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  border-color: #7c3aed;\n}\n\n:host-context(.dark-theme) .text-center span ion-button[color=primary]:hover {\n  --background: var(--action-purple);\n}\n\n:host-context(.dark-theme) ion-fab[horizontal=end] ion-fab-button {\n  --background: var(--action-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjb21tb25cXF9jb21tb24tcGFnZXMtdGhlbWUuc2NzcyIsImV4YW0uY29tcG9uZW50LnNjc3MiLCIuLlxccGFuZWxcXHVzZXItcGFuZWxcXF9wYWdlLWRhcmstdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5RkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FB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MkJKOztBQW4yQkk7RUFBVSwyQkFBQTtBQXMyQmQ7O0FBbjJCRTs7O0VBR0UsZ0NBQUE7QUFxMkJKOztBQWwyQkU7O0VBRUUsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBbzJCSjs7QUFqMkJFOztFQUVFLDBCQUFBO0VBQ0EsZ0NBQUE7QUFtMkJKOztBQWoyQkk7O0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtBQW8yQk47O0FBaDJCRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7QUFrMkJKOztBQS8xQkU7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0FBaTJCSjs7QUE5MUJFO0VBQ0UscURBQUE7RUFDQSxxQkFBQTtBQWcyQko7O0FBNzFCRTtFQUNFLGtDQUFBO0FBKzFCSjs7QUE1MUJFO0VBQ0Usa0NBQUE7QUE4MUJKIiwiZmlsZSI6ImV4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEF2YWxBbW9veiAtIEVsZW1lbnRhcnkgRWR1Y2F0aW9uIENvbW1vbiBQYWdlcyBUaGVtZVxuLy8gTWF0Y2hlcyBsZWFybmluZy1sYW5kaW5nIHRoZW1lOiBzb2Z0IGxpbGFjL3B1cnBsZSwgc3VubnkgYW1iZXIsIG1pbnQgZW1lcmFsZCxcbi8vIGZyaWVuZGx5IHByaW1hcnkgc2Nob29sIHZpc3VhbCBtb3RpZnMsIHJvdW5kZWQgY2FyZHMsIGFuZCB3YXJtIHR5cG9ncmFwaHkuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuOmhvc3Qge1xuICAtLWluazogIzFlMWI0YjtcbiAgLS1pbmstc2Vjb25kYXJ5OiAjNDc1NTY5O1xuICAtLW11dGVkOiAjNjQ3NDhiO1xuICAtLXB1cnBsZTogIzZkMjhkOTtcbiAgLS1wdXJwbGUtZGFyazogIzU4MWM4NztcbiAgLS1wdXJwbGUtbGlnaHQ6ICNlZGU5ZmU7XG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjE2KTtcbiAgLS1hbWJlcjogI2Y1OWUwYjtcbiAgLS1hbWJlci1kYXJrOiAjZDk3NzA2O1xuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xuICAtLWFtYmVyLWdsb3c6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjE4KTtcbiAgLS1lbWVyYWxkOiAjMTBiOTgxO1xuICAtLWVtZXJhbGQtZGFyazogIzA1OTY2OTtcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjZDFmYWU1O1xuICAtLXJvc2U6ICNmNDNmNWU7XG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcbiAgLS1za3k6ICMwMjg0Yzc7XG4gIC0tc2t5LWxpZ2h0OiAjZTBmMmZlO1xuICAtLXBhcGVyOiAjZmZmZmZmO1xuICAtLWJnLWNhbnZhczogI2ZjZmJmZTtcbiAgLS1ib3JkZXItc29mdDogI2VkZTlmNjtcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xuICAtLXN1cmZhY2Utc29mdDogI2ZiZmFmZjtcbiAgLS1zdXJmYWNlLW11dGVkOiAjZjhmYWZjO1xuICAtLXN1cmZhY2UtbWVkaWE6ICNmMWY1Zjk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWluayk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIFwiU2hhYm5hbS1NZWRpdW1cIiwgXCJWYXppcm1hdG5cIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0taW5rOiAjZjFlZWZiO1xuICAtLWluay1zZWNvbmRhcnk6ICNjYmQ1ZTE7XG4gIC0tbXV0ZWQ6ICNhNmIyYzY7XG4gIC0tcHVycGxlOiAjYzRiNWZkO1xuICAtLXB1cnBsZS1kYXJrOiAjYTc4YmZhO1xuICAtLXB1cnBsZS1saWdodDogIzMwMjQ0NztcbiAgLS1wdXJwbGUtaG92ZXI6ICM0MDMwNWQ7XG4gIC0tcHVycGxlLWZpbGw6ICM3YzNhZWQ7XG4gIC0tcHVycGxlLWZpbGwtZW5kOiAjNmQyOGQ5O1xuICAtLXB1cnBsZS1nbG93OiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMTgpO1xuICAtLWFtYmVyOiAjZmJiZjI0O1xuICAtLWFtYmVyLWRhcms6ICNmY2QzNGQ7XG4gIC0tYW1iZXItbGlnaHQ6ICMzYjJkMTk7XG4gIC0tYW1iZXItaW5rOiAjZmRlNjhhO1xuICAtLW9uLWFtYmVyOiAjMjkxYjA1O1xuICAtLWVtZXJhbGQ6ICMzNGQzOTk7XG4gIC0tZW1lcmFsZC1kYXJrOiAjNmVlN2I3O1xuICAtLWVtZXJhbGQtbGlnaHQ6ICMxNzNhMzI7XG4gIC0tcm9zZTogI2ZkYTRhZjtcbiAgLS1yb3NlLWxpZ2h0OiAjNDIyNDM1O1xuICAtLW9uLXJvc2U6ICMzNTEzMjI7XG4gIC0tc2t5OiAjN2RkM2ZjO1xuICAtLXNreS1saWdodDogIzE3MzU0YTtcbiAgLS1wYXBlcjogIzIxMWQzMDtcbiAgLS1jYXJkLWJnOiAjMjExZDMwO1xuICAtLWJnLWNhbnZhczogIzE0MTExZjtcbiAgLS1ib3JkZXItc29mdDogIzQwMzY0ZjtcbiAgLS1hY2NlbnQtYm9yZGVyOiAjNTg0NjZlO1xuICAtLXBsYWNlaG9sZGVyLWluazogdmFyKC0tbXV0ZWQpO1xuICAtLXN1cmZhY2Utc29mdDogIzI5MjMzNztcbiAgLS1zdXJmYWNlLW11dGVkOiAjMjQxZjMxO1xuICAtLXN1cmZhY2UtbWVkaWE6ICMzMDJhM2U7XG4gIC0taGVhZGVyLWJnOiByZ2JhKDI4LCAyNCwgNDEsIDAuOTQpO1xuICAtLXN0YXR1cy1iZzogcmdiYSgzMywgMjksIDQ4LCAwLjk2KTtcbiAgLS1jb250ZW50LWJnOiByZ2JhKDMzLCAyOSwgNDgsIDAuOTgpO1xuICAtLXRhYi1ob3Zlci1iZzogcmdiYSgxOTYsIDE4MSwgMjUzLCAwLjA4KTtcbiAgLS12aXN1YWwtcHVycGxlLWVkZ2U6IHJnYmEoNDgsIDM2LCA3MSwgMC40KTtcbiAgLS12aXN1YWwtYW1iZXItZWRnZTogcmdiYSg1OSwgNDUsIDI1LCAwLjQpO1xuICAtLXZpc3VhbC1yb3NlLWVkZ2U6IHJnYmEoNjYsIDM2LCA1MywgMC40KTtcbiAgLS12aXN1YWwtZW1lcmFsZC1lZGdlOiByZ2JhKDIzLCA1OCwgNTAsIDAuNCk7XG4gIC0tY29sbGFib3JhdGlvbi1zdGFydDogIzMwMjQ0NztcbiAgLS1jb2xsYWJvcmF0aW9uLWVuZDogIzNiMmQxOTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIwLCAxNywgMzE7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNDEsIDIzOCwgMjUxO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuXG4gIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLW11dGVkKTsgb3BhY2l0eTogMTsgfVxuICAuaGVhZGVyLXNlYXJjaC1iYXIgaW5wdXQgeyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTsgLS1jb2xvcjogdmFyKC0taW5rKTsgfVxuICBpb24tY2FyZCwgaW9uLWxpc3QsIGlvbi1pdGVtIHsgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgY29sb3I6IHZhcigtLWluayk7IC0tY29sb3I6IHZhcigtLWluayk7IH1cbiAgaW9uLWxhYmVsW2NvbG9yPVwibGlnaHRcIl0geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pbmspOyB9XG4gIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhIHsgLS1jb2xvcjogdmFyKC0taW5rKTsgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tbXV0ZWQpOyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7IH1cbiAgaW9uLWRhdGV0aW1lIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gIC5zdGF0dXMtYWN0aW9ucyAuYnRuLmFtYmVyIHsgY29sb3I6IHZhcigtLW9uLWFtYmVyKTsgfVxuICAudGVhY2hlci1jb3Vyc2VzLXBhbmVsIC50ZWFjaGVyLWNvdXJzZS1jYXJkIC5jb3Vyc2UtdGh1bWItd3JhcCAub2ZmLWNoaXAgeyBjb2xvcjogdmFyKC0tb24tcm9zZSk7IH1cbiAgLnN0YXR1cy12aXN1YWwgLmNvZGUtZGlzcGxheSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXB1cnBsZSksIHZhcigtLXB1cnBsZS1kYXJrKSk7IH1cbiAgLnN0YXR1cy12aXN1YWwuYW1iZXIgLmNvZGUtZGlzcGxheSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWFtYmVyKSwgdmFyKC0tYW1iZXItZGFyaykpOyB9XG4gIC5zdGF0dXMtdmlzdWFsLnJvc2UgLmNvZGUtZGlzcGxheSB7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXJvc2UpLCAjZmI3MTg1KTsgfVxuICAuc3RhdHVzLXZpc3VhbC5lbWVyYWxkIC5jb2RlLWRpc3BsYXkgeyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1lbWVyYWxkKSwgdmFyKC0tZW1lcmFsZC1kYXJrKSk7IH1cbn1cblxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmEgeyBjb2xvcjogaW5oZXJpdDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5idXR0b24sIGlucHV0LCB0ZXh0YXJlYSB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuYnV0dG9uLCBhIHsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuYnV0dG9uOmZvY3VzLXZpc2libGUsIGE6Zm9jdXMtdmlzaWJsZSwgaW5wdXQ6Zm9jdXMtdmlzaWJsZSwgdGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCAjYWM4OGYyO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWljb24geyBwb2ludGVyLWV2ZW50czogbm9uZTsgZmxleC1zaHJpbms6IDA7IH1cbmgxLCBoMiwgaDMsIGg0LCBwIHsgbWFyZ2luOiAwOyBjb2xvcjogaW5oZXJpdDsgfVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVG9wIE5hdmlnYXRpb24gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmxlYXJuaW5nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICY6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG4ubmF2LXNoZWxsIHtcbiAgbWF4LXdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWluLWhlaWdodDogNzJweDtcbn1cblxuXG4uaWNvbi1idXR0b24ubWVudS10b2dnbGUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtYm9yZGVyLCAjZGRkNmZlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1maWxsLCB2YXIoLS1wdXJwbGUpKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIH1cbn1cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5icmFuZC1sb2dvLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG59XG5cbi5icmFuZC1zcGFya2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XG4gIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYW5pbWF0aW9uOiBzcGFya2xlUm90YXRlIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYnJhbmQtdGl0bGVzIHtcbiAgYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cbiAgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAxMC41cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuLm1haW4tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4OiAxO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2LWxpbmstYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICB9XG4gIH1cblxuICAucGlsbC1kb3Qge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG4ubmF2LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcblxuICAmLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXB1cnBsZS1maWxsLCB2YXIoLS1wdXJwbGUpKSwgdmFyKC0tcHVycGxlLWZpbGwtZW5kLCB2YXIoLS1wdXJwbGUtZGFyaykpKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXB1cnBsZS1nbG93KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XG4gICAgfVxuICB9XG5cbiAgJi5naG9zdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWhvdmVyLCAjZTRkZGZjKTtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLnNlYXJjaC1pbnB1dC13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgcGFkZGluZzogNnB4IDE0cHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBhZ2UgTGF5b3V0ICYgQ2FudmFzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmNvbW1vbi1wYWdlLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb21tb24tcGFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xuICBwYWRkaW5nOiAzNnB4IDE2cHggNjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYWNrZHJvcC1nbG93cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5nbG93LW9yYiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmaWx0ZXI6IGJsdXIoODBweCk7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuXG4gIC5nbG93LXB1cnBsZSB7XG4gICAgd2lkdGg6IDQ0MHB4O1xuICAgIGhlaWdodDogNDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjIyKTtcbiAgICB0b3A6IC0xMDBweDtcbiAgICByaWdodDogLTEwMHB4O1xuICB9XG5cbiAgLmdsb3ctYW1iZXIge1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUxLCAxOTEsIDM2LCAwLjIwKTtcbiAgICBib3R0b206IC04MHB4O1xuICAgIGxlZnQ6IC04MHB4O1xuICB9XG5cbiAgLmdsb3ctZW1lcmFsZCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMjExLCAxNTMsIDAuMTYpO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUGxheWZ1bCBFbGVtZW50YXJ5IEZsb2F0aW5nIEJhZGdlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5mbG9hdGluZy1kZWNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgb3BhY2l0eTogMC44NTtcbiAgYW5pbWF0aW9uOiBmbG9hdFNsb3cgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG4gICYucGVuY2lsIHsgdG9wOiA0MHB4OyBsZWZ0OiA4JTsgYW5pbWF0aW9uLWRlbGF5OiAwczsgZm9udC1zaXplOiAzMnB4OyB9XG4gICYuc3RhciB7IHRvcDogOTBweDsgcmlnaHQ6IDEwJTsgYW5pbWF0aW9uLWRlbGF5OiAxLjJzOyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XG4gICYuYm9vayB7IGJvdHRvbTogMTAwcHg7IHJpZ2h0OiA4JTsgYW5pbWF0aW9uLWRlbGF5OiAyLjFzOyBmb250LXNpemU6IDMwcHg7IH1cbiAgJi5zcGFya2xlIHsgYm90dG9tOiA4MHB4OyBsZWZ0OiAxMiU7IGFuaW1hdGlvbi1kZWxheTogMC44czsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdGF0dXMgJiBIZXJvIENhcmRzICg0MDQsIDUwMCwgNTAzLCA0MDMsIENvbmZpcm0sIEFjdGl2ZSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uc3RhdHVzLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tc3RhdHVzLWJnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHBhZGRpbmc6IDQ0cHggMzZweCAzNnB4O1xuICBib3gtc2hhZG93OlxuICAgIDAgNHB4IDZweCAtMXB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDQpLFxuICAgIDAgMjBweCA0NXB4IC0xMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMTApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpcmVjdGlvbjogcnRsO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDMycHggMjBweCAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIH1cbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgJi5yb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcm9zZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsIDYzLCA5NCwgMC4yKTtcbiAgfVxuXG4gICYuYW1iZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsIDE1OCwgMTEsIDAuMjUpO1xuICB9XG5cbiAgJi5wdXJwbGUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDksIDQwLCAyMTcsIDAuMik7XG4gIH1cblxuICAmLmVtZXJhbGQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWRhcmspO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjI1KTtcbiAgfVxuXG4gIC5iYWRnZS1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEludGVyYWN0aXZlIFZpc3VhbCAvIElsbHVzdHJhdGlvbiBDb250YWluZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uc3RhdHVzLXZpc3VhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW46IDAgYXV0byAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAudmlzdWFsLWJsb2Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdmFyKC0tcHVycGxlLWxpZ2h0KSAwJSwgdmFyKC0tdmlzdWFsLXB1cnBsZS1lZGdlLCByZ2JhKDI0NSwgMjQzLCAyNTUsIDAuNCkpIDcwJSk7XG4gICAgYW5pbWF0aW9uOiBwdWxzZUdsb3cgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB9XG5cbiAgJi5hbWJlciAudmlzdWFsLWJsb2Ige1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLWFtYmVyLWxpZ2h0KSAwJSwgdmFyKC0tdmlzdWFsLWFtYmVyLWVkZ2UsIHJnYmEoMjU0LCAyNDMsIDE5OSwgMC40KSkgNzAlKTtcbiAgfVxuXG4gICYucm9zZSAudmlzdWFsLWJsb2Ige1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXJvc2UtbGlnaHQpIDAlLCB2YXIoLS12aXN1YWwtcm9zZS1lZGdlLCByZ2JhKDI1NSwgMjI4LCAyMzAsIDAuNCkpIDcwJSk7XG4gIH1cblxuICAmLmVtZXJhbGQgLnZpc3VhbC1ibG9iIHtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB2YXIoLS1lbWVyYWxkLWxpZ2h0KSAwJSwgdmFyKC0tdmlzdWFsLWVtZXJhbGQtZWRnZSwgcmdiYSgyMDksIDI1MCwgMjI5LCAwLjQpKSA3MCUpO1xuICB9XG5cbiAgLmNvZGUtZGlzcGxheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1zaXplOiA2OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlLWZpbGwsIHZhcigtLXB1cnBsZSkpLCB2YXIoLS1wdXJwbGUtZmlsbC1lbmQsIHZhcigtLXB1cnBsZS1kYXJrKSkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gICYuYW1iZXIgLmNvZGUtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYW1iZXItZGFyayksICNiNDUzMDkpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICYucm9zZSAuY29kZS1kaXNwbGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1yb3NlKSwgI2JlMTIzYyk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJi5lbWVyYWxkIC5jb2RlLWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWVtZXJhbGQpLCAjMDQ3ODU3KTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuZmxvYXRpbmctaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG5cbiAgLmljb24tdG9wLXJpZ2h0IHtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gICAgYW5pbWF0aW9uOiBmbG9hdFNsb3cgMy4ycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIH1cblxuICAuaWNvbi1ib3R0b20tbGVmdCB7XG4gICAgYm90dG9tOiAycHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIGFuaW1hdGlvbjogZmxvYXRTbG93IDIuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG4gIH1cbn1cblxuLnN0YXR1cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuXG4uc3RhdHVzLWRlc2Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjhweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGlvbiBCdXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLnN0YXR1cy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAmLnByaW1hcnkge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlLWZpbGwsIHZhcigtLXB1cnBsZSkpLCB2YXIoLS1wdXJwbGUtZmlsbC1lbmQsIHZhcigtLXB1cnBsZS1kYXJrKSkpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHZhcigtLXB1cnBsZS1nbG93KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1ob3ZlciwgI2RlZDdmYSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFtYmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWFtYmVyKSwgdmFyKC0tYW1iZXItZGFyaykpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHZhcigtLWFtYmVyLWdsb3cpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjJweCB2YXIoLS1hbWJlci1nbG93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm91dGxpbmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUXVpY2sgU3VnZ2VzdGlvbiBCb3hcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uc3VnZ2VzdGlvbi1ib3gge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNvZnQpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLnN1Z2dlc3Rpb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gICAgLnNwYXJrbGUtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tYW1iZXIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdWdnZXN0aW9uLWNoaXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLmNoaXAtbGluayB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDdweCAxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExhcmdlIENvbnRlbnQgQ2FyZCAoQWJvdXQsIFN1cHBvcnQsIEZBUSwgUnVsZXMsIFByaXZhY3kpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmNvbnRlbnQtcGFnZS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDVweCAtMTBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA4KTtcbiAgcGFkZGluZzogNDBweDtcbiAgZGlyZWN0aW9uOiBydGw7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtcGFnZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG5cbiAgLmhlYWRlci1iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBmb250LXNpemU6IDEyLjVweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFbGVtZW50YXJ5IFRhYiAvIFNlZ21lbnQgTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5lbGVtZW50YXJ5LXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1tdXRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcblxuICAudGFiLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRhYi1ob3Zlci1iZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEtleWZyYW1lIEFuaW1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Aa2V5ZnJhbWVzIGZsb2F0U2xvdyB7XG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgzZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlR2xvdyB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTsgb3BhY2l0eTogMC43OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc3BhcmtsZVJvdGF0ZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjE1KTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTsgfVxufVxuIiwiQGltcG9ydCBcIi4uL2NvbW1vbi9jb21tb24tcGFnZXMtdGhlbWVcIjtcbkBpbXBvcnQgXCIuLi9wYW5lbC91c2VyLXBhbmVsL3BhZ2UtZGFyay10aGVtZVwiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQXZhbEFtb296IC0gRXhhbSBQYWdlIFRoZW1lICYgU3R5bGluZyAoRWxlbWVudGFyeSBFZHVjYXRpb24pXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xufVxuXG4uZXhhbS1wYWdlLXNoZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xuICBwYWRkaW5nOiAzMnB4IDE2cHggNjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDYXJkcyAmIFN1cmZhY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW9uLWNhcmQge1xuICBtYXJnaW46IDAgYXV0byAyOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OCkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggLTEwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wOCkgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIG1heC13aWR0aDogOTYwcHg7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDI4cHggMjhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMGY3O1xuXG4gICAgJltjb2xvcj1cInByaW1hcnlcIl0ge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wNCkpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWluaykgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEzLjVweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyOHB4IDI0cHggIWltcG9ydGFudDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgcGFkZGluZzogMjBweCAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQbGFjZW1lbnQgRXhhbSBCYW5uZXIgKEZlYXR1cmVkIENhbGxvdXQpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLnBsYWNlbWVudC1iYW5uZXItY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICBpb24tYnV0dG9uW2NvbG9yPVwiaW5zdGFncmFtXCJdIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQsICNkOTc3MDYpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTI0LCA1OCwgMjM3LCAwLjI1KTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgLS1ib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDEyNCwgNTgsIDIzNywgMC4zNSk7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvdXJzZSBJdGVtcyBHcmlkIGZvciBFeGFtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW9uLXJvd1tkaXI9XCJydGxcIl0ge1xuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmJmYWZmO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDMpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA5KTtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2VkZTlmZTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQmFjayBCdXR0b24gLyBSZXR1cm4gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW9uLWxpc3QtaGVhZGVyLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDAgMTJweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgaW9uLWJ1dHRvbltjb2xvcj1cImRhbmdlclwiXSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmVlMmUyO1xuICAgIC0tY29sb3I6ICNiOTFjMWM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZlY2FjYTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZpZGVvIEVtYmVkIEZyYW1lIChBcGFyYXQpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wOCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZGU5ZmU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG1hcmdpbjogMTZweCAwIDIwcHg7XG5cbiAgLnJhdGlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBpZnJhbWUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnZpZGVvLXNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDU2LjI1JTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bGVzIFRleHRhcmVhICYgRXhwYW5kL0NvbGxhcHNlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW9uLXRleHRhcmVhIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgbWFyZ2luOiAxOHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS44NTtcblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5yZWFkTW9yZSB7XG4gICAgbWF4LWhlaWdodDogOTVweCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDEzLjVweDtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAucmVhZExlc3Mge1xuICAgIG1heC1oZWlnaHQ6IDMwMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIGlvbi1idXR0b25bY29sb3I9XCJ0ZWxlZ3JhbVwiXSB7XG4gICAgLS1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNwZWMgSXRlbXMgLyBEZXRhaWxzIFJvd3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pb24tY2FyZC1jb250ZW50IHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmMWYwZjc7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICBpb24tdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cblxuICBpb24taXRlbVtjb2xvcj1cImluc3RhZ3JhbVwiXSBpb24tbGFiZWwsXG4gIGlvbi1sYWJlbFtjb2xvcj1cImluc3RhZ3JhbVwiXSB7XG4gICAgY29sb3I6ICM3YzNhZWQgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGlvbiBCdXR0b25zIGluIENhcmRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW9uLWJ1dHRvbltjb2xvcj1cInN1Y2Nlc3NcIl0ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIC0tYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yNSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIC0tYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMzUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUGFnaW5hdGlvbiBQaWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi50ZXh0LWNlbnRlciB7XG4gIHNwYW4gaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMnB4IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgICZbY29sb3I9XCJwcmltYXJ5XCJdIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXB1cnBsZSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gICAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltjb2xvcj1cImRhbmdlclwiXSB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wdXJwbGUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUGF5bWVudCBSYWRpbyBHcm91cFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlvbi1yYWRpby1ncm91cCB7XG4gIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZhZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgIGlvbi1yYWRpbyB7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGbG9hdGluZyBTb2NpYWwgQWN0aW9uIEJ1dHRvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlvbi1mYWJbaG9yaXpvbnRhbD1cImVuZFwiXSBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1ib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMpO1xufVxuXG5pb24tZmFiW2hvcml6b250YWw9XCJzdGFydFwiXSBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpO1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMyk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOb3QgRm91bmQgU3RhdGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ubm8tZm91bmQge1xuICBtYXgtd2lkdGg6IDIyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1tYXJnaW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbSBMZXZlbCBTZWxlY3Rpb24gQ2FyZCAoUmVkZXNpZ25lZClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uZXhhbS1sZXZlbC1waWNrZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OCksIHJnYmEoMjQ4LCAyNDYsIDI1NSwgMC45NikpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlOWQ1ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgbWFyZ2luOiAyMnB4IDA7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggLTZweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2Q4YjRmZTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMjhweCAtNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjEyKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHBhZGRpbmc6IDE2cHggMTRweDtcbiAgICBtYXJnaW46IDE4cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG59XG5cbi5waWNrZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlZGU5ZjY7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgfVxufVxuXG4ucGlja2VyLXRpdGxlLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucGlja2VyLWljb24tYmFkZ2Uge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkLCAjNmQyOGQ5KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMjgpO1xuICBmbGV4LXNocmluazogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi5waWNrZXItdGV4dC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBpY2tlci1tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rLCAjMWUxYjRiKTtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuLnBpY2tlci1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLW11dGVkLCAjNjQ3NDhiKTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4ucGlja2VyLWFjdGl2ZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNlZGU5ZmU7XG4gIGNvbG9yOiAjNmQyOGQ5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkNmZlO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4LXNocmluazogMDtcblxuICAuYmFkZ2UtZG90IHtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjN2MzYWVkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgxMjQsIDU4LCAyMzcsIDAuMjUpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBJbnRlcmFjdGl2ZSBEcm9wZG93biBUcmlnZ2VyIEJveFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5waWNrZXItdHJpZ2dlci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmQ5ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDQpO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzdjM2FlZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmRmY2ZmO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMTIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcblxuICAgIC50cmlnZ2VyLXRyYWlsaW5nLWFycm93IHtcbiAgICAgIGJhY2tncm91bmQ6ICNlZGU5ZmU7XG4gICAgICBjb2xvcjogIzZkMjhkOTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3JkZXItY29sb3I6ICM2ZDI4ZDk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIpO1xuICB9XG59XG5cbi50cmlnZ2VyLWxlYWRpbmctaWNvbiB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQ6ICNmNWYzZmY7XG4gIGNvbG9yOiAjN2MzYWVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50cmlnZ2VyLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4udHJpZ2dlci1jYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCwgIzY0NzQ4Yik7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi50cmlnZ2VyLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyaywgIzU4MWM4Nyk7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnRyaWdnZXItdHJhaWxpbmctYXJyb3cge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3VzdG9tLWV4YW0tbGV2ZWwtc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRdWljayBMZXZlbCBQaWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5xdWljay1sZXZlbHMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2VkZTlmNjtcbn1cblxuLnF1aWNrLWxldmVscy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tcHVycGxlLCAjNmQyOGQ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1hbWJlciwgI2Y1OWUwYik7XG4gIH1cbn1cblxuLnF1aWNrLXBpbGxzLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuXG4ucXVpY2stcGlsbC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJkOWYzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSwgIzQ3NTU2OSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmYmZhZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzRiNWZkO1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUsICM2ZDI4ZDkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUsICM2ZDI4ZDkpO1xuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkLCAjNmQyOGQ5KTtcbiAgICBib3JkZXItY29sb3I6ICM2ZDI4ZDk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4yOCk7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogI2ZlZjA4YTtcbiAgICB9XG4gIH1cbn1cblxuLnBheS10eXBlLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuXG5AaW5jbHVkZSBwYWdlLWRhcmstY29tbW9uO1xuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICB9XG5cbiAgaW9uLXJvd1tkaXI9XCJydGxcIl0gaW9uLWNvbCBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXJhaXNlZCk7XG4gICAgLS1jb2xvcjogdmFyKC0taW5rKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7IH1cbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWl0ZW1bY29sb3I9XCJpbnN0YWdyYW1cIl0gaW9uLWxhYmVsLFxuICBpb24tbGFiZWxbY29sb3I9XCJpbnN0YWdyYW1cIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tbGlzdC1oZWFkZXIubm8tcGFkZGluZyBpb24tYnV0dG9uW2NvbG9yPVwiZGFuZ2VyXCJdIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpO1xuICAgIC0tY29sb3I6IHZhcigtLXJvc2UpO1xuXG4gICAgJjpob3ZlciB7IC0tYmFja2dyb3VuZDogIzU0MjgzOTsgfVxuICB9XG5cbiAgaW9uLXRleHRhcmVhIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgfVxuXG4gIGlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXJhaXNlZCk7XG4gIH1cblxuICAuZXhhbS1sZXZlbC1waWNrZXItY2FyZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY2FyZC1iZyksIHZhcigtLXN1cmZhY2UtcmFpc2VkKSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG5cbiAgICAmOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4gIH1cblxuICAucGlja2VyLWhlYWRlcixcbiAgLnF1aWNrLWxldmVscy1jb250YWluZXIsXG4gIC5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICB9XG5cbiAgLnBpY2tlci1hY3RpdmUtYmFkZ2UsXG4gIC50cmlnZ2VyLWxlYWRpbmctaWNvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgfVxuXG4gIC5waWNrZXItdHJpZ2dlci1ib3gsXG4gIC5xdWljay1waWxsLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICB9XG4gIH1cblxuICAudHJpZ2dlci10cmFpbGluZy1hcnJvdyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1yYWlzZWQpO1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIH1cblxuICAucGlja2VyLXRyaWdnZXItYm94OmhvdmVyIC50cmlnZ2VyLXRyYWlsaW5nLWFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB9XG5cbiAgLnF1aWNrLXBpbGwtYnRuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzZkMjhkOSk7XG4gICAgYm9yZGVyLWNvbG9yOiAjN2MzYWVkO1xuICB9XG5cbiAgLnRleHQtY2VudGVyIHNwYW4gaW9uLWJ1dHRvbltjb2xvcj1cInByaW1hcnlcIl06aG92ZXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWN0aW9uLXB1cnBsZSk7XG4gIH1cblxuICBpb24tZmFiW2hvcml6b250YWw9XCJlbmRcIl0gaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWN0aW9uLXB1cnBsZSk7XG4gIH1cbn1cbiIsIi8vIEluY2x1ZGVkIGJ5IG93bmVkIHBhZ2VzIG9ubHk7IEFuZ3VsYXIgbXVzdCBtYXRjaCB0aGUgdGhlbWUgb24gYW4gYW5jZXN0b3IuXG5AbWl4aW4gcGFnZS1kYXJrLXBhbGV0dGUge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0taW5rOiAjZjJlZWZiO1xuICAtLWluay1zZWNvbmRhcnk6ICNkNWNmZTU7XG4gIC0tbXV0ZWQ6ICNhYWExYmQ7XG4gIC0tcHVycGxlOiAjYzRiNWZkO1xuICAtLXB1cnBsZS1kYXJrOiAjZGRkNmZlO1xuICAtLXB1cnBsZS1saWdodDogIzMwMjQ0ODtcbiAgLS1hbWJlci1kYXJrOiAjZmJiZjI0O1xuICAtLWFtYmVyLWxpZ2h0OiAjM2IyZDIwO1xuICAtLWVtZXJhbGQ6ICMzNGQzOTk7XG4gIC0tZW1lcmFsZC1kYXJrOiAjNmVlN2I3O1xuICAtLWVtZXJhbGQtbGlnaHQ6ICMxNzNiMzI7XG4gIC0tcm9zZTogI2ZkYTRhZjtcbiAgLS1yb3NlLWxpZ2h0OiAjNDIyNDMyO1xuICAtLXNreTogIzdkZDNmYztcbiAgLS1za3ktbGlnaHQ6ICMxOTM5NGI7XG4gIC0tcGFwZXI6ICMyMTFjMzI7XG4gIC0tYmctY2FudmFzOiAjMTQxMjIzO1xuICAtLWJvcmRlci1zb2Z0OiAjMzkzMTRmO1xuICAtLWNhcmQtYmc6ICMyMTFjMzI7XG4gIC0tc3VyZmFjZS1yYWlzZWQ6ICMyYTI0M2Q7XG4gIC0tYWN0aW9uLXB1cnBsZTogIzZkMjhkOTtcbiAgLS1hY3Rpb24tcHVycGxlLWRhcms6ICM1ODFjODc7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMCwgMTgsIDM1O1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjQyLCAyMzgsIDI1MTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgLS1pb24tdG9vbGJhci1jb2xvcjogdmFyKC0taW5rKTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuXG4vLyBSZXBhaXJzIGNvbW1vbi1wYWdlIHN0eWxlcyBsb2NhbGx5IHdpdGhvdXQgbW9kaWZ5aW5nIHRoZSBzaGFyZWQgc291cmNlLlxuQG1peGluIHBhZ2UtZGFyay1jb21tb24ge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgQGluY2x1ZGUgcGFnZS1kYXJrLXBhbGV0dGU7XG5cbiAgICAubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzMsIDI4LCA1MCwgLjk2KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIH1cblxuICAgIC5oZWFkZXItc2VhcmNoLWJhcixcbiAgICAuZWxlbWVudGFyeS10YWJzIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pbnB1dC13cmFwLFxuICAgIC5jb250ZW50LXBhZ2UtY2FyZCxcbiAgICAuZmxvYXRpbmctaWNvbixcbiAgICAuc3VnZ2VzdGlvbi1ib3gsXG4gICAgLnN1Z2dlc3Rpb24tY2hpcHMgLmNoaXAtbGluayxcbiAgICAuc3RhdHVzLWFjdGlvbnMgLmJ0bi5vdXRsaW5lIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQsXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlcixcbiAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1idG4uZ2hvc3Q6aG92ZXIsXG4gICAgLnN0YXR1cy1hY3Rpb25zIC5idG4uc2Vjb25kYXJ5OmhvdmVyLFxuICAgIC5zdWdnZXN0aW9uLWNoaXBzIC5jaGlwLWxpbms6aG92ZXIsXG4gICAgLmVsZW1lbnRhcnktdGFicyAudGFiLWJ0bi5hY3RpdmUsXG4gICAgLmVsZW1lbnRhcnktdGFicyAudGFiLWJ0bjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1yYWlzZWQpO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnRuLnByaW1hcnksXG4gICAgLnN0YXR1cy1hY3Rpb25zIC5idG4ucHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1hY3Rpb24tcHVycGxlKSwgdmFyKC0tYWN0aW9uLXB1cnBsZS1kYXJrKSk7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1hY3Rpb25zIC5idG4uYW1iZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiwgI2Q5NzcwNik7XG4gICAgICBjb2xvcjogIzIzMTcwYjtcbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlvbi10ZXh0W2NvbG9yPVwicHJpbWFyeVwiXSxcbiAgICBpb24tdGV4dFtjb2xvcj1cImluc3RhZ3JhbVwiXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cInN1Y2Nlc3NcIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tZW1lcmFsZCkgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cIndhcm5pbmdcIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tYW1iZXItZGFyaykgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcbiAgICB9XG5cbiAgICBpb24tdGV4dFtjb2xvcj1cImRhbmdlclwiXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1yb3NlKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLXJvc2UpO1xuICAgIH1cblxuICAgIGlvbi10ZXh0W2NvbG9yPVwibGlnaHRcIl0ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 3839:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/exam/exam.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" dir=\"rtl\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.exam/exam\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"action-btn ghost\" (click)=\"showSearchbar = !showSearchbar\" title=\"جستجو\">\r\n        <ion-icon name=\"search-outline\"></ion-icon>\r\n      </button>\n</div>\n\n<div class=\"header-search-bar\" *ngIf=\"showSearchbar\">\r\n    <div class=\"search-input-wrap\">\r\n      <ion-icon name=\"search-outline\"></ion-icon>\r\n      <input\r\n        type=\"search\"\r\n        [(ngModel)]=\"courseSearch\"\r\n        placeholder=\"جستجوی دوره برای آزمون...\"\r\n        (keyup.enter)=\"setQueryParams(1)\"\r\n        autofocus\r\n      />\r\n      <button type=\"button\" class=\"action-btn primary\" (click)=\"setQueryParams(1)\">جستجو</button>\r\n      <button type=\"button\" class=\"action-btn ghost\" (click)=\"onCancel()\">انصراف</button>\r\n    </div>\r\n  </div>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"exam-content\" dir=\"rtl\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"exam-page-shell\">\r\n    <div class=\"backdrop-glows\" aria-hidden=\"true\">\r\n      <div class=\"glow-orb glow-purple\"></div>\r\n      <div class=\"glow-orb glow-amber\"></div>\r\n      <div class=\"glow-orb glow-emerald\"></div>\r\n    </div>\r\n\r\n    <!-- Playful Floating Icons -->\r\n    <span class=\"floating-decor pencil\" aria-hidden=\"true\">📝</span>\r\n    <span class=\"floating-decor star\" aria-hidden=\"true\">✦</span>\r\n    <span class=\"floating-decor book\" aria-hidden=\"true\">🎓</span>\r\n    <span class=\"floating-decor sparkle\" aria-hidden=\"true\">✨</span>\r\n\r\n    <ion-grid class=\"bg no-padding\">\r\n    <ion-row *ngIf=\"!isCourseSelected && !isPlacement\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle class=\"text-center\"\r\n              >دوره ای که میخوای آزمون بدی انتخاب کن</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\">لیست دوره ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"10\"\r\n                    offset=\"1\"\r\n                    size-md=\"8\"\r\n                    offset-md=\"2\"\r\n                    size-xl=\"6\"\r\n                    offset-xl=\"3\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      color=\"instagram\"\r\n                      shape=\"round\"\r\n                      (click)=\"onPlacementClick()\"\r\n                      routerLink=\"{{ '/Exam/' + 0 }}\"\r\n                    >\r\n                      آزمون تعیین سطح\r\n                      <ion-icon slot=\"start\" name=\"flask-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"4\"\r\n                  >\r\n                    <!-- <app-course-question\r\n                        *ngIf=\"windowWidth > 600\"\r\n                        [course]=\"course\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-course-question> -->\r\n                    <ion-item\r\n                      routerLink=\"{{ '/Exam/' + course.id }}\"\r\n                      (click)=\"onSelectItem(course)\"\r\n                    >\r\n                      <ion-avatar slot=\"start\">\r\n                        <img [src]=\"course.imageUrl\" />\r\n                      </ion-avatar>\r\n                      <ion-label>{{ course.name }}</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"!filteredCourses.courses && notfound\"\r\n                  class=\"text-center\"\r\n                >\r\n                  <ion-col size=\"10\" offset=\"1\">\r\n                    <ion-img\r\n                      class=\"no-found\"\r\n                      src=\"./assets/images/error404.png\"\r\n                    ></ion-img>\r\n                    <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-toolbar>\r\n                        <ion-title\r\n                          ><h2 class=\"text-center mmargin\">\r\n                            موردی یافت نشد\r\n                          </h2></ion-title\r\n                        >\r\n                      </ion-toolbar>\r\n                    </ion-footer>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses.courses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <section *ngIf=\"!isCourseSelected && isPlacement\">\r\n      <ion-row *ngIf=\"!login\">\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >برای شرکت در آزمون باید عضو باشید</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-item>\r\n                <ion-label>ویدیو آموزش آزمون تعیین سطح</ion-label>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"arrow-down-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <div class=\"h_iframe-aparat_embed_frame\">\r\n                <span class=\"video-span\"></span\r\n                ><iframe\r\n                  [src]=\"checkURL()\"\r\n                  title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                  allowfullscreen=\"true\"\r\n                  webkitallowfullscreen=\"true\"\r\n                  mozallowfullscreen=\"true\"\r\n                ></iframe>\r\n              </div>\r\n\r\n              <ion-item>\r\n                <ion-label>{{ \"ویدیو آموزش آزمون تعیین سطح\" }}</ion-label>\r\n                <a\r\n                  class=\"decoration-none\"\r\n                  [href]=\"checkVideoUrl()\"\r\n                  target=\"_blank\"\r\n                  title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                  ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"download-outline\"\r\n                    ></ion-icon> </ion-button\r\n                ></a>\r\n              </ion-item>\r\n\r\n              <ion-textarea>\r\n                <h4>توضیحات و قوانین آزمون:</h4>\r\n                <div [class]=\"readMore\">\r\n                  ضمن آرزوی موفقیت در آزمون جامع تعیین سطح اول آموز، این ارزیابی با هدف سنجش مهارت‌های تخصصی آموزگاران در زمینه‌های روش تدریس خلاق، تقویت خواندن و نوشتن، مفاهیم ریاضی و مدیریت کلاس درس طراحی گردیده است.\r\n                  تمامی سوالات به صورت چهارگزینه‌ای بوده و هر سوال دارای مدت‌زمان پاسخگویی مشخص است. در صورت اتمام زمان بدون انتخاب گزینه، سامانه به صورت خودکار به سوال بعد منتقل خواهد شد.\r\n                  هدف این ارزیابی، شناسایی نقاط قوت و اولویت‌های آموزشی شما همکار گرامی است تا مناسب‌ترین دوره‌ها و بسته‌های توانمندسازی به شما پیشنهاد شود.\r\n                  پس از کسب نمره قبولی، گواهینامه معتبر با کد رهگیری و بارکد استعلام صادر خواهد شد. لطفاً پیش از آغاز آزمون از پایداری اتصال اینترنت خود اطمینان حاصل نمایید.\r\n                  <br />\r\n                  با آرزوی موفقیت و درخشش در کلاس درس\r\n                </div>\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readMore'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  نمایش بیشتر\r\n                  <ion-icon\r\n                    slot=\"end\"\r\n                    name=\"chevron-down-outline\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readLess'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  بستن\r\n                  <ion-icon\r\n                    slot=\"end\"\r\n                    name=\"chevron-up-outline\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n              </ion-textarea>\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h3>این بخش فقط برای اعضای سایت باز میباشد</h3>\r\n              </ion-text>\r\n              <ion-item button routerLink=\"/Account\" class=\"text-center\">\r\n                <ion-label color=\"success\" class=\"text-center\"\r\n                  >عضویت / ورود</ion-label\r\n                >\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"login && !isCourseLoading\">\r\n        <ion-col\r\n          *ngIf=\"exam\"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card *ngIf=\"exam.examId != 0 && !exam.isStart\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون تعیین سطح</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL()\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون تعیین سطح\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت در آزمون جامع تعیین سطح اول آموز، این ارزیابی با هدف سنجش مهارت‌های تخصصی آموزگاران در زمینه‌های روش تدریس خلاق، تقویت خواندن و نوشتن، مفاهیم ریاضی و مدیریت کلاس درس طراحی گردیده است.\r\n                        تمامی سوالات به صورت چهارگزینه‌ای بوده و هر سوال دارای مدت‌زمان پاسخگویی مشخص است. در صورت اتمام زمان بدون انتخاب گزینه، سامانه به صورت خودکار به سوال بعد منتقل خواهد شد.\r\n                        هدف این ارزیابی، شناسایی نقاط قوت و اولویت‌های آموزشی شما همکار گرامی است تا مناسب‌ترین دوره‌ها و بسته‌های توانمندسازی به شما پیشنهاد شود.\r\n                        پس از کسب نمره قبولی، گواهینامه معتبر با کد رهگیری و بارکد استعلام صادر خواهد شد. لطفاً پیش از آغاز آزمون از پایداری اتصال اینترنت خود اطمینان حاصل نمایید.\r\n                        <br />\r\n                        با آرزوی موفقیت و درخشش در کلاس درس\r\n                      </div>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label class=\"text-center\" color=\"instagram\"\r\n                        >مجوز برای شما صادر شده و یک آزمون دارید</ion-label\r\n                      >\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>سطح آزمون: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ \"سطح \" + exam.level }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-button\r\n                dir=\"rtl\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"presentAlertonStartExam()\"\r\n              >\r\n                شروع آزمون\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card *ngIf=\"exam.examId != 0 && exam.isStart\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون تعیین سطح</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL()\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون تعیین سطح\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت در آزمون جامع تعیین سطح اول آموز، این ارزیابی با هدف سنجش مهارت‌های تخصصی آموزگاران در زمینه‌های روش تدریس خلاق، تقویت خواندن و نوشتن، مفاهیم ریاضی و مدیریت کلاس درس طراحی گردیده است.\r\n                        تمامی سوالات به صورت چهارگزینه‌ای بوده و هر سوال دارای مدت‌زمان پاسخگویی مشخص است. در صورت اتمام زمان بدون انتخاب گزینه، سامانه به صورت خودکار به سوال بعد منتقل خواهد شد.\r\n                        هدف این ارزیابی، شناسایی نقاط قوت و اولویت‌های آموزشی شما همکار گرامی است تا مناسب‌ترین دوره‌ها و بسته‌های توانمندسازی به شما پیشنهاد شود.\r\n                        پس از کسب نمره قبولی، گواهینامه معتبر با کد رهگیری و بارکد استعلام صادر خواهد شد. لطفاً پیش از آغاز آزمون از پایداری اتصال اینترنت خود اطمینان حاصل نمایید.\r\n                        <br />\r\n                        با آرزوی موفقیت و درخشش در کلاس درس\r\n                      </div>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label class=\"text-center\" color=\"instagram\"\r\n                        >مجوز برای شما صادر شده و یک آزمون دارید</ion-label\r\n                      >\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>سطح آزمون: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ \"سطح \" + exam.level }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-button\r\n                dir=\"rtl\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"presentAlertonStartExam()\"\r\n              >\r\n                ادامه آزمون\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"exam.examId == 0\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون تعیین سطح</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL()\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون تعیین سطح\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون تعیین سطح\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت در آزمون جامع تعیین سطح اول آموز، این ارزیابی با هدف سنجش مهارت‌های تخصصی آموزگاران در زمینه‌های روش تدریس خلاق، تقویت خواندن و نوشتن، مفاهیم ریاضی و مدیریت کلاس درس طراحی گردیده است.\r\n                        تمامی سوالات به صورت چهارگزینه‌ای بوده و هر سوال دارای مدت‌زمان پاسخگویی مشخص است. در صورت اتمام زمان بدون انتخاب گزینه، سامانه به صورت خودکار به سوال بعد منتقل خواهد شد.\r\n                        هدف این ارزیابی، شناسایی نقاط قوت و اولویت‌های آموزشی شما همکار گرامی است تا مناسب‌ترین دوره‌ها و بسته‌های توانمندسازی به شما پیشنهاد شود.\r\n                        پس از کسب نمره قبولی، گواهینامه معتبر با کد رهگیری و بارکد استعلام صادر خواهد شد. لطفاً پیش از آغاز آزمون از پایداری اتصال اینترنت خود اطمینان حاصل نمایید.\r\n                        <br />\r\n                        با آرزوی موفقیت و درخشش در کلاس درس\r\n                      </div>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label>تعداد شرکت در آزمون شما: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ requestExamCount }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"pencil-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <!-- Redesigned Exam Level Selection -->\r\n                    <div class=\"exam-level-picker-card\" dir=\"rtl\" *ngIf=\"exam.examLevelCount\">\r\n                      <div class=\"picker-header\">\r\n                        <div class=\"picker-title-group\">\r\n                          <div class=\"picker-icon-badge\">\r\n                            <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n                          </div>\r\n                          <div class=\"picker-text-wrap\">\r\n                            <h4 class=\"picker-main-title\">سطح آزمون</h4>\r\n                            <span class=\"picker-subtitle\">\r\n                              سطح مورد نظر خود را انتخاب کنید ({{ exam.examLevelCount }} سطح موجود)\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"picker-active-badge\">\r\n                          <span class=\"badge-dot\"></span>\r\n                          <span class=\"badge-text\">{{ \"سطح \" + selectedExamLevel }}</span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"picker-trigger-box\">\r\n                        <div class=\"trigger-leading-icon\">\r\n                          <ion-icon name=\"layers-outline\"></ion-icon>\r\n                        </div>\r\n                        <div class=\"trigger-content\">\r\n                          <span class=\"trigger-caption\">انتخاب از فهرست سطوح:</span>\r\n                          <span class=\"trigger-value\">{{ \"سطح \" + selectedExamLevel }}</span>\r\n                        </div>\r\n                        <div class=\"trigger-trailing-arrow\">\r\n                          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                        </div>\r\n                        <ion-select\r\n                          class=\"custom-exam-level-select\"\r\n                          (ionChange)=\"onLevelChanged()\"\r\n                          [(ngModel)]=\"selectedExamLevel\"\r\n                          [interfaceOptions]=\"levelSelectInterfaceOptions\"\r\n                          okText=\"تایید و انتخاب\"\r\n                          cancelText=\"انصراف\"\r\n                          placeholder=\"انتخاب سطح آزمون\"\r\n                        >\r\n                          <ion-select-option\r\n                            [value]=\"(i + 1).toString()\"\r\n                            *ngFor=\"\r\n                              let level of MakePageCountArray(exam.examLevelCount);\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            {{ \"سطح \" + (i + 1) }}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </div>\r\n\r\n                      <div class=\"quick-levels-container\" *ngIf=\"exam.examLevelCount > 1\">\r\n                        <div class=\"quick-levels-header\">\r\n                          <ion-icon name=\"flash-outline\"></ion-icon>\r\n                          <span>دسترسی سریع به سطوح:</span>\r\n                        </div>\r\n                        <div class=\"quick-pills-wrap\">\r\n                          <button\r\n                            type=\"button\"\r\n                            class=\"quick-pill-btn\"\r\n                            *ngFor=\"let level of MakePageCountArray(exam.examLevelCount); let i = index\"\r\n                            [class.active]=\"selectedExamLevel == (i + 1).toString()\"\r\n                            (click)=\"selectLevel(i + 1)\"\r\n                          >\r\n                            <ion-icon [name]=\"selectedExamLevel == (i + 1).toString() ? 'checkmark-circle' : 'ribbon-outline'\"></ion-icon>\r\n                            <span>{{ \"سطح \" + (i + 1) }}</span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <ion-button\r\n                      dir=\"rtl\"\r\n                      color=\"success\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      (click)=\"presentAlertMakeFreeExam()\"\r\n                    >\r\n                      ایجاد و شروع آزمون\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </section>\r\n\r\n    <section *ngIf=\"isCourseSelected && !isPlacement\">\r\n      <ion-row *ngIf=\"isCourseSelected && !login\">\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >برای شرکت در آزمون باید عضو باشید</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-item>\r\n                <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"arrow-down-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <div class=\"h_iframe-aparat_embed_frame\">\r\n                <span class=\"video-span\"></span\r\n                ><iframe\r\n                  [src]=\"checkURL2()\"\r\n                  title=\"ویدیو آموزش آزمون دوره\"\r\n                  allowfullscreen=\"true\"\r\n                  webkitallowfullscreen=\"true\"\r\n                  mozallowfullscreen=\"true\"\r\n                ></iframe>\r\n              </div>\r\n\r\n              <ion-item>\r\n                <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                <a\r\n                  class=\"decoration-none\"\r\n                  [href]=\"checkVideoUrl2()\"\r\n                  target=\"_blank\"\r\n                  title=\"ویدیو آموزش آزمون دوره\"\r\n                  ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"download-outline\"\r\n                    ></ion-icon> </ion-button\r\n                ></a>\r\n              </ion-item>\r\n\r\n              <ion-textarea>\r\n                <h4>توضیحات و قوانین آزمون:</h4>\r\n                <div [class]=\"readMore\">\r\n                  ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                  آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                  سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                  شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                  نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                  میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                  است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                  نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                  نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                  دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                  الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                  تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                  که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                  جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                  حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                  پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                  رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                  شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                  باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                  قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                  لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                  کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                  نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                  خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                  صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                  آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                  <br />\r\n                  موفق باشید\r\n                </div>\r\n\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readMore'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  نمایش بیشتر\r\n                  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readLess'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  بستن\r\n                  <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-textarea>\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h3>این بخش فقط برای اعضای سایت باز میباشد</h3>\r\n              </ion-text>\r\n              <ion-item button routerLink=\"/Account\" class=\"text-center\">\r\n                <ion-label color=\"success\" class=\"text-center\"\r\n                  >عضویت / ورود</ion-label\r\n                >\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row\r\n        *ngIf=\"isCourseSelected && login && course != null && !isCourseLoading\"\r\n      >\r\n        <ion-col\r\n          *ngIf=\"!CheckBuy()\"\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-item>\r\n                <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"arrow-down-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n\r\n              <div class=\"h_iframe-aparat_embed_frame\">\r\n                <span class=\"video-span\"></span\r\n                ><iframe\r\n                  [src]=\"checkURL2()\"\r\n                  title=\"ویدیو آموزش آزمون دوره\"\r\n                  allowfullscreen=\"true\"\r\n                  webkitallowfullscreen=\"true\"\r\n                  mozallowfullscreen=\"true\"\r\n                ></iframe>\r\n              </div>\r\n\r\n              <ion-item>\r\n                <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                <a\r\n                  class=\"decoration-none\"\r\n                  [href]=\"checkVideoUrl2()\"\r\n                  target=\"_blank\"\r\n                  title=\"ویدیو آموزش آزمون دوره\"\r\n                  ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"download-outline\"\r\n                    ></ion-icon> </ion-button\r\n                ></a>\r\n              </ion-item>\r\n\r\n              <ion-textarea>\r\n                <h4>توضیحات و قوانین آزمون:</h4>\r\n                <div [class]=\"readMore\">\r\n                  ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                  آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                  سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                  شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                  نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                  میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                  است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                  نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                  نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                  دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                  الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                  تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                  که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                  جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                  حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                  پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                  رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                  شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                  باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                  قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                  لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                  کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                  نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                  خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                  صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                  آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                  <br />\r\n                  موفق باشید\r\n                </div>\r\n\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readMore'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  نمایش بیشتر\r\n                  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"readMore == 'readLess'\"\r\n                  color=\"telegram\"\r\n                  (click)=\"onReadMoreOrLess()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  بستن\r\n                  <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-textarea>\r\n              <ion-text color=\"danger\" class=\"text-center\">\r\n                <h3>شما این دوره را تهیه نکرده اید</h3>\r\n              </ion-text>\r\n              <ion-item\r\n                button\r\n                routerLink=\"{{ '/c/' + selectedCourseId }}\"\r\n                class=\"text-center\"\r\n              >\r\n                <ion-label color=\"success\" class=\"text-center\">{{\r\n                  course.name\r\n                }}</ion-label>\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col\r\n          *ngIf=\"CheckBuy() && exam\"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card *ngIf=\"exam.examId != 0 && exam.isPay && !exam.isStart\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-subtitle\r\n                class=\"text-center link-pointer\"\r\n                routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                >{{ exam.courseName }}</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL2()\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl2()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                        آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                        سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                        شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                        نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                        میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                        است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                        نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                        نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                        دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                        الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                        تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                        که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                        جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                        حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                        پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                        رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                        شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                        باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                        قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                        لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                        کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                        نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                        خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                        صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                        آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                        <br />\r\n                        موفق باشید\r\n                      </div>\r\n\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label class=\"text-center\" color=\"instagram\"\r\n                        >مجوز برای شما صادر شده و یک آزمون دارید</ion-label\r\n                      >\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>سطح آزمون: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ \"سطح \" + exam.level }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-button\r\n                dir=\"rtl\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"presentAlertonStartExam()\"\r\n              >\r\n                شروع آزمون\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card *ngIf=\"exam.examId != 0 && exam.isPay && exam.isStart\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-subtitle\r\n                class=\"text-center link-pointer\"\r\n                routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                >{{ exam.courseName }}</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL2()\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl2()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                        آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                        سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                        شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                        نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                        میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                        است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                        نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                        نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                        دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                        الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                        تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                        که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                        جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                        حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                        پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                        رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                        شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                        باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                        قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                        لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                        کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                        نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                        خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                        صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                        آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                        <br />\r\n                        موفق باشید\r\n                      </div>\r\n\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label class=\"text-center\" color=\"instagram\"\r\n                        >مجوز برای شما صادر شده و یک آزمون دارید</ion-label\r\n                      >\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>سطح آزمون: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ \"سطح \" + exam.level }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-button\r\n                dir=\"rtl\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"presentAlertonStartExam()\"\r\n              >\r\n                ادامه آزمون\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card *ngIf=\"exam.examId != 0 && !exam.isPay\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-subtitle\r\n                class=\"text-center link-pointer\"\r\n                routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                >{{ exam.courseName }}</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL2()\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl2()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                        آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                        سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                        شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                        نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                        میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                        است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                        نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                        نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                        دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                        الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                        تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                        که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                        جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                        حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                        پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                        رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                        شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                        باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                        قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                        لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                        کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                        نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                        خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                        صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                        آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                        <br />\r\n                        موفق باشید\r\n                      </div>\r\n\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label class=\"text-center\" color=\"instagram\"\r\n                        >هزینه مجوز آزمون را پرداخت نکرده اید</ion-label\r\n                      >\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>سطح آزمون: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ \"سطح \" + exam.level }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>هزینه شرکت در آزمون: </ion-label>\r\n                      <ion-text color=\"success\">\r\n                        {{ exam.examPrice | rial }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>موجودی کیف پول: </ion-label>\r\n                      <ion-text\r\n                        color=\"{{\r\n                          wallet >= exam.examPrice ? 'success' : 'danger'\r\n                        }}\"\r\n                      >\r\n                        {{ wallet | rial }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"{{\r\n                          wallet >= exam.examPrice ? 'success' : 'danger'\r\n                        }}\"\r\n                        slot=\"start\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-list dir=\"rtl\" class=\"ion-margin\">\r\n                <ion-radio-group [(ngModel)]=\"selectedPay\">\r\n                  <ion-list-header>\r\n                    <ion-label>نوع پرداخت</ion-label>\r\n                  </ion-list-header>\r\n\r\n                  <ion-item>\r\n                    <ion-label>پرداخت آنلاین</ion-label>\r\n                    <ion-radio\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      value=\"1\"\r\n                    ></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label>کیف پول</ion-label>\r\n                    <ion-radio\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      value=\"2\"\r\n                    ></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                dir=\"rtl\"\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"presentAlertonPayExam2()\"\r\n              >\r\n                پرداخت هزینه آزمون\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card *ngIf=\"exam.examId == 0\">\r\n            <ion-list dir=\"rtl\">\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/Exam\" color=\"danger\"\r\n                  >بازگشت\r\n                </ion-button>\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-header dir=\"rtl\">\r\n              <ion-card-subtitle\r\n                class=\"text-center link-pointer\"\r\n                routerLink=\"{{ '/c/' + exam.courseId }}\"\r\n                >{{ exam.courseName }}</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <!-- <br />\r\n            <section dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h3>قوانین شرکت در آزمون</h3>\r\n              </ion-text>\r\n              <ion-text color=\"light\" class=\"text-center\">\r\n                قوانین و قواعد\r\n              </ion-text>\r\n            </section>\r\n            <br /> -->\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    size-md=\"10\"\r\n                    offset-md=\"1\"\r\n                    size-lg=\"8\"\r\n                    offset-lg=\"2\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>ویدیو آموزش آزمون دوره</ion-label>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"arrow-down-circle-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"h_iframe-aparat_embed_frame\">\r\n                      <span class=\"video-span\"></span\r\n                      ><iframe\r\n                        [src]=\"checkURL2()\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        allowfullscreen=\"true\"\r\n                        webkitallowfullscreen=\"true\"\r\n                        mozallowfullscreen=\"true\"\r\n                      ></iframe>\r\n                    </div>\r\n\r\n                    <ion-item>\r\n                      <ion-label>{{ \"ویدیو آموزش آزمون دوره\" }}</ion-label>\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        [href]=\"checkVideoUrl2()\"\r\n                        target=\"_blank\"\r\n                        title=\"ویدیو آموزش آزمون دوره\"\r\n                        ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"download-outline\"\r\n                          ></ion-icon> </ion-button\r\n                      ></a>\r\n                    </ion-item>\r\n\r\n                    <ion-textarea>\r\n                      <h4>توضیحات و قوانین آزمون:</h4>\r\n                      <div [class]=\"readMore\">\r\n                        ضمن آرزوی موفقیت شما در آزمون لازم به ذکر است که تعداد سوالات\r\n                        آزمون 16 تا میباشد و برای کسب نمره قبولی لازم است حداقل به 10\r\n                        سوال بطور صحیح پاسخ بدهید. تمامی سوالات تستی و 4 گزینه ای طرح\r\n                        شده. تمامی سوالات دارای زمان جداگانه است و در صورت انتخاب\r\n                        نکردن گزینه و اتمام زمان، بطور اتوماتیک سوال بعدی بارگزاری\r\n                        میشود و امکان بازگشت به سوال قبل وجود ندارد. بعضی سوالات ممکن\r\n                        است حاوی تصویر و یا توضیحات تکمیلی باشد. پس از اتمام آزمون\r\n                        نتیجه توسط سیستم ارزیابی شده و به شما نمایش داده میشود. اگر\r\n                        نمره قبولی را کسب کرده باشید، در همان لحظه سیستم به شما امکان\r\n                        دریافت مدرک آزمون را خواهد داد. دقت شود که برای دریافت آزمون\r\n                        الزامی است که اطلاعات هویت کاربری خود را در قسمت حساب کاربری\r\n                        تکمیل کرده باشید و ادمین سایت آن را تایید کرده باشد. در صورتی\r\n                        که در آزمون قبول شده اید و اطلاعات هویتی شما تایید نشده باشد،\r\n                        جای نگرانی نیست و پس از تایید شدن میتوانید مدرک خود را در قسمت\r\n                        حساب کاربری دریافت کنید. مدارک دوره دارای اعتبار و QR Code جهت\r\n                        پیگیری میباشد. ممکن است بعضی آزمون ها برای بار اول یا دوم\r\n                        رایگان باشد که تعداد آزمون رایگان برای شما نمایش داده خواهد\r\n                        شد. در صورتی که بیش از حد مجاز برای آزمون رایگان اقدام کرده\r\n                        باشید، از شما برای شرکت در آزمون هزینه ای دریافت خواهد شد که\r\n                        قابل پرداخت از طریق کیف پول و یا درگاه پرداخت آنلاین میباشد.\r\n                        لطفا قبل از شروع آزمون اطمینان از اینترنت و شرایط مساعد حاصل\r\n                        کنید تا با مشکلاتی از قبیل قطی برق و یا اینترنت دچار دردسر\r\n                        نشوید. سیستم آزمون آنلاین اول آموز قادر به توقف آزمون شما\r\n                        خواهد بود و شما میتوانید پس از برقراری مجدد اینترنت و ورود به\r\n                        صفحه ی آزمون، با خیال راحت آزمون خود را ادامه بدهید. پاسخ‌های ثبت‌شده شما محفوظ می‌مانند و پس از برقراری اتصال می‌توانید با زدن دکمه تلاش مجدد، آزمون را ادامه دهید. در همان مرورگر و برگه، گزینه انتخاب‌شده و زمان باقی‌مانده سؤال نیز حفظ می‌شود. برای اطلاعات بیشتر لطفا قبل از\r\n                        آزمون، ویدیو آموزشی آزمون را تماشا کنید.\r\n                        <br />\r\n                        موفق باشید\r\n                      </div>\r\n\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readMore'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        نمایش بیشتر\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-down-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                      <ion-button\r\n                        *ngIf=\"readMore == 'readLess'\"\r\n                        color=\"telegram\"\r\n                        (click)=\"onReadMoreOrLess()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        بستن\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"chevron-up-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-textarea>\r\n\r\n                    <ion-item>\r\n                      <ion-label>تعداد آزمون رایگان: </ion-label>\r\n                      <ion-text color=\"success\">\r\n                        {{ exam.freeExamCount }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"create-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>تعداد شرکت در آزمون شما: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ requestExamCount }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"warning\"\r\n                        slot=\"start\"\r\n                        name=\"pencil-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>هزینه شرکت در آزمون: </ion-label>\r\n                      <ion-text\r\n                        color=\"{{ examPrice == 0 ? 'danger' : 'success' }}\"\r\n                      >\r\n                        <del *ngIf=\"examPrice == 0\">\r\n                          {{ exam.examPrice | rial }}</del\r\n                        >\r\n                        <span *ngIf=\"examPrice != 0\">\r\n                          {{ exam.examPrice | rial }}</span\r\n                        >\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"{{ examPrice == 0 ? 'danger' : 'success' }}\"\r\n                        slot=\"start\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>موجودی کیف پول: </ion-label>\r\n                      <ion-text\r\n                        color=\"{{\r\n                          wallet >= exam.examPrice ? 'success' : 'danger'\r\n                        }}\"\r\n                      >\r\n                        {{ wallet | rial }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"{{\r\n                          wallet >= exam.examPrice ? 'success' : 'danger'\r\n                        }}\"\r\n                        slot=\"start\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"examPrice == 0\">\r\n                      <ion-label>هزینه شرکت در آزمون برای شما: </ion-label>\r\n                      <ion-text color=\"success\">\r\n                        {{ examPrice | rial }}\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        name=\"cash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n\r\n                    <!-- Redesigned Exam Level Selection -->\r\n                    <div class=\"exam-level-picker-card\" dir=\"rtl\" *ngIf=\"exam.examLevelCount\">\r\n                      <div class=\"picker-header\">\r\n                        <div class=\"picker-title-group\">\r\n                          <div class=\"picker-icon-badge\">\r\n                            <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n                          </div>\r\n                          <div class=\"picker-text-wrap\">\r\n                            <h4 class=\"picker-main-title\">سطح آزمون</h4>\r\n                            <span class=\"picker-subtitle\">\r\n                              سطح مورد نظر خود را انتخاب کنید ({{ exam.examLevelCount }} سطح موجود)\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"picker-active-badge\">\r\n                          <span class=\"badge-dot\"></span>\r\n                          <span class=\"badge-text\">{{ \"سطح \" + selectedExamLevel }}</span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"picker-trigger-box\">\r\n                        <div class=\"trigger-leading-icon\">\r\n                          <ion-icon name=\"layers-outline\"></ion-icon>\r\n                        </div>\r\n                        <div class=\"trigger-content\">\r\n                          <span class=\"trigger-caption\">انتخاب از فهرست سطوح:</span>\r\n                          <span class=\"trigger-value\">{{ \"سطح \" + selectedExamLevel }}</span>\r\n                        </div>\r\n                        <div class=\"trigger-trailing-arrow\">\r\n                          <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                        </div>\r\n                        <ion-select\r\n                          class=\"custom-exam-level-select\"\r\n                          (ionChange)=\"onLevelChanged()\"\r\n                          [(ngModel)]=\"selectedExamLevel\"\r\n                          [interfaceOptions]=\"levelSelectInterfaceOptions\"\r\n                          okText=\"تایید و انتخاب\"\r\n                          cancelText=\"انصراف\"\r\n                          placeholder=\"انتخاب سطح آزمون\"\r\n                        >\r\n                          <ion-select-option\r\n                            [value]=\"(i + 1).toString()\"\r\n                            *ngFor=\"\r\n                              let level of MakePageCountArray(exam.examLevelCount);\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            {{ \"سطح \" + (i + 1) }}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </div>\r\n\r\n                      <div class=\"quick-levels-container\" *ngIf=\"exam.examLevelCount > 1\">\r\n                        <div class=\"quick-levels-header\">\r\n                          <ion-icon name=\"flash-outline\"></ion-icon>\r\n                          <span>دسترسی سریع به سطوح:</span>\r\n                        </div>\r\n                        <div class=\"quick-pills-wrap\">\r\n                          <button\r\n                            type=\"button\"\r\n                            class=\"quick-pill-btn\"\r\n                            *ngFor=\"let level of MakePageCountArray(exam.examLevelCount); let i = index\"\r\n                            [class.active]=\"selectedExamLevel == (i + 1).toString()\"\r\n                            (click)=\"selectLevel(i + 1)\"\r\n                          >\r\n                            <ion-icon [name]=\"selectedExamLevel == (i + 1).toString() ? 'checkmark-circle' : 'ribbon-outline'\"></ion-icon>\r\n                            <span>{{ \"سطح \" + (i + 1) }}</span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <ion-list dir=\"rtl\" class=\"pay-type-list\" *ngIf=\"examPrice != 0\">\r\n                      <ion-radio-group [(ngModel)]=\"selectedPay\">\r\n                        <ion-list-header>\r\n                          <ion-label>نوع پرداخت</ion-label>\r\n                        </ion-list-header>\r\n\r\n                        <ion-item>\r\n                          <ion-label>پرداخت آنلاین</ion-label>\r\n                          <ion-radio\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            value=\"1\"\r\n                          ></ion-radio>\r\n                        </ion-item>\r\n\r\n                        <ion-item>\r\n                          <ion-label>کیف پول</ion-label>\r\n                          <ion-radio\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            value=\"2\"\r\n                          ></ion-radio>\r\n                        </ion-item>\r\n                      </ion-radio-group>\r\n                    </ion-list>\r\n\r\n                    <ion-button\r\n                      dir=\"rtl\"\r\n                      color=\"success\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      (click)=\"presentAlertonBeginExam()\"\r\n                    >\r\n                      دریافت مجوز آزمون\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </section>\r\n  </ion-grid>\r\n  </div>\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button color=\"warning\" (click)=\"goTop()\">\r\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_exam_exam_module_ts.js.map