"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pipe_price_module_ts-src_app_view_pages_home_search_search_module_ts"],{

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

/***/ 81023:
/*!*****************************************************************!*\
  !*** ./src/app/view/pages/home/search/search-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRoutingModule": () => (/* binding */ SearchRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 29927);




const routes = [{ path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent }];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SearchRoutingModule);



/***/ }),

/***/ 29927:
/*!************************************************************!*\
  !*** ./src/app/view/pages/home/search/search.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.html?ngResource */ 42587);
/* harmony import */ var _search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component.scss?ngResource */ 28587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/model/course/CourseFilterModel */ 34025);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _components_modal_filter_course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/modal/filter/course-filter/course-filter.component */ 97084);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/i18n/site-language.service */ 37159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32425);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/member-ordering */












let SearchComponent = class SearchComponent {
  constructor(activatedRoute, courseService, router, modalCtrl, toastController, loadingController, routerOutlet, language, menuCtrl) {
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.routerOutlet = routerOutlet;
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.queryText = '';
    this.notfound = false;
    this.isLoading = false;
    this.courseCount = 0;
    this.productCount = 0;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    this.quickTopics = [{
      title: 'همه دوره‌ها',
      query: '',
      icon: 'school-outline'
    }, {
      title: 'روش تدریس الفبا',
      query: 'فارسی اول',
      icon: 'book-outline'
    }, {
      title: 'ریاضی اول دبستان',
      query: 'ریاضی اول',
      icon: 'calculator-outline'
    }, {
      title: 'کاربرگ هفتگی',
      query: 'کاربرگ اول',
      icon: 'documents-outline'
    }, {
      title: 'طرح درس کلاسی',
      query: 'طرح درس',
      icon: 'reader-outline'
    }, {
      title: 'مدیریت کلاس اول',
      query: 'مدیریت کلاس',
      icon: 'people-outline'
    }, {
      title: 'دست‌ورزی و بازی',
      query: 'ابزار دست ورزی',
      icon: 'extension-puzzle-outline'
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
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_8__.GAccount.IsLoggedIn();
  }

  get cartCount() {
    return this.courseCount + this.productCount;
  }

  get currentSortId() {
    if (!this.filteredCourses || this.filteredCourses.sortId == null) {
      return 4;
    }

    return +this.filteredCourses.sortId;
  }

  get hasActiveFilters() {
    if (!this.filteredCourses) {
      return !!(this.queryText && this.queryText.trim().length > 0);
    }

    const hasQuery = !!(this.queryText && this.queryText.trim().length > 0);
    const hasStartPrice = this.filteredCourses.startPrice != null && +this.filteredCourses.startPrice > 0;
    const hasEndPrice = this.filteredCourses.endPrice != null && +this.filteredCourses.endPrice > 0;
    const hasCats = !!(this.filteredCourses.categoryIds && this.filteredCourses.categoryIds.length > 0);
    const hasNonDefaultSort = this.filteredCourses.sortId != null && +this.filteredCourses.sortId !== 4 && +this.filteredCourses.sortId !== 0;
    return hasQuery || hasStartPrice || hasEndPrice || hasCats || hasNonDefaultSort;
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
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.getCartCoursesCount().subscribe(count => this.courseCount = count));
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.getCartProductsCount().subscribe(count => this.productCount = count));
    this.subscriptions.add(this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page ? +params.page : 1;
      const take = params.take ? +params.take : 12;
      const title = params.title ? params.title : '';
      const startPrice = params.startPrice ? +params.startPrice : null;
      const endPrice = params.endPrice ? +params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : null;
      const sortId = params.sortId ? +params.sortId : 4;
      this.queryText = title;
      let filter;

      if (startPrice == null && endPrice == null && categoryIds == null && sortId === 4) {
        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_4__.CourseFilterModel(false, page, take, title);
      } else {
        const catIds = [];

        if (categoryIds != null && categoryIds.length > 0) {
          if (categoryIds.includes(',')) {
            categoryIds.split(',').forEach(cat => catIds.push(+cat));
          } else {
            catIds.push(+categoryIds);
          }
        }

        filter = new _data_model_course_CourseFilterModel__WEBPACK_IMPORTED_MODULE_4__.CourseFilterModel(true, page, take, title, startPrice, endPrice, catIds, sortId);
      }

      this.filteredCourses = filter;
      this.fetchCourses(filter);
    }));
  }

  fetchCourses(filter) {
    this.isLoading = true;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.GetCoursesByFilter(filter).subscribe(res => {
      this.isLoading = false;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        const coursesList = res.data?.courses;
        this.notfound = !coursesList || coursesList.length === 0;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.NotFoundStatus) {
        this.notfound = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, this.language.text('search.noResults'));
      } else {
        this.notfound = true;
      }
    }, () => {
      this.isLoading = false;
      this.notfound = true;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطا در برقراری ارتباط با سرور');
    });
  }

  presentFilter() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _components_modal_filter_course_filter_course_filter_component__WEBPACK_IMPORTED_MODULE_6__.CourseFilterComponent,
        swipeToClose: true,
        presentingElement: _this2.routerOutlet.nativeEl,
        componentProps: {
          filteredCourses: _this2.filteredCourses
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        _this2.filteredCourses = data;

        _this2.setQueryParams(1);
      }
    })();
  }

  setQueryParams(pageId) {
    if (this.content) {
      this.content.scrollToTop(500);
    }

    const titleVal = this.queryText && this.queryText.trim().length > 0 ? this.queryText.trim() : null;
    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredCourses?.takeEntity ? this.filteredCourses.takeEntity : 12,
        title: titleVal,
        startPrice: this.filteredCourses?.startPrice ? this.filteredCourses.startPrice : null,
        endPrice: this.filteredCourses?.endPrice ? this.filteredCourses.endPrice : null,
        categoryIds: this.filteredCourses?.categoryIds && this.filteredCourses.categoryIds.length > 0 ? this.filteredCourses.categoryIds.join(',') : null,
        sortId: this.filteredCourses?.sortId != null ? this.filteredCourses.sortId : 4
      }
    });
  }

  search() {
    if (this.filteredCourses) {
      this.filteredCourses.title = this.queryText?.trim() || null;
    }

    this.setQueryParams(1);
  }

  quickSearch(term) {
    this.queryText = term;

    if (this.filteredCourses) {
      this.filteredCourses.title = term ? term : null;
    }

    this.setQueryParams(1);
  }

  clearSearch() {
    this.queryText = '';

    if (this.filteredCourses) {
      this.filteredCourses.title = null;
      this.filteredCourses.startPrice = null;
      this.filteredCourses.endPrice = null;
      this.filteredCourses.categoryIds = [];
      this.filteredCourses.sortId = 4;
      this.filteredCourses.isFiltered = false;
    }

    this.setQueryParams(1);
  }

  setSort(sortId) {
    if (this.filteredCourses) {
      this.filteredCourses.sortId = sortId;
    }

    this.setQueryParams(1);
  }

  MakePageCountArray(pageCount) {
    const array = [];
    const count = +pageCount || 0;

    for (let i = 1; i <= count; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (!this.filteredCourses) {
      return;
    }

    if (this.filteredCourses.pageId > 1) {
      this.setQueryParams(+this.filteredCourses.pageId - 1);
    }
  }

  goNextPage() {
    if (!this.filteredCourses) {
      return;
    }

    if (this.filteredCourses.pageId < this.filteredCourses.pageCount) {
      this.setQueryParams(+this.filteredCourses.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  onSort(event) {
    const val = +event.detail.value;
    this.setSort(val);
  }

  isTopicActive(query) {
    if (!query) {
      return !this.queryText || this.queryText.trim().length === 0;
    }

    return this.queryText?.trim() === query.trim();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

};

SearchComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet
}, {
  type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_9__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController
}];

SearchComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-search',
  template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchComponent);


/***/ }),

/***/ 54544:
/*!*********************************************************!*\
  !*** ./src/app/view/pages/home/search/search.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-routing.module */ 81023);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ 29927);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_modal_filter_filter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modal/filter/filter.module */ 25822);
/* harmony import */ var _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/course/shared-course.module */ 44704);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/i18n/site-i18n.module */ 58586);















