"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_article_product-article-by-id_product-article-by-id_module_ts"],{

/***/ 20530:
/*!***************************************************************!*\
  !*** ./src/app/core/pipe/persian-date/persian-date.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianDateModule": () => (/* binding */ PersianDateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/service/persian-calendar-service */ 83723);
/* harmony import */ var _persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persian-date.pipe */ 59027);




let PersianDateModule = class PersianDateModule {
};
PersianDateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__.PersianDate],
        exports: [_persian_date_pipe__WEBPACK_IMPORTED_MODULE_1__.PersianDate],
        providers: [_data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__.PersianCalendarService]
    })
], PersianDateModule);



/***/ }),

/***/ 59027:
/*!*************************************************************!*\
  !*** ./src/app/core/pipe/persian-date/persian-date.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianDate": () => (/* binding */ PersianDate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/service/persian-calendar-service */ 83723);



/*
  Generated class for the PersianDate pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
// tslint:disable-next-line: use-pipe-transform-interface
let PersianDate = class PersianDate {
    /**
     *
     */
    constructor(persianCalendarService) {
        this.persianCalendarService = persianCalendarService;
    }
    /*
      Takes a value and convert it to
     */
    transform(value) {
        const d = new Date(value);
        return this.persianCalendarService.PersianCalendar(d);
    }
};
PersianDate.ctorParameters = () => [
    { type: _data_service_persian_calendar_service__WEBPACK_IMPORTED_MODULE_0__.PersianCalendarService }
];
PersianDate = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'persianDate'
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], PersianDate);



/***/ }),

/***/ 83723:
/*!**********************************************************!*\
  !*** ./src/app/data/service/persian-calendar-service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersianCalendarService": () => (/* binding */ PersianCalendarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let PersianCalendarService = class PersianCalendarService {
    constructor() {
        this.weekDayNames = ["شنبه", "یکشنبه", "دوشنبه",
            "سه شنبه", "چهارشنبه",
            "پنج شنبه", "جمعه"];
        this.monthNames = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ];
        this.strWeekDay = null;
        this.strMonth = null;
        this.day = null;
        this.month = null;
        this.year = null;
        this.ld = null;
        this.farsiDate = null;
        this.today = new Date();
        this.gregorianYear = null;
        this.gregorianMonth = null;
        this.gregorianDate = null;
        this.WeekDay = null;
        this.buf1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        this.buf2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    }
    PersianCalendar(gregorianDate) {
        this.today = gregorianDate;
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        // return this.strWeekDay + " " + this.day + " " + this.strMonth + " " + this.year;
        return this.year + "/" + this.strMonth + "/" + this.day;
    }
    toPersian(gregorianDate) {
        if ((this.gregorianYear % 4) != 0)
            this.farsiDate = this.func1();
        else
            this.farsiDate = this.func2();
        // this.strMonth = this.monthNames[Math.floor(this.month - 1)];
        this.strMonth = [Math.floor(this.month)].toString();
        //this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        if (this.WeekDay == 6) {
            this.strWeekDay = this.weekDayNames[0];
        }
        else {
            this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        }
    }
    func1() {
        this.day = this.buf1[this.gregorianMonth - 1] + this.gregorianDate;
        if (this.day > 79) {
            this.day = this.day - 79;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 == 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 == 0) {
                    this.month = (day2 / 30) + 6;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
        }
        else {
            this.ld = this.gregorianYear > 1996 && this.gregorianYear % 4 == 1 ? 11 : 10;
            var day2 = this.day + this.ld;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 == 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
        var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
        return fullDate;
    }
    func2() {
        this.day = this.buf2[this.gregorianMonth - 1] + this.gregorianDate;
        this.ld = this.gregorianYear >= 1996 ? 79 : 80;
        if (this.day > this.ld) {
            this.day = this.day - this.ld;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 == 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 == 0) {
                    this.month--;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
            var fullDate = this.day + "/" + Math.floor(this.month) + "/" + this.year;
            return fullDate;
        }
        else {
            var day2 = this.day + 10;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 == 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
    }
};
PersianCalendarService.ctorParameters = () => [];
PersianCalendarService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], PersianCalendarService);



/***/ }),

/***/ 40408:
/*!**************************************************************************************************!*\
  !*** ./src/app/view/pages/article/product-article-by-id/product-article-by-id-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleByIdRoutingModule": () => (/* binding */ ProductArticleByIdRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_article_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-article-by-id.component */ 79045);




const routes = [{ path: '', component: _product_article_by_id_component__WEBPACK_IMPORTED_MODULE_0__.ProductArticleByIdComponent }];
let ProductArticleByIdRoutingModule = class ProductArticleByIdRoutingModule {
};
ProductArticleByIdRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductArticleByIdRoutingModule);



/***/ }),

/***/ 79045:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/article/product-article-by-id/product-article-by-id.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleByIdComponent": () => (/* binding */ ProductArticleByIdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_article_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-article-by-id.component.html?ngResource */ 19818);
/* harmony import */ var _product_article_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-by-id.component.scss?ngResource */ 86309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GAccount */ 6958);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/model/person/TeacherModel */ 55550);
/* harmony import */ var src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/article/article.service */ 56847);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */











let ProductArticleByIdComponent = class ProductArticleByIdComponent {
    constructor(activatedRoute, articleService, loadingController, toastController, router, title, meta, domSanitizer) {
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.domSanitizer = domSanitizer;
        this.tags = [];
        this.links = [];
        this.isUserLikedLoading = true;
        this.queryText = '';
        this.showSearchbar = false;
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
        this.whatsappShare = '';
        this.isLikeLoadingShow = false;
        this.isLoading = true;
        this.windowWidth = 1000;
        src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.getWindowWidth().subscribe(res => {
            this.windowWidth = res;
        });
    }
    goTop() {
        this.content.scrollToTop(3000);
    }
    updateTitle(title = 'اول آموز - راهنمای محصولات و کاربرگ‌های آموزشی دبستان') {
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'og:title', content: title });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ itemprop: 'name', content: title });
    }
    updateOgUrl(url = 'http://localhost:4300/') {
        this.meta.updateTag({ name: 'og:url', content: url });
        this.meta.updateTag({ name: 'twitter:url', content: url });
        this.meta.updateTag({ name: 'og:image', content: this.article.imageNamePNG });
        this.meta.updateTag({ property: 'og:image', content: this.article.imageNamePNG });
        this.meta.updateTag({ name: 'twitter:image', content: this.article.imageNamePNG });
        this.meta.updateTag({ name: 'og:image:alt', content: this.article.name });
        this.meta.updateTag({ property: 'og:image:alt', content: this.article.name });
    }
    updateDescription(desc = 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است') {
        this.meta.updateTag({ name: 'description', content: desc });
        this.meta.updateTag({ name: 'twitter:description', content: desc });
        this.meta.updateTag({ name: 'og:description', content: desc });
        this.meta.updateTag({ property: 'og:description', content: desc });
        this.meta.updateTag({ itemprop: 'description', content: desc });
    }
    forwardUrl(url) {
        window.location.href = url;
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
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.toast(this.toastController, 'کپی شد');
    }
    doRefresh(event) {
        setTimeout(() => {
            location.reload();
            event.target.complete();
        }, 2000);
    }
    getData(id) {
        this.articleService.GetProductArticleDetailById(id).subscribe(ress => {
            this.isLoading = false;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.article = ress.data;
                this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/pa/' + this.article.id);
                this.updateTitle('اول آموز - ' + this.article.name);
                this.updateOgUrl('http://localhost:4300/pa/' + this.article.id);
                this.updateDescription('اول آموز - ' + this.article.shortDescription);
                this.articleService.GetProductArticleTags(+id).subscribe(res => {
                    if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.tags = res.data;
                    }
                    else {
                    }
                }, err => {
                });
                if (src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn()) {
                    this.articleService.GetProductArticleDetailUserLikedById(id).subscribe(res => {
                        if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                            switch (res.data) {
                                case -1:
                                    this.article.userLiked = null;
                                    break;
                                case 0:
                                    this.article.userLiked = false;
                                    break;
                                case 1:
                                    this.article.userLiked = true;
                                    break;
                                default:
                                    this.article.userLiked = null;
                                    break;
                            }
                            this.isUserLikedLoading = false;
                        }
                        else {
                            this.article.userLiked = null;
                            this.isUserLikedLoading = false;
                        }
                    }, err => {
                        this.article.userLiked = null;
                        this.isUserLikedLoading = false;
                    });
                }
                else {
                    this.article.userLiked = null;
                    this.isUserLikedLoading = false;
                }
                this.articleService.GetProductArticleDetailViewedShowById(id).subscribe(res => {
                    if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.article.viewCount = res.data;
                    }
                    else {
                        this.article.viewCount = 1;
                    }
                }, err => {
                    this.article.viewCount = 1;
                });
                this.articleService.GetArticleDetailSellerById(id).subscribe(res => {
                    if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.article.teacherUser = new src_app_data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_7__.TeacherModel(res.data.id, res.data.name, res.data.family, res.data.resume, res.data.userAvatarAddress, res.data.isRested);
                    }
                    else {
                        this.article.teacherUser = null;
                    }
                }, err => {
                    this.article.teacherUser = null;
                });
                if (src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn() && src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsBuyer()) {
                    this.articleService.AddOrUpdateUserViewedProductArticle(ress.data.id).subscribe(res => {
                        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                            this.article.viewCount++;
                        }
                    });
                }
            }
            else {
                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
                // this.router.navigateByUrl(Urls.Page404Url);
            }
        }, err => {
            this.isLoading = false;
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.dismissLoading(this.loadingController);
            this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_6__.Urls.Page404Url);
        });
    }
    ngOnInit() {
        this.instagram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Instagram;
        this.twiter = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Twiter;
        this.facebook = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Facebook;
        this.telegram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Telegram;
        this.youtube = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Youtube;
        this.pinterest = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Pinterest;
        this.linkedin = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Linkedin;
        this.twitch = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Twitch;
        this.aparat = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Aparat;
        this.discord = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Discord;
        src_app_core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.getHelpfulLinks().subscribe(res => {
            if (res != null) {
                if (res.length > 0) {
                    res.forEach(link => {
                        this.links.push(link);
                    });
                }
            }
        });
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_5__.SharedIonic.loading(this.loadingController);
        this.activatedRoute.params.subscribe(params => {
            // tslint:disable-next-line: radix
            const id = parseInt(params.id, 10);
            this.isUserLikedLoading = true;
            this.getData(+id);
        });
    }
    getTeacherName() {
        if (this.article.sellerUser == undefined || this.article.sellerUser == null) {
            return '';
        }
        const name = this.article.sellerUser.name != null ? this.article.sellerUser.name : '';
        const family = this.article.sellerUser.family != null ? this.article.sellerUser.family : '';
        return name + ' ' + family;
    }
    ionViewWillEnter() {
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
        this.router
            .navigate(['Product', 'Search'], {
            queryParams: {
                title: this.queryText
            }
        });
    }
    OnLike(like) {
        if (src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn() && src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsBuyer()) {
            this.isLikeLoadingShow = true;
            this.articleService.AddOrUpdateUserLikedProductArticle(this.article.id, like).subscribe(res => {
                this.isLikeLoadingShow = false;
                if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                    this.article.userLiked = like;
                }
            }, err => {
                this.isLikeLoadingShow = false;
            });
        }
    }
    isLikeShow() {
        return src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn();
    }
};
ProductArticleByIdComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_data_service_article_article_service__WEBPACK_IMPORTED_MODULE_8__.ArticleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer }
];
ProductArticleByIdComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent,] }]
};
ProductArticleByIdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-product-article-by-id',
        template: _product_article_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_article_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductArticleByIdComponent);



