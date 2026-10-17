"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_course_course-by-id_course-by-id_module_ts"],{

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

/***/ 27433:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/course/course-by-id/course-by-id-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseByIdRoutingModule": () => (/* binding */ CourseByIdRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _course_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-by-id.component */ 53472);




const routes = [{ path: '', component: _course_by_id_component__WEBPACK_IMPORTED_MODULE_0__.CourseByIdComponent }];
let CourseByIdRoutingModule = class CourseByIdRoutingModule {
};
CourseByIdRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CourseByIdRoutingModule);



/***/ }),

/***/ 53472:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/course/course-by-id/course-by-id.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseByIdComponent": () => (/* binding */ CourseByIdComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _course_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-by-id.component.html?ngResource */ 913);
/* harmony import */ var _course_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-by-id.component.scss?ngResource */ 19985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/i18n/site-language.service */ 37159);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _components_modal_photo_gallery_modal_page_photo_gallery_modal_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/modal/photo-gallery-modal-page/photo-gallery-modal-page.component */ 72847);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../data/model/person/TeacherModel */ 55550);
/* harmony import */ var _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/model/course/CourseVideoModel */ 46794);
/* harmony import */ var _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../data/model/common/BaseModel */ 55937);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _components_modal_course_rate_modal_course_rate_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/modal/course-rate-modal/course-rate-modal.component */ 42393);
/* harmony import */ var _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/common/CryptographyHelper */ 24784);




/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/no-unused-expressions */















 // import { ReCaptchaV3Service } from 'ngx-captcha';






 // install Swiper modules

swiper__WEBPACK_IMPORTED_MODULE_16__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_16__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_16__.Navigation]);
let CourseByIdComponent = class CourseByIdComponent {
  // [
  //   {
  //     url: 'https://ups.music-fa.com/tagdl/8e401/Majid%20Razavi%20-%20Bemiram%20(128).mp3',
  //     title: 'علی دایی',
  //     cover: 'http://localhost:4300/assets/images/account.png'
  //   },
  //   {
  //     url: 'https://ups.music-fa.com/tagdl/8e401/Meysam%20Akbari%20-%20Cheshme%20Jadoo%20(320).mp3',
  //     title: 'علی کریمی',
  //     cover: 'http://localhost:4300/assets/images/account.png'
  //   },
  //   {
  //     url: 'https://ups.music-fa.com/tagdl/6e41/2Yar%20-%20Yeho%20Bezane%20Shab%20She%20(320).mp3',
  //     title: 'امیر محمدی',
  //     cover: 'http://localhost:4300/assets/images/account.png'
  //   }
  // ];
  constructor(activatedRoute, courseService, fb, orderService, loadingController, toastController, router, alertController, sanitizer, title, meta, domSanitizer, // private reCaptchaV3Service: ReCaptchaV3Service,
  modalController, language, menuCtrl) {
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.fb = fb;
    this.orderService = orderService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.router = router;
    this.alertController = alertController;
    this.sanitizer = sanitizer;
    this.title = title;
    this.meta = meta;
    this.domSanitizer = domSanitizer;
    this.modalController = modalController;
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.appendNumber = 4;
    this.prependNumber = 1;
    this.commentReqCount = 0;
    this.isMoreCommentsDisable = false;
    this.comments = [];
    this.sameCourse = [];
    this.tags = [];
    this.userVoices = [];
    this.links = [];
    this.queryText = '';
    this.safeUrl = '';
    this.courseVideosSafeUrl = [];
    this.catIds = '';
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
    this.courseCategores = [];
    this.courseCategores2 = [];
    this.isLikeLoadingShow = false;
    this.isLoading = true;
    this.isLoadingComments = false;
    this.isUserLikedLoading = true;
    this.whatsappShare = '';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.videoDetail = [];
    this.checkBuy = false;
    this.checkBuy2 = false;
    this.isBuyLoading = true;
    this.isFirstCommentShow = false;
    this.isCommentsEmpty = false;
    this.commentShow = true;
    this.isReplyMode = false;
    this.isReportMode = false;
    this.isReportCourseMode = false;
    this.replyId = 0;
    this.windowWidth = 1000;
    this.loggedIn = false;
    this.courseCount = 0;
    this.productCount = 0;
    this.searchOpen = false;
    this.readMore = 'readMore';
    this.phoneReadMore = 'readMore2';
    this.musicColor = '#09664e';
    this.musicBgColor = '#efefef';
    this.isLimitShow = false;
    this.isLimitShow2 = false;
    this.limitTitle = '';
    this.limitDateToString = '';
    this.audioList = [];

    if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.darkTheme) {
      this.musicColor = '#09964e';
      this.musicBgColor = '#232323';
    } else {
      this.musicColor = '#09664e';
      this.musicBgColor = '#efefef';
    }

    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  get cartCount() {
    return this.courseCount + this.productCount;
  }

  get isUserLoggedIn() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn();
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

  prepend() {
    this.sliderRef.swiperRef.prependSlide('<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>');
  }

  prepend2() {
    this.sliderRef.swiperRef.prependSlide(['<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>', '<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>']);
  }

  append() {
    this.sliderRef.swiperRef.appendSlide('<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>');
  }

  append2() {
    this.sliderRef.swiperRef.appendSlide(['<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>', '<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>']);
  }

  onReadMoreOrLess() {
    this.readMore == 'readMore' ? this.readMore = 'readLess' : this.readMore = 'readMore';
  }

  onReadMoreOrLess2() {
    this.phoneReadMore == 'readMore2' ? this.phoneReadMore = 'readLess2' : this.phoneReadMore = 'readMore2';
  }

  loadData(event) {
    setTimeout(() => {
      if (this.filterComments.pageId >= this.filterComments.endPage) {
        event.target.disabled = true;
        return;
      }

      this.isLoadingComments = true;
      this.filterComments.comments = [];
      this.filterComments.pageId++;

      if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
        this.courseService.GetAuthCourseCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              event.target.disabled = true;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.courseService.GetCourseCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              event.target.disabled = true;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }

      event.target.complete(); // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1500);
  }

  onBought() {
    this.scrollToCourseContent();
  }

  onBought2() {
    this.scrollToCourseContent();
  }

  scrollToCourseContent() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const target = document.getElementById('course-content');

      if (!target || !_this2.content) {
        return;
      }

      const scrollElement = yield _this2.content.getScrollElement();
      const targetTop = target.getBoundingClientRect().top - scrollElement.getBoundingClientRect().top + scrollElement.scrollTop - 20;

      _this2.content.scrollToPoint(0, targetTop, 700);
    })();
  }

  loadData2() {
    setTimeout(() => {
      if (this.filterComments.pageId >= this.filterComments.endPage) {
        this.isMoreCommentsDisable = true;
        return;
      }

      this.isLoadingComments = true;
      this.filterComments.comments = [];
      this.filterComments.pageId++;

      if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
        this.courseService.GetAuthCourseCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              this.isMoreCommentsDisable = true;
              return;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.courseService.GetCourseCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              this.isMoreCommentsDisable = true;
              return;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }
    }, 1500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    this.commentShow = !this.commentShow;
  }

  updateTitle(title = 'اول آموز - دوره‌های تخصصی روش تدریس ابتدایی') {
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

  updateOgUrl(url = 'http://localhost:4300/') {
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
      content: this.course.imageNamePNG
    });
    this.meta.updateTag({
      property: 'og:image',
      content: this.course.imageNamePNG
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.course.imageNamePNG
    });
    this.meta.updateTag({
      name: 'og:image:alt',
      content: this.course.name
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: this.course.name
    });
  }

  updateDescription(desc = 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است') {
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

  checkURL() {
    if (this.safeUrl != '') {
      return this.safeUrl;
    } else {
      const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.course.videoUrl + '/vt/frame';
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      return this.safeUrl;
    }
  }

  checkURL2(id) {
    const found = this.courseVideosSafeUrl.find(e => e.id == +id);

    if (found == undefined) {
      const item = this.course.courseVideos.find(e => e.id == +id);

      if (item == null) {
        return '';
      }

      const video = item.videoUrl.split('/');
      const videoLength = video.length;
      const url = 'https://www.aparat.com/video/video/embed/videohash/' + video[videoLength - 1] + '/vt/frame';
      const res = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.courseVideosSafeUrl.push(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.SafeResourceUrlViewModel(+id, res));
      return res;
    } else {
      return found.url;
    }
  }

  checkURL3(id) {
    const item = this.course.courseVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoNamePreview.split('/');
    const videoLength = video.length;
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + video[videoLength - 1] + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onMakeArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  onGetVideoFormat(id) {
    // const item = this.course.courseVideos.find(e => e.id == +id);
    // if (item == null) {
    //   return '';
    // }
    // const video = item.videoUrlOnline.split('.');
    // console.log(video);
    // const videoLength = video.length;
    // console.log(videoLength);
    // const format = video[videoLength - 1];
    // console.log(format);
    return 'video/mp4';
  }

  onGetVideoFormat2(id) {
    // const item = this.course.courseVideos.find(e => e.id == +id);
    // if (item == null) {
    //   return '';
    // }
    // const video = item.videoNamePreview.split('.');
    // const videoLength = video.length;
    // const format = video[videoLength - 1];
    return 'video/mp4';
  }

  onCheckNew() {
    const date1 = new Date(this.course.createDate);
    const date2 = new Date();
    let diff = date2.getTime() - date1.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    diff -= seconds * 1000;

    if (days < 30) {
      return true;
    } else {
      return false;
    }
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.course.videoUrl;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl2(id) {
    const item = this.course.courseVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoUrl.split('/');
    const videoLength = video.length;
    const url = 'https://www.aparat.com/v/' + video[videoLength - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  onGetCoursePoint() {
    if (this.course.offPrice != 0) {
      return (this.course.offPrice / 1000).toString();
    } else {
      return (this.course.price / 1000).toString();
    }
  }

  totalSize() {
    let size = '0';
    let kb = 0;
    let mb = 0;
    let gb = 0;
    let tb = 0;

    if (this.course.size !== '') {
      const main = this.course.size.split(' ', 2);

      if (main.length !== 2 && main.length !== 1) {
        return '';
      }

      if (main.length === 1) {
        mb += +main[0];
      } else {
        if (main[1].toLocaleLowerCase() === 'kb') {
          kb += +main[0];
        } else if (main[1].toLocaleLowerCase() === 'mb') {
          mb += +main[0];
        } else if (main[1].toLocaleLowerCase() === 'gb') {
          gb += +main[0];
        } else if (main[1].toLocaleLowerCase() === 'tb') {
          tb += +main[0];
        }
      }
    }

    this.course.courseVideos.forEach(vid => {
      if (vid.size != null && vid.size != '') {
        const str = vid.size.split(' ', 2);

        if (str.length !== 2 && str.length !== 1) {
          return '';
        }

        if (str.length === 1) {
          mb += +str[0];
        } else {
          if (str[1].toLocaleLowerCase() === 'kb') {
            kb += +str[0];
          } else if (str[1].toLocaleLowerCase() === 'mb') {
            mb += +str[0];
          } else if (str[1].toLocaleLowerCase() === 'gb') {
            gb += +str[0];
          } else if (str[1].toLocaleLowerCase() === 'tb') {
            tb += +str[0];
          }
        }
      }
    });

    if (kb >= 1024) {
      mb += Math.floor(kb / 1024);
      kb = kb % 1024;
    }

    if (mb >= 1024) {
      gb += Math.floor(mb / 1024);
      mb = mb % 1024;
    }

    if (gb >= 1024) {
      tb += Math.floor(gb / 1024);
      gb = gb % 1024;
    }

    if (tb != 0) {
      if (gb != 0) {
        tb += +(gb / 1024).toFixed(3);
        size = tb.toFixed(3).toString() + ' TB'; // size = tb.toString() + '.' + gb.toString() + ' TB';
      } else {
        size = tb.toFixed(3).toString() + ' TB';
      }
    } else if (gb != 0) {
      if (mb != 0) {
        gb += +(mb / 1024).toFixed(3);
        size = gb.toFixed(3).toString() + ' GB';
      } else {
        size = gb.toFixed(3).toString() + ' GB';
      }
    } else if (mb != 0) {
      if (kb != 0) {
        mb += +(kb / 1024).toFixed(3);
        size = mb.toFixed(3).toString() + ' MB';
      } else {
        size = mb.toFixed(3).toString() + ' MB';
      }
    } else if (kb != 0) {
      size = kb.toFixed(3).toString() + ' KB';
    } else {
      size = '0 KB';
    }

    return size;
  }

  totalVideoTime() {
    let time = '00:00';
    let h = 0;
    let m = 0;
    let s = 0;
    const main = this.course.videoTime.split(':', 2);
    m += +main[0];
    s += +main[1];
    this.course.courseVideos.forEach(vid => {
      if (vid.videoTime != null && vid.videoTime != '00:00') {
        const str = vid.videoTime.split(':', 2);
        m += +str[0];
        s += +str[1];
      }
    });

    if (s >= 60) {
      m += Math.floor(s / 60);
      s = s % 60;
    }

    if (m >= 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }

    time = (h < 10 ? '0' + h.toString() : h.toString()) + ':' + (m < 10 ? '0' + m.toString() : m.toString()) + ':' + (s < 10 ? '0' + s.toString() : s.toString());
    return time;
  }

  onCategoryClick(catName) {
    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getCourseCategory().subscribe(res => {
      res.forEach(cat => {
        if (cat.title === catName) {
          this.router.navigate(['Home', 'Search'], {
            queryParams: {
              categoryIds: [cat.courseCategoryId]
            }
          });
          return;
        }
      });
    });
  }

  getData(id) {
    this.loggedIn = true;
    this.comments = [];
    this.audioList = [];
    this.userVoices = [];
    this.filterComments = null;
    this.isFirstCommentShow = false;
    this.isCommentsEmpty = false;
    this.commentShow = true;
    this.isReplyMode = false;
    this.isReportMode = false;
    this.isMoreCommentsDisable = false;
    this.isReportCourseMode = false;
    this.replyId = 0;
    this.commentReqCount = 0;
    this.courseService.GetSameCoursesById(id).subscribe(res => {
      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.sameCourse = res.data;
      } else {
        this.sameCourse = [];
      }
    }, err => {
      this.sameCourse = [];
    });

    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsTeacher() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.courseService.GetCourseDetailById2(id).subscribe(ress => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.course = ress.data;
          this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/c/' + this.course.id);
          this.isLoading = false;
          this.updateTitle('اول آموز - ' + this.course.name);
          this.updateOgUrl('http://localhost:4300/c/' + this.course.id);
          this.updateDescription('اول آموز - ' + this.course.shortDescription);
          this.courseService.GetCourseDetailUserLikedById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              switch (res.data) {
                case -1:
                  this.course.userLiked = null;
                  break;

                case 0:
                  this.course.userLiked = false;
                  break;

                case 1:
                  this.course.userLiked = true;
                  break;

                default:
                  this.course.userLiked = null;
                  break;
              }

              this.isUserLikedLoading = false;
            } else {
              this.course.userLiked = null;
              this.isUserLikedLoading = false;
            }
          }, err => {
            this.course.userLiked = null;
            this.isUserLikedLoading = false;
          });
          this.courseService.GetAuthCourseDetailVideosById3(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              const video = [];
              this.videoDetail = [];
              res.data.forEach(v => {
                if (!v.isAparat && v.videoUrl[23] == 'd' && v.videoUrl[24] == 'l') {
                  v.videoUrl = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrl);
                  v.videoUrlOnline = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrlOnline);
                }

                video.push( // tslint:disable-next-line: max-line-length
                new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.CourseVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline, v.hasPredictionPreview, v.videoNamePreview, v.size, v.order));
                this.videoDetail.push({
                  id: v.id,
                  hide: true
                });
              });
              this.course.courseVideos = video;
            } else {
              this.course.courseVideos = [];
            }
          }, err => {
            this.course.courseVideos = [];
          });
          this.courseService.GetCourseTags(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.tags = res.data;
            } else {}
          }, err => {});
          this.courseService.GetCourseUserVoice(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              res.data.forEach(e => {
                this.audioList.push({
                  url: e.voiceAddress,
                  title: e.userName,
                  cover: e.userPhoto
                });
              });
              this.userVoices = res.data;
            } else {
              this.userVoices = [];
            }
          }, err => {
            this.userVoices = [];
          });
          this.courseService.GetCourseDetailViewedShowById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.course.viewCount = res.data;
            } else {
              this.course.viewCount = 1;
            }
          }, err => {
            this.course.viewCount = 1;
          });
          this.courseService.GetCourseDetailImagesById2(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              const img = [];
              res.data.forEach(v => {
                img.push(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.CourseImageModel(v.id, v.isActive, v.title, v.url));
              });
              this.course.courseImages = img;
            } else {
              this.course.courseImages = [];
            }
          }, err => {
            this.course.courseImages = [];
          });
          this.courseService.GetCourseDetailTeacherById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.course.teacherUser = new _data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_13__.TeacherModel(res.data.id, res.data.name, res.data.family, res.data.resume, res.data.userAvatarAddress, res.data.isRested);
            } else {
              this.course.teacherUser = null;
            }
          }, err => {
            this.course.teacherUser = null;
          });
          this.courseService.GetCourseDetailCategoriesById(id).subscribe(resss => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === resss.status) {
              this.course.categoryIds = resss.data;
              _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getCourseCategory().subscribe(res => {
                this.courseCategores = [];
                this.courseCategores2 = [];
                this.catIds = '';
                let count = 0;
                res.forEach(cat => {
                  this.course.categoryIds.forEach(ccat => {
                    if (+ccat === +cat.courseCategoryId) {
                      this.courseCategores.push(cat.title);
                      this.courseCategores2.push({
                        id: +cat.courseCategoryId,
                        title: cat.title
                      });

                      if (count == 0) {
                        this.catIds += cat.courseCategoryId;
                      } else {
                        this.catIds += ',' + cat.courseCategoryId;
                      }

                      count++;
                    }
                  });
                });
              });
            } else {
              this.course.categoryIds = [];
            }
          }, err => {
            this.course.categoryIds = [];
          });
          this.checkBuy = this.CheckBuy();
          this.CheckBuy2();

          if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
            this.courseService.AddOrUpdateUserViewedCourse(ress.data.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.course.viewCount++;
              }
            });
          }

          const commentFilterModel = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CourseCommentFilterModel(id, 1, 10, '', 0);
          this.filterComments = commentFilterModel;
          this.filterComments.comments = [];

          if (!this.isFirstCommentShow) {
            if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
              this.comments = [];
              this.courseService.GetAuthCourseCommentsByFilter(commentFilterModel).subscribe(res => {
                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  this.filterComments = res.data;
                  res.data.comments.forEach(comment => {
                    this.comments.push(comment);
                  });
                  this.isFirstCommentShow = true;

                  if (this.comments.length <= 0) {
                    this.isCommentsEmpty = true;
                  }
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                  this.isFirstCommentShow = true;
                  this.isCommentsEmpty = true;
                } else {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.comments = [];
              this.courseService.GetCourseCommentsByFilter(commentFilterModel).subscribe(res => {
                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  this.filterComments = res.data;
                  res.data.comments.forEach(comment => {
                    this.comments.push(comment);
                  });
                  this.isFirstCommentShow = true;

                  if (this.comments.length <= 0) {
                    this.isCommentsEmpty = true;
                  }
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                  this.isFirstCommentShow = true;
                  this.isCommentsEmpty = true;
                } else {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }
          }
        } else {
          this.isLoading = false;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        this.isLoading = false;
      });
    } else {
      this.courseService.GetCourseDetailById(id).subscribe(ress => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

        if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.course = ress.data;
          this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/c/' + this.course.id);
          this.isLoading = false;
          this.updateTitle('اول آموز - ' + this.course.name);
          this.updateOgUrl('http://localhost:4300/c/' + this.course.id);
          this.updateDescription('اول آموز - ' + this.course.shortDescription);

          if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
            this.courseService.GetCourseDetailUserLikedById(id).subscribe(res => {
              if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                switch (res.data) {
                  case -1:
                    this.course.userLiked = null;
                    break;

                  case 0:
                    this.course.userLiked = false;
                    break;

                  case 1:
                    this.course.userLiked = true;
                    break;

                  default:
                    this.course.userLiked = null;
                    break;
                }

                this.isUserLikedLoading = false;
              } else {
                this.course.userLiked = null;
                this.isUserLikedLoading = false;
              }
            }, err => {
              this.course.userLiked = null;
              this.isUserLikedLoading = false;
            });
            this.courseService.GetAuthCourseDetailVideosById2(id).subscribe(res => {
              if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                const video = [];
                this.videoDetail = [];
                console.log(2);
                res.data.forEach(v => {
                  if (!v.isAparat && v.videoUrl[23] == 'd' && v.videoUrl[24] == 'l') {
                    v.videoUrl = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrl);
                    v.videoUrlOnline = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrlOnline);
                  }

                  video.push( // tslint:disable-next-line: max-line-length
                  new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.CourseVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline, v.hasPredictionPreview, v.videoNamePreview, v.size, v.order));
                  this.videoDetail.push({
                    id: v.id,
                    hide: true
                  });
                });
                this.course.courseVideos = video;
              } else {
                this.course.courseVideos = [];
              }
            }, err => {
              this.course.courseVideos = [];
            });
          } else {
            this.course.userLiked = null;
            this.isUserLikedLoading = false;
            this.courseService.GetCourseDetailVideosById2(id).subscribe(res => {
              if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                const video = [];
                this.videoDetail = [];
                console.log(3);
                res.data.forEach(v => {
                  if (!v.isAparat && v.videoUrl[23] == 'd' && v.videoUrl[24] == 'l') {
                    v.videoUrl = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrl);
                    v.videoUrlOnline = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrlOnline);
                  }

                  video.push( // tslint:disable-next-line: max-line-length
                  new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.CourseVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline, v.hasPredictionPreview, v.videoNamePreview, v.size, v.order));
                  this.videoDetail.push({
                    id: v.id,
                    hide: true
                  });
                });
                this.course.courseVideos = video;
              } else {
                this.course.courseVideos = [];
              }
            }, err => {
              this.course.courseVideos = [];
            });
          }

          this.courseService.GetCourseTags(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.tags = res.data;
            } else {}
          }, err => {});
          this.courseService.GetCourseUserVoice(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              res.data.forEach(e => {
                this.audioList.push({
                  url: _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.sslRemover(e.voiceAddress),
                  title: e.userName,
                  cover: e.userPhoto
                });
              });
              this.userVoices = res.data;
            } else {
              this.userVoices = [];
            }
          }, err => {
            this.userVoices = [];
          });
          this.courseService.GetCourseDetailViewedShowById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.course.viewCount = res.data;
            } else {
              this.course.viewCount = 1;
            }
          }, err => {
            this.course.viewCount = 1;
          });
          this.courseService.GetCourseDetailImagesById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              const img = [];
              res.data.forEach(v => {
                img.push(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_14__.CourseImageModel(v.id, v.isActive, v.title, v.url));
              });
              this.course.courseImages = img;
            } else {
              this.course.courseImages = [];
            }
          }, err => {
            this.course.courseImages = [];
          });
          this.courseService.GetCourseDetailTeacherById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              this.course.teacherUser = new _data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_13__.TeacherModel(res.data.id, res.data.name, res.data.family, res.data.resume, res.data.userAvatarAddress, res.data.isRested);
            } else {
              this.course.teacherUser = null;
            }
          }, err => {
            this.course.teacherUser = null;
          });
          this.courseService.GetCourseDetailCategoriesById(id).subscribe(resss => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === resss.status) {
              this.course.categoryIds = resss.data;
              _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getCourseCategory().subscribe(res => {
                this.courseCategores = [];
                this.courseCategores2 = [];
                this.catIds = '';
                let count = 0;
                res.forEach(cat => {
                  this.course.categoryIds.forEach(ccat => {
                    if (+ccat === +cat.courseCategoryId) {
                      this.courseCategores.push(cat.title);
                      this.courseCategores2.push({
                        id: +cat.courseCategoryId,
                        title: cat.title
                      });

                      if (count == 0) {
                        this.catIds += cat.courseCategoryId;
                      } else {
                        this.catIds += ',' + cat.courseCategoryId;
                      }

                      count++;
                    }
                  });
                });
              });
            } else {
              this.course.categoryIds = [];
            }
          }, err => {
            this.course.categoryIds = [];
          });
          this.checkBuy = this.CheckBuy();
          this.CheckBuy2();

          if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
            this.courseService.AddOrUpdateUserViewedCourse(ress.data.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
            res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.course.viewCount++;
              }
            });
          }

          const commentFilterModel = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CourseCommentFilterModel(id, 1, 10, '', 0);
          this.filterComments = commentFilterModel;
          this.filterComments.comments = [];

          if (!this.isFirstCommentShow) {
            if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
              this.comments = [];
              this.courseService.GetAuthCourseCommentsByFilter(commentFilterModel).subscribe(res => {
                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  this.filterComments = res.data;
                  res.data.comments.forEach(comment => {
                    this.comments.push(comment);
                  });
                  this.isFirstCommentShow = true;

                  if (this.comments.length <= 0) {
                    this.isCommentsEmpty = true;
                  }
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                  this.isFirstCommentShow = true;
                  this.isCommentsEmpty = true;
                } else {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.comments = [];
              this.courseService.GetCourseCommentsByFilter(commentFilterModel).subscribe(res => {
                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  this.filterComments = res.data;
                  res.data.comments.forEach(comment => {
                    this.comments.push(comment);
                  });
                  this.isFirstCommentShow = true;

                  if (this.comments.length <= 0) {
                    this.isCommentsEmpty = true;
                  }
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                  this.isFirstCommentShow = true;
                  this.isCommentsEmpty = true;
                } else {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }
          }
        } else {
          this.isLoading = false;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        this.isLoading = false;
      });
    }
  }

  onDetailClick(id) {
    const item = this.videoDetail.find(e => e.id == +id);

    if (item != null) {
      item.hide = !item.hide;
    }
  }

  onPlayVideo(id) {// let video = this.course.courseVideos.find(e => e.id == +id);
    // if (video != null) {
    //   this.videoPlayer.play(video.videoUrlOnline).then(() => {
    //     console.log('video completed');
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // }
  }

  ionViewWillEnter() {}

  onReportCourseClicked() {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = this.course.id;
    this.isReportCourseMode = true;
  }

  onReportClicked(commentId) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReportMode = true;
  }

  onReplyClicked(commentId) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReplyMode = true;
  }

  onPhotoGallery() {
    this.presentModal();
  }

  presentModal() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _components_modal_photo_gallery_modal_page_photo_gallery_modal_page_component__WEBPACK_IMPORTED_MODULE_11__.PhotoGalleryModalPageComponent,
        cssClass: 'my-custom-class',
        swipeToClose: true,
        componentProps: {
          gallery: _this3.course.courseImages
        }
      });
      return yield modal.present();
    })();
  }

  presentAlertConfirm() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'لطفا جهت دسترسی به لینک های دانلود ثبت خرید کنید',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ثبت خرید',
          handler: () => {
            _this4.onBuy();
          }
        }]
      });
      yield alert.present();
    })();
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
      location.reload();
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.SiteKey;
    _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.getCartCoursesCount().subscribe(count => this.courseCount = count);
    _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.getCartProductsCount().subscribe(count => this.productCount = count);
    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getCurrentMode().subscribe(res => {
      this.musicColor = res ? '#09964e' : '#09664e';
      this.musicBgColor = res ? '#232323' : '#efefef';
    });
    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getSettingsDone().subscribe(res => {
      this.isLimitShow = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.isOff;
      this.limitDate = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.offDate;
      this.limitTitle = _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.limitTitle;

      if (this.isLimitShow) {
        this.timer = setInterval(e => {
          let date1 = new Date(this.limitDate);
          let date2 = new Date();
          let diff = date2.getTime() - date1.getTime();

          if (diff >= 0) {
            this.isLimitShow2 = true;
            clearInterval(this.timer);
          }

          let days = Math.floor(diff / (1000 * 60 * 60 * 24));
          diff -= days * (1000 * 60 * 60 * 24);
          let hours = Math.floor(diff / (1000 * 60 * 60));
          diff -= hours * (1000 * 60 * 60);
          let mins = Math.floor(diff / (1000 * 60));
          diff -= mins * (1000 * 60);
          let seconds = Math.floor(diff / 1000);
          diff -= seconds * 1000;

          if (hours !== 0) {
            hours = 23 - hours;
          }

          if (mins !== 0) {
            mins = 59 - mins;
          }

          if (seconds !== 0) {
            seconds = 60 - seconds;
          }

          if (days < 0) {
            days = -days;
          }

          if (days > 0) {
            days = 1 - days;
          }

          if (days < 0) {
            days = -days;
          }

          let daysShow = '';
          let hoursShow = '';
          let minsShow = '';
          let secondsShow = '';

          if (days === 0) {
            daysShow = '';
          } else {
            daysShow = days.toString() + ':';
          }

          if (hours < 10) {
            hoursShow = '0' + hours.toString();
          } else {
            hoursShow = hours.toString();
          }

          if (mins < 10) {
            minsShow = '0' + mins.toString();
          } else {
            minsShow = mins.toString();
          }

          if (seconds < 10) {
            secondsShow = '0' + seconds.toString();
          } else {
            secondsShow = seconds.toString();
          }

          this.limitDateToString = daysShow.toString() + hoursShow.toString() + ':' + minsShow.toString() + ':' + secondsShow.toString();
        }, 1000);
      }
    });
    this.commentForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]],
      private: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
    });
    this.replyForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]]
    });
    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getHelpfulLinks().subscribe(res => {
      if (res != null) {
        if (res.length > 0) {
          res.forEach(link => {
            this.links.push(link);
          });
        }
      }
    });
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
    this.activatedRoute.params.subscribe(params => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController); // tslint:disable-next-line: radix

      const id = parseInt(params.id, 10);
      this.isUserLikedLoading = true;
      this.isBuyLoading = true;
      this.getData(+id);
    });
  }

  presentAlertConfirm3() {
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
            _this5.onSendComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSendComment() {
    if (this.commentForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.commentForm.value.comment, new Date(), +this.course.id, null, '', 0, false, this.commentForm.value.private, false, 'failed', false);
        this.courseService.onSendComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
            this.presentSetCommentAlert2();
            this.commentForm.setValue({
              comment: '',
              private: false
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.commentForm.value.comment, new Date(), +this.course.id, null, '', 0, false, this.commentForm.value.private, false, 'failed', false);
        this.courseService.onSendComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
            this.presentSetCommentAlert2();
            this.commentForm.setValue({
              comment: '',
              private: false
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });

    }
  }

  presentAlertConfirm2() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.onReplyComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertReportConfirm() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
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
            _this7.onReportComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertReportCourseConfirm() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
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
            _this8.onReportCourse();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReplyComment() {
    if (this.replyForm.valid) {
      const model = this.comments.find(e => e.id == +this.replyId);

      if (model == null) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.replyForm.value.comment, new Date(), model.courseId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.courseService.ReplyCommentById(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert();
            this.replyForm.setValue({
              comment: ''
            });
            this.isReplyMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReplyMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.replyForm.value.comment, new Date(), model.courseId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.courseService.ReplyCommentById(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert();
            this.replyForm.setValue({
              comment: ''
            });
            this.isReplyMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReplyMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });

    }
  }

  onReportComment() {
    if (this.replyForm.valid) {
      const model = this.comments.find(e => e.id == +this.replyId);

      if (model == null) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.unSuccessToast(this.toastController);
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.replyForm.value.comment, new Date(), model.courseId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.courseService.ReportComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_12__.CommentModel(0, this.replyForm.value.comment, new Date(), model.courseId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.courseService.ReportComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });

    }
  }

  onReportCourse() {
    if (this.replyForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.IsAndroid) {
        const report = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_15__.ReportViewModel(0, this.course.id, 0, 0, this.replyForm.value.comment, false, false, 'failed');
        this.courseService.ReportCourse(report).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportCourseMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportCourseMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportCourseMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportCourseMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const report = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_15__.ReportViewModel(0, this.course.id, 0, 0, this.replyForm.value.comment, false, false, 'failed');
        this.courseService.ReportCourse(report).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportCourseMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportCourseMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportCourseMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportCourseMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });

    }
  }

  presentSetCommentAlert() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
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

  presentSetCommentAlert2() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'نظر شما پس از تایید به نمایش در می آید',
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

  CheckBuy2() {
    _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyCourseIds2.subscribe(res => {
      if (res) {
        this.checkBuy2 = res.find(n => n == this.course.id) ? false : true;
      } else {
        this.checkBuy2 = true;
      }
    }, err => {
      this.checkBuy2 = true;
    });
    this.isBuyLoading = false; // return GResponse.MyCourseIds.find(n => n == this.course.id) ? false : true;
  }

  CheckBuy() {
    if (this.course.price == 0) {
      return false;
    } else {
      return true;
    }
  }

  onBuy() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'returnUrl') {
        localStorage.removeItem('returnUrl');
      }
    }

    localStorage.setItem('returnUrl', '/c/' + this.course.id); // if (!GAccount.IsLoggedIn()) {
    //   return;
    // }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.orderService.GetUserCart().subscribe(res => {
      localStorage.removeItem('returnUrl');

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (res.data.courses.find(n => n.id == this.course.id) ? true : false) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.CartUrl);
          return;
        } else {
          this.orderService.AddCourseById(this.course.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res2 => {
            if (res2.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartCoursesCount); // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
              this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.CartUrl);
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'دوره خریداری شده است');
              location.reload();
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
          });
        }
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        this.orderService.AddCourseById(this.course.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
        res2 => {
          if (res2.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartCoursesCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartCoursesCount); // GResponse.CartCoursesCount++;

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.CartUrl);
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'دوره خریداری شده است');
            location.reload();
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        });
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  forwardUrl(url) {
    window.location.href = url;
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

  getTeacherName() {
    if (this.course.teacherUser == undefined || this.course.teacherUser == null) {
      return '';
    }

    const name = this.course.teacherUser.name != null ? this.course.teacherUser.name : '';
    const family = this.course.teacherUser.family != null ? this.course.teacherUser.family : '';
    return name + ' ' + family;
  }

  OnLike(like) {
    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
      this.isLikeLoadingShow = true;
      this.courseService.AddOrUpdateUserLikedCourse(this.course.id, like).subscribe(res => {
        this.isLikeLoadingShow = false;

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.course.userLiked = like;
        }
      }, err => {
        this.isLikeLoadingShow = false;
      });
    }
  }

  isLikeShow() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn();
  }

  presentModal2() {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this11.modalController.create({
        component: _components_modal_course_rate_modal_course_rate_modal_component__WEBPACK_IMPORTED_MODULE_17__.CourseRateModalComponent,
        cssClass: 'my-custom-class',
        swipeToClose: true,
        componentProps: {
          courseId: _this11.course.id
        }
      });
      return yield modal.present();
    })();
  }

  onRating() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.loading(this.loadingController);
    this.courseService.CheckUserCourseRating(this.course.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
    res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
        this.presentModal2();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'قبلا نظرسنجی شده است');
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_9__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

};

CourseByIdComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__.OrderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.DomSanitizer
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Meta
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController
}, {
  type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_10__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.MenuController
}];

CourseByIdComponent.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonInfiniteScroll]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonContent]
  }],
  sliderRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: ['swiperRef', {
      static: false
    }]
  }]
};
CourseByIdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
  selector: 'app-course-by-id',
  template: _course_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_course_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CourseByIdComponent);


/***/ }),

/***/ 34274:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/course/course-by-id/course-by-id.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseByIdModule": () => (/* binding */ CourseByIdModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _course_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-by-id-routing.module */ 27433);
/* harmony import */ var _course_by_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-by-id.component */ 53472);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/pipe/price.module */ 21448);
/* harmony import */ var _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _components_modal_photo_gallery_modal_page_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modal/photo-gallery-modal-page/photo-gallery/photo-gallery.module */ 203);
/* harmony import */ var _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/course/shared-course.module */ 44704);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var ang_music_player__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ang-music-player */ 99274);
/* harmony import */ var src_app_core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/i18n/site-i18n.module */ 58586);















// import { NgxCaptchaModule } from 'ngx-captcha';




let CourseByIdModule = class CourseByIdModule {
};
CourseByIdModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_course_by_id_component__WEBPACK_IMPORTED_MODULE_2__.CourseByIdComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _course_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseByIdRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
            _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_5__.PersianDateModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _components_modal_photo_gallery_modal_page_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_8__.PhotoGalleryModule,
            // NgxCaptchaModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__.LoadingModule,
            _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_9__.SharedCourseModule,
            ang_music_player__WEBPACK_IMPORTED_MODULE_17__.AngMusicPlayerModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_18__.SwiperModule,
            src_app_core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_10__.SiteI18nModule
        ],
        providers: [
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_6__.OrderService,
            // VideoPlayer,
            // {
            //   provide: HTTP_INTERCEPTORS,
            //   useClass: AccountInterceptor,
            //   multi: true
            // }
        ]
    })
], CourseByIdModule);



/***/ }),

/***/ 99274:
/*!*********************************************************************************!*\
  !*** ./node_modules/ang-music-player/__ivy_ngcc__/fesm2015/ang-music-player.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngMusicPlayerComponent": () => (/* binding */ AngMusicPlayerComponent),
/* harmony export */   "AngMusicPlayerModule": () => (/* binding */ AngMusicPlayerModule),
/* harmony export */   "AngMusicPlayerService": () => (/* binding */ AngMusicPlayerService),
/* harmony export */   "ɵa": () => (/* binding */ AudioPlyerOptions),
/* harmony export */   "ɵb": () => (/* binding */ TimeConversionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);





const _c0 = ["audioPlayer"];

function AngMusicPlayerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AngMusicPlayerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No audio Found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AngMusicPlayerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.selectedAudio == null ? null : ctx_r3.selectedAudio.cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}

const _c1 = function (a0) {
  return {
    "color": a0
  };
};

function AngMusicPlayerComponent_div_6_marquee_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "marquee", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r5.audioTitleColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedAudio == null ? null : ctx_r5.selectedAudio.title, "");
  }
}

function AngMusicPlayerComponent_div_6_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r6.audioTitleColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.selectedAudio == null ? null : ctx_r6.selectedAudio.title, "");
  }
}

const _c2 = function (a0) {
  return {
    "fill": a0
  };
};

function AngMusicPlayerComponent_div_6__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_14_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.repeatAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "repeat-on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 31)(4, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r7.repeatButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_15_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.repeatAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " .cls{ fill: green } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "repeat-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 34)(6, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r8.activeRepeatButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_16_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.previousAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 37)(4, "rect", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r9.previousButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_17_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.play());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r10.playButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_18_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.pause());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r11.pauseButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_19_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.nextAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "polygon", 42)(4, "rect", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r12.nextButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_21_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.muteAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs")(2, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .cls-2 { fill: none; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "volume-high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 45)(7, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r13.pauseButtonColor));
  }
}

function AngMusicPlayerComponent_div_6__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6__svg_svg_22_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.muteAudio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r14.muteButtonColor));
  }
}

const _c3 = function (a0) {
  return {
    "background": a0
  };
};

function AngMusicPlayerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AngMusicPlayerComponent_div_6_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.seekAudio($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "timeConversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "timeConversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AngMusicPlayerComponent_div_6_marquee_11_Template, 3, 4, "marquee", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AngMusicPlayerComponent_div_6_p_12_Template, 2, 4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AngMusicPlayerComponent_div_6__svg_svg_14_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AngMusicPlayerComponent_div_6__svg_svg_15_Template, 7, 3, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AngMusicPlayerComponent_div_6__svg_svg_16_Template, 5, 3, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AngMusicPlayerComponent_div_6__svg_svg_17_Template, 4, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AngMusicPlayerComponent_div_6__svg_svg_18_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AngMusicPlayerComponent_div_6__svg_svg_19_Template, 5, 3, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AngMusicPlayerComponent_div_6__svg_svg_21_Template, 8, 3, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AngMusicPlayerComponent_div_6__svg_svg_22_Template, 5, 3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 25)(24, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AngMusicPlayerComponent_div_6_Template_input_click_24_listener($event) {
      return $event.stopPropagation();
    })("input", function AngMusicPlayerComponent_div_6_Template_input_input_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.volumeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r4.totalAudioLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.currentAudioTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx_r4.timeSliderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx_r4.audioTimeColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx_r4.currentAudioTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 20, ctx_r4.totalAudioLength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.scrollTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.scrollTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.repeat && !ctx_r4.isRepeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.repeat && ctx_r4.isRepeat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isAudioPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isAudioPlaying);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.next);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isMute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isMute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.audioVolume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, ctx_r4.volumeSliderColor));
  }
}

const _c4 = function (a0, a1, a2) {
  return {
    "background-color": a0,
    "width": a1,
    "height": a2
  };
};

class AngMusicPlayerService {
  constructor() {}

}

AngMusicPlayerService.ɵfac = function AngMusicPlayerService_Factory(t) {
  return new (t || AngMusicPlayerService)();
};

AngMusicPlayerService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function AngMusicPlayerService_Factory() {
    return new AngMusicPlayerService();
  },
  token: AngMusicPlayerService,
  providedIn: "root"
});

AngMusicPlayerService.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

class AudioPlyerOptions {
  constructor() {
    this.currentAudioTime = 0;
    this.isAudioLoaded = false;
    this.isRepeat = false;
    this.audioVolume = 100;
    this.isAudioEnded = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isMute = false;
    this.playEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pauseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  } //get audio player events


  options() {
    //emit event when playing audio
    this.audioPlayer.nativeElement.addEventListener('playing', () => {}); //emit when intial loading of audio

    this.audioPlayer.nativeElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      this.getAudioLength();
    }); //emit time on playing audio

    this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
      //get current audio time
      this.currentAudioTime = Math.floor(this.audioPlayer.nativeElement.currentTime); //check if audio is ended for next song and pass data to component

      if (this.audioPlayer.nativeElement.ended) {
        this.isAudioEnded.next(true);
      }
    });
    this.audioPlayer.nativeElement.addEventListener('volumechange', () => {
      this.audioVolume = Math.floor(this.audioPlayer.nativeElement.volume * 100);

      if (this.audioVolume == 0) {
        this.isMute = true;
      } else {
        this.isMute = false;
      }
    });
  }

  play() {
    //toggle play-pause button
    this.isAudioPlaying = true; //play when user click play button

    setTimeout(() => {
      this.audioPlayer.nativeElement.play();
      this.playEvent.emit();
    }, 0);
  }

  pause() {
    //toggle play-pause button
    this.isAudioPlaying = false; //pause when user click pause button

    setTimeout(() => {
      this.audioPlayer.nativeElement.pause();
      this.pauseEvent.emit();
    }, 0);
  }

  getAudioLength() {
    this.totalAudioLength = Math.floor(this.audioPlayer.nativeElement.duration);
  }

}

AudioPlyerOptions.ɵfac = function AudioPlyerOptions_Factory(t) {
  return new (t || AudioPlyerOptions)();
};

AudioPlyerOptions.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AudioPlyerOptions,
  selectors: [["ng-component"]],
  viewQuery: function AudioPlyerOptions_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
    }
  },
  outputs: {
    playEvent: "playEvent",
    pauseEvent: "pauseEvent"
  },
  decls: 0,
  vars: 0,
  template: function AudioPlyerOptions_Template(rf, ctx) {},
  encapsulation: 2
});
AudioPlyerOptions.propDecorators = {
  playEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  pauseEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  audioPlayer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: ['audioPlayer', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioPlyerOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [];
  }, {
    playEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pauseEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    audioPlayer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['audioPlayer', {
        static: true
      }]
    }]
  });
})();

class AngMusicPlayerComponent extends AudioPlyerOptions {
  constructor() {
    super();
    this.audioList = [];
    this.next = true;
    this.previous = true;
    this.shuffle = true;
    this.repeat = true;
    this.scrollTitle = false;
    this.playButtonColor = "rgb(76, 130, 175)";
    this.pauseButtonColor = "rgb(76, 130, 175)";
    this.nextButtonColor = "rgb(76, 130, 175)";
    this.previousButtonColor = "rgb(76, 130, 175)";
    this.repeatButtonColor = "rgb(76, 130, 175)";
    this.activeRepeatButtonColor = "rgb(76, 130, 175)";
    this.volumeButtonColor = "rgb(76, 130, 175)";
    this.muteButtonColor = "rgb(76, 130, 175)";
    this.nextEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.previousEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.repeatEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shuffleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.seekEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.currentAudioIndex = 0;
    this.repeatActive = false;
    this.isError = false;
    this.isShuffle = false;
  }

  ngOnInit() {
    this.options();
    this.initiateAudioPlayer(); //check audio is ended for next song

    this.isAudioEnded.subscribe(data => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    });
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();

      if (this.isAudioPlaying) {
        this.play();
      }

      this.nextEvent.emit();
    } else {
      this.pause();
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();

      if (this.isAudioPlaying) {
        this.play();
      }

      this.previousEvent.emit();
    }
  }

  seekAudio(seekAudioValue) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }

    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
    this.seekEvent.emit();
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
    this.repeatEvent.emit();
  }
  /*   shuffleAudio() {
      this.isShuffle = !this.isShuffle;
      if (this.isShuffle) {
      let randomItem = Math.floor(Math.random() * this.audioList.length);
      console.log(randomItem);
      
      }
      this.shuffleEvent.emit();
    } */


  volumeChange(volume) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }

}

AngMusicPlayerComponent.ɵfac = function AngMusicPlayerComponent_Factory(t) {
  return new (t || AngMusicPlayerComponent)();
};

AngMusicPlayerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AngMusicPlayerComponent,
  selectors: [["ang-music-player"]],
  inputs: {
    audioList: "audioList",
    next: "next",
    previous: "previous",
    shuffle: "shuffle",
    repeat: "repeat",
    scrollTitle: "scrollTitle",
    playButtonColor: "playButtonColor",
    pauseButtonColor: "pauseButtonColor",
    nextButtonColor: "nextButtonColor",
    previousButtonColor: "previousButtonColor",
    repeatButtonColor: "repeatButtonColor",
    activeRepeatButtonColor: "activeRepeatButtonColor",
    volumeButtonColor: "volumeButtonColor",
    muteButtonColor: "muteButtonColor",
    width: "width",
    height: "height",
    backgroundColor: "backgroundColor",
    audioTimeColor: "audioTimeColor",
    audioTitleColor: "audioTitleColor",
    volumeSliderColor: "volumeSliderColor",
    timeSliderColor: "timeSliderColor"
  },
  outputs: {
    nextEvent: "nextEvent",
    previousEvent: "previousEvent",
    repeatEvent: "repeatEvent",
    shuffleEvent: "shuffleEvent",
    seekEvent: "seekEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 10,
  consts: [["controls", "", 3, "src"], ["audioPlayer", ""], [1, "wrapper", 3, "ngStyle"], ["class", "loader", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "cover", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "loader"], [1, "error"], [1, "cover"], [3, "src"], [1, "container"], [1, "details"], [1, "slidecontainer"], ["type", "range", "id", "myRange", 1, "slider", 3, "max", "value", "ngStyle", "input"], [1, "time-line", 3, "ngStyle"], [3, "ngStyle", 4, "ngIf"], ["class", "title", 3, "ngStyle", 4, "ngIf"], [1, "controls"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 63.98 64.03", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 65 65.7", 3, "ngStyle", "click", 4, "ngIf"], [1, "volume-container"], ["id", "volume", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], ["id", "Capa_1", "data-name", "Capa 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click", 4, "ngIf"], [1, "volume-control"], ["type", "range", "max", "100", "id", "volumeRange", 1, "slider", 3, "value", "ngStyle", "click", "input"], [3, "ngStyle"], [1, "title"], [1, "title", 3, "ngStyle"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["d", "M13.78,64a1.14,1.14,0,0,1-.8-.3L.26,51.3a1.07,1.07,0,0,1-.1-1.4l.1-.1L13,37.5a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1v7.6H49.72a1.84,1.84,0,0,0,1.8-1.7V35.6a.91.91,0,0,1,.3-.7l8.51-8.3a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1V46c0,6.7-3.6,10.2-10.51,10.2H14.88v6.7a1,1,0,0,1-.7,1A.6.6,0,0,1,13.78,64Z", "transform", "translate(0.05 0)", 1, "cls-1"], ["d", "M3,37.8a.6.6,0,0,1-.4-.1,1.09,1.09,0,0,1-.7-1V18C2,11.3,5.57,7.8,12.48,7.8H49.22V1.1a1.2,1.2,0,0,1,.7-1A.94.94,0,0,1,51,.3L63.64,12.7a1.07,1.07,0,0,1,.1,1.4l-.1.1L51,26.5a1.06,1.06,0,0,1-1.2.2,1.09,1.09,0,0,1-.7-1V18.1H14.38a1.69,1.69,0,0,0-1.7,1.7v8.6a1.14,1.14,0,0,1-.3.8L3.87,37.5A3.18,3.18,0,0,1,3,37.8Z", "transform", "translate(0.05 0)", 1, "cls-1"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 63.98 64.03", 3, "ngStyle", "click"], ["d", "M13.78,64a1.13,1.13,0,0,1-.78-.31L.31,51.34a1,1,0,0,1-.07-1.41l.07-.07L13,37.49a1.09,1.09,0,0,1,1.19-.23,1,1,0,0,1,.66,1v7.63H49.64a1.73,1.73,0,0,0,1.75-1.69V35.59a1,1,0,0,1,.31-.74l8.49-8.28a1.12,1.12,0,0,1,1.18-.23,1.07,1.07,0,0,1,.67,1V46c0,6.68-3.63,10.21-10.51,10.21H14.86V63a1,1,0,0,1-.67,1A1,1,0,0,1,13.78,64Z", "transform", "translate(0.02 0.03)", 1, "cls"], ["d", "M3.05,37.75a1,1,0,0,1-.41-.09,1,1,0,0,1-.67-1V18C2,11.3,5.59,7.78,12.48,7.78H49.15V1.05a1.08,1.08,0,0,1,.67-1A1.1,1.1,0,0,1,51,.29L63.64,12.65a1,1,0,0,1,.07,1.41l-.07.07L51,26.49a1.08,1.08,0,0,1-1.18.23,1,1,0,0,1-.67-1v-7.6H14.36a1.71,1.71,0,0,0-1.72,1.69v8.61a1,1,0,0,1-.32.75l-8.5,8.26A1.06,1.06,0,0,1,3.05,37.75Z", "transform", "translate(0.02 0.03)", 1, "cls"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 65 65.7", 3, "ngStyle", "click"], ["points", "64.5 0.85 7.05 32.85 64.5 64.85 64.5 0.85", 1, "cls-1"], ["x", "0.5", "y", "0.85", "width", "13.52", "height", "64", 1, "cls-1"], ["d", "M21.65,79.51A3.48,3.48,0,0,1,18,76.22V18.79a3.47,3.47,0,0,1,3.64-3.28L80.8,45s2.73,2.47,0,4.93S21.65,79.51,21.65,79.51Z", "transform", "translate(-18.01 -15.51)", 1, "cls-1"], ["id", "pause"], ["d", "M16,82H37.33V18H16ZM58.67,18V82H80V18Z", "transform", "translate(-16 -18)", 1, "cls-1"], ["points", "0 64 57.45 32 0 0 0 64", 1, "cls-1"], ["x", "50.48", "width", "13.52", "height", "64", 1, "cls-1"], ["id", "volume", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["d", "M2.67,22.39V44.28H16.89L34.67,62.52V4.14L16.89,22.39Zm48,10.94a16.46,16.46,0,0,0-8.89-14.7V48A16.37,16.37,0,0,0,50.67,33.33Zm-8.89-32V8.85A25.49,25.49,0,0,1,59.56,33.33,25.5,25.5,0,0,1,41.78,57.82v7.51a32.65,32.65,0,0,0,24.89-32A32.66,32.66,0,0,0,41.78,1.33Z", "transform", "translate(-2.67 -1.33)", 1, "cls-1"], ["d", "M22.67,21.33h24v24h-24Z", "transform", "translate(-2.67 -1.33)", 1, "cls-2"], ["id", "Capa_1", "data-name", "Capa 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", 3, "ngStyle", "click"], ["id", "volume-off"], ["d", "M59,39.83a15.35,15.35,0,0,0-8.89-14.14v7.78L59,42.31Zm8.89,0A26.37,26.37,0,0,1,66.12,49l5.34,5.3A29.71,29.71,0,0,0,75,39.48,31.94,31.94,0,0,0,50.12,8.36v7.43C60.43,19.33,67.9,28.52,67.9,39.83ZM15.63,8,11,12.61,27.72,29.23H11V50.44H25.23L43,68.12V44.43L58.3,59.64a30,30,0,0,1-8.18,4.24V71.3a30.44,30.44,0,0,0,13.16-6.36L70.39,72,75,67.41,43,35.59ZM43,11.55,35.54,19,43,26.4Z", "transform", "translate(-11.01 -8.01)", 1, "cls-1"]],
  template: function AngMusicPlayerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AngMusicPlayerComponent_div_3_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AngMusicPlayerComponent_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AngMusicPlayerComponent_div_5_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AngMusicPlayerComponent_div_6_Template, 25, 28, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedAudio == null ? null : ctx.selectedAudio.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c4, ctx.backgroundColor, ctx.width, ctx.height));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAudioLoaded && !ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedAudio == null ? null : ctx.selectedAudio.cover) && ctx.isAudioLoaded);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAudioLoaded);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, TimeConversionPipe];
  },
  styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");audio[_ngcontent-%COMP%]{display:none}.wrapper[_ngcontent-%COMP%]{align-items:center;background:#000;border-radius:15px;display:flex;font-family:Raleway,sans-serif;height:130px;width:500px}.wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;margin-left:10px;max-height:100px;max-width:100px}.wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{color:#fff}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{margin:0 auto;position:relative;text-align:center}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#ff3737}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:5px;width:100%}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#4c82af;margin:7px 0 15px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-basis:auto;flex-direction:row;flex-wrap:wrap;justify-content:space-around;margin-top:8px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{cursor:pointer;height:25px;margin:0 20px;width:25px}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]{position:relative}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]   .volume-control[_ngcontent-%COMP%]{display:none;height:32px;left:-9px;position:absolute;top:-62px;transform:rotate(270deg);width:90px;z-index:1000}.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .volume-container[_ngcontent-%COMP%]:hover   .volume-control[_ngcontent-%COMP%]{display:block}.slidecontainer[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.slidecontainer[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]{color:#4c82af;display:flex;justify-content:space-between;margin:7px 0 2px;width:87%}.slider[_ngcontent-%COMP%]{-webkit-appearance:none;background:#fff;border-radius:5px;height:2px;opacity:1;outline:none;transition:opacity .2s;width:87%;z-index:1000}.slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}.slider[_ngcontent-%COMP%]::-moz-range-thumb{background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}"]
});

