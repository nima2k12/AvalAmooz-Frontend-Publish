"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pipe_price_module_ts-src_app_view_pages_home_questions_questions_module_ts"],{

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

/***/ 58365:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/home/questions/questions-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsRoutingModule": () => (/* binding */ QuestionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.component */ 4356);




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

/***/ 4356:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/home/questions/questions.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.component.html?ngResource */ 68630);
/* harmony import */ var _questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.component.scss?ngResource */ 30097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/model/course/CourseModel */ 51474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/i18n/site-language.service */ 37159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32425);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */













 // import { ReCaptchaV3Service } from 'ngx-captcha';
// import { load } from 'recaptcha-v3';





let QuestionsComponent = class QuestionsComponent {
  constructor(language, menuCtrl, router, activatedRoute, courseService, loadingController, toastController, alertController, // private reCaptchaV3Service: ReCaptchaV3Service,
  fb, title, meta, routerOutlet) {
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.fb = fb;
    this.title = title;
    this.meta = meta;
    this.routerOutlet = routerOutlet;
    this.questionsCount = -1;
    this.hiddenQuestionsCount = -1;
    this.selectedQuestions = [];
    this.selectedHiddenQuestions = [];
    this.isTeacherRested = false;
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.isHiddenQuestionSelected = false;
    this.selectedCourseId = 0;
    this.selectedQuestionId = 0;
    this.filteredCourses = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_8__.CourseFilterModel(false, 1, 20, '');
    this.courseSearch = '';
    this.questionSearch = '';
    this.notfound = false;
    this.login = false;
    this.isPrivate = false;
    this.isAskMode = false;
    this.showSearchbar = false;
    this.segmentSelected = 'public';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.windowWidth = 1000;
    this.isReportMode = false;
    this.replyId = 0;
    this.searchOpen = false;
    this.siteSearchQuery = '';
    this.cartCoursesCount = 0;
    this.cartProductsCount = 0;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    _core_common_G__WEBPACK_IMPORTED_MODULE_11__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  get cartCount() {
    return this.cartCoursesCount + this.cartProductsCount;
  }

  get loggedIn() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_10__.GAccount.IsLoggedIn();
  }

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  url(path) {
    return this.language.url(path);
  }

  onSiteSearch() {
    if (this.siteSearchQuery && this.siteSearchQuery.trim()) {
      this.router.navigate(['/Home/Search'], {
        queryParams: {
          title: this.siteSearchQuery.trim(),
          page: 1
        }
      });
    }
  }

  clearCourseSearch() {
    this.courseSearch = '';
    this.setQueryParams2(1);
  }

  clearQuestionSearch() {
    this.questionSearch = '';
    this.setQueryParams(1);
  }

  updateTitle(title = 'اول آموز | تالار پرسش و پاسخ دوره‌های آموزشی معلمان ابتدایی') {
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

  updateOgUrl(url = 'http://localhost:4300/Questions') {
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
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      name: 'og:image:alt',
      content: 'لوگو تالار پرسش و پاسخ اول آموز'
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'لوگو تالار پرسش و پاسخ اول آموز'
    });
  }

  updateDescription(desc = 'تالار پرسش و پاسخ تخصصی دوره‌های آموزشی معلمان ابتدایی اول آموز؛ پاسخ به سوالات روش تدریس، اختلالات یادگیری، طرح درس و مدیریت کلاس اول تا ششم دبستان.') {
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

  ionViewWillEnter() {
    this.windowWidth = +window.innerWidth;
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.login = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_10__.GAccount.IsLoggedIn();
    let filter;
    let filter2;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        this.updateTitle();
        this.updateOgUrl('http://localhost:4300/Questions');
        this.updateDescription();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter2 = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_8__.CourseFilterModel(false, 1, 20, this.courseSearch);
        this.courseService.GetQuestionCoursesByFilter(filter2).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            this.notfound = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = true;
        this.selectedCourseId = +id;

        if (this.selectedCourseId === 3) {
          this.onSelectItem2();
        }

        this.activatedRoute.queryParams.subscribe(queryParams => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
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
          filter = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CourseQuestionFilterModel(this.selectedCourseId, page, take, title, sortId);
          this.filteredQuestions = filter;

          if (this.segmentSelected == 'public') {
            if (questionId != 0) {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/Questions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&questionId=' + questionId + '&h=' + h);
              this.selectedQuestionId = questionId;
              this.courseService.GetCourseQuestionsDetailsById(questionId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                  this.selectedQuestions = res.data;
                  this.isQuestionSelected = true;
                  this.updateTitle('پرسش و پاسخ - ' + this.selectedQuestions[0].courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.selectedQuestions[0].title + ' | ' + this.selectedQuestions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                  this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.Page404Url);
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/Questions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&h=' + h);
              this.courseService.GetCourseQuestionsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                  this.updateTitle('پرسش و پاسخ - ' + this.filteredQuestions.courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + (this.filteredQuestions.questions[0]?.title || this.filteredQuestions.courseName) + ' | ' + (this.filteredQuestions.questions[0]?.description || ''));
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data; // SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetCourseQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                this.questionsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                this.questionsCount = -1;
              }
            }, err => {
              this.questionsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          } else {
            if (questionId != 0) {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/Questions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&questionId=' + questionId + '&h=' + h);
              this.selectedQuestionId = questionId;
              this.courseService.GetCourseHiddenQuestionsDetailsById(questionId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                  this.selectedHiddenQuestions = res.data;
                  this.isHiddenQuestionSelected = true;
                  this.updateTitle('پرسش و پاسخ - ' + this.selectedHiddenQuestions[0].courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.selectedHiddenQuestions[0].title + ' | ' + this.selectedHiddenQuestions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                  this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_4__.Urls.Page404Url);
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/Questions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&h=' + h);
              this.courseService.GetCourseHiddenQuestionsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                  this.updateTitle('پرسش و پاسخ - ' + this.filteredQuestions.courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + (this.filteredQuestions.questions[0]?.title || this.filteredQuestions.courseName) + ' | ' + (this.filteredQuestions.questions[0]?.description || ''));
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data; // SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetCourseHiddenQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
                this.hiddenQuestionsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
                this.hiddenQuestionsCount = -1;
              }
            }, err => {
              this.hiddenQuestionsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          }
        });
      }
    });
  }

  onReportClicked(commentId, mode) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReportMode = true;
  }

  segmentChanged() {
    this.questionSearch = '';
    this.filteredQuestions = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CourseQuestionFilterModel(this.selectedCourseId, 1, 12, '', 0);
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
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_11__.G.SiteKey;
    this.questionForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(80)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(10000)]]
    });
    this.questionAnswerForm = this.fb.group({
      answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(10000)]]
    });
    this.replyForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(2000)]]
    });
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.getCartCoursesCount().subscribe(count => this.cartCoursesCount = count));
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.getCartProductsCount().subscribe(count => this.cartProductsCount = count));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  presentAlertConfirm(typeCode) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
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
            _this2.onQuestion(_this2.isPrivate ? 1 : +typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertReportConfirm() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.onReport();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReport() {
    if (this.replyForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_11__.G.IsAndroid) {
        const comment = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.replyForm.value.comment, new Date(), 0, +this.replyId, '', 0, false, false, false, 'failed', false);
        this.courseService.ReportQuestion(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.replyForm.value.comment, new Date(), 0, +this.replyId, '', 0, false, false, false, 'failed', false);
        this.courseService.ReportQuestion(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       0,
      //       +this.replyId,
      //       '',
      //       0,
      //       false,
      //       false,
      //       false,
      //       'failed',
      //       false);
      //     this.courseService.ReportQuestion(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReportMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReportMode = false;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      //   else {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       0,
      //       +this.replyId,
      //       '',
      //       0,
      //       false,
      //       false,
      //       false,
      //       token,
      //       false);
      //     this.courseService.ReportQuestion(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReportMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReportMode = false;
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

  presentAlertConfirm4(typeCode) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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
            _this4.onQuestion(_this4.isPrivate ? 1 : +typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2(typeCode) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
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
            _this5.onQuestionAnswer(+typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentSetQuestionAlert() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'سوال شما پس از تایید به نمایش در می آید',
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presentSetQuestionAlert2() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'پاسخ شما پس از تایید به نمایش در می آید',
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  onCancel() {
    this.showSearchbar = false;
  }

  onQuestion(typeCode) {
    if (this.questionForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_11__.G.IsAndroid) {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, this.questionForm.value.title, this.questionForm.value.description, new Date(), 0, '', this.selectedCourseId, null, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.courseService.SetCourseQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'سوال ثبت شد');
            this.presentSetQuestionAlert();
            this.questionForm.setValue({
              title: '',
              description: ''
            });
            this.isPrivate = false;
            this.isAskMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, this.questionForm.value.title, this.questionForm.value.description, new Date(), 0, '', this.selectedCourseId, null, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.courseService.SetCourseQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'سوال ثبت شد');
            this.presentSetQuestionAlert();
            this.questionForm.setValue({
              title: '',
              description: ''
            });
            this.isPrivate = false;
            this.isAskMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const model =
      //       new QuestionModel(
      //         0,
      //         this.questionForm.value.title,
      //         this.questionForm.value.description,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         null,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         'failed',
      //         false);
      //     this.courseService.SetCourseQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'سوال ثبت شد');
      //           this.presentSetQuestionAlert();
      //           this.questionForm.setValue({
      //             title: '',
      //             description: ''
      //           });
      //           this.isPrivate = false;
      //           this.isAskMode = false;
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
      //         this.questionForm.value.title,
      //         this.questionForm.value.description,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         null,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         token,
      //         false);
      //     this.courseService.SetCourseQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'سوال ثبت شد');
      //           this.presentSetQuestionAlert();
      //           this.questionForm.setValue({
      //             title: '',
      //             description: ''
      //           });
      //           this.isPrivate = false;
      //           this.isAskMode = false;
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

  CheckBuy() {
    return _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds.find(n => n == this.selectedCourseId) || this.selectedQuestions[0].isCourseFree ? true : false;
  }

  CheckBuy2() {
    return _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds.find(n => n == this.selectedCourseId) || this.filteredQuestions.isCourseFree ? true : false;
  }

  onQuestionAnswer(typeCode) {
    if (this.questionAnswerForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_11__.G.IsAndroid) {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.courseService.SetCourseQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const model = new src_app_data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.courseService.SetCourseQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
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
      //         false,
      //         false,
      //         'failed',
      //         false);
      //     this.courseService.SetCourseQuestion(model).subscribe(
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
      //         false,
      //         false,
      //         token,
      //         false);
      //     this.courseService.SetCourseQuestion(model).subscribe(
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
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_8__.CourseFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.content.scrollToTop(1500);
    this.courseService.GetCoursesByFilter(filter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.NotFoundStatus) {
        this.notfound = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams(pageId, hide = false) {
    const res = this.segmentSelected == 'hidden';
    this.content.scrollToTop(1500);
    this.router.navigate(['Questions', this.selectedCourseId], {
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
    //     ['Questions', this.selectedCourseId],
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

  onSelectItem2() {
    this.selectedCourseId = +3;
    this.course = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_9__.CourseModel(3, 'سوالات عمومی از اول آموز', 0, 0, 1, 'این دوره ی آموزشی به جهت پرسش سوالات عمومی متداول ایجاد شده است', 'سوالات و پرسش های متداول عمومی که زیاد تخصصی نبوده و در هیچ دوره ی آموزشی اول آموز بیان نشده را میتوان در این بخش رسیدگی کرد.', '', '', new Date(), new Date(), [], true);
  }

};

QuestionsComponent.ctorParameters = () => [{
  type: src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_12__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Meta
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRouterOutlet
}];

QuestionsComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonContent]
  }]
};
QuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-questions',
  template: _questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], QuestionsComponent);


/***/ }),

/***/ 2267:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/home/questions/questions.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModule": () => (/* binding */ QuestionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-routing.module */ 58365);
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.component */ 4356);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/course/shared-course.module */ 44704);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);














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
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__.PersianDateModule,
            _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__.SharedCourseModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            // NgxCaptchaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]
    })
], QuestionsModule);



/***/ }),

