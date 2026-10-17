"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_doer_doer_module_ts"],{

/***/ 44503:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/doer/doer-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoerRoutingModule": () => (/* binding */ DoerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _doer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doer.component */ 76604);




const routes = [{ path: '', component: _doer_component__WEBPACK_IMPORTED_MODULE_0__.DoerComponent }];
let DoerRoutingModule = class DoerRoutingModule {
};
DoerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DoerRoutingModule);



/***/ }),

/***/ 76604:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/doer/doer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoerComponent": () => (/* binding */ DoerComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _doer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doer.component.html?ngResource */ 97068);
/* harmony import */ var _doer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doer.component.scss?ngResource */ 72142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);




/* eslint-disable @typescript-eslint/naming-convention */








let DoerComponent = class DoerComponent {
  constructor(sliderService, fb, toastController, loadingController, alertController) {
    this.sliderService = sliderService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.segmentSelected = 'Update';
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      brand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      image: ['Default-Doer', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      addressLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(30)]],
      point: ['5', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(30)]],
      isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.updateForm = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      family: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      brand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      image: ['Default-Doer', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      addressLocation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000000)]],
      instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(30)]],
      order: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(30)]],
      point: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(30)]],
      isActive: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }

  ionViewWillEnter() {
    this.onGetData();
  }

  handleReorder(ev) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    //console.log('Before complete', this.courseDetail.courseVideos);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.doers = ev.detail.complete(this.doers);
    let count = 0;
    this.doers.forEach(c => {
      this.doers[count].order = count;
      count++;
    }); // After complete is called the items will be in the new order
    // console.log('After complete', this.courseDetail.courseVideos);
  }

  onOrderSet() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.AdminUpdateDoerOrder(this.doers).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
        location.reload();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onGetData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.AdminGetAllDoers().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.doers = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onSelect(index) {
    this.updateForm.setValue({
      id: this.doers[+index].id,
      name: this.doers[+index].name,
      family: this.doers[+index].family,
      brand: this.doers[+index].brand,
      image: this.doers[+index].image,
      address: this.doers[+index].address,
      addressLocation: this.doers[+index].addressLocation,
      instagram: this.doers[+index].instagram,
      phone: this.doers[+index].phone,
      isActive: this.doers[+index].isActive,
      order: this.doers[+index].order,
      point: this.doers[+index].point
    });
  }

  onUpdate() {
    if (this.updateForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.sliderService.AddOrUpdateDoer(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.DoerModel(this.updateForm.value.id, this.updateForm.value.name, this.updateForm.value.family, this.updateForm.value.brand, this.updateForm.value.image, this.updateForm.value.address, this.updateForm.value.addressLocation, this.updateForm.value.instagram, this.updateForm.value.phone, this.updateForm.value.isActive, this.updateForm.value.point, this.updateForm.value.order)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          this.updateForm.setValue({
            id: '',
            name: '',
            family: '',
            brand: '',
            image: '',
            address: '',
            addressLocation: '',
            instagram: '',
            phone: '',
            isActive: false,
            order: '',
            point: ''
          });
          this.onGetData();
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
      this.sliderService.AddOrUpdateDoer(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_4__.DoerModel(0, this.addForm.value.name, this.addForm.value.family, this.addForm.value.brand, this.addForm.value.image, this.addForm.value.address, this.addForm.value.addressLocation, this.addForm.value.instagram, this.addForm.value.phone, this.addForm.value.isActive, this.addForm.value.point, 0)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          this.addForm.setValue({
            name: '',
            family: '',
            brand: '',
            image: '',
            address: '',
            addressLocation: '',
            instagram: '',
            phone: '',
            isActive: false,
            point: ''
          });
          this.onGetData();
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

  presentAlertConfirm3() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به آپدیت هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به آپدیت هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this2.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm(id) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.onRemove(+id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemove(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.sliderService.RemoveDoer(id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        this.updateForm.setValue({
          id: '',
          name: '',
          family: '',
          brand: '',
          image: '',
          address: '',
          addressLocation: '',
          instagram: '',
          phone: '',
          isActive: false,
          order: '',
          point: ''
        });
        this.onGetData();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

};

DoerComponent.ctorParameters = () => [{
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

DoerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-doer',
  template: _doer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_doer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DoerComponent);


/***/ }),

/***/ 97161:
/*!************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/doer/doer.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoerModule": () => (/* binding */ DoerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _doer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doer-routing.module */ 44503);
/* harmony import */ var _doer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doer.component */ 76604);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/service/site/Slider.service */ 79519);
/* harmony import */ var src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utility/account.interceptor */ 8363);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);













