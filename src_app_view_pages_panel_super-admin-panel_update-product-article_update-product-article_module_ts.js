"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_update-product-article_update-product-article_module_ts"],{

/***/ 7973:
/*!********************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-article/update-product-article-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductArticleRoutingModule": () => (/* binding */ UpdateProductArticleRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_product_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product-article.component */ 45404);




const routes = [{ path: '', component: _update_product_article_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProductArticleComponent }];
let UpdateProductArticleRoutingModule = class UpdateProductArticleRoutingModule {
};
UpdateProductArticleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UpdateProductArticleRoutingModule);



/***/ }),

/***/ 45404:
/*!***************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-article/update-product-article.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductArticleComponent": () => (/* binding */ UpdateProductArticleComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_product_article_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-article.component.html?ngResource */ 11254);
/* harmony import */ var _update_product_article_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-article.component.scss?ngResource */ 30780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_article_AddOrUpdateArticleModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/article/AddOrUpdateArticleModel */ 56481);
/* harmony import */ var src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/article/ArticleFilterModel */ 55521);
/* harmony import */ var src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/article/article.service */ 56847);














let UpdateProductArticleComponent = class UpdateProductArticleComponent {
  constructor(articleService, fb, toastController, loadingController, activatedRoute, router, domSanitizer, alertController) {
    this.articleService = articleService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
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
    this.selectedArticleId = 0;
    this.articleSelected = false;
    this.empty = false;
  }

  ngOnInit() {
    this.updateArticleForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      imageUrl: ['http://localhost:4300/assets/images/in-progress.webp', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000000)]],
      imageNamePNG: ['http://localhost:4300/assets/images/in-progress.png', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000000)]],
      shortDescriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000000)]],
      descriptionHtmlContent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000000)]]
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page ? params.page : 1;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      filter = new src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_6__.ArticleFilterModel(page, take, title);
      this.filteredArticles = filter;
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.articleService.GetAdminProductArticlesByFilter(filter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.filteredArticles = res.data;
        } else {
          this.empty = true;
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  presentAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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
            _this.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onUpdate() {
    if (this.updateArticleForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController); // this.shortDescription = this.domSanitizer
      //   .sanitize(SecurityContext.HTML, this.updateArticleForm.value.shortDescriptionHtmlContent);

      this.shortDescription = this.updateArticleForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_9__.SecurityContext.HTML, this.updateArticleForm.value.descriptionHtmlContent);
      this.article = new src_app_data_model_article_AddOrUpdateArticleModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateArticleModel(this.selectedArticleId, this.updateArticleForm.value.name, this.shortDescription, this.description, this.updateArticleForm.value.imageUrl, this.updateArticleForm.value.imageNamePNG);
      this.articleService.AdminUpdateProductArticle(this.article).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.filteredArticles = new src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_6__.ArticleFilterModel();
          this.articleService.GetAdminProductArticlesByFilter(this.filteredArticles).subscribe(res => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
              this.filteredArticles = res.data;
              this.articleSelected = false;
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          });
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
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
    this.router.navigate(['SuperAdminPanel', 'UpdateProductArticle'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredArticles.takeEntity ? this.filteredArticles.takeEntity : null,
        title: this.filteredArticles.title ? this.filteredArticles.title : null
      }
    });
  }

  onSelectItem(model) {
    this.selectedArticleId = +model.id;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);

    if (model.isActive) {
      this.articleService.GetProductArticleById(+model.id).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.articleDetail = res.data;
          this.updateArticleForm.setValue({
            name: res.data.name,
            imageUrl: res.data.imageUrl,
            imageNamePNG: res.data.imageNamePNG,
            shortDescriptionHtmlContent: res.data.shortDescription,
            descriptionHtmlContent: res.data.description
          });
          this.articleSelected = true;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          this.selectedArticleId = 0;
          this.articleSelected = false;
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedArticleId = 0;
        this.articleSelected = false;
      });
    } else {
      this.articleService.GetDeActiveProductArticleById(+model.id).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.articleDetail = res.data;
          this.updateArticleForm.setValue({
            name: res.data.name,
            imageUrl: res.data.imageUrl,
            imageNamePNG: res.data.imageNamePNG,
            shortDescriptionHtmlContent: res.data.shortDescription,
            descriptionHtmlContent: res.data.description
          });
          this.articleSelected = true;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          this.selectedArticleId = 0;
          this.articleSelected = false;
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedArticleId = 0;
        this.articleSelected = false;
      });
    }
  }

  onCancel() {
    this.selectedArticleId = 0;
    this.articleSelected = false;
  }

};

