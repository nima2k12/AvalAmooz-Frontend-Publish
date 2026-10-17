"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_update-product-video_update-product-video_module_ts"],{

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

/***/ 1286:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-video/update-product-video-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductVideoRoutingModule": () => (/* binding */ UpdateProductVideoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_product_video_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product-video.component */ 93443);




const routes = [{ path: '', component: _update_product_video_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProductVideoComponent }];
let UpdateProductVideoRoutingModule = class UpdateProductVideoRoutingModule {
};
UpdateProductVideoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UpdateProductVideoRoutingModule);



/***/ }),

/***/ 93443:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-video/update-product-video.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductVideoComponent": () => (/* binding */ UpdateProductVideoComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_product_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-video.component.html?ngResource */ 57048);
/* harmony import */ var _update_product_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-video.component.scss?ngResource */ 16777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var src_app_data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/product/ProductDetailModel */ 38637);
/* harmony import */ var src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);














let UpdateProductVideoComponent = class UpdateProductVideoComponent {
  constructor(courseService, fb, toastController, loadingController, activatedRoute, alertController, router) {
    this.courseService = courseService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.alertController = alertController;
    this.router = router;
    this.segmentSelected = 'Add';
    this.searchTitle = '';
    this.selectedCourseId = 0;
    this.courseSelected = false;
    this.selectedVideoIndex = -1;
    this.empty = false;
  }

  ngOnInit() {
    this.updateVideoForm = this.fb.group({
      videoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrlOnline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoTime: ['00:00', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(5)]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isAparat: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFile: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPredictionOnline: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.addVideoForm = this.fb.group({
      videoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoUrlOnline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      videoTime: ['00:00', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(5)]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isAparat: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      isFile: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPrediction: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      hasPredictionOnline: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
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
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.courseService.GetAdminProductsByFilter(filter).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
          this.filteredCourses = res.data;
        } else {
          this.empty = true;
        }
      }, err => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    });
  }

  onSelectVideo(index) {
    this.selectedVideoIndex = +index;
    this.updateVideoForm.setValue({
      videoName: this.courseDetail.productVideos[+index].courseTitle,
      videoDescription: this.courseDetail.productVideos[+index].videoDescription,
      videoUrl: this.courseDetail.productVideos[+index].videoUrl,
      videoUrlOnline: this.courseDetail.productVideos[+index].videoUrlOnline,
      videoTime: this.courseDetail.productVideos[+index].videoTime,
      isFree: this.courseDetail.productVideos[+index].isFree,
      isAparat: this.courseDetail.productVideos[+index].isAparat,
      isFile: this.courseDetail.productVideos[+index].isFile,
      hasPrediction: this.courseDetail.productVideos[+index].hasPrediction,
      hasPredictionOnline: this.courseDetail.productVideos[+index].hasPredictionOnline
    });
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

  presentAlertConfirm(index) {
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
            _this3.onDelete(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    this.selectedVideoIndex = +index;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminDeleteProductVideo(this.courseDetail.productVideos[this.selectedVideoIndex].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        this.courseDetail.productVideos.splice(this.selectedVideoIndex, 1);
        this.updateVideoForm.setValue({
          videoName: '',
          videoDescription: '',
          videoUrl: '',
          videoUrlOnline: '',
          videoTime: '00:00',
          isFree: false,
          isAparat: false,
          isFile: false,
          hasPrediction: false,
          hasPredictionOnline: false
        }); // this.selectedCourseId = 0;
        // this.courseSelected = false;
        // this.setQueryParams(1);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.updateVideoForm.valid || this.selectedVideoIndex != -1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      let video = new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductVideoModel(this.courseDetail.productVideos[this.selectedVideoIndex].id, false, this.updateVideoForm.value.videoName, this.updateVideoForm.value.videoUrl, this.updateVideoForm.value.videoTime, this.updateVideoForm.value.isFree, this.updateVideoForm.value.videoDescription, this.updateVideoForm.value.isFile, this.updateVideoForm.value.isAparat, this.updateVideoForm.value.videoUrlOnline, this.updateVideoForm.value.hasPrediction, this.updateVideoForm.value.hasPredictionOnline);
      this.courseService.AdminAddOrUpdateProductVideo(new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateProductVideoModel(this.courseDetail.id, video)).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.courseDetail.productVideos[this.selectedVideoIndex].courseTitle = this.updateVideoForm.value.videoName;
          this.courseDetail.productVideos[this.selectedVideoIndex].isAparat = this.updateVideoForm.value.isAparat;
          this.courseDetail.productVideos[this.selectedVideoIndex].isFile = this.updateVideoForm.value.isFile;
          this.courseDetail.productVideos[this.selectedVideoIndex].isFree = this.updateVideoForm.value.isFree;
          this.courseDetail.productVideos[this.selectedVideoIndex].videoDescription = this.updateVideoForm.value.videoDescription;
          this.courseDetail.productVideos[this.selectedVideoIndex].videoTime = this.updateVideoForm.value.videoTime;
          this.courseDetail.productVideos[this.selectedVideoIndex].videoUrl = this.updateVideoForm.value.videoUrl;
          this.courseDetail.productVideos[this.selectedVideoIndex].videoUrlOnline = this.updateVideoForm.value.videoUrlOnline;
          this.courseDetail.productVideos[this.selectedVideoIndex].hasPrediction = this.updateVideoForm.value.hasPrediction;
          this.courseDetail.productVideos[this.selectedVideoIndex].hasPredictionOnline = this.updateVideoForm.value.hasPredictionOnline;
          this.updateVideoForm.setValue({
            videoName: '',
            videoDescription: '',
            videoUrl: '',
            videoUrlOnline: '',
            videoTime: '00:00',
            isFree: false,
            isAparat: false,
            isFile: false,
            hasPrediction: false,
            hasPredictionOnline: false
          });
          this.selectedVideoIndex = -1; // this.onSelectItem(this.course);

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

  onAdd() {
    if (this.addVideoForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.courseService.AdminAddOrUpdateProductVideo(new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateProductVideoModel(this.courseDetail.id, new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductVideoModel(null, false, this.addVideoForm.value.videoName, this.addVideoForm.value.videoUrl, this.addVideoForm.value.videoTime, this.addVideoForm.value.isFree, this.addVideoForm.value.videoDescription, this.addVideoForm.value.isFile, this.addVideoForm.value.isAparat, this.addVideoForm.value.videoUrlOnline, this.addVideoForm.value.hasPrediction, this.addVideoForm.value.hasPredictionOnline))).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.addVideoForm.setValue({
            videoName: '',
            videoDescription: '',
            videoUrl: '',
            videoUrlOnline: '',
            videoTime: '00:00',
            isFree: false,
            isAparat: false,
            isFile: false,
            hasPrediction: false,
            hasPredictionOnline: false
          });
          this.onSelectItem(this.course);
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

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
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
    this.router.navigate(['SuperAdminPanel', 'UpdateProductVideo'], {
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
    this.selectedCourseId = +model.id;
    this.course = model; // tslint:disable-next-line: max-line-length

    this.courseDetail = new src_app_data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_6__.ProductDetailModel(this.selectedCourseId, model.name, model.price, model.offPrice, 0, model.shortDescription, model.description, '', false, false, model.createDate, model.lastUpdateDate, false, [], false, model.seller);
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.GetAdminProductDetailVideosById(this.selectedCourseId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        const video = [];
        res.data.forEach(v => {
          video.push( // tslint:disable-next-line: max-line-length
          new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline));
        });
        this.courseDetail.productVideos = video;
        this.updateVideoForm.setValue({
          videoName: '',
          videoDescription: '',
          videoUrl: '',
          videoUrlOnline: '',
          videoTime: '00:00',
          isFree: false,
          isAparat: false,
          isFile: false,
          hasPrediction: false,
          hasPredictionOnline: false
        });
        this.courseSelected = true;
      } else {
        this.courseDetail.productVideos = [];
        this.selectedCourseId = 0;
        this.courseSelected = false;
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      this.courseDetail.productVideos = [];
      this.selectedCourseId = 0;
      this.courseSelected = false;
    });
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

UpdateProductVideoComponent.ctorParameters = () => [{
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService
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

UpdateProductVideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-update-product-video',
  template: _update_product_video_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_product_video_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateProductVideoComponent);


/***/ }),

/***/ 39044:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-video/update-product-video.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductVideoModule": () => (/* binding */ UpdateProductVideoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_product_video_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-video-routing.module */ 1286);
/* harmony import */ var _update_product_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-video.component */ 93443);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);













let UpdateProductVideoModule = class UpdateProductVideoModule {
};
UpdateProductVideoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_update_product_video_component__WEBPACK_IMPORTED_MODULE_2__.UpdateProductVideoComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _update_product_video_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateProductVideoRoutingModule,
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
], UpdateProductVideoModule);



/***/ }),

