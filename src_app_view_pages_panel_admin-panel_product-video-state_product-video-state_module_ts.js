"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_product-video-state_product-video-state_module_ts"],{

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

/***/ 89139:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-video-state/product-video-state-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductVideoStateRoutingModule": () => (/* binding */ ProductVideoStateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _product_video_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-video-state.component */ 6173);




const routes = [{ path: '', component: _product_video_state_component__WEBPACK_IMPORTED_MODULE_0__.ProductVideoStateComponent }];
let ProductVideoStateRoutingModule = class ProductVideoStateRoutingModule {
};
ProductVideoStateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProductVideoStateRoutingModule);



/***/ }),

/***/ 6173:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-video-state/product-video-state.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductVideoStateComponent": () => (/* binding */ ProductVideoStateComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _product_video_state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-video-state.component.html?ngResource */ 72671);
/* harmony import */ var _product_video_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-video-state.component.scss?ngResource */ 26290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/model/product/ProductDetailModel */ 38637);
/* harmony import */ var _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/model/product/ProductFilterModel */ 27230);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/service/product/product.service */ 60007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);




/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable eqeqeq */

/* eslint-disable max-len */











let ProductVideoStateComponent = class ProductVideoStateComponent {
  constructor(courseService, toastController, loadingController, activatedRoute, router, sanitizer, alertController) {
    this.courseService = courseService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.sanitizer = sanitizer;
    this.alertController = alertController;
    this.selectedCourseId = 0;
    this.selectedCategory = '2';
    this.searchTitle = '';
    this.selected = false;
    this.courseCategores = [];
    this.videoDetail = [];
  }

  onCategoryClick(catName) {
    src_app_core_common_G__WEBPACK_IMPORTED_MODULE_6__.G.getCourseCategory().subscribe(res => {
      res.forEach(cat => {
        if (cat.title === catName) {
          this.router.navigate(['Product', 'Search'], {
            queryParams: {
              categoryIds: [cat.courseCategoryId]
            }
          });
          return;
        }
      });
    });
  }

  totalVideoTime() {
    let time = '00:00';
    let h = 0;
    let m = 0;
    let s = 0;
    this.selectedCourse.productVideos.forEach(vid => {
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

    time = h.toString() + ':' + m.toString() + ':' + s.toString();
    return time;
  }

  ngOnInit() {
    let filter;
    this.activatedRoute.queryParams.subscribe(params => {
      const page = params.page;
      const take = params.take ? params.take : 12;
      const title = params.title ? params.title : null;
      const startPrice = params.startPrice ? params.startPrice : null;
      const endPrice = params.endPrice ? params.endPrice : null;
      const categoryIds = params.categoryIds ? params.categoryIds : [];
      const sortId = params.sortId ? params.sortId : 4; // if (page === undefined) {
      //   filter = new CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
      // } else {
      //   if (
      //     startPrice == null &&
      //     endPrice == null &&
      //     categoryIds == null &&
      //     sortId == null) {
      //     filter = new CourseFilterModel(false, page, take, title);
      //   } else {
      //     filter =
      //       new CourseFilterModel(true, page, take, title, startPrice, endPrice, categoryIds, sortId);
      //   }
      // }

      filter = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, page, take, title);
      this.filteredCourses = filter;
      this.getDate(this.selectedCategory);
    });
  }

  categoryChanged() {
    this.filteredCourses = new _data_model_product_ProductFilterModel__WEBPACK_IMPORTED_MODULE_4__.ProductFilterModel(false, 1, 12, '');
    this.getDate(this.selectedCategory);
  }

  getDate(type) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);

    switch (type) {
      case '1':
        this.courseService.GetActiveVideoProductsByFilter(this.filteredCourses).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
            this.filteredCourses.products = [];
          } else {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
            this.filteredCourses.products = [];
          }
        }, err => {
          this.filteredCourses.products = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;

      case '2':
        this.courseService.GetDeActiveVideoProductsByFilter(this.filteredCourses).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
            this.filteredCourses.products = [];
          } else {
            this.filteredCourses.products = [];
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
          }
        }, err => {
          this.filteredCourses.products = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;

      default:
        this.courseService.GetActiveVideoProductsByFilter(this.filteredCourses).subscribe(res => {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

          if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus) {
            this.filteredCourses = res.data;
          } else if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.NotFoundStatus) {
            this.filteredCourses.products = [];
          } else {
            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
            this.filteredCourses.products = [];
          }
        }, err => {
          this.filteredCourses.products = [];
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
        });
        break;
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
    this.router.navigate(['AdminPanel', 'ProductVideoState'], {
      queryParams: {
        page: pageId < 1 ? 1 : pageId,
        take: this.filteredCourses.takeEntity ? this.filteredCourses.takeEntity : null,
        title: this.filteredCourses.title ? this.filteredCourses.title : null,
        startPrice: this.filteredCourses.startPrice ? this.filteredCourses.startPrice : null,
        endPrice: this.filteredCourses.endPrice ? this.filteredCourses.endPrice : null,
        categoryIds: this.filteredCourses.categoryIds ? this.filteredCourses.categoryIds : [],
        sortId: this.filteredCourses.sortId ? this.filteredCourses.sortId : 4
      }
    });
  }

  onDetailClick(id) {
    const item = this.videoDetail.find(e => e.id == +id);

    if (item != null) {
      item.hide = !item.hide;
    }
  }

  onActive(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveProductVideoById(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.successToast(this.toastController);
        const item = this.selectedCourse.productVideos.find(e => e.id == +id);

        if (item != null) {
          item.isActive = true;
        } else {
          this.selected = false;
          this.getDate(this.selectedCategory);
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onActiveNoShare(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.courseService.ActiveProductVideoByIdNoShare(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.successToast(this.toastController);
        const item = this.selectedCourse.productVideos.find(e => e.id == +id);

        if (item != null) {
          item.isActive = true;
        } else {
          this.selected = false;
          this.getDate(this.selectedCategory);
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onDeActive(id) {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.loading(this.loadingController);
    this.courseService.DeActiveProductVideoById(+id).subscribe(res => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);

      if (src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_7__.GResponse.SuccessStatus === res.status) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.successToast(this.toastController);
        const item = this.selectedCourse.productVideos.find(e => e.id == +id);

        if (item != null) {
          item.isActive = false;
        } else {
          this.selected = false;
          this.getDate(this.selectedCategory);
        }
      } else {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.dismissLoading(this.loadingController);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  presentActiveAlertConfirm(id) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this.onActive(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentActiveAlertConfirmNoShare(id) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this2.onActiveNoShare(id);
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
        message: 'آیا مطمئن به غیر فعال کردن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this3.onDeActive(id);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onGetVideoFormat(id) {
    const item = this.selectedCourse.productVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoUrlOnline.split('.');
    const videoLength = video.length;
    const format = video[videoLength - 1];
    return 'video/' + format;
  }

  getTeacherName() {
    if (this.selectedCourse.sellerUser === undefined || this.selectedCourse.sellerUser == null) {
      return '';
    }

    const name = this.selectedCourse.sellerUser.name != null ? this.selectedCourse.sellerUser.name : '';
    const family = this.selectedCourse.sellerUser.family != null ? this.selectedCourse.sellerUser.family : '';
    return name + ' ' + family;
  }

  checkURL2(id) {
    const item = this.selectedCourse.productVideos.find(e => e.id == +id);

    if (item == null) {
      return '';
    }

    const video = item.videoUrl.split('/');
    const videoLength = video.length;
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + video[videoLength - 1] + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSelectItem(model) {
    this.videoDetail = [];
    this.selectedCourseId = +model.id;
    const e = this.filteredCourses.products.find(x => x.id == +model.id);
    this.selectedCourse = new _data_model_product_ProductDetailModel__WEBPACK_IMPORTED_MODULE_3__.ProductDetailModel(e.id, e.name, e.price, e.offPrice, 0, e.shortDescription, e.description, e.imageName, true, true, new Date(), new Date(), true, [], true, null);
    this.selectedCourse.productVideos = e.productVideos;

    if (e.productVideos == null) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      return;
    }

    if (e.productVideos.length === 0) {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_8__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      return;
    }

    this.selectedCourse.productVideos.forEach(v => {
      this.videoDetail.push({
        id: v.id,
        hide: true
      });
    });
    this.selected = true; // SharedIonic.loading(this.loadingController);
    // if (model.isActive) {
    //   this.courseService.GetAdminActiveProductById(+this.selectedCourseId).subscribe(
    //     res => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       if (GResponse.SuccessStatus === res.status) {
    //         this.selectedCourse = res.data;
    //         this.selectedCourse.productVideos.forEach(v => {
    //           this.videoDetail.push(
    //             { id: v.id, hide: true }
    //           );
    //         });
    //         this.selected = true;
    //         G.getCourseCategory().subscribe(
    //           res => {
    //             this.courseCategores = [];
    //             res.forEach(cat => {
    //               this.selectedCourse.categoryIds.forEach(ccat => {
    //                 if (+ccat === +cat.courseCategoryId) {
    //                   this.courseCategores.push(cat.title);
    //                 }
    //               });
    //             });
    //           }
    //         );
    //       } else {
    //         SharedIonic.unSuccessToast(this.toastController);
    //       }
    //     },
    //     err => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       SharedIonic.unSuccessToast(this.toastController);
    //     }
    //   );
    // } else {
    //   this.courseService.GetDeActiveProductById(+this.selectedCourseId).subscribe(
    //     res => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       if (GResponse.SuccessStatus === res.status) {
    //         this.selectedCourse = res.data;
    //         this.selectedCourse.productVideos.forEach(v => {
    //           this.videoDetail.push(
    //             { id: v.id, hide: true }
    //           );
    //         });
    //         this.selected = true;
    //         G.getCourseCategory().subscribe(
    //           ress => {
    //             this.courseCategores = [];
    //             ress.forEach(cat => {
    //               this.selectedCourse.categoryIds.forEach(ccat => {
    //                 if (+ccat === +cat.courseCategoryId) {
    //                   this.courseCategores.push(cat.title);
    //                 }
    //               });
    //             });
    //           }
    //         );
    //       } else {
    //         SharedIonic.unSuccessToast(this.toastController);
    //       }
    //     },
    //     err => {
    //       SharedIonic.dismissLoading(this.loadingController);
    //       SharedIonic.unSuccessToast(this.toastController);
    //     }
    //   );
    // }
  }

};

ProductVideoStateComponent.ctorParameters = () => [{
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}];

ProductVideoStateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-product-video-state',
  template: _product_video_state_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_product_video_state_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProductVideoStateComponent);


/***/ }),

/***/ 99611:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-video-state/product-video-state.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductVideoStateModule": () => (/* binding */ ProductVideoStateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _product_video_state_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-video-state-routing.module */ 89139);
/* harmony import */ var _product_video_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-video-state.component */ 6173);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/persian-date/persian-date.module */ 20530);
/* harmony import */ var src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/pipe/price.module */ 21448);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);
/* harmony import */ var src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/view/components/product/shared-product.module */ 95664);














