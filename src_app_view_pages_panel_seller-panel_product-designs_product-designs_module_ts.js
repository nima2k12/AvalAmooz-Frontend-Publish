"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_seller-panel_product-designs_product-designs_module_ts"],{

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

/***/ 8130:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/product-designs/product-designs-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDesignsRoutingModule": () => (/* binding */ ProductDesignsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_designs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-designs.component */ 9275);




const routes = [{ path: '', component: _product_designs_component__WEBPACK_IMPORTED_MODULE_0__.ProductDesignsComponent }];
let ProductDesignsRoutingModule = class ProductDesignsRoutingModule {
};
ProductDesignsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductDesignsRoutingModule);



/***/ }),

/***/ 9275:
/*!********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/product-designs/product-designs.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDesignsComponent": () => (/* binding */ ProductDesignsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_designs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-designs.component.html?ngResource */ 86245);
/* harmony import */ var _product_designs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-designs.component.scss?ngResource */ 85710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/product/ProductDetailModel */ 38637);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/product/product.service */ 60007);




/* eslint-disable max-len */











let ProductDesignsComponent = class ProductDesignsComponent {
  constructor(productService, fb, toastController, loadingController, activatedRoute, alertController, router) {
    this.productService = productService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.alertController = alertController;
    this.router = router;
    this.segmentSelected = 'Add';
    this.searchTitle = '';
    this.selectedProductId = 0;
    this.productSelected = false;
    this.selectedVideoIndex = -1;
    this.empty = false;
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      offPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      count: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      weight: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      isShow: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.addForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10000)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      offPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(90000000000)]],
      count: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      weight: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(20000000)]],
      isShow: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      const startPrice = params.startPrice ? params.startPrice : null;
      const endPrice = params.endPrice ? params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : null;
      const sortId = params.sortId ? params.sortId : 4;

      if (page === undefined) {
        filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModel(false, page, take, title);
      } else {
        if (startPrice == null && endPrice == null && categoryIds == null && sortId == null) {
          filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModel(false, page, take, title);
        } else {
          filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_3__.ProductFilterModel(true, page, take, title, startPrice, endPrice, false, false, categoryIds, sortId, false);
        }
      }

      this.filteredProducts = filter;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.productService.GetSellerProductsByFilter(filter).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          this.filteredProducts = res.data;
        } else {
          this.empty = true;
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onSelectVideo(index) {
    this.selectedVideoIndex = +index;
    this.updateForm.setValue({
      title: this.productDetail.productDesigns[+index].title,
      description: this.productDetail.productDesigns[+index].description,
      isShow: this.productDetail.productDesigns[+index].isShow,
      price: this.productDetail.productDesigns[+index].price,
      offPrice: this.productDetail.productDesigns[+index].offPrice,
      weight: this.productDetail.productDesigns[+index].weight,
      count: this.productDetail.productDesigns[+index].count
    });
  }

  presentAlertConfirm(index) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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
            _this.onDelete(index);
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
        message: 'آیا مطمئن هستید؟',
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

  presentAlertConfirm3() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    this.selectedVideoIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.productService.DeleteDesign(this.productDetail.productDesigns[this.selectedVideoIndex].productDesignId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        this.productDetail.productDesigns.splice(this.selectedVideoIndex, 1);
        this.updateForm.setValue({
          title: '',
          description: '',
          price: '',
          offPrice: '',
          count: '',
          weight: '',
          isShow: true
        }); // this.selectedCourseId = 0;
        // this.courseSelected = false;
        // this.setQueryParams(1);

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
    if (this.updateForm.valid || this.selectedVideoIndex != -1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
      this.productService.AddOrUpdateDesign(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_7__.ProductDesignViewModel(this.productDetail.productDesigns[this.selectedVideoIndex].productDesignId, this.productDetail.id, this.updateForm.value.count, this.updateForm.value.price, this.updateForm.value.offPrice, this.productDetail.productDesigns[this.selectedVideoIndex].isActive, this.updateForm.value.isShow, this.updateForm.value.title, this.updateForm.value.description, true, this.updateForm.value.weight)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.productDetail.productDesigns[this.selectedVideoIndex].title = this.updateForm.value.title;
          this.productDetail.productDesigns[this.selectedVideoIndex].price = this.updateForm.value.price;
          this.productDetail.productDesigns[this.selectedVideoIndex].offPrice = this.updateForm.value.offPrice;
          this.productDetail.productDesigns[this.selectedVideoIndex].isShow = this.updateForm.value.isShow;
          this.productDetail.productDesigns[this.selectedVideoIndex].description = this.updateForm.value.description;
          this.productDetail.productDesigns[this.selectedVideoIndex].count = this.updateForm.value.count;
          this.productDetail.productDesigns[this.selectedVideoIndex].weight = this.updateForm.value.weight;
          this.updateForm.setValue({
            title: '',
            description: '',
            price: '',
            offPrice: '',
            count: '',
            weight: '',
            isShow: true
          });
          this.selectedVideoIndex = -1; // this.onSelectItem(this.course);

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
      this.productService.AddOrUpdateDesign(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_7__.ProductDesignViewModel(0, this.productDetail.id, this.addForm.value.count, this.addForm.value.price, this.addForm.value.offPrice, false, this.addForm.value.isShow, this.addForm.value.title, this.addForm.value.description, false, this.addForm.value.weight)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            title: '',
            description: '',
            price: '',
            offPrice: '',
            count: '',
            weight: '',
            isShow: true
          });
          this.onSelectItem(this.product);
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
    this.router.navigate(['SellerPanel', 'ProductDesigns'], {
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

  onSelectItem(model) {
    this.selectedProductId = +model.id;
    this.product = model;
    this.selectedVideoIndex = -1; // tslint:disable-next-line: max-line-length

    this.productDetail = new _data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_4__.ProductDetailModel(this.selectedProductId, model.name, model.price, model.offPrice, 0, model.shortDescription, model.description, '', false, false, model.createDate, model.lastUpdateDate, false, [], false, model.seller);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
    this.productService.GetSellerProductDetailDesignsEditById(this.selectedProductId).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        const design = [];
        res.data.forEach(v => {
          design.push( // tslint:disable-next-line: max-line-length
          new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_7__.ProductDesignViewModel(v.id, v.productId, v.count, v.price, v.offPrice, v.isActive, v.isShow, v.title, v.description, v.isEdited, v.weight, v.productDesignId));
        });
        this.productDetail.productDesigns = design;
        this.updateForm.setValue({
          title: '',
          description: '',
          price: '',
          offPrice: '',
          count: '',
          weight: '',
          isShow: true
        });
        this.productSelected = true;
      } else {
        this.productDetail.productDesigns = [];
        this.selectedProductId = this.productDetail.id;
        this.productSelected = true;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
      this.productDetail.productDesigns = [];
      this.selectedProductId = 0;
      this.productSelected = false;
    });
  }

  onCancel() {
    this.selectedProductId = 0;
    this.productSelected = false;
  }

};

ProductDesignsComponent.ctorParameters = () => [{
  type: src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}];

ProductDesignsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-product-designs',
  template: _product_designs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_designs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductDesignsComponent);


/***/ }),

