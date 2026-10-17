"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_add-product-category_add-product-category_module_ts"],{

/***/ 55737:
/*!************************************************************!*\
  !*** ./src/app/data/model/product/ProductCategoryModel.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryModel": () => (/* binding */ ProductCategoryModel)
/* harmony export */ });
class ProductCategoryModel {
    constructor(productCategoryId, title, urlTitle, parentId) {
        if (productCategoryId == null) {
            this.productCategoryId = 0;
        }
        else {
            this.productCategoryId = productCategoryId;
        }
        this.title = title;
        this.urlTitle = urlTitle;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 79917:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-product-category/add-product-category-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductCategoryRoutingModule": () => (/* binding */ AddProductCategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_product_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product-category.component */ 32591);




const routes = [{ path: '', component: _add_product_category_component__WEBPACK_IMPORTED_MODULE_0__.AddProductCategoryComponent }];
let AddProductCategoryRoutingModule = class AddProductCategoryRoutingModule {
};
AddProductCategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AddProductCategoryRoutingModule);



/***/ }),

/***/ 32591:
/*!*****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-product-category/add-product-category.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductCategoryComponent": () => (/* binding */ AddProductCategoryComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_product_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-category.component.html?ngResource */ 54780);
/* harmony import */ var _add_product_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product-category.component.scss?ngResource */ 64339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _data_model_product_ProductCategoryModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/product/ProductCategoryModel */ 55737);











let AddProductCategoryComponent = class AddProductCategoryComponent {
  constructor(fb, toastController, loadingController, alertController, productService) {
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.productService = productService;
    this.selectedCategoryId = '1';
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(200)]]
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
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.productService.AddOrUpdateProductCategory(new _data_model_product_ProductCategoryModel__WEBPACK_IMPORTED_MODULE_6__.ProductCategoryModel(null, this.form.value.title, this.form.value.url, +this.selectedCategoryId)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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

};

AddProductCategoryComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService
}];

AddProductCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-product-category',
  template: _add_product_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_product_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddProductCategoryComponent);


/***/ }),

/***/ 72163:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-product-category/add-product-category.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductCategoryModule": () => (/* binding */ AddProductCategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_product_category_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-category-routing.module */ 79917);
/* harmony import */ var _add_product_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product-category.component */ 32591);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let AddProductCategoryModule = class AddProductCategoryModule {
};
AddProductCategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_add_product_category_component__WEBPACK_IMPORTED_MODULE_2__.AddProductCategoryComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _add_product_category_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddProductCategoryRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], AddProductCategoryModule);



/***/ }),

/***/ 64339:
/*!******************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-product-category/add-product-category.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 54780:
/*!******************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/add-product-category/add-product-category.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>درج گروه</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"12\" dir=\"rtl\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label> انتخاب شاخه گروه </ion-label>\r\n              </ion-list-header>\r\n  \r\n              <ion-item>\r\n                <ion-label>گروه</ion-label>\r\n                <ion-select\r\n                  [(ngModel)]=\"selectedCategoryId\"\r\n                  okText=\"انتخاب\"\r\n                  cancelText=\"لغو\"\r\n                >\r\n                  <ion-select-option value=\"1\">مکانیک</ion-select-option>\r\n                  <ion-select-option value=\"2\">تیونینگ</ion-select-option>\r\n                  <ion-select-option value=\"3\">دیزاین</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n  \r\n            <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm()\">\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\">عنوان </ion-label>\r\n                <ion-input formControlName=\"title\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >آدرس تصویر\r\n                </ion-label>\r\n                <ion-input formControlName=\"url\" type=\"url\"></ion-input>\r\n              </ion-item>\r\n  \r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                ایجاد گروه\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_add-product-category_add-product-category_module_ts.js.map