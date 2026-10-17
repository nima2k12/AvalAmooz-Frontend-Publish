"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_add-product_add-product_module_ts"],{

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

/***/ 51567:
/*!***************************************************************!*\
  !*** ./src/app/data/model/product/AddOrUpdateProductModel.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrUpdateProductImageModel": () => (/* binding */ AddOrUpdateProductImageModel),
/* harmony export */   "AddOrUpdateProductModel": () => (/* binding */ AddOrUpdateProductModel),
/* harmony export */   "AddOrUpdateProductVideoModel": () => (/* binding */ AddOrUpdateProductVideoModel),
/* harmony export */   "FurtherDetailViewModel": () => (/* binding */ FurtherDetailViewModel),
/* harmony export */   "ProductDesignViewModel": () => (/* binding */ ProductDesignViewModel),
/* harmony export */   "ProductImageModel": () => (/* binding */ ProductImageModel),
/* harmony export */   "ProductVideoModel": () => (/* binding */ ProductVideoModel)
/* harmony export */ });
class AddOrUpdateProductModel {
    constructor(productId, productName, referableReducePrice, referableReducePercent, sendTime, count, price, offPrice, guaranteeDescription, referableDescription, shortDescription, description, imageName, imageNamePNG, isPostSend, isTipaxSend, isTipaxSoRentSend, isBurberrySend, isBikeDeliverySend, isExists, isShow, isCorrupt, isSpecial, madeByAvalAmooz, referable, consumption, hasSeveralDesigns, hasGuarantee, hasPrivateDownloadLinks, hasDiscountLargeOrder, hasDiscountForEachOrder, discountPrice, maxDiscountPrice, discountPercent, maxDiscountPercent, discountOrderCount, isOffPrice, point, weight, isEdited, isActive, isUsed, isFreeSend, isWholesale, categoryIds, isOwnDeliverySend, isSpecialPostSend, hasExtraDeliveryPrice, extraDeliveryPrice, portionPercent, portionPrice, isCallOnly) {
        this.isCallOnly = isCallOnly;
        this.portionPercent = portionPercent ? portionPercent : 0;
        this.portionPrice = portionPrice ? portionPrice : 0;
        this.isTipaxSoRentSend = isTipaxSoRentSend;
        this.hasExtraDeliveryPrice = hasExtraDeliveryPrice;
        this.extraDeliveryPrice = extraDeliveryPrice;
        this.productId = productId;
        this.productName = productName;
        this.isSpecialPostSend = isSpecialPostSend;
        this.isOwnDeliverySend = isOwnDeliverySend;
        this.referableReducePrice = referableReducePrice;
        this.referableReducePercent = referableReducePercent;
        this.sendTime = sendTime;
        this.count = count;
        this.price = price;
        this.offPrice = offPrice;
        this.guaranteeDescription = guaranteeDescription;
        this.referableDescription = referableDescription;
        this.shortDescription = shortDescription;
        this.description = description;
        this.imageName = imageName;
        this.imageNamePNG = imageNamePNG;
        this.isPostSend = isPostSend;
        this.isTipaxSend = isTipaxSend;
        this.isBurberrySend = isBurberrySend;
        this.isBikeDeliverySend = isBikeDeliverySend;
        this.isExists = isExists;
        this.isShow = isShow;
        this.isCorrupt = isCorrupt;
        this.isSpecial = isSpecial;
        this.madeByAvalAmooz = madeByAvalAmooz;
        this.referable = referable;
        this.consumption = consumption;
        this.hasSeveralDesigns = hasSeveralDesigns;
        this.hasGuarantee = hasGuarantee;
        this.hasPrivateDownloadLinks = hasPrivateDownloadLinks;
        this.hasDiscountLargeOrder = hasDiscountLargeOrder;
        this.hasDiscountForEachOrder = hasDiscountForEachOrder;
        this.discountPrice = discountPrice;
        this.maxDiscountPrice = maxDiscountPrice;
        this.discountPercent = discountPercent;
        this.maxDiscountPercent = maxDiscountPercent;
        this.discountOrderCount = discountOrderCount;
        this.isOffPrice = isOffPrice;
        this.point = point;
        this.weight = weight;
        this.isEdited = isEdited;
        this.isActive = isActive;
        this.isUsed = isUsed;
        this.isFreeSend = isFreeSend;
        this.isWholesale = isWholesale;
        this.categoryIds = categoryIds;
    }
}
class ProductVideoModel {
    constructor(id, isActive, courseTitle, videoUrl, videoTime, isFree, videoDescription, isFile, isAparat, videoUrlOnline, hasPrediction, hasPredictionOnline) {
        this.id = id;
        this.isActive = isActive;
        this.courseTitle = courseTitle;
        this.videoUrl = videoUrl;
        this.videoTime = videoTime;
        this.isFree = isFree;
        this.videoDescription = videoDescription;
        this.isFile = isFile;
        this.isAparat = isAparat;
        this.videoUrlOnline = videoUrlOnline;
        this.hasPrediction = hasPrediction;
        this.hasPredictionOnline = hasPredictionOnline;
    }
}
class ProductImageModel {
    constructor(id, isActive, title, url) {
        this.id = id;
        this.isActive = isActive;
        this.title = title;
        this.url = url;
    }
}
class ProductDesignViewModel {
    constructor(id, productId, count, price, offPrice, isActive, isShow, title, description, isEdited, weight, productDesignId) {
        this.id = id;
        this.weight = weight;
        this.productId = productId;
        this.isActive = isActive;
        this.isShow = isShow;
        this.count = count;
        this.price = price;
        this.offPrice = offPrice;
        this.title = title;
        this.description = description;
        this.isEdited = isEdited;
        this.productDesignId = productDesignId ? productDesignId : 0;
    }
}
class FurtherDetailViewModel {
    constructor(id, productId, isActive, isImportant, title, description, isEdited, furtherDetailId) {
        this.id = id;
        this.productId = productId;
        this.isActive = isActive;
        this.isImportant = isImportant;
        this.title = title;
        this.description = description;
        this.isEdited = isEdited;
        this.furtherDetailId = furtherDetailId ? furtherDetailId : 0;
    }
}
class AddOrUpdateProductVideoModel {
    constructor(productId, video) {
        this.productId = productId;
        this.video = video;
    }
}
class AddOrUpdateProductImageModel {
    constructor(productId, image) {
        this.productId = productId;
        this.image = image;
    }
}


