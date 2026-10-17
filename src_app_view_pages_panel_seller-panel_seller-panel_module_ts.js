"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_seller-panel_module_ts"],{

/***/ 69109:
/*!******************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/seller-panel-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerPanelRoutingModule": () => (/* binding */ SellerPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _seller_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seller-panel.component */ 19878);




const routes = [
    {
        path: '',
        component: _seller_panel_component__WEBPACK_IMPORTED_MODULE_0__.SellerPanelComponent
    },
    {
        path: 'questions',
        redirectTo: '/SellerPanel/Questions',
        pathMatch: 'full'
    },
    {
        path: 'questions/:id',
        redirectTo: '/SellerPanel/Questions/:id'
    },
    {
        path: 'Questions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_questions_questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/questions/questions.module */ 56899)).then(m => m.QuestionsModule)
    },
    {
        path: 'Questions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_questions_questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/questions/questions.module */ 56899)).then(m => m.QuestionsModule)
    },
    {
        path: 'comments',
        redirectTo: '/SellerPanel/Comments',
        pathMatch: 'full'
    },
    {
        path: 'comments/:id',
        redirectTo: '/SellerPanel/Comments/:id'
    },
    {
        path: 'Comments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_comments_comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/comments/comments.module */ 88525)).then(m => m.CommentsModule)
    },
    {
        path: 'Comments/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_comments_comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/comments/comments.module */ 88525)).then(m => m.CommentsModule)
    },
    {
        path: 'Profileedit',
        redirectTo: '/SellerPanel/ProfileEdit',
    },
    {
        path: 'profileedit',
        redirectTo: '/SellerPanel/ProfileEdit',
    },
    {
        path: 'profileEdit',
        redirectTo: '/SellerPanel/ProfileEdit',
    },
    {
        path: 'ProfileEdit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_seller-panel_profile-edit_profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/profile-edit/profile-edit.module */ 81785)).then(m => m.ProfileEditModule)
    },
    {
        path: 'addproduct',
        redirectTo: '/SellerPanel/AddProduct',
    },
    {
        path: 'Addproduct',
        redirectTo: '/SellerPanel/AddProduct',
    },
    {
        path: 'addProduct',
        redirectTo: '/SellerPanel/AddProduct',
    },
    {
        path: 'AddProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_add-product_add-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/add-product/add-product.module */ 45727)).then(m => m.AddProductModule)
    },
    {
        path: 'updateproduct',
        redirectTo: '/SellerPanel/UpdateProduct',
    },
    {
        path: 'Updateproduct',
        redirectTo: '/SellerPanel/UpdateProduct',
    },
    {
        path: 'updateProduct',
        redirectTo: '/SellerPanel/UpdateProduct',
    },
    {
        path: 'UpdateProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_update-product_update-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/update-product/update-product.module */ 73912)).then(m => m.UpdateProductModule)
    },
    {
        path: 'Addvideo',
        redirectTo: '/SellerPanel/AddVideo',
    },
    {
        path: 'addvideo',
        redirectTo: '/SellerPanel/AddVideo',
    },
    {
        path: 'addVideo',
        redirectTo: '/SellerPanel/AddVideo',
    },
    {
        path: 'AddVideo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_add-video_add-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/add-video/add-video.module */ 9544)).then(m => m.AddVideoModule)
    },
    {
        path: 'Addimage',
        redirectTo: '/SellerPanel/AddImage',
    },
    {
        path: 'addimage',
        redirectTo: '/SellerPanel/AddImage',
    },
    {
        path: 'addImage',
        redirectTo: '/SellerPanel/AddImage',
    },
    {
        path: 'AddImage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_add-image_add-image_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/add-image/add-image.module */ 78941)).then(m => m.AddImageModule)
    },
    {
        path: 'Addarticle',
        redirectTo: '/SellerPanel/AddArticle',
    },
    {
        path: 'addarticle',
        redirectTo: '/SellerPanel/AddArticle',
    },
    {
        path: 'addArticle',
        redirectTo: '/SellerPanel/AddArticle',
        pathMatch: 'full'
    },
    {
        path: 'AddArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_add-article_add-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/add-article/add-article.module */ 29761)).then(m => m.AddArticleModule)
    },
    {
        path: 'Updatearticle',
        redirectTo: '/SellerPanel/UpdateArticle',
    },
    {
        path: 'updatearticle',
        redirectTo: '/SellerPanel/UpdateArticle',
    },
    {
        path: 'updateArticle',
        redirectTo: '/SellerPanel/UpdateArticle',
    },
    {
        path: 'UpdateArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_update-article_update-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/update-article/update-article.module */ 64437)).then(m => m.UpdateArticleModule)
    },
    {
        path: 'customers',
        redirectTo: '/SellerPanel/Customers',
    },
    {
        path: 'Customers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/customers/customers.module */ 45270)).then(m => m.CustomersModule)
    },
    {
        path: 'Bankdetail',
        redirectTo: '/SellerPanel/BankDetail',
    },
    {
        path: 'bankdetail',
        redirectTo: '/SellerPanel/BankDetail',
    },
    {
        path: 'bankDetail',
        redirectTo: '/SellerPanel/BankDetail',
    },
    {
        path: 'BankDetail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_bank-detail_bank-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/bank-detail/bank-detail.module */ 38801)).then(m => m.BankDetailModule)
    },
    {
        path: 'Cashrequest',
        redirectTo: '/SellerPanel/CashRequest',
    },
    {
        path: 'cashrequest',
        redirectTo: '/SellerPanel/CashRequest',
    },
    {
        path: 'cashRequest',
        redirectTo: '/SellerPanel/CashRequest',
    },
    {
        path: 'CashRequest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_cash-request_cash-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/cash-request/cash-request.module */ 67576)).then(m => m.CashRequestModule)
    },
    {
        path: 'rules',
        redirectTo: '/SellerPanel/Rules',
    },
    {
        path: 'Rules',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_seller-panel_rules_rules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/rules/rules.module */ 28734)).then(m => m.RulesModule)
    },
    {
        path: 'Productdesigns',
        redirectTo: '/SellerPanel/ProductDesigns',
    },
    {
        path: 'productdesigns',
        redirectTo: '/SellerPanel/ProductDesigns',
    },
    {
        path: 'productDesigns',
        redirectTo: '/SellerPanel/ProductDesigns',
    },
    {
        path: 'ProductDesigns',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_product-designs_product-designs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/product-designs/product-designs.module */ 6674)).then(m => m.ProductDesignsModule)
    },
    {
        path: 'Furtherdetail',
        redirectTo: '/SellerPanel/FurtherDetail',
    },
    {
        path: 'furtherdetail',
        redirectTo: '/SellerPanel/FurtherDetail',
    },
    {
        path: 'furtherDetail',
        redirectTo: '/SellerPanel/FurtherDetail',
    },
    {
        path: 'FurtherDetail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_further-detail_further-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/further-detail/further-detail.module */ 43863)).then(m => m.FurtherDetailModule)
    },
    {
        path: 'orders',
        redirectTo: '/SellerPanel/Orders',
    },
    {
        path: 'orders/:id',
        redirectTo: '/SellerPanel/Orders/:id',
    },
    {
        path: 'Orders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/orders/orders.module */ 12101)).then(m => m.OrdersModule)
    },
    {
        path: 'Orders/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/seller-panel/orders/orders.module */ 12101)).then(m => m.OrdersModule)
    },
];
let SellerPanelRoutingModule = class SellerPanelRoutingModule {
};
SellerPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SellerPanelRoutingModule);



