"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_teacher-panel_add-course_add-course_module_ts"],{

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

/***/ 47502:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-course/add-course-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseRoutingModule": () => (/* binding */ AddCourseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-course.component */ 3364);




const routes = [{ path: '', component: _add_course_component__WEBPACK_IMPORTED_MODULE_0__.AddCourseComponent }];
let AddCourseRoutingModule = class AddCourseRoutingModule {
};
AddCourseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AddCourseRoutingModule);



/***/ }),

/***/ 3364:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-course/add-course.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseComponent": () => (/* binding */ AddCourseComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-course.component.html?ngResource */ 19377);
/* harmony import */ var _add_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-course.component.scss?ngResource */ 30471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_AddOrUpdateCourseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/course/AddOrUpdateCourseModel */ 45978);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable eqeqeq */












let AddCourseComponent = class AddCourseComponent {
  constructor(courseService, fb, toastController, router, loadingController, domSanitizer, alertController) {
    this.courseService = courseService;
    this.fb = fb;
    this.toastController = toastController;
    this.router = router;
    this.loadingController = loadingController;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
    this.priceType = 'free';
    this.courseCategoryIds = [];
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
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
  }

  ngOnInit() {
    this.addCourseForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200)]],
      price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      offPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      imageUrl: ['http://localhost:4300/assets/images/in-progress.webp', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      imageNamePNG: ['http://localhost:4300/assets/images/in-progress.png', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['vflrB', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      level: ['مقدماتی', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(100)]],
      shortDescriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      descriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]]
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
            _this.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPriceTypeChanged() {
    if (this.priceType === 'free') {
      this.addCourseForm.setValue({
        name: this.addCourseForm.value.name,
        level: this.addCourseForm.value.level,
        price: 0,
        offPrice: 0,
        imageUrl: this.addCourseForm.value.imageUrl,
        imageNamePNG: this.addCourseForm.value.imageNamePNG,
        videoUrl: this.addCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.addCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.addCourseForm.value.descriptionHtmlContent
      });
    } else if (this.priceType === 'price') {
      this.addCourseForm.setValue({
        name: this.addCourseForm.value.name,
        level: this.addCourseForm.value.level,
        price: '',
        offPrice: 0,
        imageUrl: this.addCourseForm.value.imageUrl,
        imageNamePNG: this.addCourseForm.value.imageNamePNG,
        videoUrl: this.addCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.addCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.addCourseForm.value.descriptionHtmlContent
      });
    } else if (this.priceType === 'offPrice') {
      this.addCourseForm.setValue({
        name: this.addCourseForm.value.name,
        level: this.addCourseForm.value.level,
        price: '',
        offPrice: '',
        imageUrl: this.addCourseForm.value.imageUrl,
        imageNamePNG: this.addCourseForm.value.imageNamePNG,
        videoUrl: this.addCourseForm.value.videoUrl,
        shortDescriptionHtmlContent: this.addCourseForm.value.shortDescriptionHtmlContent,
        descriptionHtmlContent: this.addCourseForm.value.descriptionHtmlContent
      });
    }
  }

  onCategoryChecked(courseCategoryId) {
    if (this.courseCategoryIds.find(c => c == courseCategoryId) == null) {
      this.courseCategoryIds.push(+courseCategoryId);
    } else {
      this.courseCategoryIds.splice(this.courseCategoryIds.findIndex(c => c == courseCategoryId), 1);
    }
  }

  onAdd() {
    if (this.addCourseForm.valid) {
      if (this.courseCategoryIds.length < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'گروهی انتخاب نشده است');
        return;
      }

      if (+this.addCourseForm.value.offPrice > +this.addCourseForm.value.price) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'تخفیف بیشتر از قیمت اصلی است');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController); // this.shortDescription = this.domSanitizer
      //   .sanitize(SecurityContext.HTML, this.addCourseForm.value.shortDescriptionHtmlContent);

      this.shortDescription = this.addCourseForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_10__.SecurityContext.HTML, this.addCourseForm.value.descriptionHtmlContent);
      this.course = new _data_model_course_AddOrUpdateCourseModel__WEBPACK_IMPORTED_MODULE_4__.AddOrUpdateCourseModel(null, this.addCourseForm.value.name, this.addCourseForm.value.price, this.addCourseForm.value.offPrice, this.shortDescription, this.description, this.addCourseForm.value.imageUrl, this.addCourseForm.value.imageNamePNG, this.addCourseForm.value.videoUrl, this.courseCategoryIds, false, '00:00', '', this.addCourseForm.value.level, false, 1, 20000, 0, 100);
      this.courseService.AddOrUpdateCourse(this.course).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.TeacherPanelUrl);
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

};

