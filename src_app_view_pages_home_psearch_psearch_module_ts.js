"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_home_psearch_psearch_module_ts"],{

/***/ 91822:
/*!*******************************************************************!*\
  !*** ./src/app/view/pages/home/psearch/psearch-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PSearchRoutingModule": () => (/* binding */ PSearchRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _psearch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./psearch.component */ 1812);




const routes = [{ path: '', component: _psearch_component__WEBPACK_IMPORTED_MODULE_0__.PSearchComponent }];
let PSearchRoutingModule = class PSearchRoutingModule {
};
PSearchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], PSearchRoutingModule);



/***/ }),

/***/ 1812:
/*!**************************************************************!*\
  !*** ./src/app/view/pages/home/psearch/psearch.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PSearchComponent": () => (/* binding */ PSearchComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _psearch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./psearch.component.html?ngResource */ 6277);
/* harmony import */ var _psearch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./psearch.component.scss?ngResource */ 64113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _components_modal_filter_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/modal/filter/product-filter/product-filter.component */ 35891);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/i18n/site-language.service */ 37159);




/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/member-ordering */













let PSearchComponent = class PSearchComponent {
  constructor(activatedRoute, productService, router, modalCtrl, toastController, loadingController, routerOutlet, language, menuCtrl) {
    this.activatedRoute = activatedRoute;
    this.productService = productService;
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.routerOutlet = routerOutlet;
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.showSearchbar = true;
    this.queryText = '';
    this.notfound = false;
    this.isLoading = false;
    this.courseCount = 0;
    this.productCount = 0;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription();
    this.instagram = '';
    this.twiter = '';
    this.facebook = '';
    this.telegram = '';
    this.pinterest = '';
    this.aparat = '';
    this.discord = '';
    this.youtube = '';
    this.twitch = '';
    this.linkedin = '';
    this.quickTopics = [{
      title: 'همه کاربرگ‌ها',
      query: '',
      icon: 'cube-outline'
    }, {
      title: 'کاربرگ پایه اول',
      query: 'پایه اول',
      icon: 'school-outline'
    }, {
      title: 'کاربرگ فارسی و نشانه‌ها',
      query: 'فارسی',
      icon: 'book-outline'
    }, {
      title: 'ریاضی و تم‌های اول',
      query: 'ریاضی',
      icon: 'calculator-outline'
    }, {
      title: 'پیک آدینه و آزمون هفتگی',
      query: 'پیک آدینه',
      icon: 'document-text-outline'
    }, {
      title: 'طرح درس سالانه و روزانه',
      query: 'طرح درس',
      icon: 'reader-outline'
    }, {
      title: 'پیش‌دبستانی و دست‌ورزی',
      query: 'پیش دبستانی',
      icon: 'happy-outline'
    }, {
      title: 'آزمون‌های ماهانه',
      query: 'آزمون',
      icon: 'ribbon-outline'
    }];
    this.sortOptions = [{
      id: 4,
      label: 'جدیدترین',
      icon: 'sparkles-outline'
    }, {
      id: 3,
      label: 'پربازدیدترین',
      icon: 'flame-outline'
    }, {
      id: 1,
      label: 'ارزان‌ترین',
      icon: 'arrow-down-circle-outline'
    }, {
      id: 2,
      label: 'گران‌ترین',
      icon: 'arrow-up-circle-outline'
    }];
  }

  get loggedIn() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__.GAccount.IsLoggedIn();
  }

  get cartCount() {
    return this.courseCount + this.productCount;
  }

  get currentSortId() {
    if (!this.filteredProducts || this.filteredProducts.sortId == null) {
      return 4;
    }

    return +this.filteredProducts.sortId;
  }

  get hasActiveFilters() {
    if (!this.filteredProducts) {
      return !!(this.queryText && this.queryText.trim().length > 0);
    }

    const hasQuery = !!(this.queryText && this.queryText.trim().length > 0);
    const hasStartPrice = this.filteredProducts.startPrice != null && +this.filteredProducts.startPrice > 0;
    const hasEndPrice = this.filteredProducts.endPrice != null && +this.filteredProducts.endPrice > 0;
    const hasCats = !!(this.filteredProducts.categoryIds && this.filteredProducts.categoryIds.length > 0);
    const hasNonDefaultSort = this.filteredProducts.sortId != null && +this.filteredProducts.sortId !== 4 && +this.filteredProducts.sortId !== 0;
    const hasFlags = this.filteredProducts.onlyUsed || this.filteredProducts.onlyExisting;
    return hasQuery || hasStartPrice || hasEndPrice || hasCats || hasNonDefaultSort || hasFlags;
  }

  url(path) {
    return this.language.url(path);
  }

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  goTop() {
    if (this.content) {
      this.content.scrollToTop(600);
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event?.target?.complete();
    }, 1500);
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.Discord;
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.getCartCoursesCount().subscribe(count => this.courseCount = count));
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.getCartProductsCount().subscribe(count => this.productCount = count));
    let filter;
    this.subscriptions.add(this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page ? +params.page : 1;
      const take = params.take ? +params.take : 12;
      const title = params.title ? params.title : '';
      const startPrice = params.startPrice ? +params.startPrice : null;
      const endPrice = params.endPrice ? +params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : null;
      const sortId = params.sortId ? +params.sortId : 4;
      let isUsed = params.isUsed ? params.isUsed == 'true' : false;
      let onlyUsed = params.onlyUsed ? params.onlyUsed == 'true' : false;
      const onlyExisting = params.onlyExisting ? params.onlyExisting == 'true' : false;
      this.queryText = title;

      if (startPrice == null && endPrice == null && categoryIds == null && sortId == 4 && !isUsed && !onlyUsed && !onlyExisting) {
        filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModel(false, page, take, title);
      } else {
        const catIds = [];

        if (categoryIds != null) {
          if (typeof categoryIds === 'string' && categoryIds.length > 0) {
            if (categoryIds.includes(',')) {
              categoryIds.split(',').forEach(cat => catIds.push(+cat));
            } else {
              catIds.push(+categoryIds);
            }
          } else if (Array.isArray(categoryIds)) {
            categoryIds.forEach(cat => catIds.push(+cat));
          }
        }

        if (isUsed && onlyUsed || !isUsed && !onlyUsed) {
          isUsed = false;
          onlyUsed = false;
        } else if (isUsed || onlyUsed) {
          isUsed = true;
        }

        filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModel(true, page, take, title, startPrice, endPrice, onlyUsed, onlyExisting, catIds, sortId, isUsed);
      }

      this.filteredProducts = filter;
      this.isLoading = true;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
      this.productService.GetProductsByFilter(filter).subscribe(res => {
        this.isLoading = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
          this.filteredProducts = res.data;
          this.notfound = false;
        } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
          this.notfound = true;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, this.language.text('search.noResults'));
        }
      }, err => {
        this.isLoading = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      });
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  presentFilter() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _components_modal_filter_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_9__.ProductFilterComponent,
        swipeToClose: true,
        presentingElement: _this2.routerOutlet.nativeEl,
        componentProps: {
          filteredProducts: _this2.filteredProducts
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        _this2.filteredProducts = data;

        _this2.setQueryParams(1);
      }
    })();
  }

  setQueryParams(pageId) {
    this.goTop();
    this.router.navigate(['Product', 'Search'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredProducts?.takeEntity ? this.filteredProducts.takeEntity : null,
        title: this.filteredProducts?.title ? this.filteredProducts.title : null,
        startPrice: this.filteredProducts?.startPrice ? this.filteredProducts.startPrice : null,
        endPrice: this.filteredProducts?.endPrice ? this.filteredProducts.endPrice : null,
        categoryIds: this.filteredProducts?.categoryIds && this.filteredProducts.categoryIds.length > 0 ? this.filteredProducts.categoryIds.join(',') : null,
        sortId: this.filteredProducts?.sortId != null ? this.filteredProducts.sortId : 4,
        onlyUsed: this.filteredProducts?.onlyUsed ? this.filteredProducts.onlyUsed : null,
        onlyExisting: this.filteredProducts?.onlyExisting ? this.filteredProducts.onlyExisting : null,
        isUsed: this.filteredProducts?.isUsed ? this.filteredProducts.isUsed : null
      }
    });
  }

  search() {
    if (this.filteredProducts) {
      this.filteredProducts.title = this.queryText ? this.queryText.trim() : '';
    }

    this.setQueryParams(1);
  }

  clearSearch() {
    this.queryText = '';

    if (this.filteredProducts) {
      this.filteredProducts.title = '';
      this.filteredProducts.startPrice = null;
      this.filteredProducts.endPrice = null;
      this.filteredProducts.categoryIds = [];
      this.filteredProducts.sortId = 4;
      this.filteredProducts.onlyUsed = false;
      this.filteredProducts.onlyExisting = false;
    }

    this.setQueryParams(1);
  }

  quickSearch(term) {
    this.queryText = term;

    if (this.filteredProducts) {
      this.filteredProducts.title = term;
    }

    this.setQueryParams(1);
  }

  isTopicActive(term) {
    if (!term || term === '') {
      return !this.queryText || this.queryText.trim().length === 0;
    }

    return (this.queryText || '').trim().toLowerCase() === term.trim().toLowerCase();
  }

  setSort(sortId) {
    if (this.filteredProducts) {
      this.filteredProducts.sortId = sortId;
      this.setQueryParams(1);
    }
  }

  MakePageCountArray(pageCount) {
    const array = [];
    const count = +pageCount;

    for (let i = 1; i <= count; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (!this.filteredProducts?.startPage) {
      return;
    }

    if (this.filteredProducts.pageId > this.filteredProducts.startPage && +this.filteredProducts.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredProducts.pageId - 1);
    }
  }

  goNextPage() {
    if (!this.filteredProducts?.endPage) {
      return;
    }

    if (this.filteredProducts.pageId < this.filteredProducts.endPage) {
      this.setQueryParams(+this.filteredProducts.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  onSort(sortId) {
    const val = sortId?.detail?.value != null ? +sortId.detail.value : 4;
    this.setSort(val);
  }

};

PSearchComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRouterOutlet
}, {
  type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_10__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController
}];

PSearchComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent]
  }]
};
PSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-psearch',
  template: _psearch_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_psearch_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PSearchComponent);


/***/ }),

/***/ 46344:
/*!***********************************************************!*\
  !*** ./src/app/view/pages/home/psearch/psearch.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PSearchModule": () => (/* binding */ PSearchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _psearch_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./psearch-routing.module */ 91822);
/* harmony import */ var _psearch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./psearch.component */ 1812);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_modal_filter_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/modal/filter/filter.module */ 25822);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/i18n/site-i18n.module */ 58586);















let PSearchModule = class PSearchModule {
};
PSearchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_psearch_component__WEBPACK_IMPORTED_MODULE_2__.PSearchComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _psearch_routing_module__WEBPACK_IMPORTED_MODULE_1__.PSearchRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            src_app_view_components_modal_filter_filter_module__WEBPACK_IMPORTED_MODULE_5__.FilterModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__.SharedProductModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_7__.SiteI18nModule
        ]
    })
], PSearchModule);



/***/ }),

/***/ 64113:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/home/psearch/psearch.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", system-ui, sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 8px;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.page-container {\n  width: min(1280px, 100% - 40px);\n  margin-inline: auto;\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-logo-wrap .brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 1.25rem;\n  font-weight: 900;\n  line-height: 1.2;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 0.78rem;\n  font-weight: 600;\n  margin-top: 2px;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n@media (max-width: 992px) {\n  .main-nav {\n    display: none;\n  }\n}\n\n.nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 12px;\n  color: var(--ink-secondary);\n  font-size: 0.92rem;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n\n.nav-link-btn ion-icon {\n  font-size: 18px;\n  color: var(--muted);\n}\n\n.nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.nav-link-btn:hover ion-icon {\n  color: var(--purple);\n}\n\n.nav-link-btn.active-nav {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-link-btn.active-nav ion-icon {\n  color: var(--purple);\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.icon-button {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #ddd6fe);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.icon-button ion-icon {\n  font-size: 22px;\n}\n\n.icon-button:hover {\n  background: var(--catalog-purple-hover, #e0e7ff);\n  transform: translateY(-1px);\n}\n\n.icon-button.cart {\n  position: relative;\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  border-color: var(--catalog-border, #fde68a);\n}\n\n.icon-button.cart .cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-start: -4px;\n  background: var(--catalog-danger, var(--rose));\n  color: #fff;\n  font-size: 0.7rem;\n  font-weight: 900;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  border-radius: 999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--catalog-surface, #fff);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple), var(--purple-dark)));\n  color: #fff;\n  border-radius: 14px;\n  font-size: 0.92rem;\n  font-weight: 800;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transition: all 0.2s ease;\n}\n\n.login-button ion-icon {\n  font-size: 20px;\n}\n\n.login-button:hover {\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.35);\n  transform: translateY(-2px);\n}\n\n@media (max-width: 576px) {\n  .login-button {\n    padding: 10px 14px;\n  }\n  .login-button .login-text {\n    display: none;\n  }\n}\n\n/* ==========================================================================\n   Hero Search Section\n   ========================================================================== */\n\n.psearch-content {\n  --background: var(--bg-canvas);\n  background: var(--bg-canvas);\n}\n\n.search-hero {\n  position: relative;\n  background: linear-gradient(180deg, var(--catalog-purple-soft, #f5f3ff) 0%, var(--catalog-purple-soft, #ede9fe) 60%, var(--bg-canvas) 100%);\n  padding: 48px 0 64px;\n  overflow: hidden;\n  text-align: center;\n}\n\n.hero-backdrop-glow {\n  position: absolute;\n  top: -120px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 700px;\n  height: 400px;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(253, 230, 138, 0.25) 50%, transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n  z-index: 0;\n}\n\n.floating-decor {\n  position: absolute;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 28px;\n  z-index: 1;\n  opacity: 0.75;\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08));\n  animation: floatDecor 5s ease-in-out infinite alternate;\n}\n\n.floating-decor.book {\n  top: 36px;\n  inset-inline-start: 6%;\n  font-size: 34px;\n  animation-duration: 6s;\n}\n\n.floating-decor.star {\n  top: 70px;\n  inset-inline-end: 8%;\n  color: var(--amber);\n  font-size: 26px;\n  animation-duration: 4.5s;\n  animation-delay: 1s;\n}\n\n.floating-decor.pencil {\n  bottom: 80px;\n  inset-inline-start: 10%;\n  font-size: 30px;\n  animation-duration: 5.5s;\n  animation-delay: 0.5s;\n}\n\n.floating-decor.sparkle {\n  bottom: 90px;\n  inset-inline-end: 12%;\n  color: var(--purple);\n  font-size: 24px;\n  animation-duration: 4s;\n}\n\n@media (max-width: 768px) {\n  .floating-decor {\n    display: none;\n  }\n}\n\n@keyframes floatDecor {\n  0% {\n    transform: translateY(0) rotate(0deg);\n  }\n  100% {\n    transform: translateY(-12px) rotate(6deg);\n  }\n}\n\n.hero-container {\n  position: relative;\n  z-index: 2;\n  max-width: 900px;\n}\n\n.hero-header-text {\n  margin-bottom: 28px;\n}\n\n.hero-header-text .eyebrow-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 18px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #ddd6fe);\n  border-radius: 999px;\n  color: var(--purple-dark);\n  font-size: 0.88rem;\n  font-weight: 800;\n  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.08);\n  margin-bottom: 18px;\n}\n\n.hero-header-text .eyebrow-chip .sparkle-icon {\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.hero-header-text h1 {\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n  font-weight: 900;\n  line-height: 1.35;\n  color: var(--ink);\n  margin-bottom: 14px;\n}\n\n.hero-header-text h1 .highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n}\n\n.hero-header-text h1 .highlight svg {\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  fill: none;\n  stroke: var(--amber);\n  stroke-width: 4;\n  stroke-linecap: round;\n  pointer-events: none;\n}\n\n.hero-header-text .hero-subtext {\n  font-size: 1.02rem;\n  line-height: 1.85;\n  color: var(--ink-secondary);\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.hero-search-form {\n  max-width: 760px;\n  margin: 0 auto 24px;\n}\n\n.hero-search-form .search-input-group {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: var(--catalog-surface, #ffffff);\n  border-radius: 20px;\n  padding: 6px 8px 6px 20px;\n  box-shadow: 0 12px 36px rgba(109, 40, 217, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);\n  border: 2px solid transparent;\n  transition: all 0.25s ease;\n}\n\n.hero-search-form .search-input-group:focus-within {\n  border-color: var(--purple);\n  box-shadow: 0 14px 40px rgba(109, 40, 217, 0.2);\n}\n\n.hero-search-form .search-input-group .search-input-icon {\n  font-size: 24px;\n  color: var(--purple);\n  margin-inline-end: 12px;\n  flex-shrink: 0;\n}\n\n.hero-search-form .search-input-group input {\n  flex: 1;\n  border: 0;\n  outline: none;\n  background: transparent;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--ink);\n  min-width: 0;\n}\n\n.hero-search-form .search-input-group input::placeholder {\n  color: var(--catalog-muted, #94a3b8);\n  font-weight: 500;\n}\n\n.hero-search-form .search-input-group .clear-input-btn {\n  color: var(--catalog-muted, #94a3b8);\n  font-size: 22px;\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s ease;\n}\n\n.hero-search-form .search-input-group .clear-input-btn:hover {\n  color: var(--rose);\n}\n\n.hero-search-form .search-input-group .search-action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 28px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple), var(--purple-dark)));\n  color: #ffffff;\n  border-radius: 16px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n\n.hero-search-form .search-input-group .search-action-btn ion-icon {\n  font-size: 18px;\n}\n\n.hero-search-form .search-input-group .search-action-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.35);\n}\n\n@media (max-width: 576px) {\n  .hero-search-form .search-input-group {\n    padding: 6px 6px 6px 14px;\n  }\n  .hero-search-form .search-input-group .search-action-btn {\n    padding: 10px 16px;\n  }\n  .hero-search-form .search-input-group .search-action-btn span {\n    display: none;\n  }\n}\n\n.quick-topics-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.quick-topics-row .quick-title {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: var(--muted);\n}\n\n.quick-topics-row .quick-title ion-icon {\n  font-size: 16px;\n  color: var(--purple);\n}\n\n.quick-topics-row .quick-chips-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.quick-topics-row .quick-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #e2e8f0);\n  color: var(--ink-secondary);\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.quick-topics-row .quick-chip ion-icon {\n  font-size: 14px;\n  color: var(--muted);\n}\n\n.quick-topics-row .quick-chip:hover {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.quick-topics-row .quick-chip:hover ion-icon {\n  color: var(--purple);\n}\n\n.quick-topics-row .quick-chip.active {\n  background: var(--catalog-action, var(--purple));\n  border-color: var(--purple);\n  color: #ffffff;\n  box-shadow: 0 4px 12px var(--purple-glow);\n}\n\n.quick-topics-row .quick-chip.active ion-icon {\n  color: #ffffff;\n}\n\n.hero-wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  line-height: 0;\n  pointer-events: none;\n}\n\n.hero-wave svg {\n  width: 100%;\n  height: 32px;\n  fill: var(--bg-canvas);\n}\n\n/* ==========================================================================\n   Catalog Results & Toolbar\n   ========================================================================== */\n\n.catalog-container {\n  padding: 32px 0 64px;\n}\n\n.catalog-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #ede9fe);\n  border-radius: 20px;\n  padding: 16px 20px;\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.05);\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n\n.catalog-toolbar .toolbar-info {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.catalog-toolbar .toolbar-info .results-heading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.catalog-toolbar .toolbar-info .results-heading .title-label {\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.catalog-toolbar .toolbar-info .results-heading .title-label b {\n  color: var(--purple);\n}\n\n.catalog-toolbar .toolbar-info .results-heading .results-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  font-size: 0.8rem;\n  font-weight: 800;\n  border-radius: 999px;\n}\n\n.catalog-toolbar .toolbar-info .reset-filters-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 12px;\n  background: var(--rose-light);\n  color: var(--rose);\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.catalog-toolbar .toolbar-info .reset-filters-chip:hover {\n  background: var(--catalog-rose-soft, #fecdd3);\n}\n\n.catalog-toolbar .toolbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.catalog-toolbar .toolbar-actions .sort-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-caption {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--muted);\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-caption ion-icon {\n  font-size: 16px;\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pills {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--catalog-soft, #f8fafc);\n  padding: 4px;\n  border-radius: 14px;\n  border: 1px solid var(--catalog-border, #e2e8f0);\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pill-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: var(--ink-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pill-btn ion-icon {\n  font-size: 14px;\n  color: var(--muted);\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pill-btn:hover {\n  color: var(--purple);\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pill-btn.active {\n  background: var(--catalog-surface, #ffffff);\n  color: var(--purple);\n  font-weight: 800;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.catalog-toolbar .toolbar-actions .sort-group .sort-pill-btn.active ion-icon {\n  color: var(--purple);\n}\n\n.catalog-toolbar .toolbar-actions .advanced-filter-btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #ddd6fe);\n  border-radius: 14px;\n  font-size: 0.88rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.catalog-toolbar .toolbar-actions .advanced-filter-btn ion-icon {\n  font-size: 18px;\n}\n\n.catalog-toolbar .toolbar-actions .advanced-filter-btn:hover {\n  background: var(--catalog-purple-hover, #e0e7ff);\n  transform: translateY(-1px);\n}\n\n.catalog-toolbar .toolbar-actions .advanced-filter-btn .filter-active-dot {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--rose);\n  border: 2px solid var(--catalog-surface, #ffffff);\n}\n\n/* ==========================================================================\n   Product Grid Styling\n   ========================================================================== */\n\n.catalog-results-grid {\n  margin-bottom: 40px;\n}\n\n.catalog-results-grid ion-col {\n  padding: 10px;\n}\n\n/* ==========================================================================\n   Empty State Card\n   ========================================================================== */\n\n.catalog-empty-card {\n  background: var(--catalog-surface, #ffffff);\n  border-radius: 28px;\n  padding: 56px 32px;\n  text-align: center;\n  border: 1px solid var(--catalog-border, #ede9fe);\n  box-shadow: 0 12px 36px rgba(109, 40, 217, 0.06);\n  max-width: 640px;\n  margin: 32px auto 60px;\n}\n\n.catalog-empty-card .empty-icon-wrap {\n  width: 76px;\n  height: 76px;\n  border-radius: 24px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 38px;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.12);\n}\n\n.catalog-empty-card h3 {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 12px;\n}\n\n.catalog-empty-card p {\n  font-size: 0.95rem;\n  line-height: 1.8;\n  color: var(--muted);\n  max-width: 480px;\n  margin: 0 auto 28px;\n}\n\n.catalog-empty-card .empty-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.catalog-empty-card .empty-actions .button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 14px;\n  font-size: 0.92rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.catalog-empty-card .empty-actions .button.primary {\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple), var(--purple-dark)));\n  color: #ffffff;\n  box-shadow: 0 4px 14px var(--purple-glow);\n}\n\n.catalog-empty-card .empty-actions .button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.35);\n}\n\n.catalog-empty-card .empty-actions .button.secondary {\n  background: var(--catalog-soft, #f1f5f9);\n  color: var(--ink);\n  border: 1px solid var(--catalog-border, #cbd5e1);\n}\n\n.catalog-empty-card .empty-actions .button.secondary:hover {\n  background: var(--catalog-hover, #e2e8f0);\n}\n\n/* ==========================================================================\n   Pagination Controls\n   ========================================================================== */\n\n.catalog-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: 40px auto;\n  flex-wrap: wrap;\n}\n\n.catalog-pagination .page-nav-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #e2e8f0);\n  color: var(--ink);\n  font-size: 0.88rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.catalog-pagination .page-nav-btn ion-icon {\n  font-size: 16px;\n}\n\n.catalog-pagination .page-nav-btn:hover:not(:disabled) {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.catalog-pagination .page-nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.catalog-pagination .page-number-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #e2e8f0);\n  color: var(--ink);\n  font-size: 0.92rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.catalog-pagination .page-number-btn:hover {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.catalog-pagination .page-number-btn.active {\n  background: var(--catalog-action, var(--purple));\n  border-color: var(--purple);\n  color: #ffffff;\n  box-shadow: 0 4px 14px var(--purple-glow);\n}\n\n.catalog-pagination .page-ellipsis {\n  padding: 0 4px;\n  color: var(--muted);\n  font-weight: 800;\n}\n\n/* ==========================================================================\n   Floating Scroll To Top Button\n   ========================================================================== */\n\n.floating-scroll-top-btn {\n  position: fixed;\n  bottom: 32px;\n  inset-inline-start: 32px;\n  width: 48px;\n  height: 48px;\n  border-radius: 16px;\n  background: var(--catalog-amber-action-gradient, linear-gradient(135deg, var(--amber), var(--amber-dark)));\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);\n  cursor: pointer;\n  z-index: 40;\n  transition: all 0.2s ease;\n}\n\n.floating-scroll-top-btn:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 28px rgba(245, 158, 11, 0.45);\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBzZWFyY2guY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGNvdXJzZVxcX2NhdGFsb2ctZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUZBQUE7QUFORjs7QUFTQTtFQUFJLHNCQUFBO0FBTEo7O0FBTUE7RUFBSSxjQUFBO0VBQWdCLHFCQUFBO0FBRHBCOztBQUVBO0VBQWdCLGFBQUE7QUFFaEI7O0FBREE7RUFBUyxlQUFBO0VBQWlCLFNBQUE7RUFBVyx1QkFBQTtBQU9yQzs7QUFOQTtFQUFZLHdDQUFBO0FBVVo7O0FBVEE7RUFBNkQsMEJBQUE7RUFBNEIsbUJBQUE7RUFBcUIsa0JBQUE7QUFlOUc7O0FBZEE7RUFBVyxvQkFBQTtFQUFzQixjQUFBO0FBbUJqQzs7QUFsQkE7RUFBb0IsU0FBQTtFQUFXLGNBQUE7QUF1Qi9COztBQXJCQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUF3QkY7O0FBckJBOzsrRUFBQTs7QUFHQTtFQUNFLGlFQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXdCRjs7QUF0QkU7RUFBVyxhQUFBO0FBeUJiOztBQXRCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUF5QkY7O0FBckJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBd0JGOztBQXJCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF3QkY7O0FBdEJFO0VBQU0sbUJBQUE7QUF5QlI7O0FBdkJFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUF5Qko7O0FBcEJFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdUJKOztBQXBCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBc0JKOztBQWxCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFxQkY7O0FBbkJFO0VBTEY7SUFNSSxhQUFBO0VBc0JGO0FBQ0Y7O0FBbkJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFzQkY7O0FBcEJFO0VBQVcsZUFBQTtFQUFpQixtQkFBQTtBQXdCOUI7O0FBdEJFO0VBQ0Usb0JBQUE7RUFDQSwrQkFBQTtBQXdCSjs7QUF2Qkk7RUFBVyxvQkFBQTtBQTBCZjs7QUF2QkU7RUFDRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUF5Qko7O0FBeEJJO0VBQVcsb0JBQUE7QUEyQmY7O0FBdkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQTBCRjs7QUF2QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBMEJGOztBQXhCRTtFQUFXLGVBQUE7QUEyQmI7O0FBekJFO0VBQ0UsZ0RBQUE7RUFDQSwyQkFBQTtBQTJCSjs7QUF4QkU7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtBQTBCSjs7QUF4Qkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUEwQk47O0FBckJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHNHQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUF3QkY7O0FBdEJFO0VBQVcsZUFBQTtBQXlCYjs7QUF2QkU7RUFDRSwrQ0FBQTtFQUNBLDJCQUFBO0FBeUJKOztBQXRCRTtFQXBCRjtJQXFCSSxrQkFBQTtFQXlCRjtFQXhCRTtJQUFjLGFBQUE7RUEyQmhCO0FBQ0Y7O0FBeEJBOzsrRUFBQTs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7QUEyQkY7O0FBeEJBO0VBQ0Usa0JBQUE7RUFDQSwySUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTJCRjs7QUF4QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlIQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUEyQkY7O0FBdkJBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHVEQUFBO0FBMEJGOztBQXhCRTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQTBCSjs7QUF2QkU7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBeUJKOztBQXRCRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBd0JKOztBQXJCRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBdUJKOztBQXBCRTtFQTFDRjtJQTJDSSxhQUFBO0VBdUJGO0FBQ0Y7O0FBcEJBO0VBQ0U7SUFBSyxxQ0FBQTtFQXdCTDtFQXZCQTtJQUFPLHlDQUFBO0VBMEJQO0FBQ0Y7O0FBeEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsbUJBQUE7QUEwQkY7O0FBeEJFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUEwQko7O0FBeEJJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBMEJOOztBQXRCRTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF3Qko7O0FBdEJJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBd0JOOztBQXRCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBd0JSOztBQW5CRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXFCSjs7QUFoQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBbUJGOztBQWpCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0VBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBbUJKOztBQWpCSTtFQUNFLDJCQUFBO0VBQ0EsK0NBQUE7QUFtQk47O0FBaEJJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBa0JOOztBQWZJO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFpQk47O0FBZk07RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBaUJSOztBQWJJO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBZU47O0FBYk07RUFBVSxrQkFBQTtBQWdCaEI7O0FBYkk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0dBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFlTjs7QUFiTTtFQUFXLGVBQUE7QUFnQmpCOztBQWRNO0VBQ0UsMkJBQUE7RUFDQSwrQ0FBQTtBQWdCUjs7QUFaSTtFQXhFRjtJQXlFSSx5QkFBQTtFQWVKO0VBYkk7SUFDRSxrQkFBQTtFQWVOO0VBZE07SUFBTyxhQUFBO0VBaUJiO0FBQ0Y7O0FBWEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBY0Y7O0FBWkU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBY047O0FBVkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBWUo7O0FBVEU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBV0o7O0FBVEk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFXTjs7QUFSSTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQVVOOztBQVJNO0VBQVcsb0JBQUE7QUFXakI7O0FBUkk7RUFDRSxnREFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBVU47O0FBUk07RUFBVyxjQUFBO0FBV2pCOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFTRjs7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFTSjs7QUFMQTs7K0VBQUE7O0FBR0E7RUFDRSxvQkFBQTtBQVFGOztBQUxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsMkNBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFOSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFRTjs7QUFOTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVFSOztBQU5RO0VBQUksb0JBQUE7QUFTWjs7QUFOTTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBUVI7O0FBSkk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQU1OOztBQUpNO0VBQVUsNkNBQUE7QUFPaEI7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUtOOztBQUhNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLUjs7QUFIUTtFQUFXLGVBQUE7QUFNbkI7O0FBSE07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQUtSOztBQUZNO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSVI7O0FBRlE7RUFBVyxlQUFBO0VBQWlCLG1CQUFBO0FBTXBDOztBQUpRO0VBQ0Usb0JBQUE7QUFNVjs7QUFIUTtFQUNFLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBS1Y7O0FBSFU7RUFBVyxvQkFBQTtBQU1yQjs7QUFESTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUdOOztBQURNO0VBQVcsZUFBQTtBQUlqQjs7QUFGTTtFQUNFLGdEQUFBO0VBQ0EsMkJBQUE7QUFJUjs7QUFETTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtBQUdSOztBQUdBOzsrRUFBQTs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBRUU7RUFDRSxhQUFBO0FBQUo7O0FBSUE7OytFQUFBOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFNSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFKTjs7QUFNTTtFQUNFLHNHQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBSlI7O0FBTVE7RUFDRSwyQkFBQTtFQUNBLCtDQUFBO0FBSlY7O0FBUU07RUFDRSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7QUFOUjs7QUFRUTtFQUFVLHlDQUFBO0FBTGxCOztBQVdBOzsrRUFBQTs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVVFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnREFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVJKOztBQVVJO0VBQVcsZUFBQTtBQVBmOztBQVNJO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBUE47O0FBVUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFSTjs7QUFZRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBVko7O0FBWUk7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFWTjs7QUFhSTtFQUNFLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUFYTjs7QUFlRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBYko7O0FBaUJBOzsrRUFBQTs7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBZEY7O0FBZ0JFO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtBQWRKOztBQzMzQkU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUQ4M0JKOztBQzUzQkk7RUFBUyxvQkFBQTtBRCszQmI7O0FDNzNCSTtFQUFjLDhCQUFBO0VBQWdDLGlCQUFBO0FEaTRCbEQ7O0FDaDRCSTtFQUFNLDRCQUFBO0FEbTRCVjs7QUNsNEJJO0VBQTJCLDBCQUFBO0VBQTRCLDJCQUFBO0FEczRCM0Q7O0FDcjRCSTtFQUFpQixpQkFBQTtBRHc0QnJCOztBQ3Y0Qkk7RUFBb0IsbUJBQUE7QUQwNEJ4Qjs7QUN6NEJJO0VBRUUsZ0RBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FEMDRCTjs7QUN4NEJJO0VBQTJCLHVCQUFBO0FEMjRCL0I7O0FDMTRCSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBRDQ0Qk47O0FDMTRCSTtFQUE4QiwwQkFBQTtFQUE0QixtQkFBQTtBRDg0QjlEOztBQzc0Qkk7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7QUQrNEJOOztBQzc0Qkk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUQrNEJOOztBQzc0Qkk7RUFBcUQsdUNBQUE7QURnNUJ6RDs7QUMvNEJJO0VBQTRCLHlDQUFBO0FEazVCaEMiLCJmaWxlIjoicHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uLy4uL2NvdXJzZS9jYXRhbG9nLWRhcmsnIGFzIGNhdGFsb2c7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBdmFsQW1vb3ogLSBFbGVtZW50YXJ5IEVkdWNhdGlvbiBQcm9kdWN0ICYgV29ya3NoZWV0IFNlYXJjaCBTdHlsZXNoZWV0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG46aG9zdCB7XG4gIC0taW5rOiAjMWUxYjRiO1xuICAtLWluay1zZWNvbmRhcnk6ICM0NzU1Njk7XG4gIC0tbXV0ZWQ6ICM2NDc0OGI7XG4gIC0tcHVycGxlOiAjNmQyOGQ5O1xuICAtLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xuICAtLXB1cnBsZS1saWdodDogI2VkZTlmZTtcbiAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxMDksIDQwLCAyMTcsIDAuMjIpO1xuICAtLWFtYmVyOiAjZjU5ZTBiO1xuICAtLWFtYmVyLWRhcms6ICNkOTc3MDY7XG4gIC0tYW1iZXItbGlnaHQ6ICNmZWYzYzc7XG4gIC0tZW1lcmFsZDogIzEwYjk4MTtcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjZDFmYWU1O1xuICAtLXJvc2U6ICNmNDNmNWU7XG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcbiAgLS1wYXBlcjogI2ZmZmZmZjtcbiAgLS1iZy1jYW52YXM6ICNmY2ZiZmU7XG4gIC0tYm9yZGVyLXNvZnQ6ICNlZGU5ZjY7XG4gIC0tY2FyZC1iZzogI2ZmZmZmZjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgXCJTaGFibmFtLU1lZGl1bVwiLCBcIlZhemlybWF0blwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYpO1xufVxuXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuYSB7IGNvbG9yOiBpbmhlcml0OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbmJ1dHRvbiwgaW5wdXQgeyBmb250OiBpbmhlcml0OyB9XG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbmJ1dHRvbiwgYSB7IC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbmJ1dHRvbjpmb2N1cy12aXNpYmxlLCBhOmZvY3VzLXZpc2libGUsIGlucHV0OmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAzcHggc29saWQgI2FjODhmMjsgb3V0bGluZS1vZmZzZXQ6IDNweDsgYm9yZGVyLXJhZGl1czogOHB4OyB9XG5pb24taWNvbiB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBmbGV4LXNocmluazogMDsgfVxuaDEsIGgyLCBoMywgaDQsIHAgeyBtYXJnaW46IDA7IGNvbG9yOiBpbmhlcml0OyB9XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBtaW4oMTI4MHB4LCBjYWxjKDEwMCUgLSA0MHB4KSk7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBIZWFkZXIgJiBOYXZpZ2F0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmxlYXJuaW5nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY2F0YWxvZy1zdXJmYWNlLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOTQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xuICBmbGV4LXNocmluazogMDtcblxuICAmOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLm5hdi1zaGVsbCB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDc2cHg7XG59XG5cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5icmFuZC1sb2dvLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGltZyB7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cblxuICAuYnJhbmQtc3BhcmtsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTZweDtcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAtNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5icmFuZC10aXRsZXMge1xuICBiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG59XG5cbi5tYWluLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm5hdi1saW5rLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4gIH1cblxuICAmLmFjdGl2ZS1uYXYge1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4gIH1cbn1cblxuLm5hdi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uaWNvbi1idXR0b24ge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMjJweDsgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctcHVycGxlLWhvdmVyLCAjZTBlN2ZmKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIH1cblxuICAmLmNhcnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNmZGU2OGEpO1xuXG4gICAgLmNhcnQtYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtNHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1kYW5nZXIsIHZhcigtLXJvc2UpKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmYpO1xuICAgIH1cbiAgfVxufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYWN0aW9uLWdyYWRpZW50LCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wdXJwbGUpLCB2YXIoLS1wdXJwbGUtZGFyaykpKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgaW9uLWljb24geyBmb250LXNpemU6IDIwcHg7IH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjM1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgLmxvZ2luLXRleHQgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlcm8gU2VhcmNoIFNlY3Rpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucHNlYXJjaC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xufVxuXG4uc2VhcmNoLWhlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWNhdGFsb2ctcHVycGxlLXNvZnQsICNmNWYzZmYpIDAlLCB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZWRlOWZlKSA2MCUsIHZhcigtLWJnLWNhbnZhcykgMTAwJSk7XG4gIHBhZGRpbmc6IDQ4cHggMCA2NHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tkcm9wLWdsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMzUpIDAlLCByZ2JhKDI1MywgMjMwLCAxMzgsIDAuMjUpIDUwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuLy8gRmxvYXRpbmcgRWxlbWVudGFyeSBEZWNvclxuLmZsb2F0aW5nLWRlY29yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC43NTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSk7XG4gIGFuaW1hdGlvbjogZmxvYXREZWNvciA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cbiAgJi5ib29rIHtcbiAgICB0b3A6IDM2cHg7XG4gICAgaW5zZXQtaW5saW5lLXN0YXJ0OiA2JTtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgfVxuXG4gICYuc3RhciB7XG4gICAgdG9wOiA3MHB4O1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDglO1xuICAgIGNvbG9yOiB2YXIoLS1hbWJlcik7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG5cbiAgJi5wZW5jaWwge1xuICAgIGJvdHRvbTogODBweDtcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IDEwJTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1LjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgfVxuXG4gICYuc3BhcmtsZSB7XG4gICAgYm90dG9tOiA5MHB4O1xuICAgIGluc2V0LWlubGluZS1lbmQ6IDEyJTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdERlY29yIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpIHJvdGF0ZSg2ZGVnKTsgfVxufVxuXG4uaGVyby1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi5oZXJvLWhlYWRlci10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcblxuICAuZXllYnJvdy1jaGlwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNkZGQ2ZmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAgIC5zcGFya2xlLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWFtYmVyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDR2dywgMi42cmVtKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgICAuaGlnaGxpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuXG4gICAgICBzdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTZweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1hbWJlcik7XG4gICAgICAgIHN0cm9rZS13aWR0aDogNDtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVyby1zdWJ0ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuODU7XG4gICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLy8gTWFpbiBTZWFyY2ggRm9ybVxuLmhlcm8tc2VhcmNoLWZvcm0ge1xuICBtYXgtd2lkdGg6IDc2MHB4O1xuICBtYXJnaW46IDAgYXV0byAyNHB4O1xuXG4gIC5zZWFyY2gtaW5wdXQtZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMTIpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcblxuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTRweCA0MHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjIpO1xuICAgIH1cblxuICAgIC5zZWFyY2gtaW5wdXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMnB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tY2F0YWxvZy1tdXRlZCwgIzk0YTNiOCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNsZWFyLWlucHV0LWJ0biB7XG4gICAgICBjb2xvcjogdmFyKC0tY2F0YWxvZy1tdXRlZCwgIzk0YTNiOCk7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtYWN0aW9uLWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYWN0aW9uLWdyYWRpZW50LCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wdXJwbGUpLCB2YXIoLS1wdXJwbGUtZGFyaykpKTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45OHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4zNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICBwYWRkaW5nOiA2cHggNnB4IDZweCAxNHB4O1xuXG4gICAgICAuc2VhcmNoLWFjdGlvbi1idG4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIHNwYW4geyBkaXNwbGF5OiBub25lOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFF1aWNrIFRvcGljcyBSb3dcbi5xdWljay10b3BpY3Mtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC5xdWljay10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuICB9XG5cbiAgLnF1aWNrLWNoaXBzLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAucXVpY2stY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZTJlOGYwKTtcbiAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuXG4gICAgICBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24sIHZhcigtLXB1cnBsZSkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXB1cnBsZS1nbG93KTtcblxuICAgICAgaW9uLWljb24geyBjb2xvcjogI2ZmZmZmZjsgfVxuICAgIH1cbiAgfVxufVxuXG4uaGVyby13YXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZmlsbDogdmFyKC0tYmctY2FudmFzKTtcbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQ2F0YWxvZyBSZXN1bHRzICYgVG9vbGJhclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jYXRhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMycHggMCA2NHB4O1xufVxuXG4uY2F0YWxvZy10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZWRlOWZlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA1KTtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIC50b29sYmFyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE0cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnJlc3VsdHMtaGVhZGluZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTBweDtcblxuICAgICAgLnRpdGxlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rKTtcblxuICAgICAgICBiIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cbiAgICAgIH1cblxuICAgICAgLnJlc3VsdHMtYmFkZ2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXNldC1maWx0ZXJzLWNoaXAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLXJvc2UpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXJvc2Utc29mdCwgI2ZlY2RkMyk7IH1cbiAgICB9XG4gIH1cblxuICAudG9vbGJhci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5zb3J0LWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICAuc29ydC1jYXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG5cbiAgICAgICAgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IH1cbiAgICAgIH1cblxuICAgICAgLnNvcnQtcGlsbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2UyZThmMCk7XG4gICAgICB9XG5cbiAgICAgIC5zb3J0LXBpbGwtYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAgICAgICAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hZHZhbmNlZC1maWx0ZXItYnRuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1ob3ZlciwgI2UwZTdmZik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cblxuICAgICAgLmZpbHRlci1hY3RpdmUtZG90IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJvc2UpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUHJvZHVjdCBHcmlkIFN0eWxpbmdcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY2F0YWxvZy1yZXN1bHRzLWdyaWQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEVtcHR5IFN0YXRlIENhcmRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY2F0YWxvZy1lbXB0eS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgcGFkZGluZzogNTZweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZWRlOWZlKTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDYpO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBtYXJnaW46IDMycHggYXV0byA2MHB4O1xuXG4gIC5lbXB0eS1pY29uLXdyYXAge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjEyKTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDI4cHg7XG4gIH1cblxuICAuZW1wdHktYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudCwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlKSwgdmFyKC0tcHVycGxlLWRhcmspKSk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4zNSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQsICNmMWY1ZjkpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNjYmQ1ZTEpO1xuXG4gICAgICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWhvdmVyLCAjZTJlOGYwKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUGFnaW5hdGlvbiBDb250cm9sc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jYXRhbG9nLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnBhZ2UtbmF2LWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNlMmU4ZjApO1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IH1cblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gIH1cblxuICAucGFnZS1udW1iZXItYnRuIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNlMmU4ZjApO1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24sIHZhcigtLXB1cnBsZSkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcbiAgICB9XG4gIH1cblxuICAucGFnZS1lbGxpcHNpcyB7XG4gICAgcGFkZGluZzogMCA0cHg7XG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBGbG9hdGluZyBTY3JvbGwgVG8gVG9wIEJ1dHRvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5mbG9hdGluZy1zY3JvbGwtdG9wLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMnB4O1xuICBpbnNldC1pbmxpbmUtc3RhcnQ6IDMycHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYW1iZXItYWN0aW9uLWdyYWRpZW50LCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1hbWJlciksIHZhcigtLWFtYmVyLWRhcmspKSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjM1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA0MDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuNDUpO1xuICB9XG59XG5cbkBpbmNsdWRlIGNhdGFsb2cuZGFyay1tb2RlO1xuIiwiLy8gUGFnZS1sb2NhbCBjYXRhbG9nIHBhbGV0dGUuIEltcG9ydGVkIG9ubHkgYnkgY291cnNlL3Byb2R1Y3QvYXJ0aWNsZS9zZWFyY2ggcm91dGVzLlxuLy8gRmFsbGJhY2tzIGluIHRoZSBjb25zdW1pbmcgc3R5bGVzIHByZXNlcnZlIGV2ZXJ5IG9yaWdpbmFsIGxpZ2h0LW1vZGUgY29sb3IuXG5AbWl4aW4gZGFyay1tb2RlIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICAtLWNhdGFsb2ctc3VyZmFjZTogIzIxMWMzMjtcbiAgICAtLWNhdGFsb2ctc3VyZmFjZS1yZ2I6IDMzLCAyOCwgNTA7XG4gICAgLS1jYXRhbG9nLXNvZnQ6ICMyOTIzM2Q7XG4gICAgLS1jYXRhbG9nLWhvdmVyOiAjMzQyYzQ5O1xuICAgIC0tY2F0YWxvZy1ib3JkZXI6ICM0YjQxNjQ7XG4gICAgLS1jYXRhbG9nLXRleHQ6ICNmMmVlZmI7XG4gICAgLS1jYXRhbG9nLXNlY29uZGFyeTogI2QwYzhlMjtcbiAgICAtLWNhdGFsb2ctbXV0ZWQ6ICNiMWE2YzY7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1zb2Z0OiAjMzAyMzQ3O1xuICAgIC0tY2F0YWxvZy1wdXJwbGUtaG92ZXI6ICMzZDJkNTg7XG4gICAgLS1jYXRhbG9nLWFtYmVyLXNvZnQ6ICMzYjJkMTg7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQtc29mdDogIzE4MzcyZTtcbiAgICAtLWNhdGFsb2ctcm9zZS1zb2Z0OiAjNDAyMzM0O1xuICAgIC0tY2F0YWxvZy1za3ktc29mdDogIzE5MzM0NjtcbiAgICAtLWNhdGFsb2ctcHVycGxlOiAjYzRiNWZkO1xuICAgIC0tY2F0YWxvZy1lbWVyYWxkOiAjNmVlN2I3O1xuICAgIC0tY2F0YWxvZy1za3k6ICM3ZGQzZmM7XG4gICAgLS1jYXRhbG9nLXNreS1hY3Rpb246ICMwMzY5YTE7XG4gICAgLS1jYXRhbG9nLWFjdGlvbjogIzdjM2FlZDtcbiAgICAtLWNhdGFsb2ctYWN0aW9uLWhvdmVyOiAjNmQyOGQ5O1xuICAgIC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQsICM1YjIxYjYpO1xuICAgIC0tY2F0YWxvZy1idXk6ICMwNDc4NTc7XG4gICAgLS1jYXRhbG9nLWJ1eS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA0Nzg1NywgIzA2NWY0Nik7XG4gICAgLS1jYXRhbG9nLWRhbmdlcjogI2JlMTIzYztcbiAgICAtLWNhdGFsb2ctYW1iZXItYWN0aW9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTI0MDBlLCAjNzgzNTBmKTtcbiAgICAtLWluazogdmFyKC0tY2F0YWxvZy10ZXh0KTtcbiAgICAtLWluay1zZWNvbmRhcnk6IHZhcigtLWNhdGFsb2ctc2Vjb25kYXJ5KTtcbiAgICAtLW11dGVkOiB2YXIoLS1jYXRhbG9nLW11dGVkKTtcbiAgICAtLXB1cnBsZTogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWRhcms6IHZhcigtLWNhdGFsb2ctcHVycGxlKTtcbiAgICAtLXB1cnBsZS1saWdodDogdmFyKC0tY2F0YWxvZy1wdXJwbGUtc29mdCk7XG4gICAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjE0KTtcbiAgICAtLWFtYmVyOiAjZmJiZjI0O1xuICAgIC0tYW1iZXItZGFyazogI2ZjZDM0ZDtcbiAgICAtLWFtYmVyLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWFtYmVyLXNvZnQpO1xuICAgIC0tYW1iZXItZ2xvdzogcmdiYSgyNTEsIDE5MSwgMzYsIDAuMSk7XG4gICAgLS1lbWVyYWxkOiAjMzRkMzk5O1xuICAgIC0tZW1lcmFsZC1kYXJrOiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQpO1xuICAgIC0tZW1lcmFsZC1saWdodDogdmFyKC0tY2F0YWxvZy1lbWVyYWxkLXNvZnQpO1xuICAgIC0tcm9zZTogI2ZkYTRhZjtcbiAgICAtLXJvc2UtbGlnaHQ6IHZhcigtLWNhdGFsb2ctcm9zZS1zb2Z0KTtcbiAgICAtLXNreTogdmFyKC0tY2F0YWxvZy1za3kpO1xuICAgIC0tc2t5LWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXNreS1zb2Z0KTtcbiAgICAtLXBhcGVyOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tYmctY2FudmFzOiAjMTQxMDIwO1xuICAgIC0tYm9yZGVyLXNvZnQ6IHZhcigtLWNhdGFsb2ctYm9yZGVyKTtcbiAgICAtLWNhcmQtYmc6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jYXJkLXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAtLWNvdXJzZS1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tcHJvZHVjdC1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tY291cnNlLWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1wcm9kdWN0LWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuXG4gICAgLmJyYW5kIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpOyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIC5iZyB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IH1cbiAgICBpb24tY2FyZDpub3QoLmlvbi1jb2xvcikgeyAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUgeyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuICAgIGlvbi1jYXJkLWhlYWRlcltjb2xvcj0ncHJpbWFyeSddIHtcbiAgICAgIC8vIElvbmljJ3MgLmlvbi1jb2xvci1wcmltYXJ5IGRlY2xhcmVzIHRoZXNlIHRva2VucyB3aXRoICFpbXBvcnRhbnQuXG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW5rKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgfVxuICAgIGlvbi1saXN0Om5vdCguaW9uLWNvbG9yKSB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgaW9uLWl0ZW06bm90KC5pb24tY29sb3IpIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyAtLWNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWljb24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIH1cbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdsaWdodCddLCBpb24tbGFiZWxbY29sb3I9J2RhcmtlciddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgaW9uLWxhYmVsW2NvbG9yPSdtZWRpdW0nXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLW11dGVkKSAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLy8gQW5ndWxhciBkb2VzIG5vdCBhdHRhY2ggZW5jYXBzdWxhdGlvbiBhdHRyaWJ1dGVzIHRvIGNvbnRlbnQgaW5zZXJ0ZWQgYnkgaW5uZXJIVE1MLlxuLy8gS2VlcCBkZWVwIHJ1bGVzIGFuY2hvcmVkIHRvIGVhY2ggcGFnZSdzIG93biBkZXNjcmlwdGlvbiBjb250YWluZXIuXG5AbWl4aW4gcmljaC10ZXh0KCRjb250YWluZXIpIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIHtcbiAgICAjeyRjb250YWluZXJ9IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIDp3aGVyZShwLCBzcGFuLCBkaXYsIGxpLCBzdHJvbmcsIGIsIGVtLCBpLCBmb250LCB0ZCwgdGgpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNikgeyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICBhIHsgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDsgfVxuICAgICAgYmxvY2txdW90ZSwgcHJlLCBjb2RlIHsgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0KSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICB0YWJsZSwgdGQsIHRoIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCkgIWltcG9ydGFudDsgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 6277:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/home/psearch/psearch.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Elementary Education Modern Header -->\n<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  \n  <app-page-header titleKey=\"pageHeader.home/psearch/psearch\" fallback=\"/\">\n\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"learning-content psearch-content\" [attr.dir]=\"language.direction\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <main class=\"search-page-main\">\n    <!-- Hero Search Section -->\n    <section class=\"search-hero\">\n      <div class=\"hero-backdrop-glow\" aria-hidden=\"true\"></div>\n\n      <!-- Playful Floating Elementary Decor -->\n      <span class=\"floating-decor book\" aria-hidden=\"true\">🎒</span>\n      <span class=\"floating-decor star\" aria-hidden=\"true\">✦</span>\n      <span class=\"floating-decor pencil\" aria-hidden=\"true\">📐</span>\n      <span class=\"floating-decor sparkle\" aria-hidden=\"true\">✨</span>\n\n      <div class=\"page-container hero-container\">\n        <div class=\"hero-header-text\">\n          <div class=\"eyebrow-chip\">\n            <span class=\"sparkle-icon\">✦</span>\n            <span>بانک کاربرگ‌ها، طرح درس و وسایل کمک‌آموزشی دبستان</span>\n          </div>\n\n          <h1>\n            جستجوی کاربرگ‌ها و محصولات\n            <span class=\"highlight\">\n              پایه اول ابتدایی\n              <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n                <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n              </svg>\n            </span>\n          </h1>\n\n          <p class=\"hero-subtext\">\n            دانلود مستقیم فایل‌های آماده چاپ، پیک‌های آدینه، آزمون‌های ماهانه، بازی‌های آموزشی، کاربرگ نشانه‌ها و ابزارهای دست‌ورزی\n          </p>\n        </div>\n\n        <!-- Main Search Bar -->\n        <form class=\"hero-search-form\" (ngSubmit)=\"search()\">\n          <div class=\"search-input-group\">\n            <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\n            <input\n              [(ngModel)]=\"queryText\"\n              name=\"searchQuery\"\n              type=\"search\"\n              placeholder=\"جستجوی کاربرگ، پیک آدینه، طرح درس، نشانه یا مبحث (مثلاً: نشانه س، ریاضی، پیک هفته...)\"\n              autocomplete=\"off\"\n            />\n            <button\n              type=\"button\"\n              class=\"clear-input-btn\"\n              *ngIf=\"queryText && queryText.length > 0\"\n              (click)=\"clearSearch()\"\n              title=\"پاک کردن متن\"\n            >\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </button>\n            <button type=\"submit\" class=\"button primary search-action-btn\">\n              <ion-icon name=\"search-outline\"></ion-icon>\n              <span>جستجو</span>\n            </button>\n          </div>\n        </form>\n\n        <!-- Quick Educational Topics Pills -->\n        <div class=\"quick-topics-row\">\n          <span class=\"quick-title\">\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\n            دسترسی سریع:\n          </span>\n          <div class=\"quick-chips-wrap\">\n            <button\n              type=\"button\"\n              *ngFor=\"let topic of quickTopics\"\n              class=\"quick-chip\"\n              [class.active]=\"isTopicActive(topic.query)\"\n              (click)=\"quickSearch(topic.query)\"\n            >\n              <ion-icon [name]=\"topic.icon\" *ngIf=\"topic.icon\"></ion-icon>\n              <span>{{ topic.title }}</span>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"hero-wave\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 1440 32\" preserveAspectRatio=\"none\">\n          <path d=\"M0,16 C320,32 420,0 720,16 C1020,32 1120,0 1440,16 L1440,32 L0,32 Z\"></path>\n        </svg>\n      </div>\n    </section>\n\n    <!-- Main Results Section -->\n    <section class=\"page-container catalog-container\">\n      <!-- Toolbar: Results Info, Sorting & Filters -->\n      <div class=\"catalog-toolbar\">\n        <div class=\"toolbar-info\">\n          <div class=\"results-heading\">\n            <span class=\"title-label\" *ngIf=\"queryText && queryText.trim().length > 0\">\n              نتایج برای: <b>«{{ queryText }}»</b>\n            </span>\n            <span class=\"title-label\" *ngIf=\"!queryText || queryText.trim().length === 0\">\n              همه محصولات و کاربرگ‌های دبستان\n            </span>\n            <span class=\"results-badge\" *ngIf=\"filteredProducts?.products\">\n              {{ filteredProducts.products.length }} مورد\n            </span>\n          </div>\n\n          <button\n            type=\"button\"\n            class=\"reset-filters-chip\"\n            *ngIf=\"hasActiveFilters\"\n            (click)=\"clearSearch()\"\n            title=\"حذف همه فیلترها و نمایش همه موارد\"\n          >\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\n            <span>حذف فیلترها</span>\n          </button>\n        </div>\n\n        <div class=\"toolbar-actions\">\n          <!-- Quick Sort Pills -->\n          <div class=\"sort-group\">\n            <span class=\"sort-caption\">\n              <ion-icon name=\"funnel-outline\"></ion-icon>\n              مرتب‌سازی:\n            </span>\n            <div class=\"sort-pills\">\n              <button\n                type=\"button\"\n                *ngFor=\"let opt of sortOptions\"\n                class=\"sort-pill-btn\"\n                [class.active]=\"currentSortId === opt.id\"\n                (click)=\"setSort(opt.id)\"\n              >\n                <ion-icon [name]=\"opt.icon\" *ngIf=\"opt.icon\"></ion-icon>\n                <span>{{ opt.label }}</span>\n              </button>\n            </div>\n          </div>\n\n          <!-- Advanced Filters Modal Trigger Button -->\n          <button type=\"button\" class=\"advanced-filter-btn\" (click)=\"presentFilter()\" title=\"فیلترهای پیشرفته قیمت و دسته\">\n            <ion-icon name=\"options-outline\"></ion-icon>\n            <span>فیلترهای بیشتر</span>\n            <span class=\"filter-active-dot\" *ngIf=\"filteredProducts?.isFiltered\"></span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Products Grid -->\n      <div class=\"catalog-results-grid\" *ngIf=\"filteredProducts && !notfound && filteredProducts.products && filteredProducts.products.length > 0\">\n        <ion-grid class=\"no-padding\">\n          <ion-row>\n            <ion-col\n              *ngFor=\"let product of filteredProducts.products\"\n              size=\"12\"\n              size-sm=\"6\"\n              size-md=\"4\"\n              size-lg=\"3\"\n            >\n              <app-product [product]=\"product\"></app-product>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <!-- Empty State (Not Found) -->\n      <div class=\"catalog-empty-card\" *ngIf=\"notfound || (filteredProducts && (!filteredProducts.products || filteredProducts.products.length === 0))\">\n        <div class=\"empty-icon-wrap\">\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </div>\n        <h3>کاربرگ یا محصولی با این مشخصات یافت نشد</h3>\n        <p>\n          عبارت جستجو را کوتاه کنید، از دسترسی‌های سریع بالای صفحه استفاده فرمایید یا فیلترها را حذف کنید.\n        </p>\n        <div class=\"empty-actions\">\n          <button type=\"button\" class=\"button primary\" (click)=\"clearSearch()\">\n            <ion-icon name=\"refresh-outline\"></ion-icon>\n            <span>مشاهده همه محصولات و کاربرگ‌ها</span>\n          </button>\n          <a [routerLink]=\"url('/Product')\" class=\"button secondary\">\n            <ion-icon name=\"grid-outline\"></ion-icon>\n            <span>مشاهده دسته‌بندی‌ها</span>\n          </a>\n        </div>\n      </div>\n\n      <!-- Pagination Controls -->\n      <div class=\"catalog-pagination\" *ngIf=\"filteredProducts && filteredProducts.pageCount > 1\">\n        <!-- Previous Page Button -->\n        <button\n          type=\"button\"\n          class=\"page-nav-btn prev\"\n          [disabled]=\"filteredProducts.pageId <= 1\"\n          (click)=\"goPreviousPage()\"\n          title=\"صفحه قبل\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          <span>قبلی</span>\n        </button>\n\n        <!-- First Page Button (if far from start) -->\n        <button\n          type=\"button\"\n          class=\"page-number-btn\"\n          *ngIf=\"filteredProducts.pageId > 2 && filteredProducts.pageCount > 3\"\n          (click)=\"goPage(1)\"\n        >\n          ۱\n        </button>\n        <span class=\"page-ellipsis\" *ngIf=\"filteredProducts.pageId > 3 && filteredProducts.pageCount > 4\">...</span>\n\n        <!-- Numbered Page Buttons -->\n        <ng-container *ngFor=\"let page of MakePageCountArray(filteredProducts.pageCount); let i = index\">\n          <button\n            type=\"button\"\n            class=\"page-number-btn\"\n            *ngIf=\"filteredProducts.pageId <= i + 2 && filteredProducts.pageId >= i\"\n            [class.active]=\"filteredProducts.pageId == page\"\n            (click)=\"goPage(page)\"\n          >\n            {{ page }}\n          </button>\n        </ng-container>\n\n        <!-- Last Page Button (if far from end) -->\n        <span class=\"page-ellipsis\" *ngIf=\"filteredProducts.pageId + 2 < filteredProducts.pageCount\">...</span>\n        <button\n          type=\"button\"\n          class=\"page-number-btn\"\n          *ngIf=\"filteredProducts.pageId + 1 < filteredProducts.pageCount\"\n          (click)=\"goPage(filteredProducts.pageCount)\"\n        >\n          {{ filteredProducts.pageCount }}\n        </button>\n\n        <!-- Next Page Button -->\n        <button\n          type=\"button\"\n          class=\"page-nav-btn next\"\n          [disabled]=\"filteredProducts.pageId >= filteredProducts.pageCount\"\n          (click)=\"goNextPage()\"\n          title=\"صفحه بعد\"\n        >\n          <span>بعدی</span>\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n    </section>\n  </main>\n\n  <!-- Floating Scroll To Top Button -->\n  <button type=\"button\" class=\"floating-scroll-top-btn\" (click)=\"goTop()\" title=\"رفتن به بالای صفحه\">\n    <ion-icon name=\"arrow-up-outline\"></ion-icon>\n  </button>\n\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_home_psearch_psearch_module_ts.js.map