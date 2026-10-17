"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_product-comments_product-comments_module_ts"],{

/***/ 71359:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-comments/product-comments-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCommentsRoutingModule": () => (/* binding */ ProductCommentsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-comments.component */ 54201);




const routes = [{ path: '', component: _product_comments_component__WEBPACK_IMPORTED_MODULE_0__.ProductCommentsComponent }];
let ProductCommentsRoutingModule = class ProductCommentsRoutingModule {
};
ProductCommentsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductCommentsRoutingModule);



/***/ }),

/***/ 54201:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-comments/product-comments.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCommentsComponent": () => (/* binding */ ProductCommentsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_comments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-comments.component.html?ngResource */ 93528);
/* harmony import */ var _product_comments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-comments.component.scss?ngResource */ 89132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/common/G */ 67122);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */







 // import { ReCaptchaV3Service } from 'ngx-captcha';
// import { load } from 'recaptcha-v3';






let ProductCommentsComponent = class ProductCommentsComponent {
  constructor(router, activatedRoute, courseService, loadingController, toastController, alertController, // private reCaptchaV3Service: ReCaptchaV3Service,
  fb, datepipe, routerOutlet) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.courseService = courseService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.fb = fb;
    this.datepipe = datepipe;
    this.routerOutlet = routerOutlet;
    this.commentsCount = -1;
    this.hiddenCommentsCount = -1;
    this.selectedComments = [];
    this.selectedHiddenComments = [];
    this.isCourseSelected = false;
    this.isCommentSelected = false;
    this.isHiddenCommentSelected = false;
    this.unSeenComments = [];
    this.isUnSeenCommentsLoading = true;
    this.isEditMode = false;
    this.selectedCourseId = 0;
    this.selectedCommentId = 0;
    this.filteredCourses = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, 1, 12, '');
    this.courseSearch = '';
    this.commentSearch = '';
    this.notfound = false;
    this.login = false;
    this.isPrivate = false;
    this.isAskMode = false;
    this.segmentSelected = 'public';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
  }

  ionViewWillEnter() {
    this.isCourseSelected = false;
    this.isCommentSelected = false;
    this.login = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__.GAccount.IsLoggedIn();
    let filter;
    let filter2;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        this.isUnSeenCommentsLoading = true;
        this.unSeenComments = [];
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter2 = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, 1, 12, this.courseSearch);
        this.courseService.GetAdminProductsByFilter(filter2).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
            this.notfound = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            this.notfound = true;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
        this.courseService.GetAdminUnSeenProductCommentsList().subscribe(res => {
          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            this.unSeenComments = res.data;
            this.isUnSeenCommentsLoading = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            this.isUnSeenCommentsLoading = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'نظر جدید ندارید');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = true;
        this.selectedCourseId = +id;
        this.activatedRoute.queryParams.subscribe(queryParams => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
          const page = queryParams.page;
          const take = queryParams.take ? queryParams.take : 12;
          let title = queryParams.title ? queryParams.title : '';
          const sortId = queryParams.sortId ? queryParams.sortId : 0;
          const commentId = queryParams.commentid ? +queryParams.commentid : 0;
          const h = queryParams.h ? queryParams.h : 'false';

          if (h == 'true') {
            this.segmentSelected = 'hidden';
          } else {
            this.segmentSelected = 'public';
          }

          if (title == 'null') {
            title = '';
          }

          this.commentSearch = title;
          filter = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.ProductCommentFilterModel(this.selectedCourseId, page, take, title, sortId);
          this.filteredComments = filter;

          if (this.segmentSelected == 'public') {
            if (commentId != 0) {
              this.selectedCommentId = commentId;
              this.courseService.GetAdminProductCommentsDetailsById(commentId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.selectedComments = res.data;
                  this.isCommentSelected = true;
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.courseService.GetSellerProductCommentsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.filteredComments = res.data;
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.filteredComments = res.data;
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'نظری پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetSellerProductCommentsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                this.commentsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                this.commentsCount = -1;
              }
            }, err => {
              this.commentsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          } else {
            if (commentId != 0) {
              this.selectedCommentId = commentId;
              this.courseService.GetAdminProductHiddenCommentsDetailsById(commentId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.selectedHiddenComments = res.data;
                  this.isHiddenCommentSelected = true;
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              this.courseService.GetSellerProductHiddenCommentsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.filteredComments = res.data;
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.filteredComments = res.data;
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'نظری پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.courseService.GetSellerProductHiddenCommentsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                this.hiddenCommentsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                this.hiddenCommentsCount = -1;
              }
            }, err => {
              this.hiddenCommentsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          }
        });
      }
    });
  }

  segmentChanged() {
    this.commentSearch = '';
    this.filteredComments = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.ProductCommentFilterModel(this.selectedCourseId, 1, 12, '', 0);
    this.setQueryParams(1, this.segmentSelected == 'hidden');
  }

  getTime(date) {
    return this.datepipe.transform(date, 'HH:mm:ss');
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  onCommentClick(id) {// this.router
    //   .navigate(
    //     ['Comments', this.selectedCourseId],
    //     {
    //       queryParams:
    //       {
    //         page: 1,
    //         take: 12,
    //         title: null,
    //         sortId: 0,
    //         commentid: +id
    //       }
    //     });
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_9__.G.SiteKey;
    this.editForm = this.fb.group({
      id: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(2000)]]
    });
    this.commentAnswerForm = this.fb.group({
      answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(2000)]]
    });
  }

  onActiveComment(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveProductComment(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'فعال شد');
        const index = this.selectedComments.findIndex(e => e.id == id);
        this.selectedComments[index].isActive = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDeleteComment(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.DeleteProductComment(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'حذف شد');
        const index = this.selectedHiddenComments.findIndex(e => e.id == id);
        this.selectedHiddenComments.splice(index, 1);

        if (this.selectedHiddenComments.length == 0) {
          location.reload();
        }
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentHiddenDeleteAlertConfirm(id) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف شدن',
          handler: () => {
            _this.onDeleteComment(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeActiveComment(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveProductComment(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'غیر فعال شد');
        const index = this.selectedComments.findIndex(e => e.id == id);
        this.selectedComments[index].isActive = false;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentActiveAlertConfirm(id) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'فعال شدن',
          handler: () => {
            _this2.onActiveComment(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentDeActiveAlertConfirm(id) {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'غیر فعال شدن',
          handler: () => {
            _this3.onDeActiveComment(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onActiveHiddenComment(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveProductComment(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'فعال شد');
        const index = this.selectedHiddenComments.findIndex(e => e.id == id);
        this.selectedHiddenComments[index].isActive = true;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  onDeActiveHiddenComment(id) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveProductComment(+id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'غیر فعال شد');
        const index = this.selectedHiddenComments.findIndex(e => e.id == id);
        this.selectedHiddenComments[index].isActive = false;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  presentEditAlertConfirm(type) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به ویرایش هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'ویرایش',
          handler: () => {
            _this4.onEditQuestion(+type);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onEditQuestion(type) {
    if (this.editForm.valid) {
      let model;
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);

      if (type == 0) {
        model = this.selectedComments.find(e => e.id == this.editForm.value.id);
      } else {
        model = this.selectedHiddenComments.find(e => e.id == this.editForm.value.id);
      }

      const editModel = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(model.id, this.editForm.value.comment, model.createDate, model.courseId, model.parentId, model.userName, model.userId, model.isActive, model.isPrivate, model.isTeacherAnswer, 'token', model.isSeen);
      this.courseService.EditProductComment(editModel).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'ویرایش شد');

          if (type == 0) {
            const index = this.selectedComments.findIndex(e => e.id == editModel.id);
            this.selectedComments[index].comment = editModel.comment;
          } else {
            const index = this.selectedHiddenComments.findIndex(e => e.id == editModel.id);
            this.selectedHiddenComments[index].comment = editModel.comment;
          }

          this.isEditMode = false;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        }

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      });
    }
  }

  onEdit(id, type) {
    let model;

    if (+type == 0) {
      model = this.selectedComments.find(e => e.id == +id);
    } else {
      model = this.selectedHiddenComments.find(e => e.id == +id);
    }

    this.editForm.setValue({
      id: model.id,
      comment: model.comment
    });
    this.isEditMode = true;
  }

  presentHiddenActiveAlertConfirm(id) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'فعال شدن',
          handler: () => {
            _this5.onActiveHiddenComment(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentHiddenDeActiveAlertConfirm(id) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به غیر فعال شدن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'غیر فعال شدن',
          handler: () => {
            _this6.onDeActiveHiddenComment(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2(typeCode) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
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
            _this7.onCommentAnswer(+typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentSetCommentAlert2() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'پاسخ شما ارسال شد. رفرش کنید',
        buttons: [{
          text: 'رفرش',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onCommentAnswer(typeCode) {
    if (this.commentAnswerForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_9__.G.IsAndroid) {
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.commentAnswerForm.value.answer, new Date(), this.selectedCourseId, this.selectedCommentId, '', 0, true, typeCode == 0 ? false : true, true, 'failed', true);
        this.courseService.SetSellerProductComment(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert2();
            this.commentAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.commentAnswerForm.value.answer, new Date(), this.selectedCourseId, this.selectedCommentId, '', 0, true, typeCode == 0 ? false : true, true, 'failed', true);
        this.courseService.SetSellerProductComment(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetCommentAlert2();
            this.commentAnswerForm.setValue({
              answer: ''
            });
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const model =
      //       new CommentModel(
      //         0,
      //         this.commentAnswerForm.value.answer,
      //         new Date(),
      //         this.selectedCourseId,
      //         this.selectedCommentId,
      //         '',
      //         0,
      //         true,
      //         typeCode == 0 ? false : true,
      //         true,
      //         'failed',
      //         true
      //       );
      //     this.courseService.SetSellerProductComment(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetCommentAlert2();
      //           this.commentAnswerForm.setValue({
      //             answer: ''
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
      //         }
      //       },
      //       err => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
      //       }
      //     );
      //   } else {
      //     const model =
      //       new CommentModel(
      //         0,
      //         this.commentAnswerForm.value.answer,
      //         new Date(),
      //         this.selectedCourseId,
      //         this.selectedCommentId,
      //         '',
      //         0,
      //         true,
      //         typeCode == 0 ? false : true,
      //         true,
      //         token,
      //         true
      //       );
      //     this.courseService.SetSellerProductComment(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetCommentAlert2();
      //           this.commentAnswerForm.setValue({
      //             answer: ''
      //           });
      //         } else if (res.status === GResponse.NotFoundStatus) {
      //           SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
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

  setQueryParams2(pageId) {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
    const page = pageId < 1 ? 1 : pageId;
    const filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, page, this.filteredCourses.takeEntity, this.courseSearch, this.filteredCourses.sortId);
    this.filteredCourses = filter;
    this.courseService.GetSellerProductsByFilter(filter).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
        this.filteredCourses = res.data;
        this.notfound = false;
      } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
        this.notfound = true;
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
    });
  }

  setQueryParams(pageId, hide = false) {
    const res = this.segmentSelected == 'hidden';
    this.router.navigate(['AdminPanel', 'ProductComments', this.selectedCourseId], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredComments.takeEntity ? this.filteredComments.takeEntity : null,
        title: this.commentSearch,
        sortId: this.filteredComments.sortId ? this.filteredComments.sortId : 0,
        h: res
      }
    });
  }

  MakePageCountArray(pageCount) {
    const array = [];

    for (let i = 1; i <= pageCount; i++) {
      array.push(i.toString());
    }

    return array;
  }

  goPreviousPage() {
    if (this.filteredComments.startPage == null) {
      return;
    }

    if (this.filteredComments.pageId > this.filteredComments.startPage && +this.filteredComments.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredComments.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredComments.endPage == null) {
      return;
    }

    if (this.filteredComments.pageId < this.filteredComments.endPage) {
      this.setQueryParams(+this.filteredComments.pageId + 1);
    }
  }

  goPage(pageId) {
    this.setQueryParams(+pageId);
  }

  goPreviousPage2() {
    if (this.filteredCourses.startPage == null) {
      return;
    }

    if (this.filteredCourses.pageId > this.filteredCourses.startPage && +this.filteredCourses.pageId - 1 > 0) {
      this.setQueryParams2(+this.filteredCourses.pageId - 1);
    }
  }

  goNextPage2() {
    if (this.filteredCourses.endPage == null) {
      return;
    }

    if (this.filteredCourses.pageId < this.filteredCourses.endPage) {
      this.setQueryParams2(+this.filteredCourses.pageId + 1);
    }
  }

  goPage2(pageId) {
    this.setQueryParams2(+pageId);
  }

  onSelectItem(model) {
    this.selectedCourseId = +model.id;
    this.course = model;
  }

};

ProductCommentsComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRouterOutlet
}];

ProductCommentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-product-comments',
  template: _product_comments_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_comments_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductCommentsComponent);


/***/ }),

/***/ 23317:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-comments/product-comments.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCommentsModule": () => (/* binding */ ProductCommentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_comments_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-comments-routing.module */ 71359);
/* harmony import */ var _product_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-comments.component */ 54201);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);









// import { NgxCaptchaModule } from 'ngx-captcha';




let ProductCommentsModule = class ProductCommentsModule {
};
ProductCommentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_product_comments_component__WEBPACK_IMPORTED_MODULE_2__.ProductCommentsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _product_comments_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductCommentsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            // NgxCaptchaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
        ]
    })
], ProductCommentsModule);



