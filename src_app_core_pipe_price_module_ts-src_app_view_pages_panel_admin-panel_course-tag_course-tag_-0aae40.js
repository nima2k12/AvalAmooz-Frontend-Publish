"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_course-tag_course-tag_-0aae40"],{

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

/***/ 80905:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/course-tag/course-tag-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseTagRoutingModule": () => (/* binding */ CourseTagRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _course_tag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-tag.component */ 77087);




const routes = [{ path: '', component: _course_tag_component__WEBPACK_IMPORTED_MODULE_0__.CourseTagComponent }];
let CourseTagRoutingModule = class CourseTagRoutingModule {
};
CourseTagRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CourseTagRoutingModule);



/***/ }),

/***/ 77087:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/course-tag/course-tag.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseTagComponent": () => (/* binding */ CourseTagComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _course_tag_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-tag.component.html?ngResource */ 40457);
/* harmony import */ var _course_tag_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-tag.component.scss?ngResource */ 59250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/course/CourseModel */ 51474);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);













let CourseTagComponent = class CourseTagComponent {
  constructor(fb, courseService, toastController, loadingController, activatedRoute, router, alertController) {
    this.fb = fb;
    this.courseService = courseService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.alertController = alertController;
    this.selectedCourseId = 0;
    this.isSelected = false;
    this.searchTitle = '';
    this.selectedCategory = 'add';
    this.addList = [];
    this.editList = [];
    this.tagName = '';
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      tag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(2000)]]
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
      filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
      this.filteredCourses = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.courseService.GetAdminCoursesByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onTagSelected(index) {
    let model = this.editList[index];
    this.form.setValue({
      id: model.id,
      tag: model.name
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
            _this.onAddTags();
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
            _this2.onUpdateTags();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemoveEditTag(index) {
    let model = this.editList[index];
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.RemoveCourseTag(model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.getTagsByCourseId(this.selectedCourseId);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onCancel() {
    this.isSelected = false;
    this.addList = [];
    this.editList = [];
    this.tagName = '';
  }

  onAddTag() {
    if (this.tagName === '') {
      return;
    }

    this.addList.push(this.tagName);
    this.tagName = '';
  }

  onUpdateTags() {
    if (!this.form.valid) {
      return;
    }

    let list = [];
    this.editList.forEach(tag => {
      if (+this.form.value.id === +tag.id) {
        list.push(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__.CourseTagModel(tag.id, this.form.value.tag));
      } else {
        list.push(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__.CourseTagModel(tag.id, tag.name));
      }
    });
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AddOrUpdateCourseTag(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateCourseTagModel(this.selectedCourseId, list)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.tagName = '';
        this.addList = [];
        list = [];
        this.getTagsByCourseId(this.selectedCourseId);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onAddTags() {
    if (this.addList.length === 0) {
      return;
    }

    let list = [];
    this.addList.forEach(tag => {
      list.push(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__.CourseTagModel(0, tag));
    });
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AddOrUpdateCourseTag(new _data_model_course_CourseModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateCourseTagModel(this.selectedCourseId, list)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.tagName = '';
        this.addList = [];
        list = [];
        this.getTagsByCourseId(this.selectedCourseId);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onRemoveAddTag(index) {
    this.addList.splice(+index, 1);
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
    this.router.navigate(['AdminPanel', 'CourseTag'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredCourses.takeEntity ? this.filteredCourses.takeEntity : null,
        title: this.filteredCourses.title ? this.filteredCourses.title : null
      }
    });
  }

  onDelete() {// SharedIonic.loading(this.loadingController);
    // this.articleService.DeleteArticleById(+this.selectedArticleId).subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (GResponse.SuccessStatus === res.status) {
    //       SharedIonic.successToast(this.toastController);
    //       this.setQueryParams(1);
    //     } else {
    //       SharedIonic.unSuccessToast(this.toastController);
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.unSuccessToast(this.toastController);
    //   }
    // );
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
            _this3.onRemoveAddTag(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentRemoveAlertConfirm(index) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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
            _this4.onRemoveEditTag(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSelectItem(id) {
    this.selectedCourseId = +id;
    this.isSelected = true;
    this.getTagsByCourseId(id);
  }

  getTagsByCourseId(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetCourseTags(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        this.editList = res.data;
        this.form.setValue({
          id: 0,
          tag: ''
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

};

CourseTagComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_7__.CourseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}];

CourseTagComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-course-tag',
  template: _course_tag_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_course_tag_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CourseTagComponent);


/***/ }),

/***/ 40153:
/*!******************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/course-tag/course-tag.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseTagModule": () => (/* binding */ CourseTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _course_tag_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-tag-routing.module */ 80905);
/* harmony import */ var _course_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-tag.component */ 77087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/course/shared-course.module */ 44704);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/app/footer/footer.module */ 60412);












let CourseTagModule = class CourseTagModule {
};
CourseTagModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_course_tag_component__WEBPACK_IMPORTED_MODULE_2__.CourseTagComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _course_tag_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseTagRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_3__.SharedCourseModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule
        ]
    })
], CourseTagModule);



/***/ }),