AddCourseComponent.ctorParameters = () => [{
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_3__.CourseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}];

AddCourseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-course',
  template: _add_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddCourseComponent);


/***/ }),

/***/ 18519:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-course/add-course.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCourseModule": () => (/* binding */ AddCourseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_course_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-course-routing.module */ 47502);
/* harmony import */ var _add_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-course.component */ 3364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/pipe/price.module */ 21448);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);













let AddCourseModule = class AddCourseModule {
};
AddCourseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_add_course_component__WEBPACK_IMPORTED_MODULE_2__.AddCourseComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _add_course_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddCourseRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__.AngularEditorModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], AddCourseModule);



/***/ }),

/***/ 30471:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-course/add-course.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 19377:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/add-course/add-course.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TeacherPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>درج دوره</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n        <!-- <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label\r\n                ><ion-badge color=\"danger\" mode=\"md\">توجه</ion-badge></ion-label\r\n              >\r\n            </ion-list-header>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                پس از درج دوره، ویدیو معرفی دوره را برایمان ایمیل کنید\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                ایمیل:&nbsp;\r\n                <ion-text color=\"light\">\r\n                  info@avalamuz.ir\r\n                </ion-text></ion-label\r\n              >\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label class=\"text-center\">\r\n                پس از بررسی دوره و ویدیو معرفی دوره، همکاران ما دوره ی شمارا\r\n                فعال خواهند کرد\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card> -->\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-radio-group\r\n              (ionChange)=\"onPriceTypeChanged()\"\r\n              [(ngModel)]=\"priceType\"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>قیمت دوره</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>رایگان</ion-label>\r\n                <ion-radio slot=\"start\" value=\"free\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>نقدی</ion-label>\r\n                <ion-radio slot=\"start\" value=\"price\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>با تخفیف</ion-label>\r\n                <ion-radio slot=\"start\" value=\"offPrice\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"addCourseForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">درج دوره جدید</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >عنوان دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n\r\n                <ion-item\r\n                  *ngIf=\"priceType == 'price' || priceType == 'offPrice'\"\r\n                >\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >قیمت دوره به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"priceType == 'offPrice'\">\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >قیمت تخفیف خورده به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\r\n                </ion-item>\r\n                <!-- <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >آدرس تصویر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageUrl\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >آدرس ویدئو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"videoUrl\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item> -->\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >سطح دوره\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"سطح دوره...\"\r\n                    formControlName=\"level\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"bar-chart-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >توضیحات کوتاه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات کوتاه...\"\r\n                    formControlName=\"shortDescriptionHtmlContent\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >توضیحات اصلی\r\n                  </ion-label>\r\n                  <br />\r\n                  <angular-editor\r\n                    id=\"editor2\"\r\n                    formControlName=\"descriptionHtmlContent\"\r\n                    [config]=\"editorConfig2\"\r\n                  ></angular-editor>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >دوره حداقل باید در یک گروه باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گروه های دسته بندی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>مکانیک</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of mechanicCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>تیونینگ</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of tuningCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>دیزاین</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of designeCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addCourseForm.invalid\"\r\n          >\r\n            ایجاد دوره\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_teacher-panel_add-course_add-course_module_ts.js.map