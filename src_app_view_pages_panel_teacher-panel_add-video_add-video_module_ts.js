"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_teacher-panel_add-video_add-video_module_ts"],{

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

/***/ 16277:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-video/add-video-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVideoRoutingModule": () => (/* binding */ AddVideoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-video.component */ 23535);




const routes = [{ path: '', component: _add_video_component__WEBPACK_IMPORTED_MODULE_0__.AddVideoComponent }];
let AddVideoRoutingModule = class AddVideoRoutingModule {
};
AddVideoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AddVideoRoutingModule);



/***/ }),

/***/ 23535:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-video/add-video.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVideoComponent": () => (/* binding */ AddVideoComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-video.component.html?ngResource */ 64584);
/* harmony import */ var _add_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-video.component.scss?ngResource */ 30578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_model_course_CourseDetailModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/model/course/CourseDetailModel */ 40906);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/model/course/CourseVideoModel */ 46794);




/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */











let AddVideoComponent = class AddVideoComponent {
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
    this.selectedVideoId = 0;
    this.empty = false;
  }

  ngOnInit() {
    this.updateVideoForm = this.fb.group({
      videoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrlOnline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoNamePreview: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoTime: ['00:00', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(5)]],
      size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isAparat: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      order: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFile: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPredictionOnline: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPredictionPreview: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.addVideoForm = this.fb.group({
      videoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrlOnline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoTime: ['00:00', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(5)]],
      size: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isAparat: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFile: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPredictionOnline: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      videoNamePreview: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      hasPredictionPreview: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
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
        filter = filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, page, take, title);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(false, page, take, title);
        } else {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_6__.CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
        }
      }

      this.filteredCourses = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
      this.courseService.GetTeacherCoursesByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          this.empty = true;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  handleReorder(ev) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    //console.log('Before complete', this.courseDetail.courseVideos);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.courseDetail.courseVideos = ev.detail.complete(this.courseDetail.courseVideos);
    let count = 0;
    this.courseDetail.courseVideos.forEach(c => {
      this.courseDetail.courseVideos[count].order = count;
      count++;
    }); // After complete is called the items will be in the new order
    // console.log('After complete', this.courseDetail.courseVideos);
  }

  onOrderSet() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.UpdateVideoOrder(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.CourseVideoOrderModel(this.courseDetail.id, this.courseDetail.courseVideos)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.successToast(this.toastController);
        location.reload();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  trackItems(index, itemNumber) {
    return itemNumber;
  }

  onSelectVideo(index) {
    this.selectedVideoIndex = +index;
    this.updateVideoForm.setValue({
      videoName: this.courseDetail.courseVideos[+index].courseTitle,
      videoUrl: this.courseDetail.courseVideos[+index].videoUrl,
      videoUrlOnline: this.courseDetail.courseVideos[+index].videoUrlOnline,
      videoNamePreview: this.courseDetail.courseVideos[+index].videoNamePreview,
      videoDescription: this.courseDetail.courseVideos[+index].videoDescription,
      videoTime: this.courseDetail.courseVideos[+index].videoTime,
      size: this.courseDetail.courseVideos[+index].size,
      isFree: this.courseDetail.courseVideos[+index].isFree,
      isFile: this.courseDetail.courseVideos[+index].isFile,
      isAparat: this.courseDetail.courseVideos[+index].isAparat,
      order: this.courseDetail.courseVideos[+index].order,
      hasPrediction: this.courseDetail.courseVideos[+index].hasPrediction,
      hasPredictionOnline: this.courseDetail.courseVideos[+index].hasPredictionOnline,
      hasPredictionPreview: this.courseDetail.courseVideos[+index].hasPredictionPreview
    });
    this.selectedVideoId = this.courseDetail.courseVideos[+index].id;
  }

  presentAlertConfirm(index) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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
            _this.onDelete(index);
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

  presentAlertConfirm3() {
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
            _this3.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    this.selectedVideoIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteVideo(this.courseDetail.courseVideos[this.selectedVideoIndex].id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        this.courseDetail.courseVideos.splice(this.selectedVideoIndex, 1);
        this.updateVideoForm.setValue({
          videoName: '',
          videoDescription: '',
          videoUrl: '',
          videoUrlOnline: '',
          videoNamePreview: '',
          size: '',
          videoTime: '00:00',
          isFree: false,
          isAparat: false,
          order: 0,
          isFile: false,
          hasPrediction: false,
          hasPredictionOnline: false,
          hasPredictionPreview: false
        }); // this.selectedCourseId = 0;
        // this.courseSelected = false;
        // this.setQueryParams(1);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.updateVideoForm.valid || this.selectedVideoIndex != -1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
      this.courseService.AddOrUpdateVideo(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.AddOrUpdateCourseVideoModel(this.courseDetail.id, new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.CourseVideoModel(this.courseDetail.courseVideos[this.selectedVideoIndex].id, false, this.updateVideoForm.value.videoName, this.updateVideoForm.value.videoUrl, this.updateVideoForm.value.videoTime, this.updateVideoForm.value.isFree, this.updateVideoForm.value.videoDescription, this.updateVideoForm.value.isFile, this.updateVideoForm.value.isAparat, this.updateVideoForm.value.videoUrlOnline, this.updateVideoForm.value.hasPrediction, this.updateVideoForm.value.hasPredictionOnline, this.updateVideoForm.value.hasPredictionPreview, this.updateVideoForm.value.videoNamePreview, this.updateVideoForm.value.size, this.updateVideoForm.value.order))).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.courseDetail.courseVideos[this.selectedVideoIndex].courseTitle = this.updateVideoForm.value.videoName;
          this.courseDetail.courseVideos[this.selectedVideoIndex].isAparat = this.updateVideoForm.value.isAparat;
          this.courseDetail.courseVideos[this.selectedVideoIndex].order = this.updateVideoForm.value.order;
          this.courseDetail.courseVideos[this.selectedVideoIndex].isFile = this.updateVideoForm.value.isFile;
          this.courseDetail.courseVideos[this.selectedVideoIndex].isFree = this.updateVideoForm.value.isFree;
          this.courseDetail.courseVideos[this.selectedVideoIndex].videoDescription = this.updateVideoForm.value.videoDescription;
          this.courseDetail.courseVideos[this.selectedVideoIndex].videoTime = this.updateVideoForm.value.videoTime;
          this.courseDetail.courseVideos[this.selectedVideoIndex].size = this.updateVideoForm.value.size;
          this.courseDetail.courseVideos[this.selectedVideoIndex].videoUrl = this.updateVideoForm.value.videoUrl;
          this.courseDetail.courseVideos[this.selectedVideoIndex].videoUrlOnline = this.updateVideoForm.value.videoUrlOnline;
          this.courseDetail.courseVideos[this.selectedVideoIndex].hasPrediction = this.updateVideoForm.value.hasPrediction;
          this.courseDetail.courseVideos[this.selectedVideoIndex].hasPredictionOnline = this.updateVideoForm.value.hasPredictionOnline;
          this.courseDetail.courseVideos[this.selectedVideoIndex].videoNamePreview = this.updateVideoForm.value.videoNamePreview;
          this.courseDetail.courseVideos[this.selectedVideoIndex].hasPredictionPreview = this.updateVideoForm.value.hasPredictionPreview;
          this.updateVideoForm.setValue({
            videoName: '',
            videoDescription: '',
            videoUrl: '',
            videoUrlOnline: '',
            videoNamePreview: '',
            size: '',
            videoTime: '00:00',
            isFree: false,
            isAparat: false,
            order: 0,
            isFile: false,
            hasPrediction: false,
            hasPredictionOnline: false,
            hasPredictionPreview: false
          });
          this.selectedVideoIndex = -1; // this.onSelectItem(this.course);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd() {
    if (this.addVideoForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
      this.courseService.AddOrUpdateVideo(new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.AddOrUpdateCourseVideoModel(this.courseDetail.id, new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.CourseVideoModel(null, false, this.addVideoForm.value.videoName, this.addVideoForm.value.videoUrl, this.addVideoForm.value.videoTime, this.addVideoForm.value.isFree, this.addVideoForm.value.videoDescription, this.addVideoForm.value.isFile, this.addVideoForm.value.isAparat, this.addVideoForm.value.videoUrlOnline, this.addVideoForm.value.hasPrediction, this.addVideoForm.value.hasPredictionOnline, this.addVideoForm.value.hasPredictionPreview, this.addVideoForm.value.videoNamePreview, this.addVideoForm.value.size, 0))).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addVideoForm.setValue({
            videoName: '',
            videoDescription: '',
            videoUrl: '',
            videoUrlOnline: '',
            videoNamePreview: '',
            size: '',
            videoTime: '00:00',
            isFree: false,
            isAparat: false,
            isFile: false,
            hasPrediction: false,
            hasPredictionOnline: false,
            hasPredictionPreview: false
          });
          this.onSelectItem(this.course);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.unSuccessToast(this.toastController);
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
    this.router.navigate(['TeacherPanel', 'AddVideo'], {
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
    // eslint-disable-next-line max-len

    this.courseDetail = new src_app_data_model_course_CourseDetailModel__WEBPACK_IMPORTED_MODULE_3__.CourseDetailModel(this.selectedCourseId, model.name, model.price, model.offPrice, 0, model.shortDescription, model.description, model.imageUrl, '', '', model.createDate, model.lastUpdateDate, [], [], [], false, model.teacher, false, model.isActive, '', '', '', 100);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.GetTeacherCourseDetailVideosById(this.selectedCourseId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        const video = [];
        res.data.forEach(v => {
          video.push( // tslint:disable-next-line: max-line-length
          new _data_model_course_CourseVideoModel__WEBPACK_IMPORTED_MODULE_8__.CourseVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline, v.hasPredictionPreview, v.videoNamePreview, v.size, v.order));
        });
        this.courseDetail.courseVideos = video;
        this.updateVideoForm.setValue({
          videoName: '',
          videoDescription: '',
          videoUrl: '',
          videoUrlOnline: '',
          videoNamePreview: '',
          size: '',
          videoTime: '00:00',
          isFree: false,
          isAparat: false,
          order: 0,
          isFile: false,
          hasPrediction: false,
          hasPredictionOnline: false,
          hasPredictionPreview: false
        });
        this.courseSelected = true;
      } else {
        this.courseDetail.courseVideos = [];
        this.selectedCourseId = 0;
        this.courseSelected = false;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      this.courseDetail.courseVideos = [];
      this.selectedCourseId = 0;
      this.courseSelected = false;
    }); // if (model.isActive) {
    //   this.courseService.GetTeacherCourseById(+model.id).subscribe(
    //     res => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       if (GResponse.SuccessStatus === res.status) {
    //         this.courseDetail = res.data;
    //         this.updateVideoForm.setValue({
    //           videoName: '',
    //           videoDescription: '',
    //           videoUrl: '',
    //           videoUrlOnline: '',
    //           videoTime: '00:00',
    //           isFree: false,
    //           isAparat: false,
    //           isFile: false
    //         });
    //         this.courseSelected = true;
    //       } else {
    //         SharedIonic.unSuccessToast(this.toastController);
    //         this.selectedCourseId = 0;
    //         this.courseSelected = false;
    //       }
    //     },
    //     err => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       SharedIonic.unSuccessToast(this.toastController);
    //       this.selectedCourseId = 0;
    //       this.courseSelected = false;
    //     }
    //   );
    // } else {
    //   this.courseService.GetDeActiveCourseById(+model.id).subscribe(
    //     res => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       if (GResponse.SuccessStatus === res.status) {
    //         this.courseDetail = res.data;
    //         this.updateVideoForm.setValue({
    //           videoName: '',
    //           videoDescription: '',
    //           videoUrl: '',
    //           videoUrlOnline: '',
    //           videoTime: '00:00',
    //           isFree: false,
    //           isAparat: false,
    //           isFile: false
    //         });
    //         this.courseSelected = true;
    //       } else {
    //         SharedIonic.unSuccessToast(this.toastController);
    //         this.selectedCourseId = 0;
    //         this.courseSelected = false;
    //       }
    //     },
    //     err => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       SharedIonic.unSuccessToast(this.toastController);
    //       this.selectedCourseId = 0;
    //       this.courseSelected = false;
    //     }
    //   );
    // }
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

AddVideoComponent.ctorParameters = () => [{
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__.CourseService
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

AddVideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-add-video',
  template: _add_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddVideoComponent);


/***/ }),

/***/ 87777:
/*!******************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-video/add-video.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVideoModule": () => (/* binding */ AddVideoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_video_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-video-routing.module */ 16277);
/* harmony import */ var _add_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-video.component */ 23535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/course/shared-course.module */ 44704);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);