/***/ 59250:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/course-tag/course-tag.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtdGFnLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 40457:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/course-tag/course-tag.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>برچسب دوره</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar\r\n    color=\"primary\"\r\n    class=\"ion-margin-top\"\r\n    dir=\"rtl\"\r\n    *ngIf=\"isSelected\"\r\n  >\r\n    <ion-segment [(ngModel)]=\"selectedCategory\">\r\n      <ion-segment-button value=\"add\">\r\n        <ion-icon name=\"build-outline\"></ion-icon>\r\n        <ion-label>درج برچسب</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"edit\">\r\n        <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n        <ion-label>ویرایش برچسب</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>دوره ها</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredCourses && !isSelected\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let coursee of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-course\r\n                      class=\"point\"\r\n                      [course]=\"coursee\"\r\n                      (SelectEvent)=\"onSelectItem($event)\"\r\n                    ></app-teacher-course>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div *ngIf=\"isSelected\" dir=\"rtl\">\r\n              <div *ngIf=\"selectedCategory == 'add'\">\r\n                <ion-list>\r\n                  <ion-list-header>\r\n                    <ion-label>درج برچسب</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >عنوان برچسب</ion-label\r\n                    >\r\n                    <ion-input\r\n                      (keyup.enter)=\"onAddTag()\"\r\n                      type=\"text\"\r\n                      placeholder=\"عنوان برچسب\"\r\n                      [(ngModel)]=\"tagName\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  color=\"success\"\r\n                  (click)=\"onAddTag()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                >\r\n                  درج برچسب\r\n                </ion-button>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  (click)=\"onCancel()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  بازگشت\r\n                </ion-button>\r\n                <ion-card class=\"ion-margin-top\" *ngIf=\"addList.length > 0\">\r\n                  <ion-card-header color=\"primary\">\r\n                    <ion-card-title class=\"text-center\"\r\n                      >لیست درج برچسب</ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-list>\r\n                      <ion-item *ngFor=\"let tag of addList; let i = index\">\r\n                        <ion-label>{{ tag }}</ion-label>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          (click)=\"presentAlertConfirm(i)\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"trash-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                    <ion-button\r\n                      class=\"ion-margin\"\r\n                      color=\"success\"\r\n                      (click)=\"presentAlertConfirm3()\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                    >\r\n                      درج تمام برچسب ها\r\n                    </ion-button>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </div>\r\n              <div *ngIf=\"selectedCategory == 'edit'\" dir=\"rtl\">\r\n                <ion-list *ngIf=\"editList\">\r\n                  <ion-list-header>\r\n                    <ion-label>برچسب های دوره</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item\r\n                    button\r\n                    (click)=\"onTagSelected(i)\"\r\n                    *ngFor=\"let tag of editList; let i = index\"\r\n                  >\r\n                    <ion-label>{{ tag.name }}</ion-label>\r\n                    <ion-button (click)=\"presentRemoveAlertConfirm(i)\">\r\n                      <ion-icon\r\n                        slot=\"icon-only\"\r\n                        name=\"trash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n                  <ion-list>\r\n                    <ion-list-header>\r\n                      <ion-label>ویرایش برچسب</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >عنوان برچسب\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"tag\" type=\"text\"></ion-input>\r\n                      <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"form.invalid\"\r\n                  >\r\n                    اعمال ویرایش\r\n                  </ion-button>\r\n\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    (click)=\"onCancel()\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"danger\"\r\n                  >\r\n                    بازگشت\r\n                  </ion-button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_course-tag_course-tag_-0aae40.js.map