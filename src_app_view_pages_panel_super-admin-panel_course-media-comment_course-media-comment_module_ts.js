"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_course-media-comment_course-media-comment_module_ts"],{

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

/***/ 42933:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/course-media-comment/course-media-comment-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMediaCommentPageRoutingModule": () => (/* binding */ CourseMediaCommentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _course_media_comment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-media-comment.page */ 27300);




const routes = [
    {
        path: '',
        component: _course_media_comment_page__WEBPACK_IMPORTED_MODULE_0__.CourseMediaCommentPage
    }
];
let CourseMediaCommentPageRoutingModule = class CourseMediaCommentPageRoutingModule {
};
CourseMediaCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseMediaCommentPageRoutingModule);



/***/ }),

/***/ 92083:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/course-media-comment/course-media-comment.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMediaCommentPageModule": () => (/* binding */ CourseMediaCommentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _course_media_comment_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-media-comment-routing.module */ 42933);
/* harmony import */ var _course_media_comment_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-media-comment.page */ 27300);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/course/shared-course.module */ 44704);













let CourseMediaCommentPageModule = class CourseMediaCommentPageModule {
};
CourseMediaCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _course_media_comment_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseMediaCommentPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_6__.SharedCourseModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ],
        declarations: [_course_media_comment_page__WEBPACK_IMPORTED_MODULE_2__.CourseMediaCommentPage]
    })
], CourseMediaCommentPageModule);



/***/ }),

/***/ 27300:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/course-media-comment/course-media-comment.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseMediaCommentPage": () => (/* binding */ CourseMediaCommentPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _course_media_comment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-media-comment.page.html?ngResource */ 16402);
/* harmony import */ var _course_media_comment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-media-comment.page.scss?ngResource */ 33365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_course_CourseDetailModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/course/CourseDetailModel */ 40906);
/* harmony import */ var _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/course/CourseModel */ 51474);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);




/* eslint-disable eqeqeq */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */











