"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_tuner-plus_tuner-plus_module_ts"],{

/***/ 89521:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus/tuner-plus-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusRoutingModule": () => (/* binding */ TunerPlusRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tuner_plus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tuner-plus.component */ 53054);




const routes = [{ path: '', component: _tuner_plus_component__WEBPACK_IMPORTED_MODULE_0__.TunerPlusComponent }];
let TunerPlusRoutingModule = class TunerPlusRoutingModule {
};
TunerPlusRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TunerPlusRoutingModule);



/***/ }),

/***/ 53054:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus/tuner-plus.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusComponent": () => (/* binding */ TunerPlusComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tuner_plus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus.component.html?ngResource */ 21469);
/* harmony import */ var _tuner_plus_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus.component.scss?ngResource */ 58672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);












let TunerPlusComponent = class TunerPlusComponent {
  constructor(siteService, fb, toastController, loadingController, alertController, router) {
    this.siteService = siteService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.segmentSelected = 'Add';
    this.accessList = [];
    this.selectedIndex = 0;
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      courseId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]]
    });
    this.updateForm = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      courseId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]]
    });
    this.getData();
  }

  getData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.siteService.GetAllTunerPlusAccess().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.accessList = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onSelect(index) {
    this.selectedIndex = +index;
    this.updateForm.setValue({
      id: this.accessList[+index].id,
      courseId: this.accessList[+index].courseId
    });
  }

  presentAlertConfirm(index) {
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
            _this.onDelete(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    this.selectedIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.siteService.RemoveTunerPlusAccess(this.accessList[this.selectedIndex].id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.updateForm.setValue({
          id: '',
          courseId: ''
        });
        this.getData();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.updateForm.valid || this.selectedIndex != 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.siteService.AddOrUpdateTunerPlusAccess(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.TunerPlusAccessViewModel(this.updateForm.value.id, this.updateForm.value.courseId)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.updateForm.setValue({
            id: '',
            courseId: ''
          });
          this.getData();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd() {
    if (this.addForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.siteService.AddOrUpdateTunerPlusAccess(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.TunerPlusAccessViewModel(0, this.addForm.value.courseId)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            courseId: ''
          });
          this.getData();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

TunerPlusComponent.ctorParameters = () => [{
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
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

TunerPlusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tuner-plus',
  template: _tuner_plus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tuner_plus_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TunerPlusComponent);


/***/ }),

/***/ 84881:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus/tuner-plus.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusModule": () => (/* binding */ TunerPlusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tuner_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus-routing.module */ 89521);
/* harmony import */ var _tuner_plus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus.component */ 53054);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let TunerPlusModule = class TunerPlusModule {
};
TunerPlusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_tuner_plus_component__WEBPACK_IMPORTED_MODULE_2__.TunerPlusComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _tuner_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__.TunerPlusRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], TunerPlusModule);



/***/ }),

/***/ 58672:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus/tuner-plus.component.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dW5lci1wbHVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 21469:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus/tuner-plus.component.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>تیونر پلاس</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\">\r\n        <ion-segment-button value=\"Add\">\r\n          <ion-label>درج</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update\">\r\n          <ion-label>ویرایش</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"onAdd()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج دسترسی</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >کد دوره\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"1\"\r\n                  formControlName=\"courseId\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm.invalid\"\r\n          >\r\n            درج \r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>لیست دسترسی ها</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"accessList.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز دسترسی درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"accessList.length > 0\">\r\n              <ion-item\r\n                *ngFor=\"let access of accessList; let i = index\"\r\n                button\r\n                (click)=\"onSelect(i)\"\r\n              >\r\n                <ion-label>{{ access.courseId }}</ion-label>\r\n                <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateForm\" (ngSubmit)=\"onUpdate()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >کد دوره\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"0\"\r\n                  formControlName=\"courseId\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm.invalid || selectedIndex === 0\"\r\n          >\r\n            ویرایش \r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_tuner-plus_tuner-plus_module_ts.js.map