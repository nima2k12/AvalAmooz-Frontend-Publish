"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_view_pages_product_product-by-id_product-by-id_module_ts"],{

/***/ 35843:
/*!******************************************************!*\
  !*** ./src/app/data/model/order/ProductCartModel.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCartModel": () => (/* binding */ ProductCartModel),
/* harmony export */   "ProductCartStatusViewModel": () => (/* binding */ ProductCartStatusViewModel)
/* harmony export */ });
class ProductCartStatusViewModel {
    constructor(id, cartId, productId, productName, statusCode, description, price) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.cartId = cartId;
        this.statusCode = statusCode;
        this.description = description;
        this.price = price;
    }
}
class ProductCartModel {
    constructor(productId, orderSendTypeId, count, weight, designId, id, name, price, offPrice, seller, sendRefId, description, statusCode, defaultSendPrice, defaultPriceEachKg, cartId, extraDeliveryPrice, hasFreeSend) {
        this.hasFreeSend = hasFreeSend;
        this.productId = productId;
        this.extraDeliveryPrice = extraDeliveryPrice ? extraDeliveryPrice : 0;
        this.orderSendTypeId = orderSendTypeId;
        this.count = count;
        this.weight = weight;
        this.designId = designId;
        this.id = id;
        this.name = name;
        this.price = price;
        this.offPrice = offPrice;
        this.seller = seller;
        this.sendRefId = sendRefId;
        this.description = description;
        this.statusCode = statusCode;
        this.defaultSendPrice = defaultSendPrice;
        this.defaultPriceEachKg = defaultPriceEachKg;
        this.cartId = cartId;
    }
}


/***/ }),

/***/ 94880:
/*!**************************************************!*\
  !*** ./src/app/data/model/person/SellerModel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerModel": () => (/* binding */ SellerModel),
/* harmony export */   "SellerUserDetailModel": () => (/* binding */ SellerUserDetailModel),
/* harmony export */   "SellerUserFilterModel": () => (/* binding */ SellerUserFilterModel)
/* harmony export */ });
class SellerModel {
    constructor(id, name, family, resume, userAvatarAddress, isRested, countryId, provinceId, cityId, countryName, provinceName, cityName) {
        this.id = id;
        this.name = name;
        this.family = family;
        this.resume = resume;
        this.userAvatarAddress = userAvatarAddress;
        this.isRested = isRested;
        this.countryId = countryId;
        this.provinceId = provinceId;
        this.cityId = cityId;
        this.countryName = countryName;
        this.provinceName = provinceName;
        this.cityName = cityName;
    }
}
class SellerUserDetailModel {
    constructor(id, email, phone, name, family, address, identificationCode, nationalCode, birthDay, isActive, resume, userAvatarAddress, isShow, mainResume, site, telegram, instagram, whatsApp, linkedIn, isProductDisabled, hasFreeSendPrediction, freeSendPredictionPrice, minBikeDeliveryPrice, bikeDeliveryPriceEachKg, minTipaxPrice, tipaxPriceEachKg, minPostPrice, postPriceEachKg, minSpecialPostPrice, specialPostPriceEachKg, minBurberryPrice, burberryPriceEachKg, isEdited, countryId, provinceId, cityId) {
        this.cityId = cityId;
        this.provinceId = provinceId;
        this.countryId = countryId;
        this.isEdited = isEdited;
        this.burberryPriceEachKg = burberryPriceEachKg;
        this.minBurberryPrice = minBurberryPrice;
        this.specialPostPriceEachKg = specialPostPriceEachKg;
        this.minSpecialPostPrice = minSpecialPostPrice;
        this.postPriceEachKg = postPriceEachKg;
        this.minPostPrice = minPostPrice;
        this.tipaxPriceEachKg = tipaxPriceEachKg;
        this.minTipaxPrice = minTipaxPrice;
        this.bikeDeliveryPriceEachKg = bikeDeliveryPriceEachKg;
        this.minBikeDeliveryPrice = minBikeDeliveryPrice;
        this.freeSendPredictionPrice = freeSendPredictionPrice;
        this.hasFreeSendPrediction = hasFreeSendPrediction;
        this.isProductDisabled = isProductDisabled;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.family = family;
        this.address = address;
        this.identificationCode = identificationCode;
        this.nationalCode = nationalCode;
        this.birthDay = birthDay;
        this.isActive = isActive;
        this.resume = resume;
        this.userAvatarAddress = userAvatarAddress;
        this.isShow = isShow;
        this.mainResume = mainResume;
        this.site = site;
        this.telegram = telegram;
        this.instagram = instagram;
        this.whatsApp = whatsApp;
        this.linkedIn = linkedIn;
    }
}
class SellerUserFilterModel {
    constructor(pageId, takeEntity, title, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 12;
        }
        this.pageId = pageId ? +pageId : 1;
        this.title = title ? title : null;
        this.searchId = searchId ? +searchId : 0;
    }
}


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

/***/ 94788:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/product/product-by-id/product-by-id-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductByIdRoutingModule": () => (/* binding */ ProductByIdRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-by-id.component */ 78227);




const routes = [{ path: '', component: _product_by_id_component__WEBPACK_IMPORTED_MODULE_0__.ProductByIdComponent }];
let ProductByIdRoutingModule = class ProductByIdRoutingModule {
};
ProductByIdRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductByIdRoutingModule);



/***/ }),

/***/ 78227:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/product/product-by-id/product-by-id.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductByIdComponent": () => (/* binding */ ProductByIdComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-by-id.component.html?ngResource */ 48008);
/* harmony import */ var _product_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-by-id.component.scss?ngResource */ 31260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/i18n/site-language.service */ 37159);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/service/order/order.service */ 22773);
/* harmony import */ var _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../data/model/order/ProductCartModel */ 35843);
/* harmony import */ var _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../data/model/order/CartModel */ 47968);
/* harmony import */ var _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../data/model/product/AddOrUpdateProductModel */ 51567);
/* harmony import */ var _data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../data/model/person/SellerModel */ 94880);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _components_modal_full_screen_photo_modal_full_screen_photo_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/modal/full-screen-photo-modal/full-screen-photo-modal.component */ 4729);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper */ 63587);
/* harmony import */ var _components_modal_product_rate_modal_product_rate_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/modal/product-rate-modal/product-rate-modal.component */ 33811);
/* harmony import */ var _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/common/CryptographyHelper */ 24784);




/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/no-unused-expressions */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */
















 // import { ReCaptchaV3Service } from 'ngx-captcha';
// import { load } from 'recaptcha-v3';





 // install Swiper modules

