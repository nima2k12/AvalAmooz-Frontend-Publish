"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_update-product_update-product_module_ts"],{

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

/***/ 75832:
/*!****************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product/update-product-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductRoutingModule": () => (/* binding */ UpdateProductRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product.component */ 76467);




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

/***/ 76467:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product/update-product.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductComponent": () => (/* binding */ UpdateProductComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_product_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product.component.html?ngResource */ 12091);
/* harmony import */ var _update_product_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product.component.scss?ngResource */ 40698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/product/product.service */ 60007);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */












let UpdateProductComponent = class UpdateProductComponent {
  constructor(courseService, fb, toastController, loadingController, activatedRoute, router, domSanitizer, alertController) {
    this.courseService = courseService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.alertController = alertController;
    this.isCan = true;
    this.priceType = 'price';
    this.teacherPercent = -1;
    this.searchTitle = '';
    this.sellerPercent = 0;
    this.sellerPrice = 0;
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
    this.selectedCourseId = 0;
    this.courseSelected = false;
    this.courseCategoryIds = [];
    this.productCategories = [];
    this.empty = false;
  }

  ngOnInit() {
    this.updateCourseForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(200)]],
      referableReducePrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      referableReducePercent: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10000)]],
      sendTime: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(180)]],
      count: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      point: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
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
      isCallOnly: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
      isSpecialPostSend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isOwnDeliverySend: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasSeveralDesigns: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasGuarantee: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrivateDownloadLinks: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasDiscountLargeOrder: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasDiscountForEachOrder: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isUsed: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFreeSend: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isSpecial: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      madeByAvalAmooz: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isWholesale: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      portionPercent: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100)]],
      portionPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]]
    });
    src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.getProductCategory().subscribe(res => {
      this.productCategories = res || [];
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      const startPrice = params.startPrice ? params.startPrice : null;
      const endPrice = params.endPrice ? params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : [];
      const sortId = params.sortId ? params.sortId : 4;

      if (page === undefined) {
        filter = new src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__.ProductFilterModel(true, page, take, title, startPrice, endPrice, false, false, categoryIds, sortId, false);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__.ProductFilterModel(false, page, take, title);
        } else {
          filter = new src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__.ProductFilterModel(true, page, take, title, startPrice, endPrice, false, false, categoryIds, sortId, false);
        }
      }

      this.filteredCourses = filter;
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.courseService.GetAdminProductsByFilter(filter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          // SharedIonic.unSuccessToast(this.toastController);
          this.empty = true;
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  presentAlertConfirm() {
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
            _this.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onPriceTypeChanged() {
    if (!this.isCan) {
      return;
    }

    if (this.priceType === 'price') {
      this.updateCourseForm.setValue({
        name: this.updateCourseForm.value.name,
        price: this.updateCourseForm.value.price,
        offPrice: 0,
        imageName: this.updateCourseForm.value.imageName,
        isCallOnly: this.updateCourseForm.value.isCallOnly,
        imageNamePNG: this.updateCourseForm.value.imageNamePNG,
        shortDescription: this.updateCourseForm.value.shortDescription,
        description: this.updateCourseForm.value.description,
        referableReducePrice: this.updateCourseForm.value.referableReducePrice,
        referableReducePercent: this.updateCourseForm.value.referableReducePercent,
        sendTime: this.updateCourseForm.value.sendTime,
        count: this.updateCourseForm.value.count,
        discountOrderCount: this.updateCourseForm.value.discountOrderCount,
        discountPrice: this.updateCourseForm.value.discountPrice,
        maxDiscountPrice: this.updateCourseForm.value.maxDiscountPrice,
        discountPercent: this.updateCourseForm.value.discountPercent,
        maxDiscountPercent: this.updateCourseForm.value.maxDiscountPercent,
        weight: this.updateCourseForm.value.weight,
        guaranteeDescription: this.updateCourseForm.value.guaranteeDescription,
        referableDescription: this.updateCourseForm.value.referableDescription,
        isPostSend: this.updateCourseForm.value.isPostSend,
        isTipaxSend: this.updateCourseForm.value.isTipaxSend,
        isTipaxSoRentSend: this.updateCourseForm.value.isTipaxSoRentSend,
        isBurberrySend: this.updateCourseForm.value.isBurberrySend,
        isBikeDeliverySend: this.updateCourseForm.value.isBikeDeliverySend,
        isExists: this.updateCourseForm.value.isExists,
        isShow: this.updateCourseForm.value.isShow,
        isCorrupt: this.updateCourseForm.value.isCorrupt,
        referable: this.updateCourseForm.value.referable,
        consumption: this.updateCourseForm.value.consumption,
        hasSeveralDesigns: this.updateCourseForm.value.hasSeveralDesigns,
        isSpecialPostSend: this.updateCourseForm.value.isSpecialPostSend,
        isOwnDeliverySend: this.updateCourseForm.value.isOwnDeliverySend,
        hasGuarantee: this.updateCourseForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.updateCourseForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.updateCourseForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.updateCourseForm.value.hasDiscountForEachOrder,
        isUsed: this.updateCourseForm.value.isUsed,
        isFreeSend: this.updateCourseForm.value.isFreeSend,
        isSpecial: this.updateCourseForm.value.isSpecial,
        madeByAvalAmooz: this.updateCourseForm.value.isSpecial,
        point: this.updateCourseForm.value.point,
        isWholesale: this.updateCourseForm.value.isWholesale,
        extraDeliveryPrice: this.updateCourseForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.updateCourseForm.value.hasExtraDeliveryPrice,
        portionPercent: this.updateCourseForm.value.portionPercent,
        portionPrice: this.updateCourseForm.value.portionPrice
      });
    } else if (this.priceType === 'offPrice') {
      this.updateCourseForm.setValue({
        name: this.updateCourseForm.value.name,
        price: this.updateCourseForm.value.price,
        offPrice: this.updateCourseForm.value.offPrice,
        imageName: this.updateCourseForm.value.imageName,
        isCallOnly: this.updateCourseForm.value.isCallOnly,
        imageNamePNG: this.updateCourseForm.value.imageNamePNG,
        shortDescription: this.updateCourseForm.value.shortDescription,
        description: this.updateCourseForm.value.description,
        referableReducePrice: this.updateCourseForm.value.referableReducePrice,
        referableReducePercent: this.updateCourseForm.value.referableReducePercent,
        sendTime: this.updateCourseForm.value.sendTime,
        count: this.updateCourseForm.value.count,
        discountOrderCount: this.updateCourseForm.value.discountOrderCount,
        discountPrice: this.updateCourseForm.value.discountPrice,
        maxDiscountPrice: this.updateCourseForm.value.maxDiscountPrice,
        discountPercent: this.updateCourseForm.value.discountPercent,
        maxDiscountPercent: this.updateCourseForm.value.maxDiscountPercent,
        weight: this.updateCourseForm.value.weight,
        guaranteeDescription: this.updateCourseForm.value.guaranteeDescription,
        referableDescription: this.updateCourseForm.value.referableDescription,
        isSpecialPostSend: this.updateCourseForm.value.isSpecialPostSend,
        isOwnDeliverySend: this.updateCourseForm.value.isOwnDeliverySend,
        isPostSend: this.updateCourseForm.value.isPostSend,
        isTipaxSend: this.updateCourseForm.value.isTipaxSend,
        isTipaxSoRentSend: this.updateCourseForm.value.isTipaxSoRentSend,
        isBurberrySend: this.updateCourseForm.value.isBurberrySend,
        isBikeDeliverySend: this.updateCourseForm.value.isBikeDeliverySend,
        isExists: this.updateCourseForm.value.isExists,
        isShow: this.updateCourseForm.value.isShow,
        isCorrupt: this.updateCourseForm.value.isCorrupt,
        referable: this.updateCourseForm.value.referable,
        consumption: this.updateCourseForm.value.consumption,
        hasSeveralDesigns: this.updateCourseForm.value.hasSeveralDesigns,
        hasGuarantee: this.updateCourseForm.value.hasGuarantee,
        hasPrivateDownloadLinks: this.updateCourseForm.value.hasPrivateDownloadLinks,
        hasDiscountLargeOrder: this.updateCourseForm.value.hasDiscountLargeOrder,
        hasDiscountForEachOrder: this.updateCourseForm.value.hasDiscountForEachOrder,
        isUsed: this.updateCourseForm.value.isUsed,
        isFreeSend: this.updateCourseForm.value.isFreeSend,
        isSpecial: this.updateCourseForm.value.isSpecial,
        madeByAvalAmooz: this.updateCourseForm.value.isSpecial,
        point: this.updateCourseForm.value.point,
        isWholesale: this.updateCourseForm.value.isWholesale,
        extraDeliveryPrice: this.updateCourseForm.value.extraDeliveryPrice,
        hasExtraDeliveryPrice: this.updateCourseForm.value.hasExtraDeliveryPrice,
        portionPercent: this.updateCourseForm.value.portionPercent,
        portionPrice: this.updateCourseForm.value.portionPrice
      });
    }
  }

  onCategoryChecked(courseCategoryId, event) {
    const checked = event.detail.checked;
    const index = this.courseCategoryIds.findIndex(c => c == courseCategoryId);

    if (checked && index === -1) {
      this.courseCategoryIds.push(+courseCategoryId);
    } else if (!checked && index !== -1) {
      this.courseCategoryIds.splice(index, 1);
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

  checkCategoryId(courseCategoryId) {
    if (this.courseCategoryIds.find(c => c == courseCategoryId) == null) {
      return false;
    } else {
      return true;
    }
  }

  onUpdate() {
    this.updateCourseForm.patchValue({
      offPrice: this.priceType === 'offPrice' ? +this.updateCourseForm.value.offPrice || 0 : 0
    });

    if (this.updateCourseForm.valid) {
      if (this.courseCategoryIds.length < 1) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'گروهی انتخاب نشده است');
        return;
      }

      if (+this.updateCourseForm.value.offPrice > +this.updateCourseForm.value.price) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'تخفیف بیشتر از قیمت اصلی است');
        return;
      }

      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // this.shortDescription = this.domSanitizer
      //   .sanitize(SecurityContext.HTML, this.updateCourseForm.value.shortDescriptionHtmlContent);

      this.shortDescription = this.updateCourseForm.value.shortDescriptionHtmlContent;
      this.description = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_10__.SecurityContext.HTML, this.updateCourseForm.value.descriptionHtmlContent);
      this.course = new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_6__.AddOrUpdateProductModel(this.selectedCourseId, this.updateCourseForm.value.name, !this.referable ? 0 : this.referableByPercent ? 0 : this.updateCourseForm.value.referableReducePrice, !this.referable ? 0 : !this.referableByPercent ? 0 : this.updateCourseForm.value.referableReducePercent, this.updateCourseForm.value.sendTime, this.updateCourseForm.value.count, this.updateCourseForm.value.price, this.updateCourseForm.value.offPrice, this.updateCourseForm.value.guaranteeDescription, this.updateCourseForm.value.referableDescription, this.updateCourseForm.value.shortDescription, this.updateCourseForm.value.description, this.updateCourseForm.value.imageName, this.updateCourseForm.value.imageNamePNG, this.updateCourseForm.value.isPostSend, this.updateCourseForm.value.isTipaxSend, this.updateCourseForm.value.isTipaxSoRentSend, this.updateCourseForm.value.isBurberrySend, this.updateCourseForm.value.isBikeDeliverySend, this.updateCourseForm.value.isExists, this.updateCourseForm.value.isShow, this.updateCourseForm.value.isCorrupt, this.updateCourseForm.value.isSpecial, this.updateCourseForm.value.madeByAvalAmooz, this.updateCourseForm.value.referable, this.updateCourseForm.value.consumption, this.updateCourseForm.value.hasSeveralDesigns, this.updateCourseForm.value.hasGuarantee, this.updateCourseForm.value.hasPrivateDownloadLinks, this.updateCourseForm.value.hasDiscountLargeOrder, !this.hasDiscountLargeOrder ? false : this.updateCourseForm.value.hasDiscountForEachOrder, this.updateCourseForm || !this.hasDiscountLargeOrder ? 0 : this.updateCourseForm.value.discountPrice, this.updateCourseForm || !this.hasDiscountLargeOrder ? 0 : this.updateCourseForm.value.maxDiscountPrice, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateCourseForm.value.discountPercent, !this.discountByPercent || !this.hasDiscountLargeOrder ? 0 : this.updateCourseForm.value.maxDiscountPercent, !this.hasDiscountLargeOrder ? 0 : this.updateCourseForm.value.discountOrderCount, this.priceType == 'offPrice', this.updateCourseForm.value.point, this.updateCourseForm.value.weight, false, false, this.updateCourseForm.value.isUsed, this.updateCourseForm.value.isFreeSend, this.updateCourseForm.value.isWholesale, this.courseCategoryIds, this.updateCourseForm.value.isOwnDeliverySend, this.updateCourseForm.value.isSpecialPostSend, this.updateCourseForm.value.hasExtraDeliveryPrice, this.hasExtraDeliveryPrice ? this.updateCourseForm.value.extraDeliveryPrice : 0, this.updateCourseForm.value.portionPercent, this.updateCourseForm.value.portionPrice, this.updateCourseForm.value.isCallOnly);
      this.courseService.AdminUpdateProduct(this.course).subscribe(res => {
        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
          this.filteredCourses = new src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__.ProductFilterModel(true, 1, 12, '', null, null);
          this.courseService.GetAdminProductsByFilter(this.filteredCourses).subscribe(res2 => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

            if (res2.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.courseSelected = false;
              this.filteredCourses = res2.data;
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.successToast(this.toastController);
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
          });
        } else {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= +pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.filteredCourses.startPage == null) {
      return;
    }

    if (this.filteredCourses.pageId > this.filteredCourses.startPage && +this.filteredCourses.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredCourses.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredCourses.endPage == null) {
      return;
    }

    if (this.filteredCourses.pageId < this.filteredCourses.endPage) {
      this.setQueryParams(+this.filteredCourses.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  setQueryParams(pageId) {
    this.filteredCourses.title = this.searchTitle;
    this.router.navigate(['SuperAdminPanel', 'UpdateProduct'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredCourses.takeEntity ? this.filteredCourses.takeEntity : null,
        title: this.filteredCourses.title ? this.filteredCourses.title : null,
        startPrice: this.filteredCourses.startPrice ? this.filteredCourses.startPrice : null,
        endPrice: this.filteredCourses.endPrice ? this.filteredCourses.endPrice : null,
        categoryIds: this.filteredCourses.categoryIds ? this.filteredCourses.categoryIds : [],
        sortId: this.filteredCourses.sortId ? this.filteredCourses.sortId : 0
      }
    });
  }

  onSelectItem(model) {
    this.isCan = false;
    this.selectedCourseId = +model.id;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController); // this.courseService.GetTeacherPortion(+model.id).subscribe(
    //   res => {
    //     if (GResponse.SuccessStatus === res.status) {
    //       this.teacherPercent = res.data;
    //     } else {
    //       SharedIonic.unSuccessToast(this.toastController);
    //       this.teacherPercent = -1;
    //     }
    //   },
    //   err => {
    //     SharedIonic.unSuccessToast(this.toastController);
    //     this.teacherPercent = -1;
    //   }
    // );

    this.courseService.GetAdminProductDetailById(+model.id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.courseDetail = res.data;
        this.courseCategoryIds = res.data.categoryIds;
        this.sellerPrice = res.data.portionPrice;
        this.sellerPercent = res.data.portionPercent;
        this.updateCourseForm.setValue({
          name: res.data.name,
          price: res.data.price,
          offPrice: res.data.offPrice ?? 0,
          imageName: res.data.imageName,
          imageNamePNG: res.data.imageNamePNG,
          shortDescription: res.data.shortDescription,
          isCallOnly: res.data.isCallOnly,
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
          isExists: res.data.isExists,
          isShow: res.data.isShow,
          isCorrupt: res.data.isCorrupt,
          referable: res.data.referable,
          consumption: res.data.consumption,
          hasSeveralDesigns: res.data.hasSeveralDesigns,
          hasGuarantee: res.data.hasGuarantee,
          hasPrivateDownloadLinks: res.data.hasPrivateDownloadLinks,
          hasDiscountLargeOrder: res.data.hasDiscountLargeOrder,
          hasDiscountForEachOrder: res.data.hasDiscountForEachOrder,
          isUsed: res.data.isUsed,
          isFreeSend: res.data.isFreeSend,
          isWholesale: res.data.isWholesale,
          isSpecial: res.data.isSpecial,
          madeByAvalAmooz: res.data.madeByAvalAmooz,
          isSpecialPostSend: res.data.isSpecialPostSend,
          isOwnDeliverySend: res.data.isOwnDeliverySend,
          point: res.data.point,
          hasExtraDeliveryPrice: res.data.hasExtraDeliveryPrice,
          extraDeliveryPrice: res.data.extraDeliveryPrice,
          portionPercent: res.data.portionPercent,
          portionPrice: res.data.portionPrice
        });
        this.isGuaranteeShow = res.data.hasGuarantee;
        this.referable = res.data.referable;
        this.referableByPercent = res.data.referableReducePrice == 0;
        this.hasExtraDeliveryPrice = res.data.hasExtraDeliveryPrice;
        this.hasDiscountLargeOrder = res.data.hasDiscountLargeOrder;
        this.discountByPercent = res.data.discountPrice == 0;

        if (this.courseDetail.offPrice > 0 && this.courseDetail.price != 0) {
          this.priceType = 'offPrice';
        } else if (!(this.courseDetail.offPrice > 0) && this.courseDetail.price != 0) {
          this.priceType = 'price';
        } else {
          this.priceType = 'price';
        }

        this.courseSelected = true;
        this.isCan = true;
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedCourseId = 0;
        this.courseSelected = false;
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      this.selectedCourseId = 0;
      this.courseSelected = false;
    });
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

UpdateProductComponent.ctorParameters = () => [{
  type: src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService
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

/***/ 66188:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product/update-product.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductModule": () => (/* binding */ UpdateProductModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_product_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-routing.module */ 75832);
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product.component */ 76467);
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

/***/ 40698:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product/update-product.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 12091:
/*!************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product/update-product.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>ویرایش دوره ها</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>دوره های شما</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"empty\" dir=\"rtl\">\r\n              <ion-text color=\"warning\" class=\"text-center\">\r\n                <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n              </ion-text>\r\n            </div>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.products\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.products\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-seller-product\r\n                      class=\"point\"\r\n                      [product]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-seller-product>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"courseSelected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\" dir=\"rtl\">\r\n        <ion-card *ngIf=\"sellerPrice != 0\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-center\"\r\n                >کارمزد فروش این کالا\r\n                <ion-badge color=\"success\" mode=\"md\">{{\r\n                  sellerPercent | rial\r\n                }}</ion-badge>\r\n                میباشد</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"sellerPercent != 0\">\r\n          <ion-list>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-center\"\r\n                >کارمزد فروش این کالا\r\n                <ion-badge color=\"success\" mode=\"md\">{{\r\n                  sellerPercent + \"%\"\r\n                }}</ion-badge>\r\n                میباشد</ion-label\r\n              >\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-radio-group\r\n              (ionChange)=\"onPriceTypeChanged()\"\r\n              [(ngModel)]=\"priceType\"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>قیمت کالا</ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-item>\r\n                <ion-label>نقدی</ion-label>\r\n                <ion-radio slot=\"start\" value=\"price\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>با تخفیف</ion-label>\r\n                <ion-radio slot=\"start\" value=\"offPrice\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateCourseForm\" (ngSubmit)=\"presentAlertConfirm()\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\">ویرایش کالا</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >عنوان محصول\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n\r\n                <ion-item\r\n                  *ngIf=\"priceType == 'price' || priceType == 'offPrice'\"\r\n                >\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"priceType == 'offPrice'\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >قیمت تخفیف خورده به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تماس برای قیمت؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isCallOnly\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"call-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند WebP\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageName\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >آدرس تصویر پسوند PNG\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"imageNamePNG\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">وزن </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"وزن به گرم\"\r\n                    formControlName=\"weight\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"barbell-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال بعد از چند روز کاری؟\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"زمان ارسال\"\r\n                    formControlName=\"sendTime\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"send-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >موجودی\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تعداد موجودی\"\r\n                    formControlName=\"count\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >امتیاز\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"امتیاز\"\r\n                    formControlName=\"point\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >سهم درصدی اول آموز\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\">سهم درصدی اول آموز\"\r\n                    formControlName=\"portionPercent\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"warning\">در صورتی که سهم درصدی است، سهم نقدی 0 وارد شود</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >سهم نقدی اول آموز\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\">سهم نقدی اول آموز\"\r\n                    formControlName=\"portionPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"grid-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">ویژه؟ </ion-label>\r\n                  <ion-checkbox formControlName=\"isSpecial\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ساخت اول آموز؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"madeByAvalAmooz\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال رایگان؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isFreeSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"gift-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تضمین و گارانتی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"isGuaranteeShow\"\r\n                    (ionChange)=\"onGuaranteeClicked($event)\"\r\n                    formControlName=\"hasGuarantee\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"isGuaranteeShow\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات گارانتی\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیحات شرایط گارانتی\"\r\n                    formControlName=\"guaranteeDescription\"\r\n                    type=\"text\"\r\n                  ></ion-textarea>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ribbon-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >تخفیف در صورت سفارش بالا دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"hasDiscountLargeOrder\"\r\n                    (ionChange)=\"\r\n                      onhasDiscountLargeOrderClicked($event)\r\n                    \"\r\n                    formControlName=\"hasDiscountLargeOrder\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"stats-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"hasDiscountLargeOrder\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف به ازای هر تعداد سفارش دارد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      formControlName=\"hasDiscountForEachOrder\"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تعداد سفارش عمده برای تخفیف بیشتر\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"تعداد سفارش عمده برای تخفیف بیشتر\"\r\n                      formControlName=\"discountOrderCount\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"stats-chart-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >تخفیف با درصد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      [checked]=\"discountByPercent\"\r\n                      (ionChange)=\"\r\n                        onDiscountByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"discountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر مبلغ تخفیف فروش عمده به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر مبلغ تخفیف فروش عمده به تومان\"\r\n                      formControlName=\"maxDiscountPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد تخفیف فروش عمده\"\r\n                      formControlName=\"discountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"discountByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >حداکثر درصد تخفیف فروش عمده\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"حداکثر درصد تخفیف فروش عمده\"\r\n                      formControlName=\"maxDiscountPercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >امکان مرجوعی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    [checked]=\"referable\"\r\n                    (ionChange)=\"onReferableClicked($event)\"\r\n                    formControlName=\"referable\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"swap-horizontal-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-card *ngIf=\"referable\">\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >توضیحات مرجوعی\r\n                    </ion-label>\r\n                    <ion-textarea\r\n                      placeholder=\"توضیحات شرایط مرجوعی\"\r\n                      formControlName=\"referableDescription\"\r\n                      type=\"text\"\r\n                    ></ion-textarea>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"swap-horizontal-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >میزان کسر مبلغ درصدی باشد؟\r\n                    </ion-label>\r\n                    <ion-checkbox\r\n                      [checked]=\"referableByPercent\"\r\n                      (ionChange)=\"\r\n                        onReferableByPercentClicked($event)\r\n                      \"\r\n                    ></ion-checkbox>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >هزینه کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"هزینه کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"referableByPercent\">\r\n                    <ion-label color=\"light\" position=\"stacked\"\r\n                      >درصد کسر شده بابت مرجوع به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"درصد کسر شده بابت مرجوع به تومان\"\r\n                      formControlName=\"referableReducePercent\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"cash-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                </ion-card>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    (ionChange)=\"\r\n                      onExtraDeliveryPriceClicked($event)\r\n                    \"\r\n                    formControlName=\"hasExtraDeliveryPrice\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"hasExtraDeliveryPrice\">\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >هزینه ارسال بیشتر به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"هزینه ارسال بیشتر به تومان\"\r\n                    formControlName=\"extraDeliveryPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cash-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای مصرف شدنی؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"consumption\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"nutrition-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالای دسته دو؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isUsed\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"battery-half-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا خراب است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isCorrupt\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"archive-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا موجود است؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isExists\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkbox-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >کالا نمایش داده شود؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isShow\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"checkmark-circle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >دریافت حضوری مشتری؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isOwnDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon color=\"warning\" slot=\"start\" name=\"bicycle-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پیک موتوری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isBikeDeliverySend\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bicycle-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با باربری دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isBurberrySend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bus-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با تیپاکس پس کرایه دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isTipaxSoRentSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isPostSend\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"car-sport-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >ارسال با پست پیشتاز دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isSpecialPostSend\"></ion-checkbox>\r\n                  <ion-icon color=\"warning\" slot=\"start\" name=\"car-sport-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول رنگ و طرح بندی دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasSeveralDesigns\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"color-palette-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول حاوی ویدیو یا فایل دانلودی است؟\r\n                  </ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"hasPrivateDownloadLinks\"\r\n                  ></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"bag-check-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >محصول فروش عمده دارد؟\r\n                  </ion-label>\r\n                  <ion-checkbox formControlName=\"isWholesale\"></ion-checkbox>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"bar-chart-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات کوتاه\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"توضیحات کوتاه...\"\r\n                    formControlName=\"shortDescription\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"document-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\"\r\n                    >توضیحات اصلی\r\n                  </ion-label>\r\n                  <br />\r\n                  <angular-editor\r\n                    id=\"editor2\"\r\n                    formControlName=\"description\"\r\n                    [config]=\"editorConfig2\"\r\n                  ></angular-editor>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >کالا حداقل باید در یک گروه باشد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گروه های دسته بندی</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\n                <ion-item *ngFor=\"let category of productCategories\">\n                  <ion-label>{{ category.title }}</ion-label>\n                  <ion-checkbox\n                    (ionChange)=\"onCategoryChecked(category.productCategoryId, $event)\"\r\n                    [checked]=\"checkCategoryId(category.productCategoryId)\"\n                    slot=\"start\"\n                  ></ion-checkbox>\n                </ion-item>\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n            <ion-buttons slot=\"start\" class=\"full-width\">\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"updateCourseForm.invalid\"\r\n              >\r\n                ویرایش\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin width50\"\r\n                (click)=\"onCancel()\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n              >\r\n                برگشت\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_update-product_update-product_module_ts.js.map