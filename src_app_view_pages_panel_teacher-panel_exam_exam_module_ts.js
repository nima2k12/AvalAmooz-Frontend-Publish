"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_teacher-panel_exam_exam_module_ts"],{

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

/***/ 62354:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/exam/exam-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamRoutingModule": () => (/* binding */ ExamRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam.component */ 49329);




const routes = [{ path: '', component: _exam_component__WEBPACK_IMPORTED_MODULE_0__.ExamComponent }];
let ExamRoutingModule = class ExamRoutingModule {
};
ExamRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ExamRoutingModule);



/***/ }),

/***/ 49329:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/exam/exam.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamComponent": () => (/* binding */ ExamComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _exam_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam.component.html?ngResource */ 89955);
/* harmony import */ var _exam_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component.scss?ngResource */ 33233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/model/course/ExamModel */ 7503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);




/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable max-len */












let ExamComponent = class ExamComponent {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, datepipe, fb) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.datepipe = datepipe;
    this.fb = fb;
    this.queryText = '';
    this.showSearchbar = false;
    this.segmentSelected = 'Add';
    this.windowWidth = 1000;
    this.filteredCourses = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_5__.CourseFilterModel(false, 1, 20, '');
    this.courseSearch = '';
    this.isCourseSelected = false;
    this.selectedCourseId = 0;
    this.selectedQuestionIndex = -1;
    this.notfound = false;
    this.isExamQuestionSelected = false;
    this.isExamSelected = false;
    this.isExamSelectedLoading = true;
    this.isLoading = true;
    this.isAnswerActive = [];
    this.searchTitle = '';
    src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(2000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200000)]],
      level: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      time: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(3600)]],
      point: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      answer1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      trueAnswer: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(4)]]
    });
    this.updateForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(2000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200000)]],
      level: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      time: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(3600)]],
      point: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      answer1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      answer4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      trueAnswer: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(4)]]
    });
  }

  ionViewWillEnter() {
    this.windowWidth = +window.innerWidth;
    this.isCourseSelected = false;
    let filter;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_5__.CourseFilterModel(false, 1, 20, this.courseSearch);
        this.courseService.GetTeacherCoursesByFilter(filter).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
            this.notfound = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'دوره ای یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {}
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

  onCancel() {
    this.showSearchbar = false;
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  goPage2(pageId) {
    this.setQueryParams2(+pageId);
  }

  goPage3(pageId) {
    this.setQueryParams3(+pageId);
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  setQueryParams(pageId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_5__.CourseFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.courseService.GetTeacherCoursesByFilter(filter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
        this.notfound = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams2(pageId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.examQuestionsFilter.pageId = pageId;
    this.courseService.GetExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        this.examQuestionsFilter = res.data;
        this.isLoading = false;
      } else {
        this.segmentSelected = 'Add';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'سوالی وجود ندارد');
      }
    }, err => {
      this.segmentSelected = 'Add';
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  setQueryParams3(pageId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.examsFilter.title = this.searchTitle;
    this.examsFilter.pageId = pageId;
    this.courseService.GetTeacherExamsByFilter(this.examsFilter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        this.examsFilter = res.data;
        this.isExamQuestionSelected = false;
      } else {
        this.segmentSelected = 'Add';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'آزمونی وجود ندارد');
      }
    }, err => {
      this.segmentSelected = 'Add';
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertAddConfirm() {
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
            _this.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onAdd() {
    if (this.addForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      const tests = [];
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer1, this.addForm.value.trueAnswer == 1 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer2, this.addForm.value.trueAnswer == 2 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer3, this.addForm.value.trueAnswer == 3 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer4, this.addForm.value.trueAnswer == 4 ? true : false, false, 0, 0));
      this.courseService.AddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(0, this.addForm.value.title, this.addForm.value.description, this.addForm.value.image, true, false, false, 0, this.addForm.value.level, this.addForm.value.point, this.addForm.value.time, this.selectedCourseId), tests)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            title: '',
            description: '',
            image: '',
            level: 0,
            time: 10,
            point: 1,
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            trueAnswer: 1
          });
          this.onSelectItem(this.course);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertUpdateConfirm() {
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
            _this2.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onUpdate() {
    if (this.updateForm.valid || this.selectedQuestionIndex != -1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      const tests = [];

      for (let i = 0; i < 4; i++) {
        if (i + 1 <= this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests.length) {
          switch (i) {
            case 0:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id, this.updateForm.value.answer1, this.updateForm.value.trueAnswer == 1 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 1:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id, this.updateForm.value.answer2, this.updateForm.value.trueAnswer == 2 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 2:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id, this.updateForm.value.answer3, this.updateForm.value.trueAnswer == 3 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 3:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id, this.updateForm.value.answer4, this.updateForm.value.trueAnswer == 4 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            default:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, '', false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;
          }
        } else {
          switch (i) {
            case 0:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm.value.answer1, this.updateForm.value.trueAnswer == 1 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 1:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm.value.answer2, this.updateForm.value.trueAnswer == 2 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 2:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm.value.answer3, this.updateForm.value.trueAnswer == 3 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 3:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm.value.answer4, this.updateForm.value.trueAnswer == 4 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            default:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, '', false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;
          }
        }
      }

      this.courseService.AddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id, this.updateForm.value.title, this.updateForm.value.description, this.updateForm.value.image, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isTest, false, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isPlacement, 0, this.updateForm.value.level, this.updateForm.value.point, this.updateForm.value.time, this.selectedCourseId), tests)).subscribe(res => {
        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          this.updateForm.setValue({
            title: '',
            description: '',
            image: '',
            level: '',
            time: '',
            point: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            trueAnswer: ''
          });
          this.selectedQuestionIndex = -1;
          this.isExamQuestionSelected = false;
          this.isLoading = true;
          this.examQuestionsFilter.pageId = 1;
          this.courseService.GetExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === ress.status) {
              this.examQuestionsFilter = ress.data;
              this.isLoading = false;
            } else {
              this.segmentSelected = 'Add';
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            this.segmentSelected = 'Add';
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertRemoveConfirm(index) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this3.onDelete(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteExamQuestionById(this.examQuestionsFilter.questions[+index].question.id).subscribe(res => {
      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        this.updateForm.setValue({
          title: '',
          description: '',
          image: '',
          level: '',
          time: '',
          point: '',
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          trueAnswer: ''
        });
        this.isExamQuestionSelected = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        this.courseService.GetExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === ress.status) {
            this.examQuestionsFilter = ress.data;
            this.isLoading = false;
          } else {
            this.segmentSelected = 'Add';
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.segmentSelected = 'Add';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  isUserAnswer(aIndex, qIndex) {
    const find = this.examDetail.userTestQuestionAnswers.find(e => e.examTestQuestionAnswerId == +aIndex);

    if (find == null) {
      return 'close-outline';
    } else {
      return 'checkbox-outline';
    }
  }

  onSelectExam(index) {
    this.selectedExam = this.examsFilter.exams[index];
    this.isExamSelected = true;
    this.isExamSelectedLoading = true;
    this.courseService.GetTeacherExamById(this.selectedExam.examId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
        this.examDetail = res.data;
        this.isExamSelectedLoading = false;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'آزمون یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onSelectQuestion(index) {
    this.selectedQuestionIndex = +index;
    const trueAns = this.examQuestionsFilter.questions[+index].tests.findIndex(e => e.isTrue);
    let ans1 = '';
    let ans2 = '';
    let ans3 = '';
    let ans4 = '';
    let count = 0;
    this.examQuestionsFilter.questions[+index].tests.forEach(test => {
      if (count == 0) {
        ans1 = test.answer;
      } else if (count == 1) {
        ans2 = test.answer;
      } else if (count == 2) {
        ans3 = test.answer;
      } else if (count == 3) {
        ans4 = test.answer;
      }

      count++;
      this.isAnswerActive.push(test.isActive);
    });
    this.updateForm.setValue({
      title: this.examQuestionsFilter.questions[+index].question.title,
      description: this.examQuestionsFilter.questions[+index].question.description,
      image: this.examQuestionsFilter.questions[+index].question.imageAddress,
      level: this.examQuestionsFilter.questions[+index].question.level,
      time: this.examQuestionsFilter.questions[+index].question.time,
      point: this.examQuestionsFilter.questions[+index].question.point,
      answer1: ans1,
      answer2: ans2,
      answer3: ans3,
      answer4: ans4,
      trueAnswer: trueAns + 1
    });
    this.isExamQuestionSelected = true;
  }

  segmentChanged(ev) {
    this.isLoading = true;

    if (this.segmentSelected == 'Update') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      this.examQuestionsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionFilter(this.selectedCourseId);
      this.courseService.GetExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          this.examQuestionsFilter = res.data;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'سوالی وجود ندارد');
        }
      }, err => {
        this.segmentSelected = 'Add';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    } else if (this.segmentSelected == 'Exam') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      this.examsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamFilter(this.selectedCourseId);
      this.courseService.GetTeacherExamsByFilter(this.examsFilter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          this.examsFilter = res.data;
          this.isExamQuestionSelected = false;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'آزمونی وجود ندارد');
        }
      }, err => {
        this.segmentSelected = 'Add';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model;
    this.isCourseSelected = true;
  }

};

ExamComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}];

ExamComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent]
  }]
};
ExamComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-exam',
  template: _exam_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exam_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExamComponent);


