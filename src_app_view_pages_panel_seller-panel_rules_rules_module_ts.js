"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_rules_rules_module_ts"],{

/***/ 25035:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/rules/rules-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesRoutingModule": () => (/* binding */ RulesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _rules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules.component */ 21636);




const routes = [{ path: '', component: _rules_component__WEBPACK_IMPORTED_MODULE_0__.RulesComponent }];
let RulesRoutingModule = class RulesRoutingModule {
};
RulesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], RulesRoutingModule);



/***/ }),

/***/ 21636:
/*!************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/rules/rules.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesComponent": () => (/* binding */ RulesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rules_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules.component.html?ngResource */ 82923);
/* harmony import */ var _rules_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules.component.scss?ngResource */ 84688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/common/G */ 67122);






let RulesComponent = class RulesComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.link = '';
        this.video = 'brfwi7w';
    }
    ngOnInit() {
        this.link = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.SellerRegisterLink;
        this.video = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.SellerPanelVideo;
    }
    checkURL() {
        let url = 'https://www.aparat.com/video/video/embed/videohash/' +
            this.video +
            '/vt/frame';
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    checkVideoUrl() {
        let url = 'https://www.aparat.com/v/' +
            this.video;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
RulesComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
];
RulesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rules',
        template: _rules_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rules_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RulesComponent);



/***/ }),

/***/ 28734:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/rules/rules.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesModule": () => (/* binding */ RulesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _rules_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules-routing.module */ 25035);
/* harmony import */ var _rules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules.component */ 21636);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let RulesModule = class RulesModule {
};
RulesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_rules_component__WEBPACK_IMPORTED_MODULE_2__.RulesComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _rules_routing_module__WEBPACK_IMPORTED_MODULE_1__.RulesRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], RulesModule);



/***/ }),

/***/ 84688:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/rules/rules.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgLnJhdGlvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgaWZyYW1lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWRlby1zcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDU3JTtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 82923:
/*!*************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/rules/rules.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/SellerPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>قوانین فروشنده</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid class=\"bg\">\r\n      <ion-row>\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\">قوانین فروشنده</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label>ویدیو آموزش پنل فروشنده</ion-label>\r\n                <ion-icon\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"arrow-down-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n          \r\n              <div class=\"h_iframe-aparat_embed_frame\">\r\n                <span class=\"video-span\"></span\r\n                ><iframe\r\n                  [src]=\"checkURL()\"\r\n                  title=\"ویدیو آموزش پنل فروشنده\"\r\n                  allowfullscreen=\"true\"\r\n                  webkitallowfullscreen=\"true\"\r\n                  mozallowfullscreen=\"true\"\r\n                ></iframe>\r\n              </div>\r\n          \r\n              <ion-item>\r\n                <ion-label>{{ \"ویدیو آموزش پنل فروشنده\" }}</ion-label>\r\n                <a\r\n                  class=\"decoration-none\"\r\n                  [href]=\"checkVideoUrl()\"\r\n                  target=\"_blank\"\r\n                  title=\"ویدیو آموزش پنل فروشنده\"\r\n                  ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"download-outline\"\r\n                    ></ion-icon> </ion-button\r\n                ></a>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-text class=\"ion-margin-top\">\r\n                  <ion-text color=\"warning\">\r\n                    <h4><b> موارد زیر را رعایت کنید </b></h4>\r\n                  </ion-text>\r\n                  <br />\r\n                  <p>\r\n                    - ویدئوی معرفی دوره (بالای 5 دقیقه و در حین ضبط صفحه اول سایت\r\n                    باز باشد)\r\n                  </p>\r\n                  <br />\r\n                  <p>- کیفیت صدا و تصویر باید مناسب باشد</p>\r\n                  <br />\r\n                  <p>- سرفصل آموزشی در بخش توضیحات اصلی باشد</p>\r\n                  <br />\r\n                  <p>\r\n                    - برای شروع تدریس در اول آموز باید یک دوره رایگان( بالای 1\r\n                    ساعت ) ارائه دهید.\r\n                  </p>\r\n                  <br />\r\n                  <p>\r\n                    ابتدای هر جلسه باید از صفحه دوره به همراه\r\n                    موشن و روی هر جلسه لوگو واتر مارک باشد\r\n                    <a\r\n                      class=\"decoration-none\"\r\n                      title=\"لینک دانلود\"\r\n                      alt=\"لینک دانلود\"\r\n                      [href]=\"link\"\r\n                      target=\"_blank\"\r\n                      ><ion-text color=\"success\"> (لینک دانلود) </ion-text></a\r\n                    >\r\n                  </p>\r\n                  <br />\r\n                  <ion-text color=\"warning\">\r\n                    <h4><b>نکات </b></h4>\r\n                  </ion-text>\r\n                  <br />\r\n                  <p>دقت داشته باشید دوره شما نباید از قبل در سایت موجود باشد.</p>\r\n                  <br />\r\n                  <p>سر فصل های آموزشی مورد بررسی قرار خواهند گرفت</p>\r\n                  <br />\r\n                  <p>\r\n                    مدرسین قیمت پیشنهادی دوره خود را ارائه داده و پس از بررسی\r\n                    کارشناسان، قیمت گذاری نهایی می گردد.\r\n                  </p>\r\n                  <p>\r\n                    سهم مدرس از فروش هر دوره بصورت پیش فرض 60 درصد میباشد و این سهم قابل تغییر است.\r\n                  </p>\r\n                  <p>\r\n                    اگر مدرس در طول هفته حداقل 1 مقاله منتشر کند، علاوه بر اینکه به بازخورد و اعتبار دوره خود کمک میکند، از سمت اول آموز سهم دوره هایش 10 درصد افزایش میابد.\r\n                  </p>\r\n                  <p>\r\n                    اگر مدرس توانایی و یا فرصت ادیت ویدیو هایش را نداشته باشد، میتواند در قبال کاهش 10 درصد از سهم دوره اش، مسئولیت ادیت ویدیو را به متخصصین اول آموز واگزار کند.\r\n                  </p>\r\n                  <br />\r\n                  <p>\r\n                    دقت داشته باشید دوره ای که در سایت اول آموز درج شود متعلق به\r\n                    اول آموز خواهد بود و تحت هیچ شرایطی از سایت حذف نخواهد شد و\r\n                    اگر مدرس دوره را درسایت و یا جای دیگری منتشر کند دوره در اول آموز رایگان خواهد شد.\r\n                  </p>\r\n                  <br />\r\n                  <p>\r\n                    در صورت شروع دوره باید حداقل هفته ای 3 جلسه توسط مدرس منتشر\r\n                    شود و در غیر اینصورت دوره و مدرس از سایت حذف خواهند شد.\r\n                  </p>\r\n                </ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_rules_rules_module_ts.js.map