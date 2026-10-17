"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_delete-article_delete-article_module_ts"],{

/***/ 6671:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-article/delete-article-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteArticleRoutingModule": () => (/* binding */ DeleteArticleRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _delete_article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-article.component */ 51456);




const routes = [{ path: '', component: _delete_article_component__WEBPACK_IMPORTED_MODULE_0__.DeleteArticleComponent }];
let DeleteArticleRoutingModule = class DeleteArticleRoutingModule {
};
DeleteArticleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DeleteArticleRoutingModule);



/***/ }),

/***/ 51456:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-article/delete-article.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteArticleComponent": () => (/* binding */ DeleteArticleComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _delete_article_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-article.component.html?ngResource */ 39092);
/* harmony import */ var _delete_article_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-article.component.scss?ngResource */ 38469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/article/article.service */ 56847);
/* harmony import */ var _data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/article/ArticleFilterModel */ 55521);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);











let DeleteArticleComponent = class DeleteArticleComponent {
  constructor(articleService, toastController, loadingController, activatedRoute, router, alertController) {
    this.articleService = articleService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.alertController = alertController;
    this.selectedArticleId = 0;
    this.searchTitle = '';
  }

  ngOnInit() {
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;

      if (page === undefined) {
        filter = new _data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_4__.ArticleFilterModel();
      } else {
        const take = params.take ? params.take : null;
        const title = params.title ? params.title : null;
        filter = new _data_model_article_ArticleFilterModel__WEBPACK_IMPORTED_MODULE_4__.ArticleFilterModel(page, take, title);
      }

      this.filteredArticles = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      this.articleService.GetAdminArticlesByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          this.filteredArticles = res.data;
        } else {
          console.log(res);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
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
    this.router.navigate(['AdminPanel', 'DeleteArticle'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredArticles.takeEntity ? this.filteredArticles.takeEntity : null,
        title: this.filteredArticles.title ? this.filteredArticles.title : null
      }
    });
  }

  onDelete() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.articleService.DeleteArticleById(+this.selectedArticleId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        this.setQueryParams(1);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
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

  onSelectItem(id) {
    this.selectedArticleId = +id;
    this.presentAlertConfirm();
  }

};

DeleteArticleComponent.ctorParameters = () => [{
  type: src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_3__.ArticleService
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

DeleteArticleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-delete-article',
  template: _delete_article_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_delete_article_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DeleteArticleComponent);


/***/ }),

/***/ 96617:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-article/delete-article.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteArticleModule": () => (/* binding */ DeleteArticleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _delete_article_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-article-routing.module */ 6671);
/* harmony import */ var _delete_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-article.component */ 51456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/article/shared-article.module */ 95379);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/app/footer/footer.module */ 60412);












let DeleteArticleModule = class DeleteArticleModule {
};
DeleteArticleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_delete_article_component__WEBPACK_IMPORTED_MODULE_2__.DeleteArticleComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _delete_article_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeleteArticleRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_article_shared_article_module__WEBPACK_IMPORTED_MODULE_3__.SharedArticleModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule
        ]
    })
], DeleteArticleModule);



/***/ }),

/***/ 38469:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-article/delete-article.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImRlbGV0ZS1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 39092:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/delete-article/delete-article.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>حذف مقاله</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>مقاله ها</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredArticles\">\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredArticles.articles\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let articlee of filteredArticles.articles\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-teacher-article\r\n                      class=\"point\"\r\n                      [article]=\"articlee\"\r\n                      (SelectEvent)=\"onSelectItem($event)\"\r\n                    ></app-teacher-article>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" style=\"text-align: center\">\r\n                    <ion-button\r\n                      (click)=\"goPreviousPage()\"\r\n                      *ngIf=\"\r\n                        filteredArticles.pageId > filteredArticles.startPage &&\r\n                        +filteredArticles.pageId - 1 > 0\r\n                      \"\r\n                      ><</ion-button\r\n                    >\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredArticles.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        *ngIf=\"\r\n                          filteredArticles.pageId <= i + 3 &&\r\n                          filteredArticles.pageId >= i - 1\r\n                        \"\r\n                        color=\"{{\r\n                          page == filteredArticles.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <ion-button\r\n                      (click)=\"goNextPage()\"\r\n                      *ngIf=\"filteredArticles.pageId < filteredArticles.endPage\"\r\n                      >></ion-button\r\n                    >\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_delete-article_delete-article_module_ts.js.map