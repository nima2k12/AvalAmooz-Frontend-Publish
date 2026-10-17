"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_pipe_price_module_ts-src_app_view_pages_course_course_module_ts"],{

/***/ 29420:
/*!******************************************************!*\
  !*** ./src/app/core/pipe/off-price/OffPrice.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffPricePipe": () => (/* binding */ OffPricePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let OffPricePipe = class OffPricePipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        if (value != null) {
            return this.currencyPipe.transform(value, 'BIF', '', digitsInfo, locale);
        }
        return this.currencyPipe.transform(0, currencyCode, display, locale).split('0.00')[0];
    }
};
OffPricePipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe }
];
OffPricePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'OffPrice'
    })
], OffPricePipe);



/***/ }),

/***/ 21448:
/*!*******************************************!*\
  !*** ./src/app/core/pipe/price.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceModule": () => (/* binding */ PriceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price/Rial.pipe */ 28606);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./off-price/OffPrice.pipe */ 29420);






let PriceModule = class PriceModule {
};
PriceModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__.RialPipe,
            _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__.OffPricePipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule
        ],
        exports: [_price_Rial_pipe__WEBPACK_IMPORTED_MODULE_0__.RialPipe, _off_price_OffPrice_pipe__WEBPACK_IMPORTED_MODULE_1__.OffPricePipe],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe]
    })
], PriceModule);



/***/ }),

/***/ 28606:
/*!**********************************************!*\
  !*** ./src/app/core/pipe/price/Rial.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RialPipe": () => (/* binding */ RialPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);



let RialPipe = class RialPipe {
    constructor(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    transform(value, currencyCode, display, digitsInfo, locale) {
        if (value != null) {
            return this.currencyPipe.transform(value, 'BIF', '', digitsInfo, locale) + ' تومان';
        }
        return this.currencyPipe.transform(0, currencyCode, display, locale).split('0.00')[0] + ' تومان';
    }
};
RialPipe.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe }
];
RialPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'rial'
    })
], RialPipe);



/***/ }),

/***/ 58966:
/*!************************************************************!*\
  !*** ./src/app/view/pages/course/course-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseRoutingModule": () => (/* binding */ CourseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.component */ 60817);

/* eslint-disable max-len */



const routes = [
    {
        path: '',
        component: _course_component__WEBPACK_IMPORTED_MODULE_0__.CourseComponent
    },
    // {
    //   path: ':id',
    //   redirectTo: 'Id/:id',
    //   pathMatch: 'full'
    // },
    {
        path: 'id/:id',
        redirectTo: '/c/:id',
        // loadChildren: () => import('../../../view/pages/course/course-by-id/course-by-id.module').then(m => m.CourseByIdModule),
        pathMatch: 'full'
    },
    {
        path: 'Id/:id',
        redirectTo: '/c/:id',
        // loadChildren: () => import('../../../view/pages/course/course-by-id/course-by-id.module').then(m => m.CourseByIdModule),
        pathMatch: 'full'
    },
    // {
    //   path: 'TopviewedCourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'TopViewedcourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'Topviewedcourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'topviewedcourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'topviewedCourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'topViewedcourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'topViewedCourses',
    //   redirectTo: '/Course/TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   // loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    // {
    //   path: 'TopViewedCourses',
    //   // tslint:disable-next-line: max-line-length
    //   loadChildren: () => import('../../../view/pages/course/top-viewed-courses/top-viewed-courses.module').then(m => m.TopViewedCoursesModule),
    //   data: {
    //     title: 'اول آموز - دوره‌های محبوب روش تدریس ابتدایی',
    //     description: 'اول آموز | دوره‌های محبوب روش تدریس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
    //     ogUrl: 'http://localhost:4300/Course/TopViewedCourses'
    //   }
    // },
    {
        path: 'Freecourses',
        redirectTo: '/Course/FreeCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره های رایگان آموزش تیونینگ',
            description: 'اول آموز | دوره های رایگان تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/FreeCourses'
        }
    },
    {
        path: 'freecourses',
        redirectTo: '/Course/FreeCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره های رایگان آموزش تیونینگ',
            description: 'اول آموز | دوره های رایگان تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/FreeCourses'
        }
    },
    {
        path: 'freeCourses',
        redirectTo: '/Course/FreeCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره های رایگان آموزش تیونینگ',
            description: 'اول آموز | دوره های رایگان تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/FreeCourses'
        }
    },
    {
        path: 'FreeCourses',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_modal_filter_filter_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_course_top-viewed-courses_top-viewed-courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/course/top-viewed-courses/top-viewed-courses.module */ 75727)).then(m => m.TopViewedCoursesModule),
        data: {
            title: 'اول آموز - دوره های رایگان آموزش تیونینگ',
            description: 'اول آموز | دوره های رایگان تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/FreeCourses'
        }
    },
    {
        path: 'OffpricedCourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'OffPricedcourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'OffPricedcourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'Offpricedcourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'offpricedcourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'offpricedCourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'offPricedcourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'offPricedCourses',
        redirectTo: '/Course/OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../view/pages/course/off-priced-courses/off-priced-courses.module').then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'OffPricedCourses',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_modal_filter_filter_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_course_off-priced-courses_off-priced-courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/course/off-priced-courses/off-priced-courses.module */ 18098)).then(m => m.OffPricedCoursesModule),
        data: {
            title: 'اول آموز - دوره‌های ویژه و تخفیف‌دار ابتدایی',
            description: 'اول آموز | دوره های تخفیف دار تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/OffPricedCourses'
        }
    },
    {
        path: 'Newcourses',
        redirectTo: '/Course/NewCourses',
        // loadChildren: () => import('../../../view/pages/course/new-courses/new-courses.module').then(m => m.NewCoursesModule),
        data: {
            title: 'اول آموز - جدیدترین دوره‌های روش تدریس ابتدایی',
            description: 'اول آموز | جدید ترین دوره های تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/NewCourses'
        }
    },
    {
        path: 'newcourses',
        redirectTo: '/Course/NewCourses',
        // loadChildren: () => import('../../../view/pages/course/new-courses/new-courses.module').then(m => m.NewCoursesModule),
        data: {
            title: 'اول آموز - جدیدترین دوره‌های روش تدریس ابتدایی',
            description: 'اول آموز | جدید ترین دوره های تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/NewCourses'
        }
    },
    {
        path: 'newCourses',
        redirectTo: '/Course/NewCourses',
        // loadChildren: () => import('../../../view/pages/course/new-courses/new-courses.module').then(m => m.NewCoursesModule),
        data: {
            title: 'اول آموز - جدیدترین دوره‌های روش تدریس ابتدایی',
            description: 'اول آموز | جدید ترین دوره های تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/NewCourses'
        }
    },
    {
        path: 'NewCourses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_course_new-courses_new-courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/course/new-courses/new-courses.module */ 13529)).then(m => m.NewCoursesModule),
        data: {
            title: 'اول آموز - جدیدترین دوره‌های روش تدریس ابتدایی',
            description: 'اول آموز | جدید ترین دوره های تیونینگ | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course/NewCourses'
        }
    },
];
let CourseRoutingModule = class CourseRoutingModule {
};
CourseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CourseRoutingModule);



