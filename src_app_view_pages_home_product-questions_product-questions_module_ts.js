"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_home_product-questions_product-questions_module_ts"],{

/***/ 73034:
/*!***************************************************************************************!*\
  !*** ./src/app/view/pages/home/product-questions/product-questions-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductQuestionsRoutingModule": () => (/* binding */ ProductQuestionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-questions.component */ 89636);




const routes = [{ path: '', component: _product_questions_component__WEBPACK_IMPORTED_MODULE_0__.ProductQuestionsComponent }];
let ProductQuestionsRoutingModule = class ProductQuestionsRoutingModule {
};
ProductQuestionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductQuestionsRoutingModule);



/***/ }),

/***/ 89636:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/home/product-questions/product-questions.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductQuestionsComponent": () => (/* binding */ ProductQuestionsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-questions.component.html?ngResource */ 34732);
/* harmony import */ var _product_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-questions.component.scss?ngResource */ 21121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/model/question/QuestionModel */ 35177);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/i18n/site-language.service */ 37159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32425);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */







 // import { ReCaptchaV3Service } from 'ngx-captcha';
// import { load } from 'recaptcha-v3';









let ProductQuestionsComponent = class ProductQuestionsComponent {
  constructor(language, menuCtrl, router, activatedRoute, productService, loadingController, toastController, alertController, // private reCaptchaV3Service: ReCaptchaV3Service,
  fb, title, meta, routerOutlet) {
    this.language = language;
    this.menuCtrl = menuCtrl;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.productService = productService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.alertController = alertController;
    this.fb = fb;
    this.title = title;
    this.meta = meta;
    this.routerOutlet = routerOutlet;
    this.questionsCount = -1;
    this.hiddenQuestionsCount = -1;
    this.selectedQuestions = [];
    this.selectedHiddenQuestions = [];
    this.isTeacherRested = false;
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.isHiddenQuestionSelected = false;
    this.selectedCourseId = 0;
    this.selectedQuestionId = 0;
    this.filteredCourses = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, 1, 20, '');
    this.courseSearch = '';
    this.questionSearch = '';
    this.notfound = false;
    this.login = false;
    this.isPrivate = false;
    this.isAskMode = false;
    this.showSearchbar = false;
    this.segmentSelected = 'public';
    this.siteKey = '6LdCHUsaAAAAAKMF5WYHkOzYLfLCPQT9TwnQO-uX';
    this.windowWidth = 1000;
    this.isReportMode = false;
    this.replyId = 0;
    this.searchOpen = false;
    this.siteSearchQuery = '';
    this.cartCoursesCount = 0;
    this.cartProductsCount = 0;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subscription();
    _core_common_G__WEBPACK_IMPORTED_MODULE_10__.G.getWindowWidth().subscribe(res => {
      this.windowWidth = res;
    });
  }

  get cartCount() {
    return this.cartCoursesCount + this.cartProductsCount;
  }

  get loggedIn() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__.GAccount.IsLoggedIn();
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

  onSiteSearch() {
    if (this.siteSearchQuery && this.siteSearchQuery.trim()) {
      this.router.navigate(['/Product/Search'], {
        queryParams: {
          title: this.siteSearchQuery.trim(),
          page: 1
        }
      });
    }
  }

  clearCourseSearch() {
    this.courseSearch = '';
    this.setQueryParams2(1);
  }

  clearQuestionSearch() {
    this.questionSearch = '';
    this.setQueryParams(1);
  }

  updateTitle(title = 'اول آموز | تالار پرسش و پاسخ محصولات، کاربرگ‌ها و ابزارهای کلاسی') {
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

  updateOgUrl(url = 'http://localhost:4300/ProductQuestions') {
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
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'http://localhost:4300/assets/learning/brand/logo-share.png'
    });
    this.meta.updateTag({
      name: 'og:image:alt',
      content: 'لوگو تالار پرسش و پاسخ محصولات اول آموز'
    });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'لوگو تالار پرسش و پاسخ محصولات اول آموز'
    });
  }

  updateDescription(desc = 'پرسش و پاسخ پیرامون کاربرگ‌های آموزشی، فایل‌های طرح درس، ابزارهای کمک‌آموزشی و ملزومات کلاسی پایه اول تا ششم ابتدایی در اول آموز.') {
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

  ionViewWillEnter() {
    this.windowWidth = +window.innerWidth;
    this.isCourseSelected = false;
    this.isQuestionSelected = false;
    this.login = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_6__.GAccount.IsLoggedIn();
    let filter;
    let filter2;
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;

      if (id === undefined || id == null || +id <= 0) {
        this.updateTitle();
        this.updateOgUrl('http://localhost:4300/ProductQuestions');
        this.updateDescription();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
        this.isCourseSelected = false;
        this.selectedCourseId = 0;
        filter2 = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, 1, 20, this.courseSearch);
        this.productService.GetQuestionProductsByFilter(filter2).subscribe(res => {
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
          const questionId = queryParams.questionid ? +queryParams.questionid : 0;
          const h = queryParams.h ? queryParams.h : 'false';

          if (h == 'true') {
            this.segmentSelected = 'hidden';
          } else {
            this.segmentSelected = 'public';
          }

          if (title == 'null') {
            title = '';
          }

          this.questionSearch = title;
          filter = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.ProductQuestionFilterModel(this.selectedCourseId, page, take, title, sortId);
          this.filteredQuestions = filter;

          if (this.segmentSelected == 'public') {
            if (questionId != 0) {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/ProductQuestions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&questionId=' + questionId + '&h=' + h);
              this.selectedQuestionId = questionId;
              this.productService.GetProductQuestionsDetailsById(questionId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.selectedQuestions = res.data;
                  this.isQuestionSelected = true;
                  this.updateTitle('پرسش و پاسخ - ' + this.selectedQuestions[0].courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.selectedQuestions[0].title + ' | ' + this.selectedQuestions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_9__.Urls.Page404Url);
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/ProductQuestions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&h=' + h);
              this.productService.GetProductQuestionsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                  this.updateTitle('پرسش و پاسخ - ' + this.filteredQuestions.productName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.filteredQuestions.questions[0].title + ' | ' + this.filteredQuestions.questions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data; // SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.productService.GetProductQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                this.questionsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                this.questionsCount = -1;
              }
            }, err => {
              this.questionsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          } else {
            if (questionId != 0) {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/ProductQuestions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&questionId=' + questionId + '&h=' + h);
              this.selectedQuestionId = questionId;
              this.productService.GetProductHiddenQuestionsDetailsById(questionId).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.selectedHiddenQuestions = res.data;
                  this.isHiddenQuestionSelected = true;
                  this.updateTitle('پرسش و پاسخ - ' + this.selectedHiddenQuestions[0].courseName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.selectedHiddenQuestions[0].title + ' | ' + this.selectedHiddenQuestions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_9__.Urls.Page404Url);
                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخی ثبت نشده است');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            } else {
              // tslint:disable-next-line: max-line-length
              this.updateOgUrl('http://localhost:4300/ProductQuestions/' + id + '?page=' + page + '&take=' + take + '&title=' + title + '&sortId=' + sortId + '&h=' + h);
              this.productService.GetProductHiddenQuestionsByFilter(filter).subscribe(res => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                  this.filteredQuestions = res.data;
                  this.updateTitle('پرسش و پاسخ - ' + this.filteredQuestions.productName); // tslint:disable-next-line: max-line-length

                  this.updateDescription('پرسش و پاسخ اول آموز - ' + this.filteredQuestions.questions[0].title + ' | ' + this.filteredQuestions.questions[0].description);
                } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                  this.filteredQuestions = res.data; // SharedIonic.toast(this.toastController, 'سوالی پیدا نشد');
                }
              }, err => {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
              });
            }

            this.productService.GetProductHiddenQuestionsCountById(this.selectedCourseId).subscribe(res => {
              if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
                this.hiddenQuestionsCount = res.data;
              } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
                this.hiddenQuestionsCount = -1;
              }
            }, err => {
              this.hiddenQuestionsCount = -1;
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
            });
          }
        });
      }
    });
  }

  onReportClicked(commentId, mode) {
    this.replyForm.setValue({
      comment: ''
    });
    this.replyId = commentId;
    this.isReportMode = true;
  }

  segmentChanged() {
    this.questionSearch = '';
    this.filteredQuestions = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.ProductQuestionFilterModel(this.selectedCourseId, 1, 12, '', 0);
    this.setQueryParams(1, this.segmentSelected == 'hidden');
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  onQuestionClick(id) {// this.router
    //   .navigate(
    //     ['Questions', this.selectedCourseId],
    //     {
    //       queryParams:
    //       {
    //         page: 1,
    //         take: 12,
    //         title: null,
    //         sortId: 0,
    //         questionid: +id
    //       }
    //     });
  }

  ngOnInit() {
    this.siteKey = _core_common_G__WEBPACK_IMPORTED_MODULE_10__.G.SiteKey;
    this.questionForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(80)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10000)]]
    });
    this.questionAnswerForm = this.fb.group({
      answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(10000)]]
    });
    this.replyForm = this.fb.group({
      comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(2000)]]
    });
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.getCartCoursesCount().subscribe(count => this.cartCoursesCount = count));
    this.subscriptions.add(_core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.getCartProductsCount().subscribe(count => this.cartProductsCount = count));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  presentAlertConfirm(typeCode) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
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
            _this2.onQuestion(_this2.isPrivate ? 1 : +typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertReportConfirm() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
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
            _this3.onReport();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onReport() {
    if (this.replyForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_10__.G.IsAndroid) {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.replyForm.value.comment, new Date(), 0, +this.replyId, '', 0, false, false, false, 'failed', false);
        this.productService.ReportQuestion(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const comment = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.CommentModel(0, this.replyForm.value.comment, new Date(), 0, +this.replyId, '', 0, false, false, false, 'failed', false);
        this.productService.ReportQuestion(comment).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'گزارش ثبت شد');
            this.replyForm.setValue({
              comment: ''
            });
            this.isReportMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          } else {
            this.isReportMode = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
          }
        }, err => {
          this.isReportMode = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } //   });
      // });
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   if (G.IsAndroid) {
      //     const comment: ICommentModel = new CommentModel(
      //       0,
      //       this.replyForm.value.comment,
      //       new Date(),
      //       0,
      //       +this.replyId,
      //       '',
      //       0,
      //       false,
      //       false,
      //       false,
      //       'failed',
      //       false);
      //     this.productService.ReportQuestion(comment).subscribe(
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
      //       0,
      //       +this.replyId,
      //       '',
      //       0,
      //       false,
      //       false,
      //       false,
      //       token,
      //       false);
      //     this.productService.ReportQuestion(comment).subscribe(
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

  presentAlertConfirm4(typeCode) {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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
            _this4.onQuestion(_this4.isPrivate ? 1 : +typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirm2(typeCode) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
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
            _this5.onQuestionAnswer(+typeCode);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentSetQuestionAlert() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'توجه',
        message: 'سوال شما پس از تایید به نمایش در می آید',
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

  presentSetQuestionAlert2() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
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

  onCancel() {
    this.showSearchbar = false;
  }

  onQuestion(typeCode) {
    if (this.questionForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_10__.G.IsAndroid) {
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, this.questionForm.value.title, this.questionForm.value.description, new Date(), 0, '', this.selectedCourseId, null, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.productService.SetProductQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'سوال ثبت شد');
            this.presentSetQuestionAlert();
            this.questionForm.setValue({
              title: '',
              description: ''
            });
            this.isPrivate = false;
            this.isAskMode = false;
          } else if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.NotFoundStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کاربر یافت نشد');
          }
        }, err => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'خطایی رخ داده است');
        });
      } else {
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, this.questionForm.value.title, this.questionForm.value.description, new Date(), 0, '', this.selectedCourseId, null, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.productService.SetProductQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'سوال ثبت شد');
            this.presentSetQuestionAlert();
            this.questionForm.setValue({
              title: '',
              description: ''
            });
            this.isPrivate = false;
            this.isAskMode = false;
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
      //       new QuestionModel(
      //         0,
      //         this.questionForm.value.title,
      //         this.questionForm.value.description,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         null,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         'failed',
      //         false);
      //     this.productService.SetProductQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'سوال ثبت شد');
      //           this.presentSetQuestionAlert();
      //           this.questionForm.setValue({
      //             title: '',
      //             description: ''
      //           });
      //           this.isPrivate = false;
      //           this.isAskMode = false;
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
      //       new QuestionModel(
      //         0,
      //         this.questionForm.value.title,
      //         this.questionForm.value.description,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         null,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         token,
      //         false);
      //     this.productService.SetProductQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'سوال ثبت شد');
      //           this.presentSetQuestionAlert();
      //           this.questionForm.setValue({
      //             title: '',
      //             description: ''
      //           });
      //           this.isPrivate = false;
      //           this.isAskMode = false;
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

  CheckBuy() {
    // return GResponse.MyCourseIds.find(n =>
    //   n == this.selectedCourseId) || this.selectedQuestions[0].isCourseFree ? true : false;
    return true;
  }

  CheckBuy2() {
    // return GResponse.MyCourseIds.find(n =>
    //   n == this.selectedCourseId) || this.filteredQuestions.isProductFree ? true : false;
    return true;
  }

  onQuestionAnswer(typeCode) {
    if (this.questionAnswerForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController); // load(this.siteKey).then((recaptcha) => {
      //   recaptcha.execute('homepage').then((token) => {

      if (_core_common_G__WEBPACK_IMPORTED_MODULE_10__.G.IsAndroid) {
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.productService.SetProductQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
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
        const model = new _data_model_question_QuestionModel__WEBPACK_IMPORTED_MODULE_3__.QuestionModel(0, '', this.questionAnswerForm.value.answer, new Date(), 0, '', this.selectedCourseId, this.selectedQuestionId, '', 0, false, typeCode == 0 ? false : true, false, false, 'failed', false);
        this.productService.SetProductQuestion(model).subscribe(res => {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_8__.GResponse.SuccessStatus) {
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
            this.presentSetQuestionAlert2();
            this.questionAnswerForm.setValue({
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
      //       new QuestionModel(
      //         0,
      //         '',
      //         this.questionAnswerForm.value.answer,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         this.selectedQuestionId,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         'failed',
      //         false);
      //     this.productService.SetProductQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetQuestionAlert2();
      //           this.questionAnswerForm.setValue({
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
      //       new QuestionModel(
      //         0,
      //         '',
      //         this.questionAnswerForm.value.answer,
      //         new Date(),
      //         0,
      //         '',
      //         this.selectedCourseId,
      //         this.selectedQuestionId,
      //         '',
      //         0,
      //         false,
      //         typeCode == 0 ? false : true,
      //         false,
      //         false,
      //         token,
      //         false);
      //     this.productService.SetProductQuestion(model).subscribe(
      //       res => {
      //         SharedIonic.dismissLoading(this.loadingController);
      //         if (res.status === GResponse.SuccessStatus) {
      //           SharedIonic.toast(this.toastController, 'پاسخ ثبت شد');
      //           this.presentSetQuestionAlert2();
      //           this.questionAnswerForm.setValue({
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
    this.content.scrollToTop(1500);
    this.productService.GetProductsByFilter(filter).subscribe(res => {
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
    this.content.scrollToTop(1500);
    this.router.navigate(['ProductQuestions', this.selectedCourseId], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredQuestions.takeEntity ? this.filteredQuestions.takeEntity : null,
        title: this.questionSearch,
        sortId: this.filteredQuestions.sortId ? this.filteredQuestions.sortId : 0,
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
    if (this.filteredQuestions.startPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId > this.filteredQuestions.startPage && +this.filteredQuestions.pageId - 1 > 0) {
      this.setQueryParams(+this.filteredQuestions.pageId - 1);
    }
  }

  goNextPage() {
    if (this.filteredQuestions.endPage == null) {
      return;
    }

    if (this.filteredQuestions.pageId < this.filteredQuestions.endPage) {
      this.setQueryParams(+this.filteredQuestions.pageId + 1);
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
    this.course = model; // this.router
    //   .navigate(
    //     ['Questions', this.selectedCourseId],
    //     {
    //       queryParams:
    //       {
    //         page: 1,
    //         take: 12,
    //         title: null,
    //         sortId: 0
    //       }
    //     });
  }

};

ProductQuestionsComponent.ctorParameters = () => [{
  type: src_app_core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_11__.SiteLanguageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.MenuController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRouterOutlet
}];

ProductQuestionsComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent]
  }]
};
ProductQuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-product-questions',
  template: _product_questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductQuestionsComponent);


/***/ }),

/***/ 71546:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/home/product-questions/product-questions.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductQuestionsModule": () => (/* binding */ ProductQuestionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-questions-routing.module */ 73034);
/* harmony import */ var _product_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-questions.component */ 89636);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 38699);