let CourseMediaCommentPage = class CourseMediaCommentPage {
  constructor(courseService, fb, toastController, loadingController, activatedRoute, alertController, router) {
    this.courseService = courseService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.alertController = alertController;
    this.router = router;
    this.segmentSelected = 'Add';
    this.searchTitle = '';
    this.selectedCourseId = 0;
    this.courseSelected = false;
    this.selectedVideoIndex = -1;
    this.empty = false;
  }

  ngOnInit() {
    this.updateVideoForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      buyerUserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      logoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      voiceAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      imageAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      userPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      isActive: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTop: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isShow: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTeacherAnswer: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.addVideoForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      buyerUserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
      logoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      voiceAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      imageAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      userPhoto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      isActive: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTop: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isShow: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTeacherAnswer: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      const startPrice = params.startPrice ? params.startPrice : null;
      const endPrice = params.endPrice ? params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : [];
      const sortId = params.sortId ? params.sortId : 4;

      if (page === undefined) {
        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, page, take, title);
        } else {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
        }
      }

      this.filteredCourses = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.courseService.GetAdminCoursesByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          this.empty = true;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onSelectVideo(index) {
    this.selectedVideoIndex = +index;
    this.updateVideoForm.setValue({
      comment: this.courseDetail.courseMediaComments[+index].comment,
      buyerUserId: this.courseDetail.courseMediaComments[+index].buyerUserId,
      logoName: this.courseDetail.courseMediaComments[+index].logoName,
      voiceAddress: this.courseDetail.courseMediaComments[+index].voiceAddress,
      videoAddress: this.courseDetail.courseMediaComments[+index].videoAddress,
      imageAddress: this.courseDetail.courseMediaComments[+index].imageAddress,
      userPhoto: this.courseDetail.courseMediaComments[+index].userPhoto,
      isActive: this.courseDetail.courseMediaComments[+index].isActive,
      isTop: this.courseDetail.courseMediaComments[+index].isTop,
      isShow: this.courseDetail.courseMediaComments[+index].isShow,
      isTeacherAnswer: this.courseDetail.courseMediaComments[+index].isTeacherAnswer
    });
  }

  presentAlertConfirm3() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به درج هستید؟',
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

  presentAlertConfirm2() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به آپدیت هستید؟',
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

  presentAlertConfirm(index) {
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
    this.selectedVideoIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminDeleteUserVoice(this.courseDetail.courseMediaComments[this.selectedVideoIndex].id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.courseDetail.courseMediaComments.splice(this.selectedVideoIndex, 1);
        this.updateVideoForm.setValue({
          comment: '',
          buyerUserId: '',
          logoName: '',
          voiceAddress: '',
          videoAddress: '',
          imageAddress: '',
          userPhoto: '',
          isActive: false,
          isTop: false,
          isShow: false,
          isTeacherAnswer: false
        }); // this.selectedCourseId = 0;
        // this.courseSelected = false;
        // this.setQueryParams(1);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.updateVideoForm.valid || this.selectedVideoIndex != -1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      const video = new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_6__.CourseUserVoiceViewModel(this.courseDetail.courseMediaComments[this.selectedVideoIndex].id, this.updateVideoForm.value.buyerUserId, this.selectedCourseId, null, this.updateVideoForm.value.comment, '', this.updateVideoForm.value.logoName, this.updateVideoForm.value.voiceAddress, this.updateVideoForm.value.videoAddress, this.updateVideoForm.value.imageAddress, this.updateVideoForm.value.userPhoto, this.updateVideoForm.value.isActive, this.updateVideoForm.value.isTop, this.updateVideoForm.value.isShow, this.updateVideoForm.value.isTeacherAnswer);
      this.courseService.AdminAddOrUpdateUserVoice(video).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].comment = this.updateVideoForm.value.comment;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].buyerUserId = this.updateVideoForm.value.buyerUserId;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].logoName = this.updateVideoForm.value.logoName;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].voiceAddress = this.updateVideoForm.value.voiceAddress;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].videoAddress = this.updateVideoForm.value.videoAddress;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].imageAddress = this.updateVideoForm.value.imageAddress;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].userPhoto = this.updateVideoForm.value.userPhoto;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].isActive = this.updateVideoForm.value.isActive;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].isTop = this.updateVideoForm.value.isTop;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].isShow = this.updateVideoForm.value.isShow;
          this.courseDetail.courseMediaComments[this.selectedVideoIndex].isTeacherAnswer = this.updateVideoForm.value.isTeacherAnswer;
          this.updateVideoForm.setValue({
            comment: '',
            buyerUserId: '',
            logoName: '',
            voiceAddress: '',
            videoAddress: '',
            imageAddress: '',
            userPhoto: '',
            isActive: false,
            isTop: false,
            isShow: false,
            isTeacherAnswer: false
          });
          this.selectedVideoIndex = -1; // this.onSelectItem(this.course);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd() {
    if (this.addVideoForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.courseService.AdminAddOrUpdateUserVoice(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_6__.CourseUserVoiceViewModel(0, this.addVideoForm.value.buyerUserId, this.selectedCourseId, null, this.addVideoForm.value.comment, '', this.addVideoForm.value.logoName, this.addVideoForm.value.voiceAddress, this.addVideoForm.value.videoAddress, this.addVideoForm.value.imageAddress, this.addVideoForm.value.userPhoto, this.addVideoForm.value.isActive, this.addVideoForm.value.isTop, this.addVideoForm.value.isShow, this.addVideoForm.value.isTeacherAnswer)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.addVideoForm.setValue({
            comment: '',
            buyerUserId: '',
            logoName: '',
            voiceAddress: '',
            videoAddress: '',
            imageAddress: '',
            userPhoto: '',
            isActive: false,
            isTop: false,
            isShow: false,
            isTeacherAnswer: false
          });
          this.onSelectItem(this.course);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.filteredCourses.startPage == null) {
      return;
    }

    if (this.filteredCourses.pageId > this.filteredCourses.startPage && +this.filteredCourses.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredCourses.pageId - 1);
    }
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

  setQueryParams(pageId) {
    this.filteredCourses.title = this.searchTitle;
    this.router.navigate(['SuperAdminPanel', 'CourseMediaComment'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredCourses.takeEntity ? this.filteredCourses.takeEntity : null,
        title: this.filteredCourses.title ? this.filteredCourses.title : null,
        startPrice: this.filteredCourses.startPrice ? this.filteredCourses.startPrice : null,
        endPrice: this.filteredCourses.endPrice ? this.filteredCourses.endPrice : null,
        categoryIds: this.filteredCourses.categoryIds ? this.filteredCourses.categoryIds : [],
        sortId: this.filteredCourses.sortId ? this.filteredCourses.sortId : 0
      }
    });
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model; // tslint:disable-next-line: max-line-length

    this.courseDetail = new _data_model_course_CourseDetailModel__WEBPACK_IMPORTED_MODULE_5__.CourseDetailModel(this.selectedCourseId, model.name, model.price, model.offPrice, 0, model.shortDescription, model.description, model.imageUrl, '', '', model.createDate, model.lastUpdateDate, [], [], [], false, model.teacher, false, model.isActive, '', '', '', 100);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.courseService.GetAdminCourseUserVoices(this.selectedCourseId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        const video = [];
        res.data.forEach(v => {
          video.push( // tslint:disable-next-line: max-line-length
          new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_6__.CourseUserVoiceViewModel(v.id, v.buyerUserId, v.courseId, v.parentId, v.comment, v.userName, v.logoName, v.voiceAddress, v.videoAddress, v.imageAddress, v.userPhoto, v.isActive, v.isTop, v.isShow, v.isTeacherAnswer));
        });
        this.courseDetail.courseMediaComments = video;
        this.updateVideoForm.setValue({
          comment: '',
          buyerUserId: '',
          logoName: '',
          voiceAddress: '',
          videoAddress: '',
          imageAddress: '',
          userPhoto: '',
          isActive: false,
          isTop: false,
          isShow: false,
          isTeacherAnswer: false
        });
        this.courseSelected = true;
      } else {
        this.courseDetail.courseVideos = [];
        this.selectedCourseId = 0;
        this.courseSelected = false;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      this.courseDetail.courseVideos = [];
      this.selectedCourseId = 0;
      this.courseSelected = false;
    });
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

