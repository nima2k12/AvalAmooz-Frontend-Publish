"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_user-course_user-course_module_ts"],{

/***/ 5598:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/user-course/user-course-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCourseRoutingModule": () => (/* binding */ UserCourseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-course.component */ 99285);




const routes = [{ path: '', component: _user_course_component__WEBPACK_IMPORTED_MODULE_0__.UserCourseComponent }];
let UserCourseRoutingModule = class UserCourseRoutingModule {
};
UserCourseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UserCourseRoutingModule);



/***/ }),

/***/ 99285:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/user-course/user-course.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCourseComponent": () => (/* binding */ UserCourseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-course.component.html?ngResource */ 21766);
/* harmony import */ var _user_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-course.component.scss?ngResource */ 29561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let UserCourseComponent = class UserCourseComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserCourseComponent.ctorParameters = () => [];
UserCourseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-course',
        template: _user_course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserCourseComponent);



/***/ }),

/***/ 38164:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/user-course/user-course.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCourseModule": () => (/* binding */ UserCourseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _user_course_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-course-routing.module */ 5598);
/* harmony import */ var _user_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-course.component */ 99285);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);







let UserCourseModule = class UserCourseModule {
};
UserCourseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_user_course_component__WEBPACK_IMPORTED_MODULE_2__.UserCourseComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _user_course_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserCourseRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule
        ]
    })
], UserCourseModule);



/***/ }),

/***/ 29561:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/user-course/user-course.component.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNvdXJzZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 21766:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/user-course/user-course.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\">\r\n  <app-page-header fallback=\"/SuperAdminPanel\">\r\n    <span page-title>دوره‌های کاربر</span>\r\n  </app-page-header>\r\n</ion-header>\r\n<ion-content>\r\n  <p>user-course works!</p>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_user-course_user-course_module_ts.js.map