// import { NgxCaptchaModule } from 'ngx-captcha';





let ProductQuestionsModule = class ProductQuestionsModule {
};
ProductQuestionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_product_questions_component__WEBPACK_IMPORTED_MODULE_2__.ProductQuestionsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _product_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductQuestionsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_6__.SharedProductModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            // NgxCaptchaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]
    })
], ProductQuestionsModule);



/***/ }),

/***/ 21121:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/home/product-questions/product-questions.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.22);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazir\", sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input, textarea {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 8px;\n}\n\nbutton:disabled, [aria-disabled=true] {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.qa-container {\n  width: min(1200px, 100% - 36px);\n  margin-inline: auto;\n}\n\n/* ==========================================================================\n   Header & Navigation\n   ========================================================================== */\n\n.learning-header {\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1320px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -6px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 14px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 2px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex: 1;\n}\n\n.main-nav a, .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 12px;\n  color: var(--ink);\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  position: relative;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.2s ease;\n}\n\n.main-nav a:hover, .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav a.active-nav, .nav-link-btn.active-nav {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--purple);\n}\n\n.icon-button {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #f6f1fd;\n  color: var(--purple);\n  border: 1px solid #e9d5ff;\n  font-size: 20px;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.15s, color 0.2s;\n}\n\n.icon-button:hover {\n  background: #ede9fe;\n  color: var(--purple);\n  transform: translateY(-1px);\n}\n\n.cart {\n  position: relative;\n}\n\n.cart-badge {\n  position: absolute;\n  top: -4px;\n  inset-inline-end: -4px;\n  font-size: 10px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #3b2802;\n  border: 2px solid #fff;\n  padding: 1px 5px;\n  border-radius: 12px;\n}\n\n.login-button {\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #dcd0f7;\n  padding: 8px 14px;\n  border-radius: 12px;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n\n.login-button:hover {\n  background: var(--purple);\n  color: #fff;\n  transform: translateY(-1px);\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.menu-toggle {\n  display: inline-flex !important;\n  background: var(--purple-light);\n  color: var(--purple);\n  border: 1px solid #ddd6fe;\n}\n\n.menu-toggle:hover {\n  background: var(--purple);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n.header-search {\n  max-width: 960px;\n  margin: auto;\n  padding: 4px 24px 16px;\n}\n\n.header-search label {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-bottom: 6px;\n}\n\n.search-input-group {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 2px solid #ddd1f5;\n  border-radius: 16px;\n  padding: 6px 14px;\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);\n}\n\n.search-input-icon {\n  font-size: 22px;\n  color: var(--purple);\n}\n\n.search-input-group input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 14px;\n}\n\n/* ==========================================================================\n   Hero Section\n   ========================================================================== */\n\n.qa-content {\n  --background: var(--bg-canvas);\n  --color: var(--ink);\n  flex: 1;\n}\n\n.qa-hero {\n  position: relative;\n  background: linear-gradient(180deg, #f7f2ff 0%, #faf8fe 65%, #fcfbfe 100%);\n  overflow: hidden;\n  padding-block: 32px 36px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.store-mode .qa-hero {\n  background: linear-gradient(180deg, #fff9f0 0%, #fffcf8 65%, #fcfbfe 100%);\n}\n\n.qa-hero-glow {\n  position: absolute;\n  top: -120px;\n  inset-inline-start: 8%;\n  width: 440px;\n  height: 440px;\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(167, 139, 250, 0.22) 0%, rgba(255, 255, 255, 0) 70%);\n  pointer-events: none;\n}\n\n.store-mode .qa-hero-glow {\n  background: radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(255, 255, 255, 0) 70%);\n}\n\n.qa-hero-inner {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.qa-eyebrow-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.qa-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: #5b21b6;\n  background: #ede6fc;\n  padding: 6px 14px;\n  border-radius: 30px;\n  font-size: 12px;\n  font-weight: 800;\n  border: 1px solid #ddd2f7;\n}\n\n.store-mode .qa-eyebrow {\n  color: #92400e;\n  background: #fef3c7;\n  border-color: #fde68a;\n}\n\n.qa-sparkle {\n  color: var(--amber);\n  font-size: 16px;\n}\n\n.qa-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #eefdf5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n  padding: 5px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.qa-chip ion-icon {\n  font-size: 14px;\n  color: #10b981;\n}\n\n.qa-hero h1 {\n  font-size: clamp(24px, 3.2vw, 36px);\n  font-weight: 900;\n  line-height: 1.55;\n  letter-spacing: -0.8px;\n  color: var(--ink);\n  margin: 0;\n}\n\n.qa-highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n  z-index: 1;\n}\n\n.store-mode .qa-highlight {\n  color: #b45309;\n}\n\n.qa-highlight svg {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: -4px;\n  height: 14px;\n  fill: none;\n  stroke: var(--amber);\n  stroke-width: 4.5;\n  stroke-linecap: round;\n  z-index: -1;\n}\n\n.qa-hero-desc {\n  font-size: 14px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  max-width: 760px;\n  margin: 0;\n}\n\n/* Trust stats strip */\n\n.qa-trust-strip {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 6px;\n  padding: 12px 18px;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid #ebdff8;\n  border-radius: 16px;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.qa-trust-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink);\n}\n\n.qa-trust-item ion-icon {\n  font-size: 17px;\n  color: var(--purple);\n}\n\n.store-mode .qa-trust-item ion-icon {\n  color: var(--amber-dark);\n}\n\n.qa-trust-divider {\n  width: 1px;\n  height: 18px;\n  background: #e2d7f3;\n}\n\n/* Interactive Breadcrumbs */\n\n.qa-breadcrumbs {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--muted);\n  margin-top: 4px;\n}\n\n.qa-breadcrumbs a {\n  color: var(--purple);\n  transition: color 0.2s;\n}\n\n.qa-breadcrumbs a:hover {\n  text-decoration: underline;\n}\n\n.qa-breadcrumb-sep {\n  font-size: 12px;\n  color: #cbd5e1;\n}\n\n.qa-breadcrumb-current {\n  color: var(--ink);\n  font-weight: 800;\n}\n\n/* ==========================================================================\n   Section Layout & Cards\n   ========================================================================== */\n\n.qa-main-section {\n  padding-block: 36px 56px;\n}\n\n.qa-card {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.04);\n  transition: all 0.24s ease;\n  margin-bottom: 24px;\n}\n\n.qa-card:hover {\n  box-shadow: 0 8px 28px rgba(99, 63, 163, 0.07);\n}\n\n.qa-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding-bottom: 18px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.qa-card-title-group h2, .qa-card-title-group h3 {\n  font-size: 19px;\n  font-weight: 900;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.qa-card-title-group p {\n  font-size: 12.5px;\n  color: var(--muted);\n  margin-top: 4px;\n}\n\n/* Primary Button */\n\n.button-primary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border: 1px solid transparent;\n  border-radius: 14px;\n  padding: 10px 22px;\n  font-size: 13px;\n  font-weight: 800;\n  line-height: 1.4;\n  color: #fff;\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  border-color: #5b21b6;\n  box-shadow: 0 4px 16px var(--purple-glow);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.store-mode .button-primary {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n  border-color: #b45309;\n  box-shadow: 0 4px 16px rgba(217, 119, 6, 0.28);\n}\n\n.button-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px var(--purple-glow);\n}\n\n.button-primary.small {\n  min-height: 38px;\n  padding: 7px 16px;\n  font-size: 12px;\n  border-radius: 11px;\n}\n\n.button-secondary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  border: 1px solid #ddd1f5;\n  border-radius: 14px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--purple);\n  background: #ffffff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.store-mode .button-secondary {\n  border-color: #fed7aa;\n  color: #b45309;\n}\n\n.button-secondary:hover:not(:disabled) {\n  background: var(--purple-light);\n  transform: translateY(-2px);\n}\n\n.button-secondary.small {\n  min-height: 38px;\n  padding: 7px 16px;\n  font-size: 12px;\n  border-radius: 11px;\n}\n\n.button-danger {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #dc2626;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.button-danger:hover {\n  background: #fca5a5;\n  color: #991b1b;\n}\n\n/* ==========================================================================\n   Filter & Search Box\n   ========================================================================== */\n\n.qa-filter-box {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 18px 22px;\n  margin-bottom: 28px;\n  box-shadow: 0 4px 18px rgba(99, 63, 163, 0.03);\n}\n\n.qa-filter-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n\n.qa-search-field {\n  flex: 1;\n  min-width: 240px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #faf8fd;\n  border: 1.5px solid #e9dff7;\n  border-radius: 14px;\n  padding: 8px 14px;\n  transition: all 0.2s;\n}\n\n.qa-search-field:focus-within {\n  border-color: var(--purple);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);\n}\n\n.qa-search-field ion-icon {\n  font-size: 20px;\n  color: var(--purple);\n}\n\n.qa-search-field input {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 13.5px;\n}\n\n.qa-clear-btn {\n  color: var(--muted);\n  font-size: 18px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.qa-clear-btn:hover {\n  color: var(--rose);\n}\n\n/* General Questions Hero Banner (Course 25) */\n\n.general-qa-banner {\n  background: linear-gradient(135deg, #fefce8 0%, #fffbeb 50%, #fef3c7 100%);\n  border: 1.5px dashed #fde047;\n  border-radius: 20px;\n  padding: 20px 24px;\n  margin-bottom: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: 0 4px 16px rgba(234, 179, 8, 0.08);\n}\n\n.general-qa-copy {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.general-qa-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: #fef08a;\n  color: #a16207;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  flex-shrink: 0;\n}\n\n.general-qa-text b {\n  display: block;\n  font-size: 16px;\n  color: #854d0e;\n  margin-bottom: 3px;\n}\n\n.general-qa-text p {\n  font-size: 12.5px;\n  color: #713f12;\n}\n\n/* ==========================================================================\n   Course / Product Grid Cards\n   ========================================================================== */\n\n.qa-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 22px;\n  margin-bottom: 32px;\n}\n\n.qa-card-item {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 18px rgba(99, 63, 163, 0.04);\n  transition: transform 0.24s ease, box-shadow 0.24s ease;\n  position: relative;\n}\n\n.qa-card-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 14px 32px rgba(109, 40, 217, 0.09);\n  border-color: #dcd0f7;\n}\n\n.qa-card-media {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/10;\n  background: #f4edf9;\n  overflow: hidden;\n}\n\n.qa-card-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s ease;\n}\n\n.qa-card-item:hover .qa-card-media img {\n  transform: scale(1.04);\n}\n\n.qa-item-badge {\n  position: absolute;\n  top: 10px;\n  inset-inline-start: 10px;\n  background: rgba(255, 255, 255, 0.92);\n  color: var(--purple);\n  border: 1px solid #e9d5ff;\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 800;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.qa-card-content {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 12px;\n}\n\n.qa-card-content h3 {\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.55;\n  color: var(--ink);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.qa-card-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 12px;\n  border-top: 1px dashed #ede8f5;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.qa-action-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--purple);\n  font-weight: 800;\n  font-size: 12px;\n  transition: transform 0.2s;\n}\n\n.qa-card-item:hover .qa-action-link ion-icon {\n  transform: translateX(-4px);\n}\n\n/* ==========================================================================\n   Selected Target Banner (Current Course/Product)\n   ========================================================================== */\n\n.current-target-card {\n  background: linear-gradient(135deg, #ffffff 0%, #faf7ff 100%);\n  border: 1.5px solid #e2d4fa;\n  border-radius: 22px;\n  padding: 22px 26px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.05);\n}\n\n.current-target-info {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n\n.target-avatar-wrap {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  overflow: hidden;\n  background: var(--purple-light);\n  border: 2px solid #ddd1f5;\n  flex-shrink: 0;\n}\n\n.target-avatar-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.target-text-wrap span.target-kicker {\n  font-size: 11.5px;\n  font-weight: 800;\n  color: var(--purple);\n  display: block;\n  margin-bottom: 4px;\n}\n\n.target-text-wrap h2 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.target-badges-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n\n.status-pill.active {\n  background: var(--emerald-light);\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n\n.status-pill.rested {\n  background: var(--rose-light);\n  color: #be123c;\n  border: 1px solid #fecdd3;\n}\n\n.status-pill.count {\n  background: #f1f5f9;\n  color: #475569;\n}\n\n.target-actions-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n/* ==========================================================================\n   Segment Tabs (Public vs Hidden)\n   ========================================================================== */\n\n.qa-segments-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f1ecf9;\n  padding: 6px;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.qa-segment-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink-secondary);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.qa-segment-pill.selected {\n  background: #ffffff;\n  color: var(--purple);\n  box-shadow: 0 3px 12px rgba(109, 40, 217, 0.12);\n  font-weight: 800;\n}\n\n.qa-segment-pill ion-icon {\n  font-size: 17px;\n}\n\n/* ==========================================================================\n   Ask Question & Forms\n   ========================================================================== */\n\n.ask-form-card {\n  background: #ffffff;\n  border: 1.5px solid #e7ddf9;\n  border-radius: 22px;\n  padding: 24px;\n  margin-bottom: 28px;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.04);\n}\n\n.ask-form-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.ask-form-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.ask-form-header h3 {\n  font-size: 17px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.ask-form-header p {\n  font-size: 12px;\n  color: var(--muted);\n  margin-top: 3px;\n}\n\n.form-group {\n  margin-bottom: 18px;\n}\n\n.form-group label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 8px;\n}\n\n.form-group label span.req {\n  color: var(--rose);\n  margin-inline-start: 2px;\n}\n\n.form-control {\n  width: 100%;\n  border: 1.5px solid #e2d7f3;\n  border-radius: 14px;\n  padding: 12px 16px;\n  font-size: 13.5px;\n  color: var(--ink);\n  background: #fdfcff;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n\n.form-control:focus {\n  outline: 0;\n  border-color: var(--purple);\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);\n}\n\ntextarea.form-control {\n  resize: vertical;\n  min-height: 110px;\n  line-height: 1.8;\n}\n\n.private-toggle-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #faf8fd;\n  border: 1px solid #ede4fa;\n  border-radius: 14px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.private-toggle-box input[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--purple);\n  cursor: pointer;\n}\n\n.private-toggle-text b {\n  display: block;\n  font-size: 13px;\n  color: var(--ink);\n}\n\n.private-toggle-text small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.guideline-badge {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #fefce8;\n  border: 1px solid #fef08a;\n  border-radius: 14px;\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #854d0e;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n\n.guideline-badge ion-icon {\n  font-size: 18px;\n  color: #ca8a04;\n  margin-top: 2px;\n}\n\n/* Non-enrolled & Guest CTA Box */\n\n.notice-cta-card {\n  background: linear-gradient(135deg, #fbf9ff 0%, #f4eefa 100%);\n  border: 1.5px dashed #d8b4fe;\n  border-radius: 20px;\n  padding: 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.notice-cta-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 18px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n\n.notice-cta-card h4 {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.notice-cta-card p {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  max-width: 480px;\n}\n\n/* ==========================================================================\n   Question Stream Rows\n   ========================================================================== */\n\n.question-stream-row {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  padding: 18px 22px;\n  margin-bottom: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  box-shadow: 0 2px 10px rgba(99, 63, 163, 0.02);\n  transition: all 0.2s ease;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.question-stream-row:hover {\n  border-color: #d1bbf3;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.08);\n}\n\n.q-row-main {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.q-row-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 11.5px;\n  color: var(--muted);\n}\n\n.q-user-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--purple);\n  font-weight: 700;\n}\n\n.q-user-pill ion-icon {\n  font-size: 15px;\n}\n\n.q-row-title {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--ink);\n  line-height: 1.5;\n  transition: color 0.2s;\n}\n\n.question-stream-row:hover .q-row-title {\n  color: var(--purple);\n}\n\n.q-row-arrow {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #f7f3fd;\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n\n.question-stream-row:hover .q-row-arrow {\n  background: var(--purple);\n  color: #ffffff;\n  transform: translateX(-3px);\n}\n\n/* ==========================================================================\n   Question Detail View & Discussion\n   ========================================================================== */\n\n.main-question-card {\n  background: #ffffff;\n  border: 1.5px solid #ded3f5;\n  border-radius: 22px;\n  padding: 26px;\n  margin-bottom: 28px;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.05);\n}\n\n.question-author-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n  padding-bottom: 14px;\n  border-bottom: 1px dashed #e8def6;\n}\n\n.author-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.author-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.author-avatar.teacher {\n  background: var(--emerald-light);\n  color: var(--emerald);\n}\n\n.author-info b {\n  display: block;\n  font-size: 13.5px;\n  color: var(--ink);\n}\n\n.author-info small {\n  display: block;\n  font-size: 11px;\n  color: var(--muted);\n  margin-top: 2px;\n}\n\n.main-question-card h2.q-title {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ink);\n  line-height: 1.55;\n  margin-bottom: 16px;\n}\n\n.q-body {\n  font-size: 14.5px;\n  color: var(--ink-secondary);\n  line-height: 2.1;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n/* Discussion / Replies list */\n\n.replies-section {\n  margin-top: 32px;\n}\n\n.replies-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.replies-heading h3 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.replies-count-pill {\n  background: var(--purple-light);\n  color: var(--purple);\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.reply-card {\n  background: #ffffff;\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 22px;\n  margin-bottom: 18px;\n  box-shadow: 0 4px 16px rgba(99, 63, 163, 0.03);\n  position: relative;\n  transition: all 0.2s ease;\n}\n\n.reply-card.teacher-reply {\n  background: linear-gradient(180deg, #fcfefe 0%, #f6fbf9 100%);\n  border: 1.5px solid #a7f3d0;\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.07);\n}\n\n.reply-card.best-reply {\n  border-color: #fde047;\n  background: linear-gradient(180deg, #fefefe 0%, #fefcf3 100%);\n}\n\n.reply-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f1ecf9;\n}\n\n.teacher-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--emerald-light);\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.best-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #fef08a;\n  color: #854d0e;\n  border: 1px solid #fde047;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.reply-body {\n  font-size: 14px;\n  color: var(--ink);\n  line-height: 2;\n  white-space: pre-wrap;\n}\n\n/* Question closed banner */\n\n.closed-banner {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 16px 22px;\n  text-align: center;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n/* ==========================================================================\n   Pagination\n   ========================================================================== */\n\n.qa-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-block: 28px 20px;\n}\n\n.qa-page-btn {\n  min-width: 38px;\n  height: 38px;\n  padding: 0 10px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e7ddf9;\n  background: #ffffff;\n  color: var(--ink);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.qa-page-btn:hover:not(:disabled) {\n  border-color: var(--purple);\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.qa-page-btn.active {\n  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);\n  color: #ffffff;\n  border-color: #5b21b6;\n  font-weight: 800;\n  box-shadow: 0 3px 10px var(--purple-glow);\n}\n\n.qa-page-ellipsis {\n  padding: 0 6px;\n  color: var(--muted);\n  font-weight: bold;\n}\n\n/* ==========================================================================\n   Empty States\n   ========================================================================== */\n\n.qa-empty-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: #ffffff;\n  border: 1.5px dashed #ded4f4;\n  border-radius: 22px;\n  margin-block: 20px;\n}\n\n.qa-empty-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: var(--purple-light);\n  color: var(--purple);\n  font-size: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n}\n\n.qa-empty-state h3 {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.qa-empty-state p {\n  font-size: 13px;\n  color: var(--muted);\n  max-width: 440px;\n  margin: auto;\n}\n\n/* ==========================================================================\n   Footer\n   ========================================================================== */\n\n.learning-footer {\n  background: #ffffff;\n  border-top: 1px solid var(--border-soft);\n  padding-top: 48px;\n  margin-top: 40px;\n}\n\n.footer-top {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr 1.2fr;\n  gap: 36px;\n  padding-bottom: 40px;\n}\n\n.footer-desc {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  line-height: 2;\n  margin-top: 12px;\n  max-width: 380px;\n}\n\n.footer-domain-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f5f3ff;\n  color: var(--purple);\n  border: 1px solid #ddd6fe;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 11.5px;\n  margin-top: 14px;\n}\n\n.footer-links-col h4, .footer-trust-col h4 {\n  font-size: 14px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 16px;\n}\n\n.footer-links-col nav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.footer-links-col a {\n  font-size: 12.5px;\n  color: var(--ink-secondary);\n  transition: color 0.2s;\n  cursor: pointer;\n}\n\n.footer-links-col a:hover {\n  color: var(--purple);\n}\n\n.trust-cards-row {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.trust-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #faf8fd;\n  border: 1px solid #ede4fa;\n  padding: 10px 14px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink);\n}\n\n.trust-pill ion-icon {\n  font-size: 18px;\n  color: var(--purple);\n}\n\n.footer-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding-block: 20px;\n  border-top: 1px solid var(--border-soft);\n  font-size: 11.5px;\n  color: var(--muted);\n}\n\n.footer-heart {\n  color: var(--rose);\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --ink: #f1eefb;\n  --ink-secondary: #cbd5e1;\n  --muted: #a6b2c6;\n  --purple: #c4b5fd;\n  --purple-dark: #a78bfa;\n  --purple-light: #302447;\n  --purple-glow: rgba(167, 139, 250, 0.18);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: #3b2d19;\n  --emerald: #6ee7b7;\n  --emerald-light: #173a32;\n  --rose: #fda4af;\n  --rose-light: #422435;\n  --paper: #211d30;\n  --card-bg: #211d30;\n  --bg-canvas: #14111f;\n  --border-soft: #40364f;\n  --surface-soft: #292337;\n  --accent-border: #58466e;\n  --amber-border: #72562a;\n  --emerald-border: #2c6754;\n  --rose-border: #754052;\n  --ion-background-color-rgb: 20, 17, 31;\n  --ion-text-color-rgb: 241, 238, 251;\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .learning-header {\n  background: rgba(28, 24, 41, 0.94);\n}\n\n:host-context(.dark-theme) .learning-footer {\n  background: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-trust-strip, :host-context(.dark-theme) .qa-item-badge {\n  background: rgba(33, 29, 48, 0.94);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .qa-trust-divider {\n  background: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-breadcrumb-sep {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) .cart-badge {\n  border-color: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-card, :host-context(.dark-theme) .qa-filter-box, :host-context(.dark-theme) .qa-card-item, :host-context(.dark-theme) .ask-form-card,\n:host-context(.dark-theme) .question-stream-row, :host-context(.dark-theme) .main-question-card, :host-context(.dark-theme) .reply-card, :host-context(.dark-theme) .qa-empty-state {\n  background: var(--card-bg);\n  border-color: var(--border-soft);\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);\n}\n\n:host-context(.dark-theme) .qa-card-item:hover, :host-context(.dark-theme) .question-stream-row:hover {\n  border-color: var(--purple);\n}\n\n:host-context(.dark-theme) .qa-card-media, :host-context(.dark-theme) .qa-segments-wrap {\n  background: var(--surface-soft);\n}\n\n:host-context(.dark-theme) .qa-segment-pill.selected {\n  background: var(--paper);\n}\n\n:host-context(.dark-theme) .qa-card-meta, :host-context(.dark-theme) .question-author-strip, :host-context(.dark-theme) .reply-header {\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-hero {\n  background: linear-gradient(180deg, #292039 0%, #1d182a 65%, var(--bg-canvas) 100%);\n}\n\n:host-context(.dark-theme) .store-mode .qa-hero {\n  background: linear-gradient(180deg, #30251c 0%, #211b22 65%, var(--bg-canvas) 100%);\n}\n\n:host-context(.dark-theme) .qa-eyebrow {\n  color: var(--purple);\n  background: var(--purple-light);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .store-mode .qa-eyebrow {\n  color: var(--amber-dark);\n  background: var(--amber-light);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .store-mode .qa-highlight {\n  color: var(--amber-dark);\n}\n\n:host-context(.dark-theme) .qa-chip {\n  background: var(--emerald-light);\n  color: var(--emerald);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .qa-chip ion-icon {\n  color: var(--emerald);\n}\n\n:host-context(.dark-theme) .current-target-card, :host-context(.dark-theme) .notice-cta-card {\n  background: linear-gradient(135deg, var(--paper), var(--purple-light));\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .target-avatar-wrap {\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .icon-button, :host-context(.dark-theme) .menu-toggle, :host-context(.dark-theme) .login-button, :host-context(.dark-theme) .footer-domain-badge, :host-context(.dark-theme) .q-row-arrow {\n  background: var(--purple-light);\n  border-color: var(--accent-border);\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) .icon-button:hover {\n  background: var(--surface-soft);\n}\n\n:host-context(.dark-theme) .menu-toggle:hover, :host-context(.dark-theme) .login-button:hover, :host-context(.dark-theme) .question-stream-row:hover .q-row-arrow {\n  background: #7c3aed;\n  color: #fff;\n}\n\n:host-context(.dark-theme) .search-input-group, :host-context(.dark-theme) .button-secondary, :host-context(.dark-theme) .qa-page-btn {\n  background: var(--paper);\n  border-color: var(--accent-border);\n}\n\n:host-context(.dark-theme) .button-secondary:hover:not(:disabled), :host-context(.dark-theme) .qa-page-btn:hover:not(:disabled) {\n  background: var(--purple-light);\n}\n\n:host-context(.dark-theme) .store-mode .button-secondary {\n  color: var(--amber-dark);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .qa-page-btn.active, :host-context(.dark-theme) .qa-page-btn.active:hover:not(:disabled) {\n  background: linear-gradient(135deg, #7c3aed, #6d28d9);\n  border-color: #7c3aed;\n  color: #fff;\n}\n\n:host-context(.dark-theme) .store-mode .button-primary {\n  color: #291b05;\n}\n\n:host-context(.dark-theme) .button-danger {\n  background: var(--rose-light);\n  color: var(--rose);\n  border-color: var(--rose-border);\n}\n\n:host-context(.dark-theme) .button-danger:hover {\n  background: #583044;\n  color: #fecdd3;\n}\n\n:host-context(.dark-theme) .qa-search-field, :host-context(.dark-theme) .form-control, :host-context(.dark-theme) .private-toggle-box, :host-context(.dark-theme) .trust-pill {\n  background: var(--surface-soft);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .qa-search-field:focus-within, :host-context(.dark-theme) .form-control:focus {\n  background: var(--paper);\n  border-color: var(--purple);\n  box-shadow: 0 0 0 3px var(--purple-glow);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--muted);\n  opacity: 1;\n}\n\n:host-context(.dark-theme) .general-qa-banner {\n  background: linear-gradient(135deg, #322818, var(--amber-light));\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .general-qa-icon, :host-context(.dark-theme) .guideline-badge, :host-context(.dark-theme) .best-badge {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  border-color: var(--amber-border);\n}\n\n:host-context(.dark-theme) .general-qa-text b, :host-context(.dark-theme) .general-qa-text p, :host-context(.dark-theme) .guideline-badge ion-icon {\n  color: #fde68a;\n}\n\n:host-context(.dark-theme) .status-pill.active, :host-context(.dark-theme) .teacher-badge {\n  background: var(--emerald-light);\n  color: var(--emerald);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .status-pill.rested {\n  color: var(--rose);\n  border-color: var(--rose-border);\n}\n\n:host-context(.dark-theme) .status-pill.count, :host-context(.dark-theme) .closed-banner {\n  background: var(--surface-soft);\n  color: var(--ink-secondary);\n  border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) .reply-card.teacher-reply {\n  background: linear-gradient(180deg, var(--paper), #1c302b);\n  border-color: var(--emerald-border);\n}\n\n:host-context(.dark-theme) .reply-card.best-reply {\n  background: linear-gradient(180deg, var(--paper), #30291e);\n  border-color: var(--amber-border);\n}\n\n/* Responsive adjustments */\n\n@media (max-width: 900px) {\n  .footer-top {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .qa-trust-strip {\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  .nav-shell {\n    padding: 10px 16px;\n    min-height: 66px;\n  }\n\n  .brand-titles b {\n    font-size: 18px;\n  }\n\n  .brand-titles small {\n    font-size: 9px;\n  }\n\n  .qa-card {\n    padding: 16px;\n    border-radius: 18px;\n  }\n\n  .qa-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .current-target-card {\n    padding: 16px;\n  }\n\n  .current-target-info {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n:host {\n  --purple: #d97706;\n  --purple-dark: #b45309;\n  --purple-light: #fef3c7;\n  --purple-glow: rgba(217, 119, 6, 0.22);\n}\n\n:host-context(.dark-theme) {\n  --purple: #fcd34d;\n  --purple-dark: #fbbf24;\n  --purple-light: #3b2d19;\n  --purple-glow: rgba(251, 191, 36, 0.18);\n  --accent-border: #72562a;\n}\n\n.over-hidden {\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  white-space: nowrap;\n}\n\n.white-space {\n  white-space: normal !important;\n}\n\n.link-success:hover {\n  color: #10b981;\n}\n\n.description {\n  white-space: pre-wrap;\n  font-size: 15px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfcXVlc3Rpb25zLXRoZW1lLnNjc3MiLCJwcm9kdWN0LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBFQUFBO0FDQUY7O0FER0E7RUFBSSxzQkFBQTtBQ0NKOztBREFBO0VBQUksY0FBQTtFQUFnQixxQkFBQTtBQ0twQjs7QURKQTtFQUEwQixhQUFBO0FDUTFCOztBRFBBO0VBQVMsZUFBQTtFQUFpQixTQUFBO0VBQVcsdUJBQUE7QUNhckM7O0FEWkE7RUFBWSx3Q0FBQTtBQ2dCWjs7QURmQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2tCRjs7QURoQkE7RUFBd0MsYUFBQTtFQUFjLG1CQUFBO0FDcUJ0RDs7QURwQkE7RUFBVyxvQkFBQTtFQUFzQixjQUFBO0FDeUJqQzs7QUR4QkE7RUFBb0IsU0FBQTtFQUFXLGNBQUE7QUM2Qi9COztBRDNCQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUM4QkY7O0FEM0JBOzsrRUFBQTs7QUFHQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQzhCRjs7QUQ1QkE7RUFBMEIsYUFBQTtBQ2dDMUI7O0FEOUJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFB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LCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0taW5rOiAjMWUxYjRiO1xuICAtLWluay1zZWNvbmRhcnk6ICM0NzU1Njk7XG4gIC0tbXV0ZWQ6ICM2NDc0OGI7XG4gIC0tcHVycGxlOiAjNmQyOGQ5O1xuICAtLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xuICAtLXB1cnBsZS1saWdodDogI2VkZTlmZTtcbiAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxMDksIDQwLCAyMTcsIDAuMjIpO1xuICAtLWFtYmVyOiAjZjU5ZTBiO1xuICAtLWFtYmVyLWRhcms6ICNkOTc3MDY7XG4gIC0tYW1iZXItbGlnaHQ6ICNmZWYzYzc7XG4gIC0tZW1lcmFsZDogIzEwYjk4MTtcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjZDFmYWU1O1xuICAtLXJvc2U6ICNmNDNmNWU7XG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcbiAgLS1wYXBlcjogI2ZmZmZmZjtcbiAgLS1iZy1jYW52YXM6ICNmY2ZiZmU7XG4gIC0tYm9yZGVyLXNvZnQ6ICNlZGU5ZjY7XG4gIC0tY2FyZC1iZzogI2ZmZmZmZjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgXCJTaGFibmFtLU1lZGl1bVwiLCBcIlZhemlyXCIsIHNhbnMtc2VyaWYpO1xufVxuXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuYSB7IGNvbG9yOiBpbmhlcml0OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbmJ1dHRvbiwgaW5wdXQsIHRleHRhcmVhIHsgZm9udDogaW5oZXJpdDsgfVxuYnV0dG9uIHsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5idXR0b24sIGEgeyAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5idXR0b246Zm9jdXMtdmlzaWJsZSwgYTpmb2N1cy12aXNpYmxlLCBpbnB1dDpmb2N1cy12aXNpYmxlLCB0ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkICNhYzg4ZjI7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmJ1dHRvbjpkaXNhYmxlZCwgW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0geyBvcGFjaXR5OiAuNTU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbmlvbi1pY29uIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IGZsZXgtc2hyaW5rOiAwOyB9XG5oMSwgaDIsIGgzLCBoNCwgcCB7IG1hcmdpbjogMDsgY29sb3I6IGluaGVyaXQ7IH1cblxuLnFhLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBtaW4oMTIwMHB4LCBjYWxjKDEwMCUgLSAzNnB4KSk7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBIZWFkZXIgJiBOYXZpZ2F0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmxlYXJuaW5nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogNTA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmxlYXJuaW5nLWhlYWRlcjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XG5cbi5uYXYtc2hlbGwge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBtaW4taGVpZ2h0OiA3NnB4O1xufVxuXG4uYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5icmFuZC1sb2dvLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJyYW5kLWxvZ28td3JhcCBpbWcgeyBvYmplY3QtZml0OiBjb250YWluOyB9XG4uYnJhbmQtc3BhcmtsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBpbnNldC1pbmxpbmUtZW5kOiAtNnB4O1xuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYnJhbmQtdGl0bGVzIGIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uYnJhbmQtdGl0bGVzIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWFpbi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuLm1haW4tbmF2IGEsIC5uYXYtbGluay1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5tYWluLW5hdiBhOmhvdmVyLCAubmF2LWxpbmstYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG59XG4ubWFpbi1uYXYgYS5hY3RpdmUtbmF2LCAubmF2LWxpbmstYnRuLmFjdGl2ZS1uYXYge1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm5hdi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNmYxZmQ7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTlkNWZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMsIHRyYW5zZm9ybSAuMTVzLCBjb2xvciAuMnM7XG59XG4uaWNvbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRlOWZlO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uY2FydCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmNhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgaW5zZXQtaW5saW5lLWVuZDogLTRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7XG4gIGNvbG9yOiAjM2IyODAyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZDBmNztcbiAgcGFkZGluZzogOHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4ubG9naW4tYnV0dG9uIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyB9XG5cbi5tZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkNmZlO1xufVxuLm1lbnUtdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDRweCAyNHB4IDE2cHg7XG59XG4uaGVhZGVyLXNlYXJjaCBsYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDExcHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuLnNlYXJjaC1pbnB1dC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDFmNTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpO1xufVxuLnNlYXJjaC1pbnB1dC1pY29uIHsgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuLnNlYXJjaC1pbnB1dC1ncm91cCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlcm8gU2VjdGlvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xYS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpO1xuICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICBmbGV4OiAxO1xufVxuXG4ucWEtaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y3ZjJmZiAwJSwgI2ZhZjhmZSA2NSUsICNmY2ZiZmUgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctYmxvY2s6IDMycHggMzZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbn1cbi5zdG9yZS1tb2RlIC5xYS1oZXJvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZjlmMCAwJSwgI2ZmZmNmOCA2NSUsICNmY2ZiZmUgMTAwJSk7XG59XG5cbi5xYS1oZXJvLWdsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEyMHB4O1xuICBpbnNldC1pbmxpbmUtc3RhcnQ6IDglO1xuICB3aWR0aDogNDQwcHg7XG4gIGhlaWdodDogNDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjIyKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA3MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zdG9yZS1tb2RlIC5xYS1oZXJvLWdsb3cge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1MSwgMTkxLCAzNiwgMC4yMikgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzAlKTtcbn1cblxuLnFhLWhlcm8taW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnFhLWV5ZWJyb3ctcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG4ucWEtZXllYnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgY29sb3I6ICM1YjIxYjY7XG4gIGJhY2tncm91bmQ6ICNlZGU2ZmM7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQyZjc7XG59XG4uc3RvcmUtbW9kZSAucWEtZXllYnJvdyB7XG4gIGNvbG9yOiAjOTI0MDBlO1xuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICBib3JkZXItY29sb3I6ICNmZGU2OGE7XG59XG4ucWEtc3BhcmtsZSB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ucWEtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogI2VlZmRmNTtcbiAgY29sb3I6ICMwNjVmNDY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhN2YzZDA7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ucWEtY2hpcCBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMxMGI5ODE7IH1cblxuLnFhLWhlcm8gaDEge1xuICBmb250LXNpemU6IGNsYW1wKDI0cHgsIDMuMnZ3LCAzNnB4KTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBtYXJnaW46IDA7XG59XG4ucWEtaGlnaGxpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB6LWluZGV4OiAxO1xufVxuLnN0b3JlLW1vZGUgLnFhLWhpZ2hsaWdodCB7IGNvbG9yOiAjYjQ1MzA5OyB9XG4ucWEtaGlnaGxpZ2h0IHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHZhcigtLWFtYmVyKTtcbiAgc3Ryb2tlLXdpZHRoOiA0LjU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5xYS1oZXJvLWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1heC13aWR0aDogNzYwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogVHJ1c3Qgc3RhdHMgc3RyaXAgKi9cbi5xYS10cnVzdC1zdHJpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHBhZGRpbmc6IDEycHggMThweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZGZmODtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5xYS10cnVzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG59XG4ucWEtdHJ1c3QtaXRlbSBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTdweDsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cbi5zdG9yZS1tb2RlIC5xYS10cnVzdC1pdGVtIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspOyB9XG4ucWEtdHJ1c3QtZGl2aWRlciB7IHdpZHRoOiAxcHg7IGhlaWdodDogMThweDsgYmFja2dyb3VuZDogI2UyZDdmMzsgfVxuXG4vKiBJbnRlcmFjdGl2ZSBCcmVhZGNydW1icyAqL1xuLnFhLWJyZWFkY3J1bWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ucWEtYnJlYWRjcnVtYnMgYSB7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XG59XG4ucWEtYnJlYWRjcnVtYnMgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4ucWEtYnJlYWRjcnVtYi1zZXAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjY2JkNWUxOyB9XG4ucWEtYnJlYWRjcnVtYi1jdXJyZW50IHsgY29sb3I6IHZhcigtLWluayk7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFNlY3Rpb24gTGF5b3V0ICYgQ2FyZHNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtbWFpbi1zZWN0aW9uIHtcbiAgcGFkZGluZy1ibG9jazogMzZweCA1NnB4O1xufVxuXG4ucWEtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA0KTtcbiAgdHJhbnNpdGlvbjogYWxsIC4yNHMgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5xYS1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA3KTtcbn1cblxuLnFhLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XG59XG4ucWEtY2FyZC10aXRsZS1ncm91cCBoMiwgLnFhLWNhcmQtdGl0bGUtZ3JvdXAgaDMge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5xYS1jYXJkLXRpdGxlLWdyb3VwIHAge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4vKiBQcmltYXJ5IEJ1dHRvbiAqL1xuLmJ1dHRvbi1wcmltYXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCAwJSwgIzZkMjhkOSAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjNWIyMWI2O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHZhcigtLXB1cnBsZS1nbG93KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xufVxuLnN0b3JlLW1vZGUgLmJ1dHRvbi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiAwJSwgI2Q5NzcwNiAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjYjQ1MzA5O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjE3LCAxMTksIDYsIDAuMjgpO1xufVxuLmJ1dHRvbi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyMnB4IHZhcigtLXB1cnBsZS1nbG93KTtcbn1cbi5idXR0b24tcHJpbWFyeS5zbWFsbCB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5idXR0b24tc2Vjb25kYXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDFmNTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5zdG9yZS1tb2RlIC5idXR0b24tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmVkN2FhO1xuICBjb2xvcjogI2I0NTMwOTtcbn1cbi5idXR0b24tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJ1dHRvbi1zZWNvbmRhcnkuc21hbGwge1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiA3cHggMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuXG4uYnV0dG9uLWRhbmdlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNkYzI2MjY7XG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xufVxuLmJ1dHRvbi1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmNhNWE1O1xuICBjb2xvcjogIzk5MWIxYjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEZpbHRlciAmIFNlYXJjaCBCb3hcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtZmlsdGVyLWJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMThweCAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDMpO1xufVxuLnFhLWZpbHRlci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnFhLXNlYXJjaC1maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZhZjhmZDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTlkZmY3O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cbi5xYS1zZWFyY2gtZmllbGQ6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMSk7XG59XG4ucWEtc2VhcmNoLWZpZWxkIGlvbi1pY29uIHsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuLnFhLXNlYXJjaC1maWVsZCBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBmb250LXNpemU6IDEzLjVweDtcbn1cbi5xYS1jbGVhci1idG4ge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xYS1jbGVhci1idG46aG92ZXIgeyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLyogR2VuZXJhbCBRdWVzdGlvbnMgSGVybyBCYW5uZXIgKENvdXJzZSAyNSkgKi9cbi5nZW5lcmFsLXFhLWJhbm5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZWZjZTggMCUsICNmZmZiZWIgNTAlLCAjZmVmM2M3IDEwMCUpO1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCAjZmRlMDQ3O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyMzQsIDE3OSwgOCwgMC4wOCk7XG59XG4uZ2VuZXJhbC1xYS1jb3B5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuLmdlbmVyYWwtcWEtaWNvbiB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZWYwOGE7XG4gIGNvbG9yOiAjYTE2MjA3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5nZW5lcmFsLXFhLXRleHQgYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODU0ZDBlO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uZ2VuZXJhbC1xYS10ZXh0IHAge1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgY29sb3I6ICM3MTNmMTI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDb3Vyc2UgLyBQcm9kdWN0IEdyaWQgQ2FyZHNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucWEtY2FyZC1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDQpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI0cyBlYXNlLCBib3gtc2hhZG93IC4yNHMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnFhLWNhcmQtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDMycHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDkpO1xuICBib3JkZXItY29sb3I6ICNkY2QwZjc7XG59XG5cbi5xYS1jYXJkLW1lZGlhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xuICBiYWNrZ3JvdW5kOiAjZjRlZGY5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnFhLWNhcmQtbWVkaWEgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzVzIGVhc2U7XG59XG4ucWEtY2FyZC1pdGVtOmhvdmVyIC5xYS1jYXJkLW1lZGlhIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG59XG4ucWEtaXRlbS1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBpbnNldC1pbmxpbmUtc3RhcnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTlkNWZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cblxuLnFhLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGdhcDogMTJweDtcbn1cbi5xYS1jYXJkLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xYS1jYXJkLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2VkZThmNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuLnFhLWFjdGlvbi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xufVxuLnFhLWNhcmQtaXRlbTpob3ZlciAucWEtYWN0aW9uLWxpbmsgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBTZWxlY3RlZCBUYXJnZXQgQmFubmVyIChDdXJyZW50IENvdXJzZS9Qcm9kdWN0KVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jdXJyZW50LXRhcmdldC1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2ZhZjdmZiAxMDAlKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJkNGZhO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAyMnB4IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpO1xufVxuLmN1cnJlbnQtdGFyZ2V0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG59XG4udGFyZ2V0LWF2YXRhci13cmFwIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDFmNTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4udGFyZ2V0LWF2YXRhci13cmFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnRhcmdldC10ZXh0LXdyYXAgc3Bhbi50YXJnZXQta2lja2VyIHtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnRhcmdldC10ZXh0LXdyYXAgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4udGFyZ2V0LWJhZGdlcy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xufVxuLnN0YXR1cy1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnN0YXR1cy1waWxsLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpOyBjb2xvcjogIzA2NWY0NjsgYm9yZGVyOiAxcHggc29saWQgI2E3ZjNkMDsgfVxuLnN0YXR1cy1waWxsLnJlc3RlZCB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpOyBjb2xvcjogI2JlMTIzYzsgYm9yZGVyOiAxcHggc29saWQgI2ZlY2RkMzsgfVxuLnN0YXR1cy1waWxsLmNvdW50IHsgYmFja2dyb3VuZDogI2YxZjVmOTsgY29sb3I6ICM0NzU1Njk7IH1cblxuLnRhcmdldC1hY3Rpb25zLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBTZWdtZW50IFRhYnMgKFB1YmxpYyB2cyBIaWRkZW4pXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnFhLXNlZ21lbnRzLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMWVjZjk7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnFhLXNlZ21lbnQtcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOXB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5xYS1zZWdtZW50LXBpbGwuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xMik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ucWEtc2VnbWVudC1waWxsIGlvbi1pY29uIHsgZm9udC1zaXplOiAxN3B4OyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBc2sgUXVlc3Rpb24gJiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5hc2stZm9ybS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTdkZGY5O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA0KTtcbn1cbi5hc2stZm9ybS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xufVxuLmFzay1mb3JtLWljb24ge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5hc2stZm9ybS1oZWFkZXIgaDMgeyBmb250LXNpemU6IDE3cHg7IGZvbnQtd2VpZ2h0OiA5MDA7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4uYXNrLWZvcm0taGVhZGVyIHAgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IG1hcmdpbi10b3A6IDNweDsgfVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHNwYW4ucmVxIHsgY29sb3I6IHZhcigtLXJvc2UpOyBtYXJnaW4taW5saW5lLXN0YXJ0OiAycHg7IH1cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJkN2YzO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgYmFja2dyb3VuZDogI2ZkZmNmZjtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMSk7XG59XG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wgeyByZXNpemU6IHZlcnRpY2FsOyBtaW4taGVpZ2h0OiAxMTBweDsgbGluZS1oZWlnaHQ6IDEuODsgfVxuXG4ucHJpdmF0ZS10b2dnbGUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmOGZkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlNGZhO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcml2YXRlLXRvZ2dsZS1ib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJpdmF0ZS10b2dnbGUtdGV4dCBiIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6IHZhcigtLWluayk7IH1cbi5wcml2YXRlLXRvZ2dsZS10ZXh0IHNtYWxsIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWFyZ2luLXRvcDogMnB4OyB9XG5cbi5ndWlkZWxpbmUtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmVmY2U4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVmMDhhO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NTRkMGU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZ3VpZGVsaW5lLWJhZGdlIGlvbi1pY29uIHsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogI2NhOGEwNDsgbWFyZ2luLXRvcDogMnB4OyB9XG5cbi8qIE5vbi1lbnJvbGxlZCAmIEd1ZXN0IENUQSBCb3ggKi9cbi5ub3RpY2UtY3RhLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJmOWZmIDAlLCAjZjRlZWZhIDEwMCUpO1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCAjZDhiNGZlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cbi5ub3RpY2UtY3RhLWljb24ge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5ub3RpY2UtY3RhLWNhcmQgaDQgeyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4ubm90aWNlLWN0YS1jYXJkIHAgeyBmb250LXNpemU6IDEyLjVweDsgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpOyBtYXgtd2lkdGg6IDQ4MHB4OyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBRdWVzdGlvbiBTdHJlYW0gUm93c1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5xdWVzdGlvbi1zdHJlYW0tcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnF1ZXN0aW9uLXN0cmVhbS1yb3c6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkMWJiZjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XG59XG4ucS1yb3ctbWFpbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG59XG4ucS1yb3ctbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cbi5xLXVzZXItcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucS11c2VyLXBpbGwgaW9uLWljb24geyBmb250LXNpemU6IDE1cHg7IH1cbi5xLXJvdy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycztcbn1cbi5xdWVzdGlvbi1zdHJlYW0tcm93OmhvdmVyIC5xLXJvdy10aXRsZSB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG4ucS1yb3ctYXJyb3cge1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmM2ZkO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4ucXVlc3Rpb24tc3RyZWFtLXJvdzpob3ZlciAucS1yb3ctYXJyb3cge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUXVlc3Rpb24gRGV0YWlsIFZpZXcgJiBEaXNjdXNzaW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1haW4tcXVlc3Rpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2RlZDNmNTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNSk7XG59XG4ucXVlc3Rpb24tYXV0aG9yLXN0cmlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2U4ZGVmNjtcbn1cbi5hdXRob3ItcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbi5hdXRob3ItYXZhdGFyIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uYXV0aG9yLWF2YXRhci50ZWFjaGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZC1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkKTtcbn1cbi5hdXRob3ItaW5mbyBiIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTMuNXB4OyBjb2xvcjogdmFyKC0taW5rKTsgfVxuLmF1dGhvci1pbmZvIHNtYWxsIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWFyZ2luLXRvcDogMnB4OyB9XG5cbi5tYWluLXF1ZXN0aW9uLWNhcmQgaDIucS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLnEtYm9keSB7XG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLyogRGlzY3Vzc2lvbiAvIFJlcGxpZXMgbGlzdCAqL1xuLnJlcGxpZXMtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4ucmVwbGllcy1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucmVwbGllcy1oZWFkaW5nIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4ucmVwbGllcy1jb3VudC1waWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZXBseS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbn1cbi5yZXBseS1jYXJkLnRlYWNoZXItcmVwbHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmNmZWZlIDAlLCAjZjZmYmY5IDEwMCUpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNhN2YzZDA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMDcpO1xufVxuLnJlcGx5LWNhcmQuYmVzdC1yZXBseSB7XG4gIGJvcmRlci1jb2xvcjogI2ZkZTA0NztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZlZmVmZSAwJSwgI2ZlZmNmMyAxMDAlKTtcbn1cblxuLnJlcGx5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZWNmOTtcbn1cbi50ZWFjaGVyLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTtcbiAgY29sb3I6ICMwNjVmNDY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZWU3Yjc7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uYmVzdC1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZlZjA4YTtcbiAgY29sb3I6ICM4NTRkMGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGUwNDc7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5yZXBseS1ib2R5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLyogUXVlc3Rpb24gY2xvc2VkIGJhbm5lciAqL1xuLmNsb3NlZC1iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFBhZ2luYXRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucWEtcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNnB4O1xuICBtYXJnaW4tYmxvY2s6IDI4cHggMjBweDtcbn1cbi5xYS1wYWdlLWJ0biB7XG4gIG1pbi13aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdkZGY5O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xufVxuLnFhLXBhZ2UtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbn1cbi5xYS1wYWdlLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkIDAlLCAjNmQyOGQ5IDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNWIyMWI2O1xuICBmb250LXdlaWdodDogODAwO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHZhcigtLXB1cnBsZS1nbG93KTtcbn1cbi5xYS1wYWdlLWVsbGlwc2lzIHtcbiAgcGFkZGluZzogMCA2cHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRW1wdHkgU3RhdGVzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnFhLWVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggZGFzaGVkICNkZWQ0ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIG1hcmdpbi1ibG9jazogMjBweDtcbn1cbi5xYS1lbXB0eS1pY29uIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLnFhLWVtcHR5LXN0YXRlIGgzIHsgZm9udC1zaXplOiAxN3B4OyBmb250LXdlaWdodDogODAwOyBjb2xvcjogdmFyKC0taW5rKTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4ucWEtZW1wdHktc3RhdGUgcCB7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6IHZhcigtLW11dGVkKTsgbWF4LXdpZHRoOiA0NDBweDsgbWFyZ2luOiBhdXRvOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBGb290ZXJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubGVhcm5pbmctZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uZm9vdGVyLXRvcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4zZnIgMWZyIDEuMmZyO1xuICBnYXA6IDM2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLmZvb3Rlci1kZXNjIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1heC13aWR0aDogMzgwcHg7XG59XG4uZm9vdGVyLWRvbWFpbi1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjNmZjtcbiAgY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ2ZmU7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cbi5mb290ZXItbGlua3MtY29sIGg0LCAuZm9vdGVyLXRydXN0LWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBhIHtcbiAgZm9udC1zaXplOiAxMi41cHg7XG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9vdGVyLWxpbmtzLWNvbCBhOmhvdmVyIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuLnRydXN0LWNhcmRzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi50cnVzdC1waWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmOGZkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlNGZhO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWluayk7XG59XG4udHJ1c3QtcGlsbCBpb24taWNvbiB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuLmZvb3Rlci1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xuICBmb250LXNpemU6IDExLjVweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cbi5mb290ZXItaGVhcnQgeyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cblxuLy8gTG9jYWwgZGFyayBwYWxldHRlIGFuZCBzdXJmYWNlcyBmb3IgYm90aCBjb3Vyc2UgYW5kIHByb2R1Y3QgZGlzY3Vzc2lvbnMuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgLS1pbms6ICNmMWVlZmI7XG4gIC0taW5rLXNlY29uZGFyeTogI2NiZDVlMTtcbiAgLS1tdXRlZDogI2E2YjJjNjtcbiAgLS1wdXJwbGU6ICNjNGI1ZmQ7XG4gIC0tcHVycGxlLWRhcms6ICNhNzhiZmE7XG4gIC0tcHVycGxlLWxpZ2h0OiAjMzAyNDQ3O1xuICAtLXB1cnBsZS1nbG93OiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMTgpO1xuICAtLWFtYmVyOiAjZmJiZjI0O1xuICAtLWFtYmVyLWRhcms6ICNmY2QzNGQ7XG4gIC0tYW1iZXItbGlnaHQ6ICMzYjJkMTk7XG4gIC0tZW1lcmFsZDogIzZlZTdiNztcbiAgLS1lbWVyYWxkLWxpZ2h0OiAjMTczYTMyO1xuICAtLXJvc2U6ICNmZGE0YWY7XG4gIC0tcm9zZS1saWdodDogIzQyMjQzNTtcbiAgLS1wYXBlcjogIzIxMWQzMDtcbiAgLS1jYXJkLWJnOiAjMjExZDMwO1xuICAtLWJnLWNhbnZhczogIzE0MTExZjtcbiAgLS1ib3JkZXItc29mdDogIzQwMzY0ZjtcbiAgLS1zdXJmYWNlLXNvZnQ6ICMyOTIzMzc7XG4gIC0tYWNjZW50LWJvcmRlcjogIzU4NDY2ZTtcbiAgLS1hbWJlci1ib3JkZXI6ICM3MjU2MmE7XG4gIC0tZW1lcmFsZC1ib3JkZXI6ICMyYzY3NTQ7XG4gIC0tcm9zZS1ib3JkZXI6ICM3NTQwNTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAyMCwgMTcsIDMxO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjQxLCAyMzgsIDI1MTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuXG4gIC5sZWFybmluZy1oZWFkZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyNCwgNDEsIDAuOTQpOyB9XG4gIC5sZWFybmluZy1mb290ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IH1cbiAgLnFhLXRydXN0LXN0cmlwLCAucWEtaXRlbS1iYWRnZSB7IGJhY2tncm91bmQ6IHJnYmEoMzMsIDI5LCA0OCwgMC45NCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJvcmRlcik7IH1cbiAgLnFhLXRydXN0LWRpdmlkZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItc29mdCk7IH1cbiAgLnFhLWJyZWFkY3J1bWItc2VwIHsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuICAuY2FydC1iYWRnZSB7IGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXIpOyB9XG5cbiAgLnFhLWNhcmQsIC5xYS1maWx0ZXItYm94LCAucWEtY2FyZC1pdGVtLCAuYXNrLWZvcm0tY2FyZCxcbiAgLnF1ZXN0aW9uLXN0cmVhbS1yb3csIC5tYWluLXF1ZXN0aW9uLWNhcmQsIC5yZXBseS1jYXJkLCAucWEtZW1wdHktc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgfVxuICAucWEtY2FyZC1pdGVtOmhvdmVyLCAucXVlc3Rpb24tc3RyZWFtLXJvdzpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuICAucWEtY2FyZC1tZWRpYSwgLnFhLXNlZ21lbnRzLXdyYXAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNvZnQpOyB9XG4gIC5xYS1zZWdtZW50LXBpbGwuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IH1cbiAgLnFhLWNhcmQtbWV0YSwgLnF1ZXN0aW9uLWF1dGhvci1zdHJpcCwgLnJlcGx5LWhlYWRlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpOyB9XG5cbiAgLnFhLWhlcm8geyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjkyMDM5IDAlLCAjMWQxODJhIDY1JSwgdmFyKC0tYmctY2FudmFzKSAxMDAlKTsgfVxuICAuc3RvcmUtbW9kZSAucWEtaGVybyB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMzMDI1MWMgMCUsICMyMTFiMjIgNjUlLCB2YXIoLS1iZy1jYW52YXMpIDEwMCUpOyB9XG4gIC5xYS1leWVicm93IHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWJvcmRlcik7IH1cbiAgLnN0b3JlLW1vZGUgLnFhLWV5ZWJyb3cgeyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbWJlci1ib3JkZXIpOyB9XG4gIC5zdG9yZS1tb2RlIC5xYS1oaWdobGlnaHQgeyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IH1cbiAgLnFhLWNoaXAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTsgY29sb3I6IHZhcigtLWVtZXJhbGQpOyBib3JkZXItY29sb3I6IHZhcigtLWVtZXJhbGQtYm9yZGVyKTsgfVxuICAucWEtY2hpcCBpb24taWNvbiB7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgfVxuICAuY3VycmVudC10YXJnZXQtY2FyZCwgLm5vdGljZS1jdGEtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcGFwZXIpLCB2YXIoLS1wdXJwbGUtbGlnaHQpKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ib3JkZXIpO1xuICB9XG4gIC50YXJnZXQtYXZhdGFyLXdyYXAgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ib3JkZXIpOyB9XG5cbiAgLmljb24tYnV0dG9uLCAubWVudS10b2dnbGUsIC5sb2dpbi1idXR0b24sIC5mb290ZXItZG9tYWluLWJhZGdlLCAucS1yb3ctYXJyb3cge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgfVxuICAuaWNvbi1idXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNvZnQpOyB9XG4gIC5tZW51LXRvZ2dsZTpob3ZlciwgLmxvZ2luLWJ1dHRvbjpob3ZlciwgLnF1ZXN0aW9uLXN0cmVhbS1yb3c6aG92ZXIgLnEtcm93LWFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjN2MzYWVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zZWFyY2gtaW5wdXQtZ3JvdXAsIC5idXR0b24tc2Vjb25kYXJ5LCAucWEtcGFnZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1ib3JkZXIpO1xuICB9XG4gIC5idXR0b24tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpLCAucWEtcGFnZS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpOyB9XG4gIC5zdG9yZS1tb2RlIC5idXR0b24tc2Vjb25kYXJ5IHsgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspOyBib3JkZXItY29sb3I6IHZhcigtLWFtYmVyLWJvcmRlcik7IH1cbiAgLnFhLXBhZ2UtYnRuLmFjdGl2ZSwgLnFhLXBhZ2UtYnRuLmFjdGl2ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzZkMjhkOSk7XG4gICAgYm9yZGVyLWNvbG9yOiAjN2MzYWVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5zdG9yZS1tb2RlIC5idXR0b24tcHJpbWFyeSB7IGNvbG9yOiAjMjkxYjA1OyB9XG4gIC5idXR0b24tZGFuZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1saWdodCk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1yb3NlLWJvcmRlcik7IH1cbiAgLmJ1dHRvbi1kYW5nZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjNTgzMDQ0OyBjb2xvcjogI2ZlY2RkMzsgfVxuXG4gIC5xYS1zZWFyY2gtZmllbGQsIC5mb3JtLWNvbnRyb2wsIC5wcml2YXRlLXRvZ2dsZS1ib3gsIC50cnVzdC1waWxsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXNvZnQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICB9XG4gIC5xYS1zZWFyY2gtZmllbGQ6Zm9jdXMtd2l0aGluLCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XG4gIH1cbiAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBvcGFjaXR5OiAxOyB9XG5cbiAgLmdlbmVyYWwtcWEtYmFubmVyIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzMyMjgxOCwgdmFyKC0tYW1iZXItbGlnaHQpKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbWJlci1ib3JkZXIpOyB9XG4gIC5nZW5lcmFsLXFhLWljb24sIC5ndWlkZWxpbmUtYmFkZ2UsIC5iZXN0LWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWFtYmVyLWRhcmspO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYW1iZXItYm9yZGVyKTtcbiAgfVxuICAuZ2VuZXJhbC1xYS10ZXh0IGIsIC5nZW5lcmFsLXFhLXRleHQgcCwgLmd1aWRlbGluZS1iYWRnZSBpb24taWNvbiB7IGNvbG9yOiAjZmRlNjhhOyB9XG4gIC5zdGF0dXMtcGlsbC5hY3RpdmUsIC50ZWFjaGVyLWJhZGdlIHsgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZC1saWdodCk7IGNvbG9yOiB2YXIoLS1lbWVyYWxkKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1lbWVyYWxkLWJvcmRlcik7IH1cbiAgLnN0YXR1cy1waWxsLnJlc3RlZCB7IGNvbG9yOiB2YXIoLS1yb3NlKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1yb3NlLWJvcmRlcik7IH1cbiAgLnN0YXR1cy1waWxsLmNvdW50LCAuY2xvc2VkLWJhbm5lciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc29mdCk7IGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7IH1cbiAgLnJlcGx5LWNhcmQudGVhY2hlci1yZXBseSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXBhcGVyKSwgIzFjMzAyYik7IGJvcmRlci1jb2xvcjogdmFyKC0tZW1lcmFsZC1ib3JkZXIpOyB9XG4gIC5yZXBseS1jYXJkLmJlc3QtcmVwbHkgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1wYXBlciksICMzMDI5MWUpOyBib3JkZXItY29sb3I6IHZhcigtLWFtYmVyLWJvcmRlcik7IH1cbn1cblxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5mb290ZXItdG9wIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMjhweDsgfVxuICAubWFpbi1uYXYgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5xYS10cnVzdC1zdHJpcCB7IHdpZHRoOiAxMDAlOyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm5hdi1zaGVsbCB7IHBhZGRpbmc6IDEwcHggMTZweDsgbWluLWhlaWdodDogNjZweDsgfVxuICAuYnJhbmQtdGl0bGVzIGIgeyBmb250LXNpemU6IDE4cHg7IH1cbiAgLmJyYW5kLXRpdGxlcyBzbWFsbCB7IGZvbnQtc2l6ZTogOXB4OyB9XG4gIC5xYS1jYXJkIHsgcGFkZGluZzogMTZweDsgYm9yZGVyLXJhZGl1czogMThweDsgfVxuICAucWEtZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5jdXJyZW50LXRhcmdldC1jYXJkIHsgcGFkZGluZzogMTZweDsgfVxuICAuY3VycmVudC10YXJnZXQtaW5mbyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG59XG4iLCJAaW1wb3J0ICcuLi9xdWVzdGlvbnMtdGhlbWUuc2Nzcyc7XG5cbjpob3N0IHtcbiAgLS1wdXJwbGU6ICNkOTc3MDY7XG4gIC0tcHVycGxlLWRhcms6ICNiNDUzMDk7XG4gIC0tcHVycGxlLWxpZ2h0OiAjZmVmM2M3O1xuICAtLXB1cnBsZS1nbG93OiByZ2JhKDIxNywgMTE5LCA2LCAwLjIyKTtcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAtLXB1cnBsZTogI2ZjZDM0ZDtcbiAgLS1wdXJwbGUtZGFyazogI2ZiYmYyNDtcbiAgLS1wdXJwbGUtbGlnaHQ6ICMzYjJkMTk7XG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMjUxLCAxOTEsIDM2LCAwLjE4KTtcbiAgLS1hY2NlbnQtYm9yZGVyOiAjNzI1NjJhO1xufVxuXG4ub3Zlci1oaWRkZW4ge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ud2hpdGUtc3BhY2Uge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogIzEwYjk4MTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuIl19 */";

