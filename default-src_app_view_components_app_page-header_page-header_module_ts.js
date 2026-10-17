"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_view_components_app_page-header_page-header_module_ts"],{

/***/ 69029:
/*!**************************************************************************!*\
  !*** ./src/app/view/components/app/page-header/page-header.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component.html?ngResource */ 86871);
/* harmony import */ var _page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss?ngResource */ 51910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/i18n/site-language.service */ 37159);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);









let PageHeaderComponent = class PageHeaderComponent {
    constructor(language) {
        this.language = language;
        this.titleKey = '';
        this.fallback = '/';
        this.defaultBack = true;
        this.cartCount$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.getCartCoursesCount(),
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.getCartProductsCount()
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([courses, products]) => courses + products));
    }
    get loggedIn() { return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__.GAccount.IsLoggedIn(); }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_2__.SiteLanguageService }
];
PageHeaderComponent.propDecorators = {
    titleKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    fallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    defaultBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-page-header',
        template: _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageHeaderComponent);



/***/ }),

/***/ 19916:
/*!***********************************************************************!*\
  !*** ./src/app/view/components/app/page-header/page-header.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": () => (/* binding */ PageHeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/site-i18n.module */ 58586);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component */ 69029);







let PageHeaderModule = class PageHeaderModule {
};
PageHeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_0__.SiteI18nModule],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent]
    })
], PageHeaderModule);



/***/ }),