/***/ }),

/***/ 9104:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/add-product/add-product-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductRoutingModule": () => (/* binding */ AddProductRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product.component */ 53166);




const routes = [{ path: '', component: _add_product_component__WEBPACK_IMPORTED_MODULE_0__.AddProductComponent }];
let AddProductRoutingModule = class AddProductRoutingModule {
};
AddProductRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AddProductRoutingModule);



/***/ }),

/***/ 53166:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/add-product/add-product.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _add_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.component.html?ngResource */ 65460);
/* harmony import */ var _add_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.component.scss?ngResource */ 48848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/common/Urls */ 35602);















let AddProductComponent = class AddProductComponent {
  constructor(productService, fb, toastController, router, loadingController, domSanitizer, alertController) {
    this.productService = productService;
    this.fb = fb;
    this.toastController = toastController;
    this.router = router;
    this.loadingController = loadingController;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
    this.priceType = 'price';
    this.productCategoryIds = [];
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
    this.isGuaranteeShow = false;
    this.hasDiscountLargeOrder = false;
    this.discountByPercent = false;
    this.referable = false;
    this.referableByPercent = false;
    this.hasExtraDeliveryPrice = false;
    this.editorConfig = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'توضیحات کوتاه...',
      translate: 'no',
      sanitize: true
    };
    this.editorConfig2 = {
      editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '5rem',
      placeholder: 'توضیحات اصلی...',
      translate: 'no',
      sanitize: true
    };
  }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200)]],
      referableReducePrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      referableReducePercent: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000)]],
      sendTime: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(180)]],
      count: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      discountOrderCount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      discountPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      maxDiscountPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      discountPercent: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000)]],
      maxDiscountPercent: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000)]],
      weight: [1000, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      offPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      imageName: ['http://localhost:4300/assets/images/in-progress.webp', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      imageNamePNG: ['http://localhost:4300/assets/images/in-progress.png', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      guaranteeDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      referableDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      shortDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      isPostSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isSpecialPostSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTipaxSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTipaxSoRentSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isBurberrySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isBikeDeliverySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isOwnDeliverySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isExists: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isShow: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isCorrupt: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      referable: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      consumption: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasSeveralDesigns: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      extraDeliveryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      hasExtraDeliveryPrice: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasGuarantee: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrivateDownloadLinks: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasDiscountLargeOrder: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasDiscountForEachOrder: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isUsed: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFreeSend: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isWholesale: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
    _core_common_G__WEBPACK_IMPORTED_MODULE_5__.G.getCourseCategory().subscribe(res => {
      if (res != null) {
        if (res.length > 0) {
          res.forEach(c => {
            if (c.parentId == 1) {
              this.mechanicCategories.push(c);
            } else if (c.parentId == 2) {
              this.tuningCategories.push(c);
            } else if (c.parentId == 3) {
              this.designeCategories.push(c);
            }
          });
        }
      }
    });
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
            _this.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPriceTypeChanged() {
    if (this.priceType === 'price') {
      this.addProductForm.setValue({
        name: this.addProductForm.value.name,
        price: this.addProductForm.value.price,
        offPrice: 0,
        imageName: this.addProductForm.value.imageName,
        imageNamePNG: this.addProductForm.value.imageNamePNG,
        shortDescription: this.addProductForm.value.shortDescription,
        description: this.addProductForm.value.description,
        referableReducePrice: this.addProductForm.value.referableReducePrice,
        referableReducePercent: this.addProductForm.value.referableReducePercent,
        sendTime: this.addProductForm.value.sendTime,
        count: this.addProductForm.value.count,
        discountOrderCount: this.addProductForm.value.discountOrderCount,
        discountPrice: this.addProductForm.value.discountPrice,
        maxDiscountPrice: this.addProductForm.value.maxDiscountPrice,
        discountPercent: this.addProductForm.value.discountPercent,
        maxDiscountPercent: this.addProductForm.value.maxDiscountPercent,
        weight: this.addProductForm.value.weight,
        guaranteeDescription: this.addProductForm.value.guaranteeDescription,
        referableDescription: this.addProductForm.value.referableDescription,
        isPostSend: this.addProductForm.value.isPostSend,
        isSpecialPostSend: this.addProductForm.value.isSpecialPostSend,
        isOwnDeliverySend: this.addProductForm.value.isOwnDeliverySend,
        isTipaxSend: this.addProductForm.value.isTipaxSend,
        isTipaxSoRentSend: this.addProductForm.value.isTipaxSoRentSend,
        isBurberrySend: this.addProductForm.value.isBurberrySend,
        isBikeDeliverySend: this.addProductForm.value.isBikeDeliverySend,
        isExists: this.addProductForm.value.isExists,
        isShow: this.addProductForm.value.isShow,
        extraDeliveryPrice: this.addProductForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.addProductForm.value.hasExtraDeliveryPrice,
        isCorrupt: this.addProductForm.value.isCorrupt,
        referable: this.addProductForm.value.referable,
        consumption: this.addProductForm.value.consumption,
        hasSeveralDesigns: this.addProductForm.value.hasSeveralDesigns,
        hasGuarantee: this.addProductForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.addProductForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.addProductForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.addProductForm.value.hasDiscountForEachOrder,
        isUsed: this.addProductForm.value.isUsed,
        isFreeSend: this.addProductForm.value.isFreeSend,
        isWholesale: this.addProductForm.value.isWholesale
      });
    } else if (this.priceType === 'offPrice') {
      this.addProductForm.setValue({
        name: this.addProductForm.value.name,
        price: this.addProductForm.value.price,
        offPrice: '',
        imageName: this.addProductForm.value.imageName,
        imageNamePNG: this.addProductForm.value.imageNamePNG,
        shortDescription: this.addProductForm.value.shortDescription,
        description: this.addProductForm.value.description,
        referableReducePrice: this.addProductForm.value.referableReducePrice,
        referableReducePercent: this.addProductForm.value.referableReducePercent,
        sendTime: this.addProductForm.value.sendTime,
        count: this.addProductForm.value.count,
        discountOrderCount: this.addProductForm.value.discountOrderCount,
        discountPrice: this.addProductForm.value.discountPrice,
        maxDiscountPrice: this.addProductForm.value.maxDiscountPrice,
        discountPercent: this.addProductForm.value.discountPercent,
        maxDiscountPercent: this.addProductForm.value.maxDiscountPercent,
        weight: this.addProductForm.value.weight,
        guaranteeDescription: this.addProductForm.value.guaranteeDescription,
        referableDescription: this.addProductForm.value.referableDescription,
        isPostSend: this.addProductForm.value.isPostSend,
        isSpecialPostSend: this.addProductForm.value.isSpecialPostSend,
        extraDeliveryPrice: this.addProductForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.addProductForm.value.hasExtraDeliveryPrice,
        isTipaxSend: this.addProductForm.value.isTipaxSend,
        isTipaxSoRentSend: this.addProductForm.value.isTipaxSoRentSend,
        isBurberrySend: this.addProductForm.value.isBurberrySend,
        isBikeDeliverySend: this.addProductForm.value.isBikeDeliverySend,
        isOwnDeliverySend: this.addProductForm.value.isOwnDeliverySend,
        isExists: this.addProductForm.value.isExists,
        isShow: this.addProductForm.value.isShow,
        isCorrupt: this.addProductForm.value.isCorrupt,
        referable: this.addProductForm.value.referable,
        consumption: this.addProductForm.value.consumption,
        hasSeveralDesigns: this.addProductForm.value.hasSeveralDesigns,
        hasGuarantee: this.addProductForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.addProductForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.addProductForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.addProductForm.value.hasDiscountForEachOrder,
        isUsed: this.addProductForm.value.isUsed,
        isFreeSend: this.addProductForm.value.isFreeSend,
        isWholesale: this.addProductForm.value.isWholesale
      });
    }
  }

  onCategoryChecked(productCategoryId) {
    if (this.productCategoryIds.find(c => c == productCategoryId) == null) {
      this.productCategoryIds.push(+productCategoryId);
    } else {
      this.productCategoryIds.splice(this.productCategoryIds.findIndex(c => c == productCategoryId), 1);
    }
  }

  onGuaranteeClicked(checked) {
    this.isGuaranteeShow = checked.detail.checked;
  }

  onhasDiscountLargeOrderClicked(checked) {
    this.hasDiscountLargeOrder = checked.detail.checked;
  }

  onDiscountByPercentClicked(checked) {
    this.discountByPercent = checked.detail.checked;
  }

  onReferableClicked(checked) {
    this.referable = checked.detail.checked;
  }

  onReferableByPercentClicked(checked) {
    this.referableByPercent = checked.detail.checked;
  }

  onExtraDeliveryPriceClicked(checked) {
    this.hasExtraDeliveryPrice = checked.detail.checked;
  }

  onAdd() {
    if (this.addProductForm.valid) {
      if (this.productCategoryIds.length < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'گروهی انتخاب نشده است');
        return;
      }

      if (+this.addProductForm.value.offPrice > +this.addProductForm.value.price) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(this.toastController, 'تخفیف بیشتر از قیمت اصلی است');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
      this.shortDescription = this.addProductForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_10__.SecurityContext.HTML, this.addProductForm.value.descriptionHtmlContent);
      this.product = new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_3__.AddOrUpdateProductModel(null, this.addProductForm.value.name, !this.referable ? 0 : this.referableByPercent ? 0 : this.addProductForm.value.referableReducePrice, !this.referable ? 0 : !this.referableByPercent ? 0 : this.addProductForm.value.referableReducePercent, this.addProductForm.value.sendTime, this.addProductForm.value.count, this.addProductForm.value.price, this.addProductForm.value.offPrice, this.addProductForm.value.guaranteeDescription, this.addProductForm.value.referableDescription, this.addProductForm.value.shortDescription, this.addProductForm.value.description, this.addProductForm.value.imageName, this.addProductForm.value.imageNamePNG, this.addProductForm.value.isPostSend, this.addProductForm.value.isTipaxSend, this.addProductForm.value.isTipaxSoRentSend, this.addProductForm.value.isBurberrySend, this.addProductForm.value.isBikeDeliverySend, this.addProductForm.value.isExists, this.addProductForm.value.isShow, this.addProductForm.value.isCorrupt, false, false, this.addProductForm.value.referable, this.addProductForm.value.consumption, this.addProductForm.value.hasSeveralDesigns, this.addProductForm.value.hasGuarantee, this.addProductForm.value.hasPrivateDownloadLinks, this.addProductForm.value.hasDiscountLargeOrder, !this.hasDiscountLargeOrder ? false : this.addProductForm.value.hasDiscountForEachOrder, this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.addProductForm.value.discountPrice, this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.addProductForm.value.maxDiscountPrice, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.addProductForm.value.discountPercent, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.addProductForm.value.maxDiscountPercent, !this.hasDiscountLargeOrder ? 0 : this.addProductForm.value.discountOrderCount, this.priceType == 'offPrice', 100, this.addProductForm.value.weight, false, false, this.addProductForm.value.isUsed, this.addProductForm.value.isFreeSend, this.addProductForm.value.isWholesale, this.productCategoryIds, this.addProductForm.value.isOwnDeliverySend, this.addProductForm.value.isSpecialPostSend, this.addProductForm.value.hasExtraDeliveryPrice, this.hasExtraDeliveryPrice ? this.addProductForm.value.extraDeliveryPrice : 0);
      this.productService.AddOrUpdateProduct(this.product).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
          this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_8__.Urls.SellerPanelUrl);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

AddProductComponent.ctorParameters = () => [{
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}];

AddProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-add-product',
  template: _add_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_add_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddProductComponent);


/***/ }),

