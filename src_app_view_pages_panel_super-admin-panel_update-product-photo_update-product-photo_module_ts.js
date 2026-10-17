"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_update-product-photo_update-product-photo_module_ts"],{

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

/***/ 78912:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-photo/update-product-photo-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductPhotoRoutingModule": () => (/* binding */ UpdateProductPhotoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _update_product_photo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-product-photo.component */ 94016);




const routes = [{ path: '', component: _update_product_photo_component__WEBPACK_IMPORTED_MODULE_0__.UpdateProductPhotoComponent }];
let UpdateProductPhotoRoutingModule = class UpdateProductPhotoRoutingModule {
};
UpdateProductPhotoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], UpdateProductPhotoRoutingModule);



/***/ }),

/***/ 94016:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-photo/update-product-photo.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductPhotoComponent": () => (/* binding */ UpdateProductPhotoComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_product_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-photo.component.html?ngResource */ 47940);
/* harmony import */ var _update_product_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-photo.component.scss?ngResource */ 64290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var src_app_data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/model/product/ProductDetailModel */ 38637);
/* harmony import */ var src_app_data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var src_app_data_service_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/product/product.service */ 60007);




/* eslint-disable max-len */











let UpdateProductPhotoComponent = class UpdateProductPhotoComponent {
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
    this.selectedIndex = -1;
    this.empty = false;
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]]
    });
    this.addForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]],
      url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(1000000)]]
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

  presentAlertConfirm2() {
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

  presentAlertConfirm3() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
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
            _this2.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSelect(index) {
    this.selectedIndex = +index;
    this.updateForm.setValue({
      name: this.courseDetail.productImages[+index].title,
      url: this.courseDetail.productImages[+index].url
    });
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
    this.selectedIndex = +index;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.courseService.AdminDeleteProductImage(this.courseDetail.productImages[this.selectedIndex].id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        this.courseDetail.productImages.splice(this.selectedIndex, 1);
        this.updateForm.setValue({
          name: '',
          url: ''
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
    if (this.updateForm.valid || this.selectedIndex != -1) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.courseService.AdminAddOrUpdateProductImage(new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateProductImageModel(this.courseDetail.id, new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductImageModel(this.courseDetail.productImages[this.selectedIndex].id, false, this.updateForm.value.name, this.updateForm.value.url))).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.courseDetail.productImages[this.selectedIndex].title = this.updateForm.value.name;
          this.courseDetail.productImages[this.selectedIndex].url = this.updateForm.value.url;
          this.updateForm.setValue({
            name: '',
            url: ''
          });
          this.selectedIndex = -1; // this.onSelectItem(this.course);

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
    if (this.addForm.valid) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.courseService.AdminAddOrUpdateProductImage(new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.AddOrUpdateProductImageModel(this.courseDetail.id, new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductImageModel(null, false, this.addForm.value.name, this.addForm.value.url))).subscribe(res => {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            name: '',
            url: ''
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
    this.router.navigate(['SuperAdminPanel', 'UpdateProductPhoto'], {
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
    this.courseService.GetAdminProductDetailImagesById(this.selectedCourseId).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus === res.status) {
        const photos = [];
        res.data.forEach(v => {
          photos.push( // tslint:disable-next-line: max-line-length
          new src_app_data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_5__.ProductImageModel(v.id, v.isActive, v.title, v.url));
        });
        this.courseDetail.productImages = photos;
        this.updateForm.setValue({
          name: '',
          url: ''
        });
        this.courseSelected = true;
      } else {
        this.courseDetail.productImages = [];
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        this.selectedCourseId = 0;
        this.courseSelected = false;
      }
    }, err => {
      this.courseDetail.productImages = [];
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      this.selectedCourseId = 0;
      this.courseSelected = false;
    });
  }

  onCancel() {
    this.selectedCourseId = 0;
    this.courseSelected = false;
  }

};

UpdateProductPhotoComponent.ctorParameters = () => [{
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

UpdateProductPhotoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-update-product-photo',
  template: _update_product_photo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_update_product_photo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UpdateProductPhotoComponent);


/***/ }),

/***/ 16170:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-photo/update-product-photo.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProductPhotoModule": () => (/* binding */ UpdateProductPhotoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _update_product_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-product-photo-routing.module */ 78912);
/* harmony import */ var _update_product_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-product-photo.component */ 94016);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);












let UpdateProductPhotoModule = class UpdateProductPhotoModule {
};
UpdateProductPhotoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_update_product_photo_component__WEBPACK_IMPORTED_MODULE_2__.UpdateProductPhotoComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _update_product_photo_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateProductPhotoRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_5__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], UpdateProductPhotoModule);



