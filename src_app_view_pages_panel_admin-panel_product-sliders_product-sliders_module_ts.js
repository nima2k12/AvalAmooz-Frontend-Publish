"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_product-sliders_product-sliders_module_ts"],{

/***/ 95925:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-sliders/product-sliders-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSlidersPageRoutingModule": () => (/* binding */ ProductSlidersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_sliders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-sliders.component */ 91377);




const routes = [
    {
        path: '',
        component: _product_sliders_component__WEBPACK_IMPORTED_MODULE_0__.ProductSlidersPage
    }
];
let ProductSlidersPageRoutingModule = class ProductSlidersPageRoutingModule {
};
ProductSlidersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductSlidersPageRoutingModule);



/***/ }),

/***/ 91377:
/*!*******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-sliders/product-sliders.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSlidersPage": () => (/* binding */ ProductSlidersPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-sliders.component.html?ngResource */ 89823);
/* harmony import */ var _product_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-sliders.component.scss?ngResource */ 32204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/site/Slider.service */ 79519);




/* eslint-disable max-len */









let ProductSlidersPage = class ProductSlidersPage {
  constructor(fb, sliderService, toastController, loadingController, router, alertController) {
    this.fb = fb;
    this.sliderService = sliderService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.router = router;
    this.alertController = alertController;
    this.selectedId = 0;
    this.sliders = [];
    this.isSelected = false;
    this.selectedCategory = 'add';
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2000)]],
      link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(1000)]],
      imageName: ['', []],
      imageNamePhone: ['', []],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]],
      isCourse: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      isProduct: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.GetAllAdminSliders().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.sliders = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onSelected(index) {
    const model = this.sliders[index];
    this.selectedId = model.id;
    this.form.setValue({
      title: model.title,
      description: model.description,
      link: model.link,
      isCourse: model.isCourse,
      isProduct: model.isProduct,
      imageName: model.imageName,
      imageNamePhone: model.imageNamePhone
    });
    this.isSelected = true;
  }

  presentAlertConfirm3() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به درج هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this.onAddTags();
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
            _this2.onUpdateTags();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onRemoveEditTag(index) {
    const model = this.sliders[+index];
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.RemoveSlide(model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.sliders[+index].isDelete = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActive(index) {
    const model = this.sliders[+index];
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.ActiveSlide(model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        this.sliders[+index].isDelete = false;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onCancel() {
    this.isSelected = false;
  }

  onUpdateTags() {
    if (!this.form.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.sliderService.AddOrUpdateSlider(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_5__.SliderModel(this.selectedId, this.form.value.title, this.form.value.imageName, this.form.value.imageNamePhone, this.form.value.link, this.form.value.description, this.form.value.isCourse, this.form.value.isProduct)).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        const index = this.sliders.findIndex(e => e.id === this.selectedId);
        this.sliders[index].description = this.form.value.description;
        this.sliders[index].title = this.form.value.title;
        this.sliders[index].link = this.form.value.link;
        this.sliders[index].isCourse = this.form.value.isCourse;
        this.sliders[index].isProduct = this.form.value.isProduct;
        this.sliders[index].imageName = this.form.value.imageName;
        this.sliders[index].imageNamePhone = this.form.value.imageNamePhone;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onAddTags() {
    if (!this.form.valid) {
      return;
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    const model = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_5__.SliderModel(0, this.form.value.title, this.form.value.imageName, this.form.value.imageNamePhone, this.form.value.link, this.form.value.description, this.form.value.isCourse, this.form.value.isProduct);
    this.sliderService.AddOrUpdateSlider(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
        model.id = res.data;
        this.sliders.push(model);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentRemoveAlertConfirm(index) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this3.onRemoveEditTag(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentRemoveAlertConfirm2(index) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال سازی هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'فعال',
          handler: () => {
            _this4.onActive(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSelectItem(id) {
    this.selectedId = +id;
    this.form.setValue({
      title: this.sliders.find(e => e.id === id).title,
      description: this.sliders.find(e => e.id === id).description,
      link: this.sliders.find(e => e.id === id).link,
      isCourse: this.sliders.find(e => e.id === id).isCourse,
      isProduct: this.sliders.find(e => e.id === id).isProduct,
      imageName: this.sliders.find(e => e.id === id).imageName,
      imageNamePhone: this.sliders.find(e => e.id === id).imageNamePhone
    });
    this.isSelected = true;
  }

};

ProductSlidersPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_6__.SliderService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

ProductSlidersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-product-sliders',
  template: _product_sliders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_sliders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductSlidersPage);


/***/ }),

/***/ 46591:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-sliders/product-sliders.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSlidersPageModule": () => (/* binding */ ProductSlidersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _product_sliders_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-sliders-routing.module */ 95925);
/* harmony import */ var _product_sliders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-sliders.component */ 91377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);












let ProductSlidersPageModule = class ProductSlidersPageModule {
};
ProductSlidersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _product_sliders_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductSlidersPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_product_sliders_component__WEBPACK_IMPORTED_MODULE_2__.ProductSlidersPage]
    })
], ProductSlidersPageModule);



/***/ }),

