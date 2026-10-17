"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_update-product_update-product_module_ts"],{

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

/***/ 71642:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/update-product/update-product-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductRoutingModule": () => (/* binding */ UpdateProductRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product.component */ 70734);




const routes = [{ path: '', component: _update_product_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProductComponent }];
let UpdateProductRoutingModule = class UpdateProductRoutingModule {
};
UpdateProductRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UpdateProductRoutingModule);



/***/ }),

/***/ 70734:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/update-product/update-product.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductComponent": () => (/* binding */ UpdateProductComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product.component.html?ngResource */ 85149);
/* harmony import */ var _update_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product.component.scss?ngResource */ 11076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);















let UpdateProductComponent = class UpdateProductComponent {
  constructor(productService, fb, toastController, loadingController, activatedRoute, router, domSanitizer, alertController) {
    this.productService = productService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
    this.isCan = true;
    this.priceType = 'price';
    this.sellerPercent = 0;
    this.sellerPrice = 0;
    this.searchTitle = '';
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
    this.selectedProductId = 0;
    this.productSelected = false;
    this.productCategoryIds = [];
    this.mechanicCategories = [];
    this.tuningCategories = [];
    this.designeCategories = [];
    this.empty = false;
  }

  ngOnInit() {
    this.updateProductForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200)]],
      referableReducePrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(200000000)]],
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
      isOwnDeliverySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTipaxSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isTipaxSoRentSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isBurberrySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isBikeDeliverySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isExists: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isShow: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      extraDeliveryPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      hasExtraDeliveryPrice: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isCorrupt: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      referable: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      consumption: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasSeveralDesigns: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
    _core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.getProductCategory().subscribe(res => {
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
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page ? params.page : 1;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      const startPrice = params.startPrice ? params.startPrice : null;
      const endPrice = params.endPrice ? params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : null;
      const sortId = params.sortId ? params.sortId : 4;

      if (page === undefined) {
        filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, page, take, title);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, page, take, title);
        } else {
          filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(true, page, take, title, startPrice, endPrice, false, false, categoryIds, sortId, false);
        }
      }

      this.filteredProducts = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
      this.productService.GetSellerProductsByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
          this.filteredProducts = res.data;
        } else {
          // SharedIonic.unSuccessToast(this.toastController);
          this.empty = true;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onPriceTypeChanged() {
    if (!this.isCan) {
      return;
    }

    if (this.priceType === 'price') {
      this.updateProductForm.setValue({
        name: this.updateProductForm.value.name,
        price: this.updateProductForm.value.price,
        offPrice: 0,
        imageName: this.updateProductForm.value.imageName,
        imageNamePNG: this.updateProductForm.value.imageNamePNG,
        shortDescription: this.updateProductForm.value.shortDescription,
        description: this.updateProductForm.value.description,
        referableReducePrice: this.updateProductForm.value.referableReducePrice,
        referableReducePercent: this.updateProductForm.value.referableReducePercent,
        sendTime: this.updateProductForm.value.sendTime,
        count: this.updateProductForm.value.count,
        discountOrderCount: this.updateProductForm.value.discountOrderCount,
        discountPrice: this.updateProductForm.value.discountPrice,
        maxDiscountPrice: this.updateProductForm.value.maxDiscountPrice,
        discountPercent: this.updateProductForm.value.discountPercent,
        maxDiscountPercent: this.updateProductForm.value.maxDiscountPercent,
        weight: this.updateProductForm.value.weight,
        guaranteeDescription: this.updateProductForm.value.guaranteeDescription,
        referableDescription: this.updateProductForm.value.referableDescription,
        isPostSend: this.updateProductForm.value.isPostSend,
        isTipaxSend: this.updateProductForm.value.isTipaxSend,
        isTipaxSoRentSend: this.updateProductForm.value.isTipaxSoRentSend,
        isBurberrySend: this.updateProductForm.value.isBurberrySend,
        isBikeDeliverySend: this.updateProductForm.value.isBikeDeliverySend,
        isSpecialPostSend: this.updateProductForm.value.isSpecialPostSend,
        isOwnDeliverySend: this.updateProductForm.value.isOwnDeliverySend,
        isExists: this.updateProductForm.value.isExists,
        isShow: this.updateProductForm.value.isShow,
        isCorrupt: this.updateProductForm.value.isCorrupt,
        referable: this.updateProductForm.value.referable,
        consumption: this.updateProductForm.value.consumption,
        hasSeveralDesigns: this.updateProductForm.value.hasSeveralDesigns,
        hasGuarantee: this.updateProductForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.updateProductForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.updateProductForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.updateProductForm.value.hasDiscountForEachOrder,
        isUsed: this.updateProductForm.value.isUsed,
        isFreeSend: this.updateProductForm.value.isFreeSend,
        isWholesale: this.updateProductForm.value.isWholesale,
        extraDeliveryPrice: this.updateProductForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.updateProductForm.value.hasExtraDeliveryPrice
      });
    } else if (this.priceType === 'offPrice') {
      this.updateProductForm.setValue({
        name: this.updateProductForm.value.name,
        price: this.updateProductForm.value.price,
        offPrice: '',
        imageName: this.updateProductForm.value.imageName,
        imageNamePNG: this.updateProductForm.value.imageNamePNG,
        shortDescription: this.updateProductForm.value.shortDescription,
        description: this.updateProductForm.value.description,
        referableReducePrice: this.updateProductForm.value.referableReducePrice,
        referableReducePercent: this.updateProductForm.value.referableReducePercent,
        sendTime: this.updateProductForm.value.sendTime,
        count: this.updateProductForm.value.count,
        discountOrderCount: this.updateProductForm.value.discountOrderCount,
        discountPrice: this.updateProductForm.value.discountPrice,
        maxDiscountPrice: this.updateProductForm.value.maxDiscountPrice,
        discountPercent: this.updateProductForm.value.discountPercent,
        maxDiscountPercent: this.updateProductForm.value.maxDiscountPercent,
        weight: this.updateProductForm.value.weight,
        guaranteeDescription: this.updateProductForm.value.guaranteeDescription,
        referableDescription: this.updateProductForm.value.referableDescription,
        isPostSend: this.updateProductForm.value.isPostSend,
        isTipaxSend: this.updateProductForm.value.isTipaxSend,
        isTipaxSoRentSend: this.updateProductForm.value.isTipaxSoRentSend,
        isBurberrySend: this.updateProductForm.value.isBurberrySend,
        isBikeDeliverySend: this.updateProductForm.value.isBikeDeliverySend,
        isSpecialPostSend: this.updateProductForm.value.isSpecialPostSend,
        isOwnDeliverySend: this.updateProductForm.value.isOwnDeliverySend,
        isExists: this.updateProductForm.value.isExists,
        isShow: this.updateProductForm.value.isShow,
        isCorrupt: this.updateProductForm.value.isCorrupt,
        referable: this.updateProductForm.value.referable,
        consumption: this.updateProductForm.value.consumption,
        hasSeveralDesigns: this.updateProductForm.value.hasSeveralDesigns,
        hasGuarantee: this.updateProductForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.updateProductForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.updateProductForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.updateProductForm.value.hasDiscountForEachOrder,
        isUsed: this.updateProductForm.value.isUsed,
        isFreeSend: this.updateProductForm.value.isFreeSend,
        isWholesale: this.updateProductForm.value.isWholesale,
        extraDeliveryPrice: this.updateProductForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.updateProductForm.value.hasExtraDeliveryPrice
      });
    }
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

  onCategoryChecked(categoryId) {
    if (this.productCategoryIds.find(c => c == categoryId) == null) {
      this.productCategoryIds.push(+categoryId);
    } else {
      this.productCategoryIds.splice(this.productCategoryIds.findIndex(c => c == categoryId), 1);
    }
  }

  checkCategoryId(categoryId) {
    if (this.productCategoryIds.find(c => c == categoryId) == null) {
      return false;
    } else {
      return true;
    }
  }

  onUpdate() {
    if (this.updateProductForm.valid) {
      if (this.productCategoryIds.length < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'گروهی انتخاب نشده است');
        return;
      }

      if (+this.updateProductForm.value.offPrice > +this.updateProductForm.value.price) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'تخفیف بیشتر از قیمت اصلی است');
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController); // this.shortDescription = this.domSanitizer
      //   .sanitize(SecurityContext.HTML, this.updateCourseForm.value.shortDescriptionHtmlContent);

      this.shortDescription = this.updateProductForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_10__.SecurityContext.HTML, this.updateProductForm.value.descriptionHtmlContent);
      this.product = new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateProductModel(this.selectedProductId, this.updateProductForm.value.name, !this.referable ? 0 : this.referableByPercent ? 0 : this.updateProductForm.value.referableReducePrice, !this.referable ? 0 : !this.referableByPercent ? 0 : this.updateProductForm.value.referableReducePercent, this.updateProductForm.value.sendTime, this.updateProductForm.value.count, this.updateProductForm.value.price, this.updateProductForm.value.offPrice, this.updateProductForm.value.guaranteeDescription, this.updateProductForm.value.referableDescription, this.updateProductForm.value.shortDescription, this.updateProductForm.value.description, this.updateProductForm.value.imageName, this.updateProductForm.value.imageNamePNG, this.updateProductForm.value.isPostSend, this.updateProductForm.value.isTipaxSend, this.updateProductForm.value.isTipaxSoRentSend, this.updateProductForm.value.isBurberrySend, this.updateProductForm.value.isBikeDeliverySend, this.updateProductForm.value.isExists, this.updateProductForm.value.isShow, this.updateProductForm.value.isCorrupt, false, false, this.updateProductForm.value.referable, this.updateProductForm.value.consumption, this.updateProductForm.value.hasSeveralDesigns, this.updateProductForm.value.hasGuarantee, this.updateProductForm.value.hasPrivateDownloadLinks, this.updateProductForm.value.hasDiscountLargeOrder, !this.hasDiscountLargeOrder ? false : this.updateProductForm.value.hasDiscountForEachOrder, this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateProductForm.value.discountPrice, this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateProductForm.value.maxDiscountPrice, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateProductForm.value.discountPercent, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateProductForm.value.maxDiscountPercent, !this.hasDiscountLargeOrder ? 0 : this.updateProductForm.value.discountOrderCount, this.priceType == 'offPrice', 100, this.updateProductForm.value.weight, false, false, this.updateProductForm.value.isUsed, this.updateProductForm.value.isFreeSend, this.updateProductForm.value.isWholesale, this.productCategoryIds, this.updateProductForm.value.isOwnDeliverySend, this.updateProductForm.value.isSpecialPostSend, this.updateProductForm.value.hasExtraDeliveryPrice, this.hasExtraDeliveryPrice ? this.updateProductForm.value.extraDeliveryPrice : 0);
      this.productService.AddOrUpdateProduct(this.product).subscribe(res => {
        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus === res.status) {
          this.filteredProducts = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false);
          this.productService.GetSellerProductsByFilter(this.filteredProducts).subscribe(res => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
              this.productSelected = false;
              this.filteredProducts = res.data;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.successToast(this.toastController);
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
          });
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.filteredProducts.startPage == null) {
      return;
    }

    if (this.filteredProducts.pageId > this.filteredProducts.startPage && +this.filteredProducts.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredProducts.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredProducts.endPage == null) {
      return;
    }

    if (this.filteredProducts.pageId < this.filteredProducts.endPage) {
      this.setQueryParams(+this.filteredProducts.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  setQueryParams(pageId) {
    this.filteredProducts.title = this.searchTitle;
    this.router.navigate(['SellerPanel', 'UpdateProduct'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredProducts.takeEntity ? this.filteredProducts.takeEntity : null,
        title: this.filteredProducts.title ? this.filteredProducts.title : null,
        startPrice: this.filteredProducts.startPrice ? this.filteredProducts.startPrice : null,
        endPrice: this.filteredProducts.endPrice ? this.filteredProducts.endPrice : null,
        categoryIds: this.filteredProducts.categoryIds ? this.filteredProducts.categoryIds : [],
        sortId: this.filteredProducts.sortId ? this.filteredProducts.sortId : 0
      }
    });
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

  onSelectItem(model) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.loading(this.loadingController);
    this.selectedProductId = +model.id;
    this.productService.GetProductEditById(+model.id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus === res.status) {
        this.isCan = false;
        this.productDetail = res.data;
        this.productCategoryIds = res.data.categoryIds;
        this.sellerPrice = res.data.portionPrice;
        this.sellerPercent = res.data.portionPercent;
        this.updateProductForm.setValue({
          name: res.data.name,
          price: res.data.price,
          offPrice: res.data.offPrice,
          imageName: res.data.imageName,
          imageNamePNG: res.data.imageNamePNG,
          shortDescription: res.data.shortDescription,
          description: res.data.description,
          referableReducePrice: res.data.referableReducePrice,
          referableReducePercent: res.data.referableReducePercent,
          sendTime: res.data.sendTime,
          count: res.data.count,
          discountOrderCount: res.data.discountOrderCount,
          discountPrice: res.data.discountPrice,
          maxDiscountPrice: res.data.maxDiscountPrice,
          discountPercent: res.data.discountPercent,
          maxDiscountPercent: res.data.maxDiscountPercent,
          weight: res.data.weight,
          guaranteeDescription: res.data.guaranteeDescription,
          referableDescription: res.data.referableDescription,
          isPostSend: res.data.isPostSend,
          isTipaxSend: res.data.isTipaxSend,
          isTipaxSoRentSend: res.data.isTipaxSoRentSend,
          isBurberrySend: res.data.isBurberrySend,
          isBikeDeliverySend: res.data.isBikeDeliverySend,
          isSpecialPostSend: res.data.isSpecialPostSend,
          isOwnDeliverySend: res.data.isOwnDeliverySend,
          isExists: res.data.isExists,
          isShow: res.data.isShow,
          isCorrupt: res.data.isCorrupt,
          referable: res.data.referable,
          hasExtraDeliveryPrice: res.data.hasExtraDeliveryPrice,
          extraDeliveryPrice: res.data.extraDeliveryPrice,
          consumption: res.data.consumption,
          hasSeveralDesigns: res.data.hasSeveralDesigns,
          hasGuarantee: res.data.hasGuarantee,
          hasPrivateDownloadLinks: res.data.hasPrivateDownloadLinks,
          hasDiscountLargeOrder: res.data.hasDiscountLargeOrder,
          hasDiscountForEachOrder: res.data.hasDiscountForEachOrder,
          isUsed: res.data.isUsed,
          isFreeSend: res.data.isFreeSend,
          isWholesale: res.data.isWholesale
        });
        this.isGuaranteeShow = res.data.hasGuarantee;
        this.referable = res.data.referable;
        this.referableByPercent = res.data.referableReducePrice == 0;
        this.hasExtraDeliveryPrice = res.data.hasExtraDeliveryPrice;
        this.hasDiscountLargeOrder = res.data.hasDiscountLargeOrder;
        this.discountByPercent = res.data.discountPrice == 0;

        if (this.productDetail.offPrice != 0 && this.productDetail.price != 0) {
          this.priceType = 'offPrice';
        } else if (this.productDetail.offPrice == 0 && this.productDetail.price != 0) {
          this.priceType = 'price';
        } else {
          this.priceType = 'price';
        }

        this.productSelected = true;
        this.isCan = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedProductId = 0;
        this.productSelected = false;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_3__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.selectedProductId = 0;
      this.productSelected = false;
    });
  }

  onCancel() {
    this.selectedProductId = 0;
    this.productSelected = false;
  }

};