UpdateProductArticleComponent.ctorParameters = () => [{
  type: src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_7__.ArticleService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}];

UpdateProductArticleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-update-product-article',
  template: _update_product_article_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_product_article_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateProductArticleComponent);


/***/ }),

/***/ 95769:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-article/update-product-article.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductArticleModule": () => (/* binding */ UpdateProductArticleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_product_article_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-article-routing.module */ 7973);
/* harmony import */ var _update_product_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-article.component */ 45404);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/article/shared-article.module */ 95379);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);













let UpdateProductArticleModule = class UpdateProductArticleModule {
};
UpdateProductArticleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_update_product_article_component__WEBPACK_IMPORTED_MODULE_2__.UpdateProductArticleComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _update_product_article_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateProductArticleRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__.SharedArticleModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__.AngularEditorModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], UpdateProductArticleModule);



/***/ }),

/***/ 30780:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-article/update-product-article.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZHVjdC1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 11254:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-article/update-product-article.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/SuperAdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>ویرایش مقاله</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid *ngIf=\"!articleSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"جستجو کنید\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchTitle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>مقاله های شما</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"empty\" dir=\"rtl\">\r\n                <ion-text color=\"warning\" class=\"text-center\">\r\n                  <h2>هنوز مقاله ای ایجاد نکرده اید</h2>\r\n                </ion-text>\r\n              </div>\r\n              <div *ngIf=\"filteredArticles\">\r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredArticles.articles\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let articlee of filteredArticles.articles\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-teacher-article\r\n                        class=\"point\"\r\n                        [article]=\"articlee\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-teacher-article>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" style=\"text-align: center\">\r\n                      <ion-button\r\n                        (click)=\"goPreviousPage()\"\r\n                        *ngIf=\"\r\n                          filteredArticles.pageId > filteredArticles.startPage &&\r\n                          +filteredArticles.pageId - 1 > 0\r\n                        \"\r\n                        ><</ion-button\r\n                      >\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredArticles.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          *ngIf=\"\r\n                            filteredArticles.pageId <= i + 3 &&\r\n                            filteredArticles.pageId >= i - 1\r\n                          \"\r\n                          color=\"{{\r\n                            page == filteredArticles.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <ion-button\r\n                        (click)=\"goNextPage()\"\r\n                        *ngIf=\"filteredArticles.pageId < filteredArticles.endPage\"\r\n                        >></ion-button\r\n                      >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid *ngIf=\"articleSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n          <form [formGroup]=\"updateArticleForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title class=\"text-center\">ویرایش مقاله</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >عنوان مقاله\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"عنوان\"\r\n                      formControlName=\"name\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >آدرس تصویر مقاله\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"http://...\"\r\n                      formControlName=\"imageUrl\"\r\n                      type=\"url\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >آدرس تصویر PNG\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"http://...\"\r\n                      formControlName=\"imageNamePNG\"\r\n                      type=\"url\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >توضیحات کوتاه\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"توضیحات کوتاه...\"\r\n                      formControlName=\"shortDescriptionHtmlContent\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                    <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >توضیحات اصلی\r\n                    </ion-label>\r\n                    <br />\r\n                    <angular-editor\r\n                      id=\"editor6\"\r\n                      formControlName=\"descriptionHtmlContent\"\r\n                      [config]=\"editorConfig\"\r\n                    ></angular-editor>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </ion-card-content>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"updateArticleForm.invalid\"\r\n            >\r\n              ویرایش مقاله\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_update-product-article_update-product-article_module_ts.js.map