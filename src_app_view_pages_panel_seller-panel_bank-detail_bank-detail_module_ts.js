"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_bank-detail_bank-detail_module_ts"],{

/***/ 54152:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/bank-detail/bank-detail-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailRoutingModule": () => (/* binding */ BankDetailRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bank_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-detail.component */ 98237);




const routes = [{ path: '', component: _bank_detail_component__WEBPACK_IMPORTED_MODULE_0__.BankDetailComponent }];
let BankDetailRoutingModule = class BankDetailRoutingModule {
};
BankDetailRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], BankDetailRoutingModule);



/***/ }),

/***/ 98237:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/bank-detail/bank-detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailComponent": () => (/* binding */ BankDetailComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bank_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-detail.component.html?ngResource */ 1374);
/* harmony import */ var _bank_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-detail.component.scss?ngResource */ 50955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/common/BaseModel */ 55937);
/* harmony import */ var src_app_data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/user/user.service */ 55007);











let BankDetailComponent = class BankDetailComponent {
  constructor(userService, fb, toastController, loadingController, alertController) {
    this.userService = userService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.addMode = false;
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]],
      bankName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      bankBranchName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      bankBranchCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      cardCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      shebaCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      accountCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      accountType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]]
    });
  }

  ionViewWillEnter() {
    this.onGetData();
  }

  presentAlertConfirm() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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
            _this.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onGetData() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.userService.GetSellerUserBankDetail().subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.bankDetail = res.data;
        this.form.setValue({
          id: res.data.id,
          bankName: res.data.bankName,
          bankBranchName: res.data.bankBranchName,
          bankBranchCode: res.data.bankBranchCode,
          cardCode: res.data.cardCode,
          shebaCode: res.data.shebaCode,
          accountCode: res.data.accountCode,
          accountType: res.data.accountType
        });
      } else {
        this.addMode = true;
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.form.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.userService.AddOrUpdateSellerUserBankDetail(new src_app_data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_5__.BankDetailModel(this.addMode ? 0 : this.form.value.id, this.form.value.bankName, this.form.value.bankBranchName, this.form.value.bankBranchCode, this.form.value.cardCode, this.form.value.shebaCode, this.form.value.accountCode, this.form.value.accountType)).subscribe(res2 => {
        if (res2.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.userService.GetSellerUserBankDetail().subscribe(res => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
              this.bankDetail = res.data;
              this.addMode = false;
              this.form.setValue({
                id: res.data.id,
                bankName: res.data.bankName,
                bankBranchName: res.data.bankBranchName,
                bankBranchCode: res.data.bankBranchCode,
                cardCode: res.data.cardCode,
                shebaCode: res.data.shebaCode,
                accountCode: res.data.accountCode,
                accountType: res.data.accountType
              });
            } else {
              this.addMode = true;
            }
          }, err => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
          });
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

BankDetailComponent.ctorParameters = () => [{
  type: src_app_data_service_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

BankDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-bank-detail',
  template: _bank_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_bank_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BankDetailComponent);


/***/ }),

/***/ 38801:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/bank-detail/bank-detail.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailModule": () => (/* binding */ BankDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _bank_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-detail-routing.module */ 54152);
/* harmony import */ var _bank_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-detail.component */ 98237);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let BankDetailModule = class BankDetailModule {
};
BankDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_bank_detail_component__WEBPACK_IMPORTED_MODULE_2__.BankDetailComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _bank_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.BankDetailRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], BankDetailModule);



/***/ }),

/***/ 50955:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/bank-detail/bank-detail.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1374:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/bank-detail/bank-detail.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SellerPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ویرایش مشخصات بانکی</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"bankDetail || addMode\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col\r\n        size=\"12\"\r\n        size-md=\"10\"\r\n        size-lg=\"8\"\r\n        offset=\"0\"\r\n        offset-md=\"1\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-item class=\"text-center\">\r\n            <ion-label> مشخصات حساب باید به نام خودتان باشد</ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >وجه های درخواستی به این حساب واریز خواهند شد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">مشخصات بانکی</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >نام بانک\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"نام بانک را وارد کنید\"\r\n                    formControlName=\"bankName\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"business-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >نام شعبه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"نام شعبه را وارد کنید\"\r\n                    formControlName=\"bankBranchName\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"business-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کد شعبه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"کد شعبه را وارد کنید\"\r\n                    formControlName=\"bankBranchCode\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"barcode-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >شماره کارت\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"شماره کارت خود را وارد کنید\"\r\n                    formControlName=\"cardCode\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"card-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >شماره شبا\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"شماره شبا خود را وارد کنید\"\r\n                    formControlName=\"shebaCode\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"create-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >شماره حساب\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"شماره حساب خود را وارد کنید\"\r\n                    formControlName=\"accountCode\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"create-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >نوع حساب\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"نوع حساب خود را وارد کنید\"\r\n                    formControlName=\"accountType\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"documents-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              {{ addMode ? \"درج مشخصات\" : \"ویرایش مشخصات\" }}\r\n            </ion-button>\r\n          </ion-toolbar>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_bank-detail_bank-detail_module_ts.js.map