"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_teacher-panel_update-course_update-course_module_ts"],{

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

/***/ 43638:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/update-course/update-course-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCourseRoutingModule": () => (/* binding */ UpdateCourseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-course.component */ 72678);




const routes = [{ path: '', component: _update_course_component__WEBPACK_IMPORTED_MODULE_0__.UpdateCourseComponent }];
let UpdateCourseRoutingModule = class UpdateCourseRoutingModule {
};
UpdateCourseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UpdateCourseRoutingModule);



/***/ }),

/***/ 72678:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/update-course/update-course.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCourseComponent": () => (/* binding */ UpdateCourseComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-course.component.html?ngResource */ 79503);
/* harmony import */ var _update_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-course.component.scss?ngResource */ 28914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_data_model_course_AddOrUpdateCourseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data/model/course/AddOrUpdateCourseModel */ 45978);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */












let UpdateCourseComponent = class UpdateCourseComponent {
  constructor(courseService, fb, toastController, loadingController, activatedRoute, router, domSanitizer, alertController) {
    this.courseService = courseService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
    this.isCan = true;
    this.priceType = 'free';
    this.teacherPercent = -1;
    this.searchTitle = '';
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'توضیحات کوتاه...',
      translate: 'no',
      sanitize: true
    };
    this.editorConfig2 = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'توضیحات اصلی...',
      translate: 'no',
      sanitize: true
    };
    this.selectedCourseId = 0;
    this.courseSelected = false;
    this.courseCategoryIds = [];
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
    this.empty = false;
  }

  ngOnInit() {
    this.updateCourseForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200)]],
      price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      offPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(2009000000000000000)]],
      imageUrl: ['http://localhost:4300/assets/images/course/in-progress.webp', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      imageNamePNG: ['http://localhost:4300/assets/images/course/in-progress.png', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['vflrB', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      level: ['مقدماتی', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(100)]],
      shortDescriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      descriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      isFinished: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.form = this.fb.group({
      percent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(99)]],
      allCourse: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.form2 = this.fb.group({
      percent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(99)]]
    });
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
    _core_common_G__WEBPACK_IMPORTED_MODULE_8__.G.getCourseCategory().subscribe(res => {
      if (res != null) {
        if (res.length > 0) {
          res.forEach(c => {
            if (c.parentId == 1) {
              this.mechanicCategories.push(c);
            } else if (c.parentId == 2) {
              this.tuningCategories.push(c);
            } else if (c.parentId == 3) {
              this.designeCategories.push(c);
            }
          });
        }
      }
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
        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, page, take, title);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(false, page, take, title);
        } else {
          filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
        }
      }

      this.filteredCourses = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      this.courseService.GetTeacherCoursesByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          // SharedIonic.unSuccessToast(this.toastController);
          this.empty = true;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onPriceTypeChanged() {
    if (!this.isCan) {
      return;
    }

    if (this.priceType === 'free') {
      this.updateCourseForm.setValue({
        name: this.updateCourseForm.value.name,
        level: this.updateCourseForm.value.level,
        price: 0,
        offPrice: 0,
        imageUrl: this.updateCourseForm.value.imageUrl,
        imageNamePNG: this.updateCourseForm.value.imageNamePNG,
        videoUrl: this.updateCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.updateCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.updateCourseForm.value.descriptionHtmlContent,
        isFinished: this.updateCourseForm.value.isFinished
      });
    } else if (this.priceType === 'price') {
      this.updateCourseForm.setValue({
        name: this.updateCourseForm.value.name,
        level: this.updateCourseForm.value.level,
        price: this.updateCourseForm.value.price,
        offPrice: 0,
        imageUrl: this.updateCourseForm.value.imageUrl,
        imageNamePNG: this.updateCourseForm.value.imageNamePNG,
        videoUrl: this.updateCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.updateCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.updateCourseForm.value.descriptionHtmlContent,
        isFinished: this.updateCourseForm.value.isFinished
      });
    } else if (this.priceType === 'offPrice') {
      this.updateCourseForm.setValue({
        name: this.updateCourseForm.value.name,
        level: this.updateCourseForm.value.level,
        price: this.updateCourseForm.value.price,
        offPrice: this.updateCourseForm.value.offPrice,
        imageUrl: this.updateCourseForm.value.imageUrl,
        imageNamePNG: this.updateCourseForm.value.imageNamePNG,
        videoUrl: this.updateCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.updateCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.updateCourseForm.value.descriptionHtmlContent,
        isFinished: this.updateCourseForm.value.isFinished
      });
    }
  }

  presentAlertConfirm() {
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
            _this.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm3() {
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
            _this2.onUpdate2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm4() {
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
            _this3.onUpdate3();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCategoryChecked(courseCategoryId) {
    if (this.courseCategoryIds.find(c => c == courseCategoryId) == null) {
      this.courseCategoryIds.push(+courseCategoryId);
    } else {
      this.courseCategoryIds.splice(this.courseCategoryIds.findIndex(c => c == courseCategoryId), 1);
    }
  }

  checkCategoryId(courseCategoryId) {
    if (this.courseCategoryIds.find(c => c == courseCategoryId) == null) {
      return false;
    } else {
      return true;
    }
  }

  onUpdate() {
    if (this.updateCourseForm.valid) {
      if (this.courseCategoryIds.length < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'گروهی انتخاب نشده است');
        return;
      }

      if (+this.updateCourseForm.value.offPrice > +this.updateCourseForm.value.price) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'تخفیف بیشتر از قیمت اصلی است');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController); // this.shortDescription = this.domSanitizer
      //   .sanitize(SecurityContext.HTML, this.updateCourseForm.value.shortDescriptionHtmlContent);

      this.shortDescription = this.updateCourseForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_10__.SecurityContext.HTML, this.updateCourseForm.value.descriptionHtmlContent);
      this.course = new src_app_data_model_course_AddOrUpdateCourseModel__WEBPACK_IMPORTED_MODULE_4__.AddOrUpdateCourseModel(this.selectedCourseId, this.updateCourseForm.value.name, this.updateCourseForm.value.price, this.updateCourseForm.value.offPrice, this.shortDescription, this.description, this.updateCourseForm.value.imageUrl, this.updateCourseForm.value.imageNamePNG, this.updateCourseForm.value.videoUrl, this.courseCategoryIds, this.updateCourseForm.value.isFinished, this.courseDetail.videoTime, this.courseDetail.size, this.updateCourseForm.value.level, false, 1, 20000, 0, 100);
      this.courseService.AddOrUpdateCourse(this.course).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.filteredCourses = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.CourseFilterModel(true, 1, 12, '', null, null, [], 4);
          this.courseService.GetTeacherCoursesByFilter(this.filteredCourses).subscribe(res2 => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

            if (res2.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
              this.courseSelected = false;
              this.filteredCourses = res2.data;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
          });
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdate2() {
    if (this.form.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      const model = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.UpdateCoursePriceByPercentViewModel(this.form.value.percent, this.form.value.allCourse, 0);
      this.courseService.UpdateCoursePriceByPercent(model).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          location.reload();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdate3() {
    if (this.form2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      const model = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_7__.UpdateCoursePriceByPercentViewModel(this.form2.value.percent, false, this.selectedCourseId);
      this.courseService.UpdateCoursePriceByPercent2(model).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          location.reload();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
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
    this.router.navigate(['TeacherPanel', 'UpdateCourse'], {
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
    this.teacherPercent = -1;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController); // this.courseService.GetTeacherPortion(+model.id).subscribe(
    //   res => {
    //     if (GResponse.SuccessStatus === res.status) {
    //       this.teacherPercent = res.data;
    //     } else {
    //       SharedIonic.unSuccessToast(this.toastController);
    //       this.teacherPercent = -1;
    //     }
    //   },
    //   err => {
    //     SharedIonic.unSuccessToast(this.toastController);
    //     this.teacherPercent = -1;
    //   }
    // );

    this.courseService.GetCourseEditById(+model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        this.isCan = false;
        this.courseDetail = res.data;
        this.courseCategoryIds = res.data.categoryIds;
        this.teacherPercent = res.data.portionPercent;
        this.updateCourseForm.setValue({
          name: res.data.name,
          price: res.data.price,
          offPrice: res.data.offPrice,
          imageUrl: 'http://localhost:4300/assets/images/in-progress.webp',
          imageNamePNG: 'http://localhost:4300/assets/images/in-progress.png',
          videoUrl: 'vflrB',
          shortDescriptionHtmlContent: res.data.shortDescription,
          level: res.data.level,
          descriptionHtmlContent: res.data.description,
          isFinished: res.data.isFinished
        });

        if (this.courseDetail.offPrice != 0 && this.courseDetail.price != 0) {
          this.priceType = 'offPrice';
        } else if (this.courseDetail.offPrice == 0 && this.courseDetail.price != 0) {
          this.priceType = 'price';
        } else {
          this.priceType = 'free';
        }

        this.courseSelected = true;
        this.isCan = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedCourseId = 0;
        this.courseSelected = false;
        this.teacherPercent = -1;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.selectedCourseId = 0;
      this.courseSelected = false;
      this.teacherPercent = -1;
    }); // this.courseService.GetCourseEditById(+model.id).subscribe(
    //   res => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     if (GResponse.SuccessStatus === res.status) {
    //       this.isCan = false;
    //       this.courseDetail = res.data;
    //       this.courseCategoryIds = res.data.categoryIds;
    //       this.updateCourseForm.setValue({
    //         name: res.data.name,
    //         price: res.data.price,
    //         offPrice: res.data.offPrice,
    //         imageUrl: 'http://localhost:4300/assets/images/in-progress.webp',
    //         imageNamePNG: 'http://localhost:4300/assets/images/in-progress.png',
    //         videoUrl: 'vflrB',
    //         shortDescriptionHtmlContent: res.data.shortDescription,
    //         level: res.data.level,
    //         descriptionHtmlContent: res.data.description,
    //         isFinished: res.data.isFinished
    //       });
    //       if (this.courseDetail.offPrice != 0 && this.courseDetail.price != 0) {
    //         this.priceType = 'offPrice';
    //       } else if (this.courseDetail.offPrice == 0 && this.courseDetail.price != 0) {
    //         this.priceType = 'price';
    //       } else {
    //         this.priceType = 'free';
    //       }
    //       this.courseSelected = true;
    //       this.isCan = true;
    //     } else {
    //       SharedIonic.unSuccessToast(this.toastController);
    //       this.selectedCourseId = 0;
    //       this.courseSelected = false;
    //     }
    //   },
    //   err => {
    //     SharedIonic.dismissLoading(this.loadingController);
    //     SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    //     this.selectedCourseId = 0;
    //     this.courseSelected = false;
    //   }
    // );
  }

  presentAlertConfirm2() {
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
            _this4.onRemoveAllTeacherCourseOffPrice();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemoveAllTeacherCourseOffPrice() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.RemoveAllTeacherCourseOffPrice().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        location.reload();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

UpdateCourseComponent.ctorParameters = () => [{
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}];

UpdateCourseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-update-course',
  template: _update_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateCourseComponent);


/***/ }),

/***/ 79850:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/update-course/update-course.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateCourseModule": () => (/* binding */ UpdateCourseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_course_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-course-routing.module */ 43638);
/* harmony import */ var _update_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-course.component */ 72678);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/course/shared-course.module */ 44704);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);









// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





let UpdateCourseModule = class UpdateCourseModule {
};
UpdateCourseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_update_course_component__WEBPACK_IMPORTED_MODULE_2__.UpdateCourseComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _update_course_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateCourseRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_5__.SharedCourseModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__.AngularEditorModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule
        ]
    })
], UpdateCourseModule);



/***/ }),

/***/ 28914:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/update-course/update-course.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoidXBkYXRlLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 79503:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/update-course/update-course.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TeacherPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ویرایش دوره ها</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-button\r\n            *ngIf=\"!empty\"\r\n            color=\"danger\"\r\n            (click)=\"presentAlertConfirm2()\"\r\n            expand=\"block\"\r\n            fill=\"clear\"\r\n            shape=\"round\"\r\n          >\r\n            برداشتن تخفیف تمام دوره ها\r\n          </ion-button>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>دوره های شما</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"empty\" dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <br>\r\n                <br>\r\n                <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n              </ion-text>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.courses\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.courses\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-course\r\n                      class=\"point\"\r\n                      [course]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-teacher-course>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <form\r\n                *ngIf=\"!empty\"\r\n                [formGroup]=\"form\"\r\n                (ngSubmit)=\"presentAlertConfirm3()\"\r\n                dir=\"rtl\"\r\n              >\r\n                <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-card-title class=\"text-center\"\r\n                      >اعمال تخفیف دوره ها</ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-list>\r\n                      <ion-item>\r\n                        <ion-label color=\"light\" position=\"floating\"\r\n                          >درصد تخفیف\r\n                        </ion-label>\r\n                        <ion-input\r\n                          placeholder=\"درصد\"\r\n                          formControlName=\"percent\"\r\n                          type=\"number\"\r\n                        ></ion-input>\r\n                        <ion-icon\r\n                          color=\"warning\"\r\n                          slot=\"start\"\r\n                          name=\"stats-chart-outline\"\r\n                        ></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>همه ی دوره ها</ion-label>\r\n                        <ion-checkbox\r\n                          color=\"success\"\r\n                          formControlName=\"allCourse\"\r\n                          slot=\"start\"\r\n                        ></ion-checkbox>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"form.invalid\"\r\n                >\r\n                  ویرایش دوره ها\r\n                </ion-button>\r\n              </form>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n        <ion-card *ngIf=\"teacherPercent != -1\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-center\"\r\n                >سهم شما از فروش این دوره\r\n                <ion-badge color=\"success\" mode=\"md\">{{\r\n                  teacherPercent + \"%\"\r\n                }}</ion-badge>\r\n                میباشد</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-radio-group\r\n              (ionChange)=\"onPriceTypeChanged()\"\r\n              [(ngModel)]=\"priceType\"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>قیمت دوره</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>رایگان</ion-label>\r\n                <ion-radio slot=\"start\" value=\"free\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>نقدی</ion-label>\r\n                <ion-radio slot=\"start\" value=\"price\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>با تخفیف</ion-label>\r\n                <ion-radio slot=\"start\" value=\"offPrice\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateCourseForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">ویرایش دوره</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >عنوان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item\r\n                  *ngIf=\"priceType == 'price' || priceType == 'offPrice'\"\r\n                >\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >قیمت دوره به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"priceType == 'offPrice'\">\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >قیمت تخفیف خورده به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n                </ion-item>\r\n                <!-- <ion-item>\r\n                  <ion-label\r\n                    placeholder=\"http://...\"\r\n                    color=\"light\"\r\n                    position=\"floating\"\r\n                    >آدرس تصویر\r\n                  </ion-label>\r\n                  <ion-input formControlName=\"imageUrl\" type=\"url\"></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label\r\n                    placeholder=\"http://...\"\r\n                    color=\"light\"\r\n                    position=\"floating\"\r\n                    >آدرس ویدئو\r\n                  </ion-label>\r\n                  <ion-input formControlName=\"videoUrl\" type=\"url\"></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item> -->\r\n                <ion-item>\r\n                  <ion-text color=\"light\" position=\"floating\"\r\n                    >دوره اتمام یافته؟\r\n                  </ion-text>\r\n                  <ion-checkbox\r\n                    slot=\"start\"\r\n                    formControlName=\"isFinished\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >سطح دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح دوره...\"\r\n                    formControlName=\"level\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"bar-chart-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >توضیحات کوتاه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات کوتاه...\"\r\n                    formControlName=\"shortDescriptionHtmlContent\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >توضیحات اصلی\r\n                  </ion-label>\r\n                  <br />\r\n                  <angular-editor\r\n                    id=\"editor8\"\r\n                    formControlName=\"descriptionHtmlContent\"\r\n                    [config]=\"editorConfig\"\r\n                  ></angular-editor>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >دوره حداقل باید در یک گروه باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گروه های دسته بندی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>مکانیک</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of mechanicCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.courseCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>تیونینگ</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of tuningCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.courseCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>دیزاین</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of designeCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.courseCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateCourseForm.invalid\"\r\n          >\r\n            ویرایش دوره\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            (click)=\"onCancel()\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"danger\"\r\n          >\r\n            بازگشت\r\n          </ion-button>\r\n        </form>\r\n\r\n        <form [formGroup]=\"form2\" (ngSubmit)=\"presentAlertConfirm4()\" dir=\"rtl\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >اعمال تخفیف دوره</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >درصد تخفیف\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"درصد\"\r\n                    formControlName=\"percent\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"stats-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"form2.invalid\"\r\n          >\r\n            اعمال تخفیف\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_teacher-panel_update-course_update-course_module_ts.js.map