CourseMediaCommentPage.ctorParameters = () => [{
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}];

CourseMediaCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-course-media-comment',
  template: _course_media_comment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_course_media_comment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CourseMediaCommentPage);


/***/ }),

/***/ 33365:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/course-media-comment/course-media-comment.page.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtbWVkaWEtY29tbWVudC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 16402:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/course-media-comment/course-media-comment.page.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>نظرات صوتی دوره</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>دوره های شما</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"empty\" dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n              </ion-text>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-course\r\n                      class=\"point\"\r\n                      [course]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-teacher-course>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    *ngIf=\"courseSelected\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\">\r\n        <ion-segment-button value=\"Add\">\r\n          <ion-label>درج</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update\">\r\n          <ion-label>ویرایش</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addVideoForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >کد کاربر\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"کد پرسنلی\"\r\n                  formControlName=\"buyerUserId\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >عکس پروفایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عکس پروفایل\"\r\n                  formControlName=\"userPhoto\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس ویس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"voiceAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس ویدئو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس عکس ضمیمه\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"imageAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >لوگو شبکه اجتماعی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"logoName\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نظر متنی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نظر متنی\"\r\n                  formControlName=\"comment\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label> فعال است؟</ion-label>\r\n                <ion-checkbox formControlName=\"isActive\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اولویت برتری دارد؟</ion-label>\r\n                <ion-checkbox formControlName=\"isTop\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نمایش در صفحه اصلی؟</ion-label>\r\n                <ion-checkbox formControlName=\"isShow\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پاسخ مدرس است؟</ion-label>\r\n                <ion-checkbox formControlName=\"isTeacherAnswer\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addVideoForm.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"onCancel()\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"danger\"\r\n          >\r\n            بازگشت\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>نظرات صوتی</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"courseDetail.courseMediaComments.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز نظری درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"courseDetail.courseMediaComments.length > 0\">\r\n              <ion-item\r\n                *ngFor=\"let video of courseDetail.courseMediaComments; let i = index\"\r\n                button\r\n                (click)=\"onSelectVideo(i)\"\r\n              >\r\n                <ion-label color=\"{{ selectedVideoIndex == i ? 'warning2' : '' }}\">{{ (i + 1) + '- ' + video.userName + \" (\" + video.buyerUserId + \")\"}}</ion-label>\r\n                <ion-text color=\"{{ video.isActive ? 'success' : 'danger' }}\">\r\n                  {{ video.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                </ion-text>\r\n                <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateVideoForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >کد کاربر\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"کد پرسنلی\"\r\n                  formControlName=\"buyerUserId\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >عکس پروفایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عکس پروفایل\"\r\n                  formControlName=\"userPhoto\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس ویس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"voiceAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس ویدئو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس عکس ضمیمه\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"imageAddress\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >لوگو شبکه اجتماعی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"logoName\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نظر متنی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نظر متنی\"\r\n                  formControlName=\"comment\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label> فعال است؟</ion-label>\r\n                <ion-checkbox formControlName=\"isActive\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>اولویت برتری دارد؟</ion-label>\r\n                <ion-checkbox formControlName=\"isTop\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نمایش در صفحه اصلی؟</ion-label>\r\n                <ion-checkbox formControlName=\"isShow\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>پاسخ مدرس است؟</ion-label>\r\n                <ion-checkbox formControlName=\"isTeacherAnswer\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateVideoForm.invalid || selectedVideoIndex === -1\"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"onCancel()\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"danger\"\r\n          >\r\n            بازگشت\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_course-media-comment_course-media-comment_module_ts.js.map