"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_exam_exam_module_ts"],{

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

/***/ 23737:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/exam/exam-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamRoutingModule": () => (/* binding */ ExamRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam.component */ 56624);




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

/***/ 56624:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/exam/exam.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamComponent": () => (/* binding */ ExamComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _exam_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam.component.html?ngResource */ 3687);
/* harmony import */ var _exam_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component.scss?ngResource */ 79267);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/model/course/ExamModel */ 7503);















let ExamComponent = class ExamComponent {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, datepipe, document, fb) {
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
    this.windowWidth = 1000;
    this.filteredCourses = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, 1, 20, '');
    this.courseSearch = '';
    this.isCourseSelected = false;
    this.selectedCourseId = 0;
    this.notfound = false;
    this.segmentSelected = 'Add';
    this.isExamQuestionSelected = false;
    this.isLevelTest = false;
    this.isEditMode = false;
    this.isExamAnswersEditMode = false;
    this.isExamSelected = false;
    this.isLoading = true;
    this.isExamSelectedLoading = true;
    this.selectedQuestionIndex = -1;
    this.searchTitle = '';
    this.isAnswerActive = [];
    this.newUserAnswers = [];
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
    this.addForm2 = this.fb.group({
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
      trueAnswer: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(4)]],
      courseId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]]
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
    this.examUpdateForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(2000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      level: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      point: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      isDone: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isPass: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isPay: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isStart: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.examUpdateForm2 = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(2000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      level: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      point: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      isDone: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isPass: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isPay: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isStart: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.updateForm2 = this.fb.group({
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
      trueAnswer: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(4)]],
      courseId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]]
    });
  }

  ionViewWillEnter() {
    this.windowWidth = +window.innerWidth;
    this.isCourseSelected = false;
    let filter;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, 1, 20, this.courseSearch);
        this.courseService.GetAdminCoursesByFilter(filter).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.notfound = true;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'دوره ای یافت نشد');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {}
    });
  }

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
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

  goPage4(pageId) {
    this.setQueryParams4(+pageId);
  }

  goPage5(pageId) {
    this.setQueryParams5(+pageId);
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  setQueryParams(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let page = pageId < 1 ? 1 : pageId;
    let filter = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.courseService.GetAdminCoursesByFilter(filter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        this.notfound = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams2(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.examQuestionsFilter.pageId = pageId;
    this.courseService.GetAdminExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.examQuestionsFilter = res.data;
        this.isLoading = false;
      } else {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      this.segmentSelected = 'Add';
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  setQueryParams4(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.examQuestionsFilter.pageId = pageId;
    this.courseService.GetAdminLevelTestExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.examQuestionsFilter = res.data;
        this.isLoading = false;
      } else {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      this.segmentSelected = 'Add';
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  setQueryParams3(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.examsFilter.pageId = pageId;
    this.courseService.GetAdminExamsByFilter(this.examsFilter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.examsFilter = res.data;
        this.isExamQuestionSelected = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      this.segmentSelected = 'Add';
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  setQueryParams5(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.examsFilter.pageId = pageId;
    this.courseService.GetAdminLevelTestExamsByFilter(this.examsFilter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.examsFilter = res.data;
        this.isExamQuestionSelected = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      this.segmentSelected = 'Add';
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model;
    this.isCourseSelected = true;
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

  presentAlertExamUpdateConfirm() {
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
            _this2.onExamUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertExamUpdateConfirm2() {
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
            _this3.onExamUpdate2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertExamAnswersUpdateConfirm() {
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
            _this4.onExamAnswersUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onExamUpdate() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let model = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.CourseExamViewModel(this.selectedExam.examId, this.examUpdateForm.value.isPass, this.examUpdateForm.value.isDone, this.examUpdateForm.value.isStart, this.examUpdateForm.value.isPay, this.examUpdateForm.value.level, this.examUpdateForm.value.title, this.examUpdateForm.value.description, this.examUpdateForm.value.point, this.selectedExam.startTime, this.selectedExam.endTime, this.selectedExam.courseId, this.selectedExam.courseName, this.selectedExam.coursePrice, this.selectedExam.courseOffPrice, this.selectedExam.imageUrl, this.selectedExam.freeExamCount, this.selectedExam.requestExamCount, this.selectedExam.examPrice, this.selectedExam.examLevelCount);
    this.courseService.AdminUpdateExam(model).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.selectedExam.isPass = model.isPass;
        this.selectedExam.isDone = model.isDone;
        this.selectedExam.isStart = model.isStart;
        this.selectedExam.isPay = model.isPay;
        this.selectedExam.level = model.level;
        this.selectedExam.title = model.title;
        this.selectedExam.description = model.description;
        this.selectedExam.point = model.point;
        this.examUpdateForm.setValue({
          title: '',
          description: '',
          level: '',
          point: '',
          isStart: '',
          isDone: '',
          isPay: '',
          isPass: ''
        });
        this.isEditMode = false;
        this.isExamAnswersEditMode = false;
        this.newUserAnswers = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onExamUpdate2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    let model = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.CourseExamViewModel(this.selectedExam.examId, this.examUpdateForm2.value.isPass, this.examUpdateForm2.value.isDone, this.examUpdateForm2.value.isStart, this.examUpdateForm2.value.isPay, this.examUpdateForm2.value.level, this.examUpdateForm2.value.title, this.examUpdateForm2.value.description, this.examUpdateForm2.value.point, this.selectedExam.startTime, this.selectedExam.endTime, this.selectedExam.courseId, this.selectedExam.courseName, this.selectedExam.coursePrice, this.selectedExam.courseOffPrice, this.selectedExam.imageUrl, this.selectedExam.freeExamCount, this.selectedExam.requestExamCount, this.selectedExam.examPrice, this.selectedExam.examLevelCount);
    this.courseService.AdminUpdateExam(model).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.selectedExam.isPass = model.isPass;
        this.selectedExam.isDone = model.isDone;
        this.selectedExam.isStart = model.isStart;
        this.selectedExam.isPay = model.isPay;
        this.selectedExam.level = model.level;
        this.selectedExam.title = model.title;
        this.selectedExam.description = model.description;
        this.selectedExam.point = model.point;
        this.examUpdateForm2.setValue({
          title: '',
          description: '',
          level: '',
          point: '',
          isStart: '',
          isDone: '',
          isPay: '',
          isPass: ''
        });
        this.isEditMode = false;
        this.isExamAnswersEditMode = false;
        this.newUserAnswers = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  AdminGetDegree() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminCreateExamDegreeAsJpeg(this.selectedExam.examId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid) {} else {
        let url = window.URL.createObjectURL(res);
        window.open(url);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (err.statusText == 'Unknown Error') {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'مدرک شما ایجاد شد');
      } else if (err.status == 562) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'اطلاعات هویت شما تایید نشده');
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, err.error);
      }
    });
  }

  onExamEditModeClick() {
    this.examUpdateForm.setValue({
      title: this.selectedExam.title,
      description: this.selectedExam.description,
      level: this.selectedExam.level,
      point: this.selectedExam.point,
      isStart: this.selectedExam.isStart,
      isDone: this.selectedExam.isDone,
      isPay: this.selectedExam.isPay,
      isPass: this.selectedExam.isPass
    });
    this.isEditMode = true;
    this.isExamAnswersEditMode = false;
    this.newUserAnswers = [];
  }

  onExamEditModeClick2() {
    this.examUpdateForm2.setValue({
      title: this.selectedExam.title,
      description: this.selectedExam.description,
      level: this.selectedExam.level,
      point: this.selectedExam.point,
      isStart: this.selectedExam.isStart,
      isDone: this.selectedExam.isDone,
      isPay: this.selectedExam.isPay,
      isPass: this.selectedExam.isPass
    });
    this.isEditMode = true;
    this.isExamAnswersEditMode = false;
    this.newUserAnswers = [];
  }

  onAnswerSelected(event, q) {
    let selectedAnswerIndex = +event.detail.value;
    let oldAnswer = this.examDetail.userTestQuestionAnswers.find(e => e.examQuestionId == q.question.id);
    let t = q.tests[selectedAnswerIndex];
    let index = this.newUserAnswers.findIndex(e => e.id == oldAnswer.id);

    if (index == -1) {
      this.newUserAnswers.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.UserTestQuestionAnswerViewModel(oldAnswer.id, this.examDetail.examId, t.id, oldAnswer.timeSpend, oldAnswer.timeLeft, q.question.id));
    } else {
      this.newUserAnswers[index].examTestQuestionAnswerId = t.id;
    }
  }

  onExamAnswersUpdate() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminUpdateExamUserTestQuestionAnswers(this.newUserAnswers).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.examDetail.userTestQuestionAnswers = [...this.newUserAnswers];
        this.isEditMode = false;
        this.isExamAnswersEditMode = false;
        this.newUserAnswers = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onGetTrueAnswerIndex(i) {
    let q = this.examDetail.questions[i].question;
    let u = this.examDetail.userTestQuestionAnswers.find(e => e.examQuestionId == q.id);
    let tIndex = this.examDetail.questions[i].tests.findIndex(e => e.id == u.examTestQuestionAnswerId);
    return tIndex.toString();
  }

  onExamAnswersEditModeClick() {
    this.isEditMode = true;
    this.isExamAnswersEditMode = true;
    this.newUserAnswers = [];
  }

  presentAlertAddLevelTestConfirm() {
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
            _this5.onAddLevelTest();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onAdd() {
    if (this.addForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      let tests = [];
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer1, this.addForm.value.trueAnswer == 1 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer2, this.addForm.value.trueAnswer == 2 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer3, this.addForm.value.trueAnswer == 3 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm.value.answer4, this.addForm.value.trueAnswer == 4 ? true : false, false, 0, 0));
      this.courseService.AdminAddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(0, this.addForm.value.title, this.addForm.value.description, this.addForm.value.image, true, false, false, 0, this.addForm.value.level, this.addForm.value.point, this.addForm.value.time, this.selectedCourseId), tests)).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAddLevelTest() {
    if (this.addForm2.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      let tests = [];
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm2.value.answer1, this.addForm2.value.trueAnswer == 1 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm2.value.answer2, this.addForm2.value.trueAnswer == 2 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm2.value.answer3, this.addForm2.value.trueAnswer == 3 ? true : false, false, 0, 0));
      tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.addForm2.value.answer4, this.addForm2.value.trueAnswer == 4 ? true : false, false, 0, 0));
      this.courseService.AdminAddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(0, this.addForm2.value.title, this.addForm2.value.description, this.addForm2.value.image, true, true, true, 0, this.addForm2.value.level, this.addForm2.value.point, this.addForm2.value.time, this.addForm2.value.courseId), tests)).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.addForm2.setValue({
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
            trueAnswer: 1,
            courseId: ''
          });
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onDeActiveQuestionAlert() {
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
            _this6.onDeActiveQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveQuestionById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveQuestionAlert2() {
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
            _this7.onDeActiveQuestion2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveQuestion2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveQuestionById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveQuestionAlert() {
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
            _this8.onActiveQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveQuestionById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveQuestionAlert2() {
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
            _this9.onActiveQuestion2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveQuestion2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveQuestionById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveQuestionAnswersAlert() {
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
            _this10.onDeActiveQuestionAnswers();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveQuestionAnswers() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveQuestionAnswersById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveQuestionAnswersAlert2() {
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
            _this11.onDeActiveQuestionAnswers2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveQuestionAnswers2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveQuestionAnswersById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onCheckTestActive(questions) {
    if (questions.tests.find(e => !e.isActive) != null) {
      return true;
    } else {
      return false;
    }
  }

  onCheckActive() {
    if (this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive && this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests.find(e => !e.isActive) == null) {
      return true;
    } else {
      return false;
    }
  }

  onActiveQuestionAnswersAlert() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
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
            _this12.onActiveQuestionAnswers();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveQuestionAnswers() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveQuestionAnswersById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveQuestionAnswersAlert2() {
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
            _this13.onActiveQuestionAnswers2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveQuestionAnswers2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveQuestionAnswersById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = true;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer1Alert() {
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
            _this14.onActiveAnswer1();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer1() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer1ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer1Alert() {
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
            _this15.onDeActiveAnswer1();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer1() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer1ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer2Alert() {
    var _this16 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16.alertController.create({
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
            _this16.onActiveAnswer2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer2ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer2Alert() {
    var _this17 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this17.alertController.create({
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
            _this17.onDeActiveAnswer2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer2() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer2ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer3Alert() {
    var _this18 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this18.alertController.create({
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
            _this18.onActiveAnswer3();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer3() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer3ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer3Alert() {
    var _this19 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this19.alertController.create({
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
            _this19.onDeActiveAnswer3();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer3() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer3ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer4Alert() {
    var _this20 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this20.alertController.create({
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
            _this20.onActiveAnswer4();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer4() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer4ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer4Alert() {
    var _this21 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this21.alertController.create({
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
            _this21.onDeActiveAnswer4();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer4() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer4ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer1Alert2() {
    var _this22 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this22.alertController.create({
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
            _this22.onActiveAnswer12();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer12() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer1ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer1Alert2() {
    var _this23 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this23.alertController.create({
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
            _this23.onDeActiveAnswer12();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer12() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer1ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer2Alert2() {
    var _this24 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this24.alertController.create({
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
            _this24.onActiveAnswer22();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer22() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer2ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer2Alert2() {
    var _this25 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this25.alertController.create({
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
            _this25.onDeActiveAnswer22();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer22() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer2ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer3Alert2() {
    var _this26 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this26.alertController.create({
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
            _this26.onActiveAnswer32();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer32() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer3ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer3Alert2() {
    var _this27 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this27.alertController.create({
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
            _this27.onDeActiveAnswer32();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer32() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer3ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveAnswer4Alert2() {
    var _this28 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this28.alertController.create({
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
            _this28.onActiveAnswer42();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveAnswer42() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveAnswer4ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActiveAnswer4Alert2() {
    var _this29 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this29.alertController.create({
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
            _this29.onDeActiveAnswer42();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveAnswer42() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveAnswer4ById(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].isActive = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertUpdateConfirm() {
    var _this30 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this30.alertController.create({
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
            _this30.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertUpdateLevelTestConfirm() {
    var _this31 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this31.alertController.create({
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
            _this31.onUpdateLevelTest();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onUpdate() {
    if (this.updateForm.valid || this.selectedQuestionIndex != -1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      let tests = [];

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

      this.courseService.AdminAddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id, this.updateForm.value.title, this.updateForm.value.description, this.updateForm.value.image, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isTest, false, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.isPlacement, 0, this.updateForm.value.level, this.updateForm.value.point, this.updateForm.value.time, this.selectedCourseId), tests)).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
          this.courseService.GetAdminExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

            if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === ress.status) {
              this.examQuestionsFilter = ress.data;
              this.isLoading = false;
            } else {
              this.segmentSelected = 'Add';
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            this.segmentSelected = 'Add';
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          });
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdateLevelTest() {
    if (this.updateForm2.valid || this.selectedQuestionIndex != -1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      let tests = [];

      for (let i = 0; i < 4; i++) {
        if (i + 1 <= this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests.length) {
          switch (i) {
            case 0:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[0].id, this.updateForm2.value.answer1, this.updateForm2.value.trueAnswer == 1 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 1:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[1].id, this.updateForm2.value.answer2, this.updateForm2.value.trueAnswer == 2 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 2:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[2].id, this.updateForm2.value.answer3, this.updateForm2.value.trueAnswer == 3 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 3:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].tests[3].id, this.updateForm2.value.answer4, this.updateForm2.value.trueAnswer == 4 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            default:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, '', false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;
          }
        } else {
          switch (i) {
            case 0:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm2.value.answer1, this.updateForm2.value.trueAnswer == 1 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 1:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm2.value.answer2, this.updateForm2.value.trueAnswer == 2 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 2:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm2.value.answer3, this.updateForm2.value.trueAnswer == 3 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            case 3:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, this.updateForm2.value.answer4, this.updateForm2.value.trueAnswer == 4 ? true : false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;

            default:
              tests.push(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionTestAnswerViewModel(0, '', false, false, 0, this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id));
              break;
          }
        }
      }

      this.courseService.AdminAddOrUpdateExamQuestion(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.QuestionAnswerViewModel(new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionViewModel(this.examQuestionsFilter.questions[this.selectedQuestionIndex].question.id, this.updateForm2.value.title, this.updateForm2.value.description, this.updateForm2.value.image, true, true, true, 0, this.updateForm2.value.level, this.updateForm2.value.point, this.updateForm2.value.time, this.updateForm2.value.courseId), tests)).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.updateForm2.setValue({
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
            trueAnswer: '',
            courseId: ''
          });
          this.selectedQuestionIndex = -1;
          this.isExamQuestionSelected = false;
          this.isLoading = true;
          this.examQuestionsFilter.pageId = 1;
          this.courseService.GetAdminLevelTestExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

            if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === ress.status) {
              this.examQuestionsFilter = ress.data;
              this.isLoading = false;
            } else {
              this.segmentSelected = 'Add';
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            this.segmentSelected = 'Add';
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          });
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertRemoveConfirm(index) {
    var _this32 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this32.alertController.create({
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
            _this32.onDelete(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertRemoveConfirm2(index) {
    var _this33 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this33.alertController.create({
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
            _this33.onDelete2(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteExamQuestionById(this.examQuestionsFilter.questions[+index].question.id).subscribe(res => {
      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.courseService.GetAdminExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === ress.status) {
            this.examQuestionsFilter = ress.data;
            this.isLoading = false;
          } else {
            this.segmentSelected = 'Add';
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDelete2(index) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteExamQuestionById(this.examQuestionsFilter.questions[+index].question.id).subscribe(res => {
      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.updateForm2.setValue({
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
          trueAnswer: '',
          courseId: ''
        });
        this.isExamQuestionSelected = false;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        this.courseService.GetAdminLevelTestExamQuestionByFilter(this.examQuestionsFilter).subscribe(ress => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === ress.status) {
            this.examQuestionsFilter = ress.data;
            this.isLoading = false;
          } else {
            this.segmentSelected = 'Add';
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  isUserAnswer(aIndex, qIndex) {
    let find = this.examDetail.userTestQuestionAnswers.find(e => e.examTestQuestionAnswerId == +aIndex);

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
    this.courseService.GetAdminExamById(this.selectedExam.examId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.examDetail = res.data;
        this.isExamSelectedLoading = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'آزمون یافت نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onSelectQuestion(index) {
    this.selectedQuestionIndex = +index;
    this.isAnswerActive = [];
    let trueAns = this.examQuestionsFilter.questions[+index].tests.findIndex(e => e.isTrue);
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

  onSelectQuestion2(index) {
    this.selectedQuestionIndex = +index;
    this.isAnswerActive = [];
    let trueAns = this.examQuestionsFilter.questions[+index].tests.findIndex(e => e.isTrue);
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
    this.updateForm2.setValue({
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
      trueAnswer: trueAns + 1,
      courseId: this.examQuestionsFilter.questions[+index].question.courseId
    });
    this.isExamQuestionSelected = true;
  }

  segmentChanged(ev) {
    this.isLoading = true;

    if (this.segmentSelected == 'Update') {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.examQuestionsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionFilter(this.selectedCourseId);
      this.courseService.GetAdminExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.examQuestionsFilter = res.data;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    } else if (this.segmentSelected == 'Exam') {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.examsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamFilter(this.selectedCourseId);
      this.courseService.GetAdminExamsByFilter(this.examsFilter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.examsFilter = res.data;
          this.isExamQuestionSelected = false;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'آزمونی وجود ندارد');
        }
      }, err => {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onLevelTestClick() {
    this.segmentSelected = 'Add';
    this.isLevelTest = true;
  }

  segmentChanged2(ev) {
    this.isLoading = true;

    if (this.segmentSelected == 'Update') {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.examQuestionsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamQuestionFilter(0);
      this.courseService.GetAdminLevelTestExamQuestionByFilter(this.examQuestionsFilter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.examQuestionsFilter = res.data;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    } else if (this.segmentSelected == 'Exam') {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.examsFilter = new _data_model_course_ExamModel__WEBPACK_IMPORTED_MODULE_8__.ExamFilter(0);
      this.courseService.GetAdminLevelTestExamsByFilter(this.examsFilter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.examsFilter = res.data;
          this.isExamQuestionSelected = false;
          this.isLoading = false;
        } else {
          this.segmentSelected = 'Add';
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'آزمونی وجود ندارد');
        }
      }, err => {
        this.segmentSelected = 'Add';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

ExamComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
}, {
  type: Document,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
  }]
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

/***/ 35461:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/exam/exam.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamModule": () => (/* binding */ ExamModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-routing.module */ 23737);
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component */ 56624);
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

/***/ 79267:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/exam/exam.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3687:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/exam/exam.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back *ngIf=\"!showSearchbar\"><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >تست و آزمون</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar && !isCourseSelected\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"courseSearch\"\r\n      placeholder=\"دنبال کدوم دوره میگردی؟\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"setQueryParams(1)\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid class=\"bg no-padding\">\r\n    <ion-row *ngIf=\"!isCourseSelected && !isLevelTest\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-title class=\"text-center\">لیست دوره ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col\r\n                    size=\"10\"\r\n                    offset=\"1\"\r\n                    size-md=\"8\"\r\n                    offset-md=\"2\"\r\n                    size-xl=\"6\"\r\n                    offset-xl=\"3\"\r\n                    dir=\"rtl\"\r\n                  >\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      color=\"instagram\"\r\n                      shape=\"round\"\r\n                      (click)=\"onLevelTestClick()\"\r\n                    >\r\n                      آزمون تعیین سطح\r\n                      <ion-icon slot=\"start\" name=\"flask-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"4\"\r\n                  >\r\n                    <!-- <app-course-question\r\n                            *ngIf=\"windowWidth > 600\"\r\n                            [course]=\"course\"\r\n                            (SelectEvent2)=\"onSelectItem($event)\"\r\n                          ></app-course-question> -->\r\n                    <ion-item\r\n                      class=\"link-pointer\"\r\n                      (click)=\"onSelectItem(course)\"\r\n                    >\r\n                      <ion-avatar slot=\"start\">\r\n                        <img [src]=\"course.imageUrl\" />\r\n                      </ion-avatar>\r\n                      <ion-label>{{ course.name }}</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"!filteredCourses.courses && notfound\"\r\n                  class=\"text-center\"\r\n                >\r\n                  <ion-col size=\"10\" offset=\"1\">\r\n                    <ion-img\r\n                      class=\"no-found\"\r\n                      src=\"./assets/images/error404.png\"\r\n                    ></ion-img>\r\n                    <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-toolbar>\r\n                        <ion-title\r\n                          ><h2 class=\"text-center mmargin\">\r\n                            موردی یافت نشد\r\n                          </h2></ion-title\r\n                        >\r\n                      </ion-toolbar>\r\n                    </ion-footer>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses.courses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"!isCourseSelected && isLevelTest\">\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment\r\n          [(ngModel)]=\"segmentSelected\"\r\n          (ionChange)=\"segmentChanged2($event)\"\r\n        >\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج سوال</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش سوال</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Exam\">\r\n            <ion-label>لیست آزمون</ion-label>\r\n            <ion-icon name=\"flask-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Add'\"\r\n      >\r\n        <ion-card class=\"text-center\">\r\n          <ion-badge color=\"warning\" mode=\"md\"\r\n            >دقت شود که کد دوره از بین کد دوره های مسیر تیونر موفق\r\n            باشد!</ion-badge\r\n          >\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button (click)=\"isLevelTest = !isLevelTest\" color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">درج سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form\r\n              [formGroup]=\"addForm2\"\r\n              (ngSubmit)=\"presentAlertAddLevelTestConfirm()\"\r\n            >\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >کد دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد دوره\"\r\n                    formControlName=\"courseId\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"addForm2.invalid\"\r\n              >\r\n                درج سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Update' && !isLoading\"\r\n      >\r\n        <ion-card class=\"text-center\">\r\n          <ion-badge color=\"warning\" mode=\"md\"\r\n            >دقت شود که کد دوره از بین کد دوره های مسیر تیونر موفق\r\n            باشد!</ion-badge\r\n          >\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"isLevelTest = !isLevelTest; segmentSelected = 'Add'\"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">ویرایش سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست سوالات</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز سوالی درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage4(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage4(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage4(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-item\r\n                  *ngFor=\"\r\n                    let questions of examQuestionsFilter.questions;\r\n                    let i = index\r\n                  \"\r\n                  button\r\n                  (click)=\"onSelectQuestion2(i)\"\r\n                >\r\n                  <ion-label>{{ questions.question.title }}</ion-label>\r\n                  <ion-text\r\n                    *ngIf=\"onCheckTestActive(questions)\"\r\n                    color=\"warning\"\r\n                  >\r\n                    *\r\n                  </ion-text>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      questions.question.isActive ? 'success' : 'danger'\r\n                    }}\"\r\n                  >\r\n                    {{ questions.question.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertRemoveConfirm2(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage4(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage4(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage4(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n            <ion-button\r\n              *ngIf=\"\r\n                isExamQuestionSelected &&\r\n                !examQuestionsFilter.questions[selectedQuestionIndex].question\r\n                  .isActive\r\n              \"\r\n              (click)=\"onActiveQuestionAlert2()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              فعال کردن\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"\r\n                isExamQuestionSelected &&\r\n                examQuestionsFilter.questions[selectedQuestionIndex].question\r\n                  .isActive\r\n              \"\r\n              (click)=\"onDeActiveQuestionAlert2()\"\r\n              expand=\"block\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              غیر فعال کردن\r\n            </ion-button>\r\n            <br />\r\n            <ion-button\r\n              *ngIf=\"isExamQuestionSelected && !onCheckActive()\"\r\n              (click)=\"onActiveQuestionAnswersAlert2()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              فعال کردن سوال و جواب ها\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"isExamQuestionSelected && onCheckActive()\"\r\n              (click)=\"onDeActiveQuestionAnswersAlert2()\"\r\n              expand=\"block\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              غیر فعال کردن سوال و جواب ها\r\n            </ion-button>\r\n            <form\r\n              [formGroup]=\"updateForm2\"\r\n              (ngSubmit)=\"presentAlertUpdateLevelTestConfirm()\"\r\n              *ngIf=\"isExamQuestionSelected\"\r\n            >\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >کد دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد دوره\"\r\n                    formControlName=\"courseId\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[0] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[0] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[0].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer1Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[0].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer1Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[1] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[1] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[1].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer2Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[1].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer2Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[2] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[2] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[2].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer3Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[2].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer3Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[3] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[3] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[3].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer4Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[3].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer4Alert2()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"updateForm2.invalid\"\r\n              >\r\n                ویرایش سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Exam' && !isLoading\"\r\n      >\r\n        <ion-card dir=\"rtl\" *ngIf=\"!isExamSelected\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams5(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams5(1)\"\r\n              placeholder=\"جستجو بر اساس نام\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"!isExamSelected\">\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"isLevelTest = !isLevelTest; segmentSelected = 'Add'\"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text color=\"warning\" class=\"text-center\">\r\n              <h3>تعداد کل آزمون: {{ examsFilter.examCount }}</h3>\r\n            </ion-text>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست آزمون ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examsFilter.exams.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز آزمونی ثبت نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examsFilter.exams.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage5(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage5(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage5(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-card *ngFor=\"let exam of examsFilter.exams; let i = index\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                      تاریخ آزمون:\r\n                      {{ exam.startTime | persianDate }}\r\n                      {{ \" - \" + getTime(exam.startTime) }}</ion-card-subtitle\r\n                    >\r\n                    <ion-card-title class=\"text-center\"\r\n                      ><ion-text\r\n                        color=\"{{ exam.isDone ? 'success' : 'danger' }}\"\r\n                      >\r\n                        {{ exam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n                      </ion-text></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-item button (click)=\"onSelectExam(i)\">\r\n                      <ion-label>{{\r\n                        i + 1 + \"- کد کاربر: \" + exam.buyerUserId\r\n                      }}</ion-label>\r\n                      <ion-text color=\"{{ exam.isPay ? 'success' : 'danger' }}\">\r\n                        {{ exam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage5(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage5(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage5(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"isExamSelected && isEditMode && !isExamAnswersEditMode\"\r\n        >\r\n          <form\r\n            [formGroup]=\"examUpdateForm2\"\r\n            (ngSubmit)=\"presentAlertExamUpdateConfirm2()\"\r\n          >\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">عنوان </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"title\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">توضیحات </ion-label>\r\n                <ion-input\r\n                  placeholder=\"توضیحات\"\r\n                  formControlName=\"description\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">سطح </ion-label>\r\n                <ion-input\r\n                  placeholder=\"سطح\"\r\n                  formControlName=\"level\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">امتیاز </ion-label>\r\n                <ion-input\r\n                  placeholder=\"امتیاز\"\r\n                  formControlName=\"point\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پاس شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isPass\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پرداخت شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isPay\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شروع شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isStart\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اتمام یافته؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isDone\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"examUpdateForm2.invalid\"\r\n            >\r\n              ویرایش\r\n            </ion-button>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n              type=\"submit\"\r\n              (click)=\"isEditMode = false; isExamAnswersEditMode = false\"\r\n            >\r\n              لغو\r\n            </ion-button>\r\n          </form>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && !isEditMode\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              تاریخ آزمون:\r\n              {{ selectedExam.startTime | persianDate }}\r\n              {{ \" - \" + getTime(selectedExam.startTime) }}</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              ><ion-text\r\n                color=\"{{ selectedExam.isDone ? 'success' : 'danger' }}\"\r\n              >\r\n                {{ selectedExam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n              </ion-text></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button color=\"danger\" (click)=\"isExamSelected = false\"\r\n                  >بازگشت</ion-button\r\n                ><ion-button color=\"warning\" (click)=\"onExamEditModeClick2()\"\r\n                >ویرایش</ion-button\r\n              >\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label>{{\r\n                  \"کد کاربر: \" + selectedExam.buyerUserId\r\n                }}</ion-label>\r\n                <ion-text\r\n                  color=\"{{ selectedExam.isPay ? 'success' : 'danger' }}\"\r\n                >\r\n                  {{ selectedExam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserFullName }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عنوان آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.title }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عکس آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.imageUrl }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>توضیحات آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.description }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تاریخ اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.endTime | persianDate }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ساعت اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ getTime(selectedExam.startTime) }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد ملی کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserNationalCode }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.examId }} </ion-text>\r\n                <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>سطح آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.level }} </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cellular-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد سوالات:</ion-label>\r\n                <ion-text> 20 </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkbox-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                <ion-text>\r\n                  {{ 20 - selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-text *ngIf=\"selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول شده</ion-text\r\n                >\r\n                <ion-text *ngIf=\"!selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول نشده</ion-text\r\n                >\r\n                <ion-icon\r\n                  *ngIf=\"selectedExam.isPass\"\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkmark-circle-outline\"\r\n                ></ion-icon>\r\n                <ion-icon\r\n                  *ngIf=\"!selectedExam.isPass\"\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && !isExamSelectedLoading && !isEditMode\">\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button\r\n                  color=\"warning\"\r\n                  (click)=\"onExamAnswersEditModeClick()\"\r\n                  >ویرایش</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let q of examDetail.questions\">\r\n                <ion-text>{{ q.question.title }}</ion-text>\r\n                <ion-list>\r\n                  <ion-item *ngFor=\"let a of q.tests\">\r\n                    <ion-text>{{ a.answer }}</ion-text>\r\n                    <ion-text *ngIf=\"a.isTrue\" color=\"success\">\r\n                      {{ \" (پاسخ صحیح)\" }}\r\n                    </ion-text>\r\n                    <ion-icon\r\n                      color=\"{{ a.isTrue ? 'success' : 'danger' }}\"\r\n                      slot=\"start\"\r\n                      name=\"{{ isUserAnswer(a.id, q.question.id) }}\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && isExamSelectedLoading && !isEditMode\">\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\" dir=\"ltr\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"\r\n            isExamSelected &&\r\n            !isExamSelectedLoading &&\r\n            isEditMode &&\r\n            isExamAnswersEditMode\r\n          \"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button\r\n                  color=\"danger\"\r\n                  (click)=\"isEditMode = false; isExamAnswersEditMode = false\"\r\n                  >بازگشت</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let q of examDetail.questions; let i = index\">\r\n                <ion-text>{{ q.question.title }}</ion-text>\r\n                <ion-list>\r\n                  <ion-radio-group\r\n                    value=\"{{ onGetTrueAnswerIndex(i) }}\"\r\n                    (ionChange)=\"onAnswerSelected($event, q)\"\r\n                    name=\"{{ i }}\"\r\n                  >\r\n                    <ion-item *ngFor=\"let a of q.tests; let j = index\">\r\n                      <ion-text>{{ a.answer }}</ion-text>\r\n                      <ion-text *ngIf=\"a.isTrue\" color=\"success\">\r\n                        {{ \" (پاسخ صحیح)\" }}\r\n                      </ion-text>\r\n                      <ion-radio\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        value=\"{{ j.toString() }}\"\r\n                      ></ion-radio>\r\n                      <ion-icon\r\n                        color=\"{{ a.isTrue ? 'success' : 'danger' }}\"\r\n                        slot=\"start\"\r\n                        name=\"{{ isUserAnswer(a.id, q.question.id) }}\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              (click)=\"presentAlertExamAnswersUpdateConfirm()\"\r\n            >\r\n              ویرایش\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"\r\n            isExamSelected &&\r\n            isExamSelectedLoading &&\r\n            isEditMode &&\r\n            isExamAnswersEditMode\r\n          \"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\" dir=\"ltr\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"isCourseSelected && !isLevelTest\">\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment\r\n          [(ngModel)]=\"segmentSelected\"\r\n          (ionChange)=\"segmentChanged($event)\"\r\n        >\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج سوال</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش سوال</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Exam\">\r\n            <ion-label>لیست آزمون</ion-label>\r\n            <ion-icon name=\"flask-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Add'\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"isCourseSelected = !isCourseSelected\"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">درج سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertAddConfirm()\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"addForm.invalid\"\r\n              >\r\n                درج سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Update' && !isLoading\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"\r\n                  isCourseSelected = !isCourseSelected; segmentSelected = 'Add'\r\n                \"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">ویرایش سوال</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست سوالات</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز سوالی درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examQuestionsFilter.questions.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-item\r\n                  *ngFor=\"\r\n                    let questions of examQuestionsFilter.questions;\r\n                    let i = index\r\n                  \"\r\n                  button\r\n                  (click)=\"onSelectQuestion(i)\"\r\n                >\r\n                  <ion-label>{{ questions.question.title }}</ion-label>\r\n                  <ion-text\r\n                    *ngIf=\"onCheckTestActive(questions)\"\r\n                    color=\"warning\"\r\n                  >\r\n                    *\r\n                  </ion-text>\r\n                  <ion-text\r\n                    color=\"{{\r\n                      questions.question.isActive ? 'success' : 'danger'\r\n                    }}\"\r\n                  >\r\n                    {{ questions.question.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertRemoveConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId > 2 &&\r\n                          examQuestionsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            examQuestionsFilter.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examQuestionsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examQuestionsFilter.pageId <= i + 2 &&\r\n                            examQuestionsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examQuestionsFilter.pageId == page\r\n                              ? 'clear'\r\n                              : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examQuestionsFilter.pageId\r\n                              ? 'danger'\r\n                              : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examQuestionsFilter.pageId + 1 <\r\n                          examQuestionsFilter.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(examQuestionsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examQuestionsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n            <ion-button\r\n              *ngIf=\"\r\n                isExamQuestionSelected &&\r\n                !examQuestionsFilter.questions[selectedQuestionIndex].question\r\n                  .isActive\r\n              \"\r\n              (click)=\"onActiveQuestionAlert()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              فعال کردن\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"\r\n                isExamQuestionSelected &&\r\n                examQuestionsFilter.questions[selectedQuestionIndex].question\r\n                  .isActive\r\n              \"\r\n              (click)=\"onDeActiveQuestionAlert()\"\r\n              expand=\"block\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              غیر فعال کردن\r\n            </ion-button>\r\n            <br />\r\n            <ion-button\r\n              *ngIf=\"isExamQuestionSelected && !onCheckActive()\"\r\n              (click)=\"onActiveQuestionAnswersAlert()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              فعال کردن سوال و جواب ها\r\n            </ion-button>\r\n            <ion-button\r\n              *ngIf=\"isExamQuestionSelected && onCheckActive()\"\r\n              (click)=\"onDeActiveQuestionAnswersAlert()\"\r\n              expand=\"block\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              غیر فعال کردن سوال و جواب ها\r\n            </ion-button>\r\n            <form\r\n              [formGroup]=\"updateForm\"\r\n              (ngSubmit)=\"presentAlertUpdateConfirm()\"\r\n              *ngIf=\"isExamQuestionSelected\"\r\n            >\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیحات سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات\"\r\n                    formControlName=\"description\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس عکس سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"آدرس عکس\"\r\n                    formControlName=\"image\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >سطح سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح\"\r\n                    formControlName=\"level\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تایم سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تایم\"\r\n                    formControlName=\"time\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >امتیاز سوال\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>گزینه های تستی</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه اول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه اول\"\r\n                    formControlName=\"answer1\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[0] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[0] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[0].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer1Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[0].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer1Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه دوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه دوم\"\r\n                    formControlName=\"answer2\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[1] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[1] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[1].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer2Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[1].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer2Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه سوم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه سوم\"\r\n                    formControlName=\"answer3\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[2] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[2] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[2].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer3Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[2].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer3Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان گزینه چهارم\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان گزینه چهارم\"\r\n                    formControlName=\"answer4\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  <ion-text\r\n                    color=\"{{ isAnswerActive[3] ? 'success' : 'danger' }}\"\r\n                    >{{ isAnswerActive[3] ? \"فعال\" : \"غیر فعال\" }}</ion-text\r\n                  >\r\n                </ion-item>\r\n\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    !examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[3].isActive\r\n                  \"\r\n                  (click)=\"onActiveAnswer4Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                >\r\n                  فعال کردن\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"\r\n                    isExamQuestionSelected &&\r\n                    examQuestionsFilter.questions[selectedQuestionIndex]\r\n                      .tests[3].isActive\r\n                  \"\r\n                  (click)=\"onDeActiveAnswer4Alert()\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  غیر فعال کردن\r\n                </ion-button>\r\n                <br />\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >گزینه صحیح\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"گزینه صحیح\"\r\n                    formControlName=\"trueAnswer\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"updateForm.invalid\"\r\n              >\r\n                ویرایش سوال\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        *ngIf=\"segmentSelected === 'Exam' && !isLoading\"\r\n      >\r\n        <ion-card dir=\"rtl\" *ngIf=\"!isExamSelected\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams3(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams3(1)\"\r\n              placeholder=\"جستجو بر اساس کد آزمون\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"!isExamSelected\">\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <ion-button\r\n                (click)=\"\r\n                  isCourseSelected = !isCourseSelected; segmentSelected = 'Add'\r\n                \"\r\n                color=\"danger\"\r\n                >بازگشت\r\n              </ion-button>\r\n            </ion-list-header>\r\n          </ion-list>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\">تست و آزمون</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-text color=\"warning\" class=\"text-center\">\r\n              <h3>تعداد کل آزمون: {{ examsFilter.examCount }}</h3>\r\n            </ion-text>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>لیست آزمون ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"examsFilter.exams.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز آزمونی ثبت نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"examsFilter.exams.length > 0\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage3(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-card *ngFor=\"let exam of examsFilter.exams; let i = index\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                      تاریخ آزمون:\r\n                      {{ exam.startTime | persianDate }}\r\n                      {{ \" - \" + getTime(exam.startTime) }}</ion-card-subtitle\r\n                    >\r\n                    <ion-card-title class=\"text-center\"\r\n                      >\r\n                      <ion-text>\r\n                        {{\r\n                          \"کد کاربر: \" + exam.buyerUserId + \" * \"\r\n                        }}\r\n                      </ion-text>\r\n                      <ion-text\r\n                        color=\"{{ exam.isDone ? 'success' : 'danger' }}\"\r\n                      >\r\n                        {{ exam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n                      </ion-text></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-item button (click)=\"onSelectExam(i)\">\r\n                      <ion-label>{{\r\n                        \"کد آزمون: \" + exam.examId\r\n                      }}</ion-label>\r\n                      <ion-text color=\"{{ exam.isPay ? 'success' : 'danger' }}\">\r\n                        {{ exam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          examsFilter.pageId > 2 && examsFilter.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(examsFilter.pageCount);\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"examsFilter.pageId == page\"\r\n                          *ngIf=\"\r\n                            examsFilter.pageId <= i + 2 &&\r\n                            examsFilter.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            examsFilter.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == examsFilter.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage3(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"examsFilter.pageId + 1 < examsFilter.pageCount\"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage3(examsFilter.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ examsFilter.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"isExamSelected && isEditMode && !isExamAnswersEditMode\"\r\n        >\r\n          <form\r\n            [formGroup]=\"examUpdateForm\"\r\n            (ngSubmit)=\"presentAlertExamUpdateConfirm()\"\r\n          >\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">عنوان </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"title\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">توضیحات </ion-label>\r\n                <ion-input\r\n                  placeholder=\"توضیحات\"\r\n                  formControlName=\"description\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">سطح </ion-label>\r\n                <ion-input\r\n                  placeholder=\"سطح\"\r\n                  formControlName=\"level\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">امتیاز </ion-label>\r\n                <ion-input\r\n                  placeholder=\"امتیاز\"\r\n                  formControlName=\"point\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پاس شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isPass\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پرداخت شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isPay\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>شروع شده؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isStart\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اتمام یافته؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isDone\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"examUpdateForm.invalid\"\r\n            >\r\n              ویرایش\r\n            </ion-button>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n              type=\"submit\"\r\n              (click)=\"isEditMode = false; isExamAnswersEditMode = false\"\r\n            >\r\n              لغو\r\n            </ion-button>\r\n          </form>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"isExamSelected && !isEditMode\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>\r\n              تاریخ آزمون:\r\n              {{ selectedExam.startTime | persianDate }}\r\n              {{ \" - \" + getTime(selectedExam.startTime) }}</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              ><ion-text\r\n                color=\"{{ selectedExam.isDone ? 'success' : 'danger' }}\"\r\n              >\r\n                {{ selectedExam.isDone ? \"اتمام یافته\" : \"نا تمام\" }}\r\n              </ion-text></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button color=\"danger\" (click)=\"isExamSelected = false\"\r\n                  >بازگشت</ion-button\r\n                ><ion-button color=\"warning\" (click)=\"onExamEditModeClick()\"\r\n                  >ویرایش</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-button color=\"instagram\" (click)=\"AdminGetDegree()\" expand=\"block\" fill=\"solid\" shape=\"round\">\r\n                دریافت مدرک آزمون\r\n              </ion-button>\r\n              <ion-item>\r\n                <ion-label>{{\r\n                  \"کد کاربر: \" + selectedExam.buyerUserId\r\n                }}</ion-label>\r\n                <ion-text\r\n                  color=\"{{ selectedExam.isPay ? 'success' : 'danger' }}\"\r\n                >\r\n                  {{ selectedExam.isPay ? \"پرداخت شده\" : \"پرداخت نشده\" }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نام کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserFullName }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عنوان آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.title }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>عکس آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.imageUrl }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>توضیحات آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.description }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تاریخ اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.endTime | persianDate }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ساعت اتمام آزمون</ion-label>\r\n                <ion-text>\r\n                  {{ getTime(selectedExam.startTime) }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد ملی کاربر</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.buyerUserNationalCode }}\r\n                </ion-text>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>کد آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.examId }} </ion-text>\r\n                <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>سطح آزمون:</ion-label>\r\n                <ion-text> {{ selectedExam.level }} </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"cellular-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد سوالات:</ion-label>\r\n                <ion-text> 16 </ion-text>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"grid-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ صحیح:</ion-label>\r\n                <ion-text>\r\n                  {{ selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkbox-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>تعداد پاسخ غلط:</ion-label>\r\n                <ion-text>\r\n                  {{ 16 - selectedExam.point }}\r\n                </ion-text>\r\n                <ion-icon\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-text *ngIf=\"selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول شده</ion-text\r\n                >\r\n                <ion-text *ngIf=\"!selectedExam.isPass\"\r\n                  >کاربر در این آزمون قبول نشده</ion-text\r\n                >\r\n                <ion-icon\r\n                  *ngIf=\"selectedExam.isPass\"\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"checkmark-circle-outline\"\r\n                ></ion-icon>\r\n                <ion-icon\r\n                  *ngIf=\"!selectedExam.isPass\"\r\n                  color=\"danger\"\r\n                  slot=\"start\"\r\n                  name=\"close-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"isExamSelected && !isExamSelectedLoading && !isEditMode\"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button\r\n                  color=\"warning\"\r\n                  (click)=\"onExamAnswersEditModeClick()\"\r\n                  >ویرایش</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let q of examDetail.questions\">\r\n                <ion-text>{{ q.question.title }}</ion-text>\r\n                <ion-list>\r\n                  <ion-item *ngFor=\"let a of q.tests\">\r\n                    <ion-text>{{ a.answer }}</ion-text>\r\n                    <ion-text *ngIf=\"a.isTrue\" color=\"success\">\r\n                      {{ \" (پاسخ صحیح)\" }}\r\n                    </ion-text>\r\n                    <ion-icon\r\n                      color=\"{{ a.isTrue ? 'success' : 'danger' }}\"\r\n                      slot=\"start\"\r\n                      name=\"{{ isUserAnswer(a.id, q.question.id) }}\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"isExamSelected && isExamSelectedLoading && !isEditMode\"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\" dir=\"ltr\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"\r\n            isExamSelected &&\r\n            !isExamSelectedLoading &&\r\n            isEditMode &&\r\n            isExamAnswersEditMode\r\n          \"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-button\r\n                  color=\"danger\"\r\n                  (click)=\"isEditMode = false; isExamAnswersEditMode = false\"\r\n                  >بازگشت</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let q of examDetail.questions; let i = index\">\r\n                <ion-text>{{ q.question.title }}</ion-text>\r\n                <ion-list>\r\n                  <ion-radio-group\r\n                    value=\"{{ onGetTrueAnswerIndex(i) }}\"\r\n                    (ionChange)=\"onAnswerSelected($event, q)\"\r\n                    name=\"{{ i }}\"\r\n                  >\r\n                    <ion-item *ngFor=\"let a of q.tests; let j = index\">\r\n                      <ion-text>{{ a.answer }}</ion-text>\r\n                      <ion-text *ngIf=\"a.isTrue\" color=\"success\">\r\n                        {{ \" (پاسخ صحیح)\" }}\r\n                      </ion-text>\r\n                      <ion-radio\r\n                        color=\"success\"\r\n                        slot=\"start\"\r\n                        value=\"{{ j.toString() }}\"\r\n                      ></ion-radio>\r\n                      <ion-icon\r\n                        color=\"{{ a.isTrue ? 'success' : 'danger' }}\"\r\n                        slot=\"start\"\r\n                        name=\"{{ isUserAnswer(a.id, q.question.id) }}\"\r\n                      ></ion-icon>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              (click)=\"presentAlertExamAnswersUpdateConfirm()\"\r\n            >\r\n              ویرایش\r\n            </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card\r\n          *ngIf=\"\r\n            isExamSelected &&\r\n            isExamSelectedLoading &&\r\n            isEditMode &&\r\n            isExamAnswersEditMode\r\n          \"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>لیست سوالات</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"text-center\" dir=\"ltr\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_exam_exam_module_ts.js.map