UpdateProductComponent.ctorParameters = () => [{
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}];

UpdateProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-update-product',
  template: _update_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateProductComponent);


/***/ }),

/***/ 73912:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/update-product/update-product.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductModule": () => (/* binding */ UpdateProductModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_product_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-routing.module */ 71642);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product.component */ 70734);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @kolkov/angular-editor */ 89971);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);














let UpdateProductModule = class UpdateProductModule {
};
UpdateProductModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_update_product_component__WEBPACK_IMPORTED_MODULE_2__.UpdateProductComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _update_product_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateProductRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__.SharedProductModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_13__.AngularEditorModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], UpdateProductModule);



/***/ }),

/***/ 11076:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/update-product/update-product.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 85149:
/*!*******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/update-product/update-product.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SellerPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ویرایش کالا ها</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!productSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>کالا های شما</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"empty\" dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h2>هنوز کالا ای ایجاد نکرده اید</h2>\r\n              </ion-text>\r\n            </div>\r\n            <div *ngIf=\"filteredProducts && !empty\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId > 3 &&\r\n                        filteredProducts.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId > 3 &&\r\n                        filteredProducts.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredProducts.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredProducts.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId <= i + 3 &&\r\n                          filteredProducts.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredProducts.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredProducts.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredProducts.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredProducts.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredProducts.products\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let product of filteredProducts.products\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-seller-product\r\n                      class=\"point\"\r\n                      [product]=\"product\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-seller-product>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId > 3 &&\r\n                        filteredProducts.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId > 3 &&\r\n                        filteredProducts.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredProducts.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredProducts.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId <= i + 3 &&\r\n                          filteredProducts.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredProducts.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredProducts.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredProducts.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredProducts.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"productSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n        <ion-card *ngIf=\"sellerPrice != 0\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-center\"\r\n                >کارمزد فروش این کالا\r\n                <ion-badge color=\"success\" mode=\"md\">{{\r\n                  sellerPercent | rial\r\n                }}</ion-badge>\r\n                میباشد</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"sellerPercent != 0\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-center\"\r\n                >کارمزد فروش این کالا\r\n                <ion-badge color=\"success\" mode=\"md\">{{\r\n                  sellerPercent + \"%\"\r\n                }}</ion-badge>\r\n                میباشد</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-radio-group\r\n              (ionChange)=\"onPriceTypeChanged()\"\r\n              [(ngModel)]=\"priceType\"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>قیمت کالا</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>نقدی</ion-label>\r\n                <ion-radio slot=\"start\" value=\"price\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>با تخفیف</ion-label>\r\n                <ion-radio slot=\"start\" value=\"offPrice\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form\r\n          [formGroup]=\"updateProductForm\"\r\n          (ngSubmit)=\"presentAlertConfirm()\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\"\r\n                >ویرایش محصول جدید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >عنوان محصول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n\r\n                <ion-item\r\n                  *ngIf=\"priceType == 'price' || priceType == 'offPrice'\"\r\n                >\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"priceType == 'offPrice'\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت تخفیف خورده به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند WebP\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageName\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند PNG\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageNamePNG\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">وزن </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"وزن به گرم\"\r\n                    formControlName=\"weight\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"barbell-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال بعد از چند روز کاری؟\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"زمان ارسال\"\r\n                    formControlName=\"sendTime\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"send-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >موجودی\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تعداد موجودی\"\r\n                    formControlName=\"count\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال رایگان؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isFreeSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تضمین و گارانتی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"isGuaranteeShow\"\r\n                    (ionChange)=\"onGuaranteeClicked($event)\"\r\n                    formControlName=\"hasGuarantee\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"isGuaranteeShow\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات گارانتی\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیحات شرایط گارانتی\"\r\n                    formControlName=\"guaranteeDescription\"\r\n                    type=\"text\"\r\n                  ></ion-textarea>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تخفیف در صورت سفارش بالا دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"hasDiscountLargeOrder\"\r\n                    (ionChange)=\"\r\n                      onhasDiscountLargeOrderClicked($event)\r\n                    \"\r\n                    formControlName=\"hasDiscountLargeOrder\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"stats-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"hasDiscountLargeOrder\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف به ازای هر تعداد سفارش دارد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      formControlName=\"hasDiscountForEachOrder\"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تعداد سفارش عمده برای تخفیف بیشتر\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"تعداد سفارش عمده برای تخفیف بیشتر\"\r\n                      formControlName=\"discountOrderCount\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف با درصد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      [checked]=\"discountByPercent\"\r\n                      (ionChange)=\"\r\n                        onDiscountByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"discountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"maxDiscountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد تخفیف فروش عمده\"\r\n                      formControlName=\"discountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر درصد تخفیف فروش عمده\"\r\n                      formControlName=\"maxDiscountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >امکان مرجوعی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"referable\"\r\n                    (ionChange)=\"onReferableClicked($event)\"\r\n                    formControlName=\"referable\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"swap-horizontal-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"referable\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >توضیحات مرجوعی\r\n                    </ion-label>\r\n                    <ion-textarea\r\n                      placeholder=\"توضیحات شرایط مرجوعی\"\r\n                      formControlName=\"referableDescription\"\r\n                      type=\"text\"\r\n                    ></ion-textarea>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"swap-horizontal-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >میزان کسر مبلغ درصدی باشد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      [checked]=\"referableByPercent\"\r\n                      (ionChange)=\"\r\n                        onReferableByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >هزینه کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"هزینه کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"\r\n                      onExtraDeliveryPriceClicked($event)\r\n                    \"\r\n                    formControlName=\"hasExtraDeliveryPrice\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"hasExtraDeliveryPrice\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال بیشتر به تومان\"\r\n                    formControlName=\"extraDeliveryPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای مصرف شدنی؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"consumption\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای دسته دو؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isUsed\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"battery-half-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا خراب است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isCorrupt\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"archive-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا موجود است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isExists\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkbox-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا نمایش داده شود؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isShow\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkmark-circle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >دریافت حضوری مشتری؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isOwnDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon color=\"warning\" slot=\"start\" name=\"bicycle-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پیک موتوری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isBikeDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bicycle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با باربری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isBurberrySend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bus-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس پس کرایه دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSoRentSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isPostSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-sport-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست پیشتاز دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isSpecialPostSend\"></ion-checkbox>\r\n                  <ion-icon color=\"warning\" slot=\"start\" name=\"car-sport-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول رنگ و طرح بندی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasSeveralDesigns\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"color-palette-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول حاوی ویدیو یا فایل دانلودی است؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasPrivateDownloadLinks\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"bag-check-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول فروش عمده دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isWholesale\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bar-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات کوتاه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات کوتاه...\"\r\n                    formControlName=\"shortDescription\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"document-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات اصلی\r\n                  </ion-label>\r\n                  <br />\r\n                  <angular-editor\r\n                    id=\"editor2\"\r\n                    formControlName=\"description\"\r\n                    [config]=\"editorConfig2\"\r\n                  ></angular-editor>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >کالا حداقل باید در یک گروه باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گروه های دسته بندی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>مکانیک</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of mechanicCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.productCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.productCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>تیونینگ</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of tuningCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.productCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.productCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>دیزاین</ion-label>\r\n                </ion-list-header>\r\n                <ion-item *ngFor=\"let category of designeCategories\">\r\n                  <ion-label>{{ category.title }}</ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"onCategoryChecked(category.productCategoryId)\"\r\n                    checked=\"{{ checkCategoryId(category.productCategoryId) }}\"\r\n                    slot=\"start\"\r\n                  >\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n            <ion-buttons slot=\"start\" class=\"full-width\">\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"updateProductForm.invalid\"\r\n              >\r\n                ویرایش\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                (click)=\"onCancel()\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n              >\r\n                برگشت\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_update-product_update-product_module_ts.js.map