/***/ 51910:
/*!***************************************************************************************!*\
  !*** ./src/app/view/components/app/page-header/page-header.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n}\n\n.interior-nav-shell {\n  direction: ltr;\n  max-width: 1360px;\n  min-height: 72px;\n  margin: 0 auto;\n  padding: 12px clamp(14px, 2.5vw, 28px);\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 360px) minmax(0, 1fr);\n  align-items: center;\n  gap: 16px;\n}\n\n.interior-nav-start, .interior-nav-actions, .interior-back {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n\n.interior-nav-start {\n  grid-column: 1;\n}\n\n.interior-nav-actions {\n  grid-column: 3;\n  justify-self: end;\n  flex-shrink: 0;\n}\n\n.interior-back:empty {\n  display: none;\n}\n\n.interior-page-heading {\n  grid-column: 2;\n  min-width: 0;\n  overflow: hidden;\n  color: #1e1b4b;\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.35;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.interior-brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n  text-decoration: none;\n}\n\n.interior-brand-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 72px;\n  height: 46px;\n  padding: 3px 8px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid rgba(109, 40, 217, 0.15);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.interior-brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n\n.interior-brand-copy {\n  min-width: 0;\n  text-align: start;\n}\n\n.interior-brand-copy b {\n  display: block;\n  color: #6d28d9;\n  font-size: 20px;\n  font-weight: 900;\n  line-height: 1.25;\n  white-space: nowrap;\n}\n\n.interior-cart {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  min-height: 40px;\n  border: 1px solid #ede9f6;\n  border-radius: 12px;\n  color: #6d28d9;\n  background: rgba(109, 40, 217, 0.04);\n  text-decoration: none;\n}\n\n.interior-cart ion-icon {\n  font-size: 20px;\n}\n\n.interior-cart-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  display: grid;\n  place-items: center;\n  min-width: 19px;\n  height: 19px;\n  padding: 0 4px;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  background: #e11d48;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1;\n  pointer-events: none;\n}\n\n.interior-header-extra:empty {\n  display: none;\n}\n\n:host-context(.dark-theme) .interior-brand-copy b {\n  color: #c4b5fd;\n}\n\n:host-context(.dark-theme) .interior-page-heading {\n  color: #f1edf9;\n}\n\n:host-context(.dark-theme) .interior-cart {\n  color: #c4b5fd;\n  background: rgba(139, 92, 246, 0.1);\n  border-color: #39314f;\n}\n\n:host-context(.dark-theme) .interior-cart-badge {\n  border-color: #181528;\n}\n\n@media (max-width: 650px) {\n  .interior-nav-shell {\n    min-height: 0;\n    padding: 8px 12px 10px;\n    grid-template-columns: minmax(0, 1fr) auto;\n    grid-template-rows: auto auto;\n    gap: 5px 8px;\n  }\n\n  .interior-nav-start, .interior-nav-actions {\n    gap: 6px;\n  }\n\n  .interior-nav-start {\n    grid-column: 1;\n    grid-row: 1;\n    min-width: 0;\n  }\n\n  .interior-nav-actions {\n    grid-column: 2;\n    grid-row: 1;\n  }\n\n  .interior-page-heading {\n    grid-column: 1/-1;\n    grid-row: 2;\n    justify-self: center;\n    max-width: 100%;\n    padding-inline: 8px;\n    font-size: 13px;\n  }\n\n  .interior-brand {\n    gap: 6px;\n  }\n\n  .interior-brand-logo {\n    width: 56px;\n    height: 38px;\n    border-radius: 10px;\n    padding: 2px 5px;\n  }\n  .interior-brand-logo img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .interior-brand-copy b {\n    font-size: 16px;\n  }\n}\n\n@media (max-width: 360px) {\n  .interior-brand-logo {\n    display: none;\n  }\n\n  .interior-brand-copy b {\n    font-size: 15px;\n  }\n}\n\n@media (max-width: 390px) {\n  .interior-nav-shell {\n    padding-inline: 8px;\n  }\n\n  .interior-nav-start {\n    gap: 4px;\n  }\n\n  .interior-nav-actions {\n    gap: 4px;\n  }\n\n  .interior-page-heading {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsY0FBQTtBQUVSOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EscUVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFBc0IsY0FBQTtBQUl0Qjs7QUFIQTtFQUF3QixjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLGNBQUE7QUFTM0Q7O0FBUkE7RUFBdUIsYUFBQTtBQVl2Qjs7QUFWQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFhRjs7QUFWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtBQWFGOztBQVhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFUQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQVlGOztBQVhFO0VBQUksY0FBQTtFQUFnQixjQUFBO0VBQWdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsbUJBQUE7QUFtQjVGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBbUJGOztBQWxCRTtFQUFXLGVBQUE7QUFxQmI7O0FBbEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFxQkY7O0FBbEJBO0VBQStCLGFBQUE7QUFzQi9COztBQW5CRTtFQUF5QixjQUFBO0FBdUIzQjs7QUF0QkU7RUFBeUIsY0FBQTtBQXlCM0I7O0FBeEJFO0VBQWlCLGNBQUE7RUFBZ0IsbUNBQUE7RUFBb0MscUJBQUE7QUE2QnZFOztBQTVCRTtFQUF1QixxQkFBQTtBQStCekI7O0FBNUJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQ0FBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQStCRjs7RUE3QkE7SUFBNkMsUUFBQTtFQWlDN0M7O0VBaENBO0lBQXNCLGNBQUE7SUFBZ0IsV0FBQTtJQUFhLFlBQUE7RUFzQ25EOztFQXJDQTtJQUF3QixjQUFBO0lBQWdCLFdBQUE7RUEwQ3hDOztFQXpDQTtJQUF5QixpQkFBQTtJQUFxQixXQUFBO0lBQWEsb0JBQUE7SUFBc0IsZUFBQTtJQUFpQixtQkFBQTtJQUFxQixlQUFBO0VBa0R2SDs7RUFqREE7SUFBa0IsUUFBQTtFQXFEbEI7O0VBcERBO0lBQXVCLFdBQUE7SUFBYSxZQUFBO0lBQWMsbUJBQUE7SUFBcUIsZ0JBQUE7RUEyRHZFO0VBM0R5RjtJQUFNLFdBQUE7SUFBYSxZQUFBO0VBK0Q1Rzs7RUE5REE7SUFBeUIsZUFBQTtFQWtFekI7QUFDRjs7QUFoRUE7RUFDRTtJQUF1QixhQUFBO0VBbUV2Qjs7RUFsRUE7SUFBeUIsZUFBQTtFQXNFekI7QUFDRjs7QUFwRUE7RUFDRTtJQUFzQixtQkFBQTtFQXVFdEI7O0VBdEVBO0lBQXNCLFFBQUE7RUEwRXRCOztFQXpFQTtJQUF3QixRQUFBO0VBNkV4Qjs7RUE1RUE7SUFBeUIsZUFBQTtFQWdGekI7QUFDRiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cclxuXHJcbi5pbnRlcmlvci1uYXYtc2hlbGwge1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIG1heC13aWR0aDogMTM2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDcycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTJweCBjbGFtcCgxNHB4LCAyLjV2dywgMjhweCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAzNjBweCkgbWlubWF4KDAsIDFmcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5pbnRlcmlvci1uYXYtc3RhcnQsIC5pbnRlcmlvci1uYXYtYWN0aW9ucywgLmludGVyaW9yLWJhY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW50ZXJpb3ItbmF2LXN0YXJ0IHsgZ3JpZC1jb2x1bW46IDE7IH1cclxuLmludGVyaW9yLW5hdi1hY3Rpb25zIHsgZ3JpZC1jb2x1bW46IDM7IGp1c3RpZnktc2VsZjogZW5kOyBmbGV4LXNocmluazogMDsgfVxyXG4uaW50ZXJpb3ItYmFjazplbXB0eSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5pbnRlcmlvci1wYWdlLWhlYWRpbmcge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiAjMWUxYjRiO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uaW50ZXJpb3ItYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmludGVyaW9yLWJyYW5kLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDksIDQwLCAyMTcsIC4xNSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5pbnRlcmlvci1icmFuZC1jb3B5IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgYiB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogIzZkMjhkOTsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogOTAwOyBsaW5lLWhlaWdodDogMS4yNTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG59XHJcblxyXG4uaW50ZXJpb3ItY2FydCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlOWY2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6ICM2ZDI4ZDk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDksIDQwLCAyMTcsIC4wNCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAyMHB4OyB9XHJcbn1cclxuXHJcbi5pbnRlcmlvci1jYXJ0LWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDE5cHg7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTExZDQ4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaW50ZXJpb3ItaGVhZGVyLWV4dHJhOmVtcHR5IHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xyXG4gIC5pbnRlcmlvci1icmFuZC1jb3B5IGIgeyBjb2xvcjogI2M0YjVmZDsgfVxyXG4gIC5pbnRlcmlvci1wYWdlLWhlYWRpbmcgeyBjb2xvcjogI2YxZWRmOTsgfVxyXG4gIC5pbnRlcmlvci1jYXJ0IHsgY29sb3I6ICNjNGI1ZmQ7IGJhY2tncm91bmQ6IHJnYmEoMTM5LCA5MiwgMjQ2LCAuMSk7IGJvcmRlci1jb2xvcjogIzM5MzE0ZjsgfVxyXG4gIC5pbnRlcmlvci1jYXJ0LWJhZGdlIHsgYm9yZGVyLWNvbG9yOiAjMTgxNTI4OyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5pbnRlcmlvci1uYXYtc2hlbGwge1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICAgIGdhcDogNXB4IDhweDtcclxuICB9XHJcbiAgLmludGVyaW9yLW5hdi1zdGFydCwgLmludGVyaW9yLW5hdi1hY3Rpb25zIHsgZ2FwOiA2cHg7IH1cclxuICAuaW50ZXJpb3ItbmF2LXN0YXJ0IHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuICAuaW50ZXJpb3ItbmF2LWFjdGlvbnMgeyBncmlkLWNvbHVtbjogMjsgZ3JpZC1yb3c6IDE7IH1cclxuICAuaW50ZXJpb3ItcGFnZS1oZWFkaW5nIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgZ3JpZC1yb3c6IDI7IGp1c3RpZnktc2VsZjogY2VudGVyOyBtYXgtd2lkdGg6IDEwMCU7IHBhZGRpbmctaW5saW5lOiA4cHg7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG4gIC5pbnRlcmlvci1icmFuZCB7IGdhcDogNnB4OyB9XHJcbiAgLmludGVyaW9yLWJyYW5kLWxvZ28geyB3aWR0aDogNTZweDsgaGVpZ2h0OiAzOHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiAycHggNXB4OyBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9IH1cclxuICAuaW50ZXJpb3ItYnJhbmQtY29weSBiIHsgZm9udC1zaXplOiAxNnB4OyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC5pbnRlcmlvci1icmFuZC1sb2dvIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5pbnRlcmlvci1icmFuZC1jb3B5IGIgeyBmb250LXNpemU6IDE1cHg7IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XHJcbiAgLmludGVyaW9yLW5hdi1zaGVsbCB7IHBhZGRpbmctaW5saW5lOiA4cHg7IH1cclxuICAuaW50ZXJpb3ItbmF2LXN0YXJ0IHsgZ2FwOiA0cHg7IH1cclxuICAuaW50ZXJpb3ItbmF2LWFjdGlvbnMgeyBnYXA6IDRweDsgfVxyXG4gIC5pbnRlcmlvci1wYWdlLWhlYWRpbmcgeyBmb250LXNpemU6IDEycHg7IH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 86871:
/*!***************************************************************************************!*\
  !*** ./src/app/view/components/app/page-header/page-header.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"interior-nav-shell\">\n  <div class=\"interior-nav-start\">\n    <div class=\"interior-back\">\n      <ion-buttons *ngIf=\"defaultBack\">\n        <ion-back-button text=\"\" icon=\"arrow-back-outline\" [defaultHref]=\"language.url(fallback)\" [attr.aria-label]=\"'pageHeader.back' | translate\"></ion-back-button>\n      </ion-buttons>\n      <ng-content select=\"[page-back]\"></ng-content>\n    </div>\n    <a class=\"interior-brand avalamooz-brand\" [routerLink]=\"language.url('/')\" [attr.aria-label]=\"'learn.brand' | translate\">\n      <span class=\"interior-brand-logo avalamooz-logo-frame\"><img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" /></span>\n      <span class=\"interior-brand-copy\" [attr.dir]=\"language.direction\">\n        <b>{{ 'learn.brand' | translate }}</b>\n      </span>\n    </a>\n  </div>\n  <div class=\"interior-page-heading\" [attr.dir]=\"language.direction\">\n    <ng-content select=\"[page-title]\"></ng-content>\n    <span *ngIf=\"titleKey\">{{ titleKey | translate }}</span>\n  </div>\n  <div class=\"interior-nav-actions\">\n    <ng-content select=\"[page-actions]\"></ng-content>\n    <a class=\"interior-cart\" [routerLink]=\"language.url('/Cart')\" [attr.aria-label]=\"'common.cart' | translate\" [title]=\"'common.cart' | translate\">\n      <ion-icon name=\"bag-handle-outline\" aria-hidden=\"true\"></ion-icon>\n      <span class=\"interior-cart-badge\" *ngIf=\"loggedIn && (cartCount$ | async) as cartCount\">{{ cartCount }}</span>\n    </a>\n    <ion-buttons class=\"interior-menu\"><ion-menu-button [autoHide]=\"false\" [attr.aria-label]=\"'learn.navigation' | translate\"></ion-menu-button></ion-buttons>\n  </div>\n</div>\n<div class=\"interior-header-extra\"><ng-content></ng-content></div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_view_components_app_page-header_page-header_module_ts.js.map