/***/ 16777:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-video/update-product-video.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9kdWN0LXZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS1wcm9kdWN0LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 57048:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-video/update-product-video.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/SuperAdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>ویرایش ویدئو دوره</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"جستجو کنید\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchTitle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>دوره های شما</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"empty\" dir=\"rtl\">\r\n                <ion-text color=\"warning\" class=\"text-center\">\r\n                  <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n                </ion-text>\r\n              </div>\r\n              <div *ngIf=\"filteredCourses\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 3 &&\r\n                            filteredCourses.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredCourses.products\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let course of filteredCourses.products\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-seller-product\r\n                        class=\"point\"\r\n                        [product]=\"course\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-seller-product>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 3 &&\r\n                            filteredCourses.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid\r\n      style=\"padding: 0px !important\"\r\n      class=\"ion-no-padding ion-margin-top\"\r\n      *ngIf=\"courseSelected\"\r\n      class=\"bg\"\r\n    >\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment [(ngModel)]=\"segmentSelected\">\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <form [formGroup]=\"addVideoForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>درج ویدئو</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان ویدئو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"videoName\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیح ویدئو\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیح\"\r\n                    formControlName=\"videoDescription\"\r\n                    autoGrow=\"true\"\r\n                  ></ion-textarea>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس ویدئو فشرده شده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"videoUrl\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس ویدئو آنلاین\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"videoUrlOnline\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >مدت زمان ویدیو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"00:00\"\r\n                    formControlName=\"videoTime\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label> رایگان است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isFree\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ویدیو در آپارات است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isAparat\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>فایل غیر ویدئو است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isFile\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آدرس ویدیو کامل است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"hasPrediction\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آدرس ویدیو آنلاین کامل است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"hasPredictionOnline\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"addVideoForm.invalid\"\r\n            >\r\n              درج ویدیو\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویدئو ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"courseDetail.productVideos.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز ویدیویی درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"courseDetail.productVideos.length > 0\">\r\n                <ion-item\r\n                  *ngFor=\"let video of courseDetail.productVideos; let i = index\"\r\n                  button\r\n                  (click)=\"onSelectVideo(i)\"\r\n                >\r\n                  <ion-label color=\"{{ selectedVideoIndex == i ? 'warning2' : '' }}\">{{ (i + 1) + '- ' + video.courseTitle }}</ion-label>\r\n                  <ion-text color=\"{{ video.isActive ? 'success' : 'danger' }}\">\r\n                    {{ video.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card>\r\n          <form [formGroup]=\"updateVideoForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>ویرایش ویدئو</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان ویدئو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"videoName\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >توضیح ویدئو\r\n                  </ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"توضیح\"\r\n                    formControlName=\"videoDescription\"\r\n                    autoGrow=\"true\"\r\n                  ></ion-textarea>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس ویدئو فشرده شده\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"videoUrl\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس ویدئو آنلاین\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"videoUrlOnline\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >مدت زمان ویدیو\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"00:00\"\r\n                    formControlName=\"videoTime\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label> رایگان است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isFree\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>ویدیو در آپارات است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isAparat\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>فایل غیر ویدئو است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"isFile\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آدرس ویدیو کامل است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"hasPrediction\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>آدرس ویدیو آنلاین کامل است؟</ion-label>\r\n                  <ion-checkbox formControlName=\"hasPredictionOnline\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"updateVideoForm.invalid || selectedVideoIndex === -1\"\r\n            >\r\n              ویرایش ویدیو\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_update-product-video_update-product-video_module_ts.js.map