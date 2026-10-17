"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_article_article-by-id_article-by-id_module_ts"],{

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

/***/ 60561:
/*!**********************************************************************************!*\
  !*** ./src/app/view/pages/article/article-by-id/article-by-id-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleByIdRoutingModule": () => (/* binding */ ArticleByIdRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _article_by_id_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-by-id.component */ 67992);




const routes = [{ path: '', component: _article_by_id_component__WEBPACK_IMPORTED_MODULE_0__.ArticleByIdComponent }];
let ArticleByIdRoutingModule = class ArticleByIdRoutingModule {
};
ArticleByIdRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ArticleByIdRoutingModule);



/***/ }),

/***/ 67992:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/article/article-by-id/article-by-id.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleByIdComponent": () => (/* binding */ ArticleByIdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _article_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-by-id.component.html?ngResource */ 43629);
/* harmony import */ var _article_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-by-id.component.scss?ngResource */ 10353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/service/article/article.service */ 56847);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/model/person/TeacherModel */ 55550);














let ArticleByIdComponent = class ArticleByIdComponent {
    constructor(activatedRoute, articleService, loadingController, toastController, router, title, meta, domSanitizer, menuCtrl) {
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.domSanitizer = domSanitizer;
        this.menuCtrl = menuCtrl;
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
        _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.getWindowWidth().subscribe(res => {
            this.windowWidth = res;
        });
    }
    goTop() {
        this.content.scrollToTop(3000);
    }
    updateTitle(title = 'اول آموز - مرجع مقالات و روش‌های نوین آموزش ابتدایی') {
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
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.toast(this.toastController, 'کپی شد');
    }
    doRefresh(event) {
        setTimeout(() => {
            // SharedIonic.loading(this.loadingController);
            // this.activatedRoute.params.subscribe(params => {
            //   // tslint:disable-next-line: radix
            //   const id = parseInt(params.id);
            //   if (GAccount.IsLoggedIn()) {
            //     this.articleService.GetArticleByAuth(id).subscribe(
            //       res => {
            //         if (res.status === GResponse.SuccessStatus) {
            //           SharedIonic.dismissLoading(this.loadingController);
            //           this.article = res.data;
            //           this.articleService.GetArticleTags(+id).subscribe(
            //             res => {
            //               if (GResponse.SuccessStatus === res.status) {
            //                 this.tags = res.data;
            //               } else {
            //               }
            //             },
            //             err => {
            //             }
            //           );
            //           if (GAccount.IsLoggedIn() && GAccount.IsBuyer()) {
            //             this.articleService.AddOrUpdateUserViewedArticle(res.data.id).subscribe(
            //               res => {
            //                 if (res.status === GResponse.SuccessStatus) {
            //                   this.article.viewCount++;
            //                 }
            //               }
            //             );
            //           }
            //         } else {
            //           SharedIonic.dismissLoading(this.loadingController);
            //           // this.router.navigateByUrl(Urls.Page404Url);
            //         }
            //       },
            //       err => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.router.navigateByUrl(Urls.Page404Url);
            //       }
            //     );
            //   } else {
            //     this.articleService.GetArticleById(id).subscribe(
            //       res => {
            //         if (res.status === GResponse.SuccessStatus) {
            //           SharedIonic.dismissLoading(this.loadingController);
            //           this.article = res.data;
            //           this.articleService.GetArticleTags(+id).subscribe(
            //             res => {
            //               if (GResponse.SuccessStatus === res.status) {
            //                 this.tags = res.data;
            //               } else {
            //               }
            //             },
            //             err => {
            //             }
            //           );
            //           if (GAccount.IsLoggedIn() && GAccount.IsBuyer()) {
            //             this.articleService.AddOrUpdateUserViewedArticle(res.data.id).subscribe(
            //               res => {
            //                 if (res.status === GResponse.SuccessStatus) {
            //                   this.article.viewCount++;
            //                 }
            //               }
            //             );
            //           }
            //         } else {
            //           SharedIonic.dismissLoading(this.loadingController);
            //           // this.router.navigateByUrl(Urls.Page404Url);
            //         }
            //       },
            //       err => {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.router.navigateByUrl(Urls.Page404Url);
            //       }
            //     );
            //   }
            // });
            location.reload();
            event.target.complete();
        }, 2000);
    }
    getData(id) {
        this.articleService.GetArticleDetailById(id).subscribe(ress => {
            this.isLoading = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
            if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                this.article = ress.data;
                this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/a/' + this.article.id);
                this.updateTitle('اول آموز - ' + this.article.name);
                this.updateOgUrl('http://localhost:4300/a/' + this.article.id);
                this.updateDescription('اول آموز - ' + this.article.shortDescription);
                this.articleService.GetArticleTags(+id).subscribe(res => {
                    if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.tags = res.data;
                    }
                    else {
                    }
                }, err => {
                });
                if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn()) {
                    this.articleService.GetArticleDetailUserLikedById(id).subscribe(res => {
                        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
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
                this.articleService.GetArticleDetailViewedShowById(id).subscribe(res => {
                    if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.article.viewCount = res.data;
                    }
                    else {
                        this.article.viewCount = 1;
                    }
                }, err => {
                    this.article.viewCount = 1;
                });
                this.articleService.GetArticleDetailTeacherById(id).subscribe(res => {
                    if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus === res.status) {
                        this.article.teacherUser = new _data_model_person_TeacherModel__WEBPACK_IMPORTED_MODULE_8__.TeacherModel(res.data.id, res.data.name, res.data.family, res.data.resume, res.data.userAvatarAddress, res.data.isRested);
                    }
                    else {
                        this.article.teacherUser = null;
                    }
                }, err => {
                    this.article.teacherUser = null;
                });
                if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsBuyer()) {
                    this.articleService.AddOrUpdateUserViewedArticle(ress.data.id).subscribe(res => {
                        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                            this.article.viewCount++;
                        }
                    });
                }
            }
            else {
                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
                // this.router.navigateByUrl(Urls.Page404Url);
            }
        }, err => {
            this.isLoading = false;
            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.dismissLoading(this.loadingController);
            this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.Page404Url);
        });
    }
    ngOnInit() {
        this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Instagram;
        this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twiter;
        this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Facebook;
        this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Telegram;
        this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Youtube;
        this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Pinterest;
        this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Linkedin;
        this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Twitch;
        this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Aparat;
        this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.Discord;
        _core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.getHelpfulLinks().subscribe(res => {
            if (res != null) {
                if (res.length > 0) {
                    res.forEach(link => {
                        this.links.push(link);
                    });
                }
            }
        });
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_7__.SharedIonic.loading(this.loadingController);
        this.activatedRoute.params.subscribe(params => {
            // tslint:disable-next-line: radix
            const id = parseInt(params.id);
            this.isUserLikedLoading = true;
            this.getData(+id);
            // if (GAccount.IsLoggedIn()) {
            //   this.articleService.GetArticleByAuth(id).subscribe(
            //     res => {
            //       this.isLoading = false;
            //       if (res.status === GResponse.SuccessStatus) {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.article = res.data;
            //         this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/a/' + this.article.id);
            //         this.updateTitle('اول آموز - ' + this.article.name);
            //         this.updateOgUrl('http://localhost:4300/A/' + this.article.id);
            //         this.updateDescription('اول آموز - ' + this.article.shortDescription);
            //         this.articleService.GetArticleTags(+id).subscribe(
            //           res => {
            //             if (GResponse.SuccessStatus === res.status) {
            //               this.tags = res.data;
            //             } else {
            //             }
            //           },
            //           err => {
            //           }
            //         );
            //         if (GAccount.IsLoggedIn() && GAccount.IsBuyer()) {
            //           this.articleService.AddOrUpdateUserViewedArticle(res.data.id).subscribe(
            //             res => {
            //               if (res.status === GResponse.SuccessStatus) {
            //                 this.article.viewCount++;
            //               }
            //             }
            //           );
            //         }
            //       } else {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         // this.router.navigateByUrl(Urls.Page404Url);
            //       }
            //     },
            //     err => {
            //       this.isLoading = false;
            //       SharedIonic.dismissLoading(this.loadingController);
            //       this.router.navigateByUrl(Urls.Page404Url);
            //     }
            //   );
            // } else {
            //   this.articleService.GetArticleById(id).subscribe(
            //     res => {
            //       this.isLoading = false;
            //       if (res.status === GResponse.SuccessStatus) {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         this.article = res.data;
            //         this.whatsappShare = this.domSanitizer.bypassSecurityTrustUrl('whatsapp://send?text=http://localhost:4300/a/' + this.article.id);
            //         this.updateTitle('اول آموز - ' + this.article.name);
            //         this.updateOgUrl('http://localhost:4300/A/' + this.article.id);
            //         this.updateDescription('اول آموز - ' + this.article.shortDescription);
            //         this.articleService.GetArticleTags(+id).subscribe(
            //           res => {
            //             if (GResponse.SuccessStatus === res.status) {
            //               this.tags = res.data;
            //             } else {
            //             }
            //           },
            //           err => {
            //           }
            //         );
            //         if (GAccount.IsLoggedIn() && GAccount.IsBuyer()) {
            //           this.articleService.AddOrUpdateUserViewedArticle(res.data.id).subscribe(
            //             res => {
            //               if (res.status === GResponse.SuccessStatus) {
            //                 this.article.viewCount++;
            //               }
            //             }
            //           );
            //         }
            //       } else {
            //         SharedIonic.dismissLoading(this.loadingController);
            //         // this.router.navigateByUrl(Urls.Page404Url);
            //       }
            //     },
            //     err => {
            //       this.isLoading = false;
            //       SharedIonic.dismissLoading(this.loadingController);
            //       this.router.navigateByUrl(Urls.Page404Url);
            //     }
            //   );
            // }
        });
    }
    getTeacherName() {
        if (this.article.teacherUser == undefined || this.article.teacherUser == null) {
            return '';
        }
        const name = this.article.teacherUser.name != null ? this.article.teacherUser.name : '';
        const family = this.article.teacherUser.family != null ? this.article.teacherUser.family : '';
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
            .navigate(['Home', 'Search'], {
            queryParams: {
                title: this.queryText
            }
        });
    }
    OnLike(like) {
        if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn() && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsBuyer()) {
            this.isLikeLoadingShow = true;
            this.articleService.AddOrUpdateUserLikedArticle(this.article.id, like).subscribe(res => {
                this.isLikeLoadingShow = false;
                if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                    this.article.userLiked = like;
                }
            }, err => {
                this.isLikeLoadingShow = false;
            });
        }
    }
    isLikeShow() {
        return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_3__.GAccount.IsLoggedIn();
    }
    toggleAppMenu() {
        this.menuCtrl.toggle('start');
    }
};
ArticleByIdComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_2__.ArticleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController }
];
ArticleByIdComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent,] }]
};
ArticleByIdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-article-by-id',
        template: _article_by_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_article_by_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticleByIdComponent);