/***/ }),

/***/ 64290:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-photo/update-product-photo.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9kdWN0LXBob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InVwZGF0ZS1wcm9kdWN0LXBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 47940:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/update-product-photo/update-product-photo.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          color=\"lightest\"\r\n          defaultHref=\"/SuperAdminPanel\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>ویرایش تصاویر دوره</span>\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-grid *ngIf=\"!courseSelected\" class=\"bg\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"جستجو کنید\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchTitle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle style=\"text-align: center\"\r\n                >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n              >\r\n              <ion-card-title style=\"text-align: center\"\r\n                ><h1>دوره های شما</h1></ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"empty\" dir=\"rtl\">\r\n                <ion-text color=\"warning\" class=\"text-center\">\r\n                  <h2>هنوز دوره ای ایجاد نکرده اید</h2>\r\n                </ion-text>\r\n              </div>\r\n              <div *ngIf=\"filteredCourses\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 3 &&\r\n                            filteredCourses.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredCourses.products\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let course of filteredCourses.products\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-seller-product\r\n                        class=\"point\"\r\n                        [product]=\"course\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-seller-product>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n  \r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 3 &&\r\n                          filteredCourses.pageCount > 3\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 3 &&\r\n                            filteredCourses.pageId >= i - 1\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n  \r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid\r\n      style=\"padding: 0px !important\"\r\n      class=\"ion-no-padding ion-margin-top\"\r\n      *ngIf=\"courseSelected\"\r\n      class=\"bg\"\r\n    >\r\n      <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n        <ion-segment [(ngModel)]=\"segmentSelected\">\r\n          <ion-segment-button value=\"Add\">\r\n            <ion-label>درج</ion-label>\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"Update\">\r\n            <ion-label>ویرایش</ion-label>\r\n            <ion-icon name=\"sync-outline\"></ion-icon>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-toolbar>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertConfirm3()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>درج تصویر</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان تصویر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس تصویر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"url\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"addForm.invalid\"\r\n            >\r\n              درج تصویر\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>تصاویر</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"courseDetail.productImages.length <= 0\">\r\n                <ion-item>\r\n                  <ion-label color=\"warning\" class=\"text-center\"\r\n                    >هنوز تصویری درج نشده است</ion-label\r\n                  >\r\n                </ion-item>\r\n              </div>\r\n              <div *ngIf=\"courseDetail.productImages.length > 0\">\r\n                <ion-item\r\n                  *ngFor=\"let image of courseDetail.productImages; let i = index\"\r\n                  button\r\n                  (click)=\"onSelect(i)\"\r\n                >\r\n                  <ion-label>{{ image.title }}</ion-label>\r\n                  <ion-text color=\"{{ image.isActive ? 'success' : 'danger' }}\">\r\n                    {{ image.isActive ? \"فعال\" : \"غیر فعال\" }}\r\n                  </ion-text>\r\n                  <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </ion-card>\r\n          <form [formGroup]=\"updateForm\" (ngSubmit)=\"presentAlertConfirm2()\">\r\n            <ion-card>\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label>ویرایش تصویر</ion-label>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >عنوان تصویر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"عنوان\"\r\n                    formControlName=\"name\"\r\n                    type=\"text\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\" color=\"light\"\r\n                    >آدرس تصویر\r\n                  </ion-label>\r\n                  <ion-input\r\n                    placeholder=\"http://...\"\r\n                    formControlName=\"url\"\r\n                    type=\"url\"\r\n                  ></ion-input>\r\n                  <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"updateForm.invalid || selectedIndex === -1\"\r\n            >\r\n              ویرایش تصویر\r\n            </ion-button>\r\n  \r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              (click)=\"onCancel()\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n            >\r\n              بازگشت\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_update-product-photo_update-product-photo_module_ts.js.map