let DoerModule = class DoerModule {
};
DoerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_doer_component__WEBPACK_IMPORTED_MODULE_2__.DoerComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _doer_routing_module__WEBPACK_IMPORTED_MODULE_1__.DoerRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ],
        providers: [
            _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: src_app_core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_4__.AccountInterceptor,
                multi: true
            }
        ]
    })
], DoerModule);



/***/ }),

/***/ 72142:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/doer/doer.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2VyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 97068:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/doer/doer.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>نمایندگان </span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n    <ion-segment [(ngModel)]=\"segmentSelected\">\r\n      <ion-segment-button value=\"Add\">\r\n        <ion-label>درج</ion-label>\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Update\">\r\n        <ion-label>ویرایش</ion-label>\r\n        <ion-icon name=\"sync-outline\"></ion-icon>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <ion-grid style=\"padding: 0px !important\" class=\"ion-margin-top\" class=\"bg\">\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج نماینده</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام خانوادگی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام خانوادگی\"\r\n                  formControlName=\"family\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >برند\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"برند\"\r\n                  formControlName=\"brand\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شماره موبایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"شماره موبایل\"\r\n                  formControlName=\"phone\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >امتیاز از 5\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"5\"\r\n                  formControlName=\"point\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"آدرس\"\r\n                  formControlName=\"address\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >لینک آدرس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"addressLocation\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >عکس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"image\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >اینستاگرام\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"instagram\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>فعال؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isActive\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card *ngIf=\"doers\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>لینک ها</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"doers.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز نماینده ای درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <ion-button\r\n              *ngIf=\"doers.length > 0\"\r\n              class=\"ion-margin\"\r\n              (click)=\"onOrderSet()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"warning\"\r\n            >\r\n              درج ترتیب نماینده ها\r\n            </ion-button>\r\n            <div *ngIf=\"doers.length > 0\">\r\n              <ion-reorder-group\r\n                [disabled]=\"false\"\r\n                (ionItemReorder)=\"handleReorder($any($event))\"\r\n              >\r\n              <ion-item\r\n                *ngFor=\"let doer of doers; let i = index\"\r\n                button\r\n                (click)=\"onSelect(i)\"\r\n              >\r\n                <ion-label>{{ (i+1) + '- ' + doer.name + ' ' + doer.family }}</ion-label>\r\n                <ion-button (click)=\"presentAlertConfirm(doer.id)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n                  <ion-reorder slot=\"end\"></ion-reorder>\r\n              </ion-item>\r\n              </ion-reorder-group>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام خانوادگی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام خانوادگی\"\r\n                  formControlName=\"family\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >برند\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"برند\"\r\n                  formControlName=\"brand\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شماره موبایل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"شماره موبایل\"\r\n                  formControlName=\"phone\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >آدرس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"آدرس\"\r\n                  formControlName=\"address\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >لینک آدرس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"addressLocation\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >عکس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"image\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >اینستاگرام\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"http://...\"\r\n                  formControlName=\"instagram\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n              </ion-item><ion-item>\r\n                <ion-label position=\"floating\" color=\"light\">اولویت </ion-label>\r\n                <ion-input\r\n                  [disabled]=\"true\"\r\n                  placeholder=\"0\"\r\n                  formControlName=\"order\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"reorder-two-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >امتیاز از 5\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"5\"\r\n                  formControlName=\"point\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>فعال؟</ion-label>\r\n                <ion-checkbox\r\n                  formControlName=\"isActive\"\r\n                  slot=\"start\"\r\n                ></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm.invalid\"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_doer_doer_module_ts.js.map