/***/ 32204:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-sliders/product-sliders.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNsaWRlcnMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 89823:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-sliders/product-sliders.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>بنر کالا ها</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar\r\n    color=\"primary\"\r\n    class=\"ion-margin-top\"\r\n    dir=\"rtl\"\r\n  >\r\n    <ion-segment [(ngModel)]=\"selectedCategory\">\r\n      <ion-segment-button value=\"add\">\r\n        <ion-icon name=\"build-outline\"></ion-icon>\r\n        <ion-label>درج</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"edit\">\r\n        <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n        <ion-label>ویرایش</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>کالا ها</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div dir=\"rtl\">\r\n              <div *ngIf=\"selectedCategory === 'add'\">\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n                  <ion-list>\r\n                    <ion-list-header>\r\n                      <ion-label>درج</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >عنوان\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"title\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"warning\" slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >آدرس تصویر\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"imageName\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"success\" slot=\"start\" name=\"image-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >آدرس تصویر موبایل\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"imageNamePhone\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"success\" slot=\"start\" name=\"image-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >لینک\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"link\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"telegram\" slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>برای آموزشگاه؟</ion-label>\r\n                      <ion-checkbox\r\n                        formControlName=\"isCourse\"\r\n                        slot=\"start\"\r\n                      ></ion-checkbox>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>برای فروشگاه؟</ion-label>\r\n                      <ion-checkbox\r\n                        formControlName=\"isProduct\"\r\n                        slot=\"start\"\r\n                      ></ion-checkbox>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >توضیحات\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"description\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"light\" slot=\"start\" name=\"document-text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"form.invalid\"\r\n                  >\r\n                  درج\r\n                  </ion-button>\r\n                </form>\r\n              </div>\r\n\r\n              <div *ngIf=\"selectedCategory === 'edit'\" dir=\"rtl\">\r\n                <ion-list *ngIf=\"sliders.length > 0\">\r\n                  <ion-list-header>\r\n                    <ion-label>بنر های کالا</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item\r\n                    button\r\n                    (click)=\"onSelected(i)\"\r\n                    *ngFor=\"let slide of sliders; let i = index\"\r\n                  >\r\n                    <ion-label>{{ slide.title }}</ion-label>\r\n                    <ion-button *ngIf=\"!slide.isDelete\" (click)=\"presentRemoveAlertConfirm(i)\">\r\n                      <ion-icon\r\n                        slot=\"icon-only\"\r\n                        name=\"trash-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button color=\"success\" *ngIf=\"slide.isDelete\" (click)=\"presentRemoveAlertConfirm2(i)\">\r\n                      <ion-icon\r\n                        slot=\"icon-only\"\r\n                        name=\"aperture-outline\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-item>\r\n                </ion-list>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n                  <ion-list>\r\n                    <ion-list-header>\r\n                      <ion-label>ویرایش</ion-label>\r\n                    </ion-list-header>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >عنوان\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"title\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"warning\" slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >آدرس تصویر\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"imageName\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"success\" slot=\"start\" name=\"image-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >آدرس تصویر موبایل\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"imageNamePhone\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"success\" slot=\"start\" name=\"image-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >لینک\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"link\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"telegram\" slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>برای آموزشگاه؟</ion-label>\r\n                      <ion-checkbox\r\n                        formControlName=\"isCourse\"\r\n                        slot=\"start\"\r\n                      ></ion-checkbox>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>برای فروشگاه؟</ion-label>\r\n                      <ion-checkbox\r\n                        formControlName=\"isProduct\"\r\n                        slot=\"start\"\r\n                      ></ion-checkbox>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\" color=\"light\"\r\n                        >توضیحات\r\n                      </ion-label>\r\n                      <ion-input formControlName=\"description\" type=\"text\"></ion-input>\r\n                      <ion-icon color=\"light\" slot=\"start\" name=\"document-text-outline\"></ion-icon>\r\n                    </ion-item>\r\n                  </ion-list>\r\n\r\n                  <ion-button\r\n                    class=\"ion-margin\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"form.invalid\"\r\n                  >\r\n                    اعمال ویرایش\r\n                  </ion-button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_product-sliders_product-sliders_module_ts.js.map