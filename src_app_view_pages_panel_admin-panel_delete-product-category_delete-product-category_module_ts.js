"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_delete-product-category_delete-product-category_module_ts"],{

/***/ 39427:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-product-category/delete-product-category-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductCategoryRoutingModule": () => (/* binding */ DeleteProductCategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _delete_product_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-product-category.component */ 31339);




const routes = [{ path: '', component: _delete_product_category_component__WEBPACK_IMPORTED_MODULE_0__.DeleteProductCategoryComponent }];
let DeleteProductCategoryRoutingModule = class DeleteProductCategoryRoutingModule {
};
DeleteProductCategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DeleteProductCategoryRoutingModule);



/***/ }),

/***/ 31339:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-product-category/delete-product-category.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductCategoryComponent": () => (/* binding */ DeleteProductCategoryComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_product_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-product-category.component.html?ngResource */ 69895);
/* harmony import */ var _delete_product_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-product-category.component.scss?ngResource */ 17232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/service/product/product.service */ 60007);









let DeleteProductCategoryComponent = class DeleteProductCategoryComponent {
  constructor(toastController, loadingController, productService, alertController) {
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.productService = productService;
    this.alertController = alertController;
    this.selectedCategory = 'tuning';
    this.selectedCategoryId = '1';
  }

  ngOnInit() {}

  onDelete() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.productService.DeleteCategoryById(+this.selectedCategoryModel.productCategoryId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
        this.productService.GetAllProductsCategory().subscribe(res => {
          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.ProductCategory = res.data;
          }
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentAlertConfirm() {
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
            _this.onDelete();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSelectItem(model) {
    this.selectedCategoryId = model.parentId.toString();
    this.selectedCategoryModel = model;
    this.presentAlertConfirm();
  }

};

DeleteProductCategoryComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

DeleteProductCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-delete-product-category',
  template: _delete_product_category_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_delete_product_category_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DeleteProductCategoryComponent);


/***/ }),

/***/ 21184:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-product-category/delete-product-category.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteProductCategoryModule": () => (/* binding */ DeleteProductCategoryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _delete_product_category_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-product-category-routing.module */ 39427);
/* harmony import */ var _delete_product_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-product-category.component */ 31339);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);
/* harmony import */ var _delete_category_delete_category_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete-category/delete-category-routing.module */ 53224);













let DeleteProductCategoryModule = class DeleteProductCategoryModule {
};
DeleteProductCategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_delete_product_category_component__WEBPACK_IMPORTED_MODULE_2__.DeleteProductCategoryComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _delete_product_category_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeleteProductCategoryRoutingModule,
            _delete_category_delete_category_routing_module__WEBPACK_IMPORTED_MODULE_6__.DeleteCategoryRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], DeleteProductCategoryModule);



/***/ }),

/***/ 17232:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-product-category/delete-product-category.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZS1wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 69895:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-product-category/delete-product-category.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>حذف گروه</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-toolbar color=\"primary\" class=\"ion-margin-top\">\r\n      <ion-segment [(ngModel)]=\"selectedCategory\">\r\n        <ion-segment-button value=\"mechanic\">\r\n          <ion-icon name=\"build-outline\"></ion-icon>\r\n          <ion-label>مکانیک</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"tuning\">\r\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n          <ion-label>تیونینگ</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"design\">\r\n          <ion-icon name=\"brush-outline\"></ion-icon>\r\n          <ion-label>دیزاین</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n  \r\n    <app-admin-product-image-category\r\n      dir=\"rtl\"\r\n      (SelectEvent)=\"onSelectItem($event)\"\r\n      [selectedCategory]=\"selectedCategory\"\r\n    ></app-admin-product-image-category>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_delete-product-category_delete-product-category_module_ts.js.map