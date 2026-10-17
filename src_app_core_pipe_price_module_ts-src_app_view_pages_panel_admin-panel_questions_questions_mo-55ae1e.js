"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_questions_questions_mo-55ae1e"],{

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

/***/ 15041:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/questions/questions-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsRoutingModule": () => (/* binding */ QuestionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.component */ 11835);




const routes = [{ path: '', component: _questions_component__WEBPACK_IMPORTED_MODULE_0__.QuestionsComponent }];
let QuestionsRoutingModule = class QuestionsRoutingModule {
};
QuestionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], QuestionsRoutingModule);



/***/ }),

/***/ 11835:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/questions/questions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.component.html?ngResource */ 49645);
/* harmony import */ var _questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.component.scss?ngResource */ 66643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GAccount */ 6958);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/model/question/QuestionModel */ 35177);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */





 // import { ReCaptchaV3Service } from 'ngx-captcha';
// import { load } from 'recaptcha-v3';








let QuestionsComponent = class QuestionsComponent {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, // private reCaptchaV3Service: ReCaptchaV3Service,
  fb, datepipe, routerOutlet) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.fb = fb;
    this.datepipe = datepipe;
    this.routerOutlet = routerOutlet;
    this.questionsCount = -1;
    this.hiddenQuestionsCount = -1;
    this.selectedQuestions = [];
    this.selectedHiddenQuestions = [];
    this.unSeenQuestions = [];
    this.isUnSeenQuestionsLoading = true;
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.isHiddenQuestionSelected = false;
    this.isEditMode = false;
    this.selectedCourseId = 0;
    this.selectedQuestionId = 0;
    this.filteredCourses = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, 1, 12, '');
    this.courseSearch = '';
    this.questionSearch = '';
    this.notfound = false;
    this.login = false;
    this.isPrivate = false;
    this.isAskMode = false;
    this.segmentSelected = 'public';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
  }

  ionViewWillEnter() {
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.login = src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__.GAccount.IsLoggedIn();
    let filter;
    let filter2;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        this.isUnSeenQuestionsLoading = true;
        this.unSeenQuestions = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter2 = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, 1, 12, this.courseSearch);
        this.courseService.GetAdminQuestionCoursesByFilter(filter2).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
            this.notfound = true;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.courseService.GetAdminUnSeenCourseQuestionsList().subscribe(res => {
          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
            this.unSeenQuestions = res.data;
            this.isUnSeenQuestionsLoading = false;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
            this.isUnSeenQuestionsLoading = false;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'سوال جدید ندارید');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = true;
        this.selectedCourseId = +id;
        this.activatedRoute.queryParams.subscribe(queryParams => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
          const page = queryParams.page;
          const take = queryParams.take ? queryParams.take : 12;
          let title = queryParams.title ? queryParams.title : '';
          const sortId = queryParams.sortId ? queryParams.sortId : 0;
          const questionId = queryParams.questionid ? +queryParams.questionid : 0;
          const h = queryParams.h ? queryParams.h : 'false';

          if (h == 'true') {
            this.segmentSelected = 'hidden';
          } else {
            this.segmentSelected = 'public';
          }

          if (title == 'null') {
            title = '';
          }

          this.questionSearch = title;
          filter = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__.CourseQuestionFilterModel(this.selectedCourseId, page, take, title, sortId);
          this.filteredQuestions = filter;

          if (this.segmentSelected == 'public') {
            if (questionId != 0) {
              this.selectedQuestionId = questionId;
              this.courseService.GetAdminCourseQuestionsDetailsById(questionId).subscribe(res => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  this.selectedQuestions = res.data;
                  this.isQuestionSelected = true;
                } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.courseService.GetTeacherCourseQuestionsByFilter(filter).subscribe(res => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data;
                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetTeacherCourseQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                this.questionsCount = res.data;
              } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                this.questionsCount = -1;
              }
            }, err => {
              this.questionsCount = -1;
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          } else {
            if (questionId != 0) {
              this.selectedQuestionId = questionId;
              this.courseService.GetAdminCourseHiddenQuestionsDetailsById(questionId).subscribe(res => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  this.selectedHiddenQuestions = res.data;
                  this.isHiddenQuestionSelected = true;
                } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.courseService.GetTeacherCourseHiddenQuestionsByFilter(filter).subscribe(res => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data;
                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetTeacherCourseHiddenQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                this.hiddenQuestionsCount = res.data;
              } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
                this.hiddenQuestionsCount = -1;
              }
            }, err => {
              this.hiddenQuestionsCount = -1;
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          }
        });
      }
    });
  }

  onOpenQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.OpenQuestion(this.selectedQuestions[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.selectedQuestions[0].isClosed = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentonOpenQuestion() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به باز کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'باز کردن',
          handler: () => {
            _this.onOpenQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCloseQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.CloseQuestion(this.selectedQuestions[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.selectedQuestions[0].isClosed = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentonCloseQuestion() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به بستن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بستن',
          handler: () => {
            _this2.onCloseQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onOpenHiddenQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.OpenQuestion(this.selectedHiddenQuestions[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.selectedHiddenQuestions[0].isClosed = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentonOpenHiddenQuestion() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به باز کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'باز کردن',
          handler: () => {
            _this3.onOpenHiddenQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCloseHiddenQuestion() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.CloseQuestion(this.selectedHiddenQuestions[0].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.selectedHiddenQuestions[0].isClosed = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentonCloseHiddenQuestion() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به بستن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بستن',
          handler: () => {
            _this4.onCloseHiddenQuestion();
          }
        }]
      });
      yield alert.present();
    })();
  }

  UnSetBestQuestionAnswer(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.UnSetBestQuestionAnswer(id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        const index = this.selectedQuestions.findIndex(e => e.id == id);

        if (index == -1) {
          const index2 = this.selectedHiddenQuestions.findIndex(e => e.id == id);
          this.selectedHiddenQuestions[index2].isBest = false;
        } else {
          this.selectedQuestions[index].isBest = false;
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentUnSetBestQuestionAnswer(id) {
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
            _this5.UnSetBestQuestionAnswer(+id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  SetBestQuestionAnswer(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.SetBestQuestionAnswer(id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        const index = this.selectedQuestions.findIndex(e => e.id == id);

        if (index == -1) {
          const index2 = this.selectedHiddenQuestions.findIndex(e => e.id == id);
          this.selectedHiddenQuestions[index2].isBest = true;
        } else {
          this.selectedQuestions[index].isBest = true;
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentSetBestQuestionAnswer(id) {
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
            _this6.SetBestQuestionAnswer(+id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  segmentChanged() {
    this.questionSearch = '';
    this.filteredQuestions = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__.CourseQuestionFilterModel(this.selectedCourseId, 1, 12, '', 0);
    this.setQueryParams(1, this.segmentSelected == 'hidden');
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  onQuestionClick(id) {// this.router
    //   .navigate(
    //     ['Questions', this.selectedCourseId],
    //     {
    //       queryParams:
    //       {
    //         page: 1,
    //         take: 12,
    //         title: null,
    //         sortId: 0,
    //         questionid: +id
    //       }
    //     });
  }

  ngOnInit() {
    this.siteKey = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.SiteKey;
    this.editForm = this.fb.group({
      id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      editTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(80)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10000)]]
    });
    this.questionAnswerForm = this.fb.group({
      answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10000)]]
    }); // this.questions.push(new QuestionModel(
    //   1,
    //   'حذف نویز سنسور موقعیت میل لنگ خودروی پراید 111 با ایسیو فورس',
    //   'حذف نویز سنسور موقعیت میل لنگ خودروی پراید 111 با ایسیو فورس',
    //   new Date(),
    //   5,
    //   'آموزش ای سی یو فورس مقدماتی تا حرفه ای ( ECU Force )',
    //   1)
    // );
    // this.questions.push(new QuestionModel(
    //   2,
    //   'حذف نویز سنسور موقعیت میل لنگ خودروی پراید 111 با ایسیو فورس',
    //   'حذف نویز سنسور موقعیت میل لنگ خودروی پراید 111 با ایسیو فورس',
    //   new Date(),
    //   2,
    //   'آموزش ای سی یو فورس مقدماتی تا حرفه ای ( ECU Force )',
    //   1)
    // );
  }

  onActiveQuestion(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveCourseQuestion(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'فعال شد');
        const index = this.selectedQuestions.findIndex(e => e.id == id);
        this.selectedQuestions[index].isActive = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDeActiveQuestion(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveCourseQuestion(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'غیر فعال شد');
        const index = this.selectedQuestions.findIndex(e => e.id == id);
        this.selectedQuestions[index].isActive = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentActiveAlertConfirm(id) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'فعال شدن',
          handler: () => {
            _this7.onActiveQuestion(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentHiddenDeleteAlertConfirm(id) {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف شدن',
          handler: () => {
            _this8.onDeleteQuestion(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveAlertConfirm(id) {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'غیر فعال شدن',
          handler: () => {
            _this9.onDeActiveQuestion(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentEditAlertConfirm(type) {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ویرایش هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ویرایش',
          handler: () => {
            _this10.onEditQuestion(+type);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onEditQuestion(type) {
    if (this.editForm.valid) {
      let model;
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);

      if (type == 0) {
        model = this.selectedQuestions.find(e => e.id == this.editForm.value.id);
      } else {
        model = this.selectedHiddenQuestions.find(e => e.id == this.editForm.value.id);
      }

      const editModel = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__.QuestionModel(model.id, this.editForm.value.editTitle, this.editForm.value.description, model.createDate, model.view, model.courseName, model.courseId, model.parentId, model.userName, model.userId, model.isActive, model.isPrivate, model.isTeacherAnswer, model.isCourseFree, 'token', model.isSeen);
      this.courseService.EditCourseQuestion(editModel).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'ویرایش شد');

          if (type == 0) {
            const index = this.selectedQuestions.findIndex(e => e.id == editModel.id);
            this.selectedQuestions[index].title = editModel.title;
            this.selectedQuestions[index].description = editModel.description;
          } else {
            const index = this.selectedHiddenQuestions.findIndex(e => e.id == editModel.id);
            this.selectedHiddenQuestions[index].title = editModel.title;
            this.selectedHiddenQuestions[index].description = editModel.description;
          }

          this.isEditMode = false;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        }

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      });
    }
  }

  onEdit(id, type) {
    let model;

    if (+type == 0) {
      model = this.selectedQuestions.find(e => e.id == +id);
    } else {
      model = this.selectedHiddenQuestions.find(e => e.id == +id);
    }

    this.editForm.setValue({
      id: model.id,
      editTitle: model.title,
      description: model.description
    });
    this.isEditMode = true;
  }

  onDeleteQuestion(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteCourseQuestion(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'حذف شد');
        const index = this.selectedHiddenQuestions.findIndex(e => e.id == id);
        this.selectedHiddenQuestions.splice(index, 1);

        if (this.selectedHiddenQuestions.length == 0) {
          location.reload();
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onActiveHiddenQuestion(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveCourseQuestion(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'فعال شد');
        const index = this.selectedHiddenQuestions.findIndex(e => e.id == id);
        this.selectedHiddenQuestions[index].isActive = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDeActiveHiddenQuestion(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveCourseQuestion(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'غیر فعال شد');
        const index = this.selectedHiddenQuestions.findIndex(e => e.id == id);
        this.selectedHiddenQuestions[index].isActive = false;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentHiddenActiveAlertConfirm(id) {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'فعال شدن',
          handler: () => {
            _this11.onActiveHiddenQuestion(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentHiddenDeActiveAlertConfirm(id) {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'غیر فعال شدن',
          handler: () => {
            _this12.onDeActiveHiddenQuestion(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2(typeCode) {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this13.onQuestionAnswer(+typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentSetQuestionAlert2() {
    var _this14 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this14.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'پاسخ شما ارسال شد. رفرش کنید',
        buttons: [{
          text: 'رفرش',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  CheckBuy() {
    return src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.MyCourseIds.find(n => n == this.selectedCourseId) || this.selectedQuestions[0].isCourseFree ? true : false;
  }

  CheckBuy2() {
    return src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.MyCourseIds.find(n => n == this.selectedCourseId) || this.filteredQuestions.isCourseFree ? true : false;
  }

  onQuestionAnswer(typeCode) {
    if (this.questionAnswerForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid) {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, true, false, 'failed', true);
        this.courseService.SetTeacherCourseQuestion(model).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_8__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, true, false, 'failed', true);
        this.courseService.SetTeacherCourseQuestion(model).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const model =
      //       new QuestionModel(
      //         0,
      //         '',
      //         this.questionAnswerForm.value.answer,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         this.selectedQuestionId,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         true,
      //         false,
      //         'failed',
      //         true);
      //     this.courseService.SetTeacherCourseQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetQuestionAlert2();
      //           this.questionAnswerForm.setValue({
      //             answer: ''
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         }
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   } else {
      //     const model =
      //       new QuestionModel(
      //         0,
      //         '',
      //         this.questionAnswerForm.value.answer,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         this.selectedQuestionId,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         true,
      //         false,
      //         token,
      //         true);
      //     this.courseService.SetTeacherCourseQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetQuestionAlert2();
      //           this.questionAnswerForm.setValue({
      //             answer: ''
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         }
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  setQueryParams2(pageId) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new src_app_data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.courseService.GetAdminCoursesByFilter(filter).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.NotFoundStatus) {
        this.notfound = true;
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams(pageId, hide = false) {
    const res = this.segmentSelected == 'hidden';
    this.router.navigate(['AdminPanel', 'Questions', this.selectedCourseId], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredQuestions.takeEntity ? this.filteredQuestions.takeEntity : null,
        title: this.questionSearch,
        sortId: this.filteredQuestions.sortId ? this.filteredQuestions.sortId : 0,
        h: res
      }
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
    if (this.filteredQuestions.startPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId > this.filteredQuestions.startPage && +this.filteredQuestions.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredQuestions.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredQuestions.endPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId < this.filteredQuestions.endPage) {
      this.setQueryParams(+this.filteredQuestions.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  goPreviousPage2() {
    if (this.filteredCourses.startPage == null) {
      return;
    }

    if (this.filteredCourses.pageId > this.filteredCourses.startPage && +this.filteredCourses.pageId - 1 > 0) {
      this.setQueryParams2(+this.filteredCourses.pageId - 1);
    }
  }

  goNextPage2() {
    if (this.filteredCourses.endPage == null) {
      return;
    }

    if (this.filteredCourses.pageId < this.filteredCourses.endPage) {
      this.setQueryParams2(+this.filteredCourses.pageId + 1);
    }
  }

  goPage2(pageId) {
    this.setQueryParams2(+pageId);
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model; // this.router
    //   .navigate(
    //     ['AdminPanel', 'Questions', this.selectedCourseId],
    //     {
    //       queryParams:
    //       {
    //         page: 1,
    //         take: 12,
    //         title: null,
    //         sortId: 0
    //       }
    //     });
  }

};

QuestionsComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet
}];

QuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-questions',
  template: _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], QuestionsComponent);


/***/ }),

/***/ 14881:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/questions/questions.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModule": () => (/* binding */ QuestionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-routing.module */ 15041);
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.component */ 11835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/course/shared-course.module */ 44704);









// import { NgxCaptchaModule } from 'ngx-captcha';




let QuestionsModule = class QuestionsModule {
};
QuestionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_questions_component__WEBPACK_IMPORTED_MODULE_2__.QuestionsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_1__.QuestionsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__.SharedCourseModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            // NgxCaptchaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
        ]
    })
], QuestionsModule);



/***/ }),

/***/ 66643:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/questions/questions.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".over-hidden {\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  white-space: nowrap;\n}\n\n.white-space {\n  white-space: normal !important;\n}\n\n.link-success:hover {\n  color: green;\n}\n\n.description {\n  white-space: pre-wrap;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVyLWhpZGRlbiB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC53aGl0ZS1zcGFjZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5rLXN1Y2Nlc3M6aG92ZXIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 49645:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/questions/questions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        *ngIf=\"\r\n          !isQuestionSelected && !isHiddenQuestionSelected && !isCourseSelected\r\n        \"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        (click)=\"isCourseSelected = false\"\r\n        *ngIf=\"\r\n          !isQuestionSelected && !isHiddenQuestionSelected && isCourseSelected\r\n        \"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel/Questions\"\r\n      ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        (click)=\"isQuestionSelected = false\"\r\n        *ngIf=\"isQuestionSelected && !isHiddenQuestionSelected\"\r\n        color=\"lightest\"\r\n        defaultHref=\"{{\r\n          '/AdminPanel/Questions/' +\r\n            selectedCourseId +\r\n            '?page=' +\r\n            filteredQuestions.pageId +\r\n            '&take=' +\r\n            filteredQuestions.takeEntity +\r\n            '&sortId=' +\r\n            filteredQuestions.sortId +\r\n            '&title=' +\r\n            filteredQuestions.title +\r\n            '&h=false'\r\n        }}\"\r\n      ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        (click)=\"isHiddenQuestionSelected = false\"\r\n        *ngIf=\"!isQuestionSelected && isHiddenQuestionSelected\"\r\n        color=\"lightest\"\r\n        defaultHref=\"{{\r\n          '/AdminPanel/Questions/' +\r\n            selectedCourseId +\r\n            '?page=' +\r\n            filteredQuestions.pageId +\r\n            '&take=' +\r\n            filteredQuestions.takeEntity +\r\n            '&sortId=' +\r\n            filteredQuestions.sortId +\r\n            '&title=' +\r\n            filteredQuestions.title +\r\n            '&h=true'\r\n        }}\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>پرسش و پاسخ</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid class=\"bg no-padding\">\r\n    <ion-row *ngIf=\"!isCourseSelected\">\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\" *ngIf=\"isUnSeenQuestionsLoading\">\r\n          <div class=\"text-center\">\r\n            <ion-spinner name=\"dots\"></ion-spinner>\r\n          </div>\r\n        </ion-card>\r\n        <ion-card dir=\"rtl\" *ngIf=\"!isUnSeenQuestionsLoading\">\r\n          <section *ngIf=\"unSeenQuestions.length == 0\">\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                <ion-badge color=\"warning\" slot=\"start\"\r\n                  >سوال جدیدی ندارید</ion-badge\r\n                ></ion-label\r\n              >\r\n            </ion-item>\r\n          </section>\r\n          <section *ngIf=\"unSeenQuestions.length != 0\">\r\n            <ion-list-header>\r\n              <ion-label color=\"medium\"\r\n                >دوره هایی که سوال جدیدی دارید</ion-label\r\n              >\r\n            </ion-list-header>\r\n            <ion-item\r\n              *ngFor=\"let course of unSeenQuestions; let i = index\"\r\n              routerLink=\"{{ '/AdminPanel/Questions/' + course.courseId }}\"\r\n              [queryParams]=\"{\r\n                page: 1,\r\n                take: 12,\r\n                title: null,\r\n                sortId: 0\r\n              }\"\r\n            >\r\n              <ion-label>{{ i + 1 + \". \" + course.courseName }}</ion-label>\r\n            </ion-item>\r\n          </section>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams2(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams2(1)\"\r\n              placeholder=\"دنبال چه دوره ای میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"courseSearch\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle class=\"text-center\"\r\n              >دوره ی مد نظر خود را انتخاب کنید</ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\">لیست دوره ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-course\r\n                      routerLink=\"{{ '/AdminPanel/Questions/' + course.id }}\"\r\n                      [queryParams]=\"{\r\n                        page: 1,\r\n                        take: 12,\r\n                        title: null,\r\n                        sortId: 0\r\n                      }\"\r\n                      [course]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-teacher-course>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"!filteredCourses.courses && notfound\"\r\n                  class=\"text-center\"\r\n                >\r\n                  <ion-col size=\"10\" offset=\"1\">\r\n                    <ion-img\r\n                      class=\"no-found\"\r\n                      src=\"./assets/images/error404.png\"\r\n                    ></ion-img>\r\n                    <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-toolbar>\r\n                        <ion-title\r\n                          ><h2 class=\"text-center mmargin\">\r\n                            موردی یافت نشد\r\n                          </h2></ion-title\r\n                        >\r\n                      </ion-toolbar>\r\n                    </ion-footer>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 2 &&\r\n                        filteredCourses.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 2 &&\r\n                          filteredCourses.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage2(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage2(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n            <div\r\n              *ngIf=\"!filteredCourses.courses\"\r\n              size=\"6\"\r\n              offset=\"3\"\r\n              class=\"text-center\"\r\n            >\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"isQuestionSelected && segmentSelected == 'public'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        ion-row\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button\r\n                  (click)=\"isQuestionSelected = false\"\r\n                  routerLink=\"{{ '/AdminPanel/Questions/' + selectedCourseId }}\"\r\n                  [queryParams]=\"{\r\n                    page: filteredQuestions.pageId,\r\n                    take: filteredQuestions.takeEntity,\r\n                    sortId: filteredQuestions.sortId,\r\n                    title: filteredQuestions.title,\r\n                    h: false\r\n                  }\"\r\n                  color=\"danger\"\r\n                  >بازگشت به لیست سوالات</ion-button\r\n                >\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-subtitle class=\"text-center\"\r\n              ><ion-item\r\n                class=\"text-center\"\r\n                routerLink=\"{{ '/c/' + selectedQuestions[0].courseId }}\"\r\n                lines=\"none\"\r\n                *ngIf=\"selectedQuestions.length > 0\"\r\n              >\r\n                <ion-label color=\"medium\" class=\"text-center\">{{\r\n                  \"دوره ی: \" + selectedQuestions[0].courseName\r\n                }}</ion-label>\r\n              </ion-item></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              >پرسش پاسخ در اول آموز</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"isEditMode\">\r\n            <form\r\n              [formGroup]=\"editForm\"\r\n              (ngSubmit)=\"presentEditAlertConfirm(0)\"\r\n            >\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"floating\"\r\n                  >عنوان <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input formControlName=\"editTitle\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"floating\"\r\n                  >توضیحات <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-textarea\r\n                  autoGrow=\"true\"\r\n                  required\r\n                  formControlName=\"description\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                <ion-button\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"warning\"\r\n                  (click)=\"isEditMode = false\"\r\n                >\r\n                  لغو\r\n                </ion-button>\r\n                <ion-button\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"editForm.invalid\"\r\n                >\r\n                  ویرایش\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </form>\r\n          </ion-card-content>\r\n          <ion-card-content *ngIf=\"!isEditMode\">\r\n            <section *ngIf=\"selectedQuestions.length > 0\">\r\n              <ion-card *ngFor=\"let q of selectedQuestions\">\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>\r\n                    <ion-text *ngIf=\"q.isTeacherAnswer\" color=\"warning\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"مدرس \" }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"!q.isTeacherAnswer\" color=\"warning\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"person-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"کاربر \" }}\r\n                    </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userId + '- ' }}\r\n                    </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userName }}\r\n                    </ion-text>\r\n                    {{ \" - \" }}\r\n                    {{ getTime(q.createDate) }}\r\n                    {{ \" - \" }}\r\n                    {{ q.createDate | persianDate }}\r\n                    {{ \" - \" }}\r\n                    <ion-text *ngIf=\"q.isActive\" color=\"success\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"فعال\" }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"!q.isActive\" color=\"danger\">\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        name=\"close-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"غیر فعال\" }}\r\n                    </ion-text></ion-card-subtitle\r\n                  >\r\n                  <ion-card-title>{{ q.title }}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <p class=\"description\">\r\n                    {{ q.description }}\r\n                  </p>\r\n                  <br />\r\n                  <ion-button\r\n                    *ngIf=\"!q.isActive\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    (click)=\"presentActiveAlertConfirm(q.id)\"\r\n                  >\r\n                    فعال شدن\r\n                  </ion-button>\r\n                  <ion-button\r\n                    *ngIf=\"q.isActive\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    color=\"danger\"\r\n                    (click)=\"presentDeActiveAlertConfirm(q.id)\"\r\n                  >\r\n                    غیر فعال شدن\r\n                  </ion-button>\r\n                  <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"warning\"\r\n                      (click)=\"onEdit(q.id, 0)\"\r\n                    >\r\n                      ویرایش\r\n                    </ion-button>\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentHiddenDeleteAlertConfirm(q.id)\"\r\n                    >\r\n                      حذف\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"!q.isBest\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"instagram\"\r\n                      (click)=\"presentSetBestQuestionAnswer(q.id)\"\r\n                    >\r\n                      پاسخ برگزیده\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"q.isBest\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"outline\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentUnSetBestQuestionAnswer(q.id)\"\r\n                    >\r\n                      لغو پاسخ برگزیده\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"selectedQuestions[0].isClosed\">\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"presentonOpenQuestion()\"\r\n            color=\"warning\"\r\n            expand=\"block\"\r\n            fill=\"outline\"\r\n            shape=\"round\"\r\n          >\r\n            باز کردن سوال\r\n          </ion-button>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"!selectedQuestions[0].isClosed\">\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"presentonCloseQuestion()\"\r\n            color=\"telegram\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n          >\r\n            بستن سوال\r\n          </ion-button>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >پاسخ خود را وارد کنید</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <section *ngIf=\"login\">\r\n              <div *ngIf=\"CheckBuy()\">\r\n                <form\r\n                  [formGroup]=\"questionAnswerForm\"\r\n                  (ngSubmit)=\"presentAlertConfirm2(0)\"\r\n                >\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"floating\"\r\n                      >پاسخ شما <ion-text color=\"danger\">*</ion-text></ion-label\r\n                    >\r\n                    <ion-textarea\r\n                      autoGrow=\"true\"\r\n                      required\r\n                      formControlName=\"answer\"\r\n                    ></ion-textarea>\r\n                  </ion-item>\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"questionAnswerForm.invalid\"\r\n                  >\r\n                    ایجاد پاسخ\r\n                  </ion-button>\r\n                </form>\r\n              </div>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row\r\n      *ngIf=\"isHiddenQuestionSelected && segmentSelected == 'hidden' && login\"\r\n    >\r\n      <ion-col\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        ion-row\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button\r\n                  (click)=\"isHiddenQuestionSelected = false; isEditMode = false\"\r\n                  routerLink=\"{{ '/AdminPanel/Questions/' + selectedCourseId }}\"\r\n                  [queryParams]=\"{\r\n                    page: filteredQuestions.pageId,\r\n                    take: filteredQuestions.takeEntity,\r\n                    sortId: filteredQuestions.sortId,\r\n                    title: filteredQuestions.title,\r\n                    h: true\r\n                  }\"\r\n                  color=\"danger\"\r\n                  >بازگشت به لیست سوالات</ion-button\r\n                >\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-subtitle class=\"text-center\"\r\n              ><ion-item\r\n                class=\"text-center\"\r\n                routerLink=\"{{ '/c/' + selectedHiddenQuestions[0].courseId }}\"\r\n                lines=\"none\"\r\n                *ngIf=\"selectedHiddenQuestions.length > 0\"\r\n              >\r\n                <ion-label color=\"medium\" class=\"text-center\">{{\r\n                  \"دوره ی: \" + selectedHiddenQuestions[0].courseName\r\n                }}</ion-label>\r\n              </ion-item></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              >پرسش پاسخ در اول آموز</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"isEditMode\">\r\n            <form\r\n              [formGroup]=\"editForm\"\r\n              (ngSubmit)=\"presentEditAlertConfirm(1)\"\r\n            >\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"floating\"\r\n                  >عنوان <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-input formControlName=\"editTitle\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"floating\"\r\n                  >توضیحات <ion-text color=\"danger\">*</ion-text></ion-label\r\n                >\r\n                <ion-textarea\r\n                  autoGrow=\"true\"\r\n                  required\r\n                  formControlName=\"description\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                <ion-button\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"warning\"\r\n                  (click)=\"isEditMode = false\"\r\n                >\r\n                  لغو\r\n                </ion-button>\r\n                <ion-button\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"editForm.invalid\"\r\n                >\r\n                  ویرایش\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </form>\r\n          </ion-card-content>\r\n          <ion-card-content *ngIf=\"!isEditMode\">\r\n            <section *ngIf=\"selectedHiddenQuestions.length > 0\">\r\n              <ion-card *ngFor=\"let q of selectedHiddenQuestions\">\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>\r\n                    <ion-text *ngIf=\"q.isTeacherAnswer\" color=\"warning\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"مدرس \" }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"!q.isTeacherAnswer\" color=\"warning\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"person-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"کاربر \" }}\r\n                    </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userId + '- ' }}\r\n                    </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userName }}\r\n                    </ion-text>\r\n                    {{ \" - \" }}\r\n                    {{ getTime(q.createDate) }}\r\n                    {{ \" - \" }}\r\n                    {{ q.createDate | persianDate }}\r\n                    {{ \" - \" }}\r\n                    <ion-text *ngIf=\"q.isActive\" color=\"success\">\r\n                      <ion-icon\r\n                        color=\"success\"\r\n                        name=\"checkmark-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"فعال\" }}\r\n                    </ion-text>\r\n                    <ion-text *ngIf=\"!q.isActive\" color=\"danger\">\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        name=\"close-circle-outline\"\r\n                      ></ion-icon>\r\n                      {{ \"غیر فعال\" }}\r\n                    </ion-text></ion-card-subtitle\r\n                  >\r\n                  <ion-card-title>{{ q.title }}</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <p class=\"description\">\r\n                    {{ q.description }}\r\n                  </p>\r\n                  <br />\r\n                  <ion-button\r\n                    *ngIf=\"!q.isActive\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    (click)=\"presentHiddenActiveAlertConfirm(q.id)\"\r\n                  >\r\n                    فعال شدن\r\n                  </ion-button>\r\n                  <ion-button\r\n                    *ngIf=\"q.isActive\"\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    color=\"danger\"\r\n                    (click)=\"presentHiddenDeActiveAlertConfirm(q.id)\"\r\n                  >\r\n                    غیر فعال شدن\r\n                  </ion-button>\r\n                  <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"warning\"\r\n                      (click)=\"onEdit(q.id, 1)\"\r\n                    >\r\n                      ویرایش\r\n                    </ion-button>\r\n                    <ion-button\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentHiddenDeleteAlertConfirm(q.id)\"\r\n                    >\r\n                      حذف\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"!q.isBest\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"instagram\"\r\n                      (click)=\"presentSetBestQuestionAnswer(q.id)\"\r\n                    >\r\n                      پاسخ برگزیده\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"q.isBest\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"outline\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentUnSetBestQuestionAnswer(q.id)\"\r\n                    >\r\n                      لغو پاسخ برگزیده\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"selectedHiddenQuestions[0].isClosed\">\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"presentonOpenHiddenQuestion()\"\r\n            color=\"warning\"\r\n            expand=\"block\"\r\n            fill=\"outline\"\r\n            shape=\"round\"\r\n          >\r\n            باز کردن سوال\r\n          </ion-button>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"!selectedHiddenQuestions[0].isClosed\">\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"presentonCloseHiddenQuestion()\"\r\n            color=\"telegram\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n          >\r\n            بستن سوال\r\n          </ion-button>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title class=\"text-center\"\r\n              >پاسخ خود را وارد کنید</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <section *ngIf=\"login\">\r\n              <div *ngIf=\"CheckBuy()\">\r\n                <form\r\n                  [formGroup]=\"questionAnswerForm\"\r\n                  (ngSubmit)=\"presentAlertConfirm2(1)\"\r\n                >\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"floating\"\r\n                      >پاسخ شما <ion-text color=\"danger\">*</ion-text></ion-label\r\n                    >\r\n                    <ion-textarea\r\n                      autoGrow=\"true\"\r\n                      required\r\n                      formControlName=\"answer\"\r\n                    ></ion-textarea>\r\n                  </ion-item>\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"questionAnswerForm.invalid\"\r\n                  >\r\n                    ایجاد پاسخ\r\n                  </ion-button>\r\n                </form>\r\n              </div>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row\r\n      *ngIf=\"\r\n        isCourseSelected &&\r\n        filteredQuestions &&\r\n        filteredQuestions.questions &&\r\n        !isQuestionSelected\r\n      \"\r\n    >\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\" *ngIf=\"login\">\r\n        <ion-segment\r\n          (ionChange)=\"segmentChanged()\"\r\n          [(ngModel)]=\"segmentSelected\"\r\n        >\r\n          <ion-segment-button value=\"public\">\r\n            <ion-label>سوالات عمومی</ion-label>\r\n            <ion-icon name=\"eye-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"hidden\">\r\n            <ion-label>سوالات خصوصی</ion-label>\r\n            <ion-icon name=\"eye-off-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n      <ion-col\r\n        *ngIf=\"\r\n          filteredQuestions.questions.length > 0 && segmentSelected == 'public'\r\n        \"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        ion-row\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"دنبال چه سوالی میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"questionSearch\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <ion-button routerLink=\"/AdminPanel/Questions\" color=\"danger\"\r\n                  >بازگشت به لیست دوره ها</ion-button\r\n                >\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-subtitle class=\"text-center\"\r\n              ><ion-item\r\n                class=\"text-center\"\r\n                routerLink=\"{{ '/c/' + filteredQuestions.courseId }}\"\r\n                lines=\"none\"\r\n                *ngIf=\"filteredQuestions.questions.length > 0\"\r\n              >\r\n                <ion-label color=\"medium\" class=\"text-center\">{{\r\n                  \"دوره ی: \" + filteredQuestions.courseName\r\n                }}</ion-label>\r\n              </ion-item></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              >پرسش و پاسخ در اول آموز</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"success\" *ngIf=\"questionsCount != -1\">{{\r\n                questionsCount + \" پرسش ثبت شده \"\r\n              }}</ion-label>\r\n              <ion-label color=\"success\" *ngIf=\"questionsCount == -1\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-grid dir=\"rtl\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(1)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      1\r\n                    </ion-button>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngFor=\"\r\n                      let page of MakePageCountArray(\r\n                        filteredQuestions.pageCount\r\n                      );\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      size=\"small\"\r\n                      [disabled]=\"filteredQuestions.pageId == page\"\r\n                      *ngIf=\"\r\n                        filteredQuestions.pageId <= i + 2 &&\r\n                        filteredQuestions.pageId >= i\r\n                      \"\r\n                      fill=\"{{\r\n                        filteredQuestions.pageId == page ? 'clear' : 'solid'\r\n                      }}\"\r\n                      color=\"{{\r\n                        page == filteredQuestions.pageId ? 'danger' : 'primary'\r\n                      }}\"\r\n                      (click)=\"goPage(page)\"\r\n                      >{{ page }}</ion-button\r\n                    >\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(filteredQuestions.pageCount)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      {{ filteredQuestions.pageCount }}\r\n                    </ion-button>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-list>\r\n              <ion-card *ngFor=\"let question of filteredQuestions.questions\">\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>\r\n                    <ion-text color=\"warning\">\r\n                      {{ question.userId + '- ' }}\r\n                    </ion-text>\r\n                    <ion-text color=\"medium\" class=\"over-hidden\">\r\n                      {{ question.userName + \" - \" }}\r\n                    </ion-text>\r\n                    <!-- <ion-text>\r\n                      {{ \"تاریخ بروزرسانی: \"\r\n                      }}{{ question.updateDate | persianDate }}\r\n                      {{ \" - \" }}\r\n                    </ion-text> -->\r\n                    <ion-text\r\n                      *ngIf=\"question.isActive\"\r\n                      color=\"success\"\r\n                      class=\"link-success over-hidden\"\r\n                    >\r\n                      فعال\r\n                      <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                        >{{ \" - پیام جدید\" }}\r\n                      </ion-text>\r\n                    </ion-text>\r\n                    <ion-text\r\n                      *ngIf=\"!question.isActive\"\r\n                      color=\"danger\"\r\n                      class=\"link-success over-hidden\"\r\n                    >\r\n                      غیر فعال\r\n                      <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                        >{{ \" - پیام جدید\" }}\r\n                      </ion-text>\r\n                    </ion-text>\r\n                  </ion-card-subtitle>\r\n                  <ion-card-title\r\n                    ><ion-item\r\n                      button\r\n                      (click)=\"onQuestionClick(question.id)\"\r\n                      routerLink=\"{{\r\n                        '/AdminPanel/Questions/' + question.courseId\r\n                      }}\"\r\n                      [queryParams]=\"{\r\n                        page: 1,\r\n                        take: 12,\r\n                        title: questionSearch,\r\n                        sortId: 0,\r\n                        questionid: +question.id,\r\n                        h: false\r\n                      }\"\r\n                    >\r\n                      <ion-label>\r\n                        {{ question.title }}\r\n                      </ion-label>\r\n                    </ion-item></ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-text color=\"medium\">\r\n                    {{ question.createDate | persianDate }}\r\n                    {{ \" - \" + \"تعداد بازدید \" + question.viewCount }}\r\n                    <ion-icon name=\"eye-outline\"></ion-icon>\r\n                  </ion-text>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-list>\r\n            <ion-grid dir=\"rtl\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(1)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      1\r\n                    </ion-button>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngFor=\"\r\n                      let page of MakePageCountArray(\r\n                        filteredQuestions.pageCount\r\n                      );\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      size=\"small\"\r\n                      [disabled]=\"filteredQuestions.pageId == page\"\r\n                      *ngIf=\"\r\n                        filteredQuestions.pageId <= i + 2 &&\r\n                        filteredQuestions.pageId >= i\r\n                      \"\r\n                      fill=\"{{\r\n                        filteredQuestions.pageId == page ? 'clear' : 'solid'\r\n                      }}\"\r\n                      color=\"{{\r\n                        page == filteredQuestions.pageId ? 'danger' : 'primary'\r\n                      }}\"\r\n                      (click)=\"goPage(page)\"\r\n                      >{{ page }}</ion-button\r\n                    >\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(filteredQuestions.pageCount)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      {{ filteredQuestions.pageCount }}\r\n                    </ion-button>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        *ngIf=\"\r\n          filteredQuestions.questions.length == 0 && segmentSelected == 'public'\r\n        \"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n      >\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"دنبال چه سوالی میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"questionSearch\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n              <ion-button routerLink=\"/AdminPanel/Questions\" color=\"danger\"\r\n                >بازگشت به لیست دوره ها</ion-button\r\n              >\r\n            </ion-list-header>\r\n            <ion-item color=\"warning\">\r\n              <ion-label class=\"text-center\">سوالی یافت نشد</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-card-content>\r\n            <ion-text color=\"success\" class=\"text-center\">\r\n              <h3 *ngIf=\"questionsCount != -1\">\r\n                {{ \" تعداد سوالات ثبت شده: \" + questionsCount }}\r\n              </h3>\r\n              <h3 *ngIf=\"questionsCount == -1\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </h3>\r\n            </ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        *ngIf=\"\r\n          filteredQuestions.questions.length > 0 &&\r\n          segmentSelected == 'hidden' &&\r\n          login\r\n        \"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        ion-row\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams2(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"دنبال چه سوالی میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"questionSearch\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n                <ion-button routerLink=\"/AdminPanel/Questions\" color=\"danger\"\r\n                  >بازگشت به لیست دوره ها</ion-button\r\n                >\r\n              </ion-list-header>\r\n            </ion-list>\r\n            <ion-card-subtitle class=\"text-center\"\r\n              ><ion-item\r\n                class=\"text-center\"\r\n                routerLink=\"{{ '/c/' + filteredQuestions.courseId }}\"\r\n                lines=\"none\"\r\n                *ngIf=\"filteredQuestions.questions.length > 0\"\r\n              >\r\n                <ion-label color=\"medium\" class=\"text-center\">{{\r\n                  \"دوره ی: \" + filteredQuestions.courseName\r\n                }}</ion-label>\r\n              </ion-item></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\"\r\n              >پرسش و پاسخ در اول آموز</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"success\" *ngIf=\"hiddenQuestionsCount != -1\">{{\r\n                hiddenQuestionsCount + \" پرسش ثبت شده \"\r\n              }}</ion-label>\r\n              <ion-label color=\"success\" *ngIf=\"hiddenQuestionsCount == -1\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-grid dir=\"rtl\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(1)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      1\r\n                    </ion-button>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngFor=\"\r\n                      let page of MakePageCountArray(\r\n                        filteredQuestions.pageCount\r\n                      );\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      size=\"small\"\r\n                      [disabled]=\"filteredQuestions.pageId == page\"\r\n                      *ngIf=\"\r\n                        filteredQuestions.pageId <= i + 2 &&\r\n                        filteredQuestions.pageId >= i\r\n                      \"\r\n                      fill=\"{{\r\n                        filteredQuestions.pageId == page ? 'clear' : 'solid'\r\n                      }}\"\r\n                      color=\"{{\r\n                        page == filteredQuestions.pageId ? 'danger' : 'primary'\r\n                      }}\"\r\n                      (click)=\"goPage(page)\"\r\n                      >{{ page }}</ion-button\r\n                    >\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(filteredQuestions.pageCount)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      {{ filteredQuestions.pageCount }}\r\n                    </ion-button>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-list>\r\n              <ion-card *ngFor=\"let question of filteredQuestions.questions\">\r\n                <ion-card-header>\r\n                  <ion-card-subtitle>\r\n                    <ion-text color=\"warning\">\r\n                      {{ question.userId + '- ' }}\r\n                    </ion-text>\r\n                    <ion-text color=\"medium\" class=\"over-hidden\">\r\n                      {{ question.userName + \" - \" }}\r\n                    </ion-text>\r\n                    <!-- <ion-text>\r\n                      {{ \"تاریخ بروزرسانی: \"\r\n                      }}{{ question.updateDate | persianDate }}\r\n                      {{ \" - \" }}\r\n                    </ion-text> -->\r\n                    <ion-text\r\n                      *ngIf=\"question.isActive\"\r\n                      color=\"success\"\r\n                      class=\"link-success over-hidden\"\r\n                    >\r\n                      فعال\r\n                      <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                        >{{ \" - پیام جدید\" }}\r\n                      </ion-text>\r\n                    </ion-text>\r\n                    <ion-text\r\n                      *ngIf=\"!question.isActive\"\r\n                      color=\"danger\"\r\n                      class=\"link-success over-hidden\"\r\n                    >\r\n                      غیر فعال\r\n                      <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                        >{{ \" - پیام جدید\" }}\r\n                      </ion-text>\r\n                    </ion-text>\r\n                  </ion-card-subtitle>\r\n                  <ion-card-title\r\n                    ><ion-item\r\n                      button\r\n                      (click)=\"onQuestionClick(question.id)\"\r\n                      routerLink=\"{{\r\n                        '/AdminPanel/Questions/' + question.courseId\r\n                      }}\"\r\n                      [queryParams]=\"{\r\n                        page: 1,\r\n                        take: 12,\r\n                        title: questionSearch,\r\n                        sortId: 0,\r\n                        questionid: +question.id,\r\n                        h: true\r\n                      }\"\r\n                    >\r\n                      <ion-label>\r\n                        {{ question.title }}\r\n                      </ion-label>\r\n                    </ion-item></ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-text color=\"medium\">\r\n                    {{ question.createDate | persianDate }}\r\n                    {{ \" - \" + \"تعداد بازدید \" + question.viewCount }}\r\n                    <ion-icon name=\"eye-outline\"></ion-icon>\r\n                  </ion-text>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-list>\r\n            <ion-grid dir=\"rtl\">\r\n              <ion-row>\r\n                <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(1)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      1\r\n                    </ion-button>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId > 2 &&\r\n                      filteredQuestions.pageCount > 2\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngFor=\"\r\n                      let page of MakePageCountArray(\r\n                        filteredQuestions.pageCount\r\n                      );\r\n                      let i = index\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      size=\"small\"\r\n                      [disabled]=\"filteredQuestions.pageId == page\"\r\n                      *ngIf=\"\r\n                        filteredQuestions.pageId <= i + 2 &&\r\n                        filteredQuestions.pageId >= i\r\n                      \"\r\n                      fill=\"{{\r\n                        filteredQuestions.pageId == page ? 'clear' : 'solid'\r\n                      }}\"\r\n                      color=\"{{\r\n                        page == filteredQuestions.pageId ? 'danger' : 'primary'\r\n                      }}\"\r\n                      (click)=\"goPage(page)\"\r\n                      >{{ page }}</ion-button\r\n                    >\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-text color=\"primary\"> ... </ion-text>\r\n                  </span>\r\n\r\n                  <span\r\n                    *ngIf=\"\r\n                      filteredQuestions.pageId + 1 < filteredQuestions.pageCount\r\n                    \"\r\n                  >\r\n                    <ion-button\r\n                      (click)=\"goPage(filteredQuestions.pageCount)\"\r\n                      size=\"small\"\r\n                      fill=\"solid\"\r\n                      color=\"primary\"\r\n                    >\r\n                      {{ filteredQuestions.pageCount }}\r\n                    </ion-button>\r\n                  </span>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        dir=\"rtl\"\r\n        *ngIf=\"\r\n          filteredQuestions.questions.length == 0 &&\r\n          segmentSelected == 'hidden' &&\r\n          login\r\n        \"\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n      >\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams2(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"دنبال چه سوالی میگردی؟\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"questionSearch\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header class=\"no-padding\">\r\n              <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n              <ion-button routerLink=\"/AdminPanel/Questions\" color=\"danger\"\r\n                >بازگشت به لیست دوره ها</ion-button\r\n              >\r\n            </ion-list-header>\r\n            <ion-item color=\"warning\">\r\n              <ion-label class=\"text-center\">سوالی یافت نشد</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-card-content>\r\n            <ion-text color=\"success\" class=\"text-center\">\r\n              <h3 *ngIf=\"hiddenQuestionsCount != -1\">\r\n                {{ \" تعداد سوالات ثبت شده: \" + hiddenQuestionsCount }}\r\n              </h3>\r\n              <h3 *ngIf=\"hiddenQuestionsCount == -1\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </h3>\r\n            </ion-text>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_questions_questions_mo-55ae1e.js.map