/***/ }),

/***/ 60817:
/*!*******************************************************!*\
  !*** ./src/app/view/pages/course/course.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseComponent": () => (/* binding */ CourseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.component.html?ngResource */ 79372);
/* harmony import */ var _course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.component.scss?ngResource */ 45517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/common/G */ 67122);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/i18n/site-language.service */ 37159);








let CourseComponent = class CourseComponent {
    constructor(router, menuCtrl, language) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.language = language;
        this.categories = [];
        this.categoriesLoaded = false;
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
        this.windowWidth = 1000;
        _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.getWindowWidth().subscribe(res => {
            this.windowWidth = res;
        });
        this.categories = [];
        this.categorySubscription = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.getCourseCategory().subscribe(res => {
            if (res != null) {
                this.categories = res;
                this.categoriesLoaded = true;
            }
        });
        // GResponse.CourseCategory.forEach(c => {
        //   if (c.parentId != null) {
        //     this.categories.push(c);
        //   }
        // });
    }
    ngOnDestroy() {
        if (this.categorySubscription)
            this.categorySubscription.unsubscribe();
    }
    goTop() {
        this.content.scrollToTop(3000);
    }
    forwardUrl(url) {
        window.location.href = url;
    }
    ngOnInit() {
        this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Instagram;
        this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Twiter;
        this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Facebook;
        this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Telegram;
        this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Youtube;
        this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Pinterest;
        this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Linkedin;
        this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Twitch;
        this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Aparat;
        this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.Discord;
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
    onClick(id) {
        this.router
            .navigate(['/Home', 'Search'], {
            queryParams: {
                categoryIds: [id],
                page: 1
            }
        });
    }
    toggleAppMenu() {
        this.menuCtrl.toggle('start');
    }
};
CourseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_3__.SiteLanguageService }
];
CourseComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent,] }]
};
CourseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-course',
        template: _course_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_course_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CourseComponent);



/***/ }),

/***/ 10507:
/*!****************************************************!*\
  !*** ./src/app/view/pages/course/course.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseModule": () => (/* binding */ CourseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-routing.module */ 58966);
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.component */ 60817);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/course/shared-course.module */ 44704);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/i18n/site-i18n.module */ 58586);












let CourseModule = class CourseModule {
};
CourseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_course_component__WEBPACK_IMPORTED_MODULE_2__.CourseComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _course_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _components_course_shared_course_module__WEBPACK_IMPORTED_MODULE_3__.SharedCourseModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_6__.SiteI18nModule
        ]
    })
], CourseModule);



/***/ }),