/***/ }),

/***/ 47764:
/*!**************************************************************************!*\
  !*** ./src/app/view/pages/article/article-by-id/article-by-id.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleByIdModule": () => (/* binding */ ArticleByIdModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _article_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-by-id-routing.module */ 60561);
/* harmony import */ var _article_by_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-by-id.component */ 67992);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);












let ArticleByIdModule = class ArticleByIdModule {
};
ArticleByIdModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_article_by_id_component__WEBPACK_IMPORTED_MODULE_2__.ArticleByIdComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _article_by_id_routing_module__WEBPACK_IMPORTED_MODULE_1__.ArticleByIdRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_4__.PersianDateModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule
        ]
    })
], ArticleByIdModule);



/***/ }),

/***/ 10353:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/article/article-by-id/article-by-id.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.16);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --emerald: #10b981;\n  --emerald-dark: #059669;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", system-ui, sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  font: inherit;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\nion-content {\n  --background: var(--bg-canvas);\n}\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1280px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.menu-toggle {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  transition: all 0.2s ease;\n}\n\n.menu-toggle:hover {\n  background: var(--catalog-purple-hover, #ded7fb);\n  transform: scale(1.04);\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n  border-radius: 12px;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -5px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 13px;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n}\n\n.main-nav .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  color: var(--ink);\n  border-radius: 12px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n\n.main-nav .nav-link-btn ion-icon {\n  font-size: 16px;\n  color: var(--purple);\n}\n\n.main-nav .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav .nav-link-btn.active-nav {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--catalog-soft, #f8fafc);\n  color: var(--ink);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  border: 1px solid var(--border-soft);\n  transition: all 0.2s ease;\n}\n\n.icon-button:hover {\n  color: var(--purple);\n  border-color: var(--purple);\n  background: var(--purple-light);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%));\n  color: #fff !important;\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 14px;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transition: all 0.2s ease;\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.login-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.32);\n}\n\n.header-search-bar {\n  background: var(--catalog-surface, #fff);\n  border-top: 1px solid var(--border-soft);\n  padding: 12px 24px;\n}\n\n.header-search-bar .search-input-wrap {\n  max-width: 680px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--catalog-soft, #f8fafc);\n  border: 1.5px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 6px 14px;\n}\n\n.header-search-bar .search-input-wrap ion-icon {\n  color: var(--muted);\n  font-size: 20px;\n}\n\n.header-search-bar .search-input-wrap input {\n  flex: 1;\n  border: 0;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ink);\n  outline: none;\n}\n\n.header-search-bar .search-input-wrap input::placeholder {\n  color: var(--muted);\n}\n\n.article-page {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 24px 20px 64px;\n}\n\n.article-hero {\n  position: relative;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  padding: 40px;\n  box-shadow: 0 10px 32px rgba(109, 40, 217, 0.05);\n  margin-bottom: 32px;\n  overflow: hidden;\n}\n\n.article-hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background: linear-gradient(90deg, var(--purple) 0%, var(--amber) 50%, var(--emerald) 100%);\n}\n\n.article-hero .article-hero__glow-1 {\n  position: absolute;\n  top: -80px;\n  inset-inline-end: -80px;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background: radial-gradient(circle, var(--purple-glow), transparent 70%);\n  pointer-events: none;\n}\n\n.article-hero .article-hero__glow-2 {\n  position: absolute;\n  bottom: -60px;\n  inset-inline-start: -60px;\n  width: 260px;\n  height: 260px;\n  border-radius: 50%;\n  background: radial-gradient(circle, var(--amber-glow), transparent 70%);\n  pointer-events: none;\n}\n\n.article-hero__inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  align-items: center;\n  gap: 36px;\n}\n\n.breadcrumbs {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--muted);\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n\n.breadcrumbs a {\n  color: var(--purple);\n  font-weight: 700;\n}\n\n.breadcrumbs a:hover {\n  text-decoration: underline;\n}\n\n.breadcrumbs ion-icon {\n  font-size: 14px;\n}\n\n.breadcrumbs span {\n  color: var(--ink);\n  font-weight: 700;\n}\n\n.article-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--purple);\n  background: var(--purple-light);\n  padding: 5px 12px;\n  border-radius: 999px;\n  margin-bottom: 14px;\n}\n\n.article-kicker ion-icon {\n  color: var(--amber);\n}\n\n.article-hero h1 {\n  font-size: clamp(22px, 3.2vw, 32px);\n  font-weight: 900;\n  line-height: 1.45;\n  color: var(--ink);\n  margin-bottom: 14px;\n}\n\n.article-lead {\n  font-size: 15px;\n  line-height: 1.9;\n  color: var(--ink-secondary);\n  margin-bottom: 22px;\n}\n\n.hero-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.hero-meta .meta-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: var(--catalog-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  padding: 6px 12px;\n  border-radius: 10px;\n  color: var(--ink);\n  font-weight: 700;\n}\n\n.hero-meta .meta-item ion-icon {\n  font-size: 16px;\n  color: var(--purple);\n}\n\n.hero-meta .article-code {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  font-weight: 800;\n  padding: 5px 10px;\n  border-radius: 8px;\n}\n\n.article-hero__media {\n  margin: 0;\n}\n\n.article-hero__media .article-hero__image {\n  width: 100%;\n  aspect-ratio: 16/10;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 10px 28px rgba(109, 40, 217, 0.08);\n  border: 1px solid var(--border-soft);\n  display: block;\n}\n\n.article-shell {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 28px;\n  align-items: start;\n}\n\n.article-body-card {\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 24px;\n  padding: 36px 40px;\n  box-shadow: 0 6px 24px rgba(109, 40, 217, 0.03);\n  margin-bottom: 28px;\n  font-size: 16px;\n  line-height: 2.1;\n  color: var(--catalog-secondary, #334155);\n}\n\n.article-body-card p {\n  margin-bottom: 20px;\n}\n\n.article-body-card h2, .article-body-card h3, .article-body-card h4 {\n  color: var(--ink);\n  font-weight: 900;\n  margin: 32px 0 16px;\n  position: relative;\n  padding-inline-start: 14px;\n}\n\n.article-body-card h2::before, .article-body-card h3::before, .article-body-card h4::before {\n  content: \"\";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 6px;\n  bottom: 6px;\n  width: 4px;\n  border-radius: 4px;\n  background: var(--purple);\n}\n\n.article-body-card h2 {\n  font-size: 22px;\n}\n\n.article-body-card h3 {\n  font-size: 18px;\n}\n\n.article-body-card ul, .article-body-card ol {\n  margin: 0 0 20px;\n  padding-inline-start: 24px;\n}\n\n.article-body-card ul li, .article-body-card ol li {\n  margin-bottom: 8px;\n}\n\n.article-body-card blockquote {\n  margin: 24px 0;\n  padding: 16px 22px;\n  background: var(--purple-light);\n  border-radius: 14px;\n  border-inline-start: 4px solid var(--purple);\n  color: var(--purple-dark);\n  font-size: 15px;\n  line-height: 1.9;\n}\n\n.article-body-card img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 16px;\n  margin: 20px auto;\n  display: block;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n\n.author-card {\n  background: linear-gradient(135deg, var(--catalog-soft, #fbfaff) 0%, var(--catalog-purple-soft, #f5f3ff) 100%);\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  padding: 26px 28px;\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.author-card .author-card__avatar-wrap {\n  position: relative;\n}\n\n.author-card .author-card__avatar-wrap .author-card__avatar {\n  width: 68px;\n  height: 68px;\n  border-radius: 20px;\n  border: 3px solid var(--catalog-surface, #fff);\n  box-shadow: 0 4px 14px var(--purple-glow);\n}\n\n.author-card .author-card__avatar-wrap .author-card__badge {\n  position: absolute;\n  bottom: -4px;\n  inset-inline-end: -4px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--catalog-action, var(--purple));\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.author-card .author-card__info {\n  flex: 1;\n}\n\n.author-card .author-card__info .eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--purple);\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 2px;\n}\n\n.author-card .author-card__info h2 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 6px;\n}\n\n.author-card .author-card__info .description {\n  font-size: 13px;\n  line-height: 1.8;\n  color: var(--ink-secondary);\n}\n\n.engagement-card {\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n\n.engagement-card .eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--purple);\n  display: block;\n  margin-bottom: 4px;\n}\n\n.engagement-card h2 {\n  font-size: 16px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.engagement-card .engagement-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.engagement-card .like-btn, .engagement-card .unlike-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 800;\n  transition: all 0.2s ease;\n}\n\n.engagement-card .like-btn {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.engagement-card .like-btn:hover {\n  background: var(--catalog-buy, var(--emerald));\n  color: #fff;\n  transform: translateY(-2px);\n}\n\n.engagement-card .unlike-btn {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.engagement-card .unlike-btn:hover {\n  background: var(--catalog-danger, var(--rose));\n  color: #fff;\n}\n\n.engagement-card .liked-state {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--emerald-dark);\n  font-weight: 800;\n  font-size: 13px;\n}\n\n.article-sidebar {\n  position: sticky;\n  top: 96px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.side-card {\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 22px;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.03);\n}\n\n.side-card .side-card__heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--border-soft);\n}\n\n.side-card .side-card__heading .side-card__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.side-card .side-card__heading .eyebrow {\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--muted);\n  display: block;\n}\n\n.side-card .side-card__heading h2 {\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.info-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.info-list li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n}\n\n.info-list li span {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--muted);\n}\n\n.info-list li span ion-icon {\n  color: var(--purple);\n  font-size: 16px;\n}\n\n.info-list li strong {\n  color: var(--ink);\n  font-weight: 800;\n}\n\n.share-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.share-grid .share-button {\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: all 0.2s ease;\n}\n\n.share-grid .share-button.whatsapp {\n  background: var(--catalog-emerald-soft, #dcfce7);\n  color: var(--catalog-emerald, #15803d);\n}\n\n.share-grid .share-button.whatsapp:hover {\n  background: var(--catalog-buy, #22c55e);\n  color: #fff;\n}\n\n.share-grid .share-button.telegram {\n  background: var(--catalog-sky-soft, #e0f2fe);\n  color: var(--catalog-sky, #0369a1);\n}\n\n.share-grid .share-button.telegram:hover {\n  background: var(--catalog-sky-action, #0284c7);\n  color: #fff;\n}\n\n.share-grid .share-button.facebook {\n  background: var(--catalog-purple-soft, #ede9fe);\n  color: var(--catalog-purple, #6d28d9);\n}\n\n.share-grid .share-button.facebook:hover {\n  background: #6d28d9;\n  color: #fff;\n}\n\n.share-grid .share-button.twitter {\n  background: var(--catalog-soft, #f1f5f9);\n  color: var(--catalog-text, #0f172a);\n}\n\n.share-grid .share-button.twitter:hover {\n  background: #0f172a;\n  color: #fff;\n}\n\n.copy-link {\n  width: 100%;\n  padding: 10px 14px;\n  background: var(--catalog-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink-secondary);\n  transition: all 0.2s ease;\n}\n\n.copy-link:hover {\n  border-color: var(--purple);\n  color: var(--purple);\n}\n\n.tag-cloud {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.tag-cloud span {\n  background: var(--catalog-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  color: var(--purple);\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n\n.useful-links {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.useful-links a {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: var(--catalog-soft, #f8fafc);\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  transition: all 0.2s ease;\n}\n\n.useful-links a ion-icon {\n  font-size: 14px;\n  color: var(--purple);\n}\n\n.useful-links a:hover {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.mobile-extras {\n  display: none;\n}\n\n.article-state {\n  padding: 60px 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.article-state .state-card {\n  text-align: center;\n  background: var(--catalog-surface, #fff);\n  border: 1px solid var(--border-soft);\n  border-radius: 24px;\n  padding: 48px 36px;\n  max-width: 520px;\n  width: 100%;\n}\n\n.article-state .state-card .empty-icon {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n\n.article-state .state-card h2 {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 8px;\n}\n\n.article-state .state-card p {\n  font-size: 14px;\n  color: var(--muted);\n  margin-bottom: 24px;\n}\n\n@media (max-width: 960px) {\n  .article-hero__inner {\n    grid-template-columns: 1fr;\n  }\n\n  .article-shell {\n    grid-template-columns: 1fr;\n  }\n\n  .article-sidebar {\n    display: none;\n  }\n\n  .mobile-extras {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .nav-shell {\n    padding: 10px 16px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .article-hero {\n    padding: 24px 20px;\n  }\n\n  .article-body-card {\n    padding: 24px 20px;\n  }\n\n  .engagement-card {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content {\n  color: var(--ink-secondary) !important;\n  background-color: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content :where(p, span, div, li, strong, b, em, i, font, td, th) {\n  color: var(--ink-secondary) !important;\n  background: transparent !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content :where(h1, h2, h3, h4, h5, h6) {\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content a {\n  color: var(--purple) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content blockquote, :host-context(.dark-theme) ::ng-deep .article-body__content pre, :host-context(.dark-theme) ::ng-deep .article-body__content code {\n  background: var(--catalog-soft) !important;\n  color: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ::ng-deep .article-body__content table, :host-context(.dark-theme) ::ng-deep .article-body__content td, :host-context(.dark-theme) ::ng-deep .article-body__content th {\n  border-color: var(--border-soft) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtYnktaWQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXGNvdXJzZVxcX2NhdGFsb2ctZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlGQUFBO0FBUkY7O0FBV0E7RUFBSSxzQkFBQTtBQVBKOztBQVFBO0VBQUksY0FBQTtFQUFnQixxQkFBQTtBQUhwQjs7QUFJQTtFQUFTLGVBQUE7RUFBaUIsU0FBQTtFQUFXLHVCQUFBO0VBQXlCLGFBQUE7QUFHOUQ7O0FBRkE7RUFBVyxvQkFBQTtFQUFzQixjQUFBO0FBT2pDOztBQU5BO0VBQW9CLFNBQUE7RUFBVyxjQUFBO0FBVy9COztBQVRBO0VBQ0UsOEJBQUE7QUFZRjs7QUFOQTtFQUNFLGlFQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBFO0VBQVcsYUFBQTtBQVViOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVBBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJB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Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QURzMUJKOztBQ3AxQkk7RUFBUyxvQkFBQTtBRHUxQmI7O0FDcjFCSTtFQUFjLDhCQUFBO0VBQWdDLGlCQUFBO0FEeTFCbEQ7O0FDeDFCSTtFQUFNLDRCQUFBO0FEMjFCVjs7QUMxMUJJO0VBQTJCLDBCQUFBO0VBQTRCLDJCQUFBO0FEODFCM0Q7O0FDNzFCSTtFQUFpQixpQkFBQTtBRGcyQnJCOztBQy8xQkk7RUFBb0IsbUJBQUE7QURrMkJ4Qjs7QUNqMkJJO0VBRUUsZ0RBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FEazJCTjs7QUNoMkJJO0VBQTJCLHVCQUFBO0FEbTJCL0I7O0FDbDJCSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBRG8yQk47O0FDbDJCSTtFQUE4QiwwQkFBQTtFQUE0QixtQkFBQTtBRHMyQjlEOztBQ3IyQkk7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7QUR1MkJOOztBQ3IyQkk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUR1MkJOOztBQ3IyQkk7RUFBcUQsdUNBQUE7QUR3MkJ6RDs7QUN2MkJJO0VBQTRCLHlDQUFBO0FEMDJCaEM7O0FDbDJCSTtFQUNFLHNDQUFBO0VBQ0Esd0NBQUE7QURxMkJOOztBQ3AyQk07RUFDRSxzQ0FBQTtFQUNBLGtDQUFBO0FEczJCUjs7QUNwMkJNO0VBQWlDLDRCQUFBO0FEdTJCdkM7O0FDdDJCTTtFQUFJLCtCQUFBO0FEeTJCVjs7QUN4MkJNO0VBQXdCLDBDQUFBO0VBQTRDLDRCQUFBO0FENDJCMUU7O0FDMzJCTTtFQUFnQiwyQ0FBQTtBRDgyQnRCIiwiZmlsZSI6ImFydGljbGUtYnktaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi8uLi9jb3Vyc2UvY2F0YWxvZy1kYXJrJyBhcyBjYXRhbG9nO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEF2YWxBbW9veiAtIFNpbmdsZSBBcnRpY2xlIFZpZXcgVGhlbWVcclxuLy8gTWF0Y2hlcyBsZWFybmluZy1sYW5kaW5nOiBjbGVhbiB3aGl0ZSBzdXJmYWNlcywgc29mdCBsaWxhYy9wdXJwbGUgaGlnaGxpZ2h0cyxcclxuLy8gZnJpZW5kbHkgcHJpbWFyeSBzY2hvb2wgdmlzdWFsIGFjY2VudHMsIGFuZCByZWFkYWJsZSBQZXJzaWFuIHR5cG9ncmFwaHkuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuOmhvc3Qge1xyXG4gIC0taW5rOiAjMWUxYjRiO1xyXG4gIC0taW5rLXNlY29uZGFyeTogIzQ3NTU2OTtcclxuICAtLW11dGVkOiAjNjQ3NDhiO1xyXG4gIC0tcHVycGxlOiAjNmQyOGQ5O1xyXG4gIC0tcHVycGxlLWRhcms6ICM1ODFjODc7XHJcbiAgLS1wdXJwbGUtbGlnaHQ6ICNlZGU5ZmU7XHJcbiAgLS1wdXJwbGUtZ2xvdzogcmdiYSgxMDksIDQwLCAyMTcsIDAuMTYpO1xyXG4gIC0tYW1iZXI6ICNmNTllMGI7XHJcbiAgLS1hbWJlci1kYXJrOiAjZDk3NzA2O1xyXG4gIC0tYW1iZXItbGlnaHQ6ICNmZWYzYzc7XHJcbiAgLS1lbWVyYWxkOiAjMTBiOTgxO1xyXG4gIC0tZW1lcmFsZC1kYXJrOiAjMDU5NjY5O1xyXG4gIC0tZW1lcmFsZC1saWdodDogI2QxZmFlNTtcclxuICAtLXJvc2U6ICNmNDNmNWU7XHJcbiAgLS1yb3NlLWxpZ2h0OiAjZmZlNGU2O1xyXG4gIC0tcGFwZXI6ICNmZmZmZmY7XHJcbiAgLS1iZy1jYW52YXM6ICNmY2ZiZmU7XHJcbiAgLS1ib3JkZXItc29mdDogI2VkZTlmNjtcclxuICAtLWNhcmQtYmc6ICNmZmZmZmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIFwiU2hhYm5hbS1NZWRpdW1cIiwgXCJWYXppcm1hdG5cIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmKTtcclxufVxyXG5cclxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cclxuYSB7IGNvbG9yOiBpbmhlcml0OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuYnV0dG9uIHsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBmb250OiBpbmhlcml0OyB9XHJcbmlvbi1pY29uIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbmgxLCBoMiwgaDMsIGg0LCBwIHsgbWFyZ2luOiAwOyBjb2xvcjogaW5oZXJpdDsgfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVG9wIE5hdmlnYXRpb24gSGVhZGVyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5sZWFybmluZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY2F0YWxvZy1zdXJmYWNlLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOTQpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICY6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG59XHJcblxyXG4ubmF2LXNoZWxsIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1wdXJwbGUtaG92ZXIsICNkZWQ3ZmIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5icmFuZC1sb2dvLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZC1zcGFya2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5icmFuZC10aXRsZXMge1xyXG4gIGIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmbGV4OiAxO1xyXG5cclxuICAubmF2LWxpbmstYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUtbmF2IHtcclxuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQsIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXB1cnBsZSkgMCUsIHZhcigtLXB1cnBsZS1kYXJrKSAxMDAlKSk7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMyKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItc2VhcmNoLWJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuXHJcbiAgLnNlYXJjaC1pbnB1dC13cmFwIHtcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG5cclxuICAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAyMHB4OyB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBcnRpY2xlIFBhZ2UgTGF5b3V0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5hcnRpY2xlLXBhZ2Uge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDI0cHggMjBweCA2NHB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBcnRpY2xlIEhlcm9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmFydGljbGUtaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzJweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tcHVycGxlKSAwJSwgdmFyKC0tYW1iZXIpIDUwJSwgdmFyKC0tZW1lcmFsZCkgMTAwJSk7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1oZXJvX19nbG93LTEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtODBweDtcclxuICAgIGluc2V0LWlubGluZS1lbmQ6IC04MHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXB1cnBsZS1nbG93KSwgdHJhbnNwYXJlbnQgNzAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFydGljbGUtaGVyb19fZ2xvdy0yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTYwcHg7XHJcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IC02MHB4O1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLWFtYmVyLWdsb3cpLCB0cmFuc3BhcmVudCA3MCUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZXJvX19pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDAuOGZyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAzNnB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAmOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNHB4OyB9XHJcbiAgc3BhbiB7IGNvbG9yOiB2YXIoLS1pbmspOyBmb250LXdlaWdodDogNzAwOyB9XHJcbn1cclxuXHJcbi5hcnRpY2xlLWtpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcblxyXG4gIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG59XHJcblxyXG4uYXJ0aWNsZS1oZXJvIGgxIHtcclxuICBmb250LXNpemU6IGNsYW1wKDIycHgsIDMuMnZ3LCAzMnB4KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWxlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS45O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG4uaGVyby1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuXHJcbiAgLm1ldGEtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2Y4ZmFmYyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1jb2RlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5hcnRpY2xlLWhlcm9fX21lZGlhIHtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5hcnRpY2xlLWhlcm9fX2ltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUd28tQ29sdW1uIFNoZWxsXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5hcnRpY2xlLXNoZWxsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMzQwcHg7XHJcbiAgZ2FwOiAyOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmFydGljbGUtYm9keS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDM2cHggNDBweDtcclxuICBib3gtc2hhZG93OiAwIDZweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjAzKTtcclxuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMi4xO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXRhbG9nLXNlY29uZGFyeSwgIzMzNDE1NSk7XHJcblxyXG4gIHAgeyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcblxyXG4gIGgyLCBoMywgaDQge1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxNHB4O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGluc2V0LWlubGluZS1zdGFydDogMDtcclxuICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICB3aWR0aDogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7IGZvbnQtc2l6ZTogMjJweDsgfVxyXG4gIGgzIHsgZm9udC1zaXplOiAxOHB4OyB9XHJcblxyXG4gIHVsLCBvbCB7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDI0cHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibG9ja3F1b3RlIHtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgcGFkZGluZzogMTZweCAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3JkZXItaW5saW5lLXN0YXJ0OiA0cHggc29saWQgdmFyKC0tcHVycGxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUtZGFyayk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQXV0aG9yIENhcmRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmF1dGhvci1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jYXRhbG9nLXNvZnQsICNmYmZhZmYpIDAlLCB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZjVmM2ZmKSAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBwYWRkaW5nOiAyNnB4IDI4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuXHJcbiAgLmF1dGhvci1jYXJkX19hdmF0YXItd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmF1dGhvci1jYXJkX19hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNjhweDtcclxuICAgICAgaGVpZ2h0OiA2OHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmYpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHZhcigtLXB1cnBsZS1nbG93KTtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aG9yLWNhcmRfX2JhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIGluc2V0LWlubGluZS1lbmQ6IC00cHg7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24sIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdXRob3ItY2FyZF9faW5mbyB7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5leWVicm93IHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEVuZ2FnZW1lbnQgQm94XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5lbmdhZ2VtZW50LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgcGFkZGluZzogMjRweCAyOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcblxyXG4gIC5leWVicm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gIH1cclxuXHJcbiAgLmVuZ2FnZW1lbnQtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuICB9XHJcblxyXG4gIC5saWtlLWJ0biwgLnVubGlrZS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICB9XHJcblxyXG4gIC5saWtlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWRhcmspO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWJ1eSwgdmFyKC0tZW1lcmFsZCkpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVubGlrZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1saWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcm9zZSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctZGFuZ2VyLCB2YXIoLS1yb3NlKSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpa2VkLXN0YXRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWVtZXJhbGQtZGFyayk7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2lkZWJhciBDYXJkc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uYXJ0aWNsZS1zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogOTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uc2lkZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wMyk7XHJcblxyXG4gIC5zaWRlLWNhcmRfX2hlYWRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG5cclxuICAgIC5zaWRlLWNhcmRfX2ljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXllYnJvdyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8tbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG5cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG5cclxuICAgICAgaW9uLWljb24geyBjb2xvcjogdmFyKC0tcHVycGxlKTsgZm9udC1zaXplOiAxNnB4OyB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2hhcmUtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIC5zaGFyZS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgJi53aGF0c2FwcCB7IGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctZW1lcmFsZC1zb2Z0LCAjZGNmY2U3KTsgY29sb3I6IHZhcigtLWNhdGFsb2ctZW1lcmFsZCwgIzE1ODAzZCk7ICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLWJ1eSwgIzIyYzU1ZSk7IGNvbG9yOiAjZmZmOyB9IH1cclxuICAgICYudGVsZWdyYW0geyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNreS1zb2Z0LCAjZTBmMmZlKTsgY29sb3I6IHZhcigtLWNhdGFsb2ctc2t5LCAjMDM2OWExKTsgJjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc2t5LWFjdGlvbiwgIzAyODRjNyk7IGNvbG9yOiAjZmZmOyB9IH1cclxuICAgICYuZmFjZWJvb2sgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0LCAjZWRlOWZlKTsgY29sb3I6IHZhcigtLWNhdGFsb2ctcHVycGxlLCAjNmQyOGQ5KTsgJjpob3ZlciB7IGJhY2tncm91bmQ6ICM2ZDI4ZDk7IGNvbG9yOiAjZmZmOyB9IH1cclxuICAgICYudHdpdHRlciB7IGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2YxZjVmOSk7IGNvbG9yOiB2YXIoLS1jYXRhbG9nLXRleHQsICMwZjE3MmEpOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogIzBmMTcyYTsgY29sb3I6ICNmZmY7IH0gfVxyXG4gIH1cclxufVxyXG5cclxuLmNvcHktbGluayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2Y4ZmFmYyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIH1cclxufVxyXG5cclxuLnRhZy1jbG91ZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA2cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlZnVsLWxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCwgI2Y4ZmFmYyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAgIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2JpbGUtZXh0cmFzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBMb2FkaW5nICYgRW1wdHkgU3RhdGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5hcnRpY2xlLXN0YXRlIHtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnN0YXRlLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiA0OHB4IDM2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmVtcHR5LWljb24geyBmb250LXNpemU6IDQ4cHg7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cclxuICAgIGgyIHsgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogOTAwOyBjb2xvcjogdmFyKC0taW5rKTsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XHJcbiAgICBwIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSZXNwb25zaXZlIEFkanVzdG1lbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5hcnRpY2xlLWhlcm9fX2lubmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmFydGljbGUtc2hlbGwge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1zaWRlYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWV4dHJhcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtc2hlbGwge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1oZXJvIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMjBweDtcclxuICB9XHJcblxyXG4gIC5hcnRpY2xlLWJvZHktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZW5nYWdlbWVudC1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIGNhdGFsb2cuZGFyay1tb2RlO1xyXG5AaW5jbHVkZSBjYXRhbG9nLnJpY2gtdGV4dCgnLmFydGljbGUtYm9keV9fY29udGVudCcpO1xyXG4iLCIvLyBQYWdlLWxvY2FsIGNhdGFsb2cgcGFsZXR0ZS4gSW1wb3J0ZWQgb25seSBieSBjb3Vyc2UvcHJvZHVjdC9hcnRpY2xlL3NlYXJjaCByb3V0ZXMuXG4vLyBGYWxsYmFja3MgaW4gdGhlIGNvbnN1bWluZyBzdHlsZXMgcHJlc2VydmUgZXZlcnkgb3JpZ2luYWwgbGlnaHQtbW9kZSBjb2xvci5cbkBtaXhpbiBkYXJrLW1vZGUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlOiAjMjExYzMyO1xuICAgIC0tY2F0YWxvZy1zdXJmYWNlLXJnYjogMzMsIDI4LCA1MDtcbiAgICAtLWNhdGFsb2ctc29mdDogIzI5MjMzZDtcbiAgICAtLWNhdGFsb2ctaG92ZXI6ICMzNDJjNDk7XG4gICAgLS1jYXRhbG9nLWJvcmRlcjogIzRiNDE2NDtcbiAgICAtLWNhdGFsb2ctdGV4dDogI2YyZWVmYjtcbiAgICAtLWNhdGFsb2ctc2Vjb25kYXJ5OiAjZDBjOGUyO1xuICAgIC0tY2F0YWxvZy1tdXRlZDogI2IxYTZjNjtcbiAgICAtLWNhdGFsb2ctcHVycGxlLXNvZnQ6ICMzMDIzNDc7XG4gICAgLS1jYXRhbG9nLXB1cnBsZS1ob3ZlcjogIzNkMmQ1ODtcbiAgICAtLWNhdGFsb2ctYW1iZXItc29mdDogIzNiMmQxODtcbiAgICAtLWNhdGFsb2ctZW1lcmFsZC1zb2Z0OiAjMTgzNzJlO1xuICAgIC0tY2F0YWxvZy1yb3NlLXNvZnQ6ICM0MDIzMzQ7XG4gICAgLS1jYXRhbG9nLXNreS1zb2Z0OiAjMTkzMzQ2O1xuICAgIC0tY2F0YWxvZy1wdXJwbGU6ICNjNGI1ZmQ7XG4gICAgLS1jYXRhbG9nLWVtZXJhbGQ6ICM2ZWU3Yjc7XG4gICAgLS1jYXRhbG9nLXNreTogIzdkZDNmYztcbiAgICAtLWNhdGFsb2ctc2t5LWFjdGlvbjogIzAzNjlhMTtcbiAgICAtLWNhdGFsb2ctYWN0aW9uOiAjN2MzYWVkO1xuICAgIC0tY2F0YWxvZy1hY3Rpb24taG92ZXI6ICM2ZDI4ZDk7XG4gICAgLS1jYXRhbG9nLWFjdGlvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCwgIzViMjFiNik7XG4gICAgLS1jYXRhbG9nLWJ1eTogIzA0Nzg1NztcbiAgICAtLWNhdGFsb2ctYnV5LWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDQ3ODU3LCAjMDY1ZjQ2KTtcbiAgICAtLWNhdGFsb2ctZGFuZ2VyOiAjYmUxMjNjO1xuICAgIC0tY2F0YWxvZy1hbWJlci1hY3Rpb24tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5MjQwMGUsICM3ODM1MGYpO1xuICAgIC0taW5rOiB2YXIoLS1jYXRhbG9nLXRleHQpO1xuICAgIC0taW5rLXNlY29uZGFyeTogdmFyKC0tY2F0YWxvZy1zZWNvbmRhcnkpO1xuICAgIC0tbXV0ZWQ6IHZhcigtLWNhdGFsb2ctbXV0ZWQpO1xuICAgIC0tcHVycGxlOiB2YXIoLS1jYXRhbG9nLXB1cnBsZSk7XG4gICAgLS1wdXJwbGUtZGFyazogdmFyKC0tY2F0YWxvZy1wdXJwbGUpO1xuICAgIC0tcHVycGxlLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1zb2Z0KTtcbiAgICAtLXB1cnBsZS1nbG93OiByZ2JhKDE2NywgMTM5LCAyNTAsIDAuMTQpO1xuICAgIC0tYW1iZXI6ICNmYmJmMjQ7XG4gICAgLS1hbWJlci1kYXJrOiAjZmNkMzRkO1xuICAgIC0tYW1iZXItbGlnaHQ6IHZhcigtLWNhdGFsb2ctYW1iZXItc29mdCk7XG4gICAgLS1hbWJlci1nbG93OiByZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKTtcbiAgICAtLWVtZXJhbGQ6ICMzNGQzOTk7XG4gICAgLS1lbWVyYWxkLWRhcms6IHZhcigtLWNhdGFsb2ctZW1lcmFsZCk7XG4gICAgLS1lbWVyYWxkLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLWVtZXJhbGQtc29mdCk7XG4gICAgLS1yb3NlOiAjZmRhNGFmO1xuICAgIC0tcm9zZS1saWdodDogdmFyKC0tY2F0YWxvZy1yb3NlLXNvZnQpO1xuICAgIC0tc2t5OiB2YXIoLS1jYXRhbG9nLXNreSk7XG4gICAgLS1za3ktbGlnaHQ6IHZhcigtLWNhdGFsb2ctc2t5LXNvZnQpO1xuICAgIC0tcGFwZXI6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1iZy1jYW52YXM6ICMxNDEwMjA7XG4gICAgLS1ib3JkZXItc29mdDogdmFyKC0tY2F0YWxvZy1ib3JkZXIpO1xuICAgIC0tY2FyZC1iZzogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLWNhcmQtc2hhZG93OiAwIDEycHggMzZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIC0tY291cnNlLXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1wcm9kdWN0LXN1cmZhY2U6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSk7XG4gICAgLS1jb3Vyc2UtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLXByb2R1Y3QtYWNjZW50LXJnYjogMTk2LCAxODEsIDI1MztcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jYW52YXMpO1xuICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWluayk7XG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc29mdCk7XG4gICAgY29sb3I6IHZhcigtLWluayk7XG5cbiAgICAuYnJhbmQgeyBjb2xvcjogdmFyKC0tcHVycGxlKTsgfVxuXG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgLmJnIHsgYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTsgfVxuICAgIGlvbi1jYXJkOm5vdCguaW9uLWNvbG9yKSB7IC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpOyBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSB7IGNvbG9yOiB2YXIoLS1pbmspOyB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4gICAgaW9uLWNhcmQtaGVhZGVyW2NvbG9yPSdwcmltYXJ5J10ge1xuICAgICAgLy8gSW9uaWMncyAuaW9uLWNvbG9yLXByaW1hcnkgZGVjbGFyZXMgdGhlc2UgdG9rZW5zIHdpdGggIWltcG9ydGFudC5cbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWNhdGFsb2ctc29mdCkgIWltcG9ydGFudDtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcbiAgICB9XG4gICAgaW9uLWxpc3Q6bm90KC5pb24tY29sb3IpIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICBpb24taXRlbTpub3QoLmlvbi1jb2xvcikge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IC0tY29sb3I6IHZhcigtLWluayk7IH1cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIC0taWNvbi1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICAgIC0tY2xlYXItYnV0dG9uLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICAtLWNhbmNlbC1idXR0b24tY29sb3I6IHZhcigtLXB1cnBsZSk7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhLCBpb24tc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2xpZ2h0J10sIGlvbi1sYWJlbFtjb2xvcj0nZGFya2VyJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICBpb24tbGFiZWxbY29sb3I9J21lZGl1bSddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tbXV0ZWQpICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuXG4vLyBBbmd1bGFyIGRvZXMgbm90IGF0dGFjaCBlbmNhcHN1bGF0aW9uIGF0dHJpYnV0ZXMgdG8gY29udGVudCBpbnNlcnRlZCBieSBpbm5lckhUTUwuXG4vLyBLZWVwIGRlZXAgcnVsZXMgYW5jaG9yZWQgdG8gZWFjaCBwYWdlJ3Mgb3duIGRlc2NyaXB0aW9uIGNvbnRhaW5lci5cbkBtaXhpbiByaWNoLXRleHQoJGNvbnRhaW5lcikge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSA6Om5nLWRlZXAge1xuICAgICN7JGNvbnRhaW5lcn0ge1xuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgOndoZXJlKHAsIHNwYW4sIGRpdiwgbGksIHN0cm9uZywgYiwgZW0sIGksIGZvbnQsIHRkLCB0aCkge1xuICAgICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDp3aGVyZShoMSwgaDIsIGgzLCBoNCwgaDUsIGg2KSB7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIGEgeyBjb2xvcjogdmFyKC0tcHVycGxlKSAhaW1wb3J0YW50OyB9XG4gICAgICBibG9ja3F1b3RlLCBwcmUsIGNvZGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXNvZnQpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1pbmspICFpbXBvcnRhbnQ7IH1cbiAgICAgIHRhYmxlLCB0ZCwgdGggeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KSAhaW1wb3J0YW50OyB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 43629:
/*!******************************************************************************************!*\
  !*** ./src/app/view/pages/article/article-by-id/article-by-id.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" dir=\"rtl\">\n  \n  <app-page-header titleKey=\"pageHeader.article/article-by-id/article-by-id\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"icon-button search-toggle\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو در سامانه\">\r\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      </button>\n</div>\n\n<div class=\"header-search-bar\" *ngIf=\"showSearchbar\">\r\n    <div class=\"search-input-wrap\">\r\n      <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      <input type=\"search\" [(ngModel)]=\"queryText\" placeholder=\"جستجو در اول آموز...\" (keyup.enter)=\"search()\" autofocus />\r\n      <button type=\"button\" class=\"action-btn primary\" (click)=\"search()\">جستجو</button>\r\n      <button type=\"button\" class=\"action-btn ghost\" (click)=\"onCancel()\">انصراف</button>\r\n    </div>\r\n  </div>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingText=\"برای بروزرسانی بکشید\"></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <main class=\"article-page\" dir=\"rtl\">\r\n    <ng-container *ngIf=\"!isLoading && article\">\r\n      <header class=\"article-hero\">\r\n        <div class=\"article-hero__glow-1\" aria-hidden=\"true\"></div>\r\n        <div class=\"article-hero__glow-2\" aria-hidden=\"true\"></div>\r\n\r\n        <div class=\"article-hero__inner\">\r\n          <div class=\"article-hero__content\">\r\n            <nav class=\"breadcrumbs\" aria-label=\"مسیر صفحه\">\r\n              <a routerLink=\"/\">صفحه اصلی</a>\r\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n              <a routerLink=\"/Article\">مقالات آموزشی</a>\r\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n              <span>{{ article.name }}</span>\r\n            </nav>\r\n\r\n            <span class=\"article-kicker\">\r\n              <ion-icon name=\"sparkles-outline\"></ion-icon>\r\n              مجله تخصصی و مقالات آموزش ابتدایی\r\n            </span>\r\n\r\n            <h1>{{ article.name }}</h1>\r\n            <p class=\"article-lead\" [innerText]=\"article.shortDescription\"></p>\r\n\r\n            <div class=\"hero-meta\">\r\n              <span *ngIf=\"article.teacherUser\" class=\"meta-item\">\r\n                <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n                {{ getTeacherName() }}\r\n              </span>\r\n              <span class=\"meta-item\">\r\n                <ion-icon name=\"eye-outline\"></ion-icon>\r\n                {{ article.viewCount }} بازدید\r\n              </span>\r\n              <span *ngIf=\"article.lastUpdateDate || article.createDate\" class=\"meta-item\">\r\n                <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                {{ (article.lastUpdateDate || article.createDate) | persianDate }}\r\n              </span>\r\n              <span class=\"article-code\">کد {{ article.id }}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <figure class=\"article-hero__media\">\r\n            <img\r\n              class=\"article-hero__image\"\r\n              [src]=\"article.imageUrl\"\r\n              [alt]=\"article.name\"\r\n              [title]=\"article.name\"\r\n            />\r\n          </figure>\r\n        </div>\r\n      </header>\r\n\r\n      <div class=\"article-shell\">\r\n        <article class=\"article-main-body\">\r\n          <section class=\"article-body-card\">\r\n            <div class=\"article-body__content\" [innerHTML]=\"article.description\"></div>\r\n          </section>\r\n\r\n          <!-- Author Box -->\r\n          <section class=\"author-card\" *ngIf=\"article.teacherUser\">\r\n            <div class=\"author-card__avatar-wrap\">\r\n              <ion-avatar class=\"author-card__avatar\">\r\n                <img\r\n                  [src]=\"article.teacherUser.userAvatarAddress\"\r\n                  [alt]=\"getTeacherName()\"\r\n                  [title]=\"getTeacherName()\"\r\n                />\r\n              </ion-avatar>\r\n              <span class=\"author-card__badge\"><ion-icon name=\"school-outline\"></ion-icon></span>\r\n            </div>\r\n            <div class=\"author-card__info\">\r\n              <span class=\"eyebrow\">نویسنده و مدرس</span>\r\n              <h2>{{ getTeacherName() }}</h2>\r\n              <p class=\"description\">{{ article.teacherUser.resume }}</p>\r\n              <ion-badge *ngIf=\"article.teacherUser.isRested\" color=\"warning\" mode=\"md\">\r\n                مدرس در مرخصی است\r\n              </ion-badge>\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Engagement Box -->\r\n          <section class=\"engagement-card\" *ngIf=\"isLikeShow()\">\r\n            <div class=\"engagement-info\">\r\n              <span class=\"eyebrow\">✦ بازخورد همکاران</span>\r\n              <h2>این مقاله برای تدریس شما مفید بود؟</h2>\r\n            </div>\r\n\r\n            <ion-spinner *ngIf=\"isUserLikedLoading || isLikeLoadingShow\" name=\"dots\"></ion-spinner>\r\n\r\n            <div class=\"engagement-actions\" *ngIf=\"!isUserLikedLoading && !isLikeLoadingShow && article.userLiked != null\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"like-btn\"\r\n                (click)=\"OnLike(true)\"\r\n                *ngIf=\"!article.userLiked\"\r\n              >\r\n                <ion-icon name=\"heart-outline\"></ion-icon>\r\n                <span>می‌پسندم</span>\r\n              </button>\r\n              <button\r\n                type=\"button\"\r\n                class=\"unlike-btn\"\r\n                (click)=\"OnLike(false)\"\r\n                *ngIf=\"article.userLiked\"\r\n              >\r\n                <ion-icon name=\"heart-dislike-outline\"></ion-icon>\r\n                <span>حذف پسندیدن</span>\r\n              </button>\r\n              <span class=\"liked-state\" *ngIf=\"article.userLiked\">\r\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                پسندیده شد\r\n              </span>\r\n            </div>\r\n          </section>\r\n\r\n          <!-- Mobile Sidebar Blocks -->\r\n          <section class=\"mobile-extras\">\r\n            <ng-container *ngTemplateOutlet=\"shareBlock\"></ng-container>\r\n            <ng-container *ngTemplateOutlet=\"linksBlock\"></ng-container>\r\n            <ng-container *ngTemplateOutlet=\"tagsBlock\"></ng-container>\r\n          </section>\r\n        </article>\r\n\r\n        <aside class=\"article-sidebar\">\r\n          <section class=\"side-card article-info-card\">\r\n            <div class=\"side-card__heading\">\r\n              <span class=\"side-card__icon\"><ion-icon name=\"document-text-outline\"></ion-icon></span>\r\n              <div>\r\n                <span class=\"eyebrow\">در یک نگاه</span>\r\n                <h2>اطلاعات مقاله</h2>\r\n              </div>\r\n            </div>\r\n            <ul class=\"info-list\">\r\n              <li *ngIf=\"article.teacherUser\">\r\n                <span><ion-icon name=\"school-outline\"></ion-icon> مدرس</span>\r\n                <strong>{{ getTeacherName() }}</strong>\r\n              </li>\r\n              <li>\r\n                <span><ion-icon name=\"eye-outline\"></ion-icon> بازدید</span>\r\n                <strong>{{ article.viewCount }}</strong>\r\n              </li>\r\n              <li *ngIf=\"article.createDate\">\r\n                <span><ion-icon name=\"calendar-outline\"></ion-icon> انتشار</span>\r\n                <strong>{{ article.createDate | persianDate }}</strong>\r\n              </li>\r\n              <li *ngIf=\"article.lastUpdateDate\">\r\n                <span><ion-icon name=\"refresh-outline\"></ion-icon> بروزرسانی</span>\r\n                <strong>{{ article.lastUpdateDate | persianDate }}</strong>\r\n              </li>\r\n              <li>\r\n                <span><ion-icon name=\"qr-code-outline\"></ion-icon> کد مقاله</span>\r\n                <strong>{{ article.id }}</strong>\r\n              </li>\r\n            </ul>\r\n          </section>\r\n\r\n          <ng-container *ngTemplateOutlet=\"shareBlock\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"linksBlock\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"tagsBlock\"></ng-container>\r\n        </aside>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- Loading State -->\r\n    <section class=\"article-state\" *ngIf=\"isLoading\" aria-live=\"polite\">\r\n      <div class=\"state-card loading-card\">\r\n        <div class=\"loading-visual\">\r\n          <ion-spinner name=\"bubbles\" color=\"primary\"></ion-spinner>\r\n        </div>\r\n        <h2>در حال آماده‌سازی مقاله آموزشی</h2>\r\n        <p>چند لحظه صبر کنید؛ محتوا در حال بارگذاری است.</p>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Not Found State -->\r\n    <section class=\"article-state\" *ngIf=\"!isLoading && !article\">\r\n      <div class=\"state-card not-found-card\">\r\n        <div class=\"empty-icon\">🎒</div>\r\n        <span class=\"eyebrow\">خطای ۴۰۴</span>\r\n        <h2>مقاله‌ای با این مشخصات پیدا نشد</h2>\r\n        <p>ممکن است آدرس مقاله تغییر کرده باشد یا موقتاً از دسترس خارج شده باشد.</p>\r\n        <a routerLink=\"/Article\" class=\"button primary small\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n          <span>بازگشت به آرشیو مقالات</span>\r\n        </a>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <!-- Reusable Sidebar Templates -->\r\n  <ng-template #shareBlock>\r\n    <section class=\"side-card share-card\">\r\n      <div class=\"side-card__heading compact\">\r\n        <span class=\"side-card__icon\"><ion-icon name=\"share-social-outline\"></ion-icon></span>\r\n        <div>\r\n          <span class=\"eyebrow\">با همکاران</span>\r\n          <h2>اشتراک‌گذاری</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"share-grid\">\r\n        <a class=\"share-button whatsapp\" [href]=\"whatsappShare\" target=\"_blank\" rel=\"noopener\" aria-label=\"اشتراک در واتساپ\">\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n        </a>\r\n        <a class=\"share-button telegram\" [href]=\"'https://t.me/share/url?url=https://avalamuz.ir/a/' + article.id\" target=\"_blank\" rel=\"noopener\" aria-label=\"اشتراک در تلگرام\">\r\n          <ion-icon name=\"paper-plane-outline\"></ion-icon>\r\n        </a>\r\n        <a class=\"share-button twitter\" [href]=\"'https://twitter.com/intent/tweet?url=https://avalamuz.ir/a/' + article.id\" target=\"_blank\" rel=\"noopener\" aria-label=\"اشتراک در توییتر\">\r\n          <ion-icon name=\"logo-twitter\"></ion-icon>\r\n        </a>\r\n      </div>\r\n      <button class=\"copy-link\" type=\"button\" (click)=\"copyText('avalamuz.ir/a/' + article.id)\">\r\n        <span>avalamuz.ir/a/{{ article.id }}</span>\r\n        <ion-icon name=\"copy-outline\"></ion-icon>\r\n      </button>\r\n    </section>\r\n  </ng-template>\r\n\r\n  <ng-template #linksBlock>\r\n    <section class=\"side-card\" *ngIf=\"links.length > 0\">\r\n      <div class=\"side-card__heading compact\">\r\n        <span class=\"side-card__icon\"><ion-icon name=\"link-outline\"></ion-icon></span>\r\n        <div>\r\n          <span class=\"eyebrow\">پیشنهاد اول آموز</span>\r\n          <h2>لینک‌های مفید</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"useful-links\">\r\n        <a *ngFor=\"let link of links\" [href]=\"link.url\" target=\"_blank\" rel=\"noopener\" [title]=\"link.name\">\r\n          <span>{{ link.name }}</span>\r\n          <ion-icon name=\"open-outline\"></ion-icon>\r\n        </a>\r\n      </div>\r\n    </section>\r\n  </ng-template>\r\n\r\n  <ng-template #tagsBlock>\r\n    <section class=\"side-card\" *ngIf=\"tags.length > 0\">\r\n      <div class=\"side-card__heading compact\">\r\n        <span class=\"side-card__icon\"><ion-icon name=\"pricetags-outline\"></ion-icon></span>\r\n        <div>\r\n          <span class=\"eyebrow\">موضوعات مرتبط</span>\r\n          <h2>برچسب‌ها</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"tag-cloud\">\r\n        <span *ngFor=\"let tag of tags\"># {{ tag.name }}</span>\r\n      </div>\r\n    </section>\r\n  </ng-template>\r\n\r\n  <app-footer></app-footer>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" class=\"top-fab\">\r\n    <ion-fab-button color=\"primary\" (click)=\"goTop()\" aria-label=\"بازگشت به بالای صفحه\">\r\n      <ion-icon name=\"arrow-up-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_article_article-by-id_article-by-id_module_ts.js.map