AngMusicPlayerComponent.ctorParameters = () => [];

AngMusicPlayerComponent.propDecorators = {
  width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  height: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  backgroundColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioTimeColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioTitleColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  volumeSliderColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  timeSliderColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  audioList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  next: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previous: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  shuffle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  repeat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  scrollTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  playButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  pauseButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  nextButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previousButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  repeatButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  activeRepeatButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  volumeButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  muteButtonColor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  nextEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  previousEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  repeatEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  shuffleEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  seekEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ang-music-player',
      template: "<audio controls #audioPlayer [src]=\"selectedAudio?.url\"> </audio>\r\n\r\n<div class=\"wrapper\" [ngStyle]=\"{ 'background-color': backgroundColor , 'width': width, 'height': height }\">\r\n\r\n  <!-- loader and error -->\r\n  <div class=\"loader\" *ngIf=\"!isAudioLoaded && !isError\"> Loading....</div>\r\n  <div class=\"error\" *ngIf=\"isError\">No audio Found !</div>\r\n\r\n  <div *ngIf=\"selectedAudio?.cover && isAudioLoaded\" class=\"cover\">\r\n    <img [src]=\"selectedAudio?.cover\">\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"isAudioLoaded\">\r\n    <div class=\"details\">\r\n      <div class=\"slidecontainer\">\r\n        <input type=\"range\" max=\"{{totalAudioLength}}\" value=\"{{currentAudioTime}}\"\r\n          [ngStyle]=\"{ 'background': timeSliderColor }\" (input)=\"seekAudio($event)\" class=\"slider\" id=\"myRange\">\r\n        <div class=\"time-line\" [ngStyle]=\"{ 'color' : audioTimeColor }\">\r\n          <div>{{ currentAudioTime | timeConversion}}</div>\r\n          <div>{{ totalAudioLength | timeConversion}}</div>\r\n        </div>\r\n      </div>\r\n      <marquee *ngIf=\"scrollTitle\" [ngStyle]=\"{ 'color' : audioTitleColor }\">\r\n        <p class=\"title\"> {{selectedAudio?.title}}</p>\r\n      </marquee>\r\n      <p class=\"title\" [ngStyle]=\"{ 'color' : audioTitleColor }\" *ngIf=\"!scrollTitle\"> {{selectedAudio?.title}}</p>\r\n    </div>\r\n    <div class=\"controls\">\r\n\r\n      <!-- repeat button starts -->\r\n      <!-- not active -->\r\n      <svg id=\"Layer_1\" *ngIf=\"repeat && !isRepeat\" (click)=\"repeatAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : repeatButtonColor }\">\r\n        <title>repeat-on</title>\r\n        <path class=\"cls-1\"\r\n          d=\"M13.78,64a1.14,1.14,0,0,1-.8-.3L.26,51.3a1.07,1.07,0,0,1-.1-1.4l.1-.1L13,37.5a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1v7.6H49.72a1.84,1.84,0,0,0,1.8-1.7V35.6a.91.91,0,0,1,.3-.7l8.51-8.3a1.06,1.06,0,0,1,1.2-.2,1.2,1.2,0,0,1,.7,1V46c0,6.7-3.6,10.2-10.51,10.2H14.88v6.7a1,1,0,0,1-.7,1A.6.6,0,0,1,13.78,64Z\"\r\n          transform=\"translate(0.05 0)\" />\r\n        <path class=\"cls-1\"\r\n          d=\"M3,37.8a.6.6,0,0,1-.4-.1,1.09,1.09,0,0,1-.7-1V18C2,11.3,5.57,7.8,12.48,7.8H49.22V1.1a1.2,1.2,0,0,1,.7-1A.94.94,0,0,1,51,.3L63.64,12.7a1.07,1.07,0,0,1,.1,1.4l-.1.1L51,26.5a1.06,1.06,0,0,1-1.2.2,1.09,1.09,0,0,1-.7-1V18.1H14.38a1.69,1.69,0,0,0-1.7,1.7v8.6a1.14,1.14,0,0,1-.3.8L3.87,37.5A3.18,3.18,0,0,1,3,37.8Z\"\r\n          transform=\"translate(0.05 0)\" />\r\n      </svg>\r\n\r\n      <!-- active -->\r\n      <svg id=\"Layer_1\" *ngIf=\"repeat && isRepeat\" (click)=\"repeatAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 63.98 64.03\" [ngStyle]=\"{ 'fill' : activeRepeatButtonColor }\">\r\n        <style>\r\n          .cls{\r\n            fill: green\r\n          }\r\n        </style>\r\n        <title>repeat-off</title>\r\n        <path class=\"cls\"\r\n          d=\"M13.78,64a1.13,1.13,0,0,1-.78-.31L.31,51.34a1,1,0,0,1-.07-1.41l.07-.07L13,37.49a1.09,1.09,0,0,1,1.19-.23,1,1,0,0,1,.66,1v7.63H49.64a1.73,1.73,0,0,0,1.75-1.69V35.59a1,1,0,0,1,.31-.74l8.49-8.28a1.12,1.12,0,0,1,1.18-.23,1.07,1.07,0,0,1,.67,1V46c0,6.68-3.63,10.21-10.51,10.21H14.86V63a1,1,0,0,1-.67,1A1,1,0,0,1,13.78,64Z\"\r\n          transform=\"translate(0.02 0.03)\" />\r\n        <path class=\"cls\"\r\n          d=\"M3.05,37.75a1,1,0,0,1-.41-.09,1,1,0,0,1-.67-1V18C2,11.3,5.59,7.78,12.48,7.78H49.15V1.05a1.08,1.08,0,0,1,.67-1A1.1,1.1,0,0,1,51,.29L63.64,12.65a1,1,0,0,1,.07,1.41l-.07.07L51,26.49a1.08,1.08,0,0,1-1.18.23,1,1,0,0,1-.67-1v-7.6H14.36a1.71,1.71,0,0,0-1.72,1.69v8.61a1,1,0,0,1-.32.75l-8.5,8.26A1.06,1.06,0,0,1,3.05,37.75Z\"\r\n          transform=\"translate(0.02 0.03)\" />\r\n      </svg>\r\n      <!-- repeat active ends -->\r\n\r\n      <!-- previous button starts -->\r\n      <svg id=\"Layer_1\" *ngIf=\"previous\" (click)=\"previousAudio()\" data-name=\"Layer 1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 65 65.7\" [ngStyle]=\"{ 'fill' : previousButtonColor }\">\r\n        <title>previous</title>\r\n        <polygon class=\"cls-1\" points=\"64.5 0.85 7.05 32.85 64.5 64.85 64.5 0.85\" />\r\n        <rect class=\"cls-1\" x=\"0.5\" y=\"0.85\" width=\"13.52\" height=\"64\" />\r\n      </svg>\r\n      <!-- previous button ends -->\r\n\r\n      <!-- play button starts -->\r\n      <svg id=\"Layer_1\" (click)=\"play()\" *ngIf=\"!isAudioPlaying\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : playButtonColor }\">\r\n        <title>play</title>\r\n        <path class=\"cls-1\"\r\n          d=\"M21.65,79.51A3.48,3.48,0,0,1,18,76.22V18.79a3.47,3.47,0,0,1,3.64-3.28L80.8,45s2.73,2.47,0,4.93S21.65,79.51,21.65,79.51Z\"\r\n          transform=\"translate(-18.01 -15.51)\" />\r\n      </svg>\r\n      <!-- play button ends -->\r\n\r\n      <!-- pause button starts -->\r\n      <svg id=\"Layer_1\" (click)=\"pause()\" *ngIf=\"isAudioPlaying\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : pauseButtonColor }\">\r\n        <title>pause</title>\r\n        <g id=\"pause\">\r\n          <path class=\"cls-1\" d=\"M16,82H37.33V18H16ZM58.67,18V82H80V18Z\" transform=\"translate(-16 -18)\" />\r\n        </g>\r\n      </svg>\r\n      <!-- pause button ends -->\r\n\r\n      <!-- next button starts -->\r\n      <svg id=\"Layer_1\" *ngIf=\"next\" (click)=\"nextAudio()\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n        viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : nextButtonColor }\">\r\n        <title>next</title>\r\n        <polygon class=\"cls-1\" points=\"0 64 57.45 32 0 0 0 64\" />\r\n        <rect class=\"cls-1\" x=\"50.48\" width=\"13.52\" height=\"64\" />\r\n      </svg>\r\n      <!-- next button ends -->\r\n\r\n      <!-- <div class=\"shuffle\" *ngIf=\"shuffle\" [ngClass]=\"{'shuffle-active': isShuffle}\" (click)=\"shuffleAudio()\"></div> -->\r\n\r\n      <!-- volume button starts -->\r\n      <div class=\"volume-container\">\r\n        <!-- with volume -->\r\n        <svg id=\"volume\" *ngIf=\"!isMute\" (click)=\"muteAudio()\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n          viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : pauseButtonColor }\">\r\n          <defs>\r\n            <style>\r\n              .cls-2 {\r\n                fill: none;\r\n              }\r\n\r\n            </style>\r\n          </defs>\r\n          <title>volume-high</title>\r\n          <path class=\"cls-1\"\r\n            d=\"M2.67,22.39V44.28H16.89L34.67,62.52V4.14L16.89,22.39Zm48,10.94a16.46,16.46,0,0,0-8.89-14.7V48A16.37,16.37,0,0,0,50.67,33.33Zm-8.89-32V8.85A25.49,25.49,0,0,1,59.56,33.33,25.5,25.5,0,0,1,41.78,57.82v7.51a32.65,32.65,0,0,0,24.89-32A32.66,32.66,0,0,0,41.78,1.33Z\"\r\n            transform=\"translate(-2.67 -1.33)\" />\r\n          <path class=\"cls-2\" d=\"M22.67,21.33h24v24h-24Z\" transform=\"translate(-2.67 -1.33)\" />\r\n        </svg>\r\n\r\n        <!-- mute -->\r\n        <svg id=\"Capa_1\" *ngIf=\"isMute\" (click)=\"muteAudio()\" data-name=\"Capa 1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n          viewBox=\"0 0 64 64\" [ngStyle]=\"{ 'fill' : muteButtonColor }\">\r\n          <title>mute</title>\r\n          <g id=\"volume-off\">\r\n            <path class=\"cls-1\"\r\n              d=\"M59,39.83a15.35,15.35,0,0,0-8.89-14.14v7.78L59,42.31Zm8.89,0A26.37,26.37,0,0,1,66.12,49l5.34,5.3A29.71,29.71,0,0,0,75,39.48,31.94,31.94,0,0,0,50.12,8.36v7.43C60.43,19.33,67.9,28.52,67.9,39.83ZM15.63,8,11,12.61,27.72,29.23H11V50.44H25.23L43,68.12V44.43L58.3,59.64a30,30,0,0,1-8.18,4.24V71.3a30.44,30.44,0,0,0,13.16-6.36L70.39,72,75,67.41,43,35.59ZM43,11.55,35.54,19,43,26.4Z\"\r\n              transform=\"translate(-11.01 -8.01)\" />\r\n          </g>\r\n        </svg>\r\n\r\n        <!-- volume button ends -->\r\n        <div class=\"volume-control\">\r\n          <input type=\"range\" max=\"100\" value=\"{{audioVolume}}\" (click)=\"$event.stopPropagation();\"\r\n            (input)=\"volumeChange($event)\" [ngStyle]=\"{ 'background': volumeSliderColor }\" class=\"slider\"\r\n            id=\"volumeRange\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n",
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Raleway&display=swap\");audio{display:none}.wrapper{align-items:center;background:#000;border-radius:15px;display:flex;font-family:Raleway,sans-serif;height:130px;width:500px}.wrapper .cover img{border-radius:50%;margin-left:10px;max-height:100px;max-width:100px}.wrapper .loader{color:#fff}.wrapper .error,.wrapper .loader{margin:0 auto;position:relative;text-align:center}.wrapper .error{color:#ff3737}.wrapper .container{padding:5px;width:100%}.wrapper .container .details{text-align:center}.wrapper .container .details .title{color:#4c82af;margin:7px 0 15px}.wrapper .container .controls{display:flex;flex-basis:auto;flex-direction:row;flex-wrap:wrap;justify-content:space-around;margin-top:8px}.wrapper .container .controls svg{cursor:pointer;height:25px;margin:0 20px;width:25px}.wrapper .container .volume-container{position:relative}.wrapper .container .volume-container .volume-control{display:none;height:32px;left:-9px;position:absolute;top:-62px;transform:rotate(270deg);width:90px;z-index:1000}.wrapper .container .volume-container:hover .volume-control{display:block}.slidecontainer{align-items:center;display:flex;flex-direction:column;width:100%}.slidecontainer .time-line{color:#4c82af;display:flex;justify-content:space-between;margin:7px 0 2px;width:87%}.slider{-webkit-appearance:none;background:#fff;border-radius:5px;height:2px;opacity:1;outline:none;transition:opacity .2s;width:87%;z-index:1000}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}.slider::-moz-range-thumb{background:#4c82af;border-radius:50%;cursor:pointer;height:15px;width:15px}"]
    }]
  }], function () {
    return [];
  }, {
    audioList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    next: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previous: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    shuffle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    repeat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    playButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pauseButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    repeatButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeRepeatButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    volumeButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    muteButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    previousEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    repeatEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    shuffleEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    seekEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    audioTimeColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    audioTitleColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    volumeSliderColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    timeSliderColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class TimeConversionPipe {
  transform(audioTime) {
    let audioLengthMin = ("0" + Math.floor(audioTime / 60)).slice(-2);
    let audioLengthSec = ("0" + audioTime % 60).slice(-2);
    return `${audioLengthMin}:${audioLengthSec}`;
  }

}

TimeConversionPipe.ɵfac = function TimeConversionPipe_Factory(t) {
  return new (t || TimeConversionPipe)();
};

TimeConversionPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "timeConversion",
  type: TimeConversionPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeConversionPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'timeConversion'
    }]
  }], null, null);
})();

class AngMusicPlayerModule {}

AngMusicPlayerModule.ɵfac = function AngMusicPlayerModule_Factory(t) {
  return new (t || AngMusicPlayerModule)();
};

AngMusicPlayerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AngMusicPlayerModule
});
AngMusicPlayerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngMusicPlayerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [AngMusicPlayerComponent, TimeConversionPipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [AngMusicPlayerComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngMusicPlayerModule, {
    declarations: function () {
      return [AngMusicPlayerComponent, TimeConversionPipe];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [AngMusicPlayerComponent];
    }
  });
})();
/*
 * Public API Surface of ang-music-player
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 19985:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/course/course-by-id/course-by-id.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.2);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-dark: #059669;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --card-shadow: 0 12px 36px rgba(99, 63, 163, 0.07);\n  --course-accent: var(--purple);\n  --course-accent-rgb: 109, 40, 217;\n  --course-surface: #ffffff;\n  --course-text: var(--ink);\n  --course-muted: var(--muted);\n  --course-border: var(--border-soft);\n  --course-shadow: var(--card-shadow);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", sans-serif);\n}\n\nion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.3;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  flex: 1;\n}\n\n.main-nav a, .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav a:hover, .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav a.active {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.pill-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: inline-block;\n  animation: pulse-dot 2s infinite;\n}\n\n@keyframes pulse-dot {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.6;\n  }\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-soft);\n  background: var(--catalog-surface, #ffffff);\n  color: var(--ink);\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  text-decoration: none;\n}\n\n.icon-button:hover {\n  border-color: var(--catalog-border, #ac88f2);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  background: var(--catalog-danger, var(--rose));\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  width: 19px;\n  height: 19px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--catalog-surface, #fff);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple), var(--purple-dark)));\n  color: #ffffff !important;\n  padding: 9px 16px;\n  border-radius: 13px;\n  font-size: 13px;\n  font-weight: 700;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.login-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px var(--purple-glow);\n}\n\n.header-search {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 10px 20px 16px;\n}\n\n.search-input-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--catalog-surface, #ffffff);\n  border: 2px solid var(--purple-light);\n  border-radius: 16px;\n  padding: 6px 14px;\n  box-shadow: 0 8px 24px rgba(99, 63, 163, 0.08);\n}\n\n.search-input-icon {\n  font-size: 20px;\n  color: var(--purple);\n  flex-shrink: 0;\n}\n\n.search-input-group input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-family: inherit;\n  color: var(--ink);\n}\n\n.search-input-group .button.primary {\n  background: var(--catalog-action, var(--purple));\n  color: #fff;\n  border: none;\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-weight: 800;\n  font-size: 13px;\n  cursor: pointer;\n}\n\n.search-input-group .button.secondary {\n  background: var(--purple-light);\n  color: var(--purple);\n  border: none;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   Breadcrumb Bar & Grade Tag\n   ========================================================================== */\n\n.edu-breadcrumbs-bar {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.85);\n  border-bottom: 1px solid var(--border-soft);\n  padding: 12px 0;\n}\n\n.edu-breadcrumbs-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.edu-breadcrumbs {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--muted);\n  flex-wrap: wrap;\n}\n\n.edu-breadcrumbs a {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--ink-secondary);\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.18s ease;\n}\n\n.edu-breadcrumbs a:hover {\n  color: var(--purple);\n}\n\n.edu-sep {\n  color: var(--catalog-muted, #cbd5e1);\n  font-weight: 700;\n}\n\n.edu-current {\n  color: var(--purple);\n  font-weight: 800;\n  max-width: 380px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.edu-grade-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--purple-light);\n  color: var(--purple-dark);\n  font-size: 12px;\n  font-weight: 800;\n  padding: 5px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(109, 40, 217, 0.15);\n}\n\n.sparkle-icon {\n  color: var(--amber);\n  font-size: 13px;\n}\n\n/* ==========================================================================\n   Course Main Container\n   ========================================================================== */\n\n.course-page {\n  min-height: 70vh;\n  padding: 28px 0 60px;\n  color: var(--ink);\n  background: radial-gradient(circle at 90% 2%, rgba(109, 40, 217, 0.07), transparent 30rem), radial-gradient(circle at 8% 26%, rgba(245, 158, 11, 0.06), transparent 28rem), var(--bg-canvas);\n}\n\n.course-grid {\n  width: min(1320px, 100% - 36px);\n  padding: 0;\n  margin: 0 auto;\n}\n\n.course-layout {\n  align-items: flex-start;\n  margin: 0 -12px;\n}\n\n.course-sidebar,\n.course-main {\n  padding: 12px;\n}\n\n.course-sidebar {\n  position: sticky;\n  top: 90px;\n}\n\n/* ==========================================================================\n   Cards General Styling\n   ========================================================================== */\n\nion-card {\n  overflow: hidden;\n  border: 1px solid var(--border-soft);\n  border-radius: 24px;\n  background: var(--catalog-surface, #ffffff);\n  box-shadow: var(--card-shadow);\n  margin: 0 0 20px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\nion-card-header[color=primary] {\n  --background: transparent;\n  position: relative;\n  padding: 18px 22px 14px;\n  color: var(--ink);\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.05), transparent 60%);\n  border-bottom: 1px solid var(--border-soft);\n}\n\nion-card-header[color=primary]::after {\n  position: absolute;\n  right: 22px;\n  bottom: -1px;\n  width: 48px;\n  height: 3px;\n  border-radius: 3px;\n  content: \"\";\n  background: linear-gradient(90deg, var(--purple), var(--amber));\n}\n\nion-card-title {\n  color: var(--ink);\n  font-weight: 900;\n  font-size: 17px;\n}\n\nion-card-content,\nion-list,\nion-item {\n  --background: transparent;\n  background: transparent;\n  font-family: inherit;\n}\n\nion-item {\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n/* ==========================================================================\n   Teacher Card\n   ========================================================================== */\n\n.teacher-card {\n  position: relative;\n  text-align: center;\n  border: 1px solid var(--border-soft);\n}\n\n.teacher-card::before {\n  display: block;\n  width: 100%;\n  height: 5px;\n  content: \"\";\n  background: linear-gradient(90deg, var(--purple), var(--amber));\n}\n\n.teacher-card ion-card-header {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--purple-dark);\n}\n\n.teacher-card .avatar {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto;\n  border: 3px solid var(--catalog-surface, #ffffff);\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.2), 0 10px 24px rgba(109, 40, 217, 0.14);\n}\n\n.teacher-card .description {\n  color: var(--ink-secondary);\n  font-size: 13px;\n  line-height: 2;\n  white-space: pre-wrap;\n  padding: 0 10px;\n}\n\n/* ==========================================================================\n   Purchase Card\n   ========================================================================== */\n\n.purchase-card {\n  overflow: visible;\n  border: 2px solid rgba(109, 40, 217, 0.16);\n  box-shadow: 0 20px 50px rgba(99, 63, 163, 0.1);\n  position: relative;\n}\n\n.purchase-card::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 4px;\n  background: linear-gradient(90deg, var(--emerald), var(--purple), var(--amber));\n}\n\n.purchase-card > ion-card-header {\n  padding: 20px 20px 14px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.08), rgba(245, 158, 11, 0.04));\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.purchase-card > ion-card-header ion-card-title {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.purchase-card ion-card-content {\n  padding: 12px 18px 22px;\n}\n\n.purchase-card ion-list ion-item {\n  --min-height: 44px;\n  font-size: 13px;\n}\n\n.purchase-card ion-list ion-item ion-icon[slot=end] {\n  padding: 8px;\n  border-radius: 10px;\n  color: var(--purple);\n  background: var(--purple-light);\n  font-size: 16px;\n}\n\n.purchase-card ion-list ion-item ion-text {\n  font-weight: 800;\n}\n\n.purchase-card .primary-buy-button {\n  --background: var(--catalog-buy-gradient, linear-gradient(135deg, #10b981, #059669));\n  --border-radius: 14px;\n  --box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);\n  min-height: 52px;\n  margin-top: 18px;\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: -0.2px;\n}\n\n.purchase-card .primary-buy-button:hover {\n  transform: translateY(-2px);\n}\n\n/* ==========================================================================\n   Course Overview Card (Hero)\n   ========================================================================== */\n\n.course-overview-card {\n  position: relative;\n  border-radius: 28px;\n}\n\n.course-overview-card::before {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  width: 48%;\n  height: 5px;\n  border-radius: 0 28px 0 0;\n  content: \"\";\n  background: linear-gradient(90deg, transparent, var(--purple));\n}\n\n.course-overview-card > ion-card-header {\n  padding: clamp(22px, 3.5vw, 36px) clamp(20px, 4vw, 44px) 14px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.06), transparent 50%);\n}\n\n.course-overview-card h1 {\n  max-width: 900px;\n  margin: 0 auto;\n  color: var(--ink);\n  font-size: clamp(23px, 3.5vw, 36px);\n  font-weight: 950;\n  line-height: 1.55;\n  text-wrap: balance;\n}\n\n.course-overview-card .link {\n  color: var(--ink) !important;\n}\n\n.course-overview-card > section {\n  position: relative;\n  padding: 0 clamp(18px, 4vw, 44px) clamp(24px, 4vw, 44px);\n}\n\n.course-overview-card .c-a-images {\n  width: 100%;\n  max-width: 860px;\n  min-height: 280px;\n  max-height: 480px;\n  margin: 0 auto 20px;\n  overflow: hidden;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  background: var(--catalog-soft, #f8fafc);\n  box-shadow: 0 8px 24px rgba(99, 63, 163, 0.06);\n}\n\n.course-overview-card .c-a-images::part(image) {\n  object-fit: contain;\n}\n\n.course-overview-card .top-right,\n.course-overview-card .top-left {\n  z-index: 4;\n  top: 16px;\n}\n\n.course-overview-card .top-right {\n  right: 16px;\n}\n\n.course-overview-card .top-left {\n  left: 16px;\n}\n\n.course-overview-card .top-right ion-badge,\n.course-overview-card .top-left ion-badge {\n  padding: 8px 14px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 900;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\n}\n\n.course-overview-card h2 {\n  margin-top: 18px !important;\n  color: var(--ink);\n  font-size: clamp(20px, 2.5vw, 26px);\n  line-height: 1.6;\n}\n\n.course-overview-card .font-small {\n  padding: 16px 20px;\n  border-right: 4px solid var(--purple);\n  border-radius: 14px 0 0 14px;\n  color: var(--ink-secondary);\n  background: var(--purple-light);\n  font-size: 14px;\n  line-height: 2;\n  white-space: pre-wrap;\n}\n\n/* Educational Highlight Chips */\n\n.course-highlights {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin: 22px 0 12px;\n}\n\n.course-highlights > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  min-height: 104px;\n  padding: 12px 8px;\n  border: 1px solid var(--border-soft);\n  border-radius: 16px;\n  text-align: center;\n  background: var(--catalog-surface, #ffffff);\n  box-shadow: 0 4px 14px rgba(99, 63, 163, 0.04);\n  transition: all 0.2s ease;\n}\n\n.course-highlights > div:hover {\n  transform: translateY(-2px);\n  border-color: rgba(109, 40, 217, 0.3);\n  box-shadow: 0 8px 20px rgba(99, 63, 163, 0.08);\n}\n\n.course-highlights ion-icon {\n  color: var(--purple);\n  font-size: 26px;\n}\n\n.course-highlights span {\n  color: var(--muted);\n  font-size: 11px;\n}\n\n.course-highlights strong {\n  color: var(--ink);\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n\n.readMore,\n.readLess {\n  position: relative;\n  color: var(--ink-secondary);\n  font-size: 15px;\n  line-height: 2.3;\n  text-align: justify;\n  overflow-wrap: anywhere;\n  transition: max-height 0.45s ease;\n}\n\n.readMore {\n  max-height: 220px !important;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);\n          mask-image: linear-gradient(to bottom, #000 60%, transparent 100%);\n}\n\n.readLess {\n  max-height: 12000px;\n}\n\n:host ::ng-deep .readMore h2,\n:host ::ng-deep .readLess h2,\n:host ::ng-deep .readMore h3,\n:host ::ng-deep .readLess h3 {\n  color: var(--ink);\n  font-weight: 900;\n  line-height: 1.7;\n  margin-top: 20px;\n}\n\n:host ::ng-deep .readMore p,\n:host ::ng-deep .readLess p {\n  color: var(--ink-secondary);\n  margin-bottom: 14px;\n}\n\n/* ==========================================================================\n   Sessions & Curriculum Card\n   ========================================================================== */\n\n.course-content-card {\n  scroll-margin-top: 20px;\n  border-radius: 28px;\n}\n\n.course-content-card::before {\n  display: block;\n  width: 100%;\n  height: 5px;\n  content: \"\";\n  background: linear-gradient(90deg, var(--purple), var(--emerald), var(--amber));\n}\n\n.access-banner {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  padding: 16px 20px;\n  margin: 18px clamp(12px, 3vw, 24px) 10px;\n  border: 1px solid;\n  border-radius: 16px;\n}\n\n.access-banner.owned {\n  border-color: rgba(16, 185, 129, 0.3);\n  background: var(--emerald-light);\n}\n\n.access-banner.locked {\n  border-color: rgba(109, 40, 217, 0.25);\n  background: var(--purple-light);\n}\n\n.access-banner__icon {\n  display: grid;\n  flex: 0 0 44px;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n  font-size: 22px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n\n.access-banner.owned .access-banner__icon {\n  color: var(--emerald-dark);\n}\n\n.access-banner.locked .access-banner__icon {\n  color: var(--purple);\n}\n\n.access-banner strong {\n  color: var(--ink);\n  font-size: 14px;\n}\n\n.access-banner p {\n  margin: 3px 0 0;\n  color: var(--ink-secondary);\n  font-size: 12px;\n  line-height: 1.8;\n}\n\n.course-content-card ion-list > div > ion-item[button] {\n  --min-height: 64px;\n  --padding-start: 14px;\n  --inner-padding-end: 12px;\n  margin: 8px 0;\n  border: 1px solid var(--border-soft);\n  border-radius: 16px;\n  font-size: 13px;\n  font-weight: 800;\n  transition: all 0.2s ease;\n}\n\n.course-content-card ion-list > div > ion-item[button]:hover {\n  border-color: rgba(109, 40, 217, 0.4);\n  box-shadow: 0 8px 22px rgba(99, 63, 163, 0.08);\n  transform: translateY(-2px);\n}\n\n.course-content-card .smooth {\n  margin: -2px 6px 16px;\n  border-radius: 0 0 16px 16px;\n  border: 1px solid var(--border-soft);\n  border-top: none;\n}\n\n.course-content-card .smooth ion-card-header {\n  background: rgba(109, 40, 217, 0.05);\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  background: #0f172a;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n/* ==========================================================================\n   Student / Teacher Voices Audio\n   ========================================================================== */\n\n.student-voices-card {\n  padding: 14px 18px 22px;\n  border-color: rgba(16, 185, 129, 0.3);\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.04), transparent);\n}\n\n.student-voices-card h4 {\n  color: var(--ink-secondary);\n  font-size: 13px;\n  line-height: 2;\n}\n\n/* ==========================================================================\n   Trust Bar & Guarantee Section\n   ========================================================================== */\n\n.edu-trust-bar {\n  max-width: 1320px;\n  margin: 30px auto 10px;\n  padding: 0 18px;\n}\n\n.edu-trust-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.edu-trust-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 18px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  box-shadow: 0 6px 20px rgba(99, 63, 163, 0.04);\n}\n\n.edu-trust-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.edu-trust-icon.purple {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.edu-trust-icon.emerald {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.edu-trust-icon.amber {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.edu-trust-icon.rose {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.edu-trust-item strong {\n  display: block;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 3px;\n}\n\n.edu-trust-item p {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.7;\n  color: var(--muted);\n}\n\n/* ==========================================================================\n   Teacher Educational Footer\n   ========================================================================== */\n\n.learning-footer {\n  background: var(--catalog-surface, #ffffff);\n  border-top: 1px solid var(--border-soft);\n  margin-top: 40px;\n  padding: 50px 0 24px;\n  color: var(--ink);\n}\n\n.page-container {\n  width: min(1320px, 100% - 48px);\n  margin-inline: auto;\n}\n\n.footer-top {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1.3fr;\n  gap: 36px;\n  padding-bottom: 36px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.footer-brand-col .brand {\n  margin-bottom: 12px;\n}\n\n.footer-desc {\n  font-size: 13px;\n  line-height: 2;\n  color: var(--muted);\n  margin-bottom: 16px;\n}\n\n.footer-domain-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--purple-light);\n  color: var(--purple-dark);\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.footer-links-col h4,\n.footer-trust-col h4 {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0 0 16px;\n}\n\n.footer-links-col nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.footer-links-col nav a {\n  color: var(--ink-secondary);\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.18s ease;\n}\n\n.footer-links-col nav a:hover {\n  color: var(--purple);\n}\n\n.trust-seals-row {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.seal-img {\n  width: 72px;\n  height: 72px;\n  object-fit: contain;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n\n.trust-channels-label {\n  display: block;\n  font-size: 12px;\n  color: var(--muted);\n  margin-bottom: 8px;\n}\n\n.trust-channels-links {\n  display: flex;\n  gap: 10px;\n}\n\n.trust-channels-links a {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.trust-channels-links a:hover {\n  background: var(--catalog-action, var(--purple));\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n\n.footer-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 20px;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.footer-heart {\n  color: var(--rose);\n}\n\n/* ==========================================================================\n   Responsive Adaptations\n   ========================================================================== */\n\n@media (max-width: 992px) {\n  .nav-shell {\n    padding: 10px 16px;\n    min-height: 68px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .edu-trust-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .footer-top {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n\n  .course-sidebar {\n    position: static;\n  }\n}\n\n@media (max-width: 600px) {\n  .course-page {\n    padding: 14px 0 60px;\n  }\n\n  .course-grid {\n    width: calc(100% - 16px);\n  }\n\n  .course-layout {\n    margin: 0;\n  }\n\n  .course-main {\n    padding: 0;\n  }\n\n  .course-highlights {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .edu-trust-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .footer-bottom {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore, :host-context(.dark-theme) ::ng-deep .readLess {\n  color: var(--ink-secondary) !important;\n  background-color: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore :where(p, span, div, li, strong, b, em, i, font, td, th), :host-context(.dark-theme) ::ng-deep .readLess :where(p, span, div, li, strong, b, em, i, font, td, th) {\n  color: var(--ink-secondary) !important;\n  background: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore :where(h1, h2, h3, h4, h5, h6), :host-context(.dark-theme) ::ng-deep .readLess :where(h1, h2, h3, h4, h5, h6) {\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore a, :host-context(.dark-theme) ::ng-deep .readLess a {\n  color: var(--purple) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore blockquote, :host-context(.dark-theme) ::ng-deep .readMore pre, :host-context(.dark-theme) ::ng-deep .readMore code, :host-context(.dark-theme) ::ng-deep .readLess blockquote, :host-context(.dark-theme) ::ng-deep .readLess pre, :host-context(.dark-theme) ::ng-deep .readLess code {\n  background: var(--catalog-soft) !important;\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore table, :host-context(.dark-theme) ::ng-deep .readMore td, :host-context(.dark-theme) ::ng-deep .readMore th, :host-context(.dark-theme) ::ng-deep .readLess table, :host-context(.dark-theme) ::ng-deep .readLess td, :host-context(.dark-theme) ::ng-deep .readLess th {\n  border-color: var(--border-soft) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1ieS1pZC5jb21wb25lbnQuc2NzcyIsIi4uXFxfY2F0YWxvZy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUVBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUVBQUE7QUFIRjs7QUFNQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTs7K0VBQUE7O0FBR0E7RUFDRSxpRUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFIRjs7QUFLQTtFQUEwQixhQUFBO0FBRDFCOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUF1QixtQkFBQTtBQUd2Qjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQU9GOztBQUxBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQVFGOztBQU5BO0VBQ0Usb0JBQUE7RUFDQSwrQkFBQTtBQVNGOztBQVBBO0VBQ0Usb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBV0Y7O0FBVEE7RUFDRTtJQUFXLG1CQUFBO0lBQXFCLFVBQUE7RUFjaEM7RUFiQTtJQUFNLHFCQUFBO0lBQXVCLFlBQUE7RUFpQjdCO0FBQ0Y7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFpQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFpQkY7O0FBZkE7RUFDRSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQW1CRjs7QUFqQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHNHQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBb0JGOztBQWxCQTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUFxQkY7O0FBbEJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQXVCRjs7QUFyQkE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBd0JGOztBQXRCQTtFQUNFLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXlCRjs7QUF2QkE7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBMEJGOztBQXZCQTs7K0VBQUE7O0FBR0E7RUFDRSxpRUFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQTBCRjs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBMkJGOztBQXpCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTRCRjs7QUExQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBNkJGOztBQTNCQTtFQUNFLG9CQUFBO0FBOEJGOztBQTVCQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUErQkY7O0FBN0JBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZ0NGOztBQTlCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQ0FBQTtBQWlDRjs7QUEvQkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFrQ0Y7O0FBL0JBOzsrRUFBQTs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRMQUNFO0FBaUNKOztBQTVCQTtFQUNFLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUErQkY7O0FBNUJBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBK0JGOztBQTVCQTs7RUFFRSxhQUFBO0FBK0JGOztBQTVCQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQStCRjs7QUE1QkE7OytFQUFBOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7QUErQkY7O0FBNUJBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4RUFBQTtFQUNBLDJDQUFBO0FBK0JGOztBQTVCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtEQUFBO0FBK0JGOztBQTVCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBK0JGOztBQTVCQTs7O0VBR0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBK0JGOztBQTVCQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUErQkY7O0FBNUJBOzsrRUFBQTs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQStCRjs7QUE3QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0RBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFpQ0Y7O0FBL0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSxtRkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBbUNGOztBQWhDQTs7K0VBQUE7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsK0VBQUE7QUFvQ0Y7O0FBakNBO0VBQ0UsdUJBQUE7RUFDQSx1RkFBQTtFQUNBLDJDQUFBO0FBb0NGOztBQWxDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBcUNGOztBQWxDQTtFQUNFLHVCQUFBO0FBcUNGOztBQW5DQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQXNDRjs7QUFwQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQXVDRjs7QUFyQ0E7RUFDRSxnQkFBQTtBQXdDRjs7QUFyQ0E7RUFDRSxvRkFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUF3Q0Y7O0FBdENBO0VBQ0UsMkJBQUE7QUF5Q0Y7O0FBdENBOzsrRUFBQTs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUF5Q0Y7O0FBdkNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0FBMENGOztBQXZDQTtFQUNFLDZEQUFBO0VBQ0EsOEVBQUE7QUEwQ0Y7O0FBdkNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTBDRjs7QUF4Q0E7RUFDRSw0QkFBQTtBQTJDRjs7QUF4Q0E7RUFDRSxrQkFBQTtFQUNBLHdEQUFBO0FBMkNGOztBQXhDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsOENBQUE7QUEyQ0Y7O0FBekNBO0VBQ0UsbUJBQUE7QUE0Q0Y7O0FBekNBOztFQUVFLFVBQUE7RUFDQSxTQUFBO0FBNENGOztBQTFDQTtFQUFtQyxXQUFBO0FBOENuQzs7QUE3Q0E7RUFBa0MsVUFBQTtBQWlEbEM7O0FBL0NBOztFQUVFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQWtERjs7QUEvQ0E7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQWtERjs7QUEvQ0E7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWtERjs7QUEvQ0EsZ0NBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFrREY7O0FBL0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FBa0RGOztBQWhEQTtFQUNFLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSw4Q0FBQTtBQW1ERjs7QUFqREE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFvREY7O0FBbERBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBcURGOztBQW5EQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFzREY7O0FBbkRBOztFQUVFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUFzREY7O0FBcERBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUF1REY7O0FBckRBO0VBQ0UsbUJBQUE7QUF3REY7O0FBckRBOzs7O0VBSUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF3REY7O0FBdERBOztFQUVFLDJCQUFBO0VBQ0EsbUJBQUE7QUF5REY7O0FBdERBOzsrRUFBQTs7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUF5REY7O0FBdkRBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtFQUFBO0FBMERGOztBQXZEQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTBERjs7QUF4REE7RUFDRSxxQ0FBQTtFQUNBLGdDQUFBO0FBMkRGOztBQXpEQTtFQUNFLHNDQUFBO0VBQ0EsK0JBQUE7QUE0REY7O0FBMURBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQTZERjs7QUEzREE7RUFBNEMsMEJBQUE7QUErRDVDOztBQTlEQTtFQUE2QyxvQkFBQTtBQWtFN0M7O0FBaEVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBbUVGOztBQWpFQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW9FRjs7QUFqRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBb0VGOztBQWxFQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtBQXFFRjs7QUFsRUE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQXFFRjs7QUFuRUE7RUFDRSxvQ0FBQTtBQXNFRjs7QUFuRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFzRUY7O0FBcEVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQXVFRjs7QUFwRUE7OytFQUFBOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBFQUFBO0FBdUVGOztBQXJFQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF3RUY7O0FBckVBOzsrRUFBQTs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBd0VGOztBQXRFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7QUF5RUY7O0FBdkVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQTBFRjs7QUF4RUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTJFRjs7QUF6RUE7RUFBeUIsK0JBQUE7RUFBaUMsb0JBQUE7QUE4RTFEOztBQTdFQTtFQUEwQixnQ0FBQTtFQUFrQywwQkFBQTtBQWtGNUQ7O0FBakZBO0VBQXdCLDhCQUFBO0VBQWdDLHdCQUFBO0FBc0Z4RDs7QUFyRkE7RUFBdUIsNkJBQUE7RUFBK0Isa0JBQUE7QUEwRnREOztBQXhGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMkZGOztBQXpGQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTRGRjs7QUF6RkE7OytFQUFBOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQTRGRjs7QUExRkE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FBNkZGOztBQTNGQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0FBOEZGOztBQTVGQTtFQUEyQixtQkFBQTtBQWdHM0I7O0FBL0ZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBa0dGOztBQWhHQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFtR0Y7O0FBakdBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFvR0Y7O0FBbEdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXFHRjs7QUFuR0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFzR0Y7O0FBcEdBO0VBQ0Usb0JBQUE7QUF1R0Y7O0FBckdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBd0dGOztBQXRHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUF5R0Y7O0FBdkdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMEdGOztBQXhHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBMkdGOztBQXpHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQTRHRjs7QUExR0E7RUFDRSxnREFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQTZHRjs7QUEzR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE4R0Y7O0FBNUdBO0VBQ0Usa0JBQUE7QUErR0Y7O0FBNUdBOzsrRUFBQTs7QUFHQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtFQStHRjs7RUE3R0E7SUFBWSxhQUFBO0VBaUhaOztFQWhIQTtJQUNFLHFDQUFBO0VBbUhGOztFQWpIQTtJQUNFLDBCQUFBO0lBQ0EsU0FBQTtFQW9IRjs7RUFsSEE7SUFDRSxnQkFBQTtFQXFIRjtBQUNGOztBQWxIQTtFQUNFO0lBQ0Usb0JBQUE7RUFvSEY7O0VBbEhBO0lBQ0Usd0JBQUE7RUFxSEY7O0VBbkhBO0lBQ0UsU0FBQTtFQXNIRjs7RUFwSEE7SUFDRSxVQUFBO0VBdUhGOztFQXJIQTtJQUNFLGdEQUFBO0VBd0hGOztFQXRIQTtJQUNFLDBCQUFBO0VBeUhGOztFQXZIQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7RUEwSEY7QUFDRjs7QUM1bUNFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0VBQUE7RUFDQSxzQkFBQTtFQUNBLGlFQUFBO0VBQ0EseUJBQUE7RUFDQSwwRUFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FEOG1DSjs7QUM1bUNJO0VBQVMsb0JBQUE7QUQrbUNiOztBQzdtQ0k7RUFBYyw4QkFBQTtFQUFnQyxpQkFBQTtBRGluQ2xEOztBQ2huQ0k7RUFBTSw0QkFBQTtBRG1uQ1Y7O0FDbG5DSTtFQUEyQiwwQkFBQTtFQUE0QiwyQkFBQTtBRHNuQzNEOztBQ3JuQ0k7RUFBaUIsaUJBQUE7QUR3bkNyQjs7QUN2bkNJO0VBQW9CLG1CQUFBO0FEMG5DeEI7O0FDem5DSTtFQUVFLGdEQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBRDBuQ047O0FDeG5DSTtFQUEyQix1QkFBQTtBRDJuQy9COztBQzFuQ0k7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUQ0bkNOOztBQzFuQ0k7RUFBOEIsMEJBQUE7RUFBNEIsbUJBQUE7QUQ4bkM5RDs7QUM3bkNJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FEK25DTjs7QUM3bkNJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FEK25DTjs7QUM3bkNJO0VBQXFELHVDQUFBO0FEZ29DekQ7O0FDL25DSTtFQUE0Qix5Q0FBQTtBRGtvQ2hDOztBQzFuQ0k7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0FENm5DTjs7QUM1bkNNO0VBQ0Usc0NBQUE7RUFDQSxrQ0FBQTtBRDhuQ1I7O0FDNW5DTTtFQUFpQyw0QkFBQTtBRCtuQ3ZDOztBQzluQ007RUFBSSwrQkFBQTtBRGlvQ1Y7O0FDaG9DTTtFQUF3QiwwQ0FBQTtFQUE0Qyw0QkFBQTtBRG9vQzFFOztBQ25vQ007RUFBZ0IsMkNBQUE7QURzb0N0QiIsImZpbGUiOiJjb3Vyc2UtYnktaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9jYXRhbG9nLWRhcmsnIGFzIGNhdGFsb2c7XG5cbjpob3N0IHtcbiAgLS1pbms6ICMxZTFiNGI7XG4gIC0taW5rLXNlY29uZGFyeTogIzQ3NTU2OTtcbiAgLS1tdXRlZDogIzY0NzQ4YjtcbiAgLS1wdXJwbGU6ICM2ZDI4ZDk7XG4gIC0tcHVycGxlLWRhcms6ICM1ODFjODc7XG4gIC0tcHVycGxlLWxpZ2h0OiAjZWRlOWZlO1xuICAtLXB1cnBsZS1nbG93OiByZ2JhKDEwOSwgNDAsIDIxNywgMC4yKTtcbiAgLS1hbWJlcjogI2Y1OWUwYjtcbiAgLS1hbWJlci1kYXJrOiAjZDk3NzA2O1xuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xuICAtLWVtZXJhbGQ6ICMxMGI5ODE7XG4gIC0tZW1lcmFsZC1kYXJrOiAjMDU5NjY5O1xuICAtLWVtZXJhbGQtbGlnaHQ6ICNkMWZhZTU7XG4gIC0tcm9zZTogI2Y0M2Y1ZTtcbiAgLS1yb3NlLWxpZ2h0OiAjZmZlNGU2O1xuICAtLXBhcGVyOiAjZmZmZmZmO1xuICAtLWJnLWNhbnZhczogI2ZjZmJmZTtcbiAgLS1ib3JkZXItc29mdDogI2VkZTlmNjtcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xuICAtLWNhcmQtc2hhZG93OiAwIDEycHggMzZweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA3KTtcblxuICAtLWNvdXJzZS1hY2NlbnQ6IHZhcigtLXB1cnBsZSk7XG4gIC0tY291cnNlLWFjY2VudC1yZ2I6IDEwOSwgNDAsIDIxNztcbiAgLS1jb3Vyc2Utc3VyZmFjZTogI2ZmZmZmZjtcbiAgLS1jb3Vyc2UtdGV4dDogdmFyKC0taW5rKTtcbiAgLS1jb3Vyc2UtbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb3Vyc2UtYm9yZGVyOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gIC0tY291cnNlLXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIFwiU2hhYm5hbS1NZWRpdW1cIiwgc2Fucy1zZXJpZik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlYWRlciAmIE5hdmlnYXRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubGVhcm5pbmctaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45NCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmxlYXJuaW5nLWhlYWRlcjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XG5cbi5uYXYtc2hlbGwge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBtaW4taGVpZ2h0OiA3NnB4O1xufVxuXG4uYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXNocmluazogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJyYW5kLWxvZ28td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnJhbmQtbG9nby13cmFwIGltZyB7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cbi5icmFuZC1zcGFya2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XG4gIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5icmFuZC10aXRsZXMgYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmJyYW5kLXRpdGxlcyBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1haW4tbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleDogMTtcbn1cbi5tYWluLW5hdiBhLCAubmF2LWxpbmstYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5tYWluLW5hdiBhOmhvdmVyLCAubmF2LWxpbmstYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG59XG4ubWFpbi1uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5waWxsLWRvdCB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogcHVsc2UtZG90IDJzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwdWxzZS1kb3Qge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyBvcGFjaXR5OiAwLjY7IH1cbn1cblxuLm5hdi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNhYzg4ZjIpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi5jYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGluc2V0LWlubGluZS1lbmQ6IC00cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctZGFuZ2VyLCB2YXIoLS1yb3NlKSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZik7XG59XG4ubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudCwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlKSwgdmFyKC0tcHVycGxlLWRhcmspKSk7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDlweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHZhcigtLXB1cnBsZS1nbG93KTtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4IDE2cHg7XG59XG4uc2VhcmNoLWlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA4KTtcbn1cbi5zZWFyY2gtaW5wdXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNlYXJjaC1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuLnNlYXJjaC1pbnB1dC1ncm91cCAuYnV0dG9uLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbiwgdmFyKC0tcHVycGxlKSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWFyY2gtaW5wdXQtZ3JvdXAgLmJ1dHRvbi5zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCcmVhZGNydW1iIEJhciAmIEdyYWRlIFRhZ1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5lZHUtYnJlYWRjcnVtYnMtYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44NSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5lZHUtYnJlYWRjcnVtYnMtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xufVxuLmVkdS1icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZWR1LWJyZWFkY3J1bWJzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xufVxuLmVkdS1icmVhZGNydW1icyBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG59XG4uZWR1LXNlcCB7XG4gIGNvbG9yOiB2YXIoLS1jYXRhbG9nLW11dGVkLCAjY2JkNWUxKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5lZHUtY3VycmVudCB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXgtd2lkdGg6IDM4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5lZHUtZ3JhZGUtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjE1KTtcbn1cbi5zcGFya2xlLWljb24ge1xuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb3Vyc2UgTWFpbiBDb250YWluZXJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY291cnNlLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBwYWRkaW5nOiAyOHB4IDAgNjBweDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgMiUsIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA3KSwgdHJhbnNwYXJlbnQgMzByZW0pLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOCUgMjYlLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wNiksIHRyYW5zcGFyZW50IDI4cmVtKSxcbiAgICB2YXIoLS1iZy1jYW52YXMpO1xufVxuXG4uY291cnNlLWdyaWQge1xuICB3aWR0aDogbWluKDEzMjBweCwgY2FsYygxMDAlIC0gMzZweCkpO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvdXJzZS1sYXlvdXQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIC0xMnB4O1xufVxuXG4uY291cnNlLXNpZGViYXIsXG4uY291cnNlLW1haW4ge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4uY291cnNlLXNpZGViYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDkwcHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDYXJkcyBHZW5lcmFsIFN0eWxpbmdcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5pb24tY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyW2NvbG9yPSdwcmltYXJ5J10ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE4cHggMjJweCAxNHB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuXG5pb24tY2FyZC1oZWFkZXJbY29sb3I9J3ByaW1hcnknXTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICBib3R0b206IC0xcHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wdXJwbGUpLCB2YXIoLS1hbWJlcikpO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQsXG5pb24tbGlzdCxcbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG5pb24taXRlbSB7XG4gIC0tY29sb3I6IHZhcigtLWluayk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBUZWFjaGVyIENhcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udGVhY2hlci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbn1cbi50ZWFjaGVyLWNhcmQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXB1cnBsZSksIHZhcigtLWFtYmVyKSk7XG59XG4udGVhY2hlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcbn1cbi50ZWFjaGVyLWNhcmQgLmF2YXRhciB7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMiksIDAgMTBweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjE0KTtcbn1cbi50ZWFjaGVyLWNhcmQgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFB1cmNoYXNlIENhcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucHVyY2hhc2UtY2FyZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xNik7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wdXJjaGFzZS1jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1lbWVyYWxkKSwgdmFyKC0tcHVycGxlKSwgdmFyKC0tYW1iZXIpKTtcbn1cblxuLnB1cmNoYXNlLWNhcmQgPiBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wNCkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuLnB1cmNoYXNlLWNhcmQgPiBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuXG4ucHVyY2hhc2UtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweCAxOHB4IDIycHg7XG59XG4ucHVyY2hhc2UtY2FyZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnB1cmNoYXNlLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWljb25bc2xvdD0nZW5kJ10ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHVyY2hhc2UtY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wdXJjaGFzZS1jYXJkIC5wcmltYXJ5LWJ1eS1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYnV5LWdyYWRpZW50LCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgLS1ib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgbWluLWhlaWdodDogNTJweDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xufVxuLnB1cmNoYXNlLWNhcmQgLnByaW1hcnktYnV5LWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIENvdXJzZSBPdmVydmlldyBDYXJkIChIZXJvKVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbn1cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZDo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDglO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAyOHB4IDAgMDtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHZhcigtLXB1cnBsZSkpO1xufVxuXG4uY291cnNlLW92ZXJ2aWV3LWNhcmQgPiBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiBjbGFtcCgyMnB4LCAzLjV2dywgMzZweCkgY2xhbXAoMjBweCwgNHZ3LCA0NHB4KSAxNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNiksIHRyYW5zcGFyZW50IDUwJSk7XG59XG5cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCBoMSB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1zaXplOiBjbGFtcCgyM3B4LCAzLjV2dywgMzZweCk7XG4gIGZvbnQtd2VpZ2h0OiA5NTA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG4uY291cnNlLW92ZXJ2aWV3LWNhcmQgLmxpbmsge1xuICBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50O1xufVxuXG4uY291cnNlLW92ZXJ2aWV3LWNhcmQgPiBzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIGNsYW1wKDE4cHgsIDR2dywgNDRweCkgY2xhbXAoMjRweCwgNHZ3LCA0NHB4KTtcbn1cblxuLmNvdXJzZS1vdmVydmlldy1jYXJkIC5jLWEtaW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODYwcHg7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICBtYXgtaGVpZ2h0OiA0ODBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQsICNmOGZhZmMpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDYpO1xufVxuLmNvdXJzZS1vdmVydmlldy1jYXJkIC5jLWEtaW1hZ2VzOjpwYXJ0KGltYWdlKSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAudG9wLXJpZ2h0LFxuLmNvdXJzZS1vdmVydmlldy1jYXJkIC50b3AtbGVmdCB7XG4gIHotaW5kZXg6IDQ7XG4gIHRvcDogMTZweDtcbn1cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAudG9wLXJpZ2h0IHsgcmlnaHQ6IDE2cHg7IH1cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAudG9wLWxlZnQgeyBsZWZ0OiAxNnB4OyB9XG5cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAudG9wLXJpZ2h0IGlvbi1iYWRnZSxcbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAudG9wLWxlZnQgaW9uLWJhZGdlIHtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmNvdXJzZS1vdmVydmlldy1jYXJkIGgyIHtcbiAgbWFyZ2luLXRvcDogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAyLjV2dywgMjZweCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5jb3Vyc2Utb3ZlcnZpZXctY2FyZCAuZm9udC1zbWFsbCB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdmFyKC0tcHVycGxlKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAwIDAgMTRweDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi8qIEVkdWNhdGlvbmFsIEhpZ2hsaWdodCBDaGlwcyAqL1xuLmNvdXJzZS1oaWdobGlnaHRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbjogMjJweCAwIDEycHg7XG59XG5cbi5jb3Vyc2UtaGlnaGxpZ2h0cyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWluLWhlaWdodDogMTA0cHg7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5jb3Vyc2UtaGlnaGxpZ2h0cyA+IGRpdjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwOSwgNDAsIDIxNywgMC4zKTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA4KTtcbn1cbi5jb3Vyc2UtaGlnaGxpZ2h0cyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4uY291cnNlLWhpZ2hsaWdodHMgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5jb3Vyc2UtaGlnaGxpZ2h0cyBzdHJvbmcge1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogODAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVhZE1vcmUsXG4ucmVhZExlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMi4zO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjQ1cyBlYXNlO1xufVxuLnJlYWRNb3JlIHtcbiAgbWF4LWhlaWdodDogMjIwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMCA2MCUsIHRyYW5zcGFyZW50IDEwMCUpO1xufVxuLnJlYWRMZXNzIHtcbiAgbWF4LWhlaWdodDogMTIwMDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTW9yZSBoMixcbjpob3N0IDo6bmctZGVlcCAucmVhZExlc3MgaDIsXG46aG9zdCA6Om5nLWRlZXAgLnJlYWRNb3JlIGgzLFxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTGVzcyBoMyB7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTW9yZSBwLFxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTGVzcyBwIHtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgU2Vzc2lvbnMgJiBDdXJyaWN1bHVtIENhcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY291cnNlLWNvbnRlbnQtY2FyZCB7XG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xufVxuLmNvdXJzZS1jb250ZW50LWNhcmQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXB1cnBsZSksIHZhcigtLWVtZXJhbGQpLCB2YXIoLS1hbWJlcikpO1xufVxuXG4uYWNjZXNzLWJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBtYXJnaW46IDE4cHggY2xhbXAoMTJweCwgM3Z3LCAyNHB4KSAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5hY2Nlc3MtYmFubmVyLm93bmVkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZC1saWdodCk7XG59XG4uYWNjZXNzLWJhbm5lci5sb2NrZWQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjI1KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi5hY2Nlc3MtYmFubmVyX19pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZmxleDogMCAwIDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLmFjY2Vzcy1iYW5uZXIub3duZWQgLmFjY2Vzcy1iYW5uZXJfX2ljb24geyBjb2xvcjogdmFyKC0tZW1lcmFsZC1kYXJrKTsgfVxuLmFjY2Vzcy1iYW5uZXIubG9ja2VkIC5hY2Nlc3MtYmFubmVyX19pY29uIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuLmFjY2Vzcy1iYW5uZXIgc3Ryb25nIHtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5hY2Nlc3MtYmFubmVyIHAge1xuICBtYXJnaW46IDNweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG4uY291cnNlLWNvbnRlbnQtY2FyZCBpb24tbGlzdCA+IGRpdiA+IGlvbi1pdGVtW2J1dHRvbl0ge1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTRweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTJweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uY291cnNlLWNvbnRlbnQtY2FyZCBpb24tbGlzdCA+IGRpdiA+IGlvbi1pdGVtW2J1dHRvbl06aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5cbi5jb3Vyc2UtY29udGVudC1jYXJkIC5zbW9vdGgge1xuICBtYXJnaW46IC0ycHggNnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNnB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5jb3Vyc2UtY29udGVudC1jYXJkIC5zbW9vdGggaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpO1xufVxuXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBTdHVkZW50IC8gVGVhY2hlciBWb2ljZXMgQXVkaW9cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc3R1ZGVudC12b2ljZXMtY2FyZCB7XG4gIHBhZGRpbmc6IDE0cHggMThweCAyMnB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4wNCksIHRyYW5zcGFyZW50KTtcbn1cbi5zdHVkZW50LXZvaWNlcy1jYXJkIGg0IHtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVHJ1c3QgQmFyICYgR3VhcmFudGVlIFNlY3Rpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uZWR1LXRydXN0LWJhciB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAxMHB4O1xuICBwYWRkaW5nOiAwIDE4cHg7XG59XG4uZWR1LXRydXN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDE2cHg7XG59XG4uZWR1LXRydXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNCk7XG59XG4uZWR1LXRydXN0LWljb24ge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5lZHUtdHJ1c3QtaWNvbi5wdXJwbGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpOyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuLmVkdS10cnVzdC1pY29uLmVtZXJhbGQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTsgY29sb3I6IHZhcigtLWVtZXJhbGQtZGFyayk7IH1cbi5lZHUtdHJ1c3QtaWNvbi5hbWJlciB7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTsgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspOyB9XG4uZWR1LXRydXN0LWljb24ucm9zZSB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLmVkdS10cnVzdC1pdGVtIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uZWR1LXRydXN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgVGVhY2hlciBFZHVjYXRpb25hbCBGb290ZXJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubGVhcm5pbmctZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZzogNTBweCAwIDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuLnBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IG1pbigxMzIwcHgsIGNhbGMoMTAwJSAtIDQ4cHgpKTtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cbi5mb290ZXItdG9wIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMS4zZnI7XG4gIGdhcDogMzZweDtcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG59XG4uZm9vdGVyLWJyYW5kLWNvbCAuYnJhbmQgeyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4uZm9vdGVyLWRlc2Mge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZvb3Rlci1kb21haW4tYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvb3Rlci1saW5rcy1jb2wgaDQsXG4uZm9vdGVyLXRydXN0LWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYgYSB7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMThzIGVhc2U7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuLnRydXN0LXNlYWxzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5zZWFsLWltZyB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4udHJ1c3QtY2hhbm5lbHMtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4udHJ1c3QtY2hhbm5lbHMtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG4udHJ1c3QtY2hhbm5lbHMtbGlua3MgYSB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4udHJ1c3QtY2hhbm5lbHMtbGlua3MgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYWN0aW9uLCB2YXIoLS1wdXJwbGUpKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5mb290ZXItYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cbi5mb290ZXItaGVhcnQge1xuICBjb2xvcjogdmFyKC0tcm9zZSk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBSZXNwb25zaXZlIEFkYXB0YXRpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uYXYtc2hlbGwge1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICBtaW4taGVpZ2h0OiA2OHB4O1xuICB9XG4gIC5tYWluLW5hdiB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLmVkdS10cnVzdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIC5mb290ZXItdG9wIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDI4cHg7XG4gIH1cbiAgLmNvdXJzZS1zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY291cnNlLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDE0cHggMCA2MHB4O1xuICB9XG4gIC5jb3Vyc2UtZ3JpZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICB9XG4gIC5jb3Vyc2UtbGF5b3V0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmNvdXJzZS1tYWluIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5jb3Vyc2UtaGlnaGxpZ2h0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG4gIC5lZHUtdHJ1c3QtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmZvb3Rlci1ib3R0b20ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbkBpbmNsdWRlIGNhdGFsb2cuZGFyay1tb2RlO1xuQGluY2x1ZGUgY2F0YWxvZy5yaWNoLXRleHQoJy5yZWFkTW9yZSwgLnJlYWRMZXNzJyk7XG4iLCIvLyBQYWdlLWxvY2FsIGNhdGFsb2cgcGFsZXR0ZS4gSW1wb3J0ZWQgb25seSBieSBjb3Vyc2UvcHJvZHVjdC9hcnRpY2xlL3NlYXJjaCByb3V0ZXMuXG4vLyBGYWxsYmFja3MgaW4gdGhlIGNvbnN1bWluZyBzdHlsZXMgcHJlc2VydmUgZXZlcnkgb3JpZ2luYWwgbGlnaHQtbW9kZSBjb2xvci5cbkBtaXhpbiBkYXJrLW1vZGUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlOiAjMjExYzMyO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlLXJnYjogMzMsIDI4LCA1MDtcbiAgICAtLWNhdGFsb2ctc29mdDogIzI5MjMzZDtcbiAgICAtLWNhdGFsb2ctaG92ZXI6ICMzNDJjNDk7XG4gICAgLS1jYXRhbG9nLWJvcmRlcjogIzRiNDE2NDtcbiAgICAtLWNhdGFsb2ctdGV4dDogI2YyZWVmYjtcbiAgICAtLWNhdGFsb2ctc2Vjb25kYXJ5OiAjZDBjOGUyO1xuICAgIC0tY2F0YWxvZy1tdXRlZDogI2IxYTZjNjtcbiAgICAtLWNhdGFsb2ctcHVycGxlLXNvZnQ6ICMzMDIzNDc7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1ob3ZlcjogIzNkMmQ1ODtcbiAgICAtLWNhdGFsb2ctYW1iZXItc29mdDogIzNiMmQxODtcbiAgICAtLWNhdGFsb2ctZW1lcmFsZC1zb2Z0OiAjMTgzNzJlO1xuICAgIC0tY2F0YWxvZy1yb3NlLXNvZnQ6ICM0MDIzMzQ7XG4gICAgLS1jYXRhbG9nLXNreS1zb2Z0OiAjMTkzMzQ2O1xuICAgIC0tY2F0YWxvZy1wdXJwbGU6ICNjNGI1ZmQ7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQ6ICM2ZWU3Yjc7XG4gICAgLS1jYXRhbG9nLXNreTogIzdkZDNmYztcbiAgICAtLWNhdGFsb2ctc2t5LWFjdGlvbjogIzAzNjlhMTtcbiAgICAtLWNhdGFsb2ctYWN0aW9uOiAjN2MzYWVkO1xuICAgIC0tY2F0YWxvZy1hY3Rpb24taG92ZXI6ICM2ZDI4ZDk7XG4gICAgLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzViMjFiNik7XG4gICAgLS1jYXRhbG9nLWJ1eTogIzA0Nzg1NztcbiAgICAtLWNhdGFsb2ctYnV5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDQ3ODU3LCAjMDY1ZjQ2KTtcbiAgICAtLWNhdGFsb2ctZGFuZ2VyOiAjYmUxMjNjO1xuICAgIC0tY2F0YWxvZy1hbWJlci1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5MjQwMGUsICM3ODM1MGYpO1xuICAgIC0taW5rOiB2YXIoLS1jYXRhbG9nLXRleHQpO1xuICAgIC0taW5rLXNlY29uZGFyeTogdmFyKC0tY2F0YWxvZy1zZWNvbmRhcnkpO1xuICAgIC0tbXV0ZWQ6IHZhcigtLWNhdGFsb2ctbXV0ZWQpO1xuICAgIC0tcHVycGxlOiB2YXIoLS1jYXRhbG9nLXB1cnBsZSk7XG4gICAgLS1wdXJwbGUtZGFyazogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0KTtcbiAgICAtLXB1cnBsZS1nbG93OiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMTQpO1xuICAgIC0tYW1iZXI6ICNmYmJmMjQ7XG4gICAgLS1hbWJlci1kYXJrOiAjZmNkMzRkO1xuICAgIC0tYW1iZXItbGlnaHQ6IHZhcigtLWNhdGFsb2ctYW1iZXItc29mdCk7XG4gICAgLS1hbWJlci1nbG93OiByZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKTtcbiAgICAtLWVtZXJhbGQ6ICMzNGQzOTk7XG4gICAgLS1lbWVyYWxkLWRhcms6IHZhcigtLWNhdGFsb2ctZW1lcmFsZCk7XG4gICAgLS1lbWVyYWxkLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQtc29mdCk7XG4gICAgLS1yb3NlOiAjZmRhNGFmO1xuICAgIC0tcm9zZS1saWdodDogdmFyKC0tY2F0YWxvZy1yb3NlLXNvZnQpO1xuICAgIC0tc2t5OiB2YXIoLS1jYXRhbG9nLXNreSk7XG4gICAgLS1za3ktbGlnaHQ6IHZhcigtLWNhdGFsb2ctc2t5LXNvZnQpO1xuICAgIC0tcGFwZXI6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1iZy1jYW52YXM6ICMxNDEwMjA7XG4gICAgLS1ib3JkZXItc29mdDogdmFyKC0tY2F0YWxvZy1ib3JkZXIpO1xuICAgIC0tY2FyZC1iZzogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLWNhcmQtc2hhZG93OiAwIDEycHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIC0tY291cnNlLXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1wcm9kdWN0LXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jb3Vyc2UtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLXByb2R1Y3QtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWluayk7XG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgY29sb3I6IHZhcigtLWluayk7XG5cbiAgICAuYnJhbmQgeyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgLmJnIHsgYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTsgfVxuICAgIGlvbi1jYXJkOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSB7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gICAgaW9uLWNhcmQtaGVhZGVyW2NvbG9yPSdwcmltYXJ5J10ge1xuICAgICAgLy8gSW9uaWMncyAuaW9uLWNvbG9yLXByaW1hcnkgZGVjbGFyZXMgdGhlc2UgdG9rZW5zIHdpdGggIWltcG9ydGFudC5cbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWNhdGFsb2ctc29mdCkgIWltcG9ydGFudDtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICB9XG4gICAgaW9uLWxpc3Q6bm90KC5pb24tY29sb3IpIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICBpb24taXRlbTpub3QoLmlvbi1jb2xvcikge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IC0tY29sb3I6IHZhcigtLWluayk7IH1cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2xpZ2h0J10sIGlvbi1sYWJlbFtjb2xvcj0nZGFya2VyJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICBpb24tbGFiZWxbY29sb3I9J21lZGl1bSddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tbXV0ZWQpICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuXG4vLyBBbmd1bGFyIGRvZXMgbm90IGF0dGFjaCBlbmNhcHN1bGF0aW9uIGF0dHJpYnV0ZXMgdG8gY29udGVudCBpbnNlcnRlZCBieSBpbm5lckhUTUwuXG4vLyBLZWVwIGRlZXAgcnVsZXMgYW5jaG9yZWQgdG8gZWFjaCBwYWdlJ3Mgb3duIGRlc2NyaXB0aW9uIGNvbnRhaW5lci5cbkBtaXhpbiByaWNoLXRleHQoJGNvbnRhaW5lcikge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAge1xuICAgICN7JGNvbnRhaW5lcn0ge1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgOndoZXJlKHAsIHNwYW4sIGRpdiwgbGksIHN0cm9uZywgYiwgZW0sIGksIGZvbnQsIHRkLCB0aCkge1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2KSB7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIGEgeyBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50OyB9XG4gICAgICBibG9ja3F1b3RlLCBwcmUsIGNvZGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIHRhYmxlLCB0ZCwgdGggeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KSAhaW1wb3J0YW50OyB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 913:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/course/course-by-id/course-by-id.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.course/course-by-id/course-by-id\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"icon-button search-toggle\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو در سامانه\">\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\n      </button>\n</div>\n\n<form class=\"header-search\" *ngIf=\"showSearchbar\" (ngSubmit)=\"search()\">\n    <div class=\"search-input-group\">\n      <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\n      <input name=\"queryText\" [(ngModel)]=\"queryText\" placeholder=\"جستجو میان دوره‌های آموزشی، روش تدریس و مهارت‌های معلمان...\" type=\"search\" autofocus />\n      <button class=\"button primary\" type=\"submit\">جستجو</button>\n      <button class=\"button secondary close-search\" type=\"button\" (click)=\"showSearchbar = false\">بستن</button>\n    </div>\n  </form>\n  </app-page-header>\n</ion-header>\n\n<ion-content [attr.dir]=\"language.direction\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Educational Breadcrumb Bar -->\n  <div class=\"edu-breadcrumbs-bar\">\n    <div class=\"page-container edu-breadcrumbs-inner\">\n      <nav class=\"edu-breadcrumbs\" aria-label=\"مسیر راهنما\">\n        <a [routerLink]=\"url('/Home')\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n          <span>خانه</span>\n        </a>\n        <span class=\"edu-sep\">‹</span>\n        <a [routerLink]=\"url('/Course')\">\n          <span>دوره‌های آموزشی معلمان</span>\n        </a>\n        <span class=\"edu-sep\" *ngIf=\"course\">‹</span>\n        <span class=\"edu-current\" *ngIf=\"course\">{{ course.name }}</span>\n      </nav>\n      <div class=\"edu-grade-pill\">\n        <span class=\"sparkle-icon\">✦</span>\n        <span>کارگاه‌ها و دوره‌های توانمندسازی معلمان ابتدایی</span>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!isLoading\" class=\"bg course-page\">\n    <ion-grid *ngIf=\"course\" class=\"course-grid\">\n      <ion-row>\n        <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\">\n          <ion-row dir=\"rtl\" class=\"course-layout\">\n            <ion-col\n              size=\"12\"\n              offset=\"0\"\n              size-lg=\"4\"\n              offset-lg=\"0\"\n              *ngIf=\"windowWidth > 600\"\n              class=\"course-sidebar\"\n            >\n              <ion-card *ngIf=\"course.teacherUser\" class=\"teacher-card\">\n                <ion-card-header class=\"text-center\" color=\"primary\">\n                  مشخصات مدرس\n                </ion-card-header>\n                <ion-card-content class=\"text-center ion-margin-top\">\n                  <ion-avatar class=\"text-center avatar\">\n                    <img\n                      [src]=\"course.teacherUser.userAvatarAddress\"\n                      [alt]=\"course.teacherUser.resume\"\n                      [title]=\"getTeacherName()\"\n                    />\n                  </ion-avatar>\n                  <br />\n                  <p class=\"description\">\n                    {{ course.teacherUser.resume + \" \" }}\n                    <a\n                      *ngIf=\"false\"\n                      class=\"decoration-none\"\n                      routerLink=\"{{ '/Teachers/' + course.teacherUser.id }}\"\n                      ><ion-text color=\"success\" class=\"link\">\n                        (رزومه)\n                      </ion-text></a\n                    >\n                  </p>\n                  <ion-item\n                    *ngIf=\"course.teacherUser && course.teacherUser.isRested\"\n                  >\n                    <ion-label class=\"text-center\">\n                      <ion-badge color=\"danger\" mode=\"md\"\n                        >مدرس در مرخصی میباشد</ion-badge\n                      >\n                    </ion-label>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n              <ion-card class=\"purchase-card\">\n                <ion-card-header color=\"primary\">\n                  <!-- <ion-card-subtitle\n                    class=\"text-center\"\n                    *ngIf=\"course.offPrice != 0\"\n                  >\n                    قیمت دوره:\n                    <ion-text color=\"danger\">\n                      <del>\n                        {{ course.price | rial }}\n                      </del>\n                    </ion-text>\n                  </ion-card-subtitle> -->\n                  <ion-card-title class=\"text-center\"\n                    >مشخصات دوره\n                    <!-- قیمت دوره:\n                    <ion-text\n                      color=\"{{\n                        course.offPrice == 0 || course.price == 0\n                          ? course.price == 0\n                            ? 'light'\n                            : 'success'\n                          : 'success'\n                      }}\"\n                    >\n                      {{\n                        course.offPrice == 0 || course.price == 0\n                          ? course.price == 0\n                            ? \"رایگان\"\n                            : (course.price | rial)\n                          : (course.offPrice | rial)\n                      }}\n                    </ion-text> -->\n                  </ion-card-title>\n                </ion-card-header>\n                <ion-card-content dir=\"rtl\">\n                  <ion-list>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>قیمت دوره: </ion-label>\n                      <ion-text color=\"danger\">\n                        <del>\n                          <h5>{{ course.price | rial }}</h5>\n                        </del>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>قیمت دوره: </ion-label>\n                      <ion-text\n                        color=\"{{\n                          course.offPrice === 0 || course.price === 0\n                            ? course.price === 0\n                              ? 'warning'\n                              : 'success'\n                            : 'success'\n                        }}\"\n                      >\n                        {{\n                          course.offPrice === 0 || course.price === 0\n                            ? course.price === 0\n                              ? \"رایگان\"\n                              : (course.price | rial)\n                            : (course.offPrice | rial)\n                        }}\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>میزان تخفیف: </ion-label>\n                      <ion-text color=\"warning\">\n                        <h5>{{ course.price - course.offPrice | rial }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>درصد تخفیف: </ion-label>\n                      <ion-text color=\"danger\">\n                        <h5>\n                          <ion-badge color=\"danger\" mode=\"md\">{{\n                            (\n                              ((course.price - course.offPrice) * 100) /\n                              course.price\n                            ).toFixed(1) + \"%\"\n                          }}</ion-badge>\n                        </h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"pricetags-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"isLimitShow\">\n                      <ion-label>{{ limitTitle + \": \" }} </ion-label>\n                      <ion-text color=\"danger\" *ngIf=\"!isLimitShow2\">\n                        <b>{{ limitDateToString }}</b>\n                      </ion-text>\n                      <ion-text color=\"danger\" *ngIf=\"isLimitShow2\">\n                        <b>اتمام یافت</b>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"hourglass-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>مدرس دوره: </ion-label>\n                      <ion-text color=\"warning\">\n                        <h5>{{ getTeacherName() }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"school-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>کد دوره:</ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ course.id }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.courseVideos\">\n                      <ion-label>تعداد ویدئو: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ course.courseVideos.length + 1 }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"videocam-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.viewCount\">\n                      <ion-label>تعداد بازدید: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ course.viewCount }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"eye-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.level\">\n                      <ion-label>سطح دوره: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ course.level }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"bar-chart-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>مدرک: </ion-label>\n                      <ion-text\n                        color=\"{{ course.hasDegree ? 'success' : 'warning' }}\"\n                      >\n                        <h5>{{ course.hasDegree ? \"دارد\" : \"ندارد\" }}</h5>\n                      </ion-text>\n                      <ion-icon\n                        *ngIf=\"course.hasDegree\"\n                        slot=\"end\"\n                        name=\"checkmark-circle-outline\"\n                      ></ion-icon>\n                      <ion-icon\n                        *ngIf=\"!course.hasDegree\"\n                        slot=\"end\"\n                        name=\"close-circle-outline\"\n                      ></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.hasDegree && course.freeExamCount\">\n                      <ion-label>تعداد آزمون رایگان: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ course.freeExamCount }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"dice-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>وضعیت دوره: </ion-label>\n                      <ion-text\n                        color=\"{{ course.isFinished ? 'success' : 'warning' }}\"\n                      >\n                        <h5>\n                          {{\n                            course.isFinished ? \"اتمام دوره\" : \"درحال برگزاری\"\n                          }}\n                        </h5>\n                      </ion-text>\n                      <ion-icon\n                        *ngIf=\"course.isFinished\"\n                        slot=\"end\"\n                        name=\"checkmark-done-circle-outline\"\n                      ></ion-icon>\n                      <ion-icon\n                        *ngIf=\"!course.isFinished\"\n                        slot=\"end\"\n                        name=\"reload-circle-outline\"\n                      ></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.createDate\">\n                      <ion-label>تاریخ ثبت دوره: </ion-label>\n                      <ion-text color=\"medium\">\n                        <h5>{{ course.createDate | persianDate }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.lastUpdateDate\">\n                      <ion-label>تاریخ بروزرسانی: </ion-label>\n                      <ion-text color=\"medium\">\n                        <h5>{{ course.lastUpdateDate | persianDate }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.videoTime && course.courseVideos\">\n                      <ion-label>مدت زمان دوره: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5>{{ totalVideoTime() }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"time-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.size && course.courseVideos\">\n                      <ion-label>حجم فایل ها: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5 dir=\"ltr\">{{ totalSize() }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"hourglass-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.price !== 0 && course.isBuy\">\n                      <ion-label>امتیاز دریافتی بعد از ثبت نام: </ion-label>\n                      <ion-text color=\"success\">\n                        <h5 dir=\"ltr\">{{ onGetCoursePoint() }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"ribbon-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.isStopped\">\n                      <ion-text color=\"danger\">\n                        <h5>{{ course.stoppedReason }}</h5>\n                      </ion-text>\n                      <ion-icon\n                        slot=\"end\"\n                        name=\"alert-circle-outline\"\n                      ></ion-icon>\n                    </ion-item>\n                  </ion-list>\n                  <div *ngIf=\"checkBuy && !isBuyLoading\">\n                    <ion-button\n                      *ngIf=\"checkBuy2 && !course.isStopped\"\n                      expand=\"block\"\n                      color=\"success\"\n                      shape=\"round\"\n                      class=\"primary-buy-button\"\n                      (click)=\"onBuy()\"\n                    >\n                      ثبت‌نام و شروع یادگیری\n                      <ion-icon slot=\"start\" name=\"rocket-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"!checkBuy2 && !course.isStopped && course.isBuy\"\n                      expand=\"block\"\n                      color=\"success\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                      (click)=\"onBought()\"\n                    >\n                      ورود به کلاس و مشاهده جلسات\n                      <ion-icon slot=\"start\" name=\"play-circle-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"course.isStopped\"\n                      expand=\"block\"\n                      color=\"danger\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                    >\n                      دوره متوقف شده\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"!course.isStopped && !course.isBuy\"\n                      expand=\"block\"\n                      color=\"warning\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                    >\n                      دوره فروشی نیست\n                    </ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n              <!-- <section *ngIf=\"course.courseImages && !course.isStopped\">\n                <ion-card *ngIf=\"course.courseImages.length > 0\">\n                  <ion-card-content>\n                    <ion-button\n                      (click)=\"onPhotoGallery()\"\n                      color=\"warning2\"\n                      expand=\"block\"\n                      fill=\"solid\"\n                      shape=\"round\"\n                    >\n                      گالری تصاویر\n                      <ion-icon slot=\"start\" name=\"images-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-card-content>\n                </ion-card>\n              </section> -->\n              <section *ngIf=\"windowWidth > 600\">\n                <ion-card>\n                  <ion-card-content>\n                    <div>\n                      <ion-button\n                        color=\"instagram\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        routerLink=\"{{ '/Questions/' + course.id }}\"\n                      >\n                        پرسش سوال در دوره\n                        <ion-icon slot=\"start\" name=\"help-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"course.hasDegree && !course.isStopped\">\n                  <ion-card-content>\n                    <div>\n                      <ion-button\n                        color=\"twitter\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        routerLink=\"{{ '/Exam/' + course.id }}\"\n                      >\n                        شرکت در آزمون دوره\n                        <ion-icon\n                          slot=\"start\"\n                          name=\"checkbox-outline\"\n                        ></ion-icon>\n                      </ion-button>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"isLikeShow() && isUserLikedLoading\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >درحال دریافت لایک</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content dir=\"ltr\">\n                    <div class=\"text-center\">\n                      <ion-spinner name=\"dots\"></ion-spinner>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card\n                  *ngIf=\"\n                    isLikeShow() &&\n                    course.userLiked != null &&\n                    !isUserLikedLoading\n                  \"\n                >\n                  <ion-card-header color=\"primary\">\n                    <!-- <ion-card-subtitle class=\"text-center\"\n                      >نظر شما اولویت ماست</ion-card-subtitle\n                    > -->\n                    <ion-card-title class=\"text-center\"\n                      >این دوره را میپسندید؟</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <div *ngIf=\"isLikeLoadingShow\" class=\"ion-margin-top\">\n                      <ion-grid dir=\"ltr\">\n                        <ion-row>\n                          <ion-col class=\"text-center full-width\">\n                            <ion-spinner\n                              class=\"full-width\"\n                              name=\"dots\"\n                            ></ion-spinner>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div *ngIf=\"!isLikeLoadingShow\" class=\"ion-margin-top\">\n                      <ion-button\n                        color=\"success\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        (click)=\"OnLike(true)\"\n                        *ngIf=\"!course.userLiked\"\n                      >\n                        میپسندم\n                        <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\n                      </ion-button>\n                      <ion-button\n                        color=\"danger\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                        shape=\"round\"\n                        (click)=\"OnLike(false)\"\n                        *ngIf=\"course.userLiked\"\n                      >\n                        نمی پسندم\n                        <ion-icon\n                          slot=\"start\"\n                          name=\"heart-dislike-outline\"\n                        ></ion-icon>\n                      </ion-button>\n                      <ion-item *ngIf=\"course.userLiked\">\n                        <ion-label color=\"warning\">پسندیده شد</ion-label>\n                        <ion-icon\n                          color=\"success\"\n                          slot=\"start\"\n                          name=\"heart\"\n                        ></ion-icon>\n                      </ion-item>\n                    </div>\n                    <div class=\"ion-margin-top\" *ngIf=\"!checkBuy2\">\n                      <ion-item>\n                        <ion-button\n                          color=\"success\"\n                          (click)=\"onRating()\"\n                          expand=\"block\"\n                          fill=\"clear\"\n                          shape=\"round\"\n                        >\n                          شرکت در نظر سنجی\n                        </ion-button>\n                        <ion-icon\n                          color=\"warning\"\n                          slot=\"start\"\n                          name=\"bulb-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card>\n                  <ion-card-header color=\"primary\" dir=\"rtl\">\n                    <ion-card-title class=\"text-center\"\n                      >به اشتراک گذاری</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content dir=\"rtl\" class=\"ion-margin-top\">\n                    <ion-item>\n                      <ion-buttons class=\"full-width\">\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            [href]=\"whatsappShare\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"success\"\n                              slot=\"icon-only\"\n                              name=\"logo-whatsapp\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://t.me/share/url?url=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"telegram\"\n                              slot=\"icon-only\"\n                              name=\"paper-plane-outline\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://www.facebook.com/sharer/sharer.php?u=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"facebook\"\n                              slot=\"icon-only\"\n                              name=\"logo-facebook\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://twitter.com/intent/tweet?url=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"twitter\"\n                              slot=\"icon-only\"\n                              name=\"logo-twitter\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                      </ion-buttons>\n                    </ion-item>\n                    <ion-list>\n                      <ion-item\n                        button\n                        title=\"avalamooz.ir/c/{{ course.id }}\"\n                        (click)=\"copyText('avalamooz.ir' + '/c/' + course.id)\"\n                      >\n                        <ion-label class=\"text-center\"\n                          >avalamooz.ir/c/{{ course.id }}</ion-label\n                        >\n                        <ion-icon\n                          class=\"ion-margin-start\"\n                          color=\"success\"\n                          slot=\"start\"\n                          name=\"link-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"links.length > 0\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >لینک های مفید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list>\n                      <ion-item\n                        [href]=\"link.url\"\n                        class=\"text-center\"\n                        *ngFor=\"let link of links\"\n                        [title]=\"link.name\"\n                      >\n                        <ion-label>{{ link.name }}</ion-label>\n                        <ion-icon\n                          color=\"secondary\"\n                          slot=\"start\"\n                          name=\"link-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n                <section *ngIf=\"courseCategores\">\n                  <ion-card *ngIf=\"courseCategores.length > 0\">\n                    <ion-card-header color=\"primary\">\n                      <ion-card-title class=\"text-center\"\n                        >گروه های دوره</ion-card-title\n                      >\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ion-list>\n                        <ion-item\n                          button\n                          [routerLink]=\"['/Home', 'Search']\"\n                          [queryParams]=\"{\n                            categoryIds: [category.id]\n                          }\"\n                          *ngFor=\"let category of courseCategores2\"\n                        >\n                          <ion-label title=\"{{ category.title }}\"\n                            >{{ category.title }}\n                          </ion-label>\n                        </ion-item>\n                      </ion-list>\n                    </ion-card-content>\n                  </ion-card>\n                </section>\n                <!-- <ion-card>\n                  <ion-card-header color=\"primary\">\n                    <ion-card-subtitle class=\"text-center\"\n                      >کلیک کنید کپی شود</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >لینک کوتاه</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-item\n                      button\n                      (click)=\"copyText('avalamooz.ir' + '/c/' + course.id)\"\n                    >\n                      <ion-label class=\"text-center\"\n                        >avalamooz.ir/c/{{ course.id }}</ion-label\n                      >\n                      <ion-icon\n                        color=\"success\"\n                        slot=\"start\"\n                        name=\"clipboard-outline\"\n                      ></ion-icon>\n                    </ion-item>\n                  </ion-card-content>\n                </ion-card> -->\n                <ion-card *ngIf=\"tags.length > 0\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >برچسب ها</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list>\n                      <ion-item\n                        href=\"{{ 'http://localhost:4300' + '/c/' + course.id }}\"\n                        class=\"text-center\"\n                        *ngFor=\"let tag of tags\"\n                        [title]=\"tag.name\"\n                      >\n                        <ion-label\n                          color=\"medium\"\n                          style=\"font-size: 12px !important\"\n                          >{{ tag.name }}</ion-label\n                        >\n                        <ion-icon\n                          color=\"instagram\"\n                          slot=\"start\"\n                          name=\"pricetag-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </section>\n            </ion-col>\n            <ion-col\n              size=\"12\"\n              offset=\"0\"\n              size-lg=\"8\"\n              offset-lg=\"0\"\n              *ngIf=\"isReportCourseMode\"\n              class=\"course-main\"\n            >\n              <section>\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle class=\"text-center\"\n                      >در صورت گزارش غلط اکانت شما مسدود خواهد\n                      شد</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >گزارش خود را وارد کنید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <form\n                      *ngIf=\"loggedIn\"\n                      [formGroup]=\"replyForm\"\n                      (ngSubmit)=\"presentAlertReportCourseConfirm()\"\n                    >\n                      <ion-item>\n                        <ion-label>دلیل گزارش:</ion-label>\n                        <ion-textarea\n                          rows=\"6\"\n                          auto-grow=\"true\"\n                          position=\"floating\"\n                          placeholder=\"دلیل گزارش خود را وارد کنید\"\n                          formControlName=\"comment\"\n                        ></ion-textarea>\n                      </ion-item>\n                      <ion-buttons slot=\"start\" class=\"ion-margin\">\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"warning2\"\n                          (click)=\"\n                            isReportCourseMode = false; replyForm.reset()\n                          \"\n                        >\n                          لغو\n                        </ion-button>\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"success\"\n                          type=\"submit\"\n                          [disabled]=\"replyForm.invalid\"\n                        >\n                          ثبت گزارش\n                        </ion-button>\n                      </ion-buttons>\n                    </form>\n                  </ion-card-content>\n                </ion-card>\n              </section>\n            </ion-col>\n            <ion-col\n              size=\"12\"\n              offset=\"0\"\n              size-lg=\"8\"\n              offset-lg=\"0\"\n              *ngIf=\"!isReportCourseMode\"\n              class=\"course-main\"\n            >\n              <ion-card class=\"course-overview-card\">\n                <ion-card-header>\n                  <ion-card-subtitle\n                    *ngIf=\"course.isStopped\"\n                    class=\"text-center\"\n                    color=\"danger\"\n                    >{{ course.stoppedReason }}</ion-card-subtitle\n                  >\n                  <ion-card-title class=\"text-center\">\n                    <a\n                      class=\"decoration-none\"\n                      routerLink=\"{{ '/c/' + course.id }}\"\n                    >\n                      <h1>\n                        <ion-text class=\"link font-medium\" color=\"light\">\n                          {{ course.name }}</ion-text\n                        >\n                      </h1></a\n                    ></ion-card-title\n                  >\n                </ion-card-header>\n                <section dir=\"rtl\" class=\"justify\">\n                  <ion-img\n                    class=\"c-a-images\"\n                    [src]=\"course.imageUrl\"\n                    [alt]=\"course.description\"\n                    [title]=\"course.name\"\n                  ></ion-img>\n                  <div class=\"top-right\" *ngIf=\"course.offPrice !== 0\">\n                    <ion-badge color=\"danger\" mode=\"md\" class=\"font-x-large\">{{\n                      (\n                        ((course.price - course.offPrice) * 100) /\n                        course.price\n                      ).toFixed(0) + \"%\"\n                    }}</ion-badge>\n                  </div>\n                  <div class=\"top-left\" *ngIf=\"onCheckNew()\">\n                    <ion-badge color=\"telegram\" mode=\"md\" class=\"font-x-large\">\n                      New\n                    </ion-badge>\n                  </div>\n                  <ion-item>\n                    <!-- <ion-text style=\"font-size: small\" color=\"light\">\n                      {{ (course.point * 5) / 100 }}\n                    </ion-text> -->\n                    <ion-icon\n                      *ngFor=\"let item of onMakeArray((course.point * 5) / 100)\"\n                      style=\"margin-left: 4px; width: 0.8em; height: 0.8em\"\n                      color=\"warning\"\n                      slot=\"start\"\n                      name=\"star\"\n                    ></ion-icon>\n                    <ion-button\n                      *ngIf=\"loggedIn\"\n                      style=\"width: 80px; margin-right: auto\"\n                      size=\"small\"\n                      color=\"danger\"\n                      (click)=\"onReportCourseClicked()\"\n                      expand=\"block\"\n                      fill=\"outline\"\n                      shape=\"round\"\n                    >\n                      گزارش\n                    </ion-button>\n                  </ion-item>\n\n                  <ion-label\n                    ><h2 style=\"margin-top: 16px\">\n                      <b\n                        ><ion-text class=\"link\" color=\"light\">{{\n                          course.name\n                        }}</ion-text></b\n                      >\n                    </h2></ion-label\n                  >\n                  <br />\n                  <ion-text>\n                    <div\n                      class=\"font-small\"\n                      [innerText]=\"course.shortDescription\"\n                    ></div>\n                  </ion-text>\n                  <div class=\"course-highlights\">\n                    <div *ngIf=\"course.courseVideos\">\n                      <ion-icon name=\"play-circle-outline\"></ion-icon>\n                      <span>تعداد جلسات</span>\n                      <strong>{{ course.courseVideos.length + 1 }}</strong>\n                    </div>\n                    <div *ngIf=\"course.videoTime && course.courseVideos\">\n                      <ion-icon name=\"time-outline\"></ion-icon>\n                      <span>مدت آموزش</span>\n                      <strong>{{ totalVideoTime() }}</strong>\n                    </div>\n                    <div *ngIf=\"course.level\">\n                      <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                      <span>سطح دوره</span>\n                      <strong>{{ course.level }}</strong>\n                    </div>\n                    <div>\n                      <ion-icon name=\"ribbon-outline\"></ion-icon>\n                      <span>گواهینامه</span>\n                      <strong>{{ course.hasDegree ? \"دارد\" : \"ندارد\" }}</strong>\n                    </div>\n                  </div>\n                  <br />\n                  <br />\n                  <ion-text\n                    ><div\n                      [class]=\"readMore\"\n                      [innerHTML]=\"course.description\"\n                    ></div\n                  ></ion-text>\n                  <ion-button\n                    *ngIf=\"readMore === 'readMore'\"\n                    color=\"telegram\"\n                    (click)=\"onReadMoreOrLess()\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                  >\n                    نمایش بیشتر\n                    <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button\n                    *ngIf=\"readMore === 'readLess'\"\n                    color=\"telegram\"\n                    (click)=\"onReadMoreOrLess()\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                  >\n                    بستن\n                    <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\n                  </ion-button>\n                </section>\n              </ion-card>\n              <ion-card *ngIf=\"windowWidth <= 600\" class=\"purchase-card mobile-purchase-card\">\n                <ion-card-header color=\"primary\">\n                  <!-- <ion-card-subtitle\n                    class=\"text-center\"\n                    *ngIf=\"course.offPrice != 0\"\n                  >\n                    قیمت دوره:\n                    <ion-text color=\"danger\">\n                      <del>\n                        {{ course.price | rial }}\n                      </del>\n                    </ion-text>\n                  </ion-card-subtitle> -->\n                  <ion-card-title class=\"text-center\"\n                    >مشخصات دوره\n                    <!-- قیمت دوره:\n                    <ion-text\n                      color=\"{{\n                        course.offPrice == 0 || course.price == 0\n                          ? course.price == 0\n                            ? 'light'\n                            : 'success'\n                          : 'success'\n                      }}\"\n                    >\n                      {{\n                        course.offPrice == 0 || course.price == 0\n                          ? course.price == 0\n                            ? \"رایگان\"\n                            : (course.price | rial)\n                          : (course.offPrice | rial)\n                      }}\n                    </ion-text> -->\n                  </ion-card-title>\n                </ion-card-header>\n                <ion-card-content dir=\"rtl\">\n                  <ion-list>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>قیمت دوره: </ion-label>\n                      <ion-text color=\"danger\">\n                        <del>\n                          <h5>{{ course.price | rial }}</h5>\n                        </del>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>قیمت دوره: </ion-label>\n                      <ion-text\n                        color=\"{{\n                          course.offPrice === 0 || course.price === 0\n                            ? course.price === 0\n                              ? 'warning'\n                              : 'success'\n                            : 'success'\n                        }}\"\n                      >\n                        {{\n                          course.offPrice === 0 || course.price === 0\n                            ? course.price === 0\n                              ? \"رایگان\"\n                              : (course.price | rial)\n                            : (course.offPrice | rial)\n                        }}\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>میزان تخفیف: </ion-label>\n                      <ion-text color=\"warning\">\n                        <h5>{{ course.price - course.offPrice | rial }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"course.offPrice !== 0\">\n                      <ion-label>درصد تخفیف: </ion-label>\n                      <ion-text color=\"danger\">\n                        <h5>\n                          <ion-badge color=\"danger\" mode=\"md\">{{\n                            (\n                              ((course.price - course.offPrice) * 100) /\n                              course.price\n                            ).toFixed(1) + \"%\"\n                          }}</ion-badge>\n                        </h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"pricetags-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item *ngIf=\"isLimitShow\">\n                      <ion-label>{{ limitTitle + \": \" }} </ion-label>\n                      <ion-text color=\"danger\" *ngIf=\"!isLimitShow2\">\n                        <b>{{ limitDateToString }}</b>\n                      </ion-text>\n                      <ion-text color=\"danger\" *ngIf=\"isLimitShow2\">\n                        <b>اتمام یافت</b>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"hourglass-outline\"></ion-icon>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>مدرس دوره: </ion-label>\n                      <ion-text color=\"warning\">\n                        <h5>{{ getTeacherName() }}</h5>\n                      </ion-text>\n                      <ion-icon slot=\"end\" name=\"school-outline\"></ion-icon>\n                    </ion-item>\n\n                    <ion-button\n                      *ngIf=\"phoneReadMore === 'readMore2'\"\n                      color=\"telegram\"\n                      (click)=\"onReadMoreOrLess2()\"\n                      expand=\"block\"\n                      fill=\"clear\"\n                      shape=\"round\"\n                    >\n                      نمایش بیشتر\n                      <ion-icon\n                        slot=\"end\"\n                        name=\"chevron-down-outline\"\n                      ></ion-icon>\n                    </ion-button>\n                    <div\n                      *ngIf=\"phoneReadMore === 'readLess2'\"\n                      class=\"transition\"\n                    >\n                      <ion-item>\n                        <ion-label>کد دوره:</ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ course.id }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.courseVideos\">\n                        <ion-label>تعداد ویدئو: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ course.courseVideos.length + 1 }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"videocam-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.viewCount\">\n                        <ion-label>تعداد بازدید: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ course.viewCount }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"eye-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.level\">\n                        <ion-label>سطح دوره: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ course.level }}</h5>\n                        </ion-text>\n                        <ion-icon\n                          slot=\"end\"\n                          name=\"bar-chart-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>مدرک: </ion-label>\n                        <ion-text\n                          color=\"{{ course.hasDegree ? 'success' : 'warning' }}\"\n                        >\n                          <h5>{{ course.hasDegree ? \"دارد\" : \"ندارد\" }}</h5>\n                        </ion-text>\n                        <ion-icon\n                          *ngIf=\"course.hasDegree\"\n                          slot=\"end\"\n                          name=\"checkmark-circle-outline\"\n                        ></ion-icon>\n                        <ion-icon\n                          *ngIf=\"!course.hasDegree\"\n                          slot=\"end\"\n                          name=\"close-circle-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                      <ion-item\n                        *ngIf=\"course.hasDegree && course.freeExamCount\"\n                      >\n                        <ion-label>تعداد آزمون رایگان: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ course.freeExamCount }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"dice-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>وضعیت دوره: </ion-label>\n                        <ion-text\n                          color=\"{{\n                            course.isFinished ? 'success' : 'warning'\n                          }}\"\n                        >\n                          <h5>\n                            {{\n                              course.isFinished ? \"اتمام دوره\" : \"درحال برگزاری\"\n                            }}\n                          </h5>\n                        </ion-text>\n                        <ion-icon\n                          *ngIf=\"course.isFinished\"\n                          slot=\"end\"\n                          name=\"checkmark-done-circle-outline\"\n                        ></ion-icon>\n                        <ion-icon\n                          *ngIf=\"!course.isFinished\"\n                          slot=\"end\"\n                          name=\"reload-circle-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.createDate\">\n                        <ion-label>تاریخ ثبت دوره: </ion-label>\n                        <ion-text color=\"medium\">\n                          <h5>{{ course.createDate | persianDate }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.lastUpdateDate\">\n                        <ion-label>تاریخ بروزرسانی: </ion-label>\n                        <ion-text color=\"medium\">\n                          <h5>{{ course.lastUpdateDate | persianDate }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.videoTime && course.courseVideos\">\n                        <ion-label>مدت زمان دوره: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5>{{ totalVideoTime() }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"time-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.size && course.courseVideos\">\n                        <ion-label>حجم فایل ها: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5 dir=\"ltr\">{{ totalSize() }}</h5>\n                        </ion-text>\n                        <ion-icon\n                          slot=\"end\"\n                          name=\"hourglass-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.price !== 0 && !course.isBuy\">\n                        <ion-label>امتیاز دریافتی بعد از ثبت نام: </ion-label>\n                        <ion-text color=\"success\">\n                          <h5 dir=\"ltr\">{{ onGetCoursePoint() }}</h5>\n                        </ion-text>\n                        <ion-icon slot=\"end\" name=\"ribbon-outline\"></ion-icon>\n                      </ion-item>\n                      <ion-item *ngIf=\"course.isStopped\">\n                        <ion-text color=\"danger\">\n                          <h5>{{ course.stoppedReason }}</h5>\n                        </ion-text>\n                        <ion-icon\n                          slot=\"end\"\n                          name=\"alert-circle-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </div>\n                    <ion-button\n                      *ngIf=\"phoneReadMore === 'readLess2'\"\n                      color=\"telegram\"\n                      (click)=\"onReadMoreOrLess2()\"\n                      expand=\"block\"\n                      fill=\"clear\"\n                      shape=\"round\"\n                    >\n                      بستن\n                      <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-list>\n                  <div *ngIf=\"checkBuy && !isBuyLoading\">\n                    <ion-button\n                      *ngIf=\"checkBuy2 && !course.isStopped\"\n                      expand=\"block\"\n                      color=\"success\"\n                      shape=\"round\"\n                      class=\"primary-buy-button\"\n                      (click)=\"onBuy()\"\n                    >\n                      ثبت‌نام و شروع یادگیری\n                      <ion-icon slot=\"start\" name=\"rocket-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"!checkBuy2 && !course.isStopped && course.isBuy\"\n                      expand=\"block\"\n                      color=\"success\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                      (click)=\"onBought2()\"\n                    >\n                      ورود به کلاس و مشاهده جلسات\n                      <ion-icon slot=\"start\" name=\"play-circle-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"course.isStopped\"\n                      expand=\"block\"\n                      color=\"danger\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                    >\n                      دوره متوقف شده\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"!course.isStopped && !course.isBuy\"\n                      expand=\"block\"\n                      color=\"warning\"\n                      shape=\"round\"\n                      fill=\"outline\"\n                    >\n                      دوره فروشی نیست\n                    </ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n              <ion-card\n                *ngIf=\"\n                  course.teacherUser &&\n                  windowWidth <= 600 &&\n                  phoneReadMore === 'readLess2'\n                \"\n                class=\"transition\"\n              >\n                <ion-card-header class=\"text-center\" color=\"primary\">\n                  مشخصات مدرس\n                </ion-card-header>\n                <ion-card-content class=\"text-center ion-margin-top\">\n                  <ion-avatar class=\"text-center avatar\">\n                    <img\n                      [src]=\"course.teacherUser.userAvatarAddress\"\n                      [alt]=\"course.teacherUser.resume\"\n                      [title]=\"getTeacherName()\"\n                    />\n                  </ion-avatar>\n                  <br />\n                  <p class=\"description\">\n                    {{ course.teacherUser.resume + \" \" }}\n                    <a\n                      *ngIf=\"false\"\n                      class=\"decoration-none\"\n                      routerLink=\"{{ '/Teachers/' + course.teacherUser.id }}\"\n                      ><ion-text color=\"success\" class=\"link\">\n                        (رزومه)\n                      </ion-text></a\n                    >\n                  </p>\n                  <ion-item\n                    *ngIf=\"course.teacherUser && course.teacherUser.isRested\"\n                  >\n                    <ion-label class=\"text-center\">\n                      <ion-badge color=\"danger\" mode=\"md\"\n                        >مدرس در مرخصی میباشد</ion-badge\n                      >\n                    </ion-label>\n                  </ion-item>\n                </ion-card-content>\n              </ion-card>\n              <!-- <section\n                *ngIf=\"\n                  course.courseImages && !course.isStopped && windowWidth <= 600\n                \"\n              >\n                <ion-card>\n                  <ion-card-content>\n\n                  </ion-card-content>\n                </ion-card>\n              </section> -->\n              <ion-card class=\"text-center student-voices-card\">\n                <ion-text class=\"ion-margin-top\">\n                  <h4>\n                    <ion-badge color=\"warning2\" mode=\"md\">توجه </ion-badge> برای\n                    باز کردن فایل های فشرده از نرم افزار\n                    <ion-badge color=\"success\" mode=\"md\">WinRar </ion-badge>\n                    استفاده کنید\n                  </h4>\n                </ion-text>\n                <div *ngIf=\"userVoices.length > 0\">\n                  <ion-button\n                    class=\"ion-margin\"\n                    color=\"success\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                  >\n                    صدای هنرجویان\n                    <ion-icon\n                      class=\"blink-image2 logo\"\n                      slot=\"start\"\n                      name=\"volume-high-outline\"\n                    ></ion-icon>\n                    <ion-icon\n                      class=\"logo\"\n                      slot=\"start\"\n                      name=\"happy-outline\"\n                    ></ion-icon>\n                  </ion-button>\n                </div>\n                <div style=\"margin: 16px\" *ngIf=\"userVoices.length > 0\">\n                  <ang-music-player\n                    [backgroundColor]=\"musicBgColor\"\n                    [muteButtonColor]=\"musicColor\"\n                    [volumeButtonColor]=\"musicColor\"\n                    [activeRepeatButtonColor]=\"musicColor\"\n                    [repeatButtonColor]=\"musicColor\"\n                    [previousButtonColor]=\"musicColor\"\n                    [nextButtonColor]=\"musicColor\"\n                    [pauseButtonColor]=\"musicColor\"\n                    [playButtonColor]=\"musicColor\"\n                    [volumeSliderColor]=\"musicColor\"\n                    [timeSliderColor]=\"musicColor\"\n                    [audioTitleColor]=\"musicColor\"\n                    [audioTimeColor]=\"musicColor\"\n                    dir=\"ltr\"\n                    width=\"100%\"\n                    [audioList]=\"audioList\"\n                  ></ang-music-player>\n                </div>\n              </ion-card>\n              <ion-card *ngIf=\"!course.isStopped\" class=\"course-content-card\" id=\"course-content\">\n                <div class=\"access-banner owned\" *ngIf=\"!isBuyLoading && !checkBuy2\">\n                  <span class=\"access-banner__icon\"><ion-icon name=\"checkmark-circle\"></ion-icon></span>\n                  <div>\n                    <strong>این دوره در اختیار شماست</strong>\n                    <p>جلسه موردنظر را باز کنید و یادگیری را ادامه دهید.</p>\n                  </div>\n                </div>\n                <div class=\"access-banner locked\" *ngIf=\"!isBuyLoading && checkBuy2 && CheckBuy()\">\n                  <span class=\"access-banner__icon\"><ion-icon name=\"lock-closed\"></ion-icon></span>\n                  <div>\n                    <strong>پیش‌نمایش جلسات دوره</strong>\n                    <p>جلسات رایگان را ببینید؛ دسترسی کامل پس از ثبت‌نام فعال می‌شود.</p>\n                  </div>\n                </div>\n                <div *ngIf=\"course.courseImages && !course.isStopped\">\n                  <ion-button\n                    *ngIf=\"course.courseImages.length > 0\"\n                    (click)=\"onPhotoGallery()\"\n                    color=\"warning2\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                  >\n                    گالری تصاویر\n                    <ion-icon slot=\"start\" name=\"images-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n                <ion-card-header\n                  *ngIf=\"course\"\n                  style=\"padding-top: 0px !important\"\n                >\n                  <ion-card-subtitle\n                    *ngIf=\"course.videoTime && course.courseVideos\"\n                  >\n                    <ion-item>\n                      <ion-label>مدت زمان دوره: </ion-label>\n                      <ion-text color=\"warning\">\n                        <h5>{{ totalVideoTime() }}</h5>\n                      </ion-text>\n                    </ion-item>\n                  </ion-card-subtitle>\n                  <!-- <video class=\"full-width\" controls>\n                    <source [src]=\"course.videoUrl\" type=\"video/mp4\" />\n                  </video> -->\n                  <div\n                    class=\"h_iframe-aparat_embed_frame\"\n                    [title]=\"course.name\"\n                  >\n                    <span class=\"video-span\"></span\n                    ><iframe\n                      [src]=\"checkURL()\"\n                      [title]=\"course.name\"\n                      allowfullscreen=\"true\"\n                      webkitallowfullscreen=\"true\"\n                      mozallowfullscreen=\"true\"\n                    ></iframe>\n                  </div>\n                </ion-card-header>\n                <ion-card-content dir=\"rtl\" class=\"no-padding\">\n                  <ion-item *ngIf=\"checkBuy && !isBuyLoading\">\n                    <ion-text class=\"ion-margin-vertical\">\n                      <h4>\n                        <ion-badge color=\"warning2\" mode=\"md\">توجه </ion-badge>\n                        بعد از خرید دوره، صفحه را\n                        <ion-badge color=\"success\" mode=\"md\">رفرش </ion-badge>\n                        کنید\n                      </h4>\n                    </ion-text>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>{{ 0 + \"- ویدیو معرفی دوره\" }}</ion-label>\n                    <ion-text color=\"warning\">\n                      {{ \"(\" + course.videoTime + \")\" }}\n                    </ion-text>\n                    <a\n                      class=\"decoration-none\"\n                      [href]=\"checkVideoUrl()\"\n                      target=\"_blank\"\n                      [title]=\"course.name\"\n                      ><ion-button\n                        expand=\"block\"\n                        fill=\"clear\"\n                        shape=\"round\"\n                        class=\"padding-h-6\"\n                      >\n                        <ion-icon\n                          color=\"success\"\n                          slot=\"icon-only\"\n                          name=\"download-outline\"\n                        ></ion-icon> </ion-button\n                    ></a>\n                  </ion-item>\n\n                  <div *ngIf=\"!course.courseVideos\" dir=\"rtl\">\n                    <ion-card>\n                      <ion-card-header>\n                        <ion-card-title class=\"text-center\"\n                          >درحال دریافت ویدیو ها</ion-card-title\n                        >\n                      </ion-card-header>\n                      <ion-card-content dir=\"ltr\">\n                        <div class=\"text-center\">\n                          <ion-spinner name=\"dots\"></ion-spinner>\n                        </div>\n                      </ion-card-content>\n                    </ion-card>\n                  </div>\n                  <div *ngIf=\"course.courseVideos && !isBuyLoading\">\n                    <ion-list>\n                      <ion-item *ngIf=\"CheckBuy() && checkBuy2\">\n                        <ion-label color=\"warning\" class=\"access\"\n                          >دسترسی به لینک های دانلود محدود است</ion-label\n                        >\n                        <ion-icon slot=\"start\" name=\"key-outline\"></ion-icon>\n                      </ion-item>\n                      <div\n                        *ngFor=\"let video of course.courseVideos; let i = index\"\n                      >\n                        <ion-item\n                          button\n                          (click)=\"onDetailClick(video.id)\"\n                          color=\"{{ videoDetail[i].hide ? '' : 'warning2' }}\"\n                        >\n                          <!-- <ion-label\n                            *ngIf=\"!video.isFile\"\n                            title=\"{{\n                              video.courseTitle + ' (' + video.videoTime + ')'\n                            }}\"\n                            >{{ i + 1 + \"- \" + video.courseTitle }}</ion-label\n                          ><ion-text *ngIf=\"!video.isFile\" color=\"warning\">\n                            {{ \"(\" + video.videoTime + \")\" }}\n                          </ion-text> -->\n                          <ion-label title=\"{{ video.courseTitle }}\">{{\n                            i + 1 + \"- \" + video.courseTitle\n                          }}</ion-label>\n\n                          <ion-button\n                            *ngIf=\"video.videoNamePreview != ''\"\n                            expand=\"block\"\n                            fill=\"clear\"\n                            shape=\"round\"\n                          >\n                            <ion-icon\n                              color=\"warning\"\n                              slot=\"icon-only\"\n                              name=\"videocam-outline\"\n                            ></ion-icon>\n                          </ion-button>\n\n                          <ion-button\n                            *ngIf=\"video.isFree\"\n                            expand=\"block\"\n                            fill=\"clear\"\n                            shape=\"round\"\n                          >\n                            <ion-icon\n                              color=\"success\"\n                              slot=\"icon-only\"\n                              name=\"lock-open-outline\"\n                            ></ion-icon>\n                          </ion-button>\n\n                          <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                            <ion-icon\n                              color=\"{{\n                                videoDetail[i].hide ? 'instagram' : 'danger'\n                              }}\"\n                              slot=\"icon-only\"\n                              name=\"{{\n                                videoDetail[i].hide\n                                  ? 'reorder-three-outline'\n                                  : 'remove-circle-outline'\n                              }}\"\n                            ></ion-icon>\n                          </ion-button>\n                        </ion-item>\n\n                        <ion-card *ngIf=\"!videoDetail[i].hide\" class=\"smooth\">\n                          <ion-card-header color=\"primary\">\n                            <ion-card-subtitle class=\"text-center\"\n                              >اطلاعات بیشتر</ion-card-subtitle\n                            >\n                          </ion-card-header>\n\n                          <div\n                            *ngIf=\"!CheckBuy() || !checkBuy2 || video.isFree\"\n                          >\n                            <div\n                              *ngIf=\"\n                                !videoDetail[i].hide &&\n                                !video.isFile &&\n                                !video.isAparat &&\n                                video.videoUrlOnline != ''\n                              \"\n                            >\n                              <video class=\"video\" controls>\n                                <source\n                                  [src]=\"video.videoUrlOnline\"\n                                  type=\"{{ onGetVideoFormat(video.id) }}\"\n                                />\n                                مرورگر شما قابلیت پخش آنلاین ندارد\n                              </video>\n                            </div>\n\n                            <div\n                              class=\"ion-margin-top\"\n                              *ngIf=\"\n                                !videoDetail[i].hide &&\n                                !video.isFile &&\n                                video.isAparat\n                              \"\n                            >\n                              <div\n                                class=\"h_iframe-aparat_embed_frame\"\n                                [title]=\"video.courseTitle\"\n                              >\n                                <span class=\"video-span\"></span\n                                ><iframe\n                                  [src]=\"checkURL2(video.id)\"\n                                  [title]=\"video.courseTitle\"\n                                  allowfullscreen=\"true\"\n                                  webkitallowfullscreen=\"true\"\n                                  mozallowfullscreen=\"true\"\n                                ></iframe>\n                              </div>\n                            </div>\n                          </div>\n\n                          <div\n                            *ngIf=\"\n                              !videoDetail[i].hide &&\n                              !video.isFile &&\n                              !video.isAparat &&\n                              video.hasPredictionPreview &&\n                              video.videoNamePreview != '' &&\n                              CheckBuy() &&\n                              checkBuy2 &&\n                              !video.isFree\n                            \"\n                          >\n                            <video class=\"video\" controls>\n                              <source\n                                [src]=\"video.videoNamePreview\"\n                                type=\"{{ onGetVideoFormat2(video.id) }}\"\n                              />\n                              مرورگر شما قابلیت پخش آنلاین ندارد\n                            </video>\n                          </div>\n\n                          <div\n                            class=\"ion-margin-top\"\n                            *ngIf=\"\n                              !videoDetail[i].hide &&\n                              !video.isFile &&\n                              !video.isAparat &&\n                              !video.hasPredictionPreview &&\n                              video.videoNamePreview != '' &&\n                              CheckBuy() &&\n                              checkBuy2 &&\n                              !video.isFree\n                            \"\n                          >\n                            <div\n                              class=\"h_iframe-aparat_embed_frame\"\n                              [title]=\"video.courseTitle\"\n                            >\n                              <span class=\"video-span\"></span\n                              ><iframe\n                                [src]=\"checkURL3(video.id)\"\n                                [title]=\"video.courseTitle\"\n                                allowfullscreen=\"true\"\n                                webkitallowfullscreen=\"true\"\n                                mozallowfullscreen=\"true\"\n                              ></iframe>\n                            </div>\n                          </div>\n\n                          <ion-item *ngIf=\"!videoDetail[i].hide\">\n                            <ion-label>لینک دانلود:</ion-label>\n                            <a\n                              *ngIf=\"\n                                !CheckBuy() || !checkBuy2 || video.isFree;\n                                else private\n                              \"\n                              class=\"decoration-none\"\n                              [href]=\"video.videoUrl\"\n                              target=\"_blank\"\n                              [title]=\"video.courseTitle\"\n                              ><ion-button\n                                expand=\"block\"\n                                fill=\"clear\"\n                                shape=\"round\"\n                              >\n                                <ion-icon\n                                  color=\"success\"\n                                  slot=\"icon-only\"\n                                  name=\"download-outline\"\n                                ></ion-icon> </ion-button\n                            ></a>\n\n                            <ng-template #private\n                              ><ion-button\n                                (click)=\"presentAlertConfirm()\"\n                                expand=\"block\"\n                                fill=\"clear\"\n                                shape=\"round\"\n                              >\n                                <ion-icon\n                                  color=\"danger\"\n                                  slot=\"icon-only\"\n                                  name=\"key-outline\"\n                                ></ion-icon> </ion-button\n                            ></ng-template>\n                          </ion-item>\n\n                          <ion-item\n                            *ngIf=\"\n                              !video.isFile &&\n                              !videoDetail[i].hide &&\n                              !video.isAparat &&\n                              video.videoNamePreview != ''\n                            \"\n                          >\n                            <ion-label>لینک پیش نمایش:</ion-label>\n                            <a\n                              class=\"decoration-none\"\n                              [href]=\"video.videoNamePreview\"\n                              target=\"_blank\"\n                              [title]=\"video.courseTitle\"\n                              ><ion-button\n                                expand=\"block\"\n                                fill=\"clear\"\n                                shape=\"round\"\n                              >\n                                <ion-icon\n                                  color=\"success\"\n                                  slot=\"icon-only\"\n                                  name=\"download-outline\"\n                                ></ion-icon> </ion-button\n                            ></a>\n                          </ion-item>\n\n                          <ion-item\n                            *ngIf=\"!videoDetail[i].hide && !video.isFile\"\n                          >\n                            <ion-label> مدت زمان ویدیو: </ion-label>\n                            <ion-text *ngIf=\"!video.isFile\" color=\"warning\">\n                              {{ \"(\" + video.videoTime + \")\" }}\n                            </ion-text>\n                          </ion-item>\n\n                          <ion-item\n                            *ngIf=\"!videoDetail[i].hide && video.size != ''\"\n                          >\n                            <ion-label> حجم فایل: </ion-label>\n                            <ion-text color=\"warning\" dir=\"ltr\">\n                              {{ \"(\" + video.size + \")\" }}\n                            </ion-text>\n                          </ion-item>\n\n                          <ion-item *ngIf=\"!videoDetail[i].hide\">\n                            <ion-text color=\"light\" class=\"full-width\"\n                              ><h3 class=\"h3-title\">\n                                عنوان:\n                                <ion-text\n                                  color=\"light\"\n                                  class=\"h3-title-content\"\n                                >\n                                  {{ video.courseTitle }}\n                                </ion-text>\n                              </h3>\n                            </ion-text>\n                          </ion-item>\n\n                          <ion-item\n                            *ngIf=\"\n                              !videoDetail[i].hide &&\n                              video.videoDescription != ''\n                            \"\n                            lines=\"none\"\n                          >\n                            <ion-text color=\"light\" class=\"no-margin\">\n                              <h3 class=\"no-margin\">توضیحات:</h3>\n                            </ion-text>\n                          </ion-item>\n                          <ion-item\n                            *ngIf=\"\n                              !videoDetail[i].hide &&\n                              video.videoDescription != ''\n                            \"\n                          >\n                            <p style=\"white-space: pre-line; margin-right: 8px\">\n                              {{ video.videoDescription }}\n                            </p>\n                          </ion-item>\n                        </ion-card>\n                      </div>\n                    </ion-list>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n              <section *ngIf=\"windowWidth <= 600\">\n                <ion-card>\n                  <ion-card-content>\n                    <div>\n                      <ion-button\n                        color=\"instagram\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        routerLink=\"{{ '/Questions/' + course.id }}\"\n                      >\n                        پرسش سوال در دوره\n                        <ion-icon slot=\"start\" name=\"help-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"course.hasDegree && !course.isStopped\">\n                  <ion-card-content>\n                    <div>\n                      <ion-button\n                        color=\"twitter\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        routerLink=\"{{ '/Exam/' + course.id }}\"\n                      >\n                        شرکت در آزمون دوره\n                        <ion-icon\n                          slot=\"start\"\n                          name=\"checkbox-outline\"\n                        ></ion-icon>\n                      </ion-button>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"isLikeShow() && isUserLikedLoading\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >درحال دریافت لایک</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content dir=\"ltr\">\n                    <div class=\"text-center\">\n                      <ion-spinner name=\"dots\"></ion-spinner>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card\n                  *ngIf=\"\n                    isLikeShow() &&\n                    course.userLiked != null &&\n                    !isUserLikedLoading\n                  \"\n                >\n                  <ion-card-header color=\"primary\">\n                    <!-- <ion-card-subtitle class=\"text-center\"\n                      >نظر شما اولویت ماست</ion-card-subtitle\n                    > -->\n                    <ion-card-title class=\"text-center\"\n                      >این دوره را میپسندید؟</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <div *ngIf=\"isLikeLoadingShow\" class=\"ion-margin-top\">\n                      <ion-grid dir=\"ltr\">\n                        <ion-row>\n                          <ion-col class=\"text-center full-width\">\n                            <ion-spinner\n                              class=\"full-width\"\n                              name=\"dots\"\n                            ></ion-spinner>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                    <div *ngIf=\"!isLikeLoadingShow\" class=\"ion-margin-top\">\n                      <ion-button\n                        color=\"success\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        (click)=\"OnLike(true)\"\n                        *ngIf=\"!course.userLiked\"\n                      >\n                        میپسندم\n                        <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\n                      </ion-button>\n                      <ion-button\n                        color=\"danger\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                        shape=\"round\"\n                        (click)=\"OnLike(false)\"\n                        *ngIf=\"course.userLiked\"\n                      >\n                        نمی پسندم\n                        <ion-icon\n                          slot=\"start\"\n                          name=\"heart-dislike-outline\"\n                        ></ion-icon>\n                      </ion-button>\n                      <ion-item *ngIf=\"course.userLiked\">\n                        <ion-label color=\"warning\">پسندیده شد</ion-label>\n                        <ion-icon\n                          color=\"success\"\n                          slot=\"start\"\n                          name=\"heart\"\n                        ></ion-icon>\n                      </ion-item>\n                    </div>\n                    <div class=\"ion-margin-top\" *ngIf=\"!checkBuy2\">\n                      <ion-item>\n                        <ion-button\n                          color=\"success\"\n                          (click)=\"onRating()\"\n                          expand=\"block\"\n                          fill=\"clear\"\n                          shape=\"round\"\n                        >\n                          شرکت در نظر سنجی\n                        </ion-button>\n                        <ion-icon\n                          color=\"warning\"\n                          slot=\"start\"\n                          name=\"bulb-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card>\n                  <ion-card-header color=\"primary\" dir=\"rtl\">\n                    <ion-card-title class=\"text-center\"\n                      >به اشتراک گذاری</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content dir=\"rtl\" class=\"ion-margin-top\">\n                    <ion-item>\n                      <ion-buttons class=\"full-width\">\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            [href]=\"whatsappShare\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"success\"\n                              slot=\"icon-only\"\n                              name=\"logo-whatsapp\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://t.me/share/url?url=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"telegram\"\n                              slot=\"icon-only\"\n                              name=\"paper-plane-outline\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://www.facebook.com/sharer/sharer.php?u=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"facebook\"\n                              slot=\"icon-only\"\n                              name=\"logo-facebook\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                        <ion-button class=\"social\">\n                          <a\n                            class=\"full-width\"\n                            href=\"{{\n                              'https://twitter.com/intent/tweet?url=http://localhost:4300/c/' +\n                                course.id\n                            }}\"\n                            target=\"_blank\"\n                          >\n                            <ion-icon\n                              color=\"twitter\"\n                              slot=\"icon-only\"\n                              name=\"logo-twitter\"\n                            ></ion-icon>\n                          </a>\n                        </ion-button>\n                      </ion-buttons>\n                    </ion-item>\n\n                    <ion-list>\n                      <!-- <ion-list-header>\n                        <ion-label>لینک کوتاه</ion-label>\n                        <ion-button\n                          (click)=\"\n                            copyText('avalamooz.ir' + '/c/' + course.id)\n                          \"\n                          >کپی</ion-button\n                        >\n                      </ion-list-header> -->\n                      <ion-item\n                        button\n                        title=\"avalamooz.ir/c/{{ course.id }}\"\n                        (click)=\"copyText('avalamooz.ir' + '/c/' + course.id)\"\n                      >\n                        <ion-label class=\"text-center\"\n                          >avalamooz.ir/c/{{ course.id }}</ion-label\n                        >\n                        <ion-icon\n                          class=\"ion-margin-start\"\n                          color=\"success\"\n                          slot=\"start\"\n                          name=\"link-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card *ngIf=\"links.length > 0\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >لینک های مفید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list>\n                      <ion-item\n                        [href]=\"link.url\"\n                        class=\"text-center\"\n                        *ngFor=\"let link of links\"\n                        [title]=\"link.name\"\n                      >\n                        <ion-label>{{ link.name }}</ion-label>\n                        <ion-icon\n                          color=\"secondary\"\n                          slot=\"start\"\n                          name=\"link-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n                <section *ngIf=\"courseCategores\">\n                  <ion-card *ngIf=\"courseCategores.length > 0\">\n                    <ion-card-header color=\"primary\">\n                      <ion-card-title class=\"text-center\"\n                        >گروه های دوره</ion-card-title\n                      >\n                    </ion-card-header>\n                    <ion-card-content>\n                      <ion-list>\n                        <ion-item\n                          button\n                          [routerLink]=\"['/Home', 'Search']\"\n                          [queryParams]=\"{\n                            categoryIds: [category.id]\n                          }\"\n                          *ngFor=\"let category of courseCategores2\"\n                        >\n                          <ion-label title=\"{{ category.title }}\"\n                            >{{ category.title }}\n                          </ion-label>\n                        </ion-item>\n                      </ion-list>\n                    </ion-card-content>\n                  </ion-card>\n                </section>\n                <!-- <ion-card>\n                  <ion-card-header color=\"primary\">\n                    <ion-card-subtitle class=\"text-center\"\n                      >کلیک کنید کپی شود</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >لینک کوتاه</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-item\n                      button\n                      (click)=\"copyText('avalamooz.ir' + '/c/' + course.id)\"\n                    >\n                      <ion-label class=\"text-center\"\n                        >avalamooz.ir/c/{{ course.id }}</ion-label\n                      >\n                      <ion-icon\n                        color=\"success\"\n                        slot=\"start\"\n                        name=\"clipboard-outline\"\n                      ></ion-icon>\n                    </ion-item>\n                  </ion-card-content>\n                </ion-card> -->\n                <ion-card *ngIf=\"tags.length > 0\">\n                  <ion-card-header color=\"primary\">\n                    <ion-card-title class=\"text-center\"\n                      >برچسب ها</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-list>\n                      <ion-item\n                        href=\"{{ 'http://localhost:4300' + '/c/' + course.id }}\"\n                        class=\"text-center\"\n                        *ngFor=\"let tag of tags\"\n                        [title]=\"tag.name\"\n                      >\n                        <ion-label\n                          color=\"medium\"\n                          style=\"font-size: 12px !important\"\n                          >{{ tag.name }}</ion-label\n                        >\n                        <ion-icon\n                          color=\"instagram\"\n                          slot=\"start\"\n                          name=\"pricetag-outline\"\n                        ></ion-icon>\n                      </ion-item>\n                    </ion-list>\n                  </ion-card-content>\n                </ion-card>\n              </section>\n              <section *ngIf=\"isReplyMode\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle class=\"text-center\"\n                      >به سوالات در قسمت نظرات پاسخ داده نخواهد\n                      شد</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >پاسخ خود را وارد کنید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <form\n                      *ngIf=\"loggedIn\"\n                      [formGroup]=\"replyForm\"\n                      (ngSubmit)=\"presentAlertConfirm2()\"\n                    >\n                      <ion-item>\n                        <ion-label>پاسخ شما:</ion-label>\n                        <ion-textarea\n                          rows=\"6\"\n                          auto-grow=\"true\"\n                          position=\"floating\"\n                          placeholder=\"پاسخ خود را وارد کنید\"\n                          formControlName=\"comment\"\n                        ></ion-textarea>\n                      </ion-item>\n                      <ion-buttons slot=\"start\" class=\"ion-margin\">\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"warning\"\n                          (click)=\"isReplyMode = false; replyForm.reset()\"\n                        >\n                          لغو\n                        </ion-button>\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"success\"\n                          type=\"submit\"\n                          [disabled]=\"replyForm.invalid\"\n                        >\n                          ایجاد پاسخ\n                        </ion-button>\n                      </ion-buttons>\n                    </form>\n                  </ion-card-content>\n                </ion-card>\n              </section>\n              <section *ngIf=\"isReportMode\">\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle class=\"text-center\"\n                      >در صورت گزارش غلط اکانت شما مسدود خواهد\n                      شد</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >گزارش خود را وارد کنید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <form\n                      *ngIf=\"loggedIn\"\n                      [formGroup]=\"replyForm\"\n                      (ngSubmit)=\"presentAlertReportConfirm()\"\n                    >\n                      <ion-item>\n                        <ion-label>دلیل گزارش:</ion-label>\n                        <ion-textarea\n                          rows=\"6\"\n                          auto-grow=\"true\"\n                          position=\"floating\"\n                          placeholder=\"دلیل گزارش خود را وارد کنید\"\n                          formControlName=\"comment\"\n                        ></ion-textarea>\n                      </ion-item>\n                      <ion-buttons slot=\"start\" class=\"ion-margin\">\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"warning2\"\n                          (click)=\"isReportMode = false; replyForm.reset()\"\n                        >\n                          لغو\n                        </ion-button>\n                        <ion-button\n                          class=\"ion-margin half-percent-width\"\n                          expand=\"block\"\n                          fill=\"solid\"\n                          shape=\"round\"\n                          color=\"success\"\n                          type=\"submit\"\n                          [disabled]=\"replyForm.invalid\"\n                        >\n                          ثبت گزارش\n                        </ion-button>\n                      </ion-buttons>\n                    </form>\n                  </ion-card-content>\n                </ion-card>\n              </section>\n              <section\n                *ngIf=\"!isReplyMode && !isReportMode && !isReportCourseMode\"\n              >\n                <ion-card>\n                  <ion-card-header>\n                    <ion-card-subtitle class=\"text-center\"\n                      >به سوالات در قسمت نظرات پاسخ داده نخواهد\n                      شد</ion-card-subtitle\n                    >\n                    <ion-card-title class=\"text-center\"\n                      >نظر خود را وارد کنید</ion-card-title\n                    >\n                  </ion-card-header>\n                  <ion-card-content>\n                    <form\n                      *ngIf=\"loggedIn\"\n                      [formGroup]=\"commentForm\"\n                      (ngSubmit)=\"presentAlertConfirm3()\"\n                    >\n                      <ion-item>\n                        <ion-label>نظر شما:</ion-label>\n                        <ion-textarea\n                          rows=\"6\"\n                          auto-grow=\"true\"\n                          position=\"floating\"\n                          placeholder=\"نظر خود را وارد کنید\"\n                          formControlName=\"comment\"\n                        ></ion-textarea>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>خصوصی برای مدرس نمایش داده شود؟</ion-label>\n                        <ion-checkbox\n                          formControlName=\"private\"\n                          slot=\"start\"\n                        ></ion-checkbox>\n                      </ion-item>\n                      <ion-button\n                        class=\"ion-margin\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        color=\"success\"\n                        type=\"submit\"\n                        [disabled]=\"commentForm.invalid\"\n                      >\n                        ایجاد نظر\n                      </ion-button>\n                    </form>\n                    <div *ngIf=\"!loggedIn\">\n                      <ion-button\n                        routerLink=\"/Account\"\n                        color=\"warning\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                        shape=\"round\"\n                      >\n                        برای ثبت نظر وارد شوید\n                      </ion-button>\n                      <ion-item>\n                        <ion-label>نظر شما:</ion-label>\n                        <ion-textarea\n                          rows=\"6\"\n                          auto-grow=\"true\"\n                          [disabled]=\"true\"\n                          position=\"floating\"\n                          placeholder=\"نظر خود را وارد کنید\"\n                        ></ion-textarea>\n                      </ion-item>\n                      <ion-item>\n                        <ion-label>خصوصی برای مدرس نمایش داده شود؟</ion-label>\n                        <ion-checkbox\n                          [disabled]=\"true\"\n                          slot=\"start\"\n                        ></ion-checkbox>\n                      </ion-item>\n                      <ion-button\n                        class=\"ion-margin\"\n                        expand=\"block\"\n                        fill=\"solid\"\n                        shape=\"round\"\n                        color=\"success\"\n                        type=\"submit\"\n                        [disabled]=\"true\"\n                      >\n                        ایجاد نظر\n                      </ion-button>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n                <section *ngIf=\"!isFirstCommentShow\">\n                  <ion-card dir=\"rtl\">\n                    <ion-card-header>\n                      <ion-card-title class=\"text-center\"\n                        >درحال دریافت نظرات</ion-card-title\n                      >\n                    </ion-card-header>\n                    <ion-card-content dir=\"ltr\">\n                      <div class=\"text-center\">\n                        <ion-spinner name=\"dots\"></ion-spinner>\n                      </div>\n                    </ion-card-content>\n                  </ion-card>\n                </section>\n                <section *ngIf=\"isFirstCommentShow && isCommentsEmpty\">\n                  <ion-card dir=\"rtl\">\n                    <ion-card-header>\n                      <ion-card-title class=\"text-center\"\n                        >هنوز نظری ثبت نشده است</ion-card-title\n                      >\n                    </ion-card-header>\n                    <ion-card-content dir=\"ltr\">\n                      <div class=\"text-center\">\n                        <ion-spinner name=\"dots\"></ion-spinner>\n                      </div>\n                    </ion-card-content>\n                  </ion-card>\n                </section>\n                <ion-card\n                  *ngIf=\"\n                    comments.length > 0 &&\n                    isFirstCommentShow &&\n                    !isCommentsEmpty\n                  \"\n                >\n                  <ion-button\n                    class=\"ion-margin\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                    color=\"{{ !commentShow ? 'warning' : 'danger' }}\"\n                    (click)=\"toggleInfiniteScroll()\"\n                  >\n                    {{ commentShow ? \"بستن نظرات\" : \"نمایش نظرات\" }}\n                  </ion-button>\n\n                  <ion-list *ngIf=\"commentShow\">\n                    <ion-card-header>\n                      <ion-card-title class=\"text-center\"\n                        >نظرات کاربران در رابطه با این دوره</ion-card-title\n                      >\n                    </ion-card-header>\n                    <ion-card-content>\n                      <section *ngFor=\"let comment of comments\">\n                        <ion-card\n                          *ngIf=\"\n                            comment.parentId == null || comment.parentId == 0\n                          \"\n                        >\n                          <ion-card-header>\n                            <ion-card-subtitle>\n                              <ion-item lines=\"none\" *ngIf=\"windowWidth <= 600\">\n                                <ion-label color=\"medium\"\n                                  >{{ \"ارسال شده در \"\n                                  }}{{\n                                    comment.createDate | persianDate\n                                  }}</ion-label\n                                >\n                              </ion-item>\n                              <ion-item lines=\"none\">\n                                <ion-button\n                                  *ngIf=\"loggedIn\"\n                                  style=\"width: 80px\"\n                                  size=\"small\"\n                                  color=\"success\"\n                                  (click)=\"onReplyClicked(comment.id)\"\n                                  expand=\"block\"\n                                  fill=\"outline\"\n                                  shape=\"round\"\n                                >\n                                  ثبت پاسخ\n                                </ion-button>\n\n                                <ion-button\n                                  *ngIf=\"loggedIn\"\n                                  style=\"width: 80px\"\n                                  size=\"small\"\n                                  color=\"danger\"\n                                  (click)=\"onReportClicked(comment.id)\"\n                                  expand=\"block\"\n                                  fill=\"outline\"\n                                  shape=\"round\"\n                                >\n                                  گزارش\n                                </ion-button>\n                              </ion-item>\n                            </ion-card-subtitle>\n                            <ion-card-title>\n                              <ion-item>\n                                <ion-avatar slot=\"start\">\n                                  <img\n                                    src=\"{{\n                                      comment.isTeacherAnswer\n                                        ? 'http://localhost:4300/assets/images/avatar.webp'\n                                        : 'http://localhost:4300/assets/images/user-avatar.webp'\n                                    }}\"\n                                  /> </ion-avatar\n                                ><ion-label color=\"darker\"\n                                  ><ion-text\n                                    *ngIf=\"comment.isPrivate\"\n                                    color=\"warning\"\n                                  >\n                                    <ion-badge color=\"warning\" mode=\"md\">{{\n                                      \"مخفی\"\n                                    }}</ion-badge> </ion-text\n                                  >{{ comment.userName\n                                  }}<ion-text\n                                    color=\"medium\"\n                                    *ngIf=\"windowWidth > 600\"\n                                  >\n                                    {{ \" - ارسال شده در \"\n                                    }}{{ comment.createDate | persianDate }}\n                                  </ion-text></ion-label\n                                >\n                              </ion-item></ion-card-title\n                            >\n                          </ion-card-header>\n                          <ion-card-content>\n                            <ion-text class=\"description\" color=\"light\">\n                              {{ comment.comment }}\n                            </ion-text>\n                            <section *ngFor=\"let childComment of comments\">\n                              <div *ngIf=\"childComment.parentId == comment.id\">\n                                <ion-card-header>\n                                  <ion-card-subtitle *ngIf=\"windowWidth <= 600\">\n                                    <ion-item lines=\"none\">\n                                      <ion-label color=\"medium\"\n                                        >{{ \"ارسال شده در \"\n                                        }}{{\n                                          comment.createDate | persianDate\n                                        }}</ion-label\n                                      >\n                                    </ion-item>\n                                  </ion-card-subtitle>\n                                  <ion-card-title>\n                                    <ion-item>\n                                      <ion-avatar slot=\"start\">\n                                        <img\n                                          src=\"{{\n                                            childComment.isTeacherAnswer\n                                              ? 'http://localhost:4300/assets/images/avatar.webp'\n                                              : 'http://localhost:4300/assets/images/user-avatar.webp'\n                                          }}\"\n                                        /> </ion-avatar\n                                      ><ion-label color=\"darker\"\n                                        ><ion-text\n                                          *ngIf=\"childComment.isTeacherAnswer\"\n                                          color=\"success\"\n                                        >\n                                          <ion-badge\n                                            color=\"success\"\n                                            mode=\"md\"\n                                            >{{ \"مدرس\" }}</ion-badge\n                                          >\n                                        </ion-text>\n                                        {{ childComment.userName }}\n                                        <ion-text\n                                          color=\"medium\"\n                                          *ngIf=\"windowWidth > 600\"\n                                        >\n                                          {{ \" - ارسال شده در \"\n                                          }}{{\n                                            childComment.createDate\n                                              | persianDate\n                                          }}\n                                        </ion-text>\n                                      </ion-label>\n                                    </ion-item></ion-card-title\n                                  >\n                                </ion-card-header>\n                                <ion-card-content>\n                                  <ion-text class=\"description\" color=\"light\">\n                                    {{ childComment.comment }}\n                                  </ion-text>\n                                </ion-card-content>\n                              </div>\n                            </section>\n                          </ion-card-content>\n                        </ion-card>\n                      </section>\n                    </ion-card-content>\n                  </ion-list>\n\n                  <ion-infinite-scroll\n                    *ngIf=\"isFirstCommentShow && commentReqCount < 1\"\n                    threshold=\"250px\"\n                    (ionInfinite)=\"loadData($event)\"\n                  >\n                    <ion-infinite-scroll-content\n                      loadingSpinner=\"bubbles\"\n                      loadingText=\"بارگذاری نظرات...\"\n                    >\n                    </ion-infinite-scroll-content>\n                  </ion-infinite-scroll>\n\n                  <ion-button\n                    [disabled]=\"isLoadingComments || isMoreCommentsDisable\"\n                    color=\"telegram\"\n                    *ngIf=\"isFirstCommentShow && commentReqCount >= 1\"\n                    (click)=\"loadData2()\"\n                    expand=\"block\"\n                    fill=\"clear\"\n                    shape=\"round\"\n                  >\n                    نظرات بیشتر\n                  </ion-button>\n\n                  <section dir=\"ltr\" *ngIf=\"isLoadingComments\">\n                    <div class=\"text-center\">\n                      <ion-spinner name=\"dots\"></ion-spinner>\n                    </div>\n                  </section>\n                </ion-card>\n              </section>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-card>\n                <ion-card-header dir=\"rtl\" color=\"primary\">\n                  <ion-card-subtitle\n                    ><a\n                      *ngIf=\"catIds !== ''\"\n                      class=\"decoration-none\"\n                      routerLink=\"/Home/Search\"\n                      [queryParams]=\"{ categoryIds: catIds, page: 1, take: 12 }\"\n                      ><ion-text class=\"link\" color=\"lightest\">\n                        مشاهده همه\n                      </ion-text></a\n                    ></ion-card-subtitle\n                  >\n                  <ion-card-title class=\"text-center\"\n                    >دوره های مرتبط</ion-card-title\n                  >\n                </ion-card-header>\n                <ion-card-content>\n                  <swiper\n                    dir=\"rtl\"\n                    *ngIf=\"sameCourse.length > 0\"\n                    #swiperRef\n                    [centeredSlides]=\"false\"\n                    [spaceBetween]=\"30\"\n                    [pagination]=\"{\n                      type: 'bullets',\n                      clickable: true\n                    }\"\n                    [navigation]=\"true\"\n                    [breakpoints]=\"{\n                      '@0.00': {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                      },\n                      '@0.75': {\n                        slidesPerView: 2,\n                        spaceBetween: 20\n                      },\n                      '@1.00': {\n                        slidesPerView: 3,\n                        spaceBetween: 40\n                      },\n                      '@1.50': {\n                        slidesPerView: 4,\n                        spaceBetween: 50\n                      }\n                    }\"\n                    class=\"mySwiper\"\n                  >\n                    <ng-template swiperSlide *ngFor=\"let item of sameCourse\">\n                      <app-course [course]=\"item\"></app-course>\n                    </ng-template>\n                  </swiper>\n                  <section *ngIf=\"sameCourse.length == 0\">\n                    <div dir=\"ltr\" class=\"text-center\">\n                      <ion-spinner name=\"dots\"></ion-spinner>\n                    </div>\n                  </section>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n\n          <ion-toolbar\n            dir=\"rtl\"\n            class=\"fixed-bottom-sticky2 round\"\n            *ngIf=\"checkBuy && checkBuy2 && !isBuyLoading && !course.isStopped && course.isBuy\"\n          >\n            <ion-button\n              *ngIf=\"!course.isStopped\"\n              class=\"ion-margin\"\n              fill=\"solid\"\n              expand=\"block\"\n              color=\"success\"\n              shape=\"round\"\n              (click)=\"onBuy()\"\n            >\n              ثبت نام در این دوره\n            </ion-button>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"!course\">\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\" size-md=\"8\" offset-md=\"2\">\n          <ion-card dir=\"rtl\">\n            <ion-card-header>\n              <ion-card-subtitle class=\"text-center\"\n                >موردی یافت نشد</ion-card-subtitle\n              >\n              <ion-card-title class=\"text-center\">خطای 404</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-img\n                class=\"no-found\"\n                src=\"./assets/images/error404.png\"\n              ></ion-img>\n              <ion-footer>\n                <ion-toolbar>\n                  <ion-title\n                    ><h2 class=\"text-center mmargin\">\n                      موردی یافت نشد\n                    </h2></ion-title\n                  >\n                </ion-toolbar>\n              </ion-footer>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"isLoading\" class=\"bg\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\" offset=\"1\" size-md=\"8\" offset-md=\"2\">\n          <ion-card dir=\"rtl\">\n            <ion-card-header>\n              <ion-card-title class=\"text-center\">درحال دریافت</ion-card-title>\n            </ion-card-header>\n            <ion-card-content dir=\"ltr\">\n              <div class=\"text-center\">\n                <ion-spinner name=\"dots\"></ion-spinner>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- Educational Trust Guarantee Bar -->\n  <section class=\"edu-trust-bar\">\n    <div class=\"edu-trust-grid\">\n      <div class=\"edu-trust-item\">\n        <div class=\"edu-trust-icon purple\">\n          <ion-icon name=\"ribbon-outline\"></ion-icon>\n        </div>\n        <div>\n          <strong>تایید علمی سرگروه‌های آموزشی</strong>\n          <p>محتوای آموزشی تدوین‌شده توسط برترین آموزگاران و سرگروه‌های استانی کشور</p>\n        </div>\n      </div>\n      <div class=\"edu-trust-item\">\n        <div class=\"edu-trust-icon emerald\">\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n        </div>\n        <div>\n          <strong>ضمانت تطابق ۱۰۰٪ با کتب درسی</strong>\n          <p>منطبق بر آخرین اصلاحات و بودجه‌بندی رسمی وزارت آموزش و پرورش ۱۴۰۳-۱۴۰۴</p>\n        </div>\n      </div>\n      <div class=\"edu-trust-item\">\n        <div class=\"edu-trust-icon amber\">\n          <ion-icon name=\"cloud-download-outline\"></ion-icon>\n        </div>\n        <div>\n          <strong>دسترسی دائمی و دانلود آسان</strong>\n          <p>دسترسی نامحدود و مادام‌العمر به جلسات ویدئویی، کاربرگ‌ها و فایل‌های ضمیمه</p>\n        </div>\n      </div>\n      <div class=\"edu-trust-item\">\n        <div class=\"edu-trust-icon rose\">\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n        </div>\n        <div>\n          <strong>پشتیبانی و رفع اشکال کلاسی</strong>\n          <p>پشتیبانی مستقیم و پاسخگویی به سوالات همکاران در طول سال تحصیلی</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Teacher Educational Footer -->\n  <footer class=\"learning-footer\">\n    <div class=\"page-container footer-top\">\n      <div class=\"footer-brand-col\">\n        <a class=\"brand avalamooz-brand\" [routerLink]=\"url('/Home')\">\n          <img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" />\n          <div>\n            <b>{{ 'learn.brand' | translate }}</b>\n            <small>{{ 'learn.tagline' | translate }}</small>\n          </div>\n        </a>\n        <p class=\"footer-desc\">{{ 'learn.footer.description' | translate }}</p>\n        <div class=\"footer-domain-badge\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <span>پایگاه تخصصی معلمان ابتدایی: <b>avalamuz.ir</b></span>\n        </div>\n      </div>\n\n      <div class=\"footer-links-col\">\n        <h4>دسترسی سریع</h4>\n        <nav aria-label=\"دسترسی سریع\">\n          <a [routerLink]=\"url('/Home')\">صفحه اصلی اول آموز</a>\n          <a [routerLink]=\"url('/Course')\">دوره‌های آموزشی معلمان</a>\n          <a [routerLink]=\"url('/Product')\">محصولات و کاربرگ‌های کلاسی</a>\n          <a [routerLink]=\"url('/About')\">درباره اول آموز</a>\n          <a [routerLink]=\"url('/PrivacyPolicy')\">حریم خصوصی و قوانین</a>\n        </nav>\n      </div>\n\n      <div class=\"footer-trust-col\">\n        <h4>اعتماد و نمادهای الکترونیک</h4>\n        <div class=\"trust-seals-row\">\n          <a rel=\"nofollow\" target=\"_blank\" href=\"https://trustseal.enamad.ir/?id=207651&Code=OiBh1hbfIe7Ls83vvPMp\" title=\"نماد اعتماد الکترونیک\">\n            <img class=\"seal-img\" src=\"./assets/images/namade-etemad.png\" alt=\"نماد اعتماد الکترونیک\" />\n          </a>\n          <a rel=\"nofollow\" target=\"_blank\" href=\"https://www.zarinpal.com/trustPage/avalamooz.ir\" title=\"درگاه پرداخت امن زرین‌پال\">\n            <img class=\"seal-img\" src=\"./assets/images/zarinpal.svg\" alt=\"زرین‌پال\" />\n          </a>\n        </div>\n        <div class=\"trust-channels\">\n          <span class=\"trust-channels-label\">همراهی در شبکه‌های اجتماعی و پیام‌رسان‌ها:</span>\n          <div class=\"trust-channels-links\">\n            <a [href]=\"telegram\" target=\"_blank\" title=\"کانال تلگرام اول آموز\"><ion-icon name=\"paper-plane-outline\"></ion-icon></a>\n            <a [href]=\"aparat\" target=\"_blank\" title=\"کانال آپارات اول آموز\"><ion-icon src=\"/assets/icon/logo-aparat.svg\"></ion-icon></a>\n            <a [href]=\"instagram\" target=\"_blank\" title=\"اینستاگرام اول آموز\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"page-container footer-bottom\">\n      <span>{{ 'learn.footer.copyright' | translate }}</span>\n      <span>{{ 'learn.footer.made' | translate }} <span class=\"footer-heart\">♥</span></span>\n    </div>\n  </footer>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    style=\"{{\n      windowWidth <= 600 &&\n      checkBuy &&\n      checkBuy2 &&\n      !isBuyLoading &&\n      !course.isStopped &&\n      !course.isStopped\n        ? 'margin-bottom: 46px;'\n        : ''\n    }}\"\n  >\n    <ion-fab-button>\n      <ion-icon name=\"share-social-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"instagram\">\n        <a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ instagram }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-instagram\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"instagram\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ twitch }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-twitch\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"discord\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ discord }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-discord\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"danger\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ youtube }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-youtube\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"danger\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ pinterest }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-pinterest\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"facebook\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ facebook }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-facebook\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"twitter\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ twiter }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-twitter\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"twitter\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ linkedin }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"logo-linkedin\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"telegram\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ telegram }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            name=\"paper-plane-outline\"\n          ></ion-icon></a\n      ></ion-fab-button>\n      <ion-fab-button color=\"lightest\"\n        ><a\n          class=\"full-width full-height social-icon-container\"\n          href=\"{{ aparat }}\"\n          target=\"_blank\"\n        >\n          <ion-icon\n            class=\"social-icon\"\n            color=\"lightest\"\n            src=\"/assets/icon/logo-aparat.svg\"\n          ></ion-icon></a\n      ></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"start\"\n    slot=\"fixed\"\n    style=\"{{\n      windowWidth <= 600 &&\n      checkBuy &&\n      checkBuy2 &&\n      !isBuyLoading &&\n      !course.isStopped &&\n      !course.isStopped\n        ? 'margin-bottom: 46px;'\n        : ''\n    }}\"\n  >\n    <ion-fab-button color=\"warning\" (click)=\"goTop()\">\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_course_course-by-id_course-by-id_module_ts.js.map