let ProductVideoStateModule = class ProductVideoStateModule {
};
ProductVideoStateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_product_video_state_component__WEBPACK_IMPORTED_MODULE_2__.ProductVideoStateComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _product_video_state_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductVideoStateRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            src_app_view_components_product_shared_product_module__WEBPACK_IMPORTED_MODULE_7__.SharedProductModule,
            src_app_core_pipe_price_module__WEBPACK_IMPORTED_MODULE_4__.PriceModule,
            src_app_core_pipe_persian_date_persian_date_module__WEBPACK_IMPORTED_MODULE_3__.PersianDateModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__.LoadingModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule
        ]
    })
], ProductVideoStateModule);



/***/ }),

/***/ 26290:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-video-state/product-video-state.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "a {\n  text-decoration: none;\n}\n\n.pointer:hover {\n  color: #ec8c1d !important;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n.video {\n  width: 100% !important;\n  height: auto !important;\n}\n\n.h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtdmlkZW8tc3RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0LXZpZGVvLXN0YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb2ludGVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZWM4YzFkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52aWRlby1zcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDU3JTtcclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgLnJhdGlvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUgaWZyYW1lIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 72671:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/product-video-state/product-video-state.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/AdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>وضعیت ویدیو کالا</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar color=\"primary\" class=\"ion-margin-top\" dir=\"rtl\">\r\n    <ion-segment [(ngModel)]=\"selectedCategory\" (ionChange)=\"categoryChanged()\">\r\n      <ion-segment-button value=\"1\">\r\n        <ion-icon name=\"build-outline\"></ion-icon>\r\n        <ion-label>ویدیو های فعال</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"2\">\r\n        <ion-icon name=\"car-sport-outline\"></ion-icon>\r\n        <ion-label>ویدیو های غیر فعال</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid *ngIf=\"!selected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"0\">\r\n        <ion-card dir=\"rtl\">\r\n          <ion-item>\r\n            <ion-button\r\n              color=\"success\"\r\n              class=\"ion-margin\"\r\n              fill=\"clear\"\r\n              (click)=\"setQueryParams(1)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-input\r\n              (keyup.enter)=\"setQueryParams(1)\"\r\n              placeholder=\"جستجو کنید\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"searchTitle\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-card-header color=\"primary\">\r\n            <ion-card-subtitle style=\"text-align: center\"\r\n              >اول آموز - مرجع تخصصی دوره‌ها و محصولات آموزش ابتدایی</ion-card-subtitle\r\n            >\r\n            <ion-card-title style=\"text-align: center\"\r\n              ><h1>کالا ها</h1></ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div *ngIf=\"filteredCourses\">\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId === page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId === page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page === filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"filteredCourses.products\" dir=\"rtl\">\r\n                  <ion-col\r\n                    *ngFor=\"let course of filteredCourses.products\"\r\n                    size=\"12\"\r\n                    size-sm=\"6\"\r\n                    size-md=\"6\"\r\n                    size-lg=\"4\"\r\n                    size-xl=\"3\"\r\n                  >\r\n                    <app-seller-product\r\n                      class=\"point\"\r\n                      [product]=\"course\"\r\n                      (SelectEvent2)=\"onSelectItem($event)\"\r\n                    ></app-seller-product>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-grid dir=\"rtl\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\" offset=\"0\" class=\"text-center\">\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(1)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        1\r\n                      </ion-button>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId > 3 &&\r\n                        filteredCourses.pageCount > 3\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngFor=\"\r\n                        let page of MakePageCountArray(\r\n                          filteredCourses.pageCount\r\n                        );\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        size=\"small\"\r\n                        [disabled]=\"filteredCourses.pageId === page\"\r\n                        *ngIf=\"\r\n                          filteredCourses.pageId <= i + 3 &&\r\n                          filteredCourses.pageId >= i - 1\r\n                        \"\r\n                        fill=\"{{\r\n                          filteredCourses.pageId === page ? 'clear' : 'solid'\r\n                        }}\"\r\n                        color=\"{{\r\n                          page === filteredCourses.pageId ? 'danger' : 'primary'\r\n                        }}\"\r\n                        (click)=\"goPage(page)\"\r\n                        >{{ page }}</ion-button\r\n                      >\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-text color=\"primary\"> ... </ion-text>\r\n                    </span>\r\n\r\n                    <span\r\n                      *ngIf=\"\r\n                        filteredCourses.pageId + 2 < filteredCourses.pageCount\r\n                      \"\r\n                    >\r\n                      <ion-button\r\n                        (click)=\"goPage(filteredCourses.pageCount)\"\r\n                        size=\"small\"\r\n                        fill=\"solid\"\r\n                        color=\"primary\"\r\n                      >\r\n                        {{ filteredCourses.pageCount }}\r\n                      </ion-button>\r\n                    </span>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"selected\" class=\"bg\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"danger\"\r\n          shape=\"round\"\r\n          (click)=\"selected = false\"\r\n        >\r\n          برگشت\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"selectedCourse\">\r\n      <ion-col size=\"12\" offset=\"0\" size-md=\"10\" offset-md=\"1\">\r\n        <ion-row dir=\"rtl\">\r\n          <ion-col size=\"12\" offset=\"0\" size-lg=\"4\" offset-lg=\"0\">\r\n            <!-- <ion-card>\r\n                <ion-card-header>\r\n                  <ion-card-subtitle\r\n                    style=\"text-align: center\"\r\n                    *ngIf=\"selectedCourse.offPrice != 0\"\r\n                  >\r\n                    قیمت دوره:\r\n                    <ion-text color=\"danger\">\r\n                      <del>\r\n                        {{ selectedCourse.price | rial }}\r\n                      </del>\r\n                    </ion-text>\r\n                  </ion-card-subtitle>\r\n                  <ion-card-title style=\"text-align: center\"\r\n                    >قیمت دوره:\r\n                    <ion-text\r\n                      color=\"{{\r\n                        selectedCourse.offPrice == 0 || selectedCourse.price == 0\r\n                          ? selectedCourse.price == 0\r\n                            ? 'warning'\r\n                            : 'success'\r\n                          : 'success'\r\n                      }}\"\r\n                    >\r\n                      {{\r\n                        selectedCourse.offPrice == 0 || selectedCourse.price == 0\r\n                          ? selectedCourse.price == 0\r\n                            ? \"رایگان\"\r\n                            : (selectedCourse.price | rial)\r\n                          : (selectedCourse.offPrice | rial)\r\n                      }}\r\n                    </ion-text></ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content dir=\"rtl\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-label>کد فروشنده: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        <h5>{{ selectedCourse.sellerUser.id }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label>فروشنده کالا: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        <h5>{{ getTeacherName() }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"school-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.productVideos\">\r\n                      <ion-label>تعداد ویدئو: </ion-label>\r\n                      <ion-text color=\"success\">\r\n                        <h5>{{ selectedCourse.productVideos.length }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"videocam-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.viewCount\">\r\n                      <ion-label>تعداد بازدید: </ion-label>\r\n                      <ion-text color=\"success\">\r\n                        <h5>{{ selectedCourse.viewCount }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"eye-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.createDate\">\r\n                      <ion-label>تاریخ ثبت دوره: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>{{ selectedCourse.createDate | persianDate }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.lastUpdateDate\">\r\n                      <ion-label>تاریخ بروزرسانی: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>{{ selectedCourse.lastUpdateDate | persianDate }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"calendar-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.id\">\r\n                      <ion-label>کد دوره: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>\r\n                          {{ selectedCourse.id }}\r\n                        </h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"qr-code-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"selectedCourse.productVideos.length > 0\">\r\n                      <ion-label>مدت زمان دوره: </ion-label>\r\n                      <ion-text color=\"medium\">\r\n                        <h5>{{ totalVideoTime() }}</h5>\r\n                      </ion-text>\r\n                      <ion-icon slot=\"end\" name=\"time-outline\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label\r\n                        color=\"{{\r\n                          selectedCourse.isActive ? 'success' : 'danger'\r\n                        }}\"\r\n                        >{{\r\n                          selectedCourse.isActive ? \"فعال\" : \"غیرفعال\"\r\n                        }}</ion-label\r\n                      >\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <ion-card *ngIf=\"courseCategores.length > 0\">\r\n                <ion-card-header>\r\n                  <ion-card-title class=\"text-center\"\r\n                    >گروه های دوره</ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-item\r\n                      button\r\n                      (click)=\"onCategoryClick(category)\"\r\n                      *ngFor=\"let category of courseCategores\"\r\n                    >\r\n                      <ion-label title=\"{{ category }}\"\r\n                        >{{ category }}\r\n                      </ion-label>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n              </ion-card> -->\r\n          </ion-col>\r\n          <ion-col size=\"12\" offset=\"0\" size-lg=\"8\" offset-lg=\"0\">\r\n            <!-- <ion-card>\r\n                <ion-card-header>\r\n                  <ion-card-subtitle\r\n                    *ngIf=\"selectedCourse.productVideos.length > 0\"\r\n                  >\r\n                    <ion-item>\r\n                      <ion-label>مدت زمان دوره: </ion-label>\r\n                      <ion-text color=\"warning\">\r\n                        <h5>{{ totalVideoTime() }}</h5>\r\n                      </ion-text>\r\n                    </ion-item>\r\n                  </ion-card-subtitle>\r\n                  <ion-card-title style=\"text-align: center\">\r\n                    <a routerLink=\"{{ '/c/' + selectedCourse.id }}\">\r\n                      <h1 style=\"font-size: large\">\r\n                        <ion-text class=\"pointer\" color=\"light\">\r\n                          {{ selectedCourse.name }}</ion-text\r\n                        >\r\n                      </h1></a\r\n                    ></ion-card-title\r\n                  >\r\n                </ion-card-header>\r\n                <ion-card-content dir=\"rtl\" class=\"justify\">\r\n                  <ion-img\r\n                    class=\"ion-margin-bottom c-a-images\"\r\n                    [src]=\"selectedCourse.imageName\"\r\n                    [alt]=\"selectedCourse.description\"\r\n                    [title]=\"selectedCourse.name\"\r\n                  ></ion-img>\r\n                  <ion-label\r\n                    ><a routerLink=\"{{ '/p/' + selectedCourse.id }}\"\r\n                      ><h2>\r\n                        <b\r\n                          ><ion-text class=\"pointer\" color=\"light\">\r\n                            {{ selectedCourse.name }}\r\n                          </ion-text></b\r\n                        >\r\n                      </h2></a\r\n                    ></ion-label\r\n                  >\r\n                  <br />\r\n                  <ion-text>\r\n                    <div [innerHTML]=\"selectedCourse.shortDescription\"></div>\r\n                  </ion-text>\r\n                  <br />\r\n                  <br />\r\n                  <ion-text\r\n                    ><div [innerHTML]=\"selectedCourse.description\"></div\r\n                  ></ion-text>\r\n                </ion-card-content>\r\n              </ion-card> -->\r\n            <ion-card>\r\n              <!-- <ion-card-header *ngIf=\"selectedCourse.videoUrl\">\r\n                  <video style=\"width: 100%\" controls>\r\n                    <source [src]=\"selectedCourse.videoUrl\" type=\"video/mp4\" />\r\n                  </video>\r\n                </ion-card-header> -->\r\n              <ion-card-content dir=\"rtl\" class=\"no-padding\">\r\n                <div *ngIf=\"selectedCourse.productVideos\">\r\n                  <!-- <ion-list>\r\n                      <div\r\n                        *ngFor=\"\r\n                          let video of selectedCourse.courseVideos;\r\n                          let i = index\r\n                        \"\r\n                      >\r\n                        <ion-item lines=\"none\">\r\n                          <ion-label\r\n                            title=\"{{\r\n                              video.courseTitle + ' (' + video.videoTime + ')'\r\n                            }}\"\r\n                            >{{ i + 1 + \"- \" + video.courseTitle }}</ion-label\r\n                          ><ion-text color=\"warning\">\r\n                            {{ \"(\" + video.videoTime + \")\" }}\r\n                          </ion-text>\r\n                          <a\r\n                            [href]=\"video.videoUrl\"\r\n                            target=\"_blank\"\r\n                            [title]=\"selectedCourse.name\"\r\n                            ><ion-button\r\n                              expand=\"block\"\r\n                              fill=\"clear\"\r\n                              shape=\"round\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"{{ video.isFree ? 'success' : 'danger' }}\"\r\n                                slot=\"icon-only\"\r\n                                name=\"download-outline\"\r\n                              ></ion-icon> </ion-button\r\n                          ></a>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <ion-button\r\n                            *ngIf=\"video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"danger\"\r\n                            shape=\"round\"\r\n                            (click)=\"presentDeActiveAlertConfirm(video.id)\"\r\n                          >\r\n                            غیر فعال کردن\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"!video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"success\"\r\n                            shape=\"round\"\r\n                            fill=\"solid\"\r\n                            (click)=\"presentActiveAlertConfirm(video.id)\"\r\n                          >\r\n                            فعال کردن\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"!video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"warning\"\r\n                            shape=\"round\"\r\n                            fill=\"solid\"\r\n                            (click)=\"presentActiveAlertConfirmNoShare(video.id)\"\r\n                          >\r\n                            فعال کردن بدون انتشار\r\n                          </ion-button>\r\n                        </ion-item>\r\n                      </div>\r\n                    </ion-list> -->\r\n                  <ion-list>\r\n                    <div\r\n                      *ngFor=\"\r\n                        let video of selectedCourse.productVideos;\r\n                        let i = index\r\n                      \"\r\n                    >\r\n                      <ion-item\r\n                        button\r\n                        (click)=\"onDetailClick(video.id)\"\r\n                        color=\"{{ videoDetail[i].hide ? '' : 'warning2' }}\"\r\n                      >\r\n                        <ion-label title=\"{{ video.courseTitle }}\">{{\r\n                          i + 1 + \"- \" + video.courseTitle\r\n                        }}</ion-label>\r\n\r\n                        <ion-button\r\n                          *ngIf=\"video.isFree\"\r\n                          expand=\"block\"\r\n                          fill=\"clear\"\r\n                          shape=\"round\"\r\n                        >\r\n                          <ion-icon\r\n                            color=\"success\"\r\n                            slot=\"icon-only\"\r\n                            name=\"bag-check-outline\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n\r\n                        <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                          <ion-icon\r\n                            color=\"{{\r\n                              videoDetail[i].hide ? 'instagram' : 'danger'\r\n                            }}\"\r\n                            slot=\"icon-only\"\r\n                            name=\"{{\r\n                              videoDetail[i].hide\r\n                                ? 'reorder-three-outline'\r\n                                : 'remove-circle-outline'\r\n                            }}\"\r\n                          ></ion-icon>\r\n                        </ion-button>\r\n                      </ion-item>\r\n\r\n                      <ion-card *ngIf=\"!videoDetail[i].hide\">\r\n                        <ion-card-header color=\"primary\">\r\n                          <ion-card-subtitle class=\"text-center\"\r\n                            >اطلاعات بیشتر</ion-card-subtitle\r\n                          >\r\n                        </ion-card-header>\r\n                        <div\r\n                          *ngIf=\"\r\n                            !videoDetail[i].hide &&\r\n                            !video.isFile &&\r\n                            !video.isAparat &&\r\n                            video.videoUrlOnline !== ''\r\n                          \"\r\n                        >\r\n                          <video class=\"video\" controls>\r\n                            <source\r\n                              [src]=\"video.videoUrlOnline\"\r\n                              type=\"{{ onGetVideoFormat(video.id) }}\"\r\n                            />\r\n                            مرورگر شما قابلیت پخش آنلاین ندارد\r\n                          </video>\r\n                        </div>\r\n\r\n                        <div\r\n                          class=\"ion-margin-top\"\r\n                          *ngIf=\"\r\n                            !videoDetail[i].hide &&\r\n                            !video.isFile &&\r\n                            video.isAparat\r\n                          \"\r\n                        >\r\n                          <div\r\n                            class=\"h_iframe-aparat_embed_frame\"\r\n                            [title]=\"video.courseTitle\"\r\n                          >\r\n                            <span class=\"video-span\"></span\r\n                            ><iframe\r\n                              [src]=\"checkURL2(video.id)\"\r\n                              [title]=\"video.courseTitle\"\r\n                              allowfullscreen=\"true\"\r\n                              webkitallowfullscreen=\"true\"\r\n                              mozallowfullscreen=\"true\"\r\n                            ></iframe>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <ion-item *ngIf=\"!videoDetail[i].hide\">\r\n                          <ion-label>لینک دانلود:</ion-label>\r\n                          <a\r\n                            *ngIf=\"video.isFree; else private\"\r\n                            class=\"decoration-none\"\r\n                            [href]=\"video.videoUrl\"\r\n                            target=\"_blank\"\r\n                            [title]=\"video.courseTitle\"\r\n                            ><ion-button\r\n                              expand=\"block\"\r\n                              fill=\"clear\"\r\n                              shape=\"round\"\r\n                            >\r\n                              <ion-icon\r\n                                color=\"success\"\r\n                                slot=\"icon-only\"\r\n                                name=\"download-outline\"\r\n                              ></ion-icon> </ion-button\r\n                          ></a>\r\n\r\n                          <ng-template #private>\r\n                            <a\r\n                              class=\"decoration-none\"\r\n                              [href]=\"video.videoUrl\"\r\n                              target=\"_blank\"\r\n                              [title]=\"video.courseTitle\"\r\n                              ><ion-button\r\n                                expand=\"block\"\r\n                                fill=\"clear\"\r\n                                shape=\"round\"\r\n                              >\r\n                                <ion-icon\r\n                                  color=\"danger\"\r\n                                  slot=\"icon-only\"\r\n                                  name=\"key-outline\"\r\n                                ></ion-icon> </ion-button\r\n                            ></a>\r\n                          </ng-template>\r\n                        </ion-item>\r\n\r\n                        <ion-item *ngIf=\"!videoDetail[i].hide && !video.isFile\">\r\n                          <ion-label> مدت زمان ویدیو: </ion-label>\r\n                          <ion-text *ngIf=\"!video.isFile\" color=\"warning\">\r\n                            {{ \"(\" + video.videoTime + \")\" }}\r\n                          </ion-text>\r\n                        </ion-item>\r\n\r\n                        <ion-item *ngIf=\"!videoDetail[i].hide\">\r\n                          <ion-text color=\"light\" class=\"full-width\"\r\n                            ><h3 class=\"h3-title\">\r\n                              عنوان:\r\n                              <ion-text color=\"light\" class=\"h3-title-content\">\r\n                                {{ video.courseTitle }}\r\n                              </ion-text>\r\n                            </h3>\r\n                          </ion-text>\r\n                        </ion-item>\r\n\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            !videoDetail[i].hide && video.videoDescription !== ''\r\n                          \"\r\n                          lines=\"none\"\r\n                        >\r\n                          <ion-text color=\"light\" class=\"no-margin\">\r\n                            <h3 class=\"no-margin\">توضیحات:</h3>\r\n                          </ion-text>\r\n                        </ion-item>\r\n                        <ion-item\r\n                          *ngIf=\"\r\n                            !videoDetail[i].hide && video.videoDescription !== ''\r\n                          \"\r\n                        >\r\n                          <p style=\"white-space: pre-line; margin-right: 8px\">\r\n                            {{ video.videoDescription }}\r\n                          </p>\r\n                        </ion-item>\r\n\r\n                        <ion-item>\r\n                          <ion-button\r\n                            *ngIf=\"video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"danger\"\r\n                            shape=\"round\"\r\n                            (click)=\"presentDeActiveAlertConfirm(video.id)\"\r\n                          >\r\n                            غیر فعال کردن\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"!video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"success\"\r\n                            shape=\"round\"\r\n                            fill=\"solid\"\r\n                            (click)=\"presentActiveAlertConfirm(video.id)\"\r\n                          >\r\n                            فعال کردن\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"!video.isActive\"\r\n                            expand=\"block\"\r\n                            color=\"warning\"\r\n                            shape=\"round\"\r\n                            fill=\"solid\"\r\n                            (click)=\"presentActiveAlertConfirmNoShare(video.id)\"\r\n                          >\r\n                            فعال کردن بدون انتشار\r\n                          </ion-button>\r\n                        </ion-item>\r\n                      </ion-card>\r\n                    </div>\r\n                  </ion-list>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_product-video-state_product-video-state_module_ts.js.map