swiper__WEBPACK_IMPORTED_MODULE_16__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_16__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_16__.Navigation]);
let ProductByIdComponent = class ProductByIdComponent {
  constructor(activatedRoute, productService, orderService, fb, toastController, loadingController, alertController, modalCtrl, router, domSanitizer, // private reCaptchaV3Service: ReCaptchaV3Service,
  sanitizer, title, meta, routerOutlet, language, menuCtrl) {
    this.activatedRoute = activatedRoute;
    this.productService = productService;
    this.orderService = orderService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.sanitizer = sanitizer;
    this.title = title;
    this.meta = meta;
    this.routerOutlet = routerOutlet;
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.appendNumber = 4;
    this.prependNumber = 1;
    this.commentReqCount = 0;
    this.isMoreCommentsDisable = false;
    this.leave = false;
    this.isLoading2 = false;
    this.isCourseDisabled = false;
    this.isProductDisabled = false;
    this.sameProduct = [];
    this.productCart = [];
    this.images = [];
    this.selectedImageIndex = 0;
    this.excludeTracks = [];
    this.links = [];
    this.productCategores = [];
    this.productCategores2 = [];
    this.queryText = '';
    this.catIds = '';
    this.showSearchbar = false;
    this.searchOpen = false;
    this.windowWidth = 1000;
    this.readMore = 'readMore';
    this.readMore2 = 'readMore';
    this.count = 1;
    this.designId = 0;
    this.weight = 0;
    this.sendTypeId = '9';
    this.designeSelectedId = -1;
    this.existInCart = false;
    this.loggedIn = false;
    this.isLoading = true;
    this.isBuyReady = false;
    this.isBuyReady1 = false;
    this.isBuyReady2 = false;
    this.isLikeLoadingShow = false;
    this.whatsappShare = '';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.videoDetail = [];
    this.commentShow = true;
    this.tags = [];
    this.isLoadingComments = false;
    this.isUserLikedLoading = true;
    this.checkBuy = false;
    this.checkBuy2 = true;
    this.isBuyLoading = true;
    this.isFirstCommentShow = false;
    this.isCommentsEmpty = false;
    this.comments = [];
    this.count1 = 0;
    this.count2 = 0;
    this.isReplyMode = false;
    this.isReportMode = false;
    this.isReportCourseMode = false;
    this.replyId = 0;
    this.instagram = '';
    this.twiter = '';
    this.facebook = '';
    this.telegram = '';
    this.pinterest = '';
    this.aparat = '';
    this.discord = '';
    this.youtube = '';
    this.twitch = '';
    this.linkedin = '';
    src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  get cartCount() {
    return this.count1 + this.count2;
  }

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  url(path) {
    return this.language.url(path);
  }

  prepend() {
    this.sliderRef.swiperRef.prependSlide('<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>');
  }

  prepend2() {
    this.sliderRef.swiperRef.prependSlide(['<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>', '<div class="swiper-slide">Slide ' + --this.prependNumber + '</div>']);
  }

  append() {
    this.sliderRef.swiperRef.appendSlide('<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>');
  }

  append2() {
    this.sliderRef.swiperRef.appendSlide(['<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>', '<div class="swiper-slide">Slide ' + ++this.appendNumber + '</div>']);
  }

  alert() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'فروشگاه تعطیل است',
        backdropDismiss: false,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  onCall() {
    window.location.href = 'tel:00989394134387';
  }

  onGetProductPoint() {
    if (this.designeSelectedId == -1) {
      if (this.product.offPrice != 0) {
        return (this.product.offPrice / 1000).toString();
      } else {
        return (this.product.price / 1000).toString();
      }
    } else {
      if (this.product.productDesigns[this.designeSelectedId].offPrice != 0) {
        return (this.product.productDesigns[this.designeSelectedId].offPrice / 1000).toString();
      } else {
        return (this.product.productDesigns[this.designeSelectedId].price / 1000).toString();
      }
    }
  }

  onMakeArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  onPhotoGallery(i) {
    this.selectedImageIndex = i;
    this.presentModal();
  }

  presentModal() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: _components_modal_full_screen_photo_modal_full_screen_photo_modal_component__WEBPACK_IMPORTED_MODULE_15__.FullScreenPhotoModalComponent,
        cssClass: 'full-width-modal',
        swipeToClose: true,
        componentProps: {
          gallery: _this3.images,
          selectedImageIndex: _this3.selectedImageIndex
        }
      });
      return yield modal.present();
    })();
  }

  onGetProductCartCount() {
    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id;
      this.weight = this.product.productDesigns[this.designeSelectedId].weight;
    } else {
      this.designId = 0;
      this.weight = this.product.weight;
    }

    if (this.cart == null) {
      return 0;
    } else if (this.cart.products == null) {
      return 0;
    } else {
      const model = this.cart.products.find(e => e.productId == this.product.id && e.designId == this.designId);

      if (model == null || model == undefined) {
        return 0;
      } else {
        // tslint:disable-next-line: no-unused-expression
        return model.count;
      }
    }
  }

  onCountIncrease() {
    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id; // tslint:disable-next-line: max-line-length

      if (this.existInCart ? 0 <= this.product.productDesigns[this.designeSelectedId].count - (this.cart.products.find(e => e.productId == this.product.id && e.designId == this.designId).count + 1) : this.count + 1 <= this.product.productDesigns[this.designeSelectedId].count) {
        this.count++;

        if (this.loggedIn && this.existInCart) {
          this.onCountChangeTimer();
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی محدود است');
      }
    } else {
      this.designId = 0; // tslint:disable-next-line: max-line-length

      if (this.existInCart ? 0 <= this.product.count - (this.cart.products.find(e => e.productId == this.product.id && e.designId == this.designId).count + 1) : this.count + 1 <= this.product.count) {
        this.count++;

        if (this.loggedIn && this.existInCart) {
          this.onCountChangeTimer();
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی محدود است');
      }
    }
  }

  onCountDecrease() {
    if (this.count - 1 >= 1) {
      this.count--;

      if (this.loggedIn && this.existInCart) {
        this.onCountChangeTimer();
      }
    } else {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
    }
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  onReadMoreOrLess() {
    this.readMore == 'readMore' ? this.readMore = 'readLess' : this.readMore = 'readMore';
  }

  onReadMoreOrLess2() {
    this.readMore2 == 'readMore' ? this.readMore2 = 'readLess' : this.readMore2 = 'readMore';
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  onCancel() {
    this.showSearchbar = false;
  }

  search() {
    if (this.queryText == null || this.queryText.length < 1) {
      return;
    }

    this.router.navigate(['Product', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    this.commentShow = !this.commentShow;
  }

  updateTitle(title = 'اول آموز - فروشگاه کاربرگ‌ها و محصولات آموزشی دبستان') {
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'og:title',
      content: title
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: title
    });
    this.meta.updateTag({
      property: 'og:title',
      content: title
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: title
    });
  }

  updateOgUrl(url = 'http://localhost:4300/') {
    this.meta.updateTag({
      name: 'og:url',
      content: url
    });
    this.meta.updateTag({
      name: 'twitter:url',
      content: url
    });
    this.meta.updateTag({
      name: 'og:image',
      content: this.product.imageNamePNG
    });
    this.meta.updateTag({
      property: 'og:image',
      content: this.product.imageNamePNG
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.product.imageNamePNG
    });
    this.meta.updateTag({
      name: 'og:image:alt',
      content: this.product.name
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: this.product.name
    });
  }

  updateDescription(desc = 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است') {
    this.meta.updateTag({
      name: 'description',
      content: desc
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: desc
    });
    this.meta.updateTag({
      name: 'og:description',
      content: desc
    });
    this.meta.updateTag({
      property: 'og:description',
      content: desc
    });
    this.meta.updateTag({
      itemprop: 'description',
      content: desc
    });
  }

  checkURL2(id) {
    const item = this.product.productVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoUrl.split('/');
    const videoLength = video.length;
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + video[videoLength - 1] + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onGetVideoFormat(id) {
    // const item = this.product.productVideos.find(e => e.id == +id);
    // if (item == null) {
    //   return '';
    // }
    // const video = item.videoUrlOnline.split('.');
    // const videoLength = video.length;
    // const format = video[videoLength - 1];
    // return 'video/' + format;
    return 'video/mp4';
  }

  onCheckNew() {
    const date1 = new Date(this.product.createDate);
    const date2 = new Date();
    let diff = date2.getTime() - date1.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    diff -= seconds * 1000;

    if (days < 30) {
      return true;
    } else {
      return false;
    }
  }

  checkVideoUrl2(id) {
    const item = this.product.productVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoUrl.split('/');
    const videoLength = video.length;
    const url = 'https://www.aparat.com/v/' + video[videoLength - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  totalVideoTime() {
    let time = '00:00';
    let h = 0;
    let m = 0;
    let s = 0;
    this.product.productVideos.forEach(vid => {
      if (vid.videoTime != null && vid.videoTime != '00:00') {
        const str = vid.videoTime.split(':', 2);
        m += +str[0];
        s += +str[1];
      }
    });

    if (s >= 60) {
      m += Math.floor(s / 60);
      s = s % 60;
    }

    if (m >= 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }

    time = (h < 10 ? '0' + h.toString() : h.toString()) + ':' + (m < 10 ? '0' + m.toString() : m.toString()) + ':' + (s < 10 ? '0' + s.toString() : s.toString());
    return time;
  }

  ionViewWillLeave() {
    clearInterval(this.timer);
    this.leave = true;
  }

  ionViewWillEnter() {}

  CheckBuy2() {
    _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.MyProductIds2.subscribe(res => {
      if (res) {
        this.checkBuy2 = res.find(n => n == this.product.id) ? false : true;
      } else {
        this.checkBuy2 = true;
      }
    }, err => {
      this.checkBuy2 = true;
    });
    this.isBuyLoading = false; // return GResponse.MyCourseIds.find(n => n == this.course.id) ? false : true;
  }

  getData(id) {
    this.loggedIn = true;
    this.images = [];
    this.selectedImageIndex = 0;
    this.productCart = [];
    this.leave = false;
    this.cart = null;
    this.count = 1;
    this.designId = 0;
    this.weight = 0;
    this.sendTypeId = '9';
    this.designeSelectedId = -1;
    this.existInCart = false;
    this.isLoading = true;
    this.isBuyReady = false;
    this.isBuyReady1 = false;
    this.isBuyReady2 = false;
    this.isLikeLoadingShow = false;
    this.videoDetail = [];
    this.commentShow = true;
    this.isLoadingComments = false;
    this.isUserLikedLoading = true;
    this.checkBuy = false;
    this.checkBuy2 = true;
    this.isBuyLoading = true;
    this.isFirstCommentShow = false;
    this.isCommentsEmpty = false;
    this.comments = [];
    this.filterComments = null;
    this.count1 = 0;
    this.count2 = 0;
    this.isReplyMode = false;
    this.isReportMode = false;
    this.isReportCourseMode = false;
    this.replyId = 0;
    this.isMoreCommentsDisable = false;
    this.commentReqCount = 0;
    this.productService.GetSameProductsById(id).subscribe(res => {
      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
        this.sameProduct = res.data;
      } else {
        this.sameProduct = [];
      }
    }, err => {
      this.sameProduct = [];
    });
    this.productService.GetProductDetailById(id).subscribe(ress => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.product = ress.data;
        this.images.push(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductImageModel(0, true, this.product.name, this.product.imageName));
        this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/p/' + this.product.id);
        this.updateTitle('اول آموز - ' + this.product.name);
        this.updateOgUrl('http://localhost:4300/p/' + this.product.id);
        this.updateDescription('اول آموز - ' + this.product.shortDescription);

        if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.getCartCoursesCount().subscribe(res => {
            this.count1 = res;
          });
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.getCartProductsCount().subscribe(res => {
            this.count2 = res;
          });

          if (this.product.isTipaxSend) {
            this.sendTypeId = '3';
          } else if (this.product.isPostSend) {
            this.sendTypeId = '4';
          } else if (this.product.isSpecialPostSend) {
            this.sendTypeId = '5';
          } else if (this.product.isBurberrySend) {
            this.sendTypeId = '6';
          } else if (this.product.isTipaxSoRentSend) {
            this.sendTypeId = '7';
          } else if (this.product.isBikeDeliverySend) {
            this.sendTypeId = '2';
          } else if (this.product.isOwnDeliverySend) {
            this.sendTypeId = '1';
          } else {
            this.sendTypeId = '9';
          }

          this.orderService.GetUserCart().subscribe(res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.cart = res.data;

              if (this.designeSelectedId != -1) {
                this.designId = this.product.productDesigns[this.designeSelectedId].id;
                this.weight = this.product.productDesigns[this.designeSelectedId].weight;
              } else {
                this.designId = 0;
                this.weight = this.product.weight;
              }

              if (this.cart.products != null && this.cart.products.length > 0) {
                // tslint:disable-next-line: max-line-length
                const find = this.cart.products.find(n => n.productId == id && n.designId == this.designId);

                if (find != undefined) {
                  // tslint:disable-next-line: max-line-length
                  // this.productCart.push(this.cart.products.find(n => n.productId == id && n.designId == this.designId));
                  this.existInCart = true;
                  this.count = this.onGetProductCartCount();
                  this.sendTypeId = find.orderSendTypeId.toString();
                } else {
                  this.existInCart = false;
                }
              }

              this.isBuyReady1 = true;

              if (!this.product.hasSeveralDesigns) {
                this.isBuyReady = true;
              } else {
                if (this.isBuyReady1 && this.isBuyReady2) {
                  this.isBuyReady = true;
                }
              }

              if (res.data.changeAbleProducts != null && res.data.changeAbleProducts.length > 0) {
                let list = '';
                let c = 1;
                res.data.changeAbleProducts.forEach(e => {
                  if (e.designId == 0) {
                    if (c == 1) {
                      list += c + '-' + e.name;
                    } else {
                      list += '\n' + c + '-' + e.name;
                    }
                  } else {
                    if (c == 1) {
                      list += c + '-' + e.name + '(' + e.designTitle + ')';
                    } else {
                      list += '\n' + c + '-' + e.name + '(' + e.designTitle + ')';
                    }
                  }

                  c++;
                });
                this.presentLimitProductCart2(list);
              }
            } else {
              this.isBuyReady1 = true;

              if (!this.product.hasSeveralDesigns) {
                this.isBuyReady = true;
              } else {
                if (this.isBuyReady1 && this.isBuyReady2) {
                  this.isBuyReady = true;
                }
              }
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          });
          this.productService.GetProductDetailUserLikedById(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              switch (res.data) {
                case -1:
                  this.product.userLiked = null;
                  break;

                case 0:
                  this.product.userLiked = false;
                  break;

                case 1:
                  this.product.userLiked = true;
                  break;

                default:
                  this.product.userLiked = null;
                  break;
              }

              this.isUserLikedLoading = false;
            } else {
              this.product.userLiked = null;
              this.isUserLikedLoading = false;
            }
          }, err => {
            this.product.userLiked = null;
            this.isUserLikedLoading = false;
          });
          this.productService.GetAuthProductDetailVideosById2(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              const video = [];
              this.videoDetail = [];
              res.data.forEach(v => {
                if (!v.isAparat && v.videoUrl[23] == 'd' && v.videoUrl[24] == 'l') {
                  v.videoUrl = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrl);
                  v.videoUrlOnline = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrlOnline);
                }

                video.push( // tslint:disable-next-line: max-line-length
                new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline));
                this.videoDetail.push({
                  id: v.id,
                  hide: true
                });
              });
              this.product.productVideos = video;
            } else {
              this.product.productVideos = [];
            }
          }, err => {
            this.product.productVideos = [];
          });
          this.CheckBuy2();
        } else {
          this.product.userLiked = null;
          this.isUserLikedLoading = false;
          this.checkBuy2 = true;
          this.productService.GetProductDetailVideosById2(id).subscribe(res => {
            if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
              const video = [];
              this.videoDetail = [];
              res.data.forEach(v => {
                if (!v.isAparat && v.videoUrl[23] == 'd' && v.videoUrl[24] == 'l') {
                  v.videoUrl = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrl);
                  v.videoUrlOnline = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_18__.CryptographyHelper.buildSecureLink(v.videoUrlOnline);
                }

                video.push( // tslint:disable-next-line: max-line-length
                new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductVideoModel(v.id, v.isActive, v.courseTitle, v.videoUrl, v.videoTime, v.isFree, v.videoDescription, v.isFile, v.isAparat, v.videoUrlOnline, v.hasPrediction, v.hasPredictionOnline));
                this.videoDetail.push({
                  id: v.id,
                  hide: true
                });
              });
              this.product.productVideos = video;
            } else {
              this.product.productVideos = [];
            }
          }, err => {
            this.product.productVideos = [];
          });
        }

        this.productService.GetProductTags(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            this.tags = res.data;
          } else {}
        }, err => {});
        this.productService.GetProductDetailViewedShowById(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            this.product.viewCount = res.data;
          } else {
            this.product.viewCount = 1;
          }
        }, err => {
          this.product.viewCount = 1;
        });
        this.productService.GetProductDetailImagesById(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            const img = [];
            this.images = [];
            this.images.push(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductImageModel(0, true, this.product.name, this.product.imageName));
            res.data.forEach(v => {
              const m = new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductImageModel(v.id, v.isActive, v.title, v.url);
              this.images.push(m);
              img.push(m);
            });
            this.product.productImages = img;
          } else {
            this.product.productImages = [];
          }
        }, err => {
          this.product.productImages = [];
        });
        this.productService.GetProductDetailProductDesignsById(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            const img = [];
            res.data.forEach(v => {
              img.push(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.ProductDesignViewModel(v.id, v.productId, v.count, v.price, v.offPrice, v.isActive, v.isShow, v.title, v.description, v.isEdited, v.weight));
            });
            this.product.productDesigns = img;

            if (this.product.hasSeveralDesigns && this.product.productDesigns.length > 0) {
              this.designeSelectedId = this.product.productDesigns.findIndex(e => e.isActive && e.isShow);

              if (this.designeSelectedId == -1) {
                this.product.hasSeveralDesigns = false;
              }
            }

            this.isBuyReady2 = true;

            if (this.isBuyReady1 && this.isBuyReady2) {
              this.isBuyReady = true;
            }
          } else {
            this.isBuyReady2 = true;

            if (this.isBuyReady1 && this.isBuyReady2) {
              this.isBuyReady = true;
            }

            this.product.productDesigns = [];
          }
        }, err => {
          this.product.productDesigns = [];
        });
        this.productService.GetProductDetailFurtherDetailsById(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            const img = [];
            res.data.forEach(v => {
              img.push(new _data_model_product_AddOrUpdateProductModel__WEBPACK_IMPORTED_MODULE_12__.FurtherDetailViewModel(v.id, v.productId, v.isActive, v.isImportant, v.title, v.description, v.isEdited));
            });
            this.product.furtherDetails = img;
          } else {
            this.product.furtherDetails = [];
          }
        }, err => {
          this.product.furtherDetails = [];
        });
        this.productService.GetProductDetailSellerById(id).subscribe(res => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
            this.product.sellerUser = new _data_model_person_SellerModel__WEBPACK_IMPORTED_MODULE_13__.SellerModel(res.data.id, res.data.name, res.data.family, res.data.resume, res.data.userAvatarAddress, res.data.isRested, res.data.countryId, res.data.provinceId, res.data.cityId, res.data.countryName, res.data.provinceName, res.data.cityName);
            this.product.sellerUser.hasFreeSendPrediction = res.data.hasFreeSendPrediction;
            this.product.sellerUser.freeSendPredictionPrice = res.data.freeSendPredictionPrice;
          } else {
            this.product.sellerUser = null;
          }
        }, err => {
          this.product.sellerUser = null;
        });
        this.productService.GetProductDetailCategoriesById(id).subscribe(resss => {
          if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === resss.status) {
            this.product.categoryIds = resss.data;
            src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.getProductCategory().subscribe(res => {
              this.productCategores = [];
              this.productCategores2 = [];
              this.catIds = '';
              let count = 0;
              res.forEach(cat => {
                this.product.categoryIds.forEach(ccat => {
                  if (+ccat === +cat.productCategoryId) {
                    this.productCategores.push(cat.title);
                    this.productCategores2.push({
                      id: +cat.productCategoryId,
                      title: cat.title
                    });

                    if (count == 0) {
                      this.catIds += cat.productCategoryId;
                    } else {
                      this.catIds += ',' + cat.productCategoryId;
                    }

                    count++;
                  }
                });
              });
            });
          } else {
            this.product.categoryIds = [];
          }
        }, err => {
          this.product.categoryIds = [];
        }); // this.checkBuy = this.CheckBuy();
        // this.CheckBuy2();

        if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
          this.productService.AddOrUpdateUserViewedProduct(ress.data.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              this.product.viewCount++;
            }
          });
        }

        const commentFilterModel = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.ProductCommentFilterModel(id, 1, 10, '', 0);
        this.filterComments = commentFilterModel;

        if (!this.isFirstCommentShow) {
          if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
            this.comments = [];
            this.productService.GetAuthProductCommentsByFilter(commentFilterModel).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.filterComments = res.data;
                res.data.comments.forEach(comment => {
                  this.comments.push(comment);
                });
                this.isFirstCommentShow = true;

                if (this.comments.length <= 0) {
                  this.isCommentsEmpty = true;
                }
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                this.isFirstCommentShow = true;
                this.isCommentsEmpty = true;
              } else {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              }
            }, err => {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          } else {
            this.comments = [];
            this.productService.GetProductCommentsByFilter(commentFilterModel).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.filterComments = res.data;
                res.data.comments.forEach(comment => {
                  this.comments.push(comment);
                });
                this.isFirstCommentShow = true;

                if (this.comments.length <= 0) {
                  this.isCommentsEmpty = true;
                }
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
                this.isFirstCommentShow = true;
                this.isCommentsEmpty = true;
              } else {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              }
            }, err => {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          }
        }

        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      this.isLoading = false;
    });
  }

  presentLimitProductCart2(model) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'موجودی کالا های زیر تغییر یافته: \n' + model,
        backdropDismiss: false,
        keyboardClose: true,
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          handler: () => {// location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  ngOnInit() {
    // G.getIsLoading().subscribe(res => {
    //   this.isLoading2 = res;
    //   this.isCourseDisabled = G.IsCourseDisabled;
    //   this.isProductDisabled = G.IsProductDisabled;
    //   if (!this.isLoading2 && this.isProductDisabled && !this.leave) {
    //     this.alert();
    //   }
    // });
    this.siteKey = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.SiteKey;
    this.commentForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]],
      private: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required]]
    });
    this.replyForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(2000)]]
    });
    src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.getHelpfulLinks().subscribe(res => {
      if (res != null) {
        if (res.length > 0) {
          res.forEach(link => {
            this.links.push(link);
          });
        }
      }
    });
    this.instagram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Instagram;
    this.twiter = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Twiter;
    this.facebook = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Facebook;
    this.telegram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Telegram;
    this.youtube = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Youtube;
    this.pinterest = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Pinterest;
    this.linkedin = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Linkedin;
    this.twitch = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Twitch;
    this.aparat = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Aparat;
    this.discord = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.Discord;
    this.activatedRoute.params.subscribe(params => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
      const id = parseInt(params.id, 10);
      this.isUserLikedLoading = true;
      this.isBuyLoading = true;
      this.getData(+id);
    });
  }

  onDesignChange() {
    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id;
      this.weight = this.product.productDesigns[this.designeSelectedId].weight;
    } else {
      this.designId = 0;
      this.weight = this.product.weight;
    }

    if (this.product.isTipaxSend) {
      this.sendTypeId = '3';
    } else if (this.product.isPostSend) {
      this.sendTypeId = '4';
    } else if (this.product.isSpecialPostSend) {
      this.sendTypeId = '5';
    } else if (this.product.isBurberrySend) {
      this.sendTypeId = '6';
    } else if (this.product.isTipaxSoRentSend) {
      this.sendTypeId = '7';
    } else if (this.product.isBikeDeliverySend) {
      this.sendTypeId = '2';
    } else if (this.product.isOwnDeliverySend) {
      this.sendTypeId = '1';
    } else {
      this.sendTypeId = '9';
    }

    if (this.cart != null) {
      if (this.cart.products != null && this.cart.products.length > 0) {
        // tslint:disable-next-line: max-line-length
        const find = this.cart.products.find(n => n.productId == this.product.id && n.designId == this.designId);

        if (find != undefined) {
          // tslint:disable-next-line: max-line-length
          // this.productCart.push(this.cart.products.find(n => n.productId == this.product.id && n.designId == this.designId));
          this.sendTypeId = find.orderSendTypeId.toString();
          this.existInCart = true;
        } else {
          this.existInCart = false;
        }
      } else {
        this.existInCart = false;
      }
    } else {
      this.existInCart = false;
    }

    if (this.loggedIn) {
      this.count = this.onGetProductCartCount(); // if (this.count == 0) {
      //   this.count = 1;
      // }
    }
  }

  GetSellerName() {
    return this.product.sellerUser.name + ' ' + this.product.sellerUser.family;
  }

  GetCategory(ids) {
    const output = [];
    ids.forEach(id => {
      _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.ProductCategory.forEach(c => {
        if (id === c.productCategoryId) {
          if (output.length !== 0) {
            output.push('/');
          }

          output.push(c.title);
        }
      });
    });
    return output.toString();
  }

  IsUserLogin() {
    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
      return true;
    }

    return false;
  }

  GetOffPercent() {
    if (this.product.offPrice === 0 || this.product.offPrice == null) {
      return '';
    } else {
      return Math.round(100 - 100 * this.product.offPrice / this.product.price).toString();
    }
  }

  presentAlertConfirm() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'برای دسترسی به لینک دانلود ثبت خرید کنید',
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  onDetailClick(id) {
    const item = this.videoDetail.find(e => e.id == +id);

    if (item != null) {
      item.hide = !item.hide;
    }
  }

  GetOffPercent2() {
    if (this.product.productDesigns[this.designeSelectedId].offPrice === 0 || this.product.productDesigns[this.designeSelectedId].offPrice == null) {
      return '';
    } else {
      return Math.round(100 - 100 * this.product.productDesigns[this.designeSelectedId].offPrice / this.product.productDesigns[this.designeSelectedId].price).toString();
    }
  }

  OnLike(like) {
    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsBuyer()) {
      this.isLikeLoadingShow = true;
      this.productService.AddOrUpdateUserLikedProduct(this.product.id, like).subscribe(res => {
        this.isLikeLoadingShow = false;

        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          this.product.userLiked = like;
        }
      });
    } else {
      this.isLikeLoadingShow = false;
    }
  }

  onRemove() {
    if (!this.loggedIn && this.existInCart) {
      return;
    }

    const productCart = this.cart.products.find(e => e.designId == this.designId && e.productId == this.product.id);
    clearInterval(this.timer);

    if (productCart == null) {
      const model = new _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__.ProductCartModel(this.product.id, +this.sendTypeId, this.count, this.weight, this.designId);
      this.onDelete2(model);
    } else {
      if (productCart.id == null || productCart.id == 0) {
        const model = new _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__.ProductCartModel(this.product.id, +this.sendTypeId, this.count, this.weight, this.designId);
        this.onDelete2(model);
      } else {
        this.onDelete(productCart.id);
      }
    } // this.presentAlertRemoveConfirm(id);

  }

  presentAlertRemoveConfirm(id) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
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
            _this6.onDelete(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.orderService.RemoveProductById(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.cart.products.splice(this.cart.products.findIndex(c => c.id === +id), 1);
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(--_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount);
        this.existInCart = false;
        this.count = 1; // GResponse.CartCoursesCount--;

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDelete2(model) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.orderService.RemoveProductByModel(model).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        this.cart.products.splice(this.cart.products.findIndex(c => c.productId === this.product.id && this.designId == c.designId), 1);
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(--_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount);
        this.existInCart = false;
        this.count = 1; // GResponse.CartCoursesCount--;

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onCountChangeTimer() {
    if (this.count < 0 || this.count == null) {
      this.count = 1;
    }

    if (this.existInCart) {
      if (this.designeSelectedId != -1) {
        if (this.product.productDesigns[this.designeSelectedId].count - this.count < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count;
        }
      } else {
        if (this.product.count - this.count < 0) {
          this.count = this.product.count;
        }
      }
    } else {
      if (this.designeSelectedId != -1) {
        if (this.product.productDesigns[this.designeSelectedId].count - this.count < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count;
        }
      } else {
        if (this.product.count - this.count < 0) {
          this.count = this.product.count;
        }
      }
    }

    if (!this.loggedIn || !this.existInCart) {
      return;
    }

    clearInterval(this.timer);

    if (this.count == 0) {
      this.onRemove();
      return;
    }

    this.timer = setInterval(e => {
      if (this.count == this.onGetProductCartCount()) {
        clearInterval(this.timer);
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
      this.ChangeCartCount();
      clearInterval(this.timer);
    }, 1000);
  }

  onCountChangeTimer2() {
    if (this.count < 0 || this.count == null) {
      this.count = 1;
    }

    if (this.existInCart) {
      if (this.designeSelectedId == -1) {
        if (this.product.productDesigns[this.designeSelectedId].count - this.onGetProductCartCount() < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count - this.onGetProductCartCount();
        }
      } else {
        if (this.product.count - this.onGetProductCartCount() < 0) {
          this.count = this.product.count - this.onGetProductCartCount();
        }
      }
    } else {
      if (this.designeSelectedId != -1) {
        if (this.product.productDesigns[this.designeSelectedId].count < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count;
        }
      } else {
        if (this.product.count < 0) {
          this.count = this.product.count;
        }
      }
    }
  }

  AddMoreToCart() {
    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id;
      this.weight = this.product.productDesigns[this.designeSelectedId].weight;
    } else {
      this.designId = 0;
      this.weight = this.product.weight;
    }

    if (this.count < 1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
      return;
    } // tslint:disable-next-line: max-line-length
    // if ((this.count + this.productCart.find(e => e.designId == this.designId && e.productId == this.product.id).count) > this.product.count) {
    //   SharedIonic.toast(this.toastController, 'موجودی محدود است');
    //   return;
    // }
    // if (!this.product.isWholesale && (this.count + this.productCart[0].count) > 10) {
    //   SharedIonic.toast(this.toastController, 'امکان سفارش انبوه نیست');
    //   return;
    // }


    switch (this.sendTypeId) {
      case '1':
        if (!this.product.isOwnDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '2':
        if (!this.product.isBikeDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '3':
        if (!this.product.isTipaxSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '4':
        if (!this.product.isPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '5':
        if (!this.product.isSpecialPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '6':
        if (!this.product.isBurberrySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '7':
        if (!this.product.isTipaxSoRentSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      default:
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'returnUrl') {
        localStorage.removeItem('returnUrl');
      }
    }

    localStorage.setItem('returnUrl', '/p/' + this.product.id);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.orderService.GetUserCart().subscribe(res => {
      localStorage.removeItem('returnUrl');
      const model = new _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__.ProductCartModel(this.product.id, +this.sendTypeId, this.count, this.weight, this.designId);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (res.data.products.find(n => n.productId == this.product.id && n.designId == this.designId) != undefined) {
          this.orderService.AddMoreProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);
              const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

              if (pCart == null || pCart == undefined) {
                // this.productCart.push(model);
                this.cart.products.push(model);
              } else {
                pCart.count += model.count; // pCart2.count += this.count;
              }

              this.existInCart = true; // GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
              // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
              this.count = 1;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          }); // this.orderService.AddProductById(model).subscribe(
          //   // tslint:disable-next-line: no-shadowed-variable
          //   res => {
          //     if (res.status === GResponse.SuccessStatus) {
          //       // GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
          //       // GResponse.CartCoursesCount++;
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
          //     } else {
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.unSuccessToast(this.toastController);
          //     }
          //   },
          //   err => {
          //     SharedIonic.dismissLoading(this.loadingController);
          //     SharedIonic.unSuccessToast(this.toastController);
          //   }
          // );
        } else {
          this.orderService.AddProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount); // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);

              const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

              if (pCart == null || pCart == undefined) {
                // this.productCart.push(model);
                this.cart.products.push(model);
              } else {
                pCart.count = model.count; // pCart2.count += this.count;
              }

              this.existInCart = true; // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
              this.count = 1;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          });
        }
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        this.orderService.AddProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
        res => {
          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount); // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);

            const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

            if (pCart == null || pCart == undefined) {
              // this.productCart.push(model);
              this.cart.products.push(model);
            } else {
              pCart.count = model.count; // pCart2.count += this.count;
            }

            this.existInCart = true; // GResponse.CartCoursesCount++;

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
            this.count = 1;
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        });
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  ChangeCartCount() {
    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id;
      this.weight = this.product.productDesigns[this.designeSelectedId].weight;
    } else {
      this.designId = 0;
      this.weight = this.product.weight;
    }

    if (this.count < 1) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
      return;
    } // tslint:disable-next-line: max-line-length
    // if ((this.count + this.productCart.find(e => e.designId == this.designId && e.productId == this.product.id).count) > this.product.count) {
    //   SharedIonic.toast(this.toastController, 'موجودی محدود است');
    //   return;
    // }
    // if (!this.product.isWholesale && (this.count + this.productCart[0].count) > 10) {
    //   SharedIonic.toast(this.toastController, 'امکان سفارش انبوه نیست');
    //   return;
    // }


    switch (this.sendTypeId) {
      case '1':
        if (!this.product.isOwnDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '2':
        if (!this.product.isBikeDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '3':
        if (!this.product.isTipaxSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '4':
        if (!this.product.isPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '5':
        if (!this.product.isSpecialPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '6':
        if (!this.product.isBurberrySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '7':
        if (!this.product.isTipaxSoRentSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      default:
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'returnUrl') {
        localStorage.removeItem('returnUrl');
      }
    }

    localStorage.setItem('returnUrl', '/p/' + this.product.id);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.orderService.GetUserCart().subscribe(res => {
      localStorage.removeItem('returnUrl');
      const model = new _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__.ProductCartModel(this.product.id, +this.sendTypeId, this.count, this.weight, this.designId);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (res.data.products.find(n => n.productId == this.product.id && n.designId == this.designId) != undefined) {
          this.orderService.ChangeProductCartCount(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);
              const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

              if (pCart == null || pCart == undefined) {
                // this.productCart.push(model);
                this.cart.products.push(model);
              } else {
                pCart.count = model.count; // pCart2.count += this.count;
              }

              this.existInCart = true; // GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
              // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'سبد خرید بروز شد');
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          }); // this.orderService.AddProductById(model).subscribe(
          //   // tslint:disable-next-line: no-shadowed-variable
          //   res => {
          //     if (res.status === GResponse.SuccessStatus) {
          //       // GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
          //       // GResponse.CartCoursesCount++;
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
          //     } else {
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.unSuccessToast(this.toastController);
          //     }
          //   },
          //   err => {
          //     SharedIonic.dismissLoading(this.loadingController);
          //     SharedIonic.unSuccessToast(this.toastController);
          //   }
          // );
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController); // this.orderService.AddProductById(model).subscribe(
          //   // tslint:disable-next-line: no-shadowed-variable
          //   res => {
          //     if (res.status === GResponse.SuccessStatus) {
          //       GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
          //       const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);
          //       const pCart2 = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);
          //       if (pCart == null || pCart == undefined) {
          //         this.productCart.push(model);
          //         this.cart.products.push(model);
          //       } else {
          //         pCart.count = model.count;
          //         // pCart2.count += this.count;
          //       }
          //       this.existInCart = true;
          //       // GResponse.CartCoursesCount++;
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.toast(this.toastController, 'سبد خرید بروز شد');
          //     } else {
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.unSuccessToast(this.toastController);
          //     }
          //   },
          //   err => {
          //     SharedIonic.dismissLoading(this.loadingController);
          //     SharedIonic.unSuccessToast(this.toastController);
          //   }
          // );
        }
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController); // this.orderService.AddProductById(model).subscribe(
        //   // tslint:disable-next-line: no-shadowed-variable
        //   res => {
        //     if (res.status === GResponse.SuccessStatus) {
        //       GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
        //       const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);
        //       const pCart2 = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);
        //       if (pCart == null || pCart == undefined) {
        //         this.productCart.push(model);
        //         this.cart.products.push(model);
        //       } else {
        //         pCart.count = model.count;
        //         // pCart2.count += this.count;
        //       }
        //       this.existInCart = true;
        //       // GResponse.CartCoursesCount++;
        //       SharedIonic.dismissLoading(this.loadingController);
        //       SharedIonic.toast(this.toastController, 'سبد خرید بروز شد');
        //     } else {
        //       SharedIonic.dismissLoading(this.loadingController);
        //       SharedIonic.unSuccessToast(this.toastController);
        //     }
        //   },
        //   err => {
        //     SharedIonic.dismissLoading(this.loadingController);
        //     SharedIonic.unSuccessToast(this.toastController);
        //   }
        // );
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  onGuaranteeClick() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert2',
        header: 'شریط ضمانت',
        message: _this7.product.guaranteeDescription,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  onDiscountLargeOrderClick() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = '';

      if (_this8.product.hasDiscountForEachOrder) {
        msg += 'به ازای هر ' + _this8.product.discountOrderCount + ' عدد سفارش این محصول،';

        if (_this8.product.discountPercent > 0) {
          msg += ' ' + _this8.product.discountPercent + '% تخفیف شامل میشود و محدودیت تخفیف ' + _this8.product.maxDiscountPercent + '% میباشد.';
        } else {
          msg += ' ' + _this8.product.discountPrice + ' تومان تخفیف شامل میشود و محدودیت تخفیف ' + _this8.product.maxDiscountPrice + ' تومان میباشد.';
        }
      } else {
        msg += 'با بیش از ' + _this8.product.discountOrderCount + ' عدد سفارش این محصول،';

        if (_this8.product.discountPercent > 0) {
          msg += ' ' + _this8.product.discountPercent + '% تخفیف شامل میشود.';
        } else {
          msg += ' ' + _this8.product.discountPrice + ' تومان تخفیف شامل میشود.';
        }
      }

      msg += '\nاگر محصول تخفیف خورده باشد، شرایط تخفیف عمده اعمال نمیشود';
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert2',
        header: 'شرایط فروش عمده',
        message: msg,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  loadData(event) {
    setTimeout(() => {
      if (this.filterComments.pageId >= this.filterComments.endPage) {
        event.target.disabled = true;
        return;
      }

      this.isLoadingComments = true;
      this.filterComments.comments = [];
      this.filterComments.pageId++;

      if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
        this.productService.GetAuthProductCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              event.target.disabled = true;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.productService.GetProductCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              event.target.disabled = true;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }

      event.target.complete(); // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1500);
  }

  loadData2() {
    setTimeout(() => {
      if (this.filterComments.pageId >= this.filterComments.endPage) {
        this.isMoreCommentsDisable = true;
        return;
      }

      this.isLoadingComments = true;
      this.filterComments.comments = [];
      this.filterComments.pageId++;

      if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
        this.productService.GetAuthProductCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              this.isMoreCommentsDisable = true;
              return;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        this.productService.GetProductCommentsByFilter(this.filterComments).subscribe(res => {
          this.commentReqCount++;

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            res.data.comments.forEach(comment => {
              if (this.comments.find(e => e.id == comment.id) == null) {
                this.comments.push(comment);
              }
            });

            if (this.filterComments.pageId >= this.filterComments.endPage) {
              this.isMoreCommentsDisable = true;
              return;
            }
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {} else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }

          this.isLoadingComments = false;
        }, err => {
          this.isLoadingComments = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      }
    }, 1500);
  }

  onReportClicked(commentId) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReportMode = true;
  }

  onReplyClicked(commentId) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReplyMode = true;
  }

  presentAlertConfirm3() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this9.onSendComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSendComment() {
    if (this.commentForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.commentForm.value.comment, new Date(), +this.product.id, null, '', 0, false, this.commentForm.value.private, false, 'failed', false);
        this.productService.onSendComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
            this.presentSetCommentAlert2();
            this.commentForm.setValue({
              comment: '',
              private: false
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.commentForm.value.comment, new Date(), +this.product.id, null, '', 0, false, this.commentForm.value.private, false, 'failed', false);
        this.productService.onSendComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
            this.presentSetCommentAlert2();
            this.commentForm.setValue({
              comment: '',
              private: false
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.commentForm.value.comment,
      //       new Date(),
      //       +this.product.id,
      //       null,
      //       '',
      //       0,
      //       false,
      //       this.commentForm.value.private,
      //       false,
      //       'failed',
      //       false);
      //     this.productService.onSendComment(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
      //           this.presentSetCommentAlert2();
      //           this.commentForm.setValue({
      //             comment: '',
      //             private: false
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      //   else {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.commentForm.value.comment,
      //       new Date(),
      //       +this.product.id,
      //       null,
      //       '',
      //       0,
      //       false,
      //       this.commentForm.value.private,
      //       false,
      //       token,
      //       false);
      //     this.productService.onSendComment(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'نظر شما ثبت شد');
      //           this.presentSetCommentAlert2();
      //           this.commentForm.setValue({
      //             comment: '',
      //             private: false
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  presentAlertConfirm2() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this10.onReplyComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertReportConfirm() {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ارسال هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ارسال',
          handler: () => {
            _this11.onReportComment();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReportComment() {
    if (this.replyForm.valid) {
      const model = this.comments.find(e => e.id == +this.replyId);

      if (model == null) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.replyForm.value.comment, new Date(), model.productId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.productService.ReportComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.replyForm.value.comment, new Date(), model.productId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.productService.ReportComment(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       model.productId,
      //       model.id,
      //       '',
      //       0,
      //       false,
      //       model.isPrivate,
      //       false,
      //       'failed',
      //       false);
      //     this.productService.ReportComment(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReportMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReportMode = false;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      //   else {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       model.productId,
      //       model.id,
      //       '',
      //       0,
      //       false,
      //       model.isPrivate,
      //       false,
      //       token,
      //       false);
      //     this.productService.ReportComment(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReportMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReportMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReportMode = false;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  onReplyComment() {
    if (this.replyForm.valid) {
      const model = this.comments.find(e => e.id == +this.replyId);

      if (model == null) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        return;
      }

      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (src_app_core_common_G__WEBPACK_IMPORTED_MODULE_7__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.replyForm.value.comment, new Date(), model.productId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.productService.ReplyCommentById(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert();
            this.replyForm.setValue({
              comment: ''
            });
            this.isReplyMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReplyMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_14__.CommentModel(0, this.replyForm.value.comment, new Date(), model.productId, model.id, '', 0, false, model.isPrivate, false, 'failed', false);
        this.productService.ReplyCommentById(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert();
            this.replyForm.setValue({
              comment: ''
            });
            this.isReplyMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReplyMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReplyMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       model.productId,
      //       model.id,
      //       '',
      //       0,
      //       false,
      //       model.isPrivate,
      //       false,
      //       'failed',
      //       false);
      //     this.productService.ReplyCommentById(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetCommentAlert();
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReplyMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReplyMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReplyMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReplyMode = false;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      //   else {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       model.productId,
      //       model.id,
      //       '',
      //       0,
      //       false,
      //       model.isPrivate,
      //       false,
      //       token,
      //       false);
      //     this.productService.ReplyCommentById(comment).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetCommentAlert();
      //           this.replyForm.setValue({
      //             comment: ''
      //           });
      //           this.isReplyMode = false;
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           this.isReplyMode = false;
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         } else {
      //           this.isReplyMode = false;
      //           SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //         }
      //       },
      //       err => {
      //         this.isReplyMode = false;
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   }
      // }, {
      //   useGlobalDomain: false
      // });

    }
  }

  presentSetCommentAlert() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'پاسخ شما پس از تایید به نمایش در می آید',
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  presentSetCommentAlert2() {
    var _this13 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'نظر شما پس از تایید به نمایش در می آید',
        buttons: [{
          text: 'متوجه شدم',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  onReferableClick() {
    var _this14 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let msg = _this14.product.referableDescription + '\n';

      if (_this14.product.referableReducePercent != 0) {
        msg += '*در صورت مرجوع کالا ' + _this14.product.referableReducePercent + ' درصد از وجه پرداختی کسر میشود';
      } else if (_this14.product.referableReducePrice != 0) {
        msg += '*در صورت مرجوع کالا ' + _this14.product.referableReducePrice + ' تومان از وجه پرداختی کسر میشود';
      }

      const alert = yield _this14.alertController.create({
        cssClass: 'main-alert2',
        header: 'شریط بازگشت وجه',
        message: msg,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  AddToCart() {
    if (this.count < 0 || this.count == null) {
      this.count = 1;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
      return;
    }

    if (this.existInCart) {
      if (this.designeSelectedId != -1) {
        if (this.product.productDesigns[this.designeSelectedId].count - this.onGetProductCartCount() - this.count < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count - this.onGetProductCartCount();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی ' + (this.product.productDesigns[this.designeSelectedId].count - this.onGetProductCartCount()) + ' عدد است');
          return;
        }
      } else {
        if (this.product.count - this.onGetProductCartCount() - this.count < 0) {
          this.count = this.product.count - this.onGetProductCartCount();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی ' + (this.product.count - this.onGetProductCartCount()) + ' عدد است');
          return;
        }
      }
    } else {
      if (this.designeSelectedId != -1) {
        if (this.product.productDesigns[this.designeSelectedId].count - this.count < 0) {
          this.count = this.product.productDesigns[this.designeSelectedId].count;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی ' + this.product.productDesigns[this.designeSelectedId].count + ' عدد است');
          return;
        }
      } else {
        if (this.product.count - this.count < 0) {
          this.count = this.product.count;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی ' + this.product.count + ' عدد است');
          return;
        }
      }
    }

    let designTitle = '';

    if (this.designeSelectedId != -1) {
      this.designId = this.product.productDesigns[this.designeSelectedId].id;
      this.weight = this.product.productDesigns[this.designeSelectedId].weight;
      designTitle = this.product.productDesigns[this.designeSelectedId].title;

      if (this.count < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
        return;
      }

      if (this.count > this.product.productDesigns[this.designeSelectedId].count) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی محدود است');
        return;
      } // if (!this.product.isWholesale && this.count > 10) {
      //   SharedIonic.toast(this.toastController, 'امکان سفارش انبوه نیست');
      //   return;
      // }

    } else {
      this.designId = 0;
      this.weight = this.product.weight;

      if (this.count < 1) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'تعداد نمیتواند کوچک تر از 1 باشد');
        return;
      }

      if (this.count > this.product.count) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موجودی محدود است');
        return;
      } // if (!this.product.isWholesale && this.count > 10) {
      //   SharedIonic.toast(this.toastController, 'امکان سفارش انبوه نیست');
      //   return;
      // }

    }

    switch (this.sendTypeId) {
      case '1':
        if (!this.product.isOwnDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '2':
        if (!this.product.isBikeDeliverySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '3':
        if (!this.product.isTipaxSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '4':
        if (!this.product.isPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '5':
        if (!this.product.isSpecialPostSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '6':
        if (!this.product.isBurberrySend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      case '7':
        if (!this.product.isTipaxSoRentSend) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
          return;
        }

        break;

      default:
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'نوع ارسال صحیح نیست');
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'returnUrl') {
        localStorage.removeItem('returnUrl');
      }
    }

    localStorage.setItem('returnUrl', '/p/' + this.product.id);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.orderService.GetUserCart().subscribe(res => {
      localStorage.removeItem('returnUrl');
      const model = new _data_model_order_ProductCartModel__WEBPACK_IMPORTED_MODULE_10__.ProductCartModel(this.product.id, +this.sendTypeId, this.count, this.weight, this.designId);
      model.productName = this.product.name;
      model.designTitle = designTitle;

      if (this.product.sellerUser == null) {
        model.sellerId = 0;
      } else {
        model.sellerId = this.product.sellerUser.id;
      }

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        // tslint:disable-next-line: max-line-length
        if (res.data.products != null && res.data.products.length > 0 && res.data.products.find(n => n.productId == this.product.id && n.designId == this.designId) != undefined) {
          this.orderService.AddMoreProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);
              const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

              if (pCart == null || pCart == undefined) {
                // this.cart.products.push(model);
                this.productCart.push(model);
              } else {
                pCart.count += model.count; // pCart2.count += this.count;
              }

              this.existInCart = true; // GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
              // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد'); // this.count = 1;
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          }); // this.orderService.AddProductById(model).subscribe(
          //   // tslint:disable-next-line: no-shadowed-variable
          //   res => {
          //     if (res.status === GResponse.SuccessStatus) {
          //       GResponse.setCartProductsCount(++GResponse.BetaCartProductsCount);
          //       this.productCart = model;
          //       this.existInCart = true;
          //       // GResponse.CartCoursesCount++;
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
          //     } else {
          //       SharedIonic.dismissLoading(this.loadingController);
          //       SharedIonic.unSuccessToast(this.toastController);
          //     }
          //   },
          //   err => {
          //     SharedIonic.dismissLoading(this.loadingController);
          //     SharedIonic.unSuccessToast(this.toastController);
          //   }
          // );
        } else {
          this.orderService.AddProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
          res => {
            if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
              _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount); // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);

              if (this.cart.products != null && this.cart.products.length > 0) {
                const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

                if (pCart == null || pCart == undefined) {
                  // this.productCart.push(model);
                  this.cart.products.push(model);
                } else {
                  pCart.count = model.count; // pCart2.count += this.count;
                }
              } else {
                this.cart.products.push(model);
              }

              this.existInCart = true; // this.count = 1;
              // GResponse.CartCoursesCount++;

              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
            }
          }, err => {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          });
        }
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.NotFoundStatus) {
        this.orderService.AddProductById(model).subscribe( // tslint:disable-next-line: no-shadowed-variable
        res => {
          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.setCartProductsCount(++_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.BetaCartProductsCount);

            if (this.cart == null) {
              this.cart = new _data_model_order_CartModel__WEBPACK_IMPORTED_MODULE_11__.CartModel();
              this.cart.products = [];
            } // const pCart = this.productCart.find(e => e.productId == model.productId && e.designId == model.designId);


            if (this.cart.products != null && this.cart.products.length > 0) {
              const pCart = this.cart.products.find(e => e.productId == model.productId && e.designId == model.designId);

              if (pCart == null || pCart == undefined) {
                // this.productCart.push(model);
                this.cart.products.push(model);
              } else {
                pCart.count = model.count; // pCart2.count += this.count;
              }
            } else {
              this.cart.products.push(model);
            }

            this.existInCart = true; // this.count = 1;
            // GResponse.CartCoursesCount++;

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'به سبد خرید اضافه شد');
          } else {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        });
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  IsLoggedin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn();
  }

  presentModal2() {
    var _this15 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this15.modalCtrl.create({
        component: _components_modal_product_rate_modal_product_rate_modal_component__WEBPACK_IMPORTED_MODULE_17__.ProductRateModalComponent,
        cssClass: 'my-custom-class',
        swipeToClose: true,
        componentProps: {
          productId: _this15.product.id
        }
      });
      return yield modal.present();
    })();
  }

  onRating() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.productService.CheckUserProductRating(this.product.id).subscribe( // tslint:disable-next-line: no-shadowed-variable
    res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
        this.presentModal2();
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'قبلا نظرسنجی شده است');
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  copyText(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'کپی شد');
  }

};

ProductByIdComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.DomSanitizer
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.DomSanitizer
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.Meta
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonRouterOutlet
}, {
  type: src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_6__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.MenuController
}];

ProductByIdComponent.propDecorators = {
  sliderRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: ['swiperRef', {
      static: false
    }]
  }],
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonInfiniteScroll]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonContent]
  }]
};
ProductByIdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
  selector: 'app-product-by-id',
  template: _product_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductByIdComponent);


/***/ }),