/***/ }),

/***/ 89132:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-comments/product-comments.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ".over-hidden {\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  white-space: nowrap;\n}\n\n.white-space {\n  white-space: normal !important;\n}\n\n.link-success:hover {\n  color: green;\n}\n\n.description {\n  white-space: pre-wrap;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0LWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXItaGlkZGVuIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLndoaXRlLXNwYWNlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmxpbmstc3VjY2Vzczpob3ZlciB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 93528:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-comments/product-comments.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          *ngIf=\"\r\n            !isCommentSelected && !isHiddenCommentSelected && !isCourseSelected\r\n          \"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel\"\r\n        ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          (click)=\"isCourseSelected = false\"\r\n          *ngIf=\"\r\n            !isCommentSelected && !isHiddenCommentSelected && isCourseSelected\r\n          \"\r\n          color=\"lightest\"\r\n          defaultHref=\"/AdminPanel/ProductComments\"\r\n        ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          (click)=\"isCommentSelected = false\"\r\n          *ngIf=\"isCommentSelected && !isHiddenCommentSelected\"\r\n          color=\"lightest\"\r\n          defaultHref=\"{{\r\n            '/AdminPanel/ProductComments/' +\r\n              selectedCourseId +\r\n              '?page=' +\r\n              filteredComments.pageId +\r\n              '&take=' +\r\n              filteredComments.takeEntity +\r\n              '&sortId=' +\r\n              filteredComments.sortId +\r\n              '&title=' +\r\n              filteredComments.title +\r\n              '&h=false'\r\n          }}\"\r\n        ></ion-back-button>\n<ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n          (click)=\"isHiddenCommentSelected = false\"\r\n          *ngIf=\"!isCommentSelected && isHiddenCommentSelected\"\r\n          color=\"lightest\"\r\n          defaultHref=\"{{\r\n            '/AdminPanel/ProductComments/' +\r\n              selectedCourseId +\r\n              '?page=' +\r\n              filteredComments.pageId +\r\n              '&take=' +\r\n              filteredComments.takeEntity +\r\n              '&sortId=' +\r\n              filteredComments.sortId +\r\n              '&title=' +\r\n              filteredComments.title +\r\n              '&h=true'\r\n          }}\"\r\n        ></ion-back-button></ion-buttons>\n<span page-title>نظرات</span>\n  </app-page-header>\n</ion-header>\r\n\r\n  <ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-grid class=\"bg no-padding\">\r\n      <ion-row *ngIf=\"!isCourseSelected\">\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\" *ngIf=\"isUnSeenCommentsLoading\">\r\n            <div class=\"text-center\">\r\n              <ion-spinner name=\"dots\"></ion-spinner>\r\n            </div>\r\n          </ion-card>\r\n          <ion-card dir=\"rtl\" *ngIf=\"!isUnSeenCommentsLoading\">\r\n            <section *ngIf=\"unSeenComments.length == 0\">\r\n              <ion-item>\r\n                <ion-label class=\"text-center\">\r\n                <ion-badge color=\"warning\" slot=\"start\"\r\n                  >نظر جدیدی ندارید</ion-badge\r\n                ></ion-label>\r\n              </ion-item>\r\n            </section>\r\n            <section *ngIf=\"unSeenComments.length != 0\">\r\n              <ion-list-header>\r\n                <ion-label color=\"medium\">دوره هایی که نظر جدیدی دارید</ion-label>\r\n              </ion-list-header>\r\n              <ion-item\r\n                *ngFor=\"let course of unSeenComments; let i = index\"\r\n                routerLink=\"{{ '/AdminPanel/ProductComments/' + course.productId }}\"\r\n                [queryParams]=\"{\r\n                  page: 1,\r\n                  take: 12,\r\n                  title: null,\r\n                  sortId: 0\r\n                }\"\r\n              >\r\n                <ion-label>{{ i + 1  + '. ' + course.productName }}</ion-label>\r\n              </ion-item>\r\n            </section>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" offset=\"0\">\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams2(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams2(1)\"\r\n                placeholder=\"دنبال چه دوره ای میگردی؟\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"courseSearch\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header color=\"primary\">\r\n              <ion-card-subtitle class=\"text-center\"\r\n                >دوره ی مد نظر خود را انتخاب کنید</ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\">لیست دوره ها</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <div *ngIf=\"filteredCourses\">\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 2 &&\r\n                          filteredCourses.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 2 &&\r\n                          filteredCourses.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 2 &&\r\n                            filteredCourses.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-grid>\r\n                  <ion-row *ngIf=\"filteredCourses.products\" dir=\"rtl\">\r\n                    <ion-col\r\n                      *ngFor=\"let product of filteredCourses.products\"\r\n                      size=\"12\"\r\n                      size-sm=\"6\"\r\n                      size-md=\"6\"\r\n                      size-lg=\"4\"\r\n                      size-xl=\"3\"\r\n                    >\r\n                      <app-seller-product\r\n                        routerLink=\"{{ '/AdminPanel/ProductComments/' + product.id }}\"\r\n                        [queryParams]=\"{\r\n                          page: 1,\r\n                          take: 12,\r\n                          title: null,\r\n                          sortId: 0\r\n                        }\"\r\n                        [product]=\"product\"\r\n                        (SelectEvent2)=\"onSelectItem($event)\"\r\n                      ></app-seller-product>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row\r\n                    *ngIf=\"!filteredCourses.products && notfound\"\r\n                    class=\"text-center\"\r\n                  >\r\n                    <ion-col size=\"10\" offset=\"1\">\r\n                      <ion-img\r\n                        class=\"no-found\"\r\n                        src=\"./assets/images/error404.png\"\r\n                      ></ion-img>\r\n                      <ion-footer dir=\"rtl\" class=\"ion-margin-top\">\r\n                        <ion-toolbar>\r\n                          <ion-title\r\n                            ><h2 class=\"text-center mmargin\">\r\n                              موردی یافت نشد\r\n                            </h2></ion-title\r\n                          >\r\n                        </ion-toolbar>\r\n                      </ion-footer>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n\r\n                <ion-grid dir=\"rtl\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 2 &&\r\n                          filteredCourses.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(1)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          1\r\n                        </ion-button>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId > 2 &&\r\n                          filteredCourses.pageCount > 2\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngFor=\"\r\n                          let page of MakePageCountArray(\r\n                            filteredCourses.pageCount\r\n                          );\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          [disabled]=\"filteredCourses.pageId == page\"\r\n                          *ngIf=\"\r\n                            filteredCourses.pageId <= i + 2 &&\r\n                            filteredCourses.pageId >= i\r\n                          \"\r\n                          fill=\"{{\r\n                            filteredCourses.pageId == page ? 'clear' : 'solid'\r\n                          }}\"\r\n                          color=\"{{\r\n                            page == filteredCourses.pageId ? 'danger' : 'primary'\r\n                          }}\"\r\n                          (click)=\"goPage2(page)\"\r\n                          >{{ page }}</ion-button\r\n                        >\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-text color=\"primary\"> ... </ion-text>\r\n                      </span>\r\n\r\n                      <span\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId + 1 < filteredCourses.pageCount\r\n                        \"\r\n                      >\r\n                        <ion-button\r\n                          (click)=\"goPage2(filteredCourses.pageCount)\"\r\n                          size=\"small\"\r\n                          fill=\"solid\"\r\n                          color=\"primary\"\r\n                        >\r\n                          {{ filteredCourses.pageCount }}\r\n                        </ion-button>\r\n                      </span>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n              <div\r\n                *ngIf=\"!filteredCourses\"\r\n                size=\"6\"\r\n                offset=\"3\"\r\n                class=\"text-center\"\r\n              >\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </div>\r\n              <div\r\n                *ngIf=\"!filteredCourses.products\"\r\n                size=\"6\"\r\n                offset=\"3\"\r\n                class=\"text-center\"\r\n              >\r\n                <ion-spinner name=\"dots\"></ion-spinner>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"isCommentSelected && segmentSelected == 'public'\">\r\n        <ion-col\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n          ion-row\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-list>\r\n                <ion-list-header class=\"no-padding\">\r\n                  <ion-button\r\n                    (click)=\"isCommentSelected = false\"\r\n                    routerLink=\"{{ '/AdminPanel/ProductComments/' + selectedCourseId }}\"\r\n                    [queryParams]=\"{\r\n                      page: filteredComments.pageId,\r\n                      take: filteredComments.takeEntity,\r\n                      sortId: filteredComments.sortId,\r\n                      title: filteredComments.title,\r\n                      h: false\r\n                    }\"\r\n                    color=\"danger\"\r\n                    >بازگشت به لیست نظرات</ion-button\r\n                  >\r\n                </ion-list-header>\r\n              </ion-list>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                ><ion-item\r\n                  class=\"text-center\"\r\n                  routerLink=\"{{ '/c/' + selectedComments[0].courseId }}\"\r\n                  lines=\"none\"\r\n                  *ngIf=\"selectedComments.length > 0\"\r\n                >\r\n                  <ion-label color=\"medium\" class=\"text-center\">{{\r\n                    \"دوره ی: \" + selectedComments[0].courseName\r\n                  }}</ion-label>\r\n                </ion-item></ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >نظرات در اول آموز</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content *ngIf=\"isEditMode\">\r\n              <form\r\n                [formGroup]=\"editForm\"\r\n                (ngSubmit)=\"presentEditAlertConfirm(0)\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >نظر <ion-text color=\"danger\">*</ion-text></ion-label\r\n                  >\r\n                  <ion-textarea\r\n                    autoGrow=\"true\"\r\n                    required\r\n                    formControlName=\"comment\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                  <ion-button\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"warning\"\r\n                    (click)=\"isEditMode = false\"\r\n                  >\r\n                    لغو\r\n                  </ion-button>\r\n                  <ion-button\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"editForm.invalid\"\r\n                  >\r\n                    ویرایش\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </form>\r\n            </ion-card-content>\r\n            <ion-card-content *ngIf=\"!isEditMode\">\r\n              <section *ngIf=\"selectedComments.length > 0\">\r\n                <ion-card *ngFor=\"let q of selectedComments\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                      <ion-text *ngIf=\"q.isTeacherAnswer\" color=\"warning\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"checkmark-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"فروشنده \" }}\r\n                      </ion-text>\r\n                      <ion-text *ngIf=\"!q.isTeacherAnswer\" color=\"warning\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"person-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"کاربر \" }}\r\n                      </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userId + '- ' }}\r\n                    </ion-text>\r\n                      <ion-text color=\"warning\">\r\n                        {{ q.userName }}\r\n                      </ion-text>\r\n                      {{ \" - \" }}\r\n                      {{ getTime(q.createDate) }}\r\n                      {{ \" - \" }}\r\n                      {{ q.createDate | persianDate }}\r\n                      {{ \" - \" }}\r\n                      <ion-text *ngIf=\"q.isActive\" color=\"success\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"checkmark-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"فعال\" }}\r\n                      </ion-text>\r\n                      <ion-text *ngIf=\"!q.isActive\" color=\"danger\">\r\n                        <ion-icon\r\n                          color=\"danger\"\r\n                          name=\"close-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"غیر فعال\" }}\r\n                      </ion-text></ion-card-subtitle\r\n                    >\r\n                    <!-- <ion-card-title>{{ q.title }}</ion-card-title> -->\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <p class=\"description\">\r\n                      {{ q.comment }}\r\n                    </p>\r\n                    <br />\r\n                    <ion-button\r\n                      *ngIf=\"!q.isActive\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"success\"\r\n                      (click)=\"presentActiveAlertConfirm(q.id)\"\r\n                    >\r\n                      فعال شدن\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"q.isActive\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"outline\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentDeActiveAlertConfirm(q.id)\"\r\n                    >\r\n                      غیر فعال شدن\r\n                    </ion-button>\r\n                    <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                      <ion-button\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"warning\"\r\n                        (click)=\"onEdit(q.id, 0)\"\r\n                      >\r\n                        ویرایش\r\n                      </ion-button>\r\n                      <ion-button\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"danger\"\r\n                        (click)=\"presentHiddenDeleteAlertConfirm(q.id)\"\r\n                      >\r\n                        حذف\r\n                      </ion-button>\r\n                    </ion-buttons>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </section>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >پاسخ خود را وارد کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form\r\n                [formGroup]=\"commentAnswerForm\"\r\n                (ngSubmit)=\"presentAlertConfirm2(0)\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >پاسخ شما <ion-text color=\"danger\">*</ion-text></ion-label\r\n                  >\r\n                  <ion-textarea\r\n                    autoGrow=\"true\"\r\n                    required\r\n                    formControlName=\"answer\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"commentAnswerForm.invalid\"\r\n                >\r\n                  ایجاد پاسخ\r\n                </ion-button>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row\r\n        *ngIf=\"isHiddenCommentSelected && segmentSelected == 'hidden' && login\"\r\n      >\r\n        <ion-col\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n          ion-row\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-list>\r\n                <ion-list-header class=\"no-padding\">\r\n                  <ion-button\r\n                    (click)=\"isHiddenCommentSelected = false; isEditMode = false\"\r\n                    routerLink=\"{{ '/AdminPanel/ProductComments/' + selectedCourseId }}\"\r\n                    [queryParams]=\"{\r\n                      page: filteredComments.pageId,\r\n                      take: filteredComments.takeEntity,\r\n                      sortId: filteredComments.sortId,\r\n                      title: filteredComments.title,\r\n                      h: true\r\n                    }\"\r\n                    color=\"danger\"\r\n                    >بازگشت به لیست نظرات</ion-button\r\n                  >\r\n                </ion-list-header>\r\n              </ion-list>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                ><ion-item\r\n                  class=\"text-center\"\r\n                  routerLink=\"{{ '/c/' + selectedHiddenComments[0].courseId }}\"\r\n                  lines=\"none\"\r\n                  *ngIf=\"selectedHiddenComments.length > 0\"\r\n                >\r\n                  <ion-label color=\"medium\" class=\"text-center\">{{\r\n                    \"دوره ی: \" + selectedHiddenComments[0].courseName\r\n                  }}</ion-label>\r\n                </ion-item></ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >نظرات در اول آموز</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content *ngIf=\"isEditMode\">\r\n              <form\r\n                [formGroup]=\"editForm\"\r\n                (ngSubmit)=\"presentEditAlertConfirm(1)\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >نظر <ion-text color=\"danger\">*</ion-text></ion-label\r\n                  >\r\n                  <ion-textarea\r\n                    autoGrow=\"true\"\r\n                    required\r\n                    formControlName=\"comment\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                  <ion-button\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"warning\"\r\n                    (click)=\"isEditMode = false\"\r\n                  >\r\n                    لغو\r\n                  </ion-button>\r\n                  <ion-button\r\n                    expand=\"block\"\r\n                    fill=\"solid\"\r\n                    shape=\"round\"\r\n                    color=\"success\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"editForm.invalid\"\r\n                  >\r\n                    ویرایش\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </form>\r\n            </ion-card-content>\r\n            <ion-card-content *ngIf=\"!isEditMode\">\r\n              <section *ngIf=\"selectedHiddenComments.length > 0\">\r\n                <ion-card *ngFor=\"let q of selectedHiddenComments\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                      <ion-text *ngIf=\"q.isTeacherAnswer\" color=\"warning\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"checkmark-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"مدرس \" }}\r\n                      </ion-text>\r\n                      <ion-text *ngIf=\"!q.isTeacherAnswer\" color=\"warning\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"person-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"کاربر \" }}\r\n                      </ion-text>\r\n                    <ion-text color=\"warning\">\r\n                      {{ q.userId + '- ' }}\r\n                    </ion-text>\r\n                      <ion-text color=\"warning\">\r\n                        {{ q.userName }}\r\n                      </ion-text>\r\n                      {{ \" - \" }}\r\n                      {{ getTime(q.createDate) }}\r\n                      {{ \" - \" }}\r\n                      {{ q.createDate | persianDate }}\r\n                      {{ \" - \" }}\r\n                      <ion-text *ngIf=\"q.isActive\" color=\"success\">\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          name=\"checkmark-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"فعال\" }}\r\n                      </ion-text>\r\n                      <ion-text *ngIf=\"!q.isActive\" color=\"danger\">\r\n                        <ion-icon\r\n                          color=\"danger\"\r\n                          name=\"close-circle-outline\"\r\n                        ></ion-icon>\r\n                        {{ \"غیر فعال\" }}\r\n                      </ion-text></ion-card-subtitle\r\n                    >\r\n                    <!-- <ion-card-title>{{ q.title }}</ion-card-title> -->\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <p class=\"description\">\r\n                      {{ q.comment }}\r\n                    </p>\r\n                    <br />\r\n                    <ion-button\r\n                      *ngIf=\"!q.isActive\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"solid\"\r\n                      shape=\"round\"\r\n                      color=\"success\"\r\n                      (click)=\"presentHiddenActiveAlertConfirm(q.id)\"\r\n                    >\r\n                      فعال شدن\r\n                    </ion-button>\r\n                    <ion-button\r\n                      *ngIf=\"q.isActive\"\r\n                      class=\"ion-margin\"\r\n                      expand=\"block\"\r\n                      fill=\"outline\"\r\n                      shape=\"round\"\r\n                      color=\"danger\"\r\n                      (click)=\"presentHiddenDeActiveAlertConfirm(q.id)\"\r\n                    >\r\n                      غیر فعال شدن\r\n                    </ion-button>\r\n                    <ion-buttons slot=\"start\" class=\"ion-padding\">\r\n                      <ion-button\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"warning\"\r\n                        (click)=\"onEdit(q.id, 1)\"\r\n                      >\r\n                        ویرایش\r\n                      </ion-button>\r\n                      <ion-button\r\n                        expand=\"block\"\r\n                        fill=\"solid\"\r\n                        shape=\"round\"\r\n                        color=\"danger\"\r\n                        (click)=\"presentHiddenDeleteAlertConfirm(q.id)\"\r\n                      >\r\n                        حذف\r\n                      </ion-button>\r\n                    </ion-buttons>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </section>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >پاسخ خود را وارد کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form\r\n                [formGroup]=\"commentAnswerForm\"\r\n                (ngSubmit)=\"presentAlertConfirm2(1)\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label color=\"light\" position=\"floating\"\r\n                    >پاسخ شما <ion-text color=\"danger\">*</ion-text></ion-label\r\n                  >\r\n                  <ion-textarea\r\n                    autoGrow=\"true\"\r\n                    required\r\n                    formControlName=\"answer\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n                <ion-button\r\n                  class=\"ion-margin\"\r\n                  expand=\"block\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                  color=\"success\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"commentAnswerForm.invalid\"\r\n                >\r\n                  ایجاد پاسخ\r\n                </ion-button>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row\r\n        *ngIf=\"\r\n          isCourseSelected &&\r\n          filteredComments &&\r\n          filteredComments.comments &&\r\n          !isCommentSelected\r\n        \"\r\n      >\r\n        <ion-toolbar dir=\"rtl\" color=\"primary\" *ngIf=\"login\">\r\n          <ion-segment\r\n            (ionChange)=\"segmentChanged()\"\r\n            [(ngModel)]=\"segmentSelected\"\r\n          >\r\n            <ion-segment-button value=\"public\">\r\n              <ion-label>نظرات عمومی</ion-label>\r\n              <ion-icon name=\"eye-outline\"></ion-icon>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"hidden\">\r\n              <ion-label>نظرات مخفی</ion-label>\r\n              <ion-icon name=\"eye-off-outline\"></ion-icon>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-toolbar>\r\n        <ion-col\r\n          *ngIf=\"\r\n            filteredComments.comments.length > 0 && segmentSelected == 'public'\r\n          \"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n          ion-row\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"دنبال چه نظری میگردی؟\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"commentSearch\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-list>\r\n                <ion-list-header class=\"no-padding\">\r\n                  <ion-button routerLink=\"/AdminPanel/ProductComments\" color=\"danger\"\r\n                    >بازگشت به لیست نظرات</ion-button\r\n                  >\r\n                </ion-list-header>\r\n              </ion-list>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                ><ion-item\r\n                  class=\"text-center\"\r\n                  routerLink=\"{{ '/p/' + filteredComments.productId }}\"\r\n                  lines=\"none\"\r\n                  *ngIf=\"filteredComments.comments.length > 0\"\r\n                >\r\n                  <ion-label color=\"medium\" class=\"text-center\">{{\r\n                    \"دوره ی: \" + filteredComments.comments[0].productName\r\n                  }}</ion-label>\r\n                </ion-item></ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >نظرات در اول آموز</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-item lines=\"none\">\r\n                <ion-label color=\"success\" *ngIf=\"commentsCount != -1\">{{\r\n                  commentsCount + \" نظر ثبت شده \"\r\n                }}</ion-label>\r\n                <ion-label color=\"success\" *ngIf=\"commentsCount == -1\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredComments.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredComments.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredComments.pageId <= i + 2 &&\r\n                          filteredComments.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredComments.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredComments.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredComments.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredComments.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <ion-list>\r\n                <ion-card *ngFor=\"let question of filteredComments.comments\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                    <ion-text color=\"warning\">\r\n                      {{ question.userId + '- ' }}\r\n                    </ion-text>\r\n                      <ion-text\r\n                    color=\"medium\"\r\n                    class=\"over-hidden\"\r\n                  >\r\n                    {{ question.userName + \" - \" }}\r\n                  </ion-text>\r\n                      <!-- <ion-text>\r\n                        {{ \"تاریخ بروزرسانی: \"\r\n                        }}{{ question.updateDate | persianDate }}\r\n                        {{ \" - \" }}\r\n                      </ion-text> -->\r\n                      <ion-text\r\n                        *ngIf=\"question.isActive\"\r\n                        color=\"success\"\r\n                        class=\"link-success over-hidden\"\r\n                      >\r\n                        فعال\r\n                        <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                          >{{ \" - نظر جدید\" }}\r\n                        </ion-text>\r\n                      </ion-text>\r\n                      <ion-text\r\n                        *ngIf=\"!question.isActive\"\r\n                        color=\"danger\"\r\n                        class=\"link-success over-hidden\"\r\n                      >\r\n                        غیر فعال\r\n                        <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                          >{{ \" - نظر جدید\" }}\r\n                        </ion-text>\r\n                      </ion-text>\r\n                    </ion-card-subtitle>\r\n                    <ion-card-title\r\n                      ><ion-item\r\n                        button\r\n                        (click)=\"onCommentClick(question.id)\"\r\n                        routerLink=\"{{\r\n                          '/AdminPanel/ProductComments/' + question.productId\r\n                        }}\"\r\n                        [queryParams]=\"{\r\n                          page: 1,\r\n                          take: 12,\r\n                          title: commentSearch,\r\n                          sortId: 0,\r\n                          commentid: +question.id,\r\n                          h: false\r\n                        }\"\r\n                      >\r\n                        <ion-label>\r\n                          {{ question.comment }}\r\n                        </ion-label>\r\n                      </ion-item></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-text color=\"medium\">\r\n                      {{ question.createDate | persianDate }}\r\n                    </ion-text>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-list>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredComments.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredComments.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredComments.pageId <= i + 2 &&\r\n                          filteredComments.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredComments.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredComments.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredComments.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredComments.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          *ngIf=\"\r\n            filteredComments.comments.length == 0 && segmentSelected == 'public'\r\n          \"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"دنبال چه نظری میگردی؟\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"commentSearch\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n                <ion-button routerLink=\"/AdminPanel/ProductComments\" color=\"danger\"\r\n                  >بازگشت به لیست نظرات</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item color=\"warning\">\r\n                <ion-label class=\"text-center\">نظری یافت نشد</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-card-header>\r\n              <ion-card-title class=\"text-center\"\r\n                >نظر خود را مطرح کنید</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-text color=\"success\" class=\"text-center\">\r\n                <h3 *ngIf=\"commentsCount != -1\">\r\n                  {{ \" تعداد نظرات ثبت شده: \" + commentsCount }}\r\n                </h3>\r\n                <h3 *ngIf=\"commentsCount == -1\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </h3>\r\n              </ion-text>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col\r\n          *ngIf=\"\r\n            filteredComments.comments.length > 0 &&\r\n            segmentSelected == 'hidden' &&\r\n            login\r\n          \"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n          ion-row\r\n          dir=\"rtl\"\r\n        >\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams2(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"دنبال چه نظری میگردی؟\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"commentSearch\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-list>\r\n                <ion-list-header class=\"no-padding\">\r\n                  <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n                  <ion-button routerLink=\"/AdminPanel/ProductComments\" color=\"danger\"\r\n                    >بازگشت به لیست نظرات</ion-button\r\n                  >\r\n                </ion-list-header>\r\n              </ion-list>\r\n              <ion-card-subtitle class=\"text-center\"\r\n                ><ion-item\r\n                  class=\"text-center\"\r\n                  routerLink=\"{{ '/p/' + filteredComments.productId }}\"\r\n                  lines=\"none\"\r\n                  *ngIf=\"filteredComments.comments.length > 0\"\r\n                >\r\n                  <ion-label color=\"medium\" class=\"text-center\">{{\r\n                    \"دوره ی: \" + filteredComments.comments[0].productName\r\n                  }}</ion-label>\r\n                </ion-item></ion-card-subtitle\r\n              >\r\n              <ion-card-title class=\"text-center\"\r\n                >نظرات در اول آموز</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-item lines=\"none\">\r\n                <ion-label color=\"success\" *ngIf=\"hiddenCommentsCount != -1\">{{\r\n                  hiddenCommentsCount + \" نظر ثبت شده \"\r\n                }}</ion-label>\r\n                <ion-label color=\"success\" *ngIf=\"hiddenCommentsCount == -1\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </ion-label>\r\n              </ion-item>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredComments.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredComments.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredComments.pageId <= i + 2 &&\r\n                          filteredComments.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredComments.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredComments.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredComments.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredComments.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <ion-list>\r\n                <ion-card *ngFor=\"let question of filteredComments.comments\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>\r\n                    <ion-text color=\"warning\">\r\n                      {{ question.userId + '- ' }}\r\n                    </ion-text>\r\n                      <ion-text\r\n                    color=\"medium\"\r\n                    class=\"over-hidden\"\r\n                  >\r\n                    {{ question.userName + \" - \" }}\r\n                  </ion-text>\r\n                      <!-- <ion-text>\r\n                        {{ \"تاریخ بروزرسانی: \"\r\n                        }}{{ question.updateDate | persianDate }}\r\n                        {{ \" - \" }}\r\n                      </ion-text> -->\r\n                      <ion-text\r\n                        *ngIf=\"question.isActive\"\r\n                        color=\"success\"\r\n                        class=\"link-success over-hidden\"\r\n                      >\r\n                        فعال\r\n                        <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                          >{{ \" - نظر جدید\" }}\r\n                        </ion-text>\r\n                      </ion-text>\r\n                      <ion-text\r\n                        *ngIf=\"!question.isActive\"\r\n                        color=\"danger\"\r\n                        class=\"link-success over-hidden\"\r\n                      >\r\n                        غیر فعال\r\n                        <ion-text *ngIf=\"!question.isSeen\" color=\"warning\"\r\n                          >{{ \" - نظر جدید\" }}\r\n                        </ion-text>\r\n                      </ion-text>\r\n                    </ion-card-subtitle>\r\n                    <ion-card-title\r\n                      ><ion-item\r\n                        button\r\n                        (click)=\"onCommentClick(question.id)\"\r\n                        routerLink=\"{{\r\n                          '/AdminPanel/ProductComments/' + question.productId\r\n                        }}\"\r\n                        [queryParams]=\"{\r\n                          page: 1,\r\n                          take: 12,\r\n                          title: commentSearch,\r\n                          sortId: 0,\r\n                          commentid: +question.id,\r\n                          h: true\r\n                        }\"\r\n                      >\r\n                        <ion-label>\r\n                          {{ question.comment }}\r\n                        </ion-label>\r\n                      </ion-item></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-text color=\"medium\">\r\n                      {{ question.createDate | persianDate }}\r\n                    </ion-text>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n              </ion-list>\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId > 2 &&\r\n                        filteredComments.pageCount > 2\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredComments.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredComments.pageId == page\"\r\n                        *ngIf=\"\r\n                          filteredComments.pageId <= i + 2 &&\r\n                          filteredComments.pageId >= i\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredComments.pageId == page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page == filteredComments.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredComments.pageId + 1 < filteredComments.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredComments.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredComments.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          *ngIf=\"\r\n            filteredComments.comments.length == 0 &&\r\n            segmentSelected == 'hidden' &&\r\n            login\r\n          \"\r\n          size=\"12\"\r\n          size-md=\"10\"\r\n          size-lg=\"8\"\r\n          offset=\"0\"\r\n          offset-md=\"1\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card dir=\"rtl\">\r\n            <ion-item>\r\n              <ion-button\r\n                color=\"success\"\r\n                class=\"ion-margin\"\r\n                fill=\"clear\"\r\n                (click)=\"setQueryParams2(1)\"\r\n              >\r\n                <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ion-button>\r\n              <ion-input\r\n                (keyup.enter)=\"setQueryParams(1)\"\r\n                placeholder=\"دنبال چه نظری میگردی؟\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"commentSearch\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header class=\"no-padding\">\r\n                <!-- <ion-label color=\"light\">بازگشت به لیست دوره ها</ion-label> -->\r\n                <ion-button routerLink=\"/AdminPanel/ProductComments\" color=\"danger\"\r\n                  >بازگشت به لیست نظرات</ion-button\r\n                >\r\n              </ion-list-header>\r\n              <ion-item color=\"warning\">\r\n                <ion-label class=\"text-center\">نظری یافت نشد</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n            <ion-card-content>\r\n              <ion-text color=\"success\" class=\"text-center\">\r\n                <h3 *ngIf=\"hiddenCommentsCount != -1\">\r\n                  {{ \" تعداد سوالات ثبت شده: \" + hiddenCommentsCount }}\r\n                </h3>\r\n                <h3 *ngIf=\"hiddenCommentsCount == -1\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </h3>\r\n              </ion-text>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <app-footer></app-footer>\r\n  </ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_product-comments_product-comments_module_ts.js.map