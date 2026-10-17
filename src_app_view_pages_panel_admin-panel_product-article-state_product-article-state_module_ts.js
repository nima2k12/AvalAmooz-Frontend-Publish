"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_product-article-state_product-article-state_module_ts"],{

/***/ 55759:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-state/product-article-state-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleStateRoutingModule": () => (/* binding */ ProductArticleStateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_article_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-article-state.component */ 99176);




const routes = [{ path: '', component: _product_article_state_component__WEBPACK_IMPORTED_MODULE_0__.ProductArticleStateComponent }];
let ProductArticleStateRoutingModule = class ProductArticleStateRoutingModule {
};
ProductArticleStateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductArticleStateRoutingModule);



/***/ }),

/***/ 99176:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-state/product-article-state.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleStateComponent": () => (/* binding */ ProductArticleStateComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_article_state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-state.component.html?ngResource */ 8139);
/* harmony import */ var _product_article_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-article-state.component.scss?ngResource */ 26881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/article/ArticleFilterModel */ 55521);
/* harmony import */ var src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/article/article.service */ 56847);











let ProductArticleStateComponent = class ProductArticleStateComponent {
  constructor(articleService, toastController, loadingController, activatedRoute, router, alertController) {
    this.articleService = articleService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.alertController = alertController;
    this.selectedArticleId = 0;
    this.selectedCategory = '2';
    this.selected = false;
    this.searchTitle = '';
    this.isEdited = false;
  }

  ngOnInit() {
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page ? params.page : 1;
      const take = params.take ? params.take : 6;
      const title = params.title ? params.title : null;
      filter = new src_app_data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_5__.ArticleFilterModel(page, take, title);
      this.filteredArticles = filter;
      this.getDate(this.selectedCategory);
    });
  }

  categoryChanged() {
    this.getDate(this.selectedCategory);
  }

  getDate(type) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);

    switch (type) {
      case '1':
        this.articleService.GetProductArticlesByFilter(this.filteredArticles).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.filteredArticles = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.filteredArticles.articles = [];
          } else {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
            this.filteredArticles.articles = [];
          }
        }, err => {
          this.filteredArticles.articles = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;

      case '2':
        this.articleService.GetDeActiveProductArticlesByFilter(this.filteredArticles).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.filteredArticles = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.filteredArticles.articles = [];
          } else {
            this.filteredArticles.articles = [];
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.filteredArticles.articles = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;

      case '3':
        this.articleService.GetEditProductArticlesByFilter(this.filteredArticles).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.filteredArticles = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.filteredArticles.articles = [];
          } else {
            this.filteredArticles.articles = [];
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.filteredArticles.articles = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;

      default:
        this.articleService.GetProductArticlesByFilter(this.filteredArticles).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.filteredArticles = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
            this.filteredArticles.articles = [];
          } else {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
            this.filteredArticles.articles = [];
          }
        }, err => {
          this.filteredArticles.articles = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;
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
    this.router.navigate(['AdminPanel', 'ProductArticleState'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredArticles.takeEntity ? this.filteredArticles.takeEntity : null,
        title: this.filteredArticles.title ? this.filteredArticles.title : null
      }
    });
  }

  onActiveEdit() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.ActiveProductArticleEditById(+this.selectedArticleId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate(this.selectedCategory);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActive() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.ActiveProductArticleById(+this.selectedArticleId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate(this.selectedCategory);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveNoShare() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.ActiveProductArticleByIdNoShare(+this.selectedArticleId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate(this.selectedCategory);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActive() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.articleService.DeActiveProductArticleById(+this.selectedArticleId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        this.selected = false;
        this.getDate(this.selectedCategory);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentActiveAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this.onActive();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentActiveAlertConfirmNoShare() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this2.onActiveNoShare();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentEditAlertConfirm() {
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
            _this3.onActiveEdit();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveAlertConfirm() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this4.onDeActive();
          }
        }]
      });
      yield alert.present();
    })();
  }

  getTeacherName() {
    if (this.selectedArticle.teacherUser === undefined || this.selectedArticle.teacherUser == null) {
      return '';
    }

    const name = this.selectedArticle.teacherUser.name != null ? this.selectedArticle.teacherUser.name : '';
    const family = this.selectedArticle.teacherUser.family != null ? this.selectedArticle.teacherUser.family : '';
    return name + ' ' + family;
  }

  onSelectItem(model) {
    this.selectedArticleId = +model.id;
    this.isEdited = this.filteredArticles.articles.find(e => e.id == +model.id).isEdited;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);

    if (this.selectedCategory == '1') {
      this.articleService.GetProductArticleById(+this.selectedArticleId).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.selectedArticle = res.data;
          this.selectedArticle.imageUrl = this.filteredArticles.articles.find(e => e.id == +model.id).imageUrl;
          this.selected = true;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    } else {
      this.articleService.GetProductArticleEditById(+this.selectedArticleId).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.selectedArticle = res.data;
          this.selectedArticle.imageUrl = this.filteredArticles.articles.find(e => e.id == +model.id).imageUrl;
          this.selected = true;
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

ProductArticleStateComponent.ctorParameters = () => [{
  type: src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_6__.ArticleService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}];

ProductArticleStateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-product-article-state',
  template: _product_article_state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_article_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductArticleStateComponent);


