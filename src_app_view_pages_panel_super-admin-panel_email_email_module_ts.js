"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_email_email_module_ts"],{

/***/ 96221:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/email/email-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRoutingModule": () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ 1625);




const routes = [{ path: '', component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent }];
let EmailRoutingModule = class EmailRoutingModule {
};
EmailRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], EmailRoutingModule);



/***/ }),

/***/ 1625:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/email/email.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.component.html?ngResource */ 11858);
/* harmony import */ var _email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.component.scss?ngResource */ 3751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_person_AdminModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/person/AdminModel */ 94250);
/* harmony import */ var src_app_data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/admin/admin.service */ 94733);












let EmailComponent = class EmailComponent {
  constructor(adminService, fb, toastController, loadingController, alertController, router) {
    this.adminService = adminService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'متن...',
      translate: 'no',
      sanitize: true
    };
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      isVerified: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }

  presentAlertConfirmOnSend() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this.onSend();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSend() {
    if (this.form.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.adminService.AdminSendEmailToUsers(new src_app_data_model_person_AdminModel__WEBPACK_IMPORTED_MODULE_5__.AdminEmailModel(this.form.value.title, this.form.value.description, this.form.value.isVerified, 0)).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.form.setValue({
            title: '',
            description: '',
            isVerified: true
          });
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
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

EmailComponent.ctorParameters = () => [{
  type: src_app_data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__.AdminService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

EmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-email',
  template: _email_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_email_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EmailComponent);


/***/ }),

/***/ 77274:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/email/email.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-routing.module */ 96221);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.component */ 1625);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility/account.interceptor */ 8363);
/* harmony import */ var src_app_data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/admin/admin.service */ 94733);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);














let EmailModule = class EmailModule {
};
EmailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_email_component__WEBPACK_IMPORTED_MODULE_2__.EmailComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__.AngularEditorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ],
        providers: [
            src_app_data_service_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__.AdminService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_5__.AccountInterceptor,
                multi: true
            }
        ]
    })
], EmailModule);



/***/ }),

/***/ 3751:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/email/email.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 11858:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/email/email.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ارسال ایمیل</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirmOnSend()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ارسال ایمیل</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">عنوان </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان\"\r\n                  formControlName=\"title\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label color=\"light\" position=\"stacked\"\r\n                  >متن\r\n                </ion-label>\r\n                <br />\r\n                <angular-editor\r\n                  id=\"editor12\"\r\n                  formControlName=\"description\"\r\n                  [config]=\"editorConfig\"\r\n                ></angular-editor>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >ایمیل های تایید شده؟\r\n                </ion-label>\r\n                <ion-checkbox formControlName=\"isVerified\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              ارسال\r\n            </ion-button>\r\n          </ion-card>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_email_email_module_ts.js.map