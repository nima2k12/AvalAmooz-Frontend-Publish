"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_add-category_add-category_module_ts"],{

/***/ 45405:
/*!**********************************************************!*\
  !*** ./src/app/data/model/course/CourseCategoryModel.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseCategoryModel": () => (/* binding */ CourseCategoryModel)
/* harmony export */ });
class CourseCategoryModel {
    constructor(courseCategoryId, title, urlTitle, parentId) {
        if (courseCategoryId == null) {
            this.courseCategoryId = 0;
        }
        else {
            this.courseCategoryId = courseCategoryId;
        }
        this.title = title;
        this.urlTitle = urlTitle;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 88944:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-category/add-category-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryRoutingModule": () => (/* binding */ AddCategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-category.component */ 36636);




const routes = [{ path: '', component: _add_category_component__WEBPACK_IMPORTED_MODULE_0__.AddCategoryComponent }];
let AddCategoryRoutingModule = class AddCategoryRoutingModule {
};
AddCategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AddCategoryRoutingModule);



/***/ }),

/***/ 36636:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-category/add-category.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryComponent": () => (/* binding */ AddCategoryComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category.component.html?ngResource */ 1185);
/* harmony import */ var _add_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component.scss?ngResource */ 47685);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _data_model_course_CourseCategoryModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/course/CourseCategoryModel */ 45405);












let AddCategoryComponent = class AddCategoryComponent {
  constructor(fb, toastController, loadingController, alertController, courseService) {
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.courseService = courseService;
    this.selectedCategoryId = '0';
    this.categories$ = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.getCourseCategory();
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]]
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

  onAdd() {
    if (this.form.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.courseService.AddOrUpdateCourseCategory(new _data_model_course_CourseCategoryModel__WEBPACK_IMPORTED_MODULE_7__.CourseCategoryModel(null, this.form.value.title, this.form.value.url, +this.selectedCategoryId || null)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

AddCategoryComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}];

AddCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-add-category',
  template: _add_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddCategoryComponent);


/***/ }),

/***/ 32230:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-category/add-category.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoryModule": () => (/* binding */ AddCategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category-routing.module */ 88944);
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component */ 36636);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);











let AddCategoryModule = class AddCategoryModule {
};
AddCategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_add_category_component__WEBPACK_IMPORTED_MODULE_2__.AddCategoryComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _add_category_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddCategoryRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule
        ]
    })
], AddCategoryModule);



/***/ }),

/***/ 47685:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-category/add-category.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1185:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-category/add-category.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>درج دسته‌بندی مشترک</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\" dir=\"rtl\">\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label> انتخاب شاخه گروه </ion-label>\r\n            </ion-list-header>\r\n\r\n            <ion-item>\r\n              <ion-label>گروه</ion-label>\r\n              <ion-select\r\n                [(ngModel)]=\"selectedCategoryId\"\r\n                okText=\"انتخاب\"\r\n                cancelText=\"لغو\"\r\n              >\r\n                <ion-select-option value=\"0\">دستهٔ اصلی (بدون والد)</ion-select-option><ion-select-option *ngFor=\"let item of categories$ | async\" [value]=\"item.courseCategoryId.toString()\">{{ item.title }}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm()\">\r\n            <ion-item>\r\n              <ion-label color=\"light\" position=\"stacked\">عنوان </ion-label>\r\n              <ion-input formControlName=\"title\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"light\" position=\"stacked\"\r\n                >آدرس تصویر\r\n              </ion-label>\r\n              <ion-input formControlName=\"url\" type=\"url\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              ایجاد گروه\r\n            </ion-button>\r\n          </form>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_add-category_add-category_module_ts.js.map