/***/ }),

/***/ 19878:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/seller-panel.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerPanelComponent": () => (/* binding */ SellerPanelComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _seller_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-panel.component.html?ngResource */ 25891);
/* harmony import */ var _seller_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-panel.component.scss?ngResource */ 1213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let SellerPanelComponent = class SellerPanelComponent {
  constructor(router, menuCtrl) {
    this.router = router;
    this.menuCtrl = menuCtrl;
  }

  ngOnInit() {}

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

};

SellerPanelComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
}];

SellerPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-seller-panel',
  template: _seller_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_seller_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SellerPanelComponent);


/***/ }),

/***/ 40955:
/*!**********************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/seller-panel.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerPanelModule": () => (/* binding */ SellerPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _seller_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-panel-routing.module */ 69109);
/* harmony import */ var _seller_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-panel.component */ 19878);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);









let SellerPanelModule = class SellerPanelModule {
};
SellerPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_seller_panel_component__WEBPACK_IMPORTED_MODULE_2__.SellerPanelComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _seller_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__.SellerPanelRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], SellerPanelModule);



/***/ }),

/***/ 1213:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/seller-panel.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 25891:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/seller-panel.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [translucent]=\"true\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.panel/seller-panel/seller-panel\" fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/Product\" class=\"panel-back-btn\"></ion-back-button></ion-buttons>\n\n  </app-page-header>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"10\" offset-lg=\"1\">\n        <!-- Hero Section -->\n        <div class=\"panel-hero\">\n          <div class=\"panel-hero__badge\">\n            <span class=\"sparkle\">✦</span>\n            <span>پنل اختصاصی فروشندگان و ناشران</span>\n          </div>\n          <h1 class=\"panel-hero__title\">میز کار فروشگاه و محصولات اول آموز</h1>\n          <p class=\"panel-hero__desc\">\n            مدیریت آسان محصولات آموزشی، سفارش‌های ثبت‌شده اولیا و مدارس، ویژگی‌ها، طرح‌ها و امور مالی\n          </p>\n        </div>\n\n        <!-- Section 1: Products & Supplies -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"cube-outline\"></ion-icon>\n              <span>محصولات و کالاهای آموزشی</span>\n            </h2>\n            <span class=\"panel-section__tag\">۶ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SellerPanel/AddProduct\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"add-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج کالا جدید</strong>\n                  <small>افزودن کتاب، کاربرگ یا محصول جدید</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SellerPanel/UpdateProduct\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"sync-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>ویرایش کالا ها</strong>\n                  <small>بروزرسانی قیمت، موجودی و مشخصات</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SellerPanel/ProductDesigns\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"color-palette-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش طرح ها</strong>\n                  <small>رنگ‌ها و تنوع‌های مختلف کالا</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SellerPanel/FurtherDetail\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"list-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش ویژگی ها</strong>\n                  <small>مشخصات فنی و ابعاد محصول</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/SellerPanel/AddVideo\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"videocam-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش ویدئو</strong>\n                  <small>ویدیوهای معرفی و جعبه‌گشایی کالا</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SellerPanel/AddImage\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"images-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش عکس</strong>\n                  <small>تصاویر باکیفیت آلبوم محصول</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 2: Orders, Customers & Engagement -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              <span>سفارشات، خریداران و پرسش‌ها</span>\n            </h2>\n            <span class=\"panel-section__tag\">۴ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SellerPanel/Orders\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"archive-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>سفارشات</strong>\n                  <small>فهرست و وضعیت ارسال سفارشات</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SellerPanel/Customers\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"people-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>مشتری های من</strong>\n                  <small>مشاهده اطلاعات و سفارش‌های خریداران</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SellerPanel/Questions\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"help-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>پرسش و پاسخ</strong>\n                  <small>پاسخ به سوالات پیش از خرید مشتریان</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/SellerPanel/Comments\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"chatbox-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>نظرات محصول</strong>\n                  <small>بررسی دیدگاه‌ها و امتیازات محصولات</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 3: Educational Articles -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"document-text-outline\"></ion-icon>\n              <span>مقالات و وبلاگ فروشنده</span>\n            </h2>\n            <span class=\"panel-section__tag\">۲ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SellerPanel/AddArticle\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"add-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج مقاله جدید</strong>\n                  <small>معرفی ابزارهای کمک‌آموزشی و راهنما</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SellerPanel/UpdateArticle\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"sync-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>ویرایش مقاله ها</strong>\n                  <small>مدیریت مقالات منتشرشده فروشگاه</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 4: Finance & Account -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"card-outline\"></ion-icon>\n              <span>امور مالی و حساب فروشنده</span>\n            </h2>\n            <span class=\"panel-section__tag\">۴ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SellerPanel/CashRequest\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"cash-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درخواست وجه</strong>\n                  <small>تسویه حساب و واریز درآمد حاصل از فروش</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SellerPanel/BankDetail\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"business-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>مشخصات بانکی</strong>\n                  <small>شماره شبا و حساب واریزی فروشنده</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SellerPanel/ProfileEdit\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"body-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>پروفایل</strong>\n                  <small>اطلاعات فروشگاه، لوگو و تماس</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SellerPanel/Rules\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"cash-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>راهنما و قوانین فروشنده</strong>\n                  <small>شرایط ارسال کالا، ضمانت و بازگشت</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_seller-panel_module_ts.js.map