/***/ }),

/***/ 34732:
/*!***********************************************************************************************!*\
  !*** ./src/app/view/pages/home/product-questions/product-questions.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.home/product-questions/product-questions\" fallback=\"/\">\n<div page-actions><button\n        type=\"button\"\n        class=\"icon-button search-toggle\"\n        (click)=\"searchOpen = !searchOpen\"\n        [attr.aria-expanded]=\"searchOpen\"\n        aria-controls=\"product-questions-search\"\n        title=\"جستجو در سامانه\"\n      >\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\n      </button>\n</div>\n\n<form id=\"product-questions-search\" class=\"header-search\" *ngIf=\"searchOpen\" (ngSubmit)=\"onSiteSearch()\">\n    <label for=\"catalog-product-query\">جستجو در محصولات و کاربرگ‌های اول آموز</label>\n    <div class=\"search-input-group\">\n      <ion-icon name=\"search-outline\" class=\"search-input-icon\" aria-hidden=\"true\"></ion-icon>\n      <input\n        id=\"catalog-product-query\"\n        name=\"query\"\n        [(ngModel)]=\"siteSearchQuery\"\n        placeholder=\"عنوان محصول، کاربرگ یا ابزار مورد نظر خود را بنویسید...\"\n        type=\"search\"\n        autofocus\n      />\n      <button class=\"button-primary small\" type=\"submit\">جستجو</button>\n    </div>\n  </form>\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"qa-content\" [attr.dir]=\"language.direction\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Hero Section & Store Pedagogical Banner -->\n  <section class=\"qa-hero store-mode\">\n    <div class=\"qa-hero-glow\" aria-hidden=\"true\"></div>\n    <div class=\"qa-container qa-hero-inner\">\n      <div class=\"qa-eyebrow-row\">\n        <span class=\"qa-eyebrow\">\n          <span class=\"qa-sparkle\">✦</span>\n          تالار پرسش و پاسخ محصولات و کاربرگ‌های آموزشی\n        </span>\n        <span class=\"qa-chip\">\n          <ion-icon name=\"checkmark-circle\" aria-hidden=\"true\"></ion-icon>\n          پشتیبانی کاربرگ‌ها، ابزارهای دست‌ورزی و ملزومات کلاسی\n        </span>\n      </div>\n\n      <!-- Hero Title depending on navigation state -->\n      <h1 *ngIf=\"!isCourseSelected\">\n        رفع ابهام و راهنمای استفاده از محصولات آموزشی:<br />\n        <span class=\"qa-highlight\">\n          پاسخگویی به سوالات کاربرگ‌ها، بسته‌های تدریس و ابزارهای کلاسی\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <h1 *ngIf=\"isCourseSelected && !isQuestionSelected && !isHiddenQuestionSelected\">\n        پرسش و پاسخ‌های محصول:<br />\n        <span class=\"qa-highlight\">\n          {{ filteredQuestions?.productName || 'محصول آموزشی' }}\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <h1 *ngIf=\"isCourseSelected && (isQuestionSelected || isHiddenQuestionSelected)\">\n        گفتگو پیرامون محصول:<br />\n        <span class=\"qa-highlight\">\n          {{ (selectedQuestions && selectedQuestions.length > 0) ? selectedQuestions[0].courseName : ((selectedHiddenQuestions && selectedHiddenQuestions.length > 0) ? selectedHiddenQuestions[0].courseName : (filteredQuestions?.productName || 'محصول آموزشی')) }}\n          <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\n            <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\n          </svg>\n        </span>\n      </h1>\n\n      <p class=\"qa-hero-desc\">\n        در این تالار می‌توانید درباره شیوه استفاده، نحوه چاپ، تطابق با کتاب‌های درسی پایه اول تا ششم و محتوای فایل‌های آموزشی سوال بپرسید تا توسط طراحان محتوا و آموزگاران پاسخ داده شود.\n      </p>\n\n      <!-- Trust Strip -->\n      <div class=\"qa-trust-strip\">\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"cube-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>کاربرگ‌ها و ابزارهای استاندارد دبستان</span>\n        </div>\n        <div class=\"qa-trust-divider\" aria-hidden=\"true\"></div>\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"chatbubbles-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>پاسخگویی مستقیم طراحان و فروشندگان</span>\n        </div>\n        <div class=\"qa-trust-divider\" aria-hidden=\"true\"></div>\n        <div class=\"qa-trust-item\">\n          <ion-icon name=\"shield-checkmark-outline\" aria-hidden=\"true\"></ion-icon>\n          <span>تضمین کیفیت فایل و چاپ‌پذیری بالا</span>\n        </div>\n      </div>\n\n      <!-- Interactive Breadcrumbs -->\n      <nav class=\"qa-breadcrumbs\" aria-label=\"مسیر راهنما\">\n        <a [routerLink]=\"url('/Home')\">خانه</a>\n        <span class=\"qa-breadcrumb-sep\">/</span>\n        <a [routerLink]=\"url('/Product')\">فروشگاه</a>\n        <span class=\"qa-breadcrumb-sep\">/</span>\n        <a [routerLink]=\"url('/ProductQuestions')\" (click)=\"isCourseSelected = false; isQuestionSelected = false; isHiddenQuestionSelected = false\">تالار سوالات محصولات</a>\n\n        <ng-container *ngIf=\"isCourseSelected\">\n          <span class=\"qa-breadcrumb-sep\">/</span>\n          <a\n            *ngIf=\"isQuestionSelected || isHiddenQuestionSelected\"\n            (click)=\"isQuestionSelected = false; isHiddenQuestionSelected = false; isReportMode = false; replyForm.reset()\"\n            [routerLink]=\"url('/ProductQuestions/' + selectedCourseId)\"\n          >\n            {{ filteredQuestions?.productName || 'محصول' }}\n          </a>\n          <span *ngIf=\"!isQuestionSelected && !isHiddenQuestionSelected\" class=\"qa-breadcrumb-current\">\n            {{ filteredQuestions?.productName || 'محصول آموزشی' }}\n          </span>\n        </ng-container>\n\n        <ng-container *ngIf=\"(isQuestionSelected && selectedQuestions && selectedQuestions.length > 0)\">\n          <span class=\"qa-breadcrumb-sep\">/</span>\n          <span class=\"qa-breadcrumb-current\">سوال: {{ selectedQuestions[0].title }}</span>\n        </ng-container>\n\n        <ng-container *ngIf=\"(isHiddenQuestionSelected && selectedHiddenQuestions && selectedHiddenQuestions.length > 0)\">\n          <span class=\"qa-breadcrumb-sep\">/</span>\n          <span class=\"qa-breadcrumb-current\">سوال خصوصی: {{ selectedHiddenQuestions[0].title }}</span>\n        </ng-container>\n      </nav>\n    </div>\n  </section>\n\n  <!-- Main Section -->\n  <main class=\"qa-main-section qa-container store-mode\">\n\n    <!-- ====================================================================\n         STATE 1: Product Selection (isCourseSelected == false)\n         ==================================================================== -->\n    <div *ngIf=\"!isCourseSelected\">\n\n      <!-- Store Q&A Introduction Banner -->\n      <div class=\"general-qa-banner\">\n        <div class=\"general-qa-copy\">\n          <div class=\"general-qa-icon\">\n            <ion-icon name=\"cube-outline\"></ion-icon>\n          </div>\n          <div class=\"general-qa-text\">\n            <b>پرسش و پاسخ قبل و بعد از تهیه فایل‌ها و کاربرگ‌ها</b>\n            <p>محصول یا کاربرگ مورد نظر خود را در لیست زیر انتخاب کنید تا پرسش‌های پیشین همکاران را بخوانید یا سوال جدیدی مطرح نمایید.</p>\n          </div>\n        </div>\n        <a\n          class=\"button-primary\"\n          [routerLink]=\"url('/Product')\"\n        >\n          <ion-icon name=\"bag-handle-outline\"></ion-icon>\n          <span>مشاهده ویترین محصولات</span>\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </a>\n      </div>\n\n      <!-- Search Filter Bar for Products -->\n      <div class=\"qa-filter-box\">\n        <div class=\"qa-filter-inner\">\n          <div class=\"qa-search-field\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <input\n              type=\"text\"\n              [(ngModel)]=\"courseSearch\"\n              placeholder=\"جستجو در میان محصولات و کاربرگ‌های اول آموز...\"\n              (keyup.enter)=\"setQueryParams2(1)\"\n            />\n            <button\n              type=\"button\"\n              class=\"qa-clear-btn\"\n              *ngIf=\"courseSearch\"\n              (click)=\"clearCourseSearch()\"\n              title=\"پاک کردن جستجو\"\n            >\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </button>\n          </div>\n          <button type=\"button\" class=\"button-primary small\" (click)=\"setQueryParams2(1)\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <span>جستجو</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Top Pagination for Products -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredCourses && filteredCourses.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId <= 1\"\n          (click)=\"goPreviousPage2()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <span *ngIf=\"filteredCourses.pageId > 2 && filteredCourses.pageCount > 2\">\n          <button type=\"button\" class=\"qa-page-btn\" (click)=\"goPage2(1)\">۱</button>\n          <span class=\"qa-page-ellipsis\">...</span>\n        </span>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredCourses.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredCourses.pageId == page\"\n          (click)=\"goPage2(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <span *ngIf=\"filteredCourses.pageId + 1 < filteredCourses.pageCount\">\n          <span class=\"qa-page-ellipsis\">...</span>\n          <button type=\"button\" class=\"qa-page-btn\" (click)=\"goPage2(filteredCourses.pageCount)\">\n            {{ filteredCourses.pageCount }}\n          </button>\n        </span>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId >= filteredCourses.pageCount\"\n          (click)=\"goNextPage2()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Products Cards Grid -->\n      <div class=\"qa-grid\" *ngIf=\"filteredCourses && filteredCourses.products && filteredCourses.products.length > 0\">\n        <div\n          class=\"qa-card-item\"\n          *ngFor=\"let c of filteredCourses.products\"\n          [routerLink]=\"url('/ProductQuestions/' + c.id)\"\n          [queryParams]=\"{ page: 1, take: 12, title: null, sortId: 0 }\"\n          (click)=\"onSelectItem(c)\"\n          role=\"button\"\n          tabindex=\"0\"\n        >\n          <div class=\"qa-card-media\">\n            <img [src]=\"c.imageName || 'assets/learning/learning-world.svg'\" [alt]=\"c.name\" loading=\"lazy\" />\n            <span class=\"qa-item-badge\">کاربرگ و ابزار آموزشی</span>\n          </div>\n          <div class=\"qa-card-content\">\n            <h3>{{ c.name }}</h3>\n            <div class=\"qa-card-meta\">\n              <span class=\"qa-action-link\">\n                <span>مشاهده پرسش‌ها و گفتگو</span>\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Empty State for Products -->\n      <div class=\"qa-empty-state\" *ngIf=\"filteredCourses && (!filteredCourses.products || filteredCourses.products.length === 0)\">\n        <div class=\"qa-empty-icon\">\n          <ion-icon name=\"cube-outline\"></ion-icon>\n        </div>\n        <h3>محصولی یافت نشد</h3>\n        <p>موردی با این عبارت جستجو پیدا نشد. لطفاً عبارت دیگری را جستجو فرمایید یا لیست کامل را مرور کنید.</p>\n        <button type=\"button\" class=\"button-secondary small\" style=\"margin-top: 14px;\" (click)=\"clearCourseSearch()\">\n          مشاهده همه محصولات\n        </button>\n      </div>\n\n      <!-- Bottom Pagination for Products -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredCourses && filteredCourses.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId <= 1\"\n          (click)=\"goPreviousPage2()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredCourses.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredCourses.pageId == page\"\n          (click)=\"goPage2(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredCourses.pageId >= filteredCourses.pageCount\"\n          (click)=\"goNextPage2()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- ====================================================================\n         STATE 2: Questions List for Selected Product\n         (isCourseSelected && !isQuestionSelected && !isHiddenQuestionSelected)\n         ==================================================================== -->\n    <div *ngIf=\"isCourseSelected && !isQuestionSelected && !isHiddenQuestionSelected && filteredQuestions\">\n\n      <!-- Current Selected Product Context Card -->\n      <div class=\"current-target-card\">\n        <div class=\"current-target-info\">\n          <div class=\"target-avatar-wrap\">\n            <img [src]=\"(course && course.imageName) || 'assets/learning/learning-world.svg'\" [alt]=\"filteredQuestions.productName\" />\n          </div>\n          <div class=\"target-text-wrap\">\n            <span class=\"target-kicker\">محصول انتخاب‌شده</span>\n            <h2>{{ filteredQuestions.productName }}</h2>\n            <div class=\"target-badges-row\">\n              <span class=\"status-pill rested\" *ngIf=\"filteredQuestions.isRested\">\n                <ion-icon name=\"time-outline\"></ion-icon>\n                فروشنده در مرخصی می‌باشد\n              </span>\n              <span class=\"status-pill active\" *ngIf=\"!filteredQuestions.isRested\">\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                فروشنده پاسخگوی سوالات شماست\n              </span>\n              <span class=\"status-pill count\" *ngIf=\"segmentSelected === 'public' && questionsCount !== -1\">\n                {{ questionsCount }} پرسش عمومی ثبت شده\n              </span>\n              <span class=\"status-pill count\" *ngIf=\"segmentSelected === 'hidden' && hiddenQuestionsCount !== -1\">\n                {{ hiddenQuestionsCount }} پرسش خصوصی ثبت شده\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"target-actions-wrap\">\n          <a\n            class=\"button-secondary small\"\n            [routerLink]=\"url('/p/' + selectedCourseId)\"\n            title=\"مشاهده مشخصات و دریافت محصول\"\n          >\n            <ion-icon name=\"open-outline\"></ion-icon>\n            <span>صفحه محصول</span>\n          </a>\n          <button\n            type=\"button\"\n            class=\"button-secondary small\"\n            (click)=\"isCourseSelected = false\"\n            [routerLink]=\"url('/ProductQuestions')\"\n          >\n            <ion-icon name=\"grid-outline\"></ion-icon>\n            <span>لیست همه محصولات</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Segment Tabs (Public vs Hidden for logged in users) -->\n      <div class=\"qa-segments-wrap\" *ngIf=\"login\">\n        <button\n          type=\"button\"\n          class=\"qa-segment-pill\"\n          [class.selected]=\"segmentSelected === 'public'\"\n          (click)=\"segmentSelected = 'public'; segmentChanged()\"\n        >\n          <ion-icon name=\"eye-outline\"></ion-icon>\n          <span>سوالات عمومی</span>\n        </button>\n        <button\n          type=\"button\"\n          class=\"qa-segment-pill\"\n          [class.selected]=\"segmentSelected === 'hidden'\"\n          (click)=\"segmentSelected = 'hidden'; segmentChanged()\"\n        >\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          <span>سوالات خصوصی به فروشنده</span>\n        </button>\n      </div>\n\n      <!-- Ask New Question Form Card -->\n      <div class=\"ask-form-card\">\n        <div class=\"ask-form-header\">\n          <div class=\"ask-form-icon\">\n            <ion-icon name=\"help-circle-outline\"></ion-icon>\n          </div>\n          <div>\n            <h3>سوال جدیدی درباره این محصول دارید؟</h3>\n            <p>سوالات خود را پیرامون محتوای کاربرگ، فونت، پایه‌های مناسب و روش کار با آن مطرح فرمایید.</p>\n          </div>\n        </div>\n\n        <!-- If user is logged in -->\n        <section *ngIf=\"login\">\n          <!-- If can ask (CheckBuy2) -->\n          <div *ngIf=\"CheckBuy2()\">\n            <form [formGroup]=\"questionForm\" (ngSubmit)=\"presentAlertConfirm4(segmentSelected === 'hidden' ? 1 : 0)\">\n              <!-- Private checkbox toggle -->\n              <label class=\"private-toggle-box\">\n                <input type=\"checkbox\" [(ngModel)]=\"isPrivate\" [ngModelOptions]=\"{standalone: true}\" />\n                <div class=\"private-toggle-text\">\n                  <b>ارسال سوال به صورت خصوصی و محرمانه به فروشنده؟</b>\n                  <small>در صورت فعال بودن، سوال و پاسخ آن تنها برای شما و طراح محصول قابل مشاهده خواهد بود.</small>\n                </div>\n              </label>\n\n              <div class=\"form-group\">\n                <label for=\"pq-title\">\n                  عنوان سوال\n                  <span class=\"req\">*</span>\n                </label>\n                <input\n                  id=\"pq-title\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"title\"\n                  placeholder=\"مثال: آیا کاربرگ با فرمت PDF ارائه‌شده و امکان پرینت سیاه و سفید دارد؟\"\n                  required\n                />\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"pq-desc\">\n                  شرح کامل سوال\n                  <span class=\"req\">*</span>\n                </label>\n                <textarea\n                  id=\"pq-desc\"\n                  class=\"form-control\"\n                  rows=\"4\"\n                  formControlName=\"description\"\n                  placeholder=\"لطفاً ابهام یا سوال خود را با جزئیات بنویسید تا طراح یا همکاران به بهترین شکل راهنمایی فرمایند...\"\n                  required\n                ></textarea>\n              </div>\n\n              <div class=\"guideline-badge\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                <span>سوال شما جهت حفظ انضباط و بار کیفی تالار، پس از تایید مدیریت و فروشنده به نمایش درمی‌آید.</span>\n              </div>\n\n              <button\n                type=\"submit\"\n                class=\"button-primary\"\n                [disabled]=\"questionForm.invalid\"\n              >\n                <ion-icon name=\"send-outline\"></ion-icon>\n                <span>ثبت و ارسال سوال</span>\n              </button>\n            </form>\n          </div>\n\n          <!-- If cannot ask (fallback check) -->\n          <div *ngIf=\"!CheckBuy2()\" class=\"notice-cta-card\">\n            <div class=\"notice-cta-icon\">\n              <ion-icon name=\"cube-outline\"></ion-icon>\n            </div>\n            <h4>شما این محصول را تهیه نکرده‌اید</h4>\n            <p>برای پرسش سوال در این بخش نیاز به تهیه این محصول دارید.</p>\n            <a class=\"button-primary small\" [routerLink]=\"url('/p/' + selectedCourseId)\">\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              <span>مشاهده و تهیه محصول {{ filteredQuestions.productName }}</span>\n            </a>\n          </div>\n        </section>\n\n        <!-- If NOT logged in -->\n        <section *ngIf=\"!login\" class=\"notice-cta-card\">\n          <div class=\"notice-cta-icon\">\n            <ion-icon name=\"log-in-outline\"></ion-icon>\n          </div>\n          <h4>برای ثبت سوال ابتدا وارد حساب کاربری خود شوید</h4>\n          <p>جهت حفظ حریم شخصی و امکان اطلاع‌رسانی از پاسخ‌های فروشنده، نیاز به ثبت‌نام یا ورود به حساب کاربری دارید.</p>\n          <a class=\"button-primary small\" [routerLink]=\"url('/Account')\">\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            <span>عضویت / ورود به حساب کاربری</span>\n          </a>\n        </section>\n      </div>\n\n      <!-- Search in Product Questions -->\n      <div class=\"qa-filter-box\">\n        <div class=\"qa-filter-inner\">\n          <div class=\"qa-search-field\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <input\n              type=\"text\"\n              [(ngModel)]=\"questionSearch\"\n              placeholder=\"جستجو در میان پرسش‌های این محصول...\"\n              (keyup.enter)=\"setQueryParams(1)\"\n            />\n            <button\n              type=\"button\"\n              class=\"qa-clear-btn\"\n              *ngIf=\"questionSearch\"\n              (click)=\"clearQuestionSearch()\"\n              title=\"پاک کردن\"\n            >\n              <ion-icon name=\"close-circle-outline\"></ion-icon>\n            </button>\n          </div>\n          <button type=\"button\" class=\"button-primary small\" (click)=\"setQueryParams(1)\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <span>جستجو</span>\n          </button>\n        </div>\n      </div>\n\n      <!-- Top Questions Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredQuestions && filteredQuestions.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId <= 1\"\n          (click)=\"goPreviousPage()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredQuestions.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredQuestions.pageId == page\"\n          (click)=\"goPage(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId >= filteredQuestions.pageCount\"\n          (click)=\"goNextPage()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n\n      <!-- Questions Stream -->\n      <div *ngIf=\"filteredQuestions.questions && filteredQuestions.questions.length > 0\">\n        <a\n          *ngFor=\"let q of filteredQuestions.questions\"\n          class=\"question-stream-row\"\n          [routerLink]=\"url('/ProductQuestions/' + q.productId)\"\n          [queryParams]=\"{\n            page: 1,\n            take: 12,\n            title: questionSearch,\n            sortId: 0,\n            questionid: q.id,\n            h: segmentSelected === 'hidden'\n          }\"\n          (click)=\"onQuestionClick(q.id)\"\n        >\n          <div class=\"q-row-main\">\n            <div class=\"q-row-meta\">\n              <span class=\"q-user-pill\">\n                <ion-icon name=\"person-circle-outline\"></ion-icon>\n                <span>{{ q.userName || 'همکار گرامی' }}</span>\n              </span>\n              <span>•</span>\n              <span>{{ q.createDate | persianDate }}</span>\n              <span>•</span>\n              <span>{{ q.viewCount }} بازدید</span>\n            </div>\n            <h3 class=\"q-row-title\">{{ q.title }}</h3>\n          </div>\n          <div class=\"q-row-arrow\" aria-hidden=\"true\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </div>\n        </a>\n      </div>\n\n      <!-- Empty State for Questions -->\n      <div class=\"qa-empty-state\" *ngIf=\"!filteredQuestions.questions || filteredQuestions.questions.length === 0\">\n        <div class=\"qa-empty-icon\">\n          <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        </div>\n        <h3>هنوز پرسشی در این بخش ثبت نشده است</h3>\n        <p>شما می‌توانید اولین سوال را مطرح کنید تا طراح محصول و سایر همکاران به آن پاسخ دهند.</p>\n      </div>\n\n      <!-- Bottom Questions Pagination -->\n      <div class=\"qa-pagination\" *ngIf=\"filteredQuestions && filteredQuestions.pageCount > 1\">\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId <= 1\"\n          (click)=\"goPreviousPage()\"\n          title=\"صفحه قبلی\"\n        >\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n\n        <button\n          type=\"button\"\n          *ngFor=\"let page of MakePageCountArray(filteredQuestions.pageCount)\"\n          class=\"qa-page-btn\"\n          [class.active]=\"filteredQuestions.pageId == page\"\n          (click)=\"goPage(page)\"\n        >\n          {{ page }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"qa-page-btn\"\n          [disabled]=\"filteredQuestions.pageId >= filteredQuestions.pageCount\"\n          (click)=\"goNextPage()\"\n          title=\"صفحه بعدی\"\n        >\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- ====================================================================\n         STATE 3: Question Detail & Discussion\n         (isCourseSelected && (isQuestionSelected || isHiddenQuestionSelected))\n         ==================================================================== -->\n    <div *ngIf=\"isCourseSelected && (isQuestionSelected || isHiddenQuestionSelected)\">\n\n      <!-- Top Action Bar with Back Link -->\n      <div style=\"display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; flex-wrap: wrap;\">\n        <button\n          type=\"button\"\n          class=\"button-secondary small\"\n          (click)=\"isQuestionSelected = false; isHiddenQuestionSelected = false; isReportMode = false; replyForm.reset()\"\n          [routerLink]=\"url('/ProductQuestions/' + selectedCourseId)\"\n          [queryParams]=\"{\n            page: filteredQuestions?.pageId || 1,\n            take: filteredQuestions?.takeEntity || 12,\n            sortId: filteredQuestions?.sortId || 0,\n            title: filteredQuestions?.title || '',\n            h: segmentSelected === 'hidden'\n          }\"\n        >\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          <span>بازگشت به لیست سوالات محصول</span>\n        </button>\n\n        <a\n          class=\"button-secondary small\"\n          [routerLink]=\"url('/p/' + selectedCourseId)\"\n        >\n          <ion-icon name=\"cube-outline\"></ion-icon>\n          <span>صفحه معرفی محصول</span>\n        </a>\n      </div>\n\n      <!-- Report Form Card (if Report Mode active) -->\n      <div class=\"ask-form-card\" *ngIf=\"isReportMode\">\n        <div class=\"ask-form-header\">\n          <div class=\"ask-form-icon\" style=\"background: var(--rose-light); color: var(--rose);\">\n            <ion-icon name=\"flag-outline\"></ion-icon>\n          </div>\n          <div>\n            <h3>ثبت گزارش محتوای نامناسب</h3>\n            <p>در صورت مشاهده هرگونه محتوای نامربوط یا مغایر با موازین اخلاقی، دلیل خود را اعلام فرمایید.</p>\n          </div>\n        </div>\n        <form *ngIf=\"login\" [formGroup]=\"replyForm\" (ngSubmit)=\"presentAlertReportConfirm()\">\n          <div class=\"form-group\">\n            <label for=\"p-report-reason\">دلیل گزارش <span class=\"req\">*</span></label>\n            <textarea\n              id=\"p-report-reason\"\n              rows=\"4\"\n              class=\"form-control\"\n              placeholder=\"لطفاً دلیل مغایرت یا تخلف این پیام را شرح دهید...\"\n              formControlName=\"comment\"\n              required\n            ></textarea>\n          </div>\n          <div style=\"display: flex; gap: 10px;\">\n            <button type=\"submit\" class=\"button-danger\" [disabled]=\"replyForm.invalid\">\n              <ion-icon name=\"flag\"></ion-icon>\n              <span>ارسال گزارش</span>\n            </button>\n            <button type=\"button\" class=\"button-secondary small\" (click)=\"isReportMode = false; replyForm.reset()\">\n              لغو\n            </button>\n          </div>\n        </form>\n      </div>\n\n      <!-- Discussion Content for PUBLIC Questions (when NOT reporting) -->\n      <div *ngIf=\"!isReportMode && isQuestionSelected && segmentSelected === 'public' && selectedQuestions && selectedQuestions.length > 0\">\n\n        <!-- Main Question Card (First item in selectedQuestions) -->\n        <div class=\"main-question-card\">\n          <div class=\"question-author-strip\">\n            <div class=\"author-pill\">\n              <div class=\"author-avatar\" [class.teacher]=\"selectedQuestions[0].isTeacherAnswer\">\n                <ion-icon [name]=\"selectedQuestions[0].isTeacherAnswer ? 'cube-outline' : 'person-circle-outline'\"></ion-icon>\n              </div>\n              <div class=\"author-info\">\n                <b>{{ selectedQuestions[0].userName || 'کاربر گرامی' }}</b>\n                <small>{{ selectedQuestions[0].createDate | persianDate }}</small>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\">\n              <span class=\"status-pill rested\" *ngIf=\"selectedQuestions[0].isRested\">\n                فروشنده در مرخصی می‌باشد\n              </span>\n              <button\n                type=\"button\"\n                *ngIf=\"login\"\n                class=\"button-danger\"\n                style=\"padding: 4px 10px; font-size: 11px;\"\n                (click)=\"onReportClicked(selectedQuestions[0].id, 0)\"\n                title=\"گزارش این سوال\"\n              >\n                <ion-icon name=\"flag-outline\"></ion-icon>\n                <span>گزارش</span>\n              </button>\n            </div>\n          </div>\n\n          <h2 class=\"q-title\">{{ selectedQuestions[0].title }}</h2>\n          <div class=\"q-body\">{{ selectedQuestions[0].description }}</div>\n        </div>\n\n        <!-- Replies Stream -->\n        <div class=\"replies-section\" *ngIf=\"selectedQuestions.length > 1\">\n          <div class=\"replies-heading\">\n            <h3>\n              <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n              <span>پاسخ‌ها و راهنمایی‌های ثبت شده</span>\n            </h3>\n            <span class=\"replies-count-pill\">{{ selectedQuestions.length - 1 }} پاسخ</span>\n          </div>\n\n          <div\n            *ngFor=\"let reply of selectedQuestions.slice(1)\"\n            class=\"reply-card\"\n            [class.teacher-reply]=\"reply.isTeacherAnswer\"\n            [class.best-reply]=\"reply.isBest\"\n          >\n            <div class=\"reply-header\">\n              <div class=\"author-pill\">\n                <div class=\"author-avatar\" [class.teacher]=\"reply.isTeacherAnswer\">\n                  <ion-icon [name]=\"reply.isTeacherAnswer ? 'cube-outline' : 'person-circle-outline'\"></ion-icon>\n                </div>\n                <div class=\"author-info\">\n                  <b>{{ reply.userName || (reply.isTeacherAnswer ? 'فروشنده / طراح محصول' : 'همکار گرامی') }}</b>\n                  <small>{{ reply.createDate | persianDate }}</small>\n                </div>\n              </div>\n\n              <div style=\"display: flex; align-items: center; gap: 8px;\">\n                <span class=\"teacher-badge\" *ngIf=\"reply.isTeacherAnswer\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  پاسخ رسمی فروشنده\n                </span>\n                <span class=\"best-badge\" *ngIf=\"reply.isBest\">\n                  <ion-icon name=\"star\"></ion-icon>\n                  پاسخ برگزیده\n                </span>\n                <button\n                  type=\"button\"\n                  *ngIf=\"login\"\n                  class=\"button-danger\"\n                  style=\"padding: 3px 8px; font-size: 10px;\"\n                  (click)=\"onReportClicked(reply.id, 0)\"\n                  title=\"گزارش پیام\"\n                >\n                  <ion-icon name=\"flag-outline\"></ion-icon>\n                </button>\n              </div>\n            </div>\n\n            <div class=\"reply-body\">{{ reply.description }}</div>\n          </div>\n        </div>\n\n        <!-- Question Closed Notice -->\n        <div class=\"closed-banner\" *ngIf=\"selectedQuestions[0].isClosed\">\n          <ion-icon name=\"lock-closed-outline\" style=\"font-size: 18px; vertical-align: middle; margin-inline-end: 6px;\"></ion-icon>\n          این پرسش توسط مدیریت یا فروشنده بسته شده است و امکان ارسال پاسخ جدید وجود ندارد.\n        </div>\n\n        <!-- Submit New Answer Section -->\n        <div class=\"ask-form-card\" *ngIf=\"!selectedQuestions[0].isClosed\" style=\"margin-top: 28px;\">\n          <div class=\"ask-form-header\">\n            <div class=\"ask-form-icon\" style=\"background: var(--emerald-light); color: var(--emerald);\">\n              <ion-icon name=\"return-down-back-outline\"></ion-icon>\n            </div>\n            <div>\n              <h3>ثبت پاسخ یا راهنمایی شما</h3>\n              <p>اگر تجربه یا پاسخی برای حل این ابهام دارید، با همکاران به اشتراک بگذارید.</p>\n            </div>\n          </div>\n\n          <!-- If Logged In -->\n          <section *ngIf=\"login\">\n            <div *ngIf=\"CheckBuy()\">\n              <form [formGroup]=\"questionAnswerForm\" (ngSubmit)=\"presentAlertConfirm2(0)\">\n                <div class=\"form-group\">\n                  <label for=\"p-answer-text\">\n                    متن پاسخ\n                    <span class=\"req\">*</span>\n                  </label>\n                  <textarea\n                    id=\"p-answer-text\"\n                    rows=\"4\"\n                    class=\"form-control\"\n                    formControlName=\"answer\"\n                    placeholder=\"پاسخ، توضیحات یا راهنمایی آموزشی خود را بنویسید...\"\n                    required\n                  ></textarea>\n                </div>\n\n                <div class=\"guideline-badge\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>پاسخ شما پس از تایید مدیریت و فروشنده در تالار نمایش داده خواهد شد.</span>\n                </div>\n\n                <button\n                  type=\"submit\"\n                  class=\"button-primary\"\n                  [disabled]=\"questionAnswerForm.invalid\"\n                >\n                  <ion-icon name=\"paper-plane-outline\"></ion-icon>\n                  <span>ثبت پاسخ من</span>\n                </button>\n              </form>\n            </div>\n\n            <!-- Fallback if not bought -->\n            <div *ngIf=\"!CheckBuy()\" class=\"notice-cta-card\">\n              <div class=\"notice-cta-icon\">\n                <ion-icon name=\"cube-outline\"></ion-icon>\n              </div>\n              <h4>برای ارسال پاسخ باید این محصول را تهیه کرده باشید</h4>\n              <p>جهت ثبت نظر یا پاسخ، لطفاً ابتدا محصول را تهیه فرمایید.</p>\n              <a class=\"button-primary small\" [routerLink]=\"url('/p/' + selectedCourseId)\">\n                مشاهده و دریافت محصول {{ selectedQuestions[0].courseName }}\n              </a>\n            </div>\n          </section>\n\n          <!-- If Not Logged In -->\n          <section *ngIf=\"!login\" class=\"notice-cta-card\">\n            <div class=\"notice-cta-icon\">\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </div>\n            <h4>برای درج پاسخ ابتدا باید در سایت وارد شوید</h4>\n            <p>جهت مشارکت در گفتگوی آموزشی معلمان، کافیست یک حساب کاربری ایجاد فرمایید.</p>\n            <a class=\"button-primary small\" [routerLink]=\"url('/Account')\">\n              ورود به حساب کاربری / عضویت\n            </a>\n          </section>\n        </div>\n      </div>\n\n      <!-- Discussion Content for HIDDEN Questions (when NOT reporting) -->\n      <div *ngIf=\"!isReportMode && isHiddenQuestionSelected && segmentSelected === 'hidden' && selectedHiddenQuestions && selectedHiddenQuestions.length > 0\">\n\n        <!-- Main Question Card (First item in selectedHiddenQuestions) -->\n        <div class=\"main-question-card\">\n          <div class=\"question-author-strip\">\n            <div class=\"author-pill\">\n              <div class=\"author-avatar\" [class.teacher]=\"selectedHiddenQuestions[0].isTeacherAnswer\">\n                <ion-icon [name]=\"selectedHiddenQuestions[0].isTeacherAnswer ? 'cube-outline' : 'person-circle-outline'\"></ion-icon>\n              </div>\n              <div class=\"author-info\">\n                <b>{{ selectedHiddenQuestions[0].userName || 'کاربر گرامی' }}</b>\n                <small>{{ selectedHiddenQuestions[0].createDate | persianDate }}</small>\n              </div>\n            </div>\n\n            <div style=\"display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\">\n              <span class=\"status-pill rested\" *ngIf=\"selectedHiddenQuestions[0].isRested\">\n                فروشنده در مرخصی می‌باشد\n              </span>\n              <span class=\"status-pill rested\" style=\"background: rgba(245, 158, 11, 0.15); color: var(--amber-dark);\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                سوال خصوصی\n              </span>\n              <button\n                type=\"button\"\n                *ngIf=\"login\"\n                class=\"button-danger\"\n                style=\"padding: 4px 10px; font-size: 11px;\"\n                (click)=\"onReportClicked(selectedHiddenQuestions[0].id, 1)\"\n                title=\"گزارش این سوال\"\n              >\n                <ion-icon name=\"flag-outline\"></ion-icon>\n                <span>گزارش</span>\n              </button>\n            </div>\n          </div>\n\n          <h2 class=\"q-title\">{{ selectedHiddenQuestions[0].title }}</h2>\n          <div class=\"q-body\">{{ selectedHiddenQuestions[0].description }}</div>\n        </div>\n\n        <!-- Replies Stream for Hidden -->\n        <div class=\"replies-section\" *ngIf=\"selectedHiddenQuestions.length > 1\">\n          <div class=\"replies-heading\">\n            <h3>\n              <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n              <span>پاسخ‌های خصوصی فروشنده</span>\n            </h3>\n            <span class=\"replies-count-pill\">{{ selectedHiddenQuestions.length - 1 }} پاسخ</span>\n          </div>\n\n          <div\n            *ngFor=\"let reply of selectedHiddenQuestions.slice(1)\"\n            class=\"reply-card\"\n            [class.teacher-reply]=\"reply.isTeacherAnswer\"\n            [class.best-reply]=\"reply.isBest\"\n          >\n            <div class=\"reply-header\">\n              <div class=\"author-pill\">\n                <div class=\"author-avatar\" [class.teacher]=\"reply.isTeacherAnswer\">\n                  <ion-icon [name]=\"reply.isTeacherAnswer ? 'cube-outline' : 'person-circle-outline'\"></ion-icon>\n                </div>\n                <div class=\"author-info\">\n                  <b>{{ reply.userName || (reply.isTeacherAnswer ? 'فروشنده / طراح محصول' : 'همکار گرامی') }}</b>\n                  <small>{{ reply.createDate | persianDate }}</small>\n                </div>\n              </div>\n\n              <div style=\"display: flex; align-items: center; gap: 8px;\">\n                <span class=\"teacher-badge\" *ngIf=\"reply.isTeacherAnswer\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  پاسخ رسمی فروشنده\n                </span>\n                <span class=\"best-badge\" *ngIf=\"reply.isBest\">\n                  <ion-icon name=\"star\"></ion-icon>\n                  پاسخ برگزیده\n                </span>\n                <button\n                  type=\"button\"\n                  *ngIf=\"login\"\n                  class=\"button-danger\"\n                  style=\"padding: 3px 8px; font-size: 10px;\"\n                  (click)=\"onReportClicked(reply.id, 1)\"\n                  title=\"گزارش پیام\"\n                >\n                  <ion-icon name=\"flag-outline\"></ion-icon>\n                </button>\n              </div>\n            </div>\n\n            <div class=\"reply-body\">{{ reply.description }}</div>\n          </div>\n        </div>\n\n        <!-- Question Closed Notice -->\n        <div class=\"closed-banner\" *ngIf=\"selectedHiddenQuestions[0].isClosed\">\n          <ion-icon name=\"lock-closed-outline\" style=\"font-size: 18px; vertical-align: middle; margin-inline-end: 6px;\"></ion-icon>\n          این پرسش توسط مدیریت یا فروشنده بسته شده است و امکان ارسال پاسخ جدید وجود ندارد.\n        </div>\n\n        <!-- Submit New Answer Section for Hidden -->\n        <div class=\"ask-form-card\" *ngIf=\"!selectedHiddenQuestions[0].isClosed\" style=\"margin-top: 28px;\">\n          <div class=\"ask-form-header\">\n            <div class=\"ask-form-icon\" style=\"background: var(--emerald-light); color: var(--emerald);\">\n              <ion-icon name=\"return-down-back-outline\"></ion-icon>\n            </div>\n            <div>\n              <h3>ثبت پاسخ به گفتگو</h3>\n              <p>پاسخ شما به این گفتگوی خصوصی اضافه خواهد شد.</p>\n            </div>\n          </div>\n\n          <!-- If Logged In -->\n          <section *ngIf=\"login\">\n            <div *ngIf=\"CheckBuy()\">\n              <form [formGroup]=\"questionAnswerForm\" (ngSubmit)=\"presentAlertConfirm2(1)\">\n                <div class=\"form-group\">\n                  <label for=\"p-hidden-answer-text\">\n                    متن پاسخ\n                    <span class=\"req\">*</span>\n                  </label>\n                  <textarea\n                    id=\"p-hidden-answer-text\"\n                    rows=\"4\"\n                    class=\"form-control\"\n                    formControlName=\"answer\"\n                    placeholder=\"پاسخ یا توضیحات تکمیلی خود را بنویسید...\"\n                    required\n                  ></textarea>\n                </div>\n\n                <div class=\"guideline-badge\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                  <span>پاسخ شما پس از تایید مدیریت و فروشنده به نمایش درمی‌آید.</span>\n                </div>\n\n                <button\n                  type=\"submit\"\n                  class=\"button-primary\"\n                  [disabled]=\"questionAnswerForm.invalid\"\n                >\n                  <ion-icon name=\"paper-plane-outline\"></ion-icon>\n                  <span>ثبت پاسخ من</span>\n                </button>\n              </form>\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!-- Educational Footer Matching Landing Page -->\n  <footer class=\"learning-footer\">\n    <div class=\"qa-container footer-top\">\n      <div class=\"footer-brand-col\">\n        <a class=\"brand avalamooz-brand\" [routerLink]=\"url('/Home')\">\n          <img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" />\n          <div>\n            <b>{{ 'learn.brand' | translate }}</b>\n            <small>{{ 'learn.tagline' | translate }}</small>\n          </div>\n        </a>\n        <p class=\"footer-desc\">{{ 'learn.footer.description' | translate }}</p>\n        <div class=\"footer-domain-badge\">\n          <ion-icon name=\"globe-outline\"></ion-icon>\n          <span>پایگاه رسمی: <b>avalamuz.ir</b></span>\n        </div>\n      </div>\n\n      <div class=\"footer-links-col\">\n        <h4>{{ 'learn.footer.links' | translate }}</h4>\n        <nav [attr.aria-label]=\"'learn.footer.links' | translate\">\n          <a [routerLink]=\"url('/Home')\">{{ 'learn.nav.courses' | translate }}</a>\n          <a [routerLink]=\"url('/Product')\">{{ 'learn.nav.store' | translate }}</a>\n          <a [routerLink]=\"url('/Questions')\">پرسش و پاسخ دوره‌ها</a>\n          <a [routerLink]=\"url('/ProductQuestions')\">سوالات محصولات</a>\n          <a [routerLink]=\"url('/About')\">{{ 'learn.footer.about' | translate }}</a>\n          <a [routerLink]=\"url('/PrivacyPolicy')\">{{ 'learn.footer.privacy' | translate }}</a>\n        </nav>\n      </div>\n\n      <div class=\"footer-trust-col\">\n        <h4>اعتماد و پشتیبانی همکاران</h4>\n        <div class=\"trust-cards-row\">\n          <div class=\"trust-pill\">\n            <ion-icon name=\"ribbon-outline\"></ion-icon>\n            <span>تایید سرگروه‌های آموزشی کشوری</span>\n          </div>\n          <div class=\"trust-pill\">\n            <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\n            <span>ضمانت کیفیت علمی و گرافیکی محتوا</span>\n          </div>\n          <div class=\"trust-pill\">\n            <ion-icon name=\"chatbubbles-outline\"></ion-icon>\n            <span>پشتیبانی آموزگاران در ایتا و تلگرام</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"qa-container footer-bottom\">\n      <span>{{ 'learn.footer.copyright' | translate }}</span>\n      <span>{{ 'learn.footer.made' | translate }} <span class=\"footer-heart\" aria-hidden=\"true\">♥</span></span>\n    </div>\n  </footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_home_product-questions_product-questions_module_ts.js.map