let SearchModule = class SearchModule {
};
SearchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _components_modal_filter_filter_module__WEBPACK_IMPORTED_MODULE_3__.FilterModule,
            _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_4__.SharedCourseModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule,
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_7__.SiteI18nModule
        ]
    })
], SearchModule);



/***/ }),

/***/ 28587:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/home/search/search.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 8px;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.page-container {\n  width: min(1240px, 100% - 40px);\n  margin-inline: auto;\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.3;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex: 1;\n}\n\n.main-nav a, .main-nav button, .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav a:hover, .main-nav button:hover, .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.active-nav {\n  color: var(--purple) !important;\n  background: var(--purple-light) !important;\n  font-weight: 800;\n}\n\n.pill-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: inline-block;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--catalog-purple-soft, #f6f1fd);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #e9d5ff);\n  font-size: 20px;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.15s, color 0.2s;\n}\n\n.icon-button:hover {\n  background: var(--catalog-purple-soft, #ede9fe);\n  color: var(--purple);\n  transform: translateY(-1px);\n}\n\n.cart {\n  position: relative;\n}\n\n.cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  font-size: 10px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #3b2802;\n  border: 2px solid var(--catalog-surface, #fff);\n  padding: 1px 5px;\n  border-radius: 12px;\n}\n\n.login-button {\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #dcd0f7);\n  padding: 8px 14px;\n  border-radius: 13px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n\n.login-button:hover {\n  background: var(--catalog-action, var(--purple));\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.menu-toggle {\n  display: inline-flex !important;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #ddd6fe);\n}\n\n.menu-toggle:hover {\n  background: var(--catalog-action, var(--purple));\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n/* ==========================================================================\n   Content & Hero Section\n   ========================================================================== */\n\n.learning-content {\n  --background: var(--bg-canvas);\n  --color: var(--ink);\n  flex: 1;\n}\n\n.search-page-main {\n  min-height: calc(100vh - 250px);\n}\n\n.search-hero {\n  position: relative;\n  background: linear-gradient(180deg, var(--catalog-purple-soft, #f7f2ff) 0%, var(--catalog-soft, #faf8fe) 65%, var(--catalog-surface, #ffffff) 100%);\n  padding-block: 40px 30px;\n  overflow: hidden;\n  border-bottom: 1px solid var(--catalog-border, #f1edfb);\n}\n\n.hero-backdrop-glow {\n  position: absolute;\n  top: -160px;\n  inset-inline-start: 15%;\n  width: 500px;\n  height: 500px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.25) 0%, rgba(var(--catalog-surface-rgb, 255, 255, 255), 0) 70%);\n  pointer-events: none;\n}\n\n.hero-container {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero-header-text {\n  max-width: 820px;\n  margin-inline: auto;\n}\n\n.eyebrow-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--catalog-purple, #5b21b6);\n  background: var(--catalog-purple-soft, #ede6fc);\n  padding: 7px 16px;\n  border-radius: 30px;\n  font-size: 12px;\n  font-weight: 800;\n  border: 1px solid var(--catalog-border, #ddd2f7);\n  margin-bottom: 16px;\n}\n\n.sparkle-icon {\n  color: var(--amber);\n  font-size: 16px;\n}\n\nh1 {\n  font-size: clamp(26px, 3.2vw, 40px);\n  font-weight: 900;\n  line-height: 1.55;\n  letter-spacing: -0.8px;\n  margin-bottom: 14px;\n  color: var(--ink);\n}\n\n.highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n  z-index: 1;\n}\n\n.highlight svg {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -2px;\n  height: 16px;\n  fill: none;\n  stroke: var(--amber);\n  stroke-width: 5;\n  stroke-linecap: round;\n  z-index: -1;\n}\n\n.hero-subtext {\n  font-size: 14.5px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  max-width: 640px;\n  margin-inline: auto;\n  margin-bottom: 28px;\n}\n\n/* Hero Search Form */\n\n.hero-search-form {\n  width: min(840px, 100%);\n  margin-inline: auto;\n}\n\n.search-input-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--catalog-surface, #ffffff);\n  border: 2px solid var(--catalog-border, #ddd1f5);\n  border-radius: 20px;\n  padding: 7px 12px 7px 8px;\n  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.08);\n  transition: all 0.2s ease;\n}\n\n.search-input-group:focus-within {\n  border-color: var(--purple);\n  box-shadow: 0 12px 36px rgba(109, 40, 217, 0.16);\n}\n\n.search-input-icon {\n  font-size: 24px;\n  color: var(--purple);\n  margin-inline-start: 6px;\n}\n\n.search-input-group input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 14.5px;\n  font-weight: 600;\n  padding: 6px 4px;\n}\n\n.search-input-group input::placeholder {\n  color: var(--catalog-muted, #94a3b8);\n  font-weight: 400;\n}\n\n.clear-input-btn {\n  color: var(--catalog-muted, #94a3b8);\n  font-size: 20px;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n\n.clear-input-btn:hover {\n  color: var(--rose);\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 1px solid transparent;\n  border-radius: 14px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 800;\n  line-height: 1.5;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);\n}\n\n.button.small {\n  padding: 8px 14px;\n  font-size: 12px;\n  border-radius: 12px;\n}\n\n.button.primary {\n  color: #fff;\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  border-color: #5b21b6;\n  box-shadow: 0 6px 20px var(--purple-glow);\n}\n\n.button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px var(--purple-glow);\n}\n\n.button.secondary {\n  color: var(--purple);\n  background: var(--catalog-surface, #ffffff);\n  border-color: var(--catalog-border, #ddd1f5);\n}\n\n.button.secondary:hover {\n  background: var(--purple-light);\n  transform: translateY(-2px);\n}\n\n.search-action-btn {\n  padding: 10px 22px;\n  font-size: 13.5px;\n  border-radius: 14px;\n}\n\n/* Quick Topics Row */\n\n.quick-topics-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 24px;\n}\n\n.quick-title {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--purple);\n}\n\n.quick-title ion-icon {\n  font-size: 15px;\n}\n\n.quick-chips-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.quick-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: var(--catalog-surface, #ffffff);\n  color: var(--catalog-secondary, #475569);\n  border: 1px solid var(--catalog-border, #e2d9f3);\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 6px rgba(109, 40, 217, 0.04);\n}\n\n.quick-chip ion-icon {\n  font-size: 14px;\n  color: var(--purple);\n}\n\n.quick-chip:hover {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--catalog-soft, #fbf9ff);\n  transform: translateY(-1px);\n}\n\n.quick-chip.active {\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  border-color: #5b21b6;\n  box-shadow: 0 4px 14px var(--purple-glow);\n}\n\n.quick-chip.active ion-icon {\n  color: #ffffff;\n}\n\n.hero-wave {\n  margin-top: 24px;\n  line-height: 0;\n}\n\n.hero-wave svg {\n  width: 100%;\n  height: 24px;\n  fill: var(--bg-canvas);\n}\n\n/* ==========================================================================\n   Catalog Toolbar & Results Area\n   ========================================================================== */\n\n.catalog-container {\n  padding-block: 28px 48px;\n}\n\n.catalog-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--catalog-border, #ede9f6);\n  border-radius: 20px;\n  padding: 14px 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.04);\n}\n\n.toolbar-info {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.results-heading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.title-label {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.title-label b {\n  color: var(--purple);\n}\n\n.results-badge {\n  font-size: 11px;\n  font-weight: 800;\n  background: var(--purple-light);\n  color: var(--purple);\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: 1px solid var(--catalog-border, #ddd6fe);\n}\n\n.reset-filters-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 700;\n  color: var(--rose);\n  background: var(--rose-light);\n  border: 1px solid var(--catalog-border, #fecdd3);\n  padding: 4px 10px;\n  border-radius: 12px;\n  transition: all 0.15s ease;\n}\n\n.reset-filters-chip:hover {\n  background: var(--catalog-rose-soft, #ffe4e6);\n  transform: translateY(-1px);\n}\n\n.toolbar-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n\n.sort-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.sort-caption {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--muted);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.sort-caption ion-icon {\n  font-size: 14px;\n}\n\n.sort-pills {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.sort-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 12px;\n  background: var(--catalog-soft, #f8fafc);\n  color: var(--catalog-secondary, #475569);\n  border: 1px solid var(--catalog-border, #e2e8f0);\n  transition: all 0.15s ease;\n}\n\n.sort-pill ion-icon {\n  font-size: 13px;\n  color: var(--catalog-muted, #64748b);\n}\n\n.sort-pill:hover {\n  color: var(--purple);\n  border-color: var(--catalog-border, #cbd5e1);\n  background: var(--catalog-soft, #f1f5f9);\n}\n\n.sort-pill.active {\n  background: var(--purple-light);\n  color: var(--purple);\n  border-color: var(--catalog-border, #c4b5fd);\n  font-weight: 800;\n}\n\n.sort-pill.active ion-icon {\n  color: var(--purple);\n}\n\n.filter-trigger-btn {\n  position: relative;\n  border-color: var(--catalog-border, #cbd5e1);\n}\n\n.filter-active-dot {\n  position: absolute;\n  top: 6px;\n  inset-inline-end: 6px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--amber);\n  border: 2px solid var(--catalog-surface, #ffffff);\n}\n\n/* Loading State */\n\n.catalog-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 60px 20px;\n  color: var(--purple);\n  font-size: 14px;\n  font-weight: 700;\n}\n\n/* ==========================================================================\n   Courses Grid & Deep Styling of app-course\n   ========================================================================== */\n\n.courses-grid {\n  margin-top: 10px;\n}\n\n.course-col {\n  padding: 10px;\n}\n\n::ng-deep app-course ion-card {\n  border-radius: 20px !important;\n  background: var(--catalog-surface, #ffffff) !important;\n  border: 1px solid var(--catalog-border, #ede9f6) !important;\n  box-shadow: 0 4px 18px rgba(99, 63, 163, 0.05) !important;\n  margin: 0 !important;\n  height: 100% !important;\n  display: flex !important;\n  flex-direction: column !important;\n  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease !important;\n}\n\n::ng-deep app-course ion-card:hover {\n  transform: translateY(-4px) !important;\n  box-shadow: 0 16px 36px rgba(109, 40, 217, 0.12) !important;\n  border-color: var(--catalog-border, #c4b5fd) !important;\n}\n\n::ng-deep app-course ion-img {\n  border-radius: 18px 18px 0 0 !important;\n  overflow: hidden !important;\n  background: var(--catalog-soft, #f1edfb) !important;\n}\n\n::ng-deep app-course ion-card-header {\n  padding: 14px 16px 8px !important;\n}\n\n::ng-deep app-course h3.link {\n  font-size: 14px !important;\n  font-weight: 800 !important;\n  color: var(--catalog-text, #1e1b4b) !important;\n  line-height: 1.6 !important;\n  transition: color 0.2s ease !important;\n}\n\n::ng-deep app-course ion-card:hover h3.link {\n  color: var(--catalog-purple, #6d28d9) !important;\n}\n\n::ng-deep app-course ion-card-content {\n  padding: 0 16px 16px !important;\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 1 !important;\n  justify-content: space-between !important;\n}\n\n::ng-deep app-course h4.short {\n  color: var(--catalog-muted, #64748b) !important;\n  font-size: 12px !important;\n  line-height: 1.7 !important;\n  margin-bottom: 12px !important;\n}\n\n::ng-deep app-course ion-badge {\n  border-radius: 10px !important;\n  padding: 4px 8px !important;\n  font-size: 11px !important;\n  font-weight: 800 !important;\n}\n\n/* ==========================================================================\n   Pagination\n   ========================================================================== */\n\n.pagination-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 36px;\n  flex-wrap: wrap;\n}\n\n.page-numbers {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.page-num-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n  color: var(--ink);\n  border: 1px solid var(--catalog-border, #e2d9f3);\n  font-size: 13px;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n\n.page-num-btn:hover {\n  background: var(--purple-light);\n  color: var(--purple);\n  border-color: var(--catalog-border, #c4b5fd);\n}\n\n.page-num-btn.active {\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  border-color: #5b21b6;\n  box-shadow: 0 4px 14px var(--purple-glow);\n}\n\n.page-nav-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #ddd1f5);\n  font-size: 12.5px;\n  font-weight: 800;\n  transition: all 0.15s ease;\n}\n\n.page-nav-btn ion-icon {\n  font-size: 15px;\n}\n\n.page-nav-btn:hover:not(:disabled) {\n  background: var(--purple-light);\n  transform: translateY(-1px);\n}\n\n.page-nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.page-ellipsis {\n  color: var(--catalog-muted, #94a3b8);\n  font-weight: 800;\n  padding: 0 4px;\n}\n\n/* ==========================================================================\n   Friendly Empty State\n   ========================================================================== */\n\n.empty-state-card {\n  max-width: 680px;\n  margin: 32px auto;\n  background: var(--catalog-surface, #ffffff);\n  border: 2px dashed var(--catalog-border, #ddd6fe);\n  border-radius: 28px;\n  padding: 44px 28px;\n  text-align: center;\n  box-shadow: 0 8px 30px rgba(109, 40, 217, 0.04);\n}\n\n.empty-illustration {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.empty-icon-bubble {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  background: var(--catalog-purple-soft, #f5f3ff);\n  border: 2px solid var(--catalog-border, #ddd6fe);\n  color: var(--purple);\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.bubble-sparkle {\n  position: absolute;\n  top: 2px;\n  inset-inline-end: 2px;\n  font-size: 20px;\n  color: var(--amber);\n}\n\n.empty-content h3 {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 12px;\n}\n\n.empty-content p {\n  font-size: 14px;\n  line-height: 2;\n  color: var(--ink-secondary);\n  max-width: 520px;\n  margin-inline: auto;\n  margin-bottom: 24px;\n}\n\n.empty-content p b {\n  color: var(--purple);\n}\n\n.empty-actions {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n\n.empty-suggestions {\n  border-top: 1px solid var(--catalog-border, #f1f5f9);\n  padding-top: 20px;\n}\n\n.suggestions-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--muted);\n  margin-bottom: 12px;\n}\n\n.suggestion-chips {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n}\n\n.suggest-chip {\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: var(--catalog-soft, #f8fafc);\n  color: var(--purple);\n  border: 1px solid var(--catalog-border, #e2e8f0);\n  transition: all 0.15s ease;\n}\n\n.suggest-chip:hover {\n  background: var(--purple-light);\n  border-color: var(--catalog-border, #ddd6fe);\n  transform: translateY(-1px);\n}\n\n/* ==========================================================================\n   Teacher Educational Footer\n   ========================================================================== */\n\n.learning-footer {\n  background: #1e1b4b;\n  color: #f8fafc;\n  padding-top: 54px;\n  margin-top: 48px;\n  border-top: 1px solid #312e81;\n}\n\n.footer-top {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1.3fr;\n  gap: 36px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.footer-brand-col .brand {\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.footer-brand-col .brand b {\n  color: #ffffff;\n  font-size: 22px;\n}\n\n.footer-brand-col .brand small {\n  color: #c7d2fe;\n}\n\n.footer-desc {\n  font-size: 13px;\n  line-height: 2;\n  color: var(--catalog-muted, #cbd5e1);\n  max-width: 360px;\n  margin-bottom: 18px;\n}\n\n.footer-domain-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #e2e8f0;\n}\n\n.footer-domain-badge ion-icon {\n  color: var(--amber);\n}\n\n.footer-links-col h4,\n.footer-trust-col h4 {\n  font-size: 14.5px;\n  font-weight: 800;\n  color: #ffffff;\n  margin-bottom: 16px;\n}\n\n.footer-links-col nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.footer-links-col a {\n  font-size: 13px;\n  color: var(--catalog-muted, #cbd5e1);\n  transition: color 0.15s ease;\n}\n\n.footer-links-col a:hover {\n  color: var(--amber);\n}\n\n.trust-cards-row {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.trust-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 8px 14px;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #e2e8f0;\n}\n\n.trust-pill ion-icon {\n  font-size: 16px;\n  color: var(--amber);\n}\n\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-block: 20px;\n  font-size: 12px;\n  color: var(--catalog-muted, #94a3b8);\n}\n\n.footer-heart {\n  color: var(--rose);\n}\n\n/* ==========================================================================\n   Responsive\n   ========================================================================== */\n\n@media (max-width: 992px) {\n  .main-nav {\n    display: none;\n  }\n\n  .footer-top {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  .catalog-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n  }\n\n  .toolbar-actions {\n    justify-content: space-between;\n  }\n}\n\n@media (max-width: 640px) {\n  .nav-shell {\n    padding: 10px 16px;\n    min-height: 64px;\n  }\n\n  .brand-titles b {\n    font-size: 19px;\n  }\n\n  .search-hero {\n    padding-block: 26px 20px;\n  }\n\n  h1 {\n    font-size: 22px;\n  }\n\n  .hero-subtext {\n    font-size: 13px;\n  }\n\n  .search-input-group {\n    padding: 5px 8px;\n  }\n\n  .search-input-group input {\n    font-size: 13px;\n  }\n\n  .search-action-btn {\n    padding: 8px 14px;\n    font-size: 12px;\n  }\n\n  .sort-group {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .sort-pills {\n    flex-wrap: wrap;\n  }\n\n  .footer-bottom {\n    flex-direction: column;\n    gap: 8px;\n    text-align: center;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcY291cnNlXFxfY2F0YWxvZy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtBQUZGOztBQUtBO0VBQUksc0JBQUE7QUFESjs7QUFFQTtFQUFJLGNBQUE7RUFBZ0IscUJBQUE7QUFHcEI7O0FBRkE7RUFBZ0IsYUFBQTtBQU1oQjs7QUFMQTtFQUFTLGVBQUE7RUFBaUIsU0FBQTtFQUFXLHVCQUFBO0FBV3JDOztBQVZBO0VBQVksd0NBQUE7QUFjWjs7QUFiQTtFQUE2RCwwQkFBQTtFQUE0QixtQkFBQTtFQUFxQixrQkFBQTtBQW1COUc7O0FBbEJBO0VBQVcsb0JBQUE7RUFBc0IsY0FBQTtBQXVCakM7O0FBdEJBO0VBQW9CLFNBQUE7RUFBVyxjQUFBO0FBMkIvQjs7QUF6QkE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FBNEJGOztBQXpCQTs7K0VBQUE7O0FBR0E7RUFDRSxpRUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUE0QkY7O0FBMUJBO0VBQTBCLGFBQUE7QUE4QjFCOztBQTVCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VB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QURnckNoQyIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi8uLi9jb3Vyc2UvY2F0YWxvZy1kYXJrJyBhcyBjYXRhbG9nO1xyXG5cclxuOmhvc3Qge1xyXG4gIC0taW5rOiAjMWUxYjRiO1xyXG4gIC0taW5rLXNlY29uZGFyeTogIzQ3NTU2OTtcclxuICAtLW11dGVkOiAjNjQ3NDhiO1xyXG4gIC0tcHVycGxlOiAjNmQyOGQ5O1xyXG4gIC0tcHVycGxlLWRhcms6ICM1ODFjODc7XHJcbiAgLS1wdXJwbGUtbGlnaHQ6ICNlZGU5ZmU7XHJcbiAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxMDksIDQwLCAyMTcsIDAuMjIpO1xyXG4gIC0tYW1iZXI6ICNmNTllMGI7XHJcbiAgLS1hbWJlci1kYXJrOiAjZDk3NzA2O1xyXG4gIC0tYW1iZXItbGlnaHQ6ICNmZWYzYzc7XHJcbiAgLS1lbWVyYWxkOiAjMTBiOTgxO1xyXG4gIC0tZW1lcmFsZC1saWdodDogI2QxZmFlNTtcclxuICAtLXJvc2U6ICNmNDNmNWU7XHJcbiAgLS1yb3NlLWxpZ2h0OiAjZmZlNGU2O1xyXG4gIC0tcGFwZXI6ICNmZmZmZmY7XHJcbiAgLS1iZy1jYW52YXM6ICNmY2ZiZmU7XHJcbiAgLS1ib3JkZXItc29mdDogI2VkZTlmNjtcclxuICAtLWNhcmQtYmc6ICNmZmZmZmY7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcclxuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBcIlNoYWJuYW0tTWVkaXVtXCIsIHNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG5hIHsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5idXR0b24sIGlucHV0IHsgZm9udDogaW5oZXJpdDsgfVxyXG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuYnV0dG9uLCBhIHsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG5idXR0b246Zm9jdXMtdmlzaWJsZSwgYTpmb2N1cy12aXNpYmxlLCBpbnB1dDpmb2N1cy12aXNpYmxlIHsgb3V0bGluZTogM3B4IHNvbGlkICNhYzg4ZjI7IG91dGxpbmUtb2Zmc2V0OiAzcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgfVxyXG5pb24taWNvbiB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBmbGV4LXNocmluazogMDsgfVxyXG5oMSwgaDIsIGgzLCBoNCwgcCB7IG1hcmdpbjogMDsgY29sb3I6IGluaGVyaXQ7IH1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IG1pbigxMjQwcHgsIGNhbGMoMTAwJSAtIDQwcHgpKTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBIZWFkZXIgJiBOYXZpZ2F0aW9uXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5sZWFybmluZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY2F0YWxvZy1zdXJmYWNlLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOTQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmxlYXJuaW5nLWhlYWRlcjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ubmF2LXNoZWxsIHtcclxuICBtYXgtd2lkdGg6IDEzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmJyYW5kLWxvZ28td3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnJhbmQtbG9nby13cmFwIGltZyB7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cclxuLmJyYW5kLXNwYXJrbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC02cHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTZweDtcclxuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnJhbmQtdGl0bGVzIGIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuLmJyYW5kLXRpdGxlcyBzbWFsbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5tYWluLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5tYWluLW5hdiBhLCAubWFpbi1uYXYgYnV0dG9uLCAubmF2LWxpbmstYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbn1cclxuLm1haW4tbmF2IGE6aG92ZXIsIC5tYWluLW5hdiBidXR0b246aG92ZXIsIC5uYXYtbGluay1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbn1cclxuLmFjdGl2ZS1uYXYge1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLnBpbGwtZG90IHtcclxuICB3aWR0aDogN3B4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uYXYtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG59XHJcblxyXG4uaWNvbi1idXR0b24ge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1wdXJwbGUtc29mdCwgI2Y2ZjFmZCk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNlOWQ1ZmYpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMsIHRyYW5zZm9ybSAuMTVzLCBjb2xvciAuMnM7XHJcbn1cclxuLmljb24tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZWRlOWZlKTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5jYXJ0IHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XHJcbi5jYXJ0LWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IC00cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpO1xyXG4gIGNvbG9yOiAjM2IyODAyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZik7XHJcbiAgcGFkZGluZzogMXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBnYXA6IDZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNkY2QwZjcpO1xyXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbn1cclxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24sIHZhcigtLXB1cnBsZSkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG4ubG9naW4tYnV0dG9uIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcblxyXG4ubWVudS10b2dnbGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XHJcbn1cclxuLm1lbnUtdG9nZ2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbiwgdmFyKC0tcHVycGxlKSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBDb250ZW50ICYgSGVybyBTZWN0aW9uXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5sZWFybmluZy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW5rKTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2VhcmNoLXBhZ2UtbWFpbiB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcclxufVxyXG5cclxuLnNlYXJjaC1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY2F0YWxvZy1wdXJwbGUtc29mdCwgI2Y3ZjJmZikgMCUsIHZhcigtLWNhdGFsb2ctc29mdCwgI2ZhZjhmZSkgNjUlLCB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpIDEwMCUpO1xyXG4gIHBhZGRpbmctYmxvY2s6IDQwcHggMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2YxZWRmYik7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tkcm9wLWdsb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNjBweDtcclxuICBpbnNldC1pbmxpbmUtc3RhcnQ6IDE1JTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjI1KSAwJSwgcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMCkgNzAlKTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmhlcm8tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWhlYWRlci10ZXh0IHtcclxuICBtYXgtd2lkdGg6IDgyMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbn1cclxuXHJcbi5leWVicm93LWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA3cHg7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctcHVycGxlLCAjNWIyMWI2KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZWRlNmZjKTtcclxuICBwYWRkaW5nOiA3cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZGRkMmY3KTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5zcGFya2xlLWljb24geyBjb2xvcjogdmFyKC0tYW1iZXIpOyBmb250LXNpemU6IDE2cHg7IH1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IGNsYW1wKDI2cHgsIDMuMnZ3LCA0MHB4KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5oaWdobGlnaHQgc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0ycHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiB2YXIoLS1hbWJlcik7XHJcbiAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmhlcm8tc3VidGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIG1heC13aWR0aDogNjQwcHg7XHJcbiAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4vKiBIZXJvIFNlYXJjaCBGb3JtICovXHJcbi5oZXJvLXNlYXJjaC1mb3JtIHtcclxuICB3aWR0aDogbWluKDg0MHB4LCAxMDAlKTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNkZGQxZjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogN3B4IDEycHggN3B4IDhweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQtZ3JvdXA6Zm9jdXMtd2l0aGluIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMTYpO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogNnB4IDRweDtcclxufVxyXG4uc2VhcmNoLWlucHV0LWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctbXV0ZWQsICM5NGEzYjgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jbGVhci1pbnB1dC1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS1jYXRhbG9nLW11dGVkLCAjOTRhM2I4KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbn1cclxuLmNsZWFyLWlucHV0LWJ0bjpob3ZlciB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsMCwwLDAuMDYpO1xyXG59XHJcbi5idXR0b24uc21hbGwgeyBwYWRkaW5nOiA4cHggMTRweDsgZm9udC1zaXplOiAxMnB4OyBib3JkZXItcmFkaXVzOiAxMnB4OyB9XHJcbi5idXR0b24ucHJpbWFyeSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCAwJSwgIzZkMjhkOSAxMDAlKTtcclxuICBib3JkZXItY29sb3I6ICM1YjIxYjY7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XHJcbn1cclxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG59XHJcbi5idXR0b24uc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNkZGQxZjUpO1xyXG59XHJcbi5idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLnNlYXJjaC1hY3Rpb24tYnRuIHtcclxuICBwYWRkaW5nOiAxMHB4IDIycHg7XHJcbiAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLyogUXVpY2sgVG9waWNzIFJvdyAqL1xyXG4ucXVpY2stdG9waWNzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4ucXVpY2stdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbn1cclxuLnF1aWNrLXRpdGxlIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNXB4OyB9XHJcblxyXG4ucXVpY2stY2hpcHMtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnF1aWNrLWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBjb2xvcjogdmFyKC0tY2F0YWxvZy1zZWNvbmRhcnksICM0NzU1NjkpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZTJkOWYzKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA0KTtcclxufVxyXG4ucXVpY2stY2hpcCBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cclxuLnF1aWNrLWNoaXA6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQsICNmYmY5ZmYpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG4ucXVpY2stY2hpcC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICM2ZDI4ZDkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWIyMWI2O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG59XHJcbi5xdWljay1jaGlwLmFjdGl2ZSBpb24taWNvbiB7IGNvbG9yOiAjZmZmZmZmOyB9XHJcblxyXG4uaGVyby13YXZlIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcbi5oZXJvLXdhdmUgc3ZnIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZmlsbDogdmFyKC0tYmctY2FudmFzKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ2F0YWxvZyBUb29sYmFyICYgUmVzdWx0cyBBcmVhXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jYXRhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ibG9jazogMjhweCA0OHB4O1xyXG59XHJcblxyXG4uY2F0YWxvZy10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2VkZTlmNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDQpO1xyXG59XHJcblxyXG4udG9vbGJhci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnJlc3VsdHMtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4udGl0bGUtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcbi50aXRsZS1sYWJlbCBiIHtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxufVxyXG4ucmVzdWx0cy1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZGRkNmZlKTtcclxufVxyXG5cclxuLnJlc2V0LWZpbHRlcnMtY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDVweDtcclxuICBmb250LXNpemU6IDExLjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1yb3NlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLWxpZ2h0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2ZlY2RkMyk7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG59XHJcbi5yZXNldC1maWx0ZXJzLWNoaXA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctcm9zZS1zb2Z0LCAjZmZlNGU2KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi50b29sYmFyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4uc29ydC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcbi5zb3J0LWNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxufVxyXG4uc29ydC1jYXB0aW9uIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNHB4OyB9XHJcblxyXG4uc29ydC1waWxscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcbi5zb3J0LXBpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2Y4ZmFmYyk7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctc2Vjb25kYXJ5LCAjNDc1NTY5KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2UyZThmMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcclxufVxyXG4uc29ydC1waWxsIGlvbi1pY29uIHsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogdmFyKC0tY2F0YWxvZy1tdXRlZCwgIzY0NzQ4Yik7IH1cclxuLnNvcnQtcGlsbDpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2NiZDVlMSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjFmNWY5KTtcclxufVxyXG4uc29ydC1waWxsLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjYzRiNWZkKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5zb3J0LXBpbGwuYWN0aXZlIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cclxuXHJcbi5maWx0ZXItdHJpZ2dlci1idG4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjY2JkNWUxKTtcclxufVxyXG4uZmlsdGVyLWFjdGl2ZS1kb3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDZweDtcclxuICBpbnNldC1pbmxpbmUtZW5kOiA2cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgU3RhdGUgKi9cclxuLmNhdGFsb2ctbG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQ291cnNlcyBHcmlkICYgRGVlcCBTdHlsaW5nIG9mIGFwcC1jb3Vyc2VcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmNvdXJzZXMtZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvdXJzZS1jb2wge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtY291cnNlIGlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZWRlOWY2KSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSkgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjJzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpLCBib3gtc2hhZG93IC4yMnMgZWFzZSwgYm9yZGVyLWNvbG9yIC4yMnMgZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLWNvdXJzZSBpb24tY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxNnB4IDM2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2M0YjVmZCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1jb3Vyc2UgaW9uLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDAgMCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQsICNmMWVkZmIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtY291cnNlIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLWNvdXJzZSBoMy5saW5rIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctdGV4dCwgIzFlMWI0YikgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS42ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1jb3Vyc2UgaW9uLWNhcmQ6aG92ZXIgaDMubGluayB7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctcHVycGxlLCAjNmQyOGQ5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLWNvdXJzZSBpb24tY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDE2cHggMTZweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLWNvdXJzZSBoNC5zaG9ydCB7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctbXV0ZWQsICM2NDc0OGIpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1jb3Vyc2UgaW9uLWJhZGdlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4IDhweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUGFnaW5hdGlvblxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucGFnaW5hdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzZweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wYWdlLW51bWJlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxufVxyXG5cclxuLnBhZ2UtbnVtLWJ0biB7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2UyZDlmMyk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG59XHJcbi5wYWdlLW51bS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2M0YjVmZCk7XHJcbn1cclxuLnBhZ2UtbnVtLWJ0bi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICM2ZDI4ZDkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWIyMWI2O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG59XHJcblxyXG4ucGFnZS1uYXYtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDFmNSk7XHJcbiAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG59XHJcbi5wYWdlLW5hdi1idG4gaW9uLWljb24geyBmb250LXNpemU6IDE1cHg7IH1cclxuLnBhZ2UtbmF2LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuLnBhZ2UtbmF2LWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogLjQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLnBhZ2UtZWxsaXBzaXMge1xyXG4gIGNvbG9yOiB2YXIoLS1jYXRhbG9nLW11dGVkLCAjOTRhM2I4KTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBGcmllbmRseSBFbXB0eSBTdGF0ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZW1wdHktc3RhdGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA2ODBweDtcclxuICBtYXJnaW46IDMycHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBwYWRkaW5nOiA0NHB4IDI4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpO1xyXG59XHJcblxyXG4uZW1wdHktaWxsdXN0cmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29uLWJ1YmJsZSB7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5idWJibGUtc3BhcmtsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IDJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxufVxyXG5cclxuLmVtcHR5LWNvbnRlbnQgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5lbXB0eS1jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuLmVtcHR5LWNvbnRlbnQgcCBiIHtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxufVxyXG5cclxuLmVtcHR5LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmVtcHR5LXN1Z2dlc3Rpb25zIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNmMWY1ZjkpO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5zdWdnZXN0aW9ucy1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5zdWdnZXN0aW9uLWNoaXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG4uc3VnZ2VzdC1jaGlwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQsICNmOGZhZmMpO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjZTJlOGYwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG59XHJcbi5zdWdnZXN0LWNoaXA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXRhbG9nLWJvcmRlciwgI2RkZDZmZSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUZWFjaGVyIEVkdWNhdGlvbmFsIEZvb3RlclxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ubGVhcm5pbmctZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWUxYjRiO1xyXG4gIGNvbG9yOiAjZjhmYWZjO1xyXG4gIHBhZGRpbmctdG9wOiA1NHB4O1xyXG4gIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMTJlODE7XHJcbn1cclxuXHJcbi5mb290ZXItdG9wIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyIDEuM2ZyO1xyXG4gIGdhcDogMzZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uZm9vdGVyLWJyYW5kLWNvbCAuYnJhbmQge1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbi5mb290ZXItYnJhbmQtY29sIC5icmFuZCBiIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmZvb3Rlci1icmFuZC1jb2wgLmJyYW5kIHNtYWxsIHtcclxuICBjb2xvcjogI2M3ZDJmZTtcclxufVxyXG5cclxuLmZvb3Rlci1kZXNjIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctbXV0ZWQsICNjYmQ1ZTEpO1xyXG4gIG1heC13aWR0aDogMzYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmZvb3Rlci1kb21haW4tYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC4wOCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2UyZThmMDtcclxufVxyXG4uZm9vdGVyLWRvbWFpbi1iYWRnZSBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cclxuXHJcbi5mb290ZXItbGlua3MtY29sIGg0LFxyXG4uZm9vdGVyLXRydXN0LWNvbCBoNCB7XHJcbiAgZm9udC1zaXplOiAxNC41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLmZvb3Rlci1saW5rcy1jb2wgYSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1jYXRhbG9nLW11dGVkLCAjY2JkNWUxKTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2U7XHJcbn1cclxuLmZvb3Rlci1saW5rcy1jb2wgYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxufVxyXG5cclxuLnRydXN0LWNhcmRzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4udHJ1c3QtcGlsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNhdGFsb2ctc3VyZmFjZS1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjA2KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNlMmU4ZjA7XHJcbn1cclxuLnRydXN0LXBpbGwgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tY2F0YWxvZy1tdXRlZCwgIzk0YTNiOCk7XHJcbn1cclxuLmZvb3Rlci1oZWFydCB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUmVzcG9uc2l2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1uYXYgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLmZvb3Rlci10b3AgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgZ2FwOiAzMHB4OyB9XHJcbiAgLmNhdGFsb2ctdG9vbGJhciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBzdHJldGNoOyBnYXA6IDE0cHg7IH1cclxuICAudG9vbGJhci1hY3Rpb25zIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5uYXYtc2hlbGwgeyBwYWRkaW5nOiAxMHB4IDE2cHg7IG1pbi1oZWlnaHQ6IDY0cHg7IH1cclxuICAuYnJhbmQtdGl0bGVzIGIgeyBmb250LXNpemU6IDE5cHg7IH1cclxuICAuc2VhcmNoLWhlcm8geyBwYWRkaW5nLWJsb2NrOiAyNnB4IDIwcHg7IH1cclxuICBoMSB7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG4gIC5oZXJvLXN1YnRleHQgeyBmb250LXNpemU6IDEzcHg7IH1cclxuICAuc2VhcmNoLWlucHV0LWdyb3VwIHsgcGFkZGluZzogNXB4IDhweDsgfVxyXG4gIC5zZWFyY2gtaW5wdXQtZ3JvdXAgaW5wdXQgeyBmb250LXNpemU6IDEzcHg7IH1cclxuICAuc2VhcmNoLWFjdGlvbi1idG4geyBwYWRkaW5nOiA4cHggMTRweDsgZm9udC1zaXplOiAxMnB4OyB9XHJcbiAgLnNvcnQtZ3JvdXAgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxyXG4gIC5zb3J0LXBpbGxzIHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgLmZvb3Rlci1ib3R0b20geyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDhweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGNhdGFsb2cuZGFyay1tb2RlO1xyXG4iLCIvLyBQYWdlLWxvY2FsIGNhdGFsb2cgcGFsZXR0ZS4gSW1wb3J0ZWQgb25seSBieSBjb3Vyc2UvcHJvZHVjdC9hcnRpY2xlL3NlYXJjaCByb3V0ZXMuXG4vLyBGYWxsYmFja3MgaW4gdGhlIGNvbnN1bWluZyBzdHlsZXMgcHJlc2VydmUgZXZlcnkgb3JpZ2luYWwgbGlnaHQtbW9kZSBjb2xvci5cbkBtaXhpbiBkYXJrLW1vZGUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlOiAjMjExYzMyO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlLXJnYjogMzMsIDI4LCA1MDtcbiAgICAtLWNhdGFsb2ctc29mdDogIzI5MjMzZDtcbiAgICAtLWNhdGFsb2ctaG92ZXI6ICMzNDJjNDk7XG4gICAgLS1jYXRhbG9nLWJvcmRlcjogIzRiNDE2NDtcbiAgICAtLWNhdGFsb2ctdGV4dDogI2YyZWVmYjtcbiAgICAtLWNhdGFsb2ctc2Vjb25kYXJ5OiAjZDBjOGUyO1xuICAgIC0tY2F0YWxvZy1tdXRlZDogI2IxYTZjNjtcbiAgICAtLWNhdGFsb2ctcHVycGxlLXNvZnQ6ICMzMDIzNDc7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1ob3ZlcjogIzNkMmQ1ODtcbiAgICAtLWNhdGFsb2ctYW1iZXItc29mdDogIzNiMmQxODtcbiAgICAtLWNhdGFsb2ctZW1lcmFsZC1zb2Z0OiAjMTgzNzJlO1xuICAgIC0tY2F0YWxvZy1yb3NlLXNvZnQ6ICM0MDIzMzQ7XG4gICAgLS1jYXRhbG9nLXNreS1zb2Z0OiAjMTkzMzQ2O1xuICAgIC0tY2F0YWxvZy1wdXJwbGU6ICNjNGI1ZmQ7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQ6ICM2ZWU3Yjc7XG4gICAgLS1jYXRhbG9nLXNreTogIzdkZDNmYztcbiAgICAtLWNhdGFsb2ctc2t5LWFjdGlvbjogIzAzNjlhMTtcbiAgICAtLWNhdGFsb2ctYWN0aW9uOiAjN2MzYWVkO1xuICAgIC0tY2F0YWxvZy1hY3Rpb24taG92ZXI6ICM2ZDI4ZDk7XG4gICAgLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzViMjFiNik7XG4gICAgLS1jYXRhbG9nLWJ1eTogIzA0Nzg1NztcbiAgICAtLWNhdGFsb2ctYnV5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDQ3ODU3LCAjMDY1ZjQ2KTtcbiAgICAtLWNhdGFsb2ctZGFuZ2VyOiAjYmUxMjNjO1xuICAgIC0tY2F0YWxvZy1hbWJlci1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5MjQwMGUsICM3ODM1MGYpO1xuICAgIC0taW5rOiB2YXIoLS1jYXRhbG9nLXRleHQpO1xuICAgIC0taW5rLXNlY29uZGFyeTogdmFyKC0tY2F0YWxvZy1zZWNvbmRhcnkpO1xuICAgIC0tbXV0ZWQ6IHZhcigtLWNhdGFsb2ctbXV0ZWQpO1xuICAgIC0tcHVycGxlOiB2YXIoLS1jYXRhbG9nLXB1cnBsZSk7XG4gICAgLS1wdXJwbGUtZGFyazogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0KTtcbiAgICAtLXB1cnBsZS1nbG93OiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMTQpO1xuICAgIC0tYW1iZXI6ICNmYmJmMjQ7XG4gICAgLS1hbWJlci1kYXJrOiAjZmNkMzRkO1xuICAgIC0tYW1iZXItbGlnaHQ6IHZhcigtLWNhdGFsb2ctYW1iZXItc29mdCk7XG4gICAgLS1hbWJlci1nbG93OiByZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKTtcbiAgICAtLWVtZXJhbGQ6ICMzNGQzOTk7XG4gICAgLS1lbWVyYWxkLWRhcms6IHZhcigtLWNhdGFsb2ctZW1lcmFsZCk7XG4gICAgLS1lbWVyYWxkLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQtc29mdCk7XG4gICAgLS1yb3NlOiAjZmRhNGFmO1xuICAgIC0tcm9zZS1saWdodDogdmFyKC0tY2F0YWxvZy1yb3NlLXNvZnQpO1xuICAgIC0tc2t5OiB2YXIoLS1jYXRhbG9nLXNreSk7XG4gICAgLS1za3ktbGlnaHQ6IHZhcigtLWNhdGFsb2ctc2t5LXNvZnQpO1xuICAgIC0tcGFwZXI6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1iZy1jYW52YXM6ICMxNDEwMjA7XG4gICAgLS1ib3JkZXItc29mdDogdmFyKC0tY2F0YWxvZy1ib3JkZXIpO1xuICAgIC0tY2FyZC1iZzogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLWNhcmQtc2hhZG93OiAwIDEycHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIC0tY291cnNlLXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1wcm9kdWN0LXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jb3Vyc2UtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLXByb2R1Y3QtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWluayk7XG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgY29sb3I6IHZhcigtLWluayk7XG5cbiAgICAuYnJhbmQgeyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgLmJnIHsgYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTsgfVxuICAgIGlvbi1jYXJkOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSB7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gICAgaW9uLWNhcmQtaGVhZGVyW2NvbG9yPSdwcmltYXJ5J10ge1xuICAgICAgLy8gSW9uaWMncyAuaW9uLWNvbG9yLXByaW1hcnkgZGVjbGFyZXMgdGhlc2UgdG9rZW5zIHdpdGggIWltcG9ydGFudC5cbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWNhdGFsb2ctc29mdCkgIWltcG9ydGFudDtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICB9XG4gICAgaW9uLWxpc3Q6bm90KC5pb24tY29sb3IpIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICBpb24taXRlbTpub3QoLmlvbi1jb2xvcikge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IC0tY29sb3I6IHZhcigtLWluayk7IH1cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2xpZ2h0J10sIGlvbi1sYWJlbFtjb2xvcj0nZGFya2VyJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICBpb24tbGFiZWxbY29sb3I9J21lZGl1bSddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tbXV0ZWQpICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuXG4vLyBBbmd1bGFyIGRvZXMgbm90IGF0dGFjaCBlbmNhcHN1bGF0aW9uIGF0dHJpYnV0ZXMgdG8gY29udGVudCBpbnNlcnRlZCBieSBpbm5lckhUTUwuXG4vLyBLZWVwIGRlZXAgcnVsZXMgYW5jaG9yZWQgdG8gZWFjaCBwYWdlJ3Mgb3duIGRlc2NyaXB0aW9uIGNvbnRhaW5lci5cbkBtaXhpbiByaWNoLXRleHQoJGNvbnRhaW5lcikge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAge1xuICAgICN7JGNvbnRhaW5lcn0ge1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgOndoZXJlKHAsIHNwYW4sIGRpdiwgbGksIHN0cm9uZywgYiwgZW0sIGksIGZvbnQsIHRkLCB0aCkge1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2KSB7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIGEgeyBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50OyB9XG4gICAgICBibG9ja3F1b3RlLCBwcmUsIGNvZGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIHRhYmxlLCB0ZCwgdGggeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KSAhaW1wb3J0YW50OyB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 42587:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/home/search/search.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<!-- Elementary Education Modern Header -->\r\n<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  \n  <app-page-header titleKey=\"pageHeader.home/search/search\" fallback=\"/\">\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"learning-content\" [attr.dir]=\"language.direction\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <main class=\"search-page-main\">\r\n    <!-- Hero Search Section -->\r\n    <section class=\"search-hero\">\r\n      <div class=\"hero-backdrop-glow\" aria-hidden=\"true\"></div>\r\n      <div class=\"page-container hero-container\">\r\n        <div class=\"hero-header-text\">\r\n          <div class=\"eyebrow-chip\">\r\n            <span class=\"sparkle-icon\">✦</span>\r\n            <span>بانک دوره‌ها و مهارت‌های تدریس پایه اول دبستان</span>\r\n          </div>\r\n\r\n          <h1>\r\n            جستجوی دوره‌های آموزشی معلمان\r\n            <span class=\"highlight\">\r\n              پایه اول\r\n              <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\r\n                <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\r\n              </svg>\r\n            </span>\r\n          </h1>\r\n\r\n          <p class=\"hero-subtext\">\r\n            دسترسی آسان به آموزش‌های ویدئویی روش تدریس خلاق نشانه‌ها، ریاضی مفهومی، مدیریت کلاس و اختلالات یادگیری\r\n          </p>\r\n        </div>\r\n\r\n        <!-- Main Search Bar -->\r\n        <form class=\"hero-search-form\" (ngSubmit)=\"search()\">\r\n          <div class=\"search-input-group\">\r\n            <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\r\n            <input\r\n              [(ngModel)]=\"queryText\"\r\n              name=\"searchQuery\"\r\n              type=\"search\"\r\n              placeholder=\"جستجوی عنوان دوره، مبحث یا مدرس (مثلاً: تدریس نشانه آ، ریاضی، مدیریت کلاس...)\"\r\n              autocomplete=\"off\"\r\n            />\r\n            <button\r\n              type=\"button\"\r\n              class=\"clear-input-btn\"\r\n              *ngIf=\"queryText && queryText.length > 0\"\r\n              (click)=\"clearSearch()\"\r\n              title=\"پاک کردن متن\"\r\n            >\r\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n            </button>\r\n            <button type=\"submit\" class=\"button primary search-action-btn\">\r\n              <ion-icon name=\"search-outline\"></ion-icon>\r\n              <span>جستجو</span>\r\n            </button>\r\n          </div>\r\n        </form>\r\n\r\n        <!-- Quick Educational Topics Pills -->\r\n        <div class=\"quick-topics-row\">\r\n          <span class=\"quick-title\">\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n            دسترسی سریع:\r\n          </span>\r\n          <div class=\"quick-chips-wrap\">\r\n            <button\r\n              type=\"button\"\r\n              *ngFor=\"let topic of quickTopics\"\r\n              class=\"quick-chip\"\r\n              [class.active]=\"isTopicActive(topic.query)\"\r\n              (click)=\"quickSearch(topic.query)\"\r\n            >\r\n              <ion-icon [name]=\"topic.icon\" *ngIf=\"topic.icon\"></ion-icon>\r\n              <span>{{ topic.title }}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"hero-wave\" aria-hidden=\"true\">\r\n        <svg viewBox=\"0 0 1440 32\" preserveAspectRatio=\"none\">\r\n          <path d=\"M0,16 C320,32 420,0 720,16 C1020,32 1120,0 1440,16 L1440,32 L0,32 Z\"></path>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Main Results Section -->\r\n    <section class=\"page-container catalog-container\">\r\n      <!-- Toolbar: Results Info & Sorting -->\r\n      <div class=\"catalog-toolbar\">\r\n        <div class=\"toolbar-info\">\r\n          <div class=\"results-heading\">\r\n            <span class=\"title-label\" *ngIf=\"queryText && queryText.trim().length > 0\">\r\n              نتایج برای: <b>«{{ queryText }}»</b>\r\n            </span>\r\n            <span class=\"title-label\" *ngIf=\"!queryText || queryText.trim().length === 0\">\r\n              همه دوره‌های توانمندسازی معلمان\r\n            </span>\r\n            <span class=\"results-badge\" *ngIf=\"filteredCourses?.courses\">\r\n              {{ filteredCourses.courses.length }} دوره\r\n            </span>\r\n          </div>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"reset-filters-chip\"\r\n            *ngIf=\"hasActiveFilters\"\r\n            (click)=\"clearSearch()\"\r\n            title=\"حذف همه فیلترها و نمایش همه دوره‌ها\"\r\n          >\r\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n            <span>حذف فیلترها</span>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"toolbar-actions\">\r\n          <!-- Quick Sort Pills -->\r\n          <div class=\"sort-group\">\r\n            <span class=\"sort-caption\">\r\n              <ion-icon name=\"funnel-outline\"></ion-icon>\r\n              مرتب‌سازی:\r\n            </span>\r\n            <div class=\"sort-pills\">\r\n              <button\r\n                type=\"button\"\r\n                *ngFor=\"let opt of sortOptions\"\r\n                class=\"sort-pill\"\r\n                [class.active]=\"currentSortId === opt.id\"\r\n                (click)=\"setSort(opt.id)\"\r\n              >\r\n                <ion-icon [name]=\"opt.icon\"></ion-icon>\r\n                <span>{{ opt.label }}</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Advanced Filter Modal Trigger -->\r\n          <button type=\"button\" class=\"button secondary small filter-trigger-btn\" (click)=\"presentFilter()\">\r\n            <ion-icon name=\"options-outline\"></ion-icon>\r\n            <span>فیلتر قیمت و تعداد</span>\r\n            <span class=\"filter-active-dot\" *ngIf=\"hasActiveFilters\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Loading State -->\r\n      <div class=\"catalog-loading\" *ngIf=\"isLoading\">\r\n        <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\r\n        <span>در حال جستجوی دوره‌های آموزشی...</span>\r\n      </div>\r\n\r\n      <!-- Courses Grid -->\r\n      <div class=\"courses-grid\" *ngIf=\"!isLoading && filteredCourses?.courses && !notfound\">\r\n        <ion-row>\r\n          <ion-col\r\n            *ngFor=\"let course of filteredCourses.courses\"\r\n            size=\"12\"\r\n            size-sm=\"6\"\r\n            size-md=\"6\"\r\n            size-lg=\"4\"\r\n            size-xl=\"3\"\r\n            class=\"course-col\"\r\n          >\r\n            <app-course [course]=\"course\"></app-course>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <!-- Pagination (when results exist) -->\r\n      <nav\r\n        class=\"pagination-container\"\r\n        *ngIf=\"!isLoading && filteredCourses && filteredCourses.pageCount > 1 && !notfound\"\r\n        aria-label=\"صفحه‌بندی نتایج\"\r\n      >\r\n        <button\r\n          type=\"button\"\r\n          class=\"page-nav-btn prev-btn\"\r\n          [disabled]=\"filteredCourses.pageId <= 1\"\r\n          (click)=\"goPreviousPage()\"\r\n        >\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n          <span>صفحه قبل</span>\r\n        </button>\r\n\r\n        <div class=\"page-numbers\">\r\n          <span *ngIf=\"filteredCourses.pageId > 2 && filteredCourses.pageCount > 3\">\r\n            <button type=\"button\" class=\"page-num-btn\" (click)=\"goPage(1)\">۱</button>\r\n            <span class=\"page-ellipsis\">…</span>\r\n          </span>\r\n\r\n          <ng-container *ngFor=\"let page of MakePageCountArray(filteredCourses.pageCount); let i = index\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"page-num-btn\"\r\n              [class.active]=\"filteredCourses.pageId == page\"\r\n              *ngIf=\"filteredCourses.pageId <= i + 3 && filteredCourses.pageId >= i - 1\"\r\n              (click)=\"goPage(page)\"\r\n            >\r\n              {{ page }}\r\n            </button>\r\n          </ng-container>\r\n\r\n          <span *ngIf=\"filteredCourses.pageId + 2 < filteredCourses.pageCount\">\r\n            <span class=\"page-ellipsis\">…</span>\r\n            <button type=\"button\" class=\"page-num-btn\" (click)=\"goPage(filteredCourses.pageCount)\">\r\n              {{ filteredCourses.pageCount }}\r\n            </button>\r\n          </span>\r\n        </div>\r\n\r\n        <button\r\n          type=\"button\"\r\n          class=\"page-nav-btn next-btn\"\r\n          [disabled]=\"filteredCourses.pageId >= filteredCourses.pageCount\"\r\n          (click)=\"goNextPage()\"\r\n        >\r\n          <span>صفحه بعد</span>\r\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        </button>\r\n      </nav>\r\n\r\n      <!-- Friendly Elementary Not Found / Empty State -->\r\n      <div class=\"empty-state-card\" *ngIf=\"!isLoading && notfound\">\r\n        <div class=\"empty-illustration\">\r\n          <div class=\"empty-icon-bubble\">\r\n            <ion-icon name=\"search-outline\"></ion-icon>\r\n            <span class=\"bubble-sparkle\">✦</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"empty-content\">\r\n          <h3>دوره‌ای مطابق با جستجوی شما پیدا نشد!</h3>\r\n          <p>\r\n            ممکن است عنوان را با املای دیگری جستجو کرده باشید. پیشنهاد می‌کنیم از کلیدواژه‌های اصلی مانند\r\n            <b>«الفبا»</b>، <b>«ریاضی»</b> یا <b>«طرح درس»</b> استفاده فرمایید یا همه دوره‌ها را مشاهده نمایید.\r\n          </p>\r\n\r\n          <div class=\"empty-actions\">\r\n            <button type=\"button\" class=\"button primary\" (click)=\"clearSearch()\">\r\n              <ion-icon name=\"school-outline\"></ion-icon>\r\n              <span>مشاهده همه دوره‌های معلمان</span>\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"empty-suggestions\">\r\n            <span class=\"suggestions-label\">پیشنهادات پرطرفدار:</span>\r\n            <div class=\"suggestion-chips\">\r\n              <button type=\"button\" class=\"suggest-chip\" (click)=\"quickSearch('فارسی اول')\">تدریس الفبا و فارسی اول</button>\r\n              <button type=\"button\" class=\"suggest-chip\" (click)=\"quickSearch('ریاضی اول')\">ریاضی و دست‌ورزی</button>\r\n              <button type=\"button\" class=\"suggest-chip\" (click)=\"quickSearch('مدیریت کلاس')\">مدیریت کلاس و نوآموزان</button>\r\n              <button type=\"button\" class=\"suggest-chip\" (click)=\"quickSearch('کاربرگ اول')\">کاربرگ‌های هفتگی</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <!-- Educational Footer -->\r\n  <footer class=\"learning-footer\">\r\n    <div class=\"page-container footer-top\">\r\n      <div class=\"footer-brand-col\">\r\n        <a class=\"brand avalamooz-brand\" [routerLink]=\"url('/Home')\">\r\n          <img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" />\r\n          <div>\r\n            <b>{{ 'learn.brand' | translate }}</b>\r\n            <small>{{ 'learn.tagline' | translate }}</small>\r\n          </div>\r\n        </a>\r\n        <p class=\"footer-desc\">{{ 'learn.footer.description' | translate }}</p>\r\n        <div class=\"footer-domain-badge\">\r\n          <ion-icon name=\"globe-outline\"></ion-icon>\r\n          <span>پایگاه رسمی: <b>avalamuz.ir</b></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer-links-col\">\r\n        <h4>{{ 'learn.footer.links' | translate }}</h4>\r\n        <nav [attr.aria-label]=\"'learn.footer.links' | translate\">\r\n          <a [routerLink]=\"url('/Home')\">{{ 'learn.nav.courses' | translate }}</a>\r\n          <a [routerLink]=\"url('/Home/Product')\">{{ 'learn.nav.store' | translate }}</a>\r\n          <a [routerLink]=\"url('/Home')\">{{ 'learn.nav.grade1' | translate }}</a>\r\n          <a [routerLink]=\"url('/About')\">{{ 'learn.footer.about' | translate }}</a>\r\n          <a [routerLink]=\"url('/PrivacyPolicy')\">{{ 'learn.footer.privacy' | translate }}</a>\r\n        </nav>\r\n      </div>\r\n\r\n      <div class=\"footer-trust-col\">\r\n        <h4>اعتماد و پشتیبانی همکاران</h4>\r\n        <div class=\"trust-cards-row\">\r\n          <div class=\"trust-pill\">\r\n            <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n            <span>تایید سرگروه‌های آموزشی</span>\r\n          </div>\r\n          <div class=\"trust-pill\">\r\n            <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n            <span>ضمانت کیفیت علمی محتوا</span>\r\n          </div>\r\n          <div class=\"trust-pill\">\r\n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n            <span>پشتیبانی آموزگاران در ایتا و تلگرام</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-container footer-bottom\">\r\n      <span>{{ 'learn.footer.copyright' | translate }}</span>\r\n      <span>{{ 'learn.footer.made' | translate }} <span class=\"footer-heart\" aria-hidden=\"true\">♥</span></span>\r\n    </div>\r\n  </footer>\r\n\r\n  <!-- Floating Back to Top Button -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button color=\"warning\" (click)=\"goTop()\" aria-label=\"رفتن به بالای صفحه\" title=\"بالای صفحه\">\r\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pipe_price_module_ts-src_app_view_pages_home_search_search_module_ts.js.map