/***/ }),

/***/ 22221:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/exam/exam.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamModule": () => (/* binding */ ExamModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-routing.module */ 62354);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component */ 49329);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);












let ExamModule = class ExamModule {
};
ExamModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_exam_component__WEBPACK_IMPORTED_MODULE_2__.ExamComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExamRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
        ]
    })
], ExamModule);



/***/ }),

/***/ 33233:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/exam/exam.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 89955:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/exam/exam.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back *ngIf=\"!showSearchbar\"><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TeacherPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >تست و آزمون</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar && !isCourseSelected\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"courseSearch\"\r\n      placeholder=\"دنبال کدوم دوره میگردی؟\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"setQueryParams(1)\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid class=\"bg no-padding\">\r\n    <ion-row *ngIf=\"!isCourseSelected\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-title class=\"text-center\"\r\n              >لیست دوره های شما</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"4\"\r\n                  >\r\n                    <!-- <app-course-question\r\n                            *ngIf=\"windowWidth > 600\"\r\n                            [course]=\"course\"\r\n                            (SelectEvent2)=\"onSelectItem($event)\"\r\n                          ></app-course-question> -->\r\n                    <ion-item\r\n                      class=\"link-pointer\"\r\n                      (click)=\"onSelectItem(course)\"\r\n                    >\r\n                      <ion-avatar slot=\"start\">\r\n                        <img [src]=\"course.imageUrl\" />\r\n                      </ion-avatar>\r\n                      <ion-label>{{ course.name }}</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"!filteredCourses.courses && notfound\"\r\n                  class=\"text-center\"\r\n                >\r\n                  <ion-col size=\"10\" offset=\"1\">\r\n                    <ion-img\r\n                      class=\"no-found\"\r\n                      src=\"./assets/images/error404.png\"\r\n                    ></ion-img>\r\n                    <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-toolbar>\r\n                        <ion-title\r\n                          ><h2 class=\"text-center mmargin\">\r\n                            موردی یافت نشد\r\n                          </h2></ion-title\r\n                        >\r\n                      </ion-toolbar>\r\n                    </ion-footer>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses.courses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"isCourseSelected\">\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment\r\n          [(ngModel)]=\"segmentSelected\"\r\n          (ionChange)=\"segmentChanged($event)\"\r\n        >\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج سوال</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش سوال</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Exam\">\r\n            <ion-label>لیست آزمون</ion-label>\r\n            <ion-icon name=\"flask-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Add'\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"isCourseSelected = !isCourseSelected\"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">درج سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertAddConfirm()\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"addForm.invalid\"\r\n              >\r\n                درج سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Update' && !isLoading\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"\r\n                  isCourseSelected = !isCourseSelected; segmentSelected = 'Add'\r\n                \"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">ویرایش سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست سوالات</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز سوالی درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-item\r\n                  *ngFor=\"\r\n                    let questions of examQuestionsFilter.questions;\r\n                    let i = index\r\n                  \"\r\n                  button\r\n                  (click)=\"onSelectQuestion(i)\"\r\n                >\r\n                  <ion-label>{{ questions.question.title }}</ion-label>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      questions.question.isActive ? 'success' : 'danger'\r\n                    }}\"\r\n                  >\r\n                    {{ questions.question.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertRemoveConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n            <form\r\n              [formGroup]=\"updateForm\"\r\n              (ngSubmit)=\"presentAlertUpdateConfirm()\"\r\n              *ngIf=\"isExamQuestionSelected\"\r\n            >\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[0] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[0] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[1] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[1] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[2] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[2] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[3] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[3] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"updateForm.invalid\"\r\n              >\r\n                ویرایش سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Exam' && !isLoading\"\r\n      >\r\n        <ion-card dir=\"rtl\" *ngIf=\"!isExamSelected\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams3(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams3(1)\"\r\n              placeholder=\"جستجو بر اساس کد آزمون\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"!isExamSelected\">\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"\r\n                  isCourseSelected = !isCourseSelected; segmentSelected = 'Add'\r\n                \"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text color=\"warning\" class=\"text-center\">\r\n              <h3>تعداد کل آزمون: {{ examsFilter.examCount }}</h3>\r\n            </ion-text>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست آزمون ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examsFilter.exams.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز آزمونی ثبت نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examsFilter.exams.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage3(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-card *ngFor=\"let exam of examsFilter.exams; let i = index\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                      تاریخ آزمون:\r\n                      {{ exam.startTime | persianDate }}\r\n                      {{ \" - \" + getTime(exam.startTime) }}</ion-card-subtitle\r\n                    >\r\n                    <ion-card-title class=\"text-center\"\r\n                      >\r\n                      <ion-text>\r\n                        {{\r\n                          \"کد کاربر: \" + exam.buyerUserId + \" * \"\r\n                        }}\r\n                      </ion-text>\r\n                      <ion-text\r\n                        color=\"{{ exam.isDone ? 'success' : 'danger' }}\"\r\n                      >\r\n                        {{ exam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n                      </ion-text></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-item button (click)=\"onSelectExam(i)\">\r\n                      <ion-label>{{\r\n                        \"کد آزمون: \" + exam.examId\r\n                      }}</ion-label>\r\n                      <ion-text color=\"{{ exam.isPay ? 'success' : 'danger' }}\">\r\n                        {{ exam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage3(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              تاریخ آزمون:\r\n              {{ selectedExam.startTime | persianDate }}\r\n              {{ \" - \" + getTime(selectedExam.startTime) }}</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              ><ion-text\r\n                color=\"{{ selectedExam.isDone ? 'success' : 'danger' }}\"\r\n              >\r\n                {{ selectedExam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n              </ion-text></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button color=\"danger\" (click)=\"isExamSelected = false\"\r\n                  >بازگشت</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label>{{\r\n                  \"کد کاربر: \" + selectedExam.buyerUserId\r\n                }}</ion-label>\r\n                <ion-text\r\n                  color=\"{{ selectedExam.isPay ? 'success' : 'danger' }}\"\r\n                >\r\n                  {{ selectedExam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserFullName }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عنوان آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.title }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عکس آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.imageUrl }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>توضیحات آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.description }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تاریخ اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.endTime | persianDate }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ساعت اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ getTime(selectedExam.startTime) }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد ملی کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserNationalCode }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.examId }} </ion-text>\r\n                <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>سطح آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.level }} </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cellular-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد سوالات:</ion-label>\r\n                <ion-text> 16 </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkbox-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                <ion-text>\r\n                  {{ 16 - selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-text *ngIf=\"selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول شده</ion-text\r\n                >\r\n                <ion-text *ngIf=\"!selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول نشده</ion-text\r\n                >\r\n                <ion-icon\r\n                  *ngIf=\"selectedExam.isPass\"\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkmark-circle-outline\"\r\n                ></ion-icon>\r\n                <ion-icon\r\n                  *ngIf=\"!selectedExam.isPass\"\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && !isExamSelectedLoading\">\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item *ngFor=\"let q of examDetail.questions\">\r\n                <ion-text>{{ q.question.title }}</ion-text>\r\n                <ion-list>\r\n                  <ion-item *ngFor=\"let a of q.tests\">\r\n                    <ion-text>{{ a.answer }}</ion-text>\r\n                    <ion-text *ngIf=\"a.isTrue\" color=\"success\">\r\n                      {{' (پاسخ صحیح)'}}\r\n                    </ion-text>\r\n                    <ion-icon\r\n                      color=\"{{ a.isTrue ? 'success' : 'danger' }}\"\r\n                      slot=\"start\"\r\n                      name=\"{{isUserAnswer(a.id, q.question.id)}}\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && isExamSelectedLoading\">\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\" dir=\"ltr\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_teacher-panel_exam_exam_module_ts.js.map