/***/ 45517:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/course/course.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: #1e1b4b;\n  --ink-secondary: #475569;\n  --muted: #64748b;\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: #ede9fe;\n  --purple-glow: rgba(109, 40, 217, 0.16);\n  --amber: #f59e0b;\n  --amber-dark: #d97706;\n  --amber-light: #fef3c7;\n  --amber-glow: rgba(245, 158, 11, 0.18);\n  --emerald: #10b981;\n  --emerald-dark: #059669;\n  --emerald-light: #d1fae5;\n  --rose: #f43f5e;\n  --rose-light: #ffe4e6;\n  --paper: #ffffff;\n  --bg-canvas: #fcfbfe;\n  --border-soft: #ede9f6;\n  --card-bg: #ffffff;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", system-ui, sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 10px;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.learning-header {\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1280px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.menu-toggle {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  transition: all 0.2s ease;\n}\n\n.menu-toggle:hover {\n  background: var(--catalog-purple-hover, #ded7fb);\n  transform: scale(1.04);\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n  border-radius: 12px;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -5px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 13px;\n  animation: sparkle-pulse 2s ease-in-out infinite;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--purple);\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n}\n\n.main-nav .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  color: var(--ink);\n  border-radius: 12px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n\n.main-nav .nav-link-btn ion-icon {\n  font-size: 16px;\n  color: var(--purple);\n}\n\n.main-nav .nav-link-btn:hover {\n  color: var(--purple);\n  background: var(--purple-light);\n}\n\n.main-nav .nav-link-btn.active-nav {\n  color: var(--purple);\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--catalog-soft, #f8fafc);\n  color: var(--ink);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  border: 1px solid var(--border-soft);\n  transition: all 0.2s ease;\n}\n\n.icon-button:hover {\n  color: var(--purple);\n  border-color: var(--purple);\n  background: var(--purple-light);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%));\n  color: #fff !important;\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 14px;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transition: all 0.2s ease;\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.login-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.32);\n}\n\n.header-search-bar {\n  background: var(--catalog-surface, #fff);\n  border-top: 1px solid var(--border-soft);\n  padding: 12px 24px;\n}\n\n.header-search-bar .search-input-wrap {\n  max-width: 680px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--catalog-soft, #f8fafc);\n  border: 1.5px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 6px 14px;\n}\n\n.header-search-bar .search-input-wrap ion-icon {\n  color: var(--muted);\n  font-size: 20px;\n}\n\n.header-search-bar .search-input-wrap input {\n  flex: 1;\n  border: 0;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ink);\n  outline: none;\n}\n\n.header-search-bar .search-input-wrap input::placeholder {\n  color: var(--muted);\n}\n\n.category-directory-content {\n  --background: var(--bg-canvas);\n}\n\n.page-wrapper {\n  position: relative;\n  overflow: hidden;\n  min-height: calc(100vh - 80px);\n  padding-bottom: 56px;\n}\n\n.backdrop-glows {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.glow-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.6;\n}\n\n.glow-purple {\n  width: 440px;\n  height: 440px;\n  top: -100px;\n  inset-inline-end: -100px;\n  background: radial-gradient(circle, var(--purple-glow), transparent 70%);\n}\n\n.glow-amber {\n  width: 380px;\n  height: 380px;\n  top: 350px;\n  inset-inline-start: -120px;\n  background: radial-gradient(circle, var(--amber-glow), transparent 70%);\n}\n\n.glow-emerald {\n  width: 400px;\n  height: 400px;\n  bottom: 100px;\n  inset-inline-end: 10%;\n  background: radial-gradient(circle, rgba(16, 185, 129, 0.12), transparent 70%);\n}\n\n.floating-decor {\n  position: absolute;\n  font-size: 24px;\n  opacity: 0.28;\n  pointer-events: none;\n  animation: float-decor 6s ease-in-out infinite;\n}\n\n.floating-decor.book {\n  top: 110px;\n  inset-inline-start: 4%;\n  animation-delay: 0s;\n}\n\n.floating-decor.star {\n  top: 220px;\n  inset-inline-end: 6%;\n  font-size: 28px;\n  color: var(--amber);\n  opacity: 0.5;\n  animation-delay: 1.5s;\n}\n\n.floating-decor.pencil {\n  top: 580px;\n  inset-inline-start: 3%;\n  animation-delay: 3s;\n}\n\n.floating-decor.sparkle {\n  top: 800px;\n  inset-inline-end: 4%;\n  color: var(--purple);\n  opacity: 0.4;\n  animation-delay: 4.5s;\n}\n\n.category-main {\n  position: relative;\n  z-index: 1;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px 24px 0;\n}\n\n.category-hero {\n  position: relative;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  padding: 44px 40px;\n  box-shadow: 0 12px 36px rgba(109, 40, 217, 0.05);\n  margin-bottom: 36px;\n  overflow: hidden;\n}\n\n.category-hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background: linear-gradient(90deg, var(--purple) 0%, var(--amber) 50%, var(--emerald) 100%);\n}\n\n.eyebrow-wrap {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--purple);\n  background: var(--purple-light);\n  padding: 5px 14px;\n  border-radius: 999px;\n}\n\n.eyebrow .little-star {\n  color: var(--amber);\n}\n\n.hero-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n  background: var(--emerald-light);\n  padding: 5px 12px;\n  border-radius: 999px;\n}\n\n.hero-chip ion-icon {\n  font-size: 14px;\n}\n\n.category-hero h1 {\n  font-size: clamp(24px, 3.8vw, 36px);\n  font-weight: 900;\n  line-height: 1.45;\n  color: var(--ink);\n  margin-bottom: 14px;\n}\n\n.category-hero h1 .highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--purple);\n}\n\n.category-hero h1 .highlight svg {\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  stroke: var(--amber);\n  stroke-width: 3.5;\n  fill: none;\n  stroke-linecap: round;\n}\n\n.hero-desc {\n  font-size: 15px;\n  line-height: 1.95;\n  color: var(--ink-secondary);\n  max-width: 820px;\n  margin-bottom: 24px;\n}\n\n.hero-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 22px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  white-space: nowrap;\n}\n\n.button.primary {\n  background: var(--catalog-action-gradient, linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%));\n  color: #fff !important;\n  box-shadow: 0 6px 18px var(--purple-glow);\n}\n\n.button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(109, 40, 217, 0.28);\n}\n\n.button.secondary {\n  background: var(--purple-light);\n  color: var(--purple) !important;\n}\n\n.button.secondary:hover {\n  background: var(--catalog-purple-hover, #ded7fb);\n  transform: translateY(-2px);\n}\n\n.grade-pills-row {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border-soft);\n}\n\n.grade-pills-row .pills-title {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--muted);\n  margin-inline-end: 4px;\n}\n\n.grade-pills-row .grade-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--ink-secondary);\n  background: var(--catalog-soft, #f1f5f9);\n  padding: 6px 14px;\n  border-radius: 999px;\n  transition: all 0.2s ease;\n}\n\n.grade-pills-row .grade-pill .pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--emerald);\n}\n\n.grade-pills-row .grade-pill:hover, .grade-pills-row .grade-pill.active {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.category-grid-section {\n  margin-bottom: 48px;\n}\n\n.catalog-heading-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.catalog-heading-row .section-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--purple);\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n\n.catalog-heading-row .section-kicker .kicker-sparkle {\n  color: var(--amber);\n}\n\n.catalog-heading-row h2 {\n  font-size: clamp(20px, 2.6vw, 26px);\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.catalog-heading-row .count-chip {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--purple);\n  background: var(--purple-light);\n  padding: 6px 14px;\n  border-radius: 999px;\n}\n\n.categories-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n\n.cat-card {\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.04);\n}\n\n.cat-card:hover {\n  transform: translateY(-5px);\n  border-color: var(--purple);\n  box-shadow: 0 14px 34px rgba(109, 40, 217, 0.1);\n}\n\n.cat-card:hover .cat-card-media img {\n  transform: scale(1.05);\n}\n\n.cat-card-media {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background: var(--catalog-soft, #f8fafc);\n}\n\n.cat-card-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.4s ease;\n}\n\n.cat-card-media .cat-card-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(30, 27, 75, 0.25) 100%);\n}\n\n.cat-card-media .cat-badge {\n  position: absolute;\n  top: 12px;\n  inset-inline-end: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 800;\n  background: rgba(var(--catalog-surface-rgb, 255, 255, 255), 0.94);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: var(--purple);\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n\n.cat-card-media .cat-badge .badge-spark {\n  color: var(--amber);\n}\n\n.cat-card-body {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.cat-card-body h2 {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ink);\n  margin: 0 0 16px;\n  text-align: center;\n}\n\n.cat-card-body .cat-card-actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: auto;\n}\n\n.cat-card-body .cat-card-actions .card-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  transition: all 0.2s ease;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.cat-card-body .cat-card-actions .card-btn ion-icon {\n  font-size: 15px;\n}\n\n.cat-card-body .cat-card-actions .card-btn.courses-btn {\n  background: var(--purple-light);\n  color: var(--purple);\n}\n\n.cat-card-body .cat-card-actions .card-btn.courses-btn:hover {\n  background: var(--catalog-action, var(--purple));\n  color: #fff;\n}\n\n.cat-card-body .cat-card-actions .card-btn.products-btn {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.cat-card-body .cat-card-actions .card-btn.products-btn:hover {\n  background: var(--catalog-buy, var(--emerald));\n  color: #fff;\n}\n\n.directory-empty-state {\n  text-align: center;\n  padding: 56px 24px;\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 24px;\n}\n\n.directory-empty-state .empty-icon {\n  font-size: 44px;\n  margin-bottom: 12px;\n}\n\n.directory-empty-state h3 {\n  font-size: 19px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 8px;\n}\n\n.directory-empty-state p {\n  font-size: 14px;\n  color: var(--muted);\n}\n\n.supportive-curriculum-strip {\n  background: var(--catalog-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 22px;\n  padding: 24px 32px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.03);\n}\n\n.supportive-curriculum-strip .curriculum-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.supportive-curriculum-strip .curriculum-item .curr-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--purple-light);\n  color: var(--purple);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.supportive-curriculum-strip .curriculum-item .curr-text b {\n  display: block;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 2px;\n}\n\n.supportive-curriculum-strip .curriculum-item .curr-text small {\n  display: block;\n  font-size: 12px;\n  color: var(--muted);\n  line-height: 1.6;\n}\n\n@media (max-width: 960px) {\n  .supportive-curriculum-strip {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 20px 24px;\n  }\n}\n\n@media (max-width: 768px) {\n  .nav-shell {\n    padding: 10px 16px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .category-hero {\n    padding: 28px 20px;\n  }\n\n  .categories-cards-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .cat-card-body .cat-card-actions {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes sparkle-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.7;\n  }\n}\n\n@keyframes float-decor {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-14px);\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  --catalog-surface: #211c32;\n  --catalog-surface-rgb: 33, 28, 50;\n  --catalog-soft: #29233d;\n  --catalog-hover: #342c49;\n  --catalog-border: #4b4164;\n  --catalog-text: #f2eefb;\n  --catalog-secondary: #d0c8e2;\n  --catalog-muted: #b1a6c6;\n  --catalog-purple-soft: #302347;\n  --catalog-purple-hover: #3d2d58;\n  --catalog-amber-soft: #3b2d18;\n  --catalog-emerald-soft: #18372e;\n  --catalog-rose-soft: #402334;\n  --catalog-sky-soft: #193346;\n  --catalog-purple: #c4b5fd;\n  --catalog-emerald: #6ee7b7;\n  --catalog-sky: #7dd3fc;\n  --catalog-sky-action: #0369a1;\n  --catalog-action: #7c3aed;\n  --catalog-action-hover: #6d28d9;\n  --catalog-action-gradient: linear-gradient(135deg, #7c3aed, #5b21b6);\n  --catalog-buy: #047857;\n  --catalog-buy-gradient: linear-gradient(135deg, #047857, #065f46);\n  --catalog-danger: #be123c;\n  --catalog-amber-action-gradient: linear-gradient(135deg, #92400e, #78350f);\n  --ink: var(--catalog-text);\n  --ink-secondary: var(--catalog-secondary);\n  --muted: var(--catalog-muted);\n  --purple: var(--catalog-purple);\n  --purple-dark: var(--catalog-purple);\n  --purple-light: var(--catalog-purple-soft);\n  --purple-glow: rgba(167, 139, 250, 0.14);\n  --amber: #fbbf24;\n  --amber-dark: #fcd34d;\n  --amber-light: var(--catalog-amber-soft);\n  --amber-glow: rgba(251, 191, 36, 0.1);\n  --emerald: #34d399;\n  --emerald-dark: var(--catalog-emerald);\n  --emerald-light: var(--catalog-emerald-soft);\n  --rose: #fda4af;\n  --rose-light: var(--catalog-rose-soft);\n  --sky: var(--catalog-sky);\n  --sky-light: var(--catalog-sky-soft);\n  --paper: var(--catalog-surface);\n  --bg-canvas: #141020;\n  --border-soft: var(--catalog-border);\n  --card-bg: var(--catalog-surface);\n  --card-shadow: 0 12px 36px rgba(0, 0, 0, 0.24);\n  --course-surface: var(--catalog-surface);\n  --product-surface: var(--catalog-surface);\n  --course-accent-rgb: 196, 181, 253;\n  --product-accent-rgb: 196, 181, 253;\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  --ion-card-background: var(--paper);\n  --ion-item-background: var(--paper);\n  --ion-border-color: var(--border-soft);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .brand {\n  color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--bg-canvas);\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) .bg {\n  background: var(--bg-canvas);\n}\n\n:host-context(.dark-theme) ion-card:not(.ion-color) {\n  --background: var(--paper);\n  color: var(--ink-secondary);\n}\n\n:host-context(.dark-theme) ion-card-title {\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-card-subtitle {\n  color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-card-header[color=primary] {\n  --ion-color-base: var(--catalog-soft) !important;\n  --ion-color-contrast: var(--ink) !important;\n  color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-list:not(.ion-color) {\n  background: transparent;\n}\n\n:host-context(.dark-theme) ion-item:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n  --border-color: var(--border-soft);\n}\n\n:host-context(.dark-theme) ion-toolbar:not(.ion-color) {\n  --background: var(--paper);\n  --color: var(--ink);\n}\n\n:host-context(.dark-theme) ion-searchbar {\n  --background: var(--paper);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n  --icon-color: var(--purple);\n  --clear-button-color: var(--muted);\n  --cancel-button-color: var(--purple);\n}\n\n:host-context(.dark-theme) ion-input, :host-context(.dark-theme) ion-textarea, :host-context(.dark-theme) ion-select {\n  color: var(--ink);\n  --color: var(--ink);\n  --placeholder-color: var(--muted);\n}\n\n:host-context(.dark-theme) ion-text[color=light], :host-context(.dark-theme) ion-label[color=darker] {\n  --ion-color-base: var(--ink) !important;\n}\n\n:host-context(.dark-theme) ion-label[color=medium] {\n  --ion-color-base: var(--muted) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5jb21wb25lbnQuc2NzcyIsIl9jYXRhbG9nLWRhcmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5RkFBQTtBQVJGOztBQVdBO0VBQUksc0JBQUE7QUFQSjs7QUFRQTtFQUFJLGNBQUE7RUFBZ0IscUJBQUE7QUFIcEI7O0FBSUE7RUFBZ0IsYUFBQTtBQUFoQjs7QUFDQTtFQUFTLGVBQUE7RUFBaUIsU0FBQTtFQUFXLHVCQUFBO0FBS3JDOztBQUpBO0VBQVksd0NBQUE7QUFRWjs7QUFQQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVJBO0VBQVcsb0JBQUE7RUFBc0IsY0FBQTtBQWFqQzs7QUFaQTtFQUFvQixTQUFBO0VBQVcsY0FBQTtBQWlCL0I7O0FBWkE7RUFDRSxpRUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFlRjs7QUFiRTtFQUFXLGFBQUE7QUFnQmI7O0FBYkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsV0FBQTtFQUNB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Q0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FENndCSjs7QUMzd0JJO0VBQVMsb0JBQUE7QUQ4d0JiOztBQzV3Qkk7RUFBYyw4QkFBQTtFQUFnQyxpQkFBQTtBRGd4QmxEOztBQy93Qkk7RUFBTSw0QkFBQTtBRGt4QlY7O0FDanhCSTtFQUEyQiwwQkFBQTtFQUE0QiwyQkFBQTtBRHF4QjNEOztBQ3B4Qkk7RUFBaUIsaUJBQUE7QUR1eEJyQjs7QUN0eEJJO0VBQW9CLG1CQUFBO0FEeXhCeEI7O0FDeHhCSTtFQUVFLGdEQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBRHl4Qk47O0FDdnhCSTtFQUEyQix1QkFBQTtBRDB4Qi9COztBQ3p4Qkk7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUQyeEJOOztBQ3p4Qkk7RUFBOEIsMEJBQUE7RUFBNEIsbUJBQUE7QUQ2eEI5RDs7QUM1eEJJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0FEOHhCTjs7QUM1eEJJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FEOHhCTjs7QUM1eEJJO0VBQXFELHVDQUFBO0FEK3hCekQ7O0FDOXhCSTtFQUE0Qix5Q0FBQTtBRGl5QmhDIiwiZmlsZSI6ImNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4vY2F0YWxvZy1kYXJrJyBhcyBjYXRhbG9nO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEF2YWxBbW9veiAtIENvdXJzZSAmIFByb2R1Y3QgQ2F0ZWdvcmllcyBEaXJlY3RvcnkgVGhlbWVcclxuLy8gTWF0Y2hlcyBsZWFybmluZy1sYW5kaW5nIHRoZW1lOiBzb2Z0IGxpbGFjL3B1cnBsZSwgc3VubnkgYW1iZXIsIG1pbnQgZW1lcmFsZCxcclxuLy8gcm91bmRlZCBjYXJkcywgYW5kIHdhcm0gUGVyc2lhbiB0eXBvZ3JhcGh5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbjpob3N0IHtcclxuICAtLWluazogIzFlMWI0YjtcclxuICAtLWluay1zZWNvbmRhcnk6ICM0NzU1Njk7XHJcbiAgLS1tdXRlZDogIzY0NzQ4YjtcclxuICAtLXB1cnBsZTogIzZkMjhkOTtcclxuICAtLXB1cnBsZS1kYXJrOiAjNTgxYzg3O1xyXG4gIC0tcHVycGxlLWxpZ2h0OiAjZWRlOWZlO1xyXG4gIC0tcHVycGxlLWdsb3c6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjE2KTtcclxuICAtLWFtYmVyOiAjZjU5ZTBiO1xyXG4gIC0tYW1iZXItZGFyazogI2Q5NzcwNjtcclxuICAtLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xyXG4gIC0tYW1iZXItZ2xvdzogcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTgpO1xyXG4gIC0tZW1lcmFsZDogIzEwYjk4MTtcclxuICAtLWVtZXJhbGQtZGFyazogIzA1OTY2OTtcclxuICAtLWVtZXJhbGQtbGlnaHQ6ICNkMWZhZTU7XHJcbiAgLS1yb3NlOiAjZjQzZjVlO1xyXG4gIC0tcm9zZS1saWdodDogI2ZmZTRlNjtcclxuICAtLXBhcGVyOiAjZmZmZmZmO1xyXG4gIC0tYmctY2FudmFzOiAjZmNmYmZlO1xyXG4gIC0tYm9yZGVyLXNvZnQ6ICNlZGU5ZjY7XHJcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XHJcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgXCJTaGFibmFtLU1lZGl1bVwiLCBcIlZhemlybWF0blwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG5hIHsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5idXR0b24sIGlucHV0IHsgZm9udDogaW5oZXJpdDsgfVxyXG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuYnV0dG9uLCBhIHsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG5idXR0b246Zm9jdXMtdmlzaWJsZSwgYTpmb2N1cy12aXNpYmxlLCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgI2FjODhmMjtcclxuICBvdXRsaW5lLW9mZnNldDogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuaW9uLWljb24geyBwb2ludGVyLWV2ZW50czogbm9uZTsgZmxleC1zaHJpbms6IDA7IH1cclxuaDEsIGgyLCBoMywgaDQsIHAgeyBtYXJnaW46IDA7IGNvbG9yOiBpbmhlcml0OyB9XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUb3AgTmF2aWdhdGlvbiBIZWFkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmxlYXJuaW5nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45NCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg5OSwgNjMsIDE2MywgMC4wNSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA1MDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgJjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcbn1cclxuXHJcbi5uYXYtc2hlbGwge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNzZweDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRhbG9nLXB1cnBsZS1ob3ZlciwgI2RlZDdmYik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gIH1cclxufVxyXG5cclxuLmJyYW5kIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmJyYW5kLWxvZ28td3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJyYW5kLXNwYXJrbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTZweDtcclxuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBhbmltYXRpb246IHNwYXJrbGUtcHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5icmFuZC10aXRsZXMge1xyXG4gIGIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmbGV4OiAxO1xyXG5cclxuICAubmF2LWxpbmstYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHZhcigtLXB1cnBsZSk7IH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUtbmF2IHtcclxuICAgICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQsIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXB1cnBsZSkgMCUsIHZhcigtLXB1cnBsZS1kYXJrKSAxMDAlKSk7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMyKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItc2VhcmNoLWJhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuXHJcbiAgLnNlYXJjaC1pbnB1dC13cmFwIHtcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG5cclxuICAgIGlvbi1pY29uIHsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAyMHB4OyB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBMYXlvdXQgJiBQYWdlIFdyYXBwZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmNhdGVnb3J5LWRpcmVjdG9yeS1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxufVxyXG5cclxuLmJhY2tkcm9wLWdsb3dzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmdsb3ctb3JiIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogYmx1cig4MHB4KTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5nbG93LXB1cnBsZSB7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIGhlaWdodDogNDQwcHg7XHJcbiAgdG9wOiAtMTAwcHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXB1cnBsZS1nbG93KSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLmdsb3ctYW1iZXIge1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBoZWlnaHQ6IDM4MHB4O1xyXG4gIHRvcDogMzUwcHg7XHJcbiAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMTIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdmFyKC0tYW1iZXItZ2xvdyksIHRyYW5zcGFyZW50IDcwJSk7XHJcbn1cclxuXHJcbi5nbG93LWVtZXJhbGQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogMTAlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEyKSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLmZsb2F0aW5nLWRlY29yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG9wYWNpdHk6IDAuMjg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdC1kZWNvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuXHJcbiAgJi5ib29rIHsgdG9wOiAxMTBweDsgaW5zZXQtaW5saW5lLXN0YXJ0OiA0JTsgYW5pbWF0aW9uLWRlbGF5OiAwczsgfVxyXG4gICYuc3RhciB7IHRvcDogMjIwcHg7IGluc2V0LWlubGluZS1lbmQ6IDYlOyBmb250LXNpemU6IDI4cHg7IGNvbG9yOiB2YXIoLS1hbWJlcik7IG9wYWNpdHk6IDAuNTsgYW5pbWF0aW9uLWRlbGF5OiAxLjVzOyB9XHJcbiAgJi5wZW5jaWwgeyB0b3A6IDU4MHB4OyBpbnNldC1pbmxpbmUtc3RhcnQ6IDMlOyBhbmltYXRpb24tZGVsYXk6IDNzOyB9XHJcbiAgJi5zcGFya2xlIHsgdG9wOiA4MDBweDsgaW5zZXQtaW5saW5lLWVuZDogNCU7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyBvcGFjaXR5OiAwLjQ7IGFuaW1hdGlvbi1kZWxheTogNC41czsgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktbWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMzJweCAyNHB4IDA7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEhlcm8gU2VjdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uY2F0ZWdvcnktaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgcGFkZGluZzogNDRweCA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA1KTtcclxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wdXJwbGUpIDAlLCB2YXIoLS1hbWJlcikgNTAlLCB2YXIoLS1lbWVyYWxkKSAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5leWVicm93LXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5leWVicm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgcGFkZGluZzogNXB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcblxyXG4gIC5saXR0bGUtc3RhciB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cclxufVxyXG5cclxuLmhlcm8tY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tZW1lcmFsZC1kYXJrKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHJcbiAgaW9uLWljb24geyBmb250LXNpemU6IDE0cHg7IH1cclxufVxyXG5cclxuLmNhdGVnb3J5LWhlcm8gaDEge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgMy44dncsIDM2cHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuXHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTZweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgc3Ryb2tlOiB2YXIoLS1hbWJlcik7XHJcbiAgICAgIHN0cm9rZS13aWR0aDogMy41O1xyXG4gICAgICBmaWxsOiBub25lO1xyXG4gICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVyby1kZXNjIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOTU7XHJcbiAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gIG1heC13aWR0aDogODIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmhlcm8tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAmLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1hY3Rpb24tZ3JhZGllbnQsIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXB1cnBsZSkgMCUsIHZhcigtLXB1cnBsZS1kYXJrKSAxMDAlKSk7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMThweCB2YXIoLS1wdXJwbGUtZ2xvdyk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMjgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctcHVycGxlLWhvdmVyLCAjZGVkN2ZiKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdyYWRlLXBpbGxzLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG5cclxuICAucGlsbHMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyYWRlLXBpbGwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjFmNWY5KTtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgLnBpbGwtZG90IHtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZW1lcmFsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIENhdGVnb3J5IENhcmRzIEdyaWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmNhdGVnb3J5LWdyaWQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLmNhdGFsb2ctaGVhZGluZy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuXHJcbiAgLnNlY3Rpb24ta2lja2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuXHJcbiAgICAua2lja2VyLXNwYXJrbGUgeyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDIuNnZ3LCAyNnB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICB9XHJcblxyXG4gIC5jb3VudC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdGVnb3JpZXMtY2FyZHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XHJcbiAgZ2FwOiAyNHB4O1xyXG59XHJcblxyXG4uY2F0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA0KTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXB1cnBsZSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMzRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4xKTtcclxuXHJcbiAgICAuY2F0LWNhcmQtbWVkaWEgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXQtY2FyZC1tZWRpYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zb2Z0LCAjZjhmYWZjKTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuY2F0LWNhcmQtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwwLDAsMCkgNjAlLCByZ2JhKDMwLCAyNywgNzUsIDAuMjUpIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmNhdC1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBpbnNldC1pbmxpbmUtZW5kOiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXRhbG9nLXN1cmZhY2UtcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45NCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHJcbiAgICAuYmFkZ2Utc3BhcmsgeyBjb2xvcjogdmFyKC0tYW1iZXIpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0LWNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmspO1xyXG4gICAgbWFyZ2luOiAwIDAgMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgIC5jYXJkLWJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHsgZm9udC1zaXplOiAxNXB4OyB9XHJcblxyXG4gICAgICAmLmNvdXJzZXMtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYWN0aW9uLCB2YXIoLS1wdXJwbGUpKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wcm9kdWN0cy1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWRhcmspO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctYnV5LCB2YXIoLS1lbWVyYWxkKSk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaXJlY3RvcnktZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1NnB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2F0YWxvZy1zdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuXHJcbiAgLmVtcHR5LWljb24geyBmb250LXNpemU6IDQ0cHg7IG1hcmdpbi1ib3R0b206IDEycHg7IH1cclxuICBoMyB7IGZvbnQtc2l6ZTogMTlweDsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6IHZhcigtLWluayk7IG1hcmdpbi1ib3R0b206IDhweDsgfVxyXG4gIHAgeyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU3VwcG9ydGl2ZSBDdXJyaWN1bHVtIFN0cmlwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5zdXBwb3J0aXZlLWN1cnJpY3VsdW0tc3RyaXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgcGFkZGluZzogMjRweCAzMnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wMyk7XHJcblxyXG4gIC5jdXJyaWN1bHVtLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE0cHg7XHJcblxyXG4gICAgLmN1cnItaWNvbiB7XHJcbiAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY3Vyci10ZXh0IHtcclxuICAgICAgYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSZXNwb25zaXZlIEFkanVzdG1lbnRzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5zdXBwb3J0aXZlLWN1cnJpY3VsdW0tc3RyaXAge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LXNoZWxsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICB9XHJcblxyXG4gIC5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWhlcm8ge1xyXG4gICAgcGFkZGluZzogMjhweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3JpZXMtY2FyZHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5jYXQtY2FyZC1ib2R5IC5jYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGFya2xlLXB1bHNlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IG9wYWNpdHk6IDAuNzsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0LWRlY29yIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCk7IH1cclxufVxyXG5cclxuQGluY2x1ZGUgY2F0YWxvZy5kYXJrLW1vZGU7XHJcbiIsIi8vIFBhZ2UtbG9jYWwgY2F0YWxvZyBwYWxldHRlLiBJbXBvcnRlZCBvbmx5IGJ5IGNvdXJzZS9wcm9kdWN0L2FydGljbGUvc2VhcmNoIHJvdXRlcy5cbi8vIEZhbGxiYWNrcyBpbiB0aGUgY29uc3VtaW5nIHN0eWxlcyBwcmVzZXJ2ZSBldmVyeSBvcmlnaW5hbCBsaWdodC1tb2RlIGNvbG9yLlxuQG1peGluIGRhcmstbW9kZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgLS1jYXRhbG9nLXN1cmZhY2U6ICMyMTFjMzI7XG4gICAgLS1jYXRhbG9nLXN1cmZhY2UtcmdiOiAzMywgMjgsIDUwO1xuICAgIC0tY2F0YWxvZy1zb2Z0OiAjMjkyMzNkO1xuICAgIC0tY2F0YWxvZy1ob3ZlcjogIzM0MmM0OTtcbiAgICAtLWNhdGFsb2ctYm9yZGVyOiAjNGI0MTY0O1xuICAgIC0tY2F0YWxvZy10ZXh0OiAjZjJlZWZiO1xuICAgIC0tY2F0YWxvZy1zZWNvbmRhcnk6ICNkMGM4ZTI7XG4gICAgLS1jYXRhbG9nLW11dGVkOiAjYjFhNmM2O1xuICAgIC0tY2F0YWxvZy1wdXJwbGUtc29mdDogIzMwMjM0NztcbiAgICAtLWNhdGFsb2ctcHVycGxlLWhvdmVyOiAjM2QyZDU4O1xuICAgIC0tY2F0YWxvZy1hbWJlci1zb2Z0OiAjM2IyZDE4O1xuICAgIC0tY2F0YWxvZy1lbWVyYWxkLXNvZnQ6ICMxODM3MmU7XG4gICAgLS1jYXRhbG9nLXJvc2Utc29mdDogIzQwMjMzNDtcbiAgICAtLWNhdGFsb2ctc2t5LXNvZnQ6ICMxOTMzNDY7XG4gICAgLS1jYXRhbG9nLXB1cnBsZTogI2M0YjVmZDtcbiAgICAtLWNhdGFsb2ctZW1lcmFsZDogIzZlZTdiNztcbiAgICAtLWNhdGFsb2ctc2t5OiAjN2RkM2ZjO1xuICAgIC0tY2F0YWxvZy1za3ktYWN0aW9uOiAjMDM2OWExO1xuICAgIC0tY2F0YWxvZy1hY3Rpb246ICM3YzNhZWQ7XG4gICAgLS1jYXRhbG9nLWFjdGlvbi1ob3ZlcjogIzZkMjhkOTtcbiAgICAtLWNhdGFsb2ctYWN0aW9uLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkLCAjNWIyMWI2KTtcbiAgICAtLWNhdGFsb2ctYnV5OiAjMDQ3ODU3O1xuICAgIC0tY2F0YWxvZy1idXktZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNDc4NTcsICMwNjVmNDYpO1xuICAgIC0tY2F0YWxvZy1kYW5nZXI6ICNiZTEyM2M7XG4gICAgLS1jYXRhbG9nLWFtYmVyLWFjdGlvbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzkyNDAwZSwgIzc4MzUwZik7XG4gICAgLS1pbms6IHZhcigtLWNhdGFsb2ctdGV4dCk7XG4gICAgLS1pbmstc2Vjb25kYXJ5OiB2YXIoLS1jYXRhbG9nLXNlY29uZGFyeSk7XG4gICAgLS1tdXRlZDogdmFyKC0tY2F0YWxvZy1tdXRlZCk7XG4gICAgLS1wdXJwbGU6IHZhcigtLWNhdGFsb2ctcHVycGxlKTtcbiAgICAtLXB1cnBsZS1kYXJrOiB2YXIoLS1jYXRhbG9nLXB1cnBsZSk7XG4gICAgLS1wdXJwbGUtbGlnaHQ6IHZhcigtLWNhdGFsb2ctcHVycGxlLXNvZnQpO1xuICAgIC0tcHVycGxlLWdsb3c6IHJnYmEoMTY3LCAxMzksIDI1MCwgMC4xNCk7XG4gICAgLS1hbWJlcjogI2ZiYmYyNDtcbiAgICAtLWFtYmVyLWRhcms6ICNmY2QzNGQ7XG4gICAgLS1hbWJlci1saWdodDogdmFyKC0tY2F0YWxvZy1hbWJlci1zb2Z0KTtcbiAgICAtLWFtYmVyLWdsb3c6IHJnYmEoMjUxLCAxOTEsIDM2LCAwLjEpO1xuICAgIC0tZW1lcmFsZDogIzM0ZDM5OTtcbiAgICAtLWVtZXJhbGQtZGFyazogdmFyKC0tY2F0YWxvZy1lbWVyYWxkKTtcbiAgICAtLWVtZXJhbGQtbGlnaHQ6IHZhcigtLWNhdGFsb2ctZW1lcmFsZC1zb2Z0KTtcbiAgICAtLXJvc2U6ICNmZGE0YWY7XG4gICAgLS1yb3NlLWxpZ2h0OiB2YXIoLS1jYXRhbG9nLXJvc2Utc29mdCk7XG4gICAgLS1za3k6IHZhcigtLWNhdGFsb2ctc2t5KTtcbiAgICAtLXNreS1saWdodDogdmFyKC0tY2F0YWxvZy1za3ktc29mdCk7XG4gICAgLS1wYXBlcjogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLWJnLWNhbnZhczogIzE0MTAyMDtcbiAgICAtLWJvcmRlci1zb2Z0OiB2YXIoLS1jYXRhbG9nLWJvcmRlcik7XG4gICAgLS1jYXJkLWJnOiB2YXIoLS1jYXRhbG9nLXN1cmZhY2UpO1xuICAgIC0tY2FyZC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgLS1jb3Vyc2Utc3VyZmFjZTogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLXByb2R1Y3Qtc3VyZmFjZTogdmFyKC0tY2F0YWxvZy1zdXJmYWNlKTtcbiAgICAtLWNvdXJzZS1hY2NlbnQtcmdiOiAxOTYsIDE4MSwgMjUzO1xuICAgIC0tcHJvZHVjdC1hY2NlbnQtcmdiOiAxOTYsIDE4MSwgMjUzO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcblxuICAgIC5icmFuZCB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpOyB9XG5cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tYmctY2FudmFzKTsgY29sb3I6IHZhcigtLWluayk7IH1cbiAgICAuYmcgeyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jYW52YXMpOyB9XG4gICAgaW9uLWNhcmQ6bm90KC5pb24tY29sb3IpIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7IGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlIHsgY29sb3I6IHZhcigtLWluayk7IH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbiAgICBpb24tY2FyZC1oZWFkZXJbY29sb3I9J3ByaW1hcnknXSB7XG4gICAgICAvLyBJb25pYydzIC5pb24tY29sb3ItcHJpbWFyeSBkZWNsYXJlcyB0aGVzZSB0b2tlbnMgd2l0aCAhaW1wb3J0YW50LlxuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tY2F0YWxvZy1zb2Z0KSAhaW1wb3J0YW50O1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWluaykgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmspO1xuICAgIH1cbiAgICBpb24tbGlzdDpub3QoLmlvbi1jb2xvcikgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAgIGlvbi1pdGVtOm5vdCguaW9uLWNvbG9yKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikgeyAtLWJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTsgLS1jb2xvcjogdmFyKC0taW5rKTsgfVxuICAgIGlvbi1zZWFyY2hiYXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgLS1pY29uLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xuICAgICAgLS1jbGVhci1idXR0b24tY29sb3I6IHZhcigtLW11dGVkKTtcbiAgICAgIC0tY2FuY2VsLWJ1dHRvbi1jb2xvcjogdmFyKC0tcHVycGxlKTtcbiAgICB9XG4gICAgaW9uLWlucHV0LCBpb24tdGV4dGFyZWEsIGlvbi1zZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLWluayk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pbmspO1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nbGlnaHQnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrZXInXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWluaykgIWltcG9ydGFudDsgfVxuICAgIGlvbi1sYWJlbFtjb2xvcj0nbWVkaXVtJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1tdXRlZCkgIWltcG9ydGFudDsgfVxuICB9XG59XG5cbi8vIEFuZ3VsYXIgZG9lcyBub3QgYXR0YWNoIGVuY2Fwc3VsYXRpb24gYXR0cmlidXRlcyB0byBjb250ZW50IGluc2VydGVkIGJ5IGlubmVySFRNTC5cbi8vIEtlZXAgZGVlcCBydWxlcyBhbmNob3JlZCB0byBlYWNoIHBhZ2UncyBvd24gZGVzY3JpcHRpb24gY29udGFpbmVyLlxuQG1peGluIHJpY2gtdGV4dCgkY29udGFpbmVyKSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIDo6bmctZGVlcCB7XG4gICAgI3skY29udGFpbmVyfSB7XG4gICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICA6d2hlcmUocCwgc3BhbiwgZGl2LCBsaSwgc3Ryb25nLCBiLCBlbSwgaSwgZm9udCwgdGQsIHRoKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgOndoZXJlKGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYpIHsgY29sb3I6IHZhcigtLWluaykgIWltcG9ydGFudDsgfVxuICAgICAgYSB7IGNvbG9yOiB2YXIoLS1wdXJwbGUpICFpbXBvcnRhbnQ7IH1cbiAgICAgIGJsb2NrcXVvdGUsIHByZSwgY29kZSB7IGJhY2tncm91bmQ6IHZhcigtLWNhdGFsb2ctc29mdCkgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWluaykgIWltcG9ydGFudDsgfVxuICAgICAgdGFibGUsIHRkLCB0aCB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXNvZnQpICFpbXBvcnRhbnQ7IH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 79372:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/course/course.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  \n  <app-page-header titleKey=\"pageHeader.course/course\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"icon-button search-toggle\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو در سامانه\">\r\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      </button>\n</div>\n\n<div class=\"header-search-bar\" *ngIf=\"showSearchbar\">\r\n    <div class=\"search-input-wrap\">\r\n      <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      <input type=\"search\" [(ngModel)]=\"queryText\" [placeholder]=\"'search.academy' | translate\" (keyup.enter)=\"search()\" autofocus />\r\n      <button type=\"button\" class=\"action-btn primary\" (click)=\"search()\">{{ 'common.search' | translate }}</button>\r\n      <button type=\"button\" class=\"action-btn ghost\" (click)=\"onCancel()\">{{ 'search.cancel' | translate }}</button>\r\n    </div>\r\n  </div>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"category-directory-content\" [attr.dir]=\"language.direction\">\r\n  <div class=\"page-wrapper\">\r\n    <!-- Ambient Backdrop Glows -->\r\n    <div class=\"backdrop-glows\" aria-hidden=\"true\">\r\n      <div class=\"glow-orb glow-purple\"></div>\r\n      <div class=\"glow-orb glow-amber\"></div>\r\n      <div class=\"glow-orb glow-emerald\"></div>\r\n    </div>\r\n\r\n    <!-- Playful Floating Elementary Decor -->\r\n    <span class=\"floating-decor book\" aria-hidden=\"true\">📚</span>\r\n    <span class=\"floating-decor star\" aria-hidden=\"true\">✦</span>\r\n    <span class=\"floating-decor pencil\" aria-hidden=\"true\">🎒</span>\r\n    <span class=\"floating-decor sparkle\" aria-hidden=\"true\">✨</span>\r\n\r\n    <main class=\"category-main\">\r\n      <!-- Hero Section -->\r\n      <section class=\"category-hero\">\r\n        <div class=\"hero-shell\">\r\n          <div class=\"eyebrow-wrap\">\r\n            <span class=\"eyebrow\">\r\n              <span class=\"little-star\">✦</span>\r\n              {{ 'brand.name' | translate }}\r\n            </span>\r\n            <span class=\"hero-chip\">\r\n              <ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon>\r\n              پایه اول تا ششم ابتدایی\r\n            </span>\r\n          </div>\r\n\r\n          <h1>\r\n            دسته‌بندی موضوعی دوره‌ها و محصولات:<br />\r\n            <span class=\"highlight\">\r\n              {{ 'catalog.sharedCategories' | translate }}\r\n              <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\r\n                <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\r\n              </svg>\r\n            </span>\r\n          </h1>\r\n\r\n          <p class=\"hero-desc\">\r\n            {{ 'catalog.sharedCategoriesDescription' | translate }}\r\n          </p>\r\n\r\n          <div class=\"hero-actions\">\r\n            <a routerLink=\"/Home/Search\" class=\"button primary glow\">\r\n              <ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon>\r\n              <span>{{ 'catalog.allCourses' | translate }}</span>\r\n              <ion-icon name=\"arrow-back-outline\" aria-hidden=\"true\" class=\"action-arrow\"></ion-icon>\r\n            </a>\r\n            <a routerLink=\"/Product/Search\" class=\"button secondary\">\r\n              <ion-icon name=\"cube-outline\" aria-hidden=\"true\"></ion-icon>\r\n              <span>{{ 'catalog.allProducts' | translate }}</span>\r\n            </a>\r\n          </div>\r\n\r\n          <!-- Grade Level Filter Pills -->\r\n          <div class=\"grade-pills-row\">\r\n            <span class=\"pills-title\">پایه‌های تحصیلی:</span>\r\n            <a routerLink=\"/Home/Search\" [queryParams]=\"{title: 'پایه اول'}\" class=\"grade-pill active\">\r\n              <span class=\"pill-dot\"></span>\r\n              پایه اول ابتدایی\r\n            </a>\r\n            <a routerLink=\"/Home/Search\" [queryParams]=\"{title: 'پایه دوم'}\" class=\"grade-pill\">پایه دوم دبستان</a>\r\n            <a routerLink=\"/Home/Search\" [queryParams]=\"{title: 'پایه سوم'}\" class=\"grade-pill\">پایه سوم دبستان</a>\r\n            <a routerLink=\"/Home/Search\" [queryParams]=\"{title: 'پیش دبستانی'}\" class=\"grade-pill\">پیش‌دبستانی و نوآموزان</a>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Category Cards Grid -->\r\n      <section class=\"category-grid-section\" aria-labelledby=\"grid-title\">\r\n        <div class=\"catalog-heading-row\">\r\n          <div>\r\n            <span class=\"section-kicker\"><span class=\"kicker-sparkle\">✦</span> موضوعات درسی و مهارتی</span>\r\n            <h2 id=\"grid-title\">انتخاب حوزه آموزشی</h2>\r\n          </div>\r\n          <span class=\"count-chip\" *ngIf=\"categories?.length\">\r\n            {{ categories.length }} موضوع درسی\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"categories-cards-grid\" role=\"list\" *ngIf=\"categories?.length\">\r\n          <article class=\"cat-card\" *ngFor=\"let item of categories\" role=\"listitem\">\r\n            <div class=\"cat-card-media\">\r\n              <img [src]=\"item.urlTitle\" [alt]=\"item.title\" loading=\"lazy\" />\r\n              <div class=\"cat-card-overlay\"></div>\r\n              <span class=\"cat-badge\">\r\n                <span class=\"badge-spark\">✦</span>\r\n                آموزش ابتدایی\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"cat-card-body\">\r\n              <h2>{{ item.title }}</h2>\r\n\r\n              <div class=\"cat-card-actions\">\r\n                <a [routerLink]=\"['/Home', 'Search']\" [queryParams]=\"{categoryIds: [item.courseCategoryId], page: 1}\" class=\"card-btn courses-btn\" [attr.aria-label]=\"('nav.courses' | translate) + ' ' + item.title\">\r\n                  <ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  <span>دوره‌های روش تدریس</span>\r\n                </a>\r\n                <a [routerLink]=\"['/Product', 'Search']\" [queryParams]=\"{categoryIds: [item.courseCategoryId], page: 1}\" class=\"card-btn products-btn\" [attr.aria-label]=\"('nav.products' | translate) + ' ' + item.title\">\r\n                  <ion-icon name=\"cube-outline\" aria-hidden=\"true\"></ion-icon>\r\n                  <span>کاربرگ‌ها و ملزومات</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </article>\r\n        </div>\r\n\r\n        <!-- Loading State -->\r\n        <div class=\"directory-empty-state\" *ngIf=\"!categoriesLoaded\">\r\n          <ion-spinner name=\"bubbles\" color=\"primary\"></ion-spinner>\r\n          <span>در حال بارگذاری موضوعات درسی...</span>\r\n        </div>\r\n\r\n        <!-- Empty State -->\r\n        <div class=\"directory-empty-state\" *ngIf=\"categoriesLoaded && !categories.length\">\r\n          <div class=\"empty-icon\">🎒</div>\r\n          <h3>موضوعی یافت نشد</h3>\r\n          <p>{{ 'catalog.noCategories' | translate }}</p>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Bottom Supportive Strip -->\r\n      <section class=\"supportive-curriculum-strip\">\r\n        <div class=\"curriculum-item\">\r\n          <div class=\"curr-icon\"><ion-icon name=\"ribbon-outline\"></ion-icon></div>\r\n          <div class=\"curr-text\">\r\n            <b>منطبق بر کتب رسمی آموزش و پرورش</b>\r\n            <small>سرفصل‌های به‌روز کتب درسی فارسی، ریاضی و علوم</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"curriculum-item\">\r\n          <div class=\"curr-icon\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\r\n          <div class=\"curr-text\">\r\n            <b>فایل‌های باکیفیت و آماده چاپ</b>\r\n            <small>کاربرگ‌ها بدون تبلیغ و واترمارک برای استفاده در کلاس</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"curriculum-item\">\r\n          <div class=\"curr-icon\"><ion-icon name=\"people-outline\"></ion-icon></div>\r\n          <div class=\"curr-text\">\r\n            <b>آموزگاران و مدرسین باسابقه</b>\r\n            <small>تدریس توسط مدرسین سرآمد و سرگروه‌های کشوری</small>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </main>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_pipe_price_module_ts-src_app_view_pages_course_course_module_ts.js.map