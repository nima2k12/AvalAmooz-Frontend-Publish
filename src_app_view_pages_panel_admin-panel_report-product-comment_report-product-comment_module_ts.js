"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_report-product-comment_report-product-comment_module_ts"],{

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

/***/ 34039:
/*!**************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/report-product-comment/report-product-comment-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportProductCommentPageRoutingModule": () => (/* binding */ ReportProductCommentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _report_product_comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-product-comment.component */ 11562);




const routes = [
    {
        path: '',
        component: _report_product_comment_component__WEBPACK_IMPORTED_MODULE_0__.ReportProductCommentPage
    }
];
let ReportProductCommentPageRoutingModule = class ReportProductCommentPageRoutingModule {
};
ReportProductCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportProductCommentPageRoutingModule);



/***/ }),

/***/ 11562:
/*!*********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/report-product-comment/report-product-comment.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportProductCommentPage": () => (/* binding */ ReportProductCommentPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _report_product_comment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-product-comment.component.html?ngResource */ 86178);
/* harmony import */ var _report_product_comment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-product-comment.component.scss?ngResource */ 96445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/common/BaseModel */ 55937);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);




/* eslint-disable @typescript-eslint/naming-convention */










let ReportProductCommentPage = class ReportProductCommentPage {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, fb, datepipe, routerOutlet) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.fb = fb;
    this.datepipe = datepipe;
    this.routerOutlet = routerOutlet;
    this.isSelected = false;
    this.unSeenReports = [];
    this.isUnSeenReportsLoading = true;
    this.selectedId = 0;
    this.search = '';
    this.notfound = false;
    this.filteredReports = new src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__.ReportFilterViewModel(1, 12, '');
    this.reportsCount = -1;
  }

  ionViewWillEnter() {
    this.isSelected = false;
    let filter;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        this.isUnSeenReportsLoading = true;
        this.unSeenReports = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
        this.isSelected = false;
        this.selectedId = 0;
        filter = new src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__.ReportFilterViewModel(1, 12, this.search);
        this.courseService.GetAdminProductCommentReportsByFilter(filter).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.filteredReports = res.data;
            this.notfound = false;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.notfound = true;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.courseService.GetAdminUnSeenProductCommentReportsList().subscribe(res => {
          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.unSeenReports = res.data;
            this.isUnSeenReportsLoading = false;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.isUnSeenReportsLoading = false;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'گزارش جدید ندارید');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.courseService.GetAdminProductCommentReportsListCount().subscribe(res => {
          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.reportsCount = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.reportsCount = -1;
          }
        }, err => {
          this.reportsCount = -1;
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
        this.isSelected = true;
        this.selectedId = +id;
        this.courseService.GetAdminProductCommentReportDetailsById(this.selectedId).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.selectedReport = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }
    });
  }

  ngOnInit() {}

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  setQueryParams2(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__.ReportFilterViewModel(page, this.filteredReports.takeEntity, this.search, this.filteredReports.sortId);
    this.filteredReports = filter;
    this.courseService.GetAdminProductCommentReportsByFilter(filter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.filteredReports = res.data;
        this.notfound = false;
      } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
        this.notfound = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage2() {
    if (this.filteredReports.startPage == null) {
      return;
    }

    if (this.filteredReports.pageId > this.filteredReports.startPage && +this.filteredReports.pageId - 1 > 0) {
      this.setQueryParams2(+this.filteredReports.pageId - 1);
    }
  }

  goNextPage2() {
    if (this.filteredReports.endPage == null) {
      return;
    }

    if (this.filteredReports.pageId < this.filteredReports.endPage) {
      this.setQueryParams2(+this.filteredReports.pageId + 1);
    }
  }

  goPage2(pageId) {
    this.setQueryParams2(+pageId);
  }

  onSelectItem(id) {// this.selectedId = +model.id;
    // this.report = model;
  }

  onVerify() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminVerifyProductCommentReport(this.selectedReport.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.selectedReport.isVerify = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentVerifyAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به تایید کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'تایید کردن',
          handler: () => {
            _this.onVerify();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeVerify() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminDeVerifyProductCommentReport(this.selectedReport.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.selectedReport.isVerify = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentDeVerifyAlertConfirm() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا عدم تایید هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'عدم تایید',
          handler: () => {
            _this2.onDeVerify();
          }
        }]
      });
      yield alert.present();
    })();
  }

};

ReportProductCommentPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet
}];

ReportProductCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-report-product-comment',
  template: _report_product_comment_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_report_product_comment_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ReportProductCommentPage);


/***/ }),

