"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_product-article-tag_product-article-tag_module_ts"],{

/***/ 69903:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-tag/product-article-tag-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleTagRoutingModule": () => (/* binding */ ProductArticleTagRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_article_tag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-article-tag.component */ 8881);




const routes = [{ path: '', component: _product_article_tag_component__WEBPACK_IMPORTED_MODULE_0__.ProductArticleTagComponent }];
let ProductArticleTagRoutingModule = class ProductArticleTagRoutingModule {
};
ProductArticleTagRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductArticleTagRoutingModule);



/***/ }),

/***/ 8881:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-tag/product-article-tag.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleTagComponent": () => (/* binding */ ProductArticleTagComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_article_tag_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-tag.component.html?ngResource */ 71461);
/* harmony import */ var _product_article_tag_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-article-tag.component.scss?ngResource */ 63797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/article/ArticleFilterModel */ 55521);
/* harmony import */ var src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/article/ArticleModel */ 52496);
/* harmony import */ var src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/article/article.service */ 56847);













let ProductArticleTagComponent = class ProductArticleTagComponent {
  constructor(fb, articleService, toastController, loadingController, activatedRoute, router, alertController) {
    this.fb = fb;
    this.articleService = articleService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.alertController = alertController;
    this.selectedArticleId = 0;
    this.isSelected = false;
    this.selectedCategory = 'add';
    this.searchTitle = '';
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
      const page = params.page ? params.page : 1;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      filter = new src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_5__.ArticleFilterModel(page, take, title);
      this.filteredArticles = filter;
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.articleService.GetAdminProductArticlesByFilter(filter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.filteredArticles = res.data;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
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
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.RemoveProductArticleTag(model.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.getTagsByArticleId(this.selectedArticleId);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
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
        list.push(new src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__.ArticleTagModel(tag.id, this.form.value.tag));
      } else {
        list.push(new src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__.ArticleTagModel(tag.id, tag.name));
      }
    });
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.AddOrUpdateProductArticleTag(new src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__.AddOrUpdateArticleTagModel(this.selectedArticleId, list)).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.tagName = '';
        this.addList = [];
        list = [];
        this.getTagsByArticleId(this.selectedArticleId);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onAddTags() {
    if (this.addList.length === 0) {
      return;
    }

    let list = [];
    this.addList.forEach(tag => {
      list.push(new src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__.ArticleTagModel(0, tag));
    });
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.AddOrUpdateProductArticleTag(new src_app_data_model_article_ArticleModel__WEBPACK_IMPORTED_MODULE_6__.AddOrUpdateArticleTagModel(this.selectedArticleId, list)).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.tagName = '';
        this.addList = [];
        list = [];
        this.getTagsByArticleId(this.selectedArticleId);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
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
    if (this.filteredArticles.startPage == null) {
      return;
    }

    if (this.filteredArticles.pageId > this.filteredArticles.startPage && +this.filteredArticles.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredArticles.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredArticles.endPage == null) {
      return;
    }

    if (this.filteredArticles.pageId < this.filteredArticles.endPage) {
      this.setQueryParams(+this.filteredArticles.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  setQueryParams(pageId) {
    this.filteredArticles.title = this.searchTitle;
    this.router.navigate(['AdminPanel', 'ProductArticleTag'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredArticles.takeEntity ? this.filteredArticles.takeEntity : null,
        title: this.filteredArticles.title ? this.filteredArticles.title : null
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
    this.selectedArticleId = +id;
    this.isSelected = true;
    this.getTagsByArticleId(id);
  }

  getTagsByArticleId(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.GetProductArticleTags(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        this.editList = res.data;
        this.form.setValue({
          id: 0,
          tag: ''
        });
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

};

ProductArticleTagComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_7__.ArticleService
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

ProductArticleTagComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-product-article-tag',
  template: _product_article_tag_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_article_tag_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductArticleTagComponent);


/***/ }),

/***/ 44912:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-tag/product-article-tag.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleTagModule": () => (/* binding */ ProductArticleTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_article_tag_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-tag-routing.module */ 69903);
/* harmony import */ var _product_article_tag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-article-tag.component */ 8881);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/article/shared-article.module */ 95379);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);












let ProductArticleTagModule = class ProductArticleTagModule {
};
ProductArticleTagModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_product_article_tag_component__WEBPACK_IMPORTED_MODULE_2__.ProductArticleTagComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _product_article_tag_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductArticleTagRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__.SharedArticleModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ]
    })
], ProductArticleTagModule);



/***/ }),