/***/ 6674:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/product-designs/product-designs.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDesignsModule": () => (/* binding */ ProductDesignsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_designs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-designs-routing.module */ 8130);
/* harmony import */ var _product_designs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-designs.component */ 9275);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);













let ProductDesignsModule = class ProductDesignsModule {
};
ProductDesignsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_product_designs_component__WEBPACK_IMPORTED_MODULE_2__.ProductDesignsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _product_designs_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductDesignsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], ProductDesignsModule);



/***/ }),

/***/ 85710:
/*!*********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/product-designs/product-designs.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGVzaWducy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0LWRlc2lnbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9pbnQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 86245:
/*!*********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/seller-panel/product-designs/product-designs.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/SellerPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>طرح های کالا</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid *ngIf=\"!productSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"جستجو کنید\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchTitle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>کالا های شما</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"empty\" dir=\"rtl\">\r\n                <ion-text color=\"warning\" class=\"text-center\">\r\n                  <h2>هنوز کالا ای ایجاد نکرده اید</h2>\r\n                </ion-text>\r\n              </div>\r\n              <div *ngIf=\"filteredProducts\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId > 3 &&\r\n                          filteredProducts.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId > 3 &&\r\n                          filteredProducts.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredProducts.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredProducts.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredProducts.pageId <= i + 3 &&\r\n                            filteredProducts.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredProducts.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredProducts.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredProducts.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredProducts.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredProducts.products\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let product of filteredProducts.products\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-seller-product\r\n                        class=\"point\"\r\n                        [product]=\"product\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-seller-product>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId > 3 &&\r\n                          filteredProducts.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId > 3 &&\r\n                          filteredProducts.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredProducts.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredProducts.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredProducts.pageId <= i + 3 &&\r\n                            filteredProducts.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredProducts.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredProducts.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredProducts.pageId + 2 < filteredProducts.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredProducts.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredProducts.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid\r\n      style=\"padding: 0px !important\"\r\n      class=\"ion-no-padding ion-margin-top\"\r\n      *ngIf=\"productSelected\"\r\n      class=\"bg\"\r\n    >\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment [(ngModel)]=\"segmentSelected\">\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>درج طرح</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"title\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیحات\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیح\"\r\n                    formControlName=\"description\"\r\n                    autoGrow=\"true\"\r\n                  ></ion-textarea>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"text-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >قیمت به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت به تومان\"\r\n                    formControlName=\"price\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >قیمت با تخفیف به تومان\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"قیمت با تخفیف به تومان\"\r\n                    formControlName=\"offPrice\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >تعداد\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"تعداد موجودی\"\r\n                    formControlName=\"count\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"link-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"stacked\">وزن </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"وزن به گرم\"\r\n                    formControlName=\"weight\"\r\n                    type=\"number\"\r\n                  ></ion-input>\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"barbell-outline\"\r\n                  ></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label> قابل نمایش</ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"isShow\"\r\n                    slot=\"start\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n              <ion-buttons slot=\"start\" class=\"full-width\">\r\n                <ion-button\r\n                  class=\"ion-margin width50\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"addForm.invalid\"\r\n                >\r\n                  درج\r\n                </ion-button>\r\n  \r\n                <ion-button\r\n                  class=\"ion-margin width50\"\r\n                  (click)=\"onCancel()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  برگشت\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>طرح ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"productDetail.productDesigns.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز طرحی درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"productDetail.productDesigns.length > 0\">\r\n                <ion-item\r\n                  *ngFor=\"let design of productDetail.productDesigns; let i = index\"\r\n                  button\r\n                  (click)=\"onSelectVideo(i)\"\r\n                >\r\n                  <ion-label\r\n                    color=\"{{ selectedVideoIndex == i ? 'warning2' : '' }}\"\r\n                    >{{ i + 1 + \"- \" + design.title }}</ion-label\r\n                  >\r\n                  <ion-text color=\"{{ design.isActive ? 'success' : 'danger' }}\">\r\n                    {{ design.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card>\r\n          <form [formGroup]=\"updateForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>ویرایش طرح</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >عنوان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"عنوان\"\r\n                      formControlName=\"title\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"text-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >توضیحات\r\n                    </ion-label>\r\n                    <ion-textarea\r\n                      placeholder=\"توضیح\"\r\n                      formControlName=\"description\"\r\n                      autoGrow=\"true\"\r\n                    ></ion-textarea>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"text-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >قیمت به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"قیمت به تومان\"\r\n                      formControlName=\"price\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >قیمت با تخفیف به تومان\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"قیمت با تخفیف به تومان\"\r\n                      formControlName=\"offPrice\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\" color=\"light\"\r\n                      >تعداد\r\n                    </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"تعداد موجودی\"\r\n                      formControlName=\"count\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"link-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label color=\"light\" position=\"stacked\">وزن </ion-label>\r\n                    <ion-input\r\n                      placeholder=\"وزن به گرم\"\r\n                      formControlName=\"weight\"\r\n                      type=\"number\"\r\n                    ></ion-input>\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"barbell-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label> قابل نمایش</ion-label>\r\n                    <ion-checkbox\r\n                      formControlName=\"isShow\"\r\n                      slot=\"start\"\r\n                    ></ion-checkbox>\r\n                  </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-toolbar dir=\"rtl\" class=\"fixed-bottom-sticky2 round\">\r\n              <ion-buttons slot=\"start\" class=\"full-width\">\r\n                <ion-button\r\n                  class=\"ion-margin width50\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"\r\n                    updateForm.invalid || selectedVideoIndex === -1\r\n                  \"\r\n                >\r\n                  ویرایش\r\n                </ion-button>\r\n  \r\n                <ion-button\r\n                  class=\"ion-margin width50\"\r\n                  (click)=\"onCancel()\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                >\r\n                  برگشت\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_seller-panel_product-designs_product-designs_module_ts.js.map