/***/ 93970:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/report-product-comment/report-product-comment.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportProductCommentPageModule": () => (/* binding */ ReportProductCommentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _report_product_comment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-product-comment-routing.module */ 34039);
/* harmony import */ var _report_product_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-product-comment.component */ 11562);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let ReportProductCommentPageModule = class ReportProductCommentPageModule {
};
ReportProductCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _report_product_comment_routing_module__WEBPACK_IMPORTED_MODULE_1__.ReportProductCommentPageRoutingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        declarations: [_report_product_comment_component__WEBPACK_IMPORTED_MODULE_2__.ReportProductCommentPage],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
        ]
    })
], ReportProductCommentPageModule);



/***/ }),

/***/ 96445:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/report-product-comment/report-product-comment.component.scss?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtcHJvZHVjdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 86178:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/report-product-comment/report-product-comment.component.html?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>گزارش تخلف</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid class=\"bg no-padding\">\r\n    <ion-row *ngIf=\"!isSelected\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\" *ngIf=\"isUnSeenReportsLoading\">\r\n          <div class=\"text-center\">\r\n            <ion-spinner name=\"dots\"></ion-spinner>\r\n          </div>\r\n        </ion-card>\r\n        <ion-card dir=\"rtl\" *ngIf=\"!isUnSeenReportsLoading\">\r\n          <section *ngIf=\"unSeenReports.length == 0\">\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <ion-badge color=\"warning\" slot=\"start\"\r\n                  >گزارش جدیدی ندارید</ion-badge\r\n                ></ion-label\r\n              >\r\n            </ion-item>\r\n          </section>\r\n          <section *ngIf=\"unSeenReports.length != 0\">\r\n            <ion-list-header>\r\n              <ion-label color=\"medium\">گزارش های جدید دارید</ion-label>\r\n            </ion-list-header>\r\n            <ion-item\r\n              *ngFor=\"let course of unSeenReports; let i = index\"\r\n              routerLink=\"{{ '/AdminPanel/ReportProductComment/' + course.courseId }}\"\r\n              [queryParams]=\"{\r\n                page: 1,\r\n                take: 12,\r\n                title: null,\r\n                sortId: 0\r\n              }\"\r\n            >\r\n              <ion-label>{{ i + 1 + \". \" + course.courseName }}</ion-label>\r\n            </ion-item>\r\n          </section>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams2(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams2(1)\"\r\n              placeholder=\"دنبال چه گزارشی میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"search\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle class=\"text-center\"\r\n              >گزارش را انتخاب کنید</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\">لیست گزارش ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredReports\">\r\n              <ion-item lines=\"none\" dir=\"rtl\">\r\n                <ion-label color=\"success\" *ngIf=\"reportsCount !== -1\">{{\r\n                  reportsCount + \" گزارش ثبت شده \"\r\n                }}</ion-label>\r\n                <ion-label color=\"success\" *ngIf=\"reportsCount === -1\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId > 2 &&\r\n                        filteredReports.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId > 2 &&\r\n                        filteredReports.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredReports.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredReports.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredReports.pageId <= i + 2 &&\r\n                          filteredReports.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredReports.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredReports.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId + 1 < filteredReports.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId + 1 < filteredReports.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(filteredReports.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredReports.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredReports.reports\" dir=\"rtl\">\r\n                  <ion-col size=\"12\">\r\n                    <ion-list>\r\n                      <ion-card *ngFor=\"let report of filteredReports.reports\">\r\n                        <ion-card-header>\r\n                          <ion-card-subtitle>\r\n                            <ion-text>\r\n                              {{ \"تاریخ بروزرسانی: \"\r\n                              }}{{ report.lastUpdateDate | persianDate }}\r\n                              {{ \" - \" }}\r\n                            </ion-text>\r\n                            <ion-text\r\n                              *ngIf=\"report.isVerify\"\r\n                              color=\"success\"\r\n                              class=\"link-success over-hidden\"\r\n                            >\r\n                              تایید شده\r\n                              <ion-text *ngIf=\"!report.isSeen\" color=\"warning\"\r\n                                >{{ \" - پیام جدید\" }}\r\n                              </ion-text>\r\n                            </ion-text>\r\n                            <ion-text\r\n                              *ngIf=\"!report.isVerify\"\r\n                              color=\"danger\"\r\n                              class=\"link-success over-hidden\"\r\n                            >\r\n                              تایید نشده\r\n                              <ion-text *ngIf=\"!report.isSeen\" color=\"warning\"\r\n                                >{{ \" - پیام جدید\" }}\r\n                              </ion-text>\r\n                            </ion-text>\r\n                          </ion-card-subtitle>\r\n                          <ion-card-title\r\n                            ><ion-item\r\n                              button\r\n                              (click)=\"onSelectItem(report.id)\"\r\n                              routerLink=\"{{\r\n                                '/AdminPanel/ReportProductComment/' + report.id\r\n                              }}\"\r\n                              [queryParams]=\"{\r\n                                page: 1,\r\n                                take: 12,\r\n                                title: null,\r\n                                sortId: 0\r\n                              }\"\r\n                            >\r\n                              <ion-label>\r\n                                {{ report.description }}\r\n                              </ion-label>\r\n                            </ion-item></ion-card-title\r\n                          >\r\n                        </ion-card-header>\r\n                        <ion-card-content>\r\n                          <ion-text color=\"medium\">\r\n                            {{ report.createDate | persianDate }}\r\n                          </ion-text>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-list>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"!filteredReports.reports && notfound\"\r\n                  class=\"text-center\"\r\n                >\r\n                  <ion-col size=\"10\" offset=\"1\">\r\n                    <ion-img\r\n                      class=\"no-found\"\r\n                      src=\"./assets/images/error404.png\"\r\n                    ></ion-img>\r\n                    <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-toolbar>\r\n                        <ion-title\r\n                          ><h2 class=\"text-center mmargin\">\r\n                            موردی یافت نشد\r\n                          </h2></ion-title\r\n                        >\r\n                      </ion-toolbar>\r\n                    </ion-footer>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId > 2 &&\r\n                        filteredReports.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId > 2 &&\r\n                        filteredReports.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredReports.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredReports.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredReports.pageId <= i + 2 &&\r\n                          filteredReports.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredReports.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredReports.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId + 1 < filteredReports.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredReports.pageId + 1 < filteredReports.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(filteredReports.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredReports.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredReports\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredReports.reports\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"isSelected\" dir=\"rtl\">\r\n      <ion-col size=\"12\" *ngIf=\"selectedReport\">\r\n        <ion-card *ngIf=\"selectedReport != null\">\r\n          <ion-card-header>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button\r\n                  (click)=\"isSelected = false\"\r\n                  routerLink=\"{{\r\n                    '/AdminPanel/ReportProductComment'\r\n                  }}\"\r\n                  color=\"danger\"\r\n                  >بازگشت به لیست</ion-button\r\n                >\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-subtitle class=\"text-center\"\r\n              ><ion-item\r\n                class=\"text-center\"\r\n                routerLink=\"{{ '/AdminPanel/ProductComments/' + selectedReport.courseId }}\"\r\n                [queryParams]=\"{\r\n                  page: 1,\r\n                  take: 12,\r\n                  title: null,\r\n                  sortId: 0,\r\n                  commentid: selectedReport.reportId\r\n                }\"\r\n                lines=\"none\"\r\n              >\r\n                <ion-label color=\"medium\" class=\"text-center\">{{\r\n                  selectedReport.courseName\r\n                }}</ion-label>\r\n              </ion-item></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              >جزئیات گزارش</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <section>\r\n              <ion-card>\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>\r\n                    <ion-text color=\"warning\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"person-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"کد کاربر \" }}\r\n                    </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ selectedReport.reporterUserId }}\r\n                    </ion-text>\r\n                    {{ \" - \" }}\r\n                    {{ getTime(selectedReport.createDate) }}\r\n                    {{ \" - \" }}\r\n                    {{ selectedReport.createDate | persianDate }}\r\n                    {{ \" - \" }}\r\n                    <ion-text *ngIf=\"selectedReport.isVerify\" color=\"success\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"تایید شده\" }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"!selectedReport.isVerify\" color=\"danger\">\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        name=\"close-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"تایید نشده\" }}\r\n                    </ion-text></ion-card-subtitle\r\n                  >\r\n                  <ion-card-title>{{ 'کد کاربر ریپورت شده: ' + selectedReport.reportedUserId }}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <p class=\"description\">\r\n                    {{ selectedReport.description }}\r\n                  </p>\r\n                  <br />\r\n                  <ion-button\r\n                    *ngIf=\"!selectedReport.isVerify\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    (click)=\"presentVerifyAlertConfirm()\"\r\n                  >\r\n                    تایید گزارش\r\n                  </ion-button>\r\n                  <ion-button\r\n                    *ngIf=\"selectedReport.isVerify\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    color=\"danger\"\r\n                    (click)=\"presentDeVerifyAlertConfirm()\"\r\n                  >\r\n                    عدم تایید گزارش\r\n                  </ion-button>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_report-product-comment_report-product-comment_module_ts.js.map