/***/ 28705:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/product/product-by-id/product-by-id.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductByIdModule": () => (/* binding */ ProductByIdModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-by-id-routing.module */ 94788);
/* harmony import */ var _product_by_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-by-id.component */ 78227);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/pipe/price.module */ 21448);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _components_modal_photo_gallery_modal_page_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modal/photo-gallery-modal-page/photo-gallery/photo-gallery.module */ 203);
/* harmony import */ var _components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/product/shared-product.module */ 95664);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var src_app_core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/i18n/site-i18n.module */ 58586);













// import { NgxCaptchaModule } from 'ngx-captcha';




let ProductByIdModule = class ProductByIdModule {
};
ProductByIdModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_product_by_id_component__WEBPACK_IMPORTED_MODULE_2__.ProductByIdComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _product_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductByIdRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule,
            _components_modal_photo_gallery_modal_page_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_7__.PhotoGalleryModule,
            // NgxCaptchaModule,
            _core_pipe_price_module__WEBPACK_IMPORTED_MODULE_3__.PriceModule,
            _components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_8__.SharedProductModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_16__.SwiperModule,
            src_app_core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_9__.SiteI18nModule
        ]
    })
], ProductByIdModule);



/***/ }),

/***/ 31260:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/product/product-by-id/product-by-id.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.2);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-dark: #059669;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --card-shadow: 0 12px 36px rgba(99, 63, 163, 0.07);\n  --product-accent: var(--purple);\n  --product-accent-rgb: 109, 40, 217;\n  --product-surface: #ffffff;\n  --product-text: var(--ink);\n  --product-muted: var(--muted);\n  --product-border: var(--border-soft);\n  --product-shadow: var(--card-shadow);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", sans-serif);\n}\n\nion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.3;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  flex: 1;\n}\n\n.main-nav a, .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav a:hover, .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav a.active {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.pill-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--emerald);\n  display: inline-block;\n  animation: pulse-dot 2s infinite;\n}\n\n@keyframes pulse-dot {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.6;\n  }\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--border-soft);\n  background: var(--catalog-surface, #ffffff);\n  color: var(--ink);\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  text-decoration: none;\n}\n\n.icon-button:hover {\n  border-color: var(--catalog-border, #ac88f2);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  background: var(--catalog-danger, var(--rose));\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  width: 19px;\n  height: 19px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--catalog-surface, #fff);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple), var(--purple-dark)));\n  color: #ffffff !important;\n  padding: 9px 16px;\n  border-radius: 13px;\n  font-size: 13px;\n  font-weight: 700;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.login-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px var(--purple-glow);\n}\n\n.header-search {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 10px 20px 16px;\n}\n\n.search-input-group {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--catalog-surface, #ffffff);\n  border: 2px solid var(--purple-light);\n  border-radius: 16px;\n  padding: 6px 14px;\n  box-shadow: 0 8px 24px rgba(99, 63, 163, 0.08);\n}\n\n.search-input-icon {\n  font-size: 20px;\n  color: var(--purple);\n  flex-shrink: 0;\n}\n\n.search-input-group input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-family: inherit;\n  color: var(--ink);\n}\n\n.search-input-group .button.primary {\n  background: var(--catalog-action, var(--purple));\n  color: #fff;\n  border: none;\n  padding: 8px 18px;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n}\n\n.search-input-group .button.secondary {\n  background: transparent;\n  color: var(--muted);\n  border: none;\n  padding: 8px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-family: inherit;\n}\n\n/* ==========================================================================\n   Educational Breadcrumbs Bar\n   ========================================================================== */\n\n.edu-breadcrumbs-bar {\n  background: var(--catalog-surface, #ffffff);\n  border-bottom: 1px solid var(--border-soft);\n  padding: 14px 0;\n}\n\n.edu-breadcrumbs-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.edu-breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--muted);\n  flex-wrap: wrap;\n}\n\n.edu-breadcrumbs a {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--muted);\n  text-decoration: none;\n  transition: color 0.18s ease;\n}\n\n.edu-breadcrumbs a:hover {\n  color: var(--purple);\n}\n\n.edu-breadcrumbs ion-icon {\n  font-size: 15px;\n}\n\n.edu-sep {\n  color: var(--catalog-muted, #cbd5e1);\n  font-size: 14px;\n}\n\n.edu-current {\n  color: var(--purple);\n  font-weight: 800;\n  max-width: 320px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.edu-grade-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--purple-light);\n  color: var(--purple-dark);\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.edu-grade-pill .sparkle-icon {\n  color: var(--amber);\n}\n\n/* ==========================================================================\n   Product Layout & Page Cards\n   ========================================================================== */\n\n.product-page {\n  width: min(1320px, 100% - 40px);\n  padding: 32px 0 80px;\n  margin: 0 auto;\n  color: var(--product-text);\n}\n\nion-card {\n  border: 1px solid var(--border-soft);\n  border-radius: 24px;\n  background: var(--catalog-surface, #ffffff);\n  box-shadow: var(--card-shadow);\n}\n\nion-card-title {\n  color: var(--ink);\n  font-weight: 900;\n}\n\nion-item,\nion-list {\n  --background: transparent;\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n  background: transparent;\n}\n\n.product-hero-card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 28px;\n  border: 1px solid var(--border-soft);\n}\n\n.product-hero-card::before {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 5px;\n  content: \"\";\n  background: linear-gradient(90deg, var(--purple), var(--amber), var(--emerald));\n}\n\n.product-title-block {\n  padding: clamp(24px, 4vw, 40px) clamp(20px, 5vw, 48px) 16px;\n  border-bottom: 1px solid var(--border-soft);\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.04), rgba(245, 158, 11, 0.03), transparent);\n}\n\n.product-title-block ion-card-title {\n  color: var(--ink);\n  font-size: clamp(24px, 3.8vw, 36px);\n  font-weight: 950;\n  line-height: 1.5;\n  text-wrap: balance;\n}\n\n.product-statuses {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 14px;\n}\n\n.status-pill {\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  padding: 6px 12px;\n  border: 1px solid;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.status-pill.available {\n  border-color: rgba(16, 185, 129, 0.3);\n  color: var(--emerald-dark);\n  background: var(--emerald-light);\n}\n\n.status-pill.unavailable {\n  border-color: rgba(244, 63, 94, 0.28);\n  color: var(--rose);\n  background: var(--rose-light);\n}\n\n.status-pill.special {\n  border-color: rgba(245, 158, 11, 0.35);\n  color: var(--amber-dark);\n  background: var(--amber-light);\n}\n\n.status-pill.brand {\n  border-color: rgba(109, 40, 217, 0.35);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.product-hero-card > ion-card-content {\n  padding: 0 clamp(10px, 3vw, 24px) 24px;\n}\n\n.product-hero-layout {\n  align-items: flex-start;\n}\n\n.product-gallery-column,\n.product-summary-column,\n.product-purchase-column {\n  padding: 12px;\n}\n\n.product-gallery-column {\n  position: sticky;\n  top: 90px;\n}\n\n.product-main-image {\n  display: block;\n  width: 100%;\n  height: min(400px, 45vw);\n  min-height: 280px;\n  overflow: hidden;\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  background: radial-gradient(circle, rgba(109, 40, 217, 0.05), transparent 70%), var(--catalog-soft, #faf9fd);\n}\n\n.product-main-image::part(image) {\n  object-fit: contain;\n}\n\n.product-thumbnails {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 10px;\n  padding: 4px 2px 8px;\n  margin-top: 14px;\n  overflow-x: auto;\n}\n\n.p-photo {\n  flex: 0 0 66px;\n  width: 66px;\n  height: 66px;\n  margin: 0;\n  overflow: hidden;\n  border: 2px solid var(--border-soft);\n  border-radius: 14px;\n  background: var(--catalog-soft, #f8fafc);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.p-photo::part(image) {\n  object-fit: cover;\n}\n\n.link-selected.p-photo {\n  border-color: var(--purple);\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transform: translateY(-2px);\n}\n\n.link-pointer-2.p-photo:hover {\n  border-color: var(--catalog-border, #cbd5e1);\n}\n\n/* ==========================================================================\n   Product Summary Column\n   ========================================================================== */\n\n.product-summary-column > ion-item:first-child {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.product-summary-column > ion-item:first-child ion-icon {\n  margin-inline: 4px;\n}\n\n.product-summary-column > ion-item:nth-of-type(2) {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.product-summary-column > ion-item:nth-of-type(2) p {\n  margin: 10px 0 4px;\n  color: var(--ink-secondary);\n  font-size: 14px;\n  line-height: 2;\n}\n\n.product-summary-column > ion-item:not(:first-child) {\n  --min-height: 48px;\n  font-size: 13px;\n}\n\n.product-summary-column > ion-item ion-icon[slot=start] {\n  padding: 8px;\n  border-radius: 11px;\n  background: var(--purple-light);\n  color: var(--purple);\n  font-size: 18px;\n}\n\n.product-trust-strip {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  margin: 16px 0;\n}\n\n.product-trust-strip > div {\n  display: flex;\n  min-height: 48px;\n  gap: 8px;\n  align-items: center;\n  padding: 10px 14px;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 14px;\n  color: var(--ink);\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.03));\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.product-trust-strip ion-icon {\n  flex: 0 0 auto;\n  color: var(--emerald-dark);\n  font-size: 20px;\n}\n\n.product-summary-column ion-select {\n  min-width: 150px;\n  font-weight: 800;\n  color: var(--purple);\n}\n\n.in-count {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  max-width: 100px;\n  margin: 6px 8px;\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n}\n\n.product-summary-column ion-buttons,\n.product-purchase-panel ion-buttons {\n  justify-content: center;\n}\n\n/* ==========================================================================\n   Product Purchase Panel (Buy Box)\n   ========================================================================== */\n\n.product-purchase-column {\n  position: sticky;\n  top: 90px;\n}\n\n.product-purchase-panel {\n  overflow: hidden;\n  border: 1px solid rgba(109, 40, 217, 0.22);\n  border-radius: 22px;\n  box-shadow: 0 16px 40px rgba(99, 63, 163, 0.09);\n  background: var(--catalog-surface, #ffffff);\n}\n\n.product-purchase-panel > ion-card-header {\n  padding: 20px 16px 18px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.08), rgba(245, 158, 11, 0.05), transparent);\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.product-purchase-panel > ion-card-header ion-card-title {\n  font-size: 16px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.product-purchase-panel > ion-card-content {\n  padding: 12px 14px 20px !important;\n}\n\n.product-purchase-panel ion-item {\n  --min-height: 48px;\n  font-size: 12px;\n}\n\n.product-purchase-panel ion-avatar {\n  width: 36px;\n  height: 36px;\n  border: 2px solid var(--purple-light);\n}\n\n.product-purchase-panel h1 {\n  margin: 8px 0;\n  color: var(--emerald-dark);\n  font-size: clamp(22px, 2.3vw, 29px);\n  font-weight: 950;\n}\n\n.product-purchase-panel del,\n.product-purchase-panel i {\n  color: var(--rose);\n}\n\n.product-purchase-panel ion-button[expand=block][fill=solid] {\n  --border-radius: 14px;\n  --box-shadow: 0 8px 24px rgba(16, 185, 129, 0.28);\n  min-height: 50px;\n  margin: 12px 4px;\n  font-size: 13px;\n  font-weight: 900;\n  --background: var(--catalog-buy-gradient, linear-gradient(135deg, var(--emerald), var(--emerald-dark)));\n}\n\n.product-purchase-panel ion-button[routerLink=\"/Cart\"],\n.product-purchase-panel ion-button[ng-reflect-router-link=\"/Cart\"] {\n  font-weight: 900;\n  --border-radius: 14px;\n}\n\n/* ==========================================================================\n   Related Products Swiper\n   ========================================================================== */\n\n.related-products-row,\n.product-lower-layout {\n  margin-top: 28px;\n}\n\n.related-products-card {\n  overflow: hidden;\n  border-radius: 26px;\n}\n\n.related-products-card > ion-card-header {\n  padding: 22px 26px;\n  border-bottom: 1px solid var(--border-soft);\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.04), transparent);\n}\n\n.related-products-card > ion-card-content {\n  padding: 14px 18px 28px;\n}\n\n.swiper {\n  width: 100%;\n  height: 100%;\n  padding: 10px 4px 42px;\n  margin: 8px auto;\n}\n\n.swiper-slide {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  height: auto;\n  text-align: center;\n  background: transparent;\n}\n\n.swiper-slide img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 16px;\n}\n\n/* ==========================================================================\n   Product Content & Side Columns (Details, Tabs, Comments)\n   ========================================================================== */\n\n.product-content-column,\n.product-side-column {\n  padding: 10px;\n}\n\n.product-content-card {\n  overflow: hidden;\n  border-radius: 26px;\n}\n\n.product-content-card::before {\n  display: block;\n  width: 100%;\n  height: 5px;\n  content: \"\";\n  background: linear-gradient(90deg, var(--purple), var(--emerald), var(--amber));\n}\n\n.product-content-card > section > ion-list {\n  padding: 14px clamp(16px, 4vw, 36px) 24px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.product-content-card ion-list-header {\n  min-height: 58px;\n  padding-inline: 0;\n  color: var(--ink);\n  font-size: 19px;\n  font-weight: 950;\n}\n\n.product-content-card ion-list-header ion-label {\n  position: relative;\n  padding-right: 14px;\n}\n\n.product-content-card ion-list-header ion-label::before {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  width: 4px;\n  height: 22px;\n  border-radius: 4px;\n  content: \"\";\n  background: var(--purple);\n}\n\n.readMore,\n.readLess {\n  width: 100%;\n  color: var(--ink-secondary);\n  font-size: 15px;\n  line-height: 2.2;\n  text-align: justify;\n  overflow-wrap: anywhere;\n  transition: max-height 0.45s ease;\n}\n\n.readMore {\n  max-height: 360px !important;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent 100%);\n          mask-image: linear-gradient(to bottom, #000 70%, transparent 100%);\n}\n\n.readLess {\n  max-height: 15000px;\n}\n\n:host ::ng-deep .readMore h2,\n:host ::ng-deep .readLess h2,\n:host ::ng-deep .readMore h3,\n:host ::ng-deep .readLess h3 {\n  color: var(--ink);\n  font-weight: 900;\n  line-height: 1.7;\n}\n\n:host ::ng-deep .readMore img,\n:host ::ng-deep .readLess img,\n:host ::ng-deep .readMore iframe,\n:host ::ng-deep .readLess iframe {\n  max-width: 100% !important;\n  border-radius: 16px;\n}\n\n.product-content-card ion-list > div > div > ion-item {\n  --min-height: 52px;\n  margin: 6px 0;\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  background: var(--catalog-surface, #ffffff);\n}\n\n.product-content-card ion-list > div > ion-item[button] {\n  --min-height: 58px;\n  margin: 8px 0;\n  overflow: hidden;\n  border: 1px solid var(--border-soft);\n  border-radius: 14px;\n  font-size: 13px;\n  font-weight: 800;\n  background: var(--catalog-surface, #ffffff);\n  transition: all 0.2s ease;\n}\n\n.product-content-card ion-list > div > ion-item[button]:hover {\n  border-color: rgba(109, 40, 217, 0.4);\n  box-shadow: 0 4px 14px rgba(99, 63, 163, 0.06);\n}\n\n.product-content-card .smooth {\n  margin: -2px 8px 18px;\n  border-radius: 0 0 16px 16px;\n  border: 1px solid var(--border-soft);\n  border-top: none;\n  box-shadow: none;\n}\n\n.product-side-column {\n  position: sticky;\n  top: 90px;\n  align-self: flex-start;\n}\n\n.product-side-column > ion-card,\n.product-side-column > section > ion-card {\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 8px 26px rgba(99, 63, 163, 0.05);\n}\n\n.product-side-column ion-card-header {\n  padding: 18px 18px 14px;\n  background: linear-gradient(135deg, rgba(109, 40, 217, 0.04), transparent);\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.product-side-column ion-card-title {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.product-side-column ion-card-content {\n  padding: 12px 16px 18px;\n}\n\n.product-side-column ion-item {\n  font-size: 12px;\n}\n\n.social {\n  width: 25% !important;\n}\n\n.video {\n  display: block;\n  width: 100% !important;\n  height: auto !important;\n  max-height: 560px;\n  border-radius: 18px;\n  background: #0f172a;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n  overflow: hidden;\n  border-radius: 18px;\n  background: #0f172a;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);\n  border: 1px solid var(--border-soft);\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.video-span {\n  display: block;\n  padding-top: 56.25%;\n}\n\n.margin-top-12 {\n  margin-top: 12px !important;\n}\n\n.append-buttons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.half-percent-width {\n  width: 50% !important;\n}\n\n.text-custom {\n  margin-top: 4px;\n  font-size: 12px;\n}\n\n.icon-custom {\n  width: 0.85em;\n  height: 0.85em;\n  margin-inline: 7px 3px;\n}\n\n.w-200px {\n  width: min(200px, 40%);\n}\n\n.special {\n  margin-top: 4px;\n  font-size: 13px;\n  white-space: pre;\n}\n\n.w-80px {\n  width: 80px;\n}\n\n.w-max-content {\n  width: max-content;\n}\n\n.h3-title {\n  margin: 8px 0;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n.h3-title-content {\n  float: left;\n  font-size: 13px;\n}\n\nion-fab a {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n}\n\n/* ==========================================================================\n   Trust Bar & Guarantee Section\n   ========================================================================== */\n\n.edu-trust-bar {\n  max-width: 1320px;\n  margin: 32px auto 10px;\n  padding: 0 18px;\n}\n\n.edu-trust-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n\n.edu-trust-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 18px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  box-shadow: 0 6px 20px rgba(99, 63, 163, 0.04);\n}\n\n.edu-trust-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.edu-trust-icon.purple {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.edu-trust-icon.emerald {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.edu-trust-icon.amber {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.edu-trust-icon.rose {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.edu-trust-item strong {\n  display: block;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 3px;\n}\n\n.edu-trust-item p {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.7;\n  color: var(--muted);\n}\n\n/* ==========================================================================\n   Teacher Educational Footer\n   ========================================================================== */\n\n.learning-footer {\n  background: var(--catalog-surface, #ffffff);\n  border-top: 1px solid var(--border-soft);\n  margin-top: 40px;\n  padding: 50px 0 24px;\n  color: var(--ink);\n}\n\n.page-container {\n  width: min(1320px, 100% - 48px);\n  margin-inline: auto;\n}\n\n.footer-top {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1.3fr;\n  gap: 36px;\n  padding-bottom: 36px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.footer-brand-col .brand {\n  margin-bottom: 12px;\n}\n\n.footer-desc {\n  font-size: 13px;\n  line-height: 2;\n  color: var(--muted);\n  margin-bottom: 16px;\n}\n\n.footer-domain-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--purple-light);\n  color: var(--purple-dark);\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.footer-links-col h4,\n.footer-trust-col h4 {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0 0 16px;\n}\n\n.footer-links-col nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.footer-links-col nav a {\n  color: var(--ink-secondary);\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.18s ease;\n}\n\n.footer-links-col nav a:hover {\n  color: var(--purple);\n}\n\n.trust-seals-row {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 18px;\n}\n\n.seal-img {\n  width: 72px;\n  height: 72px;\n  object-fit: contain;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n\n.trust-channels-label {\n  display: block;\n  font-size: 12px;\n  color: var(--muted);\n  margin-bottom: 8px;\n}\n\n.trust-channels-links {\n  display: flex;\n  gap: 10px;\n}\n\n.trust-channels-links a {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.trust-channels-links a:hover {\n  background: var(--catalog-action, var(--purple));\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n\n.footer-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-top: 20px;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.footer-heart {\n  color: var(--rose);\n}\n\n/* ==========================================================================\n   Responsive Adaptations\n   ========================================================================== */\n\n@media (max-width: 992px) {\n  .nav-shell {\n    padding: 10px 16px;\n    min-height: 68px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .edu-trust-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .footer-top {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n\n  .product-page {\n    width: min(860px, 100% - 26px);\n  }\n\n  .product-gallery-column,\n.product-purchase-column,\n.product-side-column {\n    position: static;\n  }\n\n  .product-purchase-column {\n    margin-top: 8px;\n  }\n\n  .product-purchase-panel {\n    max-width: 620px;\n    margin-inline: auto;\n  }\n}\n\n@media (max-width: 767px) {\n  .product-lower-layout {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .product-content-column,\n.product-side-column {\n    flex: 0 0 100%;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  .product-page {\n    width: calc(100% - 14px);\n    padding: 14px 0 70px;\n  }\n\n  .product-hero-card {\n    border-radius: 19px;\n  }\n\n  .product-title-block {\n    padding: 24px 15px 16px;\n    border-radius: 19px 19px 0 0;\n  }\n\n  .product-title-block ion-card-title {\n    font-size: 24px;\n  }\n\n  .product-hero-card > ion-card-content {\n    padding: 0 4px 18px;\n  }\n\n  .product-gallery-column,\n.product-summary-column,\n.product-purchase-column {\n    padding: 8px;\n  }\n\n  .product-main-image {\n    height: 300px;\n    min-height: 220px;\n    border-radius: 17px;\n  }\n\n  .p-photo {\n    flex-basis: 58px;\n    width: 58px;\n    height: 58px;\n    border-radius: 12px;\n  }\n\n  .product-trust-strip {\n    grid-template-columns: 1fr;\n  }\n\n  .product-trust-strip > div {\n    padding: 9px 12px;\n    font-size: 11px;\n  }\n\n  .edu-trust-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .footer-bottom {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .related-products-card,\n.product-content-card,\n.product-side-column > ion-card,\n.product-side-column > section > ion-card {\n    margin-inline: 0;\n    border-radius: 18px;\n  }\n\n  .product-content-column,\n.product-side-column {\n    padding: 4px 0;\n  }\n\n  .product-content-card > section > ion-list {\n    padding: 10px 13px 20px;\n  }\n\n  .readMore,\n.readLess {\n    font-size: 14px;\n    line-height: 2.1;\n    text-align: right;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .readMore,\n.readLess {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore, :host-context(.dark-theme) ::ng-deep .readLess, :host-context(.dark-theme) ::ng-deep .product-hero-card p {\n  color: var(--ink-secondary) !important;\n  background-color: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore :where(p, span, div, li, strong, b, em, i, font, td, th), :host-context(.dark-theme) ::ng-deep .readLess :where(p, span, div, li, strong, b, em, i, font, td, th), :host-context(.dark-theme) ::ng-deep .product-hero-card p :where(p, span, div, li, strong, b, em, i, font, td, th) {\n  color: var(--ink-secondary) !important;\n  background: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore :where(h1, h2, h3, h4, h5, h6), :host-context(.dark-theme) ::ng-deep .readLess :where(h1, h2, h3, h4, h5, h6), :host-context(.dark-theme) ::ng-deep .product-hero-card p :where(h1, h2, h3, h4, h5, h6) {\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore a, :host-context(.dark-theme) ::ng-deep .readLess a, :host-context(.dark-theme) ::ng-deep .product-hero-card p a {\n  color: var(--purple) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore blockquote, :host-context(.dark-theme) ::ng-deep .readMore pre, :host-context(.dark-theme) ::ng-deep .readMore code, :host-context(.dark-theme) ::ng-deep .readLess blockquote, :host-context(.dark-theme) ::ng-deep .readLess pre, :host-context(.dark-theme) ::ng-deep .readLess code, :host-context(.dark-theme) ::ng-deep .product-hero-card p blockquote, :host-context(.dark-theme) ::ng-deep .product-hero-card p pre, :host-context(.dark-theme) ::ng-deep .product-hero-card p code {\n  background: var(--catalog-soft) !important;\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .readMore table, :host-context(.dark-theme) ::ng-deep .readMore td, :host-context(.dark-theme) ::ng-deep .readMore th, :host-context(.dark-theme) ::ng-deep .readLess table, :host-context(.dark-theme) ::ng-deep .readLess td, :host-context(.dark-theme) ::ng-deep .readLess th, :host-context(.dark-theme) ::ng-deep .product-hero-card p table, :host-context(.dark-theme) ::ng-deep .product-hero-card p td, :host-context(.dark-theme) ::ng-deep .product-hero-card p th {\n  border-color: var(--border-soft) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYnktaWQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGNvdXJzZVxcX2NhdGFsb2ctZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFFQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlFQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7OytFQUFBOztBQUdBO0VBQ0UsaUVBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBSEY7O0FBS0E7RUFBMEIsYUFBQTtBQUQxQjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFBdUIsbUJBQUE7QUFHdkI7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFPRjs7QUFMQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFRRjs7QUFOQTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7QUFTRjs7QUFQQTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVdGOztBQVRBO0VBQ0U7SUFBVyxtQkFBQTtJQUFxQixVQUFBO0VBY2hDO0VBYkE7SUFBTSxxQkFBQTtJQUF1QixZQUFBO0VBaUI3QjtBQUNGOztBQWZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBaUJGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWZBO0VBQ0UsNENBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFtQkY7O0FBakJBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxzR0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FBcUJGOztBQWxCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBcUJGOztBQW5CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBc0JGOztBQXBCQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUF1QkY7O0FBckJBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQXdCRjs7QUF0QkE7RUFDRSxnREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBeUJGOztBQXZCQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQTBCRjs7QUF2QkE7OytFQUFBOztBQUdBO0VBQ0UsMkNBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTJCRjs7QUF6QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTRCRjs7QUExQkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQTZCRjs7QUEzQkE7RUFDRSxvQkFBQTtBQThCRjs7QUE1QkE7RUFDRSxlQUFBO0FBK0JGOztBQTdCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtBQWdDRjs7QUE5QkE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFpQ0Y7O0FBL0JBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSxtQkFBQTtBQW1DRjs7QUFoQ0E7OytFQUFBOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBbUNGOztBQWhDQTs7RUFFRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtFQUFBO0FBbUNGOztBQWhDQTtFQUNFLDJEQUFBO0VBQ0EsMkNBQUE7RUFDQSxvR0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbUNGOztBQWhDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBaENBO0VBQ0Usb0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FBbUNGOztBQWhDQTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBbUNGOztBQWhDQTtFQUNFLHNDQUFBO0FBbUNGOztBQWhDQTtFQUNFLHVCQUFBO0FBbUNGOztBQWhDQTs7O0VBR0UsYUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEdBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsbUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsaUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLDJCQUFBO0FBbUNGOztBQWhDQTtFQUNFLDRDQUFBO0FBbUNGOztBQWhDQTs7K0VBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1RkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBbUNGOztBQWhDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBbUNGOztBQWhDQTs7RUFFRSx1QkFBQTtBQW1DRjs7QUFoQ0E7OytFQUFBOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBbUNGOztBQWhDQTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsdUJBQUE7RUFDQSxvR0FBQTtFQUNBLDJDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBaENBOztFQUVFLGtCQUFBO0FBbUNGOztBQWhDQTtFQUNFLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUdBQUE7QUFtQ0Y7O0FBaENBOztFQUVFLGdCQUFBO0VBQ0EscUJBQUE7QUFtQ0Y7O0FBaENBOzsrRUFBQTs7QUFHQTs7RUFFRSxnQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwRUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSx1QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbUNGOztBQWhDQTs7K0VBQUE7O0FBR0E7O0VBRUUsYUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBbUNGOztBQWhDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrRUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSx5Q0FBQTtFQUNBLDJDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBbUNGOztBQWhDQTs7RUFFRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsbUJBQUE7QUFtQ0Y7O0FBaENBOzs7O0VBSUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbUNGOztBQWhDQTs7OztFQUlFLDBCQUFBO0VBQ0EsbUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQW1DRjs7QUFoQ0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbUNGOztBQWhDQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBbUNGOztBQWhDQTs7RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsdUJBQUE7RUFDQSwwRUFBQTtFQUNBLDJDQUFBO0FBbUNGOztBQWhDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBbUNGOztBQWhDQTtFQUNFLHVCQUFBO0FBbUNGOztBQWhDQTtFQUNFLGVBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UscUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFtQ0Y7O0FBaENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0FBbUNGOztBQWhDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBbUNGOztBQWhDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQW1DRjs7QUFoQ0E7RUFBaUIsMkJBQUE7QUFvQ2pCOztBQW5DQTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtBQXdDcEM7O0FBdkNBO0VBQXNCLHFCQUFBO0FBMkN0Qjs7QUExQ0E7RUFBZSxlQUFBO0VBQWlCLGVBQUE7QUErQ2hDOztBQTlDQTtFQUFlLGFBQUE7RUFBZSxjQUFBO0VBQWdCLHNCQUFBO0FBb0Q5Qzs7QUFuREE7RUFBVyxzQkFBQTtBQXVEWDs7QUF0REE7RUFBVyxlQUFBO0VBQWlCLGVBQUE7RUFBaUIsZ0JBQUE7QUE0RDdDOztBQTNEQTtFQUFVLFdBQUE7QUErRFY7O0FBOURBO0VBQWlCLGtCQUFBO0FBa0VqQjs7QUFqRUE7RUFBWSxhQUFBO0VBQWUsZUFBQTtFQUFpQixnQkFBQTtBQXVFNUM7O0FBdEVBO0VBQW9CLFdBQUE7RUFBYSxlQUFBO0FBMkVqQzs7QUF6RUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTRFRjs7QUF6RUE7OytFQUFBOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUE0RUY7O0FBekVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtBQTRFRjs7QUF6RUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBNEVGOztBQXpFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBNEVGOztBQXpFQTtFQUF5QiwrQkFBQTtFQUFpQyxvQkFBQTtBQThFMUQ7O0FBN0VBO0VBQTBCLGdDQUFBO0VBQWtDLDBCQUFBO0FBa0Y1RDs7QUFqRkE7RUFBd0IsOEJBQUE7RUFBZ0Msd0JBQUE7QUFzRnhEOztBQXJGQTtFQUF1Qiw2QkFBQTtFQUErQixrQkFBQTtBQTBGdEQ7O0FBeEZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEyRkY7O0FBeEZBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBMkZGOztBQXhGQTs7K0VBQUE7O0FBR0E7RUFDRSwyQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBMkZGOztBQXhGQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUEyRkY7O0FBeEZBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7QUEyRkY7O0FBeEZBO0VBQTJCLG1CQUFBO0FBNEYzQjs7QUExRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE2RkY7O0FBMUZBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTZGRjs7QUExRkE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTZGRjs7QUExRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBNkZGOztBQTFGQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQTZGRjs7QUExRkE7RUFDRSxvQkFBQTtBQTZGRjs7QUExRkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE2RkY7O0FBMUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQTZGRjs7QUExRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE2RkY7O0FBMUZBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUE2RkY7O0FBMUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBNkZGOztBQTFGQTtFQUNFLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBNkZGOztBQTFGQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQTZGRjs7QUExRkE7RUFDRSxrQkFBQTtBQTZGRjs7QUExRkE7OytFQUFBOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBNkZGOztFQTNGQTtJQUFZLGFBQUE7RUErRlo7O0VBOUZBO0lBQ0UscUNBQUE7RUFpR0Y7O0VBL0ZBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBa0dGOztFQWhHQTtJQUNFLDhCQUFBO0VBbUdGOztFQWpHQTs7O0lBR0UsZ0JBQUE7RUFvR0Y7O0VBbEdBO0lBQ0UsZUFBQTtFQXFHRjs7RUFuR0E7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBc0dGO0FBQ0Y7O0FBbkdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFxR0Y7O0VBbkdBOztJQUVFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQXNHRjtBQUNGOztBQW5HQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQXFHRjs7RUFuR0E7SUFDRSxtQkFBQTtFQXNHRjs7RUFwR0E7SUFDRSx1QkFBQTtJQUNBLDRCQUFBO0VBdUdGOztFQXJHQTtJQUNFLGVBQUE7RUF3R0Y7O0VBdEdBO0lBQ0UsbUJBQUE7RUF5R0Y7O0VBdkdBOzs7SUFHRSxZQUFBO0VBMEdGOztFQXhHQTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBMkdGOztFQXpHQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQTRHRjs7RUExR0E7SUFDRSwwQkFBQTtFQTZHRjs7RUEzR0E7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUE4R0Y7O0VBNUdBO0lBQ0UsMEJBQUE7RUErR0Y7O0VBN0dBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtFQWdIRjs7RUE5R0E7Ozs7SUFJRSxnQkFBQTtJQUNBLG1CQUFBO0VBaUhGOztFQS9HQTs7SUFFRSxjQUFBO0VBa0hGOztFQWhIQTtJQUNFLHVCQUFBO0VBbUhGOztFQWpIQTs7SUFFRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQW9IRjtBQUNGOztBQWpIQTtFQUNFOztJQUVFLGdCQUFBO0VBbUhGO0FBQ0Y7O0FDdDBDRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEVBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOENBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtBRHcwQ0o7O0FDdDBDSTtFQUFTLG9CQUFBO0FEeTBDYjs7QUN2MENJO0VBQWMsOEJBQUE7RUFBZ0MsaUJBQUE7QUQyMENsRDs7QUMxMENJO0VBQU0sNEJBQUE7QUQ2MENWOztBQzUwQ0k7RUFBMkIsMEJBQUE7RUFBNEIsMkJBQUE7QURnMUMzRDs7QUMvMENJO0VBQWlCLGlCQUFBO0FEazFDckI7O0FDajFDSTtFQUFvQixtQkFBQTtBRG8xQ3hCOztBQ24xQ0k7RUFFRSxnREFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QURvMUNOOztBQ2wxQ0k7RUFBMkIsdUJBQUE7QURxMUMvQjs7QUNwMUNJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FEczFDTjs7QUNwMUNJO0VBQThCLDBCQUFBO0VBQTRCLG1CQUFBO0FEdzFDOUQ7O0FDdjFDSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBRHkxQ047O0FDdjFDSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBRHkxQ047O0FDdjFDSTtFQUFxRCx1Q0FBQTtBRDAxQ3pEOztBQ3oxQ0k7RUFBNEIseUNBQUE7QUQ0MUNoQzs7QUNwMUNJO0VBQ0Usc0NBQUE7RUFDQSx3Q0FBQTtBRHUxQ047O0FDdDFDTTtFQUNFLHNDQUFBO0VBQ0Esa0NBQUE7QUR3MUNSOztBQ3QxQ007RUFBaUMsNEJBQUE7QUR5MUN2Qzs7QUN4MUNNO0VBQUksK0JBQUE7QUQyMUNWOztBQzExQ007RUFBd0IsMENBQUE7RUFBNEMsNEJBQUE7QUQ4MUMxRTs7QUM3MUNNO0VBQWdCLDJDQUFBO0FEZzJDdEIiLCJmaWxlIjoicHJvZHVjdC1ieS1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uLy4uL2NvdXJzZS9jYXRhbG9nLWRhcmsnIGFzIGNhdGFsb2c7XHJcblxyXG46aG9zdCB7XHJcbiAgLS1pbms6ICMxZTFiNGI7XHJcbiAgLS1pbmstc2Vjb25kYXJ5OiAjNDc1NTY5O1xyXG4gIC0tbXV0ZWQ6ICM2NDc0OGI7XHJcbiAgLS1wdXJwbGU6ICM2ZDI4ZDk7XHJcbiAgLS1wdXJwbGUtZGFyazogIzU4MWM4NztcclxuICAtLXB1cnBsZS1saWdodDogI2VkZTlmZTtcclxuICAtLXB1cnBsZS1nbG93OiByZ2JhKDEwOSwgNDAsIDIxNywgMC4yKTtcclxuICAtLWFtYmVyOiAjZjU5ZTBiO1xyXG4gIC0tYW1iZXItZGFyazogI2Q5NzcwNjtcclxuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xyXG4gIC0tZW1lcmFsZDogIzEwYjk4MTtcclxuICAtLWVtZXJhbGQtZGFyazogIzA1OTY2OTtcclxuICAtLWVtZXJhbGQtbGlnaHQ6ICNkMWZhZTU7XHJcbiAgLS1yb3NlOiAjZjQzZjVlO1xyXG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcclxuICAtLXBhcGVyOiAjZmZmZmZmO1xyXG4gIC0tYmctY2FudmFzOiAjZmNmYmZlO1xyXG4gIC0tYm9yZGVyLXNvZnQ6ICNlZGU5ZjY7XHJcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xyXG4gIC0tY2FyZC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDcpO1xyXG5cclxuICAtLXByb2R1Y3QtYWNjZW50OiB2YXIoLS1wdXJwbGUpO1xyXG4gIC0tcHJvZHVjdC1hY2NlbnQtcmdiOiAxMDksIDQwLCAyMTc7XHJcbiAgLS1wcm9kdWN0LXN1cmZhY2U6ICNmZmZmZmY7XHJcbiAgLS1wcm9kdWN0LXRleHQ6IHZhcigtLWluayk7XHJcbiAgLS1wcm9kdWN0LW11dGVkOiB2YXIoLS1tdXRlZCk7XHJcbiAgLS1wcm9kdWN0LWJvcmRlcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIC0tcHJvZHVjdC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBcIlNoYWJuYW0tTWVkaXVtXCIsIHNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBIZWFkZXIgJiBOYXZpZ2F0aW9uXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5sZWFybmluZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY2F0YWxvZy1zdXJmYWNlLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOTQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmxlYXJuaW5nLWhlYWRlcjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ubmF2LXNoZWxsIHtcclxuICBtYXgtd2lkdGg6IDEzMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5icmFuZC1sb2dvLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJyYW5kLWxvZ28td3JhcCBpbWcgeyBvYmplY3QtZml0OiBjb250YWluOyB9XHJcbi5icmFuZC1zcGFya2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNnB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJyYW5kLXRpdGxlcyBiIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcbi5icmFuZC10aXRsZXMgc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWFpbi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgZmxleDogMTtcclxufVxyXG4ubWFpbi1uYXYgYSwgLm5hdi1saW5rLWJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxufVxyXG4ubWFpbi1uYXYgYTpob3ZlciwgLm5hdi1saW5rLWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxufVxyXG4ubWFpbi1uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4ucGlsbC1kb3Qge1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBhbmltYXRpb246IHB1bHNlLWRvdCAycyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHB1bHNlLWRvdCB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyBvcGFjaXR5OiAwLjY7IH1cclxufVxyXG5cclxuLm5hdi1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaWNvbi1idXR0b246aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2F0YWxvZy1ib3JkZXIsICNhYzg4ZjIpO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbn1cclxuLmNhcnQtYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC00cHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWRhbmdlciwgdmFyKC0tcm9zZSkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHdpZHRoOiAxOXB4O1xyXG4gIGhlaWdodDogMTlweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZik7XHJcbn1cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudCwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlKSwgdmFyKC0tcHVycGxlLWRhcmspKSk7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA5cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcbi5sb2dpbi1idXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHZhcigtLXB1cnBsZS1nbG93KTtcclxufVxyXG5cclxuLmhlYWRlci1zZWFyY2gge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDE2cHg7XHJcbn1cclxuLnNlYXJjaC1pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDgpO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG59XHJcbi5zZWFyY2gtaW5wdXQtZ3JvdXAgLmJ1dHRvbi5wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWFjdGlvbiwgdmFyKC0tcHVycGxlKSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuLnNlYXJjaC1pbnB1dC1ncm91cCAuYnV0dG9uLnNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEVkdWNhdGlvbmFsIEJyZWFkY3J1bWJzIEJhclxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZWR1LWJyZWFkY3J1bWJzLWJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxufVxyXG4uZWR1LWJyZWFkY3J1bWJzLWlubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuLmVkdS1icmVhZGNydW1icyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZWR1LWJyZWFkY3J1bWJzIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xOHMgZWFzZTtcclxufVxyXG4uZWR1LWJyZWFkY3J1bWJzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG59XHJcbi5lZHUtYnJlYWRjcnVtYnMgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZWR1LXNlcCB7XHJcbiAgY29sb3I6IHZhcigtLWNhdGFsb2ctbXV0ZWQsICNjYmQ1ZTEpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZWR1LWN1cnJlbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmVkdS1ncmFkZS1waWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZS1kYXJrKTtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZWR1LWdyYWRlLXBpbGwgLnNwYXJrbGUtaWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUHJvZHVjdCBMYXlvdXQgJiBQYWdlIENhcmRzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wcm9kdWN0LXBhZ2Uge1xyXG4gIHdpZHRoOiBtaW4oMTMyMHB4LCBjYWxjKDEwMCUgLSA0MHB4KSk7XHJcbiAgcGFkZGluZzogMzJweCAwIDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6IHZhcigtLXByb2R1Y3QtdGV4dCk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbmlvbi1pdGVtLFxyXG5pb24tbGlzdCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWhlcm8tY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWhlcm8tY2FyZDo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXB1cnBsZSksIHZhcigtLWFtYmVyKSwgdmFyKC0tZW1lcmFsZCkpO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZS1ibG9jayB7XHJcbiAgcGFkZGluZzogY2xhbXAoMjRweCwgNHZ3LCA0MHB4KSBjbGFtcCgyMHB4LCA1dncsIDQ4cHgpIDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNCksIHJnYmEoMjQ1LCAxNTgsIDExLCAwLjAzKSwgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZS1ibG9jayBpb24tY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgyNHB4LCAzLjh2dywgMzZweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtd3JhcDogYmFsYW5jZTtcclxufVxyXG5cclxuLnByb2R1Y3Qtc3RhdHVzZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogOHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLmF2YWlsYWJsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcclxuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1kYXJrKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLnVuYXZhaWxhYmxlIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjQ0LCA2MywgOTQsIDAuMjgpO1xyXG4gIGNvbG9yOiB2YXIoLS1yb3NlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLWxpZ2h0KTtcclxufVxyXG5cclxuLnN0YXR1cy1waWxsLnNwZWNpYWwge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsIDE1OCwgMTEsIDAuMzUpO1xyXG4gIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGlsbC5icmFuZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwOSwgNDAsIDIxNywgMC4zNSk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxufVxyXG5cclxuLnByb2R1Y3QtaGVyby1jYXJkID4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCBjbGFtcCgxMHB4LCAzdncsIDI0cHgpIDI0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWhlcm8tbGF5b3V0IHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnByb2R1Y3QtZ2FsbGVyeS1jb2x1bW4sXHJcbi5wcm9kdWN0LXN1bW1hcnktY29sdW1uLFxyXG4ucHJvZHVjdC1wdXJjaGFzZS1jb2x1bW4ge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWdhbGxlcnktY29sdW1uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogOTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtbWFpbi1pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBtaW4oNDAwcHgsIDQ1dncpO1xyXG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpLCB0cmFuc3BhcmVudCA3MCUpLCB2YXIoLS1jYXRhbG9nLXNvZnQsICNmYWY5ZmQpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tYWluLWltYWdlOjpwYXJ0KGltYWdlKSB7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnByb2R1Y3QtdGh1bWJuYWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBnYXA6IDEwcHg7XHJcbiAgcGFkZGluZzogNHB4IDJweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4ucC1waG90byB7XHJcbiAgZmxleDogMCAwIDY2cHg7XHJcbiAgd2lkdGg6IDY2cHg7XHJcbiAgaGVpZ2h0OiA2NnB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2Y4ZmFmYyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5wLXBob3RvOjpwYXJ0KGltYWdlKSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5saW5rLXNlbGVjdGVkLnAtcGhvdG8ge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5saW5rLXBvaW50ZXItMi5wLXBob3RvOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWNhdGFsb2ctYm9yZGVyLCAjY2JkNWUxKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUHJvZHVjdCBTdW1tYXJ5IENvbHVtblxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiA+IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiA+IGlvbi1pdGVtOmZpcnN0LWNoaWxkIGlvbi1pY29uIHtcclxuICBtYXJnaW4taW5saW5lOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXN1bW1hcnktY29sdW1uID4gaW9uLWl0ZW06bnRoLW9mLXR5cGUoMikge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiA+IGlvbi1pdGVtOm50aC1vZi10eXBlKDIpIHAge1xyXG4gIG1hcmdpbjogMTBweCAwIDRweDtcclxuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiA+IGlvbi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiA+IGlvbi1pdGVtIGlvbi1pY29uW3Nsb3Q9J3N0YXJ0J10ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC10cnVzdC1zdHJpcCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC10cnVzdC1zdHJpcCA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjA4KSwgcmdiYSgxNiwgMTg1LCAxMjksIDAuMDMpKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnByb2R1Y3QtdHJ1c3Qtc3RyaXAgaW9uLWljb24ge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWRhcmspO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3Qtc3VtbWFyeS1jb2x1bW4gaW9uLXNlbGVjdCB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG59XHJcblxyXG4uaW4tY291bnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogNnB4IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbiBpb24tYnV0dG9ucyxcclxuLnByb2R1Y3QtcHVyY2hhc2UtcGFuZWwgaW9uLWJ1dHRvbnMge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBQcm9kdWN0IFB1cmNoYXNlIFBhbmVsIChCdXkgQm94KVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucHJvZHVjdC1wdXJjaGFzZS1jb2x1bW4ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwOSwgNDAsIDIxNywgMC4yMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBib3gtc2hhZG93OiAwIDE2cHggNDBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA5KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCA+IGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweCAxNnB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpLCByZ2JhKDI0NSwgMTU4LCAxMSwgMC4wNSksIHRyYW5zcGFyZW50KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCA+IGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXB1cmNoYXNlLXBhbmVsID4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2R1Y3QtcHVyY2hhc2UtcGFuZWwgaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogNDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXB1cmNoYXNlLXBhbmVsIGlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCBoMSB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1kYXJrKTtcclxuICBmb250LXNpemU6IGNsYW1wKDIycHgsIDIuM3Z3LCAyOXB4KTtcclxuICBmb250LXdlaWdodDogOTUwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCBkZWwsXHJcbi5wcm9kdWN0LXB1cmNoYXNlLXBhbmVsIGkge1xyXG4gIGNvbG9yOiB2YXIoLS1yb3NlKTtcclxufVxyXG5cclxuLnByb2R1Y3QtcHVyY2hhc2UtcGFuZWwgaW9uLWJ1dHRvbltleHBhbmQ9J2Jsb2NrJ11bZmlsbD0nc29saWQnXSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIC0tYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yOCk7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDEycHggNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1idXktZ3JhZGllbnQsIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWVtZXJhbGQpLCB2YXIoLS1lbWVyYWxkLWRhcmspKSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXB1cmNoYXNlLXBhbmVsIGlvbi1idXR0b25bcm91dGVyTGluaz0nL0NhcnQnXSxcclxuLnByb2R1Y3QtcHVyY2hhc2UtcGFuZWwgaW9uLWJ1dHRvbltuZy1yZWZsZWN0LXJvdXRlci1saW5rPScvQ2FydCddIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUmVsYXRlZCBQcm9kdWN0cyBTd2lwZXJcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnJlbGF0ZWQtcHJvZHVjdHMtcm93LFxyXG4ucHJvZHVjdC1sb3dlci1sYXlvdXQge1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuXHJcbi5yZWxhdGVkLXByb2R1Y3RzLWNhcmQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxufVxyXG5cclxuLnJlbGF0ZWQtcHJvZHVjdHMtY2FyZCA+IGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjJweCAyNnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpLCB0cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbi5yZWxhdGVkLXByb2R1Y3RzLWNhcmQgPiBpb24tY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNHB4IDE4cHggMjhweDtcclxufVxyXG5cclxuLnN3aXBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggNHB4IDQycHg7XHJcbiAgbWFyZ2luOiA4cHggYXV0bztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFByb2R1Y3QgQ29udGVudCAmIFNpZGUgQ29sdW1ucyAoRGV0YWlscywgVGFicywgQ29tbWVudHMpXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5wcm9kdWN0LWNvbnRlbnQtY29sdW1uLFxyXG4ucHJvZHVjdC1zaWRlLWNvbHVtbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudC1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRlbnQtY2FyZDo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXB1cnBsZSksIHZhcigtLWVtZXJhbGQpLCB2YXIoLS1hbWJlcikpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250ZW50LWNhcmQgPiBzZWN0aW9uID4gaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDE0cHggY2xhbXAoMTZweCwgNHZ3LCAzNnB4KSAyNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRlbnQtY2FyZCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDU4cHg7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRlbnQtY2FyZCBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1yaWdodDogMTRweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudC1jYXJkIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWw6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xyXG59XHJcblxyXG4ucmVhZE1vcmUsXHJcbi5yZWFkTGVzcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMi4yO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjQ1cyBlYXNlO1xyXG59XHJcblxyXG4ucmVhZE1vcmUge1xyXG4gIG1heC1oZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwIDcwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XHJcbn1cclxuXHJcbi5yZWFkTGVzcyB7XHJcbiAgbWF4LWhlaWdodDogMTUwMDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTW9yZSBoMixcclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTGVzcyBoMixcclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTW9yZSBoMyxcclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTGVzcyBoMyB7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnJlYWRNb3JlIGltZyxcclxuOmhvc3QgOjpuZy1kZWVwIC5yZWFkTGVzcyBpbWcsXHJcbjpob3N0IDo6bmctZGVlcCAucmVhZE1vcmUgaWZyYW1lLFxyXG46aG9zdCA6Om5nLWRlZXAgLnJlYWRMZXNzIGlmcmFtZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGVudC1jYXJkIGlvbi1saXN0ID4gZGl2ID4gZGl2ID4gaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogNTJweDtcclxuICBtYXJnaW46IDZweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRlbnQtY2FyZCBpb24tbGlzdCA+IGRpdiA+IGlvbi1pdGVtW2J1dHRvbl0ge1xyXG4gIC0tbWluLWhlaWdodDogNThweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250ZW50LWNhcmQgaW9uLWxpc3QgPiBkaXYgPiBpb24taXRlbVtidXR0b25dOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNik7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRlbnQtY2FyZCAuc21vb3RoIHtcclxuICBtYXJnaW46IC0ycHggOHB4IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE2cHggMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zaWRlLWNvbHVtbiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDkwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2lkZS1jb2x1bW4gPiBpb24tY2FyZCxcclxuLnByb2R1Y3Qtc2lkZS1jb2x1bW4gPiBzZWN0aW9uID4gaW9uLWNhcmQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNnB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zaWRlLWNvbHVtbiBpb24tY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDE4cHggMThweCAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA0KSwgdHJhbnNwYXJlbnQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNpZGUtY29sdW1uIGlvbi1jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2lkZS1jb2x1bW4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNpZGUtY29sdW1uIGlvbi1pdGVtIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZGVvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDU2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xyXG4gIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIC5yYXRpbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaF9pZnJhbWUtYXBhcmF0X2VtYmVkX2ZyYW1lIGlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi52aWRlby1zcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xMiB7IG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDsgfVxyXG4uYXBwZW5kLWJ1dHRvbnMgeyBtYXJnaW4tdG9wOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuLmhhbGYtcGVyY2VudC13aWR0aCB7IHdpZHRoOiA1MCUgIWltcG9ydGFudDsgfVxyXG4udGV4dC1jdXN0b20geyBtYXJnaW4tdG9wOiA0cHg7IGZvbnQtc2l6ZTogMTJweDsgfVxyXG4uaWNvbi1jdXN0b20geyB3aWR0aDogMC44NWVtOyBoZWlnaHQ6IDAuODVlbTsgbWFyZ2luLWlubGluZTogN3B4IDNweDsgfVxyXG4udy0yMDBweCB7IHdpZHRoOiBtaW4oMjAwcHgsIDQwJSk7IH1cclxuLnNwZWNpYWwgeyBtYXJnaW4tdG9wOiA0cHg7IGZvbnQtc2l6ZTogMTNweDsgd2hpdGUtc3BhY2U6IHByZTsgfVxyXG4udy04MHB4IHsgd2lkdGg6IDgwcHg7IH1cclxuLnctbWF4LWNvbnRlbnQgeyB3aWR0aDogbWF4LWNvbnRlbnQ7IH1cclxuLmgzLXRpdGxlIHsgbWFyZ2luOiA4cHggMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS42OyB9XHJcbi5oMy10aXRsZS1jb250ZW50IHsgZmxvYXQ6IGxlZnQ7IGZvbnQtc2l6ZTogMTNweDsgfVxyXG5cclxuaW9uLWZhYiBhIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUcnVzdCBCYXIgJiBHdWFyYW50ZWUgU2VjdGlvblxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZWR1LXRydXN0LWJhciB7XHJcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XHJcbiAgbWFyZ2luOiAzMnB4IGF1dG8gMTBweDtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbn1cclxuXHJcbi5lZHUtdHJ1c3QtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmVkdS10cnVzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA0KTtcclxufVxyXG5cclxuLmVkdS10cnVzdC1pY29uIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uZWR1LXRydXN0LWljb24ucHVycGxlIHsgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cclxuLmVkdS10cnVzdC1pY29uLmVtZXJhbGQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTsgY29sb3I6IHZhcigtLWVtZXJhbGQtZGFyayk7IH1cclxuLmVkdS10cnVzdC1pY29uLmFtYmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXItbGlnaHQpOyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IH1cclxuLmVkdS10cnVzdC1pY29uLnJvc2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLWxpZ2h0KTsgY29sb3I6IHZhcigtLXJvc2UpOyB9XHJcblxyXG4uZWR1LXRydXN0LWl0ZW0gc3Ryb25nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5lZHUtdHJ1c3QtaXRlbSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVGVhY2hlciBFZHVjYXRpb25hbCBGb290ZXJcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmxlYXJuaW5nLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgcGFkZGluZzogNTBweCAwIDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IG1pbigxMzIwcHgsIGNhbGMoMTAwJSAtIDQ4cHgpKTtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyLXRvcCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmciAxLjNmcjtcclxuICBnYXA6IDM2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxufVxyXG5cclxuLmZvb3Rlci1icmFuZC1jb2wgLmJyYW5kIHsgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxyXG5cclxuLmZvb3Rlci1kZXNjIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWRvbWFpbi1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XHJcbiAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua3MtY29sIGg0LFxyXG4uZm9vdGVyLXRydXN0LWNvbCBoNCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rcy1jb2wgbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYgYSB7XHJcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE4cyBlYXNlO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbn1cclxuXHJcbi50cnVzdC1zZWFscy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLnNlYWwtaW1nIHtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcbi50cnVzdC1jaGFubmVscy1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udHJ1c3QtY2hhbm5lbHMtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4udHJ1c3QtY2hhbm5lbHMtbGlua3MgYSB7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udHJ1c3QtY2hhbm5lbHMtbGlua3MgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24sIHZhcigtLXB1cnBsZSkpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmZvb3Rlci1ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxufVxyXG5cclxuLmZvb3Rlci1oZWFydCB7XHJcbiAgY29sb3I6IHZhcigtLXJvc2UpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBSZXNwb25zaXZlIEFkYXB0YXRpb25zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXYtc2hlbGwge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogNjhweDtcclxuICB9XHJcbiAgLm1haW4tbmF2IHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5lZHUtdHJ1c3QtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICAuZm9vdGVyLXRvcCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMjhweDtcclxuICB9XHJcbiAgLnByb2R1Y3QtcGFnZSB7XHJcbiAgICB3aWR0aDogbWluKDg2MHB4LCBjYWxjKDEwMCUgLSAyNnB4KSk7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWdhbGxlcnktY29sdW1uLFxyXG4gIC5wcm9kdWN0LXB1cmNoYXNlLWNvbHVtbixcclxuICAucHJvZHVjdC1zaWRlLWNvbHVtbiB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuICAucHJvZHVjdC1wdXJjaGFzZS1jb2x1bW4ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1wdXJjaGFzZS1wYW5lbCB7XHJcbiAgICBtYXgtd2lkdGg6IDYyMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5wcm9kdWN0LWxvd2VyLWxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnByb2R1Y3QtY29udGVudC1jb2x1bW4sXHJcbiAgLnByb2R1Y3Qtc2lkZS1jb2x1bW4ge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5wcm9kdWN0LXBhZ2Uge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0cHgpO1xyXG4gICAgcGFkZGluZzogMTRweCAwIDcwcHg7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWhlcm8tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gIH1cclxuICAucHJvZHVjdC10aXRsZS1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE1cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE5cHggMTlweCAwIDA7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXRpdGxlLWJsb2NrIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLnByb2R1Y3QtaGVyby1jYXJkID4gaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDRweCAxOHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1nYWxsZXJ5LWNvbHVtbixcclxuICAucHJvZHVjdC1zdW1tYXJ5LWNvbHVtbixcclxuICAucHJvZHVjdC1wdXJjaGFzZS1jb2x1bW4ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1tYWluLWltYWdlIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgfVxyXG4gIC5wLXBob3RvIHtcclxuICAgIGZsZXgtYmFzaXM6IDU4cHg7XHJcbiAgICB3aWR0aDogNThweDtcclxuICAgIGhlaWdodDogNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXRydXN0LXN0cmlwIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICAucHJvZHVjdC10cnVzdC1zdHJpcCA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmVkdS10cnVzdC1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucmVsYXRlZC1wcm9kdWN0cy1jYXJkLFxyXG4gIC5wcm9kdWN0LWNvbnRlbnQtY2FyZCxcclxuICAucHJvZHVjdC1zaWRlLWNvbHVtbiA+IGlvbi1jYXJkLFxyXG4gIC5wcm9kdWN0LXNpZGUtY29sdW1uID4gc2VjdGlvbiA+IGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1jb250ZW50LWNvbHVtbixcclxuICAucHJvZHVjdC1zaWRlLWNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICB9XHJcbiAgLnByb2R1Y3QtY29udGVudC1jYXJkID4gc2VjdGlvbiA+IGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTNweCAyMHB4O1xyXG4gIH1cclxuICAucmVhZE1vcmUsXHJcbiAgLnJlYWRMZXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLnJlYWRNb3JlLFxyXG4gIC5yZWFkTGVzcyB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgY2F0YWxvZy5kYXJrLW1vZGU7XHJcbkBpbmNsdWRlIGNhdGFsb2cucmljaC10ZXh0KCcucmVhZE1vcmUsIC5yZWFkTGVzcywgLnByb2R1Y3QtaGVyby1jYXJkIHAnKTtcclxuIiwiLy8gUGFnZS1sb2NhbCBjYXRhbG9nIHBhbGV0dGUuIEltcG9ydGVkIG9ubHkgYnkgY291cnNlL3Byb2R1Y3QvYXJ0aWNsZS9zZWFyY2ggcm91dGVzLlxuLy8gRmFsbGJhY2tzIGluIHRoZSBjb25zdW1pbmcgc3R5bGVzIHByZXNlcnZlIGV2ZXJ5IG9yaWdpbmFsIGxpZ2h0LW1vZGUgY29sb3IuXG5AbWl4aW4gZGFyay1tb2RlIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICAtLWNhdGFsb2ctc3VyZmFjZTogIzIxMWMzMjtcbiAgICAtLWNhdGFsb2ctc3VyZmFjZS1yZ2I6IDMzLCAyOCwgNTA7XG4gICAgLS1jYXRhbG9nLXNvZnQ6ICMyOTIzM2Q7XG4gICAgLS1jYXRhbG9nLWhvdmVyOiAjMzQyYzQ5O1xuICAgIC0tY2F0YWxvZy1ib3JkZXI6ICM0YjQxNjQ7XG4gICAgLS1jYXRhbG9nLXRleHQ6ICNmMmVlZmI7XG4gICAgLS1jYXRhbG9nLXNlY29uZGFyeTogI2QwYzhlMjtcbiAgICAtLWNhdGFsb2ctbXV0ZWQ6ICNiMWE2YzY7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1zb2Z0OiAjMzAyMzQ3O1xuICAgIC0tY2F0YWxvZy1wdXJwbGUtaG92ZXI6ICMzZDJkNTg7XG4gICAgLS1jYXRhbG9nLWFtYmVyLXNvZnQ6ICMzYjJkMTg7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQtc29mdDogIzE4MzcyZTtcbiAgICAtLWNhdGFsb2ctcm9zZS1zb2Z0OiAjNDAyMzM0O1xuICAgIC0tY2F0YWxvZy1za3ktc29mdDogIzE5MzM0NjtcbiAgICAtLWNhdGFsb2ctcHVycGxlOiAjYzRiNWZkO1xuICAgIC0tY2F0YWxvZy1lbWVyYWxkOiAjNmVlN2I3O1xuICAgIC0tY2F0YWxvZy1za3k6ICM3ZGQzZmM7XG4gICAgLS1jYXRhbG9nLXNreS1hY3Rpb246ICMwMzY5YTE7XG4gICAgLS1jYXRhbG9nLWFjdGlvbjogIzdjM2FlZDtcbiAgICAtLWNhdGFsb2ctYWN0aW9uLWhvdmVyOiAjNmQyOGQ5O1xuICAgIC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQsICM1YjIxYjYpO1xuICAgIC0tY2F0YWxvZy1idXk6ICMwNDc4NTc7XG4gICAgLS1jYXRhbG9nLWJ1eS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA0Nzg1NywgIzA2NWY0Nik7XG4gICAgLS1jYXRhbG9nLWRhbmdlcjogI2JlMTIzYztcbiAgICAtLWNhdGFsb2ctYW1iZXItYWN0aW9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTI0MDBlLCAjNzgzNTBmKTtcbiAgICAtLWluazogdmFyKC0tY2F0YWxvZy10ZXh0KTtcbiAgICAtLWluay1zZWNvbmRhcnk6IHZhcigtLWNhdGFsb2ctc2Vjb25kYXJ5KTtcbiAgICAtLW11dGVkOiB2YXIoLS1jYXRhbG9nLW11dGVkKTtcbiAgICAtLXB1cnBsZTogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWRhcms6IHZhcigtLWNhdGFsb2ctcHVycGxlKTtcbiAgICAtLXB1cnBsZS1saWdodDogdmFyKC0tY2F0YWxvZy1wdXJwbGUtc29mdCk7XG4gICAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjE0KTtcbiAgICAtLWFtYmVyOiAjZmJiZjI0O1xuICAgIC0tYW1iZXItZGFyazogI2ZjZDM0ZDtcbiAgICAtLWFtYmVyLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWFtYmVyLXNvZnQpO1xuICAgIC0tYW1iZXItZ2xvdzogcmdiYSgyNTEsIDE5MSwgMzYsIDAuMSk7XG4gICAgLS1lbWVyYWxkOiAjMzRkMzk5O1xuICAgIC0tZW1lcmFsZC1kYXJrOiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQpO1xuICAgIC0tZW1lcmFsZC1saWdodDogdmFyKC0tY2F0YWxvZy1lbWVyYWxkLXNvZnQpO1xuICAgIC0tcm9zZTogI2ZkYTRhZjtcbiAgICAtLXJvc2UtbGlnaHQ6IHZhcigtLWNhdGFsb2ctcm9zZS1zb2Z0KTtcbiAgICAtLXNreTogdmFyKC0tY2F0YWxvZy1za3kpO1xuICAgIC0tc2t5LWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXNreS1zb2Z0KTtcbiAgICAtLXBhcGVyOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tYmctY2FudmFzOiAjMTQxMDIwO1xuICAgIC0tYm9yZGVyLXNvZnQ6IHZhcigtLWNhdGFsb2ctYm9yZGVyKTtcbiAgICAtLWNhcmQtYmc6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jYXJkLXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAtLWNvdXJzZS1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tcHJvZHVjdC1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tY291cnNlLWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1wcm9kdWN0LWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuXG4gICAgLmJyYW5kIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpOyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIC5iZyB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IH1cbiAgICBpb24tY2FyZDpub3QoLmlvbi1jb2xvcikgeyAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUgeyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuICAgIGlvbi1jYXJkLWhlYWRlcltjb2xvcj0ncHJpbWFyeSddIHtcbiAgICAgIC8vIElvbmljJ3MgLmlvbi1jb2xvci1wcmltYXJ5IGRlY2xhcmVzIHRoZXNlIHRva2VucyB3aXRoICFpbXBvcnRhbnQuXG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW5rKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgfVxuICAgIGlvbi1saXN0Om5vdCguaW9uLWNvbG9yKSB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgaW9uLWl0ZW06bm90KC5pb24tY29sb3IpIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyAtLWNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWljb24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIH1cbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdsaWdodCddLCBpb24tbGFiZWxbY29sb3I9J2RhcmtlciddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgaW9uLWxhYmVsW2NvbG9yPSdtZWRpdW0nXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLW11dGVkKSAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLy8gQW5ndWxhciBkb2VzIG5vdCBhdHRhY2ggZW5jYXBzdWxhdGlvbiBhdHRyaWJ1dGVzIHRvIGNvbnRlbnQgaW5zZXJ0ZWQgYnkgaW5uZXJIVE1MLlxuLy8gS2VlcCBkZWVwIHJ1bGVzIGFuY2hvcmVkIHRvIGVhY2ggcGFnZSdzIG93biBkZXNjcmlwdGlvbiBjb250YWluZXIuXG5AbWl4aW4gcmljaC10ZXh0KCRjb250YWluZXIpIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIHtcbiAgICAjeyRjb250YWluZXJ9IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIDp3aGVyZShwLCBzcGFuLCBkaXYsIGxpLCBzdHJvbmcsIGIsIGVtLCBpLCBmb250LCB0ZCwgdGgpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNikgeyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICBhIHsgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDsgfVxuICAgICAgYmxvY2txdW90ZSwgcHJlLCBjb2RlIHsgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0KSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICB0YWJsZSwgdGQsIHRoIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCkgIWltcG9ydGFudDsgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 48008:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/product/product-by-id/product-by-id.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.product/product-by-id/product-by-id\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"icon-button search-toggle\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو در سامانه\">\r\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      </button>\n</div>\n\n<form class=\"header-search\" *ngIf=\"showSearchbar\" (ngSubmit)=\"search()\">\r\n    <div class=\"search-input-group\">\r\n      <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\r\n      <input name=\"queryText\" [(ngModel)]=\"queryText\" placeholder=\"جستجو میان کاربرگ‌ها، طرح درس‌ها و ابزارهای کلاسی...\" type=\"search\" autofocus />\r\n      <button class=\"button primary\" type=\"submit\">جستجو</button>\r\n      <button class=\"button secondary close-search\" type=\"button\" (click)=\"showSearchbar = false\">بستن</button>\r\n    </div>\r\n  </form>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content [attr.dir]=\"language.direction\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <!-- Educational Breadcrumb Bar -->\r\n  <div class=\"edu-breadcrumbs-bar\">\r\n    <div class=\"page-container edu-breadcrumbs-inner\">\r\n      <nav class=\"edu-breadcrumbs\" aria-label=\"مسیر راهنما\">\r\n        <a [routerLink]=\"url('/Home')\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>\r\n          <span>خانه</span>\r\n        </a>\r\n        <span class=\"edu-sep\">‹</span>\r\n        <a [routerLink]=\"url('/Product')\">\r\n          <span>محصولات و کاربرگ‌های آموزشی</span>\r\n        </a>\r\n        <span class=\"edu-sep\" *ngIf=\"product\">‹</span>\r\n        <span class=\"edu-current\" *ngIf=\"product\">{{ product.name }}</span>\r\n      </nav>\r\n      <div class=\"edu-grade-pill\">\r\n        <span class=\"sparkle-icon\">✦</span>\r\n        <span>کاربرگ‌های استاندارد، طرح درس و ابزارهای تدریس پایه اول</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-grid class=\"no-pad\" *ngIf=\"isLoading\">\r\n    <ion-row>\r\n      <ion-col dir=\"ltr\" size=\"6\" offset=\"3\" class=\"text-center\">\r\n        <ion-spinner name=\"dots\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"no-pad\" *ngIf=\"!isLoading && isProductDisabled\">\r\n    <ion-toolbar dir=\"rtl\" class=\"text-center\">\r\n      <ion-title class=\"link no-padding\">فروشگاه موقت تعطیل شده</ion-title>\r\n    </ion-toolbar>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"product && !isLoading\" class=\"product-page\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\" class=\"no-padding\">\r\n        <ion-card class=\"no-margin product-hero-card\">\r\n          <ion-card-header class=\"product-title-block\">\r\n            <!-- <ion-card-subtitle dir=\"rtl\">\r\n              {{ product.shortDescription }}\r\n            </ion-card-subtitle> -->\r\n            <ion-card-title class=\"text-center\" dir=\"rtl\">\r\n              <!-- {{ \"⚜️ \" + product.name + \" ⚜️\" }} -->\r\n              {{ product.name }}\r\n            </ion-card-title>\r\n            <div class=\"product-statuses\" dir=\"rtl\">\r\n              <span class=\"status-pill available\" *ngIf=\"product.isExists\">\r\n                <ion-icon name=\"checkmark-circle\"></ion-icon> موجود\r\n              </span>\r\n              <span class=\"status-pill unavailable\" *ngIf=\"!product.isExists && !product.isCallOnly\">\r\n                <ion-icon name=\"close-circle\"></ion-icon> ناموجود\r\n              </span>\r\n              <span class=\"status-pill special\" *ngIf=\"product.isSpecial\">\r\n                <ion-icon name=\"flash\"></ion-icon> فروش ویژه\r\n              </span>\r\n              <span class=\"status-pill brand\" *ngIf=\"product.madeByAvalAmooz\">\r\n                <ion-icon name=\"shield-checkmark\"></ion-icon> ساخت اول آموز\r\n              </span>\r\n            </div>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"no-h-padding\">\r\n            <ion-grid>\r\n              <ion-row dir=\"rtl\" class=\"product-hero-layout\">\r\n                <ion-col\r\n                  size=\"12\"\r\n                  size-md=\"5\"\r\n                  size-lg=\"4\"\r\n                  *ngIf=\"images.length > 0\"\r\n                  class=\"product-gallery-column\"\r\n                >\r\n                  <ion-img\r\n                    class=\"product-main-image\"\r\n                    [src]=\"images[0].url\"\r\n                  ></ion-img>\r\n                  <ion-row dir=\"rtl\" class=\"product-thumbnails\">\r\n                    <ion-img\r\n                      *ngFor=\"let image of images; let i = index\"\r\n                      (click)=\"onPhotoGallery(i)\"\r\n                      class=\"{{\r\n                        i === selectedImageIndex\r\n                          ? 'link-selected p-photo'\r\n                          : 'link-pointer-2 p-photo'\r\n                      }}\"\r\n                      [src]=\"image.url\"\r\n                    ></ion-img>\r\n                  </ion-row>\r\n                  <div *ngIf=\"windowWidth < 992\">\r\n                    <div *ngIf=\"!product.isExists && !product.isCallOnly\">\r\n                      <ion-button\r\n                        color=\"medium\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        ناموجود\r\n                      </ion-button>\r\n                    </div>\r\n                    <div *ngIf=\"product.isExists\">\r\n                      <div *ngIf=\"designeSelectedId == -1\">\r\n                        <ion-item *ngIf=\"product.offPrice > 0\">\r\n                          <ion-label>قیمت کالا: </ion-label>\r\n                          <ion-text color=\"danger\">\r\n                            <del>\r\n                              <h5>{{ product.price | rial }}</h5>\r\n                            </del>\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>قیمت کالا: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{\r\n                              !(product.offPrice > 0) || product.price == 0\r\n                                ? product.price == 0\r\n                                  ? 'warning'\r\n                                  : 'success'\r\n                                : 'success'\r\n                            }}\"\r\n                          >\r\n                            {{\r\n                              !(product.offPrice > 0) || product.price == 0\r\n                                ? product.price == 0\r\n                                  ? \"رایگان\"\r\n                                  : (product.price | rial)\r\n                                : (product.offPrice | rial)\r\n                            }}\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"product.offPrice > 0\">\r\n                          <ion-label>میزان تخفیف: </ion-label>\r\n                          <ion-text color=\"warning\">\r\n                            <h5>\r\n                              {{ product.price - product.offPrice | rial }}\r\n                            </h5>\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"product.offPrice > 0\">\r\n                          <ion-label>درصد تخفیف: </ion-label>\r\n                          <ion-text color=\"danger\">\r\n                            <h5>\r\n                              <ion-badge color=\"danger\" mode=\"md\">{{\r\n                                (\r\n                                  ((product.price - product.offPrice) * 100) /\r\n                                  product.price\r\n                                ).toFixed(1) + \"%\"\r\n                              }}</ion-badge>\r\n                            </h5>\r\n                          </ion-text>\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            name=\"pricetags-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"designeSelectedId != -1\">\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            product.productDesigns[designeSelectedId]\r\n                              .offPrice != 0\r\n                          \"\r\n                        >\r\n                          <ion-label>قیمت کالا: </ion-label>\r\n                          <ion-text color=\"danger\">\r\n                            <del>\r\n                              <h5>\r\n                                {{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price | rial\r\n                                }}\r\n                              </h5>\r\n                            </del>\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-label>قیمت کالا: </ion-label>\r\n                          <ion-text\r\n                            color=\"{{\r\n                              product.productDesigns[designeSelectedId]\r\n                                .offPrice == 0 ||\r\n                              product.productDesigns[designeSelectedId].price ==\r\n                                0\r\n                                ? product.productDesigns[designeSelectedId]\r\n                                    .price == 0\r\n                                  ? 'warning'\r\n                                  : 'success'\r\n                                : 'success'\r\n                            }}\"\r\n                          >\r\n                            {{\r\n                              product.productDesigns[designeSelectedId]\r\n                                .offPrice == 0 ||\r\n                              product.productDesigns[designeSelectedId].price ==\r\n                                0\r\n                                ? product.productDesigns[designeSelectedId]\r\n                                    .price == 0\r\n                                  ? \"رایگان\"\r\n                                  : (product.productDesigns[designeSelectedId]\r\n                                      .price | rial)\r\n                                : (product.productDesigns[designeSelectedId]\r\n                                    .offPrice | rial)\r\n                            }}\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            product.productDesigns[designeSelectedId]\r\n                              .offPrice != 0\r\n                          \"\r\n                        >\r\n                          <ion-label>میزان تخفیف: </ion-label>\r\n                          <ion-text color=\"warning\">\r\n                            <h5>\r\n                              {{\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .price -\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .offPrice | rial\r\n                              }}\r\n                            </h5>\r\n                          </ion-text>\r\n                          <ion-icon slot=\"end\" name=\"cash-outline\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            product.productDesigns[designeSelectedId]\r\n                              .offPrice != 0\r\n                          \"\r\n                        >\r\n                          <ion-label>درصد تخفیف: </ion-label>\r\n                          <ion-text color=\"danger\">\r\n                            <h5>\r\n                              <ion-badge color=\"danger\" mode=\"md\">{{\r\n                                (\r\n                                  ((product.productDesigns[designeSelectedId]\r\n                                    .price -\r\n                                    product.productDesigns[designeSelectedId]\r\n                                      .offPrice) *\r\n                                    100) /\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price\r\n                                ).toFixed(1) + \"%\"\r\n                              }}</ion-badge>\r\n                            </h5>\r\n                          </ion-text>\r\n                          <ion-icon\r\n                            slot=\"end\"\r\n                            name=\"pricetags-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </div>\r\n                      <div *ngIf=\"product.hasSeveralDesigns && isBuyReady\">\r\n                        <ion-item dir=\"rtl\">\r\n                          <ion-label>طرح:</ion-label>\r\n                          <ion-select\r\n                            [(ngModel)]=\"designeSelectedId\"\r\n                            (ionChange)=\"onDesignChange()\"\r\n                            okText=\"انتخاب\"\r\n                            cancelText=\"لغو\"\r\n                          >\r\n                            <div\r\n                              *ngFor=\"\r\n                                let design of product.productDesigns;\r\n                                let i = index\r\n                              \"\r\n                            >\r\n                              <ion-select-option\r\n                                *ngIf=\"design.isActive && design.isShow\"\r\n                                [value]=\"i\"\r\n                                >{{ design.title }}</ion-select-option\r\n                              >\r\n                            </div>\r\n                          </ion-select>\r\n                        </ion-item>\r\n                      </div>\r\n                      <div *ngIf=\"isBuyReady\">\r\n                        <ion-item dir=\"rtl\">\r\n                          <ion-label>نوع ارسال:</ion-label>\r\n                          <ion-select\r\n                            [(ngModel)]=\"sendTypeId\"\r\n                            okText=\"انتخاب\"\r\n                            cancelText=\"لغو\"\r\n                            [disabled]=\"existInCart\"\r\n                          >\r\n                            <ion-select-option\r\n                              value=\"1\"\r\n                              *ngIf=\"product.isOwnDeliverySend\"\r\n                              >دریافت حضوری</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"2\"\r\n                              *ngIf=\"product.isBikeDeliverySend\"\r\n                              >پیک موتوری</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"3\"\r\n                              *ngIf=\"product.isTipaxSend\"\r\n                              >تیپاکس</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"7\"\r\n                              *ngIf=\"product.isTipaxSoRentSend\"\r\n                              >تیپاکس (پس کرایه)</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"4\"\r\n                              *ngIf=\"product.isPostSend\"\r\n                              >پست</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"5\"\r\n                              *ngIf=\"product.isSpecialPostSend\"\r\n                              >پست پیشتاز</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"6\"\r\n                              *ngIf=\"product.isBurberrySend\"\r\n                              >باربری</ion-select-option\r\n                            >\r\n                            <ion-select-option\r\n                              value=\"9\"\r\n                              *ngIf=\"product.isBurberrySend\"\r\n                              disabled=\"true\"\r\n                              >انتخاب نشده</ion-select-option\r\n                            >\r\n                          </ion-select>\r\n                        </ion-item>\r\n                      </div>\r\n                      <ion-item *ngIf=\"existInCart\">\r\n                        <ion-label>تعداد در سبد خرید:</ion-label>\r\n                        <ion-text color=\"warning\">\r\n                          {{ onGetProductCartCount() }}\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"cart-outline\"></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"designeSelectedId == -1 && isBuyReady\"\r\n                        lines=\"none\"\r\n                      >\r\n                        <ion-buttons class=\"full-width\">\r\n                          <ion-button\r\n                            color=\"success\"\r\n                            [disabled]=\"product.count - (count + 1) < 0\"\r\n                            *ngIf=\"!existInCart\"\r\n                            (click)=\"onCountIncrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"add-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button\r\n                            [disabled]=\"product.count - (count + 1) < 0\"\r\n                            color=\"success\"\r\n                            *ngIf=\"existInCart\"\r\n                            (click)=\"onCountIncrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"add-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-input\r\n                            class=\"text-center in-count\"\r\n                            color=\"medium\"\r\n                            *ngIf=\"!existInCart\"\r\n                            type=\"number\"\r\n                            placeholder=\"تعداد\"\r\n                            [(ngModel)]=\"count\"\r\n                            min=\"1\"\r\n                            [disabled]=\"product.count <= 0\"\r\n                            (ionBlur)=\"onCountChangeTimer()\"\r\n                            [max]=\"product.count\"\r\n                          ></ion-input>\r\n                          <ion-input\r\n                            class=\"text-center in-count\"\r\n                            color=\"medium\"\r\n                            *ngIf=\"existInCart\"\r\n                            type=\"number\"\r\n                            placeholder=\"تعداد\"\r\n                            [(ngModel)]=\"count\"\r\n                            min=\"1\"\r\n                            [disabled]=\"product.count <= 0\"\r\n                            (ionBlur)=\"onCountChangeTimer()\"\r\n                            [max]=\"product.count - onGetProductCartCount()\"\r\n                          ></ion-input>\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            *ngIf=\"count > 1\"\r\n                            (click)=\"onCountDecrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"remove-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            *ngIf=\"count <= 1\"\r\n                            [disabled]=\"!existInCart\"\r\n                            (click)=\"onRemove()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"trash-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"designeSelectedId != -1 && isBuyReady\"\r\n                        lines=\"none\"\r\n                      >\r\n                        <ion-buttons class=\"full-width\">\r\n                          <ion-button\r\n                            color=\"success\"\r\n                            [disabled]=\"\r\n                              product.productDesigns[designeSelectedId].count -\r\n                                (count + 1) <\r\n                              0\r\n                            \"\r\n                            *ngIf=\"!existInCart\"\r\n                            (click)=\"onCountIncrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"add-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button\r\n                            [disabled]=\"\r\n                              product.productDesigns[designeSelectedId].count -\r\n                                (count + 1) <\r\n                              0\r\n                            \"\r\n                            color=\"success\"\r\n                            *ngIf=\"existInCart\"\r\n                            (click)=\"onCountIncrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"add-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-input\r\n                            class=\"text-center in-count\"\r\n                            color=\"medium\"\r\n                            *ngIf=\"!existInCart\"\r\n                            type=\"number\"\r\n                            placeholder=\"تعداد\"\r\n                            [(ngModel)]=\"count\"\r\n                            min=\"1\"\r\n                            [disabled]=\"\r\n                              product.productDesigns[designeSelectedId].count <=\r\n                              0\r\n                            \"\r\n                            (ionBlur)=\"onCountChangeTimer()\"\r\n                            [max]=\"\r\n                              product.productDesigns[designeSelectedId].count\r\n                            \"\r\n                          ></ion-input>\r\n                          <ion-input\r\n                            class=\"text-center in-count\"\r\n                            color=\"medium\"\r\n                            *ngIf=\"existInCart\"\r\n                            type=\"number\"\r\n                            placeholder=\"تعداد\"\r\n                            [(ngModel)]=\"count\"\r\n                            min=\"1\"\r\n                            [disabled]=\"\r\n                              product.productDesigns[designeSelectedId].count <=\r\n                              0\r\n                            \"\r\n                            (ionBlur)=\"onCountChangeTimer()\"\r\n                            [max]=\"\r\n                              product.productDesigns[designeSelectedId].count -\r\n                              onGetProductCartCount()\r\n                            \"\r\n                          ></ion-input>\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            *ngIf=\"count > 1\"\r\n                            (click)=\"onCountDecrease()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"remove-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            *ngIf=\"count <= 1\"\r\n                            [disabled]=\"!existInCart\"\r\n                            (click)=\"onRemove()\"\r\n                          >\r\n                            <ion-icon\r\n                              slot=\"icon-only\"\r\n                              name=\"trash-outline\"\r\n                            ></ion-icon>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-item>\r\n\r\n                      <div *ngIf=\"designeSelectedId == -1 && isBuyReady\">\r\n                        <div *ngIf=\"product.count < 6 && product.count > 0\">\r\n                          <ion-text color=\"danger\" class=\"text-center\">\r\n                            <h5 class=\"text-center margin-top-12\">\r\n                              {{ \"تنها \" + product.count + \" عدد باقی مانده\" }}\r\n                            </h5>\r\n                          </ion-text>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"designeSelectedId != -1 && isBuyReady\">\r\n                        <div\r\n                          *ngIf=\"\r\n                            product.productDesigns[designeSelectedId].count <\r\n                              6 &&\r\n                            product.productDesigns[designeSelectedId].count > 0\r\n                          \"\r\n                        >\r\n                          <ion-text color=\"danger\" class=\"text-center\">\r\n                            <h5 class=\"text-center margin-top-12\">\r\n                              {{\r\n                                \"تنها \" +\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .count +\r\n                                  \" عدد باقی مانده\"\r\n                              }}\r\n                            </h5>\r\n                          </ion-text>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"IsLoggedin() && existInCart\">\r\n                        <ion-button\r\n                          [routerLink]=\"['/Cart']\"\r\n                          color=\"success\"\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                        >\r\n                          تکمیل فرآیند خرید\r\n                        </ion-button>\r\n                      </div>\r\n                      <div *ngIf=\"!IsLoggedin()\">\r\n                        <ion-button\r\n                          class=\"ion-margin\"\r\n                          routerLink=\"/Account\"\r\n                          color=\"success\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                        >\r\n                          خرید\r\n                        </ion-button>\r\n                      </div>\r\n                      <div *ngIf=\"IsLoggedin()\">\r\n                        <div dir=\"ltr\" *ngIf=\"!isBuyReady\" class=\"text-center\">\r\n                          <ion-spinner name=\"dots\"></ion-spinner>\r\n                        </div>\r\n                        <div *ngIf=\"designeSelectedId != -1 && isBuyReady && !product.isCallOnly\">\r\n                          <ion-button\r\n                            *ngIf=\"!existInCart\"\r\n                            (click)=\"AddToCart()\"\r\n                            class=\"ion-margin\"\r\n                            color=\"{{\r\n                              product.productDesigns[designeSelectedId].count <=\r\n                              0\r\n                                ? 'danger'\r\n                                : 'success'\r\n                            }}\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                            [disabled]=\"\r\n                              product.productDesigns[designeSelectedId].count <=\r\n                              0\r\n                            \"\r\n                          >\r\n                            {{\r\n                              product.productDesigns[designeSelectedId].count <=\r\n                              0\r\n                                ? \"اتمام موجودی\"\r\n                                : \"افزودن به سبد خرید\"\r\n                            }}\r\n                          </ion-button>\r\n                        </div>\r\n                        <div *ngIf=\"designeSelectedId == -1 && isBuyReady && !product.isCallOnly\">\r\n                          <ion-button\r\n                            class=\"ion-margin\"\r\n                            *ngIf=\"!existInCart\"\r\n                            (click)=\"AddToCart()\"\r\n                            color=\"{{\r\n                              product.count <= 0 ? 'danger' : 'success'\r\n                            }}\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                            [disabled]=\"product.count <= 0\"\r\n                          >\r\n                            {{\r\n                              product.count <= 0\r\n                                ? \"اتمام موجودی\"\r\n                                : \"افزودن به سبد خرید\"\r\n                            }}\r\n                          </ion-button>\r\n                        </div>\r\n                        <div *ngIf=\"isBuyReady && product.isCallOnly\">\r\n                          <ion-button\r\n                            class=\"ion-margin\"\r\n                            (click)=\"onCall()\"\r\n                            color=\"warning\"\r\n                            expand=\"block\"\r\n                            fill=\"solid\"\r\n                            shape=\"round\"\r\n                          >\r\n                            {{\r\n                              \"برای قیمت تماس بگیرید\"\r\n                            }}\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" size-md=\"7\" size-lg=\"5\" class=\"product-summary-column\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text\r\n                      style=\"margin-top: 4px; font-size: small\"\r\n                      color=\"darker\"\r\n                    >\r\n                      {{ (product.point * 5) / 100 }}\r\n                    </ion-text>\r\n                    <ion-icon\r\n                      *ngFor=\"\r\n                        let item of onMakeArray((product.point * 5) / 100)\r\n                      \"\r\n                      style=\"margin-left: 4px; width: 0.8em; height: 0.8em\"\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"star\"\r\n                    ></ion-icon>\r\n\r\n                    <ion-icon\r\n                      class=\"icon-custom\"\r\n                      color=\"success\"\r\n                      name=\"eye-outline\"\r\n                    ></ion-icon>\r\n                    <ion-text class=\"text-custom\" color=\"darker\">\r\n                      {{ product.viewCount }}\r\n                    </ion-text>\r\n\r\n                    <ion-icon\r\n                      class=\"icon-custom\"\r\n                      color=\"telegram\"\r\n                      name=\"calendar-outline\"\r\n                    ></ion-icon>\r\n                    <ion-text class=\"text-custom\" color=\"darker\">\r\n                      {{ product.lastUpdateDate | persianDate }}\r\n                    </ion-text>\r\n\r\n                    <ion-text\r\n                      color=\"danger\"\r\n                      *ngIf=\"product.isSpecial\"\r\n                      class=\"special\"\r\n                    >\r\n                      {{ \"   فروش ویژه ‼️\" }}\r\n                    </ion-text>\r\n                  </ion-item>\r\n\r\n                  <!-- <ion-row *ngIf=\"product.isSpecial\">\r\n                    <ion-col size=\"10\" offset=\"1\">\r\n                      <ion-text color=\"danger\" style=\"text-align: center\">\r\n                        <h1>فروش ویژه</h1>\r\n                      </ion-text>\r\n                    </ion-col>\r\n                  </ion-row> -->\r\n                  <!-- <ion-text color=\"dark\">\r\n                    <h2>\r\n                      <b>دسته بندی:</b> {{ GetCategory(product.categoryIds) }}\r\n                    </h2>\r\n                  </ion-text> -->\r\n                  <!-- <ion-text color=\"dark\">\r\n                    <h2>\r\n                      <b>آخرین بروزرسانی:</b>\r\n                      {{ product.lastUpdateDate | persianDate }}\r\n                      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                    </h2>\r\n                  </ion-text>\r\n                  <ion-text color=\"dark\">\r\n                    <h2>\r\n                      <b>تعداد بازدید:</b> {{ product.viewCount }}\r\n                      <ion-icon name=\"eye-outline\"></ion-icon>\r\n                    </h2>\r\n                  </ion-text> -->\r\n\r\n                  <ion-item lines=\"none\">\r\n                    <ion-text color=\"light\">\r\n                      <p [innerHTML]=\"product.shortDescription\"></p>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <div class=\"product-trust-strip\">\r\n                    <div *ngIf=\"product.hasGuarantee\">\r\n                      <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n                      <span>دارای ضمانت</span>\r\n                    </div>\r\n                    <div *ngIf=\"product.referable\">\r\n                      <ion-icon name=\"refresh-circle-outline\"></ion-icon>\r\n                      <span>امکان مرجوعی</span>\r\n                    </div>\r\n                    <div *ngIf=\"product.isFreeSend\">\r\n                      <ion-icon name=\"car-outline\"></ion-icon>\r\n                      <span>ارسال رایگان</span>\r\n                    </div>\r\n                    <div *ngIf=\"product.sendTime\">\r\n                      <ion-icon name=\"time-outline\"></ion-icon>\r\n                      <span>ارسال تا {{ product.sendTime }} روز کاری</span>\r\n                    </div>\r\n                  </div>\r\n                  <br />\r\n                  <ion-item>\r\n                    <ion-label\r\n                      >وضعیت کالا:\r\n                      {{ product.isUsed ? \"دسته دو\" : \"نو\" }}</ion-label\r\n                    >\r\n                    <ion-icon\r\n                      color=\"{{ product.isUsed ? 'warning' : 'success' }}\"\r\n                      slot=\"start\"\r\n                      name=\"{{\r\n                        product.isUsed ? 'alert-outline' : 'checkbox-outline'\r\n                      }}\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"product.isUsed\">\r\n                    <ion-label\r\n                      >سلامت کالا:\r\n                      {{\r\n                        product.isCorrupt ? \"ایراد فنی دارد\" : \"سالم\"\r\n                      }}</ion-label\r\n                    >\r\n                    <ion-icon\r\n                      color=\"{{ product.isCorrupt ? 'warning' : 'success' }}\"\r\n                      slot=\"start\"\r\n                      name=\"{{\r\n                        product.isCorrupt ? 'alert-outline' : 'checkbox-outline'\r\n                      }}\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"product.productDesigns\">\r\n                    <ion-label *ngIf=\"!product.hasSeveralDesigns\"\r\n                      >وزن کالا: {{ product.weight + \" گرم\" }}</ion-label\r\n                    >\r\n                    <ion-label *ngIf=\"product.hasSeveralDesigns\"\r\n                      >وزن کالا:\r\n                      {{\r\n                        product.productDesigns[designeSelectedId].weight +\r\n                          \" گرم\"\r\n                      }}</ion-label\r\n                    >\r\n                    <ion-icon\r\n                      color=\"warning\"\r\n                      slot=\"start\"\r\n                      name=\"barbell-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"product.madeByAvalAmooz\">\r\n                    <ion-text color=\"light\">\r\n                      محصول ساخت\r\n                      <ion-text color=\"success\"> اول آموز </ion-text> است\r\n                    </ion-text>\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                      name=\"planet-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n                  <ion-item *ngIf=\"!product.isCallOnly\">\r\n                    <ion-label>\r\n                      دریافت\r\n                      <ion-text color=\"success\">\r\n                        {{ onGetProductPoint() }}\r\n                      </ion-text>\r\n                      امتیاز به ازای هر خرید</ion-label\r\n                    >\r\n                    <ion-icon\r\n                      color=\"instagram\"\r\n                      slot=\"start\"\r\n                      name=\"ribbon-outline\"\r\n                    ></ion-icon>\r\n                  </ion-item>\r\n\r\n                  <div *ngIf=\"windowWidth >= 992\">\r\n                    <div *ngIf=\"product.hasSeveralDesigns && isBuyReady\">\r\n                      <ion-item dir=\"rtl\">\r\n                        <ion-label>طرح:</ion-label>\r\n                        <ion-select\r\n                          [(ngModel)]=\"designeSelectedId\"\r\n                          (ionChange)=\"onDesignChange()\"\r\n                          okText=\"انتخاب\"\r\n                          cancelText=\"لغو\"\r\n                        >\r\n                          <div\r\n                            *ngFor=\"\r\n                              let design of product.productDesigns;\r\n                              let i = index\r\n                            \"\r\n                          >\r\n                            <ion-select-option\r\n                              *ngIf=\"design.isActive && design.isShow\"\r\n                              [value]=\"i\"\r\n                              >{{ design.title }}</ion-select-option\r\n                            >\r\n                          </div>\r\n                        </ion-select>\r\n                      </ion-item>\r\n                    </div>\r\n                    <div *ngIf=\"isBuyReady\">\r\n                      <ion-item dir=\"rtl\">\r\n                        <ion-label>نوع ارسال:</ion-label>\r\n                        <ion-select\r\n                          [(ngModel)]=\"sendTypeId\"\r\n                          okText=\"انتخاب\"\r\n                          cancelText=\"لغو\"\r\n                          [disabled]=\"existInCart\"\r\n                        >\r\n                          <ion-select-option\r\n                            value=\"1\"\r\n                            *ngIf=\"product.isOwnDeliverySend\"\r\n                            >دریافت حضوری</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"2\"\r\n                            *ngIf=\"product.isBikeDeliverySend\"\r\n                            >پیک موتوری</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"3\"\r\n                            *ngIf=\"product.isTipaxSend\"\r\n                            >تیپاکس</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"7\"\r\n                            *ngIf=\"product.isTipaxSoRentSend\"\r\n                            >تیپاکس (پس کرایه)</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"4\"\r\n                            *ngIf=\"product.isPostSend\"\r\n                            >پست</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"5\"\r\n                            *ngIf=\"product.isSpecialPostSend\"\r\n                            >پست پیشتاز</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"6\"\r\n                            *ngIf=\"product.isBurberrySend\"\r\n                            >باربری</ion-select-option\r\n                          >\r\n                          <ion-select-option\r\n                            value=\"9\"\r\n                            *ngIf=\"product.isBurberrySend\"\r\n                            disabled=\"true\"\r\n                            >انتخاب نشده</ion-select-option\r\n                          >\r\n                        </ion-select>\r\n                      </ion-item>\r\n                    </div>\r\n                    <ion-item *ngIf=\"existInCart\">\r\n                      <ion-label>تعداد در سبد خرید:</ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        {{ onGetProductCartCount() }}\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"cart-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item\r\n                      *ngIf=\"designeSelectedId == -1 && isBuyReady\"\r\n                      lines=\"none\"\r\n                    >\r\n                      <!-- <ion-label color=\"light\"> تعداد: </ion-label> -->\r\n                      <ion-buttons class=\"full-width\">\r\n                        <ion-button\r\n                          color=\"success\"\r\n                          [disabled]=\"product.count - (count + 1) < 0\"\r\n                          *ngIf=\"!existInCart\"\r\n                          (click)=\"onCountIncrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"add-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          [disabled]=\"product.count - (count + 1) < 0\"\r\n                          color=\"success\"\r\n                          *ngIf=\"existInCart\"\r\n                          (click)=\"onCountIncrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"add-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-input\r\n                          class=\"text-center in-count\"\r\n                          color=\"medium\"\r\n                          *ngIf=\"!existInCart\"\r\n                          type=\"number\"\r\n                          placeholder=\"تعداد\"\r\n                          [(ngModel)]=\"count\"\r\n                          min=\"1\"\r\n                          [disabled]=\"product.count <= 0\"\r\n                          (ionBlur)=\"onCountChangeTimer()\"\r\n                          [max]=\"product.count\"\r\n                        ></ion-input>\r\n                        <ion-input\r\n                          class=\"text-center in-count\"\r\n                          color=\"medium\"\r\n                          *ngIf=\"existInCart\"\r\n                          type=\"number\"\r\n                          placeholder=\"تعداد\"\r\n                          [(ngModel)]=\"count\"\r\n                          min=\"1\"\r\n                          [disabled]=\"product.count <= 0\"\r\n                          (ionBlur)=\"onCountChangeTimer()\"\r\n                          [max]=\"product.count - onGetProductCartCount()\"\r\n                        ></ion-input>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          *ngIf=\"count > 1\"\r\n                          (click)=\"onCountDecrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"remove-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          *ngIf=\"count <= 1\"\r\n                          [disabled]=\"!existInCart\"\r\n                          (click)=\"onRemove()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"trash-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-item>\r\n                    <ion-item\r\n                      *ngIf=\"designeSelectedId != -1 && isBuyReady\"\r\n                      lines=\"none\"\r\n                    >\r\n                      <!-- <ion-label color=\"light\" style=\"margin-left: 24px\">\r\n                      تعداد:\r\n                    </ion-label> -->\r\n                      <ion-buttons class=\"full-width\">\r\n                        <ion-button\r\n                          color=\"success\"\r\n                          [disabled]=\"\r\n                            product.productDesigns[designeSelectedId].count -\r\n                              (count + 1) <\r\n                            0\r\n                          \"\r\n                          *ngIf=\"!existInCart\"\r\n                          (click)=\"onCountIncrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"add-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          [disabled]=\"\r\n                            product.productDesigns[designeSelectedId].count -\r\n                              (count + 1) <\r\n                            0\r\n                          \"\r\n                          color=\"success\"\r\n                          *ngIf=\"existInCart\"\r\n                          (click)=\"onCountIncrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"add-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-input\r\n                          class=\"text-center in-count\"\r\n                          color=\"medium\"\r\n                          *ngIf=\"!existInCart\"\r\n                          type=\"number\"\r\n                          placeholder=\"تعداد\"\r\n                          [(ngModel)]=\"count\"\r\n                          min=\"1\"\r\n                          [disabled]=\"\r\n                            product.productDesigns[designeSelectedId].count <= 0\r\n                          \"\r\n                          (ionBlur)=\"onCountChangeTimer()\"\r\n                          [max]=\"\r\n                            product.productDesigns[designeSelectedId].count\r\n                          \"\r\n                        ></ion-input>\r\n                        <ion-input\r\n                          class=\"text-center in-count\"\r\n                          color=\"medium\"\r\n                          *ngIf=\"existInCart\"\r\n                          type=\"number\"\r\n                          placeholder=\"تعداد\"\r\n                          [(ngModel)]=\"count\"\r\n                          min=\"1\"\r\n                          [disabled]=\"\r\n                            product.productDesigns[designeSelectedId].count <= 0\r\n                          \"\r\n                          (ionBlur)=\"onCountChangeTimer()\"\r\n                          [max]=\"\r\n                            product.productDesigns[designeSelectedId].count -\r\n                            onGetProductCartCount()\r\n                          \"\r\n                        ></ion-input>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          *ngIf=\"count > 1\"\r\n                          (click)=\"onCountDecrease()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"remove-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          *ngIf=\"count <= 1\"\r\n                          [disabled]=\"!existInCart\"\r\n                          (click)=\"onRemove()\"\r\n                        >\r\n                          <ion-icon\r\n                            slot=\"icon-only\"\r\n                            name=\"trash-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-item>\r\n\r\n                    <div *ngIf=\"designeSelectedId == -1 && isBuyReady\">\r\n                      <div *ngIf=\"product.count < 6 && product.count > 0\">\r\n                        <ion-text color=\"danger\" class=\"text-center\">\r\n                          <h5 class=\"text-center margin-top-12\">\r\n                            {{ \"تنها \" + product.count + \" عدد باقی مانده\" }}\r\n                          </h5>\r\n                        </ion-text>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"designeSelectedId != -1 && isBuyReady\">\r\n                      <div\r\n                        *ngIf=\"\r\n                          product.productDesigns[designeSelectedId].count < 6 &&\r\n                          product.productDesigns[designeSelectedId].count > 0\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"danger\" class=\"text-center\">\r\n                          <h5 class=\"text-center margin-top-12\">\r\n                            {{\r\n                              \"تنها \" +\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .count +\r\n                                \" عدد باقی مانده\"\r\n                            }}\r\n                          </h5>\r\n                        </ion-text>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"!IsLoggedin()\">\r\n                      <ion-button\r\n                        class=\"ion-margin\"\r\n                        routerLink=\"/Account\"\r\n                        color=\"success\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                      >\r\n                        خرید\r\n                      </ion-button>\r\n                    </div>\r\n                    <div *ngIf=\"IsLoggedin()\">\r\n                      <div dir=\"ltr\" *ngIf=\"!isBuyReady\" class=\"text-center\">\r\n                        <ion-spinner name=\"dots\"></ion-spinner>\r\n                      </div>\r\n                      <div *ngIf=\"designeSelectedId != -1 && isBuyReady && !product.isCallOnly\">\r\n                        <ion-button\r\n                          *ngIf=\"!existInCart\"\r\n                          (click)=\"AddToCart()\"\r\n                          class=\"ion-margin\"\r\n                          color=\"{{\r\n                            product.productDesigns[designeSelectedId].count <= 0\r\n                              ? 'danger'\r\n                              : 'success'\r\n                          }}\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                          [disabled]=\"\r\n                            product.productDesigns[designeSelectedId].count <= 0\r\n                          \"\r\n                        >\r\n                          {{\r\n                            product.productDesigns[designeSelectedId].count <= 0\r\n                              ? \"اتمام موجودی\"\r\n                              : \"افزودن به سبد خرید\"\r\n                          }}\r\n                        </ion-button>\r\n                        <!-- <ion-button\r\n                        *ngIf=\"existInCart\"\r\n                        (click)=\"AddMoreToCart()\"\r\n                        color=\"success\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        [disabled]=\"\r\n                          product.count - onGetProductCartCount() <= 0\r\n                        \"\r\n                      >\r\n                        اضافه کردن بیشتر به سبد\r\n                      </ion-button> -->\r\n                      </div>\r\n\r\n                      <div *ngIf=\"designeSelectedId == -1 && isBuyReady && !product.isCallOnly\">\r\n                        <ion-button\r\n                          class=\"ion-margin\"\r\n                          *ngIf=\"!existInCart\"\r\n                          (click)=\"AddToCart()\"\r\n                          color=\"{{\r\n                            product.count <= 0 ? 'danger' : 'success'\r\n                          }}\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                          [disabled]=\"product.count <= 0\"\r\n                        >\r\n                          {{\r\n                            product.count <= 0\r\n                              ? \"اتمام موجودی\"\r\n                              : \"افزودن به سبد خرید\"\r\n                          }}\r\n                        </ion-button>\r\n                        <!-- <ion-button\r\n                        *ngIf=\"existInCart\"\r\n                        (click)=\"AddMoreToCart()\"\r\n                        color=\"success\"\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        [disabled]=\"\r\n                          product.count - onGetProductCartCount() <= 0\r\n                        \"\r\n                      >\r\n                        اضافه کردن بیشتر به سبد\r\n                      </ion-button> -->\r\n                      </div>\r\n\r\n                      <div *ngIf=\"isBuyReady && product.isCallOnly\">\r\n                        <ion-button\r\n                          class=\"ion-margin\"\r\n                          (click)=\"onCall()\"\r\n                          color=\"warning\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                        >\r\n                          {{\r\n                            \"برای قیمت تماس بگیرید\"\r\n                          }}\r\n                          <ion-icon slot=\"start\" name=\"call\"></ion-icon>\r\n                        </ion-button>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"IsLoggedin() && existInCart\">\r\n                      <ion-button\r\n                        [routerLink]=\"['/Cart']\"\r\n                        color=\"success\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        تکمیل فرآیند خرید\r\n                      </ion-button>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\" size-lg=\"3\" class=\"product-purchase-column\">\r\n                  <ion-card class=\"no-h-margin product-purchase-panel\">\r\n                    <!-- <ion-card-header style=\"text-align: center\">\r\n                      <ion-card-subtitle\r\n                        *ngIf=\"product.offPrice > 0\"\r\n                        color=\"danger\"\r\n                        >دارای تخفیف</ion-card-subtitle\r\n                      >\r\n                      <ion-card-title>بخش خرید</ion-card-title>\r\n                    </ion-card-header> -->\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\">خرید مطمئن از اول آموز</ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-card-content style=\"padding-inline: 2px\">\r\n                      <ion-item *ngIf=\"product.isFreeSend\">\r\n                        <ion-avatar slot=\"end\">\r\n                          <img src=\"/assets/images/send-free.svg\" />\r\n                        </ion-avatar>\r\n                        <ion-label>ارسال رایگان دارد</ion-label>\r\n                      </ion-item>\r\n                      <section\r\n                        *ngIf=\"\r\n                          product.sellerUser &&\r\n                          product.sellerUser.hasFreeSendPrediction &&\r\n                          !product.isFreeSend\r\n                        \"\r\n                      >\r\n                        <ion-item lines=\"none\">\r\n                          <ion-avatar slot=\"end\">\r\n                            <img src=\"/assets/images/send-free.svg\" />\r\n                          </ion-avatar>\r\n                          <ion-label>ارسال رایگان</ion-label>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-text color=\"medium\">\r\n                            <h5>\r\n                              برای سفارش بالای\r\n                              {{\r\n                                \" \" +\r\n                                  (product.sellerUser.freeSendPredictionPrice\r\n                                    | rial)\r\n                              }}\r\n                            </h5>\r\n                          </ion-text>\r\n                        </ion-item>\r\n                      </section>\r\n                      <ion-item\r\n                        *ngIf=\"\r\n                          product.sellerUser &&\r\n                          (product.isBikeDeliverySend ||\r\n                            product.isOwnDeliverySend)\r\n                        \"\r\n                      >\r\n                        <ion-icon slot=\"end\" name=\"location-outline\"></ion-icon>\r\n                        <ion-label>\r\n                          {{\r\n                            product.sellerUser.provinceName +\r\n                              \"، شهر \" +\r\n                              product.sellerUser.cityName\r\n                          }}</ion-label\r\n                        >\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>فروشنده:</ion-label>\r\n                        <ion-text *ngIf=\"product.sellerUser\">\r\n                          <h5>{{ GetSellerName() }}</h5>\r\n                        </ion-text>\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"storefront-outline\"\r\n                        ></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>زمان ارسال:</ion-label>\r\n                        <ion-text>\r\n                          <h5>{{ \"تا \" + product.sendTime + \" روز کاری\" }}</h5>\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"rocket-outline\"></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"product.hasDiscountLargeOrder\"\r\n                        button\r\n                        (click)=\"onDiscountLargeOrderClick()\"\r\n                      >\r\n                        <ion-label>شرایط فروش عمده:</ion-label>\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"shield-checkmark-outline\"\r\n                        ></ion-icon>\r\n                        <ion-button\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                          color=\"success\"\r\n                        >\r\n                          مشاهده\r\n                        </ion-button>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"product.hasGuarantee\"\r\n                        button\r\n                        (click)=\"onGuaranteeClick()\"\r\n                      >\r\n                        <ion-label>گارانتی و ضمانت:</ion-label>\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"shield-checkmark-outline\"\r\n                        ></ion-icon>\r\n                        <ion-button\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                          color=\"success\"\r\n                        >\r\n                          مشاهده\r\n                        </ion-button>\r\n                      </ion-item>\r\n                      <ion-item\r\n                        *ngIf=\"product.referable\"\r\n                        button\r\n                        (click)=\"onReferableClick()\"\r\n                      >\r\n                        <ion-label>ضمانت بازگشت وجه:</ion-label>\r\n                        <ion-icon\r\n                          slot=\"end\"\r\n                          name=\"shield-checkmark-outline\"\r\n                        ></ion-icon>\r\n                        <ion-button\r\n                          color=\"success\"\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                        >\r\n                          مشاهده\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <!-- <div *ngIf=\"!product.isExists\">\r\n                        <ion-button\r\n                          color=\"medium\"\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                        >\r\n                          ناموجود\r\n                        </ion-button>\r\n                      </div> -->\r\n                      <div *ngIf=\"windowWidth >= 992\">\r\n                        <div *ngIf=\"product.isExists\">\r\n                          <div *ngIf=\"designeSelectedId == -1\">\r\n                            <ion-item *ngIf=\"product.offPrice > 0\">\r\n                              <ion-label>قیمت کالا: </ion-label>\r\n                              <ion-text color=\"danger\">\r\n                                <del>\r\n                                  <h5>{{ product.price | rial }}</h5>\r\n                                </del>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item\r\n                              lines=\"{{\r\n                                !(product.offPrice > 0) ? 'none' : 'undefined'\r\n                              }}\"\r\n                            >\r\n                              <ion-label>قیمت کالا: </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  !(product.offPrice > 0) || product.price == 0\r\n                                    ? product.price == 0\r\n                                      ? 'warning'\r\n                                      : 'success'\r\n                                    : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{\r\n                                  !(product.offPrice > 0) || product.price == 0\r\n                                    ? product.price == 0\r\n                                      ? \"رایگان\"\r\n                                      : (product.price | rial)\r\n                                    : (product.offPrice | rial)\r\n                                }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item *ngIf=\"product.offPrice > 0\">\r\n                              <ion-label>میزان تخفیف: </ion-label>\r\n                              <ion-text color=\"warning\">\r\n                                <h5>\r\n                                  {{ product.price - product.offPrice | rial }}\r\n                                </h5>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item *ngIf=\"product.offPrice > 0\">\r\n                              <ion-label>درصد تخفیف: </ion-label>\r\n                              <ion-text color=\"danger\">\r\n                                <h5>\r\n                                  <ion-badge color=\"danger\" mode=\"md\">{{\r\n                                    (\r\n                                      ((product.price - product.offPrice) *\r\n                                        100) /\r\n                                      product.price\r\n                                    ).toFixed(1) + \"%\"\r\n                                  }}</ion-badge>\r\n                                </h5>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"pricetags-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"designeSelectedId != -1\">\r\n                            <ion-item\r\n                              *ngIf=\"\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .offPrice != 0\r\n                              \"\r\n                            >\r\n                              <ion-label>قیمت کالا: </ion-label>\r\n                              <ion-text color=\"danger\">\r\n                                <del>\r\n                                  <h5>\r\n                                    {{\r\n                                      product.productDesigns[designeSelectedId]\r\n                                        .price | rial\r\n                                    }}\r\n                                  </h5>\r\n                                </del>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item\r\n                              lines=\"{{\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .offPrice == 0\r\n                                  ? 'none'\r\n                                  : 'undefined'\r\n                              }}\"\r\n                            >\r\n                              <ion-label>قیمت کالا: </ion-label>\r\n                              <ion-text\r\n                                color=\"{{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .offPrice == 0 ||\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price == 0\r\n                                    ? product.productDesigns[designeSelectedId]\r\n                                        .price == 0\r\n                                      ? 'warning'\r\n                                      : 'success'\r\n                                    : 'success'\r\n                                }}\"\r\n                              >\r\n                                {{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .offPrice == 0 ||\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price == 0\r\n                                    ? product.productDesigns[designeSelectedId]\r\n                                        .price == 0\r\n                                      ? \"رایگان\"\r\n                                      : (product.productDesigns[\r\n                                          designeSelectedId\r\n                                        ].price | rial)\r\n                                    : (product.productDesigns[designeSelectedId]\r\n                                        .offPrice | rial)\r\n                                }}\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item\r\n                              *ngIf=\"\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .offPrice != 0\r\n                              \"\r\n                            >\r\n                              <ion-label>میزان تخفیف: </ion-label>\r\n                              <ion-text color=\"warning\">\r\n                                <h5>\r\n                                  {{\r\n                                    product.productDesigns[designeSelectedId]\r\n                                      .price -\r\n                                      product.productDesigns[designeSelectedId]\r\n                                        .offPrice | rial\r\n                                  }}\r\n                                </h5>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"cash-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                            <ion-item\r\n                              *ngIf=\"\r\n                                product.productDesigns[designeSelectedId]\r\n                                  .offPrice != 0\r\n                              \"\r\n                            >\r\n                              <ion-label>درصد تخفیف: </ion-label>\r\n                              <ion-text color=\"danger\">\r\n                                <h5>\r\n                                  <ion-badge color=\"danger\" mode=\"md\">{{\r\n                                    (\r\n                                      ((product.productDesigns[\r\n                                        designeSelectedId\r\n                                      ].price -\r\n                                        product.productDesigns[\r\n                                          designeSelectedId\r\n                                        ].offPrice) *\r\n                                        100) /\r\n                                      product.productDesigns[designeSelectedId]\r\n                                        .price\r\n                                    ).toFixed(1) + \"%\"\r\n                                  }}</ion-badge>\r\n                                </h5>\r\n                              </ion-text>\r\n                              <ion-icon\r\n                                slot=\"end\"\r\n                                name=\"pricetags-outline\"\r\n                              ></ion-icon>\r\n                            </ion-item>\r\n                          </div>\r\n\r\n                          <!-- <div\r\n                          *ngIf=\"\r\n                            product.offPrice > 0 && designeSelectedId == -1\r\n                          \"\r\n                        >\r\n                          <ion-text color=\"danger\">\r\n                            <h2>\r\n                              <i>{{ product.price | OffPrice }}</i>\r\n                              <ion-badge color=\"warning\"\r\n                                >{{ GetOffPercent() }}%</ion-badge\r\n                              >\r\n                            </h2>\r\n                            <h1>{{ product.offPrice | rial }}</h1>\r\n                          </ion-text>\r\n                        </div>\r\n                        <div\r\n                          *ngIf=\"\r\n                            !(product.offPrice > 0) && designeSelectedId == -1\r\n                          \"\r\n                        >\r\n                          <ion-text color=\"success\">\r\n                            <h1>{{ product.price | rial }}</h1>\r\n                          </ion-text>\r\n                        </div>\r\n                        <div *ngIf=\"designeSelectedId != -1\">\r\n                          <div *ngIf=\"product.productDesigns[designeSelectedId].offPrice != 0\">\r\n                            <ion-text color=\"danger\">\r\n                              <h2>\r\n                                <i>{{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price | OffPrice\r\n                                }}</i>\r\n                                <ion-badge color=\"warning\"\r\n                                  >{{ GetOffPercent2() }}%</ion-badge\r\n                                >\r\n                              </h2>\r\n                              <h1>\r\n                                {{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .offPrice | rial\r\n                                }}\r\n                              </h1>\r\n                            </ion-text>\r\n                          </div>\r\n                          <div *ngIf=\"product.productDesigns[designeSelectedId].offPrice == 0\">\r\n                            <ion-text color=\"success\">\r\n                              <h1>\r\n                                {{\r\n                                  product.productDesigns[designeSelectedId]\r\n                                    .price | rial\r\n                                }}\r\n                              </h1>\r\n                            </ion-text>\r\n                          </div>\r\n                        </div> -->\r\n                          <!-- <br /> -->\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"designeSelectedId == -1 && !product.isCallOnly\">\r\n                        <div *ngIf=\"!product.isExists || product.count <= 0\">\r\n                          <br />\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            disabled\r\n                            expand=\"block\"\r\n                            fill=\"clear\"\r\n                            shape=\"round\"\r\n                          >\r\n                            محصول موجود نیست\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"designeSelectedId != -1 && !product.isCallOnly\">\r\n                        <div\r\n                          *ngIf=\"\r\n                            !product.isExists ||\r\n                            product.productDesigns[this.designeSelectedId]\r\n                              .count <= 0\r\n                          \"\r\n                        >\r\n                          <br />\r\n                          <ion-button\r\n                            color=\"danger\"\r\n                            disabled\r\n                            expand=\"block\"\r\n                            fill=\"clear\"\r\n                            shape=\"round\"\r\n                          >\r\n                            محصول موجود نیست\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"product.isCallOnly\">\r\n                        <div>\r\n                          <br />\r\n                          <ion-button\r\n                            color=\"warning\"\r\n                            expand=\"block\"\r\n                            (click)=\"onCall()\"\r\n                            fill=\"clear\"\r\n                            shape=\"round\"\r\n                          >\r\n                            برای قیمت تماس بگیرید\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"sameProduct.length > 0\" class=\"related-products-row\">\r\n      <ion-col>\r\n        <ion-card class=\"related-products-card\">\r\n          <ion-card-header dir=\"rtl\" color=\"primary\">\r\n            <ion-card-subtitle\r\n              ><a\r\n                *ngIf=\"catIds !== ''\"\r\n                class=\"decoration-none\"\r\n                routerLink=\"/Product/Search\"\r\n                [queryParams]=\"{ categoryIds: catIds, page: 1, take: 12 }\"\r\n                ><ion-text class=\"link\" color=\"lightest\">\r\n                  مشاهده همه\r\n                </ion-text></a\r\n              ></ion-card-subtitle\r\n            >\r\n            <ion-card-title class=\"text-center\">محصولات مرتبط</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <swiper\r\n              dir=\"rtl\"\r\n              *ngIf=\"sameProduct.length > 0\"\r\n              #swiperRef\r\n              [centeredSlides]=\"false\"\r\n              [spaceBetween]=\"30\"\r\n              [pagination]=\"{\r\n                type: 'bullets',\r\n                clickable: true\r\n              }\"\r\n              [navigation]=\"true\"\r\n              [breakpoints]=\"{\r\n                '@0.00': {\r\n                  slidesPerView: 1,\r\n                  spaceBetween: 10\r\n                },\r\n                '@0.75': {\r\n                  slidesPerView: 2,\r\n                  spaceBetween: 20\r\n                },\r\n                '@1.00': {\r\n                  slidesPerView: 3,\r\n                  spaceBetween: 40\r\n                },\r\n                '@1.50': {\r\n                  slidesPerView: 4,\r\n                  spaceBetween: 50\r\n                }\r\n              }\"\r\n              class=\"mySwiper\"\r\n            >\r\n              <ng-template swiperSlide *ngFor=\"let item of sameProduct\">\r\n                <app-product [product]=\"item\"></app-product>\r\n              </ng-template>\r\n            </swiper>\r\n            <section *ngIf=\"sameProduct.length == 0\">\r\n              <div dir=\"ltr\" class=\"text-center\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </div>\r\n            </section>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row dir=\"rtl\" class=\"product-lower-layout\">\r\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"9\" class=\"product-content-column\">\r\n        <ion-card class=\"no-h-margin product-content-card\">\r\n          <section *ngIf=\"product.productVideos\">\r\n            <ion-list *ngIf=\"product.productVideos.length > 0\">\r\n              <ion-list-header>\r\n                <ion-label>ویدیو و لینک ها</ion-label>\r\n              </ion-list-header>\r\n              <div *ngFor=\"let video of product.productVideos; let i = index\">\r\n                <ion-item\r\n                  button\r\n                  (click)=\"onDetailClick(video.id)\"\r\n                  color=\"{{ videoDetail[i].hide ? '' : 'warning2' }}\"\r\n                >\r\n                  <!-- <ion-label\r\n                            *ngIf=\"!video.isFile\"\r\n                            title=\"{{\r\n                              video.courseTitle + ' (' + video.videoTime + ')'\r\n                            }}\"\r\n                            >{{ i + 1 + \"- \" + video.courseTitle }}</ion-label\r\n                          ><ion-text *ngIf=\"!video.isFile\" color=\"warning\">\r\n                            {{ \"(\" + video.videoTime + \")\" }}\r\n                          </ion-text> -->\r\n                  <ion-label title=\"{{ video.courseTitle }}\">{{\r\n                    i + 1 + \"- \" + video.courseTitle\r\n                  }}</ion-label>\r\n\r\n                  <ion-button\r\n                    *ngIf=\"video.isFree\"\r\n                    expand=\"block\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                  >\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"lock-open-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                    <ion-icon\r\n                      color=\"{{ videoDetail[i].hide ? 'instagram' : 'danger' }}\"\r\n                      slot=\"icon-only\"\r\n                      name=\"{{\r\n                        videoDetail[i].hide\r\n                          ? 'reorder-three-outline'\r\n                          : 'remove-circle-outline'\r\n                      }}\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-card *ngIf=\"!videoDetail[i].hide\" class=\"smooth\">\r\n                  <ion-card-header color=\"primary\">\r\n                    <ion-card-subtitle class=\"text-center\"\r\n                      >اطلاعات بیشتر</ion-card-subtitle\r\n                    >\r\n                  </ion-card-header>\r\n\r\n                  <div *ngIf=\"!checkBuy2 || video.isFree\">\r\n                    <div\r\n                      *ngIf=\"\r\n                        !videoDetail[i].hide &&\r\n                        !video.isFile &&\r\n                        !video.isAparat &&\r\n                        video.videoUrlOnline != ''\r\n                      \"\r\n                    >\r\n                      <video class=\"video\" controls>\r\n                        <source\r\n                          [src]=\"video.videoUrlOnline\"\r\n                          type=\"{{ onGetVideoFormat(video.id) }}\"\r\n                        />\r\n                        مرورگر شما قابلیت پخش آنلاین ندارد\r\n                      </video>\r\n                    </div>\r\n\r\n                    <div\r\n                      class=\"ion-margin-top\"\r\n                      *ngIf=\"\r\n                        !videoDetail[i].hide && !video.isFile && video.isAparat\r\n                      \"\r\n                    >\r\n                      <div\r\n                        class=\"h_iframe-aparat_embed_frame\"\r\n                        [title]=\"video.courseTitle\"\r\n                      >\r\n                        <span class=\"video-span\"></span\r\n                        ><iframe\r\n                          [src]=\"checkURL2(video.id)\"\r\n                          [title]=\"video.courseTitle\"\r\n                          allowfullscreen=\"true\"\r\n                          webkitallowfullscreen=\"true\"\r\n                          mozallowfullscreen=\"true\"\r\n                        ></iframe>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ion-item *ngIf=\"!videoDetail[i].hide\">\r\n                    <ion-label>لینک دانلود:</ion-label>\r\n                    <a\r\n                      *ngIf=\"!checkBuy2 || video.isFree; else private\"\r\n                      class=\"decoration-none\"\r\n                      [href]=\"video.videoUrl\"\r\n                      target=\"_blank\"\r\n                      [title]=\"video.courseTitle\"\r\n                      ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"icon-only\"\r\n                          name=\"download-outline\"\r\n                        ></ion-icon> </ion-button\r\n                    ></a>\r\n\r\n                    <ng-template #private\r\n                      ><ion-button\r\n                        (click)=\"presentAlertConfirm()\"\r\n                        expand=\"block\"\r\n                        fill=\"clear\"\r\n                        shape=\"round\"\r\n                      >\r\n                        <ion-icon\r\n                          color=\"danger\"\r\n                          slot=\"icon-only\"\r\n                          name=\"key-outline\"\r\n                        ></ion-icon> </ion-button\r\n                    ></ng-template>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!videoDetail[i].hide && !video.isFile\">\r\n                    <ion-label> مدت زمان ویدیو: </ion-label>\r\n                    <ion-text *ngIf=\"!video.isFile\" color=\"warning\">\r\n                      {{ \"(\" + video.videoTime + \")\" }}\r\n                    </ion-text>\r\n                  </ion-item>\r\n\r\n                  <ion-item *ngIf=\"!videoDetail[i].hide\">\r\n                    <ion-text color=\"light\" class=\"full-width\"\r\n                      ><h3 class=\"h3-title\">\r\n                        عنوان:\r\n                        <ion-text color=\"light\" class=\"h3-title-content\">\r\n                          {{ video.courseTitle }}\r\n                        </ion-text>\r\n                      </h3>\r\n                    </ion-text>\r\n                  </ion-item>\r\n\r\n                  <ion-item\r\n                    *ngIf=\"!videoDetail[i].hide && video.videoDescription != ''\"\r\n                    lines=\"none\"\r\n                  >\r\n                    <ion-text color=\"light\" class=\"no-margin\">\r\n                      <h3 class=\"no-margin\">توضیحات:</h3>\r\n                    </ion-text>\r\n                  </ion-item>\r\n                  <ion-item\r\n                    *ngIf=\"!videoDetail[i].hide && video.videoDescription != ''\"\r\n                  >\r\n                    <p style=\"white-space: pre-line; margin-right: 8px\">\r\n                      {{ video.videoDescription }}\r\n                    </p>\r\n                  </ion-item>\r\n                </ion-card>\r\n              </div>\r\n            </ion-list>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>معرفی</ion-label>\r\n                <ion-button\r\n                  size=\"small\"\r\n                  class=\"ion-margin-horizontal\"\r\n                  color=\"instagram\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  routerLink=\"{{ '/ProductQuestions/' + product.id }}\"\r\n                >\r\n                  پرسش سوال\r\n                  <ion-icon slot=\"start\" name=\"help-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-list-header>\r\n              <ion-item lines=\"none\">\r\n                <ion-text\r\n                  ><div\r\n                    [class]=\"readMore\"\r\n                    [innerHTML]=\"product.description\"\r\n                  ></div\r\n                ></ion-text>\r\n              </ion-item>\r\n              <ion-button\r\n                class=\"w-max-content\"\r\n                *ngIf=\"readMore == 'readMore'\"\r\n                color=\"telegram\"\r\n                (click)=\"onReadMoreOrLess()\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n              >\r\n                نمایش بیشتر\r\n                <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button\r\n                class=\"w-max-content\"\r\n                *ngIf=\"readMore == 'readLess'\"\r\n                color=\"telegram\"\r\n                (click)=\"onReadMoreOrLess()\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n              >\r\n                بستن\r\n                <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-list>\r\n            <ion-list\r\n              *ngIf=\"\r\n                product.furtherDetails && product.furtherDetails.length > 0\r\n              \"\r\n            >\r\n              <ion-list-header>\r\n                <ion-label>مشخصات</ion-label>\r\n              </ion-list-header>\r\n              <div *ngIf=\"readMore2 == 'readMore'\">\r\n                <div *ngFor=\"let item of product.furtherDetails; let i = index\">\r\n                  <ion-item *ngIf=\"i <= 1\">\r\n                    <ion-text class=\"w-200px font-small\">{{\r\n                      item.title\r\n                    }}</ion-text>\r\n                    <ion-text class=\"full-width font-small\">{{\r\n                      item.description\r\n                    }}</ion-text>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"readMore2 == 'readLess'\">\r\n                <div *ngFor=\"let item of product.furtherDetails; let i = index\">\r\n                  <ion-item>\r\n                    <ion-text class=\"w-200px font-small\">{{\r\n                      item.title\r\n                    }}</ion-text>\r\n                    <ion-text class=\"full-width font-small\">{{\r\n                      item.description\r\n                    }}</ion-text>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <ion-button\r\n                class=\"w-max-content\"\r\n                *ngIf=\"readMore2 == 'readMore'\"\r\n                color=\"telegram\"\r\n                (click)=\"onReadMoreOrLess2()\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n              >\r\n                نمایش بیشتر\r\n                <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button\r\n                class=\"w-max-content\"\r\n                *ngIf=\"readMore2 == 'readLess'\"\r\n                color=\"telegram\"\r\n                (click)=\"onReadMoreOrLess2()\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n              >\r\n                بستن\r\n                <ion-icon slot=\"end\" name=\"chevron-up-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-list>\r\n          </section>\r\n        </ion-card>\r\n        <section *ngIf=\"isReplyMode\">\r\n          <ion-card class=\"no-h-margin\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >به سوالات در قسمت نظرات پاسخ داده نخواهد شد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >پاسخ خود را وارد کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form\r\n                *ngIf=\"loggedIn\"\r\n                [formGroup]=\"replyForm\"\r\n                (ngSubmit)=\"presentAlertConfirm2()\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label>پاسخ شما:</ion-label>\r\n                  <ion-textarea\r\n                    rows=\"6\"\r\n                    auto-grow=\"true\"\r\n                    position=\"floating\"\r\n                    placeholder=\"پاسخ خود را وارد کنید\"\r\n                    formControlName=\"comment\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-buttons slot=\"start\" class=\"ion-margin\">\r\n                  <ion-button\r\n                    class=\"ion-margin half-percent-width\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"warning2\"\r\n                    (click)=\"isReplyMode = false; replyForm.reset()\"\r\n                  >\r\n                    لغو\r\n                  </ion-button>\r\n                  <ion-button\r\n                    class=\"ion-margin half-percent-width\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"replyForm.invalid\"\r\n                  >\r\n                    ایجاد پاسخ\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </section>\r\n        <section *ngIf=\"isReportMode\">\r\n          <ion-card class=\"no-h-margin\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >در صورت گزارش غلط اکانت شما مسدود خواهد شد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >گزارش خود را وارد کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form\r\n                *ngIf=\"loggedIn\"\r\n                [formGroup]=\"replyForm\"\r\n                (ngSubmit)=\"presentAlertReportConfirm()\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label>دلیل گزارش:</ion-label>\r\n                  <ion-textarea\r\n                    rows=\"6\"\r\n                    auto-grow=\"true\"\r\n                    position=\"floating\"\r\n                    placeholder=\"دلیل گزارش خود را وارد کنید\"\r\n                    formControlName=\"comment\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-buttons slot=\"start\" class=\"ion-margin\">\r\n                  <ion-button\r\n                    class=\"ion-margin half-percent-width\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"warning2\"\r\n                    (click)=\"isReportMode = false; replyForm.reset()\"\r\n                  >\r\n                    لغو\r\n                  </ion-button>\r\n                  <ion-button\r\n                    class=\"ion-margin half-percent-width\"\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"replyForm.invalid\"\r\n                  >\r\n                    ثبت گزارش\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </section>\r\n        <section *ngIf=\"!isReplyMode && !isReportMode && !isReportCourseMode\">\r\n          <ion-card class=\"no-h-margin\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >به سوالات در قسمت نظرات پاسخ داده نخواهد شد</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >نظر خود را وارد کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form\r\n                *ngIf=\"loggedIn\"\r\n                [formGroup]=\"commentForm\"\r\n                (ngSubmit)=\"presentAlertConfirm3()\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label>نظر شما:</ion-label>\r\n                  <ion-textarea\r\n                    rows=\"6\"\r\n                    auto-grow=\"true\"\r\n                    position=\"floating\"\r\n                    placeholder=\"نظر خود را وارد کنید\"\r\n                    formControlName=\"comment\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>خصوصی برای فروشنده نمایش داده شود؟</ion-label>\r\n                  <ion-checkbox\r\n                    formControlName=\"private\"\r\n                    slot=\"start\"\r\n                  ></ion-checkbox>\r\n                </ion-item>\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"commentForm.invalid\"\r\n                >\r\n                  ایجاد نظر\r\n                </ion-button>\r\n              </form>\r\n              <div *ngIf=\"!loggedIn\">\r\n                <ion-button\r\n                  routerLink=\"/Account\"\r\n                  color=\"warning\"\r\n                  expand=\"block\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                >\r\n                  برای ثبت نظر وارد شوید\r\n                </ion-button>\r\n                <ion-item>\r\n                  <ion-label>نظر شما:</ion-label>\r\n                  <ion-textarea\r\n                    rows=\"6\"\r\n                    auto-grow=\"true\"\r\n                    [disabled]=\"true\"\r\n                    position=\"floating\"\r\n                    placeholder=\"نظر خود را وارد کنید\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>خصوصی برای مدرس نمایش داده شود؟</ion-label>\r\n                  <ion-checkbox [disabled]=\"true\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"true\"\r\n                >\r\n                  ایجاد نظر\r\n                </ion-button>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <section *ngIf=\"!isFirstCommentShow\">\r\n            <ion-card dir=\"rtl\" class=\"no-h-margin\">\r\n              <ion-card-header>\r\n                <ion-card-title class=\"text-center\"\r\n                  >درحال دریافت نظرات</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-card-content dir=\"ltr\">\r\n                <div class=\"text-center\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </section>\r\n          <section *ngIf=\"isFirstCommentShow && isCommentsEmpty\">\r\n            <ion-card dir=\"rtl\" class=\"no-h-margin\">\r\n              <ion-card-header>\r\n                <ion-card-title class=\"text-center\"\r\n                  >هنوز نظری ثبت نشده است</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-card-content dir=\"ltr\">\r\n                <div class=\"text-center\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </section>\r\n          <ion-card\r\n            class=\"no-h-margin\"\r\n            *ngIf=\"\r\n              comments.length > 0 && isFirstCommentShow && !isCommentsEmpty\r\n            \"\r\n          >\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"{{ !commentShow ? 'warning' : 'danger' }}\"\r\n              (click)=\"toggleInfiniteScroll()\"\r\n            >\r\n              {{ commentShow ? \"بستن نظرات\" : \"نمایش نظرات\" }}\r\n            </ion-button>\r\n\r\n            <ion-list *ngIf=\"commentShow\">\r\n              <ion-card-header>\r\n                <ion-card-title class=\"text-center\"\r\n                  >نظرات کاربران در رابطه با این محصول</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <section *ngFor=\"let comment of comments\">\r\n                  <ion-card\r\n                    *ngIf=\"comment.parentId == null || comment.parentId == 0\"\r\n                  >\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle>\r\n                        <ion-item lines=\"none\" *ngIf=\"windowWidth <= 600\">\r\n                          <ion-label color=\"medium\"\r\n                            >{{ \"ارسال شده در \"\r\n                            }}{{ comment.createDate | persianDate }}</ion-label\r\n                          >\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\">\r\n                          <ion-button\r\n                            *ngIf=\"loggedIn\"\r\n                            class=\"w-80px\"\r\n                            size=\"small\"\r\n                            color=\"success\"\r\n                            (click)=\"onReplyClicked(comment.id)\"\r\n                            expand=\"block\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                          >\r\n                            ثبت پاسخ\r\n                          </ion-button>\r\n\r\n                          <ion-button\r\n                            *ngIf=\"loggedIn\"\r\n                            class=\"w-80px\"\r\n                            size=\"small\"\r\n                            color=\"danger\"\r\n                            (click)=\"onReportClicked(comment.id)\"\r\n                            expand=\"block\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                          >\r\n                            گزارش\r\n                          </ion-button>\r\n                        </ion-item>\r\n                      </ion-card-subtitle>\r\n                      <ion-card-title>\r\n                        <ion-item>\r\n                          <ion-avatar slot=\"start\">\r\n                            <img\r\n                              src=\"{{\r\n                                comment.isSellerAnswer\r\n                                  ? 'http://localhost:4300/assets/images/avatar.webp'\r\n                                  : 'http://localhost:4300/assets/images/user-avatar.webp'\r\n                              }}\"\r\n                            /> </ion-avatar\r\n                          ><ion-label color=\"darker\"\r\n                            ><ion-text\r\n                              *ngIf=\"comment.isPrivate\"\r\n                              color=\"warning\"\r\n                            >\r\n                              <ion-badge color=\"warning\" mode=\"md\">{{\r\n                                \"مخفی\"\r\n                              }}</ion-badge> </ion-text\r\n                            >{{ comment.userName\r\n                            }}<ion-text\r\n                              color=\"medium\"\r\n                              *ngIf=\"windowWidth > 600\"\r\n                            >\r\n                              {{ \" - ارسال شده در \"\r\n                              }}{{ comment.createDate | persianDate }}\r\n                            </ion-text></ion-label\r\n                          >\r\n                        </ion-item></ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-text class=\"description\" color=\"light\">\r\n                        {{ comment.comment }}\r\n                      </ion-text>\r\n                      <section *ngFor=\"let childComment of comments\">\r\n                        <div *ngIf=\"childComment.parentId == comment.id\">\r\n                          <ion-card-header>\r\n                            <ion-card-subtitle *ngIf=\"windowWidth <= 600\">\r\n                              <ion-item lines=\"none\">\r\n                                <ion-label color=\"medium\"\r\n                                  >{{ \"ارسال شده در \"\r\n                                  }}{{\r\n                                    comment.createDate | persianDate\r\n                                  }}</ion-label\r\n                                >\r\n                              </ion-item>\r\n                            </ion-card-subtitle>\r\n                            <ion-card-title>\r\n                              <ion-item>\r\n                                <ion-avatar slot=\"start\">\r\n                                  <img\r\n                                    src=\"{{\r\n                                      childComment.isSellerAnswer\r\n                                        ? 'http://localhost:4300/assets/images/avatar.webp'\r\n                                        : 'http://localhost:4300/assets/images/user-avatar.webp'\r\n                                    }}\"\r\n                                  /> </ion-avatar\r\n                                ><ion-label color=\"darker\"\r\n                                  ><ion-text\r\n                                    *ngIf=\"childComment.isSellerAnswer\"\r\n                                    color=\"success\"\r\n                                  >\r\n                                    <ion-badge color=\"success\" mode=\"md\">{{\r\n                                      \"فروشنده\"\r\n                                    }}</ion-badge>\r\n                                  </ion-text>\r\n                                  {{ childComment.userName }}\r\n                                  <ion-text\r\n                                    color=\"medium\"\r\n                                    *ngIf=\"windowWidth > 600\"\r\n                                  >\r\n                                    {{ \" - ارسال شده در \"\r\n                                    }}{{\r\n                                      childComment.createDate | persianDate\r\n                                    }}\r\n                                  </ion-text>\r\n                                </ion-label>\r\n                              </ion-item></ion-card-title\r\n                            >\r\n                          </ion-card-header>\r\n                          <ion-card-content>\r\n                            <ion-text class=\"description\" color=\"light\">\r\n                              {{ childComment.comment }}\r\n                            </ion-text>\r\n                          </ion-card-content>\r\n                        </div>\r\n                      </section>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </section>\r\n              </ion-card-content>\r\n            </ion-list>\r\n\r\n            <ion-infinite-scroll\r\n              *ngIf=\"isFirstCommentShow\"\r\n              threshold=\"250px\"\r\n              (ionInfinite)=\"loadData($event)\"\r\n            >\r\n              <ion-infinite-scroll-content\r\n                loadingSpinner=\"bubbles\"\r\n                loadingText=\"بارگذاری نظرات...\"\r\n              >\r\n              </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n\r\n            <section dir=\"ltr\" *ngIf=\"isLoadingComments\">\r\n              <div class=\"text-center\">\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </div>\r\n            </section>\r\n          </ion-card>\r\n        </section>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"3\" class=\"product-side-column\">\r\n        <!-- <ion-card class=\"no-h-margin\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\r\n            <ion-card-title>Awesome Title</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content> Awesome content </ion-card-content>\r\n        </ion-card> -->\r\n        <ion-card\r\n          class=\"no-h-margin\"\r\n          *ngIf=\"\r\n            IsLoggedin() && product.userLiked != null && !isUserLikedLoading\r\n          \"\r\n        >\r\n          <ion-card-header color=\"primary\">\r\n            <!-- <ion-card-subtitle class=\"text-center\"\r\n                      >نظر شما اولویت ماست</ion-card-subtitle\r\n                    > -->\r\n            <ion-card-title class=\"text-center\">لیست علاقه مندی</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"isLikeLoadingShow\" class=\"ion-margin-top\">\r\n              <ion-grid dir=\"ltr\">\r\n                <ion-row>\r\n                  <ion-col class=\"text-center full-width\">\r\n                    <ion-spinner class=\"full-width\" name=\"dots\"></ion-spinner>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div *ngIf=\"!isLikeLoadingShow\" class=\"ion-margin-top\">\r\n              <ion-button\r\n                color=\"success\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                (click)=\"OnLike(true)\"\r\n                *ngIf=\"!product.userLiked\"\r\n              >\r\n                اضافه کردن\r\n                <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button\r\n                color=\"danger\"\r\n                expand=\"block\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n                (click)=\"OnLike(false)\"\r\n                *ngIf=\"product.userLiked\"\r\n              >\r\n                حذف کردن\r\n                <ion-icon slot=\"start\" name=\"heart-dislike-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-item *ngIf=\"product.userLiked\">\r\n                <ion-label color=\"warning\">به لیست اضافه شد</ion-label>\r\n                <ion-icon color=\"success\" slot=\"start\" name=\"heart\"></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"ion-margin-top\" *ngIf=\"!checkBuy2\">\r\n              <ion-item>\r\n                <ion-button\r\n                  color=\"success\"\r\n                  (click)=\"onRating()\"\r\n                  expand=\"block\"\r\n                  fill=\"clear\"\r\n                  shape=\"round\"\r\n                >\r\n                  شرکت در نظر سنجی\r\n                </ion-button>\r\n                <ion-icon\r\n                  color=\"warning\"\r\n                  slot=\"start\"\r\n                  name=\"bulb-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card class=\"no-h-margin\">\r\n          <ion-card-header dir=\"rtl\" color=\"primary\">\r\n            <ion-card-title class=\"text-center\">به اشتراک گذاری</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content dir=\"rtl\" class=\"ion-margin-top\">\r\n            <ion-item>\r\n              <ion-buttons class=\"full-width\">\r\n                <ion-button class=\"social\">\r\n                  <a class=\"full-width\" [href]=\"whatsappShare\" target=\"_blank\">\r\n                    <ion-icon\r\n                      color=\"success\"\r\n                      slot=\"icon-only\"\r\n                      name=\"logo-whatsapp\"\r\n                    ></ion-icon>\r\n                  </a>\r\n                </ion-button>\r\n                <ion-button class=\"social\">\r\n                  <a\r\n                    class=\"full-width\"\r\n                    href=\"{{\r\n                      'https://t.me/share/url?url=http://localhost:4300/p/' +\r\n                        product.id\r\n                    }}\"\r\n                    target=\"_blank\"\r\n                  >\r\n                    <ion-icon\r\n                      color=\"telegram\"\r\n                      slot=\"icon-only\"\r\n                      name=\"paper-plane-outline\"\r\n                    ></ion-icon>\r\n                  </a>\r\n                </ion-button>\r\n                <ion-button class=\"social\">\r\n                  <a\r\n                    class=\"full-width\"\r\n                    href=\"{{\r\n                      'https://www.facebook.com/sharer/sharer.php?u=http://localhost:4300/p/' +\r\n                        product.id\r\n                    }}\"\r\n                    target=\"_blank\"\r\n                  >\r\n                    <ion-icon\r\n                      color=\"facebook\"\r\n                      slot=\"icon-only\"\r\n                      name=\"logo-facebook\"\r\n                    ></ion-icon>\r\n                  </a>\r\n                </ion-button>\r\n                <ion-button class=\"social\">\r\n                  <a\r\n                    class=\"full-width\"\r\n                    href=\"{{\r\n                      'https://twitter.com/intent/tweet?url=http://localhost:4300/p/' +\r\n                        product.id\r\n                    }}\"\r\n                    target=\"_blank\"\r\n                  >\r\n                    <ion-icon\r\n                      color=\"twitter\"\r\n                      slot=\"icon-only\"\r\n                      name=\"logo-twitter\"\r\n                    ></ion-icon>\r\n                  </a>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-item>\r\n            <ion-list>\r\n              <ion-item\r\n                button\r\n                title=\"avalamooz.ir/p/{{ product.id }}\"\r\n                (click)=\"copyText('avalamooz.ir' + '/p/' + product.id)\"\r\n              >\r\n                <ion-label class=\"text-center\"\r\n                  >avalamooz.ir/p/{{ product.id }}</ion-label\r\n                >\r\n                <ion-icon\r\n                  class=\"ion-margin-start\"\r\n                  color=\"success\"\r\n                  slot=\"start\"\r\n                  name=\"link-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"links.length > 0\" class=\"no-h-margin\">\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-title class=\"text-center\">لینک های مفید</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item\r\n                [href]=\"link.url\"\r\n                class=\"text-center\"\r\n                *ngFor=\"let link of links\"\r\n                [title]=\"link.name\"\r\n              >\r\n                <ion-label>{{ link.name }}</ion-label>\r\n                <ion-icon\r\n                  color=\"secondary\"\r\n                  slot=\"start\"\r\n                  name=\"link-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <section *ngIf=\"productCategores\">\r\n          <ion-card *ngIf=\"productCategores.length > 0\" class=\"no-h-margin\">\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-title class=\"text-center\">گروه های کالا</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item\r\n                  button\r\n                  [routerLink]=\"['/Product', 'Search']\"\r\n                  [queryParams]=\"{\r\n                    categoryIds: [category.id]\r\n                  }\"\r\n                  *ngFor=\"let category of productCategores2\"\r\n                >\r\n                  <ion-label title=\"{{ category.title }}\"\r\n                    >{{ category.title }}\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </section>\r\n        <ion-card *ngIf=\"tags.length > 0\" class=\"no-h-margin\">\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-title class=\"text-center\">برچسب ها</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item\r\n                href=\"{{ 'http://localhost:4300' + '/p/' + product.id }}\"\r\n                class=\"text-center\"\r\n                *ngFor=\"let tag of tags\"\r\n                [title]=\"tag.name\"\r\n              >\r\n                <ion-label color=\"medium\" style=\"font-size: 12px !important\">{{\r\n                  tag.name\r\n                }}</ion-label>\r\n                <ion-icon\r\n                  color=\"instagram\"\r\n                  slot=\"start\"\r\n                  name=\"pricetag-outline\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- Educational Trust Guarantee Bar -->\r\n  <section class=\"edu-trust-bar\">\r\n    <div class=\"edu-trust-grid\">\r\n      <div class=\"edu-trust-item\">\r\n        <div class=\"edu-trust-icon purple\">\r\n          <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <strong>تایید علمی و گرافیکی آموزگاران</strong>\r\n          <p>طراحی متناسب با روانشناسی کودک، بدون واترمارک و آماده چاپ با وضوح بالا</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"edu-trust-item\">\r\n        <div class=\"edu-trust-icon emerald\">\r\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <strong>ضمانت تطابق ۱۰۰٪ با کتب درسی</strong>\r\n          <p>منطبق بر آخرین ویرایش کتاب‌های درسی پایه اول و بودجه‌بندی سال تحصیلی</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"edu-trust-item\">\r\n        <div class=\"edu-trust-icon amber\">\r\n          <ion-icon name=\"flash-outline\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <strong>دانلود آنی فایل‌ها بلافاصله پس از خرید</strong>\r\n          <p>دسترسی فوری در پنل کاربری به همراه لینک مستقیم دانلود و پشتیبانی دائمی</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"edu-trust-item\">\r\n        <div class=\"edu-trust-icon rose\">\r\n          <ion-icon name=\"chatbubbles-outline\"></ion-icon>\r\n        </div>\r\n        <div>\r\n          <strong>پشتیبانی اختصاصی معلمان و آموزگاران</strong>\r\n          <p>پاسخگویی سریع در پیام‌رسان‌های ایتا، شاد و تلگرام برای رفع ابهامات کلاسی</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Teacher Educational Footer -->\r\n  <footer class=\"learning-footer\">\r\n    <div class=\"page-container footer-top\">\r\n      <div class=\"footer-brand-col\">\r\n        <a class=\"brand avalamooz-brand\" [routerLink]=\"url('/Home')\">\r\n          <img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" />\r\n          <div>\r\n            <b>{{ 'learn.brand' | translate }}</b>\r\n            <small>{{ 'learn.tagline' | translate }}</small>\r\n          </div>\r\n        </a>\r\n        <p class=\"footer-desc\">{{ 'learn.footer.description' | translate }}</p>\r\n        <div class=\"footer-domain-badge\">\r\n          <ion-icon name=\"globe-outline\"></ion-icon>\r\n          <span>پایگاه تخصصی معلمان ابتدایی: <b>avalamuz.ir</b></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"footer-links-col\">\r\n        <h4>دسترسی سریع</h4>\r\n        <nav aria-label=\"دسترسی سریع\">\r\n          <a [routerLink]=\"url('/Home')\">صفحه اصلی اول آموز</a>\r\n          <a [routerLink]=\"url('/Course')\">دوره‌های آموزشی معلمان</a>\r\n          <a [routerLink]=\"url('/Product')\">محصولات و کاربرگ‌های کلاسی</a>\r\n          <a [routerLink]=\"url('/About')\">درباره اول آموز</a>\r\n          <a [routerLink]=\"url('/PrivacyPolicy')\">حریم خصوصی و قوانین</a>\r\n        </nav>\r\n      </div>\r\n\r\n      <div class=\"footer-trust-col\">\r\n        <h4>اعتماد و نمادهای الکترونیک</h4>\r\n        <div class=\"trust-seals-row\">\r\n          <a rel=\"nofollow\" target=\"_blank\" href=\"https://trustseal.enamad.ir/?id=207651&Code=OiBh1hbfIe7Ls83vvPMp\" title=\"نماد اعتماد الکترونیک\">\r\n            <img class=\"seal-img\" src=\"./assets/images/namade-etemad.png\" alt=\"نماد اعتماد الکترونیک\" />\r\n          </a>\r\n          <a rel=\"nofollow\" target=\"_blank\" href=\"https://www.zarinpal.com/trustPage/avalamooz.ir\" title=\"درگاه پرداخت امن زرین‌پال\">\r\n            <img class=\"seal-img\" src=\"./assets/images/zarinpal.svg\" alt=\"زرین‌پال\" />\r\n          </a>\r\n        </div>\r\n        <div class=\"trust-channels\">\r\n          <span class=\"trust-channels-label\">همراهی در شبکه‌های اجتماعی و پیام‌رسان‌ها:</span>\r\n          <div class=\"trust-channels-links\">\r\n            <a [href]=\"telegram\" target=\"_blank\" title=\"کانال تلگرام اول آموز\"><ion-icon name=\"paper-plane-outline\"></ion-icon></a>\r\n            <a [href]=\"aparat\" target=\"_blank\" title=\"کانال آپارات اول آموز\"><ion-icon src=\"/assets/icon/logo-aparat.svg\"></ion-icon></a>\r\n            <a [href]=\"instagram\" target=\"_blank\" title=\"اینستاگرام اول آموز\"><ion-icon name=\"logo-instagram\"></ion-icon></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-container footer-bottom\">\r\n      <span>{{ 'learn.footer.copyright' | translate }}</span>\r\n      <span>{{ 'learn.footer.made' | translate }} <span class=\"footer-heart\">♥</span></span>\r\n    </div>\r\n  </footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button color=\"warning\" (click)=\"goTop()\">\r\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_view_pages_product_product-by-id_product-by-id_module_ts.js.map