/***/ 45727:
/*!*********************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/add-product/add-product.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductModule": () => (/* binding */ AddProductModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product-routing.module */ 9104);
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.component */ 53166);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);













let AddProductModule = class AddProductModule {
};
AddProductModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_2__.AddProductComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _add_product_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddProductRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_12__.AngularEditorModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], AddProductModule);



/***/ }),

/***/ 48848:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/add-product/add-product.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 65460:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/add-product/add-product.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SellerPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>درج محصول</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n        <!-- <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label\r\n                  ><ion-badge color=\"danger\" mode=\"md\">توجه</ion-badge></ion-label\r\n                >\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label class=\"text-center\">\r\n                  پس از درج محصول تصویر محصول را برایمان ایمیل کنید\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"text-center\">\r\n                  ایمیل:&nbsp;\r\n                  <ion-text color=\"light\">\r\n                    info@avalamuz.ir\r\n                  </ion-text></ion-label\r\n                >\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label class=\"text-center\">\r\n                  پس از بررسی دوره و ویدیو معرفی دوره، همکاران ما دوره ی شمارا\r\n                  فعال خواهند کرد\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card> -->\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-radio-group\r\n              (ionChange)=\"onPriceTypeChanged()\"\r\n              [(ngModel)]=\"priceType\"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>قیمت دوره</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>نقدی</ion-label>\r\n                <ion-radio slot=\"start\" value=\"price\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>با تخفیف</ion-label>\r\n                <ion-radio slot=\"start\" value=\"offPrice\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"addProductForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\"\r\n                >درج محصول جدید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >عنوان محصول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n\r\n                <ion-item\r\n                  *ngIf=\"priceType == 'price' || priceType == 'offPrice'\"\r\n                >\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"priceType == 'offPrice'\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت تخفیف خورده به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند WebP\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageName\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند PNG\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageNamePNG\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">وزن </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"وزن به گرم\"\r\n                    formControlName=\"weight\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"barbell-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال بعد از چند روز کاری؟\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"زمان ارسال\"\r\n                    formControlName=\"sendTime\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"send-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >موجودی\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تعداد موجودی\"\r\n                    formControlName=\"count\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال رایگان؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isFreeSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تضمین و گارانتی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onGuaranteeClicked($event)\"\r\n                    formControlName=\"hasGuarantee\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"isGuaranteeShow\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات گارانتی\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیحات شرایط گارانتی\"\r\n                    formControlName=\"guaranteeDescription\"\r\n                    type=\"text\"\r\n                  ></ion-textarea>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تخفیف در صورت سفارش بالا دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"\r\n                      onhasDiscountLargeOrderClicked($event)\r\n                    \"\r\n                    formControlName=\"hasDiscountLargeOrder\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"stats-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"hasDiscountLargeOrder\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف به ازای هر تعداد سفارش دارد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      formControlName=\"hasDiscountForEachOrder\"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تعداد سفارش عمده برای تخفیف بیشتر\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"تعداد سفارش عمده برای تخفیف بیشتر\"\r\n                      formControlName=\"discountOrderCount\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف با درصد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      (ionChange)=\"\r\n                        onDiscountByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"discountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"maxDiscountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد تخفیف فروش عمده\"\r\n                      formControlName=\"discountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر درصد تخفیف فروش عمده\"\r\n                      formControlName=\"maxDiscountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >امکان مرجوعی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onReferableClicked($event)\"\r\n                    formControlName=\"referable\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"swap-horizontal-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"referable\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >توضیحات مرجوعی\r\n                    </ion-label>\r\n                    <ion-textarea\r\n                      placeholder=\"توضیحات شرایط مرجوعی\"\r\n                      formControlName=\"referableDescription\"\r\n                      type=\"text\"\r\n                    ></ion-textarea>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"swap-horizontal-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >میزان کسر مبلغ درصدی باشد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      (ionChange)=\"\r\n                        onReferableByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >هزینه کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"هزینه کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"\r\n                      onExtraDeliveryPriceClicked($event)\r\n                    \"\r\n                    formControlName=\"hasExtraDeliveryPrice\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"hasExtraDeliveryPrice\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال بیشتر به تومان\"\r\n                    formControlName=\"extraDeliveryPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای مصرف شدنی؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"consumption\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای دسته دو؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isUsed\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"battery-half-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا خراب است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isCorrupt\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"archive-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا موجود است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isExists\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkbox-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا نمایش داده شود؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isShow\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkmark-circle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >دریافت حضوری مشتری؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isOwnDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bicycle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پیک موتوری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isBikeDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bicycle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با باربری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isBurberrySend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bus-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس پس کرایه دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSoRentSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isPostSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-sport-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست پیشتاز دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isSpecialPostSend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-sport-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول رنگ و طرح بندی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasSeveralDesigns\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"color-palette-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول حاوی ویدیو یا فایل دانلودی است؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasPrivateDownloadLinks\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"bag-check-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول فروش عمده دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isWholesale\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bar-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات کوتاه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات کوتاه...\"\r\n                    formControlName=\"shortDescription\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"document-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات اصلی\r\n                  </ion-label>\r\n                  <br />\r\n                  <angular-editor\r\n                    id=\"editor2\"\r\n                    formControlName=\"description\"\r\n                    [config]=\"editorConfig2\"\r\n                  ></angular-editor>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >محصول حداقل باید در یک گروه باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گروه های دسته بندی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>مکانیک</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of mechanicCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>تیونینگ</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of tuningCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>دیزاین</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of designeCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.courseCategoryId)\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"addProductForm.invalid\"\r\n            >\r\n              ایجاد محصول\r\n            </ion-button>\r\n          </ion-toolbar>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_add-product_add-product_module_ts.js.map