/***/ }),

/***/ 73653:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-state/product-article-state.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleStateModule": () => (/* binding */ ProductArticleStateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_article_state_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-state-routing.module */ 55759);
/* harmony import */ var _product_article_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-article-state.component */ 99176);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/article/shared-article.module */ 95379);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _article_state_article_state_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article-state/article-state-routing.module */ 78641);













let ProductArticleStateModule = class ProductArticleStateModule {
};
ProductArticleStateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_product_article_state_component__WEBPACK_IMPORTED_MODULE_2__.ProductArticleStateComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _product_article_state_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductArticleStateRoutingModule,
            _article_state_article_state_routing_module__WEBPACK_IMPORTED_MODULE_6__.ArticleStateRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_4__.SharedArticleModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], ProductArticleStateModule);



/***/ }),

/***/ 26881:
/*!********************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-state/product-article-state.component.scss?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "a {\n  text-decoration: none;\n}\n\n.pointer:hover {\n  color: #ec8c1d !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYXJ0aWNsZS1zdGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3QtYXJ0aWNsZS1zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucG9pbnRlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2VjOGMxZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 8139:
/*!********************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-article-state/product-article-state.component.html?ngResource ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>تغییر وضعیت مقاله</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-card dir=\"rtl\">\r\n      <ion-item>\r\n        <ion-button\r\n          color=\"success\"\r\n          class=\"ion-margin\"\r\n          fill=\"clear\"\r\n          (click)=\"setQueryParams(1)\"\r\n        >\r\n          <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-input\r\n          (keyup.enter)=\"setQueryParams(1)\"\r\n          placeholder=\"جستجو کنید\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"searchTitle\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n  \r\n    <ion-toolbar color=\"primary\" class=\"ion-margin-top\" dir=\"rtl\">\r\n      <ion-segment [(ngModel)]=\"selectedCategory\" (ionChange)=\"categoryChanged()\">\r\n        <ion-segment-button value=\"1\">\r\n          <ion-icon name=\"build-outline\"></ion-icon>\r\n          <ion-label>مقاله های فعال</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"2\">\r\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n          <ion-label>مقاله های غیر فعال</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"3\">\r\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n          <ion-label>مقاله های ویرایش شده</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n  \r\n    <ion-grid *ngIf=\"!selected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>مقاله ها</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"filteredArticles\">\r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredArticles.articles\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let article of filteredArticles.articles\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-teacher-article\r\n                        class=\"point\"\r\n                        [article]=\"article\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-teacher-article>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" style=\"text-align: center\">\r\n                      <ion-button\r\n                        (click)=\"goPreviousPage()\"\r\n                        *ngIf=\"\r\n                          filteredArticles.pageId > filteredArticles.startPage &&\r\n                          +filteredArticles.pageId - 1 > 0\r\n                        \"\r\n                        ><</ion-button\r\n                      >\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredArticles.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          *ngIf=\"\r\n                            filteredArticles.pageId <= i + 3 &&\r\n                            filteredArticles.pageId >= i - 1\r\n                          \"\r\n                          color=\"{{\r\n                            page == filteredArticles.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <ion-button\r\n                        (click)=\"goNextPage()\"\r\n                        *ngIf=\"filteredArticles.pageId < filteredArticles.endPage\"\r\n                        >></ion-button\r\n                      >\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid *ngIf=\"selected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-button\r\n            expand=\"block\"\r\n            color=\"danger\"\r\n            shape=\"round\"\r\n            (click)=\"selected = false\"\r\n          >\r\n            برگشت\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"selectedArticle\">\r\n        <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\">\r\n          <ion-row dir=\"rtl\">\r\n            <ion-col size=\"12\" offset=\"0\" size-lg=\"4\" offset-lg=\"0\">\r\n              <ion-card>\r\n                <ion-card-header>\r\n                  <!-- <ion-card-subtitle dir=\"rtl\" style=\"text-align: center\"\r\n                    ><ion-label color=\"medium\">تعداد بازدید: </ion-label>\r\n                    <ion-text color=\"medium\">\r\n                      {{ selectedArticle.viewCount }}\r\n                    </ion-text>\r\n                    <ion-icon name=\"eye-outline\"></ion-icon>\r\n                  </ion-card-subtitle> -->\r\n                  <ion-card-title style=\"text-align: center\"\r\n                    >اطلاعات مقاله</ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-item *ngIf=\"selectedArticle.teacherUser\">\r\n                      <ion-label>کد مدرس: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{\r\n                          selectedArticle.teacherUser.id\r\n                        }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedArticle.teacherUser\">\r\n                      <ion-label>مدرس: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{\r\n                          selectedArticle.teacherUser.name +\r\n                            \" \" +\r\n                            selectedArticle.teacherUser.family\r\n                        }}\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedArticle.lastUpdateDate\">\r\n                      <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>\r\n                          {{ selectedArticle.lastUpdateDate | persianDate }}\r\n                        </h5>\r\n                      </ion-text>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedArticle.id\">\r\n                      <ion-label>کد مقاله: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>\r\n                          {{ selectedArticle.id }}\r\n                        </h5>\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                  <div>\r\n                    <ion-button\r\n                      *ngIf=\"selectedArticle.isActive && selectedCategory != '3'\"\r\n                      expand=\"block\"\r\n                      color=\"danger\"\r\n                      shape=\"round\"\r\n                      (click)=\"presentDeActiveAlertConfirm()\"\r\n                    >\r\n                      غیر فعال کردن مقاله\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"!selectedArticle.isActive && selectedCategory != '3'\"\r\n                      expand=\"block\"\r\n                      color=\"success\"\r\n                      shape=\"round\"\r\n                      fill=\"solid\"\r\n                      (click)=\"presentActiveAlertConfirm()\"\r\n                    >\r\n                      فعال کردن مقاله\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"!selectedArticle.isActive && selectedCategory != '3'\"\r\n                      expand=\"block\"\r\n                      color=\"warning\"\r\n                      shape=\"round\"\r\n                      fill=\"solid\"\r\n                      (click)=\"presentActiveAlertConfirmNoShare()\"\r\n                    >\r\n                      فعال کردن مقاله بدون انتشار\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"isEdited\"\r\n                      expand=\"block\"\r\n                      color=\"twitter\"\r\n                      shape=\"round\"\r\n                      fill=\"solid\"\r\n                      (click)=\"presentEditAlertConfirm()\"\r\n                    >\r\n                      تایید ویرایش\r\n                    </ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n  \r\n            <ion-col size=\"12\" offset=\"0\" size-lg=\"8\" offset-lg=\"0\">\r\n              <ion-card>\r\n                <ion-img\r\n                  class=\"ion-margin-bottom c-a-images\"\r\n                  [src]=\"selectedArticle.imageUrl\"\r\n                  [alt]=\"selectedArticle.name\"\r\n                  [title]=\"selectedArticle.name\"\r\n                ></ion-img>\r\n                <ion-card-header>\r\n                  <ion-card-title style=\"text-align: center\"\r\n                    ><a routerLink=\"{{ '/a/' + selectedArticle.id }}\">\r\n                      <h1 style=\"font-size: 14px\">\r\n                        <ion-text class=\"pointer\" color=\"light\">{{\r\n                          selectedArticle.name\r\n                        }}</ion-text>\r\n                      </h1>\r\n                    </a></ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content dir=\"rtl\">\r\n                  <p [innerHTML]=\"selectedArticle.shortDescription\"></p>\r\n                  <br />\r\n                  <p [innerHTML]=\"selectedArticle.description\"></p>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_product-article-state_product-article-state_module_ts.js.map