let AddVideoModule = class AddVideoModule {
};
AddVideoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_add_video_component__WEBPACK_IMPORTED_MODULE_2__.AddVideoComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _add_video_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddVideoRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_5__.SharedCourseModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule
        ]
    })
], AddVideoModule);



/***/ }),

/***/ 30578:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-video/add-video.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJhZGQtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 64584:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-video/add-video.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TeacherPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ویدئو دوره</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>دوره های شما</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"empty\" dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n              </ion-text>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-course\r\n                      class=\"point\"\r\n                      [course]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-teacher-course>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    *ngIf=\"courseSelected\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\">\r\n        <ion-segment-button value=\"Add\">\r\n          <ion-label>درج</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update\">\r\n          <ion-label>ویرایش</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addVideoForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج ویدئو</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >عنوان ویدئو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"videoName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >توضیح ویدئو\r\n                </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"توضیح\"\r\n                  formControlName=\"videoDescription\"\r\n                  autoGrow=\"true\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو فشرده شده\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoUrl\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو آنلاین\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoUrlOnline\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو پیش نمایش\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoNamePreview\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >مدت زمان ویدیو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"00:00\"\r\n                  formControlName=\"videoTime\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >حجم فایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"1 MB\"\r\n                  formControlName=\"size\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"podium-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label> رایگان است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isFree\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ویدیو در آپارات است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isAparat\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>فایل غیر ویدئو است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isFile\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس ویدیو کامل است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPrediction\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس ویدیو آنلاین کامل است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPredictionOnline\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس ویدیو پیش نمایش کامل نیست؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPredictionPreview\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addVideoForm.invalid\"\r\n          >\r\n            درج ویدیو\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"onCancel()\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"danger\"\r\n          >\r\n            بازگشت\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>ویدئو ها</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"courseDetail.courseVideos.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز ویدیویی درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <ion-button\r\n              *ngIf=\"courseDetail.courseVideos.length > 0\"\r\n              class=\"ion-margin\"\r\n              (click)=\"onOrderSet()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"warning\"\r\n            >\r\n              درج ترتیب ویدیو ها\r\n            </ion-button>\r\n            <div *ngIf=\"courseDetail.courseVideos.length > 0\">\r\n              <ion-reorder-group\r\n                [disabled]=\"false\"\r\n                (ionItemReorder)=\"handleReorder($any($event))\"\r\n              >\r\n                <ion-item\r\n                  *ngFor=\"let video of courseDetail.courseVideos; let i = index\"\r\n                  button\r\n                  (click)=\"onSelectVideo(i)\"\r\n                >\r\n                  <ion-label\r\n                    color=\"{{ selectedVideoIndex == i ? 'warning2' : '' }}\"\r\n                    >{{ i + 1 + \"- \" + video.courseTitle }}</ion-label\r\n                  >\r\n                  <ion-text color=\"{{ video.isActive ? 'success' : 'danger' }}\">\r\n                    {{ video.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-reorder slot=\"end\"></ion-reorder>\r\n                </ion-item>\r\n              </ion-reorder-group>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateVideoForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش ویدئو</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-text color=\"warning\">\r\n                  {{ \"ID: \" + selectedVideoId }}\r\n                </ion-text>\r\n                <ion-icon slot=\"start\" name=\"id-card-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >عنوان ویدئو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"videoName\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >توضیح ویدئو\r\n                </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"توضیح\"\r\n                  formControlName=\"videoDescription\"\r\n                  autoGrow=\"true\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو فشرده شده\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoUrl\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو آنلاین\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoUrlOnline\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >آدرس ویدئو پیش نمایش\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"videoNamePreview\"\r\n                  type=\"url\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\">اولویت </ion-label>\r\n                <ion-input\r\n                  [disabled]=\"true\"\r\n                  placeholder=\"0\"\r\n                  formControlName=\"order\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"reorder-two-outline\"></ion-icon>\r\n              </ion-item>\r\n              <!-- <ion-item>\r\n                <ion-text color=\"warning\">\r\n                  {{ \"اولویت\" + updateVideoForm.value.order }}\r\n                </ion-text>\r\n                <ion-icon slot=\"start\" name=\"reorder-two-outline\"></ion-icon>\r\n              </ion-item> -->\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >مدت زمان ویدیو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"00:00\"\r\n                  formControlName=\"videoTime\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"light\"\r\n                  >حجم فایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"1 MB\"\r\n                  formControlName=\"size\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"podium-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label> رایگان است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isFree\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ویدیو در آپارات است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isAparat\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>فایل غیر ویدئو است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isFile\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس ویدیو کامل است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPrediction\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>آدرس ویدیو آنلاین کامل است؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPredictionOnline\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>ویدیو پیش نمایش در آپارات نیست؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"hasPredictionPreview\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateVideoForm.invalid || selectedVideoIndex === -1\"\r\n          >\r\n            ویرایش ویدیو\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"onCancel()\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"danger\"\r\n          >\r\n            بازگشت\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_teacher-panel_add-video_add-video_module_ts.js.map