/***/ 63797:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-tag/product-article-tag.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYXJ0aWNsZS10YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHVjdC1hcnRpY2xlLXRhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 71461:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-tag/product-article-tag.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>برچسب مقاله</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-toolbar\r\n      color=\"primary\"\r\n      class=\"ion-margin-top\"\r\n      dir=\"rtl\"\r\n      *ngIf=\"isSelected\"\r\n    >\r\n      <ion-segment [(ngModel)]=\"selectedCategory\">\r\n        <ion-segment-button value=\"add\">\r\n          <ion-icon name=\"build-outline\"></ion-icon>\r\n          <ion-label>درج برچسب</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"edit\">\r\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n          <ion-label>ویرایش برچسب</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n    <ion-grid class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"جستجو کنید\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchTitle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>مقاله ها</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"filteredArticles && !isSelected\">\r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredArticles.articles\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let articlee of filteredArticles.articles\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-teacher-article\r\n                        class=\"point\"\r\n                        [article]=\"articlee\"\r\n                        (SelectEvent)=\"onSelectItem($event)\"\r\n                      ></app-teacher-article>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" style=\"text-align: center\">\r\n                      <ion-button\r\n                        (click)=\"goPreviousPage()\"\r\n                        *ngIf=\"\r\n                          filteredArticles.pageId > filteredArticles.startPage &&\r\n                          +filteredArticles.pageId - 1 > 0\r\n                        \"\r\n                        ><</ion-button\r\n                      >\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredArticles.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          *ngIf=\"\r\n                            filteredArticles.pageId <= i + 3 &&\r\n                            filteredArticles.pageId >= i - 1\r\n                          \"\r\n                          color=\"{{\r\n                            page == filteredArticles.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <ion-button\r\n                        (click)=\"goNextPage()\"\r\n                        *ngIf=\"filteredArticles.pageId < filteredArticles.endPage\"\r\n                        >></ion-button\r\n                      >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n              <div *ngIf=\"isSelected\" dir=\"rtl\">\r\n                <div *ngIf=\"selectedCategory == 'add'\">\r\n                  <ion-list>\r\n                    <ion-list-header>\r\n                      <ion-label>درج برچسب</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label color=\"light\" position=\"stacked\"\r\n                        >عنوان برچسب</ion-label\r\n                      >\r\n                      <ion-input\r\n                        type=\"text\"\r\n                        (keyup.enter)=\"onAddTag()\"\r\n                        placeholder=\"عنوان برچسب\"\r\n                        [(ngModel)]=\"tagName\"\r\n                      ></ion-input>\r\n                      <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    color=\"success\"\r\n                    (click)=\"onAddTag()\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                  >\r\n                    درج برچسب\r\n                  </ion-button>\r\n  \r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    (click)=\"onCancel()\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"danger\"\r\n                  >\r\n                    بازگشت\r\n                  </ion-button>\r\n                  <ion-card class=\"ion-margin-top\" *ngIf=\"addList.length > 0\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >لیست درج برچسب</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-list>\r\n                        <ion-item *ngFor=\"let tag of addList; let i = index\">\r\n                          <ion-label>{{ tag }}</ion-label>\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            (click)=\"presentAlertConfirm(i)\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"trash-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                      <ion-button\r\n                        class=\"ion-margin\"\r\n                        color=\"success\"\r\n                        (click)=\"presentAlertConfirm3()\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                      >\r\n                        درج تمام برچسب ها\r\n                      </ion-button>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </div>\r\n                <div *ngIf=\"selectedCategory == 'edit'\" dir=\"rtl\">\r\n                  <ion-list *ngIf=\"editList\">\r\n                    <ion-list-header>\r\n                      <ion-label>برچسب های مقاله</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item\r\n                      button\r\n                      (click)=\"onTagSelected(i)\"\r\n                      *ngFor=\"let tag of editList; let i = index\"\r\n                    >\r\n                      <ion-label>{{ tag.name }}</ion-label>\r\n                      <ion-button (click)=\"presentRemoveAlertConfirm(i)\">\r\n                        <ion-icon\r\n                          slot=\"icon-only\"\r\n                          name=\"trash-outline\"\r\n                        ></ion-icon>\r\n                      </ion-button>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                  <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n                    <ion-list>\r\n                      <ion-list-header>\r\n                        <ion-label>ویرایش برچسب</ion-label>\r\n                      </ion-list-header>\r\n                      <ion-item>\r\n                        <ion-label position=\"stacked\" color=\"light\"\r\n                          >عنوان برچسب\r\n                        </ion-label>\r\n                        <ion-input formControlName=\"tag\" type=\"text\"></ion-input>\r\n                        <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                      </ion-item>\r\n                    </ion-list>\r\n  \r\n                    <ion-button\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"success\"\r\n                      type=\"submit\"\r\n                      [disabled]=\"form.invalid\"\r\n                    >\r\n                      اعمال ویرایش\r\n                    </ion-button>\r\n  \r\n                    <ion-button\r\n                      class=\"ion-margin\"\r\n                      (click)=\"onCancel()\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                    >\r\n                      بازگشت\r\n                    </ion-button>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_product-article-tag_product-article-tag_module_ts.js.map