/***/ }),

/***/ 71130:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/article/product-article-by-id/product-article-by-id.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductArticleByIdModule": () => (/* binding */ ProductArticleByIdModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_article_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-article-by-id-routing.module */ 40408);
/* harmony import */ var _product_article_by_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-article-by-id.component */ 79045);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);












let ProductArticleByIdModule = class ProductArticleByIdModule {
};
ProductArticleByIdModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_product_article_by_id_component__WEBPACK_IMPORTED_MODULE_2__.ProductArticleByIdComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _product_article_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductArticleByIdRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], ProductArticleByIdModule);



/***/ }),

/***/ 86309:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/pages/article/product-article-by-id/product-article-by-id.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = ".social {\n  width: 25% !important;\n}\n\nh1 {\n  font-size: 14;\n}\n\nh2 {\n  margin-top: 20px;\n}\n\n.not-found {\n  height: 300px;\n}\n\n.description {\n  white-space: pre-wrap;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p {\n  color: var(--ink-secondary) !important;\n  background-color: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p :where(p, span, div, li, strong, b, em, i, font, td, th) {\n  color: var(--ink-secondary) !important;\n  background: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p :where(h1, h2, h3, h4, h5, h6) {\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p a {\n  color: var(--purple) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p blockquote, :host-context(.dark-theme) ::ng-deep ion-card > section > p pre, :host-context(.dark-theme) ::ng-deep ion-card > section > p code {\n  background: var(--catalog-soft) !important;\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep ion-card > section > p table, :host-context(.dark-theme) ::ng-deep ion-card > section > p td, :host-context(.dark-theme) ::ng-deep ion-card > section > p th {\n  border-color: var(--border-soft) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYXJ0aWNsZS1ieS1pZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcY291cnNlXFxfY2F0YWxvZy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtBQURKOztBQUlFO0VBQ0UsYUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FDZkU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvRUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLDBFQUFBO0VBQ0EsMEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QURrQko7O0FDaEJJO0VBQVMsb0JBQUE7QURtQmI7O0FDakJJO0VBQWMsOEJBQUE7RUFBZ0MsaUJBQUE7QURxQmxEOztBQ3BCSTtFQUFNLDRCQUFBO0FEdUJWOztBQ3RCSTtFQUEyQiwwQkFBQTtFQUE0QiwyQkFBQTtBRDBCM0Q7O0FDekJJO0VBQWlCLGlCQUFBO0FENEJyQjs7QUMzQkk7RUFBb0IsbUJBQUE7QUQ4QnhCOztBQzdCSTtFQUVFLGdEQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBRDhCTjs7QUM1Qkk7RUFBMkIsdUJBQUE7QUQrQi9COztBQzlCSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBRGdDTjs7QUM5Qkk7RUFBOEIsMEJBQUE7RUFBNEIsbUJBQUE7QURrQzlEOztBQ2pDSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtBRG1DTjs7QUNqQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QURtQ047O0FDakNJO0VBQXFELHVDQUFBO0FEb0N6RDs7QUNuQ0k7RUFBNEIseUNBQUE7QURzQ2hDOztBQzlCSTtFQUNFLHNDQUFBO0VBQ0Esd0NBQUE7QURpQ047O0FDaENNO0VBQ0Usc0NBQUE7RUFDQSxrQ0FBQTtBRGtDUjs7QUNoQ007RUFBaUMsNEJBQUE7QURtQ3ZDOztBQ2xDTTtFQUFJLCtCQUFBO0FEcUNWOztBQ3BDTTtFQUF3QiwwQ0FBQTtFQUE0Qyw0QkFBQTtBRHdDMUU7O0FDdkNNO0VBQWdCLDJDQUFBO0FEMEN0QiIsImZpbGUiOiJwcm9kdWN0LWFydGljbGUtYnktaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi8uLi9jb3Vyc2UvY2F0YWxvZy1kYXJrJyBhcyBjYXRhbG9nO1xyXG5cclxuLnNvY2lhbCB7XHJcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3QtZm91bmQge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG5AaW5jbHVkZSBjYXRhbG9nLmRhcmstbW9kZTtcclxuQGluY2x1ZGUgY2F0YWxvZy5yaWNoLXRleHQoJ2lvbi1jYXJkID4gc2VjdGlvbiA+IHAnKTtcclxuIiwiLy8gUGFnZS1sb2NhbCBjYXRhbG9nIHBhbGV0dGUuIEltcG9ydGVkIG9ubHkgYnkgY291cnNlL3Byb2R1Y3QvYXJ0aWNsZS9zZWFyY2ggcm91dGVzLlxuLy8gRmFsbGJhY2tzIGluIHRoZSBjb25zdW1pbmcgc3R5bGVzIHByZXNlcnZlIGV2ZXJ5IG9yaWdpbmFsIGxpZ2h0LW1vZGUgY29sb3IuXG5AbWl4aW4gZGFyay1tb2RlIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICAtLWNhdGFsb2ctc3VyZmFjZTogIzIxMWMzMjtcbiAgICAtLWNhdGFsb2ctc3VyZmFjZS1yZ2I6IDMzLCAyOCwgNTA7XG4gICAgLS1jYXRhbG9nLXNvZnQ6ICMyOTIzM2Q7XG4gICAgLS1jYXRhbG9nLWhvdmVyOiAjMzQyYzQ5O1xuICAgIC0tY2F0YWxvZy1ib3JkZXI6ICM0YjQxNjQ7XG4gICAgLS1jYXRhbG9nLXRleHQ6ICNmMmVlZmI7XG4gICAgLS1jYXRhbG9nLXNlY29uZGFyeTogI2QwYzhlMjtcbiAgICAtLWNhdGFsb2ctbXV0ZWQ6ICNiMWE2YzY7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1zb2Z0OiAjMzAyMzQ3O1xuICAgIC0tY2F0YWxvZy1wdXJwbGUtaG92ZXI6ICMzZDJkNTg7XG4gICAgLS1jYXRhbG9nLWFtYmVyLXNvZnQ6ICMzYjJkMTg7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQtc29mdDogIzE4MzcyZTtcbiAgICAtLWNhdGFsb2ctcm9zZS1zb2Z0OiAjNDAyMzM0O1xuICAgIC0tY2F0YWxvZy1za3ktc29mdDogIzE5MzM0NjtcbiAgICAtLWNhdGFsb2ctcHVycGxlOiAjYzRiNWZkO1xuICAgIC0tY2F0YWxvZy1lbWVyYWxkOiAjNmVlN2I3O1xuICAgIC0tY2F0YWxvZy1za3k6ICM3ZGQzZmM7XG4gICAgLS1jYXRhbG9nLXNreS1hY3Rpb246ICMwMzY5YTE7XG4gICAgLS1jYXRhbG9nLWFjdGlvbjogIzdjM2FlZDtcbiAgICAtLWNhdGFsb2ctYWN0aW9uLWhvdmVyOiAjNmQyOGQ5O1xuICAgIC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQsICM1YjIxYjYpO1xuICAgIC0tY2F0YWxvZy1idXk6ICMwNDc4NTc7XG4gICAgLS1jYXRhbG9nLWJ1eS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA0Nzg1NywgIzA2NWY0Nik7XG4gICAgLS1jYXRhbG9nLWRhbmdlcjogI2JlMTIzYztcbiAgICAtLWNhdGFsb2ctYW1iZXItYWN0aW9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTI0MDBlLCAjNzgzNTBmKTtcbiAgICAtLWluazogdmFyKC0tY2F0YWxvZy10ZXh0KTtcbiAgICAtLWluay1zZWNvbmRhcnk6IHZhcigtLWNhdGFsb2ctc2Vjb25kYXJ5KTtcbiAgICAtLW11dGVkOiB2YXIoLS1jYXRhbG9nLW11dGVkKTtcbiAgICAtLXB1cnBsZTogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWRhcms6IHZhcigtLWNhdGFsb2ctcHVycGxlKTtcbiAgICAtLXB1cnBsZS1saWdodDogdmFyKC0tY2F0YWxvZy1wdXJwbGUtc29mdCk7XG4gICAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxNjcsIDEzOSwgMjUwLCAwLjE0KTtcbiAgICAtLWFtYmVyOiAjZmJiZjI0O1xuICAgIC0tYW1iZXItZGFyazogI2ZjZDM0ZDtcbiAgICAtLWFtYmVyLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWFtYmVyLXNvZnQpO1xuICAgIC0tYW1iZXItZ2xvdzogcmdiYSgyNTEsIDE5MSwgMzYsIDAuMSk7XG4gICAgLS1lbWVyYWxkOiAjMzRkMzk5O1xuICAgIC0tZW1lcmFsZC1kYXJrOiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQpO1xuICAgIC0tZW1lcmFsZC1saWdodDogdmFyKC0tY2F0YWxvZy1lbWVyYWxkLXNvZnQpO1xuICAgIC0tcm9zZTogI2ZkYTRhZjtcbiAgICAtLXJvc2UtbGlnaHQ6IHZhcigtLWNhdGFsb2ctcm9zZS1zb2Z0KTtcbiAgICAtLXNreTogdmFyKC0tY2F0YWxvZy1za3kpO1xuICAgIC0tc2t5LWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXNreS1zb2Z0KTtcbiAgICAtLXBhcGVyOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tYmctY2FudmFzOiAjMTQxMDIwO1xuICAgIC0tYm9yZGVyLXNvZnQ6IHZhcigtLWNhdGFsb2ctYm9yZGVyKTtcbiAgICAtLWNhcmQtYmc6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jYXJkLXNoYWRvdzogMCAxMnB4IDM2cHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAtLWNvdXJzZS1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tcHJvZHVjdC1zdXJmYWNlOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tY291cnNlLWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1wcm9kdWN0LWFjY2VudC1yZ2I6IDE5NiwgMTgxLCAyNTM7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2FudmFzKTtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pbmspO1xuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgIC0taW9uLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuXG4gICAgLmJyYW5kIHsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cblxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpOyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIC5iZyB7IGJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IH1cbiAgICBpb24tY2FyZDpub3QoLmlvbi1jb2xvcikgeyAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUgeyBjb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuICAgIGlvbi1jYXJkLWhlYWRlcltjb2xvcj0ncHJpbWFyeSddIHtcbiAgICAgIC8vIElvbmljJ3MgLmlvbi1jb2xvci1wcmltYXJ5IGRlY2xhcmVzIHRoZXNlIHRva2VucyB3aXRoICFpbXBvcnRhbnQuXG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW5rKSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgfVxuICAgIGlvbi1saXN0Om5vdCguaW9uLWNvbG9yKSB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgaW9uLWl0ZW06bm90KC5pb24tY29sb3IpIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyAtLWNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWljb24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgLS1jYW5jZWwtYnV0dG9uLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgIH1cbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLXNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdsaWdodCddLCBpb24tbGFiZWxbY29sb3I9J2RhcmtlciddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgaW9uLWxhYmVsW2NvbG9yPSdtZWRpdW0nXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLW11dGVkKSAhaW1wb3J0YW50OyB9XG4gIH1cbn1cblxuLy8gQW5ndWxhciBkb2VzIG5vdCBhdHRhY2ggZW5jYXBzdWxhdGlvbiBhdHRyaWJ1dGVzIHRvIGNvbnRlbnQgaW5zZXJ0ZWQgYnkgaW5uZXJIVE1MLlxuLy8gS2VlcCBkZWVwIHJ1bGVzIGFuY2hvcmVkIHRvIGVhY2ggcGFnZSdzIG93biBkZXNjcmlwdGlvbiBjb250YWluZXIuXG5AbWl4aW4gcmljaC10ZXh0KCRjb250YWluZXIpIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgOjpuZy1kZWVwIHtcbiAgICAjeyRjb250YWluZXJ9IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIDp3aGVyZShwLCBzcGFuLCBkaXYsIGxpLCBzdHJvbmcsIGIsIGVtLCBpLCBmb250LCB0ZCwgdGgpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6d2hlcmUoaDEsIGgyLCBoMywgaDQsIGg1LCBoNikgeyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICBhIHsgY29sb3I6IHZhcigtLXB1cnBsZSkgIWltcG9ydGFudDsgfVxuICAgICAgYmxvY2txdW90ZSwgcHJlLCBjb2RlIHsgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0KSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0taW5rKSAhaW1wb3J0YW50OyB9XG4gICAgICB0YWJsZSwgdGQsIHRoIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCkgIWltcG9ydGFudDsgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 19818:
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/pages/article/product-article-by-id/product-article-by-id.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" color=\"lightest\" defaultHref=\"/Product\"></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\">{{\r\n        article ? article.name : \"مقاله\"\r\n      }}</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n        <ion-button (click)=\"showSearchbar = true\">\r\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\n<ion-searchbar\r\n        dir=\"rtl\"\r\n        *ngIf=\"showSearchbar\"\r\n        showCancelButton=\"always\"\r\n        [(ngModel)]=\"queryText\"\r\n        placeholder=\"جستجوی فروشگاه\"\r\n        (ionCancel)=\"onCancel()\"\r\n        (keyup.enter)=\"search()\"\r\n      ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <div *ngIf=\"!isLoading\" class=\"bg\">\r\n      <ion-grid *ngIf=\"article\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\">\r\n            <ion-row dir=\"rtl\">\r\n              <ion-col size=\"12\" offset=\"0\" size-lg=\"4\" offset-lg=\"0\">\r\n                <ion-card *ngIf=\"article.sellerUser\">\r\n                  <ion-card-header class=\"text-center\" color=\"primary\">\r\n                    مشخصات فروشنده\r\n                  </ion-card-header>\r\n                  <ion-card-content class=\"text-center ion-margin-top\">\r\n                    <ion-avatar class=\"text-center avatar\">\r\n                      <img\r\n                        [src]=\"article.sellerUser.userAvatarAddress\"\r\n                        [alt]=\"article.sellerUser.resume\"\r\n                        [title]=\"getTeacherName()\"\r\n                      />\r\n                    </ion-avatar>\r\n                    <br />\r\n                    <p class=\"description\">\r\n                      {{ article.sellerUser.resume + \" \" }}\r\n                      <a\r\n                        class=\"decoration-none\"\r\n                        routerLink=\"{{ '/Sellers/' + article.sellerUser.id }}\"\r\n                        ><ion-text color=\"success\" class=\"link\">\r\n                          (رزومه)\r\n                        </ion-text></a\r\n                      >\r\n                    </p>\r\n                    <ion-item *ngIf=\"article.sellerUser && article.sellerUser.isRested\">\r\n                      <ion-label class=\"text-center\">\r\n                        <ion-badge color=\"danger\" mode=\"md\">فروشنده در مرخصی میباشد</ion-badge>\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n  \r\n                <ion-card>\r\n                  <ion-card-header color=\"primary\">\r\n                    <!-- <ion-card-subtitle dir=\"rtl\" class=\"text-center\"\r\n                      ><ion-label color=\"medium\">تعداد بازدید: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        {{ article.viewCount }}\r\n                      </ion-text>\r\n                      <ion-icon name=\"eye-outline\"></ion-icon>\r\n                    </ion-card-subtitle> -->\r\n                    <ion-card-title class=\"text-center\"\r\n                      >اطلاعات مقاله</ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                    <ion-list>\r\n                      <ion-item *ngIf=\"article.sellerUser\">\r\n                        <ion-label>فروشنده: </ion-label>\r\n                        <ion-text color=\"warning\">\r\n                          {{\r\n                            article.sellerUser.name +\r\n                              \" \" +\r\n                              article.sellerUser.family\r\n                          }}\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"school-outline\"></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item>\r\n                        <ion-label>تعداد بازدید:</ion-label>\r\n                        <ion-text color=\"success\">\r\n                          <h5>{{ article.viewCount }}</h5>\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"eye-outline\"></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item *ngIf=\"article.createDate\">\r\n                        <ion-label>تاریخ ثبت مقاله: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          <h5>{{ article.createDate | persianDate }}</h5>\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\r\n                      </ion-item>\r\n                      <ion-item *ngIf=\"article.lastUpdateDate\">\r\n                        <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                        <ion-text color=\"medium\">\r\n                          <h5>{{ article.lastUpdateDate | persianDate }}</h5>\r\n                        </ion-text>\r\n                        <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\r\n                      </ion-item>\r\n                    </ion-list>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n                <section *ngIf=\"windowWidth > 600\">\r\n                  <ion-card *ngIf=\"isLikeShow() && isUserLikedLoading\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >درحال دریافت لایک</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content dir=\"ltr\">\r\n                      <div class=\"text-center\">\r\n                        <ion-spinner name=\"dots\"></ion-spinner>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <ion-card *ngIf=\"\r\n                  isLikeShow() &&\r\n                  article.userLiked != null &&\r\n                  !isUserLikedLoading\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <!-- <ion-card-subtitle class=\"text-center\"\r\n                        >نظر شما اولویت ماست</ion-card-subtitle\r\n                      > -->\r\n                      <ion-card-title class=\"text-center\"\r\n                        >این مقاله را میپسندید؟</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <div *ngIf=\"isLikeLoadingShow\" class=\"ion-margin-top\">\r\n                        <ion-grid dir=\"ltr\">\r\n                          <ion-row>\r\n                            <ion-col class=\"text-center full-width\">\r\n                              <ion-spinner\r\n                                class=\"full-width\"\r\n                                name=\"dots\"\r\n                              ></ion-spinner>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </div>\r\n                      <div *ngIf=\"!isLikeLoadingShow\" class=\"ion-margin-top\">\r\n                        <ion-button\r\n                          color=\"success\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                          (click)=\"OnLike(true)\"\r\n                          *ngIf=\"!article.userLiked\"\r\n                        >\r\n                          میپسندم\r\n                          <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          expand=\"block\"\r\n                          fill=\"outline\"\r\n                          shape=\"round\"\r\n                          (click)=\"OnLike(false)\"\r\n                          *ngIf=\"article.userLiked\"\r\n                        >\r\n                          نمی پسندم\r\n                          <ion-icon\r\n                            slot=\"start\"\r\n                            name=\"heart-dislike-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-item *ngIf=\"article.userLiked\">\r\n                          <ion-label color=\"warning\">پسندیده شد</ion-label>\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            name=\"heart\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <ion-card>\r\n                    <ion-card-header color=\"primary\" dir=\"rtl\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >به اشتراک گذاری</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-item>\r\n                        <ion-buttons class=\"full-width\">\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              [href]=\"whatsappShare\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"success\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-whatsapp\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://t.me/share/url?url=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"telegram\"\r\n                                slot=\"icon-only\"\r\n                                name=\"paper-plane-outline\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://www.facebook.com/sharer/sharer.php?u=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"facebook\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-facebook\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://twitter.com/intent/tweet?url=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"twitter\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-twitter\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-item>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          button\r\n                          (click)=\"copyText('avalamooz.ir' + '/pa/' + article.id)\"\r\n                        >\r\n                          <ion-label class=\"text-center\"\r\n                            >avalamooz.ir/pa/{{ article.id }}</ion-label\r\n                          >\r\n                          <ion-icon\r\n                            class=\"ion-margin-start\"\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            name=\"clipboard-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <!-- <ion-card>\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle class=\"text-center\"\r\n                        >کلیک کنید کپی شود</ion-card-subtitle\r\n                      >\r\n                      <ion-card-title class=\"text-center\"\r\n                        >لینک کوتاه</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-item\r\n                        button\r\n                        (click)=\"copyText('avalamooz.ir' + '/a/' + article.id)\"\r\n                      >\r\n                        <ion-label class=\"text-center\"\r\n                          >avalamooz.ir/a/{{ article.id }}</ion-label\r\n                        >\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"clipboard-outline\"\r\n                        ></ion-icon>\r\n                      </ion-item>\r\n                    </ion-card-content>\r\n                  </ion-card> -->\r\n                  <ion-card *ngIf=\"links.length > 0\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >لینک های مفید</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          [href]=\"link.url\"\r\n                          class=\"text-center\"\r\n                          *ngFor=\"let link of links\"\r\n                          [title]=\"link.name\"\r\n                        >\r\n                          <ion-label>{{ link.name }}</ion-label>\r\n                          <ion-icon\r\n                            color=\"secondary\"\r\n                            slot=\"start\"\r\n                            name=\"link-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <ion-card *ngIf=\"tags.length > 0\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >برچسب ها</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          href=\"{{\r\n                            'http://localhost:4300' + '/pa/' + article.id\r\n                          }}\"\r\n                          class=\"text-center\"\r\n                          *ngFor=\"let tag of tags\"\r\n                          [title]=\"tag.name\"\r\n                        >\r\n                          <ion-label color=\"medium\" style=\"font-size: 12px !important;\">{{ tag.name }}</ion-label>\r\n                          <ion-icon\r\n                            color=\"instagram\"\r\n                            slot=\"start\"\r\n                            name=\"pricetag-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </section>\r\n              </ion-col>\r\n  \r\n              <ion-col size=\"12\" offset=\"0\" size-lg=\"8\" offset-lg=\"0\">\r\n                <ion-card>\r\n                  <ion-card-header>\r\n                    <ion-card-title class=\"text-center\"\r\n                      ><a\r\n                        class=\"decoration-none\"\r\n                        routerLink=\"{{ '/pa/' + article.id }}\"\r\n                      >\r\n                        <h1>\r\n                          <ion-text class=\"link\" color=\"light\">\r\n                            {{ article.name }}</ion-text\r\n                          >\r\n                        </h1>\r\n                      </a></ion-card-title\r\n                    >\r\n                  </ion-card-header>\r\n                  <section dir=\"rtl\" class=\"justify\">\r\n                    <ion-img\r\n                      class=\"ion-margin-bottom c-a-images\"\r\n                      [src]=\"article.imageUrl\"\r\n                      [alt]=\"article.name\"\r\n                      [title]=\"article.name\"\r\n                    ></ion-img>\r\n                    <ion-label\r\n                      ><h2>\r\n                        <b\r\n                          ><ion-text class=\"link\" color=\"light\">{{\r\n                            article.name\r\n                          }}</ion-text></b\r\n                        >\r\n                      </h2></ion-label\r\n                    >\r\n                    <br />\r\n                    <p [innerHTML]=\"article.shortDescription\"></p>\r\n                    <br />\r\n                    <p [innerHTML]=\"article.description\"></p>\r\n                  </section>\r\n                </ion-card>\r\n                <section *ngIf=\"windowWidth <= 600\">\r\n                  <ion-card *ngIf=\"isLikeShow() && isUserLikedLoading\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >درحال دریافت لایک</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content dir=\"ltr\">\r\n                      <div class=\"text-center\">\r\n                        <ion-spinner name=\"dots\"></ion-spinner>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <ion-card *ngIf=\"\r\n                  isLikeShow() &&\r\n                  article.userLiked != null &&\r\n                  !isUserLikedLoading\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <!-- <ion-card-subtitle class=\"text-center\"\r\n                        >نظر شما اولویت ماست</ion-card-subtitle\r\n                      > -->\r\n                      <ion-card-title class=\"text-center\"\r\n                        >این مقاله را میپسندید؟</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <div *ngIf=\"isLikeLoadingShow\" class=\"ion-margin-top\">\r\n                        <ion-grid dir=\"ltr\">\r\n                          <ion-row>\r\n                            <ion-col class=\"text-center full-width\">\r\n                              <ion-spinner\r\n                                class=\"full-width\"\r\n                                name=\"dots\"\r\n                              ></ion-spinner>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </div>\r\n                      <div *ngIf=\"!isLikeLoadingShow\" class=\"ion-margin-top\">\r\n                        <ion-button\r\n                          color=\"success\"\r\n                          expand=\"block\"\r\n                          fill=\"solid\"\r\n                          shape=\"round\"\r\n                          (click)=\"OnLike(true)\"\r\n                          *ngIf=\"!article.userLiked\"\r\n                        >\r\n                          میپسندم\r\n                          <ion-icon slot=\"start\" name=\"heart\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button\r\n                          color=\"danger\"\r\n                          expand=\"block\"\r\n                          fill=\"outline\"\r\n                          shape=\"round\"\r\n                          (click)=\"OnLike(false)\"\r\n                          *ngIf=\"article.userLiked\"\r\n                        >\r\n                          نمی پسندم\r\n                          <ion-icon\r\n                            slot=\"start\"\r\n                            name=\"heart-dislike-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                        <ion-item *ngIf=\"article.userLiked\">\r\n                          <ion-label color=\"warning\">پسندیده شد</ion-label>\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            name=\"heart\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </div>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <ion-card>\r\n                    <ion-card-header color=\"primary\" dir=\"rtl\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >به اشتراک گذاری</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content dir=\"rtl\" class=\"ion-margin-top\">\r\n                      <ion-item>\r\n                        <ion-buttons class=\"full-width\">\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              [href]=\"whatsappShare\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"success\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-whatsapp\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://t.me/share/url?url=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"telegram\"\r\n                                slot=\"icon-only\"\r\n                                name=\"paper-plane-outline\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://www.facebook.com/sharer/sharer.php?u=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"facebook\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-facebook\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                          <ion-button class=\"social\">\r\n                            <a\r\n                              class=\"full-width\"\r\n                              href=\"{{\r\n                                'https://twitter.com/intent/tweet?url=http://localhost:4300/pa/' +\r\n                                  article.id\r\n                              }}\"\r\n                              target=\"_blank\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"twitter\"\r\n                                slot=\"icon-only\"\r\n                                name=\"logo-twitter\"\r\n                              ></ion-icon>\r\n                            </a>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-item>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          button\r\n                          (click)=\"copyText('avalamooz.ir' + '/pa/' + article.id)\"\r\n                        >\r\n                          <ion-label class=\"text-center\"\r\n                            >avalamooz.ir/pa/{{ article.id }}</ion-label\r\n                          >\r\n                          <ion-icon\r\n                            class=\"ion-margin-start\"\r\n                            color=\"success\"\r\n                            slot=\"start\"\r\n                            name=\"clipboard-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  <!-- <ion-card>\r\n                    <ion-card-header>\r\n                      <ion-card-subtitle class=\"text-center\"\r\n                        >کلیک کنید کپی شود</ion-card-subtitle\r\n                      >\r\n                      <ion-card-title class=\"text-center\"\r\n                        >لینک کوتاه</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-item\r\n                        button\r\n                        (click)=\"copyText('avalamooz.ir' + '/pa/' + article.id)\"\r\n                      >\r\n                        <ion-label class=\"text-center\"\r\n                          >avalamooz.ir/pa/{{ article.id }}</ion-label\r\n                        >\r\n                        <ion-icon\r\n                          color=\"success\"\r\n                          slot=\"start\"\r\n                          name=\"clipboard-outline\"\r\n                        ></ion-icon>\r\n                      </ion-item>\r\n                    </ion-card-content>\r\n                  </ion-card> -->\r\n                  <ion-card *ngIf=\"links.length > 0\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >لینک های مفید</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          [href]=\"link.url\"\r\n                          class=\"text-center\"\r\n                          *ngFor=\"let link of links\"\r\n                          [title]=\"link.name\"\r\n                        >\r\n                          <ion-label>{{ link.name }}</ion-label>\r\n                          <ion-icon\r\n                            color=\"secondary\"\r\n                            slot=\"start\"\r\n                            name=\"link-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                  \r\n                  <ion-card *ngIf=\"tags.length > 0\">\r\n                    <ion-card-header color=\"primary\">\r\n                      <ion-card-title class=\"text-center\"\r\n                        >برچسب ها</ion-card-title\r\n                      >\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                      <ion-list>\r\n                        <ion-item\r\n                          href=\"{{\r\n                            'http://localhost:4300' + '/pa/' + article.id\r\n                          }}\"\r\n                          class=\"text-center\"\r\n                          *ngFor=\"let tag of tags\"\r\n                          [title]=\"tag.name\"\r\n                        >\r\n                          <ion-label color=\"medium\" style=\"font-size: 12px !important;\">{{ tag.name }}</ion-label>\r\n                          <ion-icon\r\n                            color=\"instagram\"\r\n                            slot=\"start\"\r\n                            name=\"pricetag-outline\"\r\n                          ></ion-icon>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </section>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid *ngIf=\"!article\">\r\n        <ion-row>\r\n          <ion-col size=\"10\" offset=\"1\" size-md=\"8\" offset-md=\"2\">\r\n            <ion-card dir=\"rtl\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-subtitle class=\"text-center\"\r\n                  >موردی یافت نشد</ion-card-subtitle\r\n                >\r\n                <ion-card-title class=\"text-center\">خطای 404</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <ion-img\r\n                  class=\"not-found\"\r\n                  src=\"./assets/images/error404.png\"\r\n                ></ion-img>\r\n                <ion-footer>\r\n                  <ion-toolbar>\r\n                    <ion-title\r\n                      ><h2 class=\"text-center\">موردی یافت نشد</h2></ion-title\r\n                    >\r\n                  </ion-toolbar>\r\n                </ion-footer>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div *ngIf=\"isLoading\" class=\"bg\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"10\" offset=\"1\" size-md=\"8\" offset-md=\"2\">\r\n            <ion-card dir=\"rtl\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\">درحال دریافت</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content dir=\"ltr\">\r\n                <div class=\"text-center\">\r\n                  <ion-spinner name=\"dots\"></ion-spinner>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <app-footer></app-footer>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"share-social-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"end\">\r\n        <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n  \r\n      <ion-fab-list side=\"top\">\r\n        <ion-fab-button color=\"instagram\">\r\n          <a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ instagram }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-instagram\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"instagram\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ twitch }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-twitch\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"discord\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ discord }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-discord\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"danger\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ youtube }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-youtube\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"danger\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ pinterest }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-pinterest\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"facebook\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ facebook }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-facebook\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"twitter\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ twiter }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-twitter\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"twitter\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ linkedin }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"logo-linkedin\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"telegram\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ telegram }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              name=\"paper-plane-outline\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n        <ion-fab-button color=\"lightest\"\r\n          ><a\r\n            class=\"full-width full-height social-icon-container\"\r\n            href=\"{{ aparat }}\"\r\n            target=\"_blank\"\r\n          >\r\n            <ion-icon\r\n              class=\"social-icon\"\r\n              color=\"lightest\"\r\n              src=\"/assets/icon/logo-aparat.svg\"\r\n            ></ion-icon></a\r\n        ></ion-fab-button>\r\n      </ion-fab-list>\r\n    </ion-fab>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n      <ion-fab-button color=\"warning\" (click)=\"goTop()\">\r\n        <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_article_product-article-by-id_product-article-by-id_module_ts.js.map