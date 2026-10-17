"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_home_home_module_ts"],{

/***/ 90756:
/*!********************************************************!*\
  !*** ./src/app/view/pages/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 33106);




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'Product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 91941)).then(m => m.ProductModule),
        data: {
            title: 'اول آموز | فروشگاه محصولات و ابزارهای آموزشی معلمان ابتدایی',
            description: 'فروشگاه تخصصی معلمان ابتدایی اول آموز؛ کاربرگ‌های هفتگی پایه اول، طرح درس روزانه و سالانه، دست‌سازه‌های آموزشی و کیت‌های یادگیری خلاق.',
            ogUrl: 'http://localhost:4300/Home/Product'
        }
    },
    {
        path: 'product',
        redirectTo: 'Product'
    },
    {
        path: 'search',
        redirectTo: 'Search',
        data: {
            title: 'اول آموز | جستجوی دوره‌های آموزشی',
            description: 'جستجوی دوره‌های آموزشی اول آموز برای دانش‌آموزان ابتدایی و معلم‌ها.',
            ogUrl: 'http://localhost:4300/Home/Search'
        }
    },
    {
        path: 'Search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_view_components_modal_filter_filter_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_home_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/home/search/search.module */ 54544)).then(m => m.SearchModule),
        data: {
            title: 'اول آموز | جستجوی دوره‌های آموزشی',
            description: 'جستجوی دوره‌های آموزشی اول آموز برای دانش‌آموزان ابتدایی و معلم‌ها.',
            ogUrl: 'http://localhost:4300/Home/Search'
        }
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomeRoutingModule);



/***/ }),

/***/ 33106:
/*!***************************************************!*\
  !*** ./src/app/view/pages/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 23270);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 58861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _learning_landing_learning_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-landing/learning-landing.component */ 2545);





let HomeComponent = class HomeComponent {
    ionViewWillLeave() { this.landing?.leave(); }
};
HomeComponent.propDecorators = {
    landing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_learning_landing_learning_landing_component__WEBPACK_IMPORTED_MODULE_2__.LearningLandingComponent,] }]
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 13911:
/*!************************************************!*\
  !*** ./src/app/view/pages/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 90756);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 33106);
/* harmony import */ var _learning_landing_learning_landing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-landing/learning-landing.module */ 53285);






let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _learning_landing_learning_landing_module__WEBPACK_IMPORTED_MODULE_2__.LearningLandingModule]
    })
], HomeModule);



/***/ }),

/***/ 58861:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/home/home.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\napp-learning-landing {\n  flex: 1;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsWUFBQTtBQUkvQzs7QUFIQTtFQUF1QixPQUFBO0VBQVMsYUFBQTtBQVFoQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBoZWlnaHQ6IDEwMCU7IH1cbmFwcC1sZWFybmluZy1sYW5kaW5nIHsgZmxleDogMTsgbWluLWhlaWdodDogMDsgfVxuIl19 */";

/***/ }),

/***/ 23270:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/home/home.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<app-learning-landing mode=\"courses\"></app-learning-landing>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_home_home_module_ts.js.map