/***/ 30097:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/home/questions/questions.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazir\", sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input, textarea {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 8px;\n}\n\nbutton:disabled, [aria-disabled=true] {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.qa-container {\n  width: min(1200px, 100% - 36px);\n  margin-inline: auto;\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex: 1;\n}\n\n.main-nav a, .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav a:hover, .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav a.active-nav, .nav-link-btn.active-nav {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n\n.icon-button {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #f6f1fd;\n  color: var(--purple);\n  border: 1px solid #e9d5ff;\n  font-size: 20px;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.15s, color 0.2s;\n}\n\n.icon-button:hover {\n  background: #ede9fe;\n  color: var(--purple);\n  transform: translateY(-1px);\n}\n\n.cart {\n  position: relative;\n}\n\n.cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  font-size: 10px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #3b2802;\n  border: 2px solid #fff;\n  padding: 1px 5px;\n  border-radius: 12px;\n}\n\n.login-button {\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #dcd0f7;\n  padding: 8px 14px;\n  border-radius: 12px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n\n.login-button:hover {\n  background: var(--purple);\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.menu-toggle {\n  display: inline-flex !important;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #ddd6fe;\n}\n\n.menu-toggle:hover {\n  background: var(--purple);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n.header-search {\n  max-width: 960px;\n  margin: auto;\n  padding: 4px 24px 16px;\n}\n\n.header-search label {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-bottom: 6px;\n}\n\n.search-input-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 2px solid #ddd1f5;\n  border-radius: 16px;\n  padding: 6px 14px;\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);\n}\n\n.search-input-icon {\n  font-size: 22px;\n  color: var(--purple);\n}\n\n.search-input-group input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 14px;\n}\n\n/* ==========================================================================\n   Hero Section\n   ========================================================================== */\n\n.qa-content {\n  --background: var(--bg-canvas);\n  --color: var(--ink);\n  flex: 1;\n}\n\n.qa-hero {\n  position: relative;\n  background: linear-gradient(180deg, #f7f2ff 0%, #faf8fe 65%, #fcfbfe 100%);\n  overflow: hidden;\n  padding-block: 32px 36px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.store-mode .qa-hero {\n  background: linear-gradient(180deg, #fff9f0 0%, #fffcf8 65%, #fcfbfe 100%);\n}\n\n.qa-hero-glow {\n  position: absolute;\n  top: -120px;\n  inset-inline-start: 8%;\n  width: 440px;\n  height: 440px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.22) 0%, rgba(255, 255, 255, 0) 70%);\n  pointer-events: none;\n}\n\n.store-mode .qa-hero-glow {\n  background: radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(255, 255, 255, 0) 70%);\n}\n\n.qa-hero-inner {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.qa-eyebrow-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.qa-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #5b21b6;\n  background: #ede6fc;\n  padding: 6px 14px;\n  border-radius: 30px;\n  font-size: 12px;\n  font-weight: 800;\n  border: 1px solid #ddd2f7;\n}\n\n.store-mode .qa-eyebrow {\n  color: #92400e;\n  background: #fef3c7;\n  border-color: #fde68a;\n}\n\n.qa-sparkle {\n  color: var(--amber);\n  font-size: 16px;\n}\n\n.qa-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #eefdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.qa-chip ion-icon {\n  font-size: 14px;\n  color: #10b981;\n}\n\n.qa-hero h1 {\n  font-size: clamp(24px, 3.2vw, 36px);\n  font-weight: 900;\n  line-height: 1.55;\n  letter-spacing: -0.8px;\n  color: var(--ink);\n  margin: 0;\n}\n\n.qa-highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n  z-index: 1;\n}\n\n.store-mode .qa-highlight {\n  color: #b45309;\n}\n\n.qa-highlight svg {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -4px;\n  height: 14px;\n  fill: none;\n  stroke: var(--amber);\n  stroke-width: 4.5;\n  stroke-linecap: round;\n  z-index: -1;\n}\n\n.qa-hero-desc {\n  font-size: 14px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  max-width: 760px;\n  margin: 0;\n}\n\n/* Trust stats strip */\n\n.qa-trust-strip {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 6px;\n  padding: 12px 18px;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid #ebdff8;\n  border-radius: 16px;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.qa-trust-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink);\n}\n\n.qa-trust-item ion-icon {\n  font-size: 17px;\n  color: var(--purple);\n}\n\n.store-mode .qa-trust-item ion-icon {\n  color: var(--amber-dark);\n}\n\n.qa-trust-divider {\n  width: 1px;\n  height: 18px;\n  background: #e2d7f3;\n}\n\n/* Interactive Breadcrumbs */\n\n.qa-breadcrumbs {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--muted);\n  margin-top: 4px;\n}\n\n.qa-breadcrumbs a {\n  color: var(--purple);\n  transition: color 0.2s;\n}\n\n.qa-breadcrumbs a:hover {\n  text-decoration: underline;\n}\n\n.qa-breadcrumb-sep {\n  font-size: 12px;\n  color: #cbd5e1;\n}\n\n.qa-breadcrumb-current {\n  color: var(--ink);\n  font-weight: 800;\n}\n\n/* ==========================================================================\n   Section Layout & Cards\n   ========================================================================== */\n\n.qa-main-section {\n  padding-block: 36px 56px;\n}\n\n.qa-card {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.04);\n  transition: all 0.24s ease;\n  margin-bottom: 24px;\n}\n\n.qa-card:hover {\n  box-shadow: 0 8px 28px rgba(99, 63, 163, 0.07);\n}\n\n.qa-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-bottom: 18px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.qa-card-title-group h2, .qa-card-title-group h3 {\n  font-size: 19px;\n  font-weight: 900;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.qa-card-title-group p {\n  font-size: 12.5px;\n  color: var(--muted);\n  margin-top: 4px;\n}\n\n/* Primary Button */\n\n.button-primary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border: 1px solid transparent;\n  border-radius: 14px;\n  padding: 10px 22px;\n  font-size: 13px;\n  font-weight: 800;\n  line-height: 1.4;\n  color: #fff;\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  border-color: #5b21b6;\n  box-shadow: 0 4px 16px var(--purple-glow);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.store-mode .button-primary {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n  border-color: #b45309;\n  box-shadow: 0 4px 16px rgba(217, 119, 6, 0.28);\n}\n\n.button-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px var(--purple-glow);\n}\n\n.button-primary.small {\n  min-height: 38px;\n  padding: 7px 16px;\n  font-size: 12px;\n  border-radius: 11px;\n}\n\n.button-secondary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border: 1px solid #ddd1f5;\n  border-radius: 14px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--purple);\n  background: #ffffff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.store-mode .button-secondary {\n  border-color: #fed7aa;\n  color: #b45309;\n}\n\n.button-secondary:hover:not(:disabled) {\n  background: var(--purple-light);\n  transform: translateY(-2px);\n}\n\n.button-secondary.small {\n  min-height: 38px;\n  padding: 7px 16px;\n  font-size: 12px;\n  border-radius: 11px;\n}\n\n.button-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #dc2626;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.button-danger:hover {\n  background: #fca5a5;\n  color: #991b1b;\n}\n\n/* ==========================================================================\n   Filter & Search Box\n   ========================================================================== */\n\n.qa-filter-box {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 18px 22px;\n  margin-bottom: 28px;\n  box-shadow: 0 4px 18px rgba(99, 63, 163, 0.03);\n}\n\n.qa-filter-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.qa-search-field {\n  flex: 1;\n  min-width: 240px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #faf8fd;\n  border: 1.5px solid #e9dff7;\n  border-radius: 14px;\n  padding: 8px 14px;\n  transition: all 0.2s;\n}\n\n.qa-search-field:focus-within {\n  border-color: var(--purple);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);\n}\n\n.qa-search-field ion-icon {\n  font-size: 20px;\n  color: var(--purple);\n}\n\n.qa-search-field input {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 13.5px;\n}\n\n.qa-clear-btn {\n  color: var(--muted);\n  font-size: 18px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.qa-clear-btn:hover {\n  color: var(--rose);\n}\n\n/* General Questions Hero Banner (Course 25) */\n\n.general-qa-banner {\n  background: linear-gradient(135deg, #fefce8 0%, #fffbeb 50%, #fef3c7 100%);\n  border: 1.5px dashed #fde047;\n  border-radius: 20px;\n  padding: 20px 24px;\n  margin-bottom: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: 0 4px 16px rgba(234, 179, 8, 0.08);\n}\n\n.general-qa-copy {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.general-qa-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: #fef08a;\n  color: #a16207;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  flex-shrink: 0;\n}\n\n.general-qa-text b {\n  display: block;\n  font-size: 16px;\n  color: #854d0e;\n  margin-bottom: 3px;\n}\n\n.general-qa-text p {\n  font-size: 12.5px;\n  color: #713f12;\n}\n\n/* ==========================================================================\n   Course / Product Grid Cards\n   ========================================================================== */\n\n.qa-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 22px;\n  margin-bottom: 32px;\n}\n\n.qa-card-item {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 18px rgba(99, 63, 163, 0.04);\n  transition: transform 0.24s ease, box-shadow 0.24s ease;\n  position: relative;\n}\n\n.qa-card-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 14px 32px rgba(109, 40, 217, 0.09);\n  border-color: #dcd0f7;\n}\n\n.qa-card-media {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/10;\n  background: #f4edf9;\n  overflow: hidden;\n}\n\n.qa-card-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n\n.qa-card-item:hover .qa-card-media img {\n  transform: scale(1.04);\n}\n\n.qa-item-badge {\n  position: absolute;\n  top: 10px;\n  inset-inline-start: 10px;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--purple);\n  border: 1px solid #e9d5ff;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 800;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.qa-card-content {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 12px;\n}\n\n.qa-card-content h3 {\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.55;\n  color: var(--ink);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.qa-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 12px;\n  border-top: 1px dashed #ede8f5;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.qa-action-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--purple);\n  font-weight: 800;\n  font-size: 12px;\n  transition: transform 0.2s;\n}\n\n.qa-card-item:hover .qa-action-link ion-icon {\n  transform: translateX(-4px);\n}\n\n/* ==========================================================================\n   Selected Target Banner (Current Course/Product)\n   ========================================================================== */\n\n.current-target-card {\n  background: linear-gradient(135deg, #ffffff 0%, #faf7ff 100%);\n  border: 1.5px solid #e2d4fa;\n  border-radius: 22px;\n  padding: 22px 26px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.05);\n}\n\n.current-target-info {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.target-avatar-wrap {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  overflow: hidden;\n  background: var(--purple-light);\n  border: 2px solid #ddd1f5;\n  flex-shrink: 0;\n}\n\n.target-avatar-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.target-text-wrap span.target-kicker {\n  font-size: 11.5px;\n  font-weight: 800;\n  color: var(--purple);\n  display: block;\n  margin-bottom: 4px;\n}\n\n.target-text-wrap h2 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.target-badges-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n\n.status-pill.active {\n  background: var(--emerald-light);\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n\n.status-pill.rested {\n  background: var(--rose-light);\n  color: #be123c;\n  border: 1px solid #fecdd3;\n}\n\n.status-pill.count {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.target-actions-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n/* ==========================================================================\n   Segment Tabs (Public vs Hidden)\n   ========================================================================== */\n\n.qa-segments-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f1ecf9;\n  padding: 6px;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.qa-segment-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink-secondary);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.qa-segment-pill.selected {\n  background: #ffffff;\n  color: var(--purple);\n  box-shadow: 0 3px 12px rgba(109, 40, 217, 0.12);\n  font-weight: 800;\n}\n\n.qa-segment-pill ion-icon {\n  font-size: 17px;\n}\n\n/* ==========================================================================\n   Ask Question & Forms\n   ========================================================================== */\n\n.ask-form-card {\n  background: #ffffff;\n  border: 1.5px solid #e7ddf9;\n  border-radius: 22px;\n  padding: 24px;\n  margin-bottom: 28px;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.04);\n}\n\n.ask-form-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.ask-form-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.ask-form-header h3 {\n  font-size: 17px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.ask-form-header p {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 3px;\n}\n\n.form-group {\n  margin-bottom: 18px;\n}\n\n.form-group label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 8px;\n}\n\n.form-group label span.req {\n  color: var(--rose);\n  margin-inline-start: 2px;\n}\n\n.form-control {\n  width: 100%;\n  border: 1.5px solid #e2d7f3;\n  border-radius: 14px;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  color: var(--ink);\n  background: #fdfcff;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n\n.form-control:focus {\n  outline: 0;\n  border-color: var(--purple);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);\n}\n\ntextarea.form-control {\n  resize: vertical;\n  min-height: 110px;\n  line-height: 1.8;\n}\n\n.private-toggle-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #faf8fd;\n  border: 1px solid #ede4fa;\n  border-radius: 14px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.private-toggle-box input[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--purple);\n  cursor: pointer;\n}\n\n.private-toggle-text b {\n  display: block;\n  font-size: 13px;\n  color: var(--ink);\n}\n\n.private-toggle-text small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.guideline-badge {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #fefce8;\n  border: 1px solid #fef08a;\n  border-radius: 14px;\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #854d0e;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n\n.guideline-badge ion-icon {\n  font-size: 18px;\n  color: #ca8a04;\n  margin-top: 2px;\n}\n\n/* Non-enrolled & Guest CTA Box */\n\n.notice-cta-card {\n  background: linear-gradient(135deg, #fbf9ff 0%, #f4eefa 100%);\n  border: 1.5px dashed #d8b4fe;\n  border-radius: 20px;\n  padding: 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.notice-cta-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 18px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n\n.notice-cta-card h4 {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.notice-cta-card p {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  max-width: 480px;\n}\n\n/* ==========================================================================\n   Question Stream Rows\n   ========================================================================== */\n\n.question-stream-row {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  padding: 18px 22px;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  box-shadow: 0 2px 10px rgba(99, 63, 163, 0.02);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.question-stream-row:hover {\n  border-color: #d1bbf3;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.08);\n}\n\n.q-row-main {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.q-row-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 11.5px;\n  color: var(--muted);\n}\n\n.q-user-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--purple);\n  font-weight: 700;\n}\n\n.q-user-pill ion-icon {\n  font-size: 15px;\n}\n\n.q-row-title {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--ink);\n  line-height: 1.5;\n  transition: color 0.2s;\n}\n\n.question-stream-row:hover .q-row-title {\n  color: var(--purple);\n}\n\n.q-row-arrow {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #f7f3fd;\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n\n.question-stream-row:hover .q-row-arrow {\n  background: var(--purple);\n  color: #ffffff;\n  transform: translateX(-3px);\n}\n\n/* ==========================================================================\n   Question Detail View & Discussion\n   ========================================================================== */\n\n.main-question-card {\n  background: #ffffff;\n  border: 1.5px solid #ded3f5;\n  border-radius: 22px;\n  padding: 26px;\n  margin-bottom: 28px;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.05);\n}\n\n.question-author-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n  padding-bottom: 14px;\n  border-bottom: 1px dashed #e8def6;\n}\n\n.author-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.author-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.author-avatar.teacher {\n  background: var(--emerald-light);\n  color: var(--emerald);\n}\n\n.author-info b {\n  display: block;\n  font-size: 13.5px;\n  color: var(--ink);\n}\n\n.author-info small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.main-question-card h2.q-title {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ink);\n  line-height: 1.55;\n  margin-bottom: 16px;\n}\n\n.q-body {\n  font-size: 14.5px;\n  color: var(--ink-secondary);\n  line-height: 2.1;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n/* Discussion / Replies list */\n\n.replies-section {\n  margin-top: 32px;\n}\n\n.replies-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.replies-heading h3 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.replies-count-pill {\n  background: var(--purple-light);\n  color: var(--purple);\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.reply-card {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 22px;\n  margin-bottom: 18px;\n  box-shadow: 0 4px 16px rgba(99, 63, 163, 0.03);\n  position: relative;\n  transition: all 0.2s ease;\n}\n\n.reply-card.teacher-reply {\n  background: linear-gradient(180deg, #fcfefe 0%, #f6fbf9 100%);\n  border: 1.5px solid #a7f3d0;\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.07);\n}\n\n.reply-card.best-reply {\n  border-color: #fde047;\n  background: linear-gradient(180deg, #fefefe 0%, #fefcf3 100%);\n}\n\n.reply-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1ecf9;\n}\n\n.teacher-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--emerald-light);\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.best-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #fef08a;\n  color: #854d0e;\n  border: 1px solid #fde047;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.reply-body {\n  font-size: 14px;\n  color: var(--ink);\n  line-height: 2;\n  white-space: pre-wrap;\n}\n\n/* Question closed banner */\n\n.closed-banner {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 16px 22px;\n  text-align: center;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n/* ==========================================================================\n   Pagination\n   ========================================================================== */\n\n.qa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-block: 28px 20px;\n}\n\n.qa-page-btn {\n  min-width: 38px;\n  height: 38px;\n  padding: 0 10px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e7ddf9;\n  background: #ffffff;\n  color: var(--ink);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.qa-page-btn:hover:not(:disabled) {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.qa-page-btn.active {\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  border-color: #5b21b6;\n  font-weight: 800;\n  box-shadow: 0 3px 10px var(--purple-glow);\n}\n\n.qa-page-ellipsis {\n  padding: 0 6px;\n  color: var(--muted);\n  font-weight: bold;\n}\n\n/* ==========================================================================\n   Empty States\n   ========================================================================== */\n\n.qa-empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #ffffff;\n  border: 1.5px dashed #ded4f4;\n  border-radius: 22px;\n  margin-block: 20px;\n}\n\n.qa-empty-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: var(--purple-light);\n  color: var(--purple);\n  font-size: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n}\n\n.qa-empty-state h3 {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.qa-empty-state p {\n  font-size: 13px;\n  color: var(--muted);\n  max-width: 440px;\n  margin: auto;\n}\n\n/* ==========================================================================\n   Footer\n   ========================================================================== */\n\n.learning-footer {\n  background: #ffffff;\n  border-top: 1px solid var(--border-soft);\n  padding-top: 48px;\n  margin-top: 40px;\n}\n\n.footer-top {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr 1.2fr;\n  gap: 36px;\n  padding-bottom: 40px;\n}\n\n.footer-desc {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  margin-top: 12px;\n  max-width: 380px;\n}\n\n.footer-domain-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f5f3ff;\n  color: var(--purple);\n  border: 1px solid #ddd6fe;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  margin-top: 14px;\n}\n\n.footer-links-col h4, .footer-trust-col h4 {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 16px;\n}\n\n.footer-links-col nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.footer-links-col a {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  transition: color 0.2s;\n  cursor: pointer;\n}\n\n.footer-links-col a:hover {\n  color: var(--purple);\n}\n\n.trust-cards-row {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.trust-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #faf8fd;\n  border: 1px solid #ede4fa;\n  padding: 10px 14px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink);\n}\n\n.trust-pill ion-icon {\n  font-size: 18px;\n  color: var(--purple);\n}\n\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-block: 20px;\n  border-top: 1px solid var(--border-soft);\n  font-size: 11.5px;\n  color: var(--muted);\n}\n\n.footer-heart {\n  color: var(--rose);\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f1eefb;\n  --ink-secondary: #cbd5e1;\n  --muted: #a6b2c6;\n  --purple: #c4b5fd;\n  --purple-dark: #a78bfa;\n  --purple-light: #302447;\n  --purple-glow: rgba(167, 139, 250, 0.18);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: #3b2d19;\n  --emerald: #6ee7b7;\n  --emerald-light: #173a32;\n  --rose: #fda4af;\n  --rose-light: #422435;\n  --paper: #211d30;\n  --card-bg: #211d30;\n  --bg-canvas: #14111f;\n  --border-soft: #40364f;\n  --surface-soft: #292337;\n  --accent-border: #58466e;\n  --amber-border: #72562a;\n  --emerald-border: #2c6754;\n  --rose-border: #754052;\n  --ion-background-color-rgb: 20, 17, 31;\n  --ion-text-color-rgb: 241, 238, 251;\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .learning-header {\n  background: rgba(28, 24, 41, 0.94);\n}\n\n:host-context(.dark-theme) .learning-footer {\n  background: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-trust-strip, :host-context(.dark-theme) .qa-item-badge {\n  background: rgba(33, 29, 48, 0.94);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .qa-trust-divider {\n  background: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-breadcrumb-sep {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) .cart-badge {\n  border-color: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-card, :host-context(.dark-theme) .qa-filter-box, :host-context(.dark-theme) .qa-card-item, :host-context(.dark-theme) .ask-form-card,\n:host-context(.dark-theme) .question-stream-row, :host-context(.dark-theme) .main-question-card, :host-context(.dark-theme) .reply-card, :host-context(.dark-theme) .qa-empty-state {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);\n}\n\n:host-context(.dark-theme) .qa-card-item:hover, :host-context(.dark-theme) .question-stream-row:hover {\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .qa-card-media, :host-context(.dark-theme) .qa-segments-wrap {\n  background: var(--surface-soft);\n}\n\n:host-context(.dark-theme) .qa-segment-pill.selected {\n  background: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-card-meta, :host-context(.dark-theme) .question-author-strip, :host-context(.dark-theme) .reply-header {\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-hero {\n  background: linear-gradient(180deg, #292039 0%, #1d182a 65%, var(--bg-canvas) 100%);\n}\n\n:host-context(.dark-theme) .store-mode .qa-hero {\n  background: linear-gradient(180deg, #30251c 0%, #211b22 65%, var(--bg-canvas) 100%);\n}\n\n:host-context(.dark-theme) .qa-eyebrow {\n  color: var(--purple);\n  background: var(--purple-light);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .store-mode .qa-eyebrow {\n  color: var(--amber-dark);\n  background: var(--amber-light);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .store-mode .qa-highlight {\n  color: var(--amber-dark);\n}\n\n:host-context(.dark-theme) .qa-chip {\n  background: var(--emerald-light);\n  color: var(--emerald);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .qa-chip ion-icon {\n  color: var(--emerald);\n}\n\n:host-context(.dark-theme) .current-target-card, :host-context(.dark-theme) .notice-cta-card {\n  background: linear-gradient(135deg, var(--paper), var(--purple-light));\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .target-avatar-wrap {\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .icon-button, :host-context(.dark-theme) .menu-toggle, :host-context(.dark-theme) .login-button, :host-context(.dark-theme) .footer-domain-badge, :host-context(.dark-theme) .q-row-arrow {\n  background: var(--purple-light);\n  border-color: var(--accent-border);\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) .icon-button:hover {\n  background: var(--surface-soft);\n}\n\n:host-context(.dark-theme) .menu-toggle:hover, :host-context(.dark-theme) .login-button:hover, :host-context(.dark-theme) .question-stream-row:hover .q-row-arrow {\n  background: #7c3aed;\n  color: #fff;\n}\n\n:host-context(.dark-theme) .search-input-group, :host-context(.dark-theme) .button-secondary, :host-context(.dark-theme) .qa-page-btn {\n  background: var(--paper);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .button-secondary:hover:not(:disabled), :host-context(.dark-theme) .qa-page-btn:hover:not(:disabled) {\n  background: var(--purple-light);\n}\n\n:host-context(.dark-theme) .store-mode .button-secondary {\n  color: var(--amber-dark);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .qa-page-btn.active, :host-context(.dark-theme) .qa-page-btn.active:hover:not(:disabled) {\n  background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  border-color: #7c3aed;\n  color: #fff;\n}\n\n:host-context(.dark-theme) .store-mode .button-primary {\n  color: #291b05;\n}\n\n:host-context(.dark-theme) .button-danger {\n  background: var(--rose-light);\n  color: var(--rose);\n  border-color: var(--rose-border);\n}\n\n:host-context(.dark-theme) .button-danger:hover {\n  background: #583044;\n  color: #fecdd3;\n}\n\n:host-context(.dark-theme) .qa-search-field, :host-context(.dark-theme) .form-control, :host-context(.dark-theme) .private-toggle-box, :host-context(.dark-theme) .trust-pill {\n  background: var(--surface-soft);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-search-field:focus-within, :host-context(.dark-theme) .form-control:focus {\n  background: var(--paper);\n  border-color: var(--purple);\n  box-shadow: 0 0 0 3px var(--purple-glow);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n:host-context(.dark-theme) .general-qa-banner {\n  background: linear-gradient(135deg, #322818, var(--amber-light));\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .general-qa-icon, :host-context(.dark-theme) .guideline-badge, :host-context(.dark-theme) .best-badge {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .general-qa-text b, :host-context(.dark-theme) .general-qa-text p, :host-context(.dark-theme) .guideline-badge ion-icon {\n  color: #fde68a;\n}\n\n:host-context(.dark-theme) .status-pill.active, :host-context(.dark-theme) .teacher-badge {\n  background: var(--emerald-light);\n  color: var(--emerald);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .status-pill.rested {\n  color: var(--rose);\n  border-color: var(--rose-border);\n}\n\n:host-context(.dark-theme) .status-pill.count, :host-context(.dark-theme) .closed-banner {\n  background: var(--surface-soft);\n  color: var(--ink-secondary);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .reply-card.teacher-reply {\n  background: linear-gradient(180deg, var(--paper), #1c302b);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .reply-card.best-reply {\n  background: linear-gradient(180deg, var(--paper), #30291e);\n  border-color: var(--amber-border);\n}\n\n/* Responsive adjustments */\n\n@media (max-width: 900px) {\n  .footer-top {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .qa-trust-strip {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  .nav-shell {\n    padding: 10px 16px;\n    min-height: 66px;\n  }\n\n  .brand-titles b {\n    font-size: 18px;\n  }\n\n  .brand-titles small {\n    font-size: 9px;\n  }\n\n  .qa-card {\n    padding: 16px;\n    border-radius: 18px;\n  }\n\n  .qa-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .current-target-card {\n    padding: 16px;\n  }\n\n  .current-target-info {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.over-hidden {\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  white-space: nowrap;\n}\n\n.white-space {\n  white-space: normal !important;\n}\n\n.link-success:hover {\n  color: #10b981;\n}\n\n.description {\n  white-space: pre-wrap;\n  font-size: 15px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcXVlc3Rpb25zLXRoZW1lLnNjc3MiLCJxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwRUFBQTtBQ0FGOztBREdBO0VBQUksc0JBQUE7QUNDSjs7QURBQTtFQUFJLGNBQUE7RUFBZ0IscUJBQUE7QUNLcEI7O0FESkE7RUFBMEIsYUFBQTtBQ1ExQjs7QURQQTtFQUFTLGVBQUE7RUFBaUIsU0FBQTtFQUFXLHVCQUFBO0FDYXJDOztBRFpBO0VBQVksd0NBQUE7QUNnQlo7O0FEZkE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNrQkY7O0FEaEJBO0VBQXdDLGFBQUE7RUFBYyxtQkFBQTtBQ3FCdEQ7O0FEcEJBO0VBQVcsb0JBQUE7RUFBc0IsY0FBQTtBQ3lCakM7O0FEeEJBO0VBQW9CLFNBQUE7RUFBVyxjQUFBO0FDNkIvQjs7QUQzQkE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FDOEJGOztBRDNCQTs7K0VBQUE7O0FBR0E7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUM4QkY7O0FENUJBO0VBQTBCLGFBQUE7QUNnQzFCOztBRDlCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtC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aUNBQUE7QUMyVko7O0FEelZFO0VBQW9FLGNBQUE7QUM0VnRFOztBRDNWRTtFQUFzQyxnQ0FBQTtFQUFrQyxxQkFBQTtFQUF1QixtQ0FBQTtBQ2dXakc7O0FEL1ZFO0VBQXNCLGtCQUFBO0VBQW9CLGdDQUFBO0FDbVc1Qzs7QURsV0U7RUFBcUMsK0JBQUE7RUFBaUMsMkJBQUE7RUFBNkIsZ0NBQUE7QUN1V3JHOztBRHRXRTtFQUE0QiwwREFBQTtFQUE0RCxtQ0FBQTtBQzBXMUY7O0FEeldFO0VBQXlCLDBEQUFBO0VBQTRELGlDQUFBO0FDNld2Rjs7QUQxV0EsMkJBQUE7O0FBQ0E7RUFDRTtJQUFjLDBCQUFBO0lBQTRCLFNBQUE7RUMrVzFDOztFRDlXQTtJQUFZLGFBQUE7RUNrWFo7O0VEalhBO0lBQWtCLFdBQUE7RUNxWGxCO0FBQ0Y7O0FEcFhBO0VBQ0U7SUFBYSxrQkFBQTtJQUFvQixnQkFBQTtFQ3dYakM7O0VEdlhBO0lBQWtCLGVBQUE7RUMyWGxCOztFRDFYQTtJQUFzQixjQUFBO0VDOFh0Qjs7RUQ3WEE7SUFBVyxhQUFBO0lBQWUsbUJBQUE7RUNrWTFCOztFRGpZQTtJQUFXLDBCQUFBO0VDcVlYOztFRHBZQTtJQUF1QixhQUFBO0VDd1l2Qjs7RUR2WUE7SUFBdUIsc0JBQUE7SUFBd0IsdUJBQUE7RUM0WS9DO0FBQ0Y7O0FBbjFEQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQXExREY7O0FBbDFEQTtFQUNFLDhCQUFBO0FBcTFERjs7QUFsMURBO0VBQ0UsY0FBQTtBQXExREY7O0FBbDFEQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFxMURGIiwiZmlsZSI6InF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1pbms6ICMxZTFiNGI7XG4gIC0taW5rLXNlY29uZGFyeTogIzQ3NTU2OTtcbiAgLS1tdXRlZDogIzY0NzQ4YjtcbiAgLS1wdXJwbGU6ICM2ZDI4ZDk7XG4gIC0tcHVycGxlLWRhcms6ICM1ODFjODc7XG4gIC0tcHVycGxlLWxpZ2h0OiAjZWRlOWZlO1xuICAtLXB1cnBsZS1nbG93OiByZ2JhKDEwOSwgNDAsIDIxNywgMC4yMik7XG4gIC0tYW1iZXI6ICNmNTllMGI7XG4gIC0tYW1iZXItZGFyazogI2Q5NzcwNjtcbiAgLS1hbWJlci1saWdodDogI2ZlZjNjNztcbiAgLS1lbWVyYWxkOiAjMTBiOTgxO1xuICAtLWVtZXJhbGQtbGlnaHQ6ICNkMWZhZTU7XG4gIC0tcm9zZTogI2Y0M2Y1ZTtcbiAgLS1yb3NlLWxpZ2h0OiAjZmZlNGU2O1xuICAtLXBhcGVyOiAjZmZmZmZmO1xuICAtLWJnLWNhbnZhczogI2ZjZmJmZTtcbiAgLS1ib3JkZXItc29mdDogI2VkZTlmNjtcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBcIlNoYWJuYW0tTWVkaXVtXCIsIFwiVmF6aXJcIiwgc2Fucy1zZXJpZik7XG59XG5cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5hIHsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEgeyBmb250OiBpbmhlcml0OyB9XG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbmJ1dHRvbiwgYSB7IC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbmJ1dHRvbjpmb2N1cy12aXNpYmxlLCBhOmZvY3VzLXZpc2libGUsIGlucHV0OmZvY3VzLXZpc2libGUsIHRleHRhcmVhOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgI2FjODhmMjtcbiAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuYnV0dG9uOmRpc2FibGVkLCBbYXJpYS1kaXNhYmxlZD10cnVlXSB7IG9wYWNpdHk6IC41NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuaW9uLWljb24geyBwb2ludGVyLWV2ZW50czogbm9uZTsgZmxleC1zaHJpbms6IDA7IH1cbmgxLCBoMiwgaDMsIGg0LCBwIHsgbWFyZ2luOiAwOyBjb2xvcjogaW5oZXJpdDsgfVxuXG4ucWEtY29udGFpbmVyIHtcbiAgd2lkdGg6IG1pbigxMjAwcHgsIGNhbGMoMTAwJSAtIDM2cHgpKTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlYWRlciAmIE5hdmlnYXRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubGVhcm5pbmctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1MDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ubGVhcm5pbmctaGVhZGVyOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLm5hdi1zaGVsbCB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDc2cHg7XG59XG5cbi5icmFuZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmJyYW5kLWxvZ28td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnJhbmQtbG9nby13cmFwIGltZyB7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cbi5icmFuZC1zcGFya2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XG4gIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5icmFuZC10aXRsZXMgYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5icmFuZC10aXRsZXMgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tYWluLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXg6IDE7XG59XG4ubWFpbi1uYXYgYSwgLm5hdi1saW5rLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLm1haW4tbmF2IGE6aG92ZXIsIC5uYXYtbGluay1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi5tYWluLW5hdiBhLmFjdGl2ZS1uYXYsIC5uYXYtbGluay1idG4uYWN0aXZlLW5hdiB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubmF2LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y2ZjFmZDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWQ1ZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycywgdHJhbnNmb3JtIC4xNXMsIGNvbG9yIC4ycztcbn1cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZGU5ZmU7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5jYXJ0IHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uY2FydC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBpbnNldC1pbmxpbmUtZW5kOiAtNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTtcbiAgY29sb3I6ICMzYjI4MDI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZ2FwOiA2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkMGY3O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG59XG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cbi5sb2dpbi1idXR0b24gaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cblxuLm1lbnUtdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ2ZmU7XG59XG4ubWVudS10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uaGVhZGVyLXNlYXJjaCB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNHB4IDI0cHggMTZweDtcbn1cbi5oZWFkZXItc2VhcmNoIGxhYmVsIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4uc2VhcmNoLWlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkMWY1O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XG59XG4uc2VhcmNoLWlucHV0LWljb24geyBmb250LXNpemU6IDIycHg7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4uc2VhcmNoLWlucHV0LWdyb3VwIGlucHV0IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgSGVybyBTZWN0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnFhLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XG4gIC0tY29sb3I6IHZhcigtLWluayk7XG4gIGZsZXg6IDE7XG59XG5cbi5xYS1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjdmMmZmIDAlLCAjZmFmOGZlIDY1JSwgI2ZjZmJmZSAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ibG9jazogMzJweCAzNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuLnN0b3JlLW1vZGUgLnFhLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmOWYwIDAlLCAjZmZmY2Y4IDY1JSwgI2ZjZmJmZSAxMDAlKTtcbn1cblxuLnFhLWhlcm8tZ2xvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTIwcHg7XG4gIGluc2V0LWlubGluZS1zdGFydDogOCU7XG4gIHdpZHRoOiA0NDBweDtcbiAgaGVpZ2h0OiA0NDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMjIpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDcwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN0b3JlLW1vZGUgLnFhLWhlcm8tZ2xvdyB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjUxLCAxOTEsIDM2LCAwLjIyKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xufVxuXG4ucWEtaGVyby1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ucWEtZXllYnJvdy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cbi5xYS1leWVicm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBjb2xvcjogIzViMjFiNjtcbiAgYmFja2dyb3VuZDogI2VkZTZmYztcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDJmNztcbn1cbi5zdG9yZS1tb2RlIC5xYS1leWVicm93IHtcbiAgY29sb3I6ICM5MjQwMGU7XG4gIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gIGJvcmRlci1jb2xvcjogI2ZkZTY4YTtcbn1cbi5xYS1zcGFya2xlIHsgY29sb3I6IHZhcigtLWFtYmVyKTsgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5xYS1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVmZGY1O1xuICBjb2xvcjogIzA2NWY0NjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3ZjNkMDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5xYS1jaGlwIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzEwYjk4MTsgfVxuXG4ucWEtaGVybyBoMSB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgMy4ydncsIDM2cHgpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbjogMDtcbn1cbi5xYS1oaWdobGlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHotaW5kZXg6IDE7XG59XG4uc3RvcmUtbW9kZSAucWEtaGlnaGxpZ2h0IHsgY29sb3I6ICNiNDUzMDk7IH1cbi5xYS1oaWdobGlnaHQgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogdmFyKC0tYW1iZXIpO1xuICBzdHJva2Utd2lkdGg6IDQuNTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnFhLWhlcm8tZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWF4LXdpZHRoOiA3NjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBUcnVzdCBzdGF0cyBzdHJpcCAqL1xuLnFhLXRydXN0LXN0cmlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkZmY4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuLnFhLXRydXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cbi5xYS10cnVzdC1pdGVtIGlvbi1pY29uIHsgZm9udC1zaXplOiAxN3B4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuLnN0b3JlLW1vZGUgLnFhLXRydXN0LWl0ZW0gaW9uLWljb24geyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IH1cbi5xYS10cnVzdC1kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxOHB4OyBiYWNrZ3JvdW5kOiAjZTJkN2YzOyB9XG5cbi8qIEludGVyYWN0aXZlIEJyZWFkY3J1bWJzICovXG4ucWEtYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5xYS1icmVhZGNydW1icyBhIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycztcbn1cbi5xYS1icmVhZGNydW1icyBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbi5xYS1icmVhZGNydW1iLXNlcCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICNjYmQ1ZTE7IH1cbi5xYS1icmVhZGNydW1iLWN1cnJlbnQgeyBjb2xvcjogdmFyKC0taW5rKTsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU2VjdGlvbiBMYXlvdXQgJiBDYXJkc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xYS1tYWluLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJsb2NrOiAzNnB4IDU2cHg7XG59XG5cbi5xYS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDQpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjI0cyBlYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnFhLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDcpO1xufVxuXG4ucWEtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbn1cbi5xYS1jYXJkLXRpdGxlLWdyb3VwIGgyLCAucWEtY2FyZC10aXRsZS1ncm91cCBoMyB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLnFhLWNhcmQtdGl0bGUtZ3JvdXAgcCB7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi8qIFByaW1hcnkgQnV0dG9uICovXG4uYnV0dG9uLXByaW1hcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkIDAlLCAjNmQyOGQ5IDEwMCUpO1xuICBib3JkZXItY29sb3I6ICM1YjIxYjY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggdmFyKC0tcHVycGxlLWdsb3cpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG59XG4uc3RvcmUtbW9kZSAuYnV0dG9uLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU5ZTBiIDAlLCAjZDk3NzA2IDEwMCUpO1xuICBib3JkZXItY29sb3I6ICNiNDUzMDk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyMTcsIDExOSwgNiwgMC4yOCk7XG59XG4uYnV0dG9uLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIycHggdmFyKC0tcHVycGxlLWdsb3cpO1xufVxuLmJ1dHRvbi1wcmltYXJ5LnNtYWxsIHtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuLmJ1dHRvbi1zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkMWY1O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLnN0b3JlLW1vZGUgLmJ1dHRvbi1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICNmZWQ3YWE7XG4gIGNvbG9yOiAjYjQ1MzA5O1xufVxuLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYnV0dG9uLXNlY29uZGFyeS5zbWFsbCB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5idXR0b24tZGFuZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2RjMjYyNjtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG59XG4uYnV0dG9uLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmY2E1YTU7XG4gIGNvbG9yOiAjOTkxYjFiO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRmlsdGVyICYgU2VhcmNoIEJveFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xYS1maWx0ZXItYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wMyk7XG59XG4ucWEtZmlsdGVyLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucWEtc2VhcmNoLWZpZWxkIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmOGZkO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlOWRmZjc7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xufVxuLnFhLXNlYXJjaC1maWVsZDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xKTtcbn1cbi5xYS1zZWFyY2gtZmllbGQgaW9uLWljb24geyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4ucWEtc2VhcmNoLWZpZWxkIGlucHV0IHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xufVxuLnFhLWNsZWFyLWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnFhLWNsZWFyLWJ0bjpob3ZlciB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuXG4vKiBHZW5lcmFsIFF1ZXN0aW9ucyBIZXJvIEJhbm5lciAoQ291cnNlIDI1KSAqL1xuLmdlbmVyYWwtcWEtYmFubmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZmNlOCAwJSwgI2ZmZmJlYiA1MCUsICNmZWYzYzcgMTAwJSk7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkICNmZGUwNDc7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDIzNCwgMTc5LCA4LCAwLjA4KTtcbn1cbi5nZW5lcmFsLXFhLWNvcHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG4uZ2VuZXJhbC1xYS1pY29uIHtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZlZjA4YTtcbiAgY29sb3I6ICNhMTYyMDc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmdlbmVyYWwtcWEtdGV4dCBiIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4NTRkMGU7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5nZW5lcmFsLXFhLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBjb2xvcjogIzcxM2YxMjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvdXJzZSAvIFByb2R1Y3QgR3JpZCBDYXJkc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xYS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICBnYXA6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5xYS1jYXJkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjRzIGVhc2UsIGJveC1zaGFkb3cgLjI0cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucWEtY2FyZC1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDE0cHggMzJweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOSk7XG4gIGJvcmRlci1jb2xvcjogI2RjZDBmNztcbn1cblxuLnFhLWNhcmQtbWVkaWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE2IC8gMTA7XG4gIGJhY2tncm91bmQ6ICNmNGVkZjk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucWEtY2FyZC1tZWRpYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZTtcbn1cbi5xYS1jYXJkLWl0ZW06aG92ZXIgLnFhLWNhcmQtbWVkaWEgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbn1cbi5xYS1pdGVtLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGluc2V0LWlubGluZS1zdGFydDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWQ1ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4ucWEtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgZ2FwOiAxMnB4O1xufVxuLnFhLWNhcmQtY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnFhLWNhcmQtbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZWRlOGY1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG4ucWEtYWN0aW9uLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG4ucWEtY2FyZC1pdGVtOmhvdmVyIC5xYS1hY3Rpb24tbGluayBpb24taWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNlbGVjdGVkIFRhcmdldCBCYW5uZXIgKEN1cnJlbnQgQ291cnNlL1Byb2R1Y3QpXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmN1cnJlbnQtdGFyZ2V0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZmFmN2ZmIDEwMCUpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmQ0ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDIycHggMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNSk7XG59XG4uY3VycmVudC10YXJnZXQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMThweDtcbn1cbi50YXJnZXQtYXZhdGFyLXdyYXAge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkMWY1O1xuICBmbGV4LXNocmluazogMDtcbn1cbi50YXJnZXQtYXZhdGFyLXdyYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udGFyZ2V0LXRleHQtd3JhcCBzcGFuLnRhcmdldC1raWNrZXIge1xuICBmb250LXNpemU6IDExLjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4udGFyZ2V0LXRleHQtd3JhcCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi50YXJnZXQtYmFkZ2VzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG4uc3RhdHVzLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uc3RhdHVzLXBpbGwuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZC1saWdodCk7IGNvbG9yOiAjMDY1ZjQ2OyBib3JkZXI6IDFweCBzb2xpZCAjYTdmM2QwOyB9XG4uc3RhdHVzLXBpbGwucmVzdGVkIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1saWdodCk7IGNvbG9yOiAjYmUxMjNjOyBib3JkZXI6IDFweCBzb2xpZCAjZmVjZGQzOyB9XG4uc3RhdHVzLXBpbGwuY291bnQgeyBiYWNrZ3JvdW5kOiAjZjFmNWY5OyBjb2xvcjogIzQ3NTU2OTsgfVxuXG4udGFyZ2V0LWFjdGlvbnMtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNlZ21lbnQgVGFicyAoUHVibGljIHZzIEhpZGRlbilcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtc2VnbWVudHMtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2YxZWNmOTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucWEtc2VnbWVudC1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA5cHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLnFhLXNlZ21lbnQtcGlsbC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3gtc2hhZG93OiAwIDNweCAxMnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjEyKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5xYS1zZWdtZW50LXBpbGwgaW9uLWljb24geyBmb250LXNpemU6IDE3cHg7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEFzayBRdWVzdGlvbiAmIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmFzay1mb3JtLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlN2RkZjk7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpO1xufVxuLmFzay1mb3JtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG59XG4uYXNrLWZvcm0taWNvbiB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmFzay1mb3JtLWhlYWRlciBoMyB7IGZvbnQtc2l6ZTogMTdweDsgZm9udC13ZWlnaHQ6IDkwMDsgY29sb3I6IHZhcigtLWluayk7IH1cbi5hc2stZm9ybS1oZWFkZXIgcCB7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWFyZ2luLXRvcDogM3B4OyB9XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwgc3Bhbi5yZXEgeyBjb2xvcjogdmFyKC0tcm9zZSk7IG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDJweDsgfVxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmQ3ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxMy41cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBiYWNrZ3JvdW5kOiAjZmRmY2ZmO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xKTtcbn1cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7IHJlc2l6ZTogdmVydGljYWw7IG1pbi1oZWlnaHQ6IDExMHB4OyBsaW5lLWhlaWdodDogMS44OyB9XG5cbi5wcml2YXRlLXRvZ2dsZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmYWY4ZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGU0ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByaXZhdGUtdG9nZ2xlLWJveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhY2NlbnQtY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcml2YXRlLXRvZ2dsZS10ZXh0IGIgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0taW5rKTsgfVxuLnByaXZhdGUtdG9nZ2xlLXRleHQgc21hbGwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBtYXJnaW4tdG9wOiAycHg7IH1cblxuLmd1aWRlbGluZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZWZjZTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWYwOGE7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg1NGQwZTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ndWlkZWxpbmUtYmFkZ2UgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjY2E4YTA0OyBtYXJnaW4tdG9wOiAycHg7IH1cblxuLyogTm9uLWVucm9sbGVkICYgR3Vlc3QgQ1RBIEJveCAqL1xuLm5vdGljZS1jdGEtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYmY5ZmYgMCUsICNmNGVlZmEgMTAwJSk7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkICNkOGI0ZmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuLm5vdGljZS1jdGEtaWNvbiB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLm5vdGljZS1jdGEtY2FyZCBoNCB7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6IHZhcigtLWluayk7IH1cbi5ub3RpY2UtY3RhLWNhcmQgcCB7IGZvbnQtc2l6ZTogMTIuNXB4OyBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7IG1heC13aWR0aDogNDgwcHg7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFF1ZXN0aW9uIFN0cmVhbSBSb3dzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnF1ZXN0aW9uLXN0cmVhbS1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHggMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wMik7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucXVlc3Rpb24tc3RyZWFtLXJvdzpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2QxYmJmMztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA4KTtcbn1cbi5xLXJvdy1tYWluIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cbi5xLXJvdy1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuLnEtdXNlci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5xLXVzZXItcGlsbCBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTVweDsgfVxuLnEtcm93LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xufVxuLnF1ZXN0aW9uLXN0cmVhbS1yb3c6aG92ZXIgLnEtcm93LXRpdGxlIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cbi5xLXJvdy1hcnJvdyB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmN2YzZmQ7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cbi5xdWVzdGlvbi1zdHJlYW0tcm93OmhvdmVyIC5xLXJvdy1hcnJvdyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBRdWVzdGlvbiBEZXRhaWwgVmlldyAmIERpc2N1c3Npb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubWFpbi1xdWVzdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZGVkM2Y1O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA1KTtcbn1cbi5xdWVzdGlvbi1hdXRob3Itc3RyaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZThkZWY2O1xufVxuLmF1dGhvci1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmF1dGhvci1hdmF0YXIge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5hdXRob3ItYXZhdGFyLnRlYWNoZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWVtZXJhbGQpO1xufVxuLmF1dGhvci1pbmZvIGIgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMy41cHg7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4uYXV0aG9yLWluZm8gc21hbGwgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxMXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBtYXJnaW4tdG9wOiAycHg7IH1cblxuLm1haW4tcXVlc3Rpb24tY2FyZCBoMi5xLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ucS1ib2R5IHtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4vKiBEaXNjdXNzaW9uIC8gUmVwbGllcyBsaXN0ICovXG4ucmVwbGllcy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5yZXBsaWVzLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yZXBsaWVzLWhlYWRpbmcgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5yZXBsaWVzLWNvdW50LXBpbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlcGx5LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLnJlcGx5LWNhcmQudGVhY2hlci1yZXBseSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmY2ZlZmUgMCUsICNmNmZiZjkgMTAwJSk7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2E3ZjNkMDtcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4wNyk7XG59XG4ucmVwbHktY2FyZC5iZXN0LXJlcGx5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmRlMDQ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmVmZWZlIDAlLCAjZmVmY2YzIDEwMCUpO1xufVxuXG4ucmVwbHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFlY2Y5O1xufVxuLnRlYWNoZXItYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpO1xuICBjb2xvcjogIzA2NWY0NjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZlZTdiNztcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5iZXN0LWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmVmMDhhO1xuICBjb2xvcjogIzg1NGQwZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTA0NztcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlcGx5LWJvZHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4vKiBRdWVzdGlvbiBjbG9zZWQgYmFubmVyICovXG4uY2xvc2VkLWJhbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUGFnaW5hdGlvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xYS1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG4gIG1hcmdpbi1ibG9jazogMjhweCAyMHB4O1xufVxuLnFhLXBhZ2UtYnRuIHtcbiAgbWluLXdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2RkZjk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4ucWEtcGFnZS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xufVxuLnFhLXBhZ2UtYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICM2ZDI4ZDkgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICM1YjIxYjY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggdmFyKC0tcHVycGxlLWdsb3cpO1xufVxuLnFhLXBhZ2UtZWxsaXBzaXMge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBFbXB0eSBTdGF0ZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ4cHggMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgI2RlZDRmNDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4O1xufVxuLnFhLWVtcHR5LWljb24ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4ucWEtZW1wdHktc3RhdGUgaDMgeyBmb250LXNpemU6IDE3cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB2YXIoLS1pbmspOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbi5xYS1lbXB0eS1zdGF0ZSBwIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBtYXgtd2lkdGg6IDQ0MHB4OyBtYXJnaW46IGF1dG87IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEZvb3RlclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5sZWFybmluZy1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5mb290ZXItdG9wIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciAxZnIgMS4yZnI7XG4gIGdhcDogMzZweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4uZm9vdGVyLWRlc2Mge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWF4LXdpZHRoOiAzODBweDtcbn1cbi5mb290ZXItZG9tYWluLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmM2ZmO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDZmZTtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmZvb3Rlci1saW5rcy1jb2wgaDQsIC5mb290ZXItdHJ1c3QtY29sIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5mb290ZXItbGlua3MtY29sIG5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5mb290ZXItbGlua3MtY29sIGEge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXItbGlua3MtY29sIGE6aG92ZXIgeyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4udHJ1c3QtY2FyZHMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLnRydXN0LXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWY4ZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGU0ZmE7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cbi50cnVzdC1waWxsIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4uZm9vdGVyLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuLmZvb3Rlci1oZWFydCB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuXG4vLyBMb2NhbCBkYXJrIHBhbGV0dGUgYW5kIHN1cmZhY2VzIGZvciBib3RoIGNvdXJzZSBhbmQgcHJvZHVjdCBkaXNjdXNzaW9ucy5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWluazogI2YxZWVmYjtcbiAgLS1pbmstc2Vjb25kYXJ5OiAjY2JkNWUxO1xuICAtLW11dGVkOiAjYTZiMmM2O1xuICAtLXB1cnBsZTogI2M0YjVmZDtcbiAgLS1wdXJwbGUtZGFyazogI2E3OGJmYTtcbiAgLS1wdXJwbGUtbGlnaHQ6ICMzMDI0NDc7XG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMTY3LCAxMzksIDI1MCwgMC4xOCk7XG4gIC0tYW1iZXI6ICNmYmJmMjQ7XG4gIC0tYW1iZXItZGFyazogI2ZjZDM0ZDtcbiAgLS1hbWJlci1saWdodDogIzNiMmQxOTtcbiAgLS1lbWVyYWxkOiAjNmVlN2I3O1xuICAtLWVtZXJhbGQtbGlnaHQ6ICMxNzNhMzI7XG4gIC0tcm9zZTogI2ZkYTRhZjtcbiAgLS1yb3NlLWxpZ2h0OiAjNDIyNDM1O1xuICAtLXBhcGVyOiAjMjExZDMwO1xuICAtLWNhcmQtYmc6ICMyMTFkMzA7XG4gIC0tYmctY2FudmFzOiAjMTQxMTFmO1xuICAtLWJvcmRlci1zb2Z0OiAjNDAzNjRmO1xuICAtLXN1cmZhY2Utc29mdDogIzI5MjMzNztcbiAgLS1hY2NlbnQtYm9yZGVyOiAjNTg0NjZlO1xuICAtLWFtYmVyLWJvcmRlcjogIzcyNTYyYTtcbiAgLS1lbWVyYWxkLWJvcmRlcjogIzJjNjc1NDtcbiAgLS1yb3NlLWJvcmRlcjogIzc1NDA1MjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDIwLCAxNywgMzE7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNDEsIDIzOCwgMjUxO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG5cbiAgLmxlYXJuaW5nLWhlYWRlciB7IGJhY2tncm91bmQ6IHJnYmEoMjgsIDI0LCA0MSwgMC45NCk7IH1cbiAgLmxlYXJuaW5nLWZvb3RlciB7IGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgfVxuICAucWEtdHJ1c3Qtc3RyaXAsIC5xYS1pdGVtLWJhZGdlIHsgYmFja2dyb3VuZDogcmdiYSgzMywgMjksIDQ4LCAwLjk0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtYm9yZGVyKTsgfVxuICAucWEtdHJ1c3QtZGl2aWRlciB7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1zb2Z0KTsgfVxuICAucWEtYnJlYWRjcnVtYi1zZXAgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gIC5jYXJ0LWJhZGdlIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlcik7IH1cblxuICAucWEtY2FyZCwgLnFhLWZpbHRlci1ib3gsIC5xYS1jYXJkLWl0ZW0sIC5hc2stZm9ybS1jYXJkLFxuICAucXVlc3Rpb24tc3RyZWFtLXJvdywgLm1haW4tcXVlc3Rpb24tY2FyZCwgLnJlcGx5LWNhcmQsIC5xYS1lbXB0eS1zdGF0ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICB9XG4gIC5xYS1jYXJkLWl0ZW06aG92ZXIsIC5xdWVzdGlvbi1zdHJlYW0tcm93OmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4gIC5xYS1jYXJkLW1lZGlhLCAucWEtc2VnbWVudHMtd3JhcCB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc29mdCk7IH1cbiAgLnFhLXNlZ21lbnQtcGlsbC5zZWxlY3RlZCB7IGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgfVxuICAucWEtY2FyZC1tZXRhLCAucXVlc3Rpb24tYXV0aG9yLXN0cmlwLCAucmVwbHktaGVhZGVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7IH1cblxuICAucWEtaGVybyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyOTIwMzkgMCUsICMxZDE4MmEgNjUlLCB2YXIoLS1iZy1jYW52YXMpIDEwMCUpOyB9XG4gIC5zdG9yZS1tb2RlIC5xYS1oZXJvIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzMwMjUxYyAwJSwgIzIxMWIyMiA2NSUsIHZhcigtLWJnLWNhbnZhcykgMTAwJSk7IH1cbiAgLnFhLWV5ZWJyb3cgeyBjb2xvcjogdmFyKC0tcHVycGxlKTsgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtYm9yZGVyKTsgfVxuICAuc3RvcmUtbW9kZSAucWEtZXllYnJvdyB7IGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXItbGlnaHQpOyBib3JkZXItY29sb3I6IHZhcigtLWFtYmVyLWJvcmRlcik7IH1cbiAgLnN0b3JlLW1vZGUgLnFhLWhpZ2hsaWdodCB7IGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTsgfVxuICAucWEtY2hpcCB7IGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpOyBjb2xvcjogdmFyKC0tZW1lcmFsZCk7IGJvcmRlci1jb2xvcjogdmFyKC0tZW1lcmFsZC1ib3JkZXIpOyB9XG4gIC5xYS1jaGlwIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyB9XG4gIC5jdXJyZW50LXRhcmdldC1jYXJkLCAubm90aWNlLWN0YS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wYXBlciksIHZhcigtLXB1cnBsZS1saWdodCkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJvcmRlcik7XG4gIH1cbiAgLnRhcmdldC1hdmF0YXItd3JhcCB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJvcmRlcik7IH1cblxuICAuaWNvbi1idXR0b24sIC5tZW51LXRvZ2dsZSwgLmxvZ2luLWJ1dHRvbiwgLmZvb3Rlci1kb21haW4tYmFkZ2UsIC5xLXJvdy1hcnJvdyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB9XG4gIC5pY29uLWJ1dHRvbjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc29mdCk7IH1cbiAgLm1lbnUtdG9nZ2xlOmhvdmVyLCAubG9naW4tYnV0dG9uOmhvdmVyLCAucXVlc3Rpb24tc3RyZWFtLXJvdzpob3ZlciAucS1yb3ctYXJyb3cge1xuICAgIGJhY2tncm91bmQ6ICM3YzNhZWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dC1ncm91cCwgLmJ1dHRvbi1zZWNvbmRhcnksIC5xYS1wYWdlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJvcmRlcik7XG4gIH1cbiAgLmJ1dHRvbi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCksIC5xYS1wYWdlLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7IGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7IH1cbiAgLnN0b3JlLW1vZGUgLmJ1dHRvbi1zZWNvbmRhcnkgeyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IGJvcmRlci1jb2xvcjogdmFyKC0tYW1iZXItYm9yZGVyKTsgfVxuICAucWEtcGFnZS1idG4uYWN0aXZlLCAucWEtcGFnZS1idG4uYWN0aXZlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkLCAjNmQyOGQ5KTtcbiAgICBib3JkZXItY29sb3I6ICM3YzNhZWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnN0b3JlLW1vZGUgLmJ1dHRvbi1wcmltYXJ5IHsgY29sb3I6ICMyOTFiMDU7IH1cbiAgLmJ1dHRvbi1kYW5nZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLWxpZ2h0KTsgY29sb3I6IHZhcigtLXJvc2UpOyBib3JkZXItY29sb3I6IHZhcigtLXJvc2UtYm9yZGVyKTsgfVxuICAuYnV0dG9uLWRhbmdlcjpob3ZlciB7IGJhY2tncm91bmQ6ICM1ODMwNDQ7IGNvbG9yOiAjZmVjZGQzOyB9XG5cbiAgLnFhLXNlYXJjaC1maWVsZCwgLmZvcm0tY29udHJvbCwgLnByaXZhdGUtdG9nZ2xlLWJveCwgLnRydXN0LXBpbGwge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc29mdCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gIH1cbiAgLnFhLXNlYXJjaC1maWVsZDpmb2N1cy13aXRoaW4sIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLXB1cnBsZS1nbG93KTtcbiAgfVxuICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IG9wYWNpdHk6IDE7IH1cblxuICAuZ2VuZXJhbC1xYS1iYW5uZXIgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzIyODE4LCB2YXIoLS1hbWJlci1saWdodCkpOyBib3JkZXItY29sb3I6IHZhcigtLWFtYmVyLWJvcmRlcik7IH1cbiAgLmdlbmVyYWwtcWEtaWNvbiwgLmd1aWRlbGluZS1iYWRnZSwgLmJlc3QtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbWJlci1ib3JkZXIpO1xuICB9XG4gIC5nZW5lcmFsLXFhLXRleHQgYiwgLmdlbmVyYWwtcWEtdGV4dCBwLCAuZ3VpZGVsaW5lLWJhZGdlIGlvbi1pY29uIHsgY29sb3I6ICNmZGU2OGE7IH1cbiAgLnN0YXR1cy1waWxsLmFjdGl2ZSwgLnRlYWNoZXItYmFkZ2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyBib3JkZXItY29sb3I6IHZhcigtLWVtZXJhbGQtYm9yZGVyKTsgfVxuICAuc3RhdHVzLXBpbGwucmVzdGVkIHsgY29sb3I6IHZhcigtLXJvc2UpOyBib3JkZXItY29sb3I6IHZhcigtLXJvc2UtYm9yZGVyKTsgfVxuICAuc3RhdHVzLXBpbGwuY291bnQsIC5jbG9zZWQtYmFubmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zb2Z0KTsgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpOyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTsgfVxuICAucmVwbHktY2FyZC50ZWFjaGVyLXJlcGx5IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tcGFwZXIpLCAjMWMzMDJiKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1lbWVyYWxkLWJvcmRlcik7IH1cbiAgLnJlcGx5LWNhcmQuYmVzdC1yZXBseSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXBhcGVyKSwgIzMwMjkxZSk7IGJvcmRlci1jb2xvcjogdmFyKC0tYW1iZXItYm9yZGVyKTsgfVxufVxuXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmZvb3Rlci10b3AgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgZ2FwOiAyOHB4OyB9XG4gIC5tYWluLW5hdiB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnFhLXRydXN0LXN0cmlwIHsgd2lkdGg6IDEwMCU7IH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2LXNoZWxsIHsgcGFkZGluZzogMTBweCAxNnB4OyBtaW4taGVpZ2h0OiA2NnB4OyB9XG4gIC5icmFuZC10aXRsZXMgYiB7IGZvbnQtc2l6ZTogMThweDsgfVxuICAuYnJhbmQtdGl0bGVzIHNtYWxsIHsgZm9udC1zaXplOiA5cHg7IH1cbiAgLnFhLWNhcmQgeyBwYWRkaW5nOiAxNnB4OyBib3JkZXItcmFkaXVzOiAxOHB4OyB9XG4gIC5xYS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmN1cnJlbnQtdGFyZ2V0LWNhcmQgeyBwYWRkaW5nOiAxNnB4OyB9XG4gIC5jdXJyZW50LXRhcmdldC1pbmZvIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbn1cbiIsIkBpbXBvcnQgJy4uL3F1ZXN0aW9ucy10aGVtZS5zY3NzJztcblxuLm92ZXItaGlkZGVuIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLndoaXRlLXNwYWNlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4ubGluay1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICMxMGI5ODE7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 68630:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/home/questions/questions.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.home/questions/questions\" fallback=\"/\">\n<div page-actions><button\n        type=\"button\"\n        class=\"icon-button search-toggle\"\n        (click)=\"searchOpen = !searchOpen\"\n        [attr.aria-expanded]=\"searchOpen\"\n        aria-controls=\"questions-search\"\n        title=\"جستجو در سامانه\"\n      >\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\n      </button>\n</div>\n\n<form id=\"questions-search\" class=\"header-search\" *ngIf=\"searchOpen\" (ngSubmit)=\"onSiteSearch()\">\n    <label for=\"catalog-query\">جستجو در دوره‌ها و محتوای اول آموز</label>\n    <div class=\"search-input-group\">\n      <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\n      <input\n        id=\"catalog-query\"\n        name=\"query\"\n        [(ngModel)]=\"siteSearchQuery\"\n        placeholder=\"عنوان دوره، مبحث یا سوال مورد نظر خود را بنویسید...\"\n        type=\"search\"\n        autofocus\n      />\n      <button class=\"button-primary small\" type=\"submit\">جستجو</button>\n    </div>\n  </form>\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"qa-content\" [attr.dir]=\"language.direction\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Hero Section & Pedagogical Banner -->\n  <section class=\"qa-hero\">\n    <div class=\"qa-hero-glow\" aria-hidden=\"true\"></div>\n    <div class=\"qa-container qa-hero-inner\">\n      <div class=\"qa-eyebrow-row\">\n        <span class=\"qa-eyebrow\">\n          <span class=\"qa-sparkle\">✦</span>\n          تالار پرسش و پاسخ دوره‌های آموزشی\n        </span>\n        <span class=\"qa-chip\">\n          <ion-icon name=\"checkmark-circle\" aria-hidden=\"true\"></ion-icon>\n          پشتیبانی علمی و کلاسی معلمان ابتدایی\n        </span>\n      </div>\n\n      <!-- Hero Title depending on navigation state -->\n      <h1 *ngIf=\"!isCourseSelected\">\n        همراهی و رفع اشکال معلمان در کلاس درس:<br />\n        <span class=\"qa-highlight\">\n          پاسخگویی به سوالات روش تدریس، طرح‌درس و محتوای دوره‌ها\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <h1 *ngIf=\"isCourseSelected && !isQuestionSelected\">\n        پرسش و پاسخ‌های دوره:<br />\n        <span class=\"qa-highlight\">\n          {{ filteredQuestions?.courseName || 'دوره آموزشی' }}\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <h1 *ngIf=\"isCourseSelected && isQuestionSelected\">\n        گفتگو و پاسخ‌های دوره:<br />\n        <span class=\"qa-highlight\">\n          {{ (selectedQuestions && selectedQuestions.length > 0) ? selectedQuestions[0].courseName : 'پرسش کلاسی' }}\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <p class=\"qa-hero-desc\">\n        در این تالار آموزگاران و دانشجویان دوره‌ها می‌توانند سوالات خود پیرامون روش‌های تدریس خلاق، سناریوی طرح‌درس، ارزشیابی توصیفی و مدیریت رفتار نوآموزان را مطرح نمایند تا توسط مدرسان و همکاران بررسی و پاسخ داده شود.\n      </p>\n\n      <!-- Trust Strip -->\n      <div class=\"qa-trust-strip\">\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"ribbon-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>+۳۴۰ آموزگار فعال پایه اول</span>\n        </div>\n        <div class=\"qa-trust-divider\" aria-hidden=\"true\"></div>\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"chatbubbles-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>پاسخگویی مستقیم مدرسان دوره‌ها</span>\n        </div>\n        <div class=\"qa-trust-divider\" aria-hidden=\"true\"></div>\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"shield-checkmark-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>تضمین کیفیت علمی محتوا</span>\n        </div>\n      </div>\n\n      <!-- Interactive Breadcrumbs -->\n      <nav class=\"qa-breadcrumbs\" aria-label=\"مسیر راهنما\">\n        <a [routerLink]=\"url('/Home')\">خانه</a>\n        <span class=\"qa-breadcrumb-sep\">/</span>\n        <a [routerLink]=\"url('/Questions')\" (click)=\"isCourseSelected = false; isQuestionSelected = false\">تالار پرسش و پاسخ دوره‌ها</a>\n        <ng-container *ngIf=\"isCourseSelected\">\n          <span class=\"qa-breadcrumb-sep\">/</span>\n          <a\n            *ngIf=\"isQuestionSelected\"\n            (click)=\"isQuestionSelected = false; isReportMode = false; replyForm.reset()\"\n            [routerLink]=\"url('/Questions/' + selectedCourseId)\"\n          >\n            {{ (selectedQuestions && selectedQuestions.length > 0) ? selectedQuestions[0].courseName : (filteredQuestions?.courseName || 'دوره') }}\n          </a>\n          <span *ngIf=\"!isQuestionSelected\" class=\"qa-breadcrumb-current\">\n            {{ filteredQuestions?.courseName || 'دوره آموزشی' }}\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"isQuestionSelected && selectedQuestions && selectedQuestions.length > 0\">\n          <span class=\"qa-breadcrumb-sep\">/</span>\n          <span class=\"qa-breadcrumb-current\">سوال: {{ selectedQuestions[0].title }}</span>\n        </ng-container>\n      </nav>\n    </div>\n  </section>\n\n  <!-- Main Section -->\n  <main class=\"qa-main-section qa-container\">\n\n    <!-- ====================================================================\n         STATE 1: Course Selection (isCourseSelected == false)\n         ==================================================================== -->\n    <div *ngIf=\"!isCourseSelected\">\n      \n      <!-- General Questions Highlight Card (Course ID 3) -->\n      <div class=\"general-qa-banner\">\n        <div class=\"general-qa-copy\">\n          <div class=\"general-qa-icon\">\n            <ion-icon name=\"help-buoy-outline\"></ion-icon>\n          </div>\n          <div class=\"general-qa-text\">\n            <b>سوال شما مربوط به دوره خاصی نیست؟</b>\n            <p>می‌توانید سوالات عمومی کلاسداری، چالش‌های اولیا و موضوعات متفرقه را در بخش سوالات عمومی اول آموز مطرح کنید.</p>\n          </div>\n        </div>\n        <button\n          type=\"button\"\n          class=\"button-primary\"\n          [routerLink]=\"url('/Questions/3')\"\n          [queryParams]=\"{ page: 1, take: 12, title: null, sortId: 0 }\"\n          (click)=\"onSelectItem2()\"\n        >\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n          <span>ورود به سوالات عمومی</span>\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Search Filter Bar for Courses -->\n      <div class=\"qa-filter-box\">\n        <div class=\"qa-filter-inner\">\n          <div class=\"qa-search-field\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <input\n              type=\"text\"\n              [(ngModel)]=\"courseSearch\"\n              placeholder=\"جستجو در میان دوره‌های آموزشی اول آموز...\"\n              (keyup.enter)=\"setQueryParams2(1)\"\n            />\n            <button\n              type=\"button\"\n              class=\"qa-clear-btn\"\n              *ngIf=\"courseSearch\"\n              (click)=\"clearCourseSearch()\"\n              title=\"پاک کردن جستجو\"\n            >\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </button>\n          </div>\n          <button type=\"button\" class=\"button-primary small\" (click)=\"setQueryParams2(1)\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <span>جستجو</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Top Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredCourses && filteredCourses.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId <= 1\"\n          (click)=\"goPreviousPage2()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <span *ngIf=\"filteredCourses.pageId > 2 && filteredCourses.pageCount > 2\">\n          <button type=\"button\" class=\"qa-page-btn\" (click)=\"goPage2(1)\">۱</button>\n          <span class=\"qa-page-ellipsis\">...</span>\n        </span>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredCourses.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredCourses.pageId == page\"\n          (click)=\"goPage2(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <span *ngIf=\"filteredCourses.pageId + 1 < filteredCourses.pageCount\">\n          <span class=\"qa-page-ellipsis\">...</span>\n          <button type=\"button\" class=\"qa-page-btn\" (click)=\"goPage2(filteredCourses.pageCount)\">\n            {{ filteredCourses.pageCount }}\n          </button>\n        </span>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId >= filteredCourses.pageCount\"\n          (click)=\"goNextPage2()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Course Cards Grid -->\n      <div class=\"qa-grid\" *ngIf=\"filteredCourses && filteredCourses.courses && filteredCourses.courses.length > 0\">\n        <div\n          class=\"qa-card-item\"\n          *ngFor=\"let c of filteredCourses.courses\"\n          [routerLink]=\"url('/Questions/' + c.id)\"\n          [queryParams]=\"{ page: 1, take: 12, title: null, sortId: 0 }\"\n          (click)=\"onSelectItem(c)\"\n          role=\"button\"\n          tabindex=\"0\"\n        >\n          <div class=\"qa-card-media\">\n            <img [src]=\"c.imageUrl || 'assets/learning/learning-world.svg'\" [alt]=\"c.name\" loading=\"lazy\" />\n            <span class=\"qa-item-badge\">روش تدریس ابتدایی</span>\n          </div>\n          <div class=\"qa-card-content\">\n            <h3>{{ c.name }}</h3>\n            <div class=\"qa-card-meta\">\n              <span class=\"qa-action-link\">\n                <span>مشاهده پرسش‌ها و گفتگو</span>\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Empty State for Courses -->\n      <div class=\"qa-empty-state\" *ngIf=\"filteredCourses && (!filteredCourses.courses || filteredCourses.courses.length === 0)\">\n        <div class=\"qa-empty-icon\">\n          <ion-icon name=\"school-outline\"></ion-icon>\n        </div>\n        <h3>دوره‌ای یافت نشد</h3>\n        <p>موردی با این عبارت جستجو پیدا نشد. لطفاً عبارت دیگری را جستجو فرمایید یا لیست کامل را مرور کنید.</p>\n        <button type=\"button\" class=\"button-secondary small\" style=\"margin-top: 14px;\" (click)=\"clearCourseSearch()\">\n          مشاهده همه دوره‌ها\n        </button>\n      </div>\n\n      <!-- Bottom Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredCourses && filteredCourses.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId <= 1\"\n          (click)=\"goPreviousPage2()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredCourses.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredCourses.pageId == page\"\n          (click)=\"goPage2(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId >= filteredCourses.pageCount\"\n          (click)=\"goNextPage2()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- ====================================================================\n         STATE 2: Questions List for Course (isCourseSelected && !isQuestionSelected)\n         ==================================================================== -->\n    <div *ngIf=\"isCourseSelected && !isQuestionSelected && filteredQuestions\">\n\n      <!-- Current Selected Course Context Card -->\n      <div class=\"current-target-card\">\n        <div class=\"current-target-info\">\n          <div class=\"target-avatar-wrap\">\n            <img [src]=\"(course && course.imageUrl) || 'assets/learning/learning-world.svg'\" [alt]=\"filteredQuestions.courseName\" />\n          </div>\n          <div class=\"target-text-wrap\">\n            <span class=\"target-kicker\">دوره انتخاب‌شده</span>\n            <h2>{{ filteredQuestions.courseName }}</h2>\n            <div class=\"target-badges-row\">\n              <span class=\"status-pill rested\" *ngIf=\"filteredQuestions.isRested\">\n                <ion-icon name=\"time-outline\"></ion-icon>\n                مدرس در مرخصی می‌باشد\n              </span>\n              <span class=\"status-pill active\" *ngIf=\"!filteredQuestions.isRested\">\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                مدرس دوره پاسخگوی سوالات شماست\n              </span>\n              <span class=\"status-pill count\" *ngIf=\"segmentSelected === 'public' && questionsCount !== -1\">\n                {{ questionsCount }} پرسش عمومی ثبت شده\n              </span>\n              <span class=\"status-pill count\" *ngIf=\"segmentSelected === 'hidden' && hiddenQuestionsCount !== -1\">\n                {{ hiddenQuestionsCount }} پرسش خصوصی ثبت شده\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"target-actions-wrap\">\n          <a\n            class=\"button-secondary small\"\n            [routerLink]=\"url('/c/' + selectedCourseId)\"\n            title=\"مشاهده صفحه معرفی دوره\"\n          >\n            <ion-icon name=\"open-outline\"></ion-icon>\n            <span>صفحه دوره</span>\n          </a>\n          <button\n            type=\"button\"\n            class=\"button-secondary small\"\n            (click)=\"isCourseSelected = false\"\n            [routerLink]=\"url('/Questions')\"\n          >\n            <ion-icon name=\"grid-outline\"></ion-icon>\n            <span>لیست همه دوره‌ها</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Segment Tabs (Public vs Hidden for logged in users) -->\n      <div class=\"qa-segments-wrap\" *ngIf=\"login\">\n        <button\n          type=\"button\"\n          class=\"qa-segment-pill\"\n          [class.selected]=\"segmentSelected === 'public'\"\n          (click)=\"segmentSelected = 'public'; segmentChanged()\"\n        >\n          <ion-icon name=\"eye-outline\"></ion-icon>\n          <span>سوالات عمومی</span>\n        </button>\n        <button\n          type=\"button\"\n          class=\"qa-segment-pill\"\n          [class.selected]=\"segmentSelected === 'hidden'\"\n          (click)=\"segmentSelected = 'hidden'; segmentChanged()\"\n        >\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          <span>سوالات خصوصی به مدرس</span>\n        </button>\n      </div>\n\n      <!-- Ask New Question Form Card -->\n      <div class=\"ask-form-card\">\n        <div class=\"ask-form-header\">\n          <div class=\"ask-form-icon\">\n            <ion-icon name=\"help-circle-outline\"></ion-icon>\n          </div>\n          <div>\n            <h3>سوال جدیدی از مدرس یا همکاران دارید؟</h3>\n            <p>سوالات تخصصی پیرامون مباحث، شیوه‌های تفهیم درس یا اشکالات این دوره را مطرح فرمایید.</p>\n          </div>\n        </div>\n\n        <!-- If user is logged in -->\n        <section *ngIf=\"login\">\n          <!-- If enrolled in course -->\n          <div *ngIf=\"CheckBuy2()\">\n            <form [formGroup]=\"questionForm\" (ngSubmit)=\"presentAlertConfirm4(segmentSelected === 'hidden' ? 1 : 0)\">\n              <!-- Private checkbox toggle -->\n              <label class=\"private-toggle-box\">\n                <input type=\"checkbox\" [(ngModel)]=\"isPrivate\" [ngModelOptions]=\"{standalone: true}\" />\n                <div class=\"private-toggle-text\">\n                  <b>ارسال سوال به صورت خصوصی و محرمانه به مدرس؟</b>\n                  <small>در صورت فعال بودن، سوال و پاسخ آن تنها برای شما و مدرس دوره قابل مشاهده خواهد بود.</small>\n                </div>\n              </label>\n\n              <div class=\"form-group\">\n                <label for=\"q-title\">\n                  عنوان سوال\n                  <span class=\"req\">*</span>\n                </label>\n                <input\n                  id=\"q-title\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"title\"\n                  placeholder=\"مثال: نحوه تدریس نشانه (ر) با بازی و شعر در کلاس اول\"\n                  required\n                />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"q-desc\">\n                  شرح کامل و جزئیات سوال\n                  <span class=\"req\">*</span>\n                </label>\n                <textarea\n                  id=\"q-desc\"\n                  class=\"form-control\"\n                  rows=\"4\"\n                  formControlName=\"description\"\n                  placeholder=\"لطفاً چالش یا ابهام کلاسی خود را با جزئیات بنویسید تا مدرس بتواند دقیق‌ترین راهنمایی را ارائه دهد...\"\n                  required\n                ></textarea>\n              </div>\n\n              <div class=\"guideline-badge\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>همکار گرامی؛ سوالات شما به منظور حفظ بار علمی و نظم تالار، پس از تایید توسط مدرس به نمایش درمی‌آیند.</span>\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"button-primary\"\n                [disabled]=\"questionForm.invalid\"\n              >\n                <ion-icon name=\"send-outline\"></ion-icon>\n                <span>ثبت و ارسال سوال</span>\n              </button>\n            </form>\n          </div>\n\n          <!-- If NOT enrolled in this course -->\n          <div *ngIf=\"!CheckBuy2()\" class=\"notice-cta-card\">\n            <div class=\"notice-cta-icon\">\n              <ion-icon name=\"school-outline\"></ion-icon>\n            </div>\n            <h4>شما هنوز در این دوره ثبت‌نام نکرده‌اید</h4>\n            <p>امکان پرسش سوال در این تالار ویژه شرکت‌کنندگان این دوره آموزشی است. برای دسترسی به محتوای دوره و بخش پرسش و پاسخ، لطفاً در دوره ثبت‌نام فرمایید.</p>\n            <a class=\"button-primary small\" [routerLink]=\"url('/c/' + selectedCourseId)\">\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              <span>مشاهده و تهیه دوره {{ filteredQuestions.courseName }}</span>\n            </a>\n          </div>\n        </section>\n\n        <!-- If NOT logged in -->\n        <section *ngIf=\"!login\" class=\"notice-cta-card\">\n          <div class=\"notice-cta-icon\">\n            <ion-icon name=\"log-in-outline\"></ion-icon>\n          </div>\n          <h4>برای ثبت سوال ابتدا وارد حساب کاربری خود شوید</h4>\n          <p>جهت حفظ حریم شخصی و امکان اطلاع‌رسانی از پاسخ‌های مدرس، نیاز به ثبت‌نام یا ورود به حساب کاربری دارید.</p>\n          <a class=\"button-primary small\" [routerLink]=\"url('/Account')\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            <span>عضویت / ورود به حساب کاربری</span>\n          </a>\n        </section>\n      </div>\n\n      <!-- Search in Course Questions -->\n      <div class=\"qa-filter-box\">\n        <div class=\"qa-filter-inner\">\n          <div class=\"qa-search-field\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <input\n              type=\"text\"\n              [(ngModel)]=\"questionSearch\"\n              placeholder=\"جستجو در میان پرسش‌های این دوره...\"\n              (keyup.enter)=\"setQueryParams(1)\"\n            />\n            <button\n              type=\"button\"\n              class=\"qa-clear-btn\"\n              *ngIf=\"questionSearch\"\n              (click)=\"clearQuestionSearch()\"\n              title=\"پاک کردن\"\n            >\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </button>\n          </div>\n          <button type=\"button\" class=\"button-primary small\" (click)=\"setQueryParams(1)\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <span>جستجو</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Top Questions Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredQuestions && filteredQuestions.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId <= 1\"\n          (click)=\"goPreviousPage()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredQuestions.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredQuestions.pageId == page\"\n          (click)=\"goPage(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId >= filteredQuestions.pageCount\"\n          (click)=\"goNextPage()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Questions Stream -->\n      <div *ngIf=\"filteredQuestions.questions && filteredQuestions.questions.length > 0\">\n        <a\n          *ngFor=\"let q of filteredQuestions.questions\"\n          class=\"question-stream-row\"\n          [routerLink]=\"url('/Questions/' + q.courseId)\"\n          [queryParams]=\"{\n            page: 1,\n            take: 12,\n            title: questionSearch,\n            sortId: 0,\n            questionid: q.id,\n            h: segmentSelected === 'hidden'\n          }\"\n          (click)=\"onQuestionClick(q.id)\"\n        >\n          <div class=\"q-row-main\">\n            <div class=\"q-row-meta\">\n              <span class=\"q-user-pill\">\n                <ion-icon name=\"person-circle-outline\"></ion-icon>\n                <span>{{ q.userName || 'آموزگار گرامی' }}</span>\n              </span>\n              <span>•</span>\n              <span>{{ q.createDate | persianDate }}</span>\n              <span>•</span>\n              <span>{{ q.viewCount }} بازدید</span>\n            </div>\n            <h3 class=\"q-row-title\">{{ q.title }}</h3>\n          </div>\n          <div class=\"q-row-arrow\" aria-hidden=\"true\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </div>\n        </a>\n      </div>\n\n      <!-- Empty State for Questions -->\n      <div class=\"qa-empty-state\" *ngIf=\"!filteredQuestions.questions || filteredQuestions.questions.length === 0\">\n        <div class=\"qa-empty-icon\">\n          <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </div>\n        <h3>هنوز پرسشی در این بخش ثبت نشده است</h3>\n        <p>شما می‌توانید اولین سوال را مطرح کنید تا مدرس دوره و سایر همکاران به گفتگو پاسخ دهند.</p>\n      </div>\n\n      <!-- Bottom Questions Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredQuestions && filteredQuestions.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId <= 1\"\n          (click)=\"goPreviousPage()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredQuestions.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredQuestions.pageId == page\"\n          (click)=\"goPage(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId >= filteredQuestions.pageCount\"\n          (click)=\"goNextPage()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- ====================================================================\n         STATE 3: Question Detail & Discussion (isQuestionSelected == true)\n         ==================================================================== -->\n    <div *ngIf=\"isCourseSelected && isQuestionSelected\">\n      \n      <!-- Top Action Bar with Back Link -->\n      <div style=\"display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; flex-wrap: wrap;\">\n        <button\n          type=\"button\"\n          class=\"button-secondary small\"\n          (click)=\"isQuestionSelected = false; isHiddenQuestionSelected = false; isReportMode = false; replyForm.reset()\"\n          [routerLink]=\"url('/Questions/' + selectedCourseId)\"\n          [queryParams]=\"{\n            page: filteredQuestions?.pageId || 1,\n            take: filteredQuestions?.takeEntity || 12,\n            sortId: filteredQuestions?.sortId || 0,\n            title: filteredQuestions?.title || '',\n            h: segmentSelected === 'hidden'\n          }\"\n        >\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          <span>بازگشت به لیست سوالات دوره</span>\n        </button>\n\n        <a\n          class=\"button-secondary small\"\n          *ngIf=\"selectedQuestions && selectedQuestions.length > 0\"\n          [routerLink]=\"url('/c/' + selectedQuestions[0].courseId)\"\n        >\n          <ion-icon name=\"school-outline\"></ion-icon>\n          <span>دوره: {{ selectedQuestions[0].courseName }}</span>\n        </a>\n      </div>\n\n      <!-- Report Form Card (if Report Mode active) -->\n      <div class=\"ask-form-card\" *ngIf=\"isReportMode\">\n        <div class=\"ask-form-header\">\n          <div class=\"ask-form-icon\" style=\"background: var(--rose-light); color: var(--rose);\">\n            <ion-icon name=\"flag-outline\"></ion-icon>\n          </div>\n          <div>\n            <h3>ثبت گزارش محتوای نامناسب</h3>\n            <p>در صورت مشاهده هرگونه محتوای نامربوط یا مغایر با موازین اخلاقی، دلیل خود را اعلام فرمایید.</p>\n          </div>\n        </div>\n        <form *ngIf=\"login\" [formGroup]=\"replyForm\" (ngSubmit)=\"presentAlertReportConfirm()\">\n          <div class=\"form-group\">\n            <label for=\"report-reason\">دلیل گزارش <span class=\"req\">*</span></label>\n            <textarea\n              id=\"report-reason\"\n              rows=\"4\"\n              class=\"form-control\"\n              placeholder=\"لطفاً دلیل مغایرت یا تخلف این پیام را شرح دهید...\"\n              formControlName=\"comment\"\n              required\n            ></textarea>\n          </div>\n          <div style=\"display: flex; gap: 10px;\">\n            <button type=\"submit\" class=\"button-danger\" [disabled]=\"replyForm.invalid\">\n              <ion-icon name=\"flag\"></ion-icon>\n              <span>ارسال گزارش</span>\n            </button>\n            <button type=\"button\" class=\"button-secondary small\" (click)=\"isReportMode = false; replyForm.reset()\">\n              لغو\n            </button>\n          </div>\n        </form>\n      </div>\n\n      <!-- Discussion Content (when NOT reporting) -->\n      <div *ngIf=\"!isReportMode && selectedQuestions && selectedQuestions.length > 0\">\n\n        <!-- Main Question Card (First item in selectedQuestions) -->\n        <div class=\"main-question-card\">\n          <div class=\"question-author-strip\">\n            <div class=\"author-pill\">\n              <div class=\"author-avatar\" [class.teacher]=\"selectedQuestions[0].isTeacherAnswer\">\n                <ion-icon [name]=\"selectedQuestions[0].isTeacherAnswer ? 'school-outline' : 'person-circle-outline'\"></ion-icon>\n              </div>\n              <div class=\"author-info\">\n                <b>{{ selectedQuestions[0].userName || 'آموزگار گرامی' }}</b>\n                <small>{{ selectedQuestions[0].createDate | persianDate }}</small>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\">\n              <span class=\"status-pill rested\" *ngIf=\"selectedQuestions[0].isRested\">\n                مدرس در مرخصی می‌باشد\n              </span>\n              <button\n                type=\"button\"\n                *ngIf=\"login\"\n                class=\"button-danger\"\n                style=\"padding: 4px 10px; font-size: 11px;\"\n                (click)=\"onReportClicked(selectedQuestions[0].id, 0)\"\n                title=\"گزارش این سوال\"\n              >\n                <ion-icon name=\"flag-outline\"></ion-icon>\n                <span>گزارش</span>\n              </button>\n            </div>\n          </div>\n\n          <h2 class=\"q-title\">{{ selectedQuestions[0].title }}</h2>\n          <div class=\"q-body\">{{ selectedQuestions[0].description }}</div>\n        </div>\n\n        <!-- Replies Stream -->\n        <div class=\"replies-section\" *ngIf=\"selectedQuestions.length > 1\">\n          <div class=\"replies-heading\">\n            <h3>\n              <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n              <span>پاسخ‌ها و راهنمایی‌های ثبت شده</span>\n            </h3>\n            <span class=\"replies-count-pill\">{{ selectedQuestions.length - 1 }} پاسخ</span>\n          </div>\n\n          <div\n            *ngFor=\"let reply of selectedQuestions.slice(1)\"\n            class=\"reply-card\"\n            [class.teacher-reply]=\"reply.isTeacherAnswer\"\n            [class.best-reply]=\"reply.isBest\"\n          >\n            <div class=\"reply-header\">\n              <div class=\"author-pill\">\n                <div class=\"author-avatar\" [class.teacher]=\"reply.isTeacherAnswer\">\n                  <ion-icon [name]=\"reply.isTeacherAnswer ? 'school-outline' : 'person-circle-outline'\"></ion-icon>\n                </div>\n                <div class=\"author-info\">\n                  <b>{{ reply.userName || (reply.isTeacherAnswer ? 'مدرس دوره' : 'همکار گرامی') }}</b>\n                  <small>{{ reply.createDate | persianDate }}</small>\n                </div>\n              </div>\n\n              <div style=\"display: flex; align-items: center; gap: 8px;\">\n                <span class=\"teacher-badge\" *ngIf=\"reply.isTeacherAnswer\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  پاسخ رسمی مدرس\n                </span>\n                <span class=\"best-badge\" *ngIf=\"reply.isBest\">\n                  <ion-icon name=\"star\"></ion-icon>\n                  پاسخ برگزیده\n                </span>\n                <button\n                  type=\"button\"\n                  *ngIf=\"login\"\n                  class=\"button-danger\"\n                  style=\"padding: 3px 8px; font-size: 10px;\"\n                  (click)=\"onReportClicked(reply.id, 0)\"\n                  title=\"گزارش پیام\"\n                >\n                  <ion-icon name=\"flag-outline\"></ion-icon>\n                </button>\n              </div>\n            </div>\n\n            <div class=\"reply-body\">{{ reply.description }}</div>\n          </div>\n        </div>\n\n        <!-- Question Closed Notice -->\n        <div class=\"closed-banner\" *ngIf=\"selectedQuestions[0].isClosed\">\n          <ion-icon name=\"lock-closed-outline\" style=\"font-size: 18px; vertical-align: middle; margin-inline-end: 6px;\"></ion-icon>\n          این پرسش توسط مدرس بسته شده است و امکان ارسال پاسخ جدید وجود ندارد.\n        </div>\n\n        <!-- Submit New Answer Section -->\n        <div class=\"ask-form-card\" *ngIf=\"!selectedQuestions[0].isClosed\" style=\"margin-top: 28px;\">\n          <div class=\"ask-form-header\">\n            <div class=\"ask-form-icon\" style=\"background: var(--emerald-light); color: var(--emerald);\">\n              <ion-icon name=\"return-down-back-outline\"></ion-icon>\n            </div>\n            <div>\n              <h3>ثبت پاسخ یا راهنمایی شما</h3>\n              <p>اگر تجربه، پاسخ یا راهکاری برای حل این چالش دارید، با همکاران در میان بگذارید.</p>\n            </div>\n          </div>\n\n          <!-- If Logged In -->\n          <section *ngIf=\"login\">\n            <div *ngIf=\"CheckBuy()\">\n              <form [formGroup]=\"questionAnswerForm\" (ngSubmit)=\"presentAlertConfirm2(0)\">\n                <div class=\"form-group\">\n                  <label for=\"answer-text\">\n                    متن پاسخ\n                    <span class=\"req\">*</span>\n                  </label>\n                  <textarea\n                    id=\"answer-text\"\n                    rows=\"4\"\n                    class=\"form-control\"\n                    formControlName=\"answer\"\n                    placeholder=\"پاسخ، توضیحات یا راهنمایی آموزشی خود را به طور کامل بنویسید...\"\n                    required\n                  ></textarea>\n                </div>\n\n                <div class=\"guideline-badge\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>پاسخ شما پس از تایید مدیریت و مدرس در تالار نمایش داده خواهد شد.</span>\n                </div>\n\n                <button\n                  type=\"submit\"\n                  class=\"button-primary\"\n                  [disabled]=\"questionAnswerForm.invalid\"\n                >\n                  <ion-icon name=\"paper-plane-outline\"></ion-icon>\n                  <span>ثبت پاسخ من</span>\n                </button>\n              </form>\n            </div>\n\n            <!-- If Not Enrolled in Course -->\n            <div *ngIf=\"!CheckBuy()\" class=\"notice-cta-card\">\n              <div class=\"notice-cta-icon\">\n                <ion-icon name=\"school-outline\"></ion-icon>\n              </div>\n              <h4>برای ارسال پاسخ باید عضو این دوره باشید</h4>\n              <p>این گفتگو ویژه دانش‌پذیران این دوره آموزشی است. برای مشارکت و ثبت نظر، لطفاً دوره را تهیه فرمایید.</p>\n              <a class=\"button-primary small\" [routerLink]=\"url('/c/' + selectedCourseId)\">\n                مشاهده و دریافت دوره {{ selectedQuestions[0].courseName }}\n              </a>\n            </div>\n          </section>\n\n          <!-- If Not Logged In -->\n          <section *ngIf=\"!login\" class=\"notice-cta-card\">\n            <div class=\"notice-cta-icon\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </div>\n            <h4>برای درج پاسخ ابتدا باید در سایت وارد شوید</h4>\n            <p>جهت مشارکت در گفتگوی آموزشی معلمان، کافیست یک حساب کاربری ایجاد فرمایید.</p>\n            <a class=\"button-primary small\" [routerLink]=\"url('/Account')\">\n              ورود به حساب کاربری / عضویت\n            </a>\n          </section>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!-- Educational Footer Matching Landing Page -->\n  <footer class=\"learning-footer\">\n    <div class=\"qa-container footer-top\">\n      <div class=\"footer-brand-col\">\n        <a class=\"brand avalamooz-brand\" [routerLink]=\"url('/Home')\">\n          <img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" />\n          <div>\n            <b>{{ 'learn.brand' | translate }}</b>\n            <small>{{ 'learn.tagline' | translate }}</small>\n          </div>\n        </a>\n        <p class=\"footer-desc\">{{ 'learn.footer.description' | translate }}</p>\n        <div class=\"footer-domain-badge\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <span>پایگاه رسمی: <b>avalamuz.ir</b></span>\n        </div>\n      </div>\n\n      <div class=\"footer-links-col\">\n        <h4>{{ 'learn.footer.links' | translate }}</h4>\n        <nav [attr.aria-label]=\"'learn.footer.links' | translate\">\n          <a [routerLink]=\"url('/Home')\">{{ 'learn.nav.courses' | translate }}</a>\n          <a [routerLink]=\"url('/Product')\">{{ 'learn.nav.store' | translate }}</a>\n          <a [routerLink]=\"url('/Questions')\">پرسش و پاسخ دوره‌ها</a>\n          <a [routerLink]=\"url('/ProductQuestions')\">سوالات محصولات</a>\n          <a [routerLink]=\"url('/About')\">{{ 'learn.footer.about' | translate }}</a>\n          <a [routerLink]=\"url('/PrivacyPolicy')\">{{ 'learn.footer.privacy' | translate }}</a>\n        </nav>\n      </div>\n\n      <div class=\"footer-trust-col\">\n        <h4>اعتماد و پشتیبانی همکاران</h4>\n        <div class=\"trust-cards-row\">\n          <div class=\"trust-pill\">\n            <ion-icon name=\"ribbon-outline\"></ion-icon>\n            <span>تایید سرگروه‌های آموزشی کشوری</span>\n          </div>\n          <div class=\"trust-pill\">\n            <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n            <span>ضمانت کیفیت علمی و گرافیکی محتوا</span>\n          </div>\n          <div class=\"trust-pill\">\n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            <span>پشتیبانی آموزگاران در ایتا و تلگرام</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"qa-container footer-bottom\">\n      <span>{{ 'learn.footer.copyright' | translate }}</span>\n      <span>{{ 'learn.footer.made' | translate }} <span class=\"footer-heart\" aria-hidden=\"true\">♥</span></span>\n    </div>\n  </footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pipe_price_module_ts-src